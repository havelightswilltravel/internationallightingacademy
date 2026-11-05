---
title: Service Conductors, Grounding & Bonding
minutes: 45
video:
video_suggestion: >
  Instructor installs a 200 A residential meter-main on a mock-up wall: sizing the service
  conductors, landing the neutral, installing the main bonding jumper, and connecting the GEC
  to two ground rods and the water pipe, with the table lookups shown on screen.
---

## Sizing Service-Entrance Conductors

Service-entrance conductors must have enough ampacity for the **calculated load** (Article 220
in the 2023 NEC) and generally not less than the rating of the service disconnect, except as
the code allows. Use Table 310.16 and the terminal temperature rating, just as you learned in
EA2.

### The dwelling 83% rule
For **120/240 V single-phase dwelling services and main feeders** rated 100 through 400 A,
310.12 (2023 NEC) permits conductors with an ampacity of not less than **83%** of the service
rating. This recognizes the diversity of residential loads.

**Example — 200 A dwelling service**
200 x 0.83 = 166 A minimum ampacity.
- Copper: 2/0 AWG (175 A at 75 °C) works.
- Aluminum: 4/0 AWG (180 A at 75 °C) works.

The 83% allowance does **not** apply to commercial services, three-phase services, or feeders
that are not the main power feeder to the dwelling.

### Commercial example
A 400 A, 208Y/120 V commercial service with 75 °C terminations needs 400 A of ampacity.
Two parallel sets of 3/0 AWG copper (200 A each at 75 °C = 400 A) or a single 600 kcmil copper
(420 A) are common choices. Parallel conductors must follow 310.10(G): same length, material,
size, insulation and termination, and each set in its own raceway with all phases and the
neutral.

## The Grounded (Neutral) Service Conductor

Even if no load needs a neutral, the utility-supplied grounded conductor must be brought to
each service disconnect (250.24 in the 2023 NEC). It provides the low-impedance path the fault
current needs to get back to the utility transformer and trip the breaker. Its minimum size is
based on the size of the service ungrounded conductors using Table 250.102(C)(1) — and it must
also be large enough for the neutral load.

## Bonding at the Service

At the service, the neutral is connected to the equipment grounding system — and **only** at
the service (for the normal building system):

| Component | What it does | Sizing reference (2023 NEC) |
|---|---|---|
| **Main bonding jumper** | Connects the neutral bus to the service enclosure and EGC bus | Table 250.102(C)(1), based on ungrounded service conductor size |
| **Grounding electrode conductor (GEC)** | Connects the service neutral/enclosure to the grounding electrode system | Table 250.66 |
| **Bonding of service raceways and enclosures** | Ensures a fault-clearing path ahead of the main | 250.92; bonding methods in 250.92(B) |

Downstream of the service, neutrals and equipment grounding conductors must be **kept
separate** — isolated neutral bars in subpanels, no bonding screw installed. A neutral-to-ground
connection downstream puts normal neutral current on raceways, EGCs and building steel
("objectionable current"), causes shock hazards and confuses GFPE.

### Sizing example
Service: 3/0 AWG copper ungrounded conductors.
- GEC (Table 250.66, "2/0 or 3/0" Cu row): **4 AWG copper**.
- Main bonding jumper (Table 250.102(C)(1), "2/0 or 3/0" Cu row): **4 AWG copper**.

For very large services where the conductors exceed the table (1100 kcmil copper), the main
bonding jumper must be at least 12½% of the area of the largest ungrounded conductor (or set
of parallel conductors).

## The Grounding Electrode System

All of the following that are present at the building must be bonded together to form the
grounding electrode system (250.50):

- Metal underground water pipe (with at least 10 ft in contact with earth) — must be
  supplemented by another electrode
- Metal in-ground support structure (building steel meeting the code conditions)
- Concrete-encased electrode ("Ufer" — rebar or bare copper in a footing)
- Ground ring
- Rod and pipe electrodes, plate electrodes, and other listed electrodes

Rod electrodes must be at least 8 ft in contact with soil. A single rod, pipe or plate must be
supplemented by an additional electrode unless it has a resistance to earth of 25 ohms or
less (250.53(A)(2)); supplemental rods must be at least 6 ft apart.

### GEC limits by electrode type (250.66(A)–(C))
| Electrode | GEC need not be larger than |
|---|---|
| Rod, pipe or plate (portion connected only to that electrode) | 6 AWG copper |
| Concrete-encased electrode | 4 AWG copper |
| Ground ring | The ring conductor size |

## Installation Practices

- Run the GEC unspliced, or spliced only by irreversible compression connectors or exothermic
  welding as permitted (250.64(C)).
- Protect the GEC where exposed to damage; if in a ferrous metal raceway, bond the raceway at
  both ends (250.64(E)), because an unbonded steel raceway acts as a choke on fault current.
- Use listed clamps suitable for the electrode and for direct burial or concrete encasement
  where applicable. Keep connections accessible except where the code allows otherwise (e.g.,
  buried or encased connections).
- Bond the metal water piping and other metal piping systems as 250.104 requires.

> **Safety:** Never disconnect a GEC, main bonding jumper or service neutral on an energized
> service. Opening the neutral can put full line voltage on "grounded" metal and on 120 V loads.
> These connections are made or changed only with the service de-energized by the utility and
> verified, or under a specific procedure approved by your supervisor.

## Key Takeaways
- Service conductors are sized for the calculated load; the 83% rule applies only to
  120/240 V single-phase dwelling services and main feeders (100–400 A).
- The service neutral must run to every service disconnect and carry fault current.
- Bond neutral to ground at the service only; keep them separate downstream.
- GEC from Table 250.66; main bonding jumper from Table 250.102(C)(1).
- Bond all electrodes present; supplement water pipes and single rods as required.
