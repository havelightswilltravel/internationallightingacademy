---
title: Photocell Problems - Lights On During the Day / Off at Night
category: exterior
tags: [exterior, photocell, photocontrol, day-burning, twist-lock, contactor]
levels: [LT2, LT3]
last_reviewed: 2026-10-08
review_interval_months: 12
---

> **DRAFT - pending SME review.**

## Symptoms

- **Day burning:** lights stay on during daylight
- **Night outage:** lights won't come on at dusk, or go off during the night
- Lights cycle on and off at night
- One fixture affected (fixture-mounted photocell) or a whole zone (photocell driving a contactor)

## Safety first

- Twist-lock photocell receptacles are line-voltage terminals. Removing/installing a
  photocell exposes you to energized parts unless the circuit is off. **Default to
  de-energized work: LOTO and verify absence of voltage** before working on the receptacle
  or fixture wiring.
- Swapping a photocell or fitting a shorting cap on an energized receptacle is energized
  work: **qualified persons only**, with risk assessment, appropriate PPE (voltage-rated
  gloves, eye/face protection) and an energized-work justification per NFPA 70E, following
  company procedure.
- Pole-top work: MEWP training and pre-use inspection, fall protection, and minimum
  approach distances from overhead power lines.

## Tools needed

- Known-good photocell of the correct voltage and load rating
- Photocell shorting cap (bypasses the photocell - lights on) and test cap/opaque cover
- CAT III multimeter
- MEWP or ladder, flashlight

## Quick reference

- Common locking-type photocontrol receptacles (ANSI C136.10 style) have three contacts:
  **line (black), neutral (white), load (red).**
- Photocells are rated for a voltage range (e.g. 120 V, 208-277 V, 347 V, 480 V or
  multi-voltage) and a maximum load. Match both.
- Many photocells are designed to **fail in the ON state**, so day burning is a common failure.
- Most photocells have a built-in turn-off delay (seconds) to avoid reacting to headlights
  or lightning.
- Photocells are typically aimed **north** (in the northern hemisphere) to avoid direct sunlight.

## Likely causes

| Cause | How to confirm | Fix |
|---|---|---|
| Failed photocell (stuck on or off) | Known-good photocell works | Replace with correct voltage/load rating |
| Photocell sees light from the fixture or other lights (cycling, early off) | Lights go off soon after coming on; covering cell keeps them on | Re-aim north/away from light, shield, or relocate |
| Photocell covered, dirty or shaded (day burning) | Visual; debris, paint, bird nest | Clean, re-aim or relocate |
| Wrong voltage photocell | Rating vs circuit voltage | Replace with correctly rated photocell |
| Loose photocell or corroded receptacle | Photocell not locked; corrosion/burned contacts | Replace receptacle (de-energized) |
| Contactor or downstream fault (zone systems) | Photocell output OK, contactor doesn't respond | See contactor guide |
| Time clock or BMS also in the control path | Lights governed by both photocell and schedule | Check both; see time clock guide |
| Lamp/driver failure (single fixture) | Shorting cap installed, fixture still dark | Troubleshoot fixture |

## Step-by-step diagnosis

1. Define the scope: one fixture or a zone? For a zone, find the photocell and the
   contactor it drives. For one fixture, the photocell is on the fixture.
2. Look at the photocell: aim, cleanliness, damage, shading, nearby light sources.
3. **Daytime test (day burning):** cover the photocell completely with an opaque cap.
   Lights should be on (they already are). Remove the cover - lights should turn off after
   the photocell's delay. If they stay on in daylight, the photocell (or contactor stuck
   closed) is at fault.
4. **Night test (night outage):** shine a flashlight on the cell - lights should go off after
   the delay; remove it - lights should come back (HID lamps need restrike time).
5. **Bypass test (qualified, per procedure):** de-energize and install a shorting cap in place
   of the photocell (or bypass per the contactor's control circuit). Restore power. If the
   lights come on, the photocell is bad; if not, the problem is downstream (contactor, fixture,
   supply). Remove the shorting cap when done - do not leave lights burning 24/7 without
   the customer's agreement.
6. **(Qualified, energized, with PPE)** At the receptacle: line-to-neutral should be circuit
   voltage. With the photocell calling for on (covered), load-to-neutral should also be
   circuit voltage.
7. Replace the photocell with a correctly rated unit. Lock it fully in the receptacle and aim it north.
8. Verify operation at dusk if possible, or with the cover/flashlight test.

## When to escalate

- Corroded/burned receptacle wiring or pole wiring damage
- Photocell controls a large zone through a contactor in an energized panel
- Lighting serves security or safety purposes and must stay on - coordinate with the owner

## Documentation

- Photocell location, model, voltage/load rating, aim direction
- Tests performed (cover, flashlight, shorting cap) and results
- Parts replaced; shorting caps removed (or left in with customer approval)
- Any downstream issue found (contactor, fixture)
