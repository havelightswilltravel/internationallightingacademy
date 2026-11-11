#!/usr/bin/env python3
"""Video list with a recommended presenter (drop-down) for every lesson, plus a sample full script.
Usage: python3 build_video_list_xlsx.py <out-dir>   (needs layout.json from build_review_xlsx.py and corpus.json from build.js)"""
import json
import sys
from pathlib import Path
from openpyxl import Workbook
from openpyxl.styles import Alignment, Border, Font, PatternFill, Side
from openpyxl.worksheet.datavalidation import DataValidation

out = Path(sys.argv[1])
layout = json.loads((out / 'layout.json').read_text())
corpus = json.loads((out / 'corpus.json').read_text())
sugg = {l['id']: l.get('videoSuggestion', '') for l in corpus['lessons']}

KYLE, CHRIS, DANNY, MATT, TECH = 'Kyle McClelland', 'Chris Munford', 'Danny Smith', 'Matthew Berrett', 'Senior technician (TBD)'
PRESENTERS = [KYLE, CHRIS, DANNY, MATT, TECH, 'Other']
# Course lead by original course code, with lesson exceptions (lesson number -> presenter).
LEAD = {
 'LT1-C01': (DANNY, {1: KYLE}), 'LT1-C02': (DANNY, {}), 'LT1-C03': (MATT, {5: DANNY}), 'LT1-C04': (MATT, {}),
 'LT1-C05': (MATT, {5: TECH, 6: TECH}), 'LT1-C06': (DANNY, {3: MATT, 4: MATT}), 'LT1-C07': (CHRIS, {3: DANNY, 4: DANNY, 5: KYLE}),
 'LT1-C08': (MATT, {}), 'LT1-C09': (MATT, {}), 'LT1-C10': (DANNY, {1: MATT, 2: MATT}), 'LT1-C11': (DANNY, {}),
 'LT2-C01': (MATT, {}), 'LT2-C02': (MATT, {}), 'LT2-C03': (MATT, {}), 'LT2-C04a': (MATT, {}), 'LT2-C04b': (MATT, {}),
 'LT2-C05': (MATT, {5: DANNY}), 'LT2-C06': (MATT, {}), 'LT2-C07': (MATT, {}), 'LT2-C08': (MATT, {}), 'LT2-C09': (MATT, {}),
 'LT2-C10': (MATT, {}), 'LT2-C11': (MATT, {}), 'LT2-C12': (DANNY, {1: KYLE, 3: CHRIS}),
 'LT3-C01': (MATT, {}), 'LT3-C02': (MATT, {}), 'LT3-C03': (MATT, {}), 'LT3-C04': (MATT, {6: DANNY}), 'LT3-C05': (MATT, {5: DANNY}),
 'LT3-C06': (DANNY, {}), 'LT3-C07': (MATT, {}), 'LT3-C08': (MATT, {4: CHRIS}), 'LT3-C09': (MATT, {}), 'LT3-C10': (MATT, {}),
 'LT3-C11': (MATT, {}), 'LT3-C12': (DANNY, {}),
 'LT4-C01': (MATT, {}), 'LT4-C02': (MATT, {4: CHRIS}), 'LT4-C03': (MATT, {}), 'LT4-C04': (MATT, {}), 'LT4-C05': (MATT, {5: DANNY}),
 'LT4-C06': (MATT, {}), 'LT4-C07': (DANNY, {}),
 'LT5-C01': (CHRIS, {1: MATT, 3: DANNY, 6: MATT}), 'LT5-C02': (MATT, {}), 'LT5-C03': (DANNY, {1: KYLE, 2: KYLE, 4: MATT}),
 'LT5-C04': (MATT, {}), 'LT5-C05': (MATT, {5: KYLE}), 'LT5-C06': (CHRIS, {2: MATT, 5: MATT, 3: DANNY, 7: DANNY}),
}
NEW = {'ADD:firstaid': DANNY, 'ADD:recycling': DANNY, 'ADD:biohaz': DANNY, 'ADD:toolfund': TECH, 'ADD:vehicles': DANNY,
       'ADD:truckstock': DANNY, 'ADD:esafety1': DANNY, 'ADD:repair': DANNY, 'ADD:insttools': TECH, 'ADD:attics': DANNY,
       'ADD:traffic': DANNY, 'ADD:industrial': DANNY, 'ADD:largetools': TECH, 'ADD:stopwork': KYLE, 'ADD:mpladder': TECH,
       'ADD:strippers': MATT, 'ADD:siterules': CHRIS, 'ADD:poleinstall': DANNY}

