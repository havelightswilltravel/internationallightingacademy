---
title: NLC Architectures & Components
minutes: 30
video:
video_suggestion: >
  A senior tech stands at a demo board with a gateway, wired and wireless sensors, a wallstation
  and two luminaires with integrated controllers. They trace how a button press travels from the
  wallstation to the luminaires in a wired system, then repeat with a wireless mesh system, and
  finish by pointing out a luminaire-level (LLLC) sensor in a troffer.
---

## From Standalone Controls to Networks

In LT3 you installed standalone controls: an occupancy sensor wired to a power pack, a photocell
switching a contactor, a 0–10V dimmer driving a few drivers. Each device made its own decisions
and talked to nobody. A **networked lighting control (NLC) system** connects luminaires, sensors,
wallstations and a central brain so that every device can be addressed individually, grouped in
software, scheduled, monitored and reprogrammed without rewiring.

The DesignLights Consortium (DLC) defines the capabilities that make a system "networked" for its
NLC Qualified Products List. Most commercial NLC systems offer:

- **Networking** – individually addressable devices that communicate with each other.
- **Occupancy sensing** and **daylight harvesting**.
- **High-end trim** (task tuning) – limiting maximum light output.
- **Zoning and rezoning** in software.
- **Scheduling**, **personal control**, and often **energy monitoring**.

## The Building Blocks

| Component | What it does | Field notes |
|---|---|---|
| Luminaire controller / node | Switches and dims one luminaire or a small group; may contain a relay, dimming output and sensor port | May be integral to the luminaire or a separate module in the J-box or ballast channel |
| Sensor | Occupancy (PIR, microphonic, ultrasonic) and/or daylight (photosensor) | Often combined in one device; luminaire-mounted or ceiling-mounted |
| Wallstation / keypad | Manual on/off, raise/lower, scene selection | Wired (low-voltage bus) or battery/energy-harvesting wireless |
| Room controller | Local brain for one room; stores the room's sequence | Common in wired "room-based" systems |
| Gateway / bridge | Connects zones to the backbone and the management software | Usually needs an IP address, time source and sometimes internet access |
| Management software / server | Schedules, reports, remote programming, BMS integration | Cloud-hosted or on a local server |

## Wired Architectures

Wired NLC systems connect devices with a dedicated low-voltage bus. Common types:

- **Proprietary bus on Cat5e/Cat6 patch cable** – many manufacturers use RJ-45 connectors to carry
  data and Class 2 power between room controllers, sensors and wallstations. Although it looks like
  Ethernet, **it is not Ethernet** – plugging it into a network switch can damage equipment.
- **DALI / DALI-2** – an open, two-wire digital bus (IEC 62386). Up to 64 control gear addresses per
  bus segment, polarity-insensitive, supplied by a bus power supply. DALI-2 added certified
  interoperability for sensors and input devices.
- **0–10V with digital room controllers** – the room controller is networked, but it drives
  luminaires with traditional 0–10V outputs. Simple, but individual luminaires are not addressable.

Wired systems are reliable and immune to radio interference, but require running and terminating
low-voltage cable, keeping it separated from power conductors per NEC Article 725 rules, and
following the manufacturer's topology limits (maximum run length, device count, terminators).

## Wireless Mesh Architectures

In a **mesh network**, each powered device can relay messages for its neighbors, so the network can
cover a large floor even though each radio has limited range. Common technologies include
Bluetooth mesh, Zigbee, and proprietary sub-GHz radios.

Strengths: very little control wiring – ideal for retrofits. Limitations to watch:

- **Range and obstructions.** Metal ceilings, concrete walls, elevator shafts and full racks of
  inventory absorb radio signals. A mesh needs enough powered nodes close together.
- **Battery devices do not relay.** Battery wallstations and sensors are usually "end devices" that
  only talk to a nearby powered node.
- **Gateway limits.** Each gateway supports a maximum number of devices and a maximum radio
  distance or number of hops. Exceeding them causes slow or missed commands.
- **Interference** from Wi-Fi, other 2.4 GHz equipment, or another contractor's mesh.

## Luminaire-Level Lighting Control (LLLC)

**LLLC** places an occupancy sensor, a daylight sensor and a networked controller in (or on) every
luminaire. Each fixture can respond to its own small patch of floor, which typically yields deeper
energy savings than room-level control. DLC maintains a separate LLLC designation on its NLC list,
and many utility programs pay higher incentives for it.

Things that change for the technician with LLLC:

1. You commission **many more devices** – naming and grouping discipline is critical.
2. Sensor coverage is defined by mounting height and lens; high-bay sensors need high-bay lenses.
3. A failed luminaire may mean a failed controller, a failed driver, or both.

## Power and Safety Boundaries

Most NLC devices live on both sides of a safety line: the controller switches line voltage (120–277
V, sometimes 347 V or 480 V in industrial work) while the bus and sensor wiring are Class 2.

> **Safety:** A luminaire controller is not a disconnect. A relay that has turned the light "off"
> still has line voltage on its input and may have voltage on its output through leakage or a
> failed-closed contact. De-energize at the breaker, apply LOTO and verify absence of voltage
> (live-dead-live) before touching line-voltage terminations.

> **Safety:** Do not reroute Class 2 bus wiring into the same raceway or box compartment as power
> conductors unless the equipment is listed for it and NEC separation rules are met. Loss of
> separation can put line voltage on a "low-voltage" wallstation.

## Key Takeaways
- An NLC system makes every device addressable, groupable and programmable in software.
- Know the building blocks: luminaire controllers, sensors, wallstations, room controllers, gateways and management software.
- Wired systems (proprietary bus, DALI-2) are robust but require low-voltage cabling discipline; RJ-45 bus cable is not Ethernet.
- Wireless mesh suits retrofits but depends on node density, gateway limits and the radio environment.
- LLLC puts sensing and control in every luminaire, increasing savings and commissioning workload.
- Controllers and relays are never disconnects – LOTO and verify before working on line voltage.
