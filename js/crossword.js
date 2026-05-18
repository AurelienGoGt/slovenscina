// ═══════════════════════════════════════════
// MOTS CROISÉS
// ═══════════════════════════════════════════
const CW = {
  grid: [], placed: [], inputs: {}, solved: new Set(), selected: null,
};
let _cwAudio = null;

// ── Vocabulary extraction ──
function getLevelVocab(lvId) {
  const lv = getLevels().find(l => l.id === lvId);
  if (!lv) return [];
  const seen = new Map();
  lv.lessons.forEach(les => {
    (EX[les.id] || []).forEach(ex => {
      if ((ex.type === 'presentation' || ex.type === 'tts_repeat') && ex.word && ex.translation) {
        const w = ex.word.replace(/[^a-zA-ZšŠžŽčČ]/g, '').toUpperCase();
        if (w.length >= 3 && w.length <= 10 && !seen.has(w))
          seen.set(w, ex.translation.split('(')[0].split('/')[0].trim());
      }
      if (ex.type === 'matching' && ex.pairs) {
        ex.pairs.forEach(p => {
          if (!p.sl) return;
          const w = p.sl.replace(/[^a-zA-ZšŠžŽčČ]/g, '').toUpperCase();
          if (w.length >= 3 && w.length <= 10 && !seen.has(w))
            seen.set(w, (p.fr || '').split('(')[0].split('/')[0].trim());
        });
      }
    });
  });
  return [...seen.entries()]
    .map(([word, clue]) => ({ word, clue }))
    .sort((a, b) => b.word.length - a.word.length);
}

// ── Crossword generator ──
function buildCrossword(vocab) {
  const G = 18;
  const grid = Array.from({ length: G }, () => Array(G).fill(null));
  const placed = [];
  const words = vocab.filter(v => v.word.length >= 3).slice(0, 14);
  if (!words.length) return null;

  function markGrid(word, r, c, dir) {
    for (let i = 0; i < word.length; i++) {
      const rr = dir === 'V' ? r + i : r;
      const cc = dir === 'H' ? c + i : c;
      if (!grid[rr][cc]) grid[rr][cc] = { letter: word[i], wNums: [] };
      grid[rr][cc].wNums.push(placed.length + 1);
    }
  }

  function canPlace(word, r, c, dir) {
    if (r < 0 || c < 0) return false;
    const er = dir === 'V' ? r + word.length - 1 : r;
    const ec = dir === 'H' ? c + word.length - 1 : c;
    if (er >= G || ec >= G) return false;
    if (dir === 'H') {
      if (c > 0 && grid[r][c - 1]) return false;
      if (ec < G - 1 && grid[r][ec + 1]) return false;
    } else {
      if (r > 0 && grid[r - 1][c]) return false;
      if (er < G - 1 && grid[er + 1][c]) return false;
    }
    let hits = 0;
    for (let i = 0; i < word.length; i++) {
      const rr = dir === 'V' ? r + i : r;
      const cc = dir === 'H' ? c + i : c;
      const cell = grid[rr][cc];
      if (cell) {
        if (cell.letter !== word[i]) return false;
        hits++;
      } else {
        if (dir === 'H') {
          if (rr > 0 && grid[rr - 1][cc]) return false;
          if (rr < G - 1 && grid[rr + 1][cc]) return false;
        } else {
          if (cc > 0 && grid[rr][cc - 1]) return false;
          if (cc < G - 1 && grid[rr][cc + 1]) return false;
        }
      }
    }
    return placed.length === 0 || hits > 0;
  }

  // First word: horizontal, centered
  const w0 = words[0];
  const r0 = Math.floor(G / 2), c0 = Math.floor((G - w0.word.length) / 2);
  markGrid(w0.word, r0, c0, 'H');
  placed.push({ ...w0, row: r0, col: c0, dir: 'H', num: 1 });

  // Remaining words: try to intersect
  for (let wi = 1; wi < words.length; wi++) {
    const w = words[wi];
    let done = false;
    for (const p of placed) {
      if (done) break;
      const pd = p.dir === 'H' ? 'V' : 'H';
      for (let pi = 0; pi < p.word.length && !done; pi++) {
        for (let wj = 0; wj < w.word.length && !done; wj++) {
          if (p.word[pi] !== w.word[wj]) continue;
          const r = p.dir === 'H' ? p.row - wj : p.row + pi;
          const c = p.dir === 'H' ? p.col + pi : p.col - wj;
          if (canPlace(w.word, r, c, pd)) {
            markGrid(w.word, r, c, pd);
            placed.push({ ...w, row: r, col: c, dir: pd, num: placed.length + 1 });
            done = true;
          }
        }
      }
    }
  }

  if (placed.length < 2) return null;

  // Trim to content
  let minR = G, maxR = 0, minC = G, maxC = 0;
  for (let r = 0; r < G; r++)
    for (let c = 0; c < G; c++)
      if (grid[r][c]) {
        if (r < minR) minR = r; if (r > maxR) maxR = r;
        if (c < minC) minC = c; if (c > maxC) maxC = c;
      }

  const trimmed = grid.slice(minR, maxR + 1).map(row => row.slice(minC, maxC + 1));
  placed.forEach(p => { p.row -= minR; p.col -= minC; });
  return { grid: trimmed, placed, rows: maxR - minR + 1, cols: maxC - minC + 1 };
}

