#!/usr/bin/env python3
"""Build the team-review workbook for the program layout.

Usage: python3 scripts/program-index/build_review_xlsx.py <out-dir> <placement.json> [Reviewer 1,Reviewer 2,...]

Reads index-data.json (written by build.js), applies the placement (level order, splits, skill moves),
renumbers codes by position, and writes program-layout-review.xlsx plus code-map.json (internal: old -> new codes).
The workbook shows only the layout itself; no change history.
"""
import json
import sys
from pathlib import Path

from openpyxl import Workbook
from openpyxl.formatting.rule import FormulaRule
from openpyxl.styles import Alignment, Border, Font, PatternFill, Side
from openpyxl.utils import get_column_letter
from openpyxl.worksheet.datavalidation import DataValidation

out = Path(sys.argv[1])
placement = json.loads(Path(sys.argv[2]).read_text())
REVIEWERS = (sys.argv[3].split(',') if len(sys.argv) > 3 else
             ['Kyle', 'Les', 'Chris Munford', 'Chris Tanko', 'Danny Smith', 'Zac Young'])
data = json.loads((out / 'index-data.json').read_text())

LEVELS = ['LT1', 'LT2', 'LT3', 'LT4', 'LT5']
LEVEL_YEAR = {'LT1': 'Year 1', 'LT2': 'Year 1', 'LT3': 'Year 2', 'LT4': 'Year 2', 'LT5': 'Year 2'}
TARGET_HOURS = 400

# ---------------- apply placement ----------------
groups = data['groups']
by_code = {g['code']: g for g in groups}
active = [g for g in groups if not g['archived'] and g['code'] in LEVELS]
mgr = by_code['MGR']
archived = [g for g in groups if g['archived']]
pool = {}
for g in active:
    for c in g['courses']:
        pool[c['code']] = c
for code, parts in (placement.get('splits') or {}).items():
    base = pool.pop(code)
    for part in parts:
        pc = dict(base)
        pc.update(code=part['code'], title=part['title'], hours=part['hours'],
                  questions=part.get('questions', base['questions']),
                  lessons=[base['lessons'][i - 1] for i in part['lessons']])
        pool[part['code']] = pc
for code, t in (placement.get('titles') or {}).items():
    pool[code]['title'] = t
layout = {}
for lvl in LEVELS:
    spec = placement['levels'].get(lvl) or {}
    if spec.get('courses'):
        layout[lvl] = [pool[code] for code, _ in spec['courses']]
    else:
        layout[lvl] = sorted(by_code[lvl]['courses'], key=lambda c: c['order'])
placed = {c['code'] for lvl in LEVELS for c in layout[lvl]}
missing = set(pool) - placed
assert not missing, f'courses not placed: {missing}'

skills = {lvl: [] for lvl in LEVELS}
moves = placement.get('skills') or {}
for g in active:
    for s in g['skills']:
        lvl = moves.get(s['code'], [g['code']])[0]
        skills[lvl].append((LEVELS.index(g['code']), s['code'], s))
for lvl in LEVELS:
    skills[lvl] = [s for _, _, s in sorted(skills[lvl], key=lambda t: (t[0], t[1]))]

# renumber
code_map = {}
for lvl in LEVELS:
    for i, c in enumerate(layout[lvl], start=1):
        new = f'{lvl}-C{i:02d}'
        code_map[c['code']] = new
        c['new_code'] = new
        c['pos'] = i
    for i, s in enumerate(skills[lvl], start=1):
        new = f'{lvl}-S{i:02d}'
        code_map[s['code']] = new
        s['new_code'] = new
(out / 'code-map.json').write_text(json.dumps(code_map, indent=1))

level_title = {g['code']: g['title'] for g in groups}
level_req = {g['code']: g['req'] for g in groups if g.get('req')}
themes = {lvl: (placement['levels'].get(lvl) or {}).get('theme', '') for lvl in LEVELS}

