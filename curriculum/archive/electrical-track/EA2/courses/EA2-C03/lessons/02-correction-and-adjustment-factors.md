---
title: Temperature Correction & Adjustment (Derating)
minutes: 50
video:
video_suggestion: >
  A short field segment showing a hot mechanical penthouse and a rooftop EMT run, with a surface
  thermometer and the design ambient from the specifications, then a crowded raceway with eight
  current-carrying conductors. Cut to a worksheet where the instructor applies the correction and
  adjustment factors step by step, starting from the 90°C column.
---

## Two Reasons to Derate

Table 310.16 assumes a 30°C (86°F) ambient and no more than three current-carrying conductors.
When real conditions are worse, the conductor can't shed heat as well, so its ampacity must be
reduced:
1. **Ambient temperature correction** — for ambients other than 30°C
2. **Adjustment for more than three current-carrying conductors** — Table 310.15(C)(1)

Both factors multiply the table ampacity, and both can apply at once.

## Ambient Temperature Correction (310.15(B))

The NEC's correction table (based on 30°C) gives a multiplier by ambient temperature and by the
conductor's temperature column. Selected values:

| Ambient °C (°F) | 60°C conductor | 75°C conductor | 90°C conductor |
|---|---|---|---|
| 26–30 (79–86) | 1.00 | 1.00 | 1.00 |
| 31–35 (88–95) | 0.91 | 0.94 | 0.96 |
| 36–40 (97–104) | 0.82 | 0.88 | 0.91 |
| 41–45 (106–113) | 0.71 | 0.82 | 0.87 |
| 46–50 (115–122) | 0.58 | 0.75 | 0.82 |
| 51–55 (124–131) | 0.41 | 0.67 | 0.76 |

Notice that 90°C insulation loses a smaller **percentage** than 60°C insulation at the same
ambient — that is the headroom mentioned last lesson.

### Rooftops
Raceways and cables exposed to direct sunlight on or above rooftops get much hotter than the
surrounding air. Where they are installed **less than 7/8 in. (23 mm)** above the roof, the NEC
requires adding **33°C (60°F)** to the outdoor ambient before choosing the correction factor
(310.15(B)(2)); XHHW-2 conductors have an exception. The simplest field practice: keep rooftop
raceways at least 7/8 in. above the roof surface on proper supports — or better, route them
inside the building.

## Adjustment for More Than Three Current-Carrying Conductors — Table 310.15(C)(1)

| Number of current-carrying conductors | Percent of table value |
|---|---|
| 4–6 | 80% |
| 7–9 | 70% |
| 10–20 | 50% |
| 21–30 | 45% |
| 31–40 | 40% |
| 41 and above | 35% |

Adjustment does **not** apply to raceway nipples 24 in. or shorter, and there are other
conditions in 310.15(C)(1) (for example, certain cables without an overall jacket and spacing
conditions) — check the code book.

### What Counts as a Current-Carrying Conductor (310.15(E) and (F))
- Every **ungrounded (hot)** conductor counts.
- A **neutral** that carries only the unbalanced current of the other conductors of the same
  circuit does **not** count (for example, the neutral of a balanced 120/240 V circuit or of a
  3-phase, 4-wire circuit serving linear loads).
- A neutral **does** count when the major portion of the load on a 3-phase, 4-wire wye circuit is
  **nonlinear** (LED drivers, electronic ballasts, computers, VFDs), because harmonic currents add
  in the neutral.
- A neutral of a circuit made up of **two phase conductors and the neutral of a 3-phase wye**
  system counts, because it carries about the same current as the phase conductors.
- **Equipment grounding conductors never count.**

## The Method

1. Start with the ampacity from the column matching the **insulation** (usually 90°C for THHN/THWN-2).
2. Multiply by the **temperature correction** factor.
3. Multiply by the **adjustment** factor.
4. Compare the result to the load — it must be at least equal to the load (Lesson 3 covers
   continuous loads).
5. Check that the result does not exceed the **termination** column ampacity; if it does, the
   termination value limits.

### Worked Example 1 — Bundled Receptacle Circuits
Four 120 V, 20 A receptacle circuits (four hots, four separate neutrals, each neutral carrying
its own circuit's current) share one EMT in a mechanical room with a 38°C (100°F) ambient.
Conductors are 12 AWG THHN copper.

| Step | Value |
|---|---|
| Current-carrying conductors | 4 hots + 4 neutrals = **8** (each neutral carries full current of a 2-wire circuit) |
| 90°C ampacity of 12 AWG Cu | 30 A |
| Temperature correction (36–40°C, 90°C column) | × 0.91 |
| Adjustment (7–9 conductors) | × 0.70 |
| Adjusted ampacity | 30 × 0.91 × 0.70 = **19.1 A** |

19.1 A is less than 20 A. These are multi-outlet receptacle circuits, so the next-size-up rule
(Lesson 3) is **not** allowed. Step up to 10 AWG THHN:
40 × 0.91 × 0.70 = **25.5 A** — now adequate for a 20 A breaker.

### Worked Example 2 — Hot Ambient Feeder
A 3-phase feeder with three 1/0 AWG Cu THHN conductors (neutral not counted) runs through an
area with a 45°C (113°F) ambient.
- 90°C ampacity = 170 A
- Correction (41–45°C, 90°C column) = 0.87
- 170 × 0.87 = **147.9 A**
- Termination check: 75°C column value for 1/0 is 150 A; 147.9 A is lower, so **147.9 A** is the
  conductor's ampacity under these conditions.

### Worked Example 3 — Nonlinear Lighting
A 480Y/277 V, 3-phase, 4-wire circuit supplies LED fixtures (nonlinear). Three hots + one neutral
are in a raceway. The neutral counts → 4 current-carrying conductors → 80% adjustment. With 10 AWG
THHN: 40 × 0.80 = **32 A** (but 10 AWG Cu remains limited to 30 A overcurrent protection by 240.4(D)).

> **Safety:** Derating calculations protect against slow insulation damage that you can't see
> until a fault occurs. If you find a raceway that is hot to the touch or discolored insulation,
> report it. Investigating an overheated circuit means de-energizing, LOTO and verifying absence
> of voltage before opening the raceway system or terminations.

## Key Takeaways
- Derate for ambient above 30°C and for more than three current-carrying conductors — both
  multipliers can apply together.
- Start from the insulation column (often 90°C), apply the factors, then cap at the termination
  column value.
- Rooftop raceways less than 7/8 in. above the roof get a 33°C (60°F) temperature adder.
- Neutrals count when they carry harmonic or unbalanced phase-level current; EGCs never count.
- Next-size-up OCPD is not permitted for multi-outlet receptacle branch circuits.
