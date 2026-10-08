---
title: Occupancy Sensor False On / False Off
category: controls
tags: [controls, occupancy-sensor, vacancy-sensor, pir, ultrasonic, dual-technology, power-pack]
levels: [LT3, LT4]
last_reviewed: 2026-10-08
review_interval_months: 12
---

> **DRAFT - pending SME review.**

## Symptoms

- **False off:** lights turn off while people are in the room (especially seated, low-motion tasks)
- **False on:** lights turn on in an empty room (HVAC airflow, hallway traffic, moving objects)
- Lights never turn off, or never turn on
- Lights stay on far longer than expected

## Safety first

- Wall-box sensors and line-voltage power packs are line-voltage devices. **De-energize,
  LOTO and verify absence of voltage** before removing or wiring them. Power packs may be
  fed from a different circuit than the lights they control - verify every conductor.
- Low-voltage sensor wiring is usually Class 2, but it lands in the same box or near
  line-voltage terminals of the power pack.
- Energized testing is **qualified persons only**, with risk assessment, appropriate PPE and
  an energized-work justification per NFPA 70E.
- Ladder use for ceiling sensors: inspect, set up correctly, three points of contact.

## Tools needed

- Manufacturer's installation/adjustment instructions and coverage pattern
- CAT III multimeter (AC/DC volts, continuity)
- Small screwdriver or app/remote for adjustment (per manufacturer)
- Ladder, flashlight

## Likely causes

| Cause | How to confirm | Fix |
|---|---|---|
| Time delay too short | Setting vs use of the space | Increase delay (within energy code maximum) |
| Wrong sensor technology for the space (PIR can't see behind partitions; ultrasonic sees air movement) | Room layout, obstructions, HVAC diffusers near sensor | Relocate, change sensitivity, or use dual-technology |
| Sensitivity too high (false on) or too low (false off) | Walk test in test mode | Adjust sensitivity per manufacturer |
| Sensor sees outside the room (open door, hallway, window) | Triggers when people pass by | Re-aim, mask the lens, relocate |
| HVAC airflow or vibrating objects near ultrasonic sensor | False ons when HVAC runs | Relocate away from diffusers; lower ultrasonic sensitivity |
| Wiring / power pack failure | No control voltage, relay not switching | Repair wiring or replace power pack |
| Sensor in manual override or wrong mode (occupancy vs vacancy) | Setting/DIP switches; behavior on entry | Set mode per design intent and energy code |
| Network or BMS override | Controls system shows schedule/override | Clear override; see networked controls guide |

## Step-by-step diagnosis

1. Interview the occupants: when does it happen, where are they sitting, is HVAC running,
   is the door open? Look at the room layout and sensor location.
2. Identify the sensor type (PIR, ultrasonic, dual-tech) and mode (auto-on occupancy or
   manual-on vacancy). Check the current time delay and sensitivity settings.
3. Put the sensor in **test mode** (short delay, per manufacturer) and walk-test the space,
   including occupant work positions. Watch the sensor's indicator LED for detection.
4. Adjust delay, sensitivity and aim. Mask the lens or relocate if it sees outside the
   room. Keep time delays within the energy code's maximum for automatic shutoff.
5. If the sensor doesn't switch the lights at all: **(qualified, energized, with PPE)** check
   the power pack. Typically the power pack provides a low-voltage DC supply to the sensor
   (often 24 VDC) and switches its relay when the sensor sends an occupied signal.
   Expected: supply voltage present at the sensor; relay output changes with detection.
   Exact terminals and voltages vary - follow the manufacturer's diagram.
6. **De-energize, LOTO, verify absence of voltage** before replacing a power pack or
   line-voltage sensor. Remake connections per the diagram.
7. Take the sensor out of test mode, set final settings, and confirm with occupants.

## When to escalate

- Sensor location or coverage cannot work for the space (design change)
- Energy-code requirements conflict with occupant requests (refer to the designer/owner)
- Sensors integrated into a networked or BMS system
- Lights must stay on for safety (e.g. stairwells, machinery areas) - confirm design intent

## Documentation

- Room/zone, sensor type and model, mode, final time delay and sensitivity settings
- Changes made (re-aim, mask, relocation) and walk-test result
- Voltages measured at sensor/power pack, parts replaced
- Occupant feedback and any design concerns passed on
