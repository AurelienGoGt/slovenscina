// ═══════════════════════════════════════════
// SPEED GAME — CHUTE DE MOTS
// ═══════════════════════════════════════════

// Extract sl↔fr pairs from lesson matching exercises only
function getLessonPairs(lessonId) {
  const exercises = EX[lessonId] || [];
  const pairs = [], seen = new Set();
  exercises.forEach(ex => {
    if (ex.type === 'matching' && ex.pairs) {
      ex.pairs.forEach(p => {
        const key = p.sl + '|' + p.fr;
        if (!seen.has(key)) { seen.add(key); pairs.push({ sl: p.sl, fr: p.fr }); }
      });
    }
  });
  return pairs;
}

function gShuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ── Musique thème slovène — folk alpin (cithare des Alpes + accordéon) ──
const RPG = {
  ctx: null, masterGain: null, playing: false, _tid: null,

  // Notes de la gamme (cithare alpine folk slovène)
  N: {
    // Octave 4
    C4:261.6, D4:293.7, E4:329.6, F4:349.2, Fs4:370.0,
    G4:392.0, A4:440.0, Bb4:466.2, B4:493.9,
    // Octave 5
    C5:523.3, D5:587.3, E5:659.3, F5:698.5, G5:784.0, A5:880.0,
    // Basses
    C3:130.8, D3:146.8, E3:164.8, F3:174.6, G3:196.0, A3:220.0, G2:98.0, C2:65.4,
  },

  // Mélodie folk slovène — "Na Golici" inspirée (valse alpine)
  // Tempo valse = 3 temps. Structure : A (16 mesures) + B (16 mesures)
  MEL_A: [
    // Mesures 1-4 — phrase principale montante
    ['E5',.5],['D5',.25],['C5',.25],
    ['B4',.5],['G4',.25],['E4',.25],
    ['A4',.5],['Bb4',.25],['A4',.25],
    ['G4',1.0],
    // Mesures 5-8 — réponse descendante
    ['G5',.5],['F5',.25],['E5',.25],
    ['D5',.5],['C5',.25],['B4',.25],
    ['C5',.5],['D5',.25],['C5',.25],
    ['E5',1.0],
  ],
  MEL_B: [
    // Mesures 9-12 — refrain avec saut de quarte
    ['C5',.25],['E5',.25],['G5',.5],
    ['A5',.5],['G5',.25],['F5',.25],
    ['E5',.5],['D5',.25],['C5',.25],
    ['D5',1.0],
    // Mesures 13-16 — cadence finale
    ['D5',.25],['F5',.25],['A5',.5],
    ['G5',.5],['E5',.25],['D5',.25],
    ['C5',.5],['D5',.25],['E5',.25],
    ['C5',1.0],
  ],

  // Basse de valse (um-pa-pa)
  BASS_A: [
    ['C3',1],['G3',1],['C3',1],['G3',1],
    ['A3',1],['E3',1],['A3',1],['E3',1],
    ['F3',1],['C3',1],['F3',1],['C3',1],
    ['G3',1],['D3',1],['G3',1],['G3',1],
  ],
  BASS_B: [
    ['C3',1],['G3',1],['A3',1],['E3',1],
    ['F3',1],['C3',1],['G3',1],['D3',1],
    ['C3',1],['G3',1],['F3',1],['C3',1],
    ['G3',1],['G3',1],['C3',1],['C3',1],
  ],

  // Cithare : sons plucked (triangle + exponential decay)
  _pluck(f, t, dur, vol) {
    if (!this.ctx) return;
    const o = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    const filt = this.ctx.createBiquadFilter();
    filt.type = 'bandpass'; filt.frequency.value = f * 2; filt.Q.value = 3;
    o.connect(filt); filt.connect(g); g.connect(this.masterGain);
    o.type = 'triangle'; o.frequency.value = f;
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + Math.min(dur * 0.9, 0.6));
    o.start(t); o.stop(t + dur);
  },

  // Accordéon : onde en dents de scie + vibrato léger
  _accordion(f, t, dur, vol) {
    if (!this.ctx) return;
    const o = this.ctx.createOscillator();
    const lfo = this.ctx.createOscillator();
    const lfoGain = this.ctx.createGain();
    const g = this.ctx.createGain();
    const filt = this.ctx.createBiquadFilter();
    filt.type = 'lowpass'; filt.frequency.value = 1800;
    lfo.frequency.value = 5.5; lfoGain.gain.value = 3;
    lfo.connect(lfoGain); lfoGain.connect(o.frequency);
    o.connect(filt); filt.connect(g); g.connect(this.masterGain);
    o.type = 'sawtooth'; o.frequency.value = f;
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vol, t + 0.03);
    g.gain.setValueAtTime(vol * 0.85, t + dur * 0.75);
    g.gain.linearRampToValueAtTime(0, t + dur);
    lfo.start(t); o.start(t); lfo.stop(t + dur); o.stop(t + dur);
  },

  // Basse accordéon (boom)
  _bass(f, t, vol) {
    if (!this.ctx) return;
    const o = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    o.connect(g); g.connect(this.masterGain);
    o.type = 'sine'; o.frequency.value = f;
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
    o.start(t); o.stop(t + 0.4);
  },

  // Accord "pa-pa" (2ème et 3ème temps de valse)
  _chord(baseF, t) {
    if (!this.ctx) return;
    const thirds = [baseF, baseF * 1.26, baseF * 1.498]; // tierce + quinte
    thirds.forEach(f => this._pluck(f, t, 0.25, 0.04));
  },

  start() {
    if (this.playing) return;
    try { this.ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch { return; }
    this.masterGain = this.ctx.createGain();
    // Légère reverb via convolver simulé avec delay
    const delay = this.ctx.createDelay(0.08);
    const delayGain = this.ctx.createGain(); delayGain.gain.value = 0.12;
    this.masterGain.connect(delay); delay.connect(delayGain); delayGain.connect(this.ctx.destination);
    this.masterGain.connect(this.ctx.destination);
    this.masterGain.gain.value = 0.6;
    this.playing = true;
    const BPM = 168; // Valse vive
    const B = 60 / BPM; // durée d'un temps

    const loop = () => {
      if (!this.playing || !this.ctx) return;
      let t = this.ctx.currentTime + 0.05;

      // Jouer section A puis B
      const sections = [
        { mel: this.MEL_A, bass: this.BASS_A },
        { mel: this.MEL_B, bass: this.BASS_B },
      ];

      sections.forEach(({ mel, bass }) => {
        // Mélodie — cithare (notes courtes) + accordéon (notes longues)
        let mt = t;
        mel.forEach(([n, d]) => {
          const dur = d * B;
          if (dur >= 0.4 * B) {
            this._accordion(this.N[n], mt, dur * 0.88, 0.13);
          } else {
            this._pluck(this.N[n], mt, dur * 0.7, 0.18);
          }
          mt += dur;
        });

        // Basse de valse — boom pa-pa
        let bt = t;
        bass.forEach(([n, d]) => {
          const barDur = d * B;
          // Temps 1 : basse (boom)
          this._bass(this.N[n], bt, 0.22);
          // Temps 2 (1/3 de la mesure) : accord
          this._chord(this.N[n] * 1.5, bt + barDur / 3);
          // Temps 3 (2/3 de la mesure) : accord
          this._chord(this.N[n] * 1.5, bt + (barDur * 2) / 3);
          bt += barDur;
        });

        // Avancer t d'une section
        t += mel.reduce((s, [, d]) => s + d, 0) * B;
      });

      // Relancer la boucle un peu avant la fin
      const totalBeats = [...this.MEL_A, ...this.MEL_B].reduce((s, [, d]) => s + d, 0);
      const totalSec = totalBeats * B;
      this._tid = setTimeout(loop, (totalSec - 0.15) * 1000);
    };

    loop();
  },

  stop() {
    this.playing = false; clearTimeout(this._tid);
    try { if (this.ctx) { this.ctx.close(); } } catch {}
    this.ctx = null; this.masterGain = null;
  },

  sfxOk() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    // Arpège ascendant joyeux (do-mi-sol)
    [[523.3, 0], [659.3, 0.08], [784, 0.16]].forEach(([f, dt]) => this._pluck(f, t + dt, 0.3, 0.25));
  },

  sfxKo() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    // Descente courte (sol-mi-do)
    [[392, 0], [329.6, 0.09], [261.6, 0.18]].forEach(([f, dt]) => this._accordion(f, t + dt, 0.15, 0.12));
  },
};

