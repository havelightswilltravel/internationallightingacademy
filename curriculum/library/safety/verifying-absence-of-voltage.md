---
title: Verifying Absence of Voltage (Live-Dead-Live)
category: safety
tags: [voltage-testing, live-dead-live, meter, multimeter, electrically-safe-work-condition]
levels: [LT1, LT2, LT3, LT4, LT5, EA1, EA2, EA3, EA4]
last_reviewed: 2026-10-08
review_interval_months: 12
---

> **DRAFT - pending SME review.** Follow your company's electrical safety program. Where
> it is more restrictive than this guide, it governs.

## Symptoms

This is not a fault - it is the test that proves a circuit is dead after lockout. Perform
it **every time** before you touch conductors or circuit parts, including:

- After applying LOTO and before opening a fixture, box, contactor or panel interior
- When a circuit "should" be off (switched off, breaker labeled off, photocell daytime)
- When returning to a job after a break or after another crew has been in the area

## Safety first

- **Until absence of voltage is verified, treat the circuit as energized.** The test
  itself exposes you to energized parts, so it is done by a **qualified person** wearing
  the PPE required for the equipment (voltage-rated gloves with leather protectors,
  safety glasses, and arc-rated clothing/face protection per the arc-flash label or PPE
  category method in NFPA 70E).
- Voltage testing is a recognized diagnostic task under NFPA 70E, but it still requires
  justification, a risk assessment and PPE. Any *other* energized work requires its own
  energized-work justification and, unless exempt, an energized electrical work permit.
- **Non-contact voltage testers (NCVTs, "tick tracers") are NOT acceptable for verifying
  absence of voltage.** They can miss voltage (shielded cable, MC, dead battery, poor
  hand contact) and are for screening only.
- Use a meter or tester rated for the location: **CAT III** minimum for building
  distribution and lighting panels, **CAT IV** at or near the service, with a voltage
  rating at least equal to the system (600 V or 1000 V).

## Tools needed

- Digital multimeter or two-pole voltage tester, CAT-rated as above, with low-impedance
  (LoZ) mode if available
- Test leads with finger guards and shrouded tips (short exposed tips, e.g. 4 mm or less, reduce arc risk)
- Known voltage source: a proving unit, or a known-live circuit of similar voltage
- PPE as listed above

## Likely causes

Ways the verification goes wrong:

| Cause | How to confirm | Fix |
|---|---|---|
| Meter not working (dead battery, blown fuse, wrong function) | Fails to read on known source | Replace battery/fuse; re-prove; never trust a meter you haven't proven |
| Wrong function selected (ohms, amps, DC) | Display shows wrong units | Select AC volts (or auto V); in amps mode the meter is a short circuit |
| Only one pair of conductors tested | Test record shows L-N only | Test every combination (see step 4) |
| Ghost/induced voltage misread as live or dead | Reading of a few to tens of volts on high-impedance meter | Re-test in LoZ mode; induced voltage collapses, a true source does not |
| Back-fed or second source | Reads live after lockout | Stop - find and isolate the other source |
| Stored energy (battery pack, capacitor) | Emergency fixture, HID capacitor present | Disconnect/discharge per manufacturer, then re-test |

## Step-by-step diagnosis

1. **Inspect the tester and leads**: cracked case, damaged insulation, exposed metal,
   correct CAT and voltage rating. Set the meter to AC volts.
2. **LIVE - prove the tester** on a known live source of similar voltage (or a proving
   unit). Expected: the source's nominal voltage, e.g. about **120 V** L-N on a 120/208 V
   system, about **277 V** L-N on a 277/480 V system.
3. Don PPE, open the enclosure carefully and identify every conductor and circuit part
   you will work on.
4. **DEAD - test the circuit at the point of work.** On each conductor, test:
   - each ungrounded (hot) conductor to every other hot (line-to-line)
   - each hot to neutral (grounded conductor)
   - each hot to equipment ground / grounded metal
   - neutral to ground
   Expected reading on every pair: **0 V**. In a fixture, include switch legs, dimming
   leads that may carry line voltage, and the emergency driver's unswitched hot.
5. If any reading is not zero, **stop**. A few volts that disappear in LoZ mode are
   usually induced voltage from adjacent energized conductors; anything that stays is
   a live source and must be found and isolated.
6. **LIVE - re-prove the tester** on the same known source immediately afterward. If it
   now fails to read, the "dead" test is invalid - repair/replace the meter and repeat.
7. If you leave and return, or if conductors could have been re-energized (another crew,
   automatic transfer, timer), repeat the test.
8. Some sites use permanently mounted absence-of-voltage testers (AVTs); use them only as
   permitted by the site's program and the device's listing.

## When to escalate

- Voltage remains after lockout and you cannot identify the source
- You do not have a meter rated for the equipment, or no known source to prove it
- Readings are inconsistent (meter reads differently each time, or different meters disagree)
- You are not qualified, or not trained on the specific equipment

## Documentation

Record on the work order:

- Meter make/model and CAT rating used, and that it was proven before and after
- Points tested and results (e.g. "L1-L2, L1-N, L1-G, N-G: 0 V")
- Any induced voltage observed and how it was resolved (LoZ re-test)
- Any unexpected live conductor found, its source, and who was notified
