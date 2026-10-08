---
title: Phase Dimming — Forward (Leading-Edge) & Reverse (Trailing-Edge)
minutes: 30
video:
video_suggestion: >
  A bench demonstration with a forward-phase and a reverse-phase dimmer feeding identical LED
  downlights. An oscilloscope (or animation overlay) shows how each dimmer chops the sine wave.
  The trainer shows flicker and drop-out with the wrong dimmer and smooth dimming with a
  compatible one, then reads the dimmer and lamp compatibility charts.
---

## What Phase Dimming Does
A phase dimmer sits in series with the hot conductor, just like a switch. Instead of turning
the power fully on or off, it switches the power on and off during every half-cycle of the AC
sine wave, cutting off part of each half-cycle. The less of the wave that gets through, the
lower the RMS voltage and the dimmer the light. The same two wires that feed the load carry
both power and the dimming "signal" — that is why phase dimming is common in retrofits where
no extra control wires exist.

| Type | Also called | How it cuts the wave | Typical loads |
|---|---|---|---|
| Forward phase | Leading-edge, TRIAC, incandescent dimmer | Turns on part-way into each half-cycle (cuts the *start*) | Incandescent, halogen, magnetic low-voltage transformers, many LED lamps rated for TRIAC dimming |
| Reverse phase | Trailing-edge, ELV (electronic low-voltage) dimmer | Turns on at the start, turns off early (cuts the *end*) | Electronic low-voltage transformers, many LED drivers and lamps |

**Why the difference matters:** Forward-phase dimmers create a sharp voltage step each
half-cycle. Magnetic (inductive) transformers tolerate this, but electronic (capacitive) loads,
including many LED drivers, can react with buzzing, flicker or overheating. Reverse-phase
dimmers turn on gently at the zero crossing and are often smoother with LED and ELV loads.
Some "universal" or "adaptive" dimmers sense the load and pick a mode automatically, or let
you select the mode.

## Two-Wire vs Three-Wire (Neutral) Dimmers
- **Two-wire dimmers** connect only to the hot and the switched leg (plus ground). To power
  their own electronics, they leak a small current through the load even when "off." With
  incandescent loads that was invisible. With LEDs, it can cause **ghosting** (a faint glow when
  off) or blinking.
- **Neutral-wire dimmers** use the neutral to power their electronics and usually work better
  with LED loads. The NEC generally requires a grounded (neutral) conductor to be provided at
  most switch locations (see Article 404) — partly for exactly this reason. Check that one is
  actually present in the box before you buy a neutral-required dimmer.

## LED Load Ratings — Not Just Watts
An incandescent dimmer rated 600 W **does not** support 600 W of LED. LED drivers draw short
peaks of current (inrush and high peak current per half-cycle) that stress the dimmer. Dimmer
manufacturers publish a separate LED/CFL rating — often far lower, such as 150 W or 250 W — and
many publish compatibility lists of tested lamps and fixtures.

Also check:
- **Ganging derating.** Dimmers mounted side-by-side in a multi-gang box usually must be
  derated (side fins removed, less heat sinking). The instructions give the reduced rating.
- **Minimum load.** Some dimmers need a minimum load to operate correctly. One or two small LED
  lamps may fall below it.
- **Driver/lamp marking.** The LED lamp or driver must be marked dimmable and, ideally, state
  which phase type it supports. "Non-dimmable" LED products on a dimmer can flicker, buzz and
  fail early even with the dimmer at full.

NEMA SSL 7A is an industry standard intended to improve compatibility between phase-cut
dimmers and LED products that are both designed to it. Products claiming SSL 7A compliance are a
good starting point, but always confirm with the manufacturers' compatibility data.

## Installing or Replacing a Phase Dimmer
1. Identify the load: type (LED lamp, LED driver, ELV transformer, MLV transformer, incandescent),
   total watts, and the manufacturer's dimming recommendations.
2. Choose a dimmer whose **LED rating** (after any ganging derate) covers the load and whose
   phase type matches the load.
3. Apply LOTO to the circuit and verify absence of voltage in the box (live-dead-live). Remember
   multi-gang boxes may contain more than one circuit — test every conductor.
4. Identify conductors: line hot, load (switched leg), neutral, equipment ground. For 3-way
   applications, follow the dimmer's wiring diagram (many use a matching companion or remote
   instead of a standard 3-way switch).
5. Connect with listed connectors; bond the dimmer's ground lead/strap.
6. Restore power and test from full to minimum. Adjust the low-end trim if provided (Lesson 4).

> **Safety:** A dimmer is not a disconnecting means. The "off" position of an electronic dimmer
> may leave the load conductors energized (leakage current through the electronics). Always
> lock out the breaker and verify absence of voltage before working on the fixture.

## Recognizing Phase Dimming Problems
| Symptom | Likely cause |
|---|---|
| Buzzing from dimmer or fixtures | Forward-phase dimmer on electronic load; overloaded dimmer |
| Flicker at certain levels | Incompatible driver/dimmer combination; low-end set too low |
| Ghosting (glow when off) | Two-wire dimmer leakage current; consider a neutral-wire dimmer or a load-correction device recommended by the manufacturer |
| Pop-on (won't light until turned up high) | Low-end trim too low; driver cannot start at low voltage |
| Dimmer very hot or failing early | Exceeded LED rating; ganging derate ignored |
| Limited dimming range | Driver's own limits; mixed lamp brands on one dimmer |

## Key Takeaways
- Phase dimmers chop the AC waveform: forward-phase cuts the leading edge, reverse-phase cuts
  the trailing edge.
- Reverse-phase is often better for electronic and LED loads; follow the product data.
- Use the dimmer's LED rating, not its incandescent rating, and apply ganging derates.
- Neutral-wire dimmers reduce ghosting and blinking with LEDs.
- A dimmer is never a disconnect — LOTO the breaker before work.