// ── Game state ──
const G = {
  lvId: null, lessonId: null,
  pairs: [], allFr: [], queue: [], qIdx: 0,
  currentPair: null, fallingEl: null, fallRaf: null,
  fallFrom: -160, fieldH: 400, dangerY: 332,
  speed: 55, // px/sec
  timer: 30, timerMax: 30, timerTick: null,
  score: 0, wordsHit: 0, combo: 0, maxCombo: 0,
  active: false,
};

const GCOLS = [
  { bg: 'rgba(0,61,165,.45)',   bd: 'rgba(100,160,255,.6)', tx: '#c8daff' },
  { bg: 'rgba(45,106,79,.45)',  bd: 'rgba(100,210,140,.6)', tx: '#b0f0c0' },
  { bg: 'rgba(140,60,160,.45)', bd: 'rgba(200,120,230,.6)', tx: '#f0c0ff' },
  { bg: 'rgba(160,100,20,.45)', bd: 'rgba(230,180,60,.6)',  tx: '#ffe090' },
];

function startSpeedGame(lvId, lessonId) {
  G.lvId = lvId; G.lessonId = lessonId;

  const pairs = getLessonPairs(lessonId);
  if (pairs.length < 2) { if (lvId) openLevel(lvId); else goHome(); return; }

  G.pairs = pairs; G.allFr = pairs.map(p => p.fr);
  G.queue = gShuffle([...pairs]); G.qIdx = 0;
  G.timer = 30; G.timerMax = 30; G.speed = 55;
  G.score = 0; G.wordsHit = 0; G.combo = 0; G.maxCombo = 0;
  G.active = false; G.fallingEl = null;

  document.getElementById('gameover-ov').classList.remove('show');
  nav('scr-game', 'fwd');

  // Wait for layout before measuring field
  requestAnimationFrame(() => requestAnimationFrame(() => {
    const field = document.getElementById('gfield');
    G.fieldH = field.clientHeight || 420;
    G.dangerY = G.fieldH - 68;
    G.active = true;
    RPG.start();
    startGameTimer();
    dropWord();
  }));
}

