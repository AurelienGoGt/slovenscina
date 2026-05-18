// ═══════════════════════════════════════════
// LESSON STATE
// ═══════════════════════════════════════════
const LS_STATE = {
  exercises: [], idx: 0, hearts: 3, answered: false, selected: null,
  totalEx: 0, correctCount: 0,
  matchLeft: null, matchPairs: [], matchFr: [], matchDone: [],
  reconPlaced: [],
  wsFound: [], wsSelCells: [], wsStartCell: null,
};

// ═══════════════════════════════════════════
// START / RENDER LOOP
// ═══════════════════════════════════════════
function startLesson(les) {
  APP.lessonId = les.id;
  const exData = EX[les.id];
  if (!exData || !exData.length) {
    LS_STATE.exercises = [{ type: 'presentation', label: 'Bientôt disponible', word: les.title, phonetic: '', translation: les.sub, cultural: { title: 'En préparation', text: 'Ce contenu arrive bientôt !' } }];
  } else {
    LS_STATE.exercises = exData;
  }
  LS_STATE.idx = 0; LS_STATE.hearts = 5; LS_STATE.answered = false; LS_STATE.selected = null;
  LS_STATE.totalEx = LS_STATE.exercises.length; LS_STATE.correctCount = 0;
  LS_STATE.matchLeft = null; LS_STATE.matchPairs = []; LS_STATE.matchFr = []; LS_STATE.matchDone = [];
  LS_STATE.reconPlaced = []; LS_STATE.wsFound = []; LS_STATE.wsSelCells = [];
  document.getElementById('res-ov').classList.remove('show');
  hideFB();
  nav('scr-lesson', 'fwd');
  renderEx();
}

function renderEx() {
  const ex = LS_STATE.exercises[LS_STATE.idx];
  if (!ex) { showResult(); return; }
  const pct = (LS_STATE.idx / LS_STATE.totalEx) * 100;
  document.getElementById('xp-fill').style.width = pct + '%';
  updateHearts(); hideFB();
  if (typeof applyAdaptiveLevel === 'function') applyAdaptiveLevel();
  LS_STATE.answered = false; LS_STATE.selected = null;
  const vbtn = document.getElementById('val-btn');
  vbtn.className = 'val-btn'; vbtn.disabled = true; vbtn.textContent = 'Vérifier';
  const card = document.getElementById('ex-card');

  switch (ex.type) {
    case 'presentation': renderPresentation(ex, card, vbtn); break;
    case 'tts_repeat':   renderTTSRepeat(ex, card, vbtn); break;
    case 'qcm':          renderQCM(ex, card, vbtn); break;
    case 'fill':         renderFill(ex, card, vbtn); break;
    case 'matching':     renderMatching(ex, card, vbtn); break;
    case 'wordsearch':   renderWordSearch(ex, card, vbtn); break;
    case 'dictee':       renderDictee(ex, card, vbtn); break;
    case 'dialogue':     renderDialogue(ex, card, vbtn); break;
    case 'reconstruct':  renderReconstruct(ex, card, vbtn); break;
    case 'story':        renderStory(ex, card, vbtn); break;
    case 'recap_intro':  renderRecapIntro(ex, card, vbtn); break;
    default: vbtn.textContent = 'Continuer →'; vbtn.disabled = false; card.innerHTML = '<div class="ex-tag">' + (ex.label || '') + '</div>';
  }
}

// ── PRESENTATION ──
function renderPresentation(ex, card, vbtn) {
  _ttsWord = ex.noTTS ? '' : (ex.word || '');
  vbtn.textContent = 'Continuer →'; vbtn.disabled = false;
  card.innerHTML = '';
  const tag = el('div', 'ex-tag', ex.label);
  const q = el('div', 'ex-q', ex.word);
  const ph = el('div', 'ex-ph', ex.phonetic || '');
  const tr = el('div', 'ex-tr', '🇫🇷 ' + ex.translation);
  card.append(tag, q, ph);
  if (typeof getUserLevel === 'function' && getUserLevel() === 'advanced')
    ph.addEventListener('click', () => ph.classList.toggle('revealed'));
  if (!ex.noTTS) {
    card.appendChild(makeTTSBtn());
    speak(ex.word);
  }
  card.appendChild(tr);
  if (ex.cultural) card.appendChild(makeCultural(ex.cultural));
  if (ex.histoire) card.appendChild(makeHistoire(ex.histoire));
}

