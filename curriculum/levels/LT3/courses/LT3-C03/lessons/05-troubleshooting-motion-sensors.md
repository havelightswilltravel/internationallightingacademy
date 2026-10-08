---
title: Troubleshooting Wall-Switch and Ceiling Motion Sensors
minutes: 35
video:
video_suggestion: >
  Two staged faults on a training wall: a wall-switch PIR sensor that won't turn the lights on
  (missing neutral connection, then a failed sensor confirmed by no output on the switch leg),
  and a ceiling dual-tech sensor system where the tech isolates a failed power pack by measuring
  line input and the 24 VDC output at the pack, then at the sensor terminals. Show LOTO before
  each wiring change and the settings recorded on the work order.
---

## Components You Are Troubleshooting

| Component | What it does | How it fails |
|---|---|---|
| Wall-switch sensor | Sensor and relay in one device; replaces a wall switch | Electronics fail, relay fails open or welds closed, settings wrong, no neutral/ground |
| Ceiling or wall-mount low-voltage sensor | Detects motion; sends a low-voltage signal | Failed sensor, damaged lens, settings, bad low-voltage connection |
| Power pack | Transformer/power supply (often 24 VDC Class 2) plus a line-voltage relay | No low-voltage output, relay fails open or welded |
| Low-voltage wire | Carries power and signal between pack and sensor | Broken, shorted, loose terminal, wrong color landed |
| Line-voltage wire | Feeds the pack/sensor and the switch leg to fixtures | Loose splice, open neutral |
| Fixtures | The controlled load | Can be the real problem — check them too |

## The Company Procedure — Wall-Switch Sensors

### Lights work, but turn off on people or don't respond quickly
The switch works but isn't sensitive enough. **Check the settings** on the back or side of the
device (or behind the faceplate): sensitivity, time delay, mode (occupancy/vacancy), and any
light-level hold-off that keeps lights off when the room is bright. Walk-test in test mode
(Lesson 1). Also check placement — a sensor that can't see the desk will never be "sensitive
enough."

### Lights don't work at all
1. **Check for a good ground and neutral.** Many motion-sensing switches need a connection to
   power their electronics. Older devices often drew that small current through the equipment
   ground; current listed devices generally require a **neutral** and must not use the ground as
   a return path. Confirm the device's instructions, and verify both the grounding conductor and
   neutral (if required) are present and properly connected in the box.
2. **Check the incoming power.** Measure voltage **across the hot and neutral** at the device's line
   terminal (qualified person, PPE). No voltage → the problem is upstream (breaker, splice).
3. **Verify the settings** — vacancy mode needs a button press to turn on; a light-level setting
   can hold lights off in a bright room; some devices have an "off/manual" override.
4. **Test the switch leg.** With motion present (or the button pressed), measure from the load
   (switch-leg) terminal to neutral. If line voltage is good, settings are correct, and there is
   **no voltage on the switch leg**, the device is not passing power.
5. **Replace the switch** with a compatible device (voltage, load type and rating, neutral
   requirement, single-pole or 3-way).
6. If the switch leg *does* have voltage and the fixtures are still dark, the problem is between
   the switch and the fixtures or in the fixtures themselves.

## The Company Procedure — Ceiling Sensors with Power Packs

With a ceiling system, the job is to **isolate which part is bad: the power pack or the
low-voltage sensor.**

1. **Verify the power pack is receiving line power.** Measure across the pack's line hot and
   neutral leads (or at the splice feeding it). No line voltage → upstream problem.
2. **Verify the pack is sending low-voltage power to the sensor.** Measure the pack's Class 2
   output (commonly red = +24 VDC, black = common; confirm on the label) with a meter on DC volts.
3. **Receiving line power but not sending low voltage → replace the power pack.**
4. **Pack sending low voltage → measure at the sensor terminals.** Low voltage present at the
   sensor means the cable is good.
5. **Low voltage reaching the sensor but no switching → replace the sensor.** Many sensors
   have an indicator LED; no LED activity in test mode with good supply voltage supports this.
6. **Low voltage leaves the pack but doesn't reach the sensor →** the low-voltage cable or a
   connection is open or shorted — repair it.
7. **Sensor signals (LED lights on motion) but lights stay off →** check the pack relay: the
   control (blue lead on many packs) should show signal voltage; if the pack gets the signal but
   the relay doesn't switch the load, replace the pack. A pack whose lights never turn off may
   have welded relay contacts.

> **Safety:** Line-voltage measurements at sensors and power packs are energized diagnostic
> work for qualified persons with PPE under the employer's NFPA 70E program. Junction boxes and
> wall boxes often hold more than one circuit. Lock out every circuit present and verify
> absence of voltage (live-dead-live) before removing a device, re-landing wires or replacing a
> pack. The 24 VDC side is Class 2, but the pack it comes from is line voltage.

## Quick Isolation Tricks

- **Shorting the control signal:** on many packs, briefly jumpering the control lead to the
  +24 V lead (per the manufacturer's instructions, with care) makes the relay pull in. If the lights
  come on, the pack and load are good and the sensor or cable is the problem.
- **Substitution:** a known-good sensor connected at the pack with a short test lead quickly
  separates sensor from cable problems.
- **Multiple sensors on one pack:** disconnect them one at a time; a shorted sensor can hold down
  the supply for all of them.

## Parts and Ordering

Record: device brand and model, technology (PIR, ultrasonic, dual-tech), mounting (wall-box,
ceiling, corner, high-bay), voltage (120/277 V or universal), load rating for LED/electronic loads,
neutral requirement, pack output (24 VDC, mA available), number of sensors per pack, and the final
time delay and sensitivity settings so the replacement can be set the same way.

## When to Escalate
- No line voltage at the device or pack and the circuit must be traced at the panel
- Missing neutral in the box (requires pulling a new conductor — electrician)
- Sensors tied into a relay panel, BAS or networked control system (LT4-C01)
- Emergency lighting passing through the sensor relay without a UL 924 device (LT3-C04)

## Key Takeaways
- Not sensitive enough → check settings and placement before replacing anything.
- Dead wall sensor → ground/neutral, line voltage across hot and neutral, settings, then the switch leg; no output with good input → replace the switch.
- Ceiling systems: prove line in and low voltage out at the power pack, then low voltage at the sensor.
- Pack gets line power but sends no low voltage → replace the pack; sensor gets low voltage but doesn't switch → replace the sensor.
- Lock out every circuit in the box before handling wiring; record settings for the replacement.
