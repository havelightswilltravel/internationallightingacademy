---
title: Shock & Arc-Flash Risk Assessment
minutes: 55
video:
video_suggestion: >
  Instructor uses floor tape around a 480 V panelboard to mark the limited, restricted and
  arc-flash boundaries, then reads two arc-flash labels — one with incident energy, one with a
  PPE category — and walks through selecting PPE from each.
---

## Two Hazards, Two Assessments

Electrical work presents two separate hazards that NFPA 70E (2024) requires you to assess
before work on or near exposed energized conductors or circuit parts:

| Assessment | Hazard | Determines |
|---|---|---|
| **Shock risk assessment** (130.4) | Current through the body from contact | Voltage, limited and restricted approach boundaries, shock PPE (gloves, insulated tools) |
| **Arc-flash risk assessment** (130.5) | Thermal energy, blast, sound, molten metal from an arc | Whether an arc-flash hazard exists, the likelihood and severity, the arc-flash boundary, arc-flash PPE |

Each assessment must consider the **design** of the equipment, its **condition of
maintenance**, the **task** being performed, and the **likelihood** of an event, as well as its
severity.

## Shock Approach Boundaries

| Boundary | Who may cross it |
|---|---|
| **Limited approach boundary** | Unqualified persons may not cross it unless continuously escorted by a qualified person and advised of the hazards |
| **Restricted approach boundary** | Only qualified persons, using shock protection (insulating gloves, insulated tools, etc.) and with a plan; crossing it is treated as making contact with the energized part |

Selected AC values from NFPA 70E Table 130.4(E)(a) (system voltage phase-to-phase):

| Nominal voltage | Limited — exposed movable conductor | Limited — exposed fixed circuit part | Restricted |
|---|---|---|---|
| Less than 50 V | Not specified | Not specified | Not specified |
| 50–150 V | 10 ft 0 in | 3 ft 6 in | Avoid contact |
| 151–750 V | 10 ft 0 in | 3 ft 6 in | 1 ft 0 in |

The "movable conductor" column applies to things like overhead lines that can swing. For work
in panels and switchboards, the fixed circuit part column applies.

**Example:** Measuring voltage in a 480Y/277 V panelboard: limited approach boundary 3 ft 6 in;
restricted approach boundary 1 ft 0 in. Your hands will cross the restricted boundary, so you
need voltage-rated gloves with leather protectors and properly rated test equipment.

## Arc-Flash Fundamentals

An arcing fault releases energy as heat (often hotter than the surface of the sun at the arc),
light, pressure, and sound. **Incident energy** — measured in cal/cm² at a specified working
distance — describes how much thermal energy reaches the worker.

- 1.2 cal/cm² is the approximate onset of a second-degree burn on bare skin.
- The **arc-flash boundary** is the distance at which incident energy equals 1.2 cal/cm².
  Anyone inside it must wear arc-flash PPE.
- Incident energy depends mainly on **available fault current** and **clearing time** of the
  upstream protective device — and clearing time often matters more. A low fault current that
  doesn't trip a breaker instantaneously can produce a *higher* incident energy than a high one.

## Two Methods for Selecting Arc-Flash PPE

NFPA 70E permits either method — **but not both on the same equipment**.

### Method 1 — Incident energy analysis
An engineer calculates incident energy (commonly using IEEE 1584) at each piece of equipment.
The label shows incident energy at a working distance. You select PPE with an arc rating at
least equal to the incident energy (Table 130.5(G) gives PPE guidance for incident energy levels).

### Method 2 — PPE category method
If no incident energy analysis exists, use **Table 130.7(C)(15)(a)** (AC equipment) to find the
PPE category and arc-flash boundary — only when the equipment's **available fault current and
fault clearing time are within the limits listed in the table**. If they are not known or are
exceeded, the table cannot be used and an incident energy analysis is required.

Examples of the table's structure (verify in the standard):

| Equipment | Table parameters | PPE category | Arc-flash boundary |
|---|---|---|---|
| Panelboards rated 240 V and below | Max 25 kA available, max 0.03 s (2 cycle) clearing, 18 in working distance | 1 | 19 in |
| Panelboards rated >240 V up to 600 V | Max 25 kA, max 0.03 s, 18 in working distance | 2 | 3 ft |

Then use Table 130.7(C)(15)(c) for the PPE required in that category:

| PPE category | Minimum arc rating |
|---|---|
| 1 | 4 cal/cm² |
| 2 | 8 cal/cm² |
| 3 | 25 cal/cm² |
| 4 | 40 cal/cm² |

## Equipment Labels

Electrical equipment likely to require examination, adjustment, servicing or maintenance while
energized must be field-marked with a label (130.5(H)) containing:

- Nominal system voltage
- Arc-flash boundary
- At least one of: available incident energy and the corresponding working distance, **or** the
  PPE category (not both); minimum arc rating of clothing; or site-specific level of PPE

The arc-flash risk assessment must be reviewed periodically (at intervals not exceeding 5 years)
and updated when a major modification or renovation occurs. If labels look old, conflict with
the drawings, or equipment has changed (new transformer, new utility service), stop and ask.

## Likelihood: Is There an Arc-Flash Hazard?

NFPA 70E includes a table (130.5(C)) that helps estimate the likelihood of an arc-flash incident
for a task. In general, tasks on **properly installed and maintained** equipment with doors
closed and secured are unlikely to initiate an arc. The likelihood rises with:
- Covers removed and exposed energized parts
- Tasks that interact with parts (voltage testing, removing or installing breakers, racking)
- Evidence of impending failure (arcing sounds, burn marks, overheating)
- Equipment not properly maintained

**Normal operation** of equipment (e.g., switching a properly installed, maintained, closed and
latched disconnect) is permitted when all those conditions are met and there is no evidence of
impending failure.

> **Safety:** The arc-flash boundary is often **larger** than the limited approach boundary. A
> helper standing 4 ft from a 480 V switchboard may be outside the shock boundary but inside the
> arc-flash boundary. Barricade and attend the area so no one wanders in.

## Key Takeaways
- Perform both a shock and an arc-flash risk assessment before energized work.
- 151–750 V: limited 3 ft 6 in (fixed parts), restricted 1 ft 0 in.
- The arc-flash boundary is where incident energy equals 1.2 cal/cm².
- Use incident energy analysis **or** the PPE category method — never both on one piece of equipment.
- The PPE category table only applies within its listed fault current and clearing time limits.
- Labels show voltage, arc-flash boundary, and incident energy or PPE category.