F = 'Arial'
thin = Side(style='thin', color='D0D5DD')
box = Border(left=thin, right=thin, top=thin, bottom=thin)
wrap = Alignment(wrap_text=True, vertical='top')
yellow = PatternFill('solid', start_color='FFFF00')
band = PatternFill('solid', start_color='EEF1F5')


def header(ws, row, cols, widths):
    for i, (c, w) in enumerate(zip(cols, widths), start=1):
        cell = ws.cell(row=row, column=i, value=c)
        cell.font = Font(name=F, size=10, bold=True, color='FFFFFF')
        cell.fill = PatternFill('solid', start_color='18202E')
        cell.alignment, cell.border = Alignment(wrap_text=True, vertical='center'), box
        ws.column_dimensions[cell.column_letter].width = w


def put(ws, r, vals, bold=False, fill=None):
    for i, v in enumerate(vals, start=1):
        cell = ws.cell(row=r, column=i, value=v)
        cell.font, cell.alignment, cell.border = Font(name=F, size=10, bold=bold), wrap, box
        if fill:
            cell.fill = fill


wb = Workbook()
ws = wb.active
ws.title = 'Video List'
ws['A1'] = 'Training videos and presenters'
ws['A1'].font = Font(name=F, size=16, bold=True)
ws['A2'] = ('One video per lesson. The presenter column is a recommendation; change it with the drop-down. '
            '"Scene and what to show" is the starting point for each script. Full scripts follow the format on the Sample Script tab.')
ws['A2'].font = Font(name=F, size=10, italic=True)
cols = ['#', 'Level', 'Course', 'Course title', 'Lesson', 'Lesson title', 'Minutes', 'Presenter', 'Scene and what to show', 'Script status']
header(ws, 4, cols, [5, 7, 10, 34, 7, 40, 8, 22, 70, 16])
r, n = 5, 0
n += 1
put(ws, r, [n, 'All', 'Intro', 'Welcome to the Lighting Academy', 1, 'Welcome, company vision and how the program works', 4, KYLE,
            'Kyle on camera at the shop or a job site: why the program exists, the five levels, earning your way up by skill, what we expect and what you can earn by level.', 'Not started'])
ws.cell(row=r, column=8).fill = yellow
r += 1
for lvl, items in layout.items():
    for c in items:
        if c['kind'] == 'lesson':
            n += 1
            host = next((x for x in items if x['code'] == c['target'] or x['code'] == c.get('target')), None)
            put(ws, r, [n, lvl, c['new_code'].rstrip(' +'), host['title'] if host else '', 'new', c['title'],
                        int(c['hours'] * 60) or None, NEW.get(c['code'], MATT), 'New lesson; scene to be written with the lesson.', 'Lesson not written'])
            ws.cell(row=r, column=8).fill = yellow
            r += 1
            continue
        if c['add']:
            n += 1
            put(ws, r, [n, lvl, c['new_code'], c['title'], 'all', 'New course: lessons to be written', None, NEW.get(c['code'], MATT),
                        'Videos planned once the lessons are written.', 'Lesson not written'], fill=band)
            ws.cell(row=r, column=8).fill = yellow
            r += 1
            continue
        lead, exc = LEAD.get(c['code'], (MATT, {}))
        for i, l in enumerate(c['lessons'], start=1):
            n += 1
            num = int(l['id'].split('/')[1].split('-')[0])
            put(ws, r, [n, lvl, c['new_code'], c['title'], i, l['title'], l['minutes'], exc.get(num, lead),
                        sugg.get(l['id'], ''), 'Not started'])
            ws.cell(row=r, column=8).fill = yellow
            r += 1
last = r - 1
dv = DataValidation(type='list', formula1='"' + ','.join(PRESENTERS) + '"', allow_blank=True)
ws.add_data_validation(dv)
dv.add(f'H5:H{last}')
dv2 = DataValidation(type='list', formula1='"Not started,Script drafted,Script approved,Recorded,Published,Lesson not written"', allow_blank=True)
ws.add_data_validation(dv2)
dv2.add(f'J5:J{last}')
ws.freeze_panes = 'G5'
ws.auto_filter.ref = f'A4:J{last}'

# summary by presenter
sm = wb.create_sheet('By Presenter')
header(sm, 1, ['Presenter', 'Videos', 'Minutes of lessons'], [26, 10, 18])
for k, p in enumerate(PRESENTERS, start=2):
    put(sm, k, [p, f"=COUNTIF('Video List'!H5:H{last},A{k})", f"=SUMIF('Video List'!H5:H{last},A{k},'Video List'!G5:G{last})"])

