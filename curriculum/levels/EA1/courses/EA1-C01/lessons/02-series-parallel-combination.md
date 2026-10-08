---
title: Series, Parallel & Combination Circuits
minutes: 45
video:
video_suggestion: >
  On a low-voltage trainer, the instructor builds a series circuit, a parallel circuit and a
  series-parallel circuit, calculating each value on a whiteboard first and then confirming
  with a DMM. Show what happens to the other loads when one lamp is removed in each circuit type.
---

## Review and Rules

You already know Ohm's law (E = I × R) and Watt's law (P = E × I). This lesson applies them to
the three circuit arrangements you will analyze for the rest of your career. Memorize the rules
in this table — they are the foundation for troubleshooting and for exam calculations.

| Quantity | Series | Parallel |
|---|---|---|
| Current | Same through every component: I_T = I₁ = I₂ = I₃ | Divides among branches: I_T = I₁ + I₂ + I₃ |
| Voltage | Divides among components: E_T = E₁ + E₂ + E₃ | Same across every branch: E_T = E₁ = E₂ = E₃ |
| Resistance | Adds: R_T = R₁ + R₂ + R₃ | R_T = 1 ÷ (1/R₁ + 1/R₂ + 1/R₃); always less than the smallest branch |
| Power | Adds: P_T = P₁ + P₂ + P₃ | Adds: P_T = P₁ + P₂ + P₃ |

Power always adds, no matter how the circuit is arranged.

## Series Circuits

### Worked Example
Three resistors of 10 Ω, 20 Ω and 30 Ω are in series across 120 V.

1. R_T = 10 + 20 + 30 = **60 Ω**
2. I_T = E ÷ R = 120 ÷ 60 = **2 A** (same through each resistor)
3. E₁ = 2 × 10 = 20 V; E₂ = 2 × 20 = 40 V; E₃ = 2 × 30 = 60 V
4. Check: 20 + 40 + 60 = **120 V** ✔
5. P_T = 120 × 2 = **240 W** (or 40 + 80 + 120 W)

Notice that the largest resistance drops the most voltage. In the field, a high-resistance
splice in series with a load behaves exactly like R₃ here — it "steals" voltage from the load
and turns it into heat.

### Field Applications of Series
- A switch is in series with its load. A closed switch has near-zero resistance and near-zero
  voltage across it; an open switch has the full source voltage across it.
- Overcurrent devices are in series with the circuit they protect.
- An open anywhere in a series path stops current everywhere.

## Parallel Circuits

### Worked Example
Three loads of 20 Ω, 30 Ω and 60 Ω are in parallel across 120 V.

1. Each branch sees 120 V.
2. I₁ = 120 ÷ 20 = 6 A; I₂ = 120 ÷ 30 = 4 A; I₃ = 120 ÷ 60 = 2 A
3. I_T = 6 + 4 + 2 = **12 A**
4. R_T = 120 ÷ 12 = **10 Ω** (less than the smallest branch, 20 Ω ✔)
5. Check with the reciprocal formula: 1 ÷ (1/20 + 1/30 + 1/60) = 1 ÷ (0.05 + 0.0333 + 0.0167)
   = 1 ÷ 0.1 = **10 Ω** ✔

### Shortcuts
- **Two resistors:** R_T = (R₁ × R₂) ÷ (R₁ + R₂). Example: 12 Ω and 6 Ω → 72 ÷ 18 = 4 Ω.
- **Equal resistors:** R_T = R ÷ N. Five 100 Ω lamps in parallel = 20 Ω.

### Field Applications of Parallel
Building loads — receptacles, luminaires, appliances — are connected in parallel so each gets
full voltage and operates independently. Every load you add **lowers** the total resistance and
**raises** the total current on the branch circuit. That is why adding loads eventually trips
the breaker.

## Combination (Series-Parallel) Circuits

To solve a combination circuit, **reduce it step by step** to one equivalent resistance, find
total current, then work back out to each component.

### Worked Example
R₁ = 4 Ω is in series with a parallel pair, R₂ = 12 Ω and R₃ = 6 Ω. Source = 24 V DC.

1. Combine the parallel pair: R₂‖R₃ = (12 × 6) ÷ (12 + 6) = 72 ÷ 18 = **4 Ω**
2. Total: R_T = 4 + 4 = **8 Ω**
3. Total current: I_T = 24 ÷ 8 = **3 A** (flows through R₁)
4. E₁ = 3 × 4 = **12 V**
5. Voltage across the parallel pair: 24 − 12 = **12 V**
6. I₂ = 12 ÷ 12 = **1 A**; I₃ = 12 ÷ 6 = **2 A**; check 1 + 2 = 3 A ✔
7. Power: P₁ = 36 W, P₂ = 12 W, P₃ = 24 W; total 72 W = 24 V × 3 A ✔

Always finish with a check. If the branch currents don't add up to total current, or the drops
don't add up to source voltage, there is an error somewhere.

## Opens and Shorts

| Fault | Series circuit effect | Parallel circuit effect |
|---|---|---|
| Open in one component | All current stops; full source voltage appears across the open | Only that branch stops; others keep working; total current drops |
| Short across one component | That component drops 0 V; others get more voltage; current rises | Total resistance near zero; very high current; OCPD should open |

> **Safety:** A dead short across a parallel branch circuit produces fault current limited only
> by the source and wiring impedance — potentially thousands of amperes at a panel. Never
> "test" a circuit by shorting it, and never defeat an overcurrent device. Troubleshoot opens
> and shorts with the circuit locked out and verified de-energized, using continuity and
> resistance measurements.

## Field Example — Lamps in Series by Mistake

An apprentice wires two 120 V, 60 W incandescent lamps in series on a 120 V circuit instead of
in parallel. Each lamp's hot resistance is about R = E² ÷ P = 14,400 ÷ 60 = 240 Ω. In series:
R_T = 480 Ω, I = 120 ÷ 480 = 0.25 A, each lamp gets 60 V and dissipates about 15 W (in reality
a bit more, because the cooler filament has lower resistance). Both lamps glow dimly — a classic
symptom of a series wiring error.

## Key Takeaways
- Series: current is the same, voltages add, resistances add.
- Parallel: voltage is the same, currents add, total resistance is less than the smallest branch.
- Power adds in every circuit type.
- Solve combination circuits by reducing to one resistance, then working back out.
- Always check your answer against KVL/KCL.
- Building loads are in parallel; switches and OCPDs are in series with their loads.
