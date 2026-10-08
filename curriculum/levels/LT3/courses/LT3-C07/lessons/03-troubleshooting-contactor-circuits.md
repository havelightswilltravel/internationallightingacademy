---
title: Troubleshooting a Contactor Circuit Step by Step
minutes: 40
video:
video_suggestion: >
  A qualified trainer in the arc-rated PPE required by the company's NFPA 70E assessment
  troubleshoots a parking-lot contactor that will not turn the lights on. The video follows each
  step on screen: line-side voltage, coil voltage with the controls engaged, load terminals, then
  a close-up of a burned terminal and the write-up on the service order.
---

## Before You Open the Door
A contactor call usually arrives as "parking lot dark," "sales floor won't come on," or "lights on
all day." Gather facts first:

1. Which areas are affected? One zone, several, or everything on the panel?
2. When did it start, and did anything happen (storm, power outage, remodel, new schedule)?
3. Is there a monitoring service or BMS? If yes, they may already know the zone status.
4. Find the panel schedule, lighting control diagram, or any labels in the enclosure.
5. Look at the outside of the enclosure: HOA position, pilot light, smell of burning, heat, rust,
   water stains.

> **Safety:** Measuring voltage inside an energized contactor enclosure is **energized diagnostic
> work**. Only a person qualified under the employer's NFPA 70E program, wearing the PPE that
> program requires, may do it. If you are not qualified, do the visual and HOA checks, then write
> it up for a qualified tech or electrician. Use a CAT III or CAT IV meter rated for the voltage,
> and prove it on a known live source before and after testing.

## The Company Procedure in Plain Step Order
The company procedure checks three things in order: **line side, coil, load side.**

### Step 1 — Verify line-side voltage
Measure at the line terminals (L1, L2, L3…) of each pole: phase to neutral for 120 V or 277 V
circuits, phase to phase for 208 V or 480 V circuits.

- **No line voltage on a pole** — the problem is upstream: a tripped or failed breaker, or a feeder
  problem. Check the panelboard breakers from the outside. If a breaker is tripped, do not just reset
  it repeatedly — a trip means a fault may exist. Write it up if it trips again.
- **Line voltage on all poles** — go to step 2.

### Step 2 — Verify coil voltage while the controls are engaged
"Controls engaged" means the controls are calling for the lights: HOA in HAND, or in AUTO with the
photocell covered, the clock in an ON period, or the monitoring service commanding the zone on.
Measure across the two coil terminals (often marked A1 and A2).

| Coil voltage | Contactor state | What it means |
|---|---|---|
| Correct voltage | Pulled in | Coil good — go to step 3 |
| Correct voltage | Not pulled in, or buzzing | Coil open/burned or armature jammed — write up for replacement |
| No voltage, HAND | Not pulled in | Control fuse/breaker, HOA switch or control wiring problem |
| No voltage, AUTO only | Not pulled in | Automatic control device or BMS output problem |
| No voltage | Pulled in, lights on | Check for NC contacts or a fail-safe design — some coils engage on absence of power |
| Low voltage | Chattering | Weak control transformer, undersized wiring or loose connection — chattering burns contacts |

For a **mechanically held** contactor, check for a short pulse on the ON or OFF coil terminal when
the control changes state rather than a steady voltage.

### Step 3 — Verify voltage on all load terminals
With the coil energized and the contactor closed, you **should have voltage on every load terminal**
(T1, T2, T3…) that matches its line terminal.

- **Line voltage in, but no voltage out on a closed pole** — the contact is burned or open. The company
  procedure says: *write it up to have an electrician replace the contactor.*
- **Voltage on all load terminals but lights still off** — the contactor is doing its job. The problem
  is downstream in the branch circuit or the fixtures. Move your troubleshooting to the field.
- **Voltage on load terminals with the contactor open** — contacts welded closed, or a back-feed from
  another source. Treat this as dangerous and write it up immediately.

### Step 4 — Check connections and wiring condition
Look for **burned or overheated wiring**: darkened or brittle insulation, melted wire nuts, discolored
terminals, a hot or acrid smell. A loose terminal makes heat, and heat makes the connection looser.
**Note every wiring need on the service order** — even if it is not causing today's problem.

> **Safety:** Do not tighten, move or tug on conductors in an energized enclosure. If a connection
> needs work, it is done under LOTO: open and lock every source (load breakers and control power),
> then verify absence of voltage on every terminal using live-dead-live before anyone touches it.

### Step 5 — Rebuild or replace? Ask an electrician
The company procedure notes that **contactors can often be rebuilt** with a new coil or contact kit.
Before writing up a rebuild or a coil replacement, **check with an electrician**. They will consider:

- Is the frame still made, and are kits available for the exact catalog number?
- Is the enclosure or wiring heat-damaged enough that a whole new assembly is better?
- Are the contacts rated for the LED load now connected? Many older contactors were sized for
  incandescent or magnetic ballasts.
- Cost and downtime of a kit versus a complete new contactor.

## Common Faults and What They Look Like
| Symptom | Likely cause |
|---|---|
| Lights on all day in AUTO, off in OFF | Photocell failed on, clock override, BMS schedule — control path |
| Lights stay on even in OFF | Welded contacts or a second feed |
| One section dark out of several | One open pole, one tripped breaker |
| Loud buzz from enclosure | Low coil voltage, dirty armature face, broken shading coil |
| Contactor works then drops out after a few minutes | Overheating coil, intermittent control device |
| Lights flicker on and off at dusk | Photocell seeing the lights it controls, or coil chattering |

## Key Takeaways
- Follow the order: line side, coil with controls engaged, load side, then wiring condition.
- Line voltage in plus coil voltage should give load voltage on every pole; if not, write it up.
- "No coil voltage" can be normal for NC or fail-safe designs and latching contactors.
- Energized testing is for qualified persons only; all repairs are done under LOTO with live-dead-live.
- Record burned or overheated wiring on the service order.
- Check with an electrician before writing up a rebuild or coil replacement.