# ---------------- styles ----------------
F = 'Arial'
font = Font(name=F, size=10)
bold = Font(name=F, size=10, bold=True)
small_i = Font(name=F, size=9, italic=True)
head_font = Font(name=F, size=10, bold=True, color='FFFFFF')
title_font = Font(name=F, size=16, bold=True)
h2 = Font(name=F, size=12, bold=True)
grey = Font(name=F, size=10, color='6B7280')
head_fill = PatternFill('solid', start_color='18202E')
band_fill = PatternFill('solid', start_color='EEF1F5')
input_fill = PatternFill('solid', start_color='FFFF00')
note_fill = PatternFill('solid', start_color='FDEEDF')
thin = Side(style='thin', color='D0D5DD')
box = Border(left=thin, right=thin, top=thin, bottom=thin)
wrap = Alignment(wrap_text=True, vertical='top')
top = Alignment(vertical='top')


def header(ws, row, cols, widths=None):
    for i, name in enumerate(cols, start=1):
        c = ws.cell(row=row, column=i, value=name)
        c.font, c.fill, c.border = head_font, head_fill, box
        c.alignment = Alignment(wrap_text=True, vertical='center')
        if widths:
            ws.column_dimensions[get_column_letter(i)].width = widths[i - 1]
    ws.row_dimensions[row].height = 32


def put(ws, row, values, f=font, fill=None, start=1):
    for i, v in enumerate(values, start=start):
        c = ws.cell(row=row, column=i, value=v)
        c.font = f
        c.alignment = wrap if isinstance(v, str) and len(v) > 40 else top
        c.border = box
        if fill:
            c.fill = fill


def band(ws, row, text, ncols):
    c = ws.cell(row=row, column=1, value=text)
    c.font, c.fill = bold, band_fill
    for col in range(2, ncols + 1):
        ws.cell(row=row, column=col).fill = band_fill
    ws.merge_cells(start_row=row, start_column=1, end_row=row, end_column=ncols)


def dv_list(ws, values, ref, prompt):
    dv = DataValidation(type='list', formula1='"' + ','.join(values) + '"', allow_blank=True, showErrorMessage=True,
                        errorTitle='Pick from the list', error='Choose from the drop-down, or leave it blank.',
                        promptTitle='Optional', prompt=prompt, showInputMessage=True)
    ws.add_data_validation(dv)
    dv.add(ref)


def q(name):
    return "'" + name.replace("'", "''") + "'"


wb = Workbook()

