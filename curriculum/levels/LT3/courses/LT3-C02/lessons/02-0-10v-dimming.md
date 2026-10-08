---
title: 0–10V Dimming — Wiring & Troubleshooting
minutes: 35
video:
video_suggestion: >
  A trainer walks through a 0–10V zone with a wall dimmer, power pack/relay and three LED
  troffers. With the line voltage locked out, the trainer points out the violet and gray
  wires. Then, energized and using a meter, the trainer measures about 10V DC with the
  dimming leads open, shows the voltage drop as the slider moves, and demonstrates what
  happens when the pair is shorted (minimum) or opened (full bright).
---

## How 0–10V Works
0–10V is the most common dimming method in commercial LED lighting. It uses a **separate pair
of low-voltage wires** in addition to the line-voltage power wiring.

- The **driver** supplies (sources) a small DC current onto the dimming pair — the open-circuit
  voltage is about 10V.
- The **dimmer or controller** pulls that voltage down by sinking current. At about 10V the
  driver runs at full output; as the control pulls the voltage lower, the driver dims; at about
  1V or below, the driver goes to its minimum level (for example 1% or 10%).
- **0–10V does not turn the lights off.** At 0V the driver is at minimum, not off. Switching off
  is done by a line-voltage switch, relay or power pack — often built into the wall control or
  in a separate power pack.

This driver-sourced, control-sinking arrangement is the common commercial method (standardized
in ANSI C137.1 for 0–10V dimming). Some legacy products work differently, so always read the
specs. A few controls *source* voltage instead; do not mix types without checking.

## Wiring Conventions
| Wire | Common color |
|---|---|
| Dimming positive (+) | Violet/purple |
| Dimming negative (−) | Gray (pink on some products) |

- **Polarity matters.** Reversed leads usually result in no dimming (stuck at full) or erratic
  behavior.
- **Class 1 vs Class 2.** Most 0–10V circuits are Class 2. If **any** driver on the circuit is
  marked Class 1 for its dimming leads, or if the dimming wires run in the same raceway or box
  as power conductors without a permitted barrier, the dimming circuit must be wired and
  insulated as Class 1 (typically 600V-rated conductors in a raceway or listed cable). Check the
  driver label and the project specifications.
- **Topology.** Dimming leads from all fixtures in a zone connect in parallel (all violets
  together, all grays together) back to the control. No home-run per fixture is needed.

## Sizing the Zone
Each driver sources a small current (often around 0.1–2 mA, listed on the driver spec). The
dimmer has a maximum **sink current** rating (for example 50 mA). Too many drivers on one
dimmer and it cannot pull the voltage down — the zone won't dim to its minimum.

**Example:** Dimmer sink rating 50 mA; driver sources 0.5 mA each → maximum 100 drivers *by
signal* — but the dimmer's line-voltage relay (or power pack) also has an amperage limit, and
that is often the real limit. Check both.

## Measuring 0–10V
Set your meter to **DC volts** and measure between violet (+) and gray (−):

| Reading at the control/fixture | Meaning |
|---|---|
| About 10–11 VDC with control at full | Normal — drivers sourcing, control not sinking |
| Voltage falls smoothly as control is lowered (down to about 0–1V) | Normal |
| About 10V and does not change when control moves | Control not connected, failed control, open wiring between control and fixtures, or reversed polarity |
| Near 0V with control at full | Short on the dimming pair (pinched wire, crossed connection), or a failed driver/control pulling the line down |
| 0V and no driver power | Drivers not energized — check the line-voltage side first |

**Isolating a short:** Disconnect the dimming pair at the control. If the voltage at the
fixtures comes back to about 10V, the control is at fault. If it stays near zero, separate the
zone at junction points (half-split, as in LT2-C06) until the shorted section or driver is
found. You can also disconnect each driver's dimming leads one at a time.

**Open vs short summary:**
- **Open** dimming pair → driver sees no control → **full bright**.
- **Short** dimming pair → **minimum** (looks "very dim" or "won't come up").

## Typical 0–10V Faults & Fixes
1. **One fixture won't dim, the rest do:** loose or missing dimming connection at that
   fixture, reversed polarity there, or a non-dimming/wrong driver installed during a past
   repair.
2. **Whole zone stuck at full:** open between control and the first fixture, failed control,
   reversed polarity at the control, or control not set up (some digital controls need
   configuration).
3. **Whole zone stuck at minimum:** short on the pair (often a staple or screw through cable,
   or violet and gray twisted together in a box).
4. **Uneven dimming between fixtures:** mixed driver brands/curves (logarithmic vs linear),
   long runs with induced noise, or different minimum levels. Standardize drivers on a zone.
5. **Fixtures won't turn fully off:** expected — the switching function (relay/power pack)
   is missing, wired wrong, or failed.

> **Safety:** The 0–10V pair is low voltage, but you will measure it inside fixtures and boxes
> containing 120–277V conductors. Only take energized measurements when authorized, using the
> PPE and procedures from your employer's NFPA 70E program, and keep fingers behind the probe
> barriers. Apply LOTO and verify absence of voltage before you disconnect, reconnect or
> re-terminate any wire, even the low-voltage ones.

## Key Takeaways
- Drivers source about 10V; the control sinks current to dim. 0–10V dims but does not switch off.
- Violet = +, gray = − (confirm on label); polarity matters.
- Open = full bright; short = minimum.
- Check the dimmer's sink rating and its relay/power-pack amp rating when sizing a zone.
- Treat the circuit as Class 1 whenever any driver or the installation requires it.
