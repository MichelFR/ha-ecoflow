/* Shared "Solar panels" editor page for the House / Space card editors:
 * per-panel show/hide, display name, and max output — the max scales that
 * panel's bar in the solar dialog (see views/panels.js). The Energy card's
 * editor keeps its own richer page (adds a per-panel sensor override) and
 * reuses only the max field from here. */

import { html } from "lit";
import { entityMap, streamDevices } from "../entities.js";
import { localize } from "../localize.js";

const MAX_PANELS = 4;

/* Slot map for the editor's selected device (mirrors the editors' _defaults). */
function defaults(editor) {
  const devices = streamDevices(editor.hass);
  const device =
    (editor._config.device &&
      devices.find((d) => d.deviceId === editor._config.device)) ||
    devices[0];
  return device ? entityMap(editor.hass, device.ents) : {};
}

/* Panels the device exposes (a pvN_power auto-maps); all four as a fallback. */
export function detectedPanels(editor) {
  const map = defaults(editor);
  const found = [];
  for (let i = 1; i <= MAX_PANELS; i++) {
    if (map[`sensor.pv${i}_power`]) found.push(i);
  }
  return found.length ? found : [1, 2, 3, 4];
}

/* Nav-row summary: "{n} panels · {m} hidden". */
export function panelsSummary(editor) {
  const t = (key, vars) => localize(editor.hass, key, vars);
  const panels = detectedPanels(editor);
  const hidden = panels.filter((i) => editor._config.panels?.[i]?.hidden).length;
  let text = t("editor.panels_count", { n: panels.length });
  if (hidden) text += ` · ${t("editor.panels_hidden", { n: hidden })}`;
  return text;
}

/* "Max output (W)" number field; onChange receives the watts or null. */
export function renderPanelMaxField(editor, pc, onChange) {
  return html`<ha-form
    .hass=${editor.hass}
    .data=${{ value: pc.max ?? null }}
    .schema=${[
      {
        name: "value",
        selector: {
          number: { min: 0, step: 10, unit_of_measurement: "W", mode: "box" },
        },
      },
    ]}
    .computeLabel=${() => localize(editor.hass, "editor.panel_max")}
    @value-changed=${(ev) => {
      ev.stopPropagation();
      onChange(Number(ev.detail.value.value) || null);
    }}
  ></ha-form>`;
}

/* The page body. cardType stamps the dispatched config's `type`. */
export function renderPanelsEditorPage(editor, cardType) {
  const t = (key, vars) => localize(editor.hass, key, vars);
  return html`<div class="hint top-hint">${t("editor.panels_hint_max")}</div>
    ${detectedPanels(editor).map((i) => renderPanelBlock(editor, cardType, i, t))}`;
}

function renderPanelBlock(editor, cardType, i, t) {
  const pc = editor._config.panels?.[i] || {};
  const hidden = !!pc.hidden;
  const patch = (p) => editor._dispatch(withPanel(editor, cardType, i, p));
  return html`<div class="panel-block">
    <div class="panel-title-row">
      <ha-icon icon="mdi:solar-panel"></ha-icon>
      <span class="panel-title">${pc.name || t("editor.panel", { n: i })}</span>
      <ha-switch
        .checked=${!hidden}
        @change=${(ev) => patch({ hidden: !ev.target.checked })}
      ></ha-switch>
    </div>
    ${hidden
      ? html`<div class="hint">${t("editor.panel_hidden")}</div>`
      : html`<ha-form
            .hass=${editor.hass}
            .data=${{ value: pc.name || "" }}
            .schema=${[{ name: "value", selector: { text: {} } }]}
            .computeLabel=${() => t("editor.panel_name")}
            @value-changed=${(ev) => {
              ev.stopPropagation();
              patch({ name: ev.detail.value.value || "" });
            }}
          ></ha-form>
          ${renderPanelMaxField(editor, pc, (max) => patch({ max }))}`}
  </div>`;
}

/* Merge a per-panel patch into config.panels, dropping default-y values so
 * only deviations persist (same shape the Energy card editor writes). */
function withPanel(editor, cardType, i, patch) {
  const panels = { ...(editor._config.panels || {}) };
  const cur = { ...(panels[i] || {}) };
  for (const [key, value] of Object.entries(patch)) {
    if (value === "" || value == null || value === false) delete cur[key];
    else cur[key] = value;
  }
  if (Object.keys(cur).length) panels[i] = cur;
  else delete panels[i];
  const config = { ...editor._config, panels, type: `custom:${cardType}` };
  if (!Object.keys(panels).length) delete config.panels;
  return config;
}