function dropWord() {
  if (!G.active) return;
  if (G.fallingEl) { G.fallingEl.remove(); G.fallingEl = null; }
  cancelAnimationFrame(G.fallRaf);

  G.currentPair = G.queue[G.qIdx % G.queue.length]; G.qIdx++;
  if (G.qIdx >= G.queue.length) { G.queue = gShuffle([...G.pairs]); G.qIdx = 0; }

  document.getElementById('gquestion').textContent = G.currentPair.sl;

  // 4 options: 1 correct + 3 distractors
  const distractors = gShuffle(G.allFr.filter(f => f !== G.currentPair.fr)).slice(0, 3);
  const options = gShuffle([G.currentPair.fr, ...distractors]);

  const field = document.getElementById('gfield');
  const card = document.createElement('div');
  card.style.cssText = 'position:absolute;left:16px;right:16px;top:-160px;display:flex;flex-direction:column;gap:8px;z-index:5';

  options.forEach((opt, i) => {
    const col = GCOLS[i % GCOLS.length];
    const btn = document.createElement('button');
    btn.style.cssText = 'width:100%;padding:12px 16px;border-radius:16px;font-size:15px;font-weight:600;cursor:pointer;border:1.5px solid ' + col.bd + ';background:' + col.bg + ';color:' + col.tx + ';text-align:center;font-family:inherit';
    btn.textContent = opt;
    btn.addEventListener('click', () => handleClick(opt, btn, card));
    card.appendChild(btn);
  });

  field.insertBefore(card, document.getElementById('gdanger'));
  G.fallingEl = card;
  G.fallFrom = -160;
  G.fallStart = performance.now();
  animateFall();
}

function animateFall() {
  if (!G.active || !G.fallingEl) return;
  const elapsed = (performance.now() - G.fallStart) / 1000;
  const y = G.fallFrom + elapsed * G.speed;
  G.fallingEl.style.top = y + 'px';
  if (y + 160 >= G.dangerY) { onMissed(); return; }
  G.fallRaf = requestAnimationFrame(animateFall);
}

