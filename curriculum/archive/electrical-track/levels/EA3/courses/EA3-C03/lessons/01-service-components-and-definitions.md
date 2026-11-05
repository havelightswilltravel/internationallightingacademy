---
title: Service Components & Definitions
minutes: 45
video:
video_suggestion: >
  Walk-around of two real services — an overhead residential service and an underground
  commercial service with CT cabinet and switchboard — with labels popping up for service
  point, service drop/lateral, service-entrance conductors, metering, and service equipment.
---

## Why the Service Is Special

The **service** is where utility power becomes the building's electrical system. It is
different from everything downstream in one critical way: **service-entrance conductors have
no overcurrent protection on their supply side.** A fault on them is cleared only by the
utility's transformer fuse — or not at all. That is why Article 230 (2023 NEC) controls how
far service conductors may run inside a building and how the service disconnect is located.

## Key Definitions (Article 100 concepts)

| Term | Plain-language meaning |
|---|---|
| **Service point** | The point where the utility's conductors connect to the premises wiring. Utility rules apply on the supply side; the NEC applies on the load side |
| **Service drop** | Overhead utility conductors from the pole to the service point |
| **Service lateral** | Underground utility conductors to the service point |
| **Overhead service conductors / underground service conductors** | Customer-side conductors between the service point and the service-entrance conductors, where applicable |
| **Service-entrance conductors** | Conductors from the service point (or the overhead/underground service conductors) to the service equipment |
| **Service equipment** | The main disconnect(s) and associated equipment that control and cut off the supply |
| **Service disconnect** | The device (or up to six grouped devices) that disconnects all conductors in the building from the service |

Where the service point sits depends on the utility: at the weatherhead for many overhead
services; at the meter, transformer secondary terminals or a pull box for underground
services. **Always get the utility's service requirements** (often called the "blue book" or
service manual) along with the drawings — utilities control meter location, CT cabinets,
clearances and conductor sizing on their side.

## Number and Location of Services and Disconnects

- **One service per building** is the general rule (230.2), with specific exceptions such as
  fire pumps, emergency/standby systems, multiple-occupancy buildings, large capacity needs,
  or different voltage/characteristics — each requiring permission or conditions.
- The service disconnecting means must be at a **readily accessible location** either outside
  the building or **inside nearest the point of entrance** of the service conductors (230.70).
  The AHJ often sets a maximum length for service conductors inside the building.
- **Up to six disconnects** per service are permitted (230.71). Since the 2020 NEC, they must be
  separate devices in separate enclosures, compartments, or vertical sections (or otherwise as
  the rule allows), rather than six breakers in an ordinary panelboard serving as the
  disconnects. Read 230.71 in the edition your AHJ enforces.
- Each service disconnect must be **permanently marked** as a service disconnect.
- For **one- and two-family dwellings**, the 2023 NEC requires an emergency disconnect at a
  readily accessible outdoor location (230.85) so first responders can kill power without
  entering, and **surge protection** at the service (230.67).

## Minimum Service Ratings

| Occupancy | Minimum service disconnect rating (2023 NEC 230.79) |
|---|---|
| One-family dwelling | 100 A, 3-wire |
| All others (general) | 60 A |
| Small loads (one branch circuit / two circuits) | Lower values permitted by 230.79(A)/(B) |

The **calculated load** (Lesson 4) usually drives the actual size well above these minimums.

## Ground-Fault Protection of Equipment

Large solidly grounded wye services are vulnerable to low-level arcing ground faults that do
not draw enough current to trip a large main breaker but can burn down the switchgear. 230.95
requires **ground-fault protection of equipment (GFPE)** for solidly grounded wye services of
more than 150 V to ground but not exceeding 1000 V phase-to-phase, on each service disconnect
rated **1000 A or more**. A 480Y/277 V, 1200 A service main is the classic example.
GFPE must be performance tested when first installed, with written records kept (230.95(C)).

## Working Space and Dedicated Space

Service equipment is often large and high-energy. Working space per 110.26 (1000 V or less):

| Nominal voltage to ground | Condition 1 | Condition 2 | Condition 3 |
|---|---|---|---|
| 0–150 V | 3 ft | 3 ft | 3 ft |
| 151–600 V | 3 ft | 3½ ft | 4 ft |

- Condition 1: exposed live parts on one side, no live or grounded parts on the other (or
  insulated).
- Condition 2: live parts on one side, grounded parts (like a concrete wall) on the other.
- Condition 3: exposed live parts on both sides.
- Width: at least 30 in. or the width of the equipment, whichever is greater. Headroom: at
  least 6½ ft (or the equipment height if greater).
- Large equipment (1200 A or more and over 6 ft wide) needs entrance/egress at each end or
  other provisions, and personnel doors that open in the direction of egress with listed
  panic hardware where required.
- Dedicated equipment space above the equipment is reserved for electrical use.

> **Safety:** The line side of a service main is energized whenever the utility is connected
> — opening the main breaker does **not** de-energize its line terminals or the
> service-entrance conductors. Work on the line side requires utility disconnection (pulling
> the meter is not a substitute unless the utility and your procedure allow it), an electrically
> safe work condition verified with a tested meter, or a justified energized work permit.
> Available fault current at services is often very high; read the arc-flash label.

## Field Marking at the Service

- **Available fault current** with the date of the calculation (110.24) on service equipment
  in other than dwelling units.
- **Arc-flash warning** label (110.16) and, for service equipment rated 1200 A or more, the
  additional information 110.16(B) requires.
- Service disconnect identification, and directories for multiple disconnects.

## Key Takeaways
- Service-entrance conductors have no supply-side overcurrent protection — keep them short.
- Know the service point; utility rules apply on the supply side.
- One service per building, with listed exceptions; up to six disconnects in separate enclosures or sections.
- Dwelling services need an outdoor emergency disconnect and surge protection (2023 NEC).
- GFPE is required on 1000 A and larger solidly grounded wye services over 150 V to ground.
- Opening the main does not de-energize its line side.
