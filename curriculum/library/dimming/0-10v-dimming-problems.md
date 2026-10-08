---
title: 0-10V Dimming Problems (Not Dimming, Won't Turn Fully Off)
category: dimming
tags: [dimming, 0-10v, led, driver, low-end-trim, class-2]
levels: [LT3, LT4]
last_reviewed: 2026-10-08
review_interval_months: 12
---

> **DRAFT - pending SME review.**

## Symptoms

- Fixtures stay at full brightness no matter where the dimmer is set
- Fixtures stay at minimum (very dim) and won't go to full
- Fixtures dim, but not as low as expected, or dim unevenly across a zone
- Fixtures glow, flicker or stay on at minimum when the control is "off"
- Some fixtures in the zone dim and others don't

## Safety first

- 0-10V control wiring is usually **Class 2** low voltage, but it shares fixtures and
  boxes with **line voltage**. Always assume line voltage is present in the box.
- **Default to de-energized work.** LOTO the branch circuit(s) - and any separate control
  power - and verify absence of voltage before opening fixtures, boxes or dimmer enclosures.
- Measuring the 0-10V signal with the system powered requires line-voltage parts to be
  energized nearby: **qualified persons only**, with risk assessment, appropriate PPE
  and an energized-work justification per NFPA 70E.

## Tools needed

- CAT III multimeter (DC volts, continuity, DC mA)
- Driver and control data sheets (max number of drivers per control, sink current, dimming range)
- Wiring diagram / lighting control riser
- Insulated tools, wire labels

## How 0-10V works (quick reference)

- Two control leads: **violet (+) and gray (-)** by common convention (some older or
  other products use different colors - check the diagram).
- The **driver supplies** a small DC voltage on the dim leads; the dimmer **sinks**
  current to pull the voltage down. About **10 V = full**, about **1 V or below = minimum**.
- **Open dim leads** = full brightness. **Shorted dim leads** = minimum.
- Most 0-10V drivers **do not turn off at 0 V**; they stay at minimum (often 1% or 10%).
  "Off" requires a relay, switch, or power pack that opens line voltage, or a driver with
  a dim-to-off feature.

## Likely causes

| Cause | How to confirm | Fix |
|---|---|---|
| Dim leads open/not connected (stuck at full) | ~10 VDC at dimmer regardless of setting; open circuit in dim wiring | Find and repair the open; connect all fixtures |
| Dim leads shorted or grounded (stuck at minimum) | ~0 V across dim leads; continuity between violet and gray or to ground with drivers disconnected | Find and repair the short |
| Polarity reversed at a fixture or dimmer | That fixture does not respond, others do | Correct +/- polarity |
| Too many drivers for the dimmer's sink rating | Range compressed; won't reach minimum; sum of driver source currents exceeds dimmer rating | Split the zone, add a dimmer/power pack, per data sheets |
| No relay to break line power (won't turn off) | Control at 0 V, fixtures at minimum glow | Add/repair the relay or power pack; or use dim-to-off drivers |
| Low-end trim set too high / too low | Control's trim setting | Adjust trim per manufacturer |
| Mixed drivers (different curves/minimums) in one zone | Uneven dimming; driver labels differ | Standardize drivers in the zone |
| Induced voltage on long control runs near power | Small fluctuating DC voltage with control off; flicker | Route Class 2 control wiring separately; follow the manufacturer's wiring limits |
| Class 2 and line-voltage wiring improperly mixed | Class 2 dim conductors in the same raceway/box compartment as power without proper rating | Correct per NEC power-limited circuit rules and the manufacturer's instructions |

## Step-by-step diagnosis

1. Note the symptom: stuck full, stuck min, poor range, or won't turn off. Each points to
   a different cause in the table above.
2. Check the control settings (trim, scene, schedule, network override) before opening anything.
3. **(Qualified, energized, with PPE)** At the dimmer, measure DC volts across violet (+)
   and gray (-) while moving the slider. Expected: about **10 V at full**, falling to
   about **1 V or less at minimum**.
   - Stays ~10 V: the dimmer isn't sinking current (failed dimmer, open wiring, or reversed polarity).
   - Stays ~0 V: short in the dim wiring or a failed driver/dimmer pulling it down.
4. **De-energize, LOTO, verify absence of voltage.** Disconnect the dim leads at the dimmer.
   With the system re-energized (qualified, PPE), the open leads should read about 10 V
   (drivers sourcing voltage). Zero indicates a short or open on the dim circuit.
5. Half-split the zone: de-energize, disconnect the dim run at a midpoint, and check each
   half for shorts (continuity) and opens. Repeat until the faulty segment or fixture is found.
6. Check each fixture's dim polarity and connections; check for violet/gray landed under
   a line-voltage connector or a nicked lead touching the fixture body.
7. Count drivers on the zone and compare total current with the dimmer/power pack rating.
8. For "won't turn off": confirm what is supposed to remove line power, and whether it
   does (qualified voltage test on the switched leg with the control off).
9. Restore, test full range and on/off, and confirm all fixtures track together.

## When to escalate

- Networked or programmed systems where dimming is set in software
- Zone overloading that requires redesign or new circuits
- Wiring that violates Class 2 separation and needs rework
- Driver/control compatibility questions the data sheets don't answer

## Documentation

- Zone/circuit, dimmer model, driver models and count on the zone
- Measured control voltages at full and minimum
- Faults found (open, short, polarity, overload) and location
- Trim settings changed (before and after values)
