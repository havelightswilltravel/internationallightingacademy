---
title: Introduction to Load Calculations
minutes: 50
video:
video_suggestion: >
  Instructor completes a simple single-family dwelling load calculation on a worksheet with
  the NEC open, explaining each line, then sketches how a small office calculation differs.
---

## Why Load Calculations Matter

A load calculation determines the minimum size of a service or feeder. Too small and the
service overheats or trips; much too large and the owner pays for copper and gear they don't
need. At EA3 you need to understand the **method**; EA4-C01 goes deeper into the standard and
optional methods and full commercial calculations.

> **Code edition note:** In the 2023 NEC, branch-circuit, feeder and service load calculations
> are in **Article 220**. The **2026 NEC** relocated load-calculation content into a new
> **Article 120** (in the new Chapter 1 organization), and section numbers changed. Use the
> edition your AHJ has adopted — this lesson uses 2023 NEC Article 220 numbering.

## The Basic Approach

1. Determine the **connected loads** (lighting, receptacles, appliances, motors, HVAC).
2. Use the code's **unit loads** where loads are not yet known (VA per square foot).
3. Apply permitted **demand factors** — not everything runs at once.
4. Apply **125%** to continuous loads (and to the largest motor) where the code requires it.
5. Total the VA and convert to amps:
   - Single-phase: I = VA / V
   - Three-phase: I = VA / (V x 1.732)

## Dwelling Unit Example (Standard Method, Simplified)

**House:** 2,000 ft² (outside dimensions, livable area), 120/240 V single-phase. Loads: 12 kW
range, 5.5 kW dryer, 4.5 kW water heater, 4.8 kVA air conditioner, 3 kW electric heat (not
used simultaneously with A/C).

| Step | Load | Calculation | VA |
|---|---|---|---|
| 1 | General lighting & receptacles | 2,000 ft² x 3 VA/ft² (Table 220.12) | 6,000 |
| 2 | Small-appliance circuits | 2 x 1,500 VA (220.52(A)) | 3,000 |
| 3 | Laundry circuit | 1 x 1,500 VA (220.52(B)) | 1,500 |
|  | **Subtotal** |  | **10,500** |
| 4 | Apply Table 220.42 demand | First 3,000 VA at 100% = 3,000; remaining 7,500 at 35% = 2,625 | **5,625** |
| 5 | Range (one, 12 kW) | Table 220.55, Column C | 8,000 |
| 6 | Dryer | 5,000 W or nameplate, whichever is larger (220.54) | 5,500 |
| 7 | Fixed appliances | Water heater only (fewer than four, so 100% per 220.53) | 4,500 |
| 8 | Heating vs. A/C | Larger of the noncoincident loads (220.60): A/C 4,800 vs heat 3,000 | 4,800 |
|  | **Total** |  | **28,425** |

Service current = 28,425 VA / 240 V = **118.4 A**. The minimum standard service is 125 A;
most contractors would install 150 A or 200 A for future loads such as an EV charger. (A
one-family dwelling service can never be less than 100 A per 230.79(C).)

Note: the general lighting unit load already includes general-use receptacles in a dwelling —
you do not add 180 VA per receptacle as you would in commercial work.

## Small Office Example (Simplified)

**Office:** 10,000 ft², 208Y/120 V three-phase. Number of receptacles unknown.

| Step | Load | Calculation | VA |
|---|---|---|---|
| 1 | General lighting | 10,000 ft² x 1.3 VA/ft² (Table 220.12, office) = 13,000 VA, continuous x 125% | 16,250 |
| 2 | Receptacles | Larger of 180 VA per outlet or 1 VA/ft² (220.14(K)) = 10,000 VA; Table 220.44 demand: first 10 kVA at 100% | 10,000 |
|  | **Subtotal before HVAC and equipment** |  | **26,250** |

Current = 26,250 / (208 x 1.732) = 26,250 / 360.3 ≈ **72.9 A** — before HVAC, water heating,
and other equipment, which are added at their nameplate ratings with the factors the code
requires (motors at 125% of the largest, per Article 430).

Real projects often use actual lighting design load instead of the unit load when an energy
code is in force; the 2023 NEC 220.12(B) allows this under specific conditions. Follow the
engineer's calculations on the drawings.

## Reading Demand on Existing Buildings

When adding load to an existing service, 220.87 permits using the **maximum demand data** for a
recent one-year period (or a 30-day metered period under the stated conditions), multiplied by
125%, plus the new load. The utility or a power-quality recorder supplies the data.

**Example:** Peak demand last year was 180 kVA on a 480Y/277 V, 400 A service.
180 x 1.25 = 225 kVA. New load: 50 kVA. Total 275 kVA.
I = 275,000 / (480 x 1.732) = 275,000 / 831.4 ≈ **331 A** — fits under 400 A.

> **Safety:** Load-study instruments and current clamps are installed on energized conductors
> inside service and distribution equipment. That is energized work under NFPA 70E: shock and
> arc-flash risk assessment, PPE per the label, and only by qualified persons. Use CT/clamp
> leads and meters rated for the voltage and measurement category.

## Key Takeaways
- 2023 NEC load calculations are in Article 220; the 2026 NEC moved them to new Article 120.
- Use unit loads, demand factors, and 125% for continuous loads.
- Dwelling example: 3 VA/ft² plus small-appliance and laundry circuits, Table 220.42 demand,
  then range, dryer, appliances and the larger of heat or A/C.
- Office lighting uses 1.3 VA/ft² (2023 Table 220.12) at 125% as a continuous load.
- Existing services may be evaluated with one year of maximum demand data x 125% (220.87).
