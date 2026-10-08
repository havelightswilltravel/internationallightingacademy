---
title: Why We Ground and Bond — The Fault-Current Path
minutes: 45
video:
video_suggestion: >
  Animated or whiteboard walkthrough of a ground fault in a metal luminaire: trace fault current
  from the faulted conductor through the luminaire housing, EMT and EGC back to the service
  neutral and transformer, with the breaker tripping. Then repeat the scenario with a broken EGC
  and a ground rod as the only path, showing that the breaker never trips and the housing stays
  energized.
---

## Two Different Jobs

New apprentices often use "grounding" and "bonding" as if they meant the same thing. The NEC
treats them as separate functions, and getting them confused is behind many shock incidents and
failed inspections. (In the 2023 NEC, most definitions are located in Article 100; Article 250
contains the grounding and bonding rules.)

| Term | Plain-language meaning |
|---|---|
| **Grounded** | Connected to earth or to a conductive body that extends the earth connection |
| **Grounded conductor** | A system conductor intentionally grounded — usually the neutral (white or gray) |
| **Bonded / bonding** | Connected together to establish electrical continuity and conductivity |
| **Equipment grounding conductor (EGC)** | The conductive path(s) that connect normally non-current-carrying metal parts of equipment together and to the system grounded conductor and/or the grounding electrode conductor |
| **Grounding electrode** | A conductive object that makes a direct connection to earth (rod, water pipe, concrete-encased electrode, etc.) |
| **Grounding electrode conductor (GEC)** | The conductor connecting the system grounded conductor or equipment to the grounding electrode system |
| **Main bonding jumper** | The connection at the service between the grounded conductor and the EGC |
| **Ground fault** | An unintentional connection between an ungrounded conductor and metal parts, enclosures, raceways or earth |
| **Effective ground-fault current path** | An intentionally constructed, low-impedance path designed to carry fault current back to the source so the overcurrent device operates |

## What Grounding (to Earth) Does

Section 250.4(A) lists the performance goals for grounded systems. Paraphrased, connecting the
electrical system to earth is intended to:
- **Limit voltage** imposed by lightning, line surges, or unintentional contact with higher-voltage lines
- **Stabilize the system voltage** to earth during normal operation

Connecting to earth does **not** clear faults. The earth is a poor conductor compared with copper,
and the NEC specifically says the earth is not to be considered an effective ground-fault current path.

## What Bonding Does

Bonding all the metal parts together — and back to the source through the EGC and main bonding
jumper — does two things:
1. **Keeps metal parts at the same potential**, so a person touching two pieces of metal is not
   bridging a voltage difference
2. **Creates the low-impedance fault path** that lets enough current flow to trip the breaker or
   blow the fuse quickly

## Following the Fault Current

Imagine a 120 V branch circuit feeding a metal luminaire. The hot conductor's insulation is
damaged and touches the housing.

**With a good EGC path:** Fault current flows from the housing → luminaire whip → EMT or wire-type
EGC → panelboard equipment grounding bus → feeder EGC → service equipment → **main bonding jumper**
→ service neutral → utility transformer winding → back out the hot conductor. This is a complete,
low-impedance circuit.

**Worked example:** Assume the total impedance of the fault loop is 0.2 Ω.
I_fault = 120 V ÷ 0.2 Ω = **600 A**. A 20 A breaker sees 30 times its rating and trips almost
instantly. The housing is energized for only a fraction of a second.

**With the EGC broken and only a ground rod:** Now the only path is through the earth. Suppose the
luminaire's local rod has 25 Ω resistance to earth and the service electrode adds a few more ohms.
I_fault ≈ 120 V ÷ 25 Ω = **4.8 A** or less. The 20 A breaker **never trips**. The housing stays
energized at a dangerous voltage indefinitely, waiting for someone to touch it.

> **Safety:** A ground rod at a piece of equipment is never a substitute for an equipment grounding
> conductor. Every circuit needs a continuous EGC back to the source. If you find a missing or
> broken EGC, report it — do not "fix" it by driving a rod.

## Why the Main Bonding Jumper Matters

The connection between the neutral and the EGC system is made **at the service** (and at the
source of a separately derived system such as a transformer). That single point is where fault
current leaves the EGC system and returns to the source. Without it, a ground fault on the load
side has no low-impedance return path — the same dangerous situation as a broken EGC.

## Why Neutral and Ground Stay Separate Downstream

Downstream of the service disconnect, the neutral and equipment grounding conductors must be kept
separate (250.142(B) restricts using the grounded conductor to ground equipment on the load side).
If they are bonded together in a subpanel, normal neutral current divides between the neutral and
every parallel metal path — EGCs, conduit, building steel. Consequences include:
- Current on raceways and enclosures that can shock someone who opens a joint
- Overheated fittings and electromagnetic interference with sensitive equipment
- Nuisance tripping of ground-fault protection
- A neutral that, if it opens, energizes all the bonded metal

You will see this rule again in Lesson 4.

## Ungrounded and Impedance-Grounded Systems (Awareness)

Some industrial systems are intentionally ungrounded or high-impedance grounded so that a first
ground fault does not trip the process offline. These systems still require bonding of all
equipment and have special ground-fault detection requirements. Apprentices should treat them as
specialized and work on them only with direction from a qualified person.

## Key Takeaways
- Grounding (to earth) limits surge and lightning voltages and stabilizes voltage; it does not clear faults.
- Bonding keeps metal at the same potential and creates the low-impedance fault path.
- Fault current returns to the source through the EGC and main bonding jumper — not through the earth.
- Ohm's law shows why: a 25 Ω rod path cannot draw enough current to trip a 20 A breaker.
- Neutral-to-ground bonding happens only at the service or separately derived system source.