// ── TTS REPEAT ──
function renderTTSRepeat(ex, card, vbtn) {
  _ttsWord = ex.noTTS ? '' : (ex.word || '');
  vbtn.textContent = "J'ai répété ✓"; vbtn.disabled = false;
  card.innerHTML = '';
  card.appendChild(el('div', 'ex-tag', ex.label));
  const wrap = el('div', 'tts-repeat-wrap', '');
  const q = el('div', 'ex-q', ex.word);
  const ph = el('div', 'ex-ph', ex.phonetic || '');
  const tr = el('div', 'ex-tr', '🇫🇷 ' + ex.translation);
  const btn = makeTTSBtn();
  wrap.append(q, ph, tr, btn);
  card.appendChild(wrap);
  if (ex.cultural) card.appendChild(makeCultural(ex.cultural));
  if (ex.histoire) card.appendChild(makeHistoire(ex.histoire));
  if (!ex.noTTS) speak(ex.word);
}

// ── QCM ──
function renderQCM(ex, card, vbtn) {
  card.innerHTML = '';
  card.appendChild(el('div', 'ex-tag', ex.label));
  card.appendChild(el('div', 'ex-q', ex.question));
  const wrap = el('div', 'choices', '');
  ex.choices.forEach((c, i) => {
    const btn = document.createElement('button');
    btn.className = 'choice';
    const span = el('span', '', c);
    const ind = el('span', 'ci', ''); ind.id = 'ci' + i;
    btn.append(span, ind);
    btn.addEventListener('click', () => {
      if (LS_STATE.answered) return;
      LS_STATE.selected = i;
      document.querySelectorAll('.choice').forEach((b, j) => b.classList.toggle('sel', j === i));
      vbtn.disabled = false;
    });
    wrap.appendChild(btn);
  });
  card.appendChild(wrap);
}

// ── FILL ──
function renderFill(ex, card, vbtn) {
  card.innerHTML = '';
  card.appendChild(el('div', 'ex-tag', ex.label));

  const instr = el('div', 'ex-instr', 'Complète le mot manquant');
  card.appendChild(instr);

  const parts = ex.sentence[0].split('___');
  const fullSentence = ex.sentence[0];
  const hintMatch = fullSentence.match(/\(([^)]+)\)$/);
  const contextHint = hintMatch ? hintMatch[1] : '';

  if (contextHint) {
    const ctx = el('div', 'ex-ctx-hint', '💡 ' + contextHint);
    card.appendChild(ctx);
  }

  const sentWrap = el('div', 'fill-sent', '');
  if (parts[0]) {
    const before = parts[0].replace(/\([^)]+\)$/, '').trim();
    if (before) sentWrap.appendChild(el('span', 'fill-context', before));
  }
  const inp = document.createElement('input');
  inp.className = 'fill-inp'; inp.id = 'fill-inp'; inp.type = 'text'; inp.placeholder = '?';
  inp.autocomplete = 'off'; inp.setAttribute('autocapitalize', 'none'); inp.spellcheck = false;
  inp.style.width = Math.max(100, (ex.blank.length * 13)) + 'px';
  inp.addEventListener('input', () => { vbtn.disabled = !inp.value.trim(); });
  inp.addEventListener('keydown', e => { if (e.key === 'Enter' && !vbtn.disabled) vbtn.click(); });
  sentWrap.appendChild(inp);
  if (parts[1]) {
    const after = parts[1].replace(/\([^)]+\)$/, '').trim();
    if (after && !after.startsWith('(')) sentWrap.appendChild(el('span', '', ' ' + after));
  }
  card.appendChild(sentWrap);

  const bank = el('div', 'bank', ''); bank.style.marginTop = '14px';
  ex.bank.forEach(w => {
    const btn = document.createElement('button');
    btn.className = 'chip'; btn.textContent = w;
    btn.addEventListener('click', () => { inp.value = w; vbtn.disabled = false; inp.focus(); });
    bank.appendChild(btn);
  });
  card.appendChild(bank);
  setTimeout(() => inp.focus(), 80);
}

// ── MATCHING ──
function renderMatching(ex, card, vbtn) {
  LS_STATE.matchPairs = [...ex.pairs].sort(() => Math.random() - .5);
  LS_STATE.matchFr    = [...ex.pairs].sort(() => Math.random() - .5);
  LS_STATE.matchLeft  = null; LS_STATE.matchDone = [];
  card.innerHTML = '';
  card.appendChild(el('div', 'ex-tag', ex.label));
  const arena = el('div', 'match-arena', ''); arena.id = 'm-arena';
  const colSl = el('div', 'match-col', ''); colSl.id = 'm-sl';
  const colFr = el('div', 'match-col', ''); colFr.id = 'm-fr';
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.id = 'm-svg'; svg.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;overflow:visible;pointer-events:none;z-index:0';
  LS_STATE.matchPairs.forEach((p, i) => {
    const item = el('div', 'm-item', p.sl || p.bg); item.id = 'msl' + i;
    item.addEventListener('click', () => tapMatch('sl', i));
    colSl.appendChild(item);
  });
  LS_STATE.matchFr.forEach((p, i) => {
    const item = el('div', 'm-item', p.fr); item.id = 'mfr' + i;
    item.addEventListener('click', () => tapMatch('fr', i));
    colFr.appendChild(item);
  });
  arena.append(colSl, svg, colFr);
  card.appendChild(arena);
}

