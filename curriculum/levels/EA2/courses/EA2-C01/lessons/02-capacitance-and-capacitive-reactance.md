---
title: Capacitance & Capacitive Reactance
minutes: 40
video:
video_suggestion: >
  Instructor shows motor-run and motor-start capacitors and an HID ballast capacitor, reads their
  microfarad and voltage ratings, then demonstrates the safe discharge and verification procedure
  with a listed discharge tool and a meter. Follow with an oscilloscope trace showing current
  leading voltage in an RC circuit.
---

## What a Capacitor Is

A **capacitor** is two conductive plates separated by an insulator called the **dielectric**.
When voltage is applied, electrons pile up on one plate and leave the other, storing energy in the
electric field between them. **Capacitance (C)** is measured in **farads (F)**; practical values are
in microfarads (µF, millionths of a farad).

Capacitance increases with:
- Larger plate area
- Plates closer together (thinner dielectric)
- A dielectric material with a higher dielectric constant

Where you will find capacitors in the field:

| Equipment | Purpose |
|---|---|
| Single-phase motor run/start capacitors | Create phase shift to start and run the motor |
| HID (CWA) ballasts | Regulate lamp current and improve power factor |
| Power factor correction banks | Supply reactive power to offset inductive loads |
| LED drivers and electronic ballasts | Filtering and energy storage |
| VFDs and UPS units | DC bus energy storage |
| Surge protective devices and filters | Noise and transient suppression |

## Capacitors in Series and Parallel

Capacitors combine **opposite** to resistors:
- **Parallel:** C_T = C1 + C2 + C3 … (plate area adds)
- **Series:** 1/C_T = 1/C1 + 1/C2 + … (effective dielectric thickness increases)

**Worked example:** Two 40 µF capacitors in parallel = 80 µF. The same two in series = 20 µF.
In series, each capacitor shares the voltage, so two equal capacitors in series can withstand
twice the voltage of one.

## Capacitive Reactance

A capacitor blocks DC once charged, but passes AC because it charges and discharges every half
cycle. Its opposition to AC is **capacitive reactance (X_C)**, in ohms:

**X_C = 1 ÷ (2πfC)**

with C in farads. Note that X_C **falls as frequency rises** — the opposite of inductive reactance.

**Worked example:** Find X_C for a 50 µF capacitor at 60 Hz.
- Convert: 50 µF = 0.000050 F
- X_C = 1 ÷ (2 × 3.1416 × 60 × 0.000050) = 1 ÷ 0.01885 = **53.1 Ω**
- On 240 V: I = 240 ÷ 53.1 = **4.52 A**

**Worked example:** What capacitance gives 100 Ω of reactance at 60 Hz?
C = 1 ÷ (2πf × X_C) = 1 ÷ (376.99 × 100) = 0.0000265 F = **26.5 µF**.

A handy shortcut at 60 Hz: X_C ≈ 2,653 ÷ C(µF). Check: 2,653 ÷ 50 = 53.1 Ω.

## Current Leads Voltage

In a purely capacitive circuit, current **leads** voltage by 90° — the capacitor must take on
charge (current) before voltage builds across it. The memory aid finishes: **ELI the ICE man** —
in a capacitive (C) circuit, current (I) comes before voltage (E).

Because inductors make current lag and capacitors make it lead, their effects **oppose** each
other. That is the basis of power factor correction (Lesson 4).

## RC Time Constant

When a capacitor charges or discharges through a resistor, it does so over time constants:
**τ = R × C** (ohms × farads = seconds). After one time constant the capacitor reaches about 63%
of full charge (or discharges to about 37%); after five time constants it is considered fully
charged or discharged.

**Worked example:** A 470 µF capacitor bleeds down through a 100 kΩ bleeder resistor.
τ = 100,000 × 0.000470 = 47 s. Five time constants ≈ **235 s, nearly four minutes**. If the bleeder
resistor has failed open, the capacitor may hold a charge far longer.

> **Safety:** Capacitors store energy after the circuit is de-energized. Before touching a motor
> capacitor, ballast, VFD or PF correction bank: apply LOTO, wait the manufacturer's stated
> discharge time (often marked on VFD and capacitor bank labels), then **verify** zero voltage
> across the capacitor terminals with a properly rated meter. Discharge only with a tool designed
> for the purpose — never with a screwdriver. Treat bulging or leaking capacitors as hazardous.

## Capacitor Ratings

Every capacitor is marked with:
- **Capacitance**, in µF (often with a tolerance, such as ±6%)
- **Voltage rating** — the replacement must be rated equal to or higher than the original
- For motor capacitors, whether it is a **run** (continuous duty, oil- or film-filled) or **start**
  (intermittent duty, electrolytic) capacitor. Never substitute a start capacitor in a run position.

**Field check:** Many DMMs have a capacitance function. With the capacitor removed and discharged,
a reading more than the marked tolerance away from the nameplate indicates a failed capacitor.

## Comparing L and C

| Property | Inductor | Capacitor |
|---|---|---|
| Stores energy in | Magnetic field | Electric field |
| Opposes change in | Current | Voltage |
| Reactance formula | X_L = 2πfL | X_C = 1 ÷ (2πfC) |
| Reactance vs frequency | Rises | Falls |
| Current vs voltage | Lags (ELI) | Leads (ICE) |
| Combining in series | Add | Reciprocal |

## Key Takeaways
- Capacitance is measured in farads; field values are usually microfarads.
- Capacitors add in parallel and combine by reciprocals in series — the opposite of resistors.
- X_C = 1 ÷ (2πfC); reactance falls as frequency rises.
- In a capacitive circuit, current leads voltage (ICE).
- Stored charge is a real hazard: LOTO, wait, verify zero voltage, and discharge with the proper tool.
