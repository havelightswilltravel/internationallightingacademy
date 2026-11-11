#!/usr/bin/env python3
"""Build the Program Index workbook (LT1-LT5) from index-data.json written by build.js.

Usage: python3 scripts/program-index/build_xlsx.py <out-dir> [placements.json]
placements.json (optional) maps item keys (c_LT1-C01, l_LT1-C01_01, s_LT1-S04) to year values
saved in the Program Index page, so the workbook shows the years as currently set.
"""
import json
import sys
from pathlib import Path

from openpyxl import Workbook
from openpyxl.comments import Comment
from openpyxl.styles import Alignment, Border, Font, PatternFill, Side
from openpyxl.utils import get_column_letter
from openpyxl.worksheet.datavalidation import DataValidation

args = sys.argv[1:]
proposal = {}
if '--proposal' in args:
    k = args.index('--proposal')
    proposal = json.loads(Path(args[k + 1]).read_text())
    del args[k:k + 2]
sys.argv = [sys.argv[0]] + args
out = Path(sys.argv[1])
data = json.loads((out / 'index-data.json').read_text())
placements = json.loads(Path(sys.argv[2]).read_text()) if len(sys.argv) > 2 else {}

LEVEL_YEAR = {'LT1': '1', 'LT2': '1', 'LT3': '2', 'LT4': '2', 'LT5': '2', 'MGR': 'mgr'}
# Proposed placement: course code -> (level, position, reason)
PROP = {}
for lvl, spec in (proposal.get('levels') or {}).items():
    for pos, (code, why) in enumerate(spec['courses'], start=1):
        PROP[code] = (lvl, pos, why)
PROP_SKILL = proposal.get('skills') or {}
YEAR = {'1': 'Year 1', '2': 'Year 2', 'opt': 'Optional / elective',
        'mgr': 'Manager Module', 'none': 'Not in program'}
YEAR_LIST = list(YEAR.values())
LEVEL_LIST = ['LT1', 'LT2', 'LT3', 'LT4', 'LT5', 'MGR', 'Optional / elective', 'Not in program']

F = 'Arial'
font = Font(name=F, size=10)
bold = Font(name=F, size=10, bold=True)
head_font = Font(name=F, size=10, bold=True, color='FFFFFF')
title_font = Font(name=F, size=16, bold=True)
head_fill = PatternFill('solid', start_color='18202E')
course_fill = PatternFill('solid', start_color='EEF1F5')
input_fill = PatternFill('solid', start_color='FFFF00')
arch_font = Font(name=F, size=10, color='6B7280')
thin = Side(style='thin', color='D0D5DD')
box = Border(left=thin, right=thin, top=thin, bottom=thin)
wrap = Alignment(wrap_text=True, vertical='top')
top = Alignment(vertical='top')


def header(ws, row, cols, widths):
    for i, (name, w) in enumerate(zip(cols, widths), start=1):
        c = ws.cell(row=row, column=i, value=name)
        c.font, c.fill, c.alignment, c.border = head_font, head_fill, Alignment(wrap_text=True, vertical='center'), box
        ws.column_dimensions[get_column_letter(i)].width = w
    ws.row_dimensions[row].height = 30


def put(ws, row, values, f=font, fill=None):
    for i, v in enumerate(values, start=1):
        c = ws.cell(row=row, column=i, value=v)
        c.font = f
        c.alignment = wrap if isinstance(v, str) and len(v) > 40 else top
        c.border = box
        if fill:
            c.fill = fill


def year_of(item, course_year=None):
    if course_year is not None:
        return placements.get(item['key']) or course_year
    return placements.get(item['key']) or item['def']


groups = data['groups']
active = [g for g in groups if not g['archived']]
archived = [g for g in groups if g['archived']]
ordered = active + archived

wb = Workbook()

