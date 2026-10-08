---
title: How LEDs Work & Why Heat Matters
minutes: 30
video:
video_suggestion: >
  A technician opens a failed LED high-bay on the bench and points out the LED board, thermal
  interface material, heat sink fins and driver. A thermal camera (or IR thermometer) shows
  the temperature difference between a clean heat sink and one packed with dust, and the tech
  explains how heat shortens LED and driver life.
---

## From LT1 to LT3: What Changes
In LT1 you learned that an LED is a light source with a driver instead of a ballast, and in LT2
you installed TLEDs and retrofit kits. At LT3 you are expected to understand *why* LED systems
behave the way they do, so you can choose the right replacement parts and diagnose failures
instead of just swapping fixtures.

## The LED Chip in Plain Language
An LED (light-emitting diode) is a semiconductor. When current flows through it in the forward
direction, electrons cross a junction and give off energy as light. Key points for the field:

- **LEDs run on DC.** The driver converts building AC (120–277V, sometimes 347 or 480V) to DC.
- **LEDs are current devices.** Light output follows current. A small increase in voltage
  causes a large increase in current, so LEDs need a driver that controls current (or a
  constant-voltage driver feeding modules that have their own current control built in).
- **Forward voltage (Vf).** Each LED needs roughly 2.7–3.3V DC to conduct. Manufacturers put
  many LEDs in series and parallel on a board, so a module might need, for example, 36V at
  700 mA. That number matters when you choose a driver.
- **Polarity matters.** Reverse the + and − output leads on an LED board and it will not light.
  (Repeated reverse connection or miswiring can damage some modules.)
- **White light is made with phosphor.** Most white LEDs are blue chips coated with phosphor.
  Overheating degrades the phosphor and causes color shift — the "this fixture looks green/pink
  compared to the others" complaint.

## Where the Heat Goes
LEDs are efficient, but a large share of the input power still turns into heat. Unlike an
incandescent lamp, an LED does not throw most of that heat away as infrared light — it must be
*conducted* away from the chip through the back of the board.

The heat path looks like this:

| Step | Part | What can go wrong |
|---|---|---|
| 1 | LED junction (inside the chip) | Too hot = faster lumen loss, color shift |
| 2 | Circuit board (usually metal-core) | Loose screws leave air gaps |
| 3 | Thermal interface material (pad or paste) | Missing, dried out, or reused pad |
| 4 | Heat sink / housing | Dust, insulation, paint, debris block airflow |
| 5 | Surrounding air | High ambient (near ceilings, ovens, attics) |

The temperature at the LED junction (**Tj**) is the number that controls life. You cannot
measure it in the field, but manufacturers give a **Tc** (case temperature) test point on
drivers and sometimes on LED modules, and a rated **ambient temperature range** for the
luminaire. If a fixture is installed outside its rated ambient range, expect early failure.

## Field Situations That Cook LEDs
- **Fixtures buried in insulation.** Recessed fixtures must be IC-rated (insulation contact)
  if insulation will touch them. A non-IC fixture covered in insulation overheats.
- **Enclosed fixtures not rated for enclosure.** Some LED lamps (screw-in and TLED) are marked
  "not for use in totally enclosed fixtures." Installing them in a sealed vapor-tight or globe
  shortens life dramatically.
- **High-ambient locations.** High-bays near the roof deck of a hot warehouse, kitchen hoods,
  boiler rooms. Check the rated ambient (for example, −30°C to +50°C) on the spec sheet.
- **Dirty heat sinks.** Industrial high-bays and parking garage fixtures collect dust and
  grime. Cleaning is part of maintenance.
- **Retrofit boards installed without thermal contact.** When you install an LED retrofit kit,
  boards must be screwed or magnetically mounted flat to the metal as the instructions say,
  using any supplied thermal pad.

## Thermal Foldback
Many quality drivers and luminaires include **thermal foldback** (thermal protection). When
the internal temperature gets too high, the driver reduces current to protect the LEDs. The
customer sees fixtures that slowly dim on hot afternoons, or that dim and then recover.
Cheaper products may instead shut off completely and then restart as they cool — this shows
up as a fixture that **cycles on and off** every few minutes. Before you condemn a driver,
ask: is this fixture overheating?

> **Safety:** Before touching the inside of any luminaire, apply LOTO and verify absence of
> voltage at the fixture with a tested meter (live-dead-live), as covered in LT1-C06. Heat
> sinks and drivers on fixtures that just shut off can be hot enough to burn — let them cool or
> wear gloves.

## Simple Thermal Checks You Can Do
1. Compare the fixture's rated ambient temperature to the actual space conditions.
2. Look for insulation, debris, or added enclosures around the fixture.
3. Check that LED boards are tight to the housing and thermal pads are in place.
4. With an IR thermometer, compare the problem fixture's housing temperature to an identical
   fixture that works. A big difference is a clue.
5. Note whether the symptom gets worse in the afternoon or in summer.

## Key Takeaways
- LEDs are DC, current-driven semiconductors; the driver controls current and therefore
  light output.
- Forward voltage and current ratings of the LED module determine which driver will work.
- Heat must be conducted away through the board, thermal interface and heat sink — any gap or
  blockage shortens life.
- Overheating causes lumen loss, color shift, thermal foldback (dimming) or cycling.
- Always check installation conditions (IC rating, enclosure rating, ambient temperature)
  before blaming the product.
