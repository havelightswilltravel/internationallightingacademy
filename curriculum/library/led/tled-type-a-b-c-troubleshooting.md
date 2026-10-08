---
title: TLED Lamp Troubleshooting (Type A, B, C and Dual-Mode)
category: led
tags: [tled, led-tube, retrofit, ballast-bypass, shunted-sockets, type-a, type-b, type-c]
levels: [LT2, LT3]
last_reviewed: 2026-10-08
review_interval_months: 12
---

> **DRAFT - pending SME review.**

## Symptoms

- LED tube(s) will not light, light intermittently or flicker
- One tube of a pair dark; tubes work in one fixture but not another
- Tubes failed after a fluorescent ballast was replaced, or after someone relamped with the wrong lamp
- Burned or melted sockets ("tombstones"), tripped breaker after relamping

## Safety first

- **Identify the TLED type before touching anything.** Read the retrofit label in the
  fixture and the marking on the tube.
  - **Type A** (ballast-compatible, "plug-and-play"): runs on the existing fluorescent ballast.
  - **Type B** (ballast-bypass, line voltage): **line voltage is wired directly to the
    sockets.** Inserting a fluorescent lamp or a Type A tube can create a shock or fire hazard.
  - **Type C** (external driver): an external driver supplies low-voltage power to the tubes.
  - **Dual-mode (A/B)**: works on a ballast or direct line voltage - check how this fixture is wired.
- **De-energize, LOTO and verify absence of voltage at the sockets** before relamping a
  Type B fixture or opening any wiring channel. A Type B socket is a line-voltage terminal.
- Energized testing (socket voltage, ballast output) is **qualified persons only**, with
  risk assessment, appropriate PPE and an energized-work justification per NFPA 70E.
- Retrofit kits are evaluated under UL 1598C and require labels on the fixture stating
  the conversion and the correct lamp type. Do not remove them; replace them if missing.

## Tools needed

- CAT III multimeter with continuity and known source
- Known-good TLED of the correct type and a known-good fluorescent lamp (for Type A ballast checks)
- Replacement **shunted or non-shunted** sockets as required by the TLED manufacturer
- Retrofit labels, ballast compatibility list for Type A tubes
- Manufacturer wiring diagram

## Likely causes

| Cause | How to confirm | Fix |
|---|---|---|
| **Type A:** failed or incompatible ballast | Known-good tube also fails; ballast not on TLED's compatibility list | Replace ballast with a compatible one, or convert per manufacturer (B/C) with proper labeling |
| **Type B:** wrong socket type (single-ended tube on shunted sockets) | Socket is shunted (continuity between its two contacts); tube is single-ended | Replace with non-shunted sockets per manufacturer diagram |
| **Type B:** wired wrong for single-ended vs double-ended tube | Wiring does not match tube's diagram; tube rotated to wrong end | Rewire per manufacturer; mark the powered end |
| Wrong tube type installed (A in B fixture, or fluorescent in B fixture) | Label vs tube marking | Install correct tube; replace damaged sockets; apply labels |
| Loose or cracked socket, tube not seated/rotated | Tube lights when moved; visual damage | Replace socket; seat tube fully |
| **Type C:** failed external driver | No output at driver with good input | Replace driver with manufacturer's matching unit |
| Failed tube | Known-good tube works in same position | Replace tube; check warranty |

## Step-by-step diagnosis

1. Read the fixture label and tube marking. Confirm the fixture's conversion type. If
   there is **no label** and you cannot tell how it is wired, treat the sockets as line
   voltage and de-energize before relamping.
2. Swap in a known-good tube of the **same type**. If it works, the tube was bad.
3. **Type A:** a known-good fluorescent lamp (only in an unconverted ballast fixture) can
   confirm the ballast works. If the ballast is dead, replace it with one on the TLED's
   compatibility list, or follow the manufacturer's conversion procedure.
4. **Type B / Type C: de-energize, LOTO, verify absence of voltage.** Open the wiring channel.
5. Check socket type with an ohmmeter: continuity between the two contacts of one socket
   = shunted; open = non-shunted. Compare with the TLED manufacturer's requirement.
   Single-ended Type B tubes generally require non-shunted sockets because line and neutral
   land on the same end.
6. Compare wiring with the manufacturer diagram: which end receives line and neutral, and
   whether the ballast was fully removed (no ballast leads left connected).
7. **(Qualified, energized, with PPE)** For Type B, voltage at the powered socket should be
   the branch circuit voltage (e.g. 120 V or 277 V). For Type C, measure the external
   driver's input and output against its label.
8. Correct the fault, apply/replace labels, and verify all tubes light.

## When to escalate

- Unlabeled or mixed conversions across a site (a hazard for future relampers - notify the customer)
- Burned sockets or wiring, or a breaker trip after relamping
- Ballast compatibility unknown for Type A tubes
- Customer wants to convert type (A to B, etc.) - this is a retrofit project, not a repair

## Documentation

- TLED type, manufacturer and part number; ballast model (Type A) or driver model (Type C)
- Socket type found and any sockets replaced
- Wiring corrections made and whether retrofit labels were present/applied
- Any fixtures found with the wrong lamp type installed