function tapMatch(side, idx) {
  if (LS_STATE.answered) return;
  const elId = side === 'sl' ? 'msl' + idx : 'mfr' + idx;
  const el2 = document.getElementById(elId);
  if (!el2 || el2.classList.contains('ok')) return;
  if (LS_STATE.matchLeft) {
    if (LS_STATE.matchLeft.side === side) {
      document.getElementById(LS_STATE.matchLeft.side === 'sl' ? 'msl' + LS_STATE.matchLeft.idx : 'mfr' + LS_STATE.matchLeft.idx)?.classList.remove('sel');
      LS_STATE.matchLeft = { side, idx }; el2.classList.add('sel'); return;
    }
    const prev = LS_STATE.matchLeft; LS_STATE.matchLeft = null;
    document.getElementById(prev.side === 'sl' ? 'msl' + prev.idx : 'mfr' + prev.idx)?.classList.remove('sel');
    el2.classList.remove('sel');
    const slIdx = side === 'sl' ? idx : prev.idx;
    const frIdx = side === 'fr' ? idx : prev.idx;
    const ok = LS_STATE.matchPairs[slIdx].fr === LS_STATE.matchFr[frIdx].fr;
    if (ok) {
      document.getElementById('msl' + slIdx).classList.add('ok');
      document.getElementById('mfr' + frIdx).classList.add('ok');
      LS_STATE.matchDone.push({ slIdx, frIdx });
      drawMatchLine(slIdx, frIdx, '#52b788');
      speak(LS_STATE.matchPairs[slIdx].sl);
      if (LS_STATE.matchDone.length === LS_STATE.matchPairs.length) {
        LS_STATE.answered = true;
        const vb = document.getElementById('val-btn');
        vb.disabled = false; vb.textContent = 'Parfait ! Continuer →'; vb.classList.add('ok');
      }
    } else {
      ['msl' + slIdx, 'mfr' + frIdx].forEach(id => {
        const e = document.getElementById(id);
        if (e) { e.classList.add('shake'); setTimeout(() => e.classList.remove('shake'), 420); }
      });
      LS_STATE.hearts = Math.max(0, LS_STATE.hearts - 1); updateHearts(); toast('Réessaie !');
      if (LS_STATE.hearts <= 0) {
        setTimeout(() => { LS_STATE.answered = true; showResult(); }, 700);
      }
    }
  } else { LS_STATE.matchLeft = { side, idx }; el2.classList.add('sel'); }
}

function drawMatchLine(slIdx, frIdx, color) {
  const arena = document.getElementById('m-arena');
  const svg = document.getElementById('m-svg');
  if (!arena || !svg) return;
  const ar = arena.getBoundingClientRect();
  const sl = document.getElementById('msl' + slIdx);
  const fr = document.getElementById('mfr' + frIdx);
  if (!sl || !fr) return;
  const sr = sl.getBoundingClientRect(); const fr2 = fr.getBoundingClientRect();
  const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  line.setAttribute('x1', sr.right - ar.left); line.setAttribute('y1', sr.top + sr.height / 2 - ar.top);
  line.setAttribute('x2', fr2.left - ar.left); line.setAttribute('y2', fr2.top + fr2.height / 2 - ar.top);
  line.setAttribute('stroke', color); line.setAttribute('stroke-width', '2.5');
  line.setAttribute('stroke-linecap', 'round'); line.setAttribute('opacity', '.8');
  svg.appendChild(line);
}

// ── WORD SEARCH ──
function renderWordSearch(ex, card, vbtn) {
  LS_STATE.wsFound = []; LS_STATE.wsSelCells = []; LS_STATE.wsStartCell = null;
  LS_STATE._wsEx = ex;
  const rows = ex.grid.length, cols = ex.grid[0].length;
  card.innerHTML = '';
  card.appendChild(el('div', 'ex-tag', ex.label));
  const gridWrap = el('div', '', ''); gridWrap.style.overflowX = 'auto';
  const grid = el('div', 'ws-grid', '');
  grid.id = 'ws-grid'; grid.style.gridTemplateColumns = 'repeat(' + cols + ',30px)';
  ex.grid.forEach((row, r) => {
    row.forEach((cell, c) => {
      const d = el('div', 'ws-cell', cell); d.id = 'wsc' + r + '_' + c;
      d.addEventListener('pointerdown', () => wsDown(r, c));
      d.addEventListener('pointermove', () => wsMove(r, c));
      d.addEventListener('pointerup', () => wsUp());
      grid.appendChild(d);
    });
  });
  gridWrap.appendChild(grid);
  card.appendChild(gridWrap);
  const words = el('div', 'ws-words', '');
  words.id = 'ws-words';
  ex.words.forEach(w => { const s = el('span', 'ws-word', w); s.id = 'wsw-' + w; words.appendChild(s); });
  card.appendChild(words);
  vbtn.textContent = 'Continuer →'; vbtn.disabled = true;
}

