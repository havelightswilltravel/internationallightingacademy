---
title: Reading Table 310.16 & Termination Temperature Limits
minutes: 45
video:
video_suggestion: >
  Close-up tour of conductor markings (THHN/THWN-2, XHHW-2) and breaker and lug labels showing
  "60/75°C" and "75°C" ratings, followed by an over-the-shoulder walk through Table 310.16 in the
  code book, finding the right row and column for several examples and explaining why the
  termination rating usually controls.
---

## What Ampacity Means

**Ampacity** is the maximum current, in amperes, that a conductor can carry continuously under
its conditions of use without exceeding its temperature rating. Heat is the enemy: every
conductor has resistance, current produces I²R heat, and insulation breaks down if it runs hotter
than its rating. Ampacity depends on:
- Conductor material (copper or aluminum) and size
- The insulation's temperature rating
- The surrounding (ambient) temperature
- How many current-carrying conductors are bundled together and can't shed heat

## Table 310.16 — the Workhorse Table

Table 310.16 gives ampacities for insulated conductors rated up to 2000 V, with **not more than
three current-carrying conductors** in a raceway, cable or earth (directly buried), based on an
**ambient temperature of 30°C (86°F)**. Its columns are grouped by material and insulation
temperature rating:

| Column | Typical insulation types |
|---|---|
| 60°C (140°F) | TW, UF |
| 75°C (167°F) | THW, THWN, XHHW, USE, RHW |
| 90°C (194°F) | THHN, THWN-2, XHHW-2, THHW (dry), RHW-2, USE-2 |

Selected **copper** values (verify against your code book):

| Size (AWG/kcmil) | 60°C | 75°C | 90°C |
|---|---|---|---|
| 14 | 15 | 20 | 25 |
| 12 | 20 | 25 | 30 |
| 10 | 30 | 35 | 40 |
| 8 | 40 | 50 | 55 |
| 6 | 55 | 65 | 75 |
| 4 | 70 | 85 | 95 |
| 3 | 85 | 100 | 115 |
| 2 | 95 | 115 | 130 |
| 1 | 110 | 130 | 145 |
| 1/0 | 125 | 150 | 170 |
| 2/0 | 145 | 175 | 195 |
| 3/0 | 165 | 200 | 225 |
| 4/0 | 195 | 230 | 260 |
| 250 | 215 | 255 | 290 |
| 350 | 260 | 310 | 350 |
| 500 | 320 | 380 | 430 |

Selected **aluminum** values, 75°C column: 4 AWG = 65 A; 2 AWG = 90 A; 1/0 = 120 A; 2/0 = 135 A;
3/0 = 155 A; 4/0 = 180 A; 250 kcmil = 205 A.

> **Note:** The asterisked small sizes (14, 12, 10 AWG) carry an important footnote referring to
> 240.4(D), which limits their overcurrent protection regardless of the table value. Lesson 3
> covers this.

## Reading Wire Markings

THHN/THWN-2 is the most common building wire you will pull. Read the jacket:
- **T** — thermoplastic insulation
- **HH** — high heat (90°C)
- **W** — rated for wet locations
- **N** — nylon outer jacket
- **-2** — 90°C rating in **wet** as well as dry locations

A conductor marked only THHN/THWN (no -2) is 90°C in dry locations but only **75°C** in wet
locations. Underground raceways and raceways in exterior locations are wet locations.

## The Termination Rule — 110.14(C)

A conductor is only as good as the weakest point in the circuit, and that is usually the
**terminal** on the breaker, switch, or equipment. Section 110.14(C) says, in summary:

| Circuit | Use the ampacity from the column … |
|---|---|
| 100 A or less, **or** conductors 14 AWG through 1 AWG | **60°C**, unless the equipment is listed and identified for 75°C (most modern breakers and panels are marked 60/75°C or 75°C) |
| Over 100 A, **or** conductors larger than 1 AWG | **75°C**, unless the equipment is listed and identified for higher |
| Separately installed pressure connectors | Rating of the connector |

You may use a **90°C** conductor's higher ampacity as the **starting point** for correction and
adjustment (Lesson 2), but the **final** ampacity used must not exceed the termination-column
value for that size.

### Worked Example 1
A 3/0 AWG copper THHN feeder lands on a 200 A breaker with 75°C terminals.
- 90°C column: 225 A
- 75°C column (termination limit): **200 A**
- Usable ampacity = **200 A** (the lower of the two)

### Worked Example 2
A 6 AWG copper THHN conductor terminates on equipment marked 60°C only.
- 90°C column = 75 A, 75°C = 65 A, 60°C = **55 A**
- Usable ampacity = **55 A**. If the equipment were marked 75°C, it would be 65 A.

### Worked Example 3 — Aluminum
A 4/0 AWG aluminum XHHW-2 feeder, 75°C terminations, over 100 A:
- Use the 75°C aluminum column → **180 A**.

> **Safety:** Terminal overheating is a leading cause of electrical fires. Torque every lug to
> the manufacturer's specified value with a calibrated torque tool (110.14(D) requires the use of
> such a tool where a torque value is marked), use only connectors listed for the conductor
> material (AL, CU, or AL/CU), and never re-use a lug designed for single use. Terminations are
> made de-energized under LOTO.

## Higher Temperature Columns: When Do They Help?

Most of the time you'll buy 90°C THHN/THWN-2 even though the terminations are 75°C. The 90°C
rating gives you headroom when you must **derate** for high ambient temperatures or for bundling
many conductors. You'll see this in action next lesson.

## Other Ampacity Tables (Awareness)

- **Table 310.17** — single conductors in free air
- **Table 310.15(B)/(C) correction and adjustment tables** — modify Table 310.16 values
- **Table 310.12** — 120/240 V single-phase dwelling services and feeders (residential only)
- **Annex B / engineering supervision** — ampacities calculated under engineering supervision

## Key Takeaways
- Table 310.16 assumes no more than three current-carrying conductors and a 30°C ambient.
- Pick the column by insulation rating, but the **termination** rating (usually 60°C or 75°C) caps
  the usable ampacity.
- Circuits 100 A or less (or 14–1 AWG) default to 60°C terminations unless equipment is marked
  75°C; over 100 A uses 75°C.
- THHN/THWN without "-2" is only 75°C in wet locations.
- Torque terminations to specification with a calibrated tool.
