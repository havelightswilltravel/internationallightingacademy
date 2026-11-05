---
title: AC Waveforms & Inductance
minutes: 40
video:
video_suggestion: >
  Instructor uses a bench function generator and oscilloscope to show a 60 Hz sine wave,
  marks peak, peak-to-peak and RMS values, then connects an inductor (such as a ballast coil or
  contactor coil) in series with a resistor and shows current lagging voltage on a dual-trace
  scope. Close with a clamp meter measuring a real motor or transformer's inrush.
---

## Why AC Theory Matters on the Job

In EA1 you worked with DC circuits, where Ohm's law (E = I × R) explains everything. Nearly every
load you will install as an electrician runs on alternating current, and AC loads such as motors,
transformers, ballasts and LED drivers do not behave like simple resistors. They store energy in
magnetic fields (inductance) and electric fields (capacitance). Understanding this is what lets you
explain why a motor draws more current than its wattage suggests, why a utility bills for poor
power factor, and why a de-energized capacitor bank can still hurt you.

## The Sine Wave

Utility power in North America is a sine wave at **60 hertz** (cycles per second). One cycle takes
1/60 s, about 16.7 milliseconds. The voltage rises from zero to a positive peak, falls through zero,
reaches a negative peak and returns to zero.

| Term | Meaning | Relationship |
|---|---|---|
| Peak (Vp) | Maximum instantaneous value | Vp = 1.414 × Vrms |
| Peak-to-peak (Vpp) | Positive peak to negative peak | Vpp = 2 × Vp |
| RMS (effective) | The DC value that produces the same heating | Vrms = 0.707 × Vp |
| Average (half cycle) | Average of one half cycle | Vavg = 0.637 × Vp |

When we say "120 volts," we mean 120 V **RMS**. A true-RMS meter reads RMS directly.

**Worked example:** What is the peak voltage on a 277 V lighting circuit?
Vp = 1.414 × 277 = **391.7 V**. The insulation on that circuit sees nearly 392 V at every peak, which
is one reason insulation and device voltage ratings matter.

> **Safety:** Peak voltage, not RMS, is what stresses insulation and drives arc initiation. Always
> use meters rated for the measurement category (CAT III/CAT IV) and voltage of the system, and
> verify absence of voltage live-dead-live before touching conductors.

## Phase Angle

Two waveforms at the same frequency can be shifted in time. We describe the shift in electrical
degrees (one full cycle = 360°). In a purely resistive circuit, voltage and current rise and fall
together — they are **in phase**. In inductive and capacitive circuits they are not.

## Inductance

Any coil of wire produces a magnetic field when current flows. When that current changes, the
changing field induces a voltage in the coil that **opposes the change** (Lenz's law). This
property is **inductance (L)**, measured in **henries (H)**.

Things that make inductance larger:
- More turns of wire
- A larger coil cross-section
- An iron core (which concentrates the magnetic field)

Common inductive loads: motors, transformers, magnetic ballasts, solenoids, contactor and relay
coils, and HID ignitor/reactor ballasts.

### Inductors in Series and Parallel
Inductors combine like resistors (assuming no mutual coupling):
- Series: L_T = L1 + L2 + L3 …
- Parallel: 1/L_T = 1/L1 + 1/L2 + …

### Inductive Reactance

The opposition an inductor offers to AC is **inductive reactance (X_L)**, measured in ohms:

**X_L = 2πfL**

where f is frequency in hertz and L is inductance in henries. Notice that X_L **rises with
frequency**. At DC (f = 0), an ideal inductor has zero reactance — only its wire resistance limits
current.

**Worked example:** A coil has 0.2 H of inductance on a 60 Hz, 120 V circuit. Neglecting resistance,
find X_L and the current.
- X_L = 2 × 3.1416 × 60 × 0.2 = **75.4 Ω**
- I = E ÷ X_L = 120 ÷ 75.4 = **1.59 A**

**Worked example:** The same coil on a 50 Hz system: X_L = 2 × 3.1416 × 50 × 0.2 = 62.8 Ω, so current
rises to 1.91 A. This is why equipment rated only for 60 Hz may overheat on 50 Hz.

### Current Lags Voltage

In a purely inductive circuit, current **lags** voltage by 90°. A memory aid is **ELI the ICE man**:
in an inductive (L) circuit, voltage (E) comes before current (I). Real circuits have resistance
too, so the lag is between 0° and 90°.

### Inductive Kick and Inrush

Because an inductor resists changes in current, opening a switch on an inductive load can produce a
high-voltage spike as the magnetic field collapses. That is why contactor coils often have
suppressors, and why you should never open a current-transformer secondary while the primary is
energized — it can develop a dangerous voltage. On energizing, transformers and motors draw an
**inrush current** many times their running current for a short time, which matters when you
select overcurrent devices (covered in EA2-C03 and EA3).

> **Safety:** Never open the secondary circuit of an energized current transformer (CT). Short the
> secondary with the shorting block first. An open CT secondary can produce a lethal voltage and
> damage the CT.

### Time Constant

When DC is applied to an inductor and resistor in series, current does not jump instantly to its
final value. It rises over **time constants**, where τ = L ÷ R seconds. After one time constant
current reaches about 63% of its final value, and after five time constants it is considered fully
established (about 99%).

**Example:** L = 0.5 H, R = 10 Ω → τ = 0.05 s; full current in about 5 × 0.05 = 0.25 s.

## Field Connections

- A contactor coil rated 120 V AC that is mistakenly connected to 120 V DC will burn up, because
  without frequency there is no reactance — only the low coil resistance limits current.
- A clamp meter on a magnetic ballast circuit will often read more current than watts ÷ volts
  predicts. The difference is reactive current, explained in Lesson 4.

## Key Takeaways
- 60 Hz AC completes one cycle in about 16.7 ms; nameplate and meter voltages are RMS values.
- Vp = 1.414 × Vrms and Vrms = 0.707 × Vp.
- Inductance opposes changes in current; inductive reactance X_L = 2πfL rises with frequency.
- In an inductive circuit, current lags voltage (ELI).
- Inductive loads produce inrush on energizing and voltage spikes on de-energizing; never open an
  energized CT secondary.
