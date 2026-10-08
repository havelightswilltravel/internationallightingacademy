---
title: System-Level & Controls Interactions
minutes: 30
video:
video_suggestion: >
  A senior tech uses a training board (or a real office after hours) to recreate three controls
  interactions: a vacancy sensor and a schedule fighting each other, a daylight sensor hunting,
  and a dimmer/driver incompatibility causing flicker at low end. For each, show the symptom,
  the diagnostic step that reveals the interaction, and the fix.
---

## When Every Part Tests Good

Some of the hardest calls involve systems where **each component works by itself** but the system
misbehaves. The driver passes, the sensor passes, the wiring passes – yet lights flicker, turn on
unexpectedly or won't dim properly. These are **interaction problems**: two or more parts, settings
or systems working against each other.

## Common Interaction Types

### 1. Competing control inputs
Multiple sources can command the same luminaires: wallstations, occupancy sensors, daylight sensors,
schedules, BMS commands, demand-response signals, emergency transfer devices. When two disagree, the
result depends on priority rules.

| Symptom | Possible interaction |
|---|---|
| Lights turn on at 6 a.m. in an empty space | NLC schedule ON plus sensor in occupancy (auto-ON) mode |
| Lights won't stay off | BMS writing ON at high priority; sensor false triggers |
| Lights go off on occupants | Schedule sweep with no override; timeout too short; sensor coverage gap |
| Lights dim unexpectedly at midday | Daylight harvesting or demand response event |

**Diagnosis:** pull the event log and identify *which input* made each change. Then decide which
source should be in charge and remove or reprioritize the other.

### 2. Dimming compatibility
Driver, dimmer/controller and wiring must match (LT3-C02). Interaction symptoms:

- Flicker or "popcorn" (lights turning on at different levels) at low end
- Lights don't turn fully off (glow) – often 0–10V drivers without a switching relay, or phase dimmers
  with leakage
- Dead travel – no change over part of the slider range
- Some fixtures on a circuit dim differently – mixed driver models or firmware

Check manufacturer compatibility lists, low-end trim settings, 0–10V wiring polarity and wire
length/voltage drop on the control pair, and whether every fixture on the zone uses the same driver.

### 3. Sensor environment interactions
- **Ultrasonic and microphonic sensors** triggered by HVAC airflow, fans, vibration or noise from
  adjacent spaces.
- **PIR sensors** triggered by heat sources (heaters, sunlight on surfaces) or missing occupants behind
  partitions.
- **Daylight sensors** affected by reflections from snow, glossy floors or new furniture, or by window
  treatments that changed after commissioning.

### 4. Electrical system interactions
- LED flicker when elevators, compressors or HVAC start – voltage sag shared on a feeder.
- Neutral problems on MWBCs causing different behavior on different circuits (LT4-C04).
- **Induced or "ghost" voltage** on long control or switch-leg runs – a high-impedance meter reads
  voltage on an "off" conductor because of capacitive coupling. LED drivers may glow or flicker. Use a
  low-impedance (LoZ) meter function to distinguish ghost voltage from a real backfeed.
- Emergency transfer devices (UL 924) sensing a false loss of normal power because their sensing
  circuit is on a different circuit than the controlled lights.

> **Safety:** A ghost-voltage reading does **not** prove a conductor is safe. Before work, apply
> LOTO and verify absence of voltage with a properly rated meter using live-dead-live. Treat any
> unexplained voltage as real until proven otherwise; back-fed circuits from mis-wired controls or
> shared neutrals are a real shock hazard.

### 5. Software and firmware
- Firmware updates that change default behavior
- Device replaced but not commissioned (new device at factory defaults)
- Gateway clock or time zone wrong after power loss, shifting all schedules
- Devices dropping off a wireless mesh because new metal shelving blocks the signal

## A Diagnostic Approach for Interaction Problems

1. **Map the system.** List every input that can affect the luminaires: wallstations, sensors,
   schedules, BMS, DR, emergency devices, other circuits/feeders.
2. **Get the event log** and the as-commissioned settings. Compare current settings to the record.
3. **Isolate inputs one at a time.** Temporarily disable one input (with the customer's permission)
   and observe. Restore it afterward.
4. **Check what changed recently** – new furniture, new HVAC, firmware update, another contractor's
   work, change in occupancy schedule.
5. **Confirm the fix** by reproducing the original conditions.
6. **Update the documentation** so the as-commissioned record matches reality.

## Coordination With Other Trades

Many interaction problems sit at the boundary between your system and someone else's: BMS
programmers, HVAC contractors, IT departments, fire alarm contractors. Bring evidence (event logs,
readings, timestamps) to those conversations. "Your BMS wrote ON to BV-210 at priority 8 at 06:00 and
never released it" resolves problems that "the BMS is messing up my lights" never will.

## Key Takeaways
- Interaction problems occur when individually good components work against each other.
- Competing inputs (sensors, schedules, BMS, DR, emergency devices) are revealed by controls event logs.
- Dimming compatibility, sensor environment changes and electrical sags are common interaction sources.
- Ghost voltage can make drivers glow; use a LoZ meter to identify it, but always LOTO and verify before work.
- Isolate inputs one at a time, check what changed recently and update documentation after the fix.
- Bring specific evidence when coordinating with other trades.
