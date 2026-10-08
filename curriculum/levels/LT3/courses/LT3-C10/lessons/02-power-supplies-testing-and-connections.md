---
title: Power Supplies, Testing & Connections
minutes: 35
video:
video_suggestion: >
  A qualified technician measures input voltage at an LED sign power supply, then measures the
  secondary at the output both disconnected and with the module string connected, showing a supply
  that reads zero with no load and 24 V once loaded. The video then compares an IDC snap connector,
  a gel-filled connector and a soldered, heat-shrunk splice, including a corroded connector
  removed from a letter.
---

## Input vs Secondary (Output) Testing
Every LED sign diagnosis starts with two questions: **Is power getting into the supply?** and
**Is the right voltage coming out?**

| Test | Where | Expected reading | Who |
|---|---|---|---|
| Line (input) voltage | Power supply input terminals or leads | Nameplate voltage, e.g. 120 V or 277 V | Qualified person per NFPA 70E — energized line-voltage test |
| Secondary (output) voltage | Output leads, with modules connected | Close to rated output, e.g. 11.5–12.5 V or 23–25 V | Authorized tech |
| Voltage at the end of a run | Last module or far connector | Within the module's allowed range | Authorized tech |

> **Safety:** Measuring line voltage is energized work. Only qualified persons with the correct
> meter (CAT III/IV), PPE and an energized-work justification under the employer's NFPA 70E program
> perform it. For everything else — opening connectors, swapping modules, changing a supply — lock
> out the sign disconnect and verify absence of voltage (live-dead-live) first.

## Power Supplies That Will Not Read Without a Load
The company guide warns: *"Some transformers have a cut out on them and will not read secondary
power if they are not hooked up to any modules."* This is real. Many electronic LED power
supplies have **no-load or open-circuit protection**: with nothing connected they shut down,
"hiccup" (pulse on and off), or read a low, unstable voltage. A meter on the bare output leads
can make a perfectly good supply look dead.

Other supplies do the opposite and shut down because of an **overload or short** on the output —
a pinched wire or a water-damaged module can make the supply protect itself.

How to test correctly:

1. Check the output **with the module string connected** (back-probe the connector or measure at
   the first module) whenever possible.
2. If the output reads zero, **lock out**, then **check and remake the secondary connections**
   — this is the step the company guide stresses: "check and recheck the secondary connections."
3. If it still reads zero with a good load connected, disconnect the string and test the supply
   with a **known-good test module or short test string** connected.
4. If the supply works on the test load but not the sign, the problem is in the sign wiring or
   modules (short, overload, open). If it fails on the test load and input voltage is good, the
   supply is bad.

## Connectors and Splices
The company guide says connections "are more often than not the issue." Know each type:

| Connector type | How it works | Use and cautions |
|---|---|---|
| **IDC (insulation displacement) snap connector** | Metal blades pierce the insulation when the cap is snapped shut | Fast; used by many module systems. Must be the correct size for the wire; wire must be fully seated before closing; cannot be reused reliably |
| **Gel-filled connector** | A twist-on or push connector pre-filled with sealant gel | Good for damp/wet locations; use the listed size for the number and gauge of wires |
| **Soldered splice** | Wires soldered and covered with adhesive-lined heat-shrink | Strong and corrosion-resistant if done right; requires skill and clean joints |
| **Manufacturer plug connectors** | Molded keyed plugs on module strings | Keep them dry; check pins for corrosion |

Common connection faults:

- Green or white **corrosion** from water inside the letter.
- IDC blade that **missed the strand** (wire not fully seated) — works at first, fails later.
- **Polarity reversed** — LEDs are polarity sensitive; a reversed string will not light (and
  some may be damaged). Positive is usually marked red or with a stripe.
- Wire pulled out by modules that fell off when adhesive failed.

## Mounting Modules
- **Adhesive tape:** clean the letter can with isopropyl alcohol and let it dry before sticking
  modules. Dirty, oily or very cold surfaces cause adhesive failure.
- **Screws, rivets or straps:** many shops add mechanical fastening in hot climates or on large
  letters because adhesive softens in heat.
- Space modules per the manufacturer's layout chart for even light on the face without "hot
  spots."
- Keep modules and wiring out of standing water — mount them up off the bottom of the can and
  keep **drain (weep) holes open**.

## Water Intrusion
Water is the main enemy of outdoor LED signs. Signs of trouble: corrosion on connectors, water
lines inside the can, fogged faces, and modules out at the bottom of letters. Correct the source:
clear drain holes, reseal face trim and wire penetrations with an appropriate sealant, use
gel-filled or wet-rated connectors, and confirm the power supply is rated and enclosed for the
location (wet-location or rated enclosure; IP65 or higher is common for outdoor supplies).

## Key Takeaways
- Test input (line) voltage only if qualified; test secondary with the modules connected.
- Many supplies show no output with no load — never condemn a supply on an unloaded reading.
- Check and recheck secondary connections before replacing a power supply.
- Use the right connector for the location and wire size; watch polarity.
- Keep drain holes open and stop water at the source.