function wsDown(r, c) { LS_STATE.wsStartCell = { r, c }; LS_STATE.wsSelCells = [{ r, c }]; wsHL(); }
function wsMove(r, c) {
  if (!LS_STATE.wsStartCell) return;
  const { r: r0, c: c0 } = LS_STATE.wsStartCell;
  const dr = r - r0, dc = c - c0;
  const cells = [{ r: r0, c: c0 }];
  if (dr === 0 && dc !== 0) { for (let i = 1; i <= Math.abs(dc); i++) cells.push({ r: r0, c: c0 + (dc > 0 ? i : -i) }); }
  else if (dc === 0 && dr !== 0) { for (let i = 1; i <= Math.abs(dr); i++) cells.push({ r: r0 + (dr > 0 ? i : -i), c: c0 }); }
  else if (Math.abs(dr) === Math.abs(dc)) { for (let i = 1; i <= Math.abs(dr); i++) cells.push({ r: r0 + (dr > 0 ? i : -i), c: c0 + (dc > 0 ? i : -i) }); }
  LS_STATE.wsSelCells = cells; wsHL();
}
function wsUp() {
  if (!LS_STATE.wsStartCell) return;
  const ex = LS_STATE._wsEx; const sel = LS_STATE.wsSelCells;
  const word = sel.map(({ r, c }) => (ex.grid[r] || [])[c] || '').join('');
  const wordRev = word.split('').reverse().join('');
  let matched = null;
  for (const w of ex.words) { if (!LS_STATE.wsFound.includes(w) && (word === w || wordRev === w)) matched = w; }
  if (matched) {
    LS_STATE.wsFound.push(matched);
    sel.forEach(({ r, c }) => document.getElementById('wsc' + r + '_' + c)?.classList.replace('hl', 'found'));
    document.getElementById('wsw-' + matched)?.classList.add('done');
    speak(matched.toLowerCase());
    if (LS_STATE.wsFound.length === ex.words.length) { document.getElementById('val-btn').disabled = false; toast('Tous trouvés ! 🎉'); }
  } else { sel.forEach(({ r, c }) => document.getElementById('wsc' + r + '_' + c)?.classList.remove('hl')); }
  LS_STATE.wsSelCells = []; LS_STATE.wsStartCell = null;
}
function wsHL() {
  document.querySelectorAll('.ws-cell:not(.found)').forEach(e => e.classList.remove('hl'));
  LS_STATE.wsSelCells.forEach(({ r, c }) => document.getElementById('wsc' + r + '_' + c)?.classList.add('hl'));
}

// ── DICTÉE ──
function renderDictee(ex, card, vbtn) {
  _ttsWord = ex.word || '';
  card.innerHTML = '';
  card.appendChild(el('div', 'ex-tag', ex.label));
  const wrap = el('div', 'dictee-wrap', '');
  const btn = makeTTSBtn();
  const inp = document.createElement('input');
  inp.className = 'dictee-inp'; inp.id = 'dictee-inp'; inp.type = 'text';
  inp.placeholder = 'Écris ce que tu entends...';
  inp.autocomplete = 'off'; inp.setAttribute('autocapitalize', 'none'); inp.spellcheck = false;
  inp.addEventListener('input', () => { vbtn.disabled = !inp.value.trim(); });
  const hint = el('div', 'dictee-hint', ex.hint || '');
  const ph = el('div', 'ex-ph', ex.phonetic || '');
  wrap.append(btn, inp, hint, ph);
  card.appendChild(wrap);
  speak(ex.word);
}

