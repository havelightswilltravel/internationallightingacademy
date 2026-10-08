---
title: HID Lamp Won't Strike, or Long Restrike Delay
category: hid
tags: [hid, metal-halide, high-pressure-sodium, ignitor, capacitor, restrike, ballast]
levels: [LT2, LT3]
last_reviewed: 2026-10-08
review_interval_months: 12
---

> **DRAFT - pending SME review.**

## Symptoms

- HID fixture stays dark after power is applied, or lamp glows faintly and never comes up
- Lights stay out for several minutes after a brief power interruption, then return
  (normal **hot restrike delay** - not necessarily a fault)
- Lamp flickers at the base / arc tube but won't reach full brightness
- Ignitor buzzes or clicks with no lamp start

## Safety first

- **De-energize, LOTO, verify absence of voltage.** Then **discharge the capacitor** with an
  insulated, resistor-type discharge tool per manufacturer and verify it is discharged
  before touching terminals.
- **Ignitor pulses are several thousand volts.** Never touch sockets, lamp, or ignitor leads
  while energized; ordinary meters must not be connected across an ignitor output.
- HID lamps are extremely hot and under pressure; allow cooling, wear gloves and eye protection.
- Energized testing is **qualified persons only**, with risk assessment, appropriate PPE
  and an energized-work justification per NFPA 70E.

## Tools needed

- Known-good lamp of the correct type, wattage and ANSI code
- CAT III multimeter (volts, ohms), capacitance meter, capacitor discharge tool
- Replacement ballast kit components (ballast, capacitor, ignitor) per label
- MEWP/ladder, fall protection as required

## Normal restrike times (typical - check lamp data)

- **HPS:** usually restrikes in about 1 minute or so after a power interruption.
- **Pulse-start MH:** typically several minutes to cool enough to restrike.
- **Probe-start MH:** typically 10-20 minutes.
- Warm-up to full output typically takes several minutes for all types.

A long restrike after a momentary outage is normal unless it exceeds the lamp's published
time. For areas where this is unacceptable, the fix is a design change (instant-restrike
system, LED, or supplementary lighting), not a repair.

## Likely causes

| Cause | How to confirm | Fix |
|---|---|---|
| Failed lamp | Known-good lamp starts | Replace lamp |
| Failed ignitor (HPS, pulse-start MH) | Known-good lamp, good capacitor, good voltage; still no start | Replace ignitor with the type specified on the ballast label |
| Failed capacitor | Out of tolerance or open on capacitance meter; bulged case | Replace with same µF and voltage rating |
| Lamp/ballast mismatch (probe-start vs pulse-start, wrong wattage or ANSI code) | Lamp marking vs label | Install correct lamp |
| Lamp still hot (normal restrike) | Recently interrupted; lamp hot | Wait for cooling; inform customer |
| Loose or damaged socket (carbon tracking, burned center contact) | Visual; high-voltage pulse damage | Replace with a pulse-rated socket |
| No/low supply voltage | Measurement at ballast input | Trace supply; check photocell, contactor, fuse |
| Ballast failed (open winding) | De-energized continuity check of windings shows open | Replace ballast kit |

## Step-by-step diagnosis

1. Ask whether there was a recent power blip. If so and the lamp returns within its
   normal restrike time, document and explain to the customer.
2. Check controls: photocell, contactor, time clock, breaker, in-pole fuses.
3. **De-energize, LOTO, verify absence of voltage, discharge capacitor.** Allow the lamp to cool.
4. Install a **known-good** lamp of the correct type. Restore and test. Watch for the arc to
   form within seconds and brighten over several minutes.
5. If no start: de-energize, discharge and test the capacitor. Expected: rated µF within its
   printed tolerance. Replace if outside tolerance or physically damaged.
6. Inspect the socket for carbon tracking or a flattened/burned center contact.
7. Check ballast windings for continuity with the ohmmeter (de-energized, leads disconnected).
   Expected: low resistance continuity on each winding; open = failed. Exact values vary -
   follow manufacturer data if available.
8. **(Qualified, energized, with PPE)** Verify ballast input voltage matches the tap in use.
   Do not measure ignitor output with a standard meter.
9. If lamp, capacitor, socket, windings and supply are good, replace the ignitor. Replace
   ballast, capacitor and ignitor as a matched kit when in doubt.

## When to escalate

- Repeated ignitor or socket failures (possible wiring, lead-length or lamp mismatch issues)
- Customer complaint about restrike delay in critical areas (design issue)
- Mercury vapor fixtures needing ballast replacement - mercury vapor ballasts are no longer
  manufactured for sale in the U.S.; recommend conversion

## Documentation

- Fixture ID, lamp type/wattage/ANSI code, ballast model and tap
- Capacitor measured value vs rating, winding continuity results
- Components replaced; whether issue was normal restrike delay
- Recommendations given to the customer
