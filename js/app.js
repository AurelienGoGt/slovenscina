// ═══════════════════════════════════════════
// STORAGE
// ═══════════════════════════════════════════
const LS = {
  get prog()  { try { return JSON.parse(localStorage.getItem('slv_prog')  || '{}'); } catch { return {}; } },
  get stats() { try { return JSON.parse(localStorage.getItem('slv_stats') || '{"xp":0,"streak":0,"lessons":0,"words":0,"lastDay":""}'); } catch { return {xp:0,streak:0,lessons:0,words:0,lastDay:''}; } },
  get prefs() { try { return JSON.parse(localStorage.getItem('slv_prefs') || '{"tts":true,"rate":1.05,"elKey":"","vrKey":""}'); } catch { return {tts:true,rate:1.05,elKey:'',vrKey:''}; } },
  saveP(p)  { try { localStorage.setItem('slv_prog',  JSON.stringify(p)); } catch {} },
  saveS(s)  { try { localStorage.setItem('slv_stats', JSON.stringify(s)); } catch {} },
  savePr(p) { try { localStorage.setItem('slv_prefs', JSON.stringify(p)); } catch {} },
};

let _bestVoice = null;
let _audioCtx = null;

function getVol() { const v = LS.prefs.vol; return typeof v === 'number' ? v : 0.75; }
function setGameVol(v) {
  v = Math.max(0, Math.min(1, parseFloat(v) || 0));
  const p = LS.prefs; p.vol = v; LS.savePr(p);
  if (window._milleGain) window._milleGain.gain.value = v;
  if (window._cwGain)    window._cwGain.gain.value    = v;
}
function toggleVolPopup(e) {
  e.stopPropagation();
  const pp = document.getElementById('vol-popup');
  const v = getVol();
  document.getElementById('vol-slider').value = String(v);
  document.getElementById('vol-pct').textContent = Math.round(v * 100) + '%';
  pp.classList.toggle('show');
}

function getAppLang() { return 'sl'; }

function findBestVoice() {
  if (_bestVoice) return _bestVoice;
  const voices = speechSynthesis.getVoices();
  _bestVoice = voices.find(v => v.lang === 'sl-SI')
    || voices.find(v => v.lang.startsWith('sl'))
    || voices.find(v => v.lang.startsWith('hr') || v.lang.startsWith('cs'))
    || voices.find(v => v.name.includes('Google'))
    || voices.find(v => v.name.toLowerCase().includes('female') || v.name.toLowerCase().includes('woman'))
    || voices.find(v => v.localService)
    || voices[0] || null;
  return _bestVoice;
}

function unlockAudio() {
  if (_audioCtx) return;
  _audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (_audioCtx.state === 'suspended') _audioCtx.resume();
}

document.addEventListener('touchstart', unlockAudio, { once: true });
document.addEventListener('click', unlockAudio, { once: true });

if (window.speechSynthesis) {
  speechSynthesis.getVoices();
  speechSynthesis.onvoiceschanged = () => {
    speechSynthesis.onvoiceschanged = null;
    findBestVoice();
  };
}

function updateLanguageUI() {
  const ttsLabel = document.getElementById('tts-lang-label');
  if (ttsLabel) ttsLabel.textContent = 'TTS slovène';
  const voiceDesc = document.getElementById('voice-desc');
  if (voiceDesc) {
    voiceDesc.innerHTML = '<b style="color:var(--si-blue)">VoiceRSS</b> — voix slovène féminine "Maja", naturelle.<br>Gratuit : 350 appels/jour. Inscription sur <b>voicerss.org</b>';
  }
}

// ═══════════════════════════════════════════
// STREAK
// ═══════════════════════════════════════════
function touchStreak() {
  const s = LS.stats, today = new Date().toDateString();
  if (s.lastDay !== today) {
    const yest = new Date(Date.now() - 86400000).toDateString();
    s.streak = (s.lastDay === yest) ? s.streak + 1 : 1;
    s.lastDay = today;
    LS.saveS(s);
  }
  return s;
}

// ═══════════════════════════════════════════
// TTS
// ═══════════════════════════════════════════
let _ttsWord = '';

const _audioCache = {};
let _currentAudio = null;

