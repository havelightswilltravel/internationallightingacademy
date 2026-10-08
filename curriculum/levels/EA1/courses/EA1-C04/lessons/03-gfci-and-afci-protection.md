---
title: GFCI & AFCI Protection
minutes: 45
video:
video_suggestion: >
  Cutaway animation of a GFCI's current transformer comparing hot and neutral current, then a
  bench demo of a GFCI receptacle tripping with a plug-in tester. Show correct LINE/LOAD
  wiring and what happens when it is reversed. Follow with an AFCI breaker installation in a
  training panel (pigtail and plug-on-neutral types) and a nuisance-trip diagnosis caused by a
  shared neutral.
---

## Two Different Protections

| Device | Protects against | Senses |
|---|---|---|
| **GFCI** — ground-fault circuit interrupter | **Shock** to people | Imbalance between ungrounded and grounded conductor current (leakage to ground) |
| **AFCI** — arc-fault circuit interrupter | **Fire** from arcing faults | Characteristic current waveforms ("signatures") produced by arcing |
| **Dual-function** | Both | Both |

A standard breaker protects the **wiring** against overloads and short circuits. It does not trip
on a few milliamps of leakage through a person or on a small arc in a damaged cord.

## How a GFCI Works

A GFCI passes the ungrounded and grounded conductors through a small **current transformer**. In a
healthy circuit, the currents are equal and opposite (Kirchhoff's current law), so their magnetic
fields cancel. If some current returns by another path — through a person to ground, for example
— the imbalance induces a signal and the device opens the circuit.

- **Class A** GFCIs (the type required for personnel protection) are designed to trip when ground
  fault current reaches about **4 to 6 mA**.
- Currents in this range can be felt but are well below what typically causes ventricular
  fibrillation; trip time shortens as fault current increases.
- A GFCI does **not** require an equipment grounding conductor to function — which is why it can
  be used as a replacement for ungrounded two-wire receptacles (406.4(D)). It also does not
  protect against a line-to-neutral shock (a person in series with the load between hot and
  neutral).

## Where GFCI Protection Is Required (Dwellings)

210.8(A) lists dwelling-unit locations requiring GFCI protection for receptacles within its scope.
In the 2023 NEC, these include (paraphrased; read the full text and conditions in your book):

- Bathrooms
- Garages and certain accessory buildings
- Outdoors
- Crawl spaces at or below grade
- Basements
- Kitchens
- Areas with sinks — receptacles within 6 ft of the top inside edge of the bowl
- Boathouses
- Bathtubs and shower stalls — receptacles within 6 ft of the outside edge
- Laundry areas
- Indoor damp and wet locations

The 2023 scope covers 125 V through 250 V receptacles supplied by single-phase branch circuits
rated 150 V or less to ground. Other parts of 210.8 cover non-dwelling occupancies, specific
appliances and outdoor outlets, and the GFCI scope has expanded in each recent edition — always
check the edition your AHJ enforces.

## How an AFCI Works

An **arc fault** is an unintended arc — a loose terminal, a nail through a cable, a cord crushed under
furniture. Arcs can ignite nearby materials without drawing enough current to trip a standard
breaker.

- **Parallel arcing:** between conductors (hot-to-neutral or hot-to-ground), e.g., damaged insulation.
- **Series arcing:** in a single conductor, e.g., a loose or broken connection; current is limited by
  the load, so standard breakers never see it.

A **combination-type AFCI** detects both parallel and series arcing, and is the type required for
dwelling branch circuits by 210.12. Electronics in the device distinguish dangerous arcs from
normal arcs (like a switch opening or a motor's brushes).

## Where AFCI Protection Is Required (Dwellings)

210.12(A) requires AFCI protection for **120 V, single-phase, 15 and 20 A branch circuits** supplying
outlets or devices in dwelling-unit **kitchens, family rooms, dining rooms, living rooms, parlors,
libraries, dens, bedrooms, sunrooms, recreation rooms, closets, hallways, laundry areas** and
similar rooms or areas. The section lists several acceptable methods — most commonly a
**combination-type AFCI circuit breaker** at the panel. Other options (such as outlet
branch-circuit AFCI devices at the first outlet) come with specific conditions on the wiring method
and length of the home run. Extensions or modifications of existing circuits also trigger AFCI
requirements (210.12(D)).

## Installing GFCI Receptacles

> **Safety:** LOTO the circuit and verify absence of voltage at every conductor in the box (live-
> dead-live) before installing. GFCI receptacles have more terminals and are bulkier than
> standard devices — check box fill before you start.

1. Identify the **LINE** (supply) conductors with a meter **before** de-energizing, or by tracing —
   don't guess. Then lock out and verify dead.
2. Connect supply to **LINE** terminals (often under a warning label). Since 2003, UL 943 has
   required reverse-wiring protection: if supply is connected to LOAD, the device won't reset.
3. Connect downstream receptacles to **LOAD** only if you want them protected. Apply the "GFCI
   Protected" labels supplied with the device to downstream outlets.
4. Restore power, press **TEST** (power should drop at the device and all LOAD outlets), then
   **RESET**.
5. Devices manufactured since mid-2015 include **self-test** functions and indicate end-of-life,
   but the manufacturer still recommends periodic manual testing (typically monthly).

## Installing AFCI and Dual-Function Breakers

1. LOTO the panel (or the service disconnect feeding it), verify absence of voltage, and treat any
   line-side terminals that remain energized as live.
2. Land the circuit's ungrounded conductor on the breaker and the circuit's **neutral on the
   breaker's neutral terminal** — not the neutral bar. Connect the breaker's **pigtail** to the
   neutral bar, or seat it on the **plug-on neutral** rail.
3. Torque terminals to the breaker's marked values.
4. Energize and press the breaker's **TEST** button.

## Testing and Nuisance Tripping

- A **plug-in receptacle tester with a GFCI button** creates an imbalance by leaking current to the
  EGC. It only works where an EGC is present, and it **cannot verify AFCI operation**. Use the
  AFCI's own test button.
- Common causes of nuisance trips:

| Cause | Typical device affected |
|---|---|
| Neutral shared between two circuits (or neutrals crossed in a box) | AFCI and GFCI |
| Neutral touching ground downstream of the device | GFCI and AFCI (ground-fault detection) |
| Multiwire branch circuit on single-pole AFCI/GFCI breakers | Both — use a 2-pole device |
| Moisture in outdoor boxes | GFCI |
| Old motor loads with high leakage | GFCI |

Never replace a tripping GFCI or AFCI with a standard device to "fix" it — find the fault.

## Key Takeaways
- GFCIs protect people from shock by sensing current imbalance (Class A trips at about 4–6 mA).
- AFCIs protect against fires from series and parallel arcing.
- Dwelling GFCI locations are in 210.8(A); AFCI locations in 210.12(A) — check your edition.
- Supply goes on LINE; LOAD protects downstream outlets, which must be labeled.
- AFCI breakers need the circuit neutral landed on the breaker.
- Plug-in testers can't verify AFCIs; nuisance trips usually mean a real wiring problem.