// ── Start ──
function startCrossword() {
  if (!APP.lvId) return;
  const vocab = getLevelVocab(APP.lvId);
  const result = buildCrossword(vocab);
  if (!result) { toast('Pas assez de vocabulaire commun pour générer une grille.'); return; }

  CW.grid = result.grid;
  CW.placed = result.placed;
  CW.inputs = {};
  CW.solved = new Set();
  CW.selected = null;
  result.placed.forEach(p => { CW.inputs[p.num] = ''; });

  cwStartMusic();
  nav('scr-crossword', 'fwd');

  // Wire input listener (once)
  const inp = document.getElementById('cw-inp');
  inp.oninput = null;
  inp.addEventListener('input', () => cwInputChange(inp.value), { once: false });

  renderCrossword();
}

// ── Render grid ──
function renderCrossword() {
  if (!CW.grid.length) return;
  const rows = CW.grid.length, cols = CW.grid[0].length;

  // Number map: "r_c" → first word num starting there
  const numMap = {};
  CW.placed.forEach(p => {
    const k = `${p.row}_${p.col}`;
    if (!numMap[k]) numMap[k] = p.num;
  });

  const gridEl = document.getElementById('cw-grid');
  gridEl.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  gridEl.innerHTML = '';

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const cell = CW.grid[r][c];
      const div = document.createElement('div');
      if (!cell) {
        div.className = 'cw-cell wall';
      } else {
        const inSel = CW.selected !== null && CW.placed.some(
          p => p.num === CW.selected && cwCellInWord(r, c, p)
        );
        const isDone = cell.wNums.some(n => CW.solved.has(n));
        div.className = 'cw-cell' + (isDone ? ' done' : inSel ? ' sel' : '');
        div.dataset.r = r; div.dataset.c = c;

        // Word-start number
        if (numMap[`${r}_${c}`] !== undefined) {
          const sp = document.createElement('span');
          sp.className = 'cw-num';
          sp.textContent = numMap[`${r}_${c}`];
          div.appendChild(sp);
        }

        // Typed letter
        let typed = '';
        for (const wn of cell.wNums) {
          const p = CW.placed.find(x => x.num === wn);
          if (!p || !CW.inputs[wn]) continue;
          const pos = p.dir === 'H' ? c - p.col : r - p.row;
          if (pos >= 0 && pos < CW.inputs[wn].length) {
            typed = CW.inputs[wn][pos] || '';
            break;
          }
        }
        if (typed) {
          const lt = document.createElement('span');
          lt.className = 'cw-letter';
          lt.textContent = typed;
          div.appendChild(lt);
        }
        div.addEventListener('click', () => cwClickCell(r, c));
      }
      gridEl.appendChild(div);
    }
  }

  cwRenderClues();
  cwRenderBar();
}

function cwCellInWord(r, c, p) {
  return p.dir === 'H'
    ? r === p.row && c >= p.col && c < p.col + p.word.length
    : c === p.col && r >= p.row && r < p.row + p.word.length;
}

// ── Cell click ──
function cwClickCell(r, c) {
  const cell = CW.grid[r]?.[c];
  if (!cell) return;
  const words = CW.placed.filter(p => cwCellInWord(r, c, p) && !CW.solved.has(p.num));
  if (!words.length) return;
  if (words.length === 1) {
    cwSelectWord(words[0].num);
  } else {
    const next = words.find(p => p.num !== CW.selected) || words[0];
    cwSelectWord(next.num);
  }
}

function cwSelectWord(num) {
  if (CW.solved.has(num)) return;
  CW.selected = num;
  renderCrossword();
  const inp = document.getElementById('cw-inp');
  if (inp) { inp.value = CW.inputs[num] || ''; setTimeout(() => inp.focus(), 60); }
}

