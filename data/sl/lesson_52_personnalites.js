// ═══════════════════════════════════════════
// C-6 — Personnalités slovènes célèbres
// Prešeren, Plečnik, Cankar, Trubar, Dončić…
// Niveau 5 — Culture & Histoire
// ═══════════════════════════════════════════
const EX_C_6 = [

  { type:'presentation', label:'Culture', word:'France Prešeren', phonetic:'[FRAN-tse pre-SHEH-ren]', translation:'France Prešeren (1800–1849)',
    cultural:{title:'Le poète national — symbole de l\'âme slovène', text:'France Prešeren est le plus grand poète slovène et le symbole de la littérature nationale. Son œuvre maîtresse est le "Sonetni venec" (Couronne de sonnets, 1834), 15 sonnets interconnectés — un chef-d\'œuvre de virtuosité formelle. Sa "Zdravljica" (Toast, 1844) est devenue l\'hymne national en 1991. Son portrait figure sur le billet de 1 000 tolars et son visage reste sur les pièces de 2 euros slovènes.'},
    histoire:{title:'Jože Plečnik — l\'architecte de Ljubljana', text:'Jože Plečnik (1872-1957) a façonné le visage de Ljubljana comme nul autre. Élève de Otto Wagner à Vienne, il transforme la ville entre 1921 et 1957 : le Triple Pont (Tromostovje), la Halle centrale (Tržnica), la Bibliothèque nationale (NUK), le marché couvert le long de la Ljubljanica. Son style mêle art nouveau, classicisme et éléments slaves — unique au monde. Classé "Œuvre architecturale du XXe siècle" par l\'UNESCO en 2021.'} },

  { type:'presentation', label:'Culture', word:'Primož Trubar', phonetic:'[PRI-mozh TRU-bar]', translation:'Primož Trubar (1508–1586)',
    cultural:{title:'Le réformateur — père de la langue écrite', text:'Primož Trubar est le père de la langue slovène écrite. Pasteur protestant formé à Trieste et Vienne, il publie en 1550 les deux premiers livres en slovène : "Catechismus" et "Abecedarium". Il crée ainsi l\'alphabet slovène standardisé. Exilé pour ses idées protestantes, il travaille depuis l\'Allemagne et publie 22 livres en slovène. Sa phrase fondatrice : "Drage Krajnce, Slovence" (Chers Carnioliens, Slovènes).'},
    histoire:{title:'Ivan Cankar & Jurij Vega', text:'Ivan Cankar (1876-1918) est le père de la prose slovène moderne. Ses romans et nouvelles dressent un portrait social impitoyable de la condition slovène sous les Habsbourg. — Jurij Vega (1754-1802) est le grand mathématicien slovène : ses Tables logarithmiques (1783) ont été utilisées pendant deux siècles dans le monde entier. Baron de l\'Empire, il a aussi calculé le nombre π avec une précision record pour son époque.'} },

  { type:'tts_repeat', label:'Noms propres', word:'France Prešeren', phonetic:'[FRAN-tse pre-SHEH-ren]', translation:'France Prešeren — poète national' },
  { type:'tts_repeat', label:'Noms propres', word:'Jože Plečnik', phonetic:'[YO-zhe PLECH-nik]', translation:'Jože Plečnik — architecte de Ljubljana' },
  { type:'tts_repeat', label:'Noms propres', word:'Primož Trubar', phonetic:'[PRI-mozh TRU-bar]', translation:'Primož Trubar — père de la langue écrite' },
  { type:'tts_repeat', label:'Noms propres', word:'Luka Dončić', phonetic:'[LU-ka DON-chich]', translation:'Luka Dončić — star NBA slovène' },

  { type:'matching', label:'Personnalité → domaine', pairs:[
    {sl:'France Prešeren',  fr:'Poésie — hymne national "Zdravljica"'},
    {sl:'Jože Plečnik',     fr:'Architecture — Triple Pont de Ljubljana'},
    {sl:'Primož Trubar',    fr:'Réforme protestante — premiers livres en slovène'},
    {sl:'Jurij Vega',       fr:'Mathématiques — Tables logarithmiques'},
  ]},

  { type:'qcm', label:'QCM', question:'Quel monument de Ljubljana a été conçu par Plečnik ?',
    choices:['Le Triple Pont (Tromostovje)','La cathédrale','Le château','La gare centrale'], correct:0 },

  { type:'qcm', label:'QCM', question:'Quel livre Trubar a-t-il publié en 1550 ?',
    choices:['Catechismus et Abecedarium','Zdravljica','Sonetni venec','Krst pri Savici'], correct:0 },

  { type:'qcm', label:'QCM', question:'Sur quelle pièce de monnaie trouve-t-on le visage de Prešeren ?',
    choices:['La pièce de 2 euros slovène','La pièce de 1 euro','Le billet de 50 euros','La pièce de 50 cents'], correct:0 },

  { type:'matching', label:'Œuvre → auteur', pairs:[
    {sl:'Zdravljica (hymne national)', fr:'France Prešeren'},
    {sl:'NUK (Bibliothèque nationale)', fr:'Jože Plečnik'},
    {sl:'Tables logarithmiques (1783)', fr:'Jurij Vega'},
    {sl:'Hlapec Jernej in njegova pravica', fr:'Ivan Cankar'},
  ]},

  { type:'fill', label:'Phrase à trous', sentence:['France Prešeren je naš največji ___ (poète). (France Prešeren est notre plus grand poète.)'], blank:'pesnik', bank:['pesnik','arhitekt','matematik','pisatelj'] },

  { type:'fill', label:'Phrase à trous', sentence:['Plečnik je oblikoval ___ (le visage) Ljubljane. (Plečnik a façonné le visage de Ljubljana.)'], blank:'obraz', bank:['obraz','ime','glasbo','zakon'] },

  { type:'tts_repeat', label:'Phrase culturelle', word:'Slovenija ima mnogo slavnih umetnikov in znanstvenikov.', phonetic:'[slo-VE-ni-ya IMA MNO-go SLAV-nih u-MET-ni-kov in znan-STVE-ni-kov]', translation:'La Slovénie a beaucoup d\'artistes et de scientifiques célèbres.' },

  { type:'story', label:'Discussion culturelle', title:'V galeriji — À la galerie',
    narration:'Matej vodi svojo sestro Chloe po razstavi o slavnih Slovencih.',
    dialogue:[
      {speaker:'Chloe', text:'Kdo je ta moški na sliki ?', side:'left'},
      {speaker:'Matej', text:'To je France Prešeren — naš nacionalni pesnik. Njegova slika je na dvoevrskem kovancku.', side:'right'},
      {speaker:'Chloe', text:'In ta arhitektura v ozadju ?', side:'left'},
      {speaker:'Matej', text:'To je Tromostovje — Trojni most. Plečnikovo delo. On je oblikoval večino Ljubljane.', side:'right'},
      {speaker:'Chloe', text:'Impresivno ! In kdo je bil Primož Trubar ?', side:'left'},
      {speaker:'Matej', text:'On je napisal prva slovenska knjiga leta 1550. Brez Trubarja ne bi imeli pisne slovenščine !', side:'right'},
      {speaker:'Chloe', text:'In Luka Dončić — on ni zgodovinska oseba...', side:'left'},
      {speaker:'Matej', text:'Res ! Toda danes je naš največji športnik. Igra v NBA in je ponos celotne Slovénije !', side:'right'},
    ],
    translation:{
      'Kdo je ta moški na sliki ?': 'Qui est cet homme sur le tableau ?',
      'To je France Prešeren — naš nacionalni pesnik. Njegova slika je na dvoevrskem kovancku.': 'C\'est France Prešeren — notre poète national. Son portrait est sur la pièce de 2 euros.',
      'In ta arhitektura v ozadju ?': 'Et cette architecture en arrière-plan ?',
      'To je Tromostovje — Trojni most. Plečnikovo delo. On je oblikoval večino Ljubljane.': 'C\'est le Tromostovje — le Triple Pont. L\'œuvre de Plečnik. Il a façonné la majorité de Ljubljana.',
      'Impresivno ! In kdo je bil Primož Trubar ?': 'Impressionnant ! Et qui était Primož Trubar ?',
      'On je napisal prva slovenska knjiga leta 1550. Brez Trubarja ne bi imeli pisne slovenščine !': 'Il a écrit les premiers livres slovènes en 1550. Sans Trubar, nous n\'aurions pas le slovène écrit !',
      'In Luka Dončić — on ni zgodovinska oseba...': 'Et Luka Dončić — ce n\'est pas un personnage historique...',
      'Toda danes je naš največji športnik. Igra v NBA in je ponos celotne Slovénije !': 'Mais aujourd\'hui c\'est notre plus grand sportif. Il joue en NBA et est la fierté de toute la Slovénie !',
    }},

  { type:'qcm', label:'Quiz final', question:'Quand Plečnik a-t-il reçu la reconnaissance UNESCO ?',
    choices:['En 2021','En 1991','En 1957','En 2004'], correct:0 },

  { type:'qcm', label:'Quiz final', question:'Que signifie "pesnik" ?',
    choices:['poète','architecte','mathématicien','romancier'], correct:0 },

  { type:'qcm', label:'Quiz final', question:'Ivan Cankar est considéré comme…',
    choices:['Le père de la prose slovène moderne','Le père de la langue écrite slovène','Le plus grand architecte slovène','Le réformateur protestant'], correct:0 },

  { type:'qcm', label:'Quiz final', question:'Dans quel sport Luka Dončić est-il célèbre ?',
    choices:['Basketball (NBA)','Football','Tennis','Ski alpin'], correct:0 },

  { type:'reconstruct', label:'Reconstitue', sentence:'Prešernova Zdravljica je slovenska himna.', words:['Prešernova','Zdravljica','je','slovenska','himna','.'] },

];

// ── fin EX_C_6 ──
