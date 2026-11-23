#!/usr/bin/env python3
"""Rebuild the Program Index page from the approved layout (layout.json + layout-skills.json from build_review_xlsx.py).
Usage: python3 build_index_from_layout.py <out-dir> <placement.json> <layout-workbook.xlsx>"""
import base64
import json
import sys
from pathlib import Path

out = Path(sys.argv[1])
placement = json.loads(Path(sys.argv[2]).read_text())
workbook = Path(sys.argv[3])
layout = json.loads((out / 'layout.json').read_text())
lskills = json.loads((out / 'layout-skills.json').read_text())
data = json.loads((out / 'index-data.json').read_text())
corpus = json.loads((out / 'corpus.json').read_text())
video = {l['id']: l.get('video', '') for l in corpus['lessons']}
orig = {c['code']: c for g in data['groups'] for c in g['courses']}
gby = {g['code']: g for g in data['groups']}
YEAR = {'LT1': '1', 'LT2': '1', 'LT3': '2', 'LT4': '2', 'LT5': '2'}
ov = placement.get('level_overrides') or {}
themes = {k: (v or {}).get('theme', '') for k, v in placement['levels'].items()}
adds = placement.get('additions') or {}

groups = []
for lvl, items in layout.items():
    g0 = gby[lvl]
    req = dict(g0['req'] or {})
    req.update({k2: v2 for k2, v2 in {'months': ov.get(lvl, {}).get('months'), 'ojt': ov.get(lvl, {}).get('ojt')}.items() if v2})
    g = dict(code=lvl, title=g0['title'], archived=False, req=req, outcomes=[themes.get(lvl, '')], courses=[], skills=[])
    host = None
    for c in items:
        if c['kind'] == 'lesson':
            # an added lesson: attach it to its course
            tgt = next((x for x in g['courses'] if x['code'] == c['new_code'].rstrip(' +')), None)
            if tgt:
                tgt['lessons'].append(dict(key=f"l_{tgt['code']}_add{len(tgt['lessons']) + 1}", id='', title=c['title'] + ' (to be written)',
                                           minutes=int(c['hours'] * 60) or None, video=''))
                tgt['hours'] = round(tgt['hours'] + c['hours'], 2)
            continue
        src = orig.get(c['code']) or orig.get(c['code'][:7]) or {}
        add = c['code'].startswith('ADD:')
        course = dict(key='c_' + c['new_code'], code=c['new_code'], title=c['title'], hours=c['hours'], def_=None,
                      description=(adds.get(c['code'][4:], {}).get('covers', '') if add else src.get('description', '')),
                      objectives=[] if add else src.get('objectives', []), questions=0 if add else src.get('questions', 0),
                      lessons=[dict(key=f"l_{c['new_code']}_{i:02d}", id=l['id'], title=l['title'], minutes=l['minutes'], video=video.get(l['id'], ''))
                               for i, l in enumerate(c['lessons'], start=1)],
                      level=lvl)
        course['def'] = YEAR[lvl]
        del course['def_']
        if add:
            course['title'] += ' (to be written)'
        g['courses'].append(course)
    for s in lskills[lvl]:
        g['skills'].append(dict(key='s_' + s['new_code'], code=s['new_code'], title=s['title'], category=s['category'], critical=s['critical'],
                                def_=None, description=s['description'], criteria=s['criteria']))
        g['skills'][-1]['def'] = YEAR[lvl]
        del g['skills'][-1]['def_']
    groups.append(g)
mgr = gby['MGR']
MB = placement.get('manager_partB')
if MB:
    mgr = dict(mgr)
    mgr['title'] = 'Manager Module: Hiring & Retention and Operations Leadership'
    mgr['courses'] = list(mgr['courses']) + [dict(key=f'c_OPS-C{i:02d}', code=f'OPS-C{i:02d}', title=t + ' (to be written)', hours=h, def_='mgr',
                                                   description='Operations Leadership (Part B).', objectives=[], questions=0, lessons=[], level='MGR')
                                              for i, (t, h) in enumerate(MB['courses'], start=1)]
    for c in mgr['courses']:
        c['def'] = c.pop('def_', None) or c.get('def', 'mgr')
groups.append(mgr)
groups += [g for g in data['groups'] if g['archived']]
new = dict(built=data['built'], groups=groups)
tpl = (Path(__file__).parent / 'template.html').read_text()
(out / 'index.html').write_text(tpl.replace('__INDEX_DATA__', json.dumps(new).replace('<', '\\u003c')))
(out / 'program-index-xlsx.txt').write_text(base64.b64encode(workbook.read_bytes()).decode())
print('index groups', [(g['code'], len(g['courses']), len(g['skills'])) for g in groups][:7])
