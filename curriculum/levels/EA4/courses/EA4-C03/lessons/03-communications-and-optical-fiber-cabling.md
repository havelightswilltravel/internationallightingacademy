---
title: Communications, Coaxial, and Optical Fiber Cabling
minutes: 35
video:
video_suggestion: >
  At a small commercial building, a technician shows the telecom entrance: the utility's primary
  protector, the bonding conductor to the intersystem bonding termination at the service, a
  telecommunications grounding busbar in the equipment room, a plenum ceiling with properly
  supported CMP cable on J-hooks, and a riser sleeve with firestopping. End with removal of a
  bundle of abandoned cable above a ceiling.
---

## Chapter 8 Is Its Own World
Chapter 8 of the NEC covers communications systems and is **not subject to the requirements of
Chapters 1 through 7 except where specifically referenced** (90.3). In the 2023 NEC (AHJ edition
governs), the chapter is organized as:

| Article | Covers |
|---|---|
| 800 | General requirements for communications systems (applies to 805, 820, 830, 840) |
| 805 | Communications circuits (telephone, data) |
| 810 | Radio and television equipment (antennas) |
| 820 | Community antenna television and radio distribution (CATV/coaxial) |
| 830 | Network-powered broadband communications |
| 840 | Premises-powered broadband (e.g., fiber to the premises with an ONT) |

Optical fiber cables are covered by **Article 770** in Chapter 7.

## Communications Cable Types
| Cable | Rating | Typical use |
|---|---|---|
| CMP | Plenum | Spaces used for environmental air |
| CMR | Riser | Vertical runs between floors |
| CMG / CM | General-purpose | Horizontal runs in non-plenum spaces |
| CMX | Limited use | Dwellings, raceways |
| CATVP, CATVR, CATV, CATVX | Same hierarchy for coaxial | CATV systems |
| OFNP, OFNR, OFN / OFCP, OFCR, OFC | Same hierarchy for optical fiber | N = nonconductive, C = conductive (metal members) |

Higher ratings substitute for lower ones (plenum for riser for general-purpose).

## Entrance Protection and Bonding
Outside plant communications conductors that enter a building can be exposed to lightning and
accidental contact with power lines.
- A **listed primary protector** is required where conductors are exposed to such hazards; it is
  located as close as practicable to the point of entrance.
- The protector, cable shields, and metal sheaths must be bonded to the building's grounding
  electrode system through the **intersystem bonding termination (IBT)**.
- The IBT (250.94) must be installed at the service equipment or metering equipment (or the
  disconnecting means for a separate building), must be accessible, and must provide **at least
  three terminals** for communications, CATV, and other systems.
- The bonding conductor for communications is copper, generally **not smaller than 14 AWG** and
  with ampacity at least equal to the outer sheath conductor, and need not be larger than **6
  AWG** (800.100). Keep it as short and straight as practicable — ideally not over 20 ft for
  one- and two-family dwellings, with a supplemental electrode if longer.

### Worked Example: Is the Bonding Conductor Too Long?
In a one-family dwelling, the telephone protector is on the back wall. The IBT is at the
service on the front wall. A straight route along the exterior is 34 ft. Because the bonding
conductor would exceed 20 ft, the NEC calls for a separate communications ground rod (at least
5 ft long, per the section's requirements) near the protector, bonded to the power grounding
electrode system with a 6 AWG copper conductor. Alternatively, relocate the communications
entrance closer to the service — usually the cleaner solution on new construction.

## Installation Rules That Inspectors Check
- **Support:** cables must be supported by the building structure using hardware such as J-hooks,
  straps, or cable trays — not laid on ceiling tiles or tied to ceiling grid hangers or other
  raceways (unless identified for that).
- **Fire-resistance-rated penetrations:** openings through fire-rated walls and floors must be
  firestopped with a listed system to maintain the rating (800.26 references 300.21).
- **Plenums:** use plenum-rated cable (CMP, OFNP, CATVP) or install in a raceway permitted for
  plenums.
- **Separation from power:** communications cables must not be in the same raceway, box, or
  enclosure with power or Class 1 conductors unless separated by a permanent barrier or listed
  divider; in open runs keep at least **2 in** from power conductors unless one is in raceway or
  separated by a nonconductor.
- **Abandoned cable:** the accessible portion of abandoned cable must be removed. Cable intended
  for future use must be tagged with the date and intended use.
- **Mechanical protection:** cable runs should avoid damage from normal building use, with
  bushings where passing through metal framing.

## Fiber Optic Considerations
Fiber carries light, not current, so it has no shock hazard by itself — but conductive fiber
cables (with metal strength members or armor) must be bonded at the entrance. Never look into
the end of a fiber or connector; active laser sources may be invisible and can damage the eye.
Clean and inspect connectors with a scope and dispose of glass fiber scraps in a marked
container.

> **Safety:** Communications entrances can carry dangerous voltage from lightning or a crossed
> power line. Do not disconnect a bonding conductor from a protector while outside conductors
> are connected. When working above ceilings, verify there are no energized light-fixture whips
> or damaged power conductors in the work area, and lock out circuits you must move or touch.
> Use eye protection when cleaving fiber.

## Key Takeaways
- Chapter 8 stands alone except where it references Chapters 1–7; 2023 articles are 800 (general),
  805, 810, 820, 830, and 840; optical fiber is Article 770.
- Use the CMP > CMR > CM > CMX hierarchy (same pattern for CATV and fiber).
- Bond protectors and shields to the intersystem bonding termination, which has at least three
  terminals.
- Support cables from the structure, firestop penetrations, and remove accessible abandoned cable.
- Never look into a fiber end.