# ---------------- Start Here ----------------
st = wb.active
st.title = 'Start Here'
st.column_dimensions['A'].width = 26
st.column_dimensions['B'].width = 100
st['A1'] = 'Lighting Technician Training Program: layout review'
st['A1'].font = title_font
rows = [
    ('What this is', 'The proposed layout of our lighting technician training program: every course, in order, by level and year. '
                     'It takes a brand-new hire to Master Lighting Technician in about two years.'),
    ('The program', 'Five levels (LT1 to LT5) over about two years. Year 1 = LT1 and LT2. Year 2 = LT3, LT4 and LT5. '
                    'Target: about 400 hours of course time in total (lessons, videos, quizzes and supervised practice), '
                    'plus field hours on the job. Techs move up a level by passing the courses and the level exam, logging the '
                    'field hours, and showing each hands-on skill to an evaluator. Advancement is by demonstrated skill, not time.'),
    ('How it is built', 'A new tech learns safety first, then equipment (ladders, lifts), tools, customer service and project/retrofit '
                        'work. Lighting knowledge builds from incandescent and fluorescent to HID, LED, track and low-voltage. '
                        'Exterior work comes after aerial lifts are learned. Controls, signage and specialty systems follow, '
                        'then senior and master topics.'),
    ('What we need from you', 'Your view of the layout. Is each course at the right level and in the right order for how a '
                              'technician really develops in our work? Is anything missing, in the wrong place, or not needed? '
                              'Are the hours about right?'),
    ('Your tab', 'Each reviewer has a tab with their name. Work only in your own tab; several people can edit the file at the same time.'),
    ('How to fill it in', '1. Read the Program Layout tab for the big picture.\n'
                          '2. Open your tab. For each course, pick an option in "Your view": Keep as is, Move or change, or Remove from program.\n'
                          '3. To move a course, pick a Suggested level and/or type a Suggested course # (its place in that level, 1 = first). '
                          'To change its size, type Suggested hours.\n'
                          '4. Say why in Comments. Comments are the most useful part.\n'
                          '5. Courses marked "Not in program" at the bottom are available to add. Pick "Add to program" and a level.\n'
                          '6. Add any training that is missing in the "Training you would add" rows at the very bottom.\n'
                          '7. Leave a row blank if you agree with it. The totals at the top of your tab show the hours your layout adds up to.'),
    ('Please do not', 'Insert, delete or sort rows on your tab, or edit other people\'s tabs. The summary tab lines up row by row.'),
    ('Yellow cells', 'The only cells to fill in. Everything else is reference or a formula.'),
    ('Other tabs', 'Program Layout: the course order and hours by level and year.\n'
                   'Requirements by Level: what a tech must complete to pass each level.\n'
                   'Program Detail: every lesson and hands-on skill, for reference.\n'
                   'All Suggestions: everyone\'s input in one place (for the program lead).'),
    ('Questions', 'Ask the program lead.'),
]
for i, (k, v) in enumerate(rows, start=3):
    st.cell(row=i, column=1, value=k).font = bold
    c = st.cell(row=i, column=2, value=v)
    c.font, c.alignment = font, wrap
    if k == 'Yellow cells':
        st.cell(row=i, column=1).fill = input_fill
st.row_dimensions[8].height = 120

# ---------------- Program Layout ----------------
pl = wb.create_sheet('Program Layout')
pl['A1'] = 'Program layout'
pl['A1'].font = title_font
pl['A2'] = 'Two years, five levels, target about 400 hours of course time. Year 1 = LT1 and LT2; Year 2 = LT3, LT4 and LT5.'
pl['A2'].font = font
header(pl, 4, ['Level', 'Course #', 'Code', 'Course', 'Year', 'Course hours', 'Lessons', 'Quiz questions'],
       [9, 9, 11, 50, 10, 12, 9, 10])
r = 5
lvl_total = {}
for lvl in LEVELS:
    band(pl, r, f'{lvl} {level_title[lvl]} ({LEVEL_YEAR[lvl]}): {themes[lvl]}', 8)
    r += 1
    first = r
    for c in layout[lvl]:
        put(pl, r, [lvl, c['pos'], c['new_code'], c['title'], LEVEL_YEAR[lvl], c['hours'], len(c['lessons']), c['questions']])
        pl.cell(row=r, column=6).number_format = '0.0'
        r += 1
    put(pl, r, [f'{lvl} total', None, None, f'=COUNTA(C{first}:C{r - 1})&" courses"', None, f'=SUM(F{first}:F{r - 1})',
                f'=SUM(G{first}:G{r - 1})', f'=SUM(H{first}:H{r - 1})'], f=bold)
    pl.cell(row=r, column=6).number_format = '0.0'
    lvl_total[lvl] = r
    r += 2
put(pl, r, ['Year 1', None, None, 'LT1 + LT2', None, f"=F{lvl_total['LT1']}+F{lvl_total['LT2']}"], f=bold)
put(pl, r + 1, ['Year 2', None, None, 'LT3 + LT4 + LT5', None, f"=F{lvl_total['LT3']}+F{lvl_total['LT4']}+F{lvl_total['LT5']}"], f=bold)
put(pl, r + 2, ['Total', None, None, 'Two years', None, f'=F{r}+F{r + 1}'], f=bold)
put(pl, r + 3, ['Target', None, None, 'About 400 hours of course time', None, TARGET_HOURS], f=bold)
put(pl, r + 4, ['Room left', None, None, 'Hours available for anything added', None, f'=F{r + 3}-F{r + 2}'], f=bold)
for k in range(r, r + 5):
    pl.cell(row=k, column=6).number_format = '0.0'
