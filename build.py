#!/usr/bin/env python3
"""
Build script — génère slovenscina_bundle.html (tout inline, pour mobile)
Usage: python3 build.py
"""
import os, subprocess, sys

BASE = os.path.dirname(os.path.abspath(__file__))

# Ordre de chargement — les leçons individuelles d'abord
SL_LESSON_FILES = [f'data/sl/lesson_{i:02d}_{name}.js' for i, name in [
    (1,'salutations'),(2,'alphabet_1'),(3,'alphabet_2'),(4,'alphabet_3'),
    (5,'chiffres_1_10'),(6,'nombres_11_100'),(7,'nombres_prix'),
    (8,'couleurs'),(9,'adjectifs'),(10,'decrire'),
    (11,'famille_proche'),(12,'famille_elargie'),(13,'jours_mois'),
    (14,'meteo'),(15,'heure'),(16,'se_presenter'),
    (17,'quotidien'),(18,'maison'),(19,'courses'),(20,'en_ville'),
]]


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
