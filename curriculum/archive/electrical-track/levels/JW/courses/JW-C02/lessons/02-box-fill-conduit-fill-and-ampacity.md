---
title: Box Fill, Conduit Fill, and Ampacity Adjustment
minutes: 50
video:
video_suggestion: >
  The instructor works three problems with the code book open on a document camera: a box fill
  count for a 4-in square box with cables, a device, and clamps; a mixed-conductor conduit fill
  using Chapter 9 Tables 4 and 5; and an ampacity problem with ambient correction and more than
  three current-carrying conductors, ending with the 240.4(D) check.
---

## Box Fill (314.16)
Box fill compares the **volume required** by the contents with the **volume of the box**
(Table 314.16(A) for standard metal boxes, or the marked volume of nonmetallic boxes, plus any
marked plaster rings, extension rings, or domed covers).

### Volume Allowance per Conductor (Table 314.16(B))
| Conductor | in³ |
|---|---|
| 18 AWG | 1.50 |
| 16 AWG | 1.75 |
| 14 AWG | 2.00 |
| 12 AWG | 2.25 |
| 10 AWG | 2.50 |
| 8 AWG | 3.00 |
| 6 AWG | 5.00 |

### Counting Rules (314.16(B)(1)–(5))
| Item | Count |
|---|---|
| Each conductor originating outside the box and terminating or spliced in it | 1 each |
| Conductor passing through without splice or termination | 1 |
| Conductor that does not leave the box (pigtail, jumper) | 0 |
| Internal cable clamps (one or more) | 1, based on the largest conductor |
| Luminaire studs or hickeys (each type) | 1 each, largest conductor |
| Each device yoke (switch, receptacle) | **2**, based on the largest conductor connected to the device |
| Device wider than a single 2-in box | 2 for each gang required |
| All equipment grounding conductors | **1** total, based on the largest EGC (plus 1 more for isolated-ground EGCs, ¼ volume rule applies) |
| Small fixture wires from a domed luminaire canopy (up to four, smaller than 14 AWG) | 0 |

### Common Metal Box Volumes (Table 314.16(A))
| Box | in³ |
|---|---|
| 4 × 1½ square | 21.0 |
| 4 × 2⅛ square | 30.3 |
| 4¹¹⁄₁₆ × 1½ square | 29.5 |
| 4¹¹⁄₁₆ × 2⅛ square | 42.0 |
| 3 × 2 × 2½ device | 12.5 |
| 3 × 2 × 3½ device | 18.0 |

### Example 1
A 4 × 2⅛ square box contains two 12/2 NM cables and one 12/3 NM cable (each with ground),
one receptacle, and internal clamps.
- Insulated conductors: 2 + 2 + 3 = 7 × 2.25 = 15.75
- All grounds: 1 × 2.25 = 2.25
- Receptacle: 2 × 2.25 = 4.50
- Clamps: 1 × 2.25 = 2.25
- **Total = 24.75 in³** ≤ 30.3 in³ → OK. (A 4 × 1½ box at 21.0 in³ would be too small unless a
  marked plaster ring adds enough volume.)

## Conduit Fill (Chapter 9)
### Percent Fill (Chapter 9, Table 1)
| Number of conductors | Max fill |
|---|---|
| 1 | 53% |
| 2 | 31% |
| Over 2 | 40% |
| Nipple ≤ 24 in | 60% (Note 4) |

### Same-Size Conductors — Use Annex C
Annex C tables give the maximum number of same-size conductors directly. You can also divide:
the 40% area of the raceway (Table 4) by the conductor area (Table 5).

| Selected values | Area (in²) |
|---|---|
| 3/4 EMT, 40% | 0.213 |
| 1 EMT, 40% | 0.346 |
| 1¼ EMT, 40% | 0.598 |
| 12 AWG THHN | 0.0133 |
| 10 AWG THHN | 0.0211 |
| 8 AWG THHN | 0.0366 |
| 6 AWG THHN | 0.0507 |
| 4 AWG THHN | 0.0824 |

