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

// ── Musique tension game show (Web Audio — ambiance WWTBM, pulsations sombres) ──
function milleStartMusic() {
  milleStopMusic();
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    let active = true;

    const master = ctx.createGain();
    master.gain.value = typeof getVol === 'function' ? getVol() : 0.75;
    master.connect(ctx.destination);
    window._milleGain = master;

    // Reverb via delay feedback
    const revDelay = ctx.createDelay(2); revDelay.delayTime.value = 0.35;
    const revGain  = ctx.createGain();   revGain.gain.value = 0.18;
    revDelay.connect(revGain); revGain.connect(revDelay); revGain.connect(master);

    const BPM = 58, B = 60 / BPM;

    // Pad sombre (nappes de tension)
    function pad(freq, t, dur, vol) {
      const o = ctx.createOscillator(), g = ctx.createGain();
      const flt = ctx.createBiquadFilter();
      o.type = 'sine'; o.frequency.value = freq;
      flt.type = 'lowpass'; flt.frequency.value = 500;
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(vol, t + 0.6);
      g.gain.setValueAtTime(vol, t + dur - 0.5);
      g.gain.linearRampToValueAtTime(0, t + dur);
      o.connect(flt); flt.connect(g); g.connect(master); g.connect(revDelay);
      o.start(t); o.stop(t + dur);
    }

    // Pulse grave (kick synthétique)
    function kick(t) {
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.type = 'sine';
      o.frequency.setValueAtTime(80, t);
      o.frequency.exponentialRampToValueAtTime(30, t + 0.18);
      g.gain.setValueAtTime(0.7, t);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
      o.connect(g); g.connect(master);
      o.start(t); o.stop(t + 0.28);
    }

    // Tic d'horloge (hi-hat métallique)
    function tick(t, vol) {
      const buf = ctx.createBuffer(1, ctx.sampleRate * 0.04, ctx.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length);
      const src = ctx.createBufferSource(), g = ctx.createGain();
      const flt = ctx.createBiquadFilter();
      flt.type = 'highpass'; flt.frequency.value = 6000;
      src.buffer = buf;
      g.gain.value = vol * 0.4;
      src.connect(flt); flt.connect(g); g.connect(master);
      src.start(t);
    }

    // Accords tension en La mineur / Mi / Sol
    const chords = [
      [110, 138.6, 165],   // Am
      [110, 138.6, 165],
      [82.4, 110, 123.5],  // E (tension)
      [82.4, 110, 130.8],  // Em
      [98,  123.5, 146.8], // G
      [98,  123.5, 146.8],
      [110, 138.6, 165],   // Am
      [110, 130.8, 164.8], // résolution sombre
    ];

    function loop() {
      if (!active) return;
      const t0 = ctx.currentTime + 0.05;
      const barLen = B * 4;

      chords.forEach((freqs, bar) => {
        const t = t0 + bar * barLen;
        freqs.forEach(f => pad(f, t, barLen * 0.95, 0.12));
        // Kick sur les temps 1 et 3
        kick(t); kick(t + barLen / 2);
        // Tics d'horloge à chaque noire
        for (let i = 0; i < 4; i++) tick(t + i * B, i === 0 ? 1 : 0.6);
        // Sous-tic (syncope légère)
        tick(t + B * 1.5, 0.35); tick(t + B * 2.5, 0.35);
      });

      const totalDur = chords.length * barLen * 1000;
      setTimeout(() => { if (active) loop(); }, totalDur - 80);
    }

    loop();
    _milleAudio = { stop() { active = false; window._milleGain = null; try { ctx.close(); } catch {} } };
  } catch {}
}

function milleStopMusic() {
  if (_milleAudio) { _milleAudio.stop(); _milleAudio = null; }
}
