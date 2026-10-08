---
title: "Field Procedure: Motion Sensors"
category: field-procedures
tags: [field-procedure, occupancy-sensor, motion-sensor, power-pack, low-voltage, controls]
levels: [LT2]
last_reviewed: 2026-10-08
review_interval_months: 12
---

> **DRAFT - pending SME review.**

*Company field procedure — adapted from the company Master Troubleshooting Guide.*

**Competency self-rating:** 1 I have seen it · 2 I understand it · 3 I perform it · 4 I can teach it. Rate yourself on this system in the app's Skills Matrix.

## System components

| Component | What it does | Common failure |
|---|---|---|
| Fixture | The load the sensor controls | Fixture fault mistaken for sensor fault |
| Power pack | Line-voltage relay + low-voltage supply for ceiling sensors | No low-voltage output, relay stuck open or closed |
| Wire (line voltage) | Feeds the wall sensor or power pack and the fixtures | Missing neutral or ground, loose splices |
| Low-voltage wire | Connects power pack to sensor (power and signal) | Broken, miswired, shorted on a staple |
| Sensor (wall or ceiling, PIR/ultrasonic/dual-tech) | Detects occupancy and signals on/off | Wrong sensitivity/time-delay settings, blocked view, failed |

## Safety first

- **LOTO and verify absence of voltage (live-dead-live)** before removing a wall sensor or opening a power pack box. Power packs often sit above the ceiling on a junction box and may be fed at 277 V.
- Energized voltage tests are **qualified persons only**. Check breakers **only if qualified; otherwise write it up.**
- Use a stable ladder; watch for ceiling-grid hazards.

## Company troubleshooting procedure

**Wall switch sensors**

1. **If the switch works but is not sensitive enough, check the settings** on the back or side of the switch (sensitivity, time delay, light level). Adjust and walk-test.
2. **If the switch does not work at all, first check for a good ground (and neutral)** - many motion sensing switches require it.
3. **Check incoming power** to verify good voltage across hot and neutral. Expected: about 120 or 277 V per the device rating.
4. **If line voltage is good, verify the sensitivity settings and test the switch leg** to see whether the switch is sending power when it detects motion. Expected: line voltage on the load lead when occupied.
5. **If the settings are correct and the switch still sends no power to the fixtures, replace the switch** (locked out).

**Ceiling sensors with a power pack**

1. **Isolate which component is bad: the power pack or the low-voltage ceiling sensor.**
2. **Verify the power pack is receiving line power and sending low-voltage power to the sensor.** Expected low-voltage output: per the label, commonly about 24 V DC.
3. **If it receives power but is not sending low voltage, replace the power pack.**
4. **If low voltage is leaving the power pack and reaching the sensor, replace the sensor.**

**Tip:** before replacing anything, confirm the sensor's view isn't blocked by shelving or partitions and that a short test/time-delay mode was used for walk-testing.

## Escalate / write it up when

- No neutral in the switch box where the sensor requires one, or no ground.
- No line voltage at the switch or power pack.
- Sensors tied into a networked or building-automation system.

## Parts & information

- Record brand, model, voltage, sensing technology, coverage pattern, and whether neutral is required. Photograph the label and wiring.
- Power pack: input voltage, load rating, output voltage, number of sensors supported.
- Get the spec sheet for coverage area when relocating or upgrading.

## Document on the work order

Location, settings found and changed, readings, parts replaced, and anything written up.
