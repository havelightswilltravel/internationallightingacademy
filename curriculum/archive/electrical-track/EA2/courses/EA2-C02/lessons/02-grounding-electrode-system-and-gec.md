---
title: The Grounding Electrode System & GEC Sizing
minutes: 50
video:
video_suggestion: >
  On a commercial job site, a journeyman shows the concrete-encased electrode stub-up (rebar or
  bare copper) coming out of a footing before the pour, then the completed service with the GEC
  routed to the water-pipe connection, the supplemental ground rods and the building steel.
  Close-ups of listed clamps, irreversible compression connectors and the GEC sizing lookup in
  Table 250.66.
---

## Bond Every Electrode That Is Present

Section 250.50 requires that **all** of the grounding electrodes described in 250.52(A)(1) through
(A)(7) that are present at a building be bonded together to form the **grounding electrode
system**. You do not get to pick just one. If a concrete-encased electrode exists in a footing, it
must be used. (There is a limited exception for existing buildings where the concrete-encased
electrode is not accessible without disturbing the concrete.)

## Electrode Types (250.52(A))

| Electrode | Key installation points (paraphrased; verify in the code book) |
|---|---|
| Metal underground water pipe | In direct contact with earth for 10 ft or more; must be supplemented by an additional electrode |
| Metal in-ground support structure | Structural metal in direct contact with earth vertically for 10 ft or more (with or without concrete encasement) |
| Concrete-encased electrode | At least 20 ft of bare copper not smaller than 4 AWG, or of ½ in. or larger steel reinforcing bar, encased in at least 2 in. of concrete, located within and near the bottom of a footing or foundation in direct contact with earth |
| Ground ring | Encircles the building, at least 20 ft of bare copper not smaller than 2 AWG, buried at least 30 in. deep |
| Rod and pipe electrodes | At least 8 ft long; rod diameter and pipe size minimums apply (listed rods may be smaller than unlisted) |
| Plate electrodes | Minimum exposed surface area and thickness specified in 250.52(A)(7) |
| Other local metal underground systems | Piping systems, underground tanks, well casings not bonded to a water pipe |

**Not permitted** as grounding electrodes (250.52(B)): metal underground gas piping and aluminum.
Structures such as swimming pool steel are also excluded from serving as the building electrode.

## Installing Rod Electrodes (250.53)

- Drive the rod so at least 8 ft is in contact with soil. Where rock is hit, the rod may be driven
  at an angle not exceeding 45° from vertical, or laid in a trench at least 30 in. deep.
- The upper end must be flush with or below grade unless the clamp and conductor are protected
  against physical damage.
- A single rod must be supplemented by an additional electrode **unless** it is shown to have a
  resistance to earth of 25 Ω or less. Most contractors simply install two rods rather than test.
- Supplemental rods must be spaced **at least 6 ft** apart. Wider spacing (often a rod length or
  more) gives better results.
- A metal water pipe electrode must always be supplemented by another electrode type.

> **Safety:** Before driving rods or digging, have underground utilities located (call 811 or the
> local one-call center) and confirm private utilities on site. Use hearing and eye protection with
> a rotary hammer, and never strike a rod with a hand sledge while someone holds it.

## Grounding Electrode Conductor (GEC) Sizing — Table 250.66

The GEC is sized from **Table 250.66**, based on the size of the largest ungrounded service-entrance
conductor (or the equivalent area of parallel conductors). Copper values:

| Largest service-entrance conductor (Cu) | GEC (Cu) |
|---|---|
| 2 AWG or smaller | 8 AWG |
| 1 or 1/0 AWG | 6 AWG |
| 2/0 or 3/0 AWG | 4 AWG |
| Over 3/0 through 350 kcmil | 2 AWG |
| Over 350 through 600 kcmil | 1/0 AWG |
| Over 600 through 1100 kcmil | 2/0 AWG |
| Over 1100 kcmil | 3/0 AWG |

**Important limits (250.66(A)–(C)):** the portion of the GEC that is the **sole connection** to:
- a rod, pipe or plate electrode need not be larger than **6 AWG copper**
- a concrete-encased electrode need not be larger than **4 AWG copper**
- a ground ring need not be larger than the conductor used for the ring

### Worked Example 1
A 200 A service uses 3/0 AWG copper service-entrance conductors.
- Table 250.66 → **4 AWG Cu** GEC to the water pipe (the water pipe has no size limit like rods do).
- Bonding jumper to the ground rods → may be **6 AWG Cu** (rod limit).
- Connection to the concrete-encased electrode → **4 AWG Cu** (limit is 4 AWG anyway).

### Worked Example 2 — Parallel Conductors
A 400 A service uses two parallel sets of 250 kcmil copper per phase.
- Equivalent area = 2 × 250 = **500 kcmil**
- Table 250.66: over 350 through 600 kcmil → **1/0 AWG Cu** GEC

## Installing the GEC (250.64 and related sections)

- **Continuous:** The GEC must be installed in one continuous length without a splice, except it
  may be spliced by irreversible compression connectors listed as grounding and bonding equipment
  or by exothermic welding. Busbars are also permitted as connection points.
- **Protection:** 6 AWG copper may run along the building surface if secured and not exposed to
  physical damage; otherwise it must be protected. 8 AWG must be in a raceway, cable armor or
  other protection.
- **Ferrous enclosures:** If the GEC is run in a ferrous metal raceway, the raceway must be bonded
  to the GEC at **both ends**. Otherwise the steel raceway acts like a choke around the conductor
  and increases impedance during a lightning or fault event.
- **Water pipe connection:** In most buildings the connection to an interior metal water pipe
  electrode must be made within the first 5 ft of where the pipe enters the building. Bond around
  water meters, filters and other items likely to be removed.
- **Connectors:** Use clamps listed for the electrode material and, if buried or encased, for
  direct burial or concrete encasement. Connections to buried or encased electrodes do not need to
  be accessible; mechanical connections elsewhere generally must be.

## Inspection Checklist

1. All present electrodes identified and bonded?
2. GEC sized from Table 250.66 (with permitted rod/CEE limits)?
3. Rods full depth, spaced at least 6 ft, top at or below grade or protected?
4. Clamps listed, tight, and suitable for the location?
5. GEC continuous or properly spliced, supported, protected where required?
6. Ferrous raceways bonded at both ends?

## Key Takeaways
- Every electrode present at the building must be bonded into the grounding electrode system.
- Gas piping and aluminum are never grounding electrodes.
- A single rod needs a supplemental electrode unless 25 Ω or less; space rods at least 6 ft apart.
- Size the GEC from Table 250.66 by the largest service conductor; rod connections need not exceed
  6 AWG Cu and concrete-encased connections need not exceed 4 AWG Cu.
- Keep the GEC continuous and bond ferrous enclosures at both ends.
