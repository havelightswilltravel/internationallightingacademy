---
title: AC vs DC & Common Building Voltages
minutes: 25
video:
video_suggestion: >
  Walk through a commercial electrical room with a qualified electrician (panels closed).
  Read the nameplates on a 120/208 V panel and a 277/480 V panel and explain what each
  voltage means. Then show fixture and ballast labels marked 120 V, 277 V, and 120–277 V
  universal, and explain what happens if a 120 V-only ballast is connected to 277 V.
---

## Direct Current (DC)

**Direct current** flows in one direction only, with a steady polarity (+ and −).

Where you find DC in lighting work:

- Batteries in emergency packs, exit signs, and cordless tools.
- Inside LED drivers: the driver converts AC to the DC that LEDs need.
- Low-voltage control signals (for example, 0–10 V dimming, covered in LT3-C02).
- Solar panels and some power-over-Ethernet lighting systems.

## Alternating Current (AC)

**Alternating current** reverses direction many times per second. In North America the utility
supplies AC at **60 hertz (Hz)**, meaning 60 complete cycles per second. (Much of the world uses
50 Hz.) AC is used for power distribution because transformers can easily raise and lower AC
voltage, allowing efficient transmission over long distances.

When we say "120 volts AC," we mean the **effective (RMS)** value, which produces the same heating
as 120 V DC. The actual peak voltage is higher, about 170 V for a 120 V circuit. Your meter
displays RMS. LT2-C01 covers AC waveforms in more depth.

| | AC | DC |
|---|---|---|
| Direction | Reverses (60 times/second in North America) | One direction |
| Typical sources | Utility, generators | Batteries, drivers, solar |
| Lighting uses | Branch circuits feeding fixtures | LED arrays, emergency batteries, control signals |
| Meter setting | V~ | V⎓ |

## Common Building Voltages

The voltages you will see on lighting jobs come from the way the utility transformer and
building electrical system are connected. At LT1, you need to **recognize** the common systems
and know which voltage a fixture is designed for. LT2-C01 explains how these systems work.

| System (nameplate) | Common in | Voltages available | Typical lighting use |
|---|---|---|---|
| **120/240 V, single-phase, 3-wire** | Homes, small shops | 120 V (hot to neutral), 240 V (hot to hot) | 120 V fixtures |
| **120/208 V, three-phase, 4-wire wye** | Offices, schools, retail, apartments | 120 V (hot to neutral), 208 V (hot to hot) | 120 V fixtures; some 208 V fixtures |
| **277/480 V, three-phase, 4-wire wye** | Larger commercial and industrial buildings, warehouses, parking lots | 277 V (hot to neutral), 480 V (hot to hot) | **277 V** fixtures (very common); 480 V for some HID and site lighting |

### How the Numbers Relate
- 240 V = 2 × 120 V (single-phase: two hots 180° apart).
- 208 V ≈ 120 V × 1.732 (three-phase).
- 480 V ≈ 277 V × 1.732 (three-phase).

The number 1.732 is the square root of 3, which comes from the three-phase geometry. You will
use it often in later levels.

> **Safety:** 277 V is not "just a little more" than 120 V. It delivers more than twice the
> voltage and correspondingly higher shock current through the same body resistance. In
> commercial buildings, assume lighting circuits may be 277 V until verified, and remember
> that a 277/480 V panel also contains 480 V between phases.

## Nominal vs. Actual Voltage

Voltage values like 120, 208, and 277 are **nominal** (named) values. Actual measured voltage
varies a few percent with load and utility supply. A reading of 116 V or 124 V on a 120 V circuit
is normal; ANSI C84.1 sets the normal service voltage range at about ±5%. Older references may use
110, 115, 220, 230, 440, or 460 V for the same systems.

## Matching Equipment to Voltage

Every ballast, driver, and fixture label lists its input voltage:

| Label marking | Meaning |
|---|---|
| 120 V | 120 V only |
| 277 V | 277 V only |
| 120–277 V (universal / "UNV") | Works on any voltage from 120 to 277 V |
| 347 V or 347–480 V | Used on higher voltage systems (347 V is common in Canada) |

Connecting a 120 V-only ballast or driver to 277 V will destroy it, often immediately and
sometimes with smoke or a pop. Connecting a 277 V-only ballast to 120 V usually means the lamps
will not start. Always **read the label and verify the circuit voltage** with your supervisor or
the panel schedule before ordering or installing parts.

## Key Takeaways
- DC flows one direction; AC reverses direction 60 times per second in North America.
- Meters read AC voltage as RMS; the peak of a 120 V circuit is about 170 V.
- Common systems: 120/240 V single-phase, 120/208 V three-phase, and 277/480 V three-phase.
- 277 V lighting is common in commercial buildings; 208 = 120 × 1.732 and 480 = 277 × 1.732.
- Always match ballast, driver, and fixture input voltage to the circuit; "UNV" means 120–277 V.