# sample script
ss = wb.create_sheet('Sample Script')
ss['A1'] = 'Sample script: LT1-C01 Lesson 1, Safety Culture & Hazard Recognition (about 4 minutes)'
ss['A1'].font = Font(name=F, size=14, bold=True)
ss['A2'] = ('Format for every video: one row per scene, with the scene/background, what appears on screen, and the exact words the '
            'presenter (avatar) says. Approve or change this format before scripts are written for every lesson.')
ss['A2'].font = Font(name=F, size=10, italic=True)
ss['A3'] = 'Presenter: Kyle McClelland (opening) and Danny Smith (walkthrough)'
ss['A3'].font = Font(name=F, size=10, bold=True)
header(ss, 5, ['Scene', 'Speaker', 'Scene / background', 'On-screen text or graphic', 'Presenter says (avatar script)', 'Seconds'],
       [7, 14, 40, 34, 80, 9])
scenes = [
 ('Kyle', 'Shop floor in front of the service trucks, morning light. Medium shot.', 'Title: Safety Culture & Hazard Recognition',
  "Welcome to your first lesson. Before you change a single lamp, I want you to hear this from me: nothing we do is worth getting hurt over. Every lighting job mixes electricity, heights and people moving around below you. That's why safety comes first here, every day.", 25),
 ('Kyle', 'Same shot, slight push in.', 'Graphic: "You have the authority to STOP WORK"',
  "From your very first day, you have the authority and the duty to stop work if something isn't safe. Nobody here will ever get in trouble for a good-faith stop. If the schedule and safety ever conflict, safety wins, and you call your supervisor.", 25),
 ('Danny', 'Customer warehouse aisle with high-bay fixtures; Danny with a new tech.', 'Lower third: Danny Smith, Operations Manager',
  "I'm Danny. Let's walk a real job before any work starts. This is what we call the hazard hunt, and it takes about two minutes.", 15),
 ('Danny', 'Camera tilts up: ceiling, sprinkler pipes, a fixture with a cracked lens.', 'Callouts: 1 Overhead  2 At the fixture',
  "Start overhead. What's above the fixture? Sprinkler pipes, ductwork, open junction boxes. Then the fixture itself: cracked lens, burn marks, a burning smell, loose wires? If you see damage, stop and tell your lead.", 25),
 ('Danny', 'Camera at ladder height, then down to the floor; a forklift passes at the end of the aisle.', 'Callouts: 3 Working height  4 Floor',
  "Next, what are you standing on? Is this the right ladder for the height? Now the floor: is it level and dry? Is there traffic? Forklifts, carts, doors that swing into your ladder. Every one of those needs a control: cones, a spotter, or a different plan.", 30),
 ('Danny', 'Wide shot of the area; an open electrical panel door in the background.', 'Callouts: 5 Surroundings  6 People',
  "Look around you. Is the panel accessible? Any chemicals, hot surfaces or customer equipment you could damage? And who else is here? Anyone who'll lose lights or power needs to know before we start.", 25),
 ('Danny', 'Close-up on the open panel; Danny steps back.', 'Graphic: "Not qualified? Stay out of open panels."',
  "One rule for you as a new tech: you are not qualified to work on or near exposed energized parts. If a task would put you there, stop and get your supervisor.", 20),
 ('Danny', 'Crew of three in a short huddle by the lift.', 'Graphic: Pre-task huddle checklist',
  "Before work, the crew huddles for two minutes: the hazards we found, the controls we'll use, and who's doing what. Then we work the plan.", 20),
 ('Danny', 'A tech points at a ladder with a missing foot and says "Stop." The crew swaps the ladder.', 'Graphic: "Stop work. Fix it. Then go."',
  "And this is what a stop looks like. Missing ladder foot, so we stop, tag it, get another ladder, and keep going. That's safety culture: what you do when nobody's watching.", 20),
 ('Kyle', 'Back at the shop.', 'Graphic: Next: OSHA Basics & Incident Reporting',
  "Take what you just saw onto every job. Now read the lesson, then take the quiz. See you in the next one.", 12),
]
for k, (who, scene, onscreen, says, sec) in enumerate(scenes, start=6):
    put(ss, k, [k - 5, who, scene, onscreen, says, sec])
put(ss, 6 + len(scenes), [None, None, None, 'Total', None, f'=SUM(F6:F{5 + len(scenes)})'], bold=True)

wb.save(out / 'video-list.xlsx')
print('videos', n)