# ---------------- Read Me ----------------
rm = wb.active
rm.title = 'Read Me'
rm.column_dimensions['A'].width = 24
rm.column_dimensions['B'].width = 95
rm['A1'] = 'Lighting Academy Program Index'
rm['A1'].font = title_font
rows = [
    ('Built', f"{data['built']} from the curriculum files."),
    ('Proposal', 'The Proposed Sequence tab shows a suggested new order (Nov 11, 2026). It is pre-filled in the yellow New level, New course # and New year cells on Manager Updates and Skill Updates, with the reason in Notes. Change or clear any of it, then send the file back. Nothing in the program changes until you approve.') if proposal else ('Proposal', 'None loaded.'),
    ('The program', 'Two years, five levels, about 400 hours of course time. Year 1 = LT1 and LT2. Year 2 = LT3, LT4 and LT5. The Manager Module is separate. Advancement is by demonstrated skill, so the years are typical, not fixed.'),
    ('Program Index', 'Every course, lesson and hands-on skill, with its level, course number and year. Read-only reference.'),
    ('Requirements by Level', 'What a technician must complete to pass each level. Counts update from the Program Index tab.'),
    ('Manager Updates', 'Where you change a course: New status (Active, Archived or Optional), New level, New course # (its place in the order), New year and New hours. Leave a cell blank to keep the current value.'),
    ('New Topics', 'Add training you want that is not in the program yet: the topic, what to cover, and the level, year and position. Set Status to Requested and send the file back; Claude builds it from best practices or asks you questions first.'),
    ('Hours Budget', 'Totals course hours for everything Active plus requested new topics, against your target (400 hours). Updates as you edit the other tabs.'),
    ('Skill Updates', 'Same idea for the hands-on skills: pick a New Level or New Year.'),
    ('Yellow cells', 'The only cells to edit. Everything else is reference or a formula.'),
    ('Final columns', 'Show the result: the new value if you entered one, otherwise the current value. "Changed?" flags every row you edited, so you can filter to just your changes.'),
    ('Course #', 'The course\'s position within its level (1 = first). To make a course come later, give it a higher number, or move it to a later level. Two courses can share a number; ties keep their current order.'),
    ('Example', 'LT1-C09 Outlets & Switches: New level = LT2, New course # = 3, Notes = "Teach after branch circuits." Final level then reads LT2, Final course # reads 3, Changed? reads Yes. For an archived course such as EA2-C02 Grounding & Bonding: New status = Active, New level = LT4, New hours = 7.'),
    ('When you are done', 'Send the file back to Claude. The changes are applied to the curriculum (course codes, order, levels and years) and the app is rebuilt.'),
    ('Archived courses', 'The 24 archived electrical courses are on Manager Updates with Current status Archived. To bring one in, set New status to Active and pick a New level and year. The Suggestion column shows the 7 recommended to return, and New hours lets you plan a shorter, condensed version.'),
]
for i, (k, v) in enumerate(rows, start=3):
    rm.cell(row=i, column=1, value=k).font = bold
    c = rm.cell(row=i, column=2, value=v)
    c.font, c.alignment = font, wrap
    if k == 'Yellow cells':
        rm.cell(row=i, column=1).fill = input_fill

# ---------------- Program Index ----------------
pi = wb.create_sheet('Program Index')
cols = ['Type', 'Level', 'Course #', 'Code', 'Title', 'Course', 'Year', 'Course hours', 'Lesson minutes',
        'Lessons', 'Quiz questions', 'Critical skill', 'Status']
header(pi, 1, cols, [9, 16, 9, 30, 52, 11, 19, 10, 10, 9, 10, 9, 30])
r = 2
for g in ordered:
    lvl = g['code'] if not g['archived'] else f"Archived ({g['code']})"
    for c in sorted(g['courses'], key=lambda c: c['order']):
        cy = year_of(c)
        status = 'Active' if not g['archived'] else ('Archived (recommended to return in ' + c['level'] + ')' if c.get('level') else 'Archived')
        put(pi, r, ['Course', lvl, c['order'], c['code'], c['title'], '', YEAR[cy], c['hours'],
                    sum(l['minutes'] or 0 for l in c['lessons']), len(c['lessons']), c['questions'], '', status],
            f=bold if not g['archived'] else Font(name=F, size=10, bold=True, color='6B7280'), fill=course_fill)
        r += 1
        for i, l in enumerate(c['lessons'], start=1):
            put(pi, r, ['Lesson', lvl, c['order'], f"{c['code']} L{i:02d}", l['title'], c['code'], YEAR[year_of(l, cy)], '',
                        l['minutes'], '', '', '', status], f=font if not g['archived'] else arch_font)
            r += 1
    for s in g['skills']:
        put(pi, r, ['Skill', lvl, '', s['code'], s['title'], '', YEAR[year_of(s)], '', '', '', '',
                    'Yes' if s['critical'] else '', 'Active' if not g['archived'] else 'Archived'],
            f=font if not g['archived'] else arch_font)
        r += 1
