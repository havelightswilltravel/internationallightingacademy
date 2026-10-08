---
title: Reading Labels & Ordering Codes
minutes: 30
video:
video_suggestion: >
  Close-up tour of real labels: a fluorescent lamp etching (F32T8/841), a T5HO lamp, an
  MH400/U lamp, an HPS lamp marked LU150/55, a fluorescent ballast label, an HID ballast
  label with an ANSI M59 marking, and an LED driver label. For each, the presenter circles
  every field on screen and translates it into plain language, then writes the matching
  order line.
---

## Why This Matters

The most common reason for a second trip to a job is the **wrong part**. A lamp that is one
letter off, a ballast with the wrong start method, or a driver with the wrong output current
means the job is not finished, the customer is unhappy, and the company pays for another
truck roll. Every system course has taught you the parts in that system. This course teaches
you how to read any label, turn it into a correct order, and get the part.

## Fluorescent Lamp Codes

Fluorescent lamp codes follow a pattern. Example: **F32T8/841**

| Piece | Meaning |
|-------|---------|
| F | Fluorescent |
| 32 | Nominal wattage (32 W) |
| T8 | Tubular, 8/8 in (1 in) diameter |
| 8 (first digit after slash) | Color rendering in the 80s (CRI 80-89) |
| 41 | Color temperature, 4100 K |

Other common examples:

- **F54T5HO** - 54 W, T5 (5/8 in diameter), **high output**. A 4 ft T5 is actually about 46 in
  long (metric length), so it is not interchangeable with a 48 in T8.
- **F32T8/835/XL/ECO** - 3500 K, plus manufacturer suffixes for extended life and low mercury.
- **F96T12/CW/HO** - 8 ft T12 high output, cool white (older naming).
- **F28T8** or **F25T8** - reduced-wattage "energy saving" T8s; they must be compatible with
  the ballast (check the ballast label).

Suffixes like XL, ECO, ALTO, SUPREME are brand names. They matter for color and life but the
core code (F32T8/841) is what has to match.

## HID Lamp Codes

| Example | Meaning |
|---------|---------|
| MH400/U | Metal halide, 400 W, Universal burning position |
| MH400/BU or /BD or /H | Base up, base down, horizontal only |
| MH400/U/PS or MS400/PS | Pulse-start metal halide (needs a pulse-start ballast) |
| LU150/55 | High-pressure sodium, 150 W, 55 V lamp |
| MS250/HOR/ED28 | 250 W, horizontal, ED28 bulb shape |

The bulb shape (ED28, ED37, BT37) and base (E39 mogul is common) also must match the
fixture.

### ANSI codes

Every HID lamp and ballast is built to an **ANSI code** that describes its electrical
characteristics. The lamp and ballast codes must match. Examples:

- **M59** - 400 W probe-start metal halide
- **S55** - 150 W, 55 V high-pressure sodium (an LU150/55 lamp)
- Pulse-start lamps use different codes (for example, M135 is commonly listed for 400 W
  pulse-start). Always confirm on the lamp and ballast labels or spec sheets.

A 400 W metal halide lamp does **not** automatically work on any 400 W ballast. A probe-start
lamp on a pulse-start ballast, or the reverse, can fail early or even rupture. Match the ANSI
code.

> **Safety:** Some metal halide lamps must be used only in enclosed fixtures because they can
> rupture at end of life. Match the lamp's "enclosed fixture only" or "open rated" marking to
> the fixture. Never substitute an enclosed-only lamp into an open fixture.

## Fluorescent Ballast Labels

A fluorescent ballast label contains:

- **Lamp type and quantity:** for example, (2) F32T8 or (1-4) F32T8
- **Start method:** IS (instant start), RS (rapid start), PS (programmed start)
- **Input voltage:** 120 V, 277 V, or 120-277 V (universal)
- **Ballast factor:** low (about 0.77), normal (about 0.88), high (about 1.18); affects light
  output and wattage
- **Case size and lead lengths**, and sometimes "remote mount" distance limits
- **Wiring diagram**
- **Class P** thermal protection and sound rating (A is quietest)
- **Manufacturer and catalog number**

## LED Driver Labels

LED drivers are the hardest parts to match because the numbers are different on every
fixture. Read and record all of these:

| Field | Example | Why it matters |
|-------|---------|----------------|
| Input voltage | 120-277 VAC, 50/60 Hz | Must match the building circuit |
| Output type | Constant current (CC) or constant voltage (CV) | CC drives LED boards; CV drives tape light and modules marked 12 V or 24 V |
| Output current (CC) | 700 mA (or programmable 350-1050 mA) | Too much current burns the LEDs; too little dims them |
| Output voltage range (CC) | 25-54 VDC | The LED board's voltage must fall inside this window |
| Output voltage (CV) | 24 VDC | Must match the module |
| Power | 40 W max | Must cover the load |
| Dimming | 0-10 V (violet/gray leads), phase (TRIAC/ELV), DALI, non-dim | Must match the control system |
| Case size / form factor | Linear, compact, can-style; length x width x height | Must fit the fixture and mounting holes |
| Class 2, ratings | Class 2 output, damp rated, Tc point | Safety and listing |

If the driver is **programmable**, the setting is often on the fixture label or the
manufacturer's spec sheet, not on the driver itself. Record the fixture's catalog number.

## Fixture Labels

The fixture's own label (often inside the housing or behind the lens) gives the
**manufacturer, catalog number, input voltage, wattage, listing, and date of manufacture.**
Catalog numbers are built from options (size, lumens, color, voltage, dimming, mounting), so
copy the complete string. Missing one segment can mean a different driver or LED board.

## Key Takeaways
- F32T8/841 means fluorescent, 32 W, 1 in diameter, CRI in the 80s, 4100 K.
- T5 lamps use metric lengths and are not interchangeable with T8s.
- HID lamp and ballast ANSI codes (such as M59 and S55) must match; probe start and pulse start are different.
- LED drivers must match input voltage, output type, current, voltage window, power, dimming and size.
- Copy complete catalog numbers from fixture labels; a missing segment can mean a different part.
