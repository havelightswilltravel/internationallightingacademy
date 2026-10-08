---
title: Single-Phase and Three-Phase Wye Systems
minutes: 35
video:
video_suggestion: >
  In a training room with a de-energized mock-up panel (or a whiteboard), a lead tech draws
  the transformer secondary for a 120/240V split-phase service, a 208Y/120V wye and a
  480Y/277V wye, then shows on a real (de-energized) three-phase panel how the bus bars
  alternate phases A, B, C down the panel. End with recorded meter readings from an
  energized panel (filmed with proper PPE) showing each voltage pair.
---

## Three Systems You Will Work On

Almost every lighting job you do will be on one of three systems. Learn to recognize them
at the panel and predict every voltage before you put a meter on anything.

| System | Where you see it | Line-to-neutral | Line-to-line |
|---|---|---|---|
| 120/240 V single-phase, 3-wire | Homes, small shops, some site lighting | 120 V | 240 V |
| 208Y/120 V three-phase, 4-wire | Offices, retail, schools — receptacles and some lighting | 120 V | 208 V |
| 480Y/277 V three-phase, 4-wire | Larger commercial and industrial buildings — most lighting, HVAC | 277 V | 480 V |

## Single-Phase 120/240 V

The utility transformer has one secondary winding with a **center tap**. The center tap is
grounded and becomes the neutral. Each end of the winding is a hot leg.

- Either hot to neutral: **120 V**
- Hot to hot: **240 V** (the two legs are 180° apart, so their voltages add)

This is often called "split-phase." It is still single-phase power.

## Three-Phase Wye Systems

A **wye** (Y) transformer has three windings joined at a common point. That common point
is grounded at the service and becomes the neutral. Each winding's other end is a phase:
A, B and C (also called L1, L2, L3).

Because the phases are 120° apart, the voltage between two phases is not double the phase
voltage — it is **√3 (about 1.732) times** the line-to-neutral voltage:

- 120 V × 1.732 = **208 V**
- 277 V × 1.732 = **480 V**

Going the other way: 480 ÷ 1.732 = 277, and 208 ÷ 1.732 = 120.

### Why lighting uses 277 V

On a 480Y/277 V system, connecting lighting phase-to-neutral gives 277 V. Higher voltage
means less current for the same wattage, which means smaller wire, less voltage drop and
longer circuit runs. That is why most commercial lighting is 277 V. The NEC (Article 210)
limits where branch circuits over 120 V to ground may supply luminaires — for example, they
are not used for luminaires in dwelling units — so 277 V lighting is a commercial and
industrial practice.

> **Safety:** 277 V to ground is far more dangerous than 120 V. Never assume a fixture is
> "just a lighting circuit." Always identify the system voltage from the panel label and
> verify with a properly rated meter before touching anything.

## Recognizing the System at the Panel

1. **Read the panelboard label** — it lists voltage, phase, wires (e.g., "208Y/120V 3Ø 4W").
2. **Count the bus phases** — three-phase panels have three bus bars, and breaker positions
   rotate A, B, C, A, B, C down each side. On a typical panel, circuits 1 and 2 are on
   phase A, 3 and 4 on B, 5 and 6 on C, 7 and 8 back on A, and so on.
3. **Look at the breakers** — a 277 V lighting circuit uses a single-pole breaker in a
   480Y/277 V panel; a 208 V or 480 V load uses a two-pole breaker; a three-phase load uses a
   three-pole breaker.
4. **Look at conductor identification** — the NEC requires ungrounded conductors to be
   identified by system where more than one voltage system exists in a building, and the
   method must be posted or documented at each panel. Common industry practice (not an NEC
   color mandate):

| System | Phase A | Phase B | Phase C | Neutral |
|---|---|---|---|---|
| 208Y/120 V | Black | Red | Blue | White |
| 480Y/277 V | Brown | Orange | Yellow | Gray |

Always confirm the identification scheme posted at the panel — and never trust color alone.
Verify with a meter.

## A Note on Delta Systems

Some older buildings and industrial plants have **delta** systems, including the 240 V
"high-leg" (or "wild-leg") delta, where one phase reads about 208 V to neutral. The NEC
requires that high leg to be marked orange (or otherwise effectively identified). Connecting
a 120 V lighting load to the high leg will destroy it. If a panel's readings do not match
the wye patterns in this lesson, **stop and ask your lead**. Delta systems are covered in
EA3.

## Predicting Readings Before You Measure

Before opening a panel, write down what you expect. Example for a 480Y/277 V panel:

| Measure between | Expected |
|---|---|
| A–B, B–C, C–A | about 480 V each |
| A–N, B–N, C–N | about 277 V each |
| A–G, B–G, C–G | about 277 V each |
| N–G | near 0 V (a few volts is common under load) |

If a phase-to-neutral reading is near zero, suspect an open breaker, blown fuse, or a lost
phase. If neutral-to-ground voltage is high, suspect a loaded, undersized, or loose neutral.

## Balanced and Unbalanced Loads

On a three-phase wye system, the neutral carries the **imbalance** between the phases. If
phases A, B and C each carry exactly 10 A of a purely linear load, the neutral current is
close to zero because the currents cancel. If phase A carries 15 A and B and C carry 10 A,
the neutral carries the difference (about 5 A for linear loads).

With electronic lighting loads, certain harmonic currents **do not cancel** — they add up on
the neutral. A neutral serving many LED drivers can carry substantial current even when the
phases are balanced. This is why you must never treat a neutral as "dead" (next lesson), and
why multiwire branch circuits demand care (LT4).

## Key Takeaways
- 120/240 V single-phase: 120 V hot-to-neutral, 240 V hot-to-hot.
- Wye systems: line-to-line = line-to-neutral × 1.732 (120→208, 277→480).
- Most commercial lighting runs at 277 V from a 480Y/277 V panel to reduce current and voltage drop.
- Identify the system from the panel label, bus arrangement and posted conductor ID — then verify with a meter.
- Predict every reading before measuring; unexpected values mean stop and investigate.
- The neutral carries unbalanced and harmonic current — it is a current-carrying conductor.
