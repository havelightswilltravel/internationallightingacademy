---
title: LED Driver Failure and Replacement Matching
category: led
tags: [led, driver, constant-current, constant-voltage, replacement, matching]
levels: [LT3, LT4]
last_reviewed: 2026-10-08
review_interval_months: 12
---

> **DRAFT - pending SME review.**

## Symptoms

- Fixture dead with good input voltage (see *LED Fixture Will Not Turn On*)
- Fixture flickers, cycles on/off, or turns on then shuts off after warming up
- Light output dimmer than identical fixtures, or will not dim / will not reach full
- Driver case discolored, swollen, smells burnt, or is too hot to touch

## Safety first

- **Default to de-energized work.** LOTO the branch circuit, verify absence of voltage
  at the fixture, and disconnect any emergency battery before removing a driver.
- Measuring driver input/output under power is energized work: **qualified persons only**,
  with risk assessment, appropriate PPE and an energized-work justification per NFPA 70E.
- Constant-current drivers can produce a high open-circuit voltage when no LED load is
  connected. Do not run a driver with the load disconnected unless the manufacturer's
  test procedure says to, and never connect/disconnect the LED load while energized
  (hot-plugging can damage the LEDs).
- Replacing a driver with a non-identical part can affect the fixture's listing. Use the
  fixture manufacturer's replacement part or a driver the manufacturer approves.

## Tools needed

- CAT III multimeter (AC/DC volts, DC mA if used per manufacturer instructions), clamp meter
- Camera (photograph labels and wiring before removal)
- Fixture spec sheet, driver data sheet, manufacturer's replacement part list
- Insulated hand tools, approved connectors, wire labels

## Likely causes

Why drivers fail (find the cause, or the new driver will fail too):

| Cause | How to confirm | Fix |
|---|---|---|
| End of life / heat (most common) | Driver hot, fixture in insulation or high ambient; driver past rated life; case temp above its Tc rating | Replace; correct the thermal problem; confirm fixture is rated for the environment |
| Voltage surge (lightning, switching) | Multiple failures after a storm; exterior or long circuits; failed surge protector | Replace driver; add/replace surge protection per manufacturer; escalate if recurring |
| Wrong driver previously installed (current/voltage mismatch) | Label data does not match the LED module or original spec | Install correct matched driver |
| Over/under voltage supply | Measured input outside label range | Correct supply; see voltage drop / open neutral guides |
| Water intrusion | Corrosion, water in fixture, failed gasket | Replace driver and repair the fixture seal, or replace the fixture |
| LED module failure loading the driver incorrectly | New driver also fails to light the module or shuts down | Replace module per manufacturer |

## Step-by-step diagnosis

1. Confirm the driver is the problem: good input voltage, dim leads tested open
   (separated and capped), and no or abnormal output (see *LED Fixture Will Not Turn On*).
2. **De-energize, LOTO, verify absence of voltage.** Photograph the driver label and the
   wiring, then record the following **matching checklist**:

   | Spec | What to match |
   |---|---|
   | Output type | Constant current (CC) or constant voltage (CV) - never substitute one for the other |
   | Output current (CC) | Same mA as the original, or the programmed value the manufacturer specifies |
   | Output voltage range (CC) / voltage (CV) | LED module's forward voltage must fall inside the range; CV must equal the strip/module voltage (e.g. 24 V) |
   | Output power | Equal to or greater than the load, within the driver's rating |
   | Input voltage | e.g. 120-277 V universal, or 347/480 V - must match the circuit |
   | Dimming | Same protocol (0-10V, phase-cut, DALI, etc.), dimming range and curve |
   | Class 2 / non-Class 2 | Match - affects wiring methods and listing |
   | Physical | Size, mounting, lead lengths/connectors, remote-mount limits |
   | Thermal | Case temperature (Tc) rating suitable for the fixture |
   | Extras | Auxiliary power for sensors, emergency compatibility, NTC/thermal foldback |

3. Obtain the manufacturer's replacement or an approved equivalent. Programmable drivers
   must be set to the correct output current per the manufacturer's procedure **before**
   connecting the LEDs.
4. Install the driver, matching polarity on DC output leads (+ to +, - to -). Reversed
   polarity typically results in no light; it can damage some modules.
5. Make sure dim leads, sensor auxiliary leads and unused leads are connected or capped per the diagram.
6. Restore power. **(Qualified, energized, with PPE)** Verify output: DC voltage across
   the LED load within the driver's range and stable; light output matches neighboring fixtures.
7. Test dimming across the full range, and test the sensor/emergency function if present.
8. If the old driver failed from heat, surge or water, correct or report that cause.

## When to escalate

- No approved replacement is available, or the only option is a "universal" driver of
  uncertain compatibility
- Several drivers on the same circuit or site have failed (possible surge, voltage or
  neutral problem)
- Fixture is under warranty, networked, or part of an emergency lighting system
- Driver failure caused damage to building wiring

## Documentation

- Fixture location, fixture catalog number, old and new driver model and settings (mA)
- Measured input voltage and output voltage after replacement
- Suspected cause of failure (heat, surge, water, mismatch, end of life)
- Whether replacement was manufacturer-supplied/approved
- Functional tests performed (dimming, sensor, emergency)
