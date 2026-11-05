---
title: Ohm's Law, Power, and Voltage Drop
minutes: 45
video:
video_suggestion: >
  Whiteboard session solving six exam-style problems against a countdown timer: a heater at
  reduced voltage, a power-factor kVA problem, single-phase and three-phase voltage drop, and
  solving for the minimum conductor size. The instructor shows where each constant and
  circular-mil value comes from in Chapter 9, Table 8.
---

## The Formulas You Must Know Cold
| Quantity | Formulas |
|---|---|
| Ohm's law | E = I × R  I = E ÷ R  R = E ÷ I |
| Power (DC or resistive AC) | P = E × I  P = I² × R  P = E² ÷ R |
| Single-phase apparent power | VA = E × I |
| Three-phase apparent power | VA = E × I × 1.732 |
| Power factor | PF = W ÷ VA  (kW = kVA × PF) |
| Efficiency | Eff = Output ÷ Input |
| Horsepower | 1 hp = 746 W |

## Resistive Loads at Different Voltages
A resistive heater's **resistance stays constant**; power varies with the **square** of voltage.

### Example 1
A heater is rated 4,800 W at 240 V. What does it produce on 208 V?
- R = E² ÷ P = 240² ÷ 4,800 = 57,600 ÷ 4,800 = **12 Ω**
- P at 208 V = 208² ÷ 12 = 43,264 ÷ 12 = **3,605 W**

Shortcut: (208 ÷ 240)² = 0.751 → 4,800 × 0.751 = 3,605 W (about 75%).

### Example 2
What current does the heater draw at 208 V? I = E ÷ R = 208 ÷ 12 = **17.3 A** (vs. 20 A at
240 V).

## Power Factor and Efficiency
### Example 3
A 3-phase, 480-V load draws 40 A at 0.85 power factor. True power?
- VA = 480 × 40 × 1.732 = 33,254 VA
- W = 33,254 × 0.85 = **28,266 W** (≈ 28.3 kW)

### Example 4
A 10-hp motor is 88% efficient. Input power? Output = 10 × 746 = 7,460 W; Input = 7,460 ÷ 0.88 =
**8,477 W**.

## Voltage Drop
The NEC does not generally mandate a maximum voltage drop for branch circuits and feeders;
informational notes recommend about **3%** for a branch circuit or feeder and **5%** total.
(Some specific articles do set limits — e.g., fire pumps and sensitive electronic equipment.)
Exams still ask voltage drop questions.

### Formulas
| System | Voltage drop | Solve for conductor size |
|---|---|---|
| Single-phase | VD = (2 × K × I × L) ÷ CM | CM = (2 × K × I × L) ÷ VD |
| Three-phase | VD = (1.732 × K × I × L) ÷ CM | CM = (1.732 × K × I × L) ÷ VD |

- **K** = resistivity constant: **12.9** for copper, **21.2** for aluminum (approximate, at 75°C)
- **I** = load current, **L** = **one-way** length in feet
- **CM** = circular mils from Chapter 9, Table 8

| AWG | Circular mils |
|---|---|
| 14 | 4,110 |
| 12 | 6,530 |
| 10 | 10,380 |
| 8 | 16,510 |
| 6 | 26,240 |
| 4 | 41,740 |
| 3 | 52,620 |
| 2 | 66,360 |
| 1 | 83,690 |
| 1/0 | 105,600 |
| 2/0 | 133,100 |
| 3/0 | 167,800 |
| 4/0 | 211,600 |

### Example 5 — Single-Phase
A 120-V, 16-A load is 150 ft (one way) from the panel on 12 AWG copper.
- VD = (2 × 12.9 × 16 × 150) ÷ 6,530 = 61,920 ÷ 6,530 = **9.48 V**
- Percent: 9.48 ÷ 120 = **7.9%** — far above the 3% recommendation.

### Example 6 — Solve for Size
Same load; limit the drop to 3% (3.6 V).
- CM = (2 × 12.9 × 16 × 150) ÷ 3.6 = 61,920 ÷ 3.6 = **17,200 CM**
- 8 AWG is 16,510 CM — too small. **6 AWG** (26,240 CM) is the smallest that meets 3%.

### Example 7 — Three-Phase
A 480-V, 3-phase feeder carries 100 A for 300 ft on 1/0 copper.
- VD = (1.732 × 12.9 × 100 × 300) ÷ 105,600 = 670,284 ÷ 105,600 = **6.35 V**
- Percent: 6.35 ÷ 480 = **1.32%** — acceptable.

### Example 8 — Aluminum
Same feeder in aluminum 1/0: VD = (1.732 × 21.2 × 100 × 300) ÷ 105,600 = **10.43 V** (2.17%).

## Common Traps
| Trap | Fix |
|---|---|
| Using round-trip length in the formula | The "2" (single-phase) or "1.732" (three-phase) already accounts for the return path; use one-way L |
| Using 2 instead of 1.732 for three-phase | Three-phase uses 1.732 |
| Using the wrong K | Copper 12.9, aluminum 21.2 |
| Reporting volts when percent is asked | Divide by source voltage |
| Rounding conductor size down | Always choose the size with CM equal to or greater than required |

> **Safety:** Excessive voltage drop is not only an efficiency problem — undervoltage makes
> motors draw more current and overheat, and can cause equipment malfunction. When measuring
> voltage drop on a live circuit, use a CAT-rated meter, appropriate PPE, and keep test leads
> under control; take readings at accessible points without removing covers unless qualified and
> authorized for energized work.

## Key Takeaways
- Resistance is constant for resistive loads; power varies with voltage squared.
- Three-phase VA = E × I × 1.732; watts = VA × PF.
- VD single-phase = 2KIL ÷ CM; three-phase = 1.732KIL ÷ CM; L is one-way length.
- K = 12.9 copper, 21.2 aluminum; CM from Chapter 9, Table 8.
- Recommended (not mandatory): 3% branch or feeder, 5% total.
