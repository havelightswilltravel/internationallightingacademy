---
title: HID End-of-Life, Troubleshooting and Ballast Replacement
minutes: 40
video:
video_suggestion: >
  Field video at a warehouse: an HPS high-bay cycling on and off is diagnosed as end of
  lamp life. Then, at ground level on a lowered fixture (or on a MEWP operated by an
  authorized operator), a tech locks out, discharges and tests the capacitor, replaces a
  ballast kit using the correct voltage tap, and verifies start-up. Include a short segment on
  metal halide lamp rupture risk and enclosed-fixture requirements.
---

## End-of-Life Symptoms

| Lamp | Typical end-of-life behavior |
|---|---|
| HPS | **Cycling**: lamp starts, warms up, goes out, cools, restrikes, repeats. As the lamp ages its operating voltage rises until the ballast can no longer sustain the arc |
| MH | Gradual lumen loss and **color shift** (pink, green, or blue tint), varying color from lamp to lamp, slow or failed starting |
| MH (risk) | Rare **non-passive failure** — the arc tube can rupture and throw hot glass/quartz fragments |
| All HID | Blackened or deformed arc tube, swollen or discolored outer bulb, loose base |

### Metal halide rupture risk

Metal halide lamps operating near or past rated life have a small risk of arc-tube rupture.
Precautions you will see in the field and in manufacturer literature:
- Lamps are designated for **open** fixtures (often marked "O") or **enclosed fixtures only**
  (often "E"). An "E"-rated lamp must be in a fixture with a suitable lens or containment.
- The NEC (Article 410) requires metal halide luminaires to have a containment barrier or to
  accept only lamps suitable for open fixtures, with limited exceptions.
- Manufacturers commonly recommend that probe-start MH lamps operated continuously (24/7) be
  turned off for at least 15 minutes once a week, and that lamps be group-replaced before or
  at rated life.
- **Never** install an "E" lamp in an open fixture, and replace damaged or missing lenses.

> **Safety:** When working on or under an operating HID fixture, wear safety glasses. Never
> look directly at an operating HID lamp with a damaged outer bulb — some types emit harmful
> UV when the outer bulb is broken. Turn it off and replace it.

## Troubleshooting a Dark HID Fixture

HID fixtures are often mounted high. Plan access first: ladder (LT1-C02) or MEWP operated by
an authorized operator (LT3-C06). Lowering fixtures with built-in hoists is ideal where
available.

| Step | Action | What it tells you |
|---|---|---|
| 1 | Verify complaint; wait out restrike time | Rule out a normal restrike delay after a power blip |
| 2 | Check neighbors, controls (photocell, contactor, time clock) | All dark → circuit or control problem |
| 3 | Substitute a known-good lamp of the correct ANSI code | Most common fix |
| 4 | Measure supply voltage at ballast input (energized, PPE) | No voltage → upstream; correct voltage → in the fixture |
| 5 | Lock out and verify; discharge capacitor | Safe to work inside |
| 6 | Inspect socket, wiring, capacitor, ignitor | Burnt sockets, scorched leads, bulged capacitor |
| 7 | Test capacitor with DMM capacitance function | Out of tolerance → replace |
| 8 | Check ballast windings for continuity (de-energized) | Open winding → replace ballast |
| 9 | Substitute ignitor if lamp, capacitor, ballast check good | Ignitor failure is common on HPS and pulse-start MH |
| 10 | Repair, restore power, observe full start and warm-up | Verify the fix |

**Tip:** A fixture that starts but goes out after a few minutes, then restarts, is classic
HPS end of life — but it can also be a failing capacitor, wrong lamp, or low supply voltage.
A known-good lamp settles it.

## HID Ballast Kit Replacement Procedure

This is skill LT2-S04.

1. **Confirm the replacement.** Match the lamp's ANSI code and wattage, the ballast circuit
   type if specified, and the supply voltage. Read the kit's wiring diagram before starting.
2. **Access safely** (ladder or MEWP per training).
3. **Lock out and verify.** Lock out the circuit. Verify absence of voltage at the fixture on
   all conductors with a tested meter (live-dead-live).
4. **Discharge the capacitor** with an insulated tool or discharge resistor and verify 0 V
   across its terminals.
5. **Photograph and label** existing connections. Note which tap is in use and confirm it
   matches the measured supply voltage from your troubleshooting.
6. **Remove** the old ballast, capacitor and ignitor. Old core-and-coil ballasts are heavy —
   support them as you remove the last fastener.
7. **Mount** the new components securely in the ballast housing. Maintain spacing so wires
   don't rest on the hot ballast core.
8. **Wire per the diagram:** supply hot to the correct voltage tap, neutral to common,
   capacitor and ignitor leads as shown, lamp leads to the socket. Insulate each unused tap
   individually. Use connectors rated for the temperature (many HID fixtures require 90°C or
   higher rated connectors and wire in the ballast compartment). Ground the ballast and
   fixture.
9. **Install the correct lamp** — never touch the outer bulb of a quartz lamp with bare
   fingers where the manufacturer warns against it, and replace lenses/containment.
10. **Restore power** and observe: the lamp should strike and warm up normally within the
    warm-up time. Explain restrike delay to the customer if they cycle the switch.
11. **Document** components replaced, voltage tap used, and capacitor reading of the old unit.
12. **Dispose** of the lamp as universal waste; recycle ballast per company policy.

## When to Recommend LED Instead

A failed HID ballast kit plus lamp is often a significant fraction of the cost of an LED
replacement or retrofit, which also eliminates restrike delay, reduces energy use and
supports controls. Many utilities offer incentives for DLC-qualified LED products. Mention
the option to your lead and the customer — that's part of good service (LT2-C05 and
LT5-C01).

## Key Takeaways
- HPS end of life = cycling; MH end of life = lumen loss, color shift, and a small rupture risk.
- Use MH lamps only in fixtures suitable for their "O" or "E" rating; maintain lenses and containment.
- Wait out restrike, check neighbors and controls, then substitute a known-good lamp before deeper testing.
- Lock out, verify, discharge the capacitor and verify 0 V before handling HID components.
- Match the ballast kit to the lamp ANSI code and supply voltage; insulate unused taps individually.
- Verify full start and warm-up, document the repair, and consider recommending LED.
