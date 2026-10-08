---
title: Circuit Tracers and Breaker Finders
minutes: 30
video:
video_suggestion: >
  A tech uses a plug-in breaker finder on a receptacle, then a full circuit tracer
  (transmitter clipped to a fixture's hot and neutral at a junction box) to find the breaker
  in a lighting panel, then uses the receiver to follow the wiring path above a ceiling.
  Finish with locking out the identified breaker and verifying the fixture is dead.
---

## Why Trace Circuits?

Panel directories are often wrong, incomplete or out of date. Before you can lock out a
fixture safely, you have to know which breaker feeds it. Turning breakers off one by one to
"see what goes out" can shut down critical equipment, computer rooms or emergency lighting,
and annoys customers. A tracer finds the breaker quickly and with less disruption — but it
**never replaces verification**.

## Types of Tools

| Tool | How it works | Best use | Limits |
|---|---|---|---|
| Plug-in breaker finder | Plugs into a receptacle and injects a signal; receiver is swept over breakers | 120 V receptacle circuits | Needs a receptacle; usually 120 V only |
| Energized circuit tracer | Transmitter connects to an energized circuit (hot to neutral or ground) and injects a signal onto the line | Finding the breaker for a hardwired fixture; tracing energized wiring | Transmitter must be rated for the circuit voltage (many are 120 V only — check before using on 277 V) |
| De-energized circuit tracer | Transmitter injects a signal on a de-energized conductor, referenced to ground or another conductor | Tracing conductors, finding buried or hidden wiring, identifying cables in a bundle | Circuit must be off; signal can bleed to nearby conductors |
| Toner and probe | Low-voltage tone on a conductor | Low-voltage and control wiring | Not for energized power circuits |

Read the transmitter's ratings. Connecting a 120 V-rated transmitter to a 277 V circuit can
destroy it and create a hazard.

## Procedure: Find the Breaker for a Hardwired Fixture (Energized Tracer)

1. **Prepare.** Check the panel schedule and lighting plan for the likely circuit. Note the
   panel location and its voltage.
2. **Gain access safely.** Access the fixture's junction box or wiring compartment. Connecting
   to energized conductors is energized work: PPE per your company program and supervisor
   direction. Where possible, use a method that avoids opening splices — some tracers offer
   clamp-on couplers or connect at a receptacle or switch terminal.
3. **Connect the transmitter** per its instructions (commonly hot to neutral for line-voltage
   tracing). Confirm the transmitter indicates it is connected and transmitting.
4. **Calibrate the receiver** if required, then sweep it along the breaker handles in the
   panel. Many receivers use a sensitivity adjustment — reduce sensitivity as you narrow down
   until only one breaker gives a strong signal.
5. **Confirm on adjacent breakers.** A strong signal on two breakers can mean coupling,
   a multiwire circuit, or a tandem breaker.
6. **Remove the transmitter** before de-energizing (or follow the tool's instructions).
7. **Lock out** the identified breaker per the company LOTO procedure.
8. **Verify absence of voltage** at the fixture on all conductors with a tested meter
   (live-dead-live). If the fixture is still live, you have the wrong breaker or a second
   source. Stop and re-trace.
9. **Update the directory** if it was wrong, and note the change on the work order.

> **Safety:** The tracer tells you **which breaker probably feeds the fixture**. Only a
> tested meter after lockout tells you the fixture is **dead**. Fixtures can be fed by more
> than one circuit — for example, a normal circuit plus an unswitched circuit for an
> emergency battery pack, or a generator-fed emergency circuit through a transfer device.
> Verify every conductor.

## Tracing Wiring Paths

Most receivers can follow the signal along a conductor's path through walls and ceilings:
- Hold the receiver close to the surface and sweep slowly.
- Signal strength peaks directly over the conductor and drops off to the sides.
- Metal raceway shields the signal; trace may be lost through EMT or MC, then reappear at
  boxes. Expect weaker signals.
- Use this to find hidden junction boxes or which fixtures share a circuit.

## Identifying Conductors Without a Tracer (De-energized)

If you need to identify which conductor at one end matches at the other end on a
de-energized circuit, use the continuity method:
1. Lock out and verify absence of voltage at both ends.
2. At the far end, connect the suspect conductor to a known reference (for example, the
   EGC or a metal box) with a jumper.
3. At the near end, check continuity between each conductor and the same reference. The one
   that beeps is your conductor.
4. **Remove the jumper** before re-energizing. A forgotten jumper is a dead short.

## Interpreting Unclear Results

| Symptom | Possible cause | Next step |
|---|---|---|
| No signal anywhere | Transmitter not connected or circuit open | Check transmitter indicator; try a different connection point |
| Signal on several breakers | Coupling, sensitivity too high, MWBC | Lower sensitivity; check for handle-tied breakers |
| Signal on a breaker in a different panel than expected | Fixture fed from another panel | Check schedules; trace again; verify after lockout |
| Fixture still live after lockout | Wrong breaker or second source | Stop. Re-trace. Check for emergency or unswitched feeds |

## Key Takeaways
- Panel directories are often wrong; tracers find the breaker without trial-and-error shutdowns.
- Check the tracer transmitter's voltage rating before connecting (many are 120 V only).
- Narrow down with receiver sensitivity; confirm a single strong breaker.
- A tracer result is not verification — lock out, then test all conductors live-dead-live.
- Watch for second sources such as emergency and unswitched circuits.
- Remove all jumpers before re-energizing; correct the directory when you find an error.
