---
title: Commissioning an NLC Zone
minutes: 35
video:
video_suggestion: >
  Film a full commissioning of one private office and one open-office daylight zone in real time
  (edited to 6–8 minutes): device discovery on a tablet, naming, grouping, setting timeouts and
  trim, calibrating daylight with a meter at the desk, walk-out vacancy test, and exporting the
  configuration. Show the completed checklist at the end.
---

## What "Commissioned" Means

A zone is commissioned when it has been **programmed, calibrated, functionally tested and
documented** so that it operates exactly as the sequence of operations (SOO) says. "The lights come
on" is not commissioning. Formal building commissioning (the Cx process, owner training and the
commissioning authority's role) is covered in LT5. This lesson is the technician's hands-on
procedure for a single zone – the core of skill LT4-S01.

## Before You Start

- [ ] Latest drawings, zoning plan, SOO and device schedule
- [ ] Manufacturer commissioning app/software installed and updated; project file or site credentials
- [ ] Gateway online with correct time and time zone (schedules depend on it)
- [ ] All line-voltage work complete, inspected where required, and circuits energized by the
      installing electrician
- [ ] Ceiling grid closed or nearly closed – open ceilings change sensor coverage and daylight readings
- [ ] Calibrated illuminance meter and a ladder

> **Safety:** Commissioning is normally done with circuits energized. If you find a device that is
> not responding and need to open a luminaire, controller or J-box, stop. De-energize the circuit,
> apply LOTO and verify absence of voltage (live-dead-live) before opening line-voltage
> compartments. Do not "just check the wire nut" hot.

## Step-by-Step Procedure

### 1. Discover and verify devices
Run discovery for the zone. Compare the count of discovered luminaires, sensors and wallstations to
the device schedule. Missing devices usually mean no power, a wiring error on the bus, a radio range
problem, or a device already claimed by another network. Resolve missing devices before moving on.

### 2. Identify and name
Use the app's "identify" or "flash" function to make each device blink, physically confirm its
location, and give it the project-standard name. This step catches swapped addresses that would
otherwise make troubleshooting miserable later.

### 3. Group into zones
Create the control, occupancy, daylight and scene groups exactly as shown on the zoning plan. Check
that primary and secondary daylight zones are separate groups when required.

### 4. Set operating parameters

| Parameter | Set from | Typical example |
|---|---|---|
| Sensor mode | SOO / energy code | Vacancy (manual-ON) in private offices |
| Timeout | SOO / energy code | 15–20 minutes, never longer than the code maximum |
| Manual-ON level | SOO | 50% |
| High-end trim | SOO or measured target | Reduce until the task target is met |
| Low-end trim | Driver/fixture behavior | Lowest stable level without flicker or dropout |
| Fade rates | SOO | 2–3 s on, longer fade to off |
| Schedules | SOO / owner | After-hours sweep with override |

### 5. Set high-end trim with a meter
With daylight excluded (night, or blinds closed), set luminaires to 100% and measure illuminance at
the task location. Reduce the maximum output until the reading meets the design target with
reasonable margin for lumen depreciation. Record the as-left trim percentage.

### 6. Calibrate daylight harvesting
Follow the manufacturer's method – typically setting the electric-light target at night or with
blinds closed, then letting the sensor learn with daylight present. Verify that the primary zone
dims more than the secondary zone and that non-daylight zones do not dim. Watch for "hunting"
(lights rising and falling repeatedly) – a sign the sensor sees its own luminaires or the setpoint
deadband is too small.

### 7. Functional test every sequence

| Test | Expected result |
|---|---|
| Enter space, press ON | Lights go to manual-ON level |
| Raise/lower | Smooth dimming between low- and high-end trim |
| Leave space, wait timeout | Lights turn OFF (or step down) at programmed time |
| Re-enter during grace period | Lights restore without pressing a button (if programmed) |
| Schedule sweep | Warning flash, then off; override restores for set duration |
| Daylight | Daylight zone dims; others do not |
| Normal power loss (emergency group) | UL 924 device forces emergency luminaires to full output |

Record pass/fail for each. A failed test means correct and retest – never mark a failure as passed.

### 8. Back up and document
Export or sync the configuration to the gateway/cloud and save a copy per company procedure. Fill
out the commissioning record: device list with names and addresses, group membership, all as-left
settings, test results, open issues, your name and date.

## Handling Problems

- **Device will not join:** confirm power, reset per manufacturer, check for a previous network
  claim, check range/hops to the gateway.
- **Lights flicker at low end:** raise low-end trim; confirm driver/controller compatibility (LT3-C02).
- **Lights do not turn off:** check sensor sensitivity and HVAC airflow (ultrasonic/microphonic
  false triggers), schedule overrides, and whether another zone is holding them on.

## Key Takeaways
- Commissioned means programmed, calibrated, functionally tested and documented against the SOO.
- Verify device count, identify and name each device, and group exactly per the zoning plan.
- Set high-end trim and daylight setpoints with a calibrated meter, not by eye.
- Functionally test every sequence, including emergency behavior on loss of normal power.
- Back up the configuration and record every as-left setting.
- Commissioning is energized work on Class 2 controls only; LOTO before opening line-voltage compartments.
