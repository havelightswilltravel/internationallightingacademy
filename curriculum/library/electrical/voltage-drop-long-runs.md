---
title: Voltage Drop on Long Lighting Runs
category: electrical
tags: [electrical, voltage-drop, conductor-sizing, long-runs, site-lighting, calculations]
levels: [LT2, LT4, EA2]
last_reviewed: 2026-10-08
review_interval_months: 12
---

> **DRAFT - pending SME review.**

## Symptoms

- Fixtures at the far end of a circuit are dimmer, slower to start, or flicker; near ones are fine
- HID lamps at the end of a run won't start or cycle; LED drivers drop out or reset
- Problems got worse after fixtures were added to an existing circuit
- Low voltage at the far end only when the circuit is loaded

## Safety first

- Voltage drop is measured **under load**, so measurements are energized work: **qualified
  persons only**, with risk assessment, appropriate PPE and an energized-work justification
  per NFPA 70E. Measure at accessible terminals; do not work inside energized enclosures.
- **De-energize, LOTO and verify absence of voltage** before tightening or remaking connections.
- Hot or discolored connections are a fire hazard - report them.

## Tools needed

- Two CAT III true-RMS multimeters (or one, measured in sequence), clamp meter
- Thermal camera or IR thermometer (to find high-resistance connections)
- Conductor size and length from drawings or field measurement
- Calculator / voltage drop table

## Quick reference

- **Single-phase:** VD = (2 × K × I × L) ÷ CM
- **Three-phase:** VD = (1.732 × K × I × L) ÷ CM
  - K ≈ **12.9** (copper) or **21.2** (aluminum) ohm-cmil/ft (approximate, at operating temperature)
  - I = load current (A); L = **one-way** length (ft); CM = circular mils (12 AWG = 6,530; 10 AWG = 10,380; 8 AWG = 16,510)
- **Example:** 10 A on 250 ft (one way) of 12 AWG copper, single-phase:
  VD = (2 × 12.9 × 10 × 250) ÷ 6,530 ≈ **9.9 V** → about **3.6%** on 277 V, but **8.2%** on 120 V.
  On 10 AWG: ≈ 6.2 V → about 2.2% on 277 V.
- The NEC's informational notes suggest limiting voltage drop to about **3% on a branch
  circuit and 5% overall** (feeder plus branch). These notes are recommendations, not
  enforceable requirements - but energy codes, specifications, and equipment performance may
  require them.

## Likely causes

| Cause | How to confirm | Fix |
|---|---|---|
| Conductors too small for length and load | Calculation shows excessive drop; measured drop under load | Upsize conductors, split the circuit, or move to a higher voltage |
| Loose or corroded connection (adds resistance) | Voltage drops across one splice/terminal; hot spot on thermal scan | Remake connection (de-energized) with approved connector |
| Load added beyond original design | More fixtures than the original plan | Rebalance/split circuit |
| Low source voltage (transformer tap, utility) | Low voltage at the panel itself | Escalate - transformer taps/utility issues |
| Open or high-resistance neutral | Some fixtures high, some low; varies with other loads | See open neutral / MWBC guide |

## Step-by-step diagnosis

1. Confirm the pattern: far-end fixtures affected more than near-end ones.
2. Gather data: conductor size and material, one-way length to the last fixture, total load
   current, system voltage. Calculate the expected drop.
3. **(Qualified, energized, with PPE)** With the circuit fully loaded (all lights on),
   measure voltage at the panel (breaker load side to neutral) and at the farthest fixture.
   The difference is the actual drop. Expected: roughly what you calculated; much more
   suggests a bad connection.
4. Measure at intermediate points (handholes, junction boxes) to see whether the drop is
   spread evenly along the run (undersized conductor) or concentrated at one point (bad connection).
5. Scan accessible connections with a thermal camera under load. Hot spots indicate high resistance.
6. **De-energize, LOTO, verify absence of voltage,** then repair any bad connections found.
7. If the drop is due to conductor size, recommend options: larger conductors, splitting the
   load across more circuits, or a higher system voltage (where equipment allows).
8. Verify after repair: re-measure under load and confirm fixtures operate normally.

## When to escalate

- Conductor upsizing or circuit redesign (design/engineering review; NEC conductor sizing and
  overcurrent protection rules apply)
- Low voltage at the panel or service (utility or transformer issue)
- Heat-damaged connections in panels or equipment

## Documentation

- Circuit, conductor size/material, one-way length, load current
- Calculated drop and measured voltages (panel, intermediate points, far end) under load
- Hot spots found and connections repaired
- Recommendations made to the customer
