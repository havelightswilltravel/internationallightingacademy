---
title: Breakers, Fuses, Ratings and Types
minutes: 30
video:
video_suggestion: >
  At a training panel with the dead front installed, an instructor points to standard,
  GFCI, AFCI and dual-function breakers, reads the markings on loose sample breakers held up
  to the camera (ampere rating, voltage, interrupting rating, SWD and HID marks), and shows a
  cutaway breaker to explain the thermal and magnetic trip elements.
---

## What Overcurrent Protection Does

A **circuit breaker** or **fuse** opens a circuit automatically when the current is higher than
the circuit can safely carry. Its main job is to **protect the conductors and equipment** from
overheating and fire, and to clear faults quickly enough to limit damage. It is not designed to
protect people from shock — that is the job of GFCI protection.

| Device | How it opens | After it operates |
|---|---|---|
| Fuse | A metal element melts | Must be replaced with the same type and rating |
| Circuit breaker | A mechanism unlatches and opens the contacts | Can be reset once the cause is found |

You will see breakers in panelboards (lighting panels, branch panels), fuses in older panels,
disconnects, fixture in-line fuse holders (common on outdoor poles and HID fixtures) and inside
some equipment.

## How a Standard Thermal-Magnetic Breaker Works

Most branch-circuit breakers are **thermal-magnetic**:

| Element | Responds to | Speed |
|---|---|---|
| **Thermal** (bimetal strip) | Sustained overload — the strip heats and bends until it releases the latch | Slow: seconds to many minutes depending on how far over the rating |
| **Magnetic** (coil/armature) | High fault current from a short circuit or ground fault — the magnetic force trips the latch | Instant: a fraction of a second |

This is why a modest overload takes a while to trip and a dead short trips immediately.

## Ratings You Must Read

| Rating | What it means | Example |
|---|---|---|
| **Ampere rating** | Current it will carry continuously without tripping (in its listed conditions) | 15 A, 20 A, 30 A |
| **Voltage rating** | Maximum system voltage it is rated for | 120/240 V, 240 V, 277 V, 480Y/277 V |
| **Poles** | Number of ungrounded conductors it opens | 1-pole (120 V or 277 V), 2-pole (208/240 V), 3-pole |
| **Interrupting rating (AIC / kAIC)** | Maximum fault current it can safely interrupt | 10,000 A (10 kA), 14 kA, 22 kA, 65 kA |
| **Listing/type** | Panel maker and type it is listed for | Must match the panel's labeled types |

> **Safety:** A breaker with an interrupting rating lower than the available fault current can
> explode instead of clearing a fault. Breaker selection, including AIC and panel listing, is
> electrician work. Never install a "fits-in" breaker that is not listed for that panel.

Watch the voltage rating on **277 V lighting**: a breaker marked only 120/240 V is not rated for
a 277 V circuit on a 480Y/277 V panel. Slash ratings (like 480Y/277) apply only to the system type
shown.

## Types of Breakers You Will See

| Type | What it adds | Where you see it | Field notes |
|---|---|---|---|
| **Standard thermal-magnetic** | Overload and short-circuit protection | Almost every branch circuit | The baseline |
| **GFCI breaker** | Trips on ground-fault current to people (about 4–6 mA imbalance) | Wet locations, outdoor lighting, pools, kitchens, bathrooms | Has a test button; may have a pigtail neutral; trips on leakage in wet fixtures or damaged cable |
| **AFCI breaker** | Detects arcing signatures (damaged cords, loose connections) | Dwelling unit living areas (code requirements vary by edition and AHJ) | Some LED drivers, dimmers and motors can cause nuisance trips |
| **Dual-function (AFCI/GFCI)** | Both of the above | Dwelling kitchens and laundries, etc. | Indicator may show which function tripped |
| **HID-rated** | Listed for frequent switching of high-intensity discharge lighting loads | Panels where HID lighting is switched with the breaker | Marked "HID" |
| **SWD-marked** | Listed for use as a switch on fluorescent lighting circuits | Panels where breakers are used to turn lighting on and off | Marked "SWD." Only SWD (or HID) marked breakers should be used as regular lighting switches |
| **GFPE / equipment ground-fault** | Higher trip threshold (often 30 mA) to protect equipment | Heat trace, some outdoor equipment | Not a people-protection GFCI |

### Switching duty — why SWD matters

In warehouses, gyms and parking garages, staff often turn lights on and off **at the panel**. The
NEC requires breakers used this way to be listed for the purpose: SWD-marked for fluorescent
(and similar) lighting, HID-marked for HID. Ordinary breakers wear out quickly when switched daily
and become **weak breakers** that trip below their rating. If a site uses breakers as switches and
they are not marked SWD or HID, note it on your write-up.

## Fuses in Lighting Work

| Fuse | Where | Notes |
|---|---|---|
| In-line fixture fuse (e.g., midget or "KTK-style" in a fuse holder) | Pole bases, HID fixtures, sign circuits | Replace with same type, amperage and voltage; find the cause first |
| Cartridge fuses | Fused disconnects, older panels | Usually electrician work inside the enclosure |
| Plug fuses | Very old residential panels | Never "upsize" a fuse; non-tamperable type S adapters exist for this reason |

> **Safety:** Replacing an in-line fuse at a pole base or fixture is done with the circuit locked
> out and verified dead. Use a fuse puller for cartridge fuses, never your fingers or a
> screwdriver.

## Key Takeaways
- Breakers and fuses protect conductors and equipment from overcurrent; GFCI protects people from shock.
- Thermal elements trip on sustained overload (slow); magnetic elements trip on short circuits and ground faults (instant).
- Read ampere, voltage (watch 277 V), poles, interrupting rating (AIC) and panel listing — selection is electrician work.
- Know standard, GFCI, AFCI, dual-function, HID-rated and SWD-marked breakers.
- Breakers used as daily light switches must be SWD- or HID-marked; ordinary breakers wear out and become weak.
