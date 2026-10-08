---
title: Underground Circuits, Wet Locations & Ground Faults
minutes: 35
video:
video_suggestion: >
  The trainer locks out a parking lot lighting circuit, opens hand holes at the first and
  middle poles, disconnects the luminaire taps, and uses an insulation resistance tester to
  test each conductor to ground. The video shows sectionalizing the run at a middle pole to
  find which half contains the fault, then the repaired splice using a listed direct-burial
  kit.
---

## Underground Site Circuits
Site lighting conductors run underground between the panel and poles and from pole to pole. The
NEC sets underground installation requirements in Article 300 (minimum cover depths in Table
300.5) and conductor requirements in Article 310.

**Wiring methods you'll see:**
- **Conductors in PVC conduit** — most common for new work (THWN-2/XHHW-2 conductors rated for
  wet locations).
- **Rigid metal conduit** — at risers and where physical protection is needed.
- **Direct-burial cable** (type UF, USE) — older sites and some small installations.
- **HDPE conduit** — installed by directional boring.

**Minimum cover depths** (Table 300.5, general locations, 0–600V — always check the table for
the specific location and conditions):

| Wiring method | Typical minimum cover |
|---|---|
| Direct-burial cable or conductors | 24 in. |
| Rigid metal / intermediate metal conduit | 6 in. |
| Nonmetallic raceway listed for direct burial (no concrete encasement) | 18 in. |
| Any method under streets, roads, driveways and parking lots | 24 in. |

**Important facts:**
- The **inside of an underground raceway is a wet location.** Conductors in it must be rated for
  wet locations (e.g., the "W" in THWN-2).
- Splices in hand holes, pull boxes and pole bases must be made with devices **listed for wet or
  direct-burial use** as the location requires.
- An **equipment grounding conductor** must run with the circuit conductors to every pole.

## Wet Locations
"Wet location" means exposed to weather, saturation with water, or installed underground. Damp
locations are protected from weather but subject to moderate moisture (canopies, porches).
Equipment in these locations must be listed for them: luminaires marked "suitable for wet
locations," weatherproof boxes, in-use covers for receptacles, and gasketed hand-hole covers.

Water causes most exterior electrical failures:
- Water in conduits and hand holes submerges splices.
- Freezing water cracks fittings and heaves conduits.
- Water inside luminaires corrodes drivers and terminals.
- Damaged insulation lets current leak to earth.

## Ground Faults on Site Lighting
A **ground fault** is an unintended connection between an ungrounded (hot) conductor and ground
— the EGC, a metal pole, a conduit, or the earth.

| Symptom | Possible cause |
|---|---|
| Breaker trips instantly when reset | Solid (bolted) fault — conductor shorted to the EGC or pole |
| Breaker trips only during or after rain | Moisture-related insulation failure, flooded hand hole or splice, water in a luminaire |
| Breaker holds, but some poles are dark | Open conductor or blown pole fuse; possibly a fault that blew a fuse |
| Ground-fault protection device trips | Leakage current to ground (GFPE/GFCI where installed) |
| Tingle or shock from a pole | Fault to the pole with an inadequate EGC — **emergency** |

**Never reset a tripped breaker repeatedly.** Each reset onto a fault can damage the circuit,
cause arc flash at the panel, or energize a faulted pole.

## Finding a Ground Fault with an Insulation Resistance Tester
An insulation resistance tester ("megohmmeter") applies a DC test voltage (commonly 500V or
1000V for 600V-rated conductors — follow your company's procedure and the cable rating) and
measures resistance between a conductor and ground in megohms.

> **Safety:** Insulation resistance testing is done **only on de-energized, locked-out and
> verified circuits.** The test voltage itself can shock you — keep hands off the conductors
> under test and follow the tester's instructions. **Disconnect drivers, photocontrols, SPDs and
> other electronic loads** before testing — the test voltage can damage them, and they make the
> reading meaningless. Discharge the circuit after testing (many testers do this automatically).

**Procedure:**
1. Identify the circuit and every pole on it from drawings or tracing.
2. Apply LOTO at the panel; verify absence of voltage at the panel and at the first hand hole.
3. Disconnect the circuit conductors from the breaker (or test from the first hand hole) and
   disconnect each luminaire tap at its fuse holder or splice so only the underground conductors
   remain.
4. Test each ungrounded conductor (and the neutral, if present) to the EGC/ground. Record readings.
5. **Interpret** — compare against your company's acceptance criteria. As a general guide:
   - High readings (hundreds of megohms or more) — insulation good.
   - Low readings (low megohms) — deteriorating insulation or moisture.
   - Near zero — solid fault.
6. **Sectionalize:** open the run at a hand hole near the middle. Test both directions. The low
   reading follows the faulted section. Keep halving (the half-splitting method from LT2-C06)
   until the fault is between two hand holes or in one splice.
7. Inspect splices in the suspect hand holes first — they are the most common failure point.
8. If the fault is in the buried conductors between hand holes, the fix is usually to **pull new
   conductors** through the conduit (or replace direct-burial cable). Specialty fault-locating
   equipment can pinpoint faults in direct-burial cable.
9. Repair with listed wet/direct-burial splices, re-test the whole run, reconnect loads, and
   restore power.
10. Document readings before and after repair.

**Don't forget the luminaires:** If the underground run tests good, a fixture with water inside
(or its pole-to-head tap conductors) may be the fault. With the driver and SPD disconnected, test
the tap conductors up the pole, and inspect the luminaire for water, corrosion and burned
terminals.

## Excavation Warning
If repair requires digging, **call 811 (utility locate) before digging**, as required by state
law, and follow OSHA excavation requirements. Private site circuits are often not marked by
utility locators — use site drawings or a private locating service.

## Key Takeaways
- Underground raceways are wet locations; use wet-rated conductors and listed wet/direct-burial
  splices.
- Know the common Table 300.5 cover depths: 24 in. direct burial, 18 in. PVC, 6 in. rigid metal,
  24 in. under parking lots and driveways.
- Never repeatedly reset a breaker that trips on a fault.
- Megger only de-energized, isolated conductors with electronic loads disconnected; half-split
  at hand holes to find the fault.
- The EGC must reach every pole; call 811 before digging.
