---
title: Continuous Loads & Overcurrent Device Selection
minutes: 50
video:
video_suggestion: >
  In a shop, the instructor lays out standard breaker ratings and fuses, shows a breaker's
  interrupting rating and terminal temperature markings, and points out a 100%-rated device label.
  Then at a whiteboard, sizes a lighting branch circuit and a panel feeder with continuous and
  non-continuous loads, choosing the OCPD and checking the conductor.
---

## What Overcurrent Protection Protects

An **overcurrent protective device (OCPD)** — a circuit breaker or fuse — opens the circuit when
current exceeds a safe level, whether from an **overload** (too much load for too long), a
**short circuit** (hot-to-hot or hot-to-neutral), or a **ground fault** (hot-to-ground). Its main
job under Article 240 is to protect the **conductors**. Equipment may have its own additional
protection requirements.

## Continuous Loads

A **continuous load** is one where the maximum current is expected to continue for **3 hours or
more**. Commercial lighting, office HVAC fans, signs, and many process loads are continuous.
Because breakers and their enclosures are generally tested to carry only 80% of their rating
continuously (unless 100%-rated), the NEC requires extra capacity:

- **Branch-circuit conductors (210.19(A)):** ampacity not less than the non-continuous load plus
  **125%** of the continuous load (before any correction/adjustment); and, separately, the
  ampacity **after** correction and adjustment must be at least the actual load.
- **Branch-circuit OCPD (210.20(A)):** rating not less than the non-continuous load plus **125%**
  of the continuous load.
- **Feeders (215.2 and 215.3):** the same 125% approach.
- **Exception:** where the OCPD and its assembly are **listed for 100% operation**, the 125%
  factor need not be applied to the OCPD (and related conductors per the exception). These are
  uncommon outside large switchboards.

Remember: 125% of a load is the same as dividing by 0.8. A 20 A breaker can serve 16 A of
continuous load (16 × 1.25 = 20).

## Standard OCPD Ratings — 240.6(A)

Standard ampere ratings include: **15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100, 110, 125,
150, 175, 200, 225, 250, 300, 350, 400, 450, 500, 600, 700, 800, 1000, 1200**, and larger. (Check
the table in your code book for the full list.)

## Protecting the Conductor — Section 240.4

| Rule | Summary (paraphrased) |
|---|---|
| **240.4 general** | Conductors are protected at their ampacity (after correction and adjustment) |
| **240.4(B) — next size up** | Where the ampacity doesn't match a standard rating, the next higher standard rating is permitted if: the device is **800 A or less**; the conductors do **not** supply a multi-outlet branch circuit serving receptacles for cord-and-plug-connected portable loads; and the next higher standard rating is used (no further) |
| **240.4(C) — over 800 A** | The conductor ampacity must be equal to or greater than the OCPD rating (no rounding up) |
| **240.4(D) — small conductors** | Unless specifically permitted elsewhere: 14 AWG Cu — 15 A; 12 AWG Cu — 20 A; 10 AWG Cu — 30 A; 12 AWG Al — 15 A; 10 AWG Al — 25 A |
| **240.4(G) — specific applications** | Motors, air-conditioning equipment, welders, fire alarm and others follow their own articles (EA3 covers motors) |

### Worked Example 1 — Next Size Up
A feeder's corrected ampacity is 147.9 A (from Lesson 2) and supplies a panelboard.
- 147.9 A is not a standard rating; the next higher standard rating is **150 A**.
- 150 A ≤ 800 A, and it is a feeder, not a multi-outlet receptacle branch circuit → a **150 A** OCPD
  is permitted — provided 147.9 A also covers the calculated load.

### Worked Example 2 — Lighting Branch Circuit
A 277 V LED lighting circuit carries **16 A continuous**.
1. Minimum OCPD = 16 × 1.25 = **20 A** → 20 A breaker
2. Conductor ampacity before derating must be ≥ 20 A at the termination column → 12 AWG Cu
   (60°C = 20 A; 75°C = 25 A) ✓
3. 240.4(D): 12 AWG Cu max 20 A ✓
4. Check derating if bundled (Lesson 2).

### Worked Example 3 — Panel Feeder
A 208Y/120 V, 3-phase panel has **120 A continuous** and **40 A non-continuous** load per phase.
Terminations are 75°C.

| Step | Calculation | Result |
|---|---|---|
| Minimum OCPD | (120 × 1.25) + 40 = 150 + 40 | 190 A → next standard **200 A** |
| Minimum conductor ampacity | 190 A at 75°C | |
| Conductor | Table 310.16, 75°C Cu: 3/0 = 200 A | **3/0 AWG Cu** |
| Protection check | 200 A conductor on 200 A OCPD | ✓ |
| EGC (Table 250.122, 200 A) | | **6 AWG Cu** |

Would 2/0 AWG Cu (175 A at 75°C) work with next size up to 200 A? **No** — the conductor must
first satisfy the 190 A minimum, and 175 A does not.

## Interrupting Rating and SCCR (110.9 and 110.10)

An OCPD must have an **interrupting rating** at least equal to the available fault current at its
line terminals. A 10,000 A (10 kA) breaker installed where 35 kA is available can rupture
violently during a fault. Equipment **short-circuit current ratings (SCCR)** must also be adequate.
Available fault current is shown on the drawings or on the service label and must be checked
before installing or replacing any OCPD.

> **Safety:** Never replace a breaker or fuse with one of a different type, a higher rating, or a
> lower interrupting rating than specified. Use only breakers listed for the panelboard. Replacing
> an OCPD is done with the equipment de-energized and locked out; if the panel bus must remain
> energized, the work requires a qualified person, an energized work permit where applicable, and
> PPE selected per NFPA 70E.

## Breakers and Fuses at a Glance

| Feature | Circuit breaker | Fuse |
|---|---|---|
| Reset after operation | Yes | Replace |
| Current-limiting | Some models | Many classes (e.g., Class J, RK1) |
| Common commercial uses | Panelboards, switchboards | Disconnect switches, motor circuits, high fault current locations |
| Added functions | GFCI, AFCI, GFPE, shunt trip | — |

## Key Takeaways
- Continuous loads run 3 hours or more; size conductors and OCPDs at 125% of continuous plus 100%
  of non-continuous load.
- OCPDs protect the conductor at its ampacity; next size up is allowed only at 800 A or less and
  not for multi-outlet receptacle branch circuits.
- 14, 12 and 10 AWG Cu are limited to 15, 20 and 30 A unless another article specifically permits more.
- Verify interrupting rating against available fault current.
- Size the EGC from Table 250.122 using the OCPD you select.
