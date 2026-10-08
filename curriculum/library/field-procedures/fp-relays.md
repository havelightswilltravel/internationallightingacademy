---
title: "Field Procedure: Relays"
category: field-procedures
tags: [field-procedure, relay-panel, lighting-controls, control-board, monitoring-service, write-up]
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
| Wire | Line, load and low-voltage control wiring in the relay panel | Loose terminals, damaged control cables |
| Control board | Programmable controller that schedules and commands relays | Lost program, wrong time, communication loss, failed board |
| Relays | Switch individual lighting circuits on command | Stuck open or closed, failed coil |
| Bypass | Manual override (switch or relay handle) to force circuits on | Left in bypass; bypass not working |

## Safety first

- Relay panels contain line-voltage branch circuits next to low-voltage control wiring. **Do not open the panel or remove barriers unless qualified** under your company's NFPA 70E program. Otherwise **write it up for an electrician.**
- Any work on line-voltage parts requires **LOTO and verification of absence of voltage (live-dead-live)** on every source.
- Never change the program or schedule without permission from the customer or monitoring service.

## Company troubleshooting procedure

1. **Contact the monitoring service for the facility's controls** (number usually on the panel or from the facility manager).
2. **Troubleshoot over the phone with them until the problem is located.** Be ready to give the panel location, which circuits/areas are affected, what indicator lights show, and the time on the controller.
3. Follow their direction for checks you are qualified to make - for example reading the controller's display, confirming the time/date, or noting relay status LEDs.
4. **In most cases this requires an electrician** - write it up with what the service found.

**Tips:** before calling, confirm the affected lights work in bypass or at a local override if one is accessible without opening the panel - this tells the service whether the problem is the relay/control or the load.

## Escalate / write it up when

- The monitoring service identifies a failed relay, board or wiring problem.
- Any repair inside the panel.
- No monitoring service is available - write it up for an electrician or controls contractor.

## Parts & information

- Record panel manufacturer, model, controller model and firmware if shown, and relay number/circuit for each affected area. Photograph the panel schedule.
- Get the monitoring service ticket number and technician name.
- Relays and boards are ordered by the electrician or controls contractor by manufacturer part number.

## Document on the work order

Panel location, affected circuits, monitoring service ticket number and findings, bypass status, and the write-up for the electrician.
