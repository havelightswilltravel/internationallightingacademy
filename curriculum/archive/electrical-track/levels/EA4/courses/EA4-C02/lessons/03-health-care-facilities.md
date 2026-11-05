---
title: Health Care Facilities (Article 517)
minutes: 40
video:
video_suggestion: >
  A hospital facilities electrician guides the camera through a patient room, an ICU bay, and
  the essential electrical system switchgear room. Show headwall receptacles of different
  colors, hospital-grade markings, the patient equipment grounding point, the automatic
  transfer switches for each branch, and a line isolation monitor in an operating room.
---

## Why Health Care Is Special
Patients may be unconscious, connected to life-support equipment, or have electrodes and
catheters that bypass the skin's natural resistance. Small leakage currents that would never be
felt by a healthy person can be dangerous. Power interruptions can be fatal. NEC Article 517
(2023 NEC; AHJ edition governs) works together with **NFPA 99, Health Care Facilities Code**,
which governs risk assessment, performance, and testing, and with accreditation and Medicare
requirements. Always follow the project specifications; hospital work is heavily inspected.

## Patient Care Space Categories
The facility's governing body assigns categories based on risk to the patient (NFPA 99 risk
assessment). The electrician installs to the category shown on the drawings.

| Category | Description | Examples |
|---|---|---|
| Category 1 | Critical care: failure of equipment or a system is likely to cause major injury or death | ICUs, operating rooms, emergency treatment rooms |
| Category 2 | General care: failure likely to cause minor injury | Patient rooms, exam rooms |
| Category 3 | Basic care: failure not likely to cause injury but may cause discomfort | Some outpatient exam rooms |
| Category 4 | Support spaces: failure has no impact on patient care | Offices, storage, waiting rooms |

## Redundant Grounding (517.13)
In patient care spaces, branch circuits serving patient care areas must provide **two
equipment grounding paths**:

1. A **metal raceway or cable armor/sheath** that itself qualifies as an equipment grounding
   conductor under 250.118, and
2. An **insulated copper equipment grounding conductor** installed with the branch-circuit
   conductors and connected to the grounding terminals of receptacles, the metal enclosures of
   receptacle boxes, and non-current-carrying metal surfaces of fixed electrical equipment
   likely to become energized that are subject to personal contact and operating at over 100 V.

Typical compliant wiring methods include EMT or RMC with an insulated copper EGC, or listed
health-care-facility cable assemblies (such as Type AC or MC cable listed for this use, with an
armor that qualifies as an EGC plus an insulated copper EGC). Ordinary Type MC with interlocked
armor that does **not** qualify as an EGC is not acceptable by itself.

## Receptacles at Patient Bed Locations
| Location | Minimum receptacles (2023 NEC) | Notes |
|---|---|---|
| Category 2 bed location | 8 | Listed **hospital grade**; supplied by at least two branch circuits, one from the critical branch |
| Category 1 bed location | 14 | Listed hospital grade; at least one from the critical branch and other circuits as required by 517.19 |

Hospital-grade receptacles have stronger contact retention and are marked with a **green dot**.
Receptacles on the essential electrical system must be identified (often by a red device or
cover plate) and marked with the panelboard and circuit number where required.

## The Essential Electrical System (EES)
Hospitals have an EES supplied by the normal source and by an alternate source (generator).
The EES is divided into three branches, each with its own automatic transfer switch(es):

| Branch | Serves | Transfer |
|---|---|---|
| **Life safety** | Egress illumination, exit signs, fire alarm, alarms for medical gases, selected elevator cab lighting and communications | Automatic, within 10 seconds |
| **Critical** | Task illumination and selected receptacles in patient care spaces, nurse call, selected equipment | Automatic, within 10 seconds |
| **Equipment** | Large motor loads such as vacuum pumps, ventilation, heating; some loads may be delayed or manually connected | Automatic (some delayed) or manual |

Key installation rules:
- Wiring of the life safety and critical branches must be kept **independent** of all other
  wiring and equipment, generally in separate raceways and boxes, except as specifically
  permitted.
- Life safety and critical branch wiring must be in mechanically protected wiring methods
  (non-flexible metal raceways, Type MI cable, or encased PVC/RTRC), with limited flexible
  exceptions.
- Transfer switches and the overcurrent devices on the EES are subject to selective coordination
  requirements.

## Wet Procedure Locations and Isolated Power
Operating rooms are often designated wet procedure locations, where a sudden interruption of
power cannot be tolerated. Protection is provided by either GFCI protection or an **isolated
power system (IPS)**. An IPS uses an isolation transformer so that a first fault to ground does
not trip the circuit. A **line isolation monitor (LIM)** continuously measures the total hazard
current and alarms when it reaches its threshold (5 mA for current LIMs), warning staff before a
second fault creates a shock hazard. IPS conductors are identified with orange and brown
insulation (with stripes where more than one circuit is present).

## Patient Equipment Grounding Point
In Category 1 spaces a patient equipment grounding point (a bus or jack) may be installed so
that equipment can be bonded together. It is connected to the reference grounding point of the
patient care vicinity with a copper conductor not smaller than 10 AWG.

> **Safety:** Hospital outages are scheduled weeks in advance and require infection control
> procedures (dust containment, ICRA permits) as well as LOTO. Never open an EES panel or
> transfer switch without the facility's authorization. Remember that an EES panel may be
> fed from a generator that starts automatically — lock out the correct source(s), and verify
> absence of voltage on every conductor after transfer switch operation.

## Key Takeaways
- Article 517 works with NFPA 99; the facility assigns patient care space categories 1–4.
- Patient care space branch circuits require two grounding paths: a qualifying metal raceway or
  armor plus an insulated copper EGC.
- Category 2 bed locations need at least 8 hospital-grade receptacles; Category 1 at least 14.
- The hospital EES has life safety, critical, and equipment branches; life safety and critical
  restore within 10 seconds and are kept independent of other wiring.
- Wet procedure locations use GFCI or isolated power with a line isolation monitor.
