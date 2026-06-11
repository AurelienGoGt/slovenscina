// ═══════════════════════════════════════════
// C-2 — Habsbourg & réveil national
// 1282–1918 : de l'Empire à l'émancipation
// Niveau 5 — Culture & Histoire
// ═══════════════════════════════════════════
const EX_C_2 = [

  { type:'presentation', label:'Histoire', word:'Habsburžani', phonetic:'[hab-SBUR-zha-ni]', translation:'Les Habsbourg',
    cultural:{title:'Six siècles sous les Habsbourg', text:'À partir de 1282, le territoire slovène passe sous la domination des Habsbourg (Habsburžani), qui le garderont jusqu\'en 1918. Cette période n\'est pas seulement une domination étrangère : elle voit aussi l\'essor des villes, le développement du commerce et, paradoxalement, le réveil de la conscience nationale slovène. Le slovène était parlé par le peuple, mais le latin et l\'allemand dominaient la vie officielle.'},
    histoire:{title:'Primož Trubar — père de la langue écrite slovène', text:'En 1550, le réformateur protestant Primož Trubar (1508-1586) publie les deux premiers livres imprimés en slovène : Catechismus et Abecedarium. C\'est la naissance de la langue slovène écrite. Trubar écrit dans l\'introduction : "Drage Krajnce, Slovence" (Chers Carnioliens, Slovènes) — première utilisation du mot "Slovenci" dans un texte imprimé.'} },

  { type:'presentation', label:'Histoire', word:'Ilirske province', phonetic:'[i-LIR-ske PRO-vin-tse]', translation:'Les Provinces Illyriennes',
    cultural:{title:'1809-1813 : Napoléon en Slovénie', text:'De 1809 à 1813, Napoléon intègre le territoire slovène dans les Provinces Illyriennes (Ilirske province), avec Ljubljana comme capitale. Le français devient langue officielle, mais le slovène est introduit dans les écoles pour la première fois. Cette courte période napoléonienne est décisive : elle éveille le sentiment national slovène et modernise les institutions.'},
    histoire:{title:'Le printemps des peuples 1848', text:'En 1848, la révolution européenne touche la Slovénie. Les intellectuels publient le programme "Zedinjena Slovenija" (Slovénie unie) qui réclame un État slovène autonome au sein de l\'Empire. Ce projet ne voit pas le jour, mais le mouvement national est lancé. France Prešeren venait de mourir quelques semaines plus tôt — son œuvre sera le symbole de ce réveil.'} },

  { type:'tts_repeat', label:'Vocabulaire', word:'Habsburžani', phonetic:'[hab-SBUR-zha-ni]', translation:'Les Habsbourg' },
  { type:'tts_repeat', label:'Vocabulaire', word:'narodni preporod', phonetic:'[na-ROD-ni pre-PO-rod]', translation:'le réveil national' },
  { type:'tts_repeat', label:'Vocabulaire', word:'Zedinjena Slovenija', phonetic:'[ze-di-NYE-na slo-VE-ni-ya]', translation:'Slovénie unie (programme 1848)' },
  { type:'tts_repeat', label:'Expression', word:'Drage Krajnce, Slovence !', phonetic:'[DRA-ge KRAYN-tse, slo-VEN-tse]', translation:'Chers Carnioliens, Slovènes ! (Trubar, 1550)' },

  { type:'matching', label:'Personnes → rôle', pairs:[
    {sl:'Primož Trubar',   fr:'Premier livre imprimé en slovène (1550)'},
    {sl:'France Prešeren', fr:'Poète national — symbole du réveil'},
    {sl:'Napoléon',        fr:'Provinces Illyriennes — slovène à l\'école'},
    {sl:'Janez Vajkard Valvasor', fr:'Historien — "La Gloire du Duché de Carniole" (1689)'},
  ]},

  { type:'qcm', label:'QCM', question:'Quelle est la date de publication des premiers livres en slovène ?',
    choices:['1550','1848','1809','1282'], correct:0 },

  { type:'qcm', label:'QCM', question:'Qu\'est-ce que "Zedinjena Slovenija" ?',
    choices:['Le programme politique de 1848 pour un État slovène autonome','Le titre du premier livre en slovène','Le nom des Provinces Illyriennes','Le journal fondé par Prešeren'], correct:0 },

  { type:'qcm', label:'QCM', question:'Quelle ville était la capitale des Provinces Illyriennes ?',
    choices:['Ljubljana','Trieste','Graz','Vienne'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['Primož Trubar je napisal prvi ___ (livre) v slovenščini. (Primož Trubar a écrit le premier livre en slovène.)'], blank:'knjigo', bank:['knjigo','pesem','zakon','pismo'] },

  { type:'fill', label:'Phrase à trous', sentence:['Ilirske province so bile od leta ___ do 1813. (Les Provinces Illyriennes ont existé de 1809 à 1813.)'], blank:'1809', bank:['1809','1848','1282','1550'] },

  { type:'matching', label:'Dates → événements', pairs:[
    {sl:'1282', fr:'Les Habsbourg prennent le contrôle'},
    {sl:'1550', fr:'Premiers livres en slovène (Trubar)'},
    {sl:'1809', fr:'Provinces Illyriennes de Napoléon'},
    {sl:'1848', fr:'Programme Zedinjena Slovenija'},
  ]},

  { type:'tts_repeat', label:'Phrase clé', word:'Slovenščina je bila jezik naroda.', phonetic:'[slo-VEN-shchi-na ye BI-la YE-zik na-RO-da]', translation:'Le slovène était la langue du peuple.' },

  { type:'story', label:'Dialogue culturel', title:'O zgodovini — Sur l\'histoire',
    narration:'Julija razlaga zgodovino Slovènije svojemu prijatelju Théo iz Francije.',
    dialogue:[
      {speaker:'Théo', text:'Kdaj so prišli Habsburžani v Slovenijo ?', side:'left'},
      {speaker:'Julija', text:'Leta 1282. Vladali so nam več kot šesto let.', side:'right'},
      {speaker:'Théo', text:'In je bil Napoléon res tukaj ?', side:'left'},
      {speaker:'Julija', text:'Ja ! Od 1809 do 1813. Ljubljana je bila celo prestolnica Ilirskih provinc.', side:'right'},
      {speaker:'Théo', text:'Zanimivo ! In kdo je bil Primož Trubar ?', side:'left'},
      {speaker:'Julija', text:'On je napisal prvi knjigi v slovenščini leta 1550. Je oče slovenskega knjižnega jezika.', side:'right'},
      {speaker:'Théo', text:'In France Prešeren ?', side:'left'},
      {speaker:'Julija', text:'Naš največji pesnik ! Njegova Zdravljica je danes slovenska himna.', side:'right'},
    ],
    translation:{
      'Kdaj so prišli Habsburžani v Slovenijo ?': 'Quand les Habsbourg sont-ils arrivés en Slovénie ?',
      'Leta 1282. Vladali so nam več kot šesto let.': 'En 1282. Ils nous ont gouvernés plus de six cents ans.',
      'In je bil Napoléon res tukaj ?': 'Et Napoléon était vraiment ici ?',
      'Ja ! Od 1809 do 1813. Ljubljana je bila celo prestolnica Ilirskih provinc.': 'Oui ! De 1809 à 1813. Ljubljana était même la capitale des Provinces Illyriennes.',
      'Zanimivo ! In kdo je bil Primož Trubar ?': 'Intéressant ! Et qui était Primož Trubar ?',
      'On je napisal prvi knjigi v slovenščini leta 1550. Je oče slovenskega knjižnega jezika.': 'Il a écrit les premiers livres en slovène en 1550. Il est le père de la langue slovène écrite.',
      'In France Prešeren ?': 'Et France Prešeren ?',
      'Naš največji pesnik ! Njegova Zdravljica je danes slovenska himna.': 'Notre plus grand poète ! Sa Zdravljica est aujourd\'hui l\'hymne slovène.',
    }},

  { type:'qcm', label:'Quiz final', question:'Pendant combien d\'années les Habsbourg ont-ils gouverné la Slovénie ?',
    choices:['Plus de 600 ans','300 ans','100 ans','50 ans'], correct:0 },

  { type:'qcm', label:'Quiz final', question:'Quel réformateur a publié les premiers livres en slovène en 1550 ?',
    choices:['Primož Trubar','France Prešeren','Janez Bleiweis','Valvasor'], correct:0 },

  { type:'qcm', label:'Quiz final', question:'Quelle œuvre de Prešeren est devenue l\'hymne slovène ?',
    choices:['Zdravljica','Sonetni venec','Krst pri Savici','Abecedarium'], correct:0 },

  { type:'qcm', label:'Quiz final', question:'Que réclamait le programme "Zedinjena Slovenija" de 1848 ?',
    choices:['Un État slovène autonome au sein de l\'Empire','L\'union avec la Croatie','L\'indépendance totale de la Slovénie','Le rattachement à la France'], correct:0 },

  { type:'reconstruct', label:'Reconstitue', sentence:'Primož Trubar je oče slovenskega knjižnega jezika.', words:['Primož','Trubar','je','oče','slovenskega','knjižnega','jezika','.'] },

];

// ── fin EX_C_2 ──
