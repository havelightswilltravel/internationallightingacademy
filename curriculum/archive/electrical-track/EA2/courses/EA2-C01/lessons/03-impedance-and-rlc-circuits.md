---
title: Impedance & RLC Circuits
minutes: 45
video:
video_suggestion: >
  Whiteboard session building an impedance triangle from measured values: instructor measures
  voltage across the resistor and the coil in a series RL trainer, shows that the drops do not
  add arithmetically to the source voltage, then shows how the Pythagorean theorem reconciles
  them. End with a parallel RL circuit measured with a clamp meter on each branch.
---

## Impedance

**Impedance (Z)** is the total opposition to AC current, combining resistance (R) and reactance
(X). It is measured in ohms, and Ohm's law still works when Z replaces R:

**E = I × Z   I = E ÷ Z   Z = E ÷ I**

The catch: resistance and reactance are **90° apart**, so they cannot simply be added. They combine
like the sides of a right triangle.

## Series Circuits

In a series circuit, current is the same everywhere, so we add oppositions using the
**impedance triangle**:

**Z = √(R² + X²)** where the net reactance X = X_L − X_C

The **phase angle** θ is the angle between Z and R: cos θ = R ÷ Z.

### Worked Example 1 — Series RL
A 30 Ω resistance in series with 40 Ω of inductive reactance on 120 V, 60 Hz.

1. Z = √(30² + 40²) = √(900 + 1,600) = √2,500 = **50 Ω**
2. I = 120 ÷ 50 = **2.4 A**
3. Voltage across R: V_R = 2.4 × 30 = 72 V
4. Voltage across L: V_L = 2.4 × 40 = 96 V
5. cos θ = 30 ÷ 50 = 0.6, so θ ≈ 53.1° (current lags)

Notice 72 V + 96 V = 168 V, which is more than the 120 V source. That is not an error: the two drops
are 90° apart, and √(72² + 96²) = 120 V. If you measure a series inductive circuit with a meter and
the drops "don't add up," this is why.

### Worked Example 2 — Series RLC
R = 20 Ω, X_L = 37.7 Ω (0.1 H at 60 Hz), X_C = 26.5 Ω (100 µF at 60 Hz), source 120 V.

1. Net reactance X = 37.7 − 26.5 = 11.2 Ω (inductive, because X_L is larger)
2. Z = √(20² + 11.2²) = √(400 + 125.4) = √525.4 ≈ **22.9 Ω**
3. I = 120 ÷ 22.9 ≈ **5.24 A**
4. cos θ = 20 ÷ 22.9 ≈ 0.87

The capacitor partially cancelled the inductor — the impedance is far less than X_L alone.

## Resonance

When X_L = X_C, they cancel completely and a series circuit's impedance drops to just R. This
occurs at the **resonant frequency**:

**f_r = 1 ÷ (2π√(LC))**

For L = 0.1 H and C = 100 µF: √(0.1 × 0.0001) = 0.003162; f_r = 1 ÷ (6.2832 × 0.003162) ≈ **50.3 Hz**.

In practice, resonance can occur between power factor correction capacitors and system
inductance at a **harmonic frequency** (for example the 5th harmonic, 300 Hz, produced by
non-linear loads such as drives and LED drivers). This can cause very high currents, blown
capacitor fuses and overheated equipment — one reason PF correction is engineered, not guessed.

## Parallel Circuits

In a parallel circuit, **voltage** is common to every branch, so we work with branch currents.
Each branch current is found with Ohm's law, and the currents combine as a right triangle:

**I_T = √(I_R² + (I_L − I_C)²)**

### Worked Example 3 — Parallel RL
A 40 Ω resistor and a 30 Ω inductive reactance in parallel across 120 V.

1. I_R = 120 ÷ 40 = 3 A
2. I_L = 120 ÷ 30 = 4 A
3. I_T = √(3² + 4²) = √25 = **5 A**
4. Z = 120 ÷ 5 = **24 Ω**

A clamp meter on each branch would read 3 A and 4 A, but on the supply conductor only 5 A — not 7 A.
Again, the 90° phase difference explains it.

### Worked Example 4 — Adding a Capacitor
Add a capacitor branch drawing I_C = 4 A to Example 3. Now I_L − I_C = 0, so I_T = √(3² + 0²) = **3 A**.
The capacitor supplies the inductor's reactive current locally, and the supply conductors carry
only the 3 A of resistive (working) current. This is exactly what a power factor correction
capacitor does for a motor.

## Summary Table

| Circuit | Common quantity | Combine | Formula |
|---|---|---|---|
| Series | Current | Voltages / oppositions | Z = √(R² + (X_L − X_C)²) |
| Parallel | Voltage | Branch currents | I_T = √(I_R² + (I_L − I_C)²) |

## Measuring in the Field

- Use a **true-RMS** meter on circuits with electronic loads; averaging meters can misread
  distorted waveforms.
- A clamp meter measures current magnitude, not phase. To see phase angle or power factor you
  need a power quality analyzer or a clamp meter with a power function.
- When a measured current is higher than expected from watts ÷ volts, suspect reactive current
  (low power factor) or harmonic current before suspecting a meter error.

> **Safety:** Power quality analyzers require voltage leads on energized conductors. Only
> qualified persons, wearing the PPE determined by the employer's NFPA 70E risk assessment, may
> connect them. Apprentices connect test equipment only under direct supervision and with the
> employer's energized-work procedures followed.

## Key Takeaways
- Impedance (Z) is total AC opposition; E = I × Z.
- Resistance and reactance are 90° apart and combine as a right triangle: Z = √(R² + X²).
- In series circuits, net reactance is X_L − X_C; voltage drops add vectorially, not arithmetically.
- In parallel circuits, branch currents add vectorially; capacitor current cancels inductor current.
- Resonance (X_L = X_C) can occur at harmonic frequencies and damage capacitors.
