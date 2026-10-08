---
title: Open Neutral and Multiwire Branch Circuit Symptoms
category: electrical
tags: [electrical, open-neutral, multiwire-branch-circuit, mwbc, shared-neutral, overvoltage]
levels: [LT4, LT5, EA2, EA3]
last_reviewed: 2026-10-08
review_interval_months: 12
---

> **DRAFT - pending SME review.**

## Symptoms

- Lights get **brighter** in one area and **dimmer** in another when loads switch on/off
- Fixtures or drivers burned out on one circuit, often several at once, after "flickering"
- Lights dim or flicker when an unrelated load on another circuit starts
- Voltage readings that make no sense: e.g. 160 V on one 120 V circuit and 50 V on another
- Fixture still energized (or neutral "hot") with its own breaker off

## Safety first

- **In a multiwire branch circuit (MWBC), the shared neutral can carry current from the
  other circuit(s) even when your breaker is off.** Opening a neutral splice under load can
  produce a shock and an arc, and puts full line-to-line voltage across the remaining loads.
- **LOTO all ungrounded conductors of the MWBC** - all breakers sharing the neutral - and verify
  absence of voltage on every conductor, **including the neutral**, before working.
  The NEC requires MWBCs to have a means to simultaneously disconnect all ungrounded
  conductors at the panel (2023 NEC 210.4(B)), but older installations may lack a handle tie.
- Treat the neutral as a current-carrying, potentially energized conductor until verified.
- Energized testing is **qualified persons only**, with risk assessment, appropriate PPE and an
  energized-work justification per NFPA 70E.

## Tools needed

- CAT III true-RMS multimeter (with LoZ mode), clamp meter
- Panel schedule and circuit tracer
- Thermal camera (for hot neutral connections)
- Approved connectors, handle ties (listed for the breaker)

## How an open neutral behaves

On a 120/208 V or 120/240 V MWBC, the loads on each phase share one neutral. If the neutral
opens, the loads become **connected in series across the line-to-line voltage**. The circuit
with the **lighter** load sees the **higher** voltage. Example (120/208 V): 4 A on phase A and
1 A on phase B with an open neutral can put about **40 V** across the phase A loads and about
**165 V** across the phase B loads - enough to destroy 120 V equipment. The same happens on
277/480 V systems, with even higher voltages (two 277 V loads in series across 480 V).

## Likely causes

| Cause | How to confirm | Fix |
|---|---|---|
| Loose or burned neutral splice in a box or fixture | Heat damage; voltage present across the splice; thermal hot spot | Remake splice (de-energized, all MWBC breakers locked out) |
| Neutral loose at the panel neutral bar | Loose terminal; discoloration | Torque per manufacturer (de-energized panel or qualified energized procedure) |
| Neutral opened through a device instead of pigtailed | Neutral runs through device terminals; removing device opens neutral | Pigtail neutrals - NEC 300.13(B) prohibits relying on device terminals for MWBC neutral continuity |
| MWBC breakers on the same phase (neutral overloaded) | Both breakers on the same bus phase; neutral current = sum of both | Move to different phases; add a handle tie or 2-/3-pole breaker |
| Neutral shared between unrelated circuits (wiring error) | Neutral current doesn't match its circuit's load | Separate neutrals per circuit |
| Service or feeder neutral problem | Many circuits/whole building affected | Escalate immediately - utility/service issue |

## Step-by-step diagnosis

1. **(Qualified, energized, with PPE)** Measure line-to-neutral voltage on each circuit of the
   suspect MWBC at the panel and at fixtures, while switching loads. Expected: near nominal
   (e.g. about 120 V or 277 V) on all circuits, steady. Readings far above and below nominal
   that shift with load = open or high-resistance neutral.
2. Measure neutral-to-ground voltage at the fixture under load. Expected: low (a few volts at most).
   A high N-G voltage at the fixture with a normal reading at the panel points to an open or
   high-resistance neutral between them.
3. **(Qualified)** Clamp the neutral and each hot. On a properly balanced MWBC on different
   phases, neutral current is the imbalance between the phases, not the sum. A neutral carrying
   the sum suggests both circuits are on the same phase.
4. Check the panel: are MWBC breakers on different phases and handle-tied (or a multi-pole
   breaker)? Is the neutral tight on the bar?
5. **De-energize ALL breakers of the MWBC, LOTO, verify absence of voltage on hots and neutral.**
   Trace the neutral from the panel through boxes and fixtures. Look for burned, loose or
   back-stabbed connections and neutrals passing through device terminals.
6. Repair: remake connections, pigtail neutrals, correct phasing, add handle ties.
7. Check for collateral damage: drivers, ballasts, sensors and other equipment on the
   high-voltage side may have failed and need replacement.
8. Restore and re-measure L-N voltages under varying loads.

## When to escalate

- Building-wide symptoms or abnormal voltages at the panel/service (feeder or service neutral)
- Damaged panel components or burned bus/neutral bar
- Equipment damaged by overvoltage that the customer may need to claim
- Wiring that needs redesign to meet code (shared neutrals, missing simultaneous disconnect)

## Documentation

- Circuits involved, breaker positions/phases, handle-tie status
- L-N and N-G voltages measured (before and after), neutral current readings
- Location of the open/loose neutral and repair made
- Equipment damaged by overvoltage and replaced
- Code deficiencies found and reported to the customer
