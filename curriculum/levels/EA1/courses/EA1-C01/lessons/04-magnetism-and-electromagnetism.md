---
title: Magnetism, Electromagnetism & Induction
minutes: 45
video:
video_suggestion: >
  Iron filings on a sheet over a bar magnet, then around a current-carrying conductor and a coil.
  Instructor shows a compass deflecting near a DC conductor, builds a simple electromagnet with a
  nail and battery, then moves a magnet in and out of a coil connected to a galvanometer to show
  induction. End with a relay and contactor cutaway.
---

## Magnetism Basics

A magnet produces invisible **lines of flux** that form closed loops. By convention, flux leaves
the **north pole**, travels through the surrounding space and re-enters at the **south pole**,
then continues through the magnet back to north.

Key properties:
- **Like poles repel; unlike poles attract.**
- Flux lines never cross each other.
- Flux takes the path of least **reluctance** (magnetic "resistance"). Iron and steel have high
  **permeability** — they carry flux far more easily than air — which is why transformer and
  motor cores are made of laminated steel.
- Materials are **ferromagnetic** (iron, nickel, cobalt — strongly attracted), **paramagnetic**
  (slightly attracted, e.g., aluminum) or **diamagnetic** (slightly repelled, e.g., copper).

**Permanent magnets** retain their magnetism (hard steel, alnico, ceramic, neodymium).
**Temporary magnets** (soft iron) are magnetized only while in a field. The ability to keep
some magnetism after the field is removed is called **retentivity**, and the leftover magnetism
is **residual magnetism** — the reason a contactor can sometimes "stick" closed.

## Electromagnetism

In 1820, Hans Christian Ørsted discovered that **current through a conductor creates a magnetic
field** around it. The field forms concentric circles around the conductor, and its strength is
proportional to the current.

### Direction of the Field

- **Right-hand rule (conventional current):** grasp the conductor with your right thumb pointing
  in the direction of conventional current (+ to −); your fingers curl in the direction of the
  flux.
- **Left-hand rule (electron flow):** same grip with the left hand, thumb pointing in the
  direction of electron flow.

Both rules give the same field direction because the two current conventions point opposite
ways. Use the one that matches the convention your text or instructor is using.

### Coils and Electromagnets

Wind the conductor into a coil and the individual fields add together, producing a field like a
bar magnet with distinct north and south poles. The strength of an electromagnet depends on:

| Factor | Effect |
|---|---|
| Current (I) | More current → stronger field |
| Number of turns (N) | More turns → stronger field |
| Core material | Iron core → much stronger field than air core |
| Coil length / geometry | Shorter, tighter coil concentrates flux |

The product of current and turns is the **magnetomotive force**, measured in **ampere-turns**.
A 500-turn coil carrying 0.2 A has 500 × 0.2 = **100 ampere-turns** — the same as a 100-turn coil
carrying 1 A.

### Field Applications
- **Relays and contactors:** a control coil pulls in an armature that closes power contacts. A
  lighting contactor lets a small 24 V or 120 V control circuit switch large lighting loads.
- **Solenoids:** a plunger pulled into a coil operates valves, door strikes and locks.
- **Circuit breakers:** the **magnetic** trip element is a small electromagnet that trips the
  breaker almost instantly on high fault current (the thermal element handles overloads).
- **Clamp meters:** an AC clamp meter senses the alternating magnetic field around a single
  conductor.

## Electromagnetic Induction

Michael Faraday showed the reverse effect: **a changing magnetic field near a conductor induces a
voltage in it.** It does not matter whether the conductor moves, the magnet moves or the field
strength changes — what matters is **relative motion or change** in flux.

The induced voltage increases with:
1. The **rate of change** of flux (faster motion or faster change = more voltage)
2. The **number of turns** in the coil
3. The **strength** of the magnetic field

**Lenz's law:** the induced voltage always produces a current whose magnetic field **opposes the
change** that caused it. This opposition is the basis of inductance, which you'll study in
depth in EA2 AC Theory.

### Induction in DC Circuits — Inductive Kick

When the current through a coil (relay, contactor, solenoid) is switched off, the collapsing
field induces a voltage that tries to keep current flowing. This **inductive kick** can be many
times the supply voltage and causes arcing at switch contacts. That's why DC coils often have a
suppression diode across them and why DC-rated switches are built differently from AC-only
switches.

> **Safety:** Inductive kick from large coils can deliver a painful or dangerous shock even from
> a "low voltage" DC control circuit. De-energize, apply LOTO and verify absence of voltage
> before handling coil leads, and never break a coil circuit with your fingers in the path.

## Why the NEC Keeps Circuit Conductors Together

When AC flows in a single conductor, its alternating magnetic field induces **eddy currents** and
**hysteresis losses** in surrounding steel — a metal raceway, a box, or the steel around a hole.
That heats the steel and can damage insulation. When the outgoing and returning conductors of a
circuit are run together, their equal and opposite currents create opposing fields that
largely cancel.

That is why the NEC requires all conductors of the same circuit — including the neutral and the
equipment grounding conductor — to be grouped in the same raceway, cable or trench (300.3(B)),
and why it addresses induced currents in ferrous enclosures and raceways (300.20). Running the
hot in one EMT and the neutral in another is a code violation and a heating hazard.

## Generators, Motors and Transformers — A Preview

| Device | Principle |
|---|---|
| **Generator** | Mechanical motion of conductors through a magnetic field induces voltage |
| **Motor** | Current in a conductor within a magnetic field experiences a force (motor action) |
| **Transformer** | Changing current in a primary coil creates changing flux in a steel core that induces voltage in a secondary coil |

A transformer only works with a *changing* field. Connect a transformer primary to DC and you
get no useful secondary voltage — only high current limited by the winding resistance, which
can quickly overheat the winding.

## Key Takeaways
- Flux leaves north and returns south; like poles repel, unlike attract.
- Current creates a magnetic field; field strength rises with current, turns and an iron core.
- Ampere-turns = I × N.
- A changing field induces voltage (Faraday); the induced current opposes the change (Lenz).
- Inductive kick from coils causes arcing and shock hazards.
- Keep all conductors of a circuit together (300.3(B)) to cancel fields and avoid induced heating.
