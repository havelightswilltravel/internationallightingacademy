---
title: Constant-Current vs Constant-Voltage Drivers
minutes: 30
video:
video_suggestion: >
  On a bench with a sample constant-current driver and a 24V constant-voltage tape-light
  driver, the trainer reads each label aloud, points out the output ratings and lead colors,
  and shows (with a meter, de-energized wiring changes only) what each driver is designed to
  power. Close-up shots of the labels are paused on screen.
---

## Two Families of LED Drivers
Every LED driver changes AC line power into regulated DC. The difference is *what* it
regulates.

| | Constant-current (CC) driver | Constant-voltage (CV) driver |
|---|---|---|
| Regulates | Output **current** (mA) | Output **voltage** (V) |
| Label example | 700 mA, 25–54 VDC, 38 W max | 24 VDC, 96 W max |
| Output voltage | Floats within a range to hold the set current | Fixed |
| Typical loads | LED boards in troffers, downlights, high-bays, area lights | Tape/strip light, cove light, sign modules, some undercabinet |
| Current control | In the driver | Built into the LED module/tape (resistors or ICs) |
| Wiring loads | Usually **series** (one string per output) | **Parallel** — all loads across the same 12/24V |
| Common mistake | Driver current too high = burned LEDs; too low = dim | Overloading watts; long runs = voltage drop at the end |

## Constant-Current Drivers in Detail
A CC driver pushes a set current, for example 1050 mA, and its output voltage rises or falls
to whatever the LED string needs — **as long as that voltage is inside the driver's output
range.**

Read a CC label like this example:

- **Output current: 700 mA** — the current the LEDs will get.
- **Output voltage: 25–54 VDC** — the range of LED forward voltage the driver can support.
- **Max output power: 38 W** — current × maximum voltage (0.7 A × 54V ≈ 38 W).

If the LED board needs 700 mA at 36V, this driver works: 36V is inside 25–54V. If the board
needs 700 mA at 60V, the driver cannot reach that voltage and the board will not light
properly (or at all). If the board needs 350 mA, this driver will overdrive it — it may be
very bright for a while, then fail early.

**Programmable and selectable drivers.** Many modern CC drivers let you set the output current
with DIP switches, a resistor plug, a wire jumper, or a programming tool (often NFC — a phone or
programmer held against the driver). These are great for stocking fewer parts, but **you must
set them correctly before energizing** — the default out of the box may not match your module.

**Series vs parallel on CC outputs.** On a CC driver, LED boards are normally connected in
**series** so the same current flows through each. If you connect two boards in parallel on a
CC output, current divides unevenly and one board can be overdriven. Follow the luminaire
wiring diagram exactly.

**Open-circuit behavior.** A CC driver with nothing connected (or an open LED string) will
raise its output toward a maximum open-circuit voltage. On many drivers this is still within
Class 2 limits, but treat it as live.

## Constant-Voltage Drivers in Detail
A CV driver works like a regulated power supply: it holds 12V or 24V (sometimes 48V) DC, and
each load draws whatever current it needs. LED tape and modules designed for CV have current
control built in.

Sizing rules of thumb:

1. Add the watts of everything connected (tape is rated in watts per foot or per meter).
2. Do not load the driver beyond about **80% of its rated wattage** unless the manufacturer
   says otherwise — this leaves headroom and keeps it cooler. (Example: 60 ft × 1.5 W/ft = 90 W
   of tape; choose a driver of at least 90 ÷ 0.8 ≈ 113 W, so a 120 W or larger unit.)
3. Watch **voltage drop** on long low-voltage runs. The far end of a long 12V tape run will be
   visibly dimmer. Feed long runs from the middle or both ends, use 24V instead of 12V, or use
   larger wire, per the manufacturer's maximum run length.
4. Match the voltage exactly: 24V tape on a 12V driver will be dim or dark; 12V tape on a 24V
   driver will be destroyed.

## Class 2 Output
Most LED drivers have a **Class 2** output (limited voltage and power, defined in UL 1310 /
UL 8750 and NEC Article 725). Class 2 output wiring has relaxed wiring-method rules, **but** it
must not share a raceway, cable or enclosure compartment with line-voltage conductors unless
separated by a barrier or as otherwise permitted by the NEC. Some high-power drivers are
**not** Class 2 — their output must be wired as line-voltage (Class 1) wiring. The driver label
tells you which.

> **Safety:** "Low voltage" does not mean "no hazard." The input side of every driver is
> line voltage, and some driver outputs exceed Class 2 limits. Apply LOTO and verify absence of
> voltage at the driver input before disconnecting or connecting any leads.

## Reading Lead Colors
Colors vary by manufacturer — always confirm on the driver label — but common conventions are:

| Lead | Typical color |
|---|---|
| Line (hot) input | Black (or brown) |
| Neutral input | White (or blue) |
| Equipment ground | Green or green/yellow |
| LED output + | Red |
| LED output − | Blue or black |
| 0–10V dimming + | Violet/purple |
| 0–10V dimming − | Gray (sometimes pink) |

## Key Takeaways
- CC drivers hold current and let voltage float within a range; CV drivers hold voltage and let
  current vary with load.
- A CC driver works only if the module's current matches and its forward voltage falls inside
  the driver's output voltage window.
- Set programmable drivers before energizing.
- Size CV drivers with headroom (about 80% load) and watch voltage drop on long runs.
- Check whether the output is Class 2 and keep Class 2 wiring separated from line voltage.
