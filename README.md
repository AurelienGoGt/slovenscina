# 🇸🇮 Slovenščina — Apprends le slovène

Application web progressive pour apprendre le slovène, entièrement en français. Conçue pour mobile et desktop, fonctionne hors-ligne via le bundle auto-suffisant.

🔗 **[https://aureliengogt.github.io/slovenscina/](https://aureliengogt.github.io/slovenscina/)**

---

## ✨ Fonctionnalités

### 📚 Leçons structurées — 20 niveaux
- Salutations, alphabet (š ž č), chiffres, couleurs, famille, météo, heure, vie quotidienne, courses, en ville…
- Exercices variés : présentation de mots, répétition TTS, textes à trous, reconstruction de phrases, histoires dialoguées
- Progression sauvegardée localement (localStorage, aucun serveur nécessaire)
- Système de cœurs, combo et XP

### 🎮 Jeux

| Jeu | Description |
|-----|-------------|
| **🔤 Mots Croisés** | Grille auto-générée depuis le vocabulaire du niveau (algo greedy 18×18). Mots en slovène, définitions en français. Confettis à la victoire. |
| **🏆 Qui veut gagner des millions ?** | 12 questions de culture slovène, 4 jokers (50/50, Flash 3s, Passer, Changer), 3 paliers de sécurité, ladder XP jusqu'à 1 000 000. |

### 🔊 Audio
- Synthèse vocale slovène (Web Speech API, cadence adaptée 0.9×)
- Support **VoiceRSS** — voix slovène féminine "Maja", 350 appels/jour gratuits
- Support **ElevenLabs** — voix premium (clé API dans Réglages)
- Musique in-game 100 % générée par Web Audio API :
  - Mots croisés : **piano** + hymne national *Zdravljica* (ré majeur, 72 BPM, valse 3/4, 16 mesures en boucle)
  - Millionnaire : **violon** + danse folklorique slovène (ré majeur, 132 BPM, 32 temps avec basse pizzicato)
- Contrôle du volume en temps réel depuis les jeux (popup 🔊) et depuis les Réglages

### 🧠 Difficulté adaptative silencieuse

| Leçons complétées | Niveau | Effet visible |
|---|---|---|
| < 5 | Débutant | Phonétique toujours affichée |
| 5 – 14 | Intermédiaire | Phonétique visible |
| ≥ 15 | Avancé | Phonétique masquée — tap pour révéler |

### 🎨 Animations
- Stagger slide-in des boutons de réponse (70 ms par bouton)
- Shake sur mauvaise réponse, bounce élastique sur bonne réponse
- Ripple dorée sur le point de progression actif
- Flash de la grille à chaque mot trouvé aux mots croisés
- Confettis (48 particules) sur victoire
- Spring animation sur l'overlay résultat du millionnaire
- Glow doré pulsé sur la carte de jeu

---

## 🚀 Déploiement automatique

Chaque `git push` sur `main` déclenche un workflow GitHub Actions qui :
1. Exécute `python3 build.py` (vérifie la syntaxe JS, inline CSS + JS)
2. Déploie `slovenscina_bundle.html` → `index.html` sur GitHub Pages

```
main branch push → Actions CI → dist/index.html → GitHub Pages
```

---

## 🛠️ Développement local

### Prérequis
- Python 3.x
- Node.js (pour la vérification syntaxique du build)

### Lancer en local
```bash
python3 serve.py
# → http://localhost:8080
```
> ⚠️ Ne pas ouvrir `index.html` directement via `file://` — les scripts externes sont bloqués par le navigateur. Utiliser `serve.py` ou ouvrir `slovenscina_bundle.html`.

### Générer le bundle (distribution hors-ligne / mobile)
```bash
python3 build.py
# → slovenscina_bundle.html (~250 KB, tout inline)
```
Le bundle est un fichier HTML unique auto-suffisant — aucune connexion requise, installable comme PWA.

---

## 📁 Structure du projet

```
slovenscina/
├── index.html                   # SPA principale (dev uniquement)
├── build.py                     # Script de build — vérifie JS + inline tout
├── serve.py                     # Serveur HTTP local (localhost:8080)
├── css/
│   └── app.css                  # Styles — palette slovène, animations
├── js/
│   ├── engine.js                # Moteur d'exercices (TTS, rendu, cartes)
│   ├── game.js                  # Logique jeu (cœurs, XP, combo, feedback)
│   ├── crossword.js             # Mots croisés (algo greedy, piano Zdravljica)
│   ├── millionnaire.js          # Quiz millionnaire (ladder, jokers, violon)
│   └── app.js                   # App principale (nav, réglages, profil, vol)
├── data/
│   ├── sl/
│   │   ├── structure.js         # Définition des 20 niveaux
│   │   ├── lesson_01_salutations.js
│   │   ├── lesson_02_alphabet_1.js
│   │   └── … (×20 fichiers)
│   ├── registry.js              # Registre global EX[] des exercices
│   └── millionnaire.js          # 36 questions de culture slovène
└── .github/
    └── workflows/
        └── deploy.yml           # CI/CD → GitHub Pages
```

---

## 🎨 Design system

| Token | Valeur | Usage |
|-------|--------|-------|
| `--si-blue` | `#003DA5` | Couleur nationale slovène, boutons primaires |
| `--gold` | `#E8A832` | XP, accents, or du millionnaire |
| `--meadow` | `#52B788` | Succès, progression |
| `--ko` | `#E24B4A` | Erreur, cœur perdu |
| `--snow` | `#F4F6FB` | Fond principal |

Police : **Lora** (titres, serif) · Système sans-serif (corps de texte)

---

## 🏅 Système XP & Badges

| Seuil | Badge |
|-------|-------|
| Démarrage | 🌅 Début |
| 100 XP | ⭐ Première étoile |
| 500 XP | 🔥 En feu |
| 5 leçons | 📚 Studieux |
| 10 leçons | 🎓 Académicien |
| 10 jours de suite | 🏆 Champion |
| Millionnaire gagné | 💎 Millionnaire |

---

## 🇸🇮 À propos de la Slovénie

La Slovénie est un pays d'Europe centrale de 2 millions d'habitants, membre de l'UE depuis 2004. Le slovène est une langue slave du sud, avec un alphabet latin enrichi de trois lettres spéciales : **š** (ch), **ž** (j français), **č** (tch). L'hymne national *Zdravljica* (le Toast) est une ode à la paix et à la fraternité, composé par Stanko Premrl sur un poème de France Prešeren.

---

## 📄 Licence

Projet personnel — contenu pédagogique © 2026
