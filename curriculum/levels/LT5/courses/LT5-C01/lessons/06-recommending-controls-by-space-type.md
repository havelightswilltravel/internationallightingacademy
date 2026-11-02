---
title: Recommending Controls by Space Type
minutes: 35
video:
video_suggestion: >
  an LT5 technician walks a facility manager through four spaces in one building: a private
  office, a restroom with tall stall partitions, a warehouse aisle and a parking garage. In each
  space, show the tech asking "who uses this, how often, and is there daylight?" and then
  pointing to where the sensor or photosensor will go and why. End with the tech showing a
  one-page controls summary with kWh per square foot before and after.
---

## Controls Are Where the Second Half of the Savings Is
Swapping fluorescent for LED cuts watts. Controls cut **hours**. In many buildings the controls
save as much again as the fixture change. They are also where complaints come from when they
are chosen badly. A senior technician recommends controls by asking questions, not by picking a
favorite sensor.

## The Control Toolbox
| Strategy | What it does | Typical hardware |
|---|---|---|
| Occupancy (auto-on, auto-off) | On when someone enters, off after a delay | Ceiling or wall sensor, fixture-integral sensor |
| Vacancy (manual-on, auto-off) | Person switches on; sensor turns off | Wall sensor with switch |
| Partial-off / bi-level | Drops to a low level instead of off | Dimmable driver plus sensor |
| Daylight harvesting | Dims fixtures near windows or skylights | Photosensor, dimming drivers |
| High-end trim (tuning) | Caps maximum output at what the space needs | Driver setting, NLC software |
| Scheduling | On/off or levels by time of day | Timeclock, astronomical timeclock, BAS |
| Networked lighting controls (NLC) | All of the above, programmable and reportable | Wireless or wired network, sensors in fixtures |

Sensor technology matters:
- **PIR** (passive infrared) sees heat moving across zones. Needs line of sight. Good for small
  open rooms and aisles.
- **Ultrasonic** senses motion by sound reflection and "sees" around partitions. Can false-trigger
  from air movement.
- **Dual-technology** needs both to turn on and either to stay on. Fewer false-ons and false-offs.

## Five Questions for Every Space
1. **Who uses it, and how?** Steady (open office), intermittent (storage, restroom), or by
   schedule (retail sales floor)?
2. **Is there useful daylight?** Windows, skylights, clerestories, and how deep it reaches.
3. **What tasks happen here?** One task or many? Do people need to dim for screens or meetings?
4. **What do safety and code require?** Egress paths, stairs, areas with machinery, and the
   adopted energy code's mandatory controls (see LT4-C02 lesson 03).
5. **What will annoy people?** Lights going off on someone sitting still, lights coming on for
   someone walking past the door, sudden jumps in level.

## Matching Strategies to Spaces
Use this as a starting point for building the company's own controls matrix. Always confirm
against the adopted energy code and the customer's operations.

| Space | Starting recommendation | Watch out for |
|---|---|---|
| Private office | Vacancy sensor (manual-on, auto-off); daylight dimming if windowed | Desk-bound workers sitting still under PIR |
| Open office | Zoned occupancy with partial-off, daylight dimming by window zone, high-end trim | Large zones that stay on for one person |
| Conference room | Vacancy or occupancy with dual-tech; dimming or scenes for presentations | People sitting still in long meetings |
| Restroom | Ultrasonic or dual-tech ceiling sensor | PIR blocked by stall partitions leaves people in the dark |
| Corridor and stairwell | Occupancy with step-down to a low level, not full off | Egress illumination requirements; check the code and AHJ |
| Warehouse aisle | Fixture-integral sensors per aisle, step down to a low level; daylight under skylights | Forklift safety; sensors at the right height for 30 ft mounting |
| Storage / mechanical | Occupancy or vacancy, full off | Someone working behind equipment out of sensor view |
| Parking garage | Fixture-integral sensors with reduced level when no activity; daylight at perimeter and openings | Security perception; camera needs |
| Exterior (wall packs, poles, canopies) | Photocell or astronomical timeclock, plus after-hours reduction or motion response | Security, egress at exit discharge, owner's insurance needs |

## Energy-Code Drivers
Energy codes based on ASHRAE 90.1 or the IECC commonly require, depending on edition and space:
- Automatic shutoff in most spaces (occupancy sensors or scheduled shutoff).
- A maximum time delay on occupancy sensors (often around 20 minutes; verify the edition).
- Manual-on or partial-on in certain spaces.
- Daylight-responsive controls in daylight zones above a size threshold.
- Light-reduction controls (multi-level).
- Exterior lighting that turns off in daylight and reduces late at night.

A retrofit or replacement can trigger these requirements, depending on the code and how much of
the system is changed. Flag them in the proposal for confirmation; don't leave them as options.

## Avoiding Nuisance Complaints
Most "the sensors don't work" calls are setup problems.
1. Choose the right technology for the space (dual-tech or ultrasonic around partitions).
2. Mount sensors where they see the occupants, not the corridor outside the door.
3. Set time delay and sensitivity per the manufacturer, then walk-test before you leave.
4. Use partial-off instead of full off where people work near the edge of coverage.
5. Set the low end of dimming above the point where the driver flickers.
6. Tell occupants what to expect: "Wave if the lights dim" prevents many service calls.

LED sources are not harmed by frequent switching the way some fluorescent systems were, so short
time delays are acceptable for LED. Still, an over-short delay on a busy space annoys people.

> **Safety:** Installing and adjusting line-voltage sensors and power packs is electrical work.
> Lock out the circuit and verify absence of voltage live-dead-live before opening a box or
> fixture. Low-voltage sensor settings done from the front of a device are fine while energized.
> Never tape over a sensor or set it to "always on" to stop complaints; that defeats a required
> control. Fix the cause.

## Speaking in the Customer's Metrics
Facility managers and energy staff compare buildings by intensity, not total kWh:
- **Lighting power density (LPD)** = connected lighting watts / floor area (W/ft²). This is what
  codes limit.
- **Lighting energy intensity** = annual lighting kWh / floor area (kWh/ft²/yr). This is what
  controls improve.
- **Energy-use intensity (EUI)** usually means *whole-building* energy per square foot per year
  (often in kBtu/ft²), as reported in tools such as ENERGY STAR Portfolio Manager.

Example: a 40,000 ft² office uses 240,000 kWh per year for lighting, which is **6.0 kWh/ft²**.
After LED fixtures and controls it uses 96,000 kWh, which is **2.4 kWh/ft²**. Because lighting is
part of the whole building, the customer's EUI also drops. Quote the change in the customer's
own reporting units.

## Key Takeaways
- Fixtures cut watts; controls cut hours.
- Ask who uses the space, daylight, tasks, code and annoyance factors before choosing.
- Vacancy for private offices, dual-tech or ultrasonic for restrooms, step-down for corridors,
  aisles and garages, photocell or astronomical timeclock plus reduction outdoors.
- Energy codes often require controls on retrofit; flag them, don't make them optional.
- Fix nuisance complaints with technology, placement and settings, never by defeating controls.
- Report results in kWh per square foot and the customer's EUI.
