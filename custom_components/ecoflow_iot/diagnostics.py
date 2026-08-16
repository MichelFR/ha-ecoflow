"""Diagnostics support for EcoFlow IoT."""

from __future__ import annotations

from typing import Any

from homeassistant.components.diagnostics import async_redact_data
from homeassistant.core import HomeAssistant

from . import EcoFlowConfigEntry
from .const import CONF_ACCESS_KEY, CONF_SECRET_KEY, SN_PREFIX_LEN

TO_REDACT = {
    CONF_ACCESS_KEY,
    CONF_SECRET_KEY,
    "sn",
    "serial_number",
    "bmsSn",
    "packSn",
    "scoket1BindDeviceSn",
    "scoket2BindDeviceSn",
    "snSuffix",
    "iotWifiBssid",
}


async def async_get_config_entry_diagnostics(
    hass: HomeAssistant, entry: EcoFlowConfigEntry
) -> dict[str, Any]:
    """Return redacted diagnostics for a config entry."""
    coordinator = entry.runtime_data
    # Devices are keyed by SN prefix + counter, never the full serial.
    devices = {
        f"{sn[:SN_PREFIX_LEN]}-{index}": {
            "model": device.model_name,
            "online": coordinator.data[sn].online,
            "data_source": coordinator.data[sn].data_source.value,
            "quota": coordinator.data[sn].quota,
        }
        for index, (sn, device) in enumerate(coordinator.devices.items(), start=1)
    }
    # Devices found on the account that got no entities — unsupported models and
    # smart plugs excluded by the opt-in option. Their full raw quota is included
    # (keyed by SN prefix, the serial itself redacted) so users can attach these
    # diagnostics to an issue and the fields can be mapped to entities.
    unmapped = {
        f"{sn[:SN_PREFIX_LEN]}-{index}": {
            "online": state.online,
            "quota": state.quota,
        }
        for index, (sn, state) in enumerate(coordinator.unmapped.items(), start=1)
    }
    return async_redact_data(
        {
            "options": dict(entry.options),
            "connection_state": coordinator.connection_state.value,
            "broker": coordinator.broker,
            "devices": devices,
            "unmapped_devices": unmapped,
        },
        TO_REDACT,
    )