last_pi = r - 1
pi.freeze_panes = 'E2'
pi.auto_filter.ref = f'A1:M{last_pi}'
for row in pi.iter_rows(min_row=2, max_row=last_pi, min_col=8, max_col=11):
    for c in row:
        c.number_format = '#,##0.#'

# ---------------- Requirements by Level ----------------
rq = wb.create_sheet('Requirements by Level')
rq['A1'] = 'Requirements to pass each level'
rq['A1'].font = title_font
rq['A2'] = ('A technician passes a level by completing every lesson, passing every course quiz, passing the level final exam, '
            'logging the minimum field hours (approved by a supervisor) and showing every hands-on skill to an evaluator. '
            'A critical safety skill fails on any safety deviation. Hours are a minimum; advancement is by demonstrated skill.')
rq['A2'].font, rq['A2'].alignment = font, wrap
rq.merge_cells('A2:N2')
rq.row_dimensions[2].height = 42
cols = ['Level', 'Title', 'Year', 'Typical months', 'Courses', 'Lessons', 'Coursework hours', 'Hands-on skills',
        'Critical skills', 'Course quiz pass %', 'Final exam questions', 'Final exam minutes', 'Final exam pass %', 'Min. field hours']
header(rq, 4, cols, [9, 36, 16, 10, 9, 9, 11, 10, 9, 10, 10, 10, 10, 11])
PIR = f"'Program Index'!"
rng = lambda col: f"{PIR}${col}$2:${col}${last_pi}"
r = 5
lt = [g for g in active if g['code'].startswith('LT')] + [g for g in active if g['code'] == 'MGR']
for g in lt:
    q = g['req'] or {}
    yr = YEAR[{'LT1': '1', 'LT2': '1', 'LT3': '2', 'LT4': '2', 'LT5': '2', 'MGR': 'mgr'}[g['code']]]
    row = [g['code'], g['title'], yr, q.get('months'),
           f'=COUNTIFS({rng("A")},"Course",{rng("B")},A{r})',
           f'=COUNTIFS({rng("A")},"Lesson",{rng("B")},A{r})',
           f'=SUMIFS({rng("H")},{rng("A")},"Course",{rng("B")},A{r})',
           f'=COUNTIFS({rng("A")},"Skill",{rng("B")},A{r})',
           f'=COUNTIFS({rng("A")},"Skill",{rng("B")},A{r},{rng("L")},"Yes")',
           (q.get('coursePass') or 0) / 100 if q.get('coursePass') else None,
           q.get('examQuestions'), q.get('examMinutes'),
           (q.get('examPass') or 0) / 100 if q.get('examPass') else None,
           q.get('ojt')]
    put(rq, r, row)
    rq.cell(row=r, column=1).font = bold
    for col in (10, 13):
        rq.cell(row=r, column=col).number_format = '0%'
    rq.cell(row=r, column=14).number_format = '#,##0'
    r += 1
tot = r
put(rq, tot, ['Total', 'LT1 to LT5 (excludes Manager Module)', '', f'=SUM(D5:D{tot - 2})', f'=SUM(E5:E{tot - 2})',
              f'=SUM(F5:F{tot - 2})', f'=SUM(G5:G{tot - 2})', f'=SUM(H5:H{tot - 2})', f'=SUM(I5:I{tot - 2})',
              '', '', '', '', f'=SUM(N5:N{tot - 2})'], f=bold)
rq.cell(row=tot, column=14).number_format = '#,##0'
rq.cell(row=tot + 2, column=1, value='Counts and hours are formulas over the Program Index tab. Months, exam settings and field hours come from each level\'s settings in the curriculum (level.yaml).').font = Font(name=F, size=9, italic=True)
rq.freeze_panes = 'C5'


