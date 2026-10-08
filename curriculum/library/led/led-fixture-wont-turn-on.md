---
title: LED Fixture Will Not Turn On
category: led
tags: [led, driver, no-light, troubleshooting]
levels: [LT2, LT3]
last_reviewed: 2026-10-08
review_interval_months: 12
---

> **DRAFT - pending SME review.**

## Symptoms

- One LED fixture (or one section of a fixture) gives no light at all when switched on
- No glow, no flicker, no delayed start
- Neighboring fixtures on the same switch or circuit may or may not work - note which

## Safety first

- **Default to de-energized work.** Apply LOTO to the branch-circuit breaker and verify
  absence of voltage (live-dead-live) at the fixture before opening the wiring
  compartment. The wall switch is not a disconnect.
- Measuring supply voltage at the fixture is energized work: **qualified persons only**,
  with shock/arc-flash risk assessment, appropriate PPE (voltage-rated gloves with
  protectors, eye protection, arc-rated PPE as required), under an energized-work
  justification per NFPA 70E.
- If the fixture has an emergency driver/battery, it may energize the LED load after the
  breaker is off. Disconnect the battery per manufacturer instructions.
- Ladder or MEWP: inspect before use; maintain three points of contact on ladders.

## Tools needed

- CAT III multimeter (AC/DC volts, ohms/continuity) and known source
- Clamp meter (optional)
- Insulated hand tools, wire strippers, approved connectors
- Known-good replacement driver of matching specification (see *LED Driver Failure and Replacement Matching*)
- Manufacturer's wiring diagram / spec sheet
- Flashlight, camera for photographing labels before disassembly

## Likely causes

| Cause | How to confirm | Fix |
|---|---|---|
| Control is off (switch, sensor, relay, time clock, photocell, network schedule) | Other fixtures on the same control also off; control status shows off | Restore control; see controls guides |
| Breaker tripped or off | Panel shows tripped; no voltage at fixture | Find out *why* before resetting (see nuisance tripping guide) |
| Failed driver | Proper line voltage at driver input, no output (or output well outside label range) | Replace with matching driver |
| Loose/failed connection (push-in connector, splice, quick-disconnect) | Visual: burned, backed-out or loose wire; voltage lost across the connection | Remake connection with approved connector |
| 0-10V dim leads shorted together or to ground | Fixture lights when dim leads are separated and capped | Fix the control wiring; see 0-10V guide |
| Failed LED board/module or board-to-driver connector | Driver output present, no light; connector damaged | Replace module per manufacturer |
| Driver in thermal shutdown | Fixture works when cool, goes out when hot; driver very hot | Correct ventilation/insulation contact; confirm fixture is rated for the location |
| Wrong input voltage (e.g. 120 V driver on 277 V) | Label vs measured voltage | Replace with correctly rated driver; check for other damage |

## Step-by-step diagnosis

1. **Look at the pattern.** One fixture out, or all on the switch/circuit? If all, start at
   the control and the breaker, not the fixture.
2. Check the control: switch position, sensor status, override, schedule. Check the
   breaker. A tripped breaker is a symptom - investigate before resetting.
3. **De-energize, lock out, verify absence of voltage.** Open the fixture and inspect for
   obvious damage: burned wiring, melted connectors, water, insects, loose quick-connects.
   Photograph the driver label.
4. Check continuity of the internal wiring and connectors (de-energized, ohms):
   expected near **0 Ω** through each conductor.
5. **(Qualified, energized, with PPE)** Measure input voltage at the driver input leads:
   expected roughly the nominal voltage (e.g. 120 V or 277 V L-N, typically within about
   ±5-10%). If there is no input voltage, trace upstream: splice, whip, box, switch,
   breaker.
6. **(Qualified, energized, with PPE)** If input is good, measure driver output with the
   LED load connected. Expected: DC voltage within the label's output voltage range
   (for constant-current drivers) or the rated output (e.g. 24 VDC for a constant-voltage
   driver). Zero output with good input = failed driver (after ruling out dim leads,
   step 7).
7. Separate and individually cap the 0-10V dim leads (violet/gray) and re-test. Most
   drivers go to full output with dim leads open. If the fixture now lights, the problem
   is in the dimming circuit.
8. If the driver has output but no light, inspect the LED module and the connector. Do
   not substitute a different module or driver without the manufacturer's approval.
9. After replacing a part, restore power and confirm normal operation, including
   dimming and any sensor/emergency function.

## When to escalate

- The fixture is under warranty or part of a networked system (replacement may need
  manufacturer RMA or commissioning)
- You cannot identify a matching driver
- Signs of overheating, water intrusion or burned wiring in the building wiring, not just the fixture
- Repeated driver failures on the same circuit (possible surge, voltage or wiring problem -
  see the electrical guides)

## Documentation

- Fixture location/ID, manufacturer, catalog number, driver label data
- Measured input voltage and driver output (if measured)
- Root cause found and part replaced (old and new driver model)
- Whether dimming, sensor and emergency functions were tested after repair
- Any repeat failures or related issues for the customer
