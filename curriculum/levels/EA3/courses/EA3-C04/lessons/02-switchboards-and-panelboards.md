---
title: Switchboards & Panelboards
minutes: 45
video:
video_suggestion: >
  Tour of a main electrical room: a 2000 A switchboard with main and distribution sections,
  a 480Y/277 V lighting panel and a 208Y/120 V panel fed by a transformer; instructor points
  out nameplates, ratings, bus arrangement, labels and directories.
---

## Distribution Equipment Overview

| Equipment | Typical description |
|---|---|
| **Switchgear** | Heavy-duty, often with draw-out power circuit breakers in individual compartments; higher ratings and maintenance access |
| **Switchboard** | Large free-standing assembly with main and feeder devices; typically front-accessible or front-and-rear accessible |
| **Panelboard** | Single panel in a cabinet, accessible only from the front, holding branch-circuit and feeder breakers |
| **Motor control center (MCC)** | Vertical sections with plug-in starter "buckets" |

Article 408 (2023 NEC) covers switchboards, switchgear and panelboards. The equipment is
**listed** as an assembly — field modifications, using non-listed breakers, or drilling into
bus areas can void the listing.

## Ratings You Must Read

Every switchboard and panelboard has a label showing:

- **Voltage and system** (e.g., 480Y/277 V, 3φ, 4W)
- **Bus ampere rating** (e.g., 225 A)
- **Main type**: main breaker (MB) or main lugs only (MLO)
- **Short-circuit current rating (SCCR)** or interrupting rating of the devices — must be
  at least the available fault current at that point (110.9, 110.10)
- **Listed breaker types** that may be installed
- **Series rating** information, if the equipment relies on a tested combination of upstream
  and downstream devices (240.86) — which must be marked and cannot be swapped for other breakers

## Panelboard Overcurrent Protection

Every panelboard must be protected by an overcurrent device with a rating **not greater than the
panelboard rating** (408.36). That device may be a main breaker in the panel or the feeder
breaker upstream (for an MLO panel).

**Example:** A 225 A MLO panelboard fed from a 200 A feeder breaker — compliant.
A 100 A MLO panel fed by a 125 A breaker — **not compliant**; the panel needs a 100 A main
or the feeder breaker must be reduced (with conductors checked too).

Back-fed breakers used as a main must be secured with an additional fastener that requires
more than a pull to release (408.36(D)), and plug-in breakers marked "Line" and "Load" may not
be back-fed.

## Phase Arrangement and Identification

408.3(E) requires the phase arrangement on three-phase buses to be **A, B, C** from front to
back, top to bottom, or left to right, as viewed from the front of the equipment. On a high-leg
delta system, the **B phase** must be the high leg (except in metering equipment as noted in
Lesson 1).

Common (but not NEC-mandated) conductor color practice:

| System | A | B | C | Neutral |
|---|---|---|---|---|
| 208Y/120 V | Black | Red | Blue | White |
| 480Y/277 V | Brown | Orange | Yellow | Gray |
| 240/120 V high-leg | Black | **Orange** (high leg required identification) | Red or Blue | White |

The NEC requires the ungrounded conductors' identification method to be posted at each
branch-circuit panelboard where more than one voltage system exists (210.5(C)). Brown-orange-
yellow has a potential conflict: orange is required for a high leg — so a building with both a
high-leg delta and 480Y/277 V must document clearly.

## Panel Schedules and Balancing

Every circuit must be legibly identified in a **circuit directory** describing its specific
purpose clearly enough to distinguish it from all others (408.4(A)) — "Lights" or "Spare"
alone is not acceptable for an in-use circuit; "Rm 214 receptacles" is.

When adding circuits, balance load across phases. In a typical three-phase panelboard,
breaker positions 1-2 are on A, 3-4 on B, 5-6 on C, and the pattern repeats.

**Example:** A panel's phase loads are A = 18 kVA, B = 12 kVA, C = 15 kVA. A new 3 kVA
single-pole circuit should go on **B**, bringing the phases closer to balance (18, 15, 15).

## Spaces, Covers and Dead Fronts

- Unused openings for breakers must be closed with **filler plates** identified for the
  panel (408.7) — open slots expose live bus.
- Covers and dead fronts must be reinstalled with all screws.
- Conductors must be routed neatly so they do not cover the bus or interfere with the dead front.
- 312.8 and the listing restrict splices, taps and feed-through conductors in panelboard and
  overcurrent-device enclosures — keep the wire bending and gutter space required.

## Arc-Flash Labels and Available Fault Current

- 110.16 requires arc-flash warning labels on equipment likely to be examined, adjusted,
  serviced or maintained while energized — switchboards, panelboards, industrial control panels,
  meter socket enclosures and motor control centers in other than dwelling units.
- 110.24 requires the **available fault current** and its calculation date on service equipment
  in other than dwellings. When modifications change the fault current, the marking must be
  updated.
- NFPA 70E labels (EA3-C05) carry the details workers need for PPE selection.

> **Safety:** Removing a panelboard dead front exposes energized bus and terminals. That act is
> itself energized work: perform the shock and arc-flash risk assessment, wear the PPE on the
> label, and keep unqualified persons outside the limited approach boundary. If the panel can be
> de-energized for the work, do that instead.

## Key Takeaways
- Know the differences between switchgear, switchboards, panelboards and MCCs.
- Read bus rating, voltage, MB/MLO, SCCR and listed breakers before adding anything.
- Panelboard OCPD must not exceed the panelboard rating (408.36).
- Phase arrangement A-B-C front-to-back, top-to-bottom, left-to-right; high leg is B.
- Directories must clearly identify every circuit; balance load across phases.
- Fill unused openings; removing a dead front is energized work.