// ── DIALOGUE ──
function renderDialogue(ex, card, vbtn) {
  card.innerHTML = '';
  card.appendChild(el('div', 'ex-tag', ex.label));
  const dlg = el('div', 'dialogue', '');
  ex.lines.forEach((line, i) => {
    const row = el('div', 'dlg' + (line.side === 'right' ? ' r' : ''), '');
    const av = el('div', 'dlg-av', line.side === 'left' ? '🧑' : '👤');
    const bbl = el('div', 'dlg-bbl', '');
    if (line.blank) {
      const before = line.text.split('___')[0] || '';
      const after  = line.text.split('___')[1] || '';
      if (before) bbl.appendChild(document.createTextNode(before));
      const inp = document.createElement('input');
      inp.className = 'dlg-gap' + (line.side === 'left' ? ' light' : '');
      inp.id = 'dlg' + i; inp.type = 'text'; inp.placeholder = '?';
      inp.autocomplete = 'off'; inp.setAttribute('autocapitalize', 'none');
      inp.addEventListener('input', checkDlgInputs);
      bbl.appendChild(inp);
      if (after) bbl.appendChild(document.createTextNode(after));
    } else { bbl.textContent = line.text; }
    row.append(av, bbl); dlg.appendChild(row);
    if (line.hint) { const h = el('div', 'dlg-hint', '💡 ' + line.hint); dlg.appendChild(h); }
  });
  card.appendChild(dlg);
  const hasBlanks = ex.lines.some(l => l.blank);
  if (!hasBlanks) { vbtn.textContent = 'Continuer →'; vbtn.disabled = false; }
}
function checkDlgInputs() {
  const all = [...document.querySelectorAll('.dlg-gap')].every(i => i.value.trim().length > 0);
  document.getElementById('val-btn').disabled = !all;
}

// ── RECONSTRUCT ──
function renderReconstruct(ex, card, vbtn) {
  LS_STATE.reconPlaced = [];
  const allWords = ex.words;

  const preCount = Math.min(3, Math.max(1, Math.floor(allWords.length * 0.3)));
  const preWords = allWords.slice(0, preCount);
  const bankWords = allWords.slice(preCount);
  const shuffled = [...bankWords].sort(() => Math.random() - .5);

  preWords.forEach((w, i) => LS_STATE.reconPlaced.push({ idx: -1 - i, w, pre: true }));

  card.innerHTML = '';
  card.appendChild(el('div', 'ex-tag', ex.label));
  const instr = el('div', 'ex-instr', 'Continue la phrase dans le bon ordre');
  card.appendChild(instr);

  const zone = el('div', 'recon-zone', ''); zone.id = 'r-zone';
  preWords.forEach(w => {
    zone.appendChild(el('div', 'rchip pre', w));
  });
  if (bankWords.length > 0) {
    const ph = el('span', 'recon-ph', '+ tes mots ici'); ph.id = 'r-ph';
    zone.appendChild(ph);
  }
  card.appendChild(zone);

  const bank = el('div', 'bank', ''); bank.id = 'r-bank'; bank.style.marginTop = '8px';
  shuffled.forEach((w, i) => {
    const btn = document.createElement('button');
    btn.className = 'rchip bank'; btn.id = 'rch' + i; btn.textContent = w;
    btn.addEventListener('click', () => reconPlace(i, w));
    bank.appendChild(btn);
  });
  card.appendChild(bank);

  if (bankWords.length === 0) { vbtn.textContent = 'Continuer →'; vbtn.disabled = false; }
}

function reconPlace(idx, w) {
  const chip = document.getElementById('rch' + idx);
  if (!chip || chip.classList.contains('used')) return;
  chip.classList.add('used');
  LS_STATE.reconPlaced.push({ idx, w });
  const zone = document.getElementById('r-zone');
  const ph = document.getElementById('r-ph'); if (ph) ph.remove();
  const p = document.createElement('button'); p.className = 'rchip placed'; p.textContent = w;
  p.addEventListener('click', () => {
    LS_STATE.reconPlaced = LS_STATE.reconPlaced.filter(r => r.idx !== idx);
    chip.classList.remove('used'); p.remove();
    const userPlaced = LS_STATE.reconPlaced.filter(r => !r.pre);
    if (userPlaced.length === 0) {
      const sp = el('span', 'recon-ph', '+ tes mots ici'); sp.id = 'r-ph';
      document.getElementById('r-zone').appendChild(sp);
    }
    document.getElementById('val-btn').disabled = LS_STATE.reconPlaced.filter(r => !r.pre).length === 0;
  });
  zone.appendChild(p);
  document.getElementById('val-btn').disabled = false;
}

