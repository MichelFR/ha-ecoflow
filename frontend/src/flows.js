/* Shared lottie flow-animation lifecycle for the energy-flow illustration.
 *
 * The house render and the space view both draw the same animated grid / solar
 * / home / battery flows over the house image (the reverse-engineered app
 * Lotties). This controller owns those lottie instances: it mounts each lazily
 * on first activation, then keeps it (paused when idle) so we never churn
 * instances on every state update, and destroys them on teardown.
 *
 * Flows are grouped into THEMES, one per device family — the selected battery
 * render picks the theme (see flowTheme in houses.js):
 *   - re_space : the original Stream set the card shipped with
 *   - bk621    : STREAM Ultra / Ultra X (battery) — bkseriesmodule
 *   - bk620    : STREAM AC / Microinverter (no battery)
 * Each theme lists its layers; the host renders one `data-flow="<key>"`
 * container per key (a superset across themes), computes the live `states`, and
 * calls sync(). Containers whose key isn't in the active theme are hidden. */

import lottie from "lottie-web/build/player/lottie_light";
import { FLOWS, flowUrl, solarFlowName, bkRoute, poRoute } from "./houses.js";

// Power magnitude (W) below which a path is treated as idle (no flow shown).
export const ACTIVE_W = 1;

/* Derive the BK grid/home/device split the flow themes need from the raw
 * readings. Mirrors SystemEnergyView: the home draws from the grid (gridToHome)
 * and from the device's PV+battery (deviceToHome); the grid charges the battery
 * (chargeFromGrid) and the device exports its surplus to the grid.
 *
 * The grid<->device flows are derived from PHYSICAL signals, not from the
 * Stream's own grid-port reading (grid_power): that port is a different,
 * much smaller metering domain than the system load_from_* values, so deriving
 * the battery flow from it produced phantom flows whenever the home drew from
 * the grid while the battery sat idle (a spurious device->grid export, then —
 * once that was "fixed" — a spurious grid->device charge).
 *
 *   chargeFromGrid : the battery's charge power not already covered by the PV
 *                    surplus -> the grid is charging the battery. An idle
 *                    battery (bat <= 0) yields 0, so no grid->device flow is
 *                    ever shown when the battery isn't charging; a PV-only
 *                    charge also yields 0.
 *   gridToHome     : load_from_grid (the part of the home load met by the grid).
 *   deviceToHome   : load met by PV + battery.
 *   exportToGrid   : the device's true feed-in to the utility — the PV surplus
 *                    the battery doesn't absorb, plus any discharge beyond the
 *                    home's draw. The device's own grid port reads negative
 *                    whenever it feeds the HOME too, so gating the export line
 *                    on the port sign showed a phantom device->grid flow (e.g.
 *                    while PV charges the battery and covers the load).
 *
 * When the load_from_* sensors aren't available we fall back to the old
 * single-meter split. Pass-through fields (solar/bat/soc/route) are kept for the
 * re_space theme, which ignores the derived ones. */
export function deriveFlowStates(s) {
  const grid = Number.isFinite(s.grid) ? s.grid : 0;
  const load = Number.isFinite(s.load) ? s.load : 0;
  const solar = Number.isFinite(s.solar) ? s.solar : 0;
  const bat = Number.isFinite(s.bat) ? s.bat : 0;
  const hasSplit = Number.isFinite(s.loadFromGrid);

  const gridToHome = hasSplit
    ? Math.max(0, s.loadFromGrid)
    : Math.max(0, Math.min(grid, load));
  const deviceToHome =
    Number.isFinite(s.loadFromPv) || Number.isFinite(s.loadFromBat)
      ? (s.loadFromPv || 0) + (s.loadFromBat || 0)
      : Math.max(0, load - gridToHome);

  const batCharge = Math.max(0, bat); // bat: + charging, - discharging
  const batDischarge = Math.max(0, -bat);
  const pvSurplus = Math.max(0, solar - Math.max(0, s.loadFromPv || 0));
  const chargeFromGrid = hasSplit
    ? Math.max(0, batCharge - pvSurplus)
    : Math.max(0, grid - gridToHome);
  const exportToGrid = hasSplit
    ? Math.max(0, pvSurplus - batCharge) +
      Math.max(0, batDischarge - Math.max(0, s.loadFromBat || 0))
    : Math.max(0, -grid);

  return { ...s, gridToHome, deviceToHome, chargeFromGrid, exportToGrid };
}

