// ═══════════════════════════════════════════
// C-3 — Indépendance & Europe
// Yougoslavie, 1991, UE 2004, euro 2007
// Niveau 5 — Culture & Histoire
// ═══════════════════════════════════════════
const EX_C_3 = [

  { type:'presentation', label:'Histoire', word:'Jugoslavija', phonetic:'[yu-go-SLA-vi-ya]', translation:'La Yougoslavie',
    cultural:{title:'La Yougoslavie — 1918 à 1991', text:'En 1918, après la Première Guerre mondiale et la dissolution de l\'Empire austro-hongrois, la Slovénie rejoint le Royaume des Serbes, Croates et Slovènes (renamed Yougoslavie en 1929). C\'est une nouvelle domination, mais différente : la Slovénie est la plus développée économiquement et contribue à 30% du PIB yougoslave avec seulement 8% de la population.'},
    histoire:{title:'Tito et la RSS de Slovénie', text:'Après la Seconde Guerre mondiale, Josip Broz Tito instaure la République Fédérative Socialiste de Yougoslavie. La Slovénie devient la République Socialiste de Slovénie (Socialistična republika Slovenija). Sous Tito, la Slovénie jouit d\'une relative autonomie et d\'un niveau de vie plus élevé qu\'ailleurs en Yougoslavie.'} },

  { type:'presentation', label:'Histoire', word:'Osamosvojitev', phonetic:'[o-sa-mo-SVOI-tev]', translation:'L\'indépendance',
    cultural:{title:'25 juin 1991 — La déclaration d\'indépendance', text:'Le 25 juin 1991, la Slovénie proclame son indépendance. Le lendemain, l\'Armée populaire yougoslave (JNA) attaque. La "Guerre des Dix Jours" (Desetdnevna vojna) fait 19 morts slovènes et 44 soldats yougoslaves. Le 7 juillet 1991, l\'accord de Brioni met fin aux combats. En janvier 1992, l\'Union européenne reconnaît l\'indépendance slovène.'},
    histoire:{title:'2004 et 2007 : l\'ancrage européen', text:'Le 1er mai 2004, la Slovénie rejoint l\'Union européenne avec 9 autres pays. C\'est une étape historique : la Slovénie devient le premier pays de l\'ex-Yougoslavie à intégrer l\'UE. Le 1er janvier 2007, elle adopte l\'euro, devenant le premier pays d\'Europe centrale et orientale à rejoindre la zone euro. En 2008, elle préside le Conseil de l\'UE pour la première fois.'} },

  { type:'tts_repeat', label:'Vocabulaire', word:'osamosvojitev', phonetic:'[o-sa-mo-SVOI-tev]', translation:'l\'indépendance' },
  { type:'tts_repeat', label:'Vocabulaire', word:'Desetdnevna vojna', phonetic:'[DE-set-dnev-na VOY-na]', translation:'la Guerre des Dix Jours' },
  { type:'tts_repeat', label:'Date clé', word:'Petindvajsetega junija 1991', phonetic:'[pe-tin-DVAY-se-te-ga yu-NI-ya]', translation:'Le 25 juin 1991' },
  { type:'tts_repeat', label:'Vocabulaire', word:'Evropska unija', phonetic:'[ev-ROP-ska U-ni-ya]', translation:'l\'Union européenne' },

  { type:'matching', label:'Dates → événements', pairs:[
    {sl:'1918', fr:'Création du Royaume SCS (futur Yougoslavie)'},
    {sl:'25 juin 1991', fr:'Déclaration d\'indépendance slovène'},
    {sl:'1er mai 2004', fr:'Adhésion à l\'Union européenne'},
    {sl:'1er janv. 2007',fr:'Adoption de l\'euro'},
  ]},

  { type:'qcm', label:'QCM', question:'Combien de jours a duré la guerre d\'indépendance slovène ?',
    choices:['10 jours','30 jours','100 jours','3 jours'], correct:0 },

  { type:'qcm', label:'QCM', question:'Quelle proportion du PIB yougoslave la Slovénie représentait-elle ?',
    choices:['30 %','8 %','50 %','15 %'], correct:0 },

  { type:'qcm', label:'QCM', question:'Quel accord a mis fin à la guerre des Dix Jours ?',
    choices:['L\'accord de Brioni','L\'accord de Maastricht','L\'accord de Dayton','L\'accord de Ljubljana'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['Slovenija se je osamosvojila ___ junija 1991. (La Slovénie a proclamé son indépendance le 25 juin 1991.)'], blank:'petindvajsetega', bank:['petindvajsetega','prvega','triindvajsetega','tridesetega'] },

  { type:'fill', label:'Phrase à trous', sentence:['Slovenija je vstopila v Evropsko unijo leta ___. (La Slovénie a rejoint l\'UE en 2004.)'], blank:'2004', bank:['2004','2007','1991','1918'] },

  { type:'matching', label:'Slovène → français', pairs:[
    {sl:'osamosvojitev',      fr:'indépendance'},
    {sl:'vojna',              fr:'guerre'},
    {sl:'Evropska unija',     fr:'Union européenne'},
    {sl:'evro',               fr:'euro'},
  ]},

  { type:'tts_repeat', label:'Phrase historique', word:'Slovenija je postala neodvisna država leta 1991.', phonetic:'[slo-VE-ni-ya ye po-STA-la ne-od-VIS-na DRZA-va LE-ta]', translation:'La Slovénie est devenue un État indépendant en 1991.' },

  { type:'story', label:'Dialogue culturel', title:'Dan državnosti — Fête nationale',
    narration:'Je petindvajseti junij — Dan državnosti (Fête nationale slovène). Marko razlaga zgodovino mladi turistki Claire.',
    dialogue:[
      {speaker:'Claire', text:'Zakaj je danes praznik ?', side:'left'},
      {speaker:'Marko',  text:'Danes je Dan državnosti. Petindvajsetega junija 1991 smo razglasili neodvisnost.', side:'right'},
      {speaker:'Claire', text:'Je bila vojna ?', side:'left'},
      {speaker:'Marko',  text:'Ja, kratka vojna — samo deset dni. Imenujemo jo Desetdnevna vojna.', side:'right'},
      {speaker:'Claire', text:'In kdaj ste vstopili v Evropsko unijo ?', side:'left'},
      {speaker:'Marko',  text:'Leta 2004. Bili smo med prvimi novimi članicami.', side:'right'},
      {speaker:'Claire', text:'In euro ?', side:'left'},
      {speaker:'Marko',  text:'Euro imamo od leta 2007. Bili smo prvi v srednji in vzhodni Evropi !', side:'right'},
    ],
    translation:{
      'Zakaj je danes praznik ?': 'Pourquoi est-ce un jour férié aujourd\'hui ?',
      'Danes je Dan državnosti. Petindvajsetega junija 1991 smo razglasili neodvisnost.': 'C\'est la Fête nationale. Le 25 juin 1991, nous avons proclamé notre indépendance.',
      'Je bila vojna ?': 'Il y a eu une guerre ?',
      'Ja, kratka vojna — samo deset dni. Imenujemo jo Desetdnevna vojna.': 'Oui, une courte guerre — seulement dix jours. On l\'appelle la Guerre des Dix Jours.',
      'In kdaj ste vstopili v Evropsko unijo ?': 'Et quand avez-vous rejoint l\'Union européenne ?',
      'Leta 2004. Bili smo med prvimi novimi članicami.': 'En 2004. Nous étions parmi les premiers nouveaux membres.',
      'In euro ?': 'Et l\'euro ?',
      'Euro imamo od leta 2007. Bili smo prvi v srednji in vzhodni Evropi !': 'Nous avons l\'euro depuis 2007. Nous avons été les premiers en Europe centrale et orientale !',
    }},

  { type:'qcm', label:'Quiz final', question:'Quand la Slovénie a-t-elle proclamé son indépendance ?',
    choices:['Le 25 juin 1991','Le 7 juillet 1991','Le 1er mai 2004','Le 1er janvier 2007'], correct:0 },

  { type:'qcm', label:'Quiz final', question:'La Slovénie a été le premier pays d\'Europe centrale à adopter…',
    choices:['L\'euro','L\'UE','L\'OTAN','Le franc suisse'], correct:0 },

  { type:'qcm', label:'Quiz final', question:'Comment dit-on "indépendance" en slovène ?',
    choices:['osamosvojitev','neodvisnost','vojna','država'], correct:0 },

  { type:'qcm', label:'Quiz final', question:'En quelle année la Slovénie a-t-elle présidé le Conseil de l\'UE pour la première fois ?',
    choices:['2008','2004','2007','2010'], correct:0 },

  { type:'reconstruct', label:'Reconstitue', sentence:'Slovenija je leta 2004 vstopila v Evropsko unijo.', words:['Slovenija','je','leta','2004','vstopila','v','Evropsko','unijo','.'] },

];

// ── fin EX_C_3 ──