// ── Input handling ──
function cwInputChange(rawVal) {
  const sel = CW.selected;
  if (sel === null) return;
  const p = CW.placed.find(x => x.num === sel);
  if (!p) return;
  const clean = rawVal.replace(/[^a-zA-ZšŠžŽčČ]/g, '').toUpperCase().slice(0, p.word.length);
  // Sync back so cursor doesn't drift
  const inp = document.getElementById('cw-inp');
  if (inp && inp.value !== clean) inp.value = clean;
  CW.inputs[sel] = clean;
  if (clean.length === p.word.length && clean === p.word) {
    CW.solved.add(sel);
    CW.selected = null;
    speak(p.word.toLowerCase());
    if (inp) inp.blur();
    renderCrossword();
    const grid = document.getElementById('cw-grid');
    if (grid) { grid.classList.remove('word-solved'); void grid.offsetWidth; grid.classList.add('word-solved'); }
    if (CW.solved.size === CW.placed.length) { setTimeout(cwWin, 400); }
    return;
  }
  renderCrossword();
}

// ── Bar (active word input strip) ──
function cwRenderBar() {
  const bar = document.getElementById('cw-bar');
  const p = CW.placed.find(x => x.num === CW.selected);
  if (!p || CW.solved.has(p.num)) { bar.classList.add('hide'); return; }
  bar.classList.remove('hide');
  document.getElementById('cw-bar-clue').textContent =
    `${p.num}. ${p.dir === 'H' ? '→' : '↓'}  ${p.clue}`;
  const inp = document.getElementById('cw-inp');
  inp.maxLength = p.word.length;
  inp.placeholder = '_'.repeat(p.word.length);
}

// ── Clue lists ──
function cwRenderClues() {
  ['H', 'V'].forEach(dir => {
    const el = document.getElementById(dir === 'H' ? 'cw-h-clues' : 'cw-v-clues');
    if (!el) return;
    el.innerHTML = '';
    CW.placed.filter(p => p.dir === dir).forEach(p => {
      const d = document.createElement('div');
      d.className = 'cw-clue' +
        (CW.solved.has(p.num) ? ' done' : '') +
        (p.num === CW.selected ? ' sel' : '');
      d.textContent = `${p.num}. ${p.clue}`;
      if (!CW.solved.has(p.num)) d.addEventListener('click', () => cwSelectWord(p.num));
      el.appendChild(d);
    });
  });
}

// ── Confetti ──
function cwConfetti() {
  const el = document.createElement('div'); el.className = 'cw-confetti';
  const cols = ['#003DA5','#E8A832','#52b788','#e24b4a','#a0c4ff','#fff'];
  for (let i = 0; i < 48; i++) {
    const d = document.createElement('div'); d.className = 'conf-dot';
    const sz = 5 + Math.random() * 7;
    d.style.cssText = `left:${Math.random()*100}%;top:0;width:${sz}px;height:${sz}px;`
      + `background:${cols[i % cols.length]};`
      + `animation-delay:${(Math.random() * 0.7).toFixed(2)}s;`
      + `animation-duration:${(1.1 + Math.random() * 0.9).toFixed(2)}s`;
    el.appendChild(d);
  }
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2600);
}

// ── Win ──
function cwWin() {
  cwStopMusic();
  cwConfetti();
  const xp = 40;
  const s = LS.stats; s.xp += xp; LS.saveS(s);
  const ov = document.createElement('div'); ov.className = 'modal-ov';
  const box = document.createElement('div'); box.className = 'modal-box';
  box.innerHTML =
    `<div style="font-size:34px;margin-bottom:10px">🎉</div>
     <div style="font-family:'Lora',serif;font-size:18px;font-weight:600;margin-bottom:6px">Grille complète !</div>
     <div style="font-size:13px;color:var(--soft);margin-bottom:16px">+${xp} XP gagnés</div>
     <div class="modal-actions">
       <button class="modal-btn modal-btn--cancel" id="cw-back-btn">Retour</button>
       <button class="modal-btn modal-btn--danger" style="background:var(--si-blue)" id="cw-replay-btn">Rejouer</button>
     </div>`;
  ov.appendChild(box);
  document.body.appendChild(ov);
  document.getElementById('cw-back-btn').onclick = () => { ov.remove(); if (APP.lvId) openLevel(APP.lvId); else goHome(); };
  document.getElementById('cw-replay-btn').onclick = () => { ov.remove(); startCrossword(); };
}