/* A layer: { key, zone, file(states), active(states), mode?, seek? }.
 *   zone "bg"  -> drawn behind the battery box (grid / solar / home routes)
 *   zone "on"  -> drawn on the box (SoC fill + charge/discharge glow); only when
 *                 the chosen render has matching overlays (batOverlays).
 *   mode "seek" -> the lottie is a 0..101 fill seeked to seek(states), not played.
 *
 * BK grid model (mirrors SystemEnergyView): grid splits into the part feeding the
 * home (gridToHome) and the part to/from the device (gridToDevice, + charging /
 * - exporting); device->home is the load met by PV+battery (deviceToHome). */
export const FLOW_THEMES = {
  re_space: {
    layers: [
      { key: "solar", zone: "bg", file: (s) => solarFlowName(s.route), active: (s) => s.solar > ACTIVE_W },
      { key: "grid_in", zone: "bg", file: () => FLOWS.grid_in, active: (s) => s.grid > ACTIVE_W },
      { key: "grid_out", zone: "bg", file: () => FLOWS.grid_out, active: (s) => s.grid < -ACTIVE_W },
      { key: "home", zone: "bg", file: () => FLOWS.home, active: (s) => s.load > ACTIVE_W },
      { key: "bat_in", zone: "bg", file: () => FLOWS.bat_in, active: (s) => s.bat > ACTIVE_W },
      { key: "bat_out", zone: "bg", file: () => FLOWS.bat_out, active: (s) => s.bat < -ACTIVE_W },
      { key: "bat_soc", zone: "on", file: () => FLOWS.bat_soc, mode: "seek", seek: (s) => s.soc, active: (s) => s.soc != null },
      { key: "bat_chg", zone: "on", file: () => FLOWS.bat_chg, active: (s) => s.bat > ACTIVE_W },
      { key: "bat_dsg", zone: "on", file: () => FLOWS.bat_dsg, active: (s) => s.bat < -ACTIVE_W },
    ],
  },
  bk621: {
    layers: [
      { key: "solar", zone: "bg", file: (s) => `bk621/house_solar_lottie_${bkRoute(s.route)}`, active: (s) => s.solar > ACTIVE_W },
      { key: "grid_in", zone: "bg", file: () => "bk621/grid_to_device_lottie", active: (s) => s.chargeFromGrid > ACTIVE_W },
      { key: "grid_out", zone: "bg", file: () => "bk621/device_to_grid_lottie", active: (s) => s.exportToGrid > ACTIVE_W },
      { key: "grid_home", zone: "bg", file: () => "bk621/grid_to_home_lottie", active: (s) => s.gridToHome > ACTIVE_W },
      { key: "home", zone: "bg", file: (s) => `bk621/house_device_home_lottie_${bkRoute(s.route)}`, active: (s) => s.deviceToHome > ACTIVE_W },
      { key: "bat_soc", zone: "on", file: () => "bk621/house_soc_lottie", mode: "seek", seek: (s) => s.soc, active: (s) => s.soc != null },
      { key: "bat_chg", zone: "on", file: () => "bk621/house_soc_charging_lottie", active: (s) => s.bat > ACTIVE_W },
      { key: "bat_dsg", zone: "on", file: () => "bk621/house_soc_discharging_lottie", active: (s) => s.bat < -ACTIVE_W },
    ],
  },
  bk620: {
    layers: [
      { key: "solar", zone: "bg", file: (s) => `bk620/house_solar_lottie_${bkRoute(s.route)}`, active: (s) => s.solar > ACTIVE_W },
      { key: "grid_out", zone: "bg", file: () => "bk621/device_to_grid_lottie", active: (s) => s.exportToGrid > ACTIVE_W },
      { key: "grid_home", zone: "bg", file: () => "bk621/grid_to_home_lottie", active: (s) => s.gridToHome > ACTIVE_W },
      { key: "home", zone: "bg", file: () => "bk620/house_device_home_lottie", active: (s) => s.deviceToHome > ACTIVE_W },
    ],
  },
  // PowerOcean (NewPOSystemEnergyView). Single-battery: grid by sign, like
  // re_space, plus a seek-to-backup_reserve overlay. re305 = E7 battery, re306 =
  // DPU (Delta Pro Ultra); both share the OceanPro grid/solar/home routes.
  re305: {
    layers: [
      { key: "solar", zone: "bg", file: (s) => `re305/Space_Style${poRoute(s.route)}_Solar_OceanPro_Com`, active: (s) => s.solar > ACTIVE_W },
      { key: "grid_in", zone: "bg", file: () => "re305/Space_Com_GridIn_OceanProOceanPanel_Com", active: (s) => s.grid > ACTIVE_W },
      { key: "grid_out", zone: "bg", file: () => "re305/Space_Com_GridOut_OceanProAdvanced_Com", active: (s) => s.grid < -ACTIVE_W },
      { key: "home", zone: "bg", file: () => "re305/Space_Com_DeviceToHome_OceanPro_Com", active: (s) => s.load > ACTIVE_W },
      { key: "bat_in", zone: "bg", file: () => "re305/OceanPro_E7_Bat_In_Lottie", active: (s) => s.bat > ACTIVE_W },
      { key: "bat_out", zone: "bg", file: () => "re305/OceanPro_E7_Bat_Out_Lottie", active: (s) => s.bat < -ACTIVE_W },
      { key: "bat_soc", zone: "on", file: () => "re305/OceanPro_E7_BatSoc_Lottie", mode: "seek", seek: (s) => s.soc, active: (s) => s.soc != null },
      { key: "bat_chg", zone: "on", file: () => "re305/OceanPro_E7_Bat_Charging_Lottie", active: (s) => s.bat > ACTIVE_W },
      { key: "bat_dsg", zone: "on", file: () => "re305/OceanPro_E7_Bat_Discharging_Lottie", active: (s) => s.bat < -ACTIVE_W },
      { key: "bat_backup", zone: "on", file: () => "re305/OceanPro_E7_Bat_Backup_Ratio_Lottie", mode: "seek", seek: (s) => s.backup, active: (s) => s.backup > 0 && s.backup < 100 },
    ],
  },
  re306: {
    layers: [
      { key: "solar", zone: "bg", file: (s) => `re305/Space_Style${poRoute(s.route)}_Solar_OceanPro_Com`, active: (s) => s.solar > ACTIVE_W },
      { key: "grid_in", zone: "bg", file: () => "re305/Space_Com_GridIn_OceanProOceanPanel_Com", active: (s) => s.grid > ACTIVE_W },
      { key: "grid_out", zone: "bg", file: () => "re305/Space_Com_GridOut_OceanProAdvanced_Com", active: (s) => s.grid < -ACTIVE_W },
      { key: "home", zone: "bg", file: () => "re305/Space_Com_DeviceToHome_OceanPro_Com", active: (s) => s.load > ACTIVE_W },
      { key: "bat_in", zone: "bg", file: () => "re306/OceanPro_Panel_DpuBat_In_Lottie", active: (s) => s.bat > ACTIVE_W },
      { key: "bat_out", zone: "bg", file: () => "re306/OceanPro_Panel_DpuBat_Out_Lottie", active: (s) => s.bat < -ACTIVE_W },
      { key: "bat_soc", zone: "on", file: () => "re306/OceanPro_Panel_DpuBatSoc_Lottie", mode: "seek", seek: (s) => s.soc, active: (s) => s.soc != null },
      { key: "bat_chg", zone: "on", file: () => "re306/OceanPro_Panel_DpuBat_Charging_Lottie", active: (s) => s.bat > ACTIVE_W },
      { key: "bat_dsg", zone: "on", file: () => "re306/OceanPro_Panel_DpuBat_Discharging_Lottie", active: (s) => s.bat < -ACTIVE_W },
    ],
  },
};

