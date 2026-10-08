---
title: Troubleshooting Data & Control Cable
minutes: 35
video:
video_suggestion: >
  A lighting control panel has lost contact with its monitoring service. The trainer follows the
  company procedure on camera: checking pin configuration at both ends, inspecting the crimp,
  trying a known-good temporary patch cable, checking jack seating, then installing and testing a
  new permanent cable and labeling it.
---

## Where Data Cable Problems Show Up
For a lighting tech, data-cable trouble usually looks like one of these:

- A relay panel or lighting controller shows **offline** to the monitoring service or BMS
- A group of networked fixtures or sensors stops responding to schedules or switches
- A PoE luminaire or sensor is dark
- A wall station or keypad is dead or unreliable
- A device works intermittently, or only when the cable is moved

The company guide's experience is that **most of the time the problem is with the crimp or pin
configuration.** So check those first.

## The Company Procedure in Plain Step Order
### Step 1 — Gather information
1. Which device or zone is affected, and when did it start? Was anyone working nearby (remodel,
   ceiling work, IT changes)?
2. Find both ends of the cable: the device end and the other end (patch panel, switch, controller,
   next device in a chain). Use labels and drawings.
3. Look at link lights on the device and network port if present — no link light usually means a
   physical cable problem.

> **Safety:** Data devices are often mounted in or near line-voltage equipment — relay panels, fixture
> housings, control enclosures. Do not reach past live line-voltage terminals to reach an RJ45 port. If
> the port is inside an enclosure with exposed line voltage, the enclosure must be locked out and
> verified de-energized, or the work must be done by a qualified person.

### Step 2 — Verify the pin configuration on both ends
Look through the clear plug (or at the jack's punch-down) on **both ends** and compare against the
T568A/T568B pin chart. Both ends must use the same standard for a straight-through cable, and the
site's standard (often T568B). Look for reversed or split pairs.

### Step 3 — Verify the crimp
Check that:
- All eight conductors reach the end of the plug
- All eight pins are fully pressed down
- The jacket is captured under the strain-relief
- The plug latch is not broken

Test the cable with a cable tester (wiremap, continuity, length) if it can be unplugged at both ends.

### Step 4 — Try a known-good temporary patch cable
**Use a temporary, known-good patch cable** between the device and the network port (or between the
two devices). If the device now works, the problem is in the original cable or its terminations. Keep
a few tested patch cords of different lengths in the van for this.

### Step 5 — Verify the jack and plug seating
**Verify the female receptacle (jack) is receiving the male end and making a good connection.** Look
for:
- Bent or recessed jack contacts
- A plug that does not click and lock
- Debris, corrosion or a broken latch
- A loose keystone jack in the wall plate or patch panel

### Step 6 — Replace with a new permanent cable
**If the devices work with the temporary cable, replace the original with a new permanent cable** (or
re-terminate it if the cable itself tests good and only the end is bad). Then:

1. Terminate to the site standard.
2. Test with the cable tester — wiremap, continuity and length.
3. Confirm the device links up and the monitoring service or BMS sees it online.
4. Label both ends.
5. Remove the temporary patch cable, or record it on the service order if it must stay until the
   permanent cable is installed.

## Quick Fault Table
| Symptom | Likely cause |
|---|---|
| No link light at all | Open conductor, bad crimp, unplugged or damaged cable, dead port |
| Link light but no communication | Wrong pinout (A/B mix), split pair, wrong network or port |
| Works when cable is wiggled | Bad crimp, loose jack, broken latch |
| Works at slow speed only | Split pair, untwisted pairs, damaged cable, too long |
| PoE device dark, data OK on laptop | PoE budget or port issue — report to IT/controls contractor |
| Several devices beyond one point dead (MS/TP chain) | Open or reversed connection at the first dead device |

## Parts Identification and Ordering
Record before ordering or replacing:

- Cable category and jacket rating (printed on the jacket: for example, Cat6 CMP)
- Solid or stranded conductors, conductor size, shielded or unshielded
- Plug type matched to the cable (Cat6 plugs for Cat6 cable; shielded plugs for shielded cable)
- Keystone jack brand and category, so it fits the existing plate or panel
- Patch cord length and category
- For lighting control networks: the manufacturer's specified cable, connector and any factory
  pre-terminated cable part numbers

## When to Escalate
Turn it over or write it up when:
- The cable tests good and the device still does not communicate — call the controls monitoring service,
  the controls contractor or the customer's IT department.
- The problem is in the network switch, its configuration, or a PoE budget.
- The run is longer than 100 m, or needs new pathway, firestopping or a new home run you are not
  authorized to install.
- A data port sits inside an enclosure with exposed line voltage you are not qualified to work in.

## Key Takeaways
- Most data-cable problems are the crimp or the pin configuration — check those first.
- Compare both ends to the pin chart and the site standard.
- A known-good temporary patch cable proves whether the fault is in the cable.
- Check that the plug seats and locks in the jack.
- Replace with a new permanent cable, test it, confirm the device is online, and label both ends.
- Escalate network, PoE budget and configuration problems to IT or the controls contractor.
