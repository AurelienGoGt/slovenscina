// ═══════════════════════════════════════════
// QUI VEUT GAGNER DES MILLIONS ? (Version Slovénie)
// ═══════════════════════════════════════════
const MILLE_LADDER = [50, 100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000, 1000000];
const MILLE_SAFE   = [2, 5, 8]; // 0-based secure steps

const MS = {
  questions: [], idx: 0, safeXP: 0,
  jokers: { half: true, flash: true, skip: true, swap: true },
};
let _milleAudio = null;

// ── Start ──
function startMillionnaire() {
  const pool = [...MILLE_QUESTIONS].sort(() => Math.random() - .5);
  MS.questions = pool.slice(0, 12).map(q => {
    const ord = [0, 1, 2, 3].sort(() => Math.random() - .5);
    return { ...q, choices: ord.map(i => q.choices[i]), correct: ord.indexOf(q.correct) };
  });
  MS.idx = 0;
  MS.safeXP = 0;
  MS.jokers = { half: true, flash: true, skip: true, swap: true };
  milleStartMusic();
  nav('scr-mille', 'fwd');
  milleRender();
}

// ── Render ──
function milleRender() {
  const q = MS.questions[MS.idx];
  const i = MS.idx;

  document.getElementById('mille-step').textContent  = `Question ${i + 1} / 12`;
  const prizeEl = document.getElementById('mille-prize');
  prizeEl.textContent = '💰 ' + milleXP(MILLE_LADDER[i]) + ' XP';
  if (i > 0) { prizeEl.classList.remove('prize-pop'); void prizeEl.offsetWidth; prizeEl.classList.add('prize-pop'); }
  document.getElementById('mille-cat').textContent   = q.cat;
  const qEl = document.getElementById('mille-q');
  qEl.textContent = q.q;
  qEl.classList.remove('q-anim'); void qEl.offsetWidth; qEl.classList.add('q-anim');

  // Progress strip (12 dots)
  const strip = document.getElementById('mille-strip');
  if (strip) strip.innerHTML = MILLE_LADDER.map((_, idx) =>
    `<span class="ms-dot${idx === i ? ' cur' : ''}${MILLE_SAFE.includes(idx) ? ' safe' : ''}${idx < i ? ' done' : ''}"></span>`
  ).join('');

  // Choices
  const labels = ['A', 'B', 'C', 'D'];
  const wrap = document.getElementById('mille-choices');
  wrap.innerHTML = '';
  q.choices.forEach((c, ci) => {
    if (c === null) return;
    const btn = document.createElement('button');
    btn.className = 'mille-btn mille-btn-slide'; btn.id = 'mb' + ci;
    btn.style.animationDelay = (ci * 70) + 'ms';
    btn.innerHTML = `<span class="mille-lbl">${labels[ci]}</span><span class="mille-txt">${c}</span>`;
    btn.addEventListener('click', () => milleAnswer(ci));
    wrap.appendChild(btn);
  });

  milleRenderJokers();
}

// ── Answer ──
function milleAnswer(ci) {
  document.querySelectorAll('.mille-btn').forEach(b => b.disabled = true);
  const q = MS.questions[MS.idx];
  const chosen = document.getElementById('mb' + ci);
  if (chosen) chosen.classList.add('mille-chosen');

  setTimeout(() => {
    document.getElementById('mb' + q.correct)?.classList.add('mille-correct');
    if (ci !== q.correct && chosen) { chosen.classList.add('mille-wrong'); }

    setTimeout(() => {
      if (ci === q.correct) {
        if (MILLE_SAFE.includes(MS.idx)) MS.safeXP = MILLE_LADDER[MS.idx];
        MS.idx++;
        MS.idx >= 12 ? milleFinish(1000000) : milleRender();
      } else {
        milleFinish(-1);
      }
    }, 1400);
  }, 700);
}

