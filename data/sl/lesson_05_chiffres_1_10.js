// ═══════════════════════════════════════════
// 1-5 — Chiffres 1 à 10
// ═══════════════════════════════════════════
const EX_1_5 = [
  { type:'presentation', label:'Découverte', word:'Nič — Ena — Dve — Tri', phonetic:'[NICH] [E-na] [DVE] [TRI]', translation:'0 — 1 — 2 — 3',
    cultural:{title:'Le duel slovène', text:"Le slovène est l'une des dernières langues à avoir conservé le 'duel' — une forme pour exactement 2 objets. Dva/Dve = 2 (masc./fém.neutre). Fascinant !"},
    histoire:{title:'Une langue ancienne', text:"Le slovène conserve des formes grammaticales disparues dans la plupart des langues slaves. Le duel (dva, dve) est utilisé au quotidien par tous les Slovènes — pas seulement dans les livres ! Cette forme s'applique aux noms, adjectifs et verbes."} },

  { type:'presentation', label:'En/Ena — le genre du 1', word:'En (m) — Ena (f) — Eno (n)', phonetic:'[EN] [E-na] [E-no]', translation:'Un (masc.) — Une (fém.) — Un (neutre)', noTTS:true,
    cultural:{title:'Le nombre 1 s\'accorde', text:'"En" pour les noms masculins : en brat (un frère). "Ena" pour les noms féminins : ena sestra (une sœur). "Eno" pour les noms neutres : eno jabolko (une pomme). Comme les articles en français !'} },

  { type:'tts_repeat', label:'Écoute et répète 0-5', word:'Nič, ena, dve, tri, štiri, pet', phonetic:'[NICH, E-na, DVE, TRI, CHTI-ri, PET]', translation:'0, 1, 2, 3, 4, 5' },
  { type:'tts_repeat', label:'Écoute et répète 6-10', word:'Šest, sedem, osem, devet, deset', phonetic:'[CHEST, SE-dem, O-sem, DE-vet, DE-set]', translation:'6, 7, 8, 9, 10' },

  { type:'tts_repeat', label:'Compte de 0 à 10 !', word:'Nič, ena, dve, tri, štiri, pet, šest, sedem, osem, devet, deset', phonetic:'[NICH] [E-na] [DVE] [TRI] [CHTI-ri] [PET] [CHEST] [SE-dem] [O-sem] [DE-vet] [DE-set]', translation:'0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10' },

  { type:'matching', label:'Chiffres 0-5', pairs:[
    {sl:'0 — nič',    fr:'zéro'},
    {sl:'1 — ena',    fr:'un'},
    {sl:'2 — dve',    fr:'deux'},
    {sl:'3 — tri',    fr:'trois'},
    {sl:'4 — štiri',  fr:'quatre'},
  ]},
  { type:'matching', label:'Chiffres 5-10', pairs:[
    {sl:'5 — pet',    fr:'cinq'},
    {sl:'6 — šest',   fr:'six'},
    {sl:'7 — sedem',  fr:'sept'},
    {sl:'8 — osem',   fr:'huit'},
    {sl:'9 — devet',  fr:'neuf'},
  ]},

  { type:'matching', label:'Chiffres — traduction inverse', pairs:[
    {sl:'ena',    fr:'1 — un'},
    {sl:'dve',    fr:'2 — deux'},
    {sl:'tri',    fr:'3 — trois'},
    {sl:'štiri',  fr:'4 — quatre'},
    {sl:'pet',    fr:'5 — cinq'},
  ]},

  { type:'qcm', label:'QCM', question:'Comment dit-on "8" ?', choices:['Osem','Sedem','Devet','Šest'], correct:0 },
  { type:'qcm', label:'QCM', question:'"Štiri" signifie…', choices:['Quatre','Cinq','Six','Trois'], correct:0 },
  { type:'qcm', label:'QCM grammaire', question:'"Une pomme" — jabolko est neutre. On dit :',
    choices:['Eno jabolko','Ena jabolko','En jabolko','Dve jabolko'], correct:0 },

  { type:'qcm', label:'QCM', question:'Comment dit-on "3 pommes" (jabolka = neutre pluriel) ?',
    choices:['Tri jabolka','Tri jabolko','Tri jabolki','Dve jabolka'], correct:0 },

  { type:'presentation', label:'Le duel — dva/dve', word:'Dva (m) — Dve (f/n)', phonetic:'[DVA] [DVE]', translation:'Deux masculin — Deux féminin/neutre', noTTS:true,
    cultural:{title:'Le duel au quotidien', text:'"Dva brata" = deux frères (brat est masculin). "Dve sestri" = deux sœurs (sestra est féminin). "Dve jabolki" = deux pommes (jabolko est neutre). Cette distinction dva/dve est utilisée tous les jours en Slovénie !'} },

  { type:'tts_repeat', label:'Le duel en action', word:'Dva brata. Dve sestri. Dve jabolki.', phonetic:'[DVA BRA-ta] [DVE SES-tri] [DVE ya-BOL-ki]', translation:'Deux frères. Deux sœurs. Deux pommes.' },

  { type:'presentation', label:'L\'âge', word:'Imam ... let.', phonetic:'[I-mam ... LET]', translation:'J\'ai ... ans.',
    cultural:{title:'Imam = j\'ai', text:'"Imam" = j\'ai. "Let" = années (génitif pluriel). "Imam dvajset let" = j\'ai vingt ans. Cette structure revient souvent ! Note : 1 an = leto, 2 ans = leti, 3-4 ans = leta, 5+ ans = let.'} },

  { type:'tts_repeat', label:'Dire son âge', word:'Imam pet let. Imam deset let. Imam osem let.', phonetic:'[I-mam PET LET] [I-mam DE-set LET] [I-mam O-sem LET]', translation:"J'ai 5 ans. J'ai 10 ans. J'ai 8 ans." },

  { type:'presentation', label:'Les numéros de téléphone', word:'Moja telefonska številka je…', phonetic:'[MO-ya te-le-FON-ska SHTE-vil-ka ye]', translation:'Mon numéro de téléphone est…',
    cultural:{title:'Numéros par paires', text:'En Slovénie, les numéros de téléphone sont donnés par paires. 040 123 456 = "nič štiri nič, ena dva tri, štiri pet šest". Les numéros mobiles commencent par 040, 041, 051, 070, etc. C\'est une bonne façon de pratiquer les chiffres au quotidien !'} },

  { type:'fill', label:'Phrase à trous', sentence:['Imam ___ let. (J\'ai 7 ans.)'], blank:'sedem', bank:['sedem','osem','devet','šest'] },
  { type:'fill', label:'Phrase à trous', sentence:['___ brata sta doma. (Deux frères sont à la maison.)'], blank:'Dva', bank:['Dva','Dve','Tri','Šest'] },
  { type:'fill', label:'Phrase à trous', sentence:['Imam ___ leti. (J\'ai 2 ans.)'], blank:'dve', bank:['dve','dva','tri','pet'] },
  { type:'fill', label:'Phrase à trous', sentence:['Imam ___ otroke. (J\'ai 4 enfants.)'], blank:'štiri', bank:['štiri','tri','pet','sedem'] },
  { type:'fill', label:'Phrase à trous', sentence:['___ kava prosim. (Un café s\'il vous plaît.)'], blank:'Ena', bank:['Ena','Dve','Tri','Pet'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Imam sedem let.', words:['Imam','sedem','let','.'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Imam dve sestri in enega brata.', words:['Imam','dve','sestri','in','enega','brata','.'] },

  { type:'qcm', label:'QCM', question:'Combien de langues officielles a la Slovénie ?',
    choices:['1 (+ 2 minoritaires)','3','2','4'], correct:0 },

  { type:'qcm', label:'QCM', question:'Que signifie "Nimam še" ?',
    choices:['Pas encore','Je n\'ai pas','J\'ai déjà','Plus du tout'], correct:0 },

  { type:'story', label:'Histoire', title:'Les enfants de Luka',
    narration:"Luka parle de ses enfants à son collègue Marc. Il est fier de sa petite famille.",
    dialogue:[
      {speaker:'Marc', text:'Koliko otrok imaš ?', side:'left'},
      {speaker:'Luka', text:'Imam tri otroke.', side:'right'},
      {speaker:'Marc', text:'Koliko let imajo ?', side:'left'},
      {speaker:'Luka', text:'Najstarejši ima deset let, srednji sedem, najmlajši pa dve leti.', side:'right'},
      {speaker:'Marc', text:'Lepa družina !', side:'left'},
      {speaker:'Luka', text:'Hvala ! In ti, imaš otroke ?', side:'right'},
      {speaker:'Marc', text:'Nimam še. Imam samo dva psa !', side:'left'},
    ],
    translation:{
      'Koliko otrok imaš ?':'Combien d\'enfants as-tu ?',
      'Imam tri otroke.':'J\'ai trois enfants.',
      'Koliko let imajo ?':'Quel âge ont-ils ?',
      'Najstarejši ima deset let, srednji sedem, najmlajši pa dve leti.':'L\'aîné a dix ans, le milieu sept, et le plus jeune deux ans.',
      'Lepa družina !':'Belle famille !',
      'In ti, imaš otroke ?':'Et toi, tu as des enfants ?',
      'Nimam še. Imam samo dva psa !':'Pas encore. J\'ai seulement deux chiens !',
    }
  },

  { type:'qcm', label:'QCM histoire', question:'Combien d\'enfants a Luka ?', choices:['3','2','4','1'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'Quel âge a l\'enfant du milieu ?', choices:['7 ans','10 ans','2 ans','5 ans'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'Que signifie "Lepa družina" ?', choices:['Belle famille !','Grande famille !','Ma famille !','Ta famille !'], correct:0 },

  { type:'dictee', label:'Dictée', word:'Štiri', phonetic:'[CHTI-ri]', hint:'4 — 6 lettres avec Š' },
  { type:'dictee', label:'Dictée', word:'Sedem', phonetic:'[SE-dem]', hint:'7 — 5 lettres' },

  { type:'dialogue', label:'À toi !', lines:[
    {speaker:'Ana', text:'Koliko let imaš ?', side:'left'},
    {speaker:'Toi', text:'Imam ___ let.', side:'right', blank:'osem', hint:'8 → osem'},
    {speaker:'Ana', text:'In koliko bratov imaš ?', side:'left'},
    {speaker:'Toi', text:'Imam ___ brata.', side:'right', blank:'dva', hint:'2 frères → dva'},
  ]},
];
