// ═══════════════════════════════════════════
// 2-10 — Les émotions
// Généré le 2026-06-09 par generate_lesson.py
// ═══════════════════════════════════════════
const EX_2_10 = [
  { type:'presentation', label:'Découverte', word:'Čustva', phonetic:'[CHUST-va]', translation:'Les émotions',
    cultural:{title:'Expression émotionnelle en Slovénie', text:'Les Slovènes sont souvent perçus comme réservés, mais en réalité, ils expriment leurs émotions chaleureusement en famille. Par exemple, lors d\'un toast, ils disent "Zdravje!" qui signifie "Santé!".'},
    histoire:{title:'Culture et émotions', text:'La culture slovène valorise l\'authenticité des émotions. Bien que les Slovènes soient parfois appelés "Slaves froids", ils partagent des sentiments profonds dans des contextes intimes.'} },

  { type:'presentation', label:'Grammaire - Biti + pridevnik', word:'Sem vesel', phonetic:'[SEM VE-sel]', translation:'Je suis heureux' },
  { type:'presentation', label:'Grammaire - Počutiti se + pridevnik', word:'Počutim se utrujen', phonetic:'[PO-chu-tim se U-tru-jen]', translation:'Je me sens fatigué' },
  
  { type:'tts_repeat', label:'Exprimer la joie', word:'Vesel sem, ker je sončno.', phonetic:'[VE-sel sem, KER ye SON-cho]', translation:'Je suis heureux, car il fait soleil.' },
  { type:'tts_repeat', label:'Exprimer la tristesse', word:'Žalosten sem, ker je dež.', phonetic:'[ZHA-lo-sten sem, KER ye DEZH]', translation:'Je suis triste, car il pleut.' },
  { type:'tts_repeat', label:'Exprimer l\'empathie', word:'Žal mi je.', phonetic:'[ZHA-l mi ye]', translation:'Je suis désolé.' },
  { type:'tts_repeat', label:'Exprimer la surprise', word:'Presenečen sem.', phonetic:'[PRE-se-ne-chen sem]', translation:'Je suis surpris.' },

  { type:'matching', label:'Émotions → français', pairs:[
    {sl:'Vesel', fr:'Heureux'}, {sl:'Žalosten', fr:'Triste'},
    {sl:'Utrujen', fr:'Fatigué'}, {sl:'Jezen', fr:'Fâché'},
    {sl:'Presenečen', fr:'Surpris'},
  ]},

  { type:'qcm', label:'QCM grammaire', question:'Comment exprime-t-on un état avec "biti" ?',
    choices:['Biti + pridevnik','Biti + glagol','Biti + samostalnik','Biti + prislov'], correct:0 },
  
  { type:'qcm', label:'QCM culturel', question:'Comment dit-on "santé" en slovène lors d\'un toast ?',
    choices:['Zdravje!','Na zdravje!','Na svidenje!','Vesel sem!'], correct:0 },

  { type:'qcm', label:'QCM grammaire', question:'Quelle est la bonne structure pour exprimer un sentiment ?',
    choices:['Počutim se + pridevnik','Biti + samostalnik','Biti + prislov','Počutiti se + glagol'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['Sem ___ (Je suis heureux.)'], blank:'vesel', bank:['vesel','žalosten','utrujen','jezen'] },
  { type:'fill', label:'Phrase à trous', sentence:['Žal mi ___ (Je suis désolé.)'], blank:'je', bank:['mi','je','sem','so'] },
  { type:'fill', label:'Phrase à trous', sentence:['Upam, da ___ (J\'espère que...)'], blank:'je', bank:['je','so','bodo','ne'] },
  
  { type:'reconstruct', label:'Reconstitue', sentence:'Vesel sem, ker je sončno.', words:['Vesel','sem','ker','je','sončno','.'] },
  
  { type:'story', label:'Dialogue sur les émotions', title:'O čustvih — Sur les émotions',
    narration:'Ana in Marko se pogovarjata o svojih čustvih.',
    dialogue:[
      {speaker:'Ana', text:'Živjo, Marko! Kako si?', side:'left'},
      {speaker:'Marko', text:'Živjo, Ana! Sem vesel, ker je lepo vreme.', side:'right'},
      {speaker:'Ana', text:'Super! Upam, da greva na piknik.', side:'left'},
      {speaker:'Marko', text:'Seveda! A si utrujena?', side:'right'},
      {speaker:'Ana', text:'Ja, malo sem utrujena, a vesela.', side:'left'},
      {speaker:'Marko', text:'Žal mi je, da si utrujena. Morda ti lahko pomagam?', side:'right'},
      {speaker:'Ana', text:'Hvala, Marko! To bi bilo super.', side:'left'},
      {speaker:'Marko', text:'Veseli me, da ti lahko pomagam.', side:'right'},
    ],
    translation:{
      'Živjo, Marko! Kako si?': 'Salut, Marko! Comment ça va ?',
      'Živjo, Ana! Sem vesel, ker je lepo vreme.': 'Salut, Ana! Je suis heureux, car il fait beau.',
      'Super! Upam, da greva na piknik.': 'Super ! J\'espère que nous allons pique-niquer.',
      'Seveda! A si utrujena?': 'Bien sûr ! Es-tu fatiguée ?',
      'Ja, malo sem utrujena, a vesela.': 'Oui, je suis un peu fatiguée, mais heureuse.',
      'Žal mi je, da si utrujena. Morda ti lahko pomagam?': 'Je suis désolé que tu sois fatiguée. Peut-être que je peux t\'aider ?',
      'Hvala, Marko! To bi bilo super.': 'Merci, Marko ! Ce serait super.',
      'Veseli me, da ti lahko pomagam.': 'Je suis heureux de pouvoir t\'aider.',
    }},
];

// ── fin EX_2_10 ──