r += 7
band(pl, r, f"Manager Module (separate, for supervisors and managers): {len(mgr['courses'])} courses, "
            f"{sum(c['hours'] for c in mgr['courses']):.0f} hours", 8)
r += 1
for c in sorted(mgr['courses'], key=lambda c: c['order']):
    put(pl, r, ['MGR', c['order'], c['code'], c['title'], 'Any time', c['hours'], len(c['lessons']), c['questions']], f=grey)
    r += 1
pl.freeze_panes = 'A5'

# ---------------- Requirements by Level ----------------
rq = wb.create_sheet('Requirements by Level')
rq['A1'] = 'What it takes to pass each level'
rq['A1'].font = title_font
rq['A2'] = ('Pass every course quiz, pass the level final exam, log the minimum field hours (approved by a supervisor) and show '
            'every hands-on skill to an evaluator. A critical safety skill fails on any safety mistake. Hours are a minimum; '
            'advancement is by demonstrated skill.')
rq['A2'].font, rq['A2'].alignment = font, wrap
rq.merge_cells('A2:L2')
rq.row_dimensions[2].height = 42
header(rq, 4, ['Level', 'Title', 'Year', 'Typical months', 'Courses', 'Course hours', 'Hands-on skills', 'Critical skills',
               'Course quiz pass', 'Final exam', 'Final exam pass', 'Min. field hours'],
       [8, 32, 9, 10, 9, 10, 10, 9, 10, 20, 10, 11])
for k, lvl in enumerate(LEVELS, start=5):
    q_ = level_req[lvl]
    put(rq, k, [lvl, level_title[lvl], LEVEL_YEAR[lvl], q_['months'], len(layout[lvl]),
                sum(c['hours'] for c in layout[lvl]), len(skills[lvl]), sum(1 for s in skills[lvl] if s['critical']),
                q_['coursePass'] / 100, f"{q_['examQuestions']} questions, {q_['examMinutes']} min", q_['examPass'] / 100, q_['ojt']])
    for col in (9, 11):
        rq.cell(row=k, column=col).number_format = '0%'
    rq.cell(row=k, column=6).number_format = '0.0'
    rq.cell(row=k, column=12).number_format = '#,##0'
put(rq, 10, ['Total', 'LT1 to LT5', None, '=SUM(D5:D9)', '=SUM(E5:E9)', '=SUM(F5:F9)', '=SUM(G5:G9)', '=SUM(H5:H9)',
             None, None, None, '=SUM(L5:L9)'], f=bold)
rq.cell(row=10, column=6).number_format = '0.0'
rq.cell(row=10, column=12).number_format = '#,##0'

# ---------------- Program Detail ----------------
pd = wb.create_sheet('Program Detail')
header(pd, 1, ['Type', 'Level', 'Course #', 'Code', 'Title', 'Course', 'Year', 'Course hours', 'Lesson minutes',
               'Critical skill'], [9, 8, 9, 13, 60, 11, 10, 10, 10, 9])
r = 2
for lvl in LEVELS:
    for c in layout[lvl]:
        put(pd, r, ['Course', lvl, c['pos'], c['new_code'], c['title'], None, LEVEL_YEAR[lvl], c['hours'],
                    sum(l['minutes'] or 0 for l in c['lessons']), None], f=bold, fill=band_fill)
        r += 1
        for i, l in enumerate(c['lessons'], start=1):
            put(pd, r, ['Lesson', lvl, c['pos'], f"{c['new_code']} L{i:02d}", l['title'], c['new_code'], LEVEL_YEAR[lvl],
                        None, l['minutes'], None])
            r += 1
    for s in skills[lvl]:
        put(pd, r, ['Skill', lvl, None, s['new_code'], s['title'], None, LEVEL_YEAR[lvl], None, None,
                    'Yes' if s['critical'] else None])
        r += 1
