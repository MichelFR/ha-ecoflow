/* The shared "Solar" dialog — today's hourly production + forecast graph with
 * the per-array panel list below. Used by the Energy, House and Space cards so
 * the dialog looks and behaves the same everywhere.
 *
 * Host card requirements: `hass`, `_dialog`, `_entityId(slot)`, `_state(slot)`,
 * `_moreInfoId(id)`, `requestUpdate()` and the `_solar*` fields initialised in
 * the constructor (`_solarHourly = {}`, `_solarTotalWh = undefined`,
 * `_solarForecasts = {}`). */

import { html } from "lit";
import {
  fetchHourlyWh,
  fetchSolarForecasts,
  forecastHourly,
  forecastTodayWh,
  mergeForecastWhHours,
} from "../energy.js";
import { localize } from "../localize.js";
import { renderForecastGraph } from "./forecast-graph.js";
import { renderPanels } from "./panels.js";

/* Open the dialog, fetching today's data on first use. */
export async function openSolarDialog(card) {
  card._dialog = "solar";
  if (card._solarTotalWh === undefined) await refreshSolarDialog(card);
}

export async function refreshSolarDialog(card) {
  const id = card._entityId("sensor.solar_energy");
  const ref = new Date();
  const from = new Date(ref.getFullYear(), ref.getMonth(), ref.getDate());
  const hours = id ? await fetchHourlyWh(card.hass, id, from) : null;
  card._solarHourly = hours || {};
  card._solarTotalWh = hours
    ? Object.values(hours).reduce((s, w) => s + (w || 0), 0)
    : null;
  card._solarForecasts = await fetchSolarForecasts(card.hass);
  card.requestUpdate();
}

export function renderSolarDialog(card) {
  const t = (key, vars) => localize(card.hass, key, vars);
  const ref = new Date();
  const merged = mergeForecastWhHours(card._solarForecasts || {});
  const graph = renderForecastGraph(card, {
    actual: card._solarHourly || {},
    forecast: forecastHourly(merged, ref),
    totalWh: card._solarTotalWh,
    forecastWh: forecastTodayWh(merged, ref),
    currentHour: ref.getHours(),
    showForecast: Object.keys(merged).length > 0,
    title: t("card.today"),
  });
  return html`<ha-adaptive-dialog
    open
    width="large"
    header-title=${t("card.solar")}
    @closed=${() => (card._dialog = null)}
  >
    <div class="dlg-body">
      ${graph}
      <div class="dlg-section">${t("panels.title")}</div>
      ${renderPanels(card)}
    </div>
  </ha-adaptive-dialog>`;
}
