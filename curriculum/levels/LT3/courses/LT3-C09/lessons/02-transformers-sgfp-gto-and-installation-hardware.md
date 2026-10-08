---
title: Neon Transformers, SGFP, GTO & Installation Hardware
minutes: 35
video:
video_suggestion: >
  On a de-energized, locked-out bench sign, a sign specialist compares a magnetic core-and-coil
  NST with an electronic neon power supply, points out the SGFP label and reset instructions,
  shows GTO-15 cable markings, and demonstrates correctly seating an electrode boot and a PK
  housing. The video ends at a building-mounted sign showing the sign disconnect within sight.
---

## Two Kinds of Neon Power Sources

| Type | How it works | Typical features |
|---|---|---|
| **Magnetic NST (core and coil)** | Heavy iron-core transformer with a magnetic shunt that limits current | Heavy, hums at line frequency, usually midpoint grounded, may be potted in tar or compound; newer listed units include SGFP |
| **Electronic neon power supply** | Solid-state inverter producing high-frequency high voltage | Light, quiet or high-pitched whine, built-in open-circuit and ground-fault protection, often adjustable output |

Both produce lethal secondary voltage. Electronic supplies also contain capacitors on the input
side that can hold a charge after power is removed.

## Secondary Ground-Fault Protection (SGFP)
A **secondary ground fault** is high-voltage current leaking from the secondary circuit to
ground — through a cracked boot to a metal letter can, through burned GTO insulation to a
raceway, or through water. These faults are a leading cause of neon sign fires. For that reason
the NEC requires secondary ground-fault protection on most neon transformers and electronic
power supplies, and listed units built for that requirement carry an SGFP marking.

What SGFP does in the field:

1. It senses current flowing from the secondary to ground (or, on some designs, an unbalanced
   or abnormal output).
2. It **shuts the output off**. Many units latch off and stay off until primary power is cycled
   or a reset is performed; some retry automatically.
3. A sign with an SGFP transformer that keeps "dying" after a few seconds or minutes often has a
   real secondary fault — not a bad transformer.

### Open-circuit behavior and "bypass" or test modes — read carefully
The company procedure says to change the transformer "if it will not go into bypass mode/send
power when the secondary leads are disconnected." That step was written for some specific
transformers and **does not apply to every unit**:

- **Older, non-SGFP magnetic NSTs** produce full open-circuit voltage with nothing connected.
- **Many SGFP and electronic units sense an open secondary as a fault and will not produce
  output** (or shut down within a second) when the leads are disconnected. That is normal,
  designed behavior, not a failure.
- **Some manufacturers provide a test, diagnostic or "bypass" setting** — a switch, jumper,
  indicator light or a specific test procedure — that lets a qualified person confirm the
  transformer works. The method differs by manufacturer and model.

So the corrected rule is: **test a transformer only by the method in that manufacturer's
instructions**, using test equipment rated for it (Lesson 3). Never condemn an SGFP transformer
just because it shows no output with its leads open, and never defeat or remove SGFP to make a
sign light.

> **Safety:** Never "draw an arc" from a transformer lead with a screwdriver or pliers to see if
> it is working. That old practice exposes you to lethal voltage, damages the transformer and is
> prohibited by this program.

## GTO Cable
**GTO** cable is the single-conductor, high-voltage insulated wire used for neon secondary
wiring. It is marked with its voltage rating, commonly:

| Marking | Use on secondaries up to |
|---|---|
| GTO-5 | 5,000 V |
| GTO-10 | 10,000 V |
| GTO-15 | 15,000 V |

Rules of thumb:

- The cable's rating must be at least the transformer's open-circuit secondary voltage. When in
  doubt, use GTO-15.
- Keep secondary runs as short as practical; code and the transformer manufacturer limit
  secondary conductor length, and long runs increase capacitive leakage that can trip SGFP.
- Do not bundle GTO tightly with other conductors or run it against bare sharp metal; use
  listed supports, sleeves or raceway where required.
- **Burn-through** is GTO insulation that has broken down, usually where it touches metal or
  where water sits. It shows as a black carbon track, pinhole, or melted spot. Burned GTO is
  replaced, never taped.

## Electrode Boots, PK Housings, Supports and Tie Wire
- **Electrode boots ("booties")** slide over the electrode end and the GTO connection to
  insulate and seal it. They must fully cover the connection, fit snugly on the glass and cable,
  and be free of cracks and carbon tracking.
- **PK housings** are insulating receptacles mounted through a sign face, letter back or
  raceway. The electrode sits in the housing and connects to GTO on the other side. Cracks or
  missing gaskets let water in and allow arcing to the metal.
- **Glass standoffs (tube supports)** hold the tubing away from the mounting surface (commonly at
  least 1/4 in / 6 mm) so the glass does not touch metal or combustible material.
- **Tie wire** holds the glass to the supports. Snug, never tight — over-twisted tie wire cracks
  the glass when it expands with heat.

## Exposed vs Channel-Letter Neon, Indoor vs Outdoor

| | Exposed neon | Channel-letter neon |
|---|---|---|
| Where the glass is | Open air, visible | Inside the letter can |
| How you see it working | Direct view | Through the face, or through drain (weep) holes |
| Typical problems | Physical breakage, vandalism, weather | Water collection, blocked drain holes, boot and PK housing tracking |

Outdoor transformers must be listed for wet locations and installed in rated enclosures, with
covers, gaskets and flex connectors tight. Indoor-only transformers are never used outside.

## The Sign Disconnect (NEC Article 600)
The NEC requires each sign or outline lighting system to have a **disconnecting means** that
opens all ungrounded conductors. It is generally required to be within sight of the sign, or
capable of being locked in the open position when it is not. In the field, that disconnect is
where your lockout starts. A sign with no disconnect, a broken disconnect, or a disconnect you
cannot lock is written up for an electrician before work proceeds.

## Key Takeaways
- Magnetic NSTs and electronic supplies both make lethal secondary voltage; electronic units
  also store charge.
- SGFP shuts the output off when secondary current leaks to ground — repeated shutdown usually
  means a real fault.
- Many SGFP/electronic units will not output with leads open; test transformers only per the
  manufacturer's method.
- Use GTO rated at or above the secondary voltage; replace burned GTO, never tape it.
- Every sign needs a lockable or within-sight disconnect — your LOTO point.