pd.freeze_panes = 'E2'
pd.auto_filter.ref = f'A1:J{r - 1}'

# ---------------- reviewer tabs ----------------
VIEW = ['Keep as is', 'Move or change', 'Remove from program', 'Add to program']
cols = ['Level', 'Course #', 'Code', 'Course', 'Year', 'Hours', 'Your view', 'Suggested level', 'Suggested course #',
        'Suggested hours', 'Comments (why?)', 'Level (yours)', 'Year (yours)', 'Hours (yours)']
widths = [9, 9, 11, 44, 8, 7, 18, 12, 11, 11, 50, 10, 10, 9]
HR = 7                      # header row
course_rows = []            # (kind, data) in sheet order, shared by every reviewer tab
for lvl in LEVELS:
    course_rows.append(('band', f'{lvl} {level_title[lvl]} ({LEVEL_YEAR[lvl]}): {themes[lvl]}'))
    for c in layout[lvl]:
        course_rows.append(('course', (lvl, c['pos'], c['new_code'], c['title'], LEVEL_YEAR[lvl], c['hours'])))
course_rows.append(('band', 'Not in program: available to add (earlier electrical courses; most could return as a shorter '
                            'senior topic of about 7 hours)'))
for g in archived:
    for c in sorted(g['courses'], key=lambda c: c['order']):
        course_rows.append(('course', ('Not in program', None, c['code'], c['title'], 'Not in program', c['hours'])))
course_rows.append(('band', 'Training you would add that is not listed (pick a level, name it, estimate hours, and say what it should cover)'))
NEW_ROWS = 10
for i in range(NEW_ROWS):
    course_rows.append(('new', i + 1))
LAST = HR + len(course_rows)


