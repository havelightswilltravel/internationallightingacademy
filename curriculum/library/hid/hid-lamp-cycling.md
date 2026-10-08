---
title: HID Lamp Cycling On and Off
category: hid
tags: [hid, metal-halide, high-pressure-sodium, cycling, ballast, photocell]
levels: [LT2, LT3]
last_reviewed: 2026-10-08
review_interval_months: 12
---

> **DRAFT - pending SME review.**

## Symptoms

- HID lamp starts, warms up, goes out, then restarts minutes later - repeating
- High-pressure sodium (HPS) lamps cycling is a classic end-of-life sign
- Metal halide (MH) lamps cycling, often with a color shift
- Several fixtures on the same photocell or contactor going on and off together

## Safety first

- **De-energize, LOTO and verify absence of voltage** before opening a fixture or ballast
  compartment. HID ballasts often include a **capacitor that can hold a charge** after
  power is removed - discharge it with an insulated, resistor-type discharge tool per the
  manufacturer, then verify.
- **Ignitors produce high-voltage pulses** (thousands of volts) at the socket during
  starting. Never touch the socket or lamp while energized.
- HID lamps run extremely hot; allow cooling. MH lamps can rupture at end of life.
- Energized testing is **qualified persons only**, with risk assessment, appropriate PPE
  and an energized-work justification per NFPA 70E.
- Pole/high-bay work: MEWP training and inspection, fall protection, overhead power-line clearances.

## Tools needed

- Known-good lamp of the same type and wattage (and same ANSI ballast code)
- CAT III multimeter (volts, ohms), capacitance meter, capacitor discharge tool
- Replacement capacitor/ignitor/ballast kit matching the label
- Photocell shorting cap or test cap (for photocell-controlled fixtures)

## Likely causes

| Cause | How to confirm | Fix |
|---|---|---|
| Lamp at end of life (HPS especially) | Lamp is old; known-good lamp operates steadily | Replace lamp |
| Photocell seeing its own light (or another light) | Cycling period short (seconds to minutes); covering the cell makes it stay on | Re-aim/shield the photocell; relocate it |
| Failing photocell | Lights cycle with shorting cap removed but not with it installed | Replace photocell |
| Fixture overheating (thermal protector) | Fixture/ballast hot; dirty or blocked ventilation; wrong lamp wattage | Correct ventilation, wattage; replace ballast if damaged |
| Low supply voltage | Measured voltage below ballast tap rating; voltage dips when lamps start | Use correct ballast tap; correct voltage drop |
| Wrong lamp (wattage or ANSI code mismatch, probe-start lamp on pulse-start ballast) | Lamp marking vs ballast label | Install the correct lamp |
| Failing capacitor | Capacitance out of tolerance; swollen or leaking case | Replace with same µF and voltage rating |
| Failing ballast | Known-good lamp and capacitor, still cycling | Replace ballast kit |

## Step-by-step diagnosis

1. Time the cycle and note which fixtures cycle. Several fixtures on one control cycling
   together points to the photocell, contactor or supply; a single fixture points to
   lamp, ballast or fixture photocell.
2. If the fixture has its own photocell, check for light from the fixture or a nearby
   source reaching it. Fit a **shorting cap** (qualified, following procedure) to bypass the
   photocell: if cycling stops, the photocell is the cause.
3. Check lamp age and appearance; HPS lamps that cycle are usually at end of life.
4. **De-energize, LOTO, verify absence of voltage, discharge the capacitor.** Let the lamp
   cool. Replace with a **known-good lamp** of the correct type and wattage.
5. Restore power and observe a full warm-up (typically several minutes) and at least 15-30
   minutes of operation.
6. If still cycling: de-energize, discharge, and test the capacitor with a capacitance
   meter. Expected: within the tolerance printed on it (commonly ±6% or ±10%).
7. Inspect for heat damage, blocked vents, and correct lamp wattage. Check the ballast tap
   matches the supply voltage.
8. **(Qualified, energized, with PPE)** Measure input voltage at the ballast with the lamp
   running. Expected: within the ballast's specified range for the tap used. Low voltage
   that drops further when lamps start indicates a supply problem.
9. If lamp, capacitor and supply are good, replace the ballast kit (ballast, capacitor and
   ignitor as a matched set).

## When to escalate

- Whole circuits cycling with no obvious control fault (possible supply/utility issue)
- Ruptured lamp or heat-damaged fixture
- Customer wants to convert to LED (refer for retrofit scope)

## Documentation

- Fixture IDs, lamp type/wattage/ANSI code, ballast model and tap
- Cycle timing observed
- Components tested (capacitor value measured, input voltage) and replaced
- Photocell condition and any re-aiming done
