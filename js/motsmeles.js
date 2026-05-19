// ═══════════════════════════════════════════
// MOTS MÊLÉS — Cherche les mots slovènes
// 8 mots cachés · timer 3min · 55 XP
// ═══════════════════════════════════════════

const MM_ROWS = 11, MM_COLS = 8;
const MM_XP = 55;
const MM_TIME = 180;
// Slovene-weighted alphabet for filler cells
const MM_ABC = 'AABCDEEEGHIIJKLMMNNOOPRRSSTTUVVZŠŽČ';

const MM = {
  grid: [], placed: [], found: new Set(),
  startCell: null, timer: null, timeLeft: 0, active: false,
};

// ── Extract single-word vocabulary from all lessons ──
function getMmVocab() {
  const seen = new Map();
  getLevels().forEach(lv => {
    lv.lessons.forEach(les => {
      (EX[les.id] || []).forEach(ex => {
        if (ex.type === 'matching' && ex.pairs) {
          ex.pairs.forEach(p => {
            const w = (p.sl || '').replace(/[^a-zA-ZšŠžŽčČ]/g, '').toUpperCase();
            const fr = (p.fr || '').split('(')[0].split('/')[0].trim();
            if (w.length >= 4 && w.length <= 8 && fr && !seen.has(w))
              seen.set(w, fr);
          });
        }
      });
    });
  });
  return [...seen.entries()].map(([word, clue]) => ({ word, clue }));
}

// ── Place words in grid ──
function buildMmGrid(vocab) {
  const grid = Array.from({ length: MM_ROWS }, () => Array(MM_COLS).fill(''));
  const placed = [];
  const words = [...vocab].sort(() => Math.random() - .5).slice(0, 8);

  for (const item of words) {
    const w = item.word;
    let ok = false;
    for (let attempt = 0; attempt < 250 && !ok; attempt++) {
      const dir = Math.random() < 0.5 ? 'H' : 'V';
      const maxR = dir === 'V' ? MM_ROWS - w.length : MM_ROWS - 1;
      const maxC = dir === 'H' ? MM_COLS - w.length : MM_COLS - 1;
      if (maxR < 0 || maxC < 0) continue;
      const r = Math.floor(Math.random() * (maxR + 1));
      const c = Math.floor(Math.random() * (maxC + 1));
      let fits = true;
      for (let i = 0; i < w.length; i++) {
        const rr = dir === 'V' ? r + i : r, cc = dir === 'H' ? c + i : c;
        if (grid[rr][cc] && grid[rr][cc] !== w[i]) { fits = false; break; }
      }
      if (fits) {
        for (let i = 0; i < w.length; i++) {
          const rr = dir === 'V' ? r + i : r, cc = dir === 'H' ? c + i : c;
          grid[rr][cc] = w[i];
        }
        placed.push({ ...item, r, c, dir, found: false });
        ok = true;
      }
    }
  }

  // Fill remaining with random filler
  for (let r = 0; r < MM_ROWS; r++)
    for (let c = 0; c < MM_COLS; c++)
      if (!grid[r][c]) grid[r][c] = MM_ABC[Math.floor(Math.random() * MM_ABC.length)];

  return { grid, placed };
}

// ── Start game ──
function startMotsMeles() {
  const vocab = getMmVocab();
  if (vocab.length < 6) { toast('Pas assez de vocabulaire disponible'); return; }
  const { grid, placed } = buildMmGrid(vocab);
  MM.grid = grid; MM.placed = placed; MM.found = new Set();
  MM.startCell = null; MM.timeLeft = MM_TIME; MM.active = true;
  nav('scr-motsmeles', 'fwd');
  mmRenderGrid();
  mmRenderClues();
  mmTimerUpdate();
  if (MM.timer) clearInterval(MM.timer);
  MM.timer = setInterval(() => {
    MM.timeLeft--;
    mmTimerUpdate();
    if (MM.timeLeft <= 0) { clearInterval(MM.timer); MM.active = false; mmFinish(); }
  }, 1000);
}

// ── Render grid ──
function mmRenderGrid() {
  const gridEl = document.getElementById('mm-grid');
  gridEl.innerHTML = '';

  for (let r = 0; r < MM_ROWS; r++) {
    for (let c = 0; c < MM_COLS; c++) {
      const cell = document.createElement('div');
      cell.className = 'mm-cell';
      cell.textContent = MM.grid[r][c];
      cell.dataset.r = r; cell.dataset.c = c;
      gridEl.appendChild(cell);
    }
  }

  // Pointer / touch selection
  let dragging = false;

  const getCell = (x, y) => {
    const el = document.elementFromPoint(x, y);
    return el && el.closest('.mm-cell');
  };

  gridEl.addEventListener('pointerdown', e => {
    e.preventDefault();
    if (!MM.active) return;
    dragging = true;
    gridEl.setPointerCapture(e.pointerId);
    const cell = getCell(e.clientX, e.clientY);
    if (!cell) return;
    MM.startCell = { r: +cell.dataset.r, c: +cell.dataset.c };
    mmHighlight(MM.startCell, MM.startCell);
  });

  gridEl.addEventListener('pointermove', e => {
    if (!dragging || !MM.startCell) return;
    const cell = getCell(e.clientX, e.clientY);
    if (!cell) return;
    mmHighlight(MM.startCell, { r: +cell.dataset.r, c: +cell.dataset.c });
  });

  gridEl.addEventListener('pointerup', e => {
    if (!dragging || !MM.startCell) return;
    dragging = false;
    const cell = getCell(e.clientX, e.clientY);
    const end = cell ? { r: +cell.dataset.r, c: +cell.dataset.c } : MM.startCell;
    mmCheckWord(MM.startCell, end);
    MM.startCell = null;
    mmClearSel();
  });
}

