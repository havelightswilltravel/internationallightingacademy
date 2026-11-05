---
title: Electric Vehicle Supply Equipment (Article 625)
minutes: 40
video:
video_suggestion: >
  A residential EVSE installation from start to finish: reviewing the load calculation, setting
  the charger's current dip switch, pulling 6 AWG THHN in conduit, locking out and verifying the
  panel, landing conductors with a torque screwdriver, and completing a charge session. Then a
  short segment at a commercial parking lot showing networked Level 2 chargers on a load
  management system and a DC fast charger with its own disconnect.
---

## Charging Levels
| Level | Supply | Typical current | Typical use |
|---|---|---|---|
| Level 1 | 120 V AC | 12–16 A | Overnight charging from a standard receptacle |
| Level 2 | 208/240 V AC | 16–80 A | Homes, workplaces, commercial lots |
| DC fast charging | 480 V 3-phase (input) | 50–350+ kW output | Highway corridors, fleets |

The **EVSE** (often called the "charger") for AC charging is really a smart switch and safety
device — the battery charger is inside the vehicle. The EVSE communicates the available current
to the vehicle through the **control pilot** signal.

## Core NEC Requirements (2023 NEC Article 625; AHJ edition governs)
| Topic | Requirement |
|---|---|
| Listing | EVSE must be listed |
| Continuous load | EV charging is a continuous load; OCPD and conductors at **not less than 125%** of the EVSE's maximum load (625.41) |
| Individual branch circuit | Each outlet installed for EV charging is supplied by an **individual branch circuit with no other outlets** (625.40; see also 210.17) |
| GFCI | **All receptacles** installed for the connection of EV charging require GFCI protection for personnel (625.54) |
| Disconnect | EVSE rated more than 60 A or more than 150 V to ground requires a disconnecting means in a readily accessible location, lockable open (625.43) |
| Adjustable settings | When the EVSE has an adjustable current setting, the branch circuit may be sized to the setting if access to it is restricted (625.42) |
| Energy management | A listed energy management system may limit the load used for sizing feeders and services (625.42, 750) |
| Bidirectional | EVSE capable of exporting power (vehicle-to-home/grid) must meet interactive or standby system rules (625.48) |

## Sizing the Branch Circuit
**Step 1:** Find the EVSE's maximum continuous current (nameplate or dip-switch setting).
**Step 2:** Multiply by 1.25 for the OCPD and minimum conductor ampacity.
**Step 3:** Select a conductor whose ampacity, at the correct temperature column for the wiring
method and terminals, meets or exceeds the result.

### Worked Example 1: 48-A EVSE
- OCPD: 48 × 1.25 = **60 A**
- Conductor ampacity required: 60 A
- **6 AWG Cu THHN/THWN-2 in conduit**, 75°C terminations: 65 A ✓
- **6 AWG NM-B cable**: limited to the 60°C column = 55 A ✗ — NM-B would have to be **4 AWG**
  (70 A at 60°C).

This NM-B mistake is one of the most common EVSE inspection failures.

### Worked Example 2: 40-A EVSE
- OCPD: 40 × 1.25 = **50 A**
- 8 AWG Cu THHN in conduit at 75°C: 50 A ✓
- 8 AWG NM-B at 60°C: 40 A ✗ → use 6 AWG NM-B (55 A) ✓

### Worked Example 3: Will It Fit the Service?
An existing 200-A dwelling service has a calculated load (standard method, without the EVSE) of
34,000 VA. Adding a 48-A EVSE at 11,520 VA (2023 NEC 220.57: larger of 7,200 VA or nameplate):
34,000 + 11,520 = 45,520 VA ÷ 240 = **189.7 A** → fits a 200-A service.

If the result exceeded the service rating, options include setting the EVSE to a lower current
(with restricted access to the setting), using a listed energy management system or load-sharing
EVSE, using measured maximum demand data (220.87), or upgrading the service.

## Commercial and Multi-Port Installations
- Multiple chargers on one feeder may share capacity through a listed **load management** system,
  which allows the feeder to be sized to the managed maximum instead of the sum of every
  charger's nameplate.
- DC fast chargers are large three-phase loads with power electronics; coordinate with the
  utility early, and expect harmonic and transformer sizing questions.
- Accessibility requirements (ADA) and local EV-ready building codes may dictate the number and
  location of charging spaces and conduit stub-outs.

## Installation Details
- Mount the EVSE per the manufacturer's height and location instructions and the storage
  requirements for the cord and connector (625.50); protect it from vehicle impact.
- Outdoor installations must be suitable for wet locations; use weatherproof-while-in-use covers
  on receptacles.
- Torque every terminal to the specified value — loose terminations under continuous load are a
  leading cause of EVSE and receptacle failures.
- Use industrial-grade receptacles (e.g., NEMA 14-50) rated for the continuous load if
  receptacle-connected; inexpensive receptacles have overheated in EV service.

> **Safety:** Lock out and tag the panel breaker, verify absence of voltage with a tested meter
> (live-dead-live) on all conductors, and only then terminate the EVSE or receptacle. In a
> panel where the main cannot be shut off, remember the line side of the main and the service
> conductors stay energized — keep hands and tools clear and wear the PPE your risk assessment
> requires.

## Key Takeaways
- EV charging is a continuous load: OCPD and conductors at 125% of the EVSE rating.
- Each EV outlet needs an individual branch circuit; receptacles for EV charging need GFCI.
- Watch the conductor temperature column — NM-B is limited to 60°C ampacity.
- EVSE over 60 A or over 150 V to ground needs a readily accessible, lockable disconnect.
- Use the 220.57 EVSE load value in service calculations, and consider load management before
  upgrading a service.
