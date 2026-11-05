---
title: Building Automation Systems and Integration
minutes: 35
video:
video_suggestion: >
  A controls technician at a building automation workstation shows a graphic of an air handler,
  then walks to the mechanical room to show the field controller, a duct temperature sensor,
  a damper actuator on 0–10 V, a VFD on BACnet MS/TP, and a lighting control panel integrated
  over BACnet/IP. Demonstrates a trend log identifying a stuck damper.
---

## What a BAS Does
A **building automation system (BAS)** — also called a building management system (BMS) or
energy management system — monitors and controls a building's mechanical, lighting, and
electrical systems to keep occupants comfortable and minimize energy use. As a lighting
technician you met networked lighting controls in LT4. As an EA4, you install the power and
control wiring for BAS controllers and field devices and help integrate electrical equipment
(meters, VFDs, lighting panels, generators) into the BAS.

## Architecture
| Level | Equipment | Typical network |
|---|---|---|
| Management | Servers, workstations, web interface | Ethernet (BACnet/IP) |
| Automation | Building/network controllers, routers | BACnet/IP, Modbus TCP |
| Field | Unitary controllers (VAV boxes, rooftop units), VFDs, meters | BACnet MS/TP (RS-485), Modbus RTU (RS-485) |
| Devices | Sensors, actuators, relays | Hard-wired analog/digital I/O |

## Common Protocols
| Protocol | Notes |
|---|---|
| **BACnet** (ASHRAE Standard 135) | The dominant open protocol for building automation. BACnet/IP runs on Ethernet; BACnet MS/TP runs on RS-485 twisted pair. Devices expose standard "objects" (analog input, binary output, schedule) |
| **Modbus** (RTU and TCP) | Simple, widely used for meters, VFDs, generators; data read from numbered registers |
| **LonWorks** | Older open protocol still found in existing buildings |
| **DALI / DALI-2** | Digital lighting control at the luminaire/driver level |
| Proprietary | Many lighting and HVAC vendors use their own protocols, integrated through gateways |

## RS-485 Wiring Rules (MS/TP and Modbus RTU)
RS-485 is a robust two-wire differential bus, but it is unforgiving of poor wiring:
- **Daisy-chain** devices — no stars or long stubs.
- Use the cable type specified (shielded twisted pair, typically 22–24 AWG, low capacitance).
- **Terminate** each physical end of the segment with the specified resistor (often 120 Ω); not
  in the middle.
- Maintain consistent polarity (+/− or A/B) at every device; manufacturers are not consistent in
  labeling, so follow the submittal.
- Ground the shield at one point only.
- Respect segment length and device count limits (commonly up to 4,000 ft and a limited number
  of devices per segment without repeaters).

## Field Devices You Will Wire
| Device | Signal |
|---|---|
| Space or duct temperature sensor | Thermistor or RTD (resistance) to an analog input |
| Damper or valve actuator | 0–10 V or 2–10 V analog output; 24 V AC power |
| Current switch on a fan motor lead | Digital input confirming the fan is actually running (status) |
| Occupancy sensor | Dry contact to a digital input |
| Relay to start a pump | Digital output driving a relay coil; relay contacts in the starter's control circuit |
| Power meter | Modbus or BACnet communication, with CTs and voltage taps |

### Worked Example: Actuator Transformer Sizing
Six damper actuators each draw **7 VA** at 24 V AC, and the controller draws **15 VA**.
Total = 6 × 7 + 15 = **57 VA**. A **75-VA Class 2** transformer provides margin while staying
within the 100-VA Class 2 limit. If the load were 110 VA, split it between two Class 2
transformers — do not use a larger non-Class-2 transformer without switching to Class 1 wiring
methods.

## Electrical Code Considerations
- Most BAS field wiring is **Class 2** (2023 NEC Article 725) when powered by listed Class 2
  sources; maintain separation from power conductors and use correctly rated cable in plenums.
- Controllers mounted in panels with 120-V power must keep Class 2 wiring separated by barriers
  or as permitted.
- Interfaces to life-safety systems (fire alarm smoke control, elevator recall, fire/smoke
  dampers) are governed by NFPA 72, the building code, and listing requirements — the BAS
  generally must **not** be the only means of performing a fire safety function unless listed
  for it.
- Energy codes (ASHRAE 90.1, IECC) often require automatic lighting shutoff, demand response
  capability, and energy metering that the BAS provides.

## Integration and Commissioning
1. Verify every point: compare what the BAS graphic shows with the actual device (measure
   temperature, stroke the actuator, start the fan).
2. Check alarms and setpoints with the controls contractor.
3. Document addresses, baud rates, device instances, and register maps.
4. Trend data to confirm sequences operate as designed.

> **Safety:** A BAS can start fans, pumps, and compressors remotely at any time on a schedule
> or alarm. Before working on driven equipment, put the BAS point in hand-off or override at
> the controller **and** apply lockout/tagout at the equipment disconnect — a BAS override is not
> an energy-isolating device. Verify absence of voltage at the equipment before work.

## Key Takeaways
- BAS architecture runs from management workstations to field controllers to hard-wired devices.
- BACnet (IP and MS/TP) and Modbus (TCP and RTU) are the most common protocols.
- RS-485 buses must be daisy-chained, polarized consistently, terminated at the ends, and
  shielded at one point.
- Size Class 2 control transformers to the total VA, staying within the 100-VA limit.
- Never treat a BAS override as lockout; isolate energy at the equipment.
