---
title: Relays & Lighting Contactors
minutes: 35
video:
video_suggestion: >
  With a de-energized and locked-out lighting contactor panel open, the trainer identifies the
  coil terminals, line and load terminals, the HOA switch and the control devices. Then, with
  the panel energized and the trainer in the PPE required by the company's NFPA 70E
  assessment, the trainer measures coil voltage and voltage across each pole to show how to
  find a burned contact.
---

## Why Use a Relay or Contactor?
Control devices — photocells, time clocks, sensors, switches — have small contacts. Lighting
loads are often large and spread across several circuits. A **relay** or **contactor** lets a
small control signal switch large loads:

- A low-power **coil** circuit (often 120V or 277V, sometimes 24V) is opened and closed by the
  control device.
- When the coil is energized, it pulls in **contacts** (poles) that switch the lighting branch
  circuits.

**Relay vs contactor:** The terms overlap. "Relay" usually means a smaller device switching one
or two circuits (e.g., in a lighting control panel or power pack); "contactor" means a larger,
multi-pole device (2 to 12 poles) switching several branch circuits, often in its own enclosure
next to the panelboard.

## Types of Lighting Contactors
| Type | How it holds | Behavior on power loss | Notes |
|---|---|---|---|
| **Electrically held** | Coil must stay energized to keep contacts closed | Contacts drop open on loss of control power | Coil continuously energized while lights are on — quiet hum, heat; most common |
| **Mechanically held (latching)** | Coil pulse closes, latch holds; separate pulse (or coil) opens | Stays in its last position | No continuous coil power; uses two-wire (pulse) control with ON and OFF coils or a control module |

**Ratings to check when replacing a contactor:**
- **Coil voltage** (e.g., 120V, 277V, 24V AC/DC) — must match the control circuit.
- **Number of poles** and **contact current rating**.
- **Load type rating** — contacts rated for "lighting," "ballast," or "electronic/LED" loads.
  General-purpose motor contactors may weld when switching many LED drivers due to high
  inrush. Use a lighting-rated contactor.
- **Voltage rating** of the contacts (e.g., 600V for 480V circuits).
- Enclosure type (NEMA 1 indoors, NEMA 3R outdoors, etc.).

## The Control Circuit and HOA Switch
A common contactor control circuit:

```
Control power (hot) ── fuse ── HOA switch ── AUTO ── photocell ── time clock ── coil ── neutral
                                         └── HAND (bypasses photocell & clock) ──┘
                                         └── OFF (opens circuit)
```

- **HAND:** coil energized directly — lights on regardless of controls (testing/override).
- **OFF:** coil de-energized.
- **AUTO:** coil controlled by the photocell, time clock or lighting control system.

**HOA left in HAND is one of the most common reasons site lights burn all day.** Always return
the switch to AUTO and confirm automatic operation before leaving.

## Troubleshooting a Contactor Circuit
The question is always: **is the coil getting voltage, and are the contacts passing it?**

> **Safety:** These measurements are energized diagnostic work in panels that may have high
> available fault current. Do them only if you are authorized by your employer, with the PPE,
> boundaries and meter (CAT III/IV, rated for the voltage) required by its NFPA 70E program.
> Before replacing a coil, contactor or wiring, apply LOTO to **every** source — the load
> circuits **and** the control power, which may come from a different breaker — and verify
> absence of voltage.

**Lights won't come on:**
1. Put the HOA in HAND (if present). If the lights come on, the contactor and load circuits are
   good — the problem is in the AUTO control path (photocell, clock, sensor, wiring).
2. If they don't come on in HAND, measure **coil voltage** at the coil terminals.
   - No voltage: check the control fuse/breaker and HOA switch.
   - Voltage present but contactor doesn't pull in (no clunk): **coil is open** or the
     mechanism is stuck — replace coil or contactor.
3. If the contactor pulls in, measure **line-side voltage** on each pole, then **load-side**
   voltage. Line present but no voltage on the load side of a closed pole = **burned/pitted
   contact**.
4. If line and load voltage are both good at the contactor, the problem is in the branch
   circuit or fixtures downstream (go to LT3-C05 for site circuits).

**Lights won't turn off:**
1. Put the HOA in OFF. If the lights go off, the AUTO control is holding the coil on (failed
   photocell — fail-on, clock override, wiring).
2. If they stay on in OFF with the coil de-energized, check for **welded contacts** (contactor
   stays mechanically closed) or a circuit that bypasses the contactor (someone wired around it).
   Verify by measuring.
3. On mechanically held contactors, check the control module and OFF coil — a failed OFF coil
   leaves the contactor latched on.

**Cycling or chattering:** low control voltage, loose connections, a photocell seeing the lights
it controls, or a sensor/clock with intermittent contacts. A chattering coil can burn up quickly.

## Lighting Control Panels (Relay Panels)
Many buildings use **relay panels**: a cabinet with individual relays (often one per branch
circuit) controlled by a built-in or networked scheduler, inputs from switches, photocells and
sensors. Field skills:
- Identify each relay's circuit on the panel directory.
- Most relays have a **manual override** (lever or button) to test the load path.
- Status LEDs show whether the controller is commanding the relay on.
- Programming changes are usually done by the controls technician — coordinate before you change
  schedules.

## Replacing a Contactor — Key Steps
1. Photograph and label all wiring.
2. LOTO all load circuits and the control circuit; verify absence of voltage at every terminal.
3. Match coil voltage, poles, contact rating, load-type rating and electrically/mechanically held
   type.
4. Install, torque terminals to the manufacturer's specification, reconnect control and loads.
5. Remove LOTO per procedure, test in HAND, OFF and AUTO.
6. Return HOA to AUTO and document.

## Key Takeaways
- A small control signal energizes the coil; the contacts switch the large lighting loads.
- Electrically held contactors drop out on loss of coil power; mechanically held contactors stay
  where they were.
- Match coil voltage, poles, contact ratings and lighting/LED load ratings.
- Use HAND/OFF/AUTO to split the problem between control path and power path.
- LOTO both load and control sources; return HOA to AUTO before leaving.
