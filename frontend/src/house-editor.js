/* Visual editor for the EcoFlow House Card, styled after the Energy card's
 * editor: the root shows the device picker and a list of setting groups, and
 * each group opens a subpage. Pages cover the look (house style, day/night,
 * custom uploads), the display toggles, the battery render, and optional entity
 * overrides for the values that drive the scene. */

import { LitElement, html, css } from "lit";
import { HOUSE_CARD_TYPE, PLATFORM } from "./const.js";
import {
  editorStyles,
  renderBatteryGallery,
  renderGridSourceSelect,
  renderHouseGallery,
  renderModeButtons,
  renderNav,
  renderSubpageHead,
  renderToggle,
} from "./editor-common.js";
import { entityMap, streamDevices } from "./entities.js";
import { isEntityId, isTemplate } from "./format.js";
import { ensureHaComponents } from "./ha-components.js";
import { localize } from "./localize.js";
import {
  DEFAULT_BATTERY,
  DEFAULT_HOUSE_MODE,
  DEFAULT_HOUSE_STYLE,
  hasCustomHouseImage,
  houseAssetFiles,
} from "./houses.js";
import { panelsSummary, renderPanelsEditorPage } from "./views/panels-editor.js";
import { buildZip } from "./zip.js";

const DEVICE_SCHEMA = [
  { name: "device", selector: { device: { integration: PLATFORM } } },
];

const PAGES = [
  { id: "appearance", icon: "mdi:palette-outline" },
  { id: "display", icon: "mdi:eye-outline" },
  { id: "battery", icon: "mdi:home-battery-outline" },
  { id: "panels", icon: "mdi:solar-panel" },
  { id: "entities", icon: "mdi:tune-variant" },
];

// Display toggles (on the "display" page): [config key, default, icon].
const TOGGLES = [
  ["oled", false, "mdi:brightness-2"],
  ["show_flows", true, "mdi:transit-connection-variant"],
  ["show_grid", true, "mdi:transmission-tower"],
  ["show_solar", true, "mdi:solar-power-variant"],
  ["show_home", true, "mdi:home-lightning-bolt"],
  ["show_battery", true, "mdi:home-battery"],
];

// Entity slots the scene reads (on the "entities" page); each offers an
// optional override.
const SLOTS = [
  ["sensor.sys_grid_power", "mdi:transmission-tower"],
  ["sensor.pv_total", "mdi:solar-power-variant"],
  ["sensor.sys_load", "mdi:home-lightning-bolt"],
  ["sensor.bat_power", "mdi:battery-charging"],
  ["sensor.cms_batt_soc", "mdi:battery-high"],
];

// The two custom-image slots: [config key, translation suffix, icon].
const CUSTOM_VARIANTS = [
  ["house_image", "light", "mdi:white-balance-sunny"],
  ["house_image_dark", "dark", "mdi:weather-night"],
];

export class EcoFlowHouseCardEditor extends LitElement {
  static get properties() {
    return {
      hass: {},
      _config: {},
      _page: { state: true },
      _zipping: { state: true },
      _uploading: { state: true },
    };
  }

  constructor() {
    super();
    this._config = {}; // HA may render (after .hass) before setConfig runs
    this._page = null; // null = root, otherwise a PAGES id
    this._zipping = false;
    this._uploading = null; // the config key currently being uploaded, or null
  }

  connectedCallback() {
    super.connectedCallback();
    ensureHaComponents();
  }

  setConfig(config) {
    this._config = config || {};
  }

  _t(key, vars) {
    return localize(this.hass, key, vars);
  }

  _defaults() {
    const devices = streamDevices(this.hass);
    const device =
      (this._config.device &&
        devices.find((d) => d.deviceId === this._config.device)) ||
      devices[0];
    return device ? entityMap(this.hass, device.ents) : {};
  }

  render() {
    if (!this.hass) return html``;
    const page = PAGES.find((p) => p.id === this._page);
    return page ? this._renderSubpage(page) : this._renderRoot();
  }

