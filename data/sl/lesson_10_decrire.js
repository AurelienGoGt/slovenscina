// ═══════════════════════════════════════════
// 1-10 — Décrire une personne
// ═══════════════════════════════════════════
const EX_1_10 = [
  { type:'presentation', label:'L\'apparence', word:'Visok — Vitek — Debel', phonetic:'[VI-sok] [VI-tek] [DE-bel]', translation:'Grand (de taille) — Mince — Gros',
    cultural:{title:'Décrire sans offenser', text:'Comme partout, sois prudent ! En slovène, on peut dire "vitek" (mince, valorisant) ou "debel" (gros). Pour les descriptions neutres, préfère "normalne postave" (de corpulence normale).'},
    histoire:{title:'Slovènes célèbres', text:'Melania Trump est née à Sevnica. Le philosophe Slavoj Žižek est mondialement connu. La skieuse Tina Maze — 2 médailles d\'or aux JO 2014. Le cycliste Tadej Pogačar a remporté le Tour de France 2020 et 2021. Le kayakiste Benjamin Savšek — champion olympique 2021. Petite nation, grands champions !'} },

  { type:'presentation', label:'Accord masc./fém.', word:'Visok (m) — Visoka (f)', phonetic:'[VI-sok] [VI-so-ka]', translation:'Grand (m) — Grande (f)', noTTS:true,
    cultural:{title:'Adjectifs de description physique', text:'Comme tous les adjectifs slovènes, les descriptifs physiques s\'accordent. Masculin : visok, vitek, debel, mlad, star. Féminin : visoka, vitka, debela, mlada, stara. Neutre : visoko, vitko, debelo. Attention : majhen → majhna (petit/e) !'} },

  { type:'tts_repeat', label:'Apparence physique', word:'Visok, nizek, vitek, debel, mlad, star', phonetic:'[VI-sok, NI-zek, VI-tek, DE-bel, MLAD, STAR]', translation:'Grand, petit, mince, gros, jeune, âgé' },
  { type:'tts_repeat', label:'Cheveux & yeux', word:'Svetle lase, temne lase, modre oči, zelene oči, rjave oči', phonetic:'[SVET-le LA-se, TEM-ne LA-se, MOD-re O-chi, ze-LE-ne O-chi, RYA-ve O-chi]', translation:'Cheveux blonds, cheveux sombres, yeux bleus, yeux verts, yeux marrons' },

  { type:'matching', label:'Apparence → français', pairs:[
    {sl:'Visok',       fr:'Grand (de taille)'},
    {sl:'Svetle lase', fr:'Cheveux blonds/clairs'},
    {sl:'Temne lase',  fr:'Cheveux sombres'},
    {sl:'Modre oči',   fr:'Yeux bleus'},
    {sl:'Zelene oči',  fr:'Yeux verts'},
  ]},

  { type:'qcm', label:'QCM', question:'"Ana je visoka." signifie…',
    choices:['Ana est grande','Ana est petite','Ana est mince','Ana est belle'], correct:0 },
  { type:'qcm', label:'QCM grammaire', question:'Pour décrire un homme (masculin), on utilise :',
    choices:['Visok (sans -a)','Visoka (avec -a)','Visoko (avec -o)','Visoki (avec -i)'], correct:0 },

  { type:'presentation', label:'Description physique détaillée', word:'Ima rjave lase. Ima modre oči.', phonetic:'[I-ma RYA-ve LA-se] [I-ma MOD-re O-chi]', translation:'Il/Elle a les cheveux bruns. Il/Elle a les yeux bleus.',
    cultural:{title:'Les cheveux et les yeux', text:'"Ima" = il/elle a. Pour les cheveux : svetli lasje (blonds), rjavi lasje (bruns), črni lasje (noirs), rdeči lasje (roux). Pour les yeux : modre oči (bleus), rjave oči (marrons), zelene oči (verts). "Ima" reste invariable — très pratique !'} },

  { type:'tts_repeat', label:'Couleurs de cheveux', word:'Ima svetle lase. Ima rjave lase. Ima črne lase. Ima rdeče lase.', phonetic:'[I-ma SVET-le LA-se] [I-ma RYA-ve LA-se] [I-ma TCHR-ne LA-se] [I-ma R-de-che LA-se]', translation:'Il/Elle a les cheveux blonds. Bruns. Noirs. Roux.' },
  { type:'tts_repeat', label:'Couleurs d\'yeux', word:'Ima modre oči. Ima rjave oči. Ima zelene oči. Je visok in prijazen.', phonetic:'[I-ma MOD-re O-chi] [I-ma RYA-ve O-chi] [I-ma ze-LE-ne O-chi] [ye VI-sok in pri-YA-zen]', translation:'Il a les yeux bleus. Marrons. Verts. Il est grand et sympa.' },

  { type:'matching', label:'Couleurs cheveux & yeux', pairs:[
    {sl:'Svetli lasje',  fr:'Cheveux blonds'},
    {sl:'Rjavi lasje',   fr:'Cheveux bruns'},
    {sl:'Črni lasje',    fr:'Cheveux noirs'},
    {sl:'Rdeči lasje',   fr:'Cheveux roux'},
    {sl:'Rjave oči',     fr:'Yeux marrons'},
  ]},

  { type:'qcm', label:'QCM', question:'Comment dit-on "il a les cheveux noirs" ?',
    choices:['Ima črne lase.','Ima temne oči.','Je črn.','Ima črna lasa.'], correct:0 },
  { type:'qcm', label:'QCM', question:'"Ima rdeče lase" signifie…',
    choices:['Il/Elle a les cheveux roux','Il/Elle a les yeux rouges','Il/Elle a une robe rouge','Il/Elle est roux'], correct:0 },

  { type:'presentation', label:'Le caractère', word:'Prijazen — Zabaven — Pameten', phonetic:'[pri-YA-zen] [za-BA-ven] [pa-ME-ten]', translation:'Sympa/Gentil — Drôle/Amusant — Intelligent',
    cultural:{title:'Le caractère en slovène', text:'Les Slovènes sont souvent décrits comme "rezerviran" (réservés) mais "prijazen" (sympathiques) une fois qu\'on les connaît. C\'est une fierté nationale !'} },

  { type:'tts_repeat', label:'Caractère', word:'Prijazen, zabaven, pameten, delaven, miren, živahen', phonetic:'[pri-YA-zen, za-BA-ven, pa-ME-ten, de-LA-ven, MI-ren, zhi-VA-hen]', translation:'Sympa, drôle, intelligent, travailleur, calme, vif/dynamique' },

  { type:'tts_repeat', label:'Personnalité féminin', word:'Prijazna, zabavna, pametna, delavna, mirna, živahna', phonetic:'[pri-YAZ-na, za-BAV-na, pa-MET-na, de-LAV-na, MIR-na, zhi-VAH-na]', translation:'Sympa (f), drôle (f), intelligente (f), travailleuse (f), calme (f), vive (f)' },

  { type:'matching', label:'Caractère → français', pairs:[
    {sl:'Prijazen',  fr:'Sympa / Gentil'},
    {sl:'Zabaven',   fr:'Drôle / Amusant'},
    {sl:'Pameten',   fr:'Intelligent'},
    {sl:'Delaven',   fr:'Travailleur'},
    {sl:'Miren',     fr:'Calme'},
  ]},

  { type:'qcm', label:'QCM grammaire', question:'Pour décrire une femme sympathique, on dit :',
    choices:['Prijazna','Prijazen','Prijazno','Prijazni'], correct:0 },
  { type:'qcm', label:'QCM', question:'"Je miren in delaven" signifie…',
    choices:['Il est calme et travailleur','Elle est calme et travailleuse','Il est sympa et drôle','Il est grand et mince'], correct:0 },

  { type:'presentation', label:'Décrire quelqu\'un', word:'Kdo je to ? — To je moj prijatelj.', phonetic:'[KDO ye TO] [TO ye MOY pri-YA-tel]', translation:'Qui est-ce ? — C\'est mon ami.',
    cultural:{title:'Présenter quelqu\'un', text:'"Kdo je to?" = Qui est-ce? "To je..." = C\'est... "moj prijatelj" (mon ami, m.), "moja prijateljica" (mon amie, f.). Pour décrire : "Je visok in prijazen." Ou directement : "To je moj prijatelj. Je visok in prijazen." — très naturel !'} },

  { type:'tts_repeat', label:'Décrire quelqu\'un', word:'Kdo je to ? To je moj prijatelj. Je visok in prijazen. Ima modre oči.', phonetic:'[KDO ye TO] [TO ye MOY pri-YA-tel] [ye VI-sok in pri-YA-zen] [I-ma MOD-re O-chi]', translation:'Qui est-ce ? C\'est mon ami. Il est grand et sympa. Il a les yeux bleus.' },

  { type:'presentation', label:'Comparaisons', word:'Višji od — Nižji od — Enako visok kot', phonetic:'[VI-shyi od] [NI-zhyi od] [e-NA-ko VI-sok kot]', translation:'Plus grand que — Plus petit que — Aussi grand que',
    cultural:{title:'Comparer en slovène', text:'"Višji od" = plus grand que (od = de/que). "Bolj ... kot" = plus ... que (général). "Manj ... kot" = moins ... que. Ex : "Ana je višja od Luka" = Ana est plus grande que Luka.'} },

  { type:'tts_repeat', label:'Comparaisons', word:'Ana je višja od Luka. Marc je bolj pameten kot Rok.', phonetic:'[A-na ye VI-shya od LU-ka] [MARC ye BOL-y pa-ME-ten kot ROK]', translation:'Ana est plus grande que Luka. Marc est plus intelligent que Rok.' },

  { type:'fill', label:'Phrase à trous', sentence:['Moja mama je ___ od mene. (Ma maman est plus grande que moi)'], blank:'višja', bank:['višja','nižja','mlajša','starejša'] },
  { type:'fill', label:'Phrase à trous', sentence:['Rok je ___ in prijazen. (Rok est grand et sympa.)'], blank:'visok', bank:['visok','visoka','visoko','višja'] },
  { type:'fill', label:'Phrase à trous', sentence:['Ima ___ oči in svetle lase. (Il a les yeux bleus et les cheveux blonds.)'], blank:'modre', bank:['modre','zelene','temne','rjave'] },
  { type:'fill', label:'Phrase à trous', sentence:['To je moja prijateljica. Je ___ in zabavna. (C\'est mon amie. Elle est sympa et drôle.)'], blank:'prijazna', bank:['prijazna','prijazen','prijazno','miren'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Ima modre oči in svetle lase.', words:['Ima','modre','oči','in','svetle','lase','.'] },

  { type:'story', label:'Histoire', title:'Le profil de dating',
    narration:"Maja aide son ami Rok à remplir son profil sur une app de rencontres slovène.",
    dialogue:[
      {speaker:'Maja', text:'Kako bi se opisal ?', side:'left'},
      {speaker:'Rok',  text:'Sem visok, vitek in prijazen.', side:'right'},
      {speaker:'Maja', text:'In tvoja barva oči ?', side:'left'},
      {speaker:'Rok',  text:'Imam modre oči in temne lase.', side:'right'},
      {speaker:'Maja', text:'Odlično ! In kakšna dekleta ti so všeč ?', side:'left'},
      {speaker:'Rok',  text:'Pametna in zabavna dekleta !', side:'right'},
      {speaker:'Maja', text:'In visoka ali nizka ?', side:'left'},
      {speaker:'Rok',  text:'Ne previsoka — enako visoka kot jaz !', side:'right'},
    ],
    translation:{
      'Kako bi se opisal ?':'Comment te décrirais-tu ?',
      'Sem visok, vitek in prijazen.':'Je suis grand, mince et sympa.',
      'In tvoja barva oči ?':'Et ta couleur des yeux ?',
      'Imam modre oči in temne lase.':'J\'ai des yeux bleus et des cheveux sombres.',
      'Odlično !':'Excellent !',
      'Kakšna dekleta ti so všeč ?':'Quelles filles tu aimes ?',
      'Pametna in zabavna dekleta !':'Des filles intelligentes et drôles !',
      'Ne previsoka — enako visoka kot jaz !':'Pas trop grande — aussi grande que moi !',
    }
  },

  { type:'qcm', label:'QCM histoire', question:'Quelle couleur sont les yeux de Rok ?', choices:['Bleus','Verts','Marrons','Noirs'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'Comment Rok décrit-il son caractère ?', choices:['Prijazen (sympa)','Pameten (intelligent)','Miren (calme)','Delaven (travailleur)'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'Quelle taille Rok préfère-t-il chez une fille ?', choices:['Aussi grande que lui','Plus grande','Plus petite','Très grande'], correct:0 },

  { type:'dictee', label:'Dictée', word:'Prijazen', phonetic:'[pri-YA-zen]', hint:'Sympa/Gentil — 8 lettres' },
  { type:'dictee', label:'Dictée', word:'Pameten', phonetic:'[pa-ME-ten]', hint:'Intelligent (masc.) — 7 lettres' },

  { type:'dialogue', label:'À toi !', lines:[
    {speaker:'Luka', text:'Kako si ?', side:'left'},
    {speaker:'Toi',  text:'Sem ___. In ti ?', side:'right', blank:'prijazen', hint:'sympa (masc.) → prijazen'},
    {speaker:'Luka', text:'Tudi dobro ! Kakšne oči imaš ?', side:'left'},
    {speaker:'Toi',  text:'Imam ___ oči.', side:'right', blank:'modre', hint:'yeux bleus → modre oči'},
  ]},
];
