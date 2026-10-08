---
title: Offsets, Kicks & Rolling Offsets
minutes: 50
video:
video_suggestion: >
  A journeyman bends a 6 in offset at 30° to clear a beam flange 40 in from a box, showing the
  multiplier and shrink math on the conduit itself, then a box offset at a 4 in square box, a
  kick, and a rolling offset measured with a framing square.
---

## What an Offset Does

An **offset** is two equal bends in opposite directions that shift a conduit run to a new, parallel
plane — to go around an obstruction, move off a wall onto a beam, or enter a box. The two key
numbers are:

- **Offset depth (rise):** how far the conduit must move.
- **Distance between bends:** how far apart the two bend marks are.

The bend angle you choose determines both the distance between bends and how much the conduit
"shrinks."

## Multipliers and Shrink

The **multiplier** is the cosecant of the bend angle (rounded for field use). Multiply the offset
depth by it to get the distance between bends. **Shrink** is the length lost because the conduit
now travels at an angle; it must be accounted for when the offset must land at a specific
location.

| Bend angle | Multiplier | Shrink per inch of offset |
|---|---|---|
| 10° | 6.0 | 1/16 in |
| 22½° | 2.6 | 3/16 in |
| 30° | 2.0 | 1/4 in |
| 45° | 1.4 | 3/8 in |
| 60° | 1.2 | 1/2 in |

Choosing an angle:
- **Small angles** (10°, 22½°) make gentle, easy-pulling offsets but need lots of length.
- **30°** is the most common field choice — easy math (multiplier 2) and moderate length.
- **45° and 60°** fit in tight spaces but add more resistance to the wire pull and count heavily
  toward the 360° limit.

Remember that every offset counts toward the **360° maximum between pull points** (358.26). A
30° offset uses 60°; a 45° offset uses 90°.

## Worked Example 1 — Basic Offset

You need a **6 in offset** using **30° bends**.

- Distance between bends = 6 × 2.0 = **12 in**
- Shrink = 6 × 1/4 = **1-1/2 in**

Mark the first bend, measure 12 in, and mark the second. Bend the first mark to 30° using the
arrow, then **rotate the conduit exactly 180°** and slide it to the second mark and bend 30° again.
Lay it on the floor to confirm both bends are in the same plane, then measure the rise.

## Worked Example 2 — Offset to an Obstruction

A conduit leaves a box and must rise **6 in** to clear an obstruction. The obstruction begins
**40 in** from the end of the conduit. Use **30° bends**.

1. Distance between bends: 6 × 2 = 12 in.
2. Shrink: 6 × 1/4 = 1-1/2 in.
3. Because the conduit shrinks, add the shrink to the distance to the obstruction to find the
   mark for the bend nearest the obstruction: 40 + 1-1/2 = **41-1/2 in**.
4. Measure 12 in back toward the end for the other bend: 41-1/2 − 12 = **29-1/2 in**.
5. After bending, the offset is complete (the conduit has reached full rise) at approximately
   40 in from the end — just in time to clear the obstruction.

In practice, leave a little clearance. Many electricians add 1/2 in or so to the measured rise so
the conduit doesn't rub the obstruction.

## Worked Example 3 — Choosing a Different Angle

The same 6 in rise must fit in only 10 in of available length.

- 30°: 12 in between bends — too long.
- 45°: 6 × 1.4 = **8.4 in** (about 8-3/8 in) — fits. Shrink = 6 × 3/8 = **2-1/4 in**.

## Box Offsets

A **box offset** is a small offset (often about 1/2 in, roughly the thickness of a box's mounting
flange or knockout ring) that lets surface conduit enter a box while lying flat against the
wall. Typical method: two shallow bends (about 10°) close together. Some electricians use
the bender's handle end or a dedicated offset bender. Practice until you can make them quickly
and consistently.

## Kicks

A **kick** is a single bend of less than 90° that changes the conduit's direction, commonly used
to move the run off a wall or to angle into a piece of equipment. The bend angle sets how far the
conduit moves over a given length:

- Distance from the bend to where the conduit reaches a given depth ≈ depth × multiplier (the same
  cosecant relationship as an offset, but only one bend).

Example: a 30° kick needs to move the conduit 4 in away from the wall: the conduit will be 4 in
out about 4 × 2 = **8 in** (measured along the conduit) beyond the bend.

## Rolling Offsets

When a conduit must move both **up** (rise) and **over** (roll) at the same time, you bend a single
offset in a rotated plane rather than two separate offsets. Find the **true offset** with the
Pythagorean theorem:

**True offset = √(rise² + roll²)**

### Worked Example 4 — Rolling Offset
The conduit must rise 6 in and roll 8 in.

- True offset = √(6² + 8²) = √(36 + 64) = √100 = **10 in**
- At 30°: distance between bends = 10 × 2 = **20 in**; shrink = 10 × 1/4 = **2-1/2 in**

Bend it as an ordinary 10 in offset, then rotate the whole piece in place so it rises 6 in and
rolls 8 in. A framing square or the "3-4-5" relationship is handy for checking.

> **Safety:** When fitting offsets in place overhead, work from a properly set ladder or MEWP,
> never by standing on boxes or the top cap of a stepladder. Before strapping near existing
> boxes or equipment, confirm whether nearby circuits are energized; if you must open or work in
> an existing enclosure, apply LOTO and verify absence of voltage first.

## Checking Your Work

- Lay the offset on the floor: both straight sections should touch the floor, with no wobble.
- Measure the rise from the floor to the bottom of the raised section — within **1/8 in**.
- Both bends should have the same angle; unequal angles leave the ends out of parallel.

## Key Takeaways
- Distance between bends = offset depth × multiplier.
- Multipliers: 10° = 6, 22½° = 2.6, 30° = 2, 45° = 1.4, 60° = 1.2.
- Shrink per inch: 1/16, 3/16, 1/4, 3/8, 1/2 for those angles.
- When landing an offset at an obstruction, add the shrink to the measurement.
- Rolling offset: true offset = √(rise² + roll²), then bend as a normal offset.
- Every bend counts toward the 360° limit between pull points.
