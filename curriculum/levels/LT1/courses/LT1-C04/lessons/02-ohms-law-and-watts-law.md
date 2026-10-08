---
title: Ohm's Law & Watt's Law
minutes: 30
video:
video_suggestion: >
  Whiteboard session with a trainer working three real lighting examples step by step:
  current drawn by a 32 W lamp ballast circuit at 120 V vs. 277 V, how many fixtures can go
  on a 20 A circuit, and how much a wattage reduction saves. Use the "magic circle"
  memory aids and a calculator on camera.
---

## Ohm's Law

**Ohm's law** describes the relationship between voltage, current, and resistance:

> **E = I × R**  (Voltage = Current × Resistance)

Rearranged:

| To find | Formula |
|---|---|
| Voltage (E) | E = I × R |
| Current (I) | I = E ÷ R |
| Resistance (R) | R = E ÷ I |

**Memory aid:** draw a circle split into E on top and I × R on the bottom. Cover the letter you
want; what remains is the formula.

### Example 1: Current Through a Heater Element
A 120 V circuit feeds a resistive load of 24 Ω.
I = E ÷ R = 120 ÷ 24 = **5 A**.

### Example 2: Why Wet Skin Is Dangerous
Suppose hand-to-foot body resistance is about 100,000 Ω with dry skin, and drops to about
1,000 Ω when the skin is wet or broken (actual values vary widely).

| Condition | Calculation (120 V) | Current |
|---|---|---|
| Dry skin | 120 ÷ 100,000 | 0.0012 A = **1.2 mA** (a tingle) |
| Wet skin | 120 ÷ 1,000 | 0.12 A = **120 mA** (potentially fatal) |

Same voltage, 100 times the current. At 277 V the wet-skin current would be about 277 mA.
This is why wet locations and sweat matter so much.

## Power and Watt's Law

**Power** is the rate at which electrical energy is used or converted into light and heat.

- Unit: **watt (W)**. Symbol: **P**.
- 1 kilowatt (kW) = 1,000 W.

> **P = E × I**  (Power = Voltage × Current)

Rearranged:

| To find | Formula |
|---|---|
| Power (P) | P = E × I |
| Current (I) | I = P ÷ E |
| Voltage (E) | E = P ÷ I |

Combining with Ohm's law also gives **P = I² × R** and **P = E² ÷ R**. The I²R form explains why
a loose, high-resistance connection gets hot: heat rises with the **square** of current.

> **Note:** For AC lighting loads with ballasts and drivers, P = E × I is an approximation;
> actual watts also depend on **power factor** (introduced in LT2-C01). Use the **input watts**
> or **input current** printed on the ballast or driver label when you have it.

### Example 3: Current of a Fixture
A fixture's label shows **input watts: 60 W**. What current does it draw?

| Supply | Calculation | Current |
|---|---|---|
| 120 V | 60 ÷ 120 | **0.50 A** |
| 277 V | 60 ÷ 277 | **0.22 A** |

Higher voltage means less current for the same power. That is one reason commercial buildings
use 277 V for lighting: more fixtures per circuit and smaller wire.

### Example 4: Fixtures per Circuit
How many 60 W fixtures can go on a 20 A, 120 V lighting circuit?

Lighting is usually a **continuous load** (on for 3 hours or more). The NEC limits continuous
load on a branch circuit to **80% of the breaker rating** in most cases:
20 A × 0.80 = 16 A.

Fixtures = 16 A ÷ 0.50 A = **32 fixtures** at 120 V.
At 277 V: 16 A ÷ 0.22 A ≈ **72 fixtures** (in practice, designers also consider voltage drop,
inrush, and control zoning).

You will not design circuits at LT1, but this explains why you should **never add fixtures to a
circuit without approval.**

## Energy: Kilowatt-Hours

Customers pay for **energy**, which is power multiplied by time:

> **kWh = kW × hours**

### Example 5: Retrofit Savings
A warehouse replaces 100 fixtures drawing 458 W each (400 W metal halide lamp plus ballast losses)
with 150 W LED fixtures. The lights run 4,000 hours per year.

- Old: 100 × 0.458 kW × 4,000 h = 183,200 kWh
- New: 100 × 0.150 kW × 4,000 h = 60,000 kWh
- Savings: **123,200 kWh per year.** At $0.12 per kWh, about **$14,784 per year.**

This is how lighting retrofits pay for themselves, and why customers care about watts.

## Quick Reference

| Quantity | Symbol | Unit | Measured with |
|---|---|---|---|
| Voltage | E or V | volt (V) | Voltmeter / DMM |
| Current | I | ampere (A) | Clamp meter / DMM |
| Resistance | R | ohm (Ω) | Ohmmeter / DMM (de-energized) |
| Power | P | watt (W) | Wattmeter / calculated |
| Energy | — | kilowatt-hour (kWh) | Utility meter / calculated |

## Key Takeaways
- Ohm's law: E = I × R. Watt's law: P = E × I.
- Lower body resistance (wet skin) means much higher shock current at the same voltage.
- Higher voltage means less current for the same watts, which is why 277 V is common for commercial lighting.
- Lighting is a continuous load; circuits are typically loaded to no more than 80% of the breaker rating.
- Energy (kWh) = kW × hours; lower watts and fewer hours mean lower bills.