  /* -- root: device picker + settings list -- */

  _renderRoot() {
    return html`<ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${DEVICE_SCHEMA}
        .computeLabel=${() => this._t("editor.device")}
        @value-changed=${this._deviceChanged}
      ></ha-form>
      ${renderNav(
        this,
        PAGES,
        (id) => this._t(`house.page.${id}`),
        (id) => this._summary(id)
      )}`;
  }

  _summary(pageId) {
    if (pageId === "appearance") {
      if (hasCustomHouseImage(this._config)) return this._t("house.editor.custom");
      const style = this._config.house || DEFAULT_HOUSE_STYLE;
      const mode = this._config.house_mode || DEFAULT_HOUSE_MODE;
      return `${this._t("house.editor.style_n", { n: style })} · ${this._t(
        `house.mode.${mode}`
      )}`;
    }
    if (pageId === "display") {
      const shown = TOGGLES.filter(([key, def]) => this._config[key] ?? def);
      if (!shown.length) return this._t("editor.nothing_shown");
      return shown.map(([key]) => this._t(`house.short.${key}`)).join(", ");
    }
    if (pageId === "battery") {
      const on = this._config.show_battery ?? true;
      const name = this._t(`house.battery.${this._config.battery || DEFAULT_BATTERY}`);
      return on ? name : this._t("editor.nothing_shown");
    }
    if (pageId === "panels") {
      return panelsSummary(this);
    }
    if (pageId === "entities") {
      const n = SLOTS.filter(([slot]) => this._config.entities?.[slot]).length;
      return n ? this._t("editor.overridden", { n }) : this._t("editor.automatic");
    }
    return "";
  }

  /* -- subpages -- */

  _renderSubpage(page) {
    return html`${renderSubpageHead(this, this._t(`house.page.${page.id}`))}
      ${page.id === "appearance"
        ? this._renderAppearancePage()
        : page.id === "display"
          ? html`${TOGGLES.map(([key, def, icon]) =>
              renderToggle(this, this._t(`house.toggle.${key}`), key, def, icon)
            )}${renderGridSourceSelect(this)}`
          : page.id === "battery"
            ? this._renderBatteryPage()
            : page.id === "panels"
              ? renderPanelsEditorPage(this, HOUSE_CARD_TYPE)
              : this._renderEntitiesPage()}`;
  }

  /* -- appearance: house style gallery, day/night, custom uploads -- */

  _renderAppearancePage() {
    const style = this._config.house || DEFAULT_HOUSE_STYLE;
    const customImage = hasCustomHouseImage(this._config);
    const mode = this._config.house_mode || DEFAULT_HOUSE_MODE;

    return html`<div class="section">
        <ha-icon icon="mdi:home-outline"></ha-icon>${this._t("house.editor.style")}
      </div>
      ${renderHouseGallery(this, customImage ? null : style, (key) =>
        this._selectHouse(key)
      )}

      <div class="section">
        <ha-icon icon="mdi:theme-light-dark"></ha-icon>${this._t("house.editor.mode")}
      </div>
      ${renderModeButtons(this, mode, (m) =>
        this._set("house_mode", m, DEFAULT_HOUSE_MODE)
      )}

      <div class="section">
        <ha-icon icon="mdi:image-edit-outline"></ha-icon>${this._t("house.editor.custom")}
      </div>
      <div class="hint">${this._t("house.editor.custom_hint")}</div>
      ${CUSTOM_VARIANTS.map(([key, suffix, icon]) =>
        this._renderUploadSlot(key, suffix, icon)
      )}
      <button
        class="link-btn"
        ?disabled=${this._zipping}
        @click=${this._downloadHouses}
      >
        <ha-icon icon=${this._zipping ? "mdi:progress-download" : "mdi:download"}></ha-icon>
        <span
          >${this._zipping
            ? this._t("house.editor.preparing")
            : this._t("house.editor.download_zip")}</span
        >
      </button>`;
  }

