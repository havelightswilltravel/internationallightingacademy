---
title: The Power Triangle & Power Factor Correction
minutes: 50
video:
video_suggestion: >
  Field segment at a light-industrial facility: a qualified electrician (in appropriate PPE)
  connects a power quality meter to a motor feeder and shows kW, kVAR, kVA and power factor on
  the screen, then walks the viewer past a power factor correction capacitor bank, pointing out
  its fusing, discharge resistors and warning labels. Finish at a whiteboard sizing a capacitor bank.
---

## Three Kinds of Power

In a DC or purely resistive circuit, volts × amps = watts. In AC circuits with inductance or
capacitance, there are three related quantities:

| Quantity | Symbol | Unit | What it represents |
|---|---|---|---|
| True (real) power | P | watts (W, kW) | Power that does work or makes heat and light |
| Reactive power | Q | volt-amperes reactive (VAR, kVAR) | Power that flows back and forth to build magnetic/electric fields |
| Apparent power | S | volt-amperes (VA, kVA) | Volts × amps — what the conductors and transformers must carry |

These form the **power triangle**: P is the base, Q is the vertical side, and S is the hypotenuse.

**S = √(P² + Q²)**

## Power Factor

**Power factor (PF) = P ÷ S = cos θ**

PF is a number from 0 to 1 (often expressed as a percentage). A resistive heater has a PF near 1.0.
A lightly loaded induction motor might be 0.5 or lower. The lower the PF, the more current the
system must carry to deliver the same useful power.

Inductive loads give a **lagging** PF; capacitive loads give a **leading** PF.

### Worked Example 1 — Single-Phase
A 240 V single-phase load draws 20 A and a power meter reads 3,840 W.
1. S = 240 × 20 = 4,800 VA
2. PF = 3,840 ÷ 4,800 = **0.80**
3. Q = √(4,800² − 3,840²) = √(23,040,000 − 14,745,600) = √8,294,400 = **2,880 VAR**

### Three-Phase Power
For balanced three-phase circuits:
- S = √3 × V_L-L × I = 1.732 × V × I
- P = 1.732 × V × I × PF

**Worked example:** A 480 V three-phase motor draws 52 A at 0.85 PF.
- S = 1.732 × 480 × 52 = 43,231 VA ≈ 43.2 kVA
- P = 43.2 × 0.85 ≈ **36.7 kW**

## Why Low Power Factor Costs Money

For the same kW, a lower PF means more current. More current means:
- Larger conductors, transformers and switchgear for the same useful load
- More I²R heating and voltage drop in conductors
- Reduced available capacity on existing feeders and transformers
- Many utilities add a **power factor or kVA demand charge** to commercial bills

## Power Factor Correction

Because capacitive current leads and inductive current lags, adding capacitors **cancels** some of
the inductive reactive power. The utility then supplies less kVAR, so apparent power and current
drop while the real power stays the same.

The capacitor kVAR needed to raise PF from PF₁ to PF₂ is:

**kVAR = P × (tan θ₁ − tan θ₂)** where θ = arccos(PF)

### Worked Example 2 — Sizing a Capacitor Bank
A plant has a 100 kW load at 0.75 lagging PF on a 480 V three-phase service. Management wants 0.95.

| Step | Calculation | Result |
|---|---|---|
| θ₁ | arccos 0.75 | 41.41° |
| tan θ₁ | tan 41.41° | 0.8819 |
| θ₂ | arccos 0.95 | 18.19° |
| tan θ₂ | tan 18.19° | 0.3287 |
| kVAR required | 100 × (0.8819 − 0.3287) | **55.3 kVAR** |

Check the improvement:

| | Before | After |
|---|---|---|
| kW | 100 | 100 |
| kVA | 100 ÷ 0.75 = 133.3 | 100 ÷ 0.95 = 105.3 |
| Current at 480 V, 3φ | 133,300 ÷ (1.732 × 480) ≈ 160 A | 105,300 ÷ (1.732 × 480) ≈ 127 A |

About 33 A less current on every phase for the same work. In practice the engineer would select a
standard bank size (often the next standard size, such as 60 kVAR) and check for harmonic resonance.

## Where Capacitors Are Installed

- **At individual motors** — switched with the motor so they are only online when needed. The
  capacitor must not be sized so large that it over-excites the motor when the motor is
  disconnected and coasting; manufacturers publish maximum kVAR tables for this reason. Article 460
  of the NEC covers capacitor installations, including overcurrent protection and discharge
  requirements; motor-capacitor installations also affect how the motor overload is selected.
- **At the service or MCC** — automatic banks that switch steps in and out as load changes.
- **Built into equipment** — HID ballasts and many electronic drivers include PF correction.

Over-correcting produces a **leading** power factor, which can cause voltage rise and is also
penalized by some utilities.

> **Safety:** PF correction banks hold a lethal charge after being switched off. NEC Article 460
> requires a means to discharge capacitors after disconnection, but discharge resistors can fail.
> LOTO the bank, wait at least the labeled discharge time, then verify absence of voltage on every
> capacitor terminal with a properly rated meter before contact. Blown capacitor fuses are a symptom
> to report — do not simply replace them without investigating the cause.

## Reading PF in the Field

- Utility bills often show kW, kVAR or kVA demand and PF — useful to spot a correction opportunity.
- A clamp meter with a power function displays kW, kVA and PF on single-phase circuits; a
  three-phase power quality analyzer is needed for three-phase systems.
- **Displacement PF** (from phase shift) is what capacitors correct. **Distortion** from harmonic
  currents also lowers true PF, but capacitors do not fix it — that requires filters or
  harmonic-mitigating equipment.

## Key Takeaways
- Real power (W) does work; reactive power (VAR) builds fields; apparent power (VA) is what
  conductors carry.
- S = √(P² + Q²) and PF = P ÷ S = cos θ.
- Three-phase: S = 1.732 × V × I; P = 1.732 × V × I × PF.
- Capacitor kVAR to correct PF = P × (tan θ₁ − tan θ₂).
- Correcting PF reduces current for the same work; capacitor banks must be LOTO'd, allowed to
  discharge and verified at zero before contact.
