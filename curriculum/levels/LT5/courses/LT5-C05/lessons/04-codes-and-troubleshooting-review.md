---
title: "Review: Codes, Power Quality and Systematic Troubleshooting"
minutes: 40
video:
video_suggestion: >
  A CALT tabs a 2023 NEC code book while explaining how to find lighting articles, then moves
  to a training panel to walk through a nuisance-tripping case: gathering symptoms, measuring
  current with a clamp meter (closed panel, approved method), reviewing fixture inrush data,
  and documenting root cause on a work order.
---

## Navigating the NEC for Lighting (LT2, LT4)
The **NEC (NFPA 70)** is a minimum installation standard adopted (sometimes with amendments) by
states and localities. The **Authority Having Jurisdiction (AHJ)** enforces it and has final
say. This program references the 2023 edition; always confirm the edition adopted locally.

### NEC structure
- Chapters 1-4 apply generally (definitions, wiring and protection, wiring methods, equipment
  for general use).
- Chapters 5-7 cover special occupancies, special equipment and special conditions, and can
  modify Chapters 1-4.
- Chapter 8 covers communications systems.
- Chapter 9 contains tables.
- Informational notes explain but are not enforceable requirements.

### Articles most used in lighting work
| Article | Topic |
|---|---|
| 110 | Requirements for electrical installations (listing/labeling use, working space) |
| 210 | Branch circuits (including multiwire branch circuits) |
| 225 | Outside branch circuits and feeders (site and pole lighting) |
| 240 | Overcurrent protection |
| 250 | Grounding and bonding |
| 300 | General requirements for wiring methods |
| 310 | Conductors for general wiring |
| 404 | Switches |
| 410 | Luminaires, lampholders and lamps |
| 411 | Low-voltage lighting |
| 600 | Electric signs and outline lighting |
| 700 | Emergency systems |

**Examples worth remembering:**
- **110.3(B):** listed or labeled equipment must be installed and used per its listing and
  instructions. This is why retrofit kit instructions and TLED labeling matter.
- **210.4(B):** multiwire branch circuits need a means to simultaneously disconnect all
  ungrounded conductors at the point of origin.
- **410.130(G):** in indoor locations other than dwellings, fluorescent luminaires with
  double-ended lamps and ballasts that can be serviced in place need a disconnecting means
  (often an in-line disconnect connector) so they can be serviced de-energized. Check the
  adopted edition and the retrofit kit instructions for how this applies to retrofitted
  fixtures. A disconnect makes servicing safer but does not
  replace LOTO and verification when the work requires it.

## Standards and Programs You Should Recognize
| Name | What it covers |
|---|---|
| OSHA 29 CFR 1910 / 1926 | Federal workplace safety rules (general industry / construction) |
| NFPA 70E | Electrical safety in the workplace (safe work practices, arc flash, PPE) |
| NFPA 101 | Life Safety Code, including egress and emergency lighting |
| UL 924 | Emergency lighting and power equipment |
| UL 1598 / 1598C | Luminaires / retrofit kits |
| UL 1993 | Self-ballasted lamps, including TLEDs |
| ANSI A92 series | MEWP design, safe use and training |
| IES | Recommended illuminance and lighting practice |
| DLC | Qualified LED products and networked controls for rebates |
| ASHRAE 90.1 / IECC | Commercial energy codes (LPD, mandatory controls) |

## Power Quality Review (LT4)
- **Inrush current:** LED drivers draw a short, very high current spike at turn-on (capacitor
  charging). Many drivers on one circuit or contactor can trip breakers or weld relay contacts.
  Solutions: check manufacturer inrush data and breaker trip curves, reduce fixtures per
  circuit or relay, use inrush-rated relays/contactors, stagger turn-on in networked systems.
- **Harmonics:** nonlinear loads (drivers, electronics) draw distorted current. On 3-phase,
  4-wire systems, **triplen harmonics (3rd, 9th...) add** in the neutral, so the neutral current
  can exceed phase current. Look for overheated neutrals and use true-RMS meters.
- **Power factor:** ratio of real power (W) to apparent power (VA). Quality LED drivers usually
  have PF above 0.9 at full load; it can drop at low dim levels.
- **Transients/surges:** lightning and switching surges damage drivers, especially outdoors.
  Surge protective devices (SPDs) at the panel and in fixtures reduce failures.

## Systematic Troubleshooting (LT2, LT4)
1. **Gather information:** symptoms, when it started, what changed, history, other affected
   equipment. Talk to the person who reported it.
2. **Verify the complaint:** see it yourself. Note exact behavior.
3. **Plan your tests:** list possible causes from most likely and easiest to check.
4. **Make it safe:** decide what can be tested safely de-energized, and what (if any)
   energized diagnostic testing is justified, with PPE and approved procedures.
5. **Test and isolate:** use measurements. **Half-splitting:** test at a midpoint to eliminate
   half the system with each measurement.
6. **Identify root cause:** ask "why" until you find the underlying cause (a driver failed
   *because* the fixture overheated *because* insulation was piled on it).
7. **Repair** with LOTO and matching parts.
8. **Verify the fix** under normal operating conditions, including dimming, sensors and
   emergency functions.
9. **Document** findings, cause, actions and recommendations.

### Intermittent faults
Intermittent problems need patience: correlate with time of day, temperature, other equipment
starting, or switching events. Data loggers, event logs from networked controls, and
recording meters help. Look for loose connections (heat discoloration), failing drivers that
shut down when hot, and controls interactions (a schedule sweep overriding a sensor).

> **Safety:** Troubleshooting often tempts techs to work energized "just to check one thing."
> Diagnostic voltage measurements on energized equipment are energized work: you must be
> qualified, use the right meter and PPE, and follow NFPA 70E. Repairs are always done in an
> electrically safe work condition.

## Key Takeaways
- The AHJ and locally adopted NEC edition govern; know NEC structure and the lighting articles.
- Install listed equipment per its instructions (110.3(B)); MWBCs need simultaneous disconnect (210.4(B)).
- Recognize the main standards: OSHA, NFPA 70E, NFPA 101, UL 924, UL 1598/1598C, UL 1993, ANSI A92, IES, DLC, ASHRAE 90.1.
- LED inrush causes nuisance tripping; triplen harmonics add in shared neutrals.
- Troubleshoot systematically: gather, verify, plan, make safe, test, find root cause, repair, verify, document.
- Energized diagnostic testing requires qualification and NFPA 70E controls; repairs are done de-energized.
