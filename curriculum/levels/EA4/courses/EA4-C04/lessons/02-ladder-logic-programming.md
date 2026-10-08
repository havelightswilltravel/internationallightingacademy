---
title: Ladder Logic — Contacts, Coils, Timers, and Counters
minutes: 45
video:
video_suggestion: >
  Screen recording of PLC programming software alongside a camera on the training panel. The
  instructor builds a start/stop seal-in rung, downloads it, and shows the rung highlighting
  online as buttons are pressed. Then adds an off-delay fan timer and a parts counter, and
  demonstrates why a normally closed stop button must be programmed with an examine-if-closed
  instruction.
---

## From Relay Ladders to PLC Ladders
In EA3 you read and wired relay ladder diagrams for motor control. PLC ladder logic looks
similar on purpose: two vertical rails, horizontal rungs, contacts on the left, and an output
on the right. The difference is that PLC "contacts" are **instructions that examine a bit** in
memory, not physical contacts.

## The Basic Instructions
| Instruction | Symbol | True when |
|---|---|---|
| Examine if Closed (XIC) | `-] [-` | The referenced bit is **1** (input energized) |
| Examine if Open (XIO) | `-]/[-` | The referenced bit is **0** (input de-energized) |
| Output Energize (OTE) | `-( )-` | Sets the bit to 1 when the rung is true, 0 when false |
| Output Latch / Unlatch (OTL/OTU) | `-(L)-` / `-(U)-` | Latch sets the bit and leaves it set; unlatch clears it |

(Names shown are common in one major platform; other manufacturers use NO/NC contact and coil
terminology. The concepts are the same.)

**The key idea:** XIC and XIO describe what the *program* checks, not how the field device is
wired. A normally closed field device that is closed makes the input bit = 1, so an XIC on that
bit is **true**.

## The Fail-Safe Stop
Stop buttons, overload contacts, and emergency circuits should be wired **normally closed**
to the input. Why? If the wire breaks, the input goes to 0 and the machine stops — the failure
is safe. With a normally open stop button, a broken wire would leave the machine impossible to
stop from that button.

Because the NC stop button holds the input at 1 when not pressed, program it with an **XIC**
instruction. Pressing it makes the bit 0, the XIC goes false, and the rung drops out.

Emergency stops for machinery should also directly remove power through hard-wired safety
relays or safety-rated controllers, not only through the standard PLC program (NFPA 79).

## Seal-In (Start/Stop) Rung
```
   Stop_PB(I:0/0)  Start_PB(I:0/1)          Motor(O:0/0)
|----] [----------+----] [----+-------------( )----|
|                 |           |
|                 +----] [----+
|                     Motor(O:0/0)
```
- `I:0/0` — NC stop button (XIC)
- `I:0/1` — NO start button (XIC)
- `O:0/0` — motor contactor output; its XIC branch around the start button seals the rung in

**Truth check:** press Start → rung true → Motor = 1 → seal branch true → release Start, rung
stays true. Press Stop → I:0/0 = 0 → rung false → Motor = 0 → seal drops.

To add an overload, place an XIC for the overload's NC auxiliary contact input in series with
the stop.

## Timers
| Timer | Behavior | Example |
|---|---|---|
| TON (on-delay) | Done bit sets after the rung has been true for the preset time | Start conveyor 5 s after warning horn |
| TOF (off-delay) | Done bit stays set for the preset time after the rung goes false | Run exhaust fan 3 min after burner stops |
| RTO (retentive) | Accumulates time across interruptions; needs a reset | Track pump run hours for maintenance |

Timer settings to verify: **preset**, **time base** (e.g., 0.01 s or 1 s), and **accumulated
value**. A preset of 300 with a 0.01-s base is 3 seconds, not 300 seconds — a common error.

### Worked Example: Off-Delay Fan
A cooling fan must run while the motor runs and for 2 minutes after it stops. With a TOF timer
on a 1-s time base:
- Rung 1: XIC Motor → TOF Fan_Timer, preset **120**
- Rung 2: XIC Fan_Timer.DN → OTE Fan

While Motor = 1, the DN bit is set and the fan runs. When Motor goes to 0, the timer times for
120 s, then DN clears and the fan stops.

## Counters
- **CTU (count up)** increments its accumulated value on each false-to-true transition of the
  rung; the done bit sets when accumulated ≥ preset.
- **CTD (count down)** decrements.
- **RES (reset)** clears the accumulator.

Example: box counter with a photo-eye input; when 24 boxes pass (preset 24), the done bit
signals the case packer, and a reset rung clears the counter.

## Troubleshooting With the Program
1. Go online and find the output rung that should be true.
2. Look at which instruction is false (it will not be highlighted).
3. Trace that bit to its input address and check the input LED and field device.
4. If the input LED is on but the bit is off, suspect the module or configuration; if the LED is
   off, suspect the field device or wiring.
5. **Do not use forces** to bypass safety devices. Forcing an input or output overrides the
   program and can start equipment unexpectedly; only force with authorization, the area clear,
   and a documented reason.

> **Safety:** Downloading a program or editing online can change outputs immediately. Confirm
> the machine is in a safe state and personnel are clear before going online or downloading,
> and coordinate with operations. Lockout/tagout at the energy sources is required before any
> person enters a machine's hazard zone, regardless of what the PLC shows.

## Key Takeaways
- XIC is true when the bit is 1; XIO is true when the bit is 0 — regardless of how the field
  device is wired.
- Wire stops and overloads normally closed and program them with XIC (fail-safe).
- A seal-in branch uses the output's own bit in parallel with the start input.
- Verify timer presets and time base; TON delays on, TOF delays off, RTO retains.
- Troubleshoot online by finding the false instruction; never force around safety devices.
