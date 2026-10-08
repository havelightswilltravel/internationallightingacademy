---
title: Transformer Installation, Grounding & Verification
minutes: 45
video:
video_suggestion: >
  Field crew installs a wall-mounted 45 kVA transformer: mounting on vibration isolators,
  landing conductors, installing the system bonding jumper and GEC, torquing, insulation
  resistance testing, and the first energization with voltage readings recorded on a checklist.
---

## Before You Start

A transformer installation touches mechanical, electrical and grounding work. Before anything
is landed, confirm:

- The transformer nameplate (kVA, voltages, connection, %Z) matches the drawings and submittals.
- Mounting location matches the plans, with the clearances on the nameplate and the working
  space required by 110.26.
- Floor or wall can support the weight (a 75 kVA dry-type can exceed 600 lb).
- Primary and secondary conductor sizes, OCPDs and the location of the system bond are shown
  on the one-line or details. If not, ask before you build.

## Mounting and Noise

Transformers hum at twice the line frequency (120 Hz) because the core laminations flex with
each half-cycle of magnetization. Reduce noise complaints by:

- Using the manufacturer's vibration isolation pads and removing shipping bolts or blocks.
- Connecting raceways with a short length of flexible conduit (flexible metal conduit or
  liquidtight) so vibration does not travel into the building structure. A flexible raceway
  used this way still needs a proper equipment grounding path — install a wire-type EGC or
  bonding jumper as the code requires for the raceway type and length.
- Avoiding mounting on thin walls next to offices.

## Grounding and Bonding the Separately Derived System

For a 480 V delta to 208Y/120 V transformer, the 2023 NEC (250.30(A)) requires these
connections. Think of them as answering three questions:

1. **Where is the neutral bonded to ground?** One place: the **system bonding jumper**, either
   at the transformer or at the first disconnecting means (the secondary main breaker or
   disconnect) — not both. Bonding in two places creates parallel neutral current paths on the
   EGC, raceways and building steel.
2. **How is the enclosure connected to the bonding point?** With a **supply-side bonding
   jumper** run with the secondary conductors (sized from Table 250.102(C)(1) based on the
   size of the secondary ungrounded conductors).
3. **How is the system connected to earth?** With a **grounding electrode conductor** from the
   same point where the system bonding jumper is installed, to the building's grounding
   electrode system — preferably the nearest building steel or water pipe electrode that
   qualifies, or a common GEC tap. GEC size comes from Table 250.66 based on the secondary
   conductor size.

### Sizing example
Secondary conductors: 4/0 AWG copper per phase.

| Conductor | Table | Size (copper) |
|---|---|---|
| Grounding electrode conductor | 250.66 (over 3/0 through 350 kcmil Cu) | 2 AWG |
| System bonding jumper / supply-side bonding jumper | 250.102(C)(1) (over 3/0 through 350 kcmil Cu) | 2 AWG |

Always confirm against the code tables in the edition your AHJ enforces; the sizes above
reflect the 2023 NEC tables.

### Primary side
The primary is not a separately derived system — its equipment grounding conductor comes from
the supply panel and bonds the transformer enclosure. The primary feeder has **no neutral**
for a delta primary; do not land a neutral on H terminals.

## Torque and Terminations

- Use the lug manufacturer's torque values (often printed on a label inside the terminal
  compartment). 110.14(D) in the 2023 NEC requires an approved means, such as a calibrated torque tool, where a torque
  value is indicated.
- Use lugs listed for the conductor material (copper or aluminum) and size.
- Keep conductors away from the hot core and coils; maintain bending space.
- Mark torqued connections (torque stripe) so the next person can see they were tightened.

## Pre-Energization Tests and Checks

| Check | Purpose |
|---|---|
| Visual inspection: shipping blocks removed, no debris, no damage | Prevents faults and noise |
| Insulation resistance test (winding to winding, each winding to ground) at the test voltage specified by the manufacturer or spec | Finds moisture or damaged insulation |
| Tap setting matches the specified position on all phases | Prevents wrong output voltage |
| Jumpers and connections match the nameplate diagram | Prevents shorts and wrong voltage |
| System bonding jumper at exactly one location | Proper fault path, no objectionable current |
| GEC and supply-side bonding jumper installed and torqued | Grounding complete |
| Secondary main breaker OFF, downstream branch breakers OFF | Energize without load |

Insulation resistance testers produce hazardous voltage. Discharge windings after testing,
and follow your employer's procedure.

> **Safety:** Insulation resistance testing applies high DC voltage to the windings. Only
> trained persons perform it, with the transformer locked out, all conductors disconnected or
> isolated as the procedure requires, and the windings discharged afterward. Never touch the
> test leads while testing.

## First Energization and Verification

1. Clear personnel from the area; close covers.
2. Wear the PPE required by the arc-flash label for the primary device.
3. Close the primary OCPD. Listen — a steady hum is normal; buzzing, arcing or crackling is not.
4. With appropriate PPE and procedure, measure secondary voltages at the secondary main
   (line side) before closing it.
5. Compare readings: about 208 V L-L, about 120 V L-N, near 0 V neutral-to-ground.
6. If readings are high or low by a few percent across all phases, the supervisor may decide
   to change taps — de-energize, lock out and verify first.
7. Close the secondary main and add load in steps; check that currents are reasonable.

### Example tap decision
No-load secondary measures 219 V L-L (about 5.3% high) because the primary measures 505 V.
The 480 V nominal winding on the +5% tap (504 V) would bring the secondary to roughly
219 x 480/504 ≈ 209 V. The supervisor approves, and you change taps with the unit
de-energized, locked out and verified.

## Key Takeaways
- Check the nameplate and drawings before mounting; mind weight, clearances and working space.
- Use isolation pads and flexible raceway connections to control noise, with a proper EGC.
- Bond the neutral at one point; connect GEC and supply-side bonding jumper at that point.
- Size the GEC from Table 250.66 and bonding jumpers from Table 250.102(C)(1).
- Torque to the manufacturer's value with a calibrated tool and mark it.
- Energize unloaded, verify L-L, L-N and N-G, then load in steps.
