// ═══════════════════════════════════════════
// C-5 — Géographie & régions
// Triglav, Karst, Soča, Bled, les 7 régions
// Niveau 5 — Culture & Histoire
// ═══════════════════════════════════════════
const EX_C_5 = [

  { type:'presentation', label:'Géographie', word:'Slovenija', phonetic:'[slo-VE-ni-ya]', translation:'La Slovénie',
    cultural:{title:'Un pays minuscule, une richesse infinie', text:'La Slovénie couvre 20 273 km² — à peine plus grande que la Galice ou légèrement plus petite que la Suisse. Avec 2,1 millions d\'habitants, elle est l\'un des plus petits États membres de l\'UE. Et pourtant : 60% de forêts (2e rang européen), 3 zones climatiques distinctes, des Alpes à la mer, du Karst à la plaine pannonienne — tout cela en moins de 3h de voiture d\'un bout à l\'autre.'},
    histoire:{title:'Triglav — montagne sacrée', text:'Le Triglav (2864 m) est le point culminant et le symbole national absolu de la Slovénie. Il figure sur le drapeau et les armoiries. Selon la tradition, chaque Slovène se doit de gravir le Triglav au moins une fois dans sa vie. Le Parc national du Triglav (Triglavski narodni park, 880 km²) est le seul parc national du pays, créé en 1924.'} },

  { type:'presentation', label:'Géographie', word:'Kras', phonetic:'[KRAS]', translation:'Le Karst',
    cultural:{title:'Kras — le mot qui a conquis le monde', text:'Le mot "karst" (Kras en slovène) désigne dans le monde entier les paysages calcaires avec grottes, dolines et rivières souterraines. Il vient du plateau calcaire slovène du Kras, entre Ljubljana et Trieste. La Grotte de Postojna (Postojnska jama, 24 km de galeries) et la Grotte de Škocjan (classée UNESCO) sont les joyaux mondiaux du karst.'},
    histoire:{title:'La Soča — rivière émeraude', text:'La Soča est une des plus belles rivières d\'Europe : ses eaux turquoise translucides coulent depuis les Alpes Juliennes jusqu\'à la mer Adriatique via l\'Italie (Isonzo). Pendant la Première Guerre mondiale, les batailles de l\'Isonzo (1915-1917) ont fait 300 000 morts dans la vallée. Ernest Hemingway s\'en est inspiré pour "L\'Adieu aux armes" (1929).'} },

  { type:'tts_repeat', label:'Géographie', word:'Triglav', phonetic:'[TRI-glav]', translation:'le Triglav (2864 m — sommet national)' },
  { type:'tts_repeat', label:'Géographie', word:'Kras', phonetic:'[KRAS]', translation:'le Karst' },
  { type:'tts_repeat', label:'Géographie', word:'Soča', phonetic:'[SO-cha]', translation:'la Soča (rivière turquoise)' },
  { type:'tts_repeat', label:'Géographie', word:'Blejsko jezero', phonetic:'[BLEY-sko ye-ZE-ro]', translation:'le lac de Bled' },

  { type:'matching', label:'Lieux → description', pairs:[
    {sl:'Triglav',          fr:'2864 m — point culminant, symbole national'},
    {sl:'Postojnska jama',  fr:'24 km de galeries — la plus grande grotte du Karst'},
    {sl:'Bled',             fr:'Lac avec château médiéval sur un îlot'},
    {sl:'Piran',            fr:'Perle vénitienne de la côte adriatique'},
  ]},

  { type:'qcm', label:'QCM', question:'D\'où vient le mot "karst" utilisé dans le monde entier ?',
    choices:['Du plateau calcaire slovène (Kras)','D\'une ville italienne','D\'un géologue autrichien','Du nom d\'une grotte française'], correct:0 },

  { type:'qcm', label:'QCM', question:'Quelle superficie couvre la Slovénie ?',
    choices:['20 273 km²','50 000 km²','10 000 km²','35 000 km²'], correct:0 },

  { type:'matching', label:'Région → caractéristique', pairs:[
    {sl:'Gorenjska',  fr:'Alpes slovènes, Triglav, Bled, Kranjska Gora'},
    {sl:'Primorska',  fr:'Côte adriatique, Piran, Karst, Soča'},
    {sl:'Štajerska',  fr:'Maribor, vignobles, huile de potiron'},
    {sl:'Prekmurje',  fr:'Plaine pannonienne, gibanica, tournesols'},
  ]},

  { type:'qcm', label:'QCM', question:'Combien de zones climatiques coexistent en Slovénie ?',
    choices:['3','2','5','1'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['Slovenija ima ___ (60%) gozdov. (La Slovénie a 60% de forêts.)'], blank:'šestdeset odstotkov', bank:['šestdeset odstotkov','malo','nobenega','samo deset'] },

  { type:'fill', label:'Phrase à trous', sentence:['Triglav je ___ (le plus haut sommet) v Sloveniji. (Le Triglav est le plus haut sommet de Slovénie.)'], blank:'najvišji vrh', bank:['najvišji vrh','največje jezero','najdaljša reka','najstareše mesto'] },

  { type:'tts_repeat', label:'Expression', word:'Vsak Slovenec mora vsaj enkrat splezati na Triglav.', phonetic:'[vsak slo-VE-nets MO-ra VSAY en-krat SPLE-za-ti na TRI-glav]', translation:'Chaque Slovène doit gravir le Triglav au moins une fois.' },

  { type:'story', label:'Dialogue touristique', title:'V Bledu — À Bled',
    narration:'Sophie je prvič v Bledu. Njen vodnik Gregor ji razlaga o pokrajini.',
    dialogue:[
      {speaker:'Sophie', text:'Kako je jezero tako lepo ?', side:'left'},
      {speaker:'Gregor', text:'Bled je naš dragulj. Ledeniško jezero z otokom — redkost v Evropi !', side:'right'},
      {speaker:'Sophie', text:'In kakšna je ta gora v ozadju ?', side:'left'},
      {speaker:'Gregor', text:'To je Triglav — 2864 metrov. Naš nationalni simbol. Vsak Slovenec ga mora splezati enkrat.', side:'right'},
      {speaker:'Sophie', text:'In koliko je Slovenija velika ?', side:'left'},
      {speaker:'Gregor', text:'Le 20.273 kvadratnih kilometrov — manjša od Švice. A imamo Alpe, morje in Kras !', side:'right'},
      {speaker:'Sophie', text:'In kaj je Kras ?', side:'left'},
      {speaker:'Gregor', text:'Kraška planota — od tam prihaja beseda "karst" v vseh jezikih sveta !', side:'right'},
    ],
    translation:{
      'Kako je jezero tako lepo ?': 'Comment le lac est-il si beau ?',
      'Bled je naš dragulj. Ledeniško jezero z otokom — redkost v Evropi !': 'Bled est notre joyau. Un lac glaciaire avec une île — une rareté en Europe !',
      'In kakšna je ta gora v ozadju ?': 'Et quelle est cette montagne en arrière-plan ?',
      'To je Triglav — 2864 metrov. Naš nationalni simbol. Vsak Slovenec ga mora splezati enkrat.': 'C\'est le Triglav — 2864 mètres. Notre symbole national. Chaque Slovène doit le gravir une fois.',
      'In koliko je Slovenija velika ?': 'Et quelle est la superficie de la Slovénie ?',
      'Le 20.273 kvadratnih kilometrov — manjša od Švice. A imamo Alpe, morje in Kras !': 'Seulement 20 273 km² — plus petite que la Suisse. Mais nous avons les Alpes, la mer et le Karst !',
      'In kaj je Kras ?': 'Et qu\'est-ce que le Karst ?',
      'Kraška planota — od tam prihaja beseda "karst" v vseh jezikih sveta !': 'Le plateau calcaire — de là vient le mot "karst" dans toutes les langues du monde !',
    }},

  { type:'qcm', label:'Quiz final', question:'Quel écrivain américain a été inspiré par la vallée de la Soča ?',
    choices:['Ernest Hemingway','F. Scott Fitzgerald','Mark Twain','John Steinbeck'], correct:0 },

  { type:'qcm', label:'Quiz final', question:'Quelle grotte slovène est classée au patrimoine mondial de l\'UNESCO ?',
    choices:['La grotte de Škocjan','La grotte de Postojna','La grotte de Križna','La grotte de Dimnica'], correct:0 },

  { type:'qcm', label:'Quiz final', question:'Quelle ville est le centre de la région de Štajerska (Styrie slovène) ?',
    choices:['Maribor','Ljubljana','Koper','Celje'], correct:0 },

  { type:'qcm', label:'Quiz final', question:'Comment dit-on "lac" en slovène ?',
    choices:['jezero','reka','gora','morje'], correct:0 },

  { type:'reconstruct', label:'Reconstitue', sentence:'Slovenija ima Alpe, morje in kraško pokrajino.', words:['Slovenija','ima','Alpe',',','morje','in','kraško','pokrajino','.'] },

];

// ── fin EX_C_5 ──
