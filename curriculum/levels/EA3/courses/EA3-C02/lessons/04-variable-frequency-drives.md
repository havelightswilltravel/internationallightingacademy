---
title: Variable Frequency Drives (VFDs)
minutes: 45
video:
video_suggestion: >
  Technician performs a basic VFD start-up on a fan motor: verifies ratings, enters nameplate
  data on the keypad, sets accel/decel and speed limits, bumps for rotation, then demonstrates
  waiting for DC bus discharge and measuring bus voltage before opening the drive.
---

## What a VFD Does

A variable frequency drive controls motor speed by changing the frequency (and voltage) it
supplies. Since synchronous speed = 120 x f / P, running a 4-pole motor at 30 Hz gives about
900 rpm instead of 1800 rpm. Fans and pumps save large amounts of energy at reduced speed
because their power demand drops roughly with the cube of speed.

### Inside the drive
| Section | Function |
|---|---|
| **Rectifier** (converter) | Diodes turn incoming AC into DC |
| **DC bus** | Capacitors smooth and store the DC (about 650–680 V DC on a 480 V drive) |
| **Inverter** | IGBT transistors switch the DC on and off thousands of times per second (**PWM**) to create a variable-frequency output |
| Control board | Keypad, I/O terminals, communications, protection logic |

To keep motor flux roughly constant, the drive holds a constant **volts-per-hertz** ratio:
460 V / 60 Hz ≈ 7.67 V/Hz, so at 30 Hz it outputs about 230 V. Sensorless vector and other
control modes improve torque at low speed.

## Code Basics for Drive Circuits

Part X of Article 430 (2023 NEC) covers adjustable-speed drive systems. Key concepts:

- Conductors supplying the drive are sized at not less than **125% of the drive's rated input
  current** (430.122(A)), not the motor FLC. The drive input current is on its nameplate or in
  the manual.
- Overload protection for the motor may be provided by the drive if the drive is listed for
  that purpose and properly set up with motor FLA.
- Short-circuit and ground-fault protection must be the type and maximum size marked by the
  drive manufacturer.
- A disconnect is still required, and the drive's own keypad STOP is **not** a lockout point.

## Basic Parameter Setup

Every manufacturer's menu is different, but a basic start-up enters the same information:

| Parameter | Typical source |
|---|---|
| Motor rated voltage, FLA, frequency, rpm, hp/kW | Motor nameplate |
| Control mode (V/Hz, sensorless vector) | Application/spec |
| Acceleration and deceleration time | Spec or supervisor (e.g., 10–30 s for fans) |
| Minimum and maximum frequency | Spec (e.g., 20 Hz min for cooling, 60 Hz max) |
| Start/stop command source | Keypad, terminals (2- or 3-wire), or network |
| Speed reference source | Keypad, 0–10 V or 4–20 mA analog, or network |
| Stop mode | Ramp to stop or coast to stop |
| Motor overload / thermal protection | Motor FLA and trip class |

Many drives offer an **autotune** that measures the motor's electrical characteristics.
Run it only with the motor uncoupled or the load in a safe condition, as the manual states.

### Checking rotation
Bump the motor at low speed. If rotation is wrong, either change the drive's direction
parameter or swap two **output** leads (T1/T2/T3) — with the drive de-energized and verified.
Swapping input leads does **not** change rotation on a VFD, because the rectifier doesn't care
about input phase sequence.

## Field Concerns

- **Harmonics:** The diode rectifier draws non-sinusoidal current, which can overheat neutral
  conductors and transformers and distort voltage. Line reactors, DC chokes, and harmonic
  filters reduce this.
- **Reflected wave:** Fast IGBT switching on long motor leads can create voltage spikes at the
  motor terminals that stress insulation. Keep leads within the manufacturer's limits or add
  output reactors/filters, and use inverter-duty motors where specified.
- **Bearing currents:** Common-mode voltage can discharge through motor bearings and pit them;
  shaft grounding rings and proper VFD-rated cable reduce damage.
- **Contactors between drive and motor:** Opening or closing an output contactor while the
  drive is running can damage it. Only install one if the design and manufacturer allow it and
  it is interlocked with the drive.
- **Bypass:** Some packages include a bypass starter so the motor can run across-the-line if
  the drive fails; the overloads and interlocks must work in both modes.
- **Cable and grounding:** Use the cable type and grounding recommended by the drive maker;
  keep control/signal wiring separated from motor leads.

## Stored Energy — The Hidden Hazard

The DC bus capacitors stay charged after the drive is disconnected. Manufacturers state a
discharge time — often 5 to 15 minutes — and some drives retain hazardous voltage longer if a
discharge circuit fails.

Safe procedure:
1. Stop the motor and open and lock out the drive's disconnect.
2. Wait at least the manufacturer's stated discharge time (check the label on the drive).
3. With a meter rated for the DC voltage, verify the meter on a known source, then measure
   DC bus voltage at the designated terminals (often marked DC+ and DC−). Also check input and
   output terminals for AC voltage.
4. Retest the meter. Proceed only when the bus measures at a safe level.

> **Safety:** A dark keypad does not mean the drive is safe. Charged DC bus capacitors can
> deliver a lethal shock long after power is removed. Always wait the marked discharge time and
> measure. A motor coasting on a high-inertia load (like a large fan windmilling in a draft) can
> also generate voltage back into the drive output — block the load from turning when required.

## Key Takeaways
- A VFD is rectifier → DC bus → PWM inverter; it varies frequency and voltage together.
- Size drive input conductors at 125% of the drive's rated input current.
- Enter motor nameplate data, accel/decel, min/max frequency, and command sources at start-up.
- Change rotation by parameter or by swapping output leads — not input leads.
- Watch for harmonics, reflected wave, bearing currents and improper output contactors.
- Wait the stated discharge time and measure the DC bus before touching anything inside.
