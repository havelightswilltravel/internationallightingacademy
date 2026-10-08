---
title: Networked Lighting Controls Device Offline
category: controls
tags: [controls, networked-lighting-controls, nlc, wireless, gateway, commissioning, bms]
levels: [LT4, LT5]
last_reviewed: 2026-10-08
review_interval_months: 12
---

> **DRAFT - pending SME review.** Networked systems vary widely; always follow the specific
> manufacturer's documentation and the site's commissioning records.

## Symptoms

- Software or app shows one or more devices (fixtures, sensors, wall stations, relays)
  as "offline" or "not responding"
- Fixtures stuck at full on, off, or a fixed level; ignoring schedules or sensors
- Whole zone or floor dropped off after a power outage, IT change or renovation
- Wall stations unresponsive

## Safety first

- Networked fixtures and relay modules are line-voltage equipment. **De-energize, LOTO and
  verify absence of voltage** before opening fixtures, junction boxes or panels.
- Low-voltage communication wiring may share enclosures with line voltage - treat the
  enclosure as energized until verified.
- Energized testing is **qualified persons only**, with risk assessment, appropriate PPE
  and an energized-work justification per NFPA 70E.
- **Do not factory-reset, re-address, or delete devices without authorization.** It can wipe
  programming for a whole zone and may affect energy-code compliance.
- Many systems are designed to fail to full-on when communication is lost - confirm
  behavior before cutting power to a zone.

## Tools needed

- Access to the system's software/app with appropriate permissions
- Site commissioning documents: device lists, addresses, zone maps, network riser
- CAT III multimeter; network cable tester (for wired bus/Ethernet)
- Manufacturer documentation and support contact

## Likely causes

| Cause | How to confirm | Fix |
|---|---|---|
| Device has no power (breaker off, failed driver/node power) | No line voltage or no auxiliary power to the node | Restore power; repair supply |
| Communication wiring fault (open, short, polarity, damaged cable, missing termination) | Cable test fails; devices past one point all offline | Repair/replace cable; correct termination per manufacturer |
| Wireless device out of range or interference | Device far from neighbors/gateway; new walls, metal shelving | Add repeater/node per manufacturer; relocate |
| Gateway/controller offline | All devices behind one gateway offline; gateway status | Restore gateway power and network connection |
| IT network change (switch, VLAN, IP address, firewall) | Gateway unreachable after IT work | Work with site IT to restore settings |
| Device replaced but not commissioned | New fixture/sensor installed; not in device list | Commission per manufacturer |
| Firmware mismatch | Devices with different firmware; update in progress | Update per manufacturer guidance |
| Failed device | Power and comms good; device still unresponsive | Replace and commission |

## Step-by-step diagnosis

1. Look at the pattern in the software: one device, one segment/branch, one gateway, or
   the whole site? A group failure points to shared infrastructure (gateway, bus, power).
2. Ask what changed recently: power outage, renovation, IT work, fixture replacement.
3. Check the device's physical state: indicator LEDs, fixture lit/unlit, wall station LEDs.
4. Check power: is the circuit on? **(Qualified, energized, with PPE)** measure supply
   voltage at the device or its node if needed.
5. Check communication: for wired systems, verify cable connections, polarity, terminations
   and segment length/device count against the manufacturer's limits. **De-energize**
   before working on terminals that share enclosures with line voltage.
6. For wireless systems, check distance to the nearest powered node or gateway and for new
   obstructions.
7. Check gateway/controller status and network connectivity with site IT.
8. If a device was replaced, commission it per the manufacturer's procedure, using the
   original addressing and zone assignments.
9. Verify schedules, sensors and wall stations control the zone as designed afterward.

## When to escalate

- Whole-site or gateway-level outages
- Programming, re-commissioning or firmware updates beyond your authorization
- IT network issues (escalate to site IT and the controls integrator)
- Systems interfacing with life safety (emergency lighting control, UL 924 devices) or BMS

## Documentation

- Device IDs/addresses, zone, gateway, and what the software showed before and after
- Power/communication tests performed and results
- Devices replaced or commissioned, firmware versions
- Who was contacted (site IT, integrator, manufacturer) and ticket/case numbers
