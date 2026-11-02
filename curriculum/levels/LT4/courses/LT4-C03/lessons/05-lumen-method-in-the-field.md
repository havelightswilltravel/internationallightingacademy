---
title: Predicting Light Levels with the Lumen Method
minutes: 35
video:
video_suggestion: >
  A senior tech stands in an empty office with a tape measure, a calculator app and a printed
  manufacturer CU table. She measures the room and mounting heights, works out the room cavity
  ratio, reads the CU, applies light loss factors and predicts the average footcandles for a
  proposed retrofit kit. After the kits are installed, she runs a meter grid at night and compares
  the measured average to her prediction on a whiteboard, explaining the difference.
---

## Why a Senior Tech Needs a Quick Calculation

A customer asks, "If we put this lower-wattage kit in all 20 troffers, will the room still be bright
enough?" Lighting software (AGi32, Visual, DIALux and similar) gives the most complete answer, but
in the field you often need a fast, defensible estimate **before** anyone orders material. The
**lumen method** (also called the zonal-cavity method) predicts the **average maintained
illuminance** on the work plane of a regular-shaped room with an even fixture layout. It does not
show hot spots, dark corners or uniformity – that still needs a point-by-point calculation or a
meter survey.

## The Formula

**Average maintained illuminance (fc) = (N × L × CU × LLF) ÷ Area (ft²)**

| Symbol | Meaning | Where you get it |
|---|---|---|
| N | Number of luminaires | Count or proposed layout |
| L | Lumens per luminaire (delivered) | Manufacturer photometric report / spec sheet |
| CU | Coefficient of utilization – fraction of luminaire lumens that reach the work plane | Manufacturer CU table for that exact luminaire or kit |
| LLF | Total light loss factor | Product of individual loss factors (below) |
| Area | Floor area of the room | Tape or laser measure |

Use square meters and you get lux. Rearranged to find the number of fixtures for a target:

**N = (Target fc × Area) ÷ (L × CU × LLF)** – then round up and check that the layout spacing works.

## Step 1: Room Cavity Ratio (RCR)

The CU depends on the room's shape. A small, tall room loses more light to the walls than a big,
low one. The **room cavity ratio** captures this:

**RCR = 5 × h × (Length + Width) ÷ (Length × Width)**

where **h** is the height of the "room cavity" – from the luminaire plane down to the work plane.
For recessed troffers in a 9 ft ceiling with 2.5 ft desks, h = 6.5 ft. Low RCR (about 1) means a
large open room; high RCR (7–10) means a narrow corridor or small, tall room.

The full zonal-cavity method also computes ceiling and floor cavity ratios and "effective"
reflectances. For recessed or surface fixtures over a typical work plane, the simplified version
above is good enough for field checks.

## Step 2: Coefficient of Utilization

The manufacturer's photometric report includes a **CU table**: rows for RCR 0–10, columns for
combinations of ceiling / wall / floor reflectance (for example 80/50/20 means 80% ceiling, 50%
walls, 20% floor). Pick the column that matches the real room – light ceiling tile is often about
80%, painted walls 30–50%, carpet 10–20%. Interpolate between RCR rows if needed.

> **Field point:** A retrofit kit installed in an old troffer has its **own** photometry. Use the
> kit manufacturer's CU table for the kit-in-housing combination, not the original fixture's data.
> If the kit maker cannot supply a photometric file, that is a warning sign.

## Step 3: Light Loss Factors

Light loss factors reduce the brand-new ("initial") output to the level you can count on over time
("maintained"). Multiply them together.

| Factor | What it accounts for | Typical field value (illustrative) |
|---|---|---|
| LLD – lumen depreciation | LED output fades with hours; use the manufacturer's projected maintenance (for example L85 or L90 data from LM-80/TM-21) at the design life | 0.85–0.95 |
| LDD – luminaire dirt depreciation | Dirt on lenses and reflectors between cleanings | 0.80 (dirty industrial) to 0.95 (clean office) |
| RSDD – room surface dirt | Walls and ceiling getting darker | 0.90–0.98 |
| Other (non-recoverable) | Ambient temperature, input voltage, driver output settings, high-end trim | Usually 1.0 for LED unless trim is set |

