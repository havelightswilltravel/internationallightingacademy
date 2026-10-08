---
title: AC Waveforms, Frequency & RMS
minutes: 30
video:
video_suggestion: >
  A trainer connects a handheld scope (or a scope-capable meter) to an isolated low-voltage
  AC source on the shop bench and shows the sine wave, pointing out peak, RMS and one cycle.
  Then compares readings on an average-responding meter and a true-RMS meter connected to an
  LED driver input, explaining why the numbers differ.
---

## Why This Matters on the Job

In LT1 you learned that building power is AC and that common voltages are 120, 208, 240,
277 and 480. In LT2 you start reading those voltages on panelboards, interpreting meter
readings that look "wrong," and understanding why electronic lighting loads behave
differently from old incandescent loads. All of that starts with the shape of the AC
waveform.

## The Sine Wave

Alternating current reverses direction many times a second. If you plotted the voltage at
a receptacle over time, you would see a smooth, repeating curve called a **sine wave**.

| Term | Meaning | U.S. value |
|---|---|---|
| Cycle | One complete wave: up through positive peak, down through zero, to negative peak and back | — |
| Frequency | Cycles per second, measured in hertz (Hz) | 60 Hz |
| Period | Time for one cycle (1 ÷ frequency) | about 16.7 milliseconds |
| Peak voltage | Highest instantaneous value of the wave | about 170 V on a 120 V circuit |
| Peak-to-peak | Positive peak to negative peak | about 340 V on a 120 V circuit |
| RMS voltage | The "effective" value that does the same work as DC | 120 V (what we call the voltage) |

Many other countries use 50 Hz. Equipment made for 50 Hz can run hotter or behave
differently on 60 Hz (and vice versa), which is one reason you always check the nameplate.

## RMS: The Number We Actually Use

When we say a circuit is "120 volts," we mean 120 volts **RMS** (root mean square). RMS is
the AC value that produces the same heating in a resistor as the same number of DC volts.
For a pure sine wave:

- **Peak = RMS × 1.414**
- **RMS = Peak × 0.707**

So a 277 V lighting circuit actually swings to a peak of roughly 392 V, and a 480 V
line-to-line circuit peaks near 679 V. Insulation, meters and surge-protective devices
must be rated for the peaks, not just the RMS value. This is part of why you must use a
meter and test leads rated for the system (covered in LT2-C03).

> **Safety:** The voltage you read on the meter is the RMS value. The actual instantaneous
> voltage reaches about 1.4 times that number every cycle. A "277 V" circuit is not a
> small amount of energy — treat every lighting circuit as capable of causing a fatal shock.

## Distorted Waveforms and Electronic Loads

Incandescent lamps are **linear** loads: the current they draw is a clean sine wave that
follows the voltage. Most modern lighting — LED drivers, electronic ballasts, and many
controls — are **nonlinear** loads. They draw current in short pulses near the peaks of the
voltage wave instead of smoothly. The current waveform becomes distorted (it has
**harmonics**).

What this means for you in the field:

1. **Use a true-RMS meter.** Inexpensive "average-responding" meters assume a perfect sine
   wave. On distorted current they can read low by a significant amount. A true-RMS meter
   calculates the real effective value. Company standard: true-RMS meters only for lighting
   service work.
2. **Neutral currents can be higher than you expect** on three-phase systems serving many
   electronic loads. You will see why in the next lesson; LT4 covers harmonics in depth.
3. **Inrush current** — LED drivers charge internal capacitors when first energized, drawing
   a very brief, very high current spike. Many fixtures switched together can trip a
   breaker or weld relay contacts. LT4 covers this in detail.

## Phase Angle

Two AC waveforms with the same frequency can be shifted in time from each other. That shift
is measured in degrees, where one full cycle is 360°. This idea is the key to three-phase
power:

- On a **single-phase 120/240 V** system, the two "hot" legs are 180° apart — one is at
  its positive peak while the other is at its negative peak. That is why the voltage
  between them is double (240 V).
- On a **three-phase** system, three hot legs are each **120°** apart. The voltage between
  any two of them is 1.732 (√3) times the voltage from one leg to neutral.

Phase angle also shows up between voltage and current in the same circuit. When current
lags or leads voltage, the circuit has a **power factor** less than 1. Lesson 4 introduces
power factor.

## Reading a Meter: What "Normal" Looks Like

Utility voltage is not exact. ANSI C84.1 sets normal service voltage ranges; as a field rule
of thumb, readings within about ±5% of nominal are typical and readings outside about ±10%
deserve investigation.

| Nominal | About −5% | About +5% |
|---|---|---|
| 120 V | 114 V | 126 V |
| 208 V | 198 V | 218 V |
| 277 V | 263 V | 291 V |
| 480 V | 456 V | 504 V |

Most lighting ballasts and drivers are rated to tolerate a range (often ±10%). Persistent
high voltage shortens the life of lamps, ballasts and drivers; low voltage can cause hard
starting of fluorescent and HID lamps.

## Key Takeaways
- U.S. power is 60 Hz; one cycle takes about 16.7 ms.
- Voltages we name (120, 277, 480) are RMS values; the peak is about 1.414 times higher.
- LED drivers and electronic ballasts are nonlinear loads that draw distorted current — use a true-RMS meter.
- Single-phase 120/240 legs are 180° apart; three-phase legs are 120° apart.
- Field readings within about ±5% of nominal are typical; investigate readings far outside that range.
