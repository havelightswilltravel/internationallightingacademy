---
title: GFCI Tripping on Exterior Lighting Circuits
category: exterior
tags: [exterior, gfci, ground-fault, leakage-current, wet-location, landscape-lighting]
levels: [LT3, LT4, EA1]
last_reviewed: 2026-10-08
review_interval_months: 12
---

> **DRAFT - pending SME review.**

## Symptoms

- GFCI breaker or receptacle on an exterior lighting circuit trips - often after rain,
  irrigation, or at night when the lights switch on
- Trips immediately on reset, or randomly
- Trips started after adding fixtures or extending the circuit

## Safety first

- **A GFCI trip is a protective device doing its job until proven otherwise.** It may be
  detecting current leaking through water - or a person.
- **Never bypass a GFCI or replace a GFCI device with a non-GFCI device** where GFCI protection
  is required by code, by the design, or by the fixture's instructions.
- **De-energize, LOTO and verify absence of voltage** before opening fixtures, boxes and splices.
- Insulation resistance testing applies high DC voltage - trained persons only, electronics
  disconnected, conductors discharged after testing.
- Energized testing is **qualified persons only**, with risk assessment, appropriate PPE and
  an energized-work justification per NFPA 70E.

## Tools needed

- CAT III multimeter, clamp meter; leakage-current clamp if available (reads mA)
- GFCI tester (uses the device's own test function or a plug-in tester for receptacles)
- Megohmmeter
- Wet-location rated connectors, gaskets, in-use covers as needed

## Quick reference

- A GFCI for personnel protection (Class A) trips when the imbalance between the circuit
  conductors reaches about **4-6 mA**.
- Every electronic driver has some normal leakage to ground (through input filters and surge
  protectors). Many fixtures on one GFCI, or long circuits, can add up to a trip even with no fault.
- **Any neutral sharing or neutral-to-ground connection downstream of a GFCI will cause trips.**

## Likely causes

| Cause | How to confirm | Fix |
|---|---|---|
| Water in a fixture, box, splice or in-ground fitting | Moisture/corrosion; trips after rain/irrigation; low IR on that branch | Dry/repair; replace with wet-location rated parts; reseal gaskets; add drain/weep provisions per manufacturer |
| Damaged cable insulation (underground, landscaping damage) | Low IR on a segment | Repair/replace segment (see underground ground fault guide) |
| Neutral shared with another circuit or neutral-ground connection downstream | Trips immediately even with all loads off; neutral continuity to ground or to other circuits | Separate neutrals; remove downstream N-G bond |
| Cumulative leakage from many drivers | No fault found; leakage clamp shows several mA total; trips when lights switch on | Split the circuit; follow driver manufacturer guidance on max fixtures per GFCI |
| Failed fixture/driver | Trip clears when that fixture is disconnected | Replace fixture/driver |
| Failed GFCI | Trips with load disconnected; fails its own test | Replace GFCI device |

## Step-by-step diagnosis

1. Note when the trips happen (rain, irrigation, time of day, switching on).
2. **De-energize, LOTO, verify absence of voltage.** Disconnect the load conductors (line and
   neutral) from the GFCI's load terminals.
3. Reset the GFCI with no load connected. If it still trips, the device has failed (or is
   wired wrong) - replace it.
4. With loads still disconnected, test the circuit with an ohmmeter: neutral to ground
   should read **open** (no continuity) with all neutrals isolated from other circuits. Continuity
   = a neutral-ground connection or a shared neutral downstream.
5. Disconnect the fixtures/drivers and perform an insulation resistance test of the wiring
   (each conductor to ground). Low readings identify a damaged or wet segment - half-split to find it.
6. Reconnect fixtures one branch at a time, resetting the GFCI after each, until the trip returns.
   The last branch/fixture connected contains the fault.
7. Inspect that branch for water: fixture lens gaskets, conduit entries, splices, in-ground boxes.
8. If no fault is found but trips continue with many fixtures, **(qualified, energized, with PPE)**
   measure total leakage with a leakage clamp around the circuit conductors (line and neutral
   together). Several mA of leakage indicates cumulative driver leakage - split the circuit.
9. Repair, restore, test the GFCI with its test button, and verify it holds through a full
   on-cycle (and after irrigation if possible).

## When to escalate

- Damaged underground cable requiring excavation (811 required)
- Shared neutrals or wiring errors that require rework
- Circuit design changes (splitting circuits, adding GFCI devices)
- Any shock reported by a person - stop, make safe, and report immediately

## Documentation

- Circuit, GFCI type/location, trip pattern
- Tests performed (no-load reset, N-G continuity, insulation resistance, leakage current)
- Fault found and repair made
- Final GFCI test result
