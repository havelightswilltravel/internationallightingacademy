---
title: Live-Dead-Live Verification of Absence of Voltage
minutes: 30
video:
video_suggestion: >
  Real-time, uncut demonstration at a locked-out 277 V troffer: the technician (in required
  PPE, with a qualified supervisor present) inspects the meter, proves it on a proving unit,
  tests every conductor combination at the fixture, then re-proves the meter. On-screen
  captions list each test point. Add a second short clip showing what to do when a
  "dead" circuit reads 277 V: stop, step back, call the supervisor.
---

## Why We Test Before We Touch

Locking out a breaker is not enough by itself. The panel schedule might be wrong, the
fixture might be fed by two circuits, someone might have back-fed a circuit, or the meter
might be broken. The only way to know a conductor is safe is to **test it with a working
meter at the point of work.**

OSHA requires that before any circuit is treated as de-energized, the test equipment be
used to verify that the circuit elements are de-energized and that the tester be checked for
proper operation **immediately before and immediately after** the test (29 CFR 1910.333(b)(2)).
NFPA 70E (Article 120) describes the same process as part of establishing an **electrically
safe work condition**. The method is called **live-dead-live**.

> **Safety:** Until absence of voltage is verified, the conductors are considered energized.
> OSHA and NFPA 70E assign this test to a **qualified person**. At LT1, you perform it only after
> training, wearing the PPE required by our electrical safety program, and under the **direct
> supervision of a qualified person** until the company documents that you are qualified for
> this specific task.

## The Live-Dead-Live Method

| Step | Action | What you are proving |
|---|---|---|
| **1. LIVE** | Test the meter on a **known live source** of similar voltage or a proving unit | The meter, leads, battery, and setting work |
| **2. DEAD** | Test **all conductors** at the work location | No voltage is present |
| **3. LIVE** | Re-test on the same known live source | The meter did not fail during the test |

If the meter fails step 3, the "dead" reading in step 2 means nothing. Repeat the whole test
with a working meter.

### Known Live Sources
- A **proving unit**: a small battery-powered device that generates a test voltage for your
  meter. It lets you prove the meter right at the work location.
- A nearby energized receptacle or fixture circuit of similar voltage. For a 277 V circuit,
  proving on a 120 V receptacle checks the meter, but a 277 V source or a proving unit that
  covers the range is better.

## Step-by-Step at a Light Fixture

**Before you start:** the circuit is locked and tagged out (LT1-C06), you have tried the
switch, and the switch is back in the off position.

1. **Inspect** the meter and leads (Lesson 3). Black lead in **COM**, red lead in **V**, dial on
   **AC volts**.
2. **Put on** the required PPE.
3. **LIVE:** test the meter on the proving unit or known live source. Confirm a correct reading.
4. Open the fixture or junction box carefully. Do not touch conductors. Identify the supply
   conductors (hot, neutral, equipment ground or grounded metal housing).
5. **DEAD:** measure each combination:

| Test | Single-phase circuit (e.g., 120 V or 277 V) | Two-hot circuit (e.g., 208 V or 480 V) |
|---|---|---|
| Hot to neutral | ✓ | — |
| Hot to ground | ✓ | ✓ each hot |
| Neutral to ground | ✓ | — |
| Hot to hot | — | ✓ |

   Each reading should be **zero or near zero** (a fraction of a volt). Test any other
   conductors in the box, including switch legs, travelers, and conductors of other circuits.
6. **LIVE:** immediately re-test the meter on the same known source. Confirm a correct reading.
7. Only now is the fixture considered de-energized for your work.

## When a Reading Is Not Zero

| Reading | Possible meaning | What you do |
|---|---|---|
| Full line voltage (120, 208, 277, 480) | Wrong breaker, second circuit, backfeed | **Stop.** Step back, keep others away, notify your supervisor |
| A few volts to tens of volts | Induced (ghost) voltage, or a real partial source | **Stop.** A qualified person evaluates it, often with LoZ mode |
| Voltage on neutral to ground | Shared neutral from another circuit still energized | **Stop.** Neutrals can carry current even with your breaker off |
| Meter reads nothing on the live check | Meter, lead, fuse, or battery problem | Replace or repair the meter; start over |

> **Safety:** A neutral is not "safe" just because it is white. In multiwire branch circuits
> and miswired systems, a neutral can carry current from another circuit. If you open a
> current-carrying neutral, you can become part of the circuit. LT4-C04 covers this in depth.

## Other Sources to Consider

- **Emergency battery packs** inside fixtures can energize lamps and some conductors even
  with the breaker off.
- **Generator- or inverter-fed** emergency lighting circuits may come from a different panel.
- Fixtures in **multi-switch** or **3-way** arrangements may have conductors from other circuits.
- Capacitors in older HID and some fluorescent fixtures can hold a charge; wait as the label
  directs.

## Key Takeaways
- Never trust a breaker, a label, or a non-contact tester alone. Test before touch.
- Live-dead-live: prove the meter, test every conductor combination, then prove the meter again.
- Verification is a qualified-person task; at LT1 do it only with training, PPE, and direct supervision.
- Any unexpected voltage means stop, step back, and call your supervisor.
- Check for battery packs, emergency circuits, shared neutrals, and multiple feeds.
