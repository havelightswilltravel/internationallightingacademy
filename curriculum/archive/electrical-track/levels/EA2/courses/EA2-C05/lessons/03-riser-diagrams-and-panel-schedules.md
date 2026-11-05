---
title: Riser Diagrams & Panel Schedules
minutes: 45
video:
video_suggestion: >
  Instructor compares a one-line and a riser diagram for the same three-story building,
  highlighting how the riser shows floors, electrical closets and vertical feeder routes. Then
  fills in a blank panel schedule from a power plan, balancing loads across phases A, B and C and
  calculating the panel's phase currents.
---

## Riser Diagrams vs. One-Lines

A **riser diagram** shows the building's vertical organization — which equipment is on which floor
or in which electrical room, and how feeders rise between them. A one-line shows electrical
relationships; a riser adds the **physical** dimension.

| Feature | One-line | Riser |
|---|---|---|
| Shows electrical hierarchy | Yes | Yes |
| Shows floors/rooms | No | Yes |
| Shows OCPD ratings | Yes (detailed) | Sometimes |
| Used for | Protection, LOTO, ratings | Planning feeder routes, sleeves, closets, sequencing |

Riser diagrams are also common for **systems**: fire alarm risers (control panel, NAC panels,
devices per floor), telecommunications risers (MDF/IDF rooms and backbone cabling), and security.

### Using a Riser on Site
- Determine where sleeves and core drills are needed between floors (coordinate firestopping).
- Plan the sequence for setting panels and pulling feeders floor-by-floor.
- Identify which electrical closet each panel occupies and check working space early.

## Working Space (110.26) — Check It From the Drawings

Before equipment is set, verify on the enlarged electrical room plans that each panel or
switchboard has the required **working space**: depth based on voltage to ground and what is
opposite the equipment, width of at least 30 in. (or the equipment width if greater), and
headroom. Ducts, pipes and storage don't belong in the dedicated electrical space above and in
front of panelboards. Catching a conflict on paper is far cheaper than moving a panel.

## Panel Schedules

A **panel schedule** lists every circuit in a panelboard. Typical header information:
- Panel name, location, voltage (e.g., 208Y/120 V, 3φ, 4W), bus rating, main type (MCB/MLO), AIC
  rating, mounting (surface/flush), fed from
- Circuit number, description, breaker poles and trip, load in VA per phase, and notes (GFCI,
  AFCI, shunt trip, lock-on, spare, space)

### Circuit Numbering and Phases
In a standard three-phase panelboard, odd circuits are on the left and even on the right. Phases
repeat every two rows:

| Circuits | Phase |
|---|---|
| 1, 2 | A |
| 3, 4 | B |
| 5, 6 | C |
| 7, 8 | A |
| … | … |

A 2-pole breaker at circuits 1-3 connects to phases A and B; a 3-pole breaker at 13-15-17 connects
to A, B and C.

## Worked Example — Panel Load and Balance

Panel LP-1A, 208Y/120 V, 3φ, 4W, 225 A bus. Connected loads from the schedule:

| Phase | Connected load (VA) |
|---|---|
| A | 12,400 |
| B | 11,800 |
| C | 13,100 |
| **Total** | **37,300** |

**Average three-phase current:** 37,300 ÷ (1.732 × 208) = 37,300 ÷ 360.3 ≈ **103.5 A**

**Heaviest phase current:** Phase C, 13,100 VA ÷ 120 V ≈ **109.2 A** (single-phase loads are
line-to-neutral at 120 V; for 208 V loads the VA is split between the two phases they connect to).

**Imbalance:** (13,100 − 11,800) ÷ 37,300 ≈ 3.5% of the total — reasonably balanced. Many engineers
aim to keep phases within about 10–15% of each other. When adding circuits in the field, add them to
the lightest phase and update the schedule.

> **Note:** Connected load on a schedule is not the same as the NEC calculated load. Demand factors,
> continuous-load multipliers and other adjustments are applied in a load calculation (EA3 and EA4).

## Updating the Schedule — Your Responsibility

Accurate directories are required by the NEC: every circuit must be legibly identified as to its
clear, evident and specific purpose (408.4(A)), and spares must be identified. On the job:
- Mark changes on the field set of drawings as they happen
- Update the typed directory before final inspection
- Label spares as "SPARE" and spaces as "SPACE"
- Do not use vague descriptions that could change with occupancy (such as "Bob's office")

> **Safety:** An accurate panel directory is a life-safety document — the next worker will rely on
> it for lockout. Even so, always verify absence of voltage at the point of work after locking out;
> never trust a directory alone.

## Common Field Questions You Can Answer From Schedules

- *What breaker do I need for this new circuit?* — Check the schedule for spares/spaces and the
  bus and main ratings.
- *Is there room on the bus?* — Compare calculated loads with the main rating (ask the foreman to
  review the engineer's load calc).
- *What's the AIC rating I need for a replacement breaker?* — Use the panel's rating and the
  available fault current on the one-line.
- *Which circuits need GFCI, AFCI, or shunt-trip breakers?* — See the notes column.

## Key Takeaways
- A riser diagram shows equipment by floor/room and vertical feeder routes; a one-line shows
  electrical hierarchy and protection.
- Check working space for each piece of equipment on the enlarged plans before it is set.
- Three-phase panel circuits rotate A-B-C every two positions; odd on the left, even on the right.
- Calculate phase loads and current from the schedule and keep phases balanced.
- Keep panel directories accurate and specific — they are relied on for lockout.