// ── STORY ──
function renderStory(ex, card, vbtn) {
  const SPEAKER_COLORS = ['#003DA5', '#1a7a4a', '#8020c0', '#b05010', '#c01020', '#106080'];
  _ttsWord = '';
  vbtn.textContent = 'Continuer →'; vbtn.disabled = false;
  card.innerHTML = '';
  card.appendChild(el('div', 'ex-tag', ex.label + ' · ' + ex.title));

  const narBox = el('div', 'story-narration', '');
  narBox.appendChild(el('div', 'story-narration-title', '📖 Récit'));
  narBox.appendChild(el('div', '', ex.narration));
  card.appendChild(narBox);

  card.appendChild(el('div', 'story-narration-title', '💬 Dialogue')).style.marginTop = '12px';

  const speakers = [...new Set(ex.dialogue.map(l => l.speaker))];
  const colorMap = {};
  speakers.forEach((s, i) => { colorMap[s] = SPEAKER_COLORS[i % SPEAKER_COLORS.length]; });
  const trMap = ex.translation || {};

  const dlg = el('div', 'story-dialogue', '');
  ex.dialogue.forEach((line, i) => {
    const isRight = line.side === 'right';
    const col = colorMap[line.speaker] || '#003DA5';
    const row = el('div', 'story-line' + (isRight ? ' r' : ''), '');
    const av = el('div', 'story-av', line.speaker.slice(0, 2).toUpperCase()); av.style.background = col;
    const bbl = el('div', 'story-bubble', ''); bbl.style.cssText = 'background:' + col + '15;border:1px solid ' + col + '35';
    const spk = el('div', 'story-spk-lbl', line.speaker); spk.style.color = col;
    const txt = el('div', 'story-txt', line.text);
    txt.addEventListener('click', () => speak(line.text));
    bbl.append(spk, txt);
    if (trMap[line.text]) {
      const tr = el('div', 'story-translation str-tr', '→ ' + trMap[line.text]); tr.style.display = 'none';
      bbl.appendChild(tr);
    }
    row.append(av, bbl); dlg.appendChild(row);
  });
  card.appendChild(dlg);

  const tog = document.createElement('button'); tog.className = 'story-toggle'; tog.id = 'str-tog'; tog.textContent = '🇫🇷 Voir traductions';
  tog.addEventListener('click', () => {
    const els = document.querySelectorAll('.str-tr');
    const showing = els.length > 0 && els[0].style.display !== 'none';
    els.forEach(e => e.style.display = showing ? 'none' : 'block');
    tog.textContent = showing ? '🇫🇷 Voir traductions' : '🙈 Masquer';
  });
  const togWrap = el('div', 'story-tog-wrap', ''); togWrap.appendChild(tog);
  card.appendChild(togWrap);
}

// ── RECAP INTRO ──
function renderRecapIntro(ex, card, vbtn) {
  vbtn.textContent = 'Commencer la révision →'; vbtn.disabled = false;
  card.innerHTML = '';
  const banner = el('div', 'recap-banner', '');
  banner.appendChild(el('div', 'recap-icon', '↩️'));
  const body = el('div', '', '');
  body.appendChild(el('div', 'recap-title', ex.title));
  body.appendChild(el('div', 'recap-sub', ex.sub + '\nMatching + QCM + Révision espacée'));
  banner.appendChild(body);
  card.appendChild(banner);
  card.appendChild(makeCultural({ title: '💡 Révision espacée', text: 'La méthode la plus efficace pour mémoriser à long terme. On revoit ce dont tu as besoin !' }));
}

// ═══════════════════════════════════════════
// VALIDATE
// ═══════════════════════════════════════════
function doValidate() {
  const ex = LS_STATE.exercises[LS_STATE.idx];
  if (['presentation', 'tts_repeat', 'recap_intro', 'story', 'wordsearch'].includes(ex.type) || LS_STATE.answered) {
    nextEx(); return;
  }
  if (ex.type === 'matching') { if (LS_STATE.answered) nextEx(); return; }

  let ok = false, ansText = '';
  LS_STATE.answered = true;

  if (ex.type === 'qcm') {
    ok = LS_STATE.selected === ex.correct; ansText = 'Réponse : ' + ex.choices[ex.correct];
    document.querySelectorAll('.choice').forEach((b, i) => {
      b.classList.remove('sel');
      if (i === ex.correct) { b.classList.add('ok'); document.getElementById('ci' + i).textContent = '✓'; }
      else if (i === LS_STATE.selected && !ok) { b.classList.add('ko'); document.getElementById('ci' + i).textContent = '✕'; }
    });
  } else if (ex.type === 'fill') {
    const inp = document.getElementById('fill-inp');
    ok = (inp?.value.trim().toLowerCase() === ex.blank.toLowerCase());
    ansText = 'Réponse : ' + ex.blank;
    if (inp) inp.className = 'fill-inp ' + (ok ? 'ok' : 'ko');
  } else if (ex.type === 'dictee') {
    const inp = document.getElementById('dictee-inp');
    const clean = s => s.toLowerCase().replace(/[\s.,!?]/g, '');
    ok = clean(inp?.value || '') === clean(ex.word);
    ansText = ok ? '' : 'Réponse : ' + ex.word;
    if (inp) inp.className = 'dictee-inp ' + (ok ? 'ok' : 'ko');
  } else if (ex.type === 'dialogue') {
    ok = true;
    ex.lines.forEach((line, i) => {
      if (!line.blank) return;
      const inp = document.getElementById('dlg' + i); if (!inp) return;
      const lineOk = inp.value.trim().toLowerCase() === line.blank.toLowerCase();
      inp.style.borderBottomColor = lineOk ? 'var(--ok-bd)' : 'var(--ko-bd)';
      inp.style.color = lineOk ? 'var(--ok)' : 'var(--ko)';
      if (!lineOk) { ok = false; ansText = 'Réponse : ' + line.blank; }
    });
  } else if (ex.type === 'reconstruct') {
    const placed = LS_STATE.reconPlaced.map(r => r.w).join(' ');
    ok = placed === ex.sentence; ansText = ok ? '' : 'Ordre : ' + ex.sentence;
    document.querySelectorAll('.rchip.placed').forEach(c => { c.style.background = ok ? 'var(--ok-bd)' : 'var(--ko-bd)'; });
  } else { nextEx(); return; }

  if (ok) {
    LS_STATE.correctCount++;
    let toRead = '';
    if (ex.type === 'qcm')         toRead = ex.choices[ex.correct];
    else if (ex.type === 'fill')   toRead = ex.blank;
    else if (ex.type === 'dictee') toRead = ex.word;
    else toRead = _ttsWord || '';
    showFB(true, 'Correct !', '');
    if (toRead) speak(toRead);
  } else {
    LS_STATE.hearts = Math.max(0, LS_STATE.hearts - 1); updateHearts();
    showFB(false, 'Pas tout à fait…', ansText);
    showCorrection(ansText);
    if (LS_STATE.hearts <= 0) {
      const vb = document.getElementById('val-btn');
      vb.textContent = 'Fin de la leçon →';
      vb.className = 'val-btn ko';
      vb.onclick = () => { hideFB(); showResult(); };
      return;
    }
    return;
  }

  const vb = document.getElementById('val-btn');
  vb.textContent = 'Continuer →'; vb.disabled = false; vb.className = 'val-btn ok';
}

