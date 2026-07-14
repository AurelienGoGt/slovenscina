// ═══════════════════════════════════════════
// 6-1 — Le sport slovène
// Généré le 2026-07-14 par generate_lesson.py
// ═══════════════════════════════════════════
const EX_6_1 = [
  { type:'presentation', label:'Découverte', word:'Šport', phonetic:'[SH-port]', translation:'Le sport',
    cultural:{title:'Le géant sportif slovène', text:'La Slovénie est un petit pays avec de grands sportifs. Tadej Pogačar et Primož Roglič sont des légendes du cyclisme, ayant remporté des titres mondiaux. Le saut à ski est également très populaire, avec Peter Prevc comme champion.'},
    histoire:{title:'L\'histoire du sport en Slovénie', text:'Après l\'indépendance en 1991, le sport slovène a prospéré. Les athlètes slovènes ont brillé aux Jeux Olympiques et dans les compétitions internationales, représentant fièrement leur nation.'} },

  { type:'tts_repeat', label:'Au ski', word:'Smučam v Alpah.', phonetic:'[SMU-cham v AL-pah]', translation:'Je fais du ski dans les Alpes.' },
  { type:'tts_repeat', label:'Au basket', word:'Igram košarko.', phonetic:'[I-gram KO-shar-ko]', translation:'Je joue au basket.' },
  { type:'tts_repeat', label:'En course', word:'Tečem vsak dan.', phonetic:'[TE-cham VSK dan]', translation:'Je cours tous les jours.' },
  { type:'tts_repeat', label:'En natation', word:'Plavam v morju.', phonetic:'[PLA-vam v MOR-yu]', translation:'Je nage dans la mer.' },

  { type:'matching', label:'Sports → français', pairs:[
    {sl:'Smučanje', fr:'Ski'}, {sl:'Kolesarjenje', fr:'Cyclisme'},
    {sl:'Košarka', fr:'Basket'},   {sl:'Atletika', fr:'Athlétisme'},
    {sl:'Plavanje', fr:'Natation'},
  ]},

  { type:'qcm', label:'QCM grammaire', question:'Pour parler de l\'activité sportive, on utilise :',
    choices:['Ukvarjati se z + instrumental','Jouer au + accusatif','Prati + nominatif','Faire + génitif'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['Tadej Pogačar je ___ v Tour de France. (Tadej Pogačar a gagné le Tour de France.)'], blank:'zmagal', bank:['zmagal','izgubil','postavil','prvi'] },

  { type:'fill', label:'Phrase à trous', sentence:['Peter Prevc je ___ rekord. (Peter Prevc a établi un record.)'], blank:'postavil', bank:['zmagal','izgubil','postavil','prvaki'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Luka Dončić je najboljši košarkaš na svetu.', words:['Luka','Dončić','je','najboljši','košarkaš','na','svetu','.'] },

  { type:'story', label:'Dialogue sportif', title:'Na tekmi — Au match',
    narration:'Ana in Marko sta na košarkarski tekmi v Ljubljani. Navijata za svojo ekipo.',
    dialogue:[
      {speaker:'Ana', text:'Kako dobro igra Luka Dončić!', side:'left'},
      {speaker:'Marko', text:'Res je! On je najboljši košarkaš na svetu.', side:'right'},
      {speaker:'Ana', text:'Ali veš, kdaj je naslednja tekma?', side:'left'},
      {speaker:'Marko', text:'Naslednji teden, v torek.', side:'right'},
      {speaker:'Ana', text:'Super! Gremo skupaj?', side:'left'},
      {speaker:'Marko', text:'Seveda! Zelo rad grem.', side:'right'},
      {speaker:'Ana', text:'Upam, da zmagajo!', side:'left'},
      {speaker:'Marko', text:'Tudi jaz! Navijali bomo!', side:'right'},
    ],
    translation:{
      'Kako dobro igra Luka Dončić!': 'Comme Luka Dončić joue bien !',
      'Res je! On je najboljši košarkaš na svetu.': 'C\'est vrai ! Il est le meilleur basketteur au monde.',
      'Ali veš, kdaj je naslednja tekma?': 'Sais-tu quand est le prochain match ?',
      'Naslednji teden, v torek.': 'La semaine prochaine, mardi.',
      'Super! Gremo skupaj?': 'Super ! On y va ensemble ?',
      'Seveda! Zelo rad grem.': 'Bien sûr ! J\'y vais avec plaisir.',
      'Upam, da zmagajo!': 'J\'espère qu\'ils vont gagner !',
      'Tudi jaz! Navijali bomo!': 'Moi aussi ! Nous allons encourager !',
    }},
];

// ── fin EX_6_1 ──
