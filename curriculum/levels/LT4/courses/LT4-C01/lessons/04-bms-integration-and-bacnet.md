---
title: BMS Integration & BACnet Basics
minutes: 30
video:
video_suggestion: >
  A lighting tech and the building's BMS technician sit side by side: the lighting tech shows the
  points list in the NLC software, the BMS tech shows the same points arriving in the BMS front
  end. They command a zone ON from the BMS, then show an occupancy status changing in real time,
  and finish by discussing who owns which IP addresses and device instances.
---

## Why Integrate Lighting with the BMS

A **building management system (BMS)** – also called a building automation system (BAS) – controls
HVAC and often other systems. Connecting the lighting controls to it lets the owner:

- See lighting status and energy use on the same screen as HVAC.
- Share **occupancy data** so HVAC can set back unoccupied zones.
- Run common **schedules** and holiday calendars.
- Shed lighting load during **demand response** events.
- Receive **alarms** for failed devices or offline gateways.

The lighting technician usually does not program the BMS, but you must deliver a working, documented
interface and be able to prove which side a problem is on.

## BACnet in Plain Language

**BACnet** (ASHRAE Standard 135, also ISO 16484-5) is the most common open protocol for building
automation. Key terms:

| Term | Meaning | Lighting example |
|---|---|---|
| Device | A BACnet node with a unique **device instance number** | The NLC gateway |
| Object | A data point inside a device | "Room 210 Lights" |
| Binary Value / Binary Output | On/off point | Zone ON/OFF command |
| Analog Value / Analog Output | Numeric point | Zone dim level 0–100% |
| Binary Input | Read-only on/off status | Occupancy status |
| Property | An attribute of an object | Present-Value, Status-Flags |
| BACnet/IP | BACnet over Ethernet/IP networks (UDP port 47808 by default) | Gateway on building LAN |
| BACnet MS/TP | BACnet over RS-485 twisted pair | Older field buses |
| PICS | Protocol Implementation Conformance Statement | Tells what a product supports |

Other protocols you may meet include **Modbus** (simple register-based), **LonWorks** (legacy), and
manufacturer REST/cloud APIs.

## The Points List

The **points list** is the contract between lighting and BMS. Agree on it in writing before
integration day. For each point list the name, object type, instance number, read or write,
units/states, and what it does. Example:

| Point name | Object | R/W | Description |
|---|---|---|---|
| L2-210-ZONE-CMD | BV-210 | W | Zone on/off command |
| L2-210-ZONE-LVL | AV-210 | R/W | Zone level 0–100% |
| L2-210-OCC | BI-210 | R | Occupied / unoccupied |
| L2-FLOOR-KW | AI-2 | R | Floor lighting demand, kW |
| GW-02-ALARM | BI-900 | R | Gateway offline / device fault |

## Integration Procedure

1. **Confirm network details** with the owner's IT or BMS contractor: IP address, subnet, gateway,
   VLAN, BACnet network number and a **unique device instance** for each lighting gateway.
   Duplicate device instances cause devices to disappear or respond erratically on the BACnet network.
2. **Configure the lighting gateway** with those settings and enable the BACnet interface.
3. **Expose only the agreed points.** Publishing every possible object clutters the BMS and slows the
   network.
4. **Verify communication** – the BMS tech discovers the gateway and reads points.
5. **Point-to-point test** each point: command from the BMS and watch the lights; change state in
   the space and watch the BMS value. Record results on the points list.
6. **Decide priority.** BACnet uses a 16-level priority array; agree on what priority the BMS writes at
   so it does not permanently override local wallstations or life-safety functions.
7. **Document** final addressing, points list with test results, and who to call for each side.

## Troubleshooting: Whose Problem Is It?

| Symptom | Check first |
|---|---|
| BMS cannot see the gateway | IP settings, VLAN/firewall, cable, device instance conflict |
| BMS sees gateway but values never change | Point mapping, wrong object instance |
| BMS command works but lights will not respond to wallstation afterward | BMS writing at a high priority and never releasing (relinquish) |
| Lights turn on at odd times | Competing schedules in BMS and NLC – choose one master schedule |

## Cybersecurity Basics for Technicians

Networked lighting is a computer on the owner's network. Protect it:

- Change all default passwords; store credentials in the company's approved system, not on sticky notes.
- Connect to the owner's network only with IT approval and only on the assigned VLAN.
- Do not install remote-access tools or enable cloud connections the owner has not approved.
- Keep firmware updated per the manufacturer and owner's change-control process.

> **Safety:** Remote or BMS commands can energize luminaires and relays while you are working on
> them. Software "off" is not an energy isolation device. Always de-energize at the breaker, apply
> LOTO and verify absence of voltage before working on line-voltage parts, and coordinate with the
> BMS operator so schedules or demand-response events do not surprise a crew in the ceiling.

## Key Takeaways
- BMS integration shares status, occupancy, schedules, demand response and alarms between lighting and HVAC.
- BACnet (ASHRAE 135) organizes data into devices, objects and properties; every device instance must be unique.
- The points list is the contract – agree on it in writing and point-to-point test every entry.
- Agree on command priority and a single master schedule to avoid fights between systems.
- Follow owner IT rules: change default passwords, use approved networks, no unapproved remote access.
- A remote "off" command never replaces LOTO.
