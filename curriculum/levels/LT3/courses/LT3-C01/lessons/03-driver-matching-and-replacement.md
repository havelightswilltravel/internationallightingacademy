---
title: Matching & Replacing an LED Driver
minutes: 35
video:
video_suggestion: >
  Field footage of a technician replacing a failed driver in a 2x4 LED troffer: LOTO and
  live-dead-live, photographing the old driver label and wiring, checking the LED board label,
  selecting a replacement from the truck stock, setting its output current, mounting it, and
  testing full output and dimming.
---

## Why Matching Matters
A replacement driver that "fits in the box" is not necessarily a match. A wrong driver can
overdrive the LEDs (early failure, voided warranty), underdrive them (dim fixture that does not
match its neighbors), refuse to dim with the existing control, or fail to start at all.

## Step 1 — Confirm the Driver Is Actually the Problem
Follow the LT2-C06 troubleshooting method before buying parts:

1. Verify the complaint. Is it one fixture or the whole zone? (A whole zone usually points to
   the circuit or control, not a driver.)
2. With proper PPE, verify input voltage at the driver input leads. No voltage = upstream
   problem.
3. With input present, measure output. For a CC driver, a DC voltage reading across the LED
   leads that is within the output range with LEDs dark often means an open LED board; zero
   output with good input points to the driver. For a CV driver, check for the rated 12/24 VDC.
4. Check for 0–10V dimming problems (a shorted dimming pair holds the fixture at minimum,
   which can look like "very dim" or, on some drivers, "off").

> **Safety:** Measuring input and output requires working on or near exposed energized parts.
> Only perform energized diagnostic measurements if your employer authorizes it, with the
> PPE and procedures from its NFPA 70E program. For all wiring work, apply LOTO and verify
> absence of voltage first.

## Step 2 — Collect the Data
Photograph the old driver label and the wiring before you disconnect anything. Record:

| Item | Where to find it | Example |
|---|---|---|
| Driver type | Driver label | Constant current |
| Output current (CC) or voltage (CV) | Driver label | 1050 mA |
| Output voltage range (CC) | Driver label | 22–42 VDC |
| Max output power | Driver label | 44 W |
| Number of outputs/channels | Driver label | 1 |
| Input voltage | Driver label | 120–277 VAC |
| Dimming type | Driver label | 0–10V, 1% min |
| Form factor & mounting | Measure; look at studs | Linear case, 30 mm wide |
| LED module current & Vf | LED board label or fixture spec | 1050 mA, 36 V |
| Listing / Class 2 | Driver label | UL Listed or Recognized, Class 2 output |

Also look for the luminaire label, which often lists the original driver part number and the
LED module ratings. The fixture manufacturer's replacement part is the safest choice; if it is
not available, use the data above to select an equivalent.

## Step 3 — Check the Match
A replacement CC driver is a match when **all** of these are true:

- Output current equals the module's rated current (or the driver can be programmed to it).
- Module forward voltage is **inside** the driver's output voltage range — ideally not right at
  either edge.
- Driver power rating is at least the module's power (current × Vf).
- Dimming type matches the existing control (0–10V, phase, DALI, etc.) and minimum dim level is
  acceptable.
- Input voltage rating covers the circuit voltage (a 120–277V driver will not survive 347V or
  480V).
- It fits, mounts to metal for heat transfer, and its Tc point will stay within limits.
- It is suitable for the location (damp/wet, ambient temperature) and is a listed or
  recognized component appropriate for field replacement.

**Modifying a listed luminaire.** Replacing a driver with a non-original part can affect the
luminaire's listing. Use the manufacturer's approved replacement where possible, or a
retrofit kit/driver whose instructions permit the replacement. When in doubt, ask your
supervisor — the AHJ may care.

## Step 4 — Install
1. Apply LOTO; verify absence of voltage at the luminaire with a tested meter (live-dead-live).
2. Disconnect and remove the old driver. Note any emergency driver or sensor wired into the
   fixture — **emergency drivers have batteries and can energize the LEDs even with the breaker
   off.** Unplug the battery connector before working on the output side.
3. If programmable, set the output current **before** connecting LEDs or energizing.
4. Mount the new driver to the housing with the original screws or studs. Do not leave it
   hanging on its leads.
5. Connect line, neutral and ground. Connect LED + and − with correct polarity. Connect dimming
   leads (violet + to +, gray − to −). Cap unused leads individually per instructions.
6. Route Class 2 output and dimming leads away from line-voltage leads; use the fixture's
   barriers or separate wireways.
7. Dress wiring away from sharp edges and hot surfaces, close the fixture, remove LOTO per your
   procedure.

## Step 5 — Verify and Document
- Restore power and check the fixture reaches full output and matches its neighbors in
  brightness and color.
- Run the dimming control from high to low and back. Watch for flicker or drop-out at the low
  end.
- If a sensor or emergency driver is present, test it too.
- On the work order, record the old and new part numbers, settings (output current, DIP
  positions), and test results. Attach photos.

## Common Mistakes
| Mistake | Result |
|---|---|
| Leaving a programmable driver at factory default | Overdriven or dim LEDs |
| Using a 120–277V driver on a 347V or 480V circuit | Instant failure |
| Reversing LED polarity | No light |
| Swapping dimming leads | No dimming or stuck at full |
| Driver not fastened to metal | Overheating, short life |
| Ignoring the emergency battery | Shock or damaged parts |

## Key Takeaways
- Prove the driver is the failure before replacing it.
- Record full driver and LED module data, and photograph labels and wiring first.
- A match requires correct current, a voltage window that covers the module's Vf, adequate
  power, matching dimming and input voltage, and proper fit and listing.
- Set programmable drivers before energizing; disconnect emergency batteries before work.
- Verify full output, dimming and color, then document.