// ── Jokers ──
function milleUseFifty() {
  if (!MS.jokers.half) return;
  MS.jokers.half = false;
  milleRenderJokers();
  const q = MS.questions[MS.idx];
  let removed = 0;
  for (let i = 0; i < 4 && removed < 2; i++) {
    if (i !== q.correct && q.choices[i] !== null) {
      const b = document.getElementById('mb' + i);
      if (b) { b.style.opacity = '0.2'; b.disabled = true; removed++; }
    }
  }
}

function milleUseFlash() {
  if (!MS.jokers.flash) return;
  MS.jokers.flash = false;
  milleRenderJokers();
  const btn = document.getElementById('mb' + MS.questions[MS.idx].correct);
  if (btn) { btn.classList.add('mille-flash'); setTimeout(() => btn.classList.remove('mille-flash'), 3000); }
}

function milleUseSkip() {
  if (!MS.jokers.skip) return;
  MS.jokers.skip = false;
  MS.idx++;
  MS.idx >= 12 ? milleFinish(MILLE_LADDER[11]) : milleRender();
}

function milleUseSwap() {
  if (!MS.jokers.swap) return;
  MS.jokers.swap = false;
  const usedQs = new Set(MS.questions.map(q => q.q));
  const pool = MILLE_QUESTIONS.filter(q => !usedQs.has(q.q));
  if (!pool.length) return;
  const newQ = pool[Math.floor(Math.random() * pool.length)];
  const ord = [0, 1, 2, 3].sort(() => Math.random() - .5);
  MS.questions[MS.idx] = { ...newQ, choices: ord.map(i => newQ.choices[i]), correct: ord.indexOf(newQ.correct) };
  milleRender();
}

function milleRenderJokers() {
  const defs = [
    { key: 'half',  label: '50 : 50',   fn: milleUseFifty },
    { key: 'flash', label: '🔍 Flash',   fn: milleUseFlash },
    { key: 'skip',  label: '⏭ Passer',  fn: milleUseSkip  },
    { key: 'swap',  label: '🔄 Changer', fn: milleUseSwap  },
  ];
  const bar = document.getElementById('mille-jokers');
  if (!bar) return;
  bar.innerHTML = '';
  defs.forEach(d => {
    const b = document.createElement('button');
    b.className = 'mille-joker' + (MS.jokers[d.key] ? '' : ' used');
    b.textContent = d.label; b.disabled = !MS.jokers[d.key];
    if (MS.jokers[d.key]) b.addEventListener('click', d.fn);
    bar.appendChild(b);
  });
}

// ── Finish ──
function milleFinish(xpOverride) {
  milleStopMusic();
  const xp = xpOverride >= 0 ? xpOverride : MS.safeXP;
  if (xp > 0) { const s = LS.stats; s.xp += xp; LS.saveS(s); }

  const won = xpOverride === 1000000;
  const ov = document.getElementById('mille-ov');
  document.getElementById('mille-ov-em').textContent    = won ? '🏆' : (xp > 0 ? '💸' : '😢');
  document.getElementById('mille-ov-title').textContent = won ? 'UN MILLION !' : (xp > 0 ? 'Palier atteint !' : 'Perdu !');
  document.getElementById('mille-ov-xp').textContent    = '+' + milleXP(xp) + ' XP';
  document.getElementById('mille-ov-sub').textContent   = won
    ? 'Félicitations, tu connais la Slovénie !'
    : (xp > 0 ? `Tu repars avec le palier de sécurité.` : 'Retente ta chance !');
  ov.classList.add('show');
}

// ── XP formatter ──
function milleXP(n) {
  if (n >= 1000000) return '1 000 000';
  if (n >= 1000) return n.toLocaleString('fr-FR');
  return String(n);
}

