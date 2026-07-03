"""Unit tests for MQTT get_reply quota extraction (no paho/HA required)."""

from __future__ import annotations

import sys
import types
from pathlib import Path


def install_stubs() -> None:
    """Stub paho and the package context so mqtt_client imports cleanly."""
    paho = types.ModuleType("paho")
    paho.__path__ = []
    paho_mqtt = types.ModuleType("paho.mqtt")
    paho_mqtt.__path__ = []
    client = types.ModuleType("paho.mqtt.client")
    client.Client = object
    client.MQTTv311 = 4
    client.MQTTMessage = object
    sys.modules["paho"] = paho
    sys.modules["paho.mqtt"] = paho_mqtt
    sys.modules["paho.mqtt.client"] = client

    root = Path(__file__).resolve().parents[1] / "custom_components"
    pkg = types.ModuleType("ecoflow_iot")
    pkg.__path__ = [str(root / "ecoflow_iot")]
    sys.modules["ecoflow_iot"] = pkg
    # Register the api package without executing its __init__ (which pulls in
    # the aiohttp-based HTTP client).
    api = types.ModuleType("ecoflow_iot.api")
    api.__path__ = [str(root / "ecoflow_iot" / "api")]
    sys.modules["ecoflow_iot.api"] = api


install_stubs()

from ecoflow_iot.api.mqtt_client import _extract_reply_quota  # noqa: E402


def test_bare_ack_is_ignored():
    assert _extract_reply_quota({"id": 1, "code": 0, "message": "ok"}) is None


def test_flat_data_reply():
    payload = {"id": 1, "code": 0, "data": {"powGetSysGrid": 250}}
    assert _extract_reply_quota(payload) == {"powGetSysGrid": 250}


def test_quota_map_reply_is_flattened():
    """App-style latestQuotas replies nest the values under data.quotaMap."""
    payload = {
        "id": 1,
        "code": 0,
        "data": {"quotaMap": {"powGetSysGrid": 250, "cfgEnergyStrategy": 2}},
    }
    assert _extract_reply_quota(payload) == {
        "powGetSysGrid": 250,
        "cfgEnergyStrategy": 2,
    }


def test_empty_quota_map_falls_back_to_wrapper():
    payload = {"id": 1, "data": {"quotaMap": {}, "online": 1}}
    assert _extract_reply_quota(payload) == {"quotaMap": {}, "online": 1}


if __name__ == "__main__":
    test_bare_ack_is_ignored()
    test_flat_data_reply()
    test_quota_map_reply_is_flattened()
    test_empty_quota_map_falls_back_to_wrapper()
    print("ok")