def build_reviewer(name):
    ws = wb.create_sheet(name[:31])
    ws['A1'] = f'Review: {name}'
    ws['A1'].font = title_font
    ws['A2'] = ('Fill in the yellow cells only. Leave a row blank if you agree. Comments are the most useful part. '
                'Please do not insert, delete or sort rows.')
    ws['A2'].font = small_i
    ws.merge_cells('A2:K2')
    # totals with this reviewer's suggestions
    lab = [('Year 1 hours (yours)', '"Year 1"'), ('Year 2 hours (yours)', '"Year 2"')]
    for k, (t, y) in enumerate(lab):
        ws.cell(row=3 + k, column=4, value=t).font = bold
        c = ws.cell(row=3 + k, column=6, value=f'=SUMIFS($N${HR + 1}:$N${LAST},$M${HR + 1}:$M${LAST},{y},$L${HR + 1}:$L${LAST},"LT*")')
        c.font, c.number_format = bold, '0.0'
    ws.cell(row=5, column=4, value=f'Total course hours (yours) vs. target of {TARGET_HOURS}').font = bold
    c = ws.cell(row=5, column=6, value='=F3+F4')
    c.font, c.number_format = bold, '0.0'
    c = ws.cell(row=5, column=7, value=f'=IF(F5<={TARGET_HOURS},"Within target","Over by "&TEXT(F5-{TARGET_HOURS},"0.0")&" h")')
    c.font = bold
    header(ws, HR, cols, widths)
    r = HR + 1
    for kind, d in course_rows:
        if kind == 'band':
            band(ws, r, d, 14)
        elif kind == 'course':
            lvl, pos, code, title, year, hours = d
            put(ws, r, [lvl, pos, code, title, year, hours, None, None, None, None, None], f=grey if lvl == 'Not in program' else font)
            for col in range(7, 12):
                ws.cell(row=r, column=col).fill = input_fill
        else:
            put(ws, r, [None, None, f'New {d}', None, None, None, 'Add to program', None, None, None, None])
            for col in (1, 2, 4, 6, 11):
                ws.cell(row=r, column=col).fill = input_fill
            ws.cell(row=r, column=7).font = grey
        if kind != 'band':
            # derived columns: this reviewer's level, year and hours for the row
            if kind == 'new':
                ws.cell(row=r, column=12, value=f'=IF(D{r}="","",A{r})')
                ws.cell(row=r, column=13, value=f'=IF(L{r}="","",IF(OR(L{r}="LT1",L{r}="LT2"),"Year 1","Year 2"))')
                ws.cell(row=r, column=14, value=f'=IF(L{r}="","",F{r})')
            else:
                ws.cell(row=r, column=12, value=f'=IF(G{r}="Remove from program","Not in program",IF(H{r}<>"",H{r},A{r}))')
                ws.cell(row=r, column=13, value=f'=IF(LEFT(L{r},2)<>"LT","Not in program",IF(OR(L{r}="LT1",L{r}="LT2"),"Year 1","Year 2"))')
                ws.cell(row=r, column=14, value=f'=IF(J{r}<>"",J{r},F{r})')
            for col in (12, 13, 14):
                cc = ws.cell(row=r, column=col)
                cc.font, cc.border = grey, box
            ws.cell(row=r, column=14).number_format = '0.0'
            ws.cell(row=r, column=6).number_format = '0.0'
            ws.cell(row=r, column=10).number_format = '0.0'
        r += 1
    dv_list(ws, VIEW, f'G{HR + 1}:G{LAST}', 'Keep as is, Move or change, Remove from program, or Add to program (for courses not in the program).')
    dv_list(ws, LEVELS + ['Optional'], f'H{HR + 1}:H{LAST}', 'The level you think this course belongs in.')
    dv_list(ws, LEVELS, f'A{LAST - NEW_ROWS + 1}:A{LAST}', 'The level this new training belongs in.')
    dvn = DataValidation(type='whole', operator='between', formula1='1', formula2='30', allow_blank=True, showErrorMessage=True,
                         errorTitle='Whole number', error='Enter its place in the level (1 = first), or leave blank.',
                         promptTitle='Optional', prompt='Its place within the level (1 = first).', showInputMessage=True)
    ws.add_data_validation(dvn)
    dvn.add(f'I{HR + 1}:I{LAST}')
    dvn.add(f'B{LAST - NEW_ROWS + 1}:B{LAST}')
    dvh = DataValidation(type='decimal', operator='between', formula1='0.25', formula2='40', allow_blank=True, showErrorMessage=True,
                         errorTitle='Hours', error='Enter course hours from 0.25 to 40, or leave blank.')
    ws.add_data_validation(dvh)
    dvh.add(f'J{HR + 1}:J{LAST}')
    dvh.add(f'F{LAST - NEW_ROWS + 1}:F{LAST}')
    ws.freeze_panes = f'E{HR + 1}'
    ws.column_dimensions['L'].hidden = False
    for col in ('L', 'M', 'N'):
        ws.column_dimensions[col].outlineLevel = 1
    ws.cell(row=HR - 1, column=12, value='Worked out from your entries').font = small_i
    return ws


for name in REVIEWERS:
    build_reviewer(name)

# ---------------- All Suggestions ----------------
al = wb.create_sheet('All Suggestions')
al['A1'] = 'All suggestions in one place'
al['A1'].font = title_font
al['A2'] = ('Fills in automatically from each reviewer\'s tab. Blank means no suggestion. The last two columns are for the '
            'program lead\'s decision.')
