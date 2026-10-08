---
title: Energy Storage Systems
minutes: 35
video:
video_suggestion: >
  In a garage, an installer shows a wall-mounted lithium-ion home battery, its hybrid inverter,
  the backup loads panel, and the outside emergency disconnect. The instructor explains each
  operating mode (self-consumption, backup, time-of-use), then demonstrates a grid outage where
  the system islands and powers the backup panel, and finishes with a full lockout of all
  three sources.
---

## What an ESS Is
An **energy storage system (ESS)** stores energy and releases it later. In buildings it is
almost always a **lithium-ion battery** with an inverter or power conversion system. ESSs are
used for backup power during outages, self-consumption of PV production, time-of-use bill
savings, and grid services. The 2023 NEC covers ESSs in **Article 706**, with storage batteries
in Article 480 and interconnection in Article 705 (AHJ-adopted edition governs). Fire and
building codes (IFC, IRC, NFPA 855) separately limit **where** an ESS may be installed and **how
much** capacity is allowed in each location — check them during design.

## Listing
ESSs must be **listed** (706.5). Pre-engineered residential systems are generally listed to
**UL 9540**, with the battery cells and modules evaluated under related standards and fire
propagation testing (UL 9540A) used by fire codes. Never assemble a "home-built" battery bank
from unlisted components for a building system.

## System Configurations
| Configuration | Description |
|---|---|
| AC-coupled | Battery has its own inverter connected on the AC side; easy to add to an existing PV system |
| DC-coupled | Battery and PV share a hybrid inverter on the DC side; efficient for new systems |
| Whole-home backup | Transfer equipment isolates the entire service from the utility during outages |
| Partial (critical loads) backup | Selected circuits moved to a backup loads panel |

When the utility fails, the system must **isolate from the grid** (an automatic disconnect or
microgrid interconnect device) before supplying premises loads. This prevents backfeed onto
utility lines that line workers believe are dead.

## Capacity and Runtime Calculations
**Energy (kWh) = Amp-hours × Nominal voltage ÷ 1,000**

### Worked Example 1
A battery is rated 200 Ah at 51.2 V nominal.
- Energy: 200 × 51.2 ÷ 1,000 = **10.24 kWh**
- Usable at 90% depth of discharge: 10.24 × 0.90 = **9.22 kWh**
- Inverter efficiency 95%: 9.22 × 0.95 = **8.76 kWh** delivered to AC loads

### Worked Example 2: Backup Runtime
Critical loads average 1.1 kW (refrigerator, lights, internet, furnace blower, well pump cycling).

Runtime ≈ 8.76 kWh ÷ 1.1 kW = **7.96 hours** ≈ 8 hours without PV recharge.

### Worked Example 3: Peak Power Check
The well pump has a locked-rotor (starting) demand of 5.5 kW for about 1 second, while the
battery inverter is rated 5 kW continuous and 7 kW for 10 seconds. The surge rating covers the
start — but if the pump starts while the other critical loads (1.1 kW) are running, the
combined surge is 6.6 kW, still under 7 kW. Always check both **energy (kWh)** and **power
(kW, continuous and surge)**.

## Installation Requirements (Overview)
- **Disconnecting means (706.15):** a disconnect for all ungrounded conductors from the ESS,
  readily accessible, within sight of the ESS or lockable in the open position. For one- and
  two-family dwellings, an emergency shutdown or disconnect means in a readily accessible
  location outside the building is required by the 2023 NEC; verify the current text and the
  AHJ's interpretation.
- **Labels:** identify the ESS as a source on service equipment and panelboards (705.10), with
  the location of disconnects.
- **Conductors and OCPD:** size from the ESS manufacturer's maximum continuous current; OCPDs are
  required at the ESS output as specified in 706 and the listing.
- **Working space:** maintain 110.26 working clearances in front of the ESS and its disconnects.
- **Busbar rule:** an ESS backfeeding a panelboard counts toward the 705.12 busbar calculation
  just like a PV inverter, unless a listed power control system limits the current (705.13).
- **Location:** follow the manufacturer's clearances, temperature limits, and protection from
  vehicle impact in garages, and the fire-code limits on location and capacity.

> **Safety:** A battery cannot be "turned off" internally — its terminals are always energized.
> Lithium-ion batteries can deliver very high DC fault currents and can enter **thermal runaway**
> if damaged, overcharged, or shorted, producing toxic and flammable gases. Use insulated tools,
> follow the manufacturer's shutdown sequence, open the battery disconnect and lock it out,
> verify zero voltage on the downstream conductors, and never drop a tool across battery
> terminals. A system with PV, utility, and battery has **three sources** — lock out all of them.

## Commissioning
1. Verify the firmware and grid profile required by the utility.
2. Test islanding: open the utility main; confirm the system transfers within its specified time
   and the backup loads stay on.
3. Confirm the system will not backfeed the utility side when islanded (measure at the line side
   of the main with it open).
4. Verify CT orientation for consumption monitoring.
5. Document operating modes and train the owner, including how to use the emergency shutdown.

## Key Takeaways
- ESSs are covered by NEC Article 706 (with 480 and 705) and must be listed (typically UL 9540).
- Fire and building codes limit ESS location and capacity — check them early.
- kWh = Ah × V ÷ 1,000; account for depth of discharge and inverter efficiency.
- Check both energy (runtime) and power (continuous and surge).
- Lock out every source: utility, PV, and battery. Battery terminals are always live.
