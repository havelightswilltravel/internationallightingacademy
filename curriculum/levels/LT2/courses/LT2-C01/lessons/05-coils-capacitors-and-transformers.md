---
title: Coils, Capacitors and Transformers in Lighting Equipment
minutes: 35
video:
video_suggestion: >
  Bench session: a trainer opens a de-energized HID ballast kit, a contactor, a neon
  transformer, a 12 V landscape transformer and an LED sign power supply, and points to the
  coil, capacitor and windings in each. Then shows a capacitor being discharged and tested,
  primary and secondary voltages measured on a step-down transformer behind a guard, and an
  LED power supply that reads zero output with no load connected.
---

## Why These Three Parts Matter

Almost every system in the company's Master Troubleshooting Guide contains at least one coil,
capacitor or transformer: HID ballast kits (core and coil plus capacitor), neon transformers,
LED sign transformers and power supplies, low-voltage lighting transformers, contactor and
relay coils, and the power packs behind ceiling occupancy sensors. Understanding what each part
does explains the readings you will take and the hazards you will face.

## Coils (Inductors)

A **coil** is wire wound around an iron core. When AC flows through it, the changing magnetic
field opposes changes in current. That opposition is called **inductive reactance** and,
like resistance, is measured in ohms — but it limits current without turning much energy into
heat.

Where you find coils in lighting:

| Equipment | What the coil does |
|---|---|
| Magnetic fluorescent and HID ballast ("core and coil") | Limits lamp current after the arc strikes |
| Contactor and relay | Electromagnet that pulls contacts closed when energized |
| Transformer | Two or more coils sharing a core (below) |

**Field facts about coils:**
- A coil's DC resistance (what your meter reads on ohms, de-energized) is low — often a few ohms
  to a few hundred ohms. An **open (OL)** reading means a broken winding; a reading far lower than
  a known-good identical coil may mean shorted turns.
- Coils hum at twice line frequency; a loud, new buzz often means loose laminations or overload.
- When current through a coil is interrupted, the collapsing field produces a voltage spike.
  That is why contactor coils sometimes have suppressors, and why switching inductive loads is
  harder on contacts.
- Overheated coils smell of burnt varnish and may discolor — a strong sign of failure.

## Capacitors

A **capacitor** is two conducting plates separated by insulation. It stores electrical charge.
On AC, it passes current back and forth while opposing changes in voltage. Capacitors are
rated in **microfarads (µF)** and a **maximum voltage**.

Where you find them in lighting:

| Equipment | What the capacitor does |
|---|---|
| HID ballast kit (CWA and similar) | Works with the coil to regulate lamp current and improve power factor |
| Magnetic fluorescent ballasts | Power-factor correction (inside the can) |
| LED drivers and electronic ballasts | Smooth the DC; cause **inrush current** at turn-on |
| Some motion sensor and electronic switch circuits | Timing and power supply |

**Field facts about capacitors:**
- A capacitor can **hold a dangerous charge after power is removed**. Bleed resistors are
  meant to drain it, but they fail. Always discharge through a resistor or insulated tool and
  verify 0 V before handling.
- Test de-energized on the meter's capacitance (µF) range, with at least one lead disconnected.
  Compare to the label tolerance (often ±6% for HID capacitors).
- Bulged tops, split cases and leaks mean replace.
- Replace with the **same µF** and **equal or higher voltage** rating; never substitute a
  different µF value on an HID ballast — it changes lamp wattage.

## Capacitors and Coils Together: Power Factor

In Lesson 4 you met **power factor**. Coils make current lag voltage; capacitors make current
lead voltage. A ballast designer pairs them so the fixture draws current closer to in-phase with
voltage. When an HID capacitor fails open, the lamp may not start or run dim, and the
fixture's current and power factor change — another reason the capacitor is one of the first
parts checked in the company HID procedure.

## Transformers

A **transformer** has a **primary** winding (connected to the supply) and a **secondary**
winding (connected to the load) on a shared iron core. The voltage ratio follows the turns
ratio:

- More turns on the secondary → voltage stepped **up** (neon transformers, HID ignition circuits).
- Fewer turns on the secondary → voltage stepped **down** (12 V landscape and MR16 transformers,
  24 V control transformers in power packs and contactor panels).

| Lighting transformer | Typical primary | Typical secondary | Notes |
|---|---|---|---|
| Low-voltage halogen/landscape | 120 V | 12–15 V | Secondary current is high — wire size and connections matter |
| Neon sign transformer | 120 or 277 V | several kV | Extremely hazardous secondary; LT3-C09 |
| LED sign power supply ("transformer") | 120–277 V | 12 or 24 V DC | Electronic; may shut off output with no load |
| Sensor power pack | 120–277 V | 24 V DC Class 2 | Also contains a relay to switch the lights |
| Control transformer | 208/240/480 V | 24 or 120 V | Feeds contactor coils and controls |

Power in ≈ power out (minus losses). Stepping voltage down 10:1 raises the available current
about 10 times — so a 12 V secondary connection that looks small can carry a lot of current
and overheat if loose.

**Open-circuit voltage.** With no load connected, a transformer or ballast secondary typically
reads **higher** than it does under load. The HID socket-voltage check (LT2-C04) relies on this:
a healthy ballast produces its rated open-circuit voltage at an empty socket. On the other hand,
many **electronic** power supplies (LED sign supplies, some low-voltage drivers) have a
protective cut-out and show **no output at all** with no load, or with a poor secondary
connection. Before condemning one, check and re-check the secondary connections and test with
the load connected, as the company LED procedure warns.

## Primary vs Secondary Troubleshooting Logic

1. Measure **primary** (line) voltage. None → the problem is upstream.
2. Measure **secondary** voltage under the correct conditions (with load for electronic supplies).
3. Primary good, secondary missing → check secondary connections, fuses/breakers on the
   secondary, then the transformer itself.
4. Primary and secondary good → the problem is in the wiring or loads beyond the transformer.

> **Safety:** Primary-side measurements on 120–480 V and any measurement on neon secondaries
> are energized work — qualified persons only, with PPE per the employer's NFPA 70E program and a
> meter rated for the voltage (neon secondary voltages exceed ordinary meter ratings; never probe
> them with a DMM). Lock out and verify absence of voltage before touching windings, terminals or
> capacitors, and discharge capacitors before handling.

## Key Takeaways
- Coils limit AC current and act as electromagnets; an open winding reads OL de-energized.
- Capacitors store charge — discharge and verify 0 V, then test on the µF range against the label.
- Replace HID capacitors with the same µF and equal or higher voltage rating.
- Transformers change voltage by turns ratio; step-down secondaries carry high current.
- Ballasts read higher open-circuit voltage than loaded voltage; many electronic supplies read zero without a load.
- Troubleshoot primary first, then secondary, then the load.