function stopAudio() {
  if (_currentAudio) { try { _currentAudio.pause(); _currentAudio.currentTime = 0; } catch {} _currentAudio = null; }
  if (window.speechSynthesis) speechSynthesis.cancel();
}

async function playAudioUrl(url, crossOrigin) {
  stopAudio();
  return new Promise((resolve, reject) => {
    const a = new Audio();
    if (crossOrigin) a.crossOrigin = 'anonymous';
    a.onended = resolve;
    a.onerror = reject;
    a.src = url;
    _currentAudio = a;
    a.play().then(resolve).catch(reject);
  });
}

async function speak(text) {
  if (!text) return;
  const p = LS.prefs;
  if (!p.tts) return;

  if (p.elKey) {
    try {
      const r = await fetch('https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM', {
        method: 'POST',
        headers: { 'xi-api-key': p.elKey, 'Content-Type': 'application/json', 'Accept': 'audio/mpeg' },
        body: JSON.stringify({ text, model_id: 'eleven_multilingual_v2', voice_settings: { stability: 0.45, similarity_boost: 0.8 } })
      });
      if (r.ok) {
        const blob = await r.blob();
        await playAudioUrl(URL.createObjectURL(blob), false);
        return;
      }
    } catch {}
  }

  if (p.vrKey) {
    try {
      const cacheKey = 'vr_sl_' + text;
      if (_audioCache[cacheKey]) {
        await playAudioUrl(_audioCache[cacheKey], false); return;
      }
      const url = 'https://api.voicerss.org/?' + new URLSearchParams({
        key: p.vrKey, hl: 'sl-si', v: 'Maja',
        r: '0', c: 'mp3', f: '44khz_16bit_stereo', src: text
      });
      _audioCache[cacheKey] = url;
      await playAudioUrl(url, false); return;
    } catch {}
  }

  if (window.speechSynthesis) {
    stopAudio();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'sl-SI'; u.rate = 0.90; u.pitch = 1.15; u.volume = 1.0;
    const trySpeak = () => {
      const best = findBestVoice();
      if (best) u.voice = best;
      speechSynthesis.speak(u);
    };
    if (speechSynthesis.getVoices().length) { trySpeak(); }
    else { speechSynthesis.onvoiceschanged = () => { speechSynthesis.onvoiceschanged = null; findBestVoice(); trySpeak(); }; }
  }
}
function speakCurrent() { if (_ttsWord) speak(_ttsWord); }

// ═══════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════
function nav(toId, dir) {
  document.querySelectorAll('.scr').forEach(s => {
    if (s.id === toId) { s.classList.remove('out', 'back'); }
    else if (!s.classList.contains('out') && !s.classList.contains('back')) {
      s.classList.add(dir === 'back' ? 'out' : 'back');
      setTimeout(() => { s.classList.add('out'); s.classList.remove('back'); }, 260);
    } else { s.classList.add('out'); s.classList.remove('back'); }
  });
}

function setActiveNav(id) {
  document.querySelectorAll('.nav-btn').forEach(b => {
    const active = b.id === id;
    b.classList.toggle('active', active);
    active ? b.setAttribute('aria-current', 'page') : b.removeAttribute('aria-current');
  });
}
function goHome()     { renderHome();     nav('scr-home', 'back');     setActiveNav('nav-home'); }
function goSettings() { loadSettingsUI(); nav('scr-settings', 'fwd'); setActiveNav('nav-settings'); }
function goProfile()  { renderProfile();  nav('scr-profile', 'fwd');  setActiveNav('nav-profile'); }

// ═══════════════════════════════════════════
// TOAST
// ═══════════════════════════════════════════
function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(t._t); t._t = setTimeout(() => t.classList.remove('show'), 2200);
}

