// ═══════════════════════════════════════════
// TRŽNICA — Le marché slovène
// Vois le mot français → retrouve l'emoji/nom slovène
// 20 rounds · timer 9s · 7 vies 🏔️ · 50 XP
// ═══════════════════════════════════════════

const TZ_ITEMS = [
  // Sadje (Fruits)
  { sl:'Jabolko',    fr:'Pomme',           em:'🍎' },
  { sl:'Banana',     fr:'Banane',           em:'🍌' },
  { sl:'Jagoda',     fr:'Fraise',           em:'🍓' },
  { sl:'Limona',     fr:'Citron',           em:'🍋' },
  { sl:'Pomaranča',  fr:'Orange',           em:'🍊' },
  { sl:'Grozdje',    fr:'Raisin',           em:'🍇' },
  { sl:'Breskev',    fr:'Pêche',            em:'🍑' },
  { sl:'Hruška',     fr:'Poire',            em:'🍐' },
  // Zelenjava (Légumes)
  { sl:'Krompir',    fr:'Pomme de terre',   em:'🥔' },
  { sl:'Paradižnik', fr:'Tomate',           em:'🍅' },
  { sl:'Korenje',    fr:'Carotte',          em:'🥕' },
  { sl:'Čebula',     fr:'Oignon',           em:'🧅' },
  { sl:'Česen',      fr:'Ail',              em:'🧄' },
  { sl:'Solata',     fr:'Salade',           em:'🥬' },
  { sl:'Bučka',      fr:'Courgette',        em:'🥒' },
  { sl:'Paprika',    fr:'Poivron',          em:'🫑' },
  // Pijače (Boissons)
  { sl:'Voda',       fr:'Eau',              em:'💧' },
  { sl:'Kava',       fr:'Café',             em:'☕' },
  { sl:'Čaj',        fr:'Thé',              em:'🍵' },
  { sl:'Sok',        fr:'Jus de fruit',     em:'🧃' },
  { sl:'Vino',       fr:'Vin',              em:'🍷' },
  { sl:'Pivo',       fr:'Bière',            em:'🍺' },
  // Mlečni & pekarna (Laitiers & boulangerie)
  { sl:'Mleko',      fr:'Lait',             em:'🥛' },
  { sl:'Sir',        fr:'Fromage',          em:'🧀' },
  { sl:'Maslo',      fr:'Beurre',           em:'🧈' },
  { sl:'Jogurt',     fr:'Yaourt',           em:'🫙' },
  { sl:'Kruh',       fr:'Pain',             em:'🍞' },
  { sl:'Jajca',      fr:'Œufs',             em:'🥚' },
  // Meso & ostalo (Viandes & divers)
  { sl:'Piščanec',   fr:'Poulet',           em:'🍗' },
  { sl:'Riba',       fr:'Poisson',          em:'🐟' },
  { sl:'Med',        fr:'Miel',             em:'🍯' },
  { sl:'Sladoled',   fr:'Glace',            em:'🍦' },
  { sl:'Torta',      fr:'Gâteau',           em:'🎂' },
  { sl:'Čokolada',   fr:'Chocolat',         em:'🍫' },
  { sl:'Meso',       fr:'Viande',           em:'🥩' },
];

const TZ_ROUNDS = 20;
const TZ_TIME   = 9;
const TZ_XP     = 50;

const TZ_MAX_LIVES = 7;
const TZ = { round:0, score:0, lives:TZ_MAX_LIVES, qs:[], timer:null, timeLeft:0, answered:false };

function startTrznica() {
  const pool = [...TZ_ITEMS].sort(() => Math.random() - .5).slice(0, TZ_ROUNDS);
  TZ.qs = pool.map(item => {
    const others = TZ_ITEMS.filter(i => i.sl !== item.sl).sort(() => Math.random() - .5).slice(0, 5);
    return { target:item, opts:[item, ...others].sort(() => Math.random() - .5) };
  });
  TZ.round = 0; TZ.score = 0; TZ.lives = TZ_MAX_LIVES; TZ.answered = false;
  nav('scr-trznica', 'fwd');
  trznicaRender();
}

