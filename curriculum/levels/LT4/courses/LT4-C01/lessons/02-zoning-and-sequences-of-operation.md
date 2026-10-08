---
title: Zoning & Sequences of Operation
minutes: 25
video:
video_suggestion: >
  Using a printed reflected ceiling plan of an open office, a senior tech color-codes daylight,
  occupancy and manual-control zones with markers, then walks the real space showing where each
  zone boundary falls and why. Close with reading a written sequence of operations aloud and
  showing which line maps to which software setting.
---

## Why Zoning Matters

An NLC system can only do what it is told. **Zoning** is deciding which luminaires respond together
to which input. Get the zones wrong and the building wastes energy, annoys occupants, or fails an
energy-code acceptance test. As a senior technician you will often be the one who notices that the
zones on paper do not make sense in the real space.

## Types of Zones

| Zone type | Responds to | Typical boundary |
|---|---|---|
| Control (switching) zone | Wallstation or schedule | A room, or a portion of an open area |
| Occupancy zone | One or more occupancy sensors | Area a sensor can "see" reliably |
| Daylight zone | Photosensor | Area within reach of daylight from windows (sidelit) or skylights (toplit) |
| Scene / group | Preset scene command | Task areas, presentation areas, displays |
| Emergency group | Loss of normal power (UL 924 device) | Egress path luminaires |

A single luminaire is usually a member of several zones at once – for example, a troffer near a
window may belong to the "Room 210" control zone, the "Room 210 occupancy" zone, and the "Room 210
primary daylight" zone. That overlap is normal; the sequence of operations decides which input wins.

## Daylight Zones in Practice

Energy codes define daylight zones geometrically. In general terms:

- **Primary sidelit zone** – the band closest to vertical glazing, roughly one window-head height deep
  into the room.
- **Secondary sidelit zone** – the next band in, roughly another window-head height deep.
- **Toplit zone** – the area under and around a skylight or roof monitor.

The exact definitions, depths and exemptions are in the governing energy code (ASHRAE 90.1, IECC or
Title 24 – covered in LT4-C02). Your job in the field is to confirm the luminaires actually installed
in each daylight zone match the drawings, and that **primary and secondary zones are controlled
separately** when the code or design requires it.

## Reading a Sequence of Operations

The **sequence of operations (SOO)** is the written description of how each space should behave. It
may be in the specifications, on the drawings, or in a controls narrative. A typical private-office
SOO might read:

> Lights shall be manual-ON to 50% via wallstation. Occupant may raise to 100% (high-end trim set to
> 85%). Vacancy sensor shall turn lights OFF 15 minutes after vacancy is detected. Daylight sensor
> shall continuously dim the primary daylight zone to maintain 30 fc at the desk. After-hours (8 p.m.
> – 6 a.m.), a 5-minute grace period with a warning flash shall precede shutoff.

Break every SOO into software settings:

| SOO phrase | Software setting |
|---|---|
| Manual-ON to 50% | Occupancy sensor mode = vacancy; wallstation ON level = 50% |
| High-end trim 85% | Maximum output = 85% |
| OFF 15 minutes after vacancy | Timeout = 15 min |
| Maintain 30 fc at desk | Daylight setpoint calibrated with meter at desk |
| After-hours grace period | Schedule event + flash-warn + override duration |

If any phrase cannot be translated into a setting, or two phrases conflict, **raise it with the
project manager or engineer before you program**, not after the owner complains.

## Common Zoning Mistakes to Catch

1. **Sensor coverage gaps.** A single ceiling sensor covering an L-shaped room will miss the far leg.
   Occupants waving their arms to turn the lights on is a sign of bad zoning, not a bad sensor.
2. **Sensors seeing through doors.** A sensor in a conference room that sees hallway traffic will
   keep the room lit all day.
3. **Daylight sensors seeing electric light.** Closed-loop sensors must be aimed and calibrated so
   they are not fooled by the luminaires they control.
4. **Mixed occupancy types.** One zone covering an open office and a break room – the break room
   keeps the whole office on.
5. **Emergency luminaires on regular zones without a UL 924 device.** Egress lights could be dimmed
   or switched off during a power failure. This is a life-safety deficiency.

> **Safety:** Emergency and egress lighting is a life-safety system governed by NFPA 101 and NEC
> Article 700 (reviewed in LT3-C04). Never reprogram, rezone or bypass emergency luminaires to
> "fix" a controls issue without the design engineer's direction and a documented test afterward.

## Naming Conventions

On a large NLC project you may name thousands of devices. Use the project's naming convention
exactly. A good convention encodes floor, room, device type and position, for example
`L2-210-LUM-03` or `L2-210-OCC-01`. Consistent names make troubleshooting, BMS mapping and
future rezoning far easier. Never leave devices with factory default names.

## Key Takeaways
- Zoning defines which luminaires respond together to each input; one luminaire is often in several zones.
- Daylight zones (primary sidelit, secondary sidelit, toplit) are defined by the energy code; verify the field matches the drawings.
- Translate every line of the sequence of operations into specific software settings before programming.
- Watch for coverage gaps, sensors seeing through doors, mixed space types and improperly controlled emergency luminaires.
- Report conflicts in the SOO before programming; never alter emergency lighting behavior without engineering direction.
- Follow the project naming convention for every device.