# ---------------- Manager Updates ----------------
def add_list_validation(ws, values, ref, prompt):
    dv = DataValidation(type='list', formula1='"' + ','.join(values) + '"', allow_blank=True,
                        showErrorMessage=True, errorTitle='Pick from the list', error='Choose a value from the drop-down, or leave it blank.',
                        promptTitle='Optional', prompt=prompt, showInputMessage=True)
    ws.add_data_validation(dv)
    dv.add(ref)


mu = wb.create_sheet('Manager Updates')
cols = ['Code', 'Course title', 'Current level', 'Current course #', 'Current year', 'Current status', 'Course hours',
        'Suggestion', 'New status', 'New level', 'New course #', 'New year', 'New hours', 'Notes',
        'Final status', 'Final level', 'Final course #', 'Final year', 'Final hours', 'Changed?']
header(mu, 1, cols, [10, 40, 14, 9, 16, 11, 8, 34, 11, 13, 9, 16, 8, 30, 11, 13, 9, 16, 8, 9])
r = 2
for g in ordered:
    for c in sorted(g['courses'], key=lambda c: c['order']):
        if not g['archived']:
            cur_level, status, sugg = g['code'], 'Active', ''
        else:
            cur_level = 'Not in program'
            status = 'Archived'
            sugg = (f"Recommended to return as a condensed {c['level']} topic, about 7 h (full course {c['hours']} h)"
                    if c.get('level') else 'Leave archived (licensed-electrician or exam content)')
        nl = nk = ny = note = None
        if c['code'] in PROP and not g['archived']:
            plvl, ppos, why = PROP[c['code']]
            if plvl != g['code']:
                nl = plvl
            if plvl != g['code'] or ppos != c['order']:
                nk = ppos
            if YEAR[LEVEL_YEAR[plvl]] != YEAR[year_of(c)]:
                ny = YEAR[LEVEL_YEAR[plvl]]
            if nl or nk or ny:
                note = 'Proposed: ' + why
        put(mu, r, [c['code'], c['title'], cur_level, c['order'] if not g['archived'] else None, YEAR[year_of(c)], status,
                    c['hours'], sugg, None, nl, nk, ny, None, note,
                    f'=IF(I{r}="",F{r},I{r})', f'=IF(J{r}="",C{r},J{r})', f'=IF(K{r}="",D{r},K{r})',
                    f'=IF(L{r}="",E{r},L{r})', f'=IF(M{r}="",G{r},M{r})',
                    f'=IF(OR(I{r}<>"",J{r}<>"",K{r}<>"",L{r}<>"",M{r}<>""),"Yes","")'],
            f=font if not g['archived'] else arch_font)
        for col in (9, 10, 11, 12, 13, 14):
            mu.cell(row=r, column=col).fill = input_fill
        for col in (7, 13, 19):
            mu.cell(row=r, column=col).number_format = '0.0'
        r += 1
last_mu = r - 1
add_list_validation(mu, ['Active', 'Archived', 'Optional'], f'I2:I{last_mu}', 'Active = part of the program. Archived = left out. Optional = elective, not required.')
add_list_validation(mu, LEVEL_LIST, f'J2:J{last_mu}', 'Pick a new level, or leave blank to keep the current one.')
add_list_validation(mu, YEAR_LIST, f'L2:L{last_mu}', 'Pick a new year, or leave blank to keep the current one.')
dvn = DataValidation(type='whole', operator='between', formula1='1', formula2='40', allow_blank=True, showErrorMessage=True,
                     errorTitle='Whole number', error='Enter a whole number from 1 to 40, or leave blank.',
                     promptTitle='Optional', prompt='Position within the level (1 = first). Leave blank to keep it.', showInputMessage=True)
mu.add_data_validation(dvn)
dvn.add(f'K2:K{last_mu}')
dvh = DataValidation(type='decimal', operator='between', formula1='0.5', formula2='40', allow_blank=True, showErrorMessage=True,
                     errorTitle='Hours', error='Enter course hours from 0.5 to 40, or leave blank.',
                     promptTitle='Optional', prompt='Planned course hours, e.g. 7 for a condensed version. Leave blank to keep the current hours.', showInputMessage=True)
mu.add_data_validation(dvh)
dvh.add(f'M2:M{last_mu}')
mu.freeze_panes = 'C2'
mu.auto_filter.ref = f'A1:T{last_mu}'
mu['I1'].comment = Comment('Yellow cells are the only ones to edit. Leave blank to keep the current value. Set an archived course to Active to bring it into the program.', 'Program Index')

