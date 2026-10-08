---
title: Conduit Fill & Pull Box Sizing
minutes: 45
video:
video_suggestion: >
  Instructor works two conduit-fill problems using Chapter 9 Tables 1, 4 and 5 in the code book,
  then checks one against Annex C. Cut to a crew setting up a feeder pull through 2 in. EMT with a
  tugger and lubricant, and a large pull box with the straight-pull and angle-pull dimensions
  marked on it in tape.
---

## The Rules Live in Chapter 9

Each raceway article says the number of conductors must not exceed the percentage fill in
**Chapter 9, Table 1**. The calculation uses three tables:

| Table | Gives you |
|---|---|
| **Chapter 9, Table 1** | Maximum percent fill by number of conductors |
| **Chapter 9, Table 4** | Internal area of each raceway type and trade size (100%, and the 40%, 31% and 53% columns) |
| **Chapter 9, Table 5** | Area of insulated conductors by insulation type and size |
| **Annex C** (informative) | Pre-calculated maximum counts when all conductors are the same size and type |

### Chapter 9, Table 1 — Percent Fill

| Number of conductors | Maximum fill |
|---|---|
| 1 | 53% |
| 2 | 31% |
| Over 2 | **40%** |

Two conductors get the lowest percentage because two round conductors in a raceway can wedge
across the diameter during a pull.

**Important notes to Chapter 9 (paraphrased):**
- **Equipment grounding and bonding conductors are included** in the fill calculation, using their
  actual area (Table 5 for insulated, Table 8 for bare).
- **Nipples** 24 in. or shorter between boxes may be filled to **60%** (and the adjustment factors
  of 310.15(C)(1) do not apply to them).
- When all conductors are the same size and the calculation results in a decimal of **0.8 or
  larger**, you may round up to the next whole number of conductors.
- A multiconductor cable in a raceway is treated as a single conductor using its overall area.

## Selected Values

**EMT internal area (Chapter 9, Table 4):**

| Trade size | Total area (in²) | 40% (in²) |
|---|---|---|
| ½ | 0.304 | 0.122 |
| ¾ | 0.533 | 0.213 |
| 1 | 0.864 | 0.346 |
| 1¼ | 1.496 | 0.598 |
| 1½ | 2.036 | 0.814 |
| 2 | 3.356 | 1.342 |

Other raceway types (RMC, IMC, PVC Schedule 40 and 80, FMC) have **different** areas — PVC
Schedule 80 in particular has a much smaller interior. Always use the row for the raceway you are
actually installing.

**THHN/THWN/THWN-2 conductor area (Chapter 9, Table 5):**

| Size | Area (in²) | Size | Area (in²) |
|---|---|---|---|
| 14 | 0.0097 | 2 | 0.1158 |
| 12 | 0.0133 | 1 | 0.1562 |
| 10 | 0.0211 | 1/0 | 0.1855 |
| 8 | 0.0366 | 2/0 | 0.2223 |
| 6 | 0.0507 | 3/0 | 0.2679 |
| 4 | 0.0824 | 4/0 | 0.3237 |
| 3 | 0.0973 | | |

## Method for Mixed Conductors

1. List every conductor, including EGCs.
2. Multiply each size's count by its Table 5 area.
3. Add the areas.
4. Find the smallest trade size whose **40%** column (for three or more conductors) is equal to or
   greater than the total.

### Worked Example 1 — Panel Feeder
From EA2-C03: four 3/0 AWG THHN (3 phases + neutral) and one 6 AWG THHN EGC in EMT.

| Conductors | Area |
|---|---|
| 4 × 3/0 THHN = 4 × 0.2679 | 1.0716 |
| 1 × 6 THHN = 1 × 0.0507 | 0.0507 |
| **Total** | **1.1223 in²** |

- 1½ in. EMT at 40% = 0.814 in² ✗
- 2 in. EMT at 40% = 1.342 in² ✓ → **2 in. EMT**

### Worked Example 2 — Branch-Circuit Home Run
Twelve 12 AWG THHN circuit conductors plus one 10 AWG THHN EGC in EMT.
- 12 × 0.0133 = 0.1596
- 1 × 0.0211 = 0.0211
- Total = **0.1807 in²** → ½ in. (0.122) ✗; ¾ in. (0.213) ✓ → **¾ in. EMT**

### Worked Example 3 — Same-Size Conductors
How many 12 AWG THHN fit in ½ in. EMT? 0.122 ÷ 0.0133 = 9.17 → **9 conductors**. Annex C's EMT
table shows the same answer. In ¾ in. EMT: 0.213 ÷ 0.0133 = 16.0 → **16**.

> **Field tip:** Legal fill is a maximum, not a target. Long runs, many bends, or large conductors
> pull far more easily at 30–35% fill. Remember also that every current-carrying conductor beyond
> three triggers ampacity adjustment (EA2-C03) — a "full" raceway may force larger wire.

## Pull and Junction Boxes for 4 AWG and Larger (314.28)

When conductors are **4 AWG or larger**, boxes are sized by raceway trade size, not volume:

| Pull type | Minimum dimension |
|---|---|
| **Straight pull** | Length at least **8 ×** the trade size of the largest raceway |
| **Angle or U pull** | Distance from the raceway entry to the opposite wall at least **6 ×** the largest raceway trade size in that row, **plus** the sum of the trade sizes of the other raceways in the same row on the same wall |
| **Between raceway entries enclosing the same conductor** | At least **6 ×** the trade size of the larger raceway |

### Worked Example 4
- **Straight pull** with 3 in. conduits: 8 × 3 = **24 in.** minimum length.
- **Angle pull**: the left wall has one 3 in., one 3 in. and one 2 in. conduit in a single row:
  (6 × 3) + 3 + 2 = **23 in.** minimum to the opposite wall. Repeat the calculation for the other
  wall and use the larger dimension in each direction.

## Planning the Pull

- Count bends (≤ 360° between pull points) and identify pull points before installing the raceway.
- Use lubricant approved for the cable insulation; pull with a rope rated for the tension.
- Feed conductors straight and parallel from reels to prevent crossovers and insulation damage.
- Pull from the end nearest the hardest bends when possible, so tension builds where the run is easiest.

> **Safety:** Pulling rope and tugger lines store enormous energy; a broken rope can whip with
> lethal force. Stand out of the line of the rope, use rated equipment, and keep hands clear of
> sheaves and capstans. Never pull new conductors into a raceway or enclosure that contains
> energized conductors without supervisor authorization and an energized-work assessment —
> de-energize and lock out wherever possible.

## Key Takeaways
- Chapter 9 Table 1: 53% for one conductor, 31% for two, 40% for three or more; nipples 24 in. or
  less may be 60%.
- Include EGCs; use actual insulation areas from Table 5 and the right raceway row in Table 4.
- Annex C is a shortcut only when all conductors are the same size and type.
- Pull boxes for 4 AWG and larger: straight pull 8×; angle pull 6× plus the other raceways in the row.