// ── Piano · Zdravljica (hymne national slovène) · Ré majeur · 72 BPM ──
function cwStartMusic() {
  cwStopMusic();
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    let active = true;

    const cmp = ctx.createDynamicsCompressor();
    cmp.threshold.value = -16; cmp.ratio.value = 3; cmp.connect(ctx.destination);

    const masterVol = ctx.createGain();
    masterVol.gain.value = typeof getVol === 'function' ? getVol() : 0.75;
    masterVol.connect(cmp);
    window._cwGain = masterVol;

    const master = ctx.createGain(); master.gain.value = 0.16; master.connect(masterVol);

    // Short room reverb (delay feedback)
    const revD = ctx.createDelay(0.6); revD.delayTime.value = 0.26;
    const revF = ctx.createGain(); revF.gain.value = 0.14;
    const revO = ctx.createGain(); revO.gain.value = 0.18;
    revD.connect(revF); revF.connect(revD); revD.connect(revO); revO.connect(masterVol);

    // Piano: additive harmonics (fundamental + overtones, inharmonic upper partials)
    function piano(freq, t, dur, vol) {
      [[1,1.00,1.8],[2,0.42,1.4],[3,0.20,1.0],[4.1,0.09,0.7],[5.2,0.06,0.5],[6.3,0.03,0.35]]
        .forEach(([r, rv, df]) => {
          const osc = ctx.createOscillator(), g = ctx.createGain();
          osc.type = 'sine'; osc.frequency.value = freq * r;
          osc.connect(g); g.connect(master); g.connect(revD);
          const dk = Math.min(dur * df, 2.6);
          g.gain.setValueAtTime(0, t);
          g.gain.linearRampToValueAtTime(vol * rv, t + 0.004);   // hammer strike
          g.gain.exponentialRampToValueAtTime(vol * rv * 0.26, t + 0.07); // fast decay
          g.gain.exponentialRampToValueAtTime(0.001, t + dk);
          osc.start(t); osc.stop(t + dk + 0.04);
        });
    }

    const BPM = 72, B = 60 / BPM;

    // ── Zdravljica melody ─ Ré majeur ─ 3/4 ──
    // D4=293.7  E4=329.6  F#4=369.9  G4=392  A4=440  B4=493.9  C#5=554.4  D5=587.3
    const mel = [
      // Phrase 1 (mesures 1-4)
      [293.7,1],[293.7,1],[440,1],
      [392,1],[369.9,1],[329.6,1],
      [293.7,1],[329.6,1],[369.9,1],
      [440,3],
      // Phrase 2 (mesures 5-8)
      [440,1],[440,1],[587.3,1],
      [554.4,1],[493.9,1],[440,1],
      [392,1],[369.9,1],[329.6,1],
      [293.7,3],
      // Phrase 3 (mesures 9-12)
      [440,1],[440,1],[587.3,1],
      [554.4,1],[493.9,1],[440,1],
      [493.9,1],[440,1],[392,1],
      [369.9,3],
      // Phrase 4 (mesures 13-16)
      [293.7,1],[369.9,1],[440,1],
      [587.3,1],[554.4,1],[493.9,1],
      [440,1],[392,1],[369.9,1],
      [293.7,3],
    ];

    // ── Accompagnement vals (main gauche) : grave + accord ──
    // [bassFreq, [note1, note2]] — 1 entrée = 1 mesure de 3 temps
    const lh = [
      [146.8,[293.7,440]],[98,[293.7,392]],[146.8,[293.7,440]],[110,[329.6,440]],
      [110,[329.6,440]],[164.8,[329.6,493.9]],[98,[293.7,392]],[146.8,[293.7,440]],
      [110,[329.6,440]],[164.8,[329.6,493.9]],[164.8,[329.6,493.9]],[110,[329.6,440]],
      [146.8,[293.7,440]],[146.8,[293.7,440]],[110,[329.6,440]],[146.8,[293.7,440]],
    ];

    const total = mel.reduce((s,[,b])=>s+b, 0); // 48 temps

    function loop() {
      if (!active) return;
      const t0 = ctx.currentTime + 0.04;

      // Main droite
      let t = t0;
      mel.forEach(([f, beats]) => {
        piano(f, t, beats * B * 0.88, 0.52);
        t += beats * B;
      });

      // Main gauche : grave sur temps 1, accord sur temps 2-3
      lh.forEach(([bass, ch], i) => {
        const bt = t0 + i * 3 * B;
        piano(bass, bt, B * 1.6, 0.22);
        ch.forEach(f => piano(f, bt + B, B * 1.8, 0.09));
      });

      setTimeout(() => { if (active) loop(); }, Math.round(total * B * 1000) - 55);
    }
    loop();
    _cwAudio = { stop() { active = false; window._cwGain = null; try { ctx.close(); } catch {} } };
  } catch {}
}

function cwStopMusic() {
  if (_cwAudio) { _cwAudio.stop(); _cwAudio = null; }
}
