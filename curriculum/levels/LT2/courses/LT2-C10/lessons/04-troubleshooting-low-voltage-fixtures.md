---
title: Troubleshooting Low-Voltage Fixtures
minutes: 35
video:
video_suggestion: >
  A tech troubleshoots a dark recessed MR16 downlight with a remote electronic transformer:
  checks the lamp with an ohmmeter, inspects the GU5.3 socket for burned pins, has a qualified
  coworker confirm line voltage at the transformer primary, locks out, checks continuity from
  socket to transformer secondary, then replaces the transformer and verifies 12 V output with
  the lamp installed.
---

## The Company Procedure

The Master Troubleshooting Guide gives this procedure for low-voltage lighting systems:

1. Check lamp continuity.
2. Check the socket for burns, breakage, excessive wear or connection issues.
3. Test line voltage across the hot and neutral.
4. Test continuity between the socket and the transformer.
5. If you have a good lamp, a good socket, continuity, and line voltage, replace the transformer
   or the fixture.
6. If the problem is intermittent, there could be connection issues inside the fixture. If no
   connection issues can be found and no parts were replaced to get the fixture working again,
   replace the fixture.

Components: lamp, socket, fixture, transformer, low-voltage cable/conductors, wire.

The expanded procedure below keeps this order and adds lockout, verification and the scope rule
for energized testing. **Step 3 (line voltage) is an energized test.** At the lighting levels it is
done by a qualified person, or replaced with indirect checks described below.

## Step-by-Step Procedure

### Stage 1 — Size up

1. **Confirm the complaint.** One fixture or many? Constant or intermittent? Recently relamped
   with LED? On a dimmer?
2. **Look for a pattern.** Several fixtures out on one remote transformer points to the
   transformer, its primary feed or its secondary run. One fixture out points to that lamp,
   socket or lead.
3. **Check controls**: switch, dimmer, timer or photocell (landscape), and the breaker position
   (visible from outside the dead front).

### Stage 2 — Lamp and socket (company steps 1–2)

4. Turn the fixture off and **let the lamp cool**.
5. **Check lamp continuity**: meter on ohms or continuity, probe the two pins (or terminals on a
   PAR36). Halogen: a low reading (a few ohms or less) = filament intact; open = burned out. LED
   lamps cannot be checked this way (electronics inside) — substitute a known good lamp of the
   same type.
6. **Inspect the socket**: look for blackened or melted ceramic, burned or loose spring contacts,
   pitted pins, cracked bodies and brittle leads. Bi-pin sockets wear out from heat and repeated
   relamping. A burned socket also ruins every new lamp put in it — replace the socket with an
   exact-match part (base type, temperature rating, lead length) or replace the fixture.

### Stage 3 — Supply (company step 3)

7. **Confirm line voltage reaches the transformer primary.**
   - **Qualified person** (per the company's NFPA 70E program, with required PPE): measure
     hot-to-neutral at the transformer primary or the fixture's supply connection.
   - **Non-qualified technician**: use indirect evidence — other loads on the same circuit work,
     the breaker is on, the switch is on — then lock out and continue with de-energized checks. If
     you cannot establish that the supply is present, write it up.
   - Never rely on a non-contact tester to prove a circuit is dead.

### Stage 4 — Continuity socket to transformer (company step 4)

8. **Lock out and tag out** the circuit feeding the transformer. **Verify absence of voltage**
   at the primary connections with a tested meter (live-dead-live).
9. Disconnect the secondary leads at the transformer (label them).
10. Check **continuity from each socket contact to the transformer secondary lead** it should
    connect to. Wiggle the leads while testing — heat makes low-voltage leads brittle and they
    break inside the insulation. Check the cable run, terminal blocks and splices on remote
    systems.
11. Check there is **no continuity between the two secondary conductors** (with the lamp
    removed) — a reading here means a short.

### Stage 5 — Decide and repair (company step 5)

12. Good lamp + good socket + continuity + line voltage present = the **transformer** is the
    likely failure. Replace the transformer (matched type, VA, min/max load, dimming, Class 2 if
    applicable, listed for that fixture) or replace the fixture if the transformer is integral and
    not sold as a part.
13. Before replacing a thermally protected transformer that "comes and goes," check for
    **overload** (total watts vs VA) and **heat** (insulation packed around it, enclosed space).
    The transformer may be shutting itself off correctly.
14. Restore power and **verify**: lamp lights; a qualified person may measure secondary voltage at
    the socket with the lamp installed (electronic transformers often read oddly with no load or
    on a standard meter — use a true-RMS meter and test under load).

### Stage 6 — Intermittent problems (company step 6)

15. Intermittent operation usually means a **connection issue inside the fixture**: loose socket
    contacts, a cracked lead, a loose push-in connector, a worn cable clip. Lock out, inspect and
    wiggle-test every connection.
16. Also consider thermal shutdown (overload or heat) and LED/transformer incompatibility.
17. If **no connection issue can be found and no part was replaced** to make it work, replace the
    fixture — an intermittent fault you cannot find will return.

> **Safety:** Primary connections are line voltage. Lock out, tag out and verify dead before
> touching any primary conductor or opening a transformer enclosure. Lamps and sockets run very
> hot; let them cool. On landscape systems, the transformer plugs into a GFCI receptacle — unplug
> it (and keep the plug in your control) before working on the transformer connections.

## Symptom Guide

| Symptom | Likely cause |
|---|---|
| One lamp out | Lamp, socket, lead |
| All lamps on one transformer out | Transformer, its primary supply, thermal shutdown, main secondary connection |
| Lights cycle off and on | Thermal protector: overload or heat; LED below minimum load |
| Lamps dim, yellow, far lamps worse | Voltage drop: cable size, length, connections |
| New LED lamps flicker | Transformer/dimmer compatibility, minimum load |
| Burned socket, new lamps fail fast | Replace socket; check for overwattage lamp |
| Landscape zone dead after yard work | Cut cable, damaged connector |

## When to Write It Up

- No line voltage at the transformer and the cause is upstream (breaker trips, open branch
  circuit, damaged junction box).
- A remote transformer is inaccessible (sealed above a hard ceiling) — accessibility must be
  corrected.
- Heat damage to the branch-circuit wiring or the box.
- Low-voltage and line-voltage conductors improperly mixed, or a non-Class 2 secondary wired with
  Class 2 methods.

## Key Takeaways
- Follow the company order: lamp continuity → socket → line voltage → continuity socket-to-transformer → replace transformer or fixture → intermittent connection checks.
- Line-voltage measurement is an energized test for qualified persons; others use indirect evidence, then lock out and test de-energized.
- Check overload and heat before condemning a transformer that cycles.
- Wiggle-test leads during continuity checks; heat-brittle leads are a common hidden fault.
- Replace the fixture when an intermittent fault cannot be found and no part fixed it.
