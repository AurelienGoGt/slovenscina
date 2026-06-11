// ═══════════════════════════════════════════
// C-7 — Traditions & fêtes nationales
// Kurent, Kres, Martinovanje, fêtes nationales
// Niveau 5 — Culture & Histoire
// ═══════════════════════════════════════════
const EX_C_7 = [

  { type:'presentation', label:'Traditions', word:'Kurentovanje', phonetic:'[ku-ren-to-VA-nye]', translation:'Le Kurentovanje (Carnaval de Ptuj)',
    cultural:{title:'Kurentovanje — le plus grand carnaval de Slovénie', text:'Le Kurentovanje est le festival hivernal le plus célèbre de Slovénie, organisé chaque année à Ptuj (la plus ancienne ville slovène) en février. Le Kurent est un personnage mythique en peau de mouton avec des cornes et des cloches — il chasse l\'hiver et les mauvais esprits. Des milliers de "Kurents" défilent dans les rues. Le festival attire plus de 100 000 visiteurs. Il est inscrit au patrimoine culturel immatériel de l\'UNESCO depuis 2017.'},
    histoire:{title:'Jurjevanje & Kres — les fêtes du cycle naturel', text:'Le Jurjevanje célèbre le retour du printemps autour du 23 avril (Saint-Georges). Des cérémonies de verdure et des danses marquent le renouveau. Le Kres (ou Ivanje) est la fête du solstice d\'été, le 23 juin — des feux de joie (kresovi) sont allumés sur les collines dans tout le pays. Cette tradition préchrétienne est intimement liée au paysage et aux cycles agricoles slovènes.'} },

  { type:'presentation', label:'Fêtes', word:'Martinovanje', phonetic:'[mar-ti-no-VA-nye]', translation:'La Saint-Martin (11 novembre)',
    cultural:{title:'Martinovanje — la fête du nouveau vin', text:'Le Martinovanje (Saint-Martin) est fêté le 11 novembre dans toute la Slovénie. Selon la tradition, c\'est ce jour-là que le moût (mošt) se transforme en vin nouveau. La Saint-Martin est l\'occasion de dégustations dans les caves et les restaurants, avec l\'oie rôtie (gos) comme plat traditionnel. "Na martinovo se mošt v vino spremi" — à la Saint-Martin, le moût devient vin.'},
    histoire:{title:'Fêtes nationales slovènes', text:'La Slovénie célèbre plusieurs fêtes nationales : Dan reformacije (31 octobre) honore la Réforme protestante et Primož Trubar — unique en Europe, c\'est un jour férié officiel. Dan državnosti (25 juin) commémore l\'indépendance de 1991. Prešernov dan (8 février) est la fête de la culture nationale, en hommage au poète. Velika noč (Pâques) reste la fête religieuse la plus importante.'} },

  { type:'tts_repeat', label:'Fêtes', word:'Kurentovanje', phonetic:'[ku-ren-to-VA-nye]', translation:'le Kurentovanje — carnaval de Ptuj (février)' },
  { type:'tts_repeat', label:'Fêtes', word:'Kres', phonetic:'[KRES]', translation:'le Kres — feux de la Saint-Jean (23 juin)' },
  { type:'tts_repeat', label:'Fêtes', word:'Martinovanje', phonetic:'[mar-ti-no-VA-nye]', translation:'la Saint-Martin — fête du nouveau vin (11 nov.)' },
  { type:'tts_repeat', label:'Proverbe', word:'Na martinovo se mošt v vino spremi.', phonetic:'[na mar-TI-no-vo se MOSHT v VI-no SPRE-mi]', translation:'À la Saint-Martin, le moût se change en vin.' },

  { type:'matching', label:'Fête → date / description', pairs:[
    {sl:'Kurentovanje',  fr:'Février — carnaval de Ptuj (UNESCO)'},
    {sl:'Kres / Ivanje', fr:'23 juin — feux de solstice d\'été'},
    {sl:'Martinovanje',  fr:'11 novembre — fête du nouveau vin'},
    {sl:'Dan državnosti',fr:'25 juin — fête nationale (indépendance 1991)'},
  ]},

  { type:'qcm', label:'QCM', question:'Quelle ville accueille le Kurentovanje ?',
    choices:['Ptuj','Ljubljana','Maribor','Celje'], correct:0 },

  { type:'qcm', label:'QCM', question:'Qu\'est-ce que le Kurent ?',
    choices:['Un personnage mythique en peau de mouton qui chasse l\'hiver','Une danse traditionnelle alpine','Un plat de carnaval','Un instrument de musique folk'], correct:0 },

  { type:'qcm', label:'QCM', question:'Le Dan reformacije (31 oct) rend hommage à…',
    choices:['La Réforme protestante et Primož Trubar','L\'indépendance slovène','France Prešeren','Saint-Martin'], correct:0 },

  { type:'matching', label:'Fête nationale → signification', pairs:[
    {sl:'Dan državnosti (25 juin)',   fr:'Indépendance 1991'},
    {sl:'Prešernov dan (8 févr.)',    fr:'Fête de la culture nationale'},
    {sl:'Dan reformacije (31 oct.)',  fr:'Réforme protestante — Trubar'},
    {sl:'Dan upora (27 avril)',       fr:'Jour de l\'insurrection (WWII)'},
  ]},

  { type:'fill', label:'Phrase à trous', sentence:['Kurentovanje je najslavnejši ___ (carnaval) v Sloveniji. (Le Kurentovanje est le carnaval le plus célèbre de Slovénie.)'], blank:'karneval', bank:['karneval','praznik','festival','sejem'] },

  { type:'fill', label:'Phrase à trous', sentence:['Na Kres prižgemo ___ (des feux de joie) po vsej Slovenji. (Pour le Kres nous allumons des feux de joie partout en Slovénie.)'], blank:'kresove', bank:['kresove','sveče','lučke','ognje'] },

  { type:'tts_repeat', label:'Expression festive', word:'Vesele praznike !', phonetic:'[ve-SE-le PRAZ-ni-ke]', translation:'Joyeuses fêtes !' },

  { type:'story', label:'Dialogue festif', title:'Kurentovanje v Ptuju — Carnaval de Ptuj',
    narration:'Thomas iz Lyona je prvič na Kurentovanju v Ptuju. Njegova prijateljica Nina mu razlaga tradicijo.',
    dialogue:[
      {speaker:'Thomas', text:'Kaj je to za kostume ?! So malo strašljivi...', side:'left'},
      {speaker:'Nina',   text:'To so Kurenti ! Menjajo pošasti zime in slabih duhov. S klobukami in zvonovi jih prežene.', side:'right'},
      {speaker:'Thomas', text:'In kdaj je ta festival ?', side:'left'},
      {speaker:'Nina',   text:'Vsako leto februarja, pred pustom. Ptuj je najstarejše slovensko mesto — tradicija je stara tisoče let.', side:'right'},
      {speaker:'Thomas', text:'In kakšne druge tradicije imate ?', side:'left'},
      {speaker:'Nina',   text:'Kres na koncu junija — ognji na vseh hribih. In Martinovanje novembra — ko mošt postane vino !', side:'right'},
      {speaker:'Thomas', text:'Torej gremo novembra na degustacijo vina ?', side:'left'},
      {speaker:'Nina',   text:'Seveda ! In jemo gos z mlinci. To je prava slovenska tradicija !', side:'right'},
    ],
    translation:{
      'Kaj je to za kostume ?! So malo strašljivi...': 'Quels sont ces costumes ?! Ils sont un peu effrayants...',
      'To so Kurenti ! Menjajo pošasti zime in slabih duhov. S klobukami in zvonovi jih prežene.': 'Ce sont des Kurents ! Ils repoussent les monstres de l\'hiver et les mauvais esprits. Avec leurs chapeaux et leurs cloches, ils les chassent.',
      'In kdaj je ta festival ?': 'Et quand a lieu ce festival ?',
      'Vsako leto februarja, pred pustom. Ptuj je najstarejše slovensko mesto — tradicija je stara tisoče let.': 'Chaque année en février, avant le carême. Ptuj est la plus ancienne ville slovène — la tradition a des milliers d\'années.',
      'In kakšne druge tradicije imate ?': 'Et quelles autres traditions avez-vous ?',
      'Kres na koncu junija — ognji na vseh hribih. In Martinovanje novembra — ko mošt postane vino !': 'Le Kres fin juin — des feux sur toutes les collines. Et le Martinovanje en novembre — quand le moût devient vin !',
      'Torej gremo novembra na degustacijo vina ?': 'Alors on va à une dégustation de vin en novembre ?',
      'Seveda ! In jemo gos z mlinci. To je prava slovenska tradicija !': 'Bien sûr ! Et on mange l\'oie avec des mlinci (pâtes). C\'est la vraie tradition slovène !',
    }},

  { type:'qcm', label:'Quiz final', question:'Le Kurentovanje a été inscrit à l\'UNESCO en…',
    choices:['2017','2004','2007','2021'], correct:0 },

  { type:'qcm', label:'Quiz final', question:'Quel est le plat traditionnel de la Saint-Martin ?',
    choices:['L\'oie rôtie (gos)','La potica','La jota','Le štruklji'], correct:0 },

  { type:'qcm', label:'Quiz final', question:'Le Prešernov dan (8 février) est la fête de…',
    choices:['La culture nationale','L\'indépendance','La Réforme protestante','L\'hiver'], correct:0 },

  { type:'qcm', label:'Quiz final', question:'Comment dit-on "joyeuses fêtes" en slovène ?',
    choices:['Vesele praznike !','Zdravje !','Vse najboljše !','Dober dan !'], correct:0 },

  { type:'reconstruct', label:'Reconstitue', sentence:'Kurentovanje je najpomembnejši zimski festival v Sloveniji.', words:['Kurentovanje','je','najpomembnejši','zimski','festival','v','Sloveniji','.'] },

];

// ── fin EX_C_7 ──