// ── Game show music (Web Audio — violin, Slovenian folk dance, D major, 132 BPM) ──
function milleStartMusic() {
  milleStopMusic();
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    let active = true;

    const cmp = ctx.createDynamicsCompressor();
    cmp.threshold.value = -16; cmp.ratio.value = 4;
    cmp.connect(ctx.destination);

    const masterVol = ctx.createGain();
    masterVol.gain.value = typeof getVol === 'function' ? getVol() : 0.75;
    masterVol.connect(cmp);
    window._milleGain = masterVol;

    const dry = ctx.createGain(); dry.gain.value = 0.52; dry.connect(masterVol);
    const revD = ctx.createDelay(0.6); revD.delayTime.value = 0.11;
    const revF = ctx.createGain(); revF.gain.value = 0.15;
    const revO = ctx.createGain(); revO.gain.value = 0.20;
    revD.connect(revF); revF.connect(revD);
    revD.connect(revO); revO.connect(masterVol);

    const BPM = 132, B = 60 / BPM;

    function vln(freq, t, dur, vol) {
      const o1 = ctx.createOscillator(), o2 = ctx.createOscillator();
      const flt = ctx.createBiquadFilter();
      const g   = ctx.createGain();
      const lfo = ctx.createOscillator(), lg = ctx.createGain();
      o1.type = 'sawtooth'; o1.frequency.value = freq;
      o2.type = 'sawtooth'; o2.frequency.value = freq * 1.0028;
      flt.type = 'lowpass'; flt.frequency.value = 2400; flt.Q.value = 0.7;
      lfo.type = 'sine'; lfo.frequency.value = 5.8;
      lg.gain.setValueAtTime(0, t);
      lg.gain.linearRampToValueAtTime(0, t + 0.15);
      lg.gain.linearRampToValueAtTime(freq * 0.012, t + 0.30);
      lfo.connect(lg); lg.connect(o1.frequency); lg.connect(o2.frequency);
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(vol * 0.38, t + 0.055);
      g.gain.linearRampToValueAtTime(vol, t + 0.11);
      g.gain.setValueAtTime(vol, Math.max(t + 0.12, t + dur - 0.06));
      g.gain.linearRampToValueAtTime(0.001, t + dur);
      o1.connect(flt); o2.connect(flt); flt.connect(g);
      g.connect(dry); g.connect(revD);
      lfo.start(t); lfo.stop(t + dur + 0.12);
      o1.start(t); o1.stop(t + dur + 0.05);
      o2.start(t); o2.stop(t + dur + 0.05);
    }

    function bass(freq, t) {
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.type = 'sawtooth'; o.frequency.value = freq;
      g.gain.setValueAtTime(0.38, t);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.36);
      o.connect(g); g.connect(dry);
      o.start(t); o.stop(t + 0.40);
    }

    // D4=293.7 E4=329.6 F#4=369.9 G4=392 A4=440 B4=493.9 C#5=554.4 D5=587.3
    const mel = [
      [293.7,1],[329.6,1],[369.9,1],[440,1],
      [392,1],[369.9,1],[329.6,2],
      [440,1],[440,1],[440,1],[493.9,1],
      [440,1],[392,1],[369.9,2],
      [293.7,1],[369.9,1],[440,1],[587.3,1],
      [554.4,1],[493.9,1],[440,2],
      [369.9,1],[392,1],[440,1],[369.9,1],
      [329.6,1],[369.9,1],[293.7,2],
    ];
    const totalBeats = mel.reduce((s,[,b])=>s+b, 0); // 32

    // Bass: D2=73.4Hz A2=110Hz — follows phrase harmony
    const bassFreqs = [73.4,73.4,73.4,73.4, 110,110,110,110, 73.4,73.4,110,110, 73.4,73.4,73.4,73.4];

    function loop() {
      if (!active) return;
      const t0 = ctx.currentTime + 0.04;
      let t = t0;
      mel.forEach(([f, beats]) => { vln(f, t, beats * B * 0.87, 0.44); t += beats * B; });
      for (let i = 0; i < 16; i++) bass(bassFreqs[i], t0 + i * 2 * B);
      setTimeout(() => { if (active) loop(); }, Math.round(totalBeats * B * 1000) - 60);
    }

    loop();
    _milleAudio = { stop() { active = false; window._milleGain = null; try { ctx.close(); } catch {} } };
  } catch {}
}

function milleStopMusic() {
  if (_milleAudio) { _milleAudio.stop(); _milleAudio = null; }
}
