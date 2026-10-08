---
title: Conductors — Types, Colors and Sizing Basics
minutes: 35
video:
video_suggestion: >
  At the shop wire rack, a tech reads the printing on THHN/THWN-2 building wire, MC cable and
  fixture wire, explains each marking, and shows 14, 12 and 10 AWG side by side. Then
  demonstrates re-identifying a conductor with tape at a termination and explains when that
  is and isn't permitted.
---

## Reading the Printing on a Wire

Building wire is printed along its length. Learn to read it — it tells you where the wire
can be used.

Example: `12 AWG THHN/THWN-2 CU 600V VW-1`

| Marking | Meaning |
|---|---|
| 12 AWG | Size (American Wire Gauge) — smaller number = larger wire |
| THHN | Thermoplastic, High Heat-resistant (90°C), Nylon jacket — dry/damp locations |
| THWN-2 | Thermoplastic, Heat- and Water-resistant, Nylon — 90°C in wet locations |
| CU | Copper (AL = aluminum) |
| 600V | Insulation voltage rating |
| VW-1 | Flame test rating |

Other types you will see in lighting work:

| Type | Typical use |
|---|---|
| MC cable | Metal-clad cable — common for branch circuits and fixture whips in commercial ceilings |
| AC cable ("BX") | Armored cable with a bonding strip; older buildings |
| NM cable ("Romex") | Nonmetallic-sheathed cable — dwellings and some light commercial, where permitted |
| XHHW-2 | Cross-linked insulation, 90°C wet/dry — common for larger feeders and outdoor runs |
| TFFN / TFN | Fixture wire — internal fixture wiring and luminaire taps where permitted (Article 402) |
| SJOOW / SOOW | Flexible cord — cord-and-plug fixtures and pendants where permitted |

## Conductor Identification

| Conductor | Required identification (NEC) |
|---|---|
| Grounded (neutral) | White or gray insulation, or three continuous white or gray stripes on other than green insulation. Sizes 4 AWG and larger may be re-identified at terminations (Article 200) |
| Equipment grounding | Bare, green, or green with one or more yellow stripes. Larger sizes may be re-identified at terminations (Article 250) |
| Ungrounded (hot) | Any color other than white, gray or green. Where more than one nominal voltage system exists, each must be identified by phase and system, and the method must be documented at each panel (Article 210) |

Common industry color conventions (verify the posted scheme):
- **208Y/120 V:** black (A), red (B), blue (C), white neutral
- **480Y/277 V:** brown (A), orange (B), yellow (C), gray neutral
- **Switch legs and travelers:** often purple, pink or other colors per project spec

> **Safety:** Colors tell you what a conductor is **supposed** to be. Previous workers make
> mistakes, and white wires are sometimes used as hots (for example, in a cable switch loop
> where re-identification is permitted). Never trust color — verify absence of voltage on
> every conductor with a tested meter.

### Re-identifying in cable

In NM or MC cable, a white conductor may be used as an ungrounded conductor in certain cases
(such as a switch loop) if it is permanently re-identified (tape, paint, or other effective
means) at every location where it is visible and accessible. Good practice: wrap it with
black, red or the appropriate phase color tape at both ends.

## Sizing Basics: Ampacity and Overcurrent Protection

**Ampacity** is the current a conductor can carry continuously without exceeding its
temperature rating. Ampacity values come from NEC Table 310.16 and depend on conductor size,
material and insulation temperature rating (60°C, 75°C or 90°C columns).

But a conductor is only as good as the coolest-rated part it connects to. Terminals on
breakers and devices have temperature ratings too. For circuits rated 100 A or less (or
conductors 14 through 1 AWG), the 60°C column is used unless the equipment is listed and
marked for 75°C (110.14). Most modern breakers are marked 60/75°C.

On top of that, the NEC sets maximum overcurrent protection for small copper conductors
(240.4(D)):

| Copper size | Max breaker (general) | Typical lighting use |
|---|---|---|
| 14 AWG | 15 A | Some 120 V lighting circuits, control wiring |
| 12 AWG | 20 A | The standard commercial lighting branch circuit |
| 10 AWG | 30 A | 20 A circuits upsized for voltage drop; 30 A loads |

So even though 12 AWG THHN has a 90°C ampacity of 30 A, it is still protected at 20 A for a
general branch circuit.

### When ampacity must be reduced

Ampacity must be **adjusted** when more than three current-carrying conductors run together
in a raceway or cable (common with lighting homeruns), and **corrected** for high ambient
temperatures (attics, rooftops, near hot equipment). This is where the 90°C rating of THHN
is useful — derating starts from the 90°C value. EA2 covers these calculations. At LT2,
know that **you cannot just keep adding circuits to a conduit** without someone checking the
derating.

### Upsizing for voltage drop

If conductors are upsized for voltage drop (LT2-C01), the equipment grounding conductor
must be upsized proportionally (Article 250). Mention this to your lead if you are pulling
upsized conductors.

## Aluminum Conductors

Aluminum is common in larger feeders and older buildings. Aluminum conductors need terminals
marked **AL/CU** (or CO/ALR for some 15/20 A devices), proper torque, and often antioxidant
compound per the manufacturer. Never splice aluminum to copper with a connector not listed
for that combination.

## Key Takeaways
- Read wire markings: size, insulation type (THHN, THWN-2), material, voltage rating.
- Neutrals are white/gray; EGCs bare/green/green-yellow; hots any other color, with system identification documented at the panel.
- Never trust colors — verify every conductor with a tested meter.
- Terminal temperature ratings limit usable ampacity; 14/12/10 AWG copper generally max 15/20/30 A.
- More than three current-carrying conductors together, or high ambient heat, require derating — check before adding circuits.
- Aluminum requires AL/CU-rated terminals and connectors.