// ── Selection helpers ──
function mmLine(start, end) {
  const cells = [];
  if (start.r === end.r) {
    const [a, b] = start.c <= end.c ? [start.c, end.c] : [end.c, start.c];
    for (let c = a; c <= b; c++) cells.push({ r: start.r, c });
  } else if (start.c === end.c) {
    const [a, b] = start.r <= end.r ? [start.r, end.r] : [end.r, start.r];
    for (let r = a; r <= b; r++) cells.push({ r, c: start.c });
  }
  return cells;
}

function mmHighlight(start, end) {
  document.querySelectorAll('.mm-cell.mm-sel').forEach(c => c.classList.remove('mm-sel'));
  mmLine(start, end).forEach(({ r, c }) => {
    const el = document.querySelector(`.mm-cell[data-r="${r}"][data-c="${c}"]`);
    if (el && !el.classList.contains('mm-found')) el.classList.add('mm-sel');
  });
}

function mmClearSel() {
  document.querySelectorAll('.mm-cell.mm-sel').forEach(c => c.classList.remove('mm-sel'));
}

// ── Check word ──
function mmCheckWord(start, end) {
  const cells = mmLine(start, end);
  if (cells.length < 3) return;
  const fwd = cells.map(({ r, c }) => MM.grid[r][c]).join('');
  const rev = fwd.split('').reverse().join('');

  for (const item of MM.placed) {
    if (item.found) continue;
    if (item.word === fwd || item.word === rev) {
      item.found = true;
      MM.found.add(item.word);
      cells.forEach(({ r, c }) => {
        const el = document.querySelector(`.mm-cell[data-r="${r}"][data-c="${c}"]`);
        if (el) { el.classList.remove('mm-sel'); el.classList.add('mm-found'); }
      });
      if (typeof speak === 'function') speak(item.word.charAt(0) + item.word.slice(1).toLowerCase());
      mmRenderClues();
      document.getElementById('mm-found-count').textContent = MM.found.size;
      if (MM.found.size === MM.placed.length) {
        clearInterval(MM.timer); MM.active = false;
        setTimeout(mmFinish, 700);
      }
      return;
    }
  }
}

// ── Clues ──
function mmRenderClues() {
  const list = document.getElementById('mm-clues');
  list.innerHTML = '';
  MM.placed.forEach(item => {
    const div = document.createElement('div');
    div.className = 'mm-clue' + (item.found ? ' mm-clue-found' : '');
    div.innerHTML = item.found
      ? `<span class="mm-check">✓</span> <b>${item.word.charAt(0) + item.word.slice(1).toLowerCase()}</b> <span class="mm-clue-fr">— ${item.clue}</span>`
      : `<span class="mm-dot">·</span> <span class="mm-clue-fr">${item.clue}</span>`;
    list.appendChild(div);
  });
}

// ── Timer ──
function mmTimerUpdate() {
  const m = Math.floor(MM.timeLeft / 60);
  const s = String(MM.timeLeft % 60).padStart(2, '0');
  document.getElementById('mm-timer').textContent = `${m}:${s}`;
  const pct = MM.timeLeft / MM_TIME * 100;
  const bar = document.getElementById('mm-timer-bar');
  if (bar) {
    bar.style.width = pct + '%';
    bar.style.background = pct > 50 ? '#52b788' : pct > 25 ? '#E8A832' : '#E24B4A';
  }
}

// ── Finish ──
function mmFinish() {
  if (MM.timer) clearInterval(MM.timer);
  const pct = MM.placed.length ? MM.found.size / MM.placed.length : 0;
  const xp = Math.round(MM_XP * pct);
  if (xp > 0) { const s = LS.stats; s.xp += xp; LS.saveS(s); }
  const perfect = MM.found.size === MM.placed.length;
  document.getElementById('mm-ov-em').textContent    = perfect ? '🔤' : (pct >= 0.5 ? '📝' : '🔄');
  document.getElementById('mm-ov-title').textContent = perfect ? 'Grille complète !' : `${MM.found.size} / ${MM.placed.length} mots !`;
  document.getElementById('mm-ov-xp').textContent    = '+' + xp + ' XP';
  document.getElementById('mm-ov-sub').textContent   = perfect
    ? 'Bravo ! Tu as trouvé tous les mots slovènes !'
    : (MM.timeLeft <= 0 ? 'Temps écoulé ! Rejoue pour tout trouver.' : 'Rejoue pour maîtriser ce vocabulaire !');
  document.getElementById('mm-ov').classList.add('show');
}