// ═══════════════════════════════════════════
// HOME
// ═══════════════════════════════════════════
function renderHome() {
  updateLanguageUI();
  const st = touchStreak();
  document.getElementById('h-streak').textContent = st.streak;
  document.getElementById('h-xp').textContent = st.xp + ' XP';

  const homeHero = document.getElementById('home-hero');
  if (homeHero) {
    homeHero.innerHTML =
      '<svg viewBox="0 0 390 170" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">' +
        '<defs>' +
          '<linearGradient id="sl-sky" x1="0" y1="0" x2="0" y2="1">' +
            '<stop offset="0%" stop-color="#020c1e"/>' +
            '<stop offset="100%" stop-color="#0a2a5e"/>' +
          '</linearGradient>' +
          '<linearGradient id="sl-mt" x1="0" y1="0" x2="0" y2="1">' +
            '<stop offset="0%" stop-color="#c8d8f0"/>' +
            '<stop offset="100%" stop-color="#6a8aaa"/>' +
          '</linearGradient>' +
          '<linearGradient id="sl-lake" x1="0" y1="0" x2="0" y2="1">' +
            '<stop offset="0%" stop-color="#1a4a7a"/>' +
            '<stop offset="100%" stop-color="#0a2040"/>' +
          '</linearGradient>' +
        '</defs>' +
        '<rect width="390" height="170" fill="url(#sl-sky)"/>' +
        '<circle cx="40" cy="18" r="1.2" fill="white" opacity=".7"/>' +
        '<circle cx="80" cy="10" r=".8" fill="white" opacity=".5"/>' +
        '<circle cx="130" cy="22" r="1" fill="white" opacity=".6"/>' +
        '<circle cx="200" cy="8" r="1.4" fill="white" opacity=".8"/>' +
        '<circle cx="260" cy="15" r=".9" fill="white" opacity=".55"/>' +
        '<circle cx="320" cy="7" r="1.1" fill="white" opacity=".65"/>' +
        '<circle cx="350" cy="20" r=".7" fill="white" opacity=".45"/>' +
        '<polygon points="0,110 60,50 110,90 160,40 220,80 270,35 330,75 390,45 390,130 0,130" fill="#1a3a6a" opacity=".5"/>' +
        '<polygon points="150,115 195,32 240,115" fill="url(#sl-mt)"/>' +
        '<polygon points="155,115 195,38 235,115" fill="#d0dff0"/>' +
        '<polygon points="185,50 195,32 205,50 195,47" fill="white" opacity=".95"/>' +
        '<polygon points="100,115 140,62 178,115" fill="#a8c0dc"/>' +
        '<polygon points="133,75 140,62 148,75 140,72" fill="white" opacity=".8"/>' +
        '<polygon points="212,115 250,68 290,115" fill="#a0b8d4"/>' +
        '<polygon points="243,80 250,68 257,80 250,77" fill="white" opacity=".75"/>' +
        '<ellipse cx="195" cy="138" rx="90" ry="18" fill="url(#sl-lake)" opacity=".85"/>' +
        '<rect x="185" y="124" width="20" height="9" fill="#d0c0a0" rx="1"/>' +
        '<polygon points="190,124 195,116 200,124" fill="#b08060"/>' +
        '<rect x="193" y="118" width="4" height="6" fill="white" opacity=".8"/>' +
        '<line x1="120" y1="138" x2="155" y2="138" stroke="white" stroke-width=".8" opacity=".3"/>' +
        '<line x1="230" y1="141" x2="260" y2="141" stroke="white" stroke-width=".6" opacity=".25"/>' +
      '</svg>' +
      '<div class="hero-content">' +
        '<div style="font-family:\'Lora\',serif;font-size:22px;font-weight:600;color:white;text-shadow:0 2px 10px rgba(0,0,0,.5)">Slovenščina 🇸🇮</div>' +
        '<div style="font-size:12px;color:rgba(255,255,255,.7);margin-top:4px">Apprends le slovène pas à pas</div>' +
      '</div>';
  }

  const prog = LS.prog;
  const LEVELS = getLevels();
  const cont = document.getElementById('lv-cards');
  cont.innerHTML = '';
  LEVELS.forEach((lv, li) => {
    const realLes = lv.lessons.filter(l => l.type === 'lesson');
    const done = realLes.filter(l => prog[l.id]).length;
    const pct = Math.round(done / realLes.length * 100);
    const locked = li > 0 && LEVELS[li - 1].lessons.filter(l => l.type === 'lesson' && prog[l.id]).length < 5;
    const e = document.createElement('div');
    e.className = `lv-card lv${lv.id}${locked ? ' locked' : ''}`;
    e.style.setProperty('--delay', `${li * 0.08}s`);
    e.innerHTML =
      `<div class="lv-badge">${lv.emoji}</div>` +
      `<div class="lv-info">` +
        `<div class="lv-name">${lv.name}</div>` +
        `<div class="lv-meta">${lv.sub} &middot; ${realLes.length} le&ccedil;ons</div>` +
        `<div class="lv-prog"><div class="lv-prog-fill" style="width:${pct}%"></div></div>` +
      `</div>` +
      `<div class="lv-arrow">${locked ? '🔒' : '›'}</div>`;
    if (!locked) e.addEventListener('click', () => openLevel(lv.id));
    cont.appendChild(e);
  });
}

