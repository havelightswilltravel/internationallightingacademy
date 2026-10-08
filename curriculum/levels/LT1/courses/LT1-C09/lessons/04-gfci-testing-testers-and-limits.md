---
title: GFCI Testing, Plug-in Testers & Their Limits
minutes: 25
video:
video_suggestion: >
  Demonstration on a training board: pressing TEST and RESET on a GFCI, showing a GFCI that
  will not reset because it has no power, finding the upstream GFCI that protects a "dead"
  bathroom outlet, and using a three-light plug-in tester. Then show, on a de-energized and
  rewired training board only, a "bootleg ground" that a plug-in tester reports as correct,
  to explain why the tester cannot be trusted to confirm a ground path.
---

## How a GFCI Works

A **ground-fault circuit interrupter (GFCI)** compares the current going out on the hot
conductor with the current coming back on the neutral. If they differ by a few
milliamperes (about 5 mA for personnel protection), some current is leaking somewhere,
possibly through a person, and the GFCI trips in a fraction of a second.

A GFCI protects people from shock. It does **not** protect against overloads (that is the
breaker's job) and is not the same as an AFCI, which detects arcing.

GFCI protection can come from a GFCI receptacle, a GFCI breaker in the panel, or a
dead-front GFCI device. One GFCI receptacle can protect other ordinary receptacles
downstream if they are wired to its **LOAD** terminals. Those downstream receptacles should
carry a "GFCI Protected" sticker.

## Testing a GFCI Receptacle

1. Plug in a lamp or a plug-in tester so you can see whether power is present.
2. Press **TEST.** The GFCI should click and power should go off. The RESET button pops out.
3. Press **RESET.** Power should return.
4. If the device does not trip when TEST is pressed, or will not reset, it has failed or has
   no power. Most GFCIs made since about 2015 also monitor themselves and will refuse to reset,
   or show a warning light, when their protection has failed.
5. Manufacturers recommend testing GFCIs monthly. Record test results when the work order
   calls for it.

### A "dead" outlet that is really a tripped GFCI

The most common outlet call is a receptacle that has "stopped working" because an upstream
GFCI has tripped. Before you replace anything:

- Look for a GFCI receptacle in the same room, a nearby bathroom, garage, kitchen,
  outside wall, or basement.
- Look for "GFCI Protected" stickers on the dead outlets.
- Press RESET on any GFCI you find.

If a GFCI trips again right away, something on the circuit has a ground fault: a wet
outdoor box, damaged cord, or faulty appliance. Unplug the loads and try again. If it still
trips with nothing plugged in, write it up.

## Plug-in Receptacle Testers

A three-light plug-in tester is a quick screening tool. It can show common wiring faults:

| Typical indication | What it suggests |
|--------------------|------------------|
| Correct | Hot, neutral and ground appear to be in the right places |
| Open ground | No connection detected on the ground pin |
| Open neutral | Neutral not connected |
| Open hot | No power |
| Hot/neutral reversed | Polarity reversed |
| Hot/ground reversed | Dangerous miswiring; stop and write it up |

Many testers also have a GFCI test button that creates a small fault from hot to ground.

### What a plug-in tester cannot tell you

A plug-in tester is **not proof of anything.** Know its limits:

- **It cannot reliably confirm a ground path.** A "bootleg ground" (the ground terminal
  jumpered to the neutral in the box) shows "Correct" on a tester even though there is no
  real equipment ground. A high-resistance or partly broken ground can also show "Correct."
- **It does not test under load.** A loose connection that works with a tiny tester can fail
  and heat up when a heater or vacuum is plugged in.
- **It misses some faults**, such as a neutral and ground that are both reversed with the hot
  in the right place, or two hots on a 240 V circuit.
- **Its GFCI button needs a ground.** On a two-wire receptacle with no ground (including a
  GFCI installed on an ungrounded circuit), the tester's GFCI button may not trip the device.
  Use the GFCI's own TEST button.
- **It is not a voltage verification tool.** Never use a plug-in tester to prove a circuit is
  dead for LOTO. Use a meter, live-dead-live.

> **Safety:** If a tester shows "Correct" but you have any doubt about the ground (an old
> building, two-wire cable feeding a three-prong outlet, a ground that looks jumpered), do
> not assume the outlet is safe. Note it and write it up so a qualified person can test the
> ground properly with a meter or a dedicated ground-impedance tester.

## What Techs May Do vs. Write Up

| You may do (if trained and authorized) | Write it up for an electrician |
|----------------------------------------|--------------------------------|
| Inspect devices for burned, loose or damaged parts | Any burned or brittle wiring, damaged box or melted conductor insulation |
| Reset a tripped GFCI and test it | A GFCI that keeps tripping with nothing plugged in |
| Replace a switch or receptacle like-for-like, de-energized | No line voltage at the device (upstream problem) |
| Replace a failed GFCI like-for-like, with LINE/LOAD wired as before | No ground, bootleg ground, aluminum wire, reversed polarity you cannot explain |
| Screen outlets with a plug-in tester | 3-way and 4-way switching problems |
| Tighten a loose cover plate | Breakers, panels, multiwire circuits, adding outlets or circuits |
| Document findings with photos | Any work requiring a permit, or a change in device type that triggers new code requirements |

## Key Takeaways
- A GFCI trips on small current leaks to protect people; test it with TEST and RESET.
- Many "dead" outlets are downstream of a tripped GFCI; find and reset it before replacing anything.
- A plug-in tester screens for common faults but cannot confirm a real ground path or test under load.
- Never use a plug-in tester to verify absence of voltage.
- Know your scope: inspect, reset, replace like-for-like when authorized; write up everything beyond the device.