export class FlowController {
  constructor() {
    // key -> { anim, file, ready, mode, seek, active, states, lastSeek } for
    // each mounted flow Lottie.
    this._anims = {};
    // Playback only runs while the stage is actually watchable: the page is
    // visible, the stage intersects the viewport, and the user hasn't asked
    // for reduced motion. Lottie runs on rAF, which only throttles when the
    // whole tab hides — in the HA app the dashboard stays foreground, so an
    // off-screen card would otherwise keep animating (and burning CPU) forever.
    this._stageVisible = true;
    this._pageVisible = typeof document === "undefined" || !document.hidden;
    this._reducedMotion = false;
    this._observer = null;
    this._observed = null;
    this._onPageVis = null;
    this._motionMq = null;
    this._onMotion = null;
  }

  /* Mount/play/pause every flow to match the current scene.
   * opts = { hass, theme, showFlows, batOverlays, states }. */
  sync(renderRoot, { hass, theme, showFlows, batOverlays, states }) {
    if (!renderRoot) return;
    const layers = (FLOW_THEMES[theme] || FLOW_THEMES.re_space).layers;
    const used = new Set();
    for (const def of layers) {
      const container = renderRoot.querySelector(`[data-flow="${def.key}"]`);
      if (!container) continue;
      this._watch(container.parentElement);
      used.add(def.key);
      const active = showFlows && def.active(states) && (def.zone !== "on" || batOverlays);
      this._setFlow(hass, container, def, active, states);
    }
    // Hide any container whose key isn't in the active theme (pause its lottie).
    for (const container of renderRoot.querySelectorAll("[data-flow]")) {
      if (used.has(container.dataset.flow)) continue;
      const rec = this._anims[container.dataset.flow];
      if (rec) {
        rec.active = false;
        rec.anim?.pause();
      }
      container.style.opacity = "0";
    }
  }

