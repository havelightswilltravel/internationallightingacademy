---
title: Commercial Load Calculations
minutes: 45
video:
video_suggestion: >
  An estimator and a senior apprentice review the electrical drawings for a small office
  building, count receptacles from the floor plan, read the mechanical schedule for rooftop
  unit data, and build a three-phase service calculation in a spreadsheet, finishing with the
  service ampere rating and the main breaker selection.
---

## How Commercial Calculations Differ
Commercial (non-dwelling) calculations use the same Article 220 framework (2023 NEC; Article
120 in the 2026 NEC) but with different unit loads and demand factors, and with much more
attention to **continuous loads** and **three-phase** current. The AHJ-adopted edition always
governs.

Key differences from dwellings:
- General lighting unit loads depend on the **occupancy type** (Table 220.12).
- Receptacles are counted individually at **180 VA per yoke** (220.14(I)), with a separate
  demand table.
- Continuous loads (operating 3 hours or more) are sized at **125%** for conductors and OCPDs
  (210.19(A), 210.20(A), 215.2, 215.3).
- Most services are three-phase, so current = VA ÷ (V × 1.732).

## General Lighting by Occupancy
Table 220.12 (2023) lists unit loads for non-dwelling occupancies. A few common values:

| Occupancy | VA/ft² |
|---|---|
| Office | 1.3 |
| Retail | 1.9 |
| School/university | 1.5 |
| Warehouse | 1.2 |
| Restaurant | 1.5 |
| Hospital | 1.6 |

These values were lowered in the 2020 NEC to reflect LED lighting and energy codes. Always use
the **larger** of the table value or the actual connected lighting load. Commercial lighting is
almost always a continuous load, so apply **125%** when sizing feeders and services.

## Receptacle Loads
- Each single or multiple receptacle on one yoke: **180 VA** (220.14(I)).
- Multioutlet assemblies: 180 VA per 5 ft (or per 1 ft where appliances are likely to be used
  simultaneously) (220.14(H)).
- In **banks and office buildings**, the receptacle load is the **larger** of 180 VA per
  receptacle or **1 VA/ft²** (220.14(K)).
- Demand factor for non-dwelling receptacle loads (Table 220.44): **first 10 kVA at 100%,
  remainder at 50%**.

## Other Common Commercial Loads
| Load | Rule |
|---|---|
| Sign outlet | At least 1,200 VA (220.14(F)); a commercial building with ground-floor pedestrian entrance needs a 20-A sign circuit (600.5) |
| Show windows | 200 VA per linear foot (220.43(A)) |
| Commercial kitchen equipment | Table 220.56 demand factors when three or more units: 3 = 90%, 4 = 80%, 5 = 70%, 6 or more = 65%; never less than the two largest units combined |
| Motors | 125% of the largest motor FLC plus the sum of the others (430.24) |
| Heat vs. A/C | Larger of the two (220.60) |

## Worked Example: Small Office Building
Data: 10,000 ft² office; 120/208-V, 3-phase, 4-wire service; 120 general-purpose receptacles;
one exterior sign; three rooftop HVAC units, each 10,000 VA, largest compressor motor 7,500 VA
(gas heat, so A/C governs). Actual connected lighting is 11,000 VA (less than the table value).

| Line | Load | Calculation | VA |
|---|---|---|---|
| 1 | Lighting (table value governs) | 10,000 × 1.3 = 13,000; × 125% continuous | 16,250 |
| 2 | Receptacles | 120 × 180 = 21,600 (greater than 10,000 × 1 VA) | — |
| | Receptacle demand | 10,000 + (11,600 × 50%) | 15,800 |
| 3 | Sign | 1,200 × 125% continuous | 1,500 |
| 4 | HVAC | 3 × 10,000 | 30,000 |
| 5 | 25% of largest motor | 7,500 × 25% | 1,875 |
| | **Total** | | **65,425 VA** |

**Three-phase current:** 65,425 ÷ (208 × 1.732) = 65,425 ÷ 360.3 = **181.6 A**

Select a **200-A** service (next standard size, 240.6(A)). Service conductors must have an
ampacity of at least 181.6 A after any correction and adjustment — e.g., 3/0 Cu THWN-2 at the
75°C column (200 A) in a single raceway with no more than three current-carrying conductors
(the neutral of a 3-phase 4-wire system that carries mostly linear load is not counted, but
see 310.15(E) for nonlinear loads).

## Kitchen Equipment Example
A restaurant has six electric cooking units: 12 kW, 10 kW, 6 kW, 5 kW, 4 kW, and 3 kW = 40 kW
total. Six units → 65% → 40 × 0.65 = **26 kW**. Check the floor: the two largest units are
12 + 10 = 22 kW. 26 kW is larger, so use **26 kW**.

## Single-Phase vs. Three-Phase Current
| System | Formula | 50,000 VA example |
|---|---|---|
| 120/240 V, 1φ | VA ÷ 240 | 208.3 A |
| 208Y/120 V, 3φ | VA ÷ (208 × 1.732) | 138.8 A |
| 480Y/277 V, 3φ | VA ÷ (480 × 1.732) | 60.1 A |

> **Safety:** Commercial service equipment often has very high available fault current.
> Before verifying any installed equipment, check the arc-flash label and the incident energy
> or PPE category. If there is no label, do not open the equipment energized — have the
> system studied or de-energize it, apply lockout/tagout, and verify absence of voltage.

## Key Takeaways
- Commercial lighting uses Table 220.12 occupancy unit loads (office 1.3 VA/ft²) or actual load,
  whichever is larger, and is normally continuous (125%).
- Receptacles: 180 VA per yoke; first 10 kVA at 100%, remainder at 50%. Offices and banks use
  the larger of 180 VA per receptacle or 1 VA/ft².
- Kitchen equipment: 3 units 90%, 4 units 80%, 5 units 70%, 6+ units 65%, but not less than the
  two largest units.
- Three-phase amperes = VA ÷ (line voltage × 1.732).
- Size services to the next standard OCPD rating and verify conductor ampacity after
  correction and adjustment.
