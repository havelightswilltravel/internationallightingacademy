---
title: HOA Switches, Lighting Relay Panels & BMS Control
minutes: 35
video:
video_suggestion: >
  In a training room with a de-energized lighting relay panel open, the trainer shows the
  Class 2 control section and the line-voltage relay section separated by a barrier, points out
  latching relays, relay cards, the panel processor, manual override buttons and the bypass
  switch, then shows a front-end screen from a monitoring service where a zone schedule is viewed.
---

## The HOA Switch
A **HAND-OFF-AUTO (HOA)** selector switch sits in the coil circuit of most lighting contactors.

| Position | What happens | When it is used |
|---|---|---|
| **HAND** | Coil energized directly, bypassing the time clock, photocell, sensor or BMS | Testing, or a temporary override authorized by the customer |
| **OFF** | Coil circuit open | Holding lights off for work or by customer request |
| **AUTO** | Coil controlled by the automatic control devices | Normal operation |

Some panels use a two-position ON/AUTO switch, push buttons, or a key switch instead. Many HOA
switches have a pilot light that shows when the coil is energized.

Using the HOA is the fastest way to split a problem in half:

- **Lights work in HAND but not AUTO** — the contactor and load circuits are fine; the problem is
  in the automatic control path (clock, photocell, sensor, BMS output, control wiring).
- **Lights do not work in HAND** — the problem is the control power, the HOA itself, the coil, the
  contacts or the load circuits.
- **Lights stay on in OFF** — contacts may be welded, or the lights are fed from another source.

> **Safety:** Before you turn an HOA to HAND or OFF, tell the customer. Turning parking-lot lights
> off at night, or lights on in an area being cleaned, can create a hazard. Always return the switch
> to the position the customer expects (usually AUTO) and confirm it operates before you leave.

## Lighting Relay Panels
A **lighting relay panel** (also called a lighting control panel) is a cabinet that holds many
individual relays, each switching one branch circuit, plus a processor that tells them when to
switch. They are common in big-box retail, schools, offices and warehouses.

| Component | What it does |
|---|---|
| **Enclosure with barrier** | Separates the Class 2 low-voltage section from the line-voltage section |
| **Latching (mechanically held) relays** | Switch individual branch circuits; hold their position without continuous power |
| **Relay cards / relay boards** | Plug-in or bolted boards that carry several relays and their drivers |
| **Processor / controller board** | Holds schedules, receives inputs, and sends ON/OFF pulses to the relays |
| **Low-voltage switch inputs** | Terminal blocks for wall switches, photocells, occupancy sensors that send low-voltage signals |
| **Power supply / transformer** | Converts line voltage to the low voltage that runs the boards |
| **Network connection** | Data or twisted-pair cable to a BMS, a monitoring service, or other panels |
| **Manual override buttons** | Small buttons on relays or the board that switch a relay by hand |
| **Bypass switch** | Turns all relays (or a group) ON regardless of the processor — used when the controls fail |
| **Line-voltage wiring** | Branch circuits from the panelboard to the relay line terminals and out to the loads |

### Low-voltage switching
In a relay panel, the wall switch does **not** carry the lighting load. It sends a small signal
(often 24 V) to the panel, which then switches the relay. That is why a wall switch can control
several circuits on different breakers, and why replacing a "bad switch" with a standard line-voltage
switch is a serious mistake.

### Panel bypass
The bypass forces lights on. It is a tool for keeping a store open when the controls fail — not a
repair. Using it can override schedules, energy-code shutoff and emergency functions. Use it only
with the customer's approval and note it on the work order so it is removed later.

## BMS and Monitoring-Service Control
Many facilities, especially chains, have their lighting run by a **building management system
(BMS)** or a **remote monitoring service**. The panel's schedule may be set from a central office
hundreds of miles away. The monitoring service can usually:

- See whether each zone is commanded on or off
- See status from auxiliary contacts or current sensors
- Change schedules and send manual overrides
- Read alarms such as a lost panel connection

This changes how you troubleshoot. If a zone will not come on, the panel may be working perfectly
and simply following a wrong schedule, a holiday setting, or an override someone left in place.

## Company Procedure for Relay Panels
The company's procedure for relay panels is short and practical, and it should be followed in this
order:

1. Get the facility's controls monitoring service contact from the store manager or work order.
2. Call the monitoring service and identify yourself, the site and the zones affected.
3. **Troubleshoot by phone with them until the problem is located.** Ask them to read the zone
   status, schedule and any overrides, and to command the zone on and off while you watch or listen.
4. If a relay clicks but the lights stay off, or the panel shows a fault the service cannot clear,
   the problem is likely hardware (relay, card, power supply or wiring).
5. **In most cases relay-panel hardware work requires an electrician.** Write it up with the panel
   name, relay or circuit numbers, what the service saw, and what you observed.

> **Safety:** The Class 2 side of a relay panel is low voltage, but line-voltage relays and branch
> circuits are in the same cabinet. Do not remove barriers or dead fronts unless you are qualified and
> the panel is locked out and verified de-energized. Relay replacement is electrician work unless
> your company has qualified you for it.

## Key Takeaways
- HAND/OFF/AUTO splits a problem into "controls" versus "contactor and circuits" in seconds.
- Tell the customer before changing an HOA, and leave it in AUTO (or as they expect).
- Relay panels use latching relays and low-voltage switching; wall switches send signals, not load.
- The bypass is a stop-gap with customer approval, not a repair.
- When a monitoring service controls lighting, call them first and troubleshoot by phone.
- Most relay-panel hardware work is written up for an electrician.