# ---------------- New Topics ----------------
nt = wb.create_sheet('New Topics')
cols = ['#', 'Topic', 'What to cover (your notes for Claude)', 'Type', 'Level', 'Year', 'Add to course (code)',
        'Course # / position', 'Est. hours', 'Priority', 'Status', 'Claude\'s notes']
header(nt, 1, cols, [5, 30, 60, 22, 10, 16, 14, 10, 8, 10, 16, 40])
example = [0, 'EXAMPLE: Parking garage lighting',
           'Typical fixtures (low-profile LED, vapor-tight), mounting heights, working around traffic and low clearance, '
           'cones and spotters, emergency lighting in stairwells, what to note on the work order.',
           'New lesson in existing course', 'LT3', 'Year 2', 'LT3-C05', 7, 0.5, 'Medium', 'Example (ignored)',
           'Example row showing the format. Overwrite it or leave it; rows marked "Example (ignored)" are not counted.']
put(nt, 2, example, f=Font(name=F, size=10, italic=True, color='6B7280'))
NT_ROWS = 40
for rr in range(3, 3 + NT_ROWS):
    put(nt, rr, [rr - 2] + [None] * 11)
    for col in range(2, 12):
        nt.cell(row=rr, column=col).fill = input_fill
last_nt = 2 + NT_ROWS
add_list_validation(nt, ['New course', 'New lesson in existing course', 'Reference guide only', 'Not sure - Claude decides'],
                    f'D3:D{last_nt}', 'What kind of training this should become.')
add_list_validation(nt, LEVEL_LIST[:6], f'E3:E{last_nt}', 'Which level it belongs in.')
add_list_validation(nt, YEAR_LIST, f'F3:F{last_nt}', 'Which year it belongs in.')
add_list_validation(nt, ['High', 'Medium', 'Low'], f'J3:J{last_nt}', 'How soon you want it.')
add_list_validation(nt, ['Requested', 'Questions sent', 'Built', 'On hold', 'Example (ignored)'], f'K3:K{last_nt}',
                    'Requested = ready for Claude to build. Built = already in the program (not counted again in the hours budget).')
dvh2 = DataValidation(type='decimal', operator='between', formula1='0.25', formula2='40', allow_blank=True, showErrorMessage=True,
                      errorTitle='Hours', error='Enter estimated course hours from 0.25 to 40, or leave blank for Claude to estimate.')
nt.add_data_validation(dvh2)
dvh2.add(f'I3:I{last_nt}')
for rr in range(2, last_nt + 1):
    nt.cell(row=rr, column=9).number_format = '0.0#'
nt.freeze_panes = 'C2'

# ---------------- Hours Budget ----------------
hb = wb.create_sheet('Hours Budget')
hb.column_dimensions['A'].width = 36
for col in 'BCDE':
    hb.column_dimensions[col].width = 16
hb['A1'] = 'Course-hours budget'
hb['A1'].font = title_font
hb['A3'] = 'Target total course hours (LT1-LT5)'
hb['A3'].font = bold
hb['B3'] = 400
hb['B3'].fill = input_fill
hb['B3'].font = Font(name=F, size=10, color='0000FF')
hb['C3'] = 'Your target: about 400 hours of course time over the two years. Change it here.'
hb['C3'].font = Font(name=F, size=9, italic=True)
header(hb, 5, ['Level', 'Active courses', 'Course hours', 'New topics (hours)', 'Total hours'], [36, 16, 16, 16, 16])
MUR = lambda col: f"'Manager Updates'!${col}$2:${col}${last_mu}"
NTR = lambda col: f"'New Topics'!${col}$3:${col}${last_nt}"
for k, lvl in enumerate(['LT1', 'LT2', 'LT3', 'LT4', 'LT5'], start=6):
    put(hb, k, [lvl,
                f'=COUNTIFS({MUR("O")},"Active",{MUR("P")},A{k})',
                f'=SUMIFS({MUR("S")},{MUR("O")},"Active",{MUR("P")},A{k})',
                f'=SUMIFS({NTR("I")},{NTR("E")},A{k},{NTR("K")},"<>Built",{NTR("K")},"<>Example (ignored)",{NTR("K")},"<>On hold")',
                f'=C{k}+D{k}'])
    for col in (3, 4, 5):
        hb.cell(row=k, column=col).number_format = '0.0'
