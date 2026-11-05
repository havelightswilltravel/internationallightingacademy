---
title: Bonding — Services, Subpanels & Separately Derived Systems
minutes: 50
video:
video_suggestion: >
  Walkthrough of a commercial electrical room: the service switchboard's main bonding jumper,
  bonding bushings and jumpers on service conduits, the intersystem bonding termination, a
  distribution panel with the neutral bar isolated, and a dry-type transformer with its system
  bonding jumper, GEC and supply-side bonding jumper. Narrator points to each and explains its job.
---

## The Single Neutral-to-Ground Bond

In a typical grounded system, the neutral (grounded conductor) and the equipment grounding system
are connected at **one point** for each source:
- At the **service**, by the **main bonding jumper** in the service disconnecting means
- At a **separately derived system** (for example, a transformer secondary), by the **system bonding
  jumper**

Everywhere downstream, the neutral is insulated from the enclosure and the EGCs land on a separate,
bonded equipment grounding bar.

| Location | Neutral bar bonded to enclosure? | EGC bar bonded to enclosure? |
|---|---|---|
| Service disconnect | **Yes** (main bonding jumper) | Yes |
| Distribution panel or subpanel fed from the service | **No** — remove or do not install the bonding screw/strap | Yes |
| Panel in a separate building fed by a feeder with an EGC | **No** | Yes, plus a GEC to that building's electrode system |
| Transformer secondary (separately derived) | Yes — at **one** point only: the source or the first disconnect | Yes |

### Main and System Bonding Jumper Size
Main and system bonding jumpers are sized like supply-side bonding jumpers, from **Table
250.102(C)(1)**, based on the largest ungrounded conductor. For copper through 1100 kcmil the
values follow the same steps as Table 250.66 (for example, 3/0 Cu service conductors → 4 AWG Cu).
Above 1100 kcmil copper, the jumper must be at least 12.5% of the area of the largest ungrounded
conductor (or equivalent area for parallel sets).

**Worked example:** A service uses four parallel sets of 500 kcmil Cu per phase (2,000 kcmil
equivalent).
Minimum main bonding jumper area = 0.125 × 2,000 = **250 kcmil Cu**.

## Separately Derived Systems (250.30)

A dry-type transformer that steps 480 V down to 208Y/120 V creates a **new system** with no direct
connection to the supply neutral. It needs its own:
1. **System bonding jumper** — neutral to EGC system, at the transformer **or** at the first
   disconnect, but **not both**
2. **Grounding electrode conductor** — from the bond point to the building grounding electrode
   system (often building steel or a water pipe within the required area), sized from Table
   250.66 based on the secondary conductors
3. **Supply-side bonding jumper** — where the secondary conductors run in a raceway or cable to the
   first disconnect, a bonding jumper sized from Table 250.102(C)(1) connects the transformer
   enclosure to the disconnect's EGC system

> **Field tip:** Installing the system bonding jumper at both the transformer and the panel creates
> a parallel neutral path on the conduit — the same objectionable-current problem as a bonded
> subpanel. Check both ends.

## Bonding at the Service (250.92)

Service raceways and enclosures carry the highest available fault currents, with only the service
conductors' own impedance limiting them. Standard locknuts are **not** sufficient by themselves
for bonding service raceways. Acceptable methods include:
- Bonding to the service neutral
- Threaded couplings or threaded hubs made up wrenchtight
- Threadless couplings and connectors made up tight (for EMT and similar)
- **Bonding-type locknuts, bonding wedges or grounding bushings with bonding jumpers** — required
  where concentric or eccentric knockouts are punched (the rings reduce the metal contact) or
  where the raceway enters through a reducing washer

For circuits over 250 V to ground (such as a 277/480 V system), 250.97 applies similar bonding
requirements around concentric or eccentric knockouts on the load side, with exceptions for
knockouts that are listed for bonding.

## Intersystem Bonding (250.94)

An **intersystem bonding termination** — a device with terminals for at least three bonding
conductors — must be provided at the service equipment or metering equipment so that
communications, CATV, and antenna systems can bond to the building grounding system. This keeps
all systems at the same potential during a lightning surge.

## Bonding Piping and Structural Steel (250.104)

| System | Bonding requirement (paraphrased) |
|---|---|
| Interior metal water piping | Bonded to the service equipment enclosure, grounded conductor at the service, GEC, or electrode, with a jumper sized from Table 250.102(C)(1) |
| Other metal piping likely to become energized (including gas piping) | Bonded; the EGC of the circuit likely to energize the piping (e.g., the furnace circuit) may serve as the bonding means |
| Exposed structural metal that is interconnected and likely to become energized | Bonded, with a jumper sized from Table 250.102(C)(1) |

## Load-Side Bonding Jumpers

On the load side of the service, equipment bonding jumpers (for example, around a flexible
section or a non-conductive fitting) are sized from **Table 250.122** based on the OCPD protecting
the circuit — the same table used for EGCs.

## Troubleshooting Objectionable Current

Symptoms of an improper neutral-to-ground bond downstream:
- Clamp meter reads current on an EGC or conduit with all loads balanced and no faults
- Ground-fault protection on the main trips randomly
- Humming or heat at EMT fittings; tingle voltage on metal surfaces

**Check method (de-energized):** with the panel locked out and the feeder neutral lifted from the
neutral bar, test for continuity between the neutral bar and the enclosure. Any continuity
indicates a bond that should not be there (a bonding screw, a misplaced EGC on the neutral bar, or
a neutral touching metal downstream).

> **Safety:** Lifting a neutral on an energized system can raise the voltage on the bonded metal
> and on loads connected line-to-neutral. Never open a neutral under load. All neutral-to-ground
> testing is done with the panel de-energized, locked out and verified.

## Key Takeaways
- Bond neutral to ground at **one** point per source: the service (main bonding jumper) or the
  separately derived system (system bonding jumper).
- Subpanels and separate-building panels keep the neutral isolated and the EGC bar bonded.
- Main, system and supply-side bonding jumpers are sized from Table 250.102(C)(1); load-side
  bonding jumpers from Table 250.122.
- Service raceways need more than standard locknuts — use bonding bushings, wedges or locknuts
  where required.
- Provide an intersystem bonding termination and bond metal piping and structural steel.
