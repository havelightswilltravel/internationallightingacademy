---
title: Transformer Loading, Voltage Drop and Dimming
minutes: 30
video:
video_suggestion: >
  Instructor sets up a 12 V cable system with six MR16 lamps and a 300 VA transformer, then
  measures voltage at the transformer and at the last lamp to show the drop, swaps to a
  heavier cable to show the improvement, and finally shows a flickering MLV transformer on an
  incorrect dimmer next to a smooth one on the correct dimmer.
---

## Sizing and Loading a Transformer

Transformers are rated in **VA** (volt-amperes). For lamps, VA and watts are close enough to treat
as equal for loading. The rule:

> Total lamp watts must not exceed the transformer's VA rating. A practical target is to load to
> about **75–80%** of the rating for long life and headroom.

| Transformer | Max load | Practical target | Example lamp count (50 W MR16) | Example lamp count (7 W LED MR16) |
|---|---|---|---|---|
| 60 VA | 60 W | ~48 W | 1 | Check minimum load first |
| 150 VA | 150 W | ~120 W | 2 | Up to ~17 by watts, if min load and compatibility are met |
| 300 VA | 300 W | ~240 W | 4 | Same caution |
| 600 VA | 600 W | ~480 W | 9 | Same caution |

**Minimum load** (electronic transformers): a 20–60 W electronic transformer with a single 5 W LED
lamp is below minimum and will likely flicker or not start.

**Overloading** causes overheating, thermal shutdown (lights go off, cool, come back on — a classic
"cycling" complaint), reduced life and fire risk.

## Voltage Drop at Low Voltage

Voltage drop = current × resistance of the conductors. Because low-voltage systems carry about ten
times the current of a 120 V circuit for the same load, the **same cable loses about ten times the
voltage** — and a 1-volt loss is about 8% of 12 V but under 1% of 120 V.

| Item | 120 V circuit | 12 V circuit |
|---|---|---|
| Load | 300 W | 300 W |
| Current | 2.5 A | 25 A |
| 1 V drop as % of supply | 0.8% | 8.3% |
| Visible effect | None | Dimmer, yellower halogen; LEDs may flicker or shut off |

What causes excessive drop:

- **Cable too small** for the current and distance
- **Runs too long** from transformer to lamps
- **Too many lamps** on one run
- **Poor connections**: corroded landscape splices, loose terminal blocks, worn cable clips

How to reduce it:

1. Use heavier cable (lower AWG number) per the maker's charts.
2. Shorten runs — move the transformer closer to the lamps or feed from the center.
3. Split the load into **multiple home runs** (or a "hub" layout) instead of one long daisy chain.
4. On magnetic landscape transformers, use a **higher tap** (13, 14, 15 V) for long runs, then
   measure at the lamps — target is close to the lamp's rated voltage (typically about 10.5–12 V
   for halogen; check LED lamp specs).
5. Make tight, sealed connections.

> **Safety:** High current means high heat at a bad connection. A loose low-voltage splice can get
> hot enough to melt insulation and start a fire, even though 12 V will not shock you. Low voltage
> is not "no hazard."

## Dimming Low-Voltage Lighting

| Transformer | Dimmer type | What happens with the wrong dimmer |
|---|---|---|
| Magnetic | **MLV** (magnetic low-voltage), forward-phase rated for inductive loads | Buzzing, overheating transformer, possible failure |
| Electronic | **ELV** (electronic low-voltage), reverse-phase/trailing-edge — unless the transformer label allows forward-phase | Flicker, buzz, transformer damage, poor low-end |
| LED driver/LED lamps on transformer | Per the lamp/transformer/dimmer compatibility list | Flicker, drop-out, ghosting |

Rules of thumb:

- Read the transformer label for "MLV," "ELV" or the dimming method.
- Size the dimmer by the **VA of the transformer load**, including derating for ganging.
- Many magnetic transformers are not designed to run with no lamps on a dimmer — replace burned-out
  lamps promptly on MLV systems.

## Cable, Rail and Monorail Systems

- **Cable systems**: two tensioned conductors (often bare) a few inches apart, carrying 12 V.
  Fixtures clip across both cables. Watch for sag, loose tensioners and corroded contacts.
- **Monorail**: a single shaped rail with two isolated conductors; heads plug in.
- **Low-voltage track/rail**: like line track but 12/24 V.

All three carry high current, so they have strict limits on length and wattage per transformer.
Most use remote transformers and often require the conductors to be fed from more than one point on
long runs. Bare-cable systems must be **Class 2** or otherwise protected per their listing.

## Landscape Lighting

| Component | Notes |
|---|---|
| Transformer | Usually magnetic, multi-tap, outdoor rated, with timer/photocell; plugs into an outdoor GFCI receptacle or is hardwired |
| Cable | Direct-burial low-voltage cable (e.g., 12/2, 10/2, 8/2 AWG) |
| Connectors | Gel-filled or sealed connectors; "piercing" connectors are a common failure point |
| Fixtures | Path lights, spots, well lights, uplights with MR16, PAR36 or integrated LED |

Common problems: corroded connectors, cut cables from digging, water in fixtures, overloaded
transformers, timers or photocells misadjusted.

## Key Takeaways
- Total lamp watts must not exceed transformer VA; aim for about 75–80% loading, and respect minimum load on electronic units.
- Voltage drop matters far more at 12 V: about ten times the current means about ten times the drop in the same cable.
- Reduce drop with heavier cable, shorter runs, split home runs, higher taps (magnetic landscape units) and good connections.
- Magnetic transformers use MLV dimmers; electronic transformers usually use ELV dimmers.
- Low voltage still carries a fire hazard from high current at poor connections.