put(hb, 11, ['Total', '=SUM(B6:B10)', '=SUM(C6:C10)', '=SUM(D6:D10)', '=SUM(E6:E10)'], f=bold)
for col in (3, 4, 5):
    hb.cell(row=11, column=col).number_format = '0.0'
put(hb, 13, ['Hours left in the budget', None, None, None, '=B3-E11'], f=bold)
hb['E13'].number_format = '0.0;[Red]-0.0'
put(hb, 14, ['Status', None, None, None, '=IF(E11<=B3,"Within budget","Over budget by "&TEXT(E11-B3,"0.0")&" h")'], f=bold)
header(hb, 16, ['Year', 'Active courses', 'Course hours', 'New topics (hours)', 'Total hours'], [36, 16, 16, 16, 16])
for k, yl in enumerate(['Year 1', 'Year 2'], start=17):
    put(hb, k, [yl,
                f'=COUNTIFS({MUR("O")},"Active",{MUR("R")},A{k})',
                f'=SUMIFS({MUR("S")},{MUR("O")},"Active",{MUR("R")},A{k})',
                f'=SUMIFS({NTR("I")},{NTR("F")},A{k},{NTR("K")},"<>Built",{NTR("K")},"<>Example (ignored)",{NTR("K")},"<>On hold")',
                f'=C{k}+D{k}'])
    for col in (3, 4, 5):
        hb.cell(row=k, column=col).number_format = '0.0'
put(hb, 19, ['Total (two years)', '=SUM(B17:B18)', '=SUM(C17:C18)', '=SUM(D17:D18)', '=SUM(E17:E18)'], f=bold)
for col in (3, 4, 5):
    hb.cell(row=19, column=col).number_format = '0.0'
notes = [
    'Course hours come from the Final hours column on Manager Updates for courses whose Final status is Active.',
    'Optional (elective) courses are not counted; they are not required for promotion.',
    'New topics count when their Status is Requested or Questions sent. Built topics are already in the course list after the next rebuild.',
    'Course hours include lesson reading, video, the quiz and supervised practice, not field hours.',
    'Before any changes: about 331 hours across LT1-LT5 (Year 1 about 142 h, Year 2 about 189 h). The 7 recommended electrical courses add 116 hours as written, or about 50 hours if condensed to about 7 hours each (about 381 h total).',
]
for k, t in enumerate(notes, start=21):
    c = hb.cell(row=k, column=1, value=t)
    c.font, c.alignment = Font(name=F, size=9, italic=True), Alignment(wrap_text=False)

# ---------------- Skill Updates ----------------
su = wb.create_sheet('Skill Updates')
cols = ['Code', 'Skill', 'Current level', 'Current year', 'Critical', 'New level', 'New year', 'Notes',
        'Final level', 'Final year', 'Changed?']
header(su, 1, cols, [10, 60, 15, 18, 9, 13, 18, 34, 13, 18, 9])
r = 2
for g in ordered:
    for s in g['skills']:
        cur_level = g['code'] if not g['archived'] else 'Not in program'
        snl = sny = snote = None
        if s['code'] in PROP_SKILL and not g['archived']:
            snl, why = PROP_SKILL[s['code']]
            if YEAR[LEVEL_YEAR[snl]] != YEAR[year_of(s)]:
                sny = YEAR[LEVEL_YEAR[snl]]
            snote = 'Proposed: ' + why
        put(su, r, [s['code'], s['title'], cur_level, YEAR[year_of(s)], 'Yes' if s['critical'] else '', snl, sny, snote,
                    f'=IF(F{r}="",C{r},F{r})', f'=IF(G{r}="",D{r},G{r})', f'=IF(OR(F{r}<>"",G{r}<>""),"Yes","")'],
            f=font if not g['archived'] else arch_font)
        for col in (6, 7, 8):
            su.cell(row=r, column=col).fill = input_fill
        r += 1
