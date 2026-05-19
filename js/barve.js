// ═══════════════════════════════════════════
// BARVE — Jeu des couleurs slovènes
// 16 rounds : 8 couleur→mot · 8 mot→couleur
// ═══════════════════════════════════════════

const BARVE_DATA = [
  { sl:'Rdeča',     fr:'Rouge',        hex:'#DC2626' },
  { sl:'Modra',     fr:'Bleue',        hex:'#2563EB' },
  { sl:'Zelena',    fr:'Verte',        hex:'#16A34A' },
  { sl:'Rumena',    fr:'Jaune',        hex:'#CA8A04' },
  { sl:'Oranžna',   fr:'Orange',       hex:'#EA580C' },
  { sl:'Rjava',     fr:'Marron',       hex:'#92400E' },
  { sl:'Bela',      fr:'Blanche',      hex:'#E2E8F0', light:true },
  { sl:'Črna',      fr:'Noire',        hex:'#111827' },
  { sl:'Siva',      fr:'Grise',        hex:'#64748B' },
  { sl:'Vijolična', fr:'Violette',     hex:'#7C3AED' },
  { sl:'Rožnata',   fr:'Rose',         hex:'#DB2777' },
  { sl:'Zlata',     fr:'Dorée',        hex:'#D97706' },
];

const BV = { round:0, score:0, qs:[], answered:false };
const BV_XP = 35;

function startBarve() {
  const p1 = [...BARVE_DATA].sort(() => Math.random() - .5).slice(0, 8);
  const p2 = [...BARVE_DATA].sort(() => Math.random() - .5).slice(0, 8);
  BV.qs = [
    ...p1.map(c => ({ phase:0, target:c })),
    ...p2.map(c => ({ phase:1, target:c })),
  ];
  BV.round = 0; BV.score = 0; BV.answered = false;
  nav('scr-barve', 'fwd');
  barveRender();
}

function barveRender() {
  if (BV.round >= BV.qs.length) { barveFinish(); return; }
  BV.answered = false;
  const q = BV.qs[BV.round];
  const total = BV.qs.length;

  document.getElementById('bv-counter').textContent = `${BV.round + 1} / ${total}`;
  document.getElementById('bv-score').textContent   = '⭐ ' + BV.score;
  document.getElementById('bv-prog').style.width    = (BV.round / total * 100) + '%';

  const display = document.getElementById('bv-display');
  const choices = document.getElementById('bv-choices');
  display.innerHTML = ''; choices.innerHTML = '';

  if (q.phase === 0) {
    // Voir couleur + mot français → choisir le mot slovène
    document.getElementById('bv-instr').textContent = 'Comment dit-on en slovène ?';
    const circle = document.createElement('div');
    circle.className = 'bv-circle' + (q.target.light ? ' bv-circle-light' : '');
    circle.style.background = q.target.hex;
    display.appendChild(circle);
    const lbl = document.createElement('div');
    lbl.className = 'bv-fr-lbl'; lbl.textContent = q.target.fr;
    display.appendChild(lbl);

    bvOpts4(q.target).forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'bv-word-btn'; btn.textContent = opt.sl;
      btn.addEventListener('click', () => bvAnswerWord(btn, opt.sl === q.target.sl));
      choices.appendChild(btn);
    });
  } else {
    // Voir le mot slovène → choisir la bonne couleur
    document.getElementById('bv-instr').textContent = 'Quelle est cette couleur ?';
    const word = document.createElement('div');
    word.className = 'bv-sl-word'; word.textContent = q.target.sl;
    display.appendChild(word);
    const hint = document.createElement('div');
    hint.className = 'bv-sl-hint'; hint.textContent = 'Touche la bonne teinte ↓';
    display.appendChild(hint);

    const grid = document.createElement('div');
    grid.className = 'bv-swatch-grid';
    bvOpts6(q.target).forEach(opt => {
      const sw = document.createElement('div');
      sw.className = 'bv-swatch' + (opt.light ? ' bv-swatch-light' : '');
      sw.style.background = opt.hex;
      sw.dataset.sl = opt.sl;
      sw.addEventListener('click', () => bvAnswerSwatch(sw, opt.sl === q.target.sl));
      grid.appendChild(sw);
    });
    choices.appendChild(grid);
  }

  display.classList.remove('bv-anim'); void display.offsetWidth; display.classList.add('bv-anim');
}

function bvOpts4(target) {
  const others = BARVE_DATA.filter(c => c.sl !== target.sl).sort(() => Math.random() - .5).slice(0, 3);
  return [target, ...others].sort(() => Math.random() - .5);
}

function bvOpts6(target) {
  const others = BARVE_DATA.filter(c => c.sl !== target.sl).sort(() => Math.random() - .5).slice(0, 5);
  return [target, ...others].sort(() => Math.random() - .5);
}

function bvAnswerWord(btn, correct) {
  if (BV.answered) return;
  BV.answered = true;
  btn.classList.add(correct ? 'bv-correct' : 'bv-wrong');
  if (correct) {
    BV.score++;
  } else {
    document.querySelectorAll('.bv-word-btn').forEach(b => {
      if (b.textContent === BV.qs[BV.round].target.sl) b.classList.add('bv-correct');
    });
  }
  document.querySelectorAll('.bv-word-btn').forEach(b => b.disabled = true);
  setTimeout(() => { BV.round++; barveRender(); }, correct ? 750 : 1400);
}

function bvAnswerSwatch(sw, correct) {
  if (BV.answered) return;
  BV.answered = true;
  sw.classList.add(correct ? 'bv-sw-correct' : 'bv-sw-wrong');
  if (correct) {
    BV.score++;
  } else {
    document.querySelectorAll('.bv-swatch').forEach(s => {
      if (s.dataset.sl === BV.qs[BV.round].target.sl) s.classList.add('bv-sw-correct');
    });
  }
  document.querySelectorAll('.bv-swatch').forEach(s => s.style.pointerEvents = 'none');
  setTimeout(() => { BV.round++; barveRender(); }, correct ? 750 : 1400);
}

function barveFinish() {
  const total = BV.qs.length;
  const xp    = Math.round(BV_XP * BV.score / total);
  if (xp > 0) { const s = LS.stats; s.xp += xp; LS.saveS(s); }
  const perfect = BV.score === total;
  document.getElementById('bv-ov-em').textContent    = perfect ? '🎨' : (BV.score >= 12 ? '✅' : '🔄');
  document.getElementById('bv-ov-title').textContent = perfect ? 'Maître des barve !' : `${BV.score} / ${total}`;
  document.getElementById('bv-ov-xp').textContent    = '+' + xp + ' XP';
  document.getElementById('bv-ov-sub').textContent   = perfect
    ? 'Tu maîtrises toutes les couleurs slovènes !'
    : 'Rejoue pour mémoriser toutes les barve !';
  document.getElementById('bv-ov').classList.add('show');
}
