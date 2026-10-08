---
title: Contactor Anatomy, Holding Types & Coil Voltages
minutes: 35
video:
video_suggestion: >
  On a bench, with a new and a worn-out lighting contactor side by side, the trainer removes the
  cover and arc chutes and points out the coil, armature, fixed and moving contacts, auxiliary
  contacts and terminal markings. Close-ups compare clean silver contacts with pitted, burned
  ones, then compare the nameplates of an electrically held and a mechanically held contactor.
---

## Where You Will Find Contactors
LT3-C03 introduced contactors as the device that lets a small control signal switch large lighting
loads. This course goes deeper, because contactors are behind a large share of "whole area out" and
"lights stay on all day" calls. You will find lighting contactors:

- In a gray enclosure mounted next to the lighting panelboard in an electrical room
- Inside a lighting control panel, mounted on the same backplane as relays and a time clock
- On building exteriors or on a pole, in a NEMA 3R enclosure, for parking-lot lighting
- In retail stores, often grouped by area (sales floor, signage, parking, cases)

A contactor is not a breaker. It provides **no overcurrent protection**. It only opens and closes
circuits on command. The circuits it switches are still protected by breakers in the panelboard.

## Parts of a Contactor
| Part | What it does | How it fails |
|---|---|---|
| **Coil** | Electromagnet. When energized it pulls the armature in and closes the contacts | Opens (burned winding), shorts, overheats from wrong voltage or low voltage chatter |
| **Armature / plunger** | Moving iron piece that carries the moving contacts | Sticks from dirt or rust; loud buzz when it does not seat fully |
| **Main contacts (poles)** | Fixed and moving contact pairs that switch each branch circuit. Labeled line (L1, L2…) and load (T1, T2…) | Pitting, burning, welding closed, one pole open |
| **Arc chutes / arc hood** | Insulating chambers around the contacts that cool and break the arc when contacts open | Cracked, carbon-tracked, missing — must never be left off |
| **Auxiliary contacts** | Small extra contacts (NO or NC) that change state with the main contacts. Used for pilot lights, status to a building system, or holding circuits | Loose add-on block, burned small contact, giving a false status |
| **Terminals** | Screw or box-lug connections for line, load and coil wires | Loose screws overheat; discolored insulation is a warning |
| **Enclosure** | Protects people from live parts and the contactor from the environment (NEMA 1 indoor, NEMA 3R outdoor) | Water entry, rust, missing knockouts, damaged door |
| **Control devices** | HOA switch, pilot light, fuse or small breaker for control power, sometimes a terminal strip | Switch left in HAND, blown control fuse |

> **Safety:** A contactor enclosure can hold several voltages at once — 277/480 V lighting
> circuits plus a 120 V or 24 V control circuit fed from somewhere else. Opening the load breakers
> does not make the enclosure safe. Identify every source before you touch anything.

## Electrically Held vs Mechanically Held
| | Electrically held | Mechanically held (latching) |
|---|---|---|
| How it stays closed | Coil must stay energized | A latch holds it; the coil only needs a short pulse |
| On loss of control power | Contacts open — lights go off | Contacts stay where they were |
| Control wiring | Two wires (hot and return) through a maintained contact | Usually three wires: common, ON (latch) and OFF (unlatch), through momentary contacts or a control module |
| Sound when on | Steady low hum | Silent after it latches |
| Typical uses | Most site and area lighting | Large lighting loads, panels that must ride through control outages, energy-saving installs |

**Why it matters in troubleshooting:** On a mechanically held contactor, having no coil voltage
is normal while the lights are on. Do not condemn a latching coil for showing 0 V at rest. You test
it by watching it change state when an ON or OFF pulse is sent.

## Coil Voltages
The coil voltage is printed on the coil itself and on the nameplate. Common lighting coil voltages:

| Coil voltage | Where it usually comes from |
|---|---|
| **24 V AC or DC** | A control transformer or a lighting control system / BMS output |
| **120 V AC** | A dedicated control circuit breaker, often through a time clock and photocell |
| **277 V AC** | Tapped directly from a 277 V lighting circuit in the same enclosure |

A coil fed the wrong voltage will either not pull in (too low) or burn up quickly (too high). A coil
fed low voltage often **chatters** — buzzes and bounces — which burns the contacts.

## Normally Open, Normally Closed, and Coils That Work "Backwards"
Contacts are described by their state with the coil **de-energized**:

- **Normally open (NO):** open when the coil is off; close when the coil is energized. This is
  the usual lighting arrangement: coil on = lights on.
- **Normally closed (NC):** closed when the coil is off; open when the coil is energized.

Some installations use NC contacts on purpose so that the lights come **on when control power is
lost**. Examples include emergency or night-light circuits held off by a control signal during normal
times, and some fail-safe parking-lot arrangements. The company procedure warns about this: *some
coils engage when there is an absence of power.* If you measure no coil voltage and the lights are
on, read the nameplate and the contact markings before deciding something is broken.

## Reading the Nameplate
Before you order anything, photograph and record:

1. Manufacturer and full catalog number
2. Holding type (electrically or mechanically held)
3. Number of poles and NO/NC arrangement
4. Contact rating in amps, and the load types it is rated for (ballast, tungsten, electronic/LED)
5. Maximum contact voltage (for example 600 V)
6. Coil voltage and whether it is AC or DC
7. Auxiliary contacts present and their arrangement
8. Enclosure NEMA type

Many manufacturers sell **replacement coils, contact kits and arc hoods** for the same frame.
Those parts must match the exact frame and catalog number — that is why the full number matters.

## Key Takeaways
- A contactor switches circuits; it does not protect them. Breakers still do that.
- Know the parts: coil, armature, main contacts, arc chutes, auxiliary contacts, terminals and enclosure.
- Electrically held contactors drop out on loss of control power; mechanically held ones stay put.
- Coils are commonly 24 V, 120 V or 277 V — the nameplate is the only reliable source.
- NC contacts and fail-safe designs mean "no coil voltage" does not always mean "lights off."
- Record the full catalog number, coil voltage, poles and load rating before ordering parts.
