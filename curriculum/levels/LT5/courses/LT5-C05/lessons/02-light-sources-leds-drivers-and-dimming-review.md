---
title: "Review: Light Sources, LEDs, Drivers and Dimming"
minutes: 40
video:
video_suggestion: >
  A bench review: a CALT lines up a fluorescent ballast, an HID ballast with ignitor, a
  constant-current LED driver and a constant-voltage driver, reading each label aloud and
  explaining what each value means. Then shows a Type A, Type B and Type C TLED side by side,
  and demonstrates 0-10V dimming with correct polarity and a reversed-polarity fault.
---

## Light Source Basics (LT1, LT2)
| Term | Meaning |
|---|---|
| Lumens (lm) | Total visible light output |
| Watts (W) | Electrical input power |
| Efficacy (lm/W) | Lumens per watt; higher is more efficient |
| CCT (K) | Color appearance: 2700-3000 K warm, 3500-4000 K neutral, 5000 K+ cool |
| CRI (Ra) | How accurately colors are rendered vs a reference source (0-100) |
| TM-30 (Rf, Rg) | Newer color metric: fidelity and gamut |
| Footcandle (fc) / lux | Illuminance: 1 fc = 1 lm/ft2, about 10.76 lux |

### Legacy sources still in the field
- **Fluorescent:** T12 (1.5 in diameter), T8 (1 in), T5 (5/8 in). Ballast types: instant-start
  (fast, harder on lamps with frequent switching), rapid-start, programmed-start (best for
  frequent switching such as with occupancy sensors).
- **HID:** metal halide (white light, long restrike time), high-pressure sodium (orange), mercury
  vapor (obsolete). End-of-life signs: cycling on and off (HPS), color shift, failure to start.
  Ignitors are used with pulse-start MH and HPS.

## LED Technology (LT3)
- LEDs are semiconductors driven by **DC current**. Light output is proportional to current;
  heat reduces life and output.
- **Thermal management** (heat sinks, housings, airflow) is critical. Most LED failures are
  driver or heat related, not chip failures.
- **L70** is the time until output falls to 70% of initial. LM-80 test data and TM-21
  projections support these ratings.
- **Flicker** can come from driver design, incompatible dimmers, or low-end dimming.

### Drivers
| Type | Output | Matched by | Typical use |
|---|---|---|---|
| Constant current (CC) | Fixed current (e.g., 700 mA) over a voltage range | Current, voltage range, power, dimming protocol | Troffers, high-bays, downlights |
| Constant voltage (CV) | Fixed voltage (12 or 24 V DC) | Voltage, wattage with margin | Tape light, signage modules |

**Driver replacement rules:** match output current (CC) or voltage (CV), ensure the LED load's
forward voltage falls within the driver's output range, match or exceed power, match dimming
type, match input voltage, and fit the physical space and wiring. Programmable drivers must be
set to the original current. Always LOTO and verify before replacing.

### TLEDs and retrofit kits (LT2)
| Type | How it works | Key point |
|---|---|---|
| UL Type A | Runs on existing compatible fluorescent ballast | Check ballast compatibility list; ballast remains a failure point |
| UL Type B | Line voltage direct to lamp; ballast bypassed | Fixture must be rewired and labeled; single-ended Type B requires non-shunted sockets |
| UL Type C | Remote driver powers lamps at low voltage | Driver replaces ballast |
| Dual-mode (A/B) | Works on ballast or direct wire | Label the fixture for how it is wired |

Retrofit kits are evaluated under **UL 1598C** and must be installed per the kit instructions
with the required labels.

## Dimming (LT3)
| Method | How it works | Notes |
|---|---|---|
| Forward phase (leading-edge, TRIAC) | Cuts the front of each AC half-cycle | Common wall dimmers; compatible with magnetic low-voltage transformers; check LED compatibility lists |
| Reverse phase (trailing-edge, ELV) | Cuts the back of each half-cycle | Often smoother for LED loads; electronic low-voltage transformers |
| 0-10V | Separate low-voltage control pair; driver dims as control voltage drops | Violet (+) and gray (-) are common; reversed or shorted leads typically cause full-off or minimum output; open leads typically go to full output |
| DALI | Two-wire digital bus; addressable; polarity insensitive | Up to 64 addresses and 16 groups per bus |
| DMX | Digital protocol from entertainment lighting | Architectural color and theatrical systems |

**Compatibility:** Use manufacturer compatibility charts. Low-end trim settings on dimmers
help eliminate flicker and drop-out at low levels. Overloading phase dimmers with LED inrush
can shorten dimmer life; observe derating guidance.

> **Safety:** 0-10V control wiring is Class 2, but it shares drivers and boxes with line
> voltage. Where Class 2 and power conductors are in the same enclosure, NEC separation rules
> apply (barriers or listed conductors as permitted). De-energize with LOTO and verify absence
> of voltage before working in the enclosure.

## Field Troubleshooting Shortcuts
| Symptom | Check first |
|---|---|
| LED fixture dead | Input voltage at driver (under safe procedures), driver output, LED board connections, thermal damage |
| Flicker when dimmed | Dimmer compatibility, low-end trim, load minimums, mixed driver types on one dimmer |
| Fixtures stuck at full on 0-10V | Open control wire, control not landed, wrong control type |
| Fixtures stuck at minimum or off on 0-10V | Shorted or reversed control pair, control wiring touching ground |
| Fixtures will not dim all the way down on 0-10V | Too many drivers on one control (control's sink current rating exceeded), incompatible control |
| Color mismatch | Different CCT bins, product series or ages |

## Key Takeaways
- Know lumens, watts, efficacy, CCT, CRI and footcandles vs lux.
- Programmed-start ballasts are best with frequent switching.
- LED life depends on heat and drivers; L70 = time to 70% output.
- Match CC drivers by current and voltage range; CV drivers by voltage and wattage; match dimming type.
- Understand TLED Types A, B, C and shunted vs non-shunted sockets.
- Know forward vs reverse phase, 0-10V, DALI, and common dimming failure symptoms.
