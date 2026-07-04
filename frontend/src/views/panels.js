/* The "Solar panels" dialog: each detected PV string as a labelled row with a
 * power bar sized relative to the strongest string, plus a total. Opened by
 * tapping the Solar power stat on the card. */

import { html } from "lit";
import { fmtPower, numState } from "../format.js";
import { localize } from "../localize.js";

export function panelData(card) {
  const panels = [];
  for (let i = 1; i <= 4; i++) {
    const cfg = card._config.panels?.[i] || {};
    if (cfg.hidden) continue; // per-panel hide from the editor
    const slot = `sensor.pv${i}_power`;
    const state = card._state(slot);
    if (!state) continue;
    panels.push({
      i,
      watts: numState(state),
      id: card._entityId(slot),
      name: cfg.name || null,
    });
  }
  return panels;
}

/* Lifetime solar production readout, shown under the solar dialog's graph.
 * Uses the entity's own HA formatting; tapping opens its more-info dialog. */
export function renderSolarTotal(card) {
  const id = card._entityId("sensor.solar_energy");
  const st = id ? card.hass.states[id] : null;
  if (!st) return "";
  let value = "";
  if (typeof card.hass.formatEntityState === "function") {
    try {
      value = card.hass.formatEntityState(st);
    } catch (e) {
      /* fall through to raw */
    }
  }
  if (!value) {
    const unit = st.attributes?.unit_of_measurement;
    value = unit ? `${st.state} ${unit}` : st.state;
  }
  return html`<button class="dlg-total" @click=${() => card._moreInfoId(id)}>
    <ha-icon icon="mdi:solar-power"></ha-icon>
    <span class="dlg-total-label">${localize(card.hass, "panels.total_energy")}</span>
    <span class="dlg-total-val">${value}</span>
  </button>`;
}

export function renderPanels(card) {
  const t = (key, vars) => localize(card.hass, key, vars);
  const panels = panelData(card);
  if (!panels.length) {
    return html`<div class="empty">${t("panels.none")}</div>`;
  }
  const max = Math.max(1, ...panels.map((p) => p.watts || 0));
  const total = panels.reduce((sum, p) => sum + (p.watts || 0), 0);

  return html`<div class="panels">
    ${panels.map(
      (p) => html`<div
        class="panel-row clickable"
        @click=${() => card._moreInfoId(p.id)}
      >
        <div class="panel-head">
          <span class="panel-name">
            <ha-icon icon="mdi:solar-panel"></ha-icon>${p.name ||
            t("panels.panel", { n: p.i })}
          </span>
          <span class="panel-val">${fmtPower(p.watts) ?? "–"}</span>
        </div>
        <div class="pbar">
          <div
            class="pfill"
            style="width:${Math.max(2, ((p.watts || 0) / max) * 100)}%"
          ></div>
        </div>
      </div>`
    )}
    <div class="panel-total">
      <span>${t("panels.total")}</span>
      <span>${fmtPower(total) ?? "–"}</span>
    </div>
  </div>`;
}
