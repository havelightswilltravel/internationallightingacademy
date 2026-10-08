---
title: Starters, Overloads & Ladder Diagrams
minutes: 55
video:
video_suggestion: >
  On a control trainer, instructor traces a three-wire start/stop ladder diagram rung by rung,
  wires it with numbered conductors, demonstrates seal-in and overload trip, then extends it
  to a forward/reverse circuit with electrical interlocks.
---

## Magnetic Starters

A **magnetic motor starter** is a contactor plus an overload relay.

- The **contactor** has a coil (terminals A1 and A2 on IEC-style devices) that, when energized,
  pulls in the main power contacts (L1-L2-L3 to T1-T2-T3) and any auxiliary contacts.
- The **overload relay** monitors motor current. On sustained overload it opens a normally
  closed control contact (commonly marked 95-96) that drops out the coil. It does not open the
  power circuit directly.
- Starters are rated by **NEMA size** (00, 0, 1, 2, 3...) or by IEC utilization category and
  current (e.g., AC-3). IEC devices are smaller and must be selected carefully for the duty.

### Overload trip classes
Electronic and bimetallic overloads have a **trip class** — the maximum seconds to trip at
600% of the setting. Class 10 trips within 10 s (common for IEC and many general motors);
Class 20 within 20 s (common for NEMA starters); Class 30 for high-inertia loads.

## Reading a Ladder Diagram

A ladder diagram shows **control logic**, not physical location. Two vertical rails are the
control power (L1 and L2, or X1 and X2 from a control power transformer). Each horizontal
**rung** reads left to right: inputs (switches, contacts) on the left, one output (coil, light)
on the right.

Conventions:
- Contacts are drawn in their **de-energized, at-rest** state.
- A contact labeled with a device name (e.g., M) is operated by the coil of the same name.
- Wire numbers change every time a wire passes through a device.
- Overload contacts are drawn on the right side, between the coil and L2 (common NEMA practice).

### Three-wire start/stop control

```
L1 ──[ STOP (NC) ]──┬──[ START (NO) ]──┬──( M )──[ OL ]── L2
     1            2 │                 3│
                    └────[ M aux NO ]──┘
L1 ──────────────────────[ M aux NO ]──────(  R  )────── L2   (run pilot light)
```

How it works:
1. Press **START**: current flows L1 → STOP (closed) → START → M coil → OL contact → L2. M pulls in.
2. The **M auxiliary contact** (wired 2 to 3, in parallel with START) closes and **seals in**
   the coil, so the motor keeps running when START is released.
3. Press **STOP** (or the overload trips): the circuit opens, M drops out, the seal-in opens.
4. After a power failure, the motor does **not** restart by itself — this is called
   **low-voltage protection**, and it is the main safety advantage of three-wire control.

Compare **two-wire control** (a maintained contact such as a float switch, thermostat or
pressure switch in series with the coil): the motor restarts automatically when power
returns — called **low-voltage release**. Use it only where an automatic restart is safe.

## Forward/Reverse Control

A reversing starter has two contactors, F and R. The R contactor swaps two phases (typically
L1 and L3) on the load side. If both close at once, they short two phases together, so the
design includes:

- **Mechanical interlock** — a lever that physically prevents both contactors from closing.
- **Electrical interlock** — a normally closed auxiliary contact of F in series with the R
  coil, and a normally closed R contact in series with the F coil.
- Often **pushbutton interlock** — double-circuit pushbuttons whose NC half breaks the
  opposite circuit.

Use both mechanical and electrical interlocks; they protect against different failures.

## Control Circuit Protection and Grounding

- A **control power transformer (CPT)** usually steps 480 V down to 120 V for the control
  circuit. Motor control circuit conductors and the CPT are protected as Part VI of Article 430
  requires (430.72 in the 2023 NEC) — follow the drawing, the starter manufacturer and the code.
- When the control circuit is grounded, ground the **X2** side and place stop buttons, contacts
  and switches on the **ungrounded (X1)** side, with the coil connected to the grounded side.
  This way a ground fault in the control wiring blows the control fuse instead of starting the
  motor (430.74 concept).

## Troubleshooting Control Circuits

| Symptom | Likely causes |
|---|---|
| Nothing happens when START is pressed | Blown control fuse, open STOP, tripped OL, open coil, no control power |
| Motor runs only while START is held | Seal-in contact not wired, wrong terminals, or failed auxiliary contact |
| Starter chatters | Low control voltage, undersized CPT, loose connection, dirty magnet face |
| Overload trips repeatedly | Overloaded motor, wrong setting, single-phasing, voltage unbalance, high ambient |
| Motor hums but won't turn | Single-phasing (open fuse or contact), mechanical lock-up |

Work methodically: read the diagram, check control voltage at the CPT, then follow the rung
with the meter from L1 toward the coil — the point where voltage disappears is the open.

> **Safety:** Control circuit troubleshooting is often done energized because it requires
> voltage measurements. It is still energized work: follow NFPA 70E — risk assessment, PPE per
> the label, insulated tools and meter rated for the circuit, and remember the 480 V power
> conductors are in the same enclosure. Any repair (re-terminating, replacing a contact or
> coil) is done de-energized, locked out and verified.

## Key Takeaways
- Starter = contactor + overload relay; the OL opens the coil circuit, not the power circuit.
- Ladder diagrams show logic; contacts are drawn at rest; wire numbers change at each device.
- Three-wire control seals in and provides low-voltage protection (no auto-restart).
- Reversing starters need mechanical and electrical interlocks to prevent a phase-to-phase short.
- Put control devices on the ungrounded side and the coil on the grounded side.
- Troubleshoot by tracing voltage along the rung; repair only de-energized.