al['A2'].font = small_i
al.merge_cells('A2:J2')
nrev = len(REVIEWERS)
acols = ['Level', 'Course #', 'Code', 'Course', 'Hours'] + REVIEWERS + ['Reviewers suggesting a change', 'Decision', 'Decision notes']
awidths = [9, 8, 11, 40, 7] + [30] * nrev + [12, 16, 30]
# hours with each reviewer's suggestions
al.cell(row=3, column=4, value='Total course hours with each reviewer\'s suggestions').font = bold
for i, name in enumerate(REVIEWERS):
    c = al.cell(row=3, column=6 + i, value=f'={q(name[:31])}!F5')
    c.font, c.number_format = bold, '0.0'
AHR = HR
header(al, AHR, acols, awidths)
first_rev_col = get_column_letter(6)
last_rev_col = get_column_letter(5 + nrev)
cnt_col = 6 + nrev
r = AHR + 1
for kind, d in course_rows:
    src = r   # same row number on every reviewer tab
    if kind == 'band':
        band(al, r, d, len(acols))
    else:
        if kind == 'course':
            lvl, pos, code, title, year, hours = d
            put(al, r, [lvl, pos, code, title, hours], f=grey if lvl == 'Not in program' else font)
        else:
            put(al, r, [None, None, f'New {d}', 'New training suggested (see each reviewer)', None], f=grey)
        for i, name in enumerate(REVIEWERS):
            t = q(name[:31])
            if kind == 'course':
                f_ = (f'=IF(AND({t}!G{src}="",{t}!H{src}="",{t}!I{src}="",{t}!J{src}="",{t}!K{src}=""),"",'
                      f'IF({t}!G{src}="","",{t}!G{src})'
                      f'&IF({t}!H{src}<>""," | Level "&{t}!H{src},"")'
                      f'&IF({t}!I{src}<>""," | #"&{t}!I{src},"")'
                      f'&IF({t}!J{src}<>""," | "&{t}!J{src}&" h","")'
                      f'&IF({t}!K{src}<>""," | "&{t}!K{src},""))')
            else:
                f_ = (f'=IF({t}!D{src}="","",{t}!D{src}'
                      f'&IF({t}!A{src}<>""," | "&{t}!A{src},"")'
                      f'&IF({t}!B{src}<>""," #"&{t}!B{src},"")'
                      f'&IF({t}!F{src}<>""," | "&{t}!F{src}&" h","")'
                      f'&IF({t}!K{src}<>""," | "&{t}!K{src},""))')
            c = al.cell(row=r, column=6 + i, value=f_)
            c.font, c.alignment, c.border = font, wrap, box
        rng = f'{first_rev_col}{r}:{last_rev_col}{r}'
        c = al.cell(row=r, column=cnt_col, value=f'=COUNTIF({rng},"?*")-COUNTIF({rng},"Keep as is")')
        c.font, c.border = bold, box
        for col in (cnt_col + 1, cnt_col + 2):
            cc = al.cell(row=r, column=col)
            cc.fill, cc.border, cc.font = input_fill, box, font
    r += 1
ALAST = r - 1
dv_list(al, ['Keep as is', 'Change', 'Discuss', 'Add', 'Remove'], f'{get_column_letter(cnt_col + 1)}{AHR + 1}:{get_column_letter(cnt_col + 1)}{ALAST}',
        'Your decision on this row.')
al.conditional_formatting.add(f'{first_rev_col}{AHR + 1}:{last_rev_col}{ALAST}',
                              FormulaRule(formula=[f'AND(LEN({first_rev_col}{AHR + 1})>0,{first_rev_col}{AHR + 1}<>"Keep as is")'],
                                          fill=note_fill))
al.freeze_panes = f'F{AHR + 1}'

wb.active = 0
dest = out / 'program-layout-review.xlsx'
wb.save(dest)
print('Wrote', dest, {lvl: (len(layout[lvl]), sum(c['hours'] for c in layout[lvl]), len(skills[lvl])) for lvl in LEVELS})
