---
title: 3-Way Dimmers, Smart Switches and Occupancy Controls
minutes: 30
video:
video_suggestion: >
  Tech compares three products on a bench: a traditional 3-way dimmer paired with a standard
  3-way, a smart dimmer with a wireless companion, and an occupancy sensor with a 3-way
  companion. Shows the neutral requirement printed on each box, then installs the smart kit
  in a power-to-switch mock-up and demonstrates the minimum-load and LED-compatibility labels.
---

## Why This Matters

Customers ask for dimming, smart control and occupancy sensing on existing 3-way circuits all the
time. These devices do **not** all wire like ordinary 3-ways, and a wrong choice causes callbacks:
lights that will not turn off fully, flicker, buzz or work from only one location.

## Traditional 3-Way Dimmers

A standard (non-smart) 3-way dimmer replaces **one** of the two 3-way switches. The other location
stays a regular 3-way switch.

```
 H ──► [COM  3-WAY DIMMER]               [3-WAY SWITCH  COM] ──► switch leg ──► (L)
             T1 ═══════ traveler A ═══════ T1
             T2 ═══════ traveler B ═══════ T2
```

Key points:

- **Only one dimmer** per circuit in a traditional setup. Two standard 3-way dimmers on the same
  travelers will not work properly.
- The dimmer can usually go at either location, but it dims only from its own location; the
  other switch just turns the light on and off.
- Match the dimmer to the load type: incandescent/halogen, magnetic low-voltage (MLV),
  electronic low-voltage (ELV), or LED/CFL. LED loads need an LED-rated dimmer **and** a
  dimmable LED lamp or driver listed as compatible.
- Observe **wattage derating** when dimmers are ganged and side fins are broken off — read the
  instruction sheet.

## Multi-Location Smart and Electronic Dimmers

Most smart and electronic multi-location systems use a **main dimmer** plus **companion
(auxiliary/remote) devices**. Companions are not ordinary 3-way switches.

| Approach | How it works | Field notes |
|---|---|---|
| Wired companion | Companion connects to the main through one traveler; the other existing traveler may be capped or re-used per instructions | You must use the manufacturer's matching companion |
| Wireless companion | Battery remote mounted in the old switch box; the main dimmer gets the line hot and switch leg; travelers are spliced through or capped | Simplest when travelers are questionable |
| Two "smart" mains talking wirelessly | Each location is powered, linked by app or radio | Needs power (and often neutral) at both boxes |

Always follow the specific product's wiring diagram. The traveler roles on the old 3-way do not
carry over automatically.

## Neutral at the Switch

Many smart switches, occupancy sensors and electronic timers need a **neutral** in the box to power
their electronics. Some "no-neutral" models leak a small current through the load instead, which
can make LED lamps glow or flicker when off.

How to tell if a neutral is present (de-energized inspection after LOTO and live-dead-live
verification):

| What you see in the box | Likely situation |
|---|---|
| Bundle of white conductors spliced together and tucked in the back | Neutral present (power-to-switch layout) |
| Only one cable, with the white re-identified or used as a hot | Switch loop — **no neutral** (power-to-fixture layout) |
| White conductors landed on switch terminals | They are being used as hots/travelers, not neutrals |

> **Safety:** Do not "borrow" a neutral from a different circuit or another box, and never use the
> equipment grounding conductor as a neutral. Both create shock and fire hazards and violate the
> code. If a device needs a neutral and the box does not have the correct one, choose a no-neutral
> device listed for the application or **write it up** for an electrician to add one. The current
> NEC generally requires a neutral at most new switch locations, but older buildings often lack
> one — the AHJ-adopted edition governs.

## Occupancy and Vacancy Sensors in 3-Way Circuits

Wall-box occupancy sensors are available in 3-way configurations. Common arrangements:

1. **Sensor + standard 3-way:** the sensor replaces one 3-way switch and is wired per its 3-way
   diagram; the other location keeps a mechanical 3-way.
2. **Two sensors (main + companion):** both locations sense motion and share control.
3. **Ceiling sensors with a power pack:** the wall switches become low-voltage stations or the
   sensor contacts are wired into the control circuit (covered in later controls courses).

Check: line voltage (120/277 V), load type (LED, fluorescent, incandescent), minimum and maximum
load, and neutral requirement. Many commercial occupancy sensors are 277 V only or dual-voltage.

## Troubleshooting Control Devices on 3-Way Circuits

| Symptom | Check |
|---|---|
| LEDs glow or flicker when off | No-neutral device leaking through load; add load minimum adapter per maker, use neutral model, or write up |
| Dims poorly or drops out at low end | Dimmer/LED compatibility; adjust low-end trim if the device has it |
| Works from main only | Companion not matched, traveler landed wrong, or companion not paired (wireless) |
| Sensor never turns lights off | Time delay set long, sensitivity high, HVAC airflow triggering, or 3-way companion miswired to bypass |
| Device dead, no indicator | No power or no neutral; verify line and neutral connections (de-energized) |

Use the same discipline as Lesson 3: confirm the complaint, wiggle the device, de-energize and
inspect connections, trace with the device's diagram, then restore and test every location.

## Ordering Information

When ordering a multi-location control, record:

- Brand and **model of the main** and the **matching companion**
- Voltage (120, 277 or 120/277 V) and load type
- Maximum and minimum load (watts or VA), and derating if ganged
- Neutral required: yes / no
- Color, style (toggle, paddle, decorator) and wall plate size
- Number of locations controlled

## Key Takeaways
- A traditional 3-way dimmer replaces only one switch; the other stays a standard 3-way.
- Smart and electronic multi-location dimmers use a main plus a **matched companion**; follow that product's diagram.
- Many smart switches and sensors need a neutral; never borrow one from another circuit or use the ground.
- Match load type, voltage, minimum load and neutral requirement before ordering.
- If a neutral or new conductors are needed, write it up for an electrician.
