---
title: Putting It Together — Complete Circuit Sizing & Voltage Drop
minutes: 50
video:
video_suggestion: >
  A foreman and apprentice size a real lighting circuit from the drawings: they pull the panel
  schedule, measure the run length on the plan, count conductors in the home run, and work through
  ampacity, OCPD, EGC, voltage drop and conduit size on a printed worksheet. End by comparing the
  result with the engineer's specified wire size.
---

## The Complete Sizing Sequence

On the job, conductor sizing is rarely a single table lookup. Use this checklist every time:

1. **Load** — Determine the load in amperes; identify continuous vs. non-continuous.
2. **OCPD** — Non-continuous + 125% of continuous → round up to a standard rating (240.6(A)).
3. **Minimum conductor (terminations)** — Ampacity at the termination column (60°C or 75°C) ≥
   the 125% value.
4. **Conditions of use** — Apply temperature correction and adjustment to the insulation-column
   ampacity; the result must be ≥ the actual load and must be protected by the OCPD (240.4).
5. **Small-conductor limits** — 240.4(D).
6. **Voltage drop** — Upsize if needed for performance.
7. **EGC** — Table 250.122, increased proportionally if conductors were upsized (250.122(B)).
8. **Raceway** — Size for fill (EA2-C04).

## Voltage Drop

The NEC addresses voltage drop for general circuits only in **informational notes** (such as the
notes to 210.19 and 215.2), which suggest that branch circuits sized for no more than about 3%
drop, and feeders plus branch circuits combined no more than about 5%, provide reasonable
efficiency. Informational notes are not enforceable requirements, but **project specifications and
energy codes often make voltage drop mandatory**, and excessive drop causes real problems:
dimming, driver dropout, motor overheating and nuisance trips.

### Formulas (approximate, using K)

- **Single-phase:** VD = (2 × K × I × L) ÷ CM
- **Three-phase:** VD = (1.732 × K × I × L) ÷ CM
- To find the minimum conductor size: CM = (2 × K × I × L) ÷ VD (use 1.732 for three-phase)

Where:
- K ≈ **12.9** for copper and ≈ **21.2** for aluminum (ohm-circular mils per foot, approximate at
  operating temperature)
- I = load current in amperes
- L = **one-way** length in feet
- CM = circular-mil area of the conductor (Chapter 9, Table 8)

| AWG | 12 | 10 | 8 | 6 | 4 | 3 | 1/0 |
|---|---|---|---|---|---|---|---|
| Circular mils | 6,530 | 10,380 | 16,510 | 26,240 | 41,740 | 52,620 | 105,600 |

### Worked Example 1 — 120 V vs. 277 V
A 16 A load is 150 ft (one way) from the panel on 12 AWG Cu.

VD = (2 × 12.9 × 16 × 150) ÷ 6,530 = 61,920 ÷ 6,530 = **9.48 V**

| System | VD % with 12 AWG | VD % with 10 AWG (5.97 V) |
|---|---|---|
| 120 V | 9.48 ÷ 120 = **7.9%** ✗ | 5.97 ÷ 120 = 5.0% ✗ |
| 277 V | 9.48 ÷ 277 = **3.4%** ✗ (slightly over 3%) | 5.97 ÷ 277 = **2.2%** ✓ |

For 120 V at 3% (3.6 V): CM = 61,920 ÷ 3.6 = 17,200 cmil → 8 AWG (16,510) is just short, so
**6 AWG** meets 3% strictly. This shows why commercial lighting runs at 277 V.

### Worked Example 2 — Three-Phase Feeder
A 480 V, 3-phase feeder carries 100 A, 250 ft one way, on 3 AWG Cu.
VD = (1.732 × 12.9 × 100 × 250) ÷ 52,620 = 558,570 ÷ 52,620 = **10.6 V** → 10.6 ÷ 480 = **2.2%** ✓

Remember: if you upsize conductors for voltage drop, **upsize the EGC proportionally**.

## Full Worked Example — LED Lighting Home Run

**Given:** Two 480Y/277 V, 3-phase, 4-wire multiwire branch circuits feed LED troffers (nonlinear
load). Each phase conductor carries **16 A continuous**. All eight circuit conductors (6 hots +
2 neutrals) share one EMT home run in a 30°C ceiling space. Terminations are 75°C. The longest
run is 120 ft.

| Step | Work | Result |
|---|---|---|
| 1. OCPD | 16 × 1.25 = 20 A | 20 A, 3-pole breakers (or handle-tied single-poles, as permitted) |
| 2. Minimum conductor | Need ≥ 20 A at 75°C | 12 AWG Cu (25 A) ✓ |
| 3. Count CCCs | 6 hots + 2 neutrals (nonlinear, so neutrals count) | **8 CCC** → 70% |
| 4. Correct/adjust | 12 AWG THHN 90°C = 30 A × 1.00 × 0.70 | **21 A** ≥ 16 A load ✓; 21 A ≥ 20 A OCPD ✓ |
| 5. 240.4(D) | 12 AWG Cu ≤ 20 A | ✓ |
| 6. Voltage drop | (2 × 12.9 × 16 × 120) ÷ 6,530 = 7.59 V → 7.59 ÷ 277 | **2.7%** ✓ |
| 7. EGC | 20 A → 12 AWG Cu (no upsizing) | 12 AWG Cu |
| 8. Raceway | 9 × 12 AWG THHN (0.0133 in² each) = 0.1197 in² | ½ in. EMT allows 0.122 in² at 40% — legal but tight; ¾ in. is the practical choice |

Notes on this example:
- The voltage drop uses the single-phase formula as a conservative check for one phase conductor
  and its neutral; for a balanced multiwire circuit the actual drop is lower.
- Multiwire branch circuits require all ungrounded conductors to be simultaneously disconnected
  at the panel (210.4(B)), and the neutrals must be grouped with their associated hots.

> **Safety:** A multiwire branch circuit shares a neutral. Opening the neutral on a live MWBC can
> put up to line-to-line voltage across loads and expose you to current on a "dead" neutral. Turn
> off all poles of the circuit, LOTO, and verify absence of voltage on every conductor — including
> the neutral — before working.

## Common Mistakes

- Applying 125% **and** derating, then also refusing next size up where it is allowed (oversizing)
- Forgetting that neutrals of nonlinear 3-phase circuits count as current-carrying
- Using the 90°C column as the final answer with 75°C terminations
- Upsizing phase conductors for voltage drop but leaving the EGC at minimum size
- Using next size up on multi-outlet receptacle branch circuits

## Key Takeaways
- Follow the eight-step sequence: load, OCPD, termination check, conditions of use, 240.4(D),
  voltage drop, EGC, raceway.
- Voltage drop is advisory in the NEC's informational notes but often mandatory by specification.
- VD = 2KIL ÷ CM (single-phase) or 1.732KIL ÷ CM (three-phase), with L one-way.
- Higher system voltage dramatically reduces percent voltage drop for the same load.
