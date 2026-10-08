---
title: Multiwire Branch Circuits & Shared Neutrals
minutes: 35
video:
video_suggestion: >
  Training-board demonstration of a 120/208 V three-circuit MWBC with lamps of different wattages
  on each circuit. Show balanced and unbalanced neutral current with a clamp meter, then (on the
  isolated training board only, behind a barrier) open the neutral to show bulbs on one circuit
  going dim and another going dangerously bright. Finish in a real panel showing a handle-tied
  breaker and grouped conductors.
---

## What Is a Multiwire Branch Circuit?

A **multiwire branch circuit (MWBC)** consists of two or more ungrounded (hot) conductors that have a
voltage between them, plus a grounded (neutral) conductor that has equal voltage to each hot and is
**shared** by them. Lighting systems use MWBCs constantly because one neutral can serve two or three
circuits, saving wire and raceway space.

Common lighting MWBCs:

| System | MWBC | Voltages |
|---|---|---|
| 120/240 V single-phase | 2 hots + neutral | 120 V each to neutral, 240 V between hots |
| 120/208 V three-phase wye | 2 or 3 hots + neutral | 120 V to neutral, 208 V between hots |
| 277/480 V three-phase wye | 2 or 3 hots + neutral | 277 V to neutral, 480 V between hots |

## How the Shared Neutral Works

When the hots are on **different phases**, their currents partially cancel in the neutral:

- **120/240 V, two circuits:** neutral current = difference of the two hot currents. 10 A and 7 A
  → 3 A on the neutral.
- **Three-phase, three circuits, linear loads:** neutral current is the vector sum; perfectly
  balanced linear loads → near 0 A.
- **Three-phase with LED drivers:** triplen harmonics add in the neutral (lesson 1) – the neutral may
  carry significant current even when balanced.

## The Same-Phase Fault

If two hots of an MWBC are mistakenly landed on breakers connected to the **same phase**, the neutral
carries the **sum** of their currents. Two 16 A circuits on the same phase put 32 A on a 12 AWG
neutral protected by nothing – the breakers protect only the hots. This is a serious fire hazard and
is common after panel work, breaker replacement or retrofits.

**Field test:** with the circuits energized, measure voltage **between** the hots of the MWBC. You
should read line-to-line voltage (240, 208 or 480 V). **Near 0 V means they are on the same
phase.** Confirm by clamping the neutral – it will read about the sum of the hot currents.

## The Open-Neutral Fault

If a shared neutral opens (loose wire nut, burned terminal, someone disconnects it), the loads on the
different circuits end up **in series across the line-to-line voltage**. Voltage divides according
to load impedance:

- The circuit with the **lighter** load (higher impedance) gets **more** than its rated voltage –
  sometimes approaching the full line-to-line voltage (208, 240 or 480 V).
- The circuit with the heavier load gets less.

Symptoms: some lights very bright or failing, others dim or off; drivers and electronics damaged on
one circuit; flickering that changes as other loads switch. **The open neutral conductor downstream of
the break can be at a dangerous voltage** even though the "neutral" is supposed to be near ground.

## NEC Rules for MWBCs

| Rule | Requirement (2023 NEC; AHJ-adopted edition governs) |
|---|---|
| **210.4(B)** Disconnecting means | Each MWBC must have a means to **simultaneously disconnect all ungrounded conductors** at the point where the branch circuit originates – e.g., a 2- or 3-pole breaker or single-pole breakers with identified handle ties |
| **210.4(D)** Grouping | The ungrounded and grounded conductors of each MWBC must be grouped (e.g., cable ties) in the panel or enclosure where it originates, unless the grouping is obvious (such as in a cable) |
| **300.13(B)** Device removal | On an MWBC, the continuity of the neutral must not depend on device terminations – **neutrals must be spliced/pigtailed** so removing a device does not open the neutral to other circuits |
| **410.130(G)** Luminaire disconnects | Disconnecting means for ballasted luminaires on MWBCs must simultaneously break all supply conductors, including the grounded conductor |

## Safe Troubleshooting Procedure (Skill LT4-S04)

1. **Identify the whole MWBC.** Trace which hots share the neutral. Check the panel schedule, look for
   handle ties and grouped conductors, and confirm in the field. Do not assume a neutral is "only on
   this circuit."
2. **Risk assessment and PPE** for energized measurements.
3. **Measure** line-to-line voltage between the hots (phase check) and current on each hot and on the
   neutral. Record readings.
4. **De-energize all circuits of the MWBC** – the common-trip breaker or every handle-tied breaker.
   Apply your lock and tag to each.
5. **Verify absence of voltage** on every conductor, **including the neutral**, live-dead-live.
6. Repair: tighten or remake neutral splices, pigtail neutrals at devices, correct breaker phase
   placement, add handle ties or a multi-pole breaker, group conductors.
7. Remove locks per procedure, re-energize and **verify voltage at loads on every circuit** of the MWBC,
   then re-check neutral current.

> **Safety:** Never open, disconnect or cut a shared neutral while any circuit on the MWBC is
> energized. The neutral may be carrying the unbalanced current of the other circuits; opening it
> places you in series with the load at up to full circuit voltage and can apply line-to-line
> voltage to connected equipment. Turning off "your" breaker is not enough – lock out every circuit
> that shares the neutral and verify the neutral is dead.

## Key Takeaways
- An MWBC shares one neutral among two or three hots on different phases.
- Hots on the same phase overload the neutral with the sum of their currents – check with a line-to-line voltage test.
- An open shared neutral puts loads in series across line-to-line voltage, damaging equipment and creating shock hazards.
- NEC 210.4 requires simultaneous disconnection and conductor grouping; 300.13(B) requires pigtailed neutrals.
- Lock out every circuit of the MWBC and verify the neutral is dead before working on it.
