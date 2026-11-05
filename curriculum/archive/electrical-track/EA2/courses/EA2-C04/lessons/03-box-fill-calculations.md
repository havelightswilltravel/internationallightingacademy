---
title: Box Fill Calculations (314.16)
minutes: 45
video:
video_suggestion: >
  At a workbench, the instructor lays out a 4 in. square box with a single-gang plaster ring,
  internal cable clamps, two MC cables and a receptacle, and counts each volume allowance out loud
  while filling in a worksheet. Then shows an overfilled box where the device won't seat and the
  insulation is pinched, and corrects it by changing to a deeper box.
---

## Why Box Fill Matters

An overfilled box crowds conductors, pinches insulation behind devices, traps heat and makes
splices hard to inspect. Section 314.16 limits the number of conductors in outlet, device and
junction boxes based on the box **volume** in cubic inches. The method applies to boxes for
conductors 6 AWG and smaller. (Larger conductors use the pull and junction box sizing rules in
314.28, covered in the next lesson.)

## Step 1 — Box Volume

Use the volume from **Table 314.16(A)** for standard metal boxes, or the volume **marked** on the
box. Plaster rings, extension rings and raised covers that are marked with their volume **add** to
the box volume. Selected standard box volumes:

| Box (trade size) | Volume (in³) |
|---|---|
| 4 in. octagon × 1½ in. | 15.5 |
| 4 in. octagon × 2⅛ in. | 21.5 |
| 4 in. square × 1½ in. | 21.0 |
| 4 in. square × 2⅛ in. | 30.3 |
| 4¹¹⁄₁₆ in. square × 1½ in. | 29.5 |
| 4¹¹⁄₁₆ in. square × 2⅛ in. | 42.0 |
| 3 × 2 × 2½ in. device | 12.5 |
| 3 × 2 × 3½ in. device | 18.0 |

## Step 2 — Volume Allowance per Conductor — Table 314.16(B)

| Conductor size (AWG) | Volume allowance (in³) |
|---|---|
| 18 | 1.50 |
| 16 | 1.75 |
| 14 | 2.00 |
| 12 | 2.25 |
| 10 | 2.50 |
| 8 | 3.00 |
| 6 | 5.00 |

## Step 3 — Count the Items (314.16(B)(1)–(5), paraphrased)

| Item | Counts as | Based on |
|---|---|---|
| Each conductor originating outside the box that terminates or is spliced inside | 1 | Its own size |
| Each conductor passing through without a splice | 1 | Its own size |
| An unbroken conductor looped (at least twice the minimum free length required by 300.14) | 2 | Its own size |
| Conductors that originate and stay entirely within the box (pigtails, jumpers) | 0 | — |
| Up to four fixture wires smaller than 14 AWG from a luminaire canopy (and its EGC) | 0 | — |
| One or more **internal** cable clamps | 1 total | Largest conductor present |
| One or more luminaire studs or hickeys (support fittings) | 1 for each type | Largest conductor present |
| Each device yoke or strap (receptacle, switch) | 2 | Largest conductor connected to that device |
| A device wider than a single 2 in. gang | 2 for each gang it requires | Largest conductor connected |
| Equipment grounding conductors (up to four) | 1 total | Largest EGC present |
| Each EGC beyond the first four | ¼ each | Largest EGC present |

Notes:
- External cable connectors (outside the box, such as EMT or MC connectors whose clamping
  portion is outside) are **not** counted. Internal clamps are.
- Isolated-ground EGCs are counted with the EGC allowance.

## Worked Example 1 — Receptacle Box
A 4 in. square × 1½ in. box contains:
- Two 12/2 MC cables, each with a hot, neutral and insulated EGC (12 AWG)
- One set of internal cable clamps
- One duplex receptacle
- A single-gang plaster ring (no volume marked)

| Item | Count | Volume |
|---|---|---|
| Hots and neutrals (2 cables × 2) | 4 × 2.25 | 9.00 |
| EGCs (2 — one allowance) | 1 × 2.25 | 2.25 |
| Internal clamps | 1 × 2.25 | 2.25 |
| Receptacle yoke | 2 × 2.25 | 4.50 |
| **Total required** | | **18.00 in³** |

Box volume = 21.0 in³ ≥ 18.0 in³ ✓ (and the unmarked ring adds nothing to the calculation).

## Worked Example 2 — Junction Box with Mixed Sizes
An EMT junction box (no internal clamps, no devices) contains six 12 AWG and four 10 AWG circuit
conductors, all spliced, plus one 12 AWG and one 10 AWG EGC.

| Item | Count | Volume |
|---|---|---|
| 12 AWG conductors | 6 × 2.25 | 13.50 |
| 10 AWG conductors | 4 × 2.50 | 10.00 |
| EGCs (one allowance, largest = 10 AWG) | 1 × 2.50 | 2.50 |
| **Total required** | | **26.00 in³** |

- 4 in. square × 1½ in. (21.0) ✗
- 4¹¹⁄₁₆ in. square × 1½ in. (29.5) ✓
- 4 in. square × 2⅛ in. (30.3) ✓

### Worked Example 3 — Finding the Maximum Number
How many 12 AWG conductors may be installed in a 4 in. square × 2⅛ in. box with no fittings,
devices or EGCs? 30.3 ÷ 2.25 = 13.47 → **13 conductors** (always round **down**).

## Field Tips

- Calculate before ordering boxes. Switching to deep boxes or 4¹¹⁄₁₆ in. boxes at rough-in is cheap;
  fixing it at trim-out is not.
- A marked plaster ring or extension ring is often the easiest fix for a slightly overfilled box.
- Remember free-length requirements (300.14): at least 6 in. of free conductor at each box, and
  where the box opening is less than 8 in. in any dimension, at least 3 in. must extend outside
  the opening.
- GFCI receptacles, dimmers and occupancy sensors are bulky. Even if the math works, give them
  room.

> **Safety:** When opening an existing box to add conductors or devices, lock out every circuit in
> the box — boxes often contain more than one circuit, including multiwire branch circuits.
> Verify absence of voltage on every conductor before handling splices.

## Key Takeaways
- Box volume comes from Table 314.16(A) or the box/ring marking; conductor allowances from Table 314.16(B).
- Count each entering conductor once, loops twice, internal clamps once, each device yoke twice,
  and all EGCs (up to four) once — each based on the largest conductor involved.
- Pigtails, external connectors and up to four small fixture wires are not counted.
- Round down when finding a maximum conductor count.
