# EcoFlow x Shelly Plug

**Category:** Smart Living · **Auto-detected by SN prefix:** `SM2A`

> Generated from `custom_components/ecoflow_iot/devices/smart_living/ef_shelly_plug.py` by `scripts/gen_device_docs.py` — do not edit by hand.
> Every device also exposes an always-available **Connection** diagnostic sensor (MQTT state + data source).

Legend: 🔧 = diagnostic entity · 💤 = disabled by default · 🌐 = HTTP-only (refreshed on a slower HTTP cadence, not via MQTT) · ⚠️ = undocumented (reverse-engineered, may break).

## Sensors

| Entity | Device class | Unit | Quota key | Flags |
|---|---|---|---|---|
| Power | power | W | `2_1.watts` |  |
| Current | current | A | `2_1.current` |  |
| Voltage | voltage | V | `2_1.volt` |  |
| Temperature | temperature | °C | `2_1.temp` | 🔧 |
| Energy | energy | Wh | _integrated_ |  |

## Switches

| Entity | Quota key | Flags |
|---|---|---|
| Relay | `2_1.switchSta` |  |

---

_Entity totals: 6 — 5 sensor, 0 binary_sensor, 1 switch, 0 number, 0 select, 0 light._
