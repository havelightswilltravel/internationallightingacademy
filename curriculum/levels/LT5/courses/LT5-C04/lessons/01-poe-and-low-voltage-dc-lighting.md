---
title: PoE and Low-Voltage DC Lighting
minutes: 30
video:
video_suggestion: >
  In a training lab, an LT5 technician shows a PoE lighting demo board: a PoE switch, patch panel,
  Category cable runs and PoE luminaires and sensors. Show checking a switch's power budget
  in its interface, terminating and certifying a cable, and a simple fault (one port over
  budget, fixture won't power). Close with the tech pointing out cable bundling and labeling.
---

> **Note:** Emerging technology changes quickly. This lesson covers well-established basics
> and must be reviewed at least annually by an SME for current standards, products and code
> changes.

## What PoE Lighting Is
**Power over Ethernet (PoE)** delivers DC power and data over the same twisted-pair
communications cable (Category 5e, 6, 6A). A **power sourcing equipment (PSE)** device,
usually a PoE network switch, powers **powered devices (PDs)** such as LED luminaires, sensors
and wall controls. Each luminaire gets its own cable run to a switch port, and the network
both powers and controls it.

Why owners choose it:
- Every fixture and sensor is a network device: individual control, occupancy and energy data.
- Low-voltage DC distribution can be installed by trained low-voltage technicians in many
  jurisdictions (check local licensing rules).
- Integration with IT and building systems.

Trade-offs:
- More cable runs (one per device) and more switch ports.
- Power losses in long or bundled cable runs.
- Dependence on network equipment, firmware and IT coordination.
- The switch becomes a single point of failure for many fixtures; plan UPS and emergency
  lighting accordingly.

## PoE Standards and Power Levels
The IEEE 802.3 family defines PoE. Power at the PD is lower than at the PSE because of cable
losses.

| Standard | Type | Max power at PSE port | Power available at PD |
|---|---|---|---|
| IEEE 802.3af | Type 1 | 15.4 W | 12.95 W |
| IEEE 802.3at | Type 2 | 30 W | 25.5 W |
| IEEE 802.3bt | Type 3 | 60 W | 51 W |
| IEEE 802.3bt | Type 4 | 90 W | 71.3 W |

PoE operates at roughly 44-57 V DC depending on type. Some manufacturers use proprietary
"PoE-like" systems; confirm compatibility before mixing products.

### Power budget
A PoE switch has a **total power budget** that may be less than the sum of its ports. Example:
a 48-port switch with a 740 W budget cannot run 48 luminaires at 25.5 W each (1,224 W). When
the budget is exceeded, ports may not power up or lower-priority ports may shut off. Always
compare the total load to the switch budget, with margin.

## Cabling Considerations
- **Heat in bundles:** Current through many cables in a tight bundle raises conductor
  temperature, which can exceed cable ratings and increase losses. The NEC addresses this for
  Class 2 and Class 3 cables carrying power and data, including ampacity limits based on bundle
  size and conductor size, and "limited power" (LP) cable markings such as CL2-LP. Article
  numbering was reorganized in the 2023 NEC; confirm the applicable section in the edition
  adopted locally.
- **Length:** Ethernet channels are generally limited to 100 m (328 ft) including patch cords.
- **Cable quality:** Use solid copper cable from reputable manufacturers. Copper-clad aluminum
  (CCA) cable is not compliant with Category cable standards and has higher resistance and heat.
- **Terminations:** Poor terminations add resistance and heat. Certify or at least test each
  run.
- **Labeling:** Label both ends with fixture ID and switch port. This makes troubleshooting
  practical.

> **Safety:** Although PoE is low-voltage DC, the PoE switches, UPS units and racks are fed
> from line-voltage circuits. Treat equipment rooms like any other electrical space. Follow LOTO
> for any work on the line-voltage feed, and never open switch or power supply enclosures.
> Lift and ladder hazards are the same as for any fixture installation.

## Other Low-Voltage DC Lighting Systems
- **Class 2 DC lighting** systems use centralized power supplies feeding fixtures at low
  voltage (commonly 24 V or 48 V DC) over Class 2 wiring, sometimes with separate control
  wiring.
- **LED tape and linear systems** often run on 12 V or 24 V DC constant-voltage drivers. Voltage
  drop over long runs causes dimming at the far end; feed long runs from both ends or the
  middle, or use higher-voltage strips.

Class 2 power supplies must be listed and installed per their listing. Class 2 wiring must be
separated from power and lighting conductors as the NEC requires (typically by barriers,
separate raceways, or spacing) unless a specific exception applies.

## Troubleshooting PoE Lighting
1. **Is the port delivering power?** Check the switch interface for PoE status and power draw
   per port.
2. **Is the switch over budget?** Compare total draw to the budget.
3. **Is the cable good?** Test continuity and pair mapping; check terminations.
4. **Is the device configured?** Many PoE fixtures need commissioning in software before
   they respond normally.
5. **Swap ports or cables** to isolate cable vs port vs fixture.
6. **Coordinate with IT** before changing switch settings, VLANs or firmware.

## Emergency Lighting with PoE
Emergency lighting still has to meet NFPA 101 and the NEC. Options include PoE fixtures with
listed emergency capability, switches on a UPS or emergency source designed and listed for the
purpose, or separate conventional emergency fixtures. Never assume a PoE system provides code
emergency lighting just because the network switch has battery backup; the design must be
reviewed by the engineer of record and AHJ.

## Key Takeaways
- PoE delivers DC power and data over Category cable from a PSE (switch) to PDs (fixtures, sensors).
- Know the IEEE types and power levels; power at the device is lower than at the port.
- Check the switch's total power budget, not just per-port ratings.
- Bundled cables carrying power heat up; follow NEC bundling and LP cable requirements.
- Use solid copper cable, keep channels within 100 m, and label both ends.
- Emergency lighting on PoE requires a listed, engineered solution; this topic needs periodic updating.
