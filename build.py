#!/usr/bin/env python3
"""
Build script — génère slovenscina_bundle.html (tout inline, pour mobile)
Usage: python3 build.py
"""
import os, glob, subprocess, sys

BASE = os.path.dirname(os.path.abspath(__file__))

# Découverte automatique de toutes les leçons (lesson_NN_*.js, triées par numéro)
_pattern = os.path.join(BASE, 'data', 'sl', 'lesson_*.js')
SL_LESSON_FILES = sorted(
    os.path.relpath(f, BASE) for f in glob.glob(_pattern)
)


FILES_ORDER = [
    'data/sl/structure.js',
    *SL_LESSON_FILES,
    'data/registry.js',
    'data/millionnaire.js',
    'js/engine.js',
    'js/game.js',
    'js/crossword.js',
    'js/millionnaire.js',
    'js/barve.js',
    'js/trznica.js',
    'js/motsmeles.js',
    'js/anagramme.js',
    'js/convoquiz.js',
    'js/app.js',
]

print("Checking syntax...")
for f in FILES_ORDER:
    path = os.path.join(BASE, f)
    r = subprocess.run(['node', '--check', path], capture_output=True, text=True)
    if r.returncode != 0:
        print(f"  ✗ {f}: {r.stderr.strip()}")
        sys.exit(1)
    print(f"  ✓ {f}")

with open(os.path.join(BASE, 'index.html')) as f:
    html = f.read()
with open(os.path.join(BASE, 'css/app.css')) as f:
    css = f.read()

combined_js = '\n'.join(open(os.path.join(BASE, p)).read() for p in FILES_ORDER)

html = html.replace('<link rel="stylesheet" href="css/app.css">', f'<style>\n{css}\n</style>')
start = html.find('<!-- DATA')
end   = html.rfind('</script>') + 9
html  = html[:start] + f'<script>\n{combined_js}\n</script>' + html[end:]

out = os.path.join(BASE, 'slovenscina_bundle.html')
with open(out, 'w') as f:
    f.write(html)

print(f"\n✓ Bundle OK — {len(html)//1024}KB → slovenscina_bundle.html")