  _renderUploadSlot(key, suffix, icon) {
    const value = this._config[key] || "";
    const busy = this._uploading === key;
    const label = this._t(`house.editor.custom_${suffix}`);
    return html`<div class="upload-slot">
      <div class="upload-slot-label">
        <ha-icon icon=${icon}></ha-icon><span>${label}</span>
      </div>
      ${value
        ? html`<div class="custom-img">
            <img src=${value} alt="" />
            <button class="link-btn danger" @click=${() => this._set(key, "", "")}>
              <ha-icon icon="mdi:delete-outline"></ha-icon>
              <span>${this._t("house.editor.custom_remove")}</span>
            </button>
          </div>`
        : html`<label class="upload ${busy ? "busy" : ""}">
            <ha-icon icon=${busy ? "mdi:progress-upload" : "mdi:image-plus"}></ha-icon>
            <span>${busy ? this._t("house.editor.uploading") : label}</span>
            <input
              type="file"
              accept="image/png,image/jpeg,image/webp,image/gif"
              ?disabled=${this._uploading}
              @change=${(ev) => this._pickCustomImage(ev, key)}
            />
          </label>`}
    </div>`;
  }

  /* -- battery: device render gallery -- */

  _renderBatteryPage() {
    const battery = this._config.battery || DEFAULT_BATTERY;
    const batteryOn = this._config.show_battery ?? true;
    return html`<div class="hint top-hint">${this._t("house.editor.battery_hint")}</div>
      ${renderBatteryGallery(
        this,
        battery,
        (key) => this._set("battery", key, DEFAULT_BATTERY),
        !batteryOn
      )}`;
  }

  /* -- entities: optional sensor overrides -- */

  _renderEntitiesPage() {
    return html`<div class="hint top-hint">${this._t("house.editor.entities_hint")}</div>
      ${SLOTS.map(([slot, icon]) => this._renderSlot(slot, icon))}`;
  }

  _renderSlot(slot, icon) {
    const override = this._config.entities?.[slot] || "";
    const auto = this._defaults()[slot];
    const value = isEntityId(override) && !isTemplate(override) ? override : "";
    return html`<div class="slot">
      <ha-icon icon=${icon}></ha-icon>
      <ha-form
        class="slot-form"
        .hass=${this.hass}
        .data=${{ value }}
        .schema=${[{ name: "value", selector: { entity: {} } }]}
        .computeLabel=${() =>
          `${this._t(`slot.${slot}`)}${auto ? ` (${this._t("editor.auto_value", { value: auto })})` : ""}`}
        @value-changed=${(ev) => {
          ev.stopPropagation();
          this._setOverride(slot, ev.detail.value.value || "");
        }}
      ></ha-form>
    </div>`;
  }

  /* -- config plumbing (only deviations from defaults are persisted) -- */

  _deviceChanged(ev) {
    ev.stopPropagation();
    const config = { ...this._config, ...ev.detail.value, type: `custom:${HOUSE_CARD_TYPE}` };
    if (!config.device) delete config.device;
    this._dispatch(config);
  }

  _set(key, value, def) {
    const config = { ...this._config, type: `custom:${HOUSE_CARD_TYPE}` };
    if (value === def || value === "" || value == null) delete config[key];
    else config[key] = value;
    this._dispatch(config);
  }

  /* Picking a built-in style clears any custom image so the built-in shows. */
  _selectHouse(key) {
    const config = { ...this._config, type: `custom:${HOUSE_CARD_TYPE}` };
    delete config.house_image;
    delete config.house_image_dark;
    if (key === DEFAULT_HOUSE_STYLE) delete config.house;
    else config.house = key;
    this._dispatch(config);
  }

