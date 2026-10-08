---
title: HID Lamps, Ballasts, Ignitors and Capacitors
minutes: 35
video:
video_suggestion: >
  On a bench, a tech opens a de-energized 400 W pulse-start metal halide high-bay ballast
  kit and identifies the core-and-coil ballast, capacitor and ignitor, reads each label, and
  shows the multi-tap leads. Then energizes a test fixture behind a shield to show warm-up,
  turns it off and back on to demonstrate the restrike delay, timing it on screen.
---

## The HID Family

High-intensity discharge (HID) lamps make light from an arc inside a small, high-pressure arc
tube. You met the types in LT1; here is what matters for service.

| Lamp | Light color | Typical use | Notes |
|---|---|---|---|
| Metal halide (MH) — probe start | White | Older high-bays, sports, parking | Uses a starting electrode (probe); no ignitor |
| Metal halide — pulse start | White | Newer high-bays, area lights | Uses an ignitor; better lumen maintenance and faster restrike than probe start |
| Ceramic metal halide (CMH) | White, good color rendering | Retail, display | Typically pulse start or electronic ballast |
| High-pressure sodium (HPS) | Golden/orange | Roadways, parking, warehouses | Uses an ignitor; long life |
| Mercury vapor (MV) | Bluish-white | Very old installations | Manufacture/import of MV ballasts was banned under the Energy Policy Act of 2005 (effective 2008) |

All HID lamps contain mercury and are managed as universal waste (LT1-C06).

## Warm-Up and Restrike

HID lamps take minutes to reach full output and **cannot restart immediately when hot**. The
arc tube pressure must drop before the ballast's starting voltage can strike the arc again.

| Lamp | Warm-up to near full output | Hot restrike (typical) |
|---|---|---|
| Probe-start MH | about 2–5 min | about 10–20 min |
| Pulse-start MH | about 2–4 min | about 2–8 min |
| HPS | about 3–5 min | about 1 min |

Times vary by lamp and fixture — check lamp data. Customers often think a fixture is broken
after a momentary power blip; explaining restrike saves unnecessary service calls. It is also
why HID is a poor match for occupancy sensors and why life-safety lighting cannot rely on HID
alone.

## The Ballast

Like a fluorescent ballast, an HID ballast provides starting voltage and limits lamp current.
Most field units are **magnetic core-and-coil** ballasts, often sold as a kit with a capacitor
and (for pulse-start MH and HPS) an ignitor. Electronic HID ballasts also exist.

| Magnetic circuit type | Characteristics |
|---|---|
| Reactor (R) | Simplest; requires line voltage close to lamp needs; poor regulation |
| High-reactance autotransformer (HX) | Steps voltage up; moderate regulation |
| Constant-wattage autotransformer (CWA) | Most common for MH and many HPS; holds lamp watts fairly steady over about ±10% line voltage |
| Constant-wattage isolated (CWI) | Separate windings; isolates lamp from line |
| Magnetic regulator (Mag Reg) | Best regulation; heavy; used in some HPS applications |

**Match the ballast to the lamp's ANSI code** (for example "M" codes for metal halide and
"S" codes for HPS, printed on the lamp and ballast). Wattage alone is not enough. A 400 W
probe-start lamp and a 400 W pulse-start lamp use different ballasts and are **not
interchangeable**.

### Multi-tap ballasts

Many HID ballasts are **quad-tap** (120/208/240/277 V) or **five-tap** (adding 480 V). There
is a common lead and one lead per voltage.
- Connect the common lead and **only** the tap that matches the measured supply voltage.
- Insulate each unused tap **individually** with its own connector or as the ballast
  instructions specify. Never twist unused taps together — they are at different voltages.
- Connecting a 277 V supply to the 120 V tap will burn out the ballast and lamp; connecting
  120 V to the 277 V tap gives no start or very poor operation.

## The Capacitor

Most CWA-type HID ballasts use a capacitor in the lamp circuit to help regulate lamp current
and improve power factor.

- Rated in **microfarads (µF)** and **AC voltage** (for example "24 µF 400 VAC" — use the
  exact rating specified for the ballast).
- Often has a stated tolerance (commonly ±6%).
- Failure signs: bulging or split case, leaking, burnt terminals; lamp won't start, runs dim,
  or ballast runs hot.
- **Stores charge.** Many have internal bleed resistors, but they can fail.

> **Safety:** After lockout and verification, **discharge the capacitor** before handling it:
> short its terminals with an insulated-handle screwdriver or, better, through a discharge
> resistor tool, then verify 0 V across the terminals with your meter. Never assume a bleed
> resistor did its job.

## The Ignitor

Pulse-start MH and HPS lamps have no starting probe, so an **ignitor** produces short
high-voltage pulses — typically in the range of a few kilovolts (often roughly 2.5–4 kV for
HPS) — to break down the gas and start the arc. Once the lamp lights, the ignitor stops
pulsing.

- Ignitors are usually small cylindrical or rectangular modules with three leads (often
  marked for lamp, common and tap connections — follow the diagram).
- They have limits on the **distance** between the ignitor and the lamp (lead length and
  capacitance affect pulse strength). Remote-ballast installations must follow the
  manufacturer's distance limits.
- Some ignitors are "non-cycling" — they stop trying after a period if the lamp won't start,
  which reduces stress on the ballast when a lamp has failed.

> **Safety:** Ignitor pulses can destroy a multimeter and injure you. Never measure at an HID
> socket with the ignitor connected and the circuit energized. Use the manufacturer's test
> procedure (which typically requires disconnecting the ignitor) or test by substitution.

## Key Takeaways
- HID types: probe-start MH, pulse-start MH, CMH, HPS, and legacy MV; all contain mercury.
- HID lamps need minutes to warm up and cannot restrike immediately when hot.
- Match the ballast to the lamp's ANSI code, not just wattage; probe- and pulse-start parts are not interchangeable.
- On multi-tap ballasts, connect only the tap matching measured voltage and insulate each unused tap individually.
- Capacitors store charge — discharge and verify 0 V before handling.
- Ignitors produce kilovolt pulses; never meter an energized HID socket with the ignitor connected.