function nextEx() { LS_STATE.idx++; if (LS_STATE.idx >= LS_STATE.exercises.length) showResult(); else renderEx(); }

// ═══════════════════════════════════════════
// FEEDBACK / HEARTS / RESULT
// ═══════════════════════════════════════════
let _correctionTarget = '';
function showCorrection(ansText) {
  const correct = ansText.replace(/^Réponse\s*:\s*/i, '').trim();
  _correctionTarget = correct.toLowerCase().replace(/[\s.,!?]/g, '');
  const bar = document.getElementById('fb-bar');
  bar.className = 'fb-bar ko';
  bar.innerHTML = '';

  const icon = document.createElement('span'); icon.textContent = '✕'; icon.style.cssText = 'font-size:16px;flex-shrink:0;color:var(--ko)';
  const wrap = document.createElement('div'); wrap.style.flex = '1';
  const msg = document.createElement('div'); msg.textContent = 'Retape la bonne réponse :'; msg.style.cssText = 'font-size:12px;color:var(--ko);margin-bottom:5px';
  const inp = document.createElement('input'); inp.id = 'correction-inp';
  inp.style.cssText = 'width:100%;padding:7px 10px;border:2px solid var(--ko-bd);border-radius:8px;font-size:15px;font-family:inherit;outline:none;background:white;color:var(--ink)';
  inp.placeholder = correct; inp.autocomplete = 'off'; inp.setAttribute('autocapitalize', 'none'); inp.spellcheck = false;
  inp.addEventListener('input', () => {
    const typed = inp.value.toLowerCase().replace(/[\s.,!?]/g, '');
    if (typed === _correctionTarget) {
      inp.style.borderColor = 'var(--ok-bd)'; inp.style.background = 'var(--ok-bg)';
      const vb = document.getElementById('val-btn');
      vb.textContent = 'Continuer →'; vb.disabled = false; vb.className = 'val-btn ko';
    } else {
      inp.style.borderColor = 'var(--ko-bd)'; inp.style.background = 'white';
    }
  });
  inp.addEventListener('keydown', e => { if (e.key === 'Enter') { const vb = document.getElementById('val-btn'); if (!vb.disabled) vb.click(); } });
  wrap.append(msg, inp);
  bar.append(icon, wrap);
  setTimeout(() => inp.focus(), 80);
  speak(correct);
}

function showFB(ok, msg, ans) {
  const bar = document.getElementById('fb-bar');
  bar.className = 'fb-bar ' + (ok ? 'ok' : 'ko');
  bar.innerHTML = '';
  const icon = document.createElement('span'); icon.textContent = ok ? '✓' : '✕'; icon.style.cssText = 'font-size:16px;flex-shrink:0;color:' + (ok ? 'var(--ok)' : 'var(--ko)');
  const body = document.createElement('div'); body.style.flex = '1';
  const m = document.createElement('div'); m.textContent = msg;
  const a = document.createElement('div'); a.style.cssText = 'font-size:11.5px;opacity:.75;margin-top:1px'; a.textContent = ans;
  body.append(m, a); bar.append(icon, body);
}
function hideFB() { document.getElementById('fb-bar').className = 'fb-bar hide'; }
function updateHearts() { document.getElementById('hearts').innerHTML = [0,1,2,3,4].map(i => i < LS_STATE.hearts ? '❤️' : '🖤').join(''); }

