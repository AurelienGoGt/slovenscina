// ═══════════════════════════════════════════
// C-8 — Nationalité & identité
// Od kod ste? Sem Slovenec/Slovenka. Pays & peuples.
// Niveau 5 — Culture & Histoire (leçon finale)
// ═══════════════════════════════════════════
const EX_C_8 = [

  { type:'presentation', label:'Grammaire', word:'narodnost', phonetic:'[na-ROD-nost]', translation:'la nationalité',
    cultural:{title:'Demander la nationalité en slovène', text:'En slovène, on peut demander la nationalité de deux façons : "Od kod ste/si ?" (D\'où êtes-vous / d\'où es-tu ?) est la question informelle courante. "Kakšne narodnosti ste/si ?" (De quelle nationalité êtes-vous / es-tu ?) est plus formel. La réponse : "Sem + nationalité" — par exemple "Sem Francoz" (Je suis Français, masculin) ou "Sem Francozinja" (Je suis Française, féminin).'},
    histoire:{title:'Genre et nationalité en slovène', text:'En slovène, les nationalités s\'accordent en genre : masculin (se termine souvent en -ec, -an, -č) et féminin (se termine en -ka, -ka, -inja). Exemples : Slovenec/Slovenka (Slovène), Francoz/Francozinja (Français/e), Nemec/Nemka (Allemand/e), Italijan/Italijanka (Italien/ne). On peut aussi utiliser l\'adjectif national : "slovenskega rodu" (d\'origine slovène), "sem po rodu Francoz" (je suis d\'origine française).'} },

  { type:'tts_repeat', label:'Questions clés', word:'Od kod ste ?', phonetic:'[od KOD ste]', translation:'D\'où êtes-vous ? (formel)' },
  { type:'tts_repeat', label:'Questions clés', word:'Od kod si ?', phonetic:'[od KOD si]', translation:'D\'où es-tu ? (informel)' },
  { type:'tts_repeat', label:'Questions clés', word:'Kakšne narodnosti ste ?', phonetic:'[KAK-shne na-ROD-nos-ti ste]', translation:'De quelle nationalité êtes-vous ? (formel)' },
  { type:'tts_repeat', label:'Réponses', word:'Sem Slovenec.', phonetic:'[sem slo-VE-nets]', translation:'Je suis Slovène. (masculin)' },
  { type:'tts_repeat', label:'Réponses', word:'Sem Slovenka.', phonetic:'[sem SLOV-en-ka]', translation:'Je suis Slovène. (féminin)' },
  { type:'tts_repeat', label:'Réponses', word:'Sem Francoz.', phonetic:'[sem FRAN-tsoz]', translation:'Je suis Français. (masculin)' },
  { type:'tts_repeat', label:'Réponses', word:'Sem Francozinja.', phonetic:'[sem fran-TSO-zi-nya]', translation:'Je suis Française. (féminin)' },

  { type:'matching', label:'Nationalité m. → f.', pairs:[
    {sl:'Slovenec', fr:'Slovenka'},
    {sl:'Francoz',  fr:'Francozinja'},
    {sl:'Nemec',    fr:'Nemka'},
    {sl:'Italijan', fr:'Italijanka'},
  ]},

  { type:'qcm', label:'QCM grammaire', question:'Comment dit-on "Je suis Français" (masculin) ?',
    choices:['Sem Francoz.','Sem Francozinja.','Sem Francoska.','Sem iz Francija.'], correct:0 },

  { type:'qcm', label:'QCM grammaire', question:'Quelle est la question formelle pour demander la nationalité ?',
    choices:['Kakšne narodnosti ste ?','Od kod ste ?','Kje živite ?','Kaj ste po poklicu ?'], correct:0 },

  { type:'matching', label:'Pays → nationalité (m.)', pairs:[
    {sl:'Francija',  fr:'Francoz'},
    {sl:'Nemčija',   fr:'Nemec'},
    {sl:'Italija',   fr:'Italijan'},
    {sl:'Španija',   fr:'Španec'},
  ]},

  { type:'presentation', label:'Vocabulaire', word:'Iz katere države ste ?', phonetic:'[iz KA-te-re DRZA-ve ste]', translation:'De quel pays êtes-vous ?',
    cultural:{title:'Les pays en slovène', text:'Les noms de pays se déclinent selon les cas slovènes. Le génitif (après "iz" = de) est fréquent : iz Francije (de France), iz Nemčije (d\'Allemagne), iz Italije (d\'Italie). Pour les capitales : Sem iz Pariza (Je viens de Paris), iz Berlina, iz Rima, iz Madrida. On peut aussi dire : "Pridem iz..." ou "Sem doma iz..." (Je viens de... / Je suis originaire de...).'} },

  { type:'tts_repeat', label:'Pays', word:'Sem iz Francije.', phonetic:'[sem iz FRAN-tsi-ye]', translation:'Je viens de France.' },
  { type:'tts_repeat', label:'Pays', word:'Prihajam iz Pariza.', phonetic:'[pri-HA-yam iz PA-ri-za]', translation:'Je viens de Paris.' },

  { type:'matching', label:'Pays (nominatif) → capital', pairs:[
    {sl:'Francija',       fr:'Pariz'},
    {sl:'Nemčija',        fr:'Berlin'},
    {sl:'Slovenija',      fr:'Ljubljana'},
    {sl:'Velika Britanija',fr:'London'},
  ]},

  { type:'fill', label:'Phrase à trous', sentence:['Od kod ___? — Sem iz Španije. (D\'où viens-tu ? — Je viens d\'Espagne.)'], blank:'si', bank:['si','ste','sem','je'] },

  { type:'fill', label:'Phrase à trous', sentence:['Kakšne ___ (nationalité) ste ? — Sem Slovenec. (De quelle nationalité êtes-vous ? — Je suis Slovène.)'], blank:'narodnosti', bank:['narodnosti','starosti','poklici','jeziku'] },

  { type:'fill', label:'Phrase à trous', sentence:['Sem ___ (Allemand, féminin). Prihajam iz Berlina. (Je suis Allemande. Je viens de Berlin.)'], blank:'Nemka', bank:['Nemka','Nemec','Španec','Španка'] },

  { type:'matching', label:'Pays → génitif (après "iz")', pairs:[
    {sl:'Francija',  fr:'iz Francije'},
    {sl:'Nemčija',   fr:'iz Nemčije'},
    {sl:'Italija',   fr:'iz Italije'},
    {sl:'Avstrija',  fr:'iz Avstrije'},
  ]},

  { type:'qcm', label:'QCM', question:'Comment dit-on "Je viens d\'Italie" ?',
    choices:['Sem iz Italije.','Sem Italijan.','Prihajam Italija.','Sem v Italiji.'], correct:0 },

  { type:'story', label:'Dialogue identité', title:'Na vlaku — Dans le train',
    narration:'Aline potuje z Ljubljane v Maribor. V kupéju sreča Tomaža.',
    dialogue:[
      {speaker:'Tomaž', text:'Oprostite, ali je to sedež prosto ?', side:'right'},
      {speaker:'Aline', text:'Ja, prosim, sedite.', side:'left'},
      {speaker:'Tomaž', text:'Hvala. Od kod ste ? Niste Slovenka, kajne ?', side:'right'},
      {speaker:'Aline', text:'Res. Sem Francozinja, iz Lyona. In vi ?', side:'left'},
      {speaker:'Tomaž', text:'Sem Slovenec, iz Maribora. Govorite slovensko kar dobro !', side:'right'},
      {speaker:'Aline', text:'Hvala ! Učim se že dve leti. Slovenščina je težka, a lepa.', side:'left'},
      {speaker:'Tomaž', text:'Kako dolgo ste že v Sloveniji ?', side:'right'},
      {speaker:'Aline', text:'Tri tedne. Obiskala sem Ljubljana, Bled in Piran. Vaša dežela je čudovita !', side:'left'},
    ],
    translation:{
      'Oprostite, ali je to sedež prosto ?': 'Excusez-moi, cette place est-elle libre ?',
      'Ja, prosim, sedite.': 'Oui, s\'il vous plaît, asseyez-vous.',
      'Hvala. Od kod ste ? Niste Slovenka, kajne ?': 'Merci. D\'où êtes-vous ? Vous n\'êtes pas Slovène, n\'est-ce pas ?',
      'Res. Sem Francozinja, iz Lyona. In vi ?': 'En effet. Je suis Française, de Lyon. Et vous ?',
      'Sem Slovenec, iz Maribora. Govorite slovensko kar dobro !': 'Je suis Slovène, de Maribor. Vous parlez slovène assez bien !',
      'Hvala ! Učim se že dve leti. Slovenščina je težka, a lepa.': 'Merci ! J\'apprends depuis deux ans. Le slovène est difficile, mais beau.',
      'Kako dolgo ste že v Sloveniji ?': 'Depuis combien de temps êtes-vous en Slovénie ?',
      'Tri tedne. Obiskala sem Ljubljana, Bled in Piran. Vaša dežela je čudovita !': 'Trois semaines. J\'ai visité Ljubljana, Bled et Piran. Votre pays est magnifique !',
    }},

  { type:'qcm', label:'Quiz final', question:'Comment une femme française dit-elle sa nationalité ?',
    choices:['Sem Francozinja.','Sem Francoz.','Sem Francija.','Sem iz Francoz.'], correct:0 },

  { type:'qcm', label:'Quiz final', question:'Quelle est la forme génitif de "Nemčija" après "iz" ?',
    choices:['iz Nemčije','iz Nemčija','iz Nemčiji','iz Nemčijo'], correct:0 },

  { type:'qcm', label:'Quiz final', question:'Comment dit-on "De quelle nationalité es-tu ?" (informel) ?',
    choices:['Kakšne narodnosti si ?','Kakšne narodnosti ste ?','Od kod si ?','Kje si doma ?'], correct:0 },

  { type:'qcm', label:'Quiz final', question:'Quelle est la nationalité masculine pour quelqu\'un d\'Espagne ?',
    choices:['Španec','Španка','Španija','Španec/ka'], correct:0 },

  { type:'qcm', label:'Quiz final', question:'Comment dit-on "Je viens de Paris" ?',
    choices:['Prihajam iz Pariza.','Sem v Parizu.','Sem Parižan.','Iz Pariz prihajam.'], correct:0 },

  { type:'reconstruct', label:'Reconstitue', sentence:'Kakšne narodnosti ste ? Sem Francozinja iz Pariza.', words:['Kakšne','narodnosti','ste','?','Sem','Francozinja','iz','Pariza','.'] },

];

// ── fin EX_C_8 ──
