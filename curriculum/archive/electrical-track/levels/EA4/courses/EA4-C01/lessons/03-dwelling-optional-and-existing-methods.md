---
title: Dwelling Load Calculations III — Optional Method and Existing Dwellings
minutes: 40
video:
video_suggestion: >
  Side-by-side split screen: the same house calculated by the standard method on the left and
  the optional method on the right, with the instructor highlighting where the numbers differ.
  Then a short field segment in an older house where a homeowner wants a heat pump and EV
  charger added to a 100-A service, showing how the existing-dwelling method and utility
  demand data inform the decision.
---

## When to Use the Optional Method
The optional method (2023 NEC 220.82) is permitted for a **single dwelling unit** served by a
120/240-V or 208Y/120-V, 3-wire service or feeder with an ampacity of **100 A or more**. It is
simpler than the standard method and usually produces a smaller result, because it applies one
blanket demand factor to almost everything instead of item-by-item rules. Multifamily
buildings have their own optional method (220.84), and existing dwellings have another
(220.83). Your AHJ's adopted code edition governs; in the 2026 NEC these sections were
relocated to Article 120.

## Part 1: The General Load (220.82(B))
Add the following at **100% of rating**:

1. **3 VA/ft²** for general lighting and general-use receptacles (outside dimensions).
2. **1,500 VA** for each 20-A small-appliance circuit and each laundry circuit.
3. The **nameplate rating** of all appliances that are fastened in place, permanently
   connected, or located to be on a specific circuit — ranges, wall ovens, cooktops, clothes
   dryers not connected to the laundry circuit, water heaters, dishwashers, and so on.
4. The nameplate ampere or kVA rating of all permanently connected motors not included above.

Do **not** include heating and air-conditioning here; they go in Part 2.

Then apply the demand factor: **first 10 kVA at 100%, the remainder at 40%**.

## Part 2: Heating and Air Conditioning (220.82(C))
Include the **largest** of the following:

| Option | Load taken |
|---|---|
| Air conditioning and cooling, including heat pump compressors | 100% of nameplate |
| Heat pump without supplemental electric heat | 100% of nameplate |
| Heat pump compressor plus supplemental electric heat (central system) | 100% compressor + 65% supplemental heat (compressor omitted if it cannot run with the supplemental heat) |
| Electric space heating, fewer than four separately controlled units | 65% of nameplate |
| Electric space heating, four or more separately controlled units | 40% of nameplate |
| Electric thermal storage and other heating where the load is expected to be continuous | 100% of nameplate |

## Worked Example: Same House, Optional Method
House: 2,400 ft²; two small-appliance circuits; one laundry; 4,500 W water heater; 1,200 VA
dishwasher; 900 VA disposal; 1,500 VA microwave; 5,000 W dryer; 12 kW range; 48-A EVSE
(11,520 VA); 10 kW central electric furnace (one unit); 6,000 VA air conditioner.

**Part 1 — General load**

| Load | VA |
|---|---|
| 2,400 × 3 VA | 7,200 |
| Small appliance 2 × 1,500 | 3,000 |
| Laundry | 1,500 |
| Water heater | 4,500 |
| Dishwasher | 1,200 |
| Disposal | 900 |
| Microwave | 1,500 |
| Dryer (nameplate) | 5,000 |
| Range (nameplate) | 12,000 |
| EVSE (nameplate) | 11,520 |
| **Total** | **48,320** |

Demand: 10,000 × 100% = 10,000; (48,320 − 10,000) = 38,320 × 40% = 15,328.
**Net general load = 25,328 VA**

**Part 2 — Heat or A/C (largest)**
- A/C at 100%: 6,000 VA
- Electric furnace, fewer than four separately controlled units, at 65%: 10,000 × 0.65 =
  6,500 VA

Largest = **6,500 VA**.

**Total:** 25,328 + 6,500 = **31,828 VA** ÷ 240 V = **132.6 A** → minimum **150-A** service.

Compare: the standard method gave 194.3 A (200-A service). Both are code-compliant. The
designer or contractor chooses the method; the AHJ may require the calculation to be submitted.
Many contractors still install 200 A for future capacity, but the optional method can avoid an
unnecessary service upgrade.

## Existing Dwellings (220.83)
When adding loads to an existing dwelling, 220.83 provides a method that starts with the
existing load and adds the new load. The demand factor depends on whether air conditioning or
space heating is being added:

- **Not adding A/C or space heating:** first 8 kVA at 100%, remainder at 40%.
- **Adding A/C or space heating:** 100% of the A/C or heating load (the larger), plus the
  other loads with the first 8 kVA at 100% and the remainder at 40%.

Read the current section text before applying it — the details of what is included changed
in recent editions.

### Using Measured Demand (220.87)
For existing installations, the NEC also permits determining the existing load from the
**maximum demand** data for a one-year period (from the utility), or by recording the load for
at least 30 days under the conditions described in 220.87, then adding the new load at the
required rate. This is often the best tool for EV charger and heat pump additions on older
100-A services.

## Load Management Instead of Upgrades
The 2023 NEC recognizes **energy management systems** (Article 750) that can limit the load
used in calculations — for example, an EVSE that throttles when the house load is high, or a
listed load-shed device. When a listed EMS controls loads, the calculated load may be based on
the EMS setpoint (see 220.70 and 625.42). Always confirm the device is listed and the AHJ
accepts it.

> **Safety:** Installing a recording meter or current transformers to measure existing demand
> is energized work in service equipment. It requires a qualified person, an NFPA 70E risk
> assessment, the correct arc-rated PPE and insulated gloves, and usually an energized
> electrical work permit. Use split-core CTs installed with the equipment de-energized when
> possible.

## Key Takeaways
- Optional method: single dwelling, service or feeder 100 A or larger.
- General loads at nameplate (plus 3 VA/ft² and 1,500 VA circuits): first 10 kVA at 100%,
  remainder at 40%.
- Add the largest heating/cooling option: A/C 100%, electric heat 65% (fewer than four units)
  or 40% (four or more units), with heat pump rules as listed.
- The optional method usually yields a smaller service than the standard method.
- Existing dwellings: use 220.83 or measured maximum demand (220.87); consider a listed energy
  management system instead of a service upgrade.
