---
title: Exterior Photocontrols & Twist-Lock Receptacles
minutes: 30
video:
video_suggestion: >
  On the ground with a demo area light, the trainer shows a 3-pin and a 7-pin twist-lock
  receptacle, installs a photocontrol and a shorting cap, explains receptacle rotation for
  north orientation, and demonstrates testing a photocontrol by covering it with a test cap
  and waiting through the delay.
---

## Building on LT3-C03
In Lighting Controls I you learned how stem-mount photocells and time clocks switch contactors.
Exterior luminaires add **fixture-mounted photocontrols** — usually twist-lock — that switch each
fixture individually. Knowing which control scheme a site uses is the first step in every
exterior troubleshooting call.

| Control scheme | How to recognize it |
|---|---|
| **Individual photocontrols** on each fixture | Twist-lock photocontrol on top of each head; circuit is energized 24/7 |
| **Contactor control** (photocell and/or time clock at the building) | Fixtures have **shorting caps** (or no receptacle); circuit is dead in daytime |
| **Networked / wireless node** | 7-pin receptacle with a control node; programmed schedules and dimming (LT4) |
| **Button photocell** | Small sensor built into a wall pack |

## Twist-Lock Receptacles
The locking-type photocontrol receptacle used on roadway and area lights is standardized by
**ANSI C136.10** (3-pin). **ANSI C136.41** adds dimming and signal contacts, giving **5-pin** or
**7-pin** receptacles that still accept 3-pin photocontrols.

| Pin / wire | Function | Typical wire color |
|---|---|---|
| Line | Hot in from the circuit | Black |
| Load | Switched out to the driver | Red |
| Neutral | Powers the photocontrol (on 480V systems, may be a second line conductor — read the label) | White |
| Pins 4–5 (C136.41) | Dimming (0–10V +/−) | Violet / gray |
| Pins 6–7 (C136.41) | Auxiliary/signal (manufacturer-defined) | Varies |

**Orientation:** Most receptacles can be rotated so the photocontrol window faces **north**
(northern hemisphere), away from direct sun. When installing or replacing, check the rotation.

## Types of Caps and Photocontrols
| Device | Function |
|---|---|
| **Photocontrol (standard)** | On at dusk, off at dawn |
| **Photocontrol with dimming (5/7-pin)** | Adds 0–10V dimming or timed dimming |
| **Shorting cap** (shorting plug) | Connects line to load — fixture always on whenever the circuit is energized; used when a contactor or time clock controls the circuit |
| **Non-shorting (open) cap** | Seals the receptacle; fixture stays off — sometimes used on 7-pin receptacles with external control or to disable a fixture |
| **Wireless control node** | Networked on/off, dimming, metering |

**Key rule:** If the site is controlled by a **contactor and time clock**, fixtures need **shorting
caps**. If you install a photocontrol on a fixture that is only energized at night by the
contactor, it will usually still work, but the delay can confuse troubleshooting. If the site is
controlled by **individual photocontrols** and someone installs a **shorting cap**, that fixture
burns 24/7.

**Voltage ratings:** Photocontrols are rated for specific voltages — commonly 120V, 208–277V
multi-volt, 347V or 480V. A 120V-only photocontrol on a 277V fixture fails immediately. Read the
fixture label for the voltage at the receptacle.

**Fail-on vs fail-off:** Many utility-style photocontrols fail ON (lights burn day and night when
the sensor fails). Others fail OFF. One day-burner on a lot often means a failed-on photocontrol.

## Testing an Exterior Photocontrol
1. From the ground (if the fixture is reachable) or from a MEWP, inspect the photocontrol for
   damage, water intrusion, and receptacle condition.
2. **Daytime test:** cover the sensor window completely with an opaque cap. Wait for the turn-on
   delay (seconds to a couple of minutes). The fixture should light.
3. **Swap test:** replace with a known-good photocontrol or install a shorting cap temporarily —
   if the fixture lights with a shorting cap, the photocontrol or its voltage rating is the
   problem; if not, the fault is the receptacle, wiring, fuse, driver or circuit.
4. At night, if fixtures are off, check whether the circuit is energized at all (contactor,
   breaker, fuse).
5. Photocontrols can read the light from adjacent fixtures, illuminated signs, or reflective
   building walls and **cycle**. Re-orient the receptacle or use a photocontrol with a different
   turn-off ratio or a shield.

> **Safety:** Twist-lock receptacles are energized at line voltage — often 277V or 480V — and
> are usually reached from a MEWP. Removing and installing a photocontrol is a routine task, but
> the receptacle terminals are exposed when the photocontrol is removed. Do not reach into the
> receptacle or the luminaire head. Before opening the luminaire, rewiring a receptacle or
> replacing a driver, apply LOTO at the panel and verify absence of voltage at the luminaire.

## Replacing a Twist-Lock Receptacle
1. LOTO the circuit; verify absence of voltage at the fixture.
2. Note wire positions (line, load, neutral, dimming).
3. Replace with a receptacle of the same pin count and rating; maintain the gasket seal.
4. Rotate for north orientation; install photocontrol or shorting cap as the control scheme
   requires.
5. Restore power and test.

## Contactor Plus Photocontrol: a Common Mix-Up
A site with a time clock that turns the lot **off at midnight** and back **on at 5 a.m.**,
combined with individual photocontrols, works fine: the clock gives power only in its time
windows, and each photocontrol decides dusk/dawn. But if a customer complains that "half the lot
stays on all day," look for fixtures where someone installed shorting caps on a circuit that's
energized 24/7, or a contactor in HAND.

## Key Takeaways
- Know the site's control scheme: individual photocontrols, contactor/time clock, or networked.
- ANSI C136.10 = 3-pin; ANSI C136.41 = 5/7-pin with dimming contacts.
- Shorting caps keep fixtures on whenever energized — only for contactor/time-clock control.
- Match photocontrol voltage ratings; orient receptacles north.
- Use cover tests and swap tests to isolate photocontrol faults; LOTO before opening the head.