**Recoverable** losses (dirt) come back when you clean. **Non-recoverable** losses (LED depreciation,
temperature) do not. Old fluorescent calculations also included ballast factor and lamp burnouts;
for integrated LED products the delivered lumens already include the driver.

## Worked Example 1: Predict a Room

A training room is 40 ft × 30 ft (1,200 ft²), ceiling 9 ft, desks 2.5 ft. It has 20 recessed LED
troffers rated 4,000 delivered lumens each. Reflectances are 80/50/20.

1. RCR = 5 × 6.5 × (40 + 30) ÷ (40 × 30) = 2,275 ÷ 1,200 = **1.9**
2. From the manufacturer's table at RCR 2, 80/50/20: **CU = 0.68** (our example value)
3. LLF = LLD 0.90 × LDD 0.95 = **0.855**
4. Maintained average = 20 × 4,000 × 0.68 × 0.855 ÷ 1,200 = **38.8 fc**
5. Initial average (new and clean, LLF = 1.0) = 20 × 4,000 × 0.68 ÷ 1,200 = **45.3 fc**

The gap between initial and maintained is the "design cushion" – the reason a new installation often
reads above the target.

## Worked Example 2: Check a Retrofit Before Committing

The customer's target is **30 fc maintained**. A sales rep proposes a 3,200-lumen kit for the same
20 housings. The kit's photometry gives **CU = 0.72** at RCR 1.9 and the same reflectances.

- Maintained = 20 × 3,200 × 0.72 × 0.855 ÷ 1,200 = **32.8 fc** – meets 30 fc. Proceed to a trial
  install.
- The rep also suggests removing four fixtures (16 kits): 16 × 3,200 × 0.72 × 0.855 ÷ 1,200 = **26.3 fc**
  – **short of target**, and the wider spacing will hurt uniformity. Do not recommend it.
- Working backward: N = 30 × 1,200 ÷ (3,200 × 0.72 × 0.855) = 36,000 ÷ 1,970 = 18.3 → **19 fixtures
  minimum**, and only if the layout still meets the spacing criterion on the spec sheet.

Write these numbers into the proposal so the customer (and your manager) can see the basis.

## Step 4: Verify with a Meter Survey

After installation (or on the trial room), run the survey from lesson 02: night or daylight
subtracted, lights stabilized, controls at full output, a repeatable grid at the work plane. Compare
the measured average to the **initial** prediction, because the system is new and clean.

Example: predicted initial for the kit = 20 × 3,200 × 0.72 ÷ 1,200 = **38.4 fc**. Measured
average = **35.6 fc**, about 7% low. Reasonable explanations:

- Actual reflectances lower than assumed (dark carpet, wood paneling, tall bookcases) – measure them
- Furniture and partitions blocking light at some grid points
- Grid points close to walls, where illuminance is always lower than the room average
- Meter tolerance (often several percent) and calibration
- Driver or high-end trim set below 100%, or a controls override not applied
- Input voltage or temperature effects

A difference within about 10% usually means the prediction and installation agree. A gap of 15–20%
or more calls for investigation: wrong product shipped, trim left on, wrong CU column, or a
photometric file that does not match the installed kit.

> **Safety:** Removing lenses or kit panels to read labels or confirm product means working on the
> fixture: apply LOTO and verify absence of voltage (live-dead-live) before opening the luminaire.
> Use a ladder or MEWP that is rated and set up correctly.

## Key Takeaways
- Average fc = N × lumens × CU × LLF ÷ area; rearrange to find the number of fixtures needed.
- RCR describes room shape; the CU comes from the manufacturer's table for that exact product and kit.
- LLF combines LED lumen depreciation and dirt; initial levels run above maintained targets.
- Check every retrofit or fixture-reduction proposal against the target before ordering.
- Verify with a meter survey, compare to the initial prediction and explain any difference.
