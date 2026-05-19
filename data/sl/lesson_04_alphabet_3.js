// ═══════════════════════════════════════════
// 1-4 — Alphabet & phonétique — 3
//        LJ NJ R vocalique — lire des mots réels
// ═══════════════════════════════════════════
const EX_1_4 = [
  { type:'presentation', label:'Sons combinés', word:'LJ — NJ', phonetic:'[ly] [ny]', noTTS:true, translation:'Deux lettres = un seul son !',
    cultural:{title:'Les digrammes slovènes', text:'LJ et NJ sont deux lettres qui forment UN seul son. LJ = [ly] comme dans "million" ou "milieu". NJ = [ny] comme dans "agneau" ou "Espagne". Ce sont les sons les plus caractéristiques du slovène !'},
    histoire:{title:'Voisins et influences', text:'Le slovène a absorbé des mots de tous ses voisins : allemand (šunka = jambon, de Schinken), italien (žlica = cuillère), hongrois, et même turc. Cette position carrefour entre Europe centrale et méditerranée a façonné une langue riche et unique.'} },

  { type:'presentation', label:'LJ = [ly]', word:'LJ', phonetic:'[ly] — comme "mi-LIEU"', noTTS:true, translation:'Pense à : million, milieu, fille',
    cultural:{title:'LJ dans les mots', text:'"Ljubljana" = [lyub-LYA-na]. "Polje" [POL-lye] = champ. "Volja" [VOL-lya] = volonté. C\'est le son [ly] de "million" ou le "ll" espagnol de "llegar" !'} },

  { type:'tts_repeat', label:'Écoute et répète LJ', word:'Ljubljana — Polje — Volja — Ljubezen', phonetic:'[lyub-LYA-na] [POL-lye] [VOL-lya] [lyu-BE-zen]', translation:'Ljubljana — Champ — Volonté — Amour' },

  { type:'qcm', label:'QCM', question:'"LJ" dans "Ljubljana" se prononce comme…',
    choices:['Le "ll" dans "million"','Le "l" seul dans "lune"','Le "j" dans "jardin"','Le "gl" dans "glace"'], correct:0 },

  { type:'presentation', label:'NJ = [ny]', word:'NJ', phonetic:'[ny] — comme "a-GNEAU"', noTTS:true, translation:'Pense à : agneau, Espagne, vigne',
    cultural:{title:'NJ dans les mots', text:'"Konj" [KONY] = cheval. "Njiva" [NYI-va] = champ cultivé. "Ponje" [PON-ye] = foulard. C\'est le son [ñ] espagnol de "España" ou le "gn" français d\'agneau !'} },

  { type:'tts_repeat', label:'Écoute et répète NJ', word:'Konj — Ponje — Njiva —Anje', phonetic:'[KONY] [PON-ye] [NYI-va] [AN-ye]', translation:'Cheval — Foulard — Champ — Anje (prénom)' },

  { type:'qcm', label:'QCM', question:'"NJ" se prononce comme…',
    choices:['Le "gn" dans "agneau"','Le "n" dans "nuit"','Le "ng" dans "parking"','Le "nj" = deux sons séparés'], correct:0 },

  { type:'matching', label:'LJ et NJ → sons', pairs:[
    {sl:'LJ',       fr:'[ly] — million, milieu'},
    {sl:'NJ',       fr:'[ny] — agneau, vigne'},
    {sl:'Ljubljana',fr:'[lyub-LYA-na]'},
    {sl:'Konj',     fr:'[KONY] — cheval'},
    {sl:'Ljubezen', fr:'[lyu-BE-zen] — amour'},
  ]},

  { type:'presentation', label:'Le R vocalique', word:'R', phonetic:'[r] roulé — peut être voyelle !', noTTS:true, translation:'Le R slovène est toujours prononcé — même seul !',
    cultural:{title:'R comme voyelle', text:'En slovène, R peut être une voyelle à part entière ! "Krk" [KRRK] = île croate connue. "Prst" [PRRST] = doigt. "Srce" [SRR-tse] = cœur. Impressionnant non ? C\'est le R roulé slave !'} },

  { type:'tts_repeat', label:'Écoute et répète le R', word:'Srce — Prst — Trg — Krt', phonetic:'[SRR-tse] [PRRST] [TRRG] [KRRT]', translation:'Cœur — Doigt — Place (ville) — Taupe' },

  { type:'qcm', label:'QCM', question:'"Srce" (cœur) s\'écrit sans voyelle entre S et R. Comment le prononce-t-on ?',
    choices:['Le R roule et fait voyelle : [SRR-tse]','On ajoute un E : [SE-re-tse]','On dit juste [S-tse]','On ne prononce pas le R'], correct:0 },

  { type:'presentation', label:'La lettre J', word:'J', phonetic:'[y] — comme "YEUX"', noTTS:true, translation:'J en slovène = Y en français ! Jamais [dj] ni [zh]',
    cultural:{title:'J = Y', text:'"Jaz" [YAZ] = je/moi. "Jutro" [YU-tro] = matin. "Jesen" [YE-sen] = automne. Le J slovène est identique au Y français dans "yeux", "yoga", "yoyo". Pas le son [dj] de l\'anglais !'} },

  { type:'tts_repeat', label:'Écoute et répète J', word:'Jaz — Jutro — Jesen — Jabolko', phonetic:'[YAZ] [YU-tro] [YE-sen] [YAB-lo-ko]', translation:'Je/Moi — Matin — Automne — Pomme' },

  { type:'matching', label:'Récap de tous les sons', pairs:[
    {sl:'J',  fr:'[y] — yeux, yoga'},
    {sl:'C',  fr:'[ts] — tsar'},
    {sl:'Č',  fr:'[tch] — match'},
    {sl:'Š',  fr:'[ch] — chat'},
    {sl:'Ž',  fr:'[j] — jardin'},
  ]},

  { type:'matching', label:'Sons combinés et spéciaux', pairs:[
    {sl:'LJ',          fr:'[ly] — million'},
    {sl:'NJ',          fr:'[ny] — agneau'},
    {sl:'R vocalique', fr:'[rr] — peut remplacer une voyelle'},
    {sl:'V final',     fr:'[u̯] — s\'affaiblit'},
    {sl:'H',           fr:'[h] aspiré — comme en anglais'},
  ]},

  { type:'presentation', label:'Pas de lettres muettes !', word:'Vsaka črka se sliši.', phonetic:'[VSA-ka TCHER-ka se SLI-shi]', noTTS:true, translation:'Chaque lettre s\'entend.',
    cultural:{title:'Zéro lettre muette en slovène', text:'En slovène, TOUTES les lettres se prononcent, toujours. Pas de "e" muet, pas de "s" final silencieux, pas de "h" aspiré invisible. "Zdravo" = Z-D-R-A-V-O, six sons. C\'est la règle d\'or : si c\'est écrit, ça se prononce !'} },

  { type:'tts_repeat', label:'Lis ces mots complets !', word:'Ljubljana — Zdravo — Čas — Šola — Žena — Konj', phonetic:'[lyub-LYA-na] [ZDRA-vo] [TCHAS] [CHO-la] [ZHE-na] [KONY]', translation:'Ljubljana — Bonjour — Temps — École — Femme — Cheval' },

  { type:'presentation', label:'Accent tonique — 1ère ou 2e syllabe ?', word:'Accent libre', phonetic:'variable', noTTS:true, translation:'L\'accent peut tomber sur n\'importe quelle syllabe',
    cultural:{title:'Repère l\'accent !', text:'En slovène, l\'accent n\'est pas fixe. "DO-ber" (accent sur DO). "Nas-vi-DEN-ye" (accent sur DEN). "Slo-VEN-ski" (accent sur VEN). Dans cette app, les MAJUSCULES dans la phonétique montrent toujours où tombe l\'accent. Entraîne ton oreille !'} },

  { type:'qcm', label:'QCM — accent tonique', question:'Dans "Nasvidenje" [nas-vi-DEN-ye], l\'accent tombe sur…',
    choices:['La 3e syllabe — DEN','La 1ère syllabe — NAS','La 2e syllabe — VI','La 4e syllabe — YE'], correct:0 },

  { type:'qcm', label:'QCM — faux-amis', question:'"Leto" ressemble au français "lettre" mais signifie…',
    choices:['Été / An','Lettre','Livre','Léger'], correct:0 },

  { type:'fill', label:'Phrase à trous',
    sentence:['___ govorim slovensko. (Moi, je parle slovène.)'],
    blank:'Jaz', bank:['Jaz','Konj','Srce','Jutro'] },
  { type:'fill', label:'Phrase à trous',
    sentence:['___ je lepa. (Ljubljana est belle.)'],
    blank:'Ljubljana', bank:['Ljubljana','Jabolko','Jutro','Jesen'] },

  { type:'fill', label:'Phrase à trous',
    sentence:['___ je zeleno. (Le champ est vert.)'],
    blank:'Polje', bank:['Polje','Konj','Srce','Voda'] },

  { type:'fill', label:'Phrase à trous',
    sentence:['Imam rad ___. (J\'aime la pomme.)'],
    blank:'jabolko', bank:['jabolko','jutro','jesen','jaz'] },

  { type:'qcm', label:'QCM — paires minimales', question:'"Bit" peut signifier "être" ou "battre" selon le contexte. Qu\'est-ce que cela illustre en slovène ?',
    choices:['Que l\'accent et le contexte changent le sens','Que le slovène a des mots identiques au français','Que les voyelles sont muettes','Que le R est toujours vocalique'], correct:0 },

  { type:'reconstruct', label:'Reconstitue', sentence:'Jaz govorim slovensko.', words:['Jaz','govorim','slovensko','.'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Srce je lepo.', words:['Srce','je','lepo','.'] },

  { type:'story', label:'Histoire', title:'La carte postale',
    narration:"Marc écrit une carte postale depuis Ljubljana à ses amis français. Il veut leur montrer ce qu'il a appris.",
    dialogue:[
      {speaker:'Marc',  text:'Jaz sem v Ljubljani. Lepo je tukaj !', side:'left'},
      {speaker:'Amie',  text:'Kako se reče "je t\'aime" en slovène ?', side:'right'},
      {speaker:'Marc',  text:'Ljubim te ! LJ = [ly] comme milieu.', side:'left'},
      {speaker:'Amie',  text:'Et "cœur" ?', side:'right'},
      {speaker:'Marc',  text:'Srce ! Le R est voyelle — [SRR-tse] !', side:'left'},
      {speaker:'Amie',  text:'Incroyable ! Kdaj prideš domov ?', side:'right'},
      {speaker:'Marc',  text:'Ha ! Tu apprends toi aussi ! Kmalu !', side:'left'},
    ],
    translation:{
      'Jaz sem v Ljubljani. Lepo je tukaj !':'Je suis à Ljubljana. C\'est beau ici !',
      'Ljubim te ! LJ = [ly] comme milieu.':'Je t\'aime ! LJ = [ly] comme milieu.',
      'Srce ! Le R est voyelle — [SRR-tse] !':'Cœur ! Le R est voyelle — [SRR-tse] !',
      'Kdaj prideš domov ?':'Quand rentres-tu ?',
      'Ha ! Tu apprends toi aussi ! Kmalu !':'Ha ! Tu apprends toi aussi ! Bientôt !',
    }
  },

  { type:'qcm', label:'QCM histoire', question:'Que signifie "Ljubim te" ?', choices:['Je t\'aime','Je suis ici','Bientôt','Cœur'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'Que signifie "Kmalu" ?', choices:['Bientôt','Cœur','Je t\'aime','Ljubljana'], correct:0 },
  { type:'qcm', label:'QCM', question:'Comment se prononce le J dans "Jaz" (je) ?', choices:['[y] comme dans "yeux"','[dj] comme en anglais','[j] comme dans "jardin"','[z] comme dans "zoo"'], correct:0 },

  { type:'dictee', label:'Dictée', word:'Ljubljana', phonetic:'[lyub-LYA-na]', hint:'La capitale — 9 lettres' },
  { type:'dictee', label:'Dictée', word:'Ljubezen', phonetic:'[lyu-BE-zen]', hint:'Amour — 8 lettres' },
  { type:'dictee', label:'Dictée', word:'Srce', phonetic:'[SRR-tse]', hint:'Cœur — 4 lettres, R vocalique' },

  { type:'dialogue', label:'À toi !', lines:[
    {speaker:'Ana',  text:'Kako se reče "cheval" po slovensko ?', side:'left'},
    {speaker:'Toi',  text:'___!', side:'right', blank:'Konj', hint:'cheval → Konj [KONY]'},
    {speaker:'Ana',  text:'Super ! In "pomme" ?', side:'left'},
    {speaker:'Toi',  text:'___!', side:'right', blank:'Jabolko', hint:'pomme → Jabolko'},
  ]},
];
