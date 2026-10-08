---
title: Safe Neon Troubleshooting Procedure
minutes: 40
video:
video_suggestion: >
  A two-person crew troubleshoots a dark channel-letter neon sign. They observe each letter
  through the drain holes from a distance, lock out the sign disconnect, verify absence of
  voltage on the transformer primary, wait for and discharge stored energy, then install a
  rated bypass jumper across half the letters, step back behind the barrier, re-energize and
  observe. The narrator repeats at every step: look and listen only, never touch.
---

## Corrected Company Procedure — Read This First
The company troubleshooting guide says to "listen/look/feel for voltage in the glass." **The
"feel" part is removed from this program.** Touching energized neon glass, electrodes, boots,
PK housings or GTO can kill you: a cracked tube or a tracked boot can put thousands of volts on
the glass surface, and high voltage can arc to a hand before contact. The corrected method keeps
the intent — find which units are lit and which are not — using **observation from a safe
distance** and **de-energized checks** only.

The company guide also describes going "from GTO to ground" on the leads of the center unit to
split a channel-letter sign. Deliberately grounding an energized secondary lead creates a live
high-voltage ground fault, will trip SGFP transformers (it is exactly the fault they are built to
stop), and puts the technician at lethal risk. In this program that step is replaced by the
**de-energized bypass-jumper split** below.

> **Safety:** In many jurisdictions, high-voltage neon work (secondary wiring, glass, transformer
> replacement) is restricted to qualified persons, licensed sign electricians or sign
> specialists. Lighting technicians perform only the steps their employer has trained and
> authorized them to do. If you are not authorized, complete the observation steps, lock out,
> and write it up for the sign specialist.

## Tools
- Binoculars or a camera with zoom for high signs.
- CAT III/IV multimeter and proving unit (primary-side checks only — **never** connect a standard
  multimeter to a neon secondary; it can explode the meter in your hand).
- High-voltage tester or neon/power-supply tester specifically rated for neon secondaries and
  approved by the transformer manufacturer, or a known-good test load (test tube) — used only by
  authorized persons.
- Insulated, GTO-rated bypass jumpers with listed connectors and boots.
- Grounding/discharge stick if specified by the employer's procedure.
- LOTO kit, PPE per the job hazard assessment.

## Step-by-Step Procedure

### A. Observe (power on — look and listen only)
1. Before going up, note which units are lit, dim, flickering or dark. Check the time clock,
   photocell and any switches — an "out" sign may simply be off.
2. **Exposed neon:** from a safe distance, observe each glass unit for glow, and listen for the
   transformer hum or buzzing. A unit that is dim, flickering or a different color than its
   neighbors may have lost gas.
3. **Channel neon:** observe each letter through the face and through the **drain holes** from a
   safe distance. Do not put fingers, tools or a probe into drain holes.
4. Listen at the transformer location without opening it: a magnetic NST normally hums; an SGFP
   unit that clicks or cycles may be tripping on a fault.

### B. If no units are lit — go to the transformer
5. Check the sign switch, time clock, photocell and the sign disconnect position.
6. A qualified person verifies **incoming (primary) voltage** at the transformer with the meter
   on a primary range. No primary voltage = a supply problem (breaker, switch, control, wiring);
   write branch-circuit problems up for an electrician.
7. If an SGFP unit has primary voltage but no output, cycle power once per the manufacturer's
   reset instructions and observe. If it trips again, assume a secondary fault and continue.

### C. Lock out before you touch anything on the secondary
8. Open and **lock out the sign disconnect** (and any other source). Tag it.
9. Verify absence of voltage at the transformer primary terminals with a tested meter
   (**live-dead-live**: test the meter on a known source, test the primary, test the meter
   again).
10. Wait for stored energy to dissipate and discharge the secondary per the employer's
    procedure. GTO and glass act like capacitors and electronic supplies have internal
    capacitors.

### D. De-energized checks
11. **First piece of glass off the transformer:** inspect it closely — it carries the full lead
    voltage and is a frequent failure point. Look for cracks, broken electrodes, blackening, or
    a loose GTO connection.
12. Inspect every boot, PK housing and GTO run for carbon tracking, burn-through, water, and
    cracked insulation.
13. **Transformer test:** test the transformer only by the manufacturer's method (test mode,
    diagnostic indicator, rated HV tester or a known-good test load), set up while locked out and
    energized only after everyone is clear. Remember: many SGFP units will not output with the
    leads open — that alone does not prove the transformer bad.

### E. Isolate units by bypassing (exposed neon)
14. If some units glow weakly (the company guide calls this "not vibrating as much") while others
    are normal, lock out, then install a rated bypass jumper across the suspect unit (connect
    the GTO that feeds it to the GTO that leaves it, booted).
15. Clear the area, remove your lock, re-energize from a safe position and **observe**. If the
    remaining units light normally, the bypassed unit is bad.
16. Lock out again before removing jumpers. Do not leave a sign running on jumpers — removing
    glass changes the load the transformer was sized for.

### F. Split-half method (channel letters)
17. Locked out, go to the **center unit** of the string. Jumper out (bypass) **one half** of the
    letters between that point and the end of the string.
18. Re-energize from a safe position and observe. If the un-bypassed half lights, the fault is
    in the bypassed half; if it stays dark, the fault is in the half that is still connected.
19. Lock out, move the jumper to split the bad half in half again, and repeat until the bad unit
    (or connection) is found. Each split halves the remaining letters to check.

### G. If bypassing does not find it — check the GTO
20. If the string still will not light with units bypassed, check the GTO runs for
    **burn-through**, broken conductors or a failed connection. Replace damaged GTO with cable of
    the correct rating, routed off metal on proper supports, with new boots.

| Symptom | Likely cause |
|---|---|
| Whole sign dark, no hum | No primary power, open switch/clock, failed transformer |
| Lights for a moment then shuts off | SGFP tripping on a secondary fault (tracked boot, burned GTO, water) |
| One tube dim, flickering, odd color | Tube losing gas — replace the glass unit |
| Whole string dark, transformer OK | Broken glass or open connection somewhere in the series string |

## When to Escalate
Write it up for an electrician or sign specialist when: there is no proper disconnect, the
branch circuit or primary wiring is faulty, the sign shows heat or fire damage, glass needs to be
fabricated, or the work is beyond your authorization.

## Key Takeaways
- Look and listen only on an energized sign — the company step "feel for voltage" is removed.
- Never ground an energized secondary lead to split a sign; bypass with rated jumpers while
  locked out.
- Lock out, verify (live-dead-live) and discharge before any secondary work.
- Check the first piece of glass off the transformer early; test transformers only by the
  manufacturer's method.
- Split-half from the center unit to find a bad channel letter quickly.
