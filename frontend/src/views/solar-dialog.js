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

/* Open the dialog, refreshing its data on every open — cached data can be
 * hours (or on a wall tablet, days) old. The stale graph still shows while
 * the two WS calls are in flight. */
export async function openSolarDialog(card) {
  card._dialog = "solar";
  // Keep an open dialog current (statistics tick a few times an hour). The
  // timer self-clears if the dialog closed or the card left the DOM.
  clearInterval(card._solarTimer);
  card._solarTimer = setInterval(() => {
    if (card._dialog !== "solar" || !card.isConnected) {
      clearInterval(card._solarTimer);
      card._solarTimer = null;
      return;
    }
    refreshSolarDialog(card);
  }, 5 * 60 * 1000);
  await refreshSolarDialog(card);
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

/* Merge + day-bucket the forecasts, memoized on the forecast object identity
 * and the day — the dialog re-renders with every relevant state push, and
 * re-merging every provider's wh_hours map each time is pure GC churn. */
function forecastForDay(card, ref) {
  const src = card._solarForecasts || {};
  const day = `${ref.getFullYear()}-${ref.getMonth()}-${ref.getDate()}`;
  const m = card._solarFcMemo;
  if (m && m.src === src && m.day === day) return m;
  const merged = mergeForecastWhHours(src);
  card._solarFcMemo = {
    src,
    day,
    merged,
    hourly: forecastHourly(merged, ref),
    dayWh: forecastTodayWh(merged, ref),
  };
  return card._solarFcMemo;
}

export function renderSolarDialog(card) {
  const t = (key, vars) => localize(card.hass, key, vars);
  const ref = new Date();
  const fc = forecastForDay(card, ref);
  const merged = fc.merged;
  const graph = renderForecastGraph(card, {
    actual: card._solarHourly || {},
    forecast: fc.hourly,
    totalWh: card._solarTotalWh,
    forecastWh: fc.dayWh,
    currentHour: ref.getHours(),
    showForecast: Object.keys(merged).length > 0,
    title: t("card.today"),
  });
  return html`<ha-adaptive-dialog
    open
    width="large"
    header-title=${t("card.solar")}
    @closed=${() => {
      card._dialog = null;
      clearInterval(card._solarTimer);
      card._solarTimer = null;
    }}
  >
    <div class="dlg-body">
      ${graph}
      <div class="dlg-section">${t("panels.title")}</div>
      ${renderPanels(card)}
    </div>
  </ha-adaptive-dialog>`;
}
