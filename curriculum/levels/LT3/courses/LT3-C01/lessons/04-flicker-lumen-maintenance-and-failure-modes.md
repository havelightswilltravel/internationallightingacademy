---
title: Flicker, Lumen Maintenance (L70) & LED Failure Modes
minutes: 30
video:
video_suggestion: >
  Using a smartphone camera in slow-motion mode, the trainer shows the visible banding from a
  flickering LED fixture compared with a low-flicker fixture. Then the trainer walks through a
  spec sheet, circling L70 hours, LM-80/TM-21 notes, and warranty terms, and finishes with a
  table of failed parts (burned driver, cracked board, darkened LEDs).
---

## Flicker
All light from AC-powered sources varies somewhat with the line frequency. Incandescent lamps
hide it because the filament stays hot. LEDs respond almost instantly to current changes, so if
the driver lets ripple through, the light flickers at twice the line frequency (120 Hz in North
America) or at other frequencies when dimmed.

**Why customers care:** Visible flicker is annoying; even flicker people cannot consciously see
can cause headaches and eyestrain for some occupants and produces a strobe effect on moving
machinery or in video. Complaints often come from offices, classrooms, healthcare and
broadcast/video spaces.

**How flicker is described:**

| Term | Meaning |
|---|---|
| Percent flicker (modulation) | How deep the light swings, from 0% (steady) to 100% (fully off each cycle) |
| Flicker index | Accounts for the shape of the waveform; 0 is best |
| Frequency | How fast; lower frequencies are more noticeable |

IEEE 1789 is a recommended practice that gives guidance on low-risk flicker levels. Quality
spec sheets list flicker performance; DLC technical requirements include flicker reporting for
some product categories.

**Field causes of flicker:**
1. Low-quality or failing driver (dried-out output capacitors increase ripple).
2. Dimmer incompatibility — phase dimmers with LED drivers not designed for them (covered in
   LT3-C02).
3. Dimming near the bottom of the range ("low-end" flicker).
4. Loose connections — intermittent contact causes random flashing, not steady flicker, and can
   overheat connectors.
5. Voltage fluctuations caused by large loads cycling on the same circuit.
6. Thermal cycling — shutdown and restart as the fixture overheats.

**Quick field check:** Point a phone camera in slow-motion video at the light source. Dark bands
rolling across the screen suggest significant flicker. This is not a measurement, only a clue —
compare to a fixture known to be good.

## Lumen Maintenance and L70
LEDs rarely "burn out" like filaments. Instead their light output slowly declines. Life ratings
for LEDs are therefore based on lumen maintenance:

- **L70** = the hours of operation until the light output drops to 70% of initial. A rating of
  "L70 > 60,000 hours" means the manufacturer projects at least 70% of the original lumens
  after 60,000 hours.
- **L80, L90** — same idea at 80% or 90%. A higher L-number at the same hours is a tougher
  standard.
- **IES LM-80** is the test method for measuring lumen maintenance of LED packages/modules.
- **IES TM-21** is the method for projecting long-term life from LM-80 data (projections are
  limited to a multiple of the test duration).
- **IES LM-79** is the test method for the electrical and photometric performance of complete
  luminaires (lumens, watts, efficacy, CCT, CRI).

Remember that the **driver** often fails before the LEDs reach L70. Driver life depends heavily
on temperature (Tc). That is why the warranty (commonly 5 or 10 years) and the operating
conditions matter as much as the L70 number.

**Practical meaning:** A 10-year-old LED fixture that still lights may be producing noticeably
less light than a new one beside it. When you replace a few fixtures in a large area, mention
to the customer that new units may look brighter or a different color.

## Common LED System Failure Modes

| Symptom | Likely causes | What to check |
|---|---|---|
| Completely dark, one fixture | Failed driver, open LED string, loose connector, failed emergency or sensor component | Input voltage, driver output, connectors |
| Completely dark, whole zone | Breaker, switch, relay, contactor, control signal | Circuit and controls first |
| Dim compared to neighbors | Wrong driver current, thermal foldback, shorted 0–10V leads, lumen depreciation | Driver setting, temperature, dimming voltage |
| Cycling on/off | Overheating, driver at end of life, driver overloaded, wrong voltage window | Ambient, heat sink, driver match |
| Flicker | Driver ripple, dimmer incompatibility, loose connection, low-end dimming | Dimmer type, connections, swap test |
| Part of board dark | Failed LED in a series string (opens the string), cracked solder, damaged board | Board inspection |
| Color shift (green/pink/blue tint) | Phosphor degradation from heat, mixed production batches | Thermal conditions, replace as matched set |
| Failure after storms | Surge damage | Surge protection (many exterior drivers include a surge protective device that can sacrifice itself) |
| Water/corrosion | Seal failure, wrong rating for location | Gaskets, wet/damp rating |

**Surge damage** is a leading cause of exterior and high-bay LED failures. Many exterior
luminaires have a separate replaceable **surge protective device (SPD)** module — if the SPD
has an indicator light that is out, replace it along with any failed driver.

**Early failures in a batch** (many fixtures failing within weeks or months) usually point to
installation conditions (voltage, heat, surges, wrong dimmer) or a product defect. Collect data
— location, symptoms, part numbers, date codes — and report to your supervisor so a warranty
claim can be made.

> **Safety:** Intermittent flashing can mean a loose, overheating connection. Treat it as a
> potential fire hazard: de-energize with LOTO, verify absence of voltage, and inspect
> connectors for discoloration or melting.

## Key Takeaways
- LEDs flicker when the driver passes ripple or when used with incompatible dimmers; slow-motion
  video is a quick clue, not a measurement.
- L70 is the projected hours until output falls to 70% of initial; LM-80 tests the LEDs, TM-21
  projects life, and LM-79 tests the whole luminaire.
- Drivers often fail before the LEDs; heat is the main enemy of both.
- Use the symptom table to separate fixture failures from circuit or control problems.
- Report batch failures with complete data for warranty claims.
