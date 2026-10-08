---
title: The Digital Multimeter in Depth
minutes: 35
video:
video_suggestion: >
  On a training board, a tech demonstrates ghost voltage on an open switch leg (reading
  ~50 V in high-impedance mode, ~0 V in LoZ mode), measures resistance of a ballast winding
  and a lamp filament, tests socket continuity on a de-energized fixture, and uses MIN/MAX to
  catch a voltage sag when a bank of fixtures is switched on.
---

## Beyond "Is It Live?"

In LT1 you used the DMM mainly to verify voltage. In LT2 you use it to **diagnose**. That
means understanding what the meter is telling you — and when it is misleading you.

## AC and DC Voltage

| Function | Use in lighting |
|---|---|
| V AC | Supply voltage, ballast output (where safe and documented), control power |
| V DC | Low-voltage control circuits (0–10 V dimming, sensor power), LED driver output, battery packs |
| mV | Very small signals; rarely used in lighting service |

**Procedure for an AC voltage measurement at a fixture:**
1. Select V AC (or auto-V). Leads in COM and V jacks.
2. Verify the meter on a known source.
3. Measure hot-to-neutral, hot-to-ground and neutral-to-ground.
4. Verify on the known source again if you were confirming absence of voltage.
5. Interpret: compare to nominal (LT2-C01).

## Ghost (Phantom) Voltage

A standard DMM has very high input impedance (typically about 10 megohms) so that it barely
loads the circuit. The downside: it can read voltage that is **capacitively coupled** from
nearby energized conductors onto a disconnected wire. You may see 10–100 V or more on a wire
that is not connected to any source — common with long runs of conductors in the same
raceway, like switch legs and travelers.

**How to tell the difference:**
- Switch to **LoZ (low-impedance) mode**, if your meter has it. The low impedance drains the
  coupled voltage and a ghost reading collapses to near zero; a real source holds up.
- Or use a two-pole solenoid-type tester, which also loads the circuit.

> **Safety:** Never dismiss an unexpected voltage reading as "probably ghost voltage" without
> proving it. Treat it as real until a LoZ measurement or a second method shows otherwise.
> Do not use LoZ mode on sensitive electronic control circuits; it can affect them.

## Resistance (Ohms)

Resistance measurements are made **only on de-energized, isolated components**. The meter
supplies its own small current; outside voltage gives false readings and can damage the
meter.

Before measuring:
1. Lock out and verify absence of voltage.
2. Isolate the component (disconnect at least one end) so parallel paths don't skew the
   reading.
3. Short the leads together and note the lead resistance (often 0.1–0.5 Ω); subtract it on
   low readings.

Useful lighting measurements:

| Item | Typical result |
|---|---|
| Fluorescent lamp cathode (pin to pin, same end) | A few ohms = good; OL (open) = broken cathode |
| HID ballast winding (magnetic) | Low ohms; OL = open winding. Compare to a known-good unit or manufacturer data |
| Conductor end to end | Near 0 Ω = continuous; OL = break |
| Hot to ground on de-energized circuit, loads disconnected | Should be OL or very high; low ohms = short to ground |

"OL" means **over limit** — resistance too high to measure, i.e., an open circuit.

## Continuity

Continuity mode beeps when resistance is below a threshold (often around 30–50 Ω). It is fast
for checking:
- Whether a socket is **shunted** (both contacts connected) or **non-shunted** — essential
  for LED retrofits (LT2-C05).
- Whether a switch opens and closes.
- Whether a fuse is good (removed from the circuit).
- Which conductor at one end matches a conductor at the other (with one end shorted to a
  known reference).

Remember the threshold: continuity "beeps" even at tens of ohms, so it cannot prove a
low-resistance connection. Use the ohms function when the value matters.

## Capacitance

Many meters measure capacitance (µF). Use it to test HID capacitors and some driver or motor
capacitors (LT2-C04).
1. Lock out, verify, and **discharge the capacitor** safely with an insulated tool or
   discharge resistor.
2. Disconnect at least one lead from the capacitor.
3. Measure and compare to the rating printed on the capacitor and its tolerance (often
   ±6% on HID capacitors).

## Diode Test

Shows the forward voltage drop of a diode or LED junction. A meter's diode test can sometimes
faintly light an individual LED or test a rectifier. Limited use in field lighting service,
but helpful for checking some LED modules and low-voltage components per manufacturer
guidance.

## MIN/MAX and Hold

- **MIN/MAX** records the lowest and highest readings over time — great for catching voltage
  sags when fixtures switch on, or intermittent drops.
- **Hold** freezes the display. Be careful: a held reading from a previous measurement can
  make a live circuit look dead. Many safety programs prohibit using Hold when verifying
  absence of voltage.

## Common Mistakes

| Mistake | Consequence |
|---|---|
| Leads left in the amps jack, meter set to volts | Meter shorts the circuit when you probe (input alert helps) |
| Measuring resistance on an energized circuit | Wrong readings, blown meter fuse or damage |
| Not isolating a component before measuring ohms | Parallel paths give false low readings |
| Using an average-responding meter on LED loads | Inaccurate readings |
| Trusting a held or ghost reading | Misdiagnosis or shock |

## Key Takeaways
- Use V AC for supply, V DC for low-voltage controls and LED driver outputs.
- High-impedance DMMs can show ghost voltage; confirm with LoZ mode or a loading tester before calling it ghost.
- Measure resistance and continuity only on locked-out, verified, isolated components.
- Continuity is quick but not precise; use ohms when the value matters.
- Discharge capacitors before testing; compare to rating and tolerance.
- MIN/MAX catches sags; avoid Hold when verifying absence of voltage.
