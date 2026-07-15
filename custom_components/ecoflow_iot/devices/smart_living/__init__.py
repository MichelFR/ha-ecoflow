"""EcoFlow Smart Living device definitions."""

from .ef_shelly_plug import EfShellyPlugDevice
from .glacier import GlacierDevice
from .power_kits import PowerKitsDevice
from .smart_plug import SmartPlugDevice
from .wave import WaveDevice

__all__ = [
    "EfShellyPlugDevice",
    "GlacierDevice",
    "PowerKitsDevice",
    "SmartPlugDevice",
    "WaveDevice",
]
