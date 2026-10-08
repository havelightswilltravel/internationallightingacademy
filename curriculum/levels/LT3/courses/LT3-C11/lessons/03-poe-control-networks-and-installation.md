---
title: PoE, Lighting Control Networks & Installation Practices
minutes: 35
video:
video_suggestion: >
  In a ceiling space and a telecom closet, the trainer shows a lighting control network with
  RJ45 patch cables between room controllers, a BACnet MS/TP twisted-pair daisy chain with an
  end-of-line terminator, a PoE switch feeding a PoE luminaire, and correct supports, labels and
  separation from power conduits.
---

## PoE Basics
**Power over Ethernet (PoE)** sends DC power and data over the same category cable. The power source
(a PoE switch or injector) is the **PSE**; the device receiving power (luminaire, sensor, camera,
wireless access point) is the **PD**. The two negotiate how much power to deliver before power is
applied.

| Standard (IEEE 802.3) | Common name | Approx. power at the source |
|---|---|---|
| 802.3af | PoE (Type 1) | up to about 15 W |
| 802.3at | PoE+ (Type 2) | up to about 30 W |
| 802.3bt | PoE++ (Type 3 / Type 4) | up to about 60 W / 90 W |

Less power arrives at the device than leaves the switch because some is lost in the cable.

### Why PoE matters for lighting
- **PoE luminaires** get power, dimming and control from one cable — no line-voltage branch circuit to
  each fixture.
- A bad termination now means **no light**, not just "no network."
- Cable bundles carrying high PoE power warm up, which is one reason Cat6A and smaller bundles are often
  specified.
- Plugs and jacks rated for PoE matter because contacts can arc slightly when unplugged under load.

PoE lighting systems, power budgets and system design are covered in **LT5-C04 Emerging Lighting
Technology**. At this level you need to terminate and test the cabling correctly and recognize that a
PoE port may be supplying power.

> **Safety:** PoE is low-voltage DC and is generally treated as a power-limited circuit, but the PoE
> switch and its power supply are fed from line voltage. Do not open network equipment. Unplug a PoE
> cable only with the customer's or IT department's permission — it may shut off lights or other
> devices.

## Lighting Control Network Cabling
Different lighting control systems use different cable. Always follow the manufacturer's riser
diagram and installation guide.

| System type | Typical cable and connector | What to watch for |
|---|---|---|
| **RJ45-based room/zone control networks** | Category cable with RJ45 plugs, daisy-chained or home-run between controllers, sensors and switches | Many systems are **not Ethernet** even though they use RJ45 — never plug them into a computer network switch; follow the maker's pinout (some use straight-through T568B, some require factory cables) |
| **Networked lighting controls on Ethernet** | Category cable to a network switch, often PoE | IT department may own the network; label carefully |
| **BACnet MS/TP** | Shielded twisted pair (usually 18–24 AWG, low-capacitance), daisy chain | Polarity (+/−) must be consistent, no star or "T" branches, end-of-line termination only at the two physical ends, shield grounded at one point per the design |
| **0–10 V, DALI and other low-voltage controls** | Class 2 conductors per manufacturer | Covered in LT3-C02/C03 |

### BACnet MS/TP introduction
**BACnet** is a common building-automation protocol. **MS/TP** (master-slave/token-passing) is its
twisted-pair version, used to link lighting panels, BMS controllers and other devices. Key ideas:

1. Devices are wired in a **daisy chain** — in and out of each device, one continuous line.
2. Each device has a unique **address** and must use the same **baud rate**.
3. **Terminating resistors** go at the two ends of the chain only.
4. Keep polarity consistent at every device.
5. A single reversed or loose connection can drop every device beyond it.

At LT3 you should be able to identify MS/TP cable, check connections and polarity, and report what you
find. Addressing and configuration are done by the controls contractor.

## Separation From Power Conductors
Communications and Class 2 cables must be **kept separated from power and lighting conductors** unless
a listed barrier or a permitted method is used. In practice:

- Never install data cable in the same raceway, box or enclosure compartment as line-voltage conductors
  unless a listed barrier separates them.
- Cross power cables at right angles where possible, and keep distance from ballasts, drivers,
  transformers and motors to reduce interference.
- Support cable from the building structure with listed supports — **not** on ceiling tiles, ceiling
  grid wires, sprinkler pipes or conduit.
- Do not exceed the cable's minimum bend radius or crush it with tight cable ties; use hook-and-loop
  straps.
- Firestop any penetration through a fire-rated wall or floor per the firestop system used on site.

The NEC requirements for communications and power-limited circuits are in Chapters 7 and 8 of the 2023
NEC; the AHJ-adopted edition and the job specification govern.

## Labeling
Label **both ends** of every cable and every jack and patch-panel port with the same identifier, using
the site's scheme (for example, closet–panel–port). Update the drawing or cable schedule. Unlabeled
cable turns a 5-minute fix into an afternoon of tracing.

## Key Takeaways
- PoE carries power and data; for PoE luminaires a bad termination means no light.
- PoE systems design is covered in LT5-C04; at LT3, terminate, test and respect active PoE ports.
- Many lighting control systems use RJ45 but are not Ethernet — follow the maker's pinout and never mix
  them with the IT network.
- BACnet MS/TP is a daisy-chained twisted pair with consistent polarity and termination only at the ends.
- Keep data cable separated from power, supported from structure, and labeled at both ends.
