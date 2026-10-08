---
title: Neutral vs Equipment Grounding Conductor
minutes: 30
video:
video_suggestion: >
  At a de-energized service panel and a downstream subpanel, a journeyman points out the
  main bonding jumper, the neutral bar and the separate equipment grounding bar. Then, on a
  shop demo board, shows how a breaker trips through the EGC during a simulated fault and
  explains why the neutral and ground are not tied together in the subpanel.
---

## Two Conductors, Two Very Different Jobs

New technicians often say "neutral" and "ground" as if they were the same thing because both
are connected to earth somewhere. They are **not** the same, and mixing them up creates shock
hazards, nuisance problems and code violations.

| | Grounded conductor ("neutral") | Equipment grounding conductor (EGC) |
|---|---|---|
| NEC term | Grounded conductor | Equipment grounding conductor |
| Typical ID | White or gray insulation (or three continuous white/gray stripes) | Green, green with yellow stripes, or bare |
| Normal current | **Yes** — it is the return path for the load | **No** — carries current only during a fault |
| Purpose | Completes the circuit back to the source | Provides a low-impedance path so the breaker trips fast and keeps metal parts near ground potential |
| Connected to the other | Only at the service (main bonding jumper) or at a separately derived system such as a transformer | Same |

## How the Neutral Works

Current flows out on the hot (ungrounded) conductor, through the load (the ballast or driver),
and back on the neutral. On a single fixture circuit, **the neutral carries the same current
as the hot**. On multiwire and three-phase circuits it carries the unbalanced and harmonic
current (previous lesson).

> **Safety:** A neutral can be carrying current at any time. If you open a neutral splice
> while the circuit is energized — even with the breaker for "your" fixture off — you can put
> yourself in series with the load and be shocked. Shared neutrals from other circuits are a
> common cause of injuries in lighting work. De-energize **all** circuits in the box, lock
> out, and verify absence of voltage on every conductor, including the neutral, before
> opening splices.

## How the EGC Works

The EGC connects every metal fixture housing, box, raceway and panel enclosure back to the
grounding system at the source. If a hot conductor rubs through its insulation and touches
a fixture housing:

1. Current flows from the hot conductor into the housing.
2. It returns through the EGC (a low-impedance path) to the service or transformer.
3. The fault current is high enough to trip the breaker quickly.
4. The housing is de-energized before someone touches it.

Without a good EGC, the housing could sit at 120 V or 277 V with nothing to trip the breaker
— waiting for a person to complete the circuit. Earth itself is **not** an effective path for
clearing faults; the soil has too much resistance to trip a breaker. That is why the NEC does
not allow the earth to serve as the only equipment grounding path.

## Bonding Only at the Service (or Separately Derived System)

At the service disconnect, the neutral bar and the grounding system are tied together by the
**main bonding jumper**. A transformer that creates a new system (a separately derived
system, for example a 480 V to 208Y/120 V dry-type transformer) has its own system bonding
jumper. **Downstream** of those points — in subpanels, junction boxes and fixtures — the
neutral and EGC must stay separate.

Why? If you bond neutral to ground in a subpanel or fixture:

- Normal neutral current splits and flows on the EGC, raceways and building steel.
- Metal parts that should be at zero volts now carry current ("objectionable current").
- GFCI and ground-fault protection can trip or fail to work properly.
- Electromagnetic interference and corrosion problems can develop.

In a subpanel you will see the neutral bar **isolated** (mounted on insulators, with the
bonding screw or strap removed) and a separate ground bar bonded to the enclosure.

## Field Practices for Lighting Work

1. **Never use the EGC as a neutral.** Some failed retrofits and "cheater" repairs land the
   driver's neutral on the green wire. The light works, and the fixture housing and conduit
   now carry normal current. This is a code violation and a shock hazard.
2. **Never connect neutral to the fixture housing.** Neutral goes to the ballast/driver white
   lead only.
3. **Keep each circuit's neutral with its own hots.** When multiple circuits share a box,
   identify which neutral belongs to which circuit (the NEC requires grouping of grounded
   conductors with their ungrounded conductors in enclosures where more than one circuit is
   present).
4. **Terminate the EGC to every fixture housing** using the fixture's green grounding screw or
   lead. A metal raceway may be an EGC if it is a type the NEC recognizes and its fittings
   are tight, but company standard is to pull a green wire in every fixture whip.
5. **Check neutral-to-ground voltage** when troubleshooting. A few volts under load is
   normal. Higher readings suggest a loose, overloaded or shared neutral. Near 0 V with the
   circuit loaded, at a location far from the panel, can indicate an illegal neutral-to-ground
   bond downstream.

## A Quick Field Test

With the circuit **loaded** and proper PPE for energized testing:

| Reading | Likely meaning |
|---|---|
| Hot–Neutral ≈ Hot–Ground, N–G 1–3 V | Normal |
| Hot–Neutral much lower than Hot–Ground, N–G high | High-resistance or open neutral, or overloaded neutral |
| Hot–Ground ≈ 0 V while Hot–Neutral is normal | Missing or open EGC — **report immediately** |
| N–G ≈ 0 V far from the panel, under heavy load | Possible downstream neutral-ground bond |

## Key Takeaways
- The neutral (grounded conductor) carries normal load current; the EGC carries current only during a fault.
- Neutral and ground are bonded only at the service or a separately derived system — never in subpanels, boxes or fixtures.
- The EGC makes breakers trip fast during a fault; earth alone cannot do this.
- Treat every neutral as energized. De-energize and verify all circuits in a box before opening splices.
- Never use the green wire as a neutral, and always ground the fixture housing.
