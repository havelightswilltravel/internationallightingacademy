---
title: Category Cable, T568A/T568B & Straight-Through vs Crossover
minutes: 35
video:
video_suggestion: >
  Close-up bench video: the trainer strips the jacket on Cat5e, Cat6 and Cat6A cable side by
  side to show twist rates, the Cat6 spline and Cat6A shielding, then fans out the four pairs and
  arranges them in T568B order next to an on-screen pin chart, and finally compares the two ends
  of a straight-through and a crossover cable.
---

## Why Lighting Techs Need Data Cabling Skills
Lighting is no longer just power and a switch. Networked lighting controls, relay panels connected to
a monitoring service, PoE luminaires, wireless gateways, and BMS interfaces all depend on low-voltage
communications cable. When a lighting zone "drops off the network," the fault is very often a bad data
cable or a bad termination — not the light. The company's own troubleshooting guide notes that most
data-cable problems come down to the **crimp or the pin configuration**.

## Twisted-Pair Category Cable
Category (Cat) cable has **four twisted pairs** — eight conductors — in one jacket. The twists cancel
interference. Higher categories have tighter twists, better separation and higher bandwidth.

| Category | Typical use | Notes |
|---|---|---|
| **Cat5e** | 1 Gb/s Ethernet up to 100 m channel | Still widely installed; acceptable for many control networks |
| **Cat6** | 1 Gb/s to 100 m; 10 Gb/s over shorter runs | Thicker conductors, often a plastic spline separating pairs |
| **Cat6A** | 10 Gb/s to 100 m | Larger diameter, often shielded (F/UTP); preferred for higher-power PoE because it handles heat in bundles better |

Older documents (including the company guide) refer to "Cat5." Plain Cat5 is obsolete; today you will
install Cat5e or better, and the termination standards below apply to all of them.

**Distance rule of thumb:** an Ethernet channel is limited to **100 meters (328 ft)** total — usually
up to 90 m of permanent cable in the wall plus up to 10 m of patch cords.

### Cable jacket ratings
The jacket rating printed on the cable tells you where it may be installed — for example, plenum-rated
(CMP) cable in air-handling spaces, riser (CMR) between floors, and general-purpose (CM) elsewhere. Use
what the job specification and the AHJ require.

## Pair Colors
| Pair | Colors |
|---|---|
| Pair 1 | Blue and white/blue |
| Pair 2 | Orange and white/orange |
| Pair 3 | Green and white/green |
| Pair 4 | Brown and white/brown |

## The T568A and T568B Pin Charts
An RJ45 (8P8C) plug has eight pins. Hold the plug with the **contacts facing you and the latch (clip)
away from you, cable hanging down** — pin 1 is on the **left**.

| Pin | T568B | T568A |
|---|---|---|
| 1 | White/orange | White/green |
| 2 | Orange | Green |
| 3 | White/green | White/orange |
| 4 | Blue | Blue |
| 5 | White/blue | White/blue |
| 6 | Green | Orange |
| 7 | White/brown | White/brown |
| 8 | Brown | Brown |

The only difference is that the **orange and green pairs swap places**. Blue and brown stay the same.

**Which one to use?** Both work equally well electrically. What matters is that the site is consistent.
Many commercial installations in the U.S. use **T568B**, while T568A is called for in some government
and residential specifications. Follow the job specification, and match what is already installed at
the site.

### Memory aid for T568B
"Orange, green, blue, brown — but green splits around blue." Pins 1–2 are the orange pair, 3 and 6 are
the green pair (split around the blue pair on 4–5), and 7–8 are the brown pair.

## Straight-Through vs Crossover
| Cable | End 1 | End 2 | Used for |
|---|---|---|---|
| **Straight-through** | T568B | T568B (or A to A) | Almost everything: device to switch, patch cords, permanent links |
| **Crossover** | T568A | T568B | Old practice for connecting two similar devices (switch to switch, PC to PC) |

Modern network equipment almost always has **auto-MDI/MDI-X**, which senses and corrects the pair
arrangement automatically, so crossover cables are rarely needed. A cable with **one end A and the other
end B by mistake** is a common fault — it may work at some speeds and fail at others, or fail with
devices that do not auto-sense. Some PoE and lighting control devices are less forgiving than computers.

> **Safety:** Category cable is low voltage, but you will often be working in ceilings and electrical
> rooms with line-voltage wiring nearby. Treat any unidentified conductor as energized, and never pull
> data cable through a box or enclosure containing power conductors.

## Key Takeaways
- Category cable has four twisted pairs; Cat5e, Cat6 and Cat6A differ mainly in bandwidth and construction.
- Keep Ethernet channels to 100 m total, including patch cords.
- Memorize the T568B order: white/orange, orange, white/green, blue, white/blue, green, white/brown, brown.
- T568A swaps the orange and green pairs.
- Use the same standard on both ends for a straight-through cable; match the site's existing standard.
- A mismatched A-to-B cable is a common hidden fault.
