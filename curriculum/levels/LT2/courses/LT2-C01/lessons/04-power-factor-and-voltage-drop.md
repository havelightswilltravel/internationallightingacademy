---
title: Power Factor and Voltage Drop Basics
minutes: 35
video:
video_suggestion: >
  A tech measures voltage at the panel and then at the last fixture on a long 277 V parking
  garage circuit (filmed with proper PPE), shows the difference, and works the voltage-drop
  formula on a clipboard. Then a power meter shows watts vs volt-amps on a high-PF LED driver
  and an old normal-power-factor magnetic ballast.
---

## Real Power, Apparent Power and Power Factor

In LT1 you learned Watt's law: **P = V × I**. That is exactly true for DC and for purely
resistive AC loads like incandescent lamps. For ballasts, drivers and motors it is only part
of the story.

| Quantity | Unit | What it is |
|---|---|---|
| Real (true) power | Watts (W) | Power actually converted to light and heat — what the meter bills |
| Apparent power | Volt-amperes (VA) | Volts × amps measured in the circuit |
| Power factor (PF) | 0 to 1 (or %) | Real power ÷ apparent power |

**PF = W ÷ VA**

A fixture with PF 1.0 uses every amp efficiently. A fixture with PF 0.5 draws twice the
current needed for the work it does. The extra current does no useful work but still heats
conductors and uses breaker capacity.

### Why it matters for lighting

- **Circuit loading:** Breakers and wire respond to amps, not watts. Ten fixtures rated 50 W
  with PF 0.5 draw as much current as ten 100 W fixtures with PF 1.0.
- **Specifications:** Ballasts and drivers are often classed as high power factor (commonly
  PF 0.9 or above) or normal/low power factor. Commercial specifications usually require high
  PF. Many small, inexpensive LED lamps have low PF.
- **Reading spec sheets:** Look for "PF ≥ 0.9" and input current at each voltage. Use the
  **input current** from the spec sheet, not watts ÷ volts, when estimating circuit load.

### Calculating current

Single-phase: **I = W ÷ (V × PF)**

Example: a 40 W LED troffer at 277 V with PF 0.95:
I = 40 ÷ (277 × 0.95) = 40 ÷ 263 ≈ **0.15 A**

The same fixture at 120 V: I = 40 ÷ (120 × 0.95) ≈ **0.35 A**. Higher voltage, less current
— the reason commercial lighting uses 277 V.

Three-phase loads (for reference): **I = W ÷ (1.732 × V(line-to-line) × PF)**.

## Continuous Loads and the 80% Rule of Thumb

The NEC treats a load expected to run for **3 hours or more** as a **continuous load**. Most
commercial lighting is continuous. For a branch circuit with a standard (not 100%-rated)
breaker, the continuous load generally may not exceed **80%** of the breaker rating (the
breaker and conductors are sized at 125% of the continuous load).

| Breaker | Max continuous load (80%) | At 277 V | At 120 V |
|---|---|---|---|
| 20 A | 16 A | about 4,430 VA | 1,920 VA |
| 15 A | 12 A | about 3,320 VA | 1,440 VA |

LT2-C02 covers branch circuits and conductor sizing in more detail.

## Voltage Drop

Every conductor has resistance. When current flows, some voltage is "used up" in the wire
before it reaches the load. This is **voltage drop**.

Symptoms of excessive voltage drop in lighting:
- Fluorescent and HID lamps slow to start or failing to start, especially when cold
- HID lamps dim or cycling
- LED drivers dropping out, flickering, or failing early when voltage is near the bottom of
  their range
- Noticeably lower readings at the end of a long circuit than at the panel

### The recommendation

An informational note in NEC Article 210 recommends sizing branch circuits so voltage drop
does not exceed **3%** at the farthest outlet, and **5%** total for feeder plus branch
circuit. This is a recommendation for good performance, not an enforceable rule in the NEC
itself — although energy codes and project specifications often make it mandatory.

### Simple calculation (single-phase)

**VD = (2 × K × I × L) ÷ CM**

| Symbol | Meaning |
|---|---|
| K | Resistance constant: about 12.9 ohms per circular-mil-foot for copper, about 21.2 for aluminum |
| I | Load current in amps |
| L | One-way length of the circuit in feet |
| CM | Conductor area in circular mils (14 AWG = 4,110; 12 AWG = 6,530; 10 AWG = 10,380; 8 AWG = 16,510) |

The "2" accounts for the current going out and back.

**Example:** A 277 V parking-lot circuit, 12 AWG copper, 12 A load, 300 ft one way.
VD = (2 × 12.9 × 12 × 300) ÷ 6,530 = 92,880 ÷ 6,530 ≈ **14.2 V**
14.2 ÷ 277 = **5.1%** — over the 3% recommendation.

With 10 AWG: VD = 92,880 ÷ 10,380 ≈ 8.9 V = **3.2%**. With 8 AWG: ≈ 5.6 V = **2.0%**.

For three-phase circuits, replace the 2 with 1.732. LT4 covers more detailed calculations.

### Field check

You can measure voltage drop directly: measure voltage at the panel and at the farthest
fixture **with the circuit loaded**, at about the same time. The difference is the voltage
drop. A circuit that reads fine with the lights off can be well below normal with them on.

> **Safety:** Measuring voltage at a panel and at an energized fixture is energized work.
> Wear the PPE required by the equipment label or your company's PPE table, use a CAT-rated
> meter, verify the meter on a known source before and after, and work under your lead's
> direction for any panelboard measurement.

## Key Takeaways
- Power factor = watts ÷ volt-amps. Low PF means more current for the same work.
- Use the driver/ballast spec sheet's input current when estimating circuit load.
- Most lighting is a continuous load; keep it to about 80% of a standard breaker's rating.
- Voltage drop causes hard starting, dimming and early driver failure; NEC recommends ≤3% branch, ≤5% total.
- VD (single-phase) = 2 × K × I × L ÷ CM; larger wire or higher voltage reduces drop.
- Measure voltage drop under load, at the panel and at the farthest fixture.
