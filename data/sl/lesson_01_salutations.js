// ═══════════════════════════════════════════
// 1-1 — Salutations & politesse
// ═══════════════════════════════════════════
const EX_1_1 = [
  { type:'presentation', label:'Découverte', word:'Zdravo', phonetic:'[ZDRA-vo]', translation:'Bonjour / Salut (informel)',
    cultural:{title:'Le mot universel', text:"En Slovénie, Zdravo s'entend partout — dans les magasins, dans la rue, entre étrangers. C'est chaleureux et direct !"},
    histoire:{title:'Langue slave du Sud', text:"Le slovène est parlé par seulement 2 millions de personnes, mais c'est l'une des plus anciennes langues d'Europe centrale. Les premiers textes slovènes — les Manuscrits de Freising — datent de l'an 1000 ! Langue officielle de l'UE depuis 2004."} },

  { type:'presentation', label:'Formel vs informel', word:'Formel : Dober dan — Informel : Zdravo', phonetic:'[DO-ber dan] — [ZDRA-vo]', translation:'Bonjour (formel, journée) — Salut (informel)', noTTS:true,
    cultural:{title:'Quand utiliser quoi ?', text:"Avec un inconnu, un supérieur, dans un magasin → Dober dan (formel). Avec un ami, un enfant, en famille → Zdravo ou Živjo. La distinction formel/informel est très importante en slovène, même pour les salutations !"} },

  { type:'tts_repeat', label:'Écoute et répète', word:'Dober dan', phonetic:'[DO-ber dan]', translation:'Bonjour (formel, en journée)' },
  { type:'tts_repeat', label:'Écoute et répète', word:'Dobro jutro', phonetic:'[DOB-ro YU-tro]', translation:'Bonjour (le matin)' },
  { type:'tts_repeat', label:'Écoute et répète', word:'Dober večer', phonetic:'[DO-ber VE-cher]', translation:'Bonsoir' },
  { type:'tts_repeat', label:'Écoute et répète', word:'Lahko noč', phonetic:'[LAH-ko NOCH]', translation:'Bonne nuit' },

  { type:'tts_repeat', label:'Écoute et répète', word:'Živjo !', phonetic:'[ZHIV-yo]', translation:'Salut ! (informel — très courant)' },
  { type:'tts_repeat', label:'Écoute et répète', word:'Čao !', phonetic:'[CHAO]', translation:'Ciao / Bye (informel, de l\'italien)' },

  { type:'matching', label:'Salutations → français', pairs:[
    {sl:'Zdravo',      fr:'Salut (informel)'},
    {sl:'Dober dan',   fr:'Bonjour (formel)'},
    {sl:'Dobro jutro', fr:'Bonjour (matin)'},
    {sl:'Dober večer', fr:'Bonsoir'},
    {sl:'Lahko noč',   fr:'Bonne nuit'},
  ]},

  { type:'qcm', label:'QCM', question:'Tu croises un collègue au bureau à 9h. Tu dis :',
    choices:['Dobro jutro !','Dober večer !','Lahko noč !','Nasvidenje !'], correct:0 },
  { type:'qcm', label:'QCM', question:'Tu rencontres un ami dans la rue l\'après-midi. Tu dis :',
    choices:['Zdravo !','Dober večer !','Dobro jutro !','Lahko noč !'], correct:0 },

  { type:'presentation', label:'Découverte', word:'Hvala', phonetic:'[HVA-la]', translation:'Merci',
    cultural:{title:'Hvala lepa', text:'"Hvala lepa" = merci beaucoup. Lepa = belle. Comme dire "un beau merci" — très poli !'} },

  { type:'presentation', label:'Découverte', word:'Prosim', phonetic:'[PRO-sim]', translation:"S'il vous plaît / De rien / Allô ?",
    cultural:{title:'Le mot à trois vies', text:"Prosim = \"s'il vous plaît\" quand tu demandes, \"de rien\" quand on te remercie, et \"allô ?\" au téléphone. Un mot, trois usages !"} },

  { type:'tts_repeat', label:'Écoute et répète', word:'Oprostite', phonetic:'[op-ROS-ti-te]', translation:'Excusez-moi (formel)' },
  { type:'tts_repeat', label:'Écoute et répète', word:'Oprosti', phonetic:'[op-ROS-ti]', translation:'Excuse-moi (informel)' },
  { type:'tts_repeat', label:'Écoute et répète', word:'Nasvidenje', phonetic:'[nas-vi-DEN-ye]', translation:'Au revoir (formel)' },
  { type:'tts_repeat', label:'Écoute et répète', word:'Adijo', phonetic:'[a-DI-yo]', translation:'Bye (informel, de l\'italien)' },

  { type:'matching', label:'Politesse → français', pairs:[
    {sl:'Hvala',      fr:'Merci'},
    {sl:'Hvala lepa', fr:'Merci beaucoup'},
    {sl:'Prosim',     fr:"S'il vous plaît / De rien"},
    {sl:'Oprostite',  fr:'Excusez-moi (formel)'},
    {sl:'Nasvidenje', fr:'Au revoir (formel)'},
  ]},

  { type:'qcm', label:'QCM grammaire', question:'Ana dit "Hvala !" et tu réponds poliment :',
    choices:['Prosim !','Hvala !','Zdravo !','Adijo !'], correct:0 },
  { type:'qcm', label:'QCM culturel', question:'"Prosim" au téléphone signifie :',
    choices:['Allô ?','S\'il vous plaît','De rien','Bonjour'], correct:0 },

  { type:'qcm', label:'QCM', question:'Comment dit-on "de rien" en slovène ?',
    choices:['Prosim','Hvala','Oprostite','Nasvidenje'], correct:0 },

  { type:'fill', label:'Phrase à trous',
    sentence:['Dober dan ! ___, kako ste ? (Bonjour, comment allez-vous ?)'],
    blank:'Prosim', bank:['Prosim','Hvala','Zdravo','Adijo'] },
  { type:'fill', label:'Phrase à trous',
    sentence:['___ lepa za pomoč ! (Merci beaucoup pour l\'aide !)'],
    blank:'Hvala', bank:['Hvala','Prosim','Oprostite','Zdravo'] },
  { type:'fill', label:'Phrase à trous',
    sentence:['___ ! Kje je postaja ? (Excusez-moi ! Où est la gare ?)'],
    blank:'Oprostite', bank:['Oprostite','Nasvidenje','Dober dan','Adijo'] },
  { type:'fill', label:'Phrase à trous',
    sentence:['Lep ___! (Bonne journée !)'],
    blank:'dan', bank:['dan','večer','jutro','noč'] },

  { type:'tts_repeat', label:'Écoute et répète', word:'Lep dan ! Lepo jutro ! Lepo popoldne !', phonetic:'[LEP DAN] [LE-po YU-tro] [LE-po po-POL-dne]', translation:'Bonne journée ! Bon matin ! Bel après-midi !' },

  { type:'qcm', label:'QCM', question:'"Lep dan / Lepo jutro / Lepo popoldne" signifient :',
    choices:['Bonne journée / Bon matin / Bel après-midi','Bonsoir / Bonne nuit / Au revoir','Merci / De rien / S\'il vous plaît','Bonjour / Salut / Ciao'], correct:0 },

  { type:'reconstruct', label:'Reconstitue', sentence:'Dobro jutro, kako ste danes ?', words:['Dobro','jutro,','kako','ste','danes','?'] },

  { type:'qcm', label:'QCM — phrase incorrecte', question:'Ta-le poved ni pravilna (Cette phrase est incorrecte). Laquelle ?',
    choices:['Kann gut, danke','Dobro, hvala','Zdravo !','Hvala lepa'], correct:0 },

  { type:'reconstruct', label:'Reconstitue', sentence:'Hvala lepa, prosim.', words:['Hvala','lepa,','prosim','.'] },

  { type:'story', label:'Histoire', title:'Premier matin à Ljubljana',
    narration:"Marc arrive à Ljubljana pour la première fois. Il entre dans un café du centre-ville. La serveuse Ana le regarde avec un sourire.",
    dialogue:[
      {speaker:'Ana',  text:'Dobro jutro ! Kako ste ?', side:'right'},
      {speaker:'Marc', text:'Dobro, hvala ! Prosim, ena kava.', side:'left'},
      {speaker:'Ana',  text:'Seveda ! Takoj.', side:'right'},
      {speaker:'Marc', text:'Hvala lepa !', side:'left'},
      {speaker:'Ana',  text:'Prosim !', side:'right'},
      {speaker:'Marc', text:'Nasvidenje !', side:'left'},
      {speaker:'Ana',  text:'Adijo ! Lep dan !', side:'right'},
    ],
    translation:{
      'Dobro jutro ! Kako ste ?':'Bonjour ! Comment allez-vous ?',
      'Dobro, hvala ! Prosim, ena kava.':'Bien, merci ! Un café, s\'il vous plaît.',
      'Seveda ! Takoj.':'Bien sûr ! Tout de suite.',
      'Hvala lepa !':'Merci beaucoup !',
      'Prosim !':'De rien !',
      'Nasvidenje !':'Au revoir !',
      'Adijo ! Lep dan !':'Bye ! Bonne journée !',
    }
  },

  { type:'qcm', label:'QCM histoire', question:'Que commande Marc ?', choices:['Un café','Un thé','Un jus','Rien'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'Que signifie "Seveda" dans la réponse d\'Ana ?', choices:['Bien sûr !','Merci !','Bonjour !','De rien !'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'Quand Ana dit "Prosim !" à la fin, ça veut dire…', choices:['De rien !','S\'il vous plaît !','Allô ?','Pardon !'], correct:0 },

  { type:'dictee', label:'Dictée', word:'Nasvidenje', phonetic:'[nas-vi-DEN-ye]', hint:'Au revoir — 10 lettres' },
  { type:'dictee', label:'Dictée', word:'Hvala', phonetic:'[HVA-la]', hint:'Merci — 5 lettres' },

  { type:'dialogue', label:'À toi de jouer !', lines:[
    {speaker:'Luka', text:'Zdravo ! Kako si ?', side:'left'},
    {speaker:'Toi',  text:'___, hvala. In ti ?', side:'right', blank:'Dobro', hint:'bien → Dobro'},
    {speaker:'Luka', text:'Tudi dobro. ___!', side:'left', blank:'Nasvidenje', hint:'au revoir'},
    {speaker:'Toi',  text:'___ ! Lep dan !', side:'right', blank:'Adijo', hint:'bye informel'},
  ]},
];
