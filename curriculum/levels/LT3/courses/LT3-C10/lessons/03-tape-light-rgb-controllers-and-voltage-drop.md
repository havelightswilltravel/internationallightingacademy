---
title: Tape Light, RGB Controllers & Voltage Drop
minutes: 30
video:
video_suggestion: >
  A technician installs a run of 24 V LED tape in a cove, showing cut marks, a center feed to
  limit voltage drop, and voltage readings at the feed point and at the far end. A second segment
  shows an RGBW tape run with a controller and amplifier, with the tech identifying the common
  wire and each color channel.
---

## Tape (Strip) Light
**LED tape** is a flexible circuit board with LEDs and resistors spaced along it, sold on reels
and cut to length. It is used in signs, coves, display cases, under-cabinet lighting and LED neon.

Key features:

- **Constant voltage**, usually 12 V or 24 V DC; some high-voltage tape exists but is a different
  product with different rules.
- **Cut points** marked along the tape (a scissor icon or copper pads) — cut only there.
- **Watts per foot (or meter)** — used to size the power supply.
- **Maximum run length** from one feed point — beyond this the far end gets dim or color-shifted.
- Indoor (bare) and outdoor (silicone-jacketed, IP65–IP68) versions.

## Cove and Linear Lighting
- **Cove lighting** hides tape or linear fixtures in a ledge so light washes the ceiling. Failures:
  heat (tape in a closed channel with no aluminum heat sink), adhesive failure, and connectors
  pulled loose during cleaning.
- **Linear fixtures** are rigid aluminum channels with tape or boards inside, often with diffusers,
  linked end to end. Each link is a connection that can fail.

## RGB, RGBW and Controllers
Color-changing LED systems add a **controller**:

| System | Wires | How it works |
|---|---|---|
| Single color | 2 (+ and −) | Power supply feeds the tape directly |
| RGB | 4 (common + R, G, B) | Controller switches each color channel to mix colors |
| RGBW / RGBWW | 5–6 | Adds a white (or warm-white and cool-white) channel |
| Addressable (pixel) | Power, ground, data (sometimes clock) | Each pixel controlled individually by a data signal |

Most RGB tape uses a **common positive (anode)** wire; the controller switches the negative side
of each color. Control can come from a wall keypad, remote, 0–10 V, DMX or a wireless app.

**Amplifiers (repeaters)** boost the control signal and add power for long runs.

Common RGB faults:

| Symptom | Likely cause |
|---|---|
| One color missing along the whole run | Bad controller channel or connection at the start of the run |
| One color missing after a certain point | Broken trace or bad connection at that point |
| Colors wrong (red shows as green) | Channel wires swapped at a connector |
| Nothing lights | No power, controller off or unpaired, bad common connection |
| Addressable pixels go wild past a point | Damaged pixel or data connection at that point |

## Voltage Drop
Low-voltage DC wiring is very sensitive to voltage drop. Losing 2 volts on a 12 V system is
over 16 % of the supply — enough to dim the far end, shift colors (whites look pinkish or
yellowish), or make modules flicker.

Causes:
- Long runs of modules or tape from a **single feed point**.
- Feed wire too small for the current and distance.
- Corroded or high-resistance connections (adds drop at that point).

Fixes:
1. **Feed long runs from the center or from both ends**, or in several shorter segments, each
   within the manufacturer's maximum run length.
2. Use **larger feed wire** (lower AWG number) for long home runs from the supply.
3. Choose **24 V** products for long runs — the same wattage draws half the current, so drop is
   much lower.
4. Mount the power supply closer to the load where the enclosure and code allow.

**Measuring:** with the system running, compare voltage at the power supply output with voltage
at the farthest module. The difference is the voltage drop. Follow the module manufacturer's
minimum voltage spec; as a field guide, a drop of more than about 5–10 % is usually visible.

> **Safety:** Measuring low-voltage DC output with the system running is a low-hazard Class 2
> measurement, but keep probes away from any line-voltage terminals in the same enclosure. Lock out
> the sign disconnect and verify absence of voltage before cutting tape, adding feeds or moving
> wiring.

## Sizing a Power Supply for Tape or Modules
1. Total load = watts per foot × feet (or watts per module × number of modules).
2. Size the supply so the load is **no more than about 80 %** of its rating (for example, a
   60 W load needs at least a 75 W supply — choose 80 W or 100 W).
3. Respect the Class 2 limit per output; split large loads across multiple supplies or outputs.
4. Match output voltage (12 V vs 24 V) to the product exactly.

## Key Takeaways
- Tape light is constant voltage; cut only at marked points and respect maximum run lengths.
- RGB/RGBW systems add a controller and channels; most use a common positive wire.
- Voltage drop dims and color-shifts the far end; feed from the center or both ends, use larger
  wire or 24 V.
- Size supplies so the load is about 80 % of the rating, within Class 2 limits.
