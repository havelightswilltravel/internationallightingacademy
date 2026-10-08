---
title: "Field Procedure: Contactors"
category: field-procedures
tags: [field-procedure, contactor, coil, controls, lighting-contactor, write-up]
levels: [LT3]
last_reviewed: 2026-10-08
review_interval_months: 12
---

> **DRAFT - pending SME review.**

*Company field procedure — adapted from the company Master Troubleshooting Guide.*

**Competency self-rating:** 1 I have seen it · 2 I understand it · 3 I perform it · 4 I can teach it. Rate yourself on this system in the app's Skills Matrix.

## System components

| Component | What it does | Common failure |
|---|---|---|
| Contactor housing | Holds the coil, contacts and terminals | Cracked, heat-discolored |
| Contact points | Close to connect line to load on each pole | Pitted, welded, burned; one pole open |
| Coil | Electromagnet that pulls contacts closed (or releases them) | Open coil, wrong voltage, chatter from low control voltage |
| Enclosure | Protects the contactor; may share space with other equipment | Water entry, missing cover, overheating |
| Wire | Line, load and control conductors | Loose terminals, burned or overheated insulation |

## Safety first

- Contactor enclosures expose energized parts with arc-flash potential. **Energized testing is qualified persons only**, with the PPE and permits your company's NFPA 70E program requires. If you are not qualified, **do not open the enclosure - write it up.**
- Contactors usually have **more than one source** (power poles and a separately fed control/coil circuit). **LOTO every source and verify absence of voltage (live-dead-live)** on line, load and coil terminals before touching anything.
- Never force a contactor closed by hand or with a tool while energized.

## Company troubleshooting procedure

1. **Verify line-side voltage** on each pole. Expected: the system voltage (e.g., 120, 208, 277 or 480 V) on each line terminal.
2. **Verify coil voltage while the controls are calling for on** (photocell covered, clock in bypass, HOA in Hand). Expected: the coil's rated voltage.
   - **Note:** some coils engage on the **absence** of power (normally-closed or mechanically held designs). Read the label and wiring diagram before deciding the coil should be energized.
3. **If you have line voltage and coil voltage, you should also have voltage on all load terminals.**
4. **If there is no load voltage in this case, write it up to have an electrician replace the contactor.**
5. **Check for good connections and for burned or overheated wiring;** note any wiring needs on the service order.
6. **Contactors can often be rebuilt, but check with an electrician before writing up a rebuild or coil replacement.**

**Tip:** if there is no coil voltage, the problem is in the control (photocell, time clock, relay) - follow that system's procedure.

## Escalate / write it up when

- Line and coil voltage present, no load voltage - electrician to replace the contactor.
- Burned or overheated wiring, pitted contacts, or a chattering coil.
- Any rebuild or coil replacement (confirm with an electrician first).

## Parts & information

- Record brand, model, number of poles, amp rating per pole, coil voltage, and electrically vs mechanically held. Photograph the nameplate and wiring diagram.
- Note what controls the coil and where its power comes from.
- For rebuilds, get the manufacturer's contact kit or coil part number from the nameplate.

## Document on the work order

Contactor location, line/coil/load readings, condition of contacts and wiring, and the write-up for the electrician.
