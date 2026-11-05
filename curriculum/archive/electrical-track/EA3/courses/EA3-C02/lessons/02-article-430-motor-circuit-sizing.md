---
title: Article 430 Motor Circuit Sizing
minutes: 55
video:
video_suggestion: >
  Instructor sizes a complete 25 hp, 460 V motor branch circuit at a whiteboard with the NEC
  open to Article 430 — conductors, inverse-time breaker, dual-element fuses, overloads and
  disconnect — then shows each component in a real motor control center bucket.
---

## The Motor Circuit Is Different

Ordinary branch circuits use one device (a breaker) to protect against overload, short circuit
and ground fault. Motor circuits split those jobs because of starting inrush. Article 430
(2023 NEC) is organized around this idea; Figure 430.1 in the code shows the parts.

| Component | Job | Sized from |
|---|---|---|
| Branch-circuit conductors | Carry running current continuously | **Table FLC** x 125% (430.22) |
| Short-circuit and ground-fault protective device (SCPD) | Clear faults; must ride through starting | **Table FLC** x Table 430.52 percentage |
| Motor overload protection | Protect motor and conductors from overload | **Nameplate FLA** (430.32) |
| Disconnecting means | Isolate motor and controller | HP rating / 115% of FLC (430.109, 430.110) |
| Controller (starter) | Start and stop | HP rating |

## Step 1 — Find the Table FLC

For general motor applications, 430.6(A)(1) requires using the full-load current values from
the NEC tables — **Table 430.248** (single-phase) and **Table 430.250** (three-phase AC) —
rather than the nameplate, to determine conductor ampacity, switch ratings and SCPD ratings.
The tables are deliberately conservative, so the circuit stays adequate if the motor is
replaced with a different make of the same horsepower. (Exceptions exist, such as motors
marked in amps only and certain multispeed or low-speed motors.)

Selected 2023 NEC Table 430.250 values (induction-type squirrel cage):

| HP | 208 V | 230 V | 460 V |
|---|---|---|---|
| 5 | 16.7 A | 15.2 A | 7.6 A |
| 10 | 30.8 A | 28 A | 14 A |
| 15 | 46.2 A | 42 A | 21 A |
| 20 | 59.4 A | 54 A | 27 A |
| 25 | 74.8 A | 68 A | 34 A |
| 30 | 88 A | 80 A | 40 A |

Always read from the code book you are tested on and the edition the AHJ enforces.

## Step 2 — Size the Branch-Circuit Conductors

**Conductor ampacity ≥ 125% of table FLC** for a single continuous-duty motor (430.22).

**Example — 25 hp, 460 V, three-phase, Design B, SF 1.15, nameplate FLA 32 A**
- Table FLC = 34 A
- 34 x 1.25 = **42.5 A minimum ampacity**
- Table 310.16, copper THWN-2: 8 AWG is 50 A in the 75 °C column. With equipment terminals
  rated 75 °C, **8 AWG Cu** works. If terminations were only rated 60 °C (110.14(C)), 8 AWG
  (40 A at 60 °C) would not be enough and you would need 6 AWG.
- Apply temperature correction and adjustment factors as you learned in EA2 when conditions
  require them.

## Step 3 — Size the Short-Circuit and Ground-Fault Protection

Table 430.52 gives maximum percentages of **table FLC**. Common values for squirrel-cage
(other than Design B energy-efficient) motors:

| Device type | Maximum % of FLC |
|---|---|
| Nontime-delay fuse | 300% |
| Dual-element (time-delay) fuse | 175% |
| Instantaneous-trip breaker (only as part of a listed combination) | 800% |
| Inverse-time breaker | 250% |

If the calculated value does not match a standard size, **430.52(C)(1) Exception No. 1**
permits the next higher standard size. If the motor still cannot start, Exception No. 2
allows higher limits (for example, an inverse-time breaker up to 400% of FLC for FLC of 100 A
or less) — used only after the normal value fails.

**Example (continued):**
- Inverse-time breaker: 34 x 2.50 = 85 A → not standard → next size up **90 A**
- Dual-element fuse: 34 x 1.75 = 59.5 A → next standard size **60 A**

Notice that a 90 A breaker on 8 AWG conductors is correct here — the overloads protect the
conductors from overload, and the breaker only has to clear faults. That is a frequent exam
question and a frequent field argument; 240.4(G) points to Article 430 for this reason.

## Step 4 — Size the Overload Protection

Separate overload devices (heaters or an electronic overload relay) are sized from the
**nameplate FLA**, per 430.32(A)(1):

| Motor marking | Maximum setting (basic rule) |
|---|---|
| Service factor 1.15 or greater | 125% of nameplate FLA |
| Marked temperature rise 40 °C or less | 125% of nameplate FLA |
| All other motors | 115% of nameplate FLA |

If the overload sized this way trips during normal starting, 430.32(C) allows the next
higher setting, up to 140% (SF ≥ 1.15 or rise ≤ 40 °C) or 130% (all others).

**Example (continued):** nameplate FLA 32 A, SF 1.15 → 32 x 1.25 = **40 A** maximum overload
setting. Many electricians set electronic overloads at or close to nameplate FLA with the SF
accounted for by the relay's trip class; follow the manufacturer's instructions and the
specification.

## Step 5 — Disconnect and Controller

- The disconnect must be **horsepower rated** (or meet the other options in 430.109) and,
  for a circuit-breaker or switch, have an ampere rating of at least 115% of table FLC
  (430.110): 34 x 1.15 = 39.1 A → a 60 A, 25 hp-rated switch is typical.
- 430.102 requires a disconnect for the controller and generally a disconnect **in sight
  from** the motor (visible and not more than 50 ft away) — with limited exceptions.

## Several Motors on One Feeder

- Feeder conductors (430.24): 125% of the **largest** motor's FLC + 100% of the other motors'
  FLC + other loads as calculated.
- Feeder SCPD (430.62): not greater than the **largest** branch-circuit SCPD rating + the sum
  of the FLCs of the other motors (no next-size-up allowance for the feeder; round down).

**Example:** 460 V feeder serving a 25 hp (34 A) and a 10 hp (14 A) motor.
- Conductors: (34 x 1.25) + 14 = 42.5 + 14 = **56.5 A**
- Feeder breaker (with a 90 A breaker on the 25 hp branch): 90 + 14 = 104 A → **100 A** maximum

> **Safety:** Never "solve" nuisance tripping by installing a larger breaker or overload than
> the calculation allows. Find the cause — low voltage, single-phasing, mechanical binding,
> wrong overload setting — with the circuit locked out and verified before you touch it.

## Key Takeaways
- Use Table 430.250 (three-phase) or 430.248 (single-phase) FLC for conductors, SCPD and disconnects.
- Use nameplate FLA for overload protection.
- Conductors: 125% of table FLC. SCPD: Table 430.52 percentage, next size up allowed.
- Overloads: 125% (SF ≥ 1.15 or rise ≤ 40 °C) or 115% (others) of nameplate FLA.
- Multiple motors: 125% of largest FLC + sum of the rest; feeder SCPD rounds down.