function showResult() {
  const prog = LS.prog; const st = LS.stats;
  const lv = getLevels().find(l => l.id === APP.lvId);
  const les = lv?.lessons.find(l => l.id === APP.lessonId);
  const xp = les?.xp || 50; const words = les?.words || 0;
  st.xp += xp; st.lessons += 1; st.words += words; LS.saveS(st);
  prog[APP.lessonId] = { date: new Date().toISOString(), xp }; LS.saveP(prog);
  const gradedEx = LS_STATE.exercises.filter(e => !['presentation', 'tts_repeat', 'recap_intro', 'story'].includes(e.type));
  const acc = gradedEx.length > 0 ? Math.round((LS_STATE.correctCount / gradedEx.length) * 100) : 100;
  document.getElementById('res-em').textContent = LS_STATE.hearts === 3 ? '🏆' : LS_STATE.hearts >= 1 ? '⭐' : '💪';
  document.getElementById('res-title').textContent = 'Leçon terminée !';
  document.getElementById('res-sub').textContent = acc === 100 ? 'Parfait !' : acc >= 70 ? 'Bien joué !' : 'Continue !';
  document.getElementById('rs-xp').textContent = xp;
  document.getElementById('rs-acc').textContent = (isNaN(acc) ? 100 : acc) + '%';
  document.getElementById('rs-wds').textContent = words;
  document.getElementById('res-ov').classList.add('show');
}

function finishLesson() {
  document.getElementById('res-ov').classList.remove('show');
  startSpeedGame(APP.lvId, APP.lessonId);
}
function tryClose() {
  const ov = document.createElement('div'); ov.className = 'modal-ov';
  const box = document.createElement('div'); box.className = 'modal-box';
  box.innerHTML = '<div style="font-size:26px;margin-bottom:10px">⚠️</div>'
    + '<div style="font-family:\'Lora\',serif;font-size:17px;font-weight:600;color:#10203a;margin-bottom:6px">Quitter la leçon ?</div>'
    + '<div style="font-size:13px;color:#6a8aaa;margin-bottom:18px">Ta progression sera perdue.</div>'
    + '<div class="modal-actions">'
    + '<button id="qc-cancel" class="modal-btn modal-btn--cancel">Continuer</button>'
    + '<button id="qc-quit" class="modal-btn modal-btn--danger">Quitter</button>'
    + '</div>';
  ov.appendChild(box);
  document.body.appendChild(ov);
  document.getElementById('qc-cancel').onclick = () => ov.remove();
  document.getElementById('qc-quit').onclick = () => {
    ov.remove();
    RPG.stop();
    if (APP.lvId) openLevel(APP.lvId); else goHome();
  };
}

// ═══════════════════════════════════════════
// DOM HELPERS
// ═══════════════════════════════════════════
function playAlphabetTone() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const master = ctx.createGain(); master.gain.value = 0.25;
    master.connect(ctx.destination);
    const notes = [523.3, 587.3, 659.3, 784, 880];
    notes.forEach((freq, i) => {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.connect(g); g.connect(master);
      o.type = 'sine'; o.frequency.value = freq;
      const t = ctx.currentTime + i * 0.13;
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(0.6, t + 0.04);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
      o.start(t); o.stop(t + 0.38);
    });
    setTimeout(() => { try { ctx.close(); } catch {} }, 2000);
  } catch {}
}

function makeHistoire(h) {
  const d = el('div', 'histoire-card', '');
  const header = el('div', 'histoire-header', '');
  const icon = el('span', 'card-icon', '🏛️');
  const title = el('span', 'histoire-title', 'Slovénie — ' + (h.title || 'Histoire'));
  header.append(icon, title);
  const body = el('div', 'histoire-body', h.text);
  d.append(header, body);
  return d;
}

function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text) e.textContent = text;
  return e;
}
function makeTTSBtn() {
  const btn = document.createElement('button'); btn.className = 'tts-btn';
  btn.setAttribute('aria-label', 'Écouter');
  btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px;flex-shrink:0"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg> Écouter';
  btn.addEventListener('click', speakCurrent); return btn;
}
function makeCultural(c) {
  const d = el('div', 'cultural', '');
  const icon = el('span', 'card-icon', 'ℹ️');
  const body = el('div', 'cul-body', '');
  body.appendChild(el('div', 'cul-title', c.title));
  body.appendChild(el('div', '', c.text));
  d.append(icon, body); return d;
}
