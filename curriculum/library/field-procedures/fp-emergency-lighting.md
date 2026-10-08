---
title: "Field Procedure: Emergency Lighting"
category: field-procedures
tags: [field-procedure, emergency, battery-backup, exit-sign, bug-eye, test-button]
levels: [LT1, LT2]
last_reviewed: 2026-10-08
review_interval_months: 12
---

> **DRAFT - pending SME review.**

*Company field procedure — adapted from the company Master Troubleshooting Guide.*

**Competency self-rating:** 1 I have seen it · 2 I understand it · 3 I perform it · 4 I can teach it. Rate yourself on this system in the app's Skills Matrix.

## System components

| Component | What it does | Common failure |
|---|---|---|
| Battery backup ballast / driver | Runs one or more lamps from a battery when normal power fails | Dead battery, failed inverter, miswired (switched) feed |
| Standard ballast in the same fixture | Runs the lamps on normal power | Fails while emergency section still works |
| Exit signs | Mark exits; contain battery, charger and LEDs | Dim or dark face, dead battery, failed charger |
| Bug eyes (emergency units) | Wall units with heads that light during outages | Battery dead, heads aimed wrong, lamps out |
| Charging indicator / test button | Shows charging; simulates power loss | Indicator off (no supply or charger fault) |
| Emergency lighting circuit | Unswitched feed that keeps batteries charged | Turned off, on a switched leg, breaker off |

## Safety first

- **LOTO and verify absence of voltage (live-dead-live)** before opening any fixture. **A battery unit stays energized after you turn the breaker off** - disconnect the battery connector (per manufacturer) before working inside.
- These are life-safety devices: tell the customer before taking units out of service and restore them the same visit, or report it so they can arrange temporary coverage.
- Energized line-voltage tests are **qualified persons only**. Check breakers **only if qualified; otherwise write it up.**

## Company troubleshooting procedure

**Battery backup ballast**

1. **Make sure the lamp is good** (known-good lamp) **and test the line voltage** at the fixture. Expected: rated line voltage on the *unswitched* feed to the emergency unit.
2. **If the lamp is good, press the test button.** If the lamp comes on while the button is held, **the battery backup is good - replace the standard ballast.**
3. **If the lamp(s) do not come on while pressing the test button, check the wiring and sockets.** If the wiring is good, **replace the battery backup.**

**Bug eyes and exit signs**

1. **Press the test button.** The unit should switch to battery and light.
2. **If it does not come on, test the line voltage.**
3. **If voltage is good, replace the unit.** If there is no voltage, trace the circuit or write it up.

**Tips:** a new battery or unit typically needs about 24 hours of charging before it will pass a full-duration test. Building codes (e.g., NFPA 101) generally call for a monthly 30-second test and an annual 90-minute test - log what you did.

## Escalate / write it up when

- No supply voltage at the unit, or the emergency feed is on a switched circuit.
- Generator-fed or central-inverter systems - specialist or electrician.
- Several units failing at once (possible circuit problem).

## Parts & information

- Record emergency ballast model, lamp type/quantity, input voltage, and battery part number; photograph labels and the wiring diagram.
- Exit signs: single/double face, arrows, color (red/green), mounting, remote-capable.
- For combo units, match lumen/lamp head output to what was there.

## Document on the work order

Unit locations, test results (pass/fail and duration), parts replaced, date of charge start, and anything written up.
