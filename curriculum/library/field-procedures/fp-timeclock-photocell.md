---
title: "Field Procedure: Time Clock and Photocell"
category: field-procedures
tags: [field-procedure, time-clock, photocell, trippers, controls, exterior]
levels: [LT2, LT3]
last_reviewed: 2026-10-08
review_interval_months: 12
---

> **DRAFT - pending SME review.**

*Company field procedure — adapted from the company Master Troubleshooting Guide.*

**Competency self-rating:** 1 I have seen it · 2 I understand it · 3 I perform it · 4 I can teach it. Rate yourself on this system in the app's Skills Matrix.

## System components

| Component | What it does | Common failure |
|---|---|---|
| Trippers | On/off pins on a mechanical clock dial | Loose, missing, bent; set to wrong time |
| Clock (mechanical or digital) | Switches the load on a schedule | Motor stopped, wrong time after outage, failed contacts |
| Photocell | Switches the load on at dusk, off at dawn | Fails on (day-burning) or off (night outage) |
| Photocell sleeve/shield | Blocks stray light from the cell | Missing or aimed wrong, causing cycling |
| Photocell receptacle | Twist-lock socket for the photocell | Corroded, cracked, loose contacts |

## Safety first

- Clock enclosures expose line terminals. **LOTO and verify absence of voltage (live-dead-live)** before handling wiring. Energized checks of line/load voltage are **qualified persons only**.
- Clocks may feed a contactor coil on a separate circuit - confirm all sources.
- Opening panels or checking breakers: **only if qualified; otherwise write it up.**

## Company troubleshooting procedure

1. **Verify the clock is keeping time.** Compare to actual time; check for AM/PM errors.
2. **Spin the clock dial** (manual advance; only where the dial is reachable without exposing live terminals, otherwise lock out first) **to verify the trippers kick the switch on and off without using bypass.** Replace trippers if needed.
3. **Listen for the clock motor, but don't rely only on the sound** to decide it works - watch the dial move or check the time again later in the visit.
4. **Isolate line and load: verify the line is connected to the line side** of the time clock or photocell (a reversed hookup can damage the device or prevent operation).
5. **Verify good line voltage across hot and neutral.** Expected: the device's rated voltage (e.g., 120 or 277 V).
6. **Cover the photocell** (opaque cap or tape) **or turn the time clock to bypass/manual on, and verify voltage on the load side.** Allow for the photocell's built-in turn-on delay (several seconds to a couple of minutes depending on model).
7. **If there is no load voltage, replace the time clock or photocell.**
8. **Check for light sources near the photocell** (security lights, signs, the fixtures it controls) **and adjust the photocell sleeve** for light-source proximity and photocell orientation (generally facing north where possible).

## Escalate / write it up when

- No line voltage at the clock/photocell.
- The load voltage is good but the lights stay off (contactor or circuit problem - see the contactor procedure).
- Clocks tied to a building-automation system or relay panel.

## Parts & information

- Clock: brand, model, voltage, number of poles/channels, mechanical vs digital, astronomical feature, contact rating. Photograph the wiring before removal.
- Photocell: voltage (120, 208-277, 480 V, or multi-volt), load rating, twist-lock vs button/stem-mount, turn-on light level.
- Receptacle: 3-pin vs 5/7-pin (dimming).

## Document on the work order

Location, time found vs actual, tripper settings, readings, parts replaced, sleeve adjustments, and anything written up.