// ═══════════════════════════════════════════
// LEVEL
// ═══════════════════════════════════════════
function openLevel(lvId) {
  const LEVELS = getLevels();
  const lv = LEVELS.find(l => l.id === lvId);
  if (!lv) return;
  APP.lvId = lvId;
  document.getElementById('lv-title').textContent = lv.name;
  document.getElementById('lv-sub').textContent = lv.sub;
  // Show crossword button only when the level has vocabulary data
  const hasVocab = lv.lessons.some(les => (EX[les.id] || []).some(ex =>
    (ex.type === 'presentation' || ex.type === 'tts_repeat') && ex.word
  ));
  document.getElementById('cw-level-btn').style.display = hasVocab ? '' : 'none';
  const prog = LS.prog;
  const list = document.getElementById('lessons-list');
  list.innerHTML = '';
  let lessonNum = 0;
  lv.lessons.forEach((les, i) => {
    const done = !!prog[les.id];
    const prevDone = i === 0 || !!prog[lv.lessons[i - 1].id];
    const locked = !prevDone;
    const isRecap = les.type === 'recap';
    if (!isRecap) lessonNum++;
    const numDisplay = done ? '✓' : isRecap ? '↩' : lessonNum;
    const e = document.createElement('div');
    e.className = `ls-row${done ? ' done' : ''}${locked ? ' locked' : ''}${isRecap ? ' recap' : ''}`;
    e.innerHTML =
      `<div class="ls-num">${numDisplay}</div>` +
      `<div class="ls-details">` +
        `<div class="ls-title">${les.title}</div>` +
        `<div class="ls-sub">${les.sub}</div>` +
      `</div>` +
      (done ? '<span style="font-size:14px">⭐</span>' : `<span class="ls-xp">+${les.xp}XP</span>`);
    if (!locked) e.addEventListener('click', () => startLesson(les));
    list.appendChild(e);
  });
  nav('scr-level', 'fwd');
}

// ═══════════════════════════════════════════
// SETTINGS
// ═══════════════════════════════════════════
function loadSettingsUI() {
  updateLanguageUI();
  const p = LS.prefs;
  document.getElementById('el-key').value = p.elKey || '';
  document.getElementById('vr-key').value = p.vrKey || '';
  document.getElementById('tts-on').checked = p.tts !== false;
  document.getElementById('tts-rate').value = String(p.rate || 1.05);
  document.getElementById('music-vol').value = String(getVol());
  const active = p.elKey ? 'ElevenLabs' : p.vrKey ? 'VoiceRSS (Maja)' : 'Web Speech (système)';
  document.getElementById('el-status').textContent = 'Voix active : ' + active;
}
function saveKey() {
  const p = LS.prefs;
  p.elKey = document.getElementById('el-key').value.trim();
  p.vrKey = document.getElementById('vr-key').value.trim();
  LS.savePr(p);
  const active = p.elKey ? 'ElevenLabs' : p.vrKey ? 'VoiceRSS (Maja)' : 'Web Speech (système)';
  document.getElementById('el-status').textContent = '✓ Voix active : ' + active;
  toast('Enregistré !');
}
function savePref() {
  const p = LS.prefs;
  p.tts = document.getElementById('tts-on').checked;
  p.rate = parseFloat(document.getElementById('tts-rate').value || '0.85');
  p.vol  = parseFloat(document.getElementById('music-vol').value || '0.75');
  LS.savePr(p);
}
function testVoice() {
  speak('Zdravo! Sem slovenščina.');
  toast('Test envoyé !');
}
function resetAll() {
  const ov = document.createElement('div'); ov.className = 'modal-ov';
  const box = document.createElement('div'); box.className = 'modal-box';
  box.innerHTML = '<div style="font-size:26px;margin-bottom:10px">⚠️</div>'
    + '<div style="font-family:\'Lora\',serif;font-size:16px;font-weight:600;color:#10203a;margin-bottom:6px">Effacer la progression ?</div>'
    + '<div style="font-size:13px;color:#6a8aaa;margin-bottom:18px">Cette action est irréversible.</div>'
    + '<div class="modal-actions">'
    + '<button id="ra-cancel" class="modal-btn modal-btn--cancel">Annuler</button>'
    + '<button id="ra-ok" class="modal-btn modal-btn--danger">Effacer</button>'
    + '</div>';
  ov.appendChild(box);
  document.body.appendChild(ov);
  document.getElementById('ra-cancel').onclick = () => ov.remove();
  document.getElementById('ra-ok').onclick = () => {
    ov.remove();
    localStorage.removeItem('slv_prog'); localStorage.removeItem('slv_stats');
    toast('Réinitialisé'); goHome();
  };
}

