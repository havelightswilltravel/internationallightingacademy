---
title: IoT Sensors, Solar/Off-Grid, Smart-City Lighting and Li-Fi
minutes: 35
video:
video_suggestion: >
  Short montage: (1) an LT5 technician installing a networked luminaire with an integrated sensor and
  checking it in the app; (2) inspecting a solar-powered parking lot light, covering the PV
  panel and checking the battery and charge controller; (3) a streetlight with a 7-pin
  ANSI C136.41 receptacle receiving a networked node; (4) a Li-Fi demo showing data drop out
  when a hand blocks the light path.
---

> **Note:** These technologies evolve quickly. Review this lesson at least annually with an SME
> for current standards, products, cybersecurity guidance and code changes.

## IoT Sensors in Lighting
Luminaires are everywhere in a building and already have power, which makes them ideal hosts
for sensors. Networked and luminaire-level lighting control (LLLC) systems often include:
- **Occupancy and people-counting** (PIR, microwave, thermal arrays, or cameras processed at the
  edge)
- **Daylight/ambient light** sensors
- **Environmental:** temperature, humidity, air quality (CO2, VOC)
- **Bluetooth Low Energy (BLE) beacons** for wayfinding and asset tracking
- **Energy metering** per fixture or zone

The data supports space utilization studies, HVAC optimization and maintenance alerts.

### Cybersecurity basics for techs
Every networked device is a possible entry point to a building network.
- Change default passwords and use unique credentials; never leave them written on devices.
- Install current manufacturer firmware during commissioning, coordinating with the owner's IT.
- Keep lighting systems on a network segment (VLAN) approved by IT rather than the general
  business network.
- Deliver credentials and backups securely to the owner at turnover.
- Report suspicious behavior (devices going offline, unknown devices) to IT.

### Privacy
Camera-based or high-resolution sensors raise privacy concerns. Follow the owner's policy and
disclose sensor capabilities honestly when asked.

## Solar and Off-Grid Lighting
Solar lighting is common for parking lots, paths, signs, bus shelters and remote sites where
running utility power is expensive.

**Main components:**
| Component | Role | Field notes |
|---|---|---|
| PV module | Converts sunlight to DC | Orientation, tilt, shading and dirt reduce output |
| Charge controller | Regulates charging; often also controls the LED (dusk-to-dawn, dimming profile) | Check settings and fault codes |
| Battery | Stores energy for night and cloudy days | Lithium iron phosphate (LiFePO4) and lead-acid are common; temperature affects capacity and life |
| LED luminaire | Usually DC, efficient, often dims after midnight to save energy | |

**Design terms:** *days of autonomy* (how many days the system runs without sun), *worst-month
insolation* (winter is usually the design case), and *dimming profile*.

**Common problems:** shading from new trees or buildings, dirty panels, aging batteries
(lights die earlier each night), wrong controller settings, damaged wiring, and vandalism.

> **Safety:** PV modules produce voltage whenever light hits them; there is no "off" switch for
> the sun. Cover modules with an opaque cover or follow the manufacturer's isolation procedure
> before disconnecting wiring, and verify absence of voltage with a meter rated for DC. DC arcs
> are harder to extinguish than AC arcs, so never disconnect connectors under load. Batteries
> store large amounts of energy: use insulated tools, remove jewelry, and follow the
> manufacturer's handling procedures. Grid-tied and larger PV systems fall under NEC Article
> 690 and require qualified installers.

## Smart-City and Networked Outdoor Lighting
Many cities have converted streetlights to LED and added networked controls.
- **ANSI C136.10** defines the familiar 3-pin locking photocontrol receptacle.
- **ANSI C136.41** adds dimming contacts (5-pin and 7-pin receptacles), allowing networked
  control nodes to plug in where the photocell goes.
- **Zhaga Book 18** defines a smaller connector interface used by many outdoor luminaires
  and sensors; with D4i drivers it supports standardized digital data.
- Networked nodes allow remote on/off and dimming, failure alerts, energy metering, and in some
  systems additional sensors (traffic, parking, noise, air quality).

Field implications: confirm receptacle type and driver dimming compatibility before ordering
nodes; record node IDs and GPS locations at install; and expect utility or municipal
specifications to govern equipment choices. Pole work involves traffic control, MEWPs near
power lines (keep required clearances), and line-voltage circuits that may be fed from
utility-owned sources; follow the owner's or utility's procedures.

## Li-Fi (Light Fidelity)
**Li-Fi** transmits data by modulating light far faster than the eye can detect. Many systems
use infrared for the uplink and sometimes downlink.
- **Advantages:** does not use radio spectrum (useful where RF is restricted or congested);
  light does not pass through walls, which can improve security.
- **Limitations:** needs line of sight or reflected light paths; blocked by people and objects;
  requires compatible receivers (dongles or built-in); limited market adoption so far.
- **Standards:** IEEE 802.11bb, approved in 2023, defines light communications within the Wi-Fi
  family. Expect products and adoption to change.

For field technicians, Li-Fi luminaires are installed like other networked fixtures, often with
a data connection (Ethernet or PoE) to each access-point luminaire. Coordinate with IT for
network setup.

## Evaluating Any New Technology
When a customer asks about something new, use a consistent checklist:
1. Is it **listed** by a nationally recognized testing laboratory (for example, UL or ETL) for
   the application?
2. Does it meet the **adopted codes** (NEC, energy code, NFPA 101 for egress lighting)?
3. Is it **qualified** for rebates (DLC, ENERGY STAR) if that matters to the customer?
4. Is it **interoperable** with existing controls, or a closed proprietary system?
5. What is the **support and warranty**, and will parts be available in 10 years?
6. What are the **cybersecurity** implications?
7. Is there **third-party data** supporting the performance claims?

## Key Takeaways
- Networked luminaires host sensors for occupancy, daylight, environment, BLE and metering; secure them like IT devices.
- Solar lighting depends on PV output, battery health, controller settings and shading; PV is always live in daylight.
- DC arcs are hard to extinguish; never disconnect PV or battery connectors under load.
- Streetlight networks use ANSI C136.41 receptacles or Zhaga Book 18 interfaces; confirm compatibility.
- Li-Fi uses modulated light (IEEE 802.11bb) and needs line of sight.
- Evaluate new products for listing, code compliance, interoperability, support and cybersecurity.