function handleClick(chosen, btn, card) {
  if (!G.active || !G.currentPair) return;
  G.active = false;
  cancelAnimationFrame(G.fallRaf);
  const correct = chosen === G.currentPair.fr;

  if (correct) {
    btn.style.background = 'rgba(82,183,136,.8)'; btn.style.color = 'white'; btn.style.borderColor = '#52b788';
    G.combo++; G.maxCombo = Math.max(G.maxCombo, G.combo);
    G.wordsHit++; G.score += 10 + (G.combo > 1 ? G.combo * 2 : 0);
    G.timer = Math.min(G.timer + 5, 90); G.timerMax = Math.max(G.timerMax, G.timer);
    G.speed = Math.min(G.speed + 5, 150);
    RPG.sfxOk(); updateGameHUD();
    if (G.combo >= 3) showComboPop(G.combo);
    setTimeout(() => { card.remove(); G.fallingEl = null; G.active = true; dropWord(); }, 350);
  } else {
    btn.style.background = 'rgba(226,75,74,.8)'; btn.style.color = 'white'; btn.style.borderColor = '#e24b4a';
    G.combo = 0; G.timer = Math.max(3, G.timer - 3);
    RPG.sfxKo(); updateGameHUD();
    // Shake then resume
    card.style.transform = 'translateX(-8px)';
    setTimeout(() => { card.style.transform = 'translateX(8px)'; }, 80);
    setTimeout(() => { card.style.transform = 'translateX(0)'; }, 160);
    setTimeout(() => {
      if (!G.fallingEl) return;
      G.fallFrom = parseFloat(G.fallingEl.style.top) || 0;
      G.fallStart = performance.now();
      G.active = true;
      animateFall();
    }, 300);
  }
}

function onMissed() {
  G.combo = 0; RPG.sfxKo(); updateGameHUD();
  if (G.fallingEl) G.fallingEl.style.opacity = '0.3';
  setTimeout(() => {
    if (G.fallingEl) { G.fallingEl.remove(); G.fallingEl = null; }
    G.active = true; dropWord();
  }, 500);
}

function showComboPop(n) {
  const old = document.querySelector('.combo-pop'); if (old) old.remove();
  const pop = document.createElement('div'); pop.className = 'combo-pop';
  pop.textContent = n + 'x COMBO !';
  document.getElementById('scr-game').appendChild(pop);
  requestAnimationFrame(() => pop.classList.add('show'));
  setTimeout(() => pop.remove(), 950);
}

function startGameTimer() {
  clearInterval(G.timerTick);
  G.timerTick = setInterval(() => {
    if (!G.active) return;
    G.timer = Math.max(0, parseFloat((G.timer - 0.1).toFixed(1)));
    updateGameHUD();
    if (G.timer <= 0) { clearInterval(G.timerTick); cancelAnimationFrame(G.fallRaf); G.active = false; gameOver(); }
  }, 100);
}

function updateGameHUD() {
  const el = id => document.getElementById(id);
  el('gtimer').textContent = Math.ceil(G.timer);
  el('gscore').textContent = G.score;
  el('gcombo').textContent = G.combo;
  const pct = (G.timer / Math.max(G.timerMax, 30)) * 100;
  const bar = el('gtimerbar');
  bar.style.width = pct + '%';
  bar.style.background = pct > 50 ? 'linear-gradient(90deg,var(--gold),#f0b020)' : pct > 25 ? 'linear-gradient(90deg,#e85020,var(--si-red))' : 'var(--si-red)';
}

function gameOver() {
  RPG.stop();
  const bonusXP = Math.min(G.score, 100);
  const st = LS.stats; st.xp += bonusXP; LS.saveS(st);
  const em = G.wordsHit >= 10 ? '🏆' : G.wordsHit >= 5 ? '⭐' : '💪';
  document.getElementById('go-em').textContent = em;
  document.getElementById('go-sub').textContent = G.wordsHit >= 10 ? 'Incroyable !' : G.wordsHit >= 5 ? 'Bien joué !' : 'Continue à pratiquer !';
  document.getElementById('go-words').textContent = G.wordsHit;
  document.getElementById('go-bonus').textContent = '+' + bonusXP;
  document.getElementById('go-combo').textContent = G.maxCombo;
  document.getElementById('gameover-ov').classList.add('show');
}

function endGame() {
  clearInterval(G.timerTick); cancelAnimationFrame(G.fallRaf); G.active = false;
  RPG.stop();
  document.getElementById('gameover-ov').classList.remove('show');
  if (G.lvId) openLevel(G.lvId); else goHome();
}