// ═══════════════════════════════════════════
// PROFILE
// ═══════════════════════════════════════════
function renderProfile() {
  const s = LS.stats;
  document.getElementById('p-streak').textContent = s.streak;
  document.getElementById('p-xp').textContent = s.xp;
  document.getElementById('p-les').textContent = s.lessons;
  document.getElementById('p-wds').textContent = s.words;
  const BADGES = [
    { em: '🌅', lbl: 'Début',       ok: true },
    { em: '🔥', lbl: 'Streak 3j',   ok: s.streak >= 3 },
    { em: '📚', lbl: '5 leçons',    ok: s.lessons >= 5 },
    { em: '⭐', lbl: '100 XP',      ok: s.xp >= 100 },
    { em: '🏆', lbl: 'Parfait',     ok: s.lessons >= 1 && s.xp >= 50 },
    { em: '🗺️', lbl: 'Explorateur', ok: s.lessons >= 10 },
    { em: '💬', lbl: '50 mots',     ok: s.words >= 50 },
    { em: '🇸🇮', lbl: 'Slovène',    ok: s.xp >= 500 },
  ];
  document.getElementById('badges-wrap').innerHTML = BADGES.map(b =>
    `<div class="bdg ${b.ok ? 'earned' : 'locked'}"><span class="bdg-em">${b.em}</span><span class="bdg-lbl">${b.lbl}</span></div>`
  ).join('');
}

// ═══════════════════════════════════════════
// ADAPTIVE LEVEL
// ═══════════════════════════════════════════
function getUserLevel() {
  const n = LS.stats.lessons;
  if (n < 5)  return 'beginner';
  if (n < 15) return 'intermediate';
  return 'advanced';
}

function applyAdaptiveLevel() {
  document.getElementById('app').dataset.level = getUserLevel();
}

// ═══════════════════════════════════════════
// APP STATE
// ═══════════════════════════════════════════
const APP = { lvId: null, lessonId: null };

// ═══════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════
document.getElementById('nav-home').addEventListener('click', goHome);
document.getElementById('nav-profile').addEventListener('click', goProfile);
document.getElementById('nav-settings').addEventListener('click', goSettings);

// Millionnaire
document.getElementById('btn-mille').addEventListener('click', startMillionnaire);
document.getElementById('btn-mille').addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') startMillionnaire(); });
document.getElementById('mille-quit').addEventListener('click', () => { milleStopMusic(); goHome(); });
document.getElementById('mille-again').addEventListener('click', startMillionnaire);
document.getElementById('mille-home').addEventListener('click', () => { milleStopMusic(); goHome(); });

// Crossword
document.getElementById('cw-level-btn').addEventListener('click', startCrossword);
document.getElementById('cw-back').addEventListener('click', () => { cwStopMusic(); if (APP.lvId) openLevel(APP.lvId); else goHome(); });

// Volume popup
document.getElementById('mille-vol-btn').addEventListener('click', toggleVolPopup);
document.getElementById('cw-vol-btn').addEventListener('click', toggleVolPopup);
document.getElementById('vol-slider').addEventListener('input', function() {
  setGameVol(this.value);
  document.getElementById('vol-pct').textContent = Math.round(this.value * 100) + '%';
});
document.addEventListener('click', e => {
  if (!e.target.closest('#vol-popup') && !e.target.classList.contains('vol-btn')) {
    document.getElementById('vol-popup').classList.remove('show');
  }
});

applyAdaptiveLevel();
renderHome();
setActiveNav('nav-home');