  /* Upload straight to the image_upload integration (the same endpoint HA's own
     picture upload uses) and store the full-resolution serve URL. Done by hand
     rather than via <ha-picture-upload>, which is lazy-loaded and not reliably
     registered for a bundled custom card. */
  async _pickCustomImage(ev, key) {
    const file = ev.target.files?.[0];
    ev.target.value = "";
    if (!file || this._uploading) return;
    this._uploading = key;
    try {
      const fd = new FormData();
      fd.append("file", file);
      const resp = await this.hass.fetchWithAuth("/api/image/upload", {
        method: "POST",
        body: fd,
      });
      if (!resp.ok) throw new Error(`upload failed: ${resp.status}`);
      const media = await resp.json();
      this._set(key, `/api/image/serve/${media.id}/original`, "");
    } catch (err) {
      console.error("EcoFlow House card: image upload failed", err);
    } finally {
      this._uploading = null;
    }
  }

  /* Bundle every house render into a zip so the user can trace one into their
     own illustration (the card expects the 2340×1680 layout). */
  async _downloadHouses() {
    if (this._zipping) return;
    this._zipping = true;
    try {
      const files = await Promise.all(
        houseAssetFiles(this.hass).map(async ({ name, url }) => {
          const res = await fetch(url);
          if (!res.ok) throw new Error(`${url}: ${res.status}`);
          return { name, data: new Uint8Array(await res.arrayBuffer()) };
        })
      );
      const url = URL.createObjectURL(buildZip(files));
      const a = document.createElement("a");
      a.href = url;
      a.download = "ecoflow-house-images.zip";
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("EcoFlow House card: failed to build zip", err);
    } finally {
      this._zipping = false;
    }
  }

  _setOverride(slot, value) {
    const entities = { ...(this._config.entities || {}) };
    if (!value) delete entities[slot];
    else entities[slot] = value;
    const config = { ...this._config, entities, type: `custom:${HOUSE_CARD_TYPE}` };
    if (!Object.keys(entities).length) delete config.entities;
    this._dispatch(config);
  }

  _dispatch(config) {
    this._config = config;
    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config },
        bubbles: true,
        composed: true,
      })
    );
  }

  static get styles() {
    return [
      editorStyles,
      css`
      .upload-slot {
        margin-bottom: 12px;
      }
      .upload-slot-label {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 0.9em;
        color: var(--primary-text-color);
        margin: 0 2px 6px;
      }
      .upload-slot-label ha-icon {
        --mdc-icon-size: 18px;
        color: var(--secondary-text-color);
      }
      .link-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        margin: 10px 0 4px;
        border: none;
        background: transparent;
        color: var(--primary-color);
        padding: 6px 4px;
        cursor: pointer;
        font-size: 0.9em;
      }
      .link-btn:hover:not([disabled]) {
        text-decoration: underline;
      }
      .link-btn[disabled] {
        opacity: 0.6;
        cursor: default;
      }
      .link-btn ha-icon {
        --mdc-icon-size: 18px;
      }
      .link-btn.danger {
        color: var(--error-color, #db4437);
      }
      .upload {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        border: 2px dashed var(--divider-color, rgba(127, 127, 127, 0.4));
        border-radius: 12px;
        background: var(--secondary-background-color);
        color: var(--primary-text-color);
        padding: 18px 12px;
        cursor: pointer;
        transition: border-color 0.15s ease, filter 0.15s ease;
      }
      .upload:hover {
        border-color: var(--primary-color);
      }
      .upload.busy {
        pointer-events: none;
        opacity: 0.7;
      }
      .upload ha-icon {
        --mdc-icon-size: 22px;
        color: var(--secondary-text-color);
      }
      .upload input {
        display: none;
      }
      .custom-img {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
      }
      .custom-img img {
        width: 100%;
        max-width: 320px;
        aspect-ratio: 2340 / 1680;
        object-fit: contain;
        border-radius: 10px;
        border: 2px solid var(--primary-color);
        background: var(--secondary-background-color);
      }
      .slot {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .slot > ha-icon {
        --mdc-icon-size: 20px;
        color: var(--secondary-text-color);
        flex: 0 0 auto;
      }
      .slot-form {
        flex: 1;
        margin-bottom: 8px;
      }
      `,
    ];
  }
}