function trznicaRender() {
  if (TZ.lives <= 0 || TZ.round >= TZ.qs.length) { trznicaFinish(); return; }
  TZ.answered = false;
  if (TZ.timer) clearInterval(TZ.timer);

  const q = TZ.qs[TZ.round];

  document.getElementById('tz-round').textContent = `${TZ.round + 1} / ${TZ_ROUNDS}`;
  document.getElementById('tz-prog').style.width  = (TZ.round / TZ_ROUNDS * 100) + '%';
  trznicaHearts();

  const qEl = document.getElementById('tz-question');
  qEl.textContent = q.target.fr;
  qEl.classList.remove('tz-q-anim'); void qEl.offsetWidth; qEl.classList.add('tz-q-anim');
  document.getElementById('tz-speak-btn').onclick = () => { if (typeof speak === 'function') speak(q.target.sl); };
  if (typeof speak === 'function') speak(q.target.sl);

  const grid = document.getElementById('tz-grid');
  grid.innerHTML = '';
  q.opts.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'tz-item'; btn.dataset.sl = opt.sl;
    btn.innerHTML = `<span class="tz-em">${opt.em}</span><span class="tz-item-lbl">${opt.sl}</span>`;
    btn.addEventListener('click', () => tzAnswer(btn, opt.sl === q.target.sl));
    grid.appendChild(btn);
  });

  // Timer
  TZ.timeLeft = TZ_TIME;
  trznicaTimer();
  TZ.timer = setInterval(() => {
    TZ.timeLeft--;
    trznicaTimer();
    if (TZ.timeLeft <= 0) { clearInterval(TZ.timer); if (!TZ.answered) tzTimeout(); }
  }, 1000);
}

function trznicaTimer() {
  const pct = (TZ.timeLeft / TZ_TIME) * 100;
  const bar = document.getElementById('tz-timer-bar');
  bar.style.width = pct + '%';
  bar.style.background = TZ.timeLeft <= 3 ? '#E24B4A' : TZ.timeLeft <= 5 ? '#E8A832' : '#52b788';
}

function trznicaHearts() {
  document.getElementById('tz-lives').innerHTML =
    '🏔️'.repeat(TZ.lives) + '<span style="opacity:.2">🏔️</span>'.repeat(TZ_MAX_LIVES - TZ.lives);
}

function tzAnswer(btn, correct) {
  if (TZ.answered) return;
  TZ.answered = true;
  clearInterval(TZ.timer);
  document.querySelectorAll('.tz-item').forEach(b => b.disabled = true);
  btn.classList.add(correct ? 'tz-correct' : 'tz-wrong');
  if (correct) {
    TZ.score++;
  } else {
    TZ.lives--;
    document.querySelectorAll('.tz-item').forEach(b => {
      if (b.dataset.sl === TZ.qs[TZ.round].target.sl) b.classList.add('tz-correct');
    });
  }
  trznicaHearts();
  setTimeout(() => { TZ.round++; trznicaRender(); }, correct ? 700 : 1400);
}

function tzTimeout() {
  TZ.answered = true; TZ.lives--;
  document.querySelectorAll('.tz-item').forEach(b => {
    b.disabled = true;
    if (b.dataset.sl === TZ.qs[TZ.round].target.sl) b.classList.add('tz-correct');
  });
  trznicaHearts();
  setTimeout(() => { TZ.round++; trznicaRender(); }, 1400);
}

function trznicaFinish() {
  if (TZ.timer) clearInterval(TZ.timer);
  const won = TZ.lives > 0;
  const xp  = won ? Math.round(TZ_XP * TZ.score / TZ_ROUNDS) : 0;
  if (xp > 0) { const s = LS.stats; s.xp += xp; LS.saveS(s); }
  document.getElementById('tz-ov-em').textContent    = won ? (TZ.score >= 18 ? '🛒' : '🌽') : '💸';
  document.getElementById('tz-ov-title').textContent = won
    ? `${TZ.score} / ${TZ_ROUNDS} bons !`
    : 'Marché fermé !';
  document.getElementById('tz-ov-xp').textContent    = '+' + xp + ' XP';
  document.getElementById('tz-ov-sub').textContent   = won
    ? (TZ.score === TZ_ROUNDS ? 'Parfait ! Tu connais tout le vocabulaire !' : 'Rejoue pour maîtriser la tržnica !')
    : 'Trop d\'articles manqués. Reviens demain !';
  document.getElementById('tz-ov').classList.add('show');
}