### Example 2
How many 12 AWG THHN in 3/4 EMT? 0.213 ÷ 0.0133 = 16.0 → **16** (matches Annex C, Table C.1).
Note 7 to Chapter 9 permits rounding up when the decimal is 0.8 or larger.

### Example 3 — Mixed Sizes
Three 4 AWG THHN and one 8 AWG THHN:
- 3 × 0.0824 = 0.2472; 1 × 0.0366 = 0.0366 → **0.2838 in²**
- 3/4 EMT (0.213) — too small. **1 EMT (0.346)** — OK.

Remember that bare EGCs use the bare conductor area from Table 8, and compact conductors use
Table 5A.

## Ampacity: Correction and Adjustment (310.15)
Start with Table 310.16 (not more than three current-carrying conductors in raceway or cable,
30°C ambient). Then:
1. **Ambient temperature correction** (310.15(B)) when ambient is not 30°C.
2. **Adjustment** for more than three current-carrying conductors (310.15(C)(1)).
3. Apply both by multiplying. Start from the conductor's insulation temperature column (e.g.,
   90°C for THHN) for derating, but the final ampacity **may not exceed the terminal
   temperature rating** (usually 75°C, or 60°C for ≤ 100-A terminations unless marked) per
   110.14(C).
4. Check **240.4(D)** small-conductor OCPD limits (14 AWG Cu 15 A, 12 AWG Cu 20 A, 10 AWG Cu
   30 A).

### Adjustment Factors (Table 310.15(C)(1))
| Current-carrying conductors | Factor |
|---|---|
| 4–6 | 80% |
| 7–9 | 70% |
| 10–20 | 50% |
| 21–30 | 45% |
| 31–40 | 40% |
| 41 and above | 35% |

### Ambient Correction (selected, based on 30°C)
| Ambient | 90°C column | 75°C column |
|---|---|---|
| 31–35°C | 0.96 | 0.94 |
| 36–40°C | 0.91 | 0.88 |
| 41–45°C | 0.87 | 0.82 |
| 46–50°C | 0.82 | 0.75 |

### Example 4
Nine current-carrying 10 AWG THHN copper conductors in one raceway, ambient 40°C.
- 90°C ampacity: 40 A
- × 0.91 (ambient) × 0.70 (7–9 conductors) = **25.5 A**
- Compare with 75°C terminal limit (35 A) — 25.5 A is lower, so 25.5 A governs.
- OCPD: a **25-A** device protects the conductors directly. Under 240.4(B), the next higher
  standard rating (30 A) is permitted only when the device is 800 A or less and the circuit is
  not a branch circuit supplying more than one receptacle for cord-and-plug-connected portable
  loads. In every case 240.4(D) caps 10 AWG copper at 30 A.

### What Counts as Current-Carrying? (310.15(E), (F))
- EGCs and bonding conductors: **not** counted.
- Neutral carrying only the unbalanced current of the other conductors of the same circuit
  (e.g., 3-wire single-phase, 4-wire 3-phase with linear loads): **not** counted.
- Neutral of a 4-wire, 3-phase wye where the major portion of load is nonlinear (LED drivers,
  electronics): **counted**.
- Neutral of a 3-wire circuit from a 4-wire 3-phase wye (two phases + neutral): **counted**.

> **Safety:** Derating exists because conductors bundled together or in hot spaces cannot
> shed heat. Overloaded insulation degrades and fails — often as an arcing fault. In the field,
> look for discolored insulation and hot terminals with an IR thermometer from a safe distance
> before handling, and treat any overheated equipment as energized until locked out and verified.

## Key Takeaways
- Box fill: devices count 2, all EGCs count 1, clamps count 1, pigtails count 0.
- Conduit fill: 40% for over two conductors; Table 4 for raceway area, Table 5 for conductor area;
  Annex C for same-size conductors.
- Ampacity: Table 310.16 × ambient correction × adjustment, limited by terminal temperature rating.
- Always finish with the 240.4(D) small-conductor check.
- Know which neutrals count as current-carrying.
