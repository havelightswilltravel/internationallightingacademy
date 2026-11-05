---
title: Dwelling Load Calculations I — General Loads and Demand Factors
minutes: 40
video:
video_suggestion: >
  An instructor stands in an unfinished new house with a tape measure and a set of plans,
  showing how to take outside dimensions, what areas are excluded (garage, open porch), and
  then moves to a whiteboard to build the general lighting, small-appliance, and laundry
  portion of a load calculation step by step, including the tiered demand factors.
---

## Why Load Calculations Matter
In EA3 you learned what a service is made of. In EA4 you learn how big it must be. A load
calculation is the documented proof that the service, feeder, or branch circuit can carry the
load that will realistically be connected. Inspectors ask for it on new services, service
upgrades, and increasingly on EV charger and heat pump installs. Journeyman exams always
include at least a few load calculation questions.

All references in this course are to the **2023 NEC (NFPA 70)**. The edition adopted by your
Authority Having Jurisdiction (AHJ) governs. Be aware that the **2026 NEC moved branch-circuit,
feeder, and service load calculations out of Article 220 into a new Article 120** and
renumbered many sections. The method is essentially the same; the section numbers are not. If
your jurisdiction has adopted 2026, re-tab your code book.

## The Structure of a Standard-Method Calculation
The standard method (Article 220, Part III, applied to dwellings) builds the load in layers:

1. General lighting and general-use receptacle load (by floor area)
2. Small-appliance branch circuits and the laundry circuit
3. Demand factors applied to items 1 and 2
4. Fastened-in-place appliances
5. Clothes dryers
6. Ranges, ovens, and cooktops
7. Heating or air conditioning (the larger of the two — they are noncoincident)
8. Other loads: EVSE, motors, pool equipment, etc.

This lesson covers steps 1–4. The next lesson finishes the calculation and sizes the service.

## Step 1: General Lighting Load
For dwelling units the minimum unit load is **3 volt-amperes per square foot** (33 VA/m²).
In the 2023 NEC this value is stated for dwellings in 220.41; earlier editions placed it in
Table 220.12. This unit load already **includes** the general-use 15- and 20-ampere
receptacles and lighting outlets in the dwelling — you do not add 180 VA per receptacle in a
house the way you do in commercial work.

**Measuring the floor area:**
- Use the **outside dimensions** of the dwelling.
- Include each habitable floor.
- **Exclude** open porches, garages, and unused or unfinished spaces that are not adaptable for
  future use.

| Item | Rule |
|---|---|
| Unit load | 3 VA/ft² |
| Dimensions | Outside of building |
| Excluded | Open porches, garages, unfinished spaces not adaptable for future use |
| Receptacles | Included in the 3 VA/ft²; not added separately |

## Step 2: Small-Appliance and Laundry Circuits
- **Small-appliance branch circuits:** at least two 20-A circuits serve the kitchen, pantry,
  dining room, and breakfast room receptacles. Count **1500 VA for each** small-appliance
  circuit installed (minimum two).
- **Laundry circuit:** at least one 20-A circuit; count **1500 VA**.

These loads are added to the general lighting load **before** demand factors are applied.

## Step 3: General Lighting Demand Factors
Not every light and receptacle is used at once, so the NEC allows a tiered demand factor for
dwelling units (Table 220.42):

| Portion of the load | Demand factor |
|---|---|
| First 3,000 VA | 100% |
| 3,001 to 120,000 VA | 35% |
| Over 120,000 VA | 25% |

### Worked Example 1
A 2,400 ft² house has two small-appliance circuits and one laundry circuit.

| Load | Calculation | VA |
|---|---|---|
| General lighting | 2,400 ft² × 3 VA | 7,200 |
| Small appliance | 2 × 1,500 VA | 3,000 |
| Laundry | 1 × 1,500 VA | 1,500 |
| **Subtotal** | | **11,700** |
| First 3,000 VA at 100% | | 3,000 |
| Remaining 8,700 VA at 35% | 8,700 × 0.35 | 3,045 |
| **Net general load** | | **6,045 VA** |

A common exam mistake is applying 35% to the whole 11,700 VA. Always take the first 3,000 VA
at 100%.

## Step 4: Fastened-in-Place Appliances
Appliances that are fastened in place — water heaters, dishwashers, disposals, built-in
microwaves, trash compactors, attic fans — are added at nameplate rating. If there are **four
or more** of them on the same feeder or service, a **75% demand factor** may be applied to
their total (220.53).

Do **not** include in this group: electric ranges, clothes dryers, space-heating equipment, or
air-conditioning equipment. Each of those has its own rule.

### Worked Example 2
| Appliance | Nameplate |
|---|---|
| Water heater | 4,500 W |
| Dishwasher | 1,200 VA |
| Disposal | 900 VA |
| Built-in microwave | 1,500 VA |
| **Total (4 appliances)** | **8,100 VA** |

Four appliances qualify for 75%: 8,100 × 0.75 = **6,075 VA**.

If the house had only three of these appliances, they would be added at 100%.

> **Safety:** Gathering nameplate data in an occupied home often means pulling out a
> dishwasher or opening a water heater access panel. Turn off and lock out the circuit and
> verify absence of voltage before removing any cover that exposes terminals. Photographing a
> nameplate through an open, de-energized access is fine; reaching into a live compartment to
> read it is not.

## Recording Your Work
Inspectors and exam graders both want to see each line. Use a worksheet with columns for the
load, the rule applied, the arithmetic, and the result. Keep watts and volt-amperes in the same
column — for load calculation purposes, resistive appliance watts are treated as VA.

## Key Takeaways
- Use the 2023 NEC unless your AHJ has adopted another edition; the 2026 NEC moved load
  calculations to Article 120.
- Dwelling general lighting is 3 VA/ft² using outside dimensions, excluding garages, open
  porches, and unfinished spaces not adaptable for future use.
- Add 1,500 VA for each small-appliance circuit (minimum two) and 1,500 VA for the laundry
  circuit before applying demand factors.
- General lighting demand: first 3,000 VA at 100%, next up to 120,000 VA at 35%, the remainder
  at 25%.
- Four or more fastened-in-place appliances (not ranges, dryers, heat, or A/C) may be taken at
  75%.
