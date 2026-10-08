---
title: Phase-Cut (Triac/ELV) Dimming Problems with LED Loads
category: dimming
tags: [dimming, phase-cut, forward-phase, reverse-phase, triac, elv, led, buzzing]
levels: [LT3, LT4]
last_reviewed: 2026-10-08
review_interval_months: 12
---

> **DRAFT - pending SME review.**

## Symptoms

- LED lamps or fixtures flicker, shimmer or "pop on" at low dim levels
- Lights won't dim smoothly; most of the slider does nothing ("dead travel")
- Dimmer or fixtures buzz or hum
- Lights glow or flash when the dimmer is off
- Dimmer is hot or has failed shortly after LED retrofit

## Safety first

- Phase-cut dimmers are line-voltage devices. **Default to de-energized work.** LOTO the
  branch circuit and verify absence of voltage at the dimmer box and fixture before
  removing devices or opening fixtures.
- Multi-gang boxes may contain more than one circuit - verify every conductor in the box.
- Energized measurements are **qualified persons only**, with risk assessment, appropriate
  PPE and an energized-work justification per NFPA 70E.

## Tools needed

- CAT III true-RMS multimeter, clamp meter
- Dimmer and lamp/driver data sheets and compatibility lists
- Replacement dimmer of the correct type and rating
- Insulated tools

## Quick reference

- **Forward-phase (leading-edge, "triac", "incandescent", sometimes "MLV")** dimmers chop
  the front of each half-cycle.
- **Reverse-phase (trailing-edge, "ELV")** dimmers chop the back of each half-cycle; often
  smoother and quieter with LED drivers.
- Many LED drivers and lamps are only compatible with one type, and many dimmers need a
  **neutral** and have a **minimum load**. LED loads may need **derating** of the dimmer's
  rated wattage - follow the dimmer manufacturer.

## Likely causes

| Cause | How to confirm | Fix |
|---|---|---|
| Lamp/driver not on dimmer's compatibility list | Check both manufacturers' lists | Replace dimmer or lamps with a tested-compatible combination |
| Wrong dimmer type (forward vs reverse) for the driver | Driver data sheet specifies type | Install correct type, or set the selectable dimmer's mode |
| Load below dimmer minimum | Total LED watts vs dimmer minimum load | Add compatible load, use a dimmer rated for low LED loads, or follow manufacturer guidance |
| Load above dimmer's LED rating (inrush) | Total LED watts vs LED rating; dimmer hot or failed | Split load or use a higher-rated dimmer |
| Low-end/high-end trim not set | Dimmer has adjustable trim | Set trim per manufacturer |
| Dimmer without neutral leaking current (glow when off) | 2-wire dimmer; glow with dimmer off | Use a neutral-wired dimmer, or a manufacturer-approved load correction device |
| Mixed lamp brands/types on one dimmer | Visual inspection | Standardize lamps on the dimmer |
| Loose connection | Flicker changes when device moved; heat discoloration | Remake connections (de-energized) |

## Step-by-step diagnosis

1. Identify the dimmer model and type, and the lamps/fixtures (model, wattage, count).
2. Add up the total LED load and compare with the dimmer's minimum load and LED maximum rating.
3. Look up both compatibility lists. If the combination isn't listed, that is the most
   likely cause - mark it before going further.
4. Check for a mode switch or trim adjustment on the dimmer; set per manufacturer and re-test.
5. Check whether the lamps are all the same model; replace odd ones.
6. **De-energize, LOTO, verify absence of voltage.** Pull the dimmer and check connections,
   neutral (if required), and conductor condition. Look for heat damage.
7. **(Qualified, energized, with PPE)** At full brightness, the voltage to the load should be
   close to line voltage (a true-RMS meter may read slightly lower because of the dimmer's
   conduction angle). With the dimmer off, a 2-wire dimmer may show a misleading voltage on a
   high-impedance meter - check in LoZ mode.
8. Install a compatible dimmer (or lamps), set the trim, and test the full range and off.

## When to escalate

- The customer wants a specific dimming performance that available products can't meet
- Dimmer failures repeat (possible inrush overload - see the inrush guide)
- Multi-location or architectural dimming systems requiring programming

## Documentation

- Dimmer model/type, lamp/driver models and quantity, total load
- Compatibility status (listed / not listed)
- Trim or mode settings changed, parts replaced
- Customer informed of any lamp/dimmer combinations that should not be used
