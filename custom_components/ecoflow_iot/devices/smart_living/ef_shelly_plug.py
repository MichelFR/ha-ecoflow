"""EcoFlow x Shelly Plug device definition (SN prefix ``SM2A``).

This is the EcoFlow-branded Shelly smart plug (the app's internal ``sm002``
device; its sibling ``sm003`` / ``SM3A`` is the EF x Shelly Pro3EM meter). It is
one of EcoFlow's third-party "x Shelly" line, paired through the app's Shelly
web-view/BLE flow rather than EcoFlow's native provisioning.

The quota schema for these third-party plugs is **not published** in the EcoFlow
developer docs and could not be captured from a live unit, so the entities below
mirror the native EcoFlow Smart Plug (``HW52`` / WN511) heartbeat schema as a
best-effort starting point. Keys that don't match on real hardware simply report
unavailable — download the integration diagnostics (which include the raw quota
snapshot for this device) and open an issue so the mapping can be corrected.
"""

from __future__ import annotations

from collections.abc import Mapping
from typing import Any

from homeassistant.components.sensor import (
    SensorDeviceClass,
    SensorStateClass,
)
from homeassistant.const import (
    EntityCategory,
    Platform,
    UnitOfElectricCurrent,
    UnitOfElectricPotential,
    UnitOfPower,
    UnitOfTemperature,
)

from ..base import (
    EcoFlowDevice,
    EcoFlowSensorEntityDescription,
    EcoFlowSwitchEntityDescription,
    _EcoFlowDescription,
)
from ..energy import consumption_energy
from ..helpers import (
    deci as _scale_tenth,
    milli as _scale_1000,
    round2 as _round2,
)

# SN prefix "SM2A" identifies the EF x Shelly Plug (app device code ``sm002``).
_SN_PREFIXES: tuple[str, ...] = ("SM2A",)


# ---------------------------------------------------------------------------
# Sensors (best-effort; mirrors the native Smart Plug 2_1.* heartbeat schema)
# ---------------------------------------------------------------------------

_SENSORS: tuple[EcoFlowSensorEntityDescription, ...] = (
    EcoFlowSensorEntityDescription(
        key="plug_power",
        mqtt_key="2_1.watts",
        name="Power",
        device_class=SensorDeviceClass.POWER,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfPower.WATT,
        value_fn=_scale_tenth,
    ),
    EcoFlowSensorEntityDescription(
        key="plug_current",
        mqtt_key="2_1.current",
        name="Current",
        device_class=SensorDeviceClass.CURRENT,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricCurrent.AMPERE,
        value_fn=_scale_1000,
    ),
    EcoFlowSensorEntityDescription(
        key="plug_voltage",
        mqtt_key="2_1.volt",
        name="Voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfElectricPotential.VOLT,
        value_fn=_round2,
    ),
    EcoFlowSensorEntityDescription(
        key="plug_temp",
        mqtt_key="2_1.temp",
        name="Temperature",
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
)

# ---------------------------------------------------------------------------
# Switches (best-effort; reuses the native Smart Plug relay command)
# ---------------------------------------------------------------------------

_SWITCHES: tuple[EcoFlowSwitchEntityDescription, ...] = (
    EcoFlowSwitchEntityDescription(
        key="plug_switch",
        mqtt_key="2_1.switchSta",
        name="Relay",
        value_fn=bool,
        command_fn=lambda value, _q: {
            "cmdCode": "WN511_SOCKET_SET_PLUG_SWITCH_MESSAGE",
            "params": {"plugSwitch": 1 if value else 0},
        },
    ),
)

_ENERGY_SENSORS = (
    consumption_energy("plug_energy", "Energy", ("2_1.watts", 10)),
)


class EfShellyPlugDevice(EcoFlowDevice):
    """EcoFlow x Shelly Plug (SN prefix ``SM2A``)."""

    model = "EcoFlow x Shelly Plug"
    sn_prefixes: tuple[str, ...] = _SN_PREFIXES
    is_smart_plug = True

    def entity_descriptions(self, platform: Platform) -> list[_EcoFlowDescription]:
        if platform == Platform.SENSOR:
            return [*_SENSORS, *_ENERGY_SENSORS]
        if platform == Platform.SWITCH:
            return list(_SWITCHES)
        return []
