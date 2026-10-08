---
title: Atomic Theory, Charge & Resistance
minutes: 40
video:
video_suggestion: >
  Instructor uses an animated Bohr model to show valence electrons in copper versus rubber, then
  moves to the bench to measure the resistance of 50 ft and 100 ft coils of 12 AWG and 14 AWG
  copper, showing how length and size change resistance. Ends with a hot-versus-cold resistance
  measurement of an incandescent lamp filament.
---

## Why Go Back to the Atom?

In the lighting track you used Ohm's law every day. As an apprentice electrician you need to
know *why* it works, because that understanding is what lets you reason about things the
formula sheet doesn't cover: why aluminum conductors must be larger than copper, why a loose
termination gets hot, why a long run drops voltage, and why insulation fails with heat.

## The Atom and Electric Charge

Every atom has a nucleus of **protons** (positive charge) and **neutrons** (no charge),
surrounded by **electrons** (negative charge) arranged in shells. The outermost shell is the
**valence shell**, and the number of electrons in it determines how a material behaves
electrically.

| Valence electrons | Behavior | Examples |
|---|---|---|
| 1–3 | **Conductor** — valence electrons are loosely held and drift easily | Copper (1), silver (1), gold (1), aluminum (3) |
| 4 | **Semiconductor** — conducts under certain conditions | Silicon, germanium (LEDs, diodes, transistors, drivers) |
| 5–8 | **Insulator** — valence electrons are tightly held | Rubber, PVC, glass, mica, dry wood |

Copper's single valence electron is easily knocked loose, creating a "sea" of free electrons.
When a voltage is applied, those free electrons drift toward the positive terminal. Each
electron moves slowly, but the push travels through the conductor at close to the speed of
light — which is why a luminaire comes on the instant you close the switch.

### Charge, Current and the Coulomb

- One **coulomb (C)** is the charge of about 6.24 × 10¹⁸ electrons.
- One **ampere (A)** is a flow of one coulomb per second past a point.
- One **volt (V)** is the electrical pressure that moves one coulomb with one joule of energy.

**Electron flow** (negative to positive) describes what electrons actually do. **Conventional
current** (positive to negative) is the convention used on most schematics, in the NEC and in
engineering texts. Either gives the same answers as long as you are consistent. This program
uses conventional current unless stated otherwise.

## What Determines Resistance

Resistance is opposition to current. For a conductor, four factors control it:

1. **Material** — each material has a resistivity. Aluminum has roughly 1.6 times the
   resistivity of copper, which is why an aluminum conductor must be a larger size to carry the
   same current.
2. **Length** — resistance increases in direct proportion to length. Double the length, double
   the resistance.
3. **Cross-sectional area** — resistance decreases as area increases. Conductor area is measured
   in **circular mils (cmil)**; one circular mil is the area of a circle 0.001 in in diameter.
4. **Temperature** — for metals such as copper and aluminum, resistance rises as temperature
   rises (positive temperature coefficient).

The relationship is:

**R = (K × L) ÷ A**

where K is the resistivity in ohm-circular mils per foot, L is length in feet and A is area in
circular mils.

### Worked Example — Resistance of a Conductor

Find the resistance of 250 ft of 12 AWG solid copper. NEC Chapter 9, Table 8 lists 12 AWG as
6,530 cmil and gives a DC resistance of about 1.93 Ω per 1,000 ft for uncoated solid copper at
75 °C.

- R = 1.93 Ω × (250 ÷ 1,000) = **0.48 Ω**

Using the formula with K = 12.9 (a common value for copper at 75 °C):

- R = (12.9 × 250) ÷ 6,530 = 3,225 ÷ 6,530 = **0.49 Ω**

The two methods agree closely. You will use exactly this math for voltage-drop calculations
in Lesson 3.

### Worked Example — Copper vs. Aluminum

Same 250 ft run in 12 AWG aluminum (K ≈ 21.2): R = (21.2 × 250) ÷ 6,530 = **0.81 Ω** — about
65% higher than copper. That extra resistance means more heat and more voltage drop, which is
why the ampacity tables give aluminum lower ampacities than copper of the same size.

## Resistance in the Field

**Terminations.** A loose or oxidized connection adds resistance at one small point. With
current flowing, that point dissipates power as heat (P = I²R). A connection with only 0.1 Ω of
extra resistance carrying 20 A produces 20² × 0.1 = **40 W** of heat inside a device box — enough
to scorch insulation and start a fire. This is why NEC 110.14 requires proper terminations
and, in the 2023 edition, tightening to the manufacturer's specified torque with an
appropriate tool.

**Temperature.** An incandescent filament measured cold might read 20 Ω; at operating
temperature it may be over 10 times that. Measuring a cold load and calculating current from
it will badly overestimate the running current (but correctly hints at a large inrush).

**Insulation.** Insulators are not perfect. Heat, moisture, UV and age lower insulation
resistance until leakage current flows. Insulation-resistance testers ("meggers") apply a high
DC test voltage to measure this — you will use one under supervision in later levels.

> **Safety:** Never measure resistance on an energized circuit. An ohmmeter supplies its own
> small voltage; external voltage can damage the meter and give false readings. Apply LOTO and
> verify absence of voltage with a tested meter (live-dead-live) first, and discharge any
> capacitors.

## Conductance

**Conductance (G)** is the reciprocal of resistance, measured in siemens (S): G = 1 ÷ R. A
10 Ω resistor has a conductance of 0.1 S. Conductance is handy for parallel circuits, where
conductances simply add.

## Key Takeaways
- Conductors have 1–3 valence electrons, semiconductors 4, and insulators 5–8.
- One ampere is one coulomb (6.24 × 10¹⁸ electrons) per second.
- Resistance depends on material, length, area and temperature: R = K × L ÷ A.
- Aluminum's higher resistivity is why it must be upsized compared with copper.
- Small resistances at bad terminations make real heat (P = I²R) — torque matters.
- Always de-energize and verify before measuring resistance.
