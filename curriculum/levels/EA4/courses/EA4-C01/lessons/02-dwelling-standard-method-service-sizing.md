---
title: Dwelling Load Calculations II — Standard Method and Service Sizing
minutes: 45
video:
video_suggestion: >
  Continuing the same house, the instructor photographs the range, dryer, furnace, A/C
  condenser, and EV charger nameplates, then completes the standard-method calculation on a
  whiteboard, converts to amperes, selects the service size, and walks to a de-energized,
  locked-out training panel to show the service conductors and grounding electrode conductor
  that match the result.
---

## Picking Up Where We Left Off
In Lesson 1 we calculated the net general load (6,045 VA) and the fastened-in-place appliance
load (6,075 VA) for a 2,400 ft² house. Now we add the large individual loads and size the
service. References are to the 2023 NEC; your AHJ's adopted edition governs.

## Step 5: Clothes Dryers
Each household electric clothes dryer is counted at **5,000 W (VA) or the nameplate rating,
whichever is larger** (220.54). A 4,500 W dryer is still counted at 5,000 VA. A 5,600 W dryer
is counted at 5,600 VA. Multiple dryers in multifamily buildings use the demand factors in
Table 220.54.

## Step 6: Ranges, Ovens, and Cooktops
Household cooking appliances over 1¾ kW use Table 220.55. For a single range rated **not over
12 kW**, Column C gives a demand of **8 kW**.

| Number of ranges (≤ 12 kW each) | Column C demand |
|---|---|
| 1 | 8 kW |
| 2 | 11 kW |
| 3 | 14 kW |
| 4 | 17 kW |
| 5 | 20 kW |

**Ranges over 12 kW (up to 27 kW):** increase the Column C value by **5% for each kW (or major
fraction) over 12 kW** (Table 220.55, Note 1).

*Example:* a 14 kW range is 2 kW over 12 → 2 × 5% = 10% → 8 kW × 1.10 = **8.8 kW**.

**Counter-mounted cooktop plus wall ovens:** when one cooktop and not more than two wall-mounted
ovens are in the same room and on one branch circuit, add their nameplates and treat the total
as one range (Note 4). For separate cooking appliances on separate circuits in a load
calculation, Columns A and B may apply — read the notes carefully.

## Step 7: Heating vs. Air Conditioning
Space heating and air conditioning are **noncoincident loads** — they do not run at the same
time — so you include only the **larger** of the two (220.60). Fixed electric space heating is
counted at 100% of its nameplate rating in the standard method (220.51). Include the blower
motor with whichever load it runs with.

## Step 8: Other Loads — EVSE
The 2023 NEC added a rule for electric vehicle supply equipment: EVSE load is counted at
**7,200 W (VA) or the nameplate rating, whichever is larger** (220.57). A 48-A EVSE at 240 V is
48 × 240 = 11,520 VA, which is larger than 7,200, so use 11,520 VA.

## The Complete Worked Example
House data: 2,400 ft²; two small-appliance circuits; one laundry circuit; the four appliances
from Lesson 1; 5,000 W dryer; 12 kW range; 10 kW electric furnace; 6,000 VA air conditioner;
48-A EVSE; 120/240 V single-phase service.

| Line | Load | Calculation | VA |
|---|---|---|---|
| 1 | General lighting, small appliance, laundry after demand | Lesson 1 | 6,045 |
| 2 | Fastened-in-place appliances (4) | 8,100 × 75% | 6,075 |
| 3 | Dryer | larger of 5,000 or nameplate | 5,000 |
| 4 | Range (12 kW) | Table 220.55, Col. C | 8,000 |
| 5 | Heat (10,000) vs. A/C (6,000) | larger | 10,000 |
| 6 | EVSE | 48 A × 240 V | 11,520 |
| | **Total** | | **46,640 VA** |

**Convert to amperes:** 46,640 VA ÷ 240 V = **194.3 A**.

The next standard service rating at or above 194.3 A is **200 A**. A one-family dwelling
service must be at least **100 A** in any case (230.79(C)).

## Sizing the Service Conductors
For 120/240-V, 3-wire, single-phase dwelling services and main feeders that carry the entire
load of the dwelling, the NEC permits the conductors to be sized at **not less than 83% of the
service rating** (310.12). Other conditions of use (ambient temperature, bundling) still apply.

200 A × 0.83 = **166 A**. From the 75°C column of Table 310.16:

| Conductor | 75°C ampacity | OK for 166 A? |
|---|---|---|
| 1/0 Cu | 150 A | No |
| 2/0 Cu | 175 A | **Yes** |
| 3/0 Al | 155 A | No |
| 4/0 Al | 180 A | **Yes** |

So the service conductors may be **2/0 copper or 4/0 aluminum**. Confirm the terminals are
rated 75°C (most service equipment is).

## Sizing the Grounding Electrode Conductor
Table 250.66 sizes the GEC from the size of the largest ungrounded service conductor:

| Largest service conductor | GEC (copper) |
|---|---|
| 2/0 or 3/0 Cu (or 4/0–250 kcmil Al) | 4 AWG Cu |
| 1 or 1/0 Cu (or 2/0–3/0 Al) | 6 AWG Cu |
| 2 AWG Cu or smaller (or 1/0 Al or smaller) | 8 AWG Cu |

For 2/0 Cu or 4/0 Al service conductors, the GEC is **4 AWG copper**. Exception: the portion
of a GEC that is the sole connection to a rod, pipe, or plate electrode need not be larger than
**6 AWG copper** (250.66(A)).

> **Safety:** Comparing a calculation to an existing service means looking at energized
> equipment. Read the main breaker rating and conductor markings from outside the dead-front
> or from the meter-base label. Removing a panel cover exposes energized service conductors
> that cannot be de-energized from inside the building; only a qualified person with the
> required PPE and an approved procedure may do it, and the utility may need to pull the meter.

## Neutral Load (Brief)
The service neutral carries only the unbalanced load. 240-V-only loads (water heater, A/C
compressor, EVSE without 120-V parts) contribute nothing. The range and dryer neutral load may
be taken at 70% (220.61). The neutral can therefore be smaller than the ungrounded conductors,
but never smaller than the required grounded conductor for the service (250.24(C)).

## Key Takeaways
- Dryers: 5,000 VA or nameplate, whichever is larger.
- One range ≤ 12 kW: 8 kW (Column C); add 5% per kW over 12 kW.
- Heat and A/C are noncoincident — include only the larger.
- 2023 NEC: EVSE at 7,200 VA or nameplate, whichever is larger.
- Divide total VA by 240 V for single-phase dwellings; round up to a standard service size.
- Dwelling service conductors may be sized at 83% of the service rating; GEC is sized from
  Table 250.66.
