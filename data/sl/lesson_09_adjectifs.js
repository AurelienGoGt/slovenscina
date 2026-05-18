// ═══════════════════════════════════════════
// 1-9 — Adjectifs
// ═══════════════════════════════════════════
const EX_1_9 = [
  { type:'presentation', label:'Découverte', word:'Velik — Majhen — Lep — Grden', phonetic:'[VE-lik] [MAY-hen] [LEP] [GR-den]', translation:'Grand — Petit — Beau — Laid',
    cultural:{title:'Les adjectifs slovènes', text:'Les adjectifs s\'accordent en genre et en nombre. La forme de base (masculin singulier) est la plus simple. Tu apprendras les autres formes progressivement — d\'abord le sens !'},
    histoire:{title:'La Slovénie en chiffres', text:'20 273 km² — plus petite que la Bretagne. 2,1 millions d\'habitants. 60% du territoire couvert de forêts — 3e pays le plus boisé d\'Europe. Plus de 7000 grottes dont Postojna (27km). 47km de côte adriatique seulement, mais avec Piran, une des plus belles villes de l\'Adriatique.'} },
  { type:'tts_repeat', label:'Taille & âge', word:'Velik, majhen, visok, nizek, star, mlad', phonetic:'[VE-lik, MAY-hen, VI-sok, NI-zek, STAR, MLAD]', translation:'Grand, petit, grand (de taille), petit (de taille), vieux, jeune' },
  { type:'tts_repeat', label:'Qualité & caractère', word:'Dober, slab, hiter, počasen, lep, grden', phonetic:'[DO-ber, SLAB, HI-ter, po-CHA-sen, LEP, GR-den]', translation:'Bon, mauvais, rapide, lent, beau, laid' },
  { type:'tts_repeat', label:'Température & état', word:'Topel, hladen, vroč, mrzel, moker, suh', phonetic:'[TO-pel, HLA-den, VROCH, MRZ-el, MO-ker, SUH]', translation:'Chaud (tiède), froid, très chaud, très froid, mouillé, sec' },
  { type:'matching', label:'Opposés 1', pairs:[
    {sl:'Velik',  fr:'Grand ↔ Majhen (petit)'},
    {sl:'Star',   fr:'Vieux ↔ Mlad (jeune)'},
    {sl:'Hiter',  fr:'Rapide ↔ Počasen (lent)'},
    {sl:'Topel',  fr:'Chaud ↔ Hladen (froid)'},
    {sl:'Moker',  fr:'Mouillé ↔ Suh (sec)'},
  ]},
  { type:'matching', label:'Adjectifs → français', pairs:[
    {sl:'Dober',   fr:'Bon'},
    {sl:'Slab',    fr:'Mauvais'},
    {sl:'Visok',   fr:'Grand (de taille)'},
    {sl:'Nizek',   fr:'Petit (de taille)'},
    {sl:'Lep',     fr:'Beau'},
  ]},
  { type:'qcm', label:'QCM', question:'Comment dit-on "Le café est bon" (kava = café, fém.) ?',
    choices:['Kava je dobra.','Kava je dober.','Kava je dobro.','Je dobra kava.'], correct:0 },
  { type:'fill', label:'Phrase à trous', sentence:['Danes je ___ vreme. (Aujourd\'hui il fait beau temps)'], blank:'lepo', bank:['lepo','slabo','dobro','hladno'] },
  { type:'dictee', label:'Dictée', word:'Majhen', phonetic:'[MAY-hen]', hint:'Petit (masculin) — 6 lettres' },
  { type:'reconstruct', label:'Reconstitue', sentence:'Avto je velik in hiter.', words:['Avto','je','velik','in','hiter','.'] },
];
