---
title: Voltage Drop Calculations
minutes: 35
video:
video_suggestion: >
  A tech works a voltage-drop problem on a whiteboard for a long 277 V parking lot circuit, then
  goes to the site to measure voltage at the panel and at the last pole with the lights on (in
  proper PPE, using a CAT-rated meter), and compares measured and calculated drop. Close with the
  recalculation after upsizing the conductor.
---

## Why Voltage Drop Matters in Lighting

Every conductor has resistance. Current flowing through it causes a **voltage drop** (Ohm's law, E =
I × R, from LT1-C04). Long lighting runs – parking lots, warehouses, long corridors, site lighting –
can lose enough voltage to cause:

- HID lamps that won't start or restrike (LT2-C04)
- Fluorescent ballasts running poorly
- LED drivers operating near the bottom of their input range, drawing more current (constant-power
  behavior) – which increases the drop further
- Dimming and control malfunctions
- Wasted energy as heat in the conductors

## NEC Guidance

The NEC does not generally make voltage drop a mandatory requirement for ordinary branch circuits.
Informational notes in Article 210 (branch circuits) and Article 215 (feeders) recommend sizing
conductors so voltage drop does not exceed **3%** on a branch circuit or feeder, and **5%** total
for feeder plus branch circuit. Informational notes are advisory, but specifications, engineers and
energy codes often make these limits mandatory on a project. (ASHRAE 90.1, for example, includes
voltage-drop limits for feeders and branch circuits in its power section.)

## The Formulas

**Single-phase (two-wire circuits, including 120 V and 277 V lighting circuits):**

> **VD = (2 × K × I × L) ÷ CM**

**Three-phase (balanced loads):**

> **VD = (1.732 × K × I × L) ÷ CM**

| Symbol | Meaning |
|---|---|
| VD | Voltage drop in volts |
| K | Approximate resistance of 1 circular mil-foot of conductor: about **12.9** for copper, **21.2** for aluminum (at typical operating temperature) |
| I | Load current in amps |
| L | **One-way** length of the circuit in feet (the "2" accounts for the return path) |
| CM | Conductor area in circular mils (NEC Chapter 9, Table 8) |

Common circular-mil areas (NEC Chapter 9, Table 8):

| AWG | Circular mils |
|---|---|
| 14 | 4,110 |
| 12 | 6,530 |
| 10 | 10,380 |
| 8 | 16,510 |
| 6 | 26,240 |

You can also use the DC resistance from Table 8 (ohms per 1,000 ft): VD = 2 × I × R × L ÷ 1,000.

## Worked Example

A 277 V single-phase parking-lot circuit feeds poles with a total load of **12 A**. The farthest pole
is **250 ft** from the panel (one way). Conductors are **12 AWG copper**.

VD = (2 × 12.9 × 12 × 250) ÷ 6,530 = 77,400 ÷ 6,530 = **11.85 V**

Percent = 11.85 ÷ 277 × 100 = **4.3%** – above the 3% branch-circuit recommendation.

Try **10 AWG copper**:

VD = 77,400 ÷ 10,380 = **7.46 V** → 7.46 ÷ 277 = **2.7%** – within 3%.

> **Tip:** This simple calculation assumes all the load is at the far end – a conservative
> (worst-case) assumption. When load is spread along the run (one luminaire per pole), calculate
> each segment with the current it actually carries for a more accurate result, or accept the
> conservative answer.

## Rearranged to Size Conductors

To find the minimum conductor size for a target drop:

> **CM = (2 × K × I × L) ÷ VD allowed**

For the example at 3% (0.03 × 277 = 8.31 V): CM = 77,400 ÷ 8.31 = 9,314 CM → next size up is
**10 AWG** (10,380 CM).

Remember that upsizing for voltage drop may require larger terminals, boxes and raceways (box and
conduit fill, terminal ratings) – check before you promise a fix. Upsizing conductors for voltage drop
also has NEC implications for the equipment grounding conductor (it generally must be increased
proportionally – NEC 250.122(B)).

## Field Verification Procedure (Skill LT4-S05)

1. Calculate expected drop first.
2. Complete the risk assessment and wear the required PPE. Use a CAT III/CAT IV DMM.
3. With the circuit **loaded** (lights on and stabilized), measure voltage at the panel breaker
   (line-to-neutral for a 277 V circuit).
4. Measure at the farthest luminaire's supply terminals – only through accessible test points or with
   the fixture's wiring compartment opened **de-energized** and test leads installed before restoring
   power, per company energized-work rules.
5. Measured drop = source voltage − far-end voltage. Compare to the calculation.
6. **If measured drop is much higher than calculated**, suspect a high-resistance connection
   (loose or corroded splice, failing wire nut, damaged conductor). Locate it by measuring at
   intermediate points, then repair under LOTO.

> **Safety:** Voltage measurements at the far end of a circuit are energized work. Never strip or
> pierce insulation on live conductors to take a reading. Use proper test points or install leads
> while the circuit is locked out and verified dead.

## Key Takeaways
- Long lighting runs lose voltage; LED drivers draw more current at lower voltage, worsening drop.
- NEC informational notes recommend 3% (branch or feeder) and 5% (total); projects often make them mandatory.
- Single-phase VD = 2KIL ÷ CM; three-phase VD = 1.732KIL ÷ CM; K ≈ 12.9 copper, 21.2 aluminum; L is one-way length.
- Use NEC Chapter 9 Table 8 for circular mils or resistance.
- Measured drop far above calculated points to a bad connection.
- Upsizing conductors affects terminals, fill and the EGC size.
