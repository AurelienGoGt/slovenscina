// ═══════════════════════════════════════════
// C-1 — Les origines de la Slovénie
// Celtes, Romains, Slaves — jusqu'au 9e siècle
// Niveau 5 — Culture & Histoire
// ═══════════════════════════════════════════
const EX_C_1 = [

  { type:'presentation', label:'Histoire', word:'Slovenija', phonetic:'[slo-VE-ni-ya]', translation:'La Slovénie',
    cultural:{title:'Un carrefour au cœur de l\'Europe', text:'La Slovénie occupe un territoire stratégique entre les Alpes, la mer Adriatique et la plaine pannonienne. Ce carrefour naturel a attiré de nombreux peuples depuis la préhistoire. Des traces humaines datant de 250 000 ans ont été retrouvées dans les grottes du Karst.'},
    histoire:{title:'La flûte de Divje babe — 60 000 ans', text:'La flûte de Divje babe, découverte en 1995 dans une grotte slovène, est considérée comme le plus ancien instrument de musique du monde — façonnée par les Néandertaliens il y a 60 000 ans. Elle est conservée au Musée national de Ljubljana.'} },

  { type:'presentation', label:'Histoire', word:'Kelti in Rimljani', phonetic:'[KEL-ti in rim-LYA-ni]', translation:'Les Celtes et les Romains',
    cultural:{title:'Celtes et Romains sur le sol slovène', text:'Au 4e siècle av. J.-C., les Celtes (Kelti) s\'installent sur le territoire slovène actuel. À Novo Mesto, leurs princes sont enterrés avec des chars et des bijoux en or. Au 1er siècle av. J.-C., les Romains (Rimljani) conquièrent la région et fondent trois grandes villes : Emona (Ljubljana), Poetovio (Ptuj) et Celeia (Celje).'},
    histoire:{title:'Emona — l\'ancêtre de Ljubljana', text:'Emona, fondée vers 14 ap. J.-C., était un camp militaire romain puis une ville prospère de 6 000 habitants. Ses murs, ses thermes et son réseau d\'eau courante témoignent d\'une civilisation avancée. Des vestiges romains sont encore visibles aujourd\'hui au centre de Ljubljana.'} },

  { type:'tts_repeat', label:'Vocabulaire', word:'Kelti', phonetic:'[KEL-ti]', translation:'Les Celtes' },
  { type:'tts_repeat', label:'Vocabulaire', word:'Rimljani', phonetic:'[rim-LYA-ni]', translation:'Les Romains' },
  { type:'tts_repeat', label:'Vocabulaire', word:'Slovani', phonetic:'[slo-VA-ni]', translation:'Les Slaves' },
  { type:'tts_repeat', label:'Vocabulaire', word:'Karantanija', phonetic:'[ka-ran-TA-ni-ya]', translation:'La Carantanie' },

  { type:'matching', label:'Villes romaines → noms actuels', pairs:[
    {sl:'Emona',     fr:'Ljubljana'},
    {sl:'Poetovio',  fr:'Ptuj'},
    {sl:'Celeia',    fr:'Celje'},
    {sl:'Neviodunum',fr:'Drnovo (près de Krško)'},
  ]},

  { type:'qcm', label:'QCM', question:'La flûte de Divje babe est considérée comme…',
    choices:['Le plus ancien instrument de musique du monde','Le plus grand instrument d\'Europe','Un instrument celte du 4e siècle av. J.-C.','Un objet romain retrouvé à Emona'], correct:0 },

  { type:'qcm', label:'QCM', question:'À quel siècle les Slaves arrivent-ils sur le territoire slovène ?',
    choices:['Au 6e siècle ap. J.-C.','Au 4e siècle av. J.-C.','Au 1er siècle ap. J.-C.','Au 12e siècle ap. J.-C.'], correct:0 },

  { type:'presentation', label:'Histoire', word:'Karantanija', phonetic:'[ka-ran-TA-ni-ya]', translation:'La Carantanie',
    cultural:{title:'La Carantanie — premier État slave', text:'Au 7e siècle, les tribus slaves fondent la Carantanie (Karantanija), le premier État slave de l\'histoire européenne. Son centre était la Klagenfurt actuelle (Autriche). Les Carantaniens développent une tradition démocratique unique : l\'intronisation du duc se faisait sur la Pierre du Prince (Knežji kamen) à Krnski grad, une cérémonie décrite par Machiavel comme modèle de gouvernement.'},
    histoire:{title:'Les Brižinski Spomeniki — 999 ap. J.-C.', text:'Les Brižinski Spomeniki (Monuments de Freising) sont les premiers textes écrits dans une langue slave en alphabet latin, datant d\'environ 999 ap. J.-C. Conservés à la Bibliothèque d\'État de Munich, ils contiennent trois textes religieux en vieux-slovène et constituent la plus précieuse relique de la langue slovène.'} },

  { type:'tts_repeat', label:'Dates clés', word:'V šestem stoletju so prišli Slovani.', phonetic:'[v shes-tem sto-LE-tyu so pri-SHLI slo-VA-ni]', translation:'Au 6e siècle, les Slaves sont arrivés.' },

  { type:'matching', label:'Époques → événements', pairs:[
    {sl:'4e s. av. J.-C.',fr:'Arrivée des Celtes'},
    {sl:'1er s. ap. J.-C.',fr:'Fondation d\'Emona (Romains)'},
    {sl:'6e s. ap. J.-C.', fr:'Arrivée des Slaves'},
    {sl:'999 ap. J.-C.',   fr:'Brižinski Spomeniki (1ers textes slovènes)'},
  ]},

  { type:'fill', label:'Phrase à trous', sentence:['___ so prišli v šestem stoletju. (Les Slaves sont arrivés au 6e siècle.)'], blank:'Slovani', bank:['Slovani','Kelti','Rimljani','Germani'] },

  { type:'fill', label:'Phrase à trous', sentence:['Emona je bila rimsko ___ (ville). (Emona était une ville romaine.)'], blank:'mesto', bank:['mesto','država','reka','gora'] },

  { type:'qcm', label:'QCM', question:'Qu\'est-ce que la Carantanie ?',
    choices:['Le premier État slave de l\'histoire européenne','Une province romaine','Un royaume celte','Une ville médiévale slovène'], correct:0 },

  { type:'qcm', label:'QCM', question:'Où sont conservés les Brižinski Spomeniki ?',
    choices:['À la Bibliothèque d\'État de Munich','Au Musée national de Ljubljana','À Rome','À Vienne'], correct:0 },

  { type:'reconstruct', label:'Reconstitue', sentence:'Kelti so živeli v Slovenji v četrtem stoletju.', words:['Kelti','so','živeli','v','Slovenji','v','četrtem','stoletju','.'] },

  { type:'story', label:'Dialogue culturel', title:'V muzeju — Au musée',
    narration:'Ana in njen prijatelj Luc sta v Narodnem muzeju v Ljubljani. Gledajo razstavo o prazgodovini.',
    dialogue:[
      {speaker:'Luc',  text:'Kaj je to ? Je zelo staro.', side:'left'},
      {speaker:'Ana',  text:'To je keltski nakit iz Novega Mesta. Star je 2500 let !', side:'right'},
      {speaker:'Luc',  text:'Neverjetno ! In kdaj so prišli Rimljani ?', side:'left'},
      {speaker:'Ana',  text:'V prvem stoletju pred našim štetjem. Ustanovili so Emono — to je Ljubljana !', side:'right'},
      {speaker:'Luc',  text:'In kdaj so prišli Slovani ?', side:'left'},
      {speaker:'Ana',  text:'V šestem stoletju. Naši predniki so prišli iz vzhodne Evrope.', side:'right'},
      {speaker:'Luc',  text:'In Karantanija ? Sem bral o tem.', side:'left'},
      {speaker:'Ana',  text:'Karantanija je bila prvi slovanski državni tvorbi. Ponosni smo nanj !', side:'right'},
    ],
    translation:{
      'Kaj je to ? Je zelo staro.': 'Qu\'est-ce que c\'est ? C\'est très vieux.',
      'To je keltski nakit iz Novega Mesta. Star je 2500 let !': 'C\'est un bijou celte de Novo Mesto. Il a 2500 ans !',
      'Neverjetno ! In kdaj so prišli Rimljani ?': 'Incroyable ! Et quand les Romains sont-ils arrivés ?',
      'V prvem stoletju pred našim štetjem. Ustanovili so Emono — to je Ljubljana !': 'Au 1er siècle av. J.-C. Ils ont fondé Emona — c\'est Ljubljana !',
      'In kdaj so prišli Slovani ?': 'Et quand les Slaves sont-ils arrivés ?',
      'V šestem stoletju. Naši predniki so prišli iz vzhodne Evrope.': 'Au 6e siècle. Nos ancêtres venaient d\'Europe de l\'Est.',
      'In Karantanija ? Sem bral o tem.': 'Et la Carantanie ? J\'ai lu à ce sujet.',
      'Karantanija je bila prvi slovanski državni tvorbi. Ponosni smo nanj !': 'La Carantanie était la première entité d\'État slave. Nous en sommes fiers !',
    }},

  { type:'qcm', label:'Quiz final', question:'Quelle ville romaine est devenue Ljubljana ?',
    choices:['Emona','Poetovio','Celeia','Neviodunum'], correct:0 },

  { type:'qcm', label:'Quiz final', question:'Que contiennent les Brižinski Spomeniki ?',
    choices:['Les premiers textes écrits en langue slave en alphabet latin','Les lois de la Carantanie','Les chroniques des rois celtes','Un dictionnaire romano-slave'], correct:0 },

  { type:'qcm', label:'Quiz final', question:'Sur quelle pierre le duc de Carantanie était-il intronisé ?',
    choices:['La Pierre du Prince (Knežji kamen)','La Pierre de Ljubljana','La Pierre du Triglav','La Pierre de Ptuj'], correct:0 },

  { type:'qcm', label:'Quiz final', question:'Qu\'est-ce que la flûte de Divje babe ?',
    choices:['Le plus ancien instrument de musique du monde','Un instrument romain du 1er siècle','Un instrument celte du 4e siècle av. J.-C.','Un instrument slave du 6e siècle'], correct:0 },

  { type:'qcm', label:'Quiz final', question:'Comment dit-on "les Slaves" en slovène ?',
    choices:['Slovani','Kelti','Rimljani','Germani'], correct:0 },

];

// ── fin EX_C_1 ──
