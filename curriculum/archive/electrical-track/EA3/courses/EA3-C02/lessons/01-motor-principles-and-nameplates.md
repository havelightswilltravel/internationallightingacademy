---
title: Three-Phase Motor Principles & Nameplates
minutes: 40
video:
video_suggestion: >
  Cutaway induction motor on a bench: instructor shows the stator windings, squirrel-cage
  rotor and bearings, then reads every field on a real nameplate and demonstrates reversing
  rotation by swapping two leads on a locked-out trainer.
---

## How an Induction Motor Works

Most motors you will install are three-phase **squirrel-cage induction motors**. Three-phase
current in the stator windings produces a **rotating magnetic field**. That field cuts the bars
of the rotor, induces current in them, and the rotor's own magnetic field is dragged around
behind the stator field. No brushes or electrical connection to the rotor are needed.

### Synchronous speed and slip
The stator field rotates at **synchronous speed**:

**Ns = 120 x f / P** (f = frequency in Hz, P = number of poles)

| Poles | Synchronous speed at 60 Hz | Typical nameplate speed |
|---|---|---|
| 2 | 3600 rpm | about 3450–3550 rpm |
| 4 | 1800 rpm | about 1725–1780 rpm |
| 6 | 1200 rpm | about 1140–1180 rpm |
| 8 | 900 rpm | about 850–880 rpm |

The rotor always turns a little slower than synchronous speed — that difference is **slip**.
Slip % = (Ns − actual speed) / Ns x 100. A 4-pole motor at 1750 rpm has slip of
(1800 − 1750) / 1800 = 2.8%. Slip increases with load.

### Reversing
Swap **any two** of the three supply leads and the rotating field reverses, so the motor
reverses. This is the basis of reversing starters and of fixing wrong rotation on start-up.

## Single-Phase Motors (Brief)
Single-phase motors need help to start because a single winding produces a pulsating, not
rotating, field. Split-phase, capacitor-start, permanent split capacitor (PSC) and
capacitor-start/capacitor-run designs use an auxiliary winding and often a capacitor. Many
HVAC fan motors are now **electronically commutated (EC)** motors with built-in electronics.

## Reading the Nameplate

| Field | Meaning and why it matters |
|---|---|
| HP (or kW) | Rated mechanical output. Used to look up full-load current in NEC tables |
| Volts | Rated voltage, e.g., 230/460 V for a dual-voltage motor |
| FLA (full-load amps) | Actual current at rated load — used to size **overload** protection |
| RPM | Speed at full load |
| SF (service factor) | Continuous overload capability, e.g., 1.15 = can carry 115% of rated HP within the temperature limits |
| Code letter | Locked-rotor kVA per horsepower — indicates starting inrush |
| Design letter | NEMA torque/current characteristics (A, B, C, D); Design B is most common |
| Insulation class / temp rise | e.g., Class F; affects overload sizing |
| Duty | Continuous or a time rating |
| Efficiency | NEMA nominal efficiency, often "Premium" |
| Frame | Mounting dimensions |
| Connection diagram | How to wire leads for each voltage |

> **Key point:** The NEC uses **table** full-load current (Tables 430.247–430.250) to size
> conductors and short-circuit/ground-fault protection, and **nameplate** FLA to size overload
> protection. Lesson 2 covers why.

## Dual-Voltage Connections

A common 9-lead wye-connected motor can run on 230 V or 460 V. Each phase has two winding
sections that are put in **series** for the higher voltage and **parallel** for the lower
voltage. A typical NEMA 9-lead wye diagram looks like this — but the **motor's own diagram
governs**, because 9-lead delta and 12-lead motors are wired differently:

| Voltage | L1 | L2 | L3 | Tie together |
|---|---|---|---|---|
| High (460 V) | 1 | 2 | 3 | 4-7, 5-8, 6-9 |
| Low (230 V) | 1, 7 | 2, 8 | 3, 9 | 4-5-6 |

Wiring a dual-voltage motor for 230 V and connecting it to 480 V overheats and destroys the
winding quickly; wiring for 460 V and connecting to 208/230 V produces low torque and
overheating under load.

## Current Draw Relationships

- **Locked-rotor (starting) current** on an across-the-line start is typically 6–8 times
  full-load current. That inrush is why motor short-circuit protection is sized well above FLC.
- Motor current rises with load and with low voltage. A motor running at 10% low voltage
  draws noticeably more current at the same load.
- Unbalanced supply voltage causes a much larger current unbalance and extra heating — covered
  in EA3-C04.

## Field Checks Before Start-Up

1. Verify the nameplate voltage and connection match the supply.
2. Verify the motor turns freely (locked out) and the driven equipment is ready.
3. Check insulation resistance if the motor has been stored or is in a damp location, per
   the employer's test procedure.
4. Bump the motor to check rotation before coupling, when possible.
5. Measure running current on all three phases and compare with nameplate FLA.

> **Safety:** Lock out and verify absence of voltage at the motor disconnect before opening a
> motor terminal box. Motors can also be energized remotely by controls, timers, or automation
> systems, and a VFD can hold stored energy after power is removed. Rotating equipment
> requires guards in place before start-up — never bump a motor with someone near the
> coupling or driven equipment.

## Key Takeaways
- Synchronous speed = 120 x f / P; actual speed is slightly less (slip).
- Swap any two leads to reverse a three-phase motor.
- Nameplate FLA sizes overloads; NEC table FLC sizes conductors and short-circuit protection.
- Dual-voltage motors: series for high voltage, parallel for low — follow the motor's diagram.
- Starting current is typically 6–8 x FLC on an across-the-line start.
- Lock out, verify, and guard rotating equipment before work or start-up.
