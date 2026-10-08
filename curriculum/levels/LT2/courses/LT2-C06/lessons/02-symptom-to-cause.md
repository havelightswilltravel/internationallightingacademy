---
title: From Symptom to Cause
minutes: 35
video:
video_suggestion: >
  A whiteboard session where a senior tech builds symptom-to-cause trees for "one fixture
  dark," "whole circuit dark," and "flickering," then cuts to short field clips showing a
  real example of each cause (burnt socket, tripped breaker, loose neutral splice, failed
  occupancy sensor).
---

## Think in Layers

Every lighting system is a chain. Power flows from the **source** (panel and breaker) through
the **circuit** (wiring, splices, boxes), through the **control** (switch, sensor, relay,
contactor, photocell, time clock), into the **fixture** (whip, splices, ballast/driver,
sockets, lamps/LEDs). A failure at any link breaks everything downstream of it.

The pattern of what works and what doesn't tells you which link failed.

| Pattern | Look first at |
|---|---|
| One fixture out; others on the same circuit and control work | That fixture (lamp, ballast/driver, socket, internal connection, whip) |
| Several adjacent fixtures out; others on same circuit work | A splice or junction box between the working and non-working fixtures; a local control |
| All fixtures on one switch/sensor out | The control device or its wiring |
| All fixtures on one circuit out, across multiple controls | The breaker, the homerun, or a splice near the panel |
| Many circuits/panel out | Upstream: feeder, panel main, transformer, utility — escalate |
| Fixtures out only at certain times | Time clock, photocell, sensor timeout, BAS schedule, or heat-related intermittent failure |

## Common Lighting Symptoms

### Fixture dark

| Possible cause | How to check |
|---|---|
| Lamp(s) failed | Known-good lamp substitution |
| Ballast/driver failed | Supply voltage present at input, lamps/sockets good → substitute ballast/driver |
| Socket broken or burnt | Visual inspection with power locked out; continuity check |
| Loose/burnt splice or whip disconnected | Inspect with power locked out; voltage at fixture input |
| Control off or failed | Check switch/sensor operation; voltage on switch leg |
| Breaker tripped or off | Check panel; find out *why* it tripped before resetting repeatedly |

### Flickering

| Possible cause | Notes |
|---|---|
| Lamp at end of life (fluorescent/HID) | Most common for fluorescent |
| Loose connection anywhere in the path | Flicker that changes when you tap the fixture or move the whip is a strong clue |
| Incompatible dimmer or control | Common with LED; LT3-C02 covers dimming |
| Failing driver or ballast | Especially with heat |
| Voltage fluctuation | Flicker that correlates with large equipment starting; use MIN/MAX to capture |
| Type A TLED / ballast incompatibility | Check compatibility list |
| Loose or shared neutral | Several fixtures flicker together, sometimes with other loads; **treat as urgent** |

### Cycling (on/off repeatedly)

| Possible cause | Notes |
|---|---|
| HPS lamp end of life | Classic cycling |
| Ballast/driver thermal protection | Overheating — check for insulation, blocked vents, high ambient |
| Photocell seeing its own light | Exterior fixtures — LT3-C05 |
| Occupancy sensor timeout too short or poorly placed | LT3-C03 |
| Intermittent connection | Heat expands and breaks the connection, cooling restores it |

### Breaker trips

| When it trips | Likely cause |
|---|---|
| Immediately on reset | Short circuit or ground fault — **do not keep resetting** |
| When lights are switched on, not after | Inrush (many LED drivers), or a fault in a switched portion |
| After running a while | Overload, loose connection heating the breaker, or a failing breaker |
| Randomly | Intermittent fault (pinched wire, water), or a failing breaker |

> **Safety:** A breaker that trips is doing its job. Repeatedly resetting a breaker onto a
> fault can cause an arc flash in the panel or at the fault. If a breaker trips immediately,
> leave it off, lock it out, and find the fault on the de-energized circuit.

### Dim or slow-starting

| Possible cause | Notes |
|---|---|
| Low voltage / voltage drop | Measure at fixture under load and compare to panel |
| Wrong ballast factor or wrong voltage tap | Check labels and wiring |
| Lamp aging | HID lumen depreciation, fluorescent end of life |
| Cold temperature | Fluorescent and some HID |
| Dimmer or 0–10 V control at low level | Check control |

## Using Voltage Readings to Find the Link

With PPE and a tested meter, measuring voltage at points along the chain tells you where
power stops:

1. **At the breaker load terminal** (qualified/supervised panel work) — voltage present?
2. **At the switch line side** — voltage present?
3. **At the switch load side (switch on)** — voltage present?
4. **At the fixture input** — voltage present?

The fault is between the last point with voltage and the first point without it. This is a
simple form of isolation; the next lesson shows how to do it faster with half-splitting.

Remember the neutral: a fixture can have full voltage hot-to-ground and nothing hot-to-neutral
if the **neutral is open**. Always measure hot-to-neutral **and** hot-to-ground.

## Key Takeaways
- Think of the system as a chain: source → circuit → control → fixture. The pattern of failures points to the failed link.
- Check neighbors and controls before tearing into a fixture.
- Flicker that changes when you touch the fixture suggests a loose connection; several fixtures flickering together suggests a neutral problem — treat it as urgent.
- A breaker that trips immediately on reset indicates a fault — don't keep resetting it.
- Measure along the chain; the fault lies between the last good point and the first bad one. Measure hot-to-neutral and hot-to-ground.
