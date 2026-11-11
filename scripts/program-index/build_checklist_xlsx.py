#!/usr/bin/env python3
"""Checklist of every request from the Nov 10, 2026 meeting with Kyle and the program lead's Nov 20 message."""
import sys
from openpyxl import Workbook
from openpyxl.styles import Alignment, Border, Font, PatternFill, Side
from openpyxl.worksheet.datavalidation import DataValidation

M, Y = 'Kyle meeting (Nov 10)', 'Your message'
DONE, ADDED, PROP, DEC, LATER = 'Done', 'Added (highlighted)', 'Proposed', 'Needs your decision', 'Later (app or platform)'
items = [
 (M, 'Program structure', '"Freshman through senior": a clear progression from new hire to top level.', DONE, 'Five levels (LT1-LT5) over two years; LT3 = "send anywhere" tech, LT4 Senior, LT5 Master.'),
 (M, 'Scope disclaimer', 'Disclaimer that what a tech may do varies by state and city; attorney later.', DONE, 'Sign-in notice, a "scope varies by state" note on 30 lessons, and draft contract wording. Attorney review when going live.'),
 (M, 'Quiz integrity', 'Make sure the technician, not AI or someone else, is taking the quizzes.', DEC, 'Already: random questions, time limits, retake waits, and hands-on sign-offs as the real gate. Options: (a) level final exams taken in person or watched by a supervisor; (b) block copy/paste and flag leaving the page; (c) a "this is my own work" pledge; (d) scenario and photo questions; (e) evaluator spot-check questions at sign-off. Which do you want?'),
 (M, 'Course placement', 'Outlets and switches later (Kyle: "year two").', DONE, 'Now in LT2.'),
 (M, 'Course placement', 'Fluorescent, HID and lighting retrofits in year one.', DEC, 'Fluorescent and LED retrofits are in LT1. HID is in LT2 (your change), which is still Year 1. Move HID into LT1?'),
 (M, 'Course placement', 'Troubleshooting methodology in year one.', DEC, 'It is in LT2 (Year 1). Move it into LT1?'),
 (M, 'Course placement', '3-way and 4-way switching later (Kyle: "year three").', DEC, 'Currently LT2 (Year 1). Move to LT3 (Year 2)?'),
 (M, 'Course placement', 'Harmonics belongs at the top level (Kyle: "LT5").', DEC, 'Harmonics is in Power Quality, LT4. Move that course to LT5, or keep?'),
 (M, 'Course hours', 'About 400 hours of course time: roughly 4 hours a week (1 hour a working day), unpaid study.', DONE, 'Target set to 400 h. With the additions the layout is 370.5 h (Year 1 196.5 h, Year 2 174 h), leaving about 30 h for the team.'),
 (M, 'Time in program', '3,800 field hours is right; nobody finishes faster than two years.', PROP, 'Add a minimum-time rule so Master cannot be awarded before 24 months, plus minimum time per level.'),
 (M, 'Level length', 'Techs mostly on their own after about month 3; LT3 is the most profitable tech, so get people there quickly; LT4 and LT5 heavier and longer.', DEC, 'LT1 is now 105.5 h. At 4 h a week that is about 6 months. Option A (matches hours): LT1 6 mo, LT2 6, LT3 4, LT4 4, LT5 4. Option B (Kyle\'s pay idea): LT1 5, LT2 5, LT3 4, LT4 5, LT5 5. Field hours would follow. Which?'),
 (M, 'Program index tool', 'A list of everything we train on with a drop-down to change its year.', DONE, 'Program Index app plus the workbook.'),
 (M, 'Get Help', 'A Get Help button: describe the problem or add a photo; get guidance or the right lesson or video.', DONE, 'Built in the Program Index app. For all techs it moves into the training app with a company key.'),
 (M, 'Get Help', 'If the answer is not in our training, go out and find it on the internet.', LATER, 'Needs the training app with web search. The current page answers from our training only.'),
 (M, 'Pay', 'Published pay by level (like apprenticeship rates), bonuses for performance, bigger jumps at LT4 and LT5.', DEC, 'The app can tie pay to level. Your real rates stay outside the training (example figures only). Do you want a pay table built for internal use?'),
 (M, 'Pay', 'Limit how many reach LT4/LT5 (only as many as the work needs) vs. level up as many as possible.', DEC, 'Kyle leans toward leveling up as many as possible. Your call on any limit.'),
 (M, 'Repair or replace', 'Teach driver basics (milliamps, volts), but company-specific decisions (e.g., MH400: corn-cob lamp vs ballast and lamp vs new fixture) are ours.', ADDED, 'New LT2 course "Repair or Replace: Our Decision Guide". I need your answer for each common situation.'),
 (M, 'Licensing', 'Build it for us now; a questionnaire to tailor it for other companies later.', LATER, 'Noted for licensing.'),
 (M, 'Course testing', 'Have staff (20-40 people) take 10-20 hours of courses each and report problems.', PROP, 'Pilot plan: assign courses by person, add a "report a problem" button to every lesson, collect fixes weekly.'),
 (M, 'Vehicles and trailers', 'Driving, vehicle safety inspections, hooking up a trailer, and backing a trailer with a test and approval.', ADDED, 'New LT1 course "Vehicles, Trailers and Load Securement" with a trailer-backing sign-off. Daily inspection is already in LT1.'),
 (M, 'Ladders', 'How to set up a Little Giant-style (multi-position) ladder.', ADDED, 'Added lesson in Ladders & Fall Protection, with a hands-on sign-off.'),
 (M, 'Truck', 'Cleaning out the truck at the end of the day; minimum stock levels and keeping the truck stocked.', ADDED, 'In the Vehicles course (clean-out) and the new "Truck Stock, Parts ID and Defective Equipment" course.'),
 (M, 'Videos', 'Kyle does the intro and company vision; assign presenters by lesson with a drop-down; short clips for each person\'s likeness.', PROP, 'Build a video assignment sheet: every lesson with a presenter drop-down (Kyle, Chris, Danny, you, senior tech), based on the presenter plan.'),
 (M, 'Videos', 'A HeyGen script for every lesson.', LATER, 'I can write a script per lesson in the format HeyGen imports. Please send one example of HeyGen\'s import format or template.'),
 (M, 'Look', 'Kyle prefers light backgrounds; there should be a light and dark mode switch.', PROP, 'Default to light, with a switch on every page.'),
 (M, 'Progression', 'Techs should not see or start the next level until they finish the current one.', PROP, 'App change: hide future levels until the current level is complete.'),
 (M, 'Adding items', 'Be able to add things to the list.', DONE, 'New Topics tab, and "Training you would add" rows on each reviewer tab.'),
 (M, 'Basics for new hires', 'Build for someone who has never used tools (drill, battery, impact, metric vs imperial, ratchet strap, what a concrete saw or pipe bender is); let experienced people test out.', ADDED, 'New LT1 course "Tool Fundamentals (test-out available)". App change: a test-out option.'),
 (M, 'Tools by level', 'A tool section for every level (no hammer drills for LT1; step bits at LT2; heavier tools later); encourage techs to invest in their own tools.', ADDED, 'Tool Fundamentals (LT1), Installation Tools (LT2), Large Tools (LT5), each with a personal tool list. Do you want a required personal tool list per level?'),
 (M, 'Tool safety', 'Wire strippers: keep every part of your body off grounded metal (Kyle\'s 277 V shock).', ADDED, 'Added to the hand-tools lesson in Tools & Basic Meter Use.'),
 (M, 'Ladders', 'Can you lean an 8-ft A-frame against a wall?', DONE, 'Already taught: never lean a closed stepladder against a wall.'),
 (M, 'Review', 'Send the refined list to Kyle, Chris, Danny and Zac (you added Les and Chris Tanko).', PROP, 'Team workbook ready once you approve this draft.'),
 (M, 'Claude recommendations', 'Claude to recommend topics we have not thought of.', ADDED, 'Green rows: Biological and Public-Site Hazards; Customer Site Rules lesson; Attics, Crawl Spaces and Tight Spaces; Traffic, Public Areas and Night Work.'),
 (M, 'Demonstrate modules', 'Game-style "show me" modules: what do you do first; change a ballast step by step; pole light; 3-way switch; backing a trailer.', DEC, 'Suggest starting with 3-4 "what would you do?" scenarios and a step-by-step ballast change, then trailer backing. At launch or after?'),
 (M, 'Versions', 'Keep track of versions and be able to go back.', DONE, 'Every change is saved as a numbered version in the project history; any piece can be rolled back.'),
 (M, 'Skills Matrix', 'Ratings 1-4: seen it, understand it, can perform it, can teach it.', DONE, 'Kyle agreed.'),
 (Y, 'Approval copy', 'Highlight additions in a different color and send for approval before the team sees it.', DONE, 'Orange = from the meeting and your list; green = Claude recommendation; blue = renamed. I remove highlights after you approve.'),
 (Y, 'Vehicles and trailers', 'Driving, backing up, connecting and inspecting a trailer.', ADDED, 'Vehicles, Trailers and Load Securement (LT1), with backing sign-off.'),
 (Y, 'Vehicle care', 'Vehicle inspections, including cleaning out the vehicle after a project and at the end of each day.', ADDED, 'Vehicles course.'),
 (Y, 'Recycling and PCBs', 'Recycling all mercury lamps; identifying and safely handling PCB ballasts, including special disposal.', ADDED, 'New LT1 course "Lamp Recycling, Universal Waste and PCB Ballasts" (absorbs the recycling lesson now in Lockout/Tagout & Safe Relamping).'),
 (Y, 'Parts', 'Part identification.', DEC, 'Basics added to the new Truck Stock course (LT1); the full Parts Knowledge & Sourcing course stays in LT2. Move it back to LT1?'),
 (Y, 'Truck stock', 'Report what was used off the truck each day on a truck stock sheet so it can be restocked.', ADDED, 'Truck Stock course. Please send your truck stock sheet so the lesson uses it.'),
 (Y, 'Defective equipment', 'Inspect, red-tag and report defective equipment.', ADDED, 'Truck Stock course.'),
 (Y, 'Vehicle maintenance', 'Minor vehicle maintenance: headlight and turn-signal bulbs, battery replacement.', ADDED, 'Vehicles course.'),
 (Y, 'Stop work', 'Full authority to stop a job for safety or when it can\'t be done to our standard, and regroup with supervisor approval.', ADDED, 'Added lesson in Orientation, Safety Culture & PPE.'),
 (Y, 'Rigging', 'Selecting the right ratchet straps; sling and clevis use for pole installs.', ADDED, 'Ratchet straps in the Vehicles course; pole-install rigging lesson added in Rigging & Pole Light Removal (LT3).'),
 (Y, 'Large tools', 'Large-hole hammer drill, wire tugger and minor MIG welding at a higher level.', ADDED, 'New LT5 course (with silica dust and hot-work safety). LT4 instead?'),
 (Y, 'First aid', 'More first aid in the initial training.', ADDED, 'New LT1 course "First Aid, CPR/AED and Emergency Response". Also require a certified first aid/CPR/AED class?'),
 (Y, 'Electrical safety module', 'A separate, editable module from the electrical-safety standard, at a higher level, not titled as NFPA 70E training; suggest names.', ADDED, 'Electrical Safety Module tab: 5 name options (recommended: "Electrical Safety and Arc-Flash Protection"). Part 1 awareness (already in LT1), Part 2 new in LT2 (3 h), Part 3 the existing LT4 course renamed. Mark Keep/Remove per lesson and pick a name.'),
 (Y, 'Course numbers', 'Keep my changes intact.', DONE, 'Your order is unchanged. New courses inserted between them shift the course numbers (e.g. Ladders is now LT1-C03).'),
 (Y, 'Checklist', 'A summary of every change and request so I can check them off.', DONE, 'This file.'),
]
wb = Workbook()
ws = wb.active
ws.title = 'Checklist'
F = 'Arial'
ws['A1'] = 'Nov 10 meeting and your requests: checklist'
ws['A1'].font = Font(name=F, size=16, bold=True)
ws['A2'] = 'Mark "Your call" for each row and add notes. Rows marked "Needs your decision" have a question in the right-hand column.'
ws['A2'].font = Font(name=F, size=10, italic=True)
cols = ['#', 'From', 'Topic', 'Request', 'Status', 'What I did / what I propose', 'Your call', 'Your notes']
widths = [5, 18, 18, 55, 20, 70, 14, 35]
thin = Side(style='thin', color='D0D5DD')
box = Border(left=thin, right=thin, top=thin, bottom=thin)
for i, (c, w) in enumerate(zip(cols, widths), start=1):
    cell = ws.cell(row=4, column=i, value=c)
    cell.font = Font(name=F, size=10, bold=True, color='FFFFFF')
    cell.fill = PatternFill('solid', start_color='18202E')
    cell.border = box
    ws.column_dimensions[cell.column_letter].width = w
status_fill = {DONE: 'E1F3E8', ADDED: 'F8CBAD', PROP: 'DDEBF7', DEC: 'FFF2CC', LATER: 'EDEDED'}
for r, (src, topic, req, status, note) in enumerate(items, start=5):
    vals = [r - 4, src, topic, req, status, note, None, None]
    for i, v in enumerate(vals, start=1):
        cell = ws.cell(row=r, column=i, value=v)
        cell.font = Font(name=F, size=10, bold=(i == 5))
        cell.alignment = Alignment(wrap_text=True, vertical='top')
        cell.border = box
    ws.cell(row=r, column=5).fill = PatternFill('solid', start_color=status_fill[status])
    for i in (7, 8):
        ws.cell(row=r, column=i).fill = PatternFill('solid', start_color='FFFF00')
last = 4 + len(items)
dv = DataValidation(type='list', formula1='"Approve,Change,Not needed,Later"', allow_blank=True)
ws.add_data_validation(dv)
dv.add(f'G5:G{last}')
ws.freeze_panes = 'D5'
ws.auto_filter.ref = f'A4:H{last}'
wb.save(sys.argv[1])
print('items', len(items))