  destroy() {
    for (const rec of Object.values(this._anims)) rec.anim?.destroy();
    this._anims = {};
    this._observer?.disconnect();
    this._observer = null;
    this._observed = null;
    if (this._onPageVis) {
      document.removeEventListener("visibilitychange", this._onPageVis);
      this._onPageVis = null;
    }
    if (this._motionMq && this._onMotion) {
      this._motionMq.removeEventListener?.("change", this._onMotion);
    }
    this._motionMq = null;
    this._onMotion = null;
    this._stageVisible = true;
  }

  /* Bind the visibility signals to the stage element (the flows' shared
   * parent). Idempotent; re-binds if the stage node was re-created. */
  _watch(stage) {
    if (!this._onPageVis) {
      this._pageVisible = !document.hidden;
      this._onPageVis = () => {
        this._pageVisible = !document.hidden;
        this._applyAll();
      };
      document.addEventListener("visibilitychange", this._onPageVis);
      this._motionMq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
      if (this._motionMq) {
        this._reducedMotion = this._motionMq.matches;
        this._onMotion = (e) => {
          this._reducedMotion = e.matches;
          this._applyAll();
        };
        this._motionMq.addEventListener?.("change", this._onMotion);
      }
    }
    if (!stage || stage === this._observed) return;
    if (typeof IntersectionObserver === "undefined") return;
    this._observer?.disconnect();
    this._observer = new IntersectionObserver((entries) => {
      this._stageVisible = entries[entries.length - 1].isIntersecting;
      this._applyAll();
    });
    this._observer.observe(stage);
    this._observed = stage;
  }

  _canRender() {
    return this._stageVisible && this._pageVisible;
  }

  _applyAll() {
    for (const rec of Object.values(this._anims)) this._applyFlow(rec);
  }

  _setFlow(hass, container, def, active, states) {
    const key = def.key;
    const file = def.file(states);
    const mode = def.mode || "play";
    let rec = this._anims[key];

    // Mount lazily on first activation; reload only if the chosen file changed
    // (e.g. the solar route or a theme switch), or the container was re-created
    // (lit rebuilds the stage when the space card returns from another tab,
    // which would leave the lottie playing in a detached node).
    if (active && (!rec || rec.file !== file || rec.anim?.wrapper !== container)) {
      rec?.anim?.destroy();
      const anim = lottie.loadAnimation({
        container,
        renderer: "svg",
        loop: mode !== "seek",
        autoplay: false,
        path: flowUrl(file, hass),
        // Top-align like the house image so the scene keeps a clear band at the
        // bottom for the battery readout (see the stage's aspect ratio).
        rendererSettings: { preserveAspectRatio: "xMidYMin meet" },
      });
      // Render at the lottie's own frame rate (~25-30fps) instead of every
      // rAF tick — on a 120Hz phone subframe rendering would repaint the SVG
      // 120x/s per flow, which is the main mobile heat source.
      anim.setSubframe(false);
      rec = this._anims[key] = { anim, file, ready: false, mode, seek: def.seek };
      anim.addEventListener("DOMLoaded", () => {
        rec.ready = true;
        this._applyFlow(rec);
      });
    }

    if (rec) {
      rec.seek = def.seek;
      rec.active = active;
      rec.states = states;
      this._applyFlow(rec);
    }
    container.style.opacity = active ? "1" : "0";
  }

  _applyFlow(rec) {
    if (!rec.ready) return;
    if (rec.mode === "seek") {
      // Skip while hidden; _applyAll re-seeks when the stage comes back.
      if (!this._canRender()) return;
      // 0..100% -> the fill animation's frames (the SoC lotties span 0..101).
      const frame = Math.max(0, Math.min(100, rec.seek?.(rec.states) ?? 0));
      if (frame === rec.lastSeek) return; // unchanged: don't redraw the SVG
      rec.lastSeek = frame;
      rec.anim.goToAndStop(frame, true);
      return;
    }
    if (rec.active && this._canRender() && !this._reducedMotion) rec.anim.play();
    else rec.anim.pause();
  }
}
