// ═══════════════════════════════════════════
// ANAGRAMME SLOVÈNE
// Reconstitue le mot slovène · 12 mots · 50 XP
// Difficulté croissante 4→9 lettres
// ═══════════════════════════════════════════

const AN_ROUNDS = 12, AN_XP = 50;

const AN = {
  pool: [], round: 0, score: 0,
  word: '', fr: '',
  chips: [],    // [{ch, id, used}] — lettres disponibles (mélangées)
  placed: [],   // [{ch, chipId, revealed}|null] — slots remplis
  revealCount: 0, hintTimer: null, active: false,
};

function getAnVocab() {
  const seen = new Map();
  getLevels().forEach(lv => {
    lv.lessons.forEach(les => {
      (EX[les.id] || []).forEach(ex => {
        if (ex.type === 'matching' && ex.pairs) {
          ex.pairs.forEach(p => {
            const w = (p.sl || '').replace(/[^a-zA-ZšŠžŽčČ]/g, '');
            const fr = (p.fr || '').split('(')[0].split('/')[0].trim();
            if (w.length >= 4 && w.length <= 9 && fr && !seen.has(w.toUpperCase()))
              seen.set(w.toUpperCase(), { word: w, fr });
          });
        }
      });
    });
  });
  return [...seen.values()];
}

function startAnagramme() {
  const vocab = getAnVocab();
  if (vocab.length < 8) { toast('Complète d\'abord quelques leçons !'); return; }

  // Distribute by length for progressive difficulty
  const byLen = {};
  vocab.forEach(v => { const l = v.word.length; (byLen[l] = byLen[l] || []).push(v); });
  Object.values(byLen).forEach(a => a.sort(() => Math.random() - .5));

  const pool = [];
  [4, 4, 5, 5, 6, 6, 6, 7, 7, 7, 8, 9].forEach(target => {
    // Find closest available length
    for (let d = 0; d <= 3; d++) {
      for (const len of [target, target - d, target + d]) {
        const arr = byLen[len] || [];
        const unused = arr.find(v => !pool.find(p => p.word === v.word));
        if (unused) { pool.push(unused); return; }
      }
    }
  });
  // Fill to AN_ROUNDS
  while (pool.length < AN_ROUNDS) {
    const v = vocab[Math.floor(Math.random() * vocab.length)];
    if (!pool.find(p => p.word === v.word)) pool.push(v);
  }

  AN.pool = pool.slice(0, AN_ROUNDS);
  AN.round = 0; AN.score = 0; AN.active = true;
  nav('scr-anagramme', 'fwd');
  anNextRound();
}

function anNextRound() {
  if (AN.round >= AN.pool.length) { anFinish(); return; }
  if (AN.hintTimer) clearTimeout(AN.hintTimer);

  const item = AN.pool[AN.round];
  AN.word = item.word.toUpperCase();
  AN.fr   = item.fr;
  AN.placed = Array(AN.word.length).fill(null);
  AN.revealCount = 0;

  // Shuffle all letters (ensure it's actually scrambled)
  let shuffled = AN.word.split('').sort(() => Math.random() - .5);
  if (shuffled.join('') === AN.word && shuffled.length > 1) {
    const i = Math.floor(Math.random() * (shuffled.length - 1));
    [shuffled[i], shuffled[i + 1]] = [shuffled[i + 1], shuffled[i]];
  }
  AN.chips = shuffled.map((ch, id) => ({ ch, id, used: false }));

  anRender();
  // Auto-speak the French word to give audio context
  if (typeof speak === 'function') speak(AN.fr);
  // Schedule first hint after 8s
  AN.hintTimer = setTimeout(anRevealHint, 8000);
}

