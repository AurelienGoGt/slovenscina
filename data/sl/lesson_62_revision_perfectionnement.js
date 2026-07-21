// ═══════════════════════════════════════════
// 6-8 — Révision Perfectionnement
// Généré le 2026-07-21 par generate_lesson.py
// ═══════════════════════════════════════════
const EX_6_8 = [
  { type:'presentation', label:'Révision des cas', word:'Primer', phonetic:'[PRI-mer]', translation:'Exemple',
    cultural:{title:'Les cas en slovène', text:'Le slovène utilise six cas grammaticaux, chacun ayant une fonction spécifique. Par exemple, le nominatif est utilisé pour le sujet, alors que le génitif exprime la possession.'},
    histoire:{title:'L\'importance des cas', text:'Les cas sont essentiels pour la structure des phrases en slovène, reflétant les relations entre les mots. L\'usage des cas remonte à l\'ancien slave, et leur maîtrise est un signe de compétence.'} },

  { type:'presentation', label:'Aspect verbal', word:'Videti', phonetic:'[VI-de-ti]', translation:'Voir',
    cultural:{title:'Perfectif vs Imperfectif', text:'Les verbes slovènes sont souvent classés selon leur aspect : perfectif (action complète) et imperfectif (action incomplète). Cela change la façon de exprimer le temps.'},
    histoire:{title:'Aspects dans la langue', text:'L\'usage des aspects verbaux est un héritage des langues slaves, où l\'interprétation du temps et de l\'aspect est primordiale pour la compréhension des actions.'} },

  { type:'tts_repeat', label:'Aspect verbal 1', word:'Jaz sem videl.', phonetic:'[YAZ sem VI-del]', translation:'J\'ai vu.' },
  { type:'tts_repeat', label:'Aspect verbal 2', word:'Jaz vidim.', phonetic:'[YAZ VI-dim]', translation:'Je vois.' },
  { type:'tts_repeat', label:'Aspect verbal 3', word:'Bova šla.', phonetic:'[BO-va SHLA]', translation:'Nous irons.' },

  { type:'matching', label:'Verbes → français', pairs:[
    {sl:'Imeti', fr:'Avoir'}, {sl:'Delati', fr:'Travailler'},
    {sl:'Govoriti', fr:'Parler'}, {sl:'Jesti', fr:'Manger'},
    {sl:'Piti', fr:'Boire'},
  ]},

  { type:'qcm', label:'QCM grammaire', question:'Quel cas indique la possession ?',
    choices:['Génitif','Accusatif','Nominatif','Instrumental'], correct:0 },

  { type:'qcm', label:'QCM culturel', question:'Quelle est la boisson nationale de la Slovénie ?',
    choices:['Cviček','Bordeaux','Sauvignon','Chardonnay'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['Jaz ___ (voir) knjigo. (Je vois un livre.)'], blank:'vidim', bank:['vidim','videl','videla','videla'] },

  { type:'fill', label:'Phrase à trous', sentence:['Ali si ___ (prendre) kavo? (As-tu pris un café ?)'], blank:'vzel', bank:['vzel','vzela','vzel','vzeli'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Ali si videl tistega fanta ?', words:['Ali','si','videl','tistega','fanta','?'] },

  { type:'story', label:'Dialogue au café', title:'V kavarni — Au café',
    narration:'Luka in Ana sta v kavarni v Ljubljani, kjer se pogovarjata o potovanjih.',
    dialogue:[
      {speaker:'Luka', text:'Živjo! Kako je bilo na potovanju?', side:'left'},
      {speaker:'Ana', text:'Živjo! Bilo je čudovito. Obiskala sem Pariz.', side:'right'},
      {speaker:'Luka', text:'Res? Kako je bilo?', side:'left'},
      {speaker:'Ana', text:'Super! Videl sem Eifflov stolp in jedla odlične makrone.', side:'right'},
      {speaker:'Luka', text:'Zveni fantastično! Še bom šel tja.', side:'left'},
      {speaker:'Ana', text:'Priporočam! Kako pa ti?', side:'right'},
      {speaker:'Luka', text:'Jaz sem šel v Italijo, jedel sem najboljšo pico.', side:'left'},
      {speaker:'Ana', text:'Odlično! Morda lahko gremo skupaj naslednjič.', side:'right'},
    ],
    translation:{
      'Živjo! Kako je bilo na potovanju?': 'Salut ! Comment était le voyage ?',
      'Živjo! Bilo je čudovito. Obiskala sem Pariz.': 'Salut ! C\'était magnifique. J\'ai visité Paris.',
      'Res? Kako je bilo?': 'Vraiment ? Comment c\'était ?',
      'Super! Videl sem Eifflov stolp in jedla odlične makrone.': 'Super ! J\'ai vu la tour Eiffel et mangé d\'excellentes macarons.',
      'Zveni fantastično! Še bom šel tja.': 'Ça a l\'air fantastique ! J\'irai là-bas.',
      'Priporočam! Kako pa ti?': 'Je recommande ! Et toi ?',
      'Jaz sem šel v Italijo, jedel sem najboljšo pico.': 'Je suis allé en Italie, j\'ai mangé la meilleure pizza.',
      'Odlično! Morda lahko gremo skupaj naslednjič.': 'Super ! Peut-être que nous pourrions y aller ensemble la prochaine fois.',
    }},
];

// ── fin EX_6_8 ──
