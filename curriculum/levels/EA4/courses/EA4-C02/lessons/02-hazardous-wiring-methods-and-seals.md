---
title: Hazardous Location Wiring Methods, Seals, and Bonding
minutes: 40
video:
video_suggestion: >
  In a training shop, an instructor assembles a Class I, Division 1 run of threaded rigid
  conduit to an explosionproof switch enclosure: cutting and threading conduit, counting
  engaged threads, installing a vertical sealing fitting within the required distance, packing
  dam fiber, and pouring compound to the marked depth. Finish with a side-by-side of a correct
  seal and three common defects.
---

## Wiring Methods for Class I Locations
NEC 501.10 (2023; AHJ edition governs) lists the wiring methods permitted in Class I locations.

**Class I, Division 1** — the most restrictive:
- **Threaded rigid metal conduit (RMC)** or **threaded steel intermediate metal conduit (IMC)**,
  including PVC-coated versions
- **Type MI cable** with fittings listed for the location
- **Type MC-HL** and **Type ITC-HL** cable listed for Class I, Division 1, where conditions in
  the code are met (typically industrial establishments with restricted public access and
  qualified maintenance)
- PVC or RTRC conduit only where installed underground and encased in concrete with the
  specified cover, with threaded RMC or IMC for the last portion before emerging
- Flexible connections: flexible fittings listed for the location

**Class I, Division 2** permits everything allowed in Division 1 plus several additional
methods such as certain enclosed gasketed busways, and Type MC, TC, PLTC, and ITC cables with
listed fittings under conditions stated in 501.10(B). Check the current section — the list is
long and has changed in recent editions.

## Threads
- Conduit threads must be NPT (tapered) threads, made wrenchtight.
- For explosionproof and flameproof equipment, **at least five full threads must be fully
  engaged**. Running threads are not permitted.
- Joints must be tight to provide both a flame path and an effective ground-fault current path.

## Conduit Seals
Seals do two jobs: they keep an explosion inside one enclosure from traveling through the
conduit to another enclosure (pressure piling), and they slow the migration of gases through
the raceway from a classified area to an unclassified one.

### Where Seals Are Required in Class I, Division 1 (501.15(A))
| Situation | Requirement |
|---|---|
| Conduit entering an enclosure that contains switches, breakers, fuses, relays, or other arcing devices, or high-temperature devices | Seal within **18 in (450 mm)** of the enclosure, as close as practicable |
| Conduit trade size 2 (53) or larger entering an enclosure containing terminals, splices, or taps | Seal within 18 in |
| Conduit leaving the Division 1 location | Seal at the boundary, within 10 ft (3.05 m) on either side, with no union, coupling, box, or fitting between the seal and the boundary except listed explosionproof reducers at the seal |

Between the seal and the enclosure only explosionproof unions, couplings, reducers, elbows,
and capped elbows no larger than the conduit trade size are permitted.

### Making a Seal Correctly (501.15(C))
1. Use a sealing fitting listed for the location and the compound listed for that fitting.
2. Separate the conductors and pack **dam fiber** between and around them so compound cannot
   leak out. Remove the dam fiber plug only as directed by the manufacturer.
3. Pour the compound to a thickness **not less than the trade size of the sealing fitting and
   in no case less than 5/8 in (16 mm)**.
4. **Never splice or tap conductors in a sealing fitting.**
5. The cross-sectional area of conductors in a seal must not exceed **25%** of the area of
   rigid conduit of the same trade size, unless the fitting is identified for a higher fill.
6. Let the compound cure fully before energizing or pressure testing.

### Worked Example: Seal Fill Check
A 1-in sealing fitting is to carry four 10 AWG THHN conductors.
- 10 AWG THHN area (Chapter 9, Table 5): **0.0211 in²** × 4 = 0.0844 in²
- Total area of 1-in RMC (Chapter 9, Table 4): **0.887 in²**
- 25% of 0.887 = **0.222 in²**
- 0.0844 ≤ 0.222 → **acceptable**

### Common Seal Defects
| Defect | Why it fails |
|---|---|
| Seal more than 18 in from the switch enclosure | Explosion can propagate into the conduit system |
| Union installed between boundary seal and the classified boundary | Path for gas migration |
| No compound poured (fitting installed empty) | Fitting is just a coupling |
| Compound too shallow or dam leaked | Flame path not long enough |
| Splice inside the sealing fitting | Prohibited; prevents proper seal |
| Horizontal-only fitting used vertically | Compound cannot fill correctly |

## Bonding in Hazardous Locations (501.30)
Locknut-bushing and double-locknut connections **cannot** be relied on for bonding in Class I
locations. Use bonding jumpers with proper fittings or other approved means for all raceways,
fittings, boxes, and enclosures between the classified location and the point where the
grounded conductor and grounding electrode conductor connect at the service or separately
derived system. Where flexible metal or liquidtight flexible conduit is permitted, it must have
an internal or external bonding jumper.

## Explosionproof Enclosure Care
- Flame paths (the machined joint between cover and body) must be clean and undamaged. Never
  pry covers with a screwdriver, file a burr, paint the joint, or add gasket material unless the
  enclosure is designed for it.
- Install every cover bolt; a missing bolt can void the protection.
- Do not drill new entries in the field — order the correct enclosure.

> **Safety:** Treat every hazardous location as if the atmosphere could ignite. Obtain the
> facility's permit, test the atmosphere, de-energize and lock out the circuit, verify absence
> of voltage with a meter rated for the location, and use non-sparking tools where the facility
> requires them. Never pressure-test or energize a run until seal compound has cured.

## Key Takeaways
- Class I, Division 1 wiring is primarily threaded RMC/IMC, MI, and listed MC-HL/ITC-HL.
- At least five full threads fully engaged on explosionproof threaded joints.
- Seal within 18 in of enclosures with arcing or hot devices, and at the Division 1 boundary.
- Compound depth ≥ trade size and ≥ 5/8 in; no splices in seals; 25% fill unless identified
  for more.
- Locknut-bushing connections do not satisfy bonding in Class I locations — use bonding jumpers.