function anRender() {
  document.getElementById('an-round').textContent = `${AN.round + 1} / ${AN_ROUNDS}`;
  document.getElementById('an-prog').style.width  = (AN.round / AN_ROUNDS * 100) + '%';
  document.getElementById('an-fr-word').textContent = AN.fr;

  // Slots row
  const slotsEl = document.getElementById('an-slots');
  slotsEl.innerHTML = '';
  AN.placed.forEach(p => {
    const slot = document.createElement('div');
    slot.className = 'an-slot' + (p ? ' an-slot-filled' + (p.revealed ? ' an-slot-hint' : '') : '');
    slot.textContent = p ? p.ch : '';
    slotsEl.appendChild(slot);
  });

  // Chips row
  const chipsEl = document.getElementById('an-chips');
  chipsEl.innerHTML = '';
  AN.chips.forEach((c, i) => {
    const chip = document.createElement('button');
    chip.className = 'an-chip' + (c.used ? ' an-chip-used' : '');
    chip.textContent = c.used ? '' : c.ch;
    chip.disabled = c.used;
    if (!c.used) chip.addEventListener('click', () => anTap(i));
    chipsEl.appendChild(chip);
  });
}

function anTap(chipIdx) {
  if (!AN.active) return;
  const chip = AN.chips[chipIdx];
  if (chip.used) return;
  const empty = AN.placed.findIndex(p => p === null);
  if (empty === -1) return;
  chip.used = true;
  AN.placed[empty] = { ch: chip.ch, chipId: chipIdx, revealed: false };
  anRender();
  if (AN.placed.every(p => p !== null)) anCheck();
}

function anDelete() {
  if (!AN.active) return;
  for (let i = AN.placed.length - 1; i >= 0; i--) {
    if (AN.placed[i] && !AN.placed[i].revealed) {
      AN.chips[AN.placed[i].chipId].used = false;
      AN.placed[i] = null;
      anRender();
      return;
    }
  }
}

function anCheck() {
  clearTimeout(AN.hintTimer);
  const typed = AN.placed.map(p => p ? p.ch : '').join('');
  if (typed === AN.word) {
    AN.score++;
    anFlashSlots('ok');
    if (typeof speak === 'function') speak(AN.pool[AN.round].word);
    setTimeout(() => { AN.round++; anNextRound(); }, 1100);
  } else {
    anFlashSlots('ko');
    if (typeof speak === 'function') speak(AN.pool[AN.round].word);
    setTimeout(() => {
      AN.placed.forEach((p, i) => {
        if (p && !p.revealed) { AN.chips[p.chipId].used = false; AN.placed[i] = null; }
      });
      anRender();
      AN.hintTimer = setTimeout(anRevealHint, 5000);
    }, 900);
  }
}

function anRevealHint() {
  const emptyIdx = AN.placed.findIndex(p => p === null);
  if (emptyIdx === -1) return;
  const correct = AN.word[emptyIdx];
  const chipIdx = AN.chips.findIndex(c => !c.used && c.ch === correct);
  if (chipIdx === -1) return;
  AN.chips[chipIdx].used = true;
  AN.placed[emptyIdx] = { ch: correct, chipId: chipIdx, revealed: true };
  AN.revealCount++;
  anRender();
  if (AN.placed.every(p => p !== null)) { anCheck(); return; }
  AN.hintTimer = setTimeout(anRevealHint, 5000);
}

function anFlashSlots(type) {
  const el = document.getElementById('an-slots');
  el.classList.remove('an-flash-ok', 'an-flash-ko');
  void el.offsetWidth;
  el.classList.add(type === 'ok' ? 'an-flash-ok' : 'an-flash-ko');
}

function anFinish() {
  if (AN.hintTimer) clearTimeout(AN.hintTimer);
  const xp = Math.round(AN_XP * AN.score / AN_ROUNDS);
  if (xp > 0) { const s = LS.stats; s.xp += xp; LS.saveS(s); }
  document.getElementById('an-ov-em').textContent    = AN.score === AN_ROUNDS ? '🔤' : AN.score >= 9 ? '✅' : '🔄';
  document.getElementById('an-ov-title').textContent = AN.score === AN_ROUNDS ? 'Orthographe parfaite !' : `${AN.score} / ${AN_ROUNDS} mots !`;
  document.getElementById('an-ov-xp').textContent    = '+' + xp + ' XP';
  document.getElementById('an-ov-sub').textContent   = AN.score === AN_ROUNDS
    ? 'Tu maîtrises l\'écriture slovène !'
    : 'Rejoue pour maîtriser l\'orthographe slovène !';
  document.getElementById('an-ov').classList.add('show');
}