last_su = r - 1
add_list_validation(su, LEVEL_LIST, f'F2:F{last_su}', 'Pick a new level, or leave blank to keep the current one.')
add_list_validation(su, YEAR_LIST, f'G2:G{last_su}', 'Pick a new year, or leave blank to keep the current one.')
su.freeze_panes = 'C2'
su.auto_filter.ref = f'A1:K{last_su}'

if PROP:
    ps = wb.create_sheet('Proposed Sequence')
    ps['A1'] = 'Proposed course sequence'
    ps['A1'].font = title_font
    ps['A2'] = proposal.get('title', '')
    ps['A2'].font, ps['A2'].alignment = font, wrap
    ps.merge_cells('A2:G2')
    ps.row_dimensions[2].height = 30
    ps['A3'] = ('This tab is a snapshot of the proposal as delivered. The proposal is also pre-filled in the yellow cells on '
                'Manager Updates and Skill Updates, where you can change it; Hours Budget totals whatever is there.')
    ps['A3'].font, ps['A3'].alignment = Font(name=F, size=9, italic=True), wrap
    ps.merge_cells('A3:G3')
    ps.row_dimensions[3].height = 28
    header(ps, 5, ['Level / year', 'Course #', 'Code (today)', 'Course', 'Hours', 'Moved from', 'Why it sits here'],
           [16, 9, 13, 44, 8, 11, 70])
    allc = {c['code']: (c, g) for g in active for c in g['courses']}
    r = 6
    level_rows = {}
    for lvl in ['LT1', 'LT2', 'LT3', 'LT4', 'LT5']:
        spec = (proposal['levels'].get(lvl) or {})
        if spec:
            seq = [(code, why) for code, why in spec['courses']]
            theme = spec.get('theme', '')
        else:
            g = next(x for x in active if x['code'] == lvl)
            seq = [(c['code'], 'Unchanged') for c in sorted(g['courses'], key=lambda c: c['order'])]
            theme = 'Unchanged'
        c0 = ps.cell(row=r, column=1, value=f"{lvl} ({YEAR[LEVEL_YEAR[lvl]]}): {theme}")
        c0.font, c0.fill = bold, course_fill
        for col in range(2, 8):
            ps.cell(row=r, column=col).fill = course_fill
        ps.merge_cells(start_row=r, start_column=1, end_row=r, end_column=7)
        r += 1
        first = r
        for pos, (code, why) in enumerate(seq, start=1):
            c, g = allc[code]
            moved = g['code'] if g['code'] != lvl else ''
            put(ps, r, [lvl, pos, code, c['title'], c['hours'], moved, why],
                f=Font(name=F, size=10, bold=bool(moved), color='1F5FBF' if moved else '000000'))
            ps.cell(row=r, column=5).number_format = '0.0'
            r += 1
        put(ps, r, [f'{lvl} total', None, None, f'=COUNTA(C{first}:C{r - 1})&" courses"', f'=SUM(E{first}:E{r - 1})', None, None], f=bold)
        ps.cell(row=r, column=5).number_format = '0.0'
        level_rows[lvl] = r
        r += 2
    put(ps, r, ['Year 1 total', None, None, 'LT1 + LT2', f"=E{level_rows['LT1']}+E{level_rows['LT2']}", None, None], f=bold)
    put(ps, r + 1, ['Year 2 total', None, None, 'LT3 + LT4 + LT5', f"=E{level_rows['LT3']}+E{level_rows['LT4']}+E{level_rows['LT5']}", None, None], f=bold)
    put(ps, r + 2, ['Two-year total', None, None, None, f'=E{r}+E{r + 1}', None, None], f=bold)
    for k in range(r, r + 3):
        ps.cell(row=k, column=5).number_format = '0.0'
    ps.freeze_panes = 'A6'

wb.move_sheet('Hours Budget', offset=1 - wb.sheetnames.index('Hours Budget'))
if 'Proposed Sequence' in wb.sheetnames:
    wb.move_sheet('Proposed Sequence', offset=2 - wb.sheetnames.index('Proposed Sequence'))
wb.active = wb.sheetnames.index('Proposed Sequence') if 'Proposed Sequence' in wb.sheetnames else wb.sheetnames.index('Manager Updates')
dest = out / 'program-index.xlsx'
wb.save(dest)
print('Wrote', dest, 'index rows', last_pi - 1, 'courses', last_mu - 1, 'skills', last_su - 1)
