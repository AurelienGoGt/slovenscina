// ═══════════════════════════════════════════
// COMPLÈTE LA CONVERSATION
// Vrais dialogues des leçons · 10 rounds · 60 XP
// Écoute la phrase → complète le mot manquant
// ═══════════════════════════════════════════

const CQ_ROUNDS = 10, CQ_XP = 60;

// Mots grammaticaux slovènes (à ne pas masquer)
const CQ_STOP = new Set([
  'je','in','na','za','ali','sem','si','smo','so','da','pa','ne','ni',
  'to','ta','te','kaj','kdo','kdaj','kje','kako','ki','ker','bi','bo',
  'se','ga','jo','mu','mi','ti','me','vas','jim','jih','med','pri',
  'po','do','iz','od','z','s','v','k','a','in','h','nad','pod','brez',
  'ima','imam','imaš','imamo','imate','imajo','imam','jaz','vi','oni',
  'an','au','de','du','le','la','les','en','et','je','tu','il','ils',
]);

const CQ = {
  pool: [], round: 0, score: 0,
  answered: false, active: false,
};

// ── Extract dialogue lines from all lessons ──
function getCqPool() {
  const lines = [], vocab = [];

  getLevels().forEach(lv => {
    lv.lessons.forEach(les => {
      (EX[les.id] || []).forEach(ex => {
        if (ex.type !== 'story' || !ex.dialogue || !ex.translation) return;
        ex.dialogue.forEach(d => {
          const slText = d.text;
          const frText = ex.translation[slText];
          if (!frText || slText.length < 8) return;

          // Tokenize: split into word-tokens and non-word-tokens
          const tokens = slText.match(/[a-zA-ZšŠžŽčČ]+|[^a-zA-ZšŠžŽčČ]+/g) || [];

          // Find blankable token indices
          const blankable = [];
          tokens.forEach((tok, i) => {
            if (/^[a-zA-ZšŠžŽčČ]{4,}$/.test(tok) && !CQ_STOP.has(tok.toLowerCase()))
              blankable.push(i);
          });
          if (!blankable.length) return;

          const blankIdx = blankable[Math.floor(Math.random() * blankable.length)];
          const blank = tokens[blankIdx];
          vocab.push(blank);

          lines.push({
            tokens, blankIdx, blank, frText,
            speaker: d.speaker || '',
            lessonTitle: les.title || '',
          });
        });
      });
    });
  });

  return { lines, vocab };
}

function startConvoquiz() {
  const { lines, vocab } = getCqPool();
  if (lines.length < 6) { toast('Complète d\'abord quelques leçons !'); return; }

  const shuffled = [...lines].sort(() => Math.random() - .5).slice(0, CQ_ROUNDS);
  CQ.pool = shuffled.map(line => {
    // Build 3 options: correct + 2 distractors of similar length
    const dist = vocab
      .filter(w => w.toUpperCase() !== line.blank.toUpperCase() && Math.abs(w.length - line.blank.length) <= 2)
      .sort(() => Math.random() - .5)
      .slice(0, 2);
    const opts = [line.blank, ...dist].sort(() => Math.random() - .5);
    return { ...line, opts };
  });

  CQ.round = 0; CQ.score = 0; CQ.answered = false; CQ.active = true;
  nav('scr-convoquiz', 'fwd');
  cqRender();
}

function cqRender() {
  if (CQ.round >= CQ.pool.length) { cqFinish(); return; }
  CQ.answered = false;
  const q = CQ.pool[CQ.round];

  document.getElementById('cq-round').textContent  = `${CQ.round + 1} / ${CQ_ROUNDS}`;
  document.getElementById('cq-prog').style.width   = (CQ.round / CQ_ROUNDS * 100) + '%';
  document.getElementById('cq-speaker').textContent = q.speaker;
  document.getElementById('cq-lesson').textContent  = q.lessonTitle ? `📚 ${q.lessonTitle}` : '';

  // Display text with blank
  const display = q.tokens.map((tok, i) => i === q.blankIdx ? '___' : tok).join('');
  document.getElementById('cq-text').textContent = display;
  document.getElementById('cq-fr').textContent   = '🇫🇷 ' + q.frText;

  // Render choices
  const choicesEl = document.getElementById('cq-choices');
  choicesEl.innerHTML = '';
  q.opts.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'cq-choice';
    btn.textContent = opt;
    btn.addEventListener('click', () => cqAnswer(btn, opt, q));
    choicesEl.appendChild(btn);
  });

  // Speak the sentence with a pause at the blank
  cqSpeak(q, false);
}

function cqSpeak(q, full) {
  if (typeof speak !== 'function') return;
  if (full) {
    speak(q.tokens.join(''));
  } else {
    // Replace blank word with a short pause indicator
    const spoken = q.tokens.map((tok, i) => i === q.blankIdx ? '...' : tok).join('');
    speak(spoken);
  }
}

function cqAnswer(btn, chosen, q) {
  if (CQ.answered) return;
  CQ.answered = true;
  document.querySelectorAll('.cq-choice').forEach(b => b.disabled = true);

  const correct = chosen === q.blank;
  btn.classList.add(correct ? 'cq-ok' : 'cq-ko');
  if (!correct) {
    document.querySelectorAll('.cq-choice').forEach(b => {
      if (b.textContent === q.blank) b.classList.add('cq-ok');
    });
  }
  if (correct) CQ.score++;

  // Reveal full sentence and speak it
  document.getElementById('cq-text').textContent = q.tokens.join('');
  setTimeout(() => cqSpeak(q, true), 200);

  setTimeout(() => { CQ.round++; cqRender(); }, correct ? 1600 : 2400);
}

function cqFinish() {
  const xp = Math.round(CQ_XP * CQ.score / CQ_ROUNDS);
  if (xp > 0) { const s = LS.stats; s.xp += xp; LS.saveS(s); }
  const perfect = CQ.score === CQ_ROUNDS;
  document.getElementById('cq-ov-em').textContent    = perfect ? '💬' : CQ.score >= 8 ? '✅' : '🔄';
  document.getElementById('cq-ov-title').textContent = perfect ? 'Conversations maîtrisées !' : `${CQ.score} / ${CQ_ROUNDS} bonnes !`;
  document.getElementById('cq-ov-xp').textContent    = '+' + xp + ' XP';
  document.getElementById('cq-ov-sub').textContent   = perfect
    ? 'Tu comprends parfaitement les dialogues slovènes !'
    : 'Rejoue pour maîtriser les conversations !';
  document.getElementById('cq-ov').classList.add('show');
}
