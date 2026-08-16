# EcoFlow Smart Meter

**Category:** Solar Systems · **Auto-detected by SN prefix:** `BK21`

> Generated from `custom_components/ecoflow_iot/devices/solar_systems/stream.py` by `scripts/gen_device_docs.py` — do not edit by hand.
> Every device also exposes an always-available **Connection** diagnostic sensor (MQTT state + data source).

Legend: 🔧 = diagnostic entity · 💤 = disabled by default · 🌐 = HTTP-only (refreshed on a slower HTTP cadence, not via MQTT) · ⚠️ = undocumented (reverse-engineered, may break).

> ⚠️ **Heads-up:** entities flagged ⚠️ are reverse-engineered from live device data and are **not part of EcoFlow's documented API**. They may change behaviour or stop working after a device firmware or EcoFlow app update.

## Sensors

| Entity | Device class | Unit | Quota key | Flags |
|---|---|---|---|---|
| Grid connection status | — | — | `gridConnectionSta` | 🔧 ⚠️ |

## Binary sensors

| Entity | Device class | Quota key | Flags |
|---|---|---|---|
| Problem | problem | _computed_ | 🔧 ⚠️ |

---

_Entity totals: 2 — 1 sensor, 1 binary_sensor, 0 switch, 0 number, 0 select, 0 light._
