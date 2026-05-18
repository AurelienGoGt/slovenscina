// ═══════════════════════════════════════════
// 1-17 — Mon quotidien
// ═══════════════════════════════════════════
const EX_1_17 = [
  { type:'presentation', label:'Verbes du quotidien', word:'Vstati — Jesti — Delati — Spati', phonetic:'[VSTA-ti] [YES-ti] [de-LA-ti] [SPA-ti]', translation:'Se lever — Manger — Travailler — Dormir',
    cultural:{title:'Infinitif en -ti', text:'Les verbes slovènes à l\'infinitif se terminent en -ti. "Vstati" = se lever. Conjugaison au présent : jaz vstanem (je me lève), ti vstaneš (tu te lèves), on vstane (il se lève).'},
    histoire:{title:'Mode de vie actif', text:'60% des Slovènes pratiquent une activité sportive régulière — l\'un des taux les plus élevés d\'Europe. La randonnée (hrikolazenje) et le ski dominent. Le dimanche, les chemins de montagne sont bondés de familles. Le vélo est roi en ville — Ljubljana a déployé 300km de pistes cyclables.'} },
  { type:'tts_repeat', label:'Verbes essentiels', word:'Vstati, iti, jesti, piti, delati, spati, brati, gledati', phonetic:'[VSTA-ti, I-ti, YES-ti, PI-ti, de-LA-ti, SPA-ti, BRA-ti, gle-DA-ti]', translation:'Se lever, aller, manger, boire, travailler, dormir, lire, regarder' },
  { type:'matching', label:'Verbes → français', pairs:[
    {sl:'Vstati',  fr:'Se lever'},
    {sl:'Jesti',   fr:'Manger'},
    {sl:'Piti',    fr:'Boire'},
    {sl:'Delati',  fr:'Travailler'},
    {sl:'Spati',   fr:'Dormir'},
  ]},
  { type:'tts_repeat', label:'Les repas', word:'Zajtrk, kosilo, večerja, malica', phonetic:'[ZAY-t-rk, ko-SI-lo, ve-CHER-ya, ma-LI-tsa]', translation:'Petit-déjeuner, déjeuner, dîner, collation' },
  { type:'matching', label:'Repas → heure', pairs:[
    {sl:'Zajtrk',  fr:'Matin — petit-déjeuner'},
    {sl:'Malica',  fr:'10h — collation'},
    {sl:'Kosilo',  fr:'Midi — déjeuner (repas principal)'},
    {sl:'Večerja', fr:'Soir — dîner'},
  ]},
  { type:'tts_repeat', label:'Ma journée', word:'Vstanem ob šestih. Pijem kavo. Grem v službo.', phonetic:'[VSTA-nem ob SHES-tih. PI-yem KA-vo. GREM v SLUZH-bo.]', translation:'Je me lève à 6h. Je bois un café. Je vais au travail.' },
  { type:'fill', label:'Phrase à trous', sentence:['Ob sedmih imam ___. (À 7h j\'ai le petit-déjeuner)'], blank:'zajtrk', bank:['zajtrk','kosilo','večerja','malica'] },
  { type:'story', label:'Histoire', title:'La journée de Luka',
    narration:"Luka est prof de maths. Sa journée commence à 6h. Il va à l\'école en vélo.",
    dialogue:[
      {speaker:'Žena',  text:'Luka, ura je šest ! Vstani !', side:'left'},
      {speaker:'Luka',  text:'Ja, ja. Vstajam. Kakšno je vreme ?', side:'right'},
      {speaker:'Žena',  text:'Sončno ! Lahko greš z kolesom.', side:'left'},
      {speaker:'Luka',  text:'Odlično. Kaj je za zajtrk ?', side:'right'},
      {speaker:'Žena',  text:'Kruh, sir in kava. Hitro — ob pol osmih moraš iti !', side:'left'},
      {speaker:'Luka',  text:'Dobro. Ob dveh pridem domov.', side:'right'},
    ],
    translation:{
      'Ura je šest ! Vstani !':'Il est 6h ! Lève-toi !',
      'Vstajam. Kakšno je vreme ?':'Je me lève. Quel temps fait-il ?',
      'Lahko greš z kolesom.':'Tu peux aller à vélo.',
      'Kaj je za zajtrk ?':'Qu\'est-ce qu\'il y a pour le petit-déjeuner ?',
      'Ob pol osmih moraš iti !':'Tu dois partir à 7h30 !',
      'Ob dveh pridem domov.':'Je rentre à 14h.',
    }
  },
  { type:'qcm', label:'QCM histoire', question:'Comment Luka va-t-il au travail ?', choices:['À vélo','En voiture','À pied','En bus'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'À quelle heure Luka doit-il partir ?', choices:['7h30','7h00','8h00','6h30'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'À quelle heure Luka rentre-t-il ?', choices:['14h','12h','16h','18h'], correct:0 },
  { type:'dictee', label:'Dictée', word:'Vstanem', phonetic:'[VSTA-nem]', hint:'Je me lève — 7 lettres' },
  { type:'reconstruct', label:'Reconstitue', sentence:'Vstanem ob šestih in pijem kavo.', words:['Vstanem','ob','šestih','in','pijem','kavo','.'] },
];
