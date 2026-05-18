// ═══════════════════════════════════════════
// 1-8 — Couleurs
// ═══════════════════════════════════════════
const EX_1_8 = [
  { type:'presentation', label:'Découverte', word:'Rdeča — Modra — Zelena', phonetic:'[R-de-cha] [MO-dra] [ze-LE-na]', translation:'Rouge — Bleue — Verte',
    cultural:{title:'Le drapeau slovène', text:'Bela (blanc), modra (bleu), rdeča (rouge) — les trois couleurs du drapeau slovène avec le Triglav. Tu viens d\'apprendre les couleurs nationales !'},
    histoire:{title:'Le drapeau et les armoiries', text:'Le drapeau slovène a été adopté à l\'indépendance en 1991. Le Triglav sur fond blanc est le symbole national. Les 3 étoiles bleues viennent des armoiries des comtes de Celje, puissante famille médiévale — leur territoire s\'étendait de l\'Adriatique à la Hongrie au XVe siècle.'} },
  { type:'tts_repeat', label:'Couleurs 1-6', word:'Rdeča, modra, zelena, rumena, oranžna, rjava', phonetic:'[R-de-cha, MO-dra, ze-LE-na, ru-ME-na, o-RANZH-na, RYA-va]', translation:'Rouge, bleu, vert, jaune, orange, marron' },
  { type:'tts_repeat', label:'Couleurs 7-12', word:'Bela, črna, siva, vijolična, rožnata, zlata', phonetic:'[BE-la, TCHR-na, SI-va, vi-yo-LI-chna, ROZH-na-ta, ZLA-ta]', translation:'Blanc, noir, gris, violet, rose, doré' },
  { type:'matching', label:'Couleurs → français', pairs:[
    {sl:'Rdeča',  fr:'Rouge'},
    {sl:'Modra',  fr:'Bleu(e)'},
    {sl:'Zelena', fr:'Vert(e)'},
    {sl:'Rumena', fr:'Jaune'},
    {sl:'Črna',   fr:'Noir(e)'},
  ]},
  { type:'matching', label:'Encore des couleurs', pairs:[
    {sl:'Bela',     fr:'Blanc(he)'},
    {sl:'Siva',     fr:'Gris(e)'},
    {sl:'Rjava',    fr:'Marron'},
    {sl:'Vijolična',fr:'Violet(te)'},
    {sl:'Rožnata',  fr:'Rose'},
  ]},
  { type:'presentation', label:'Accord de l\'adjectif', word:'Rdeč — Rdeča — Rdeče', phonetic:'[R-dech] [R-de-cha] [R-de-che]', translation:'Rouge (masc.) — Rouge (fém.) — Rouge (neutre)',
    cultural:{title:'Les adjectifs s\'accordent', text:'En slovène, les adjectifs changent selon le genre du nom. Masculin : rdeč, Féminin : rdeča, Neutre : rdeče. Pour les couleurs les plus courantes, l\'app te montre la forme féminine (la plus fréquente).'} },
  { type:'tts_repeat', label:'Accord en genre', word:'Rdeč avto. Rdeča hiša. Rdeče jabolko.', phonetic:'[R-dech AV-to] [R-de-cha HI-sha] [R-de-che YAB-lo-ko]', translation:'Une voiture rouge. Une maison rouge. Une pomme rouge.' },
  { type:'qcm', label:'QCM', question:'"Hiša" (maison) est féminin. Comment dit-on "maison bleue" ?',
    choices:['Modra hiša','Moder hiša','Modro hiša','Hiša modra'], correct:0 },
  { type:'fill', label:'Phrase à trous', sentence:['Triglav je ___ in bel. (Le Triglav est vert et blanc)'], blank:'zelen', bank:['zelen','modra','rumena','rdeč'] },
  { type:'story', label:'Histoire', title:'La robe de Maja',
    narration:"Maja et Sara font du shopping à Ljubljana. Maja cherche une robe pour un mariage.",
    dialogue:[
      {speaker:'Maja', text:'Kakšna barva ti je všeč ?', side:'left'},
      {speaker:'Sara', text:'Meni je všeč modra. Rdeča je preveč.', side:'right'},
      {speaker:'Maja', text:'Ampak zelena je moja najljubša barva !', side:'left'},
      {speaker:'Sara', text:'Za poroko je modra boljša. Vzemi to !', side:'right'},
      {speaker:'Maja', text:'Prav imaš. Koliko stane ?', side:'left'},
      {speaker:'Sara', text:'Petdeset evrov. Ni drago !', side:'right'},
    ],
    translation:{
      'Kakšna barva ti je všeč ?':'Quelle couleur tu préfères ?',
      'Meni je všeč modra. Rdeča je preveč.':'Je préfère le bleu. Le rouge c\'est trop.',
      'Ampak zelena je moja najljubša barva !':'Mais le vert est ma couleur préférée !',
      'Za poroko je modra boljša.':'Pour un mariage le bleu est mieux.',
      'Prav imaš.':'Tu as raison.',
      'Ni drago !':'Ce n\'est pas cher !',
    }
  },
  { type:'qcm', label:'QCM histoire', question:'Quelle est la couleur préférée de Maja ?', choices:['Verte','Bleue','Rouge','Violette'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'Pour quelle occasion cherche-t-elle une robe ?', choices:['Un mariage','Un anniversaire','Le travail','Une fête'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'Combien coûte la robe ?', choices:['50 euros','30 euros','100 euros','20 euros'], correct:0 },
  { type:'dictee', label:'Dictée', word:'Zelena', phonetic:'[ze-LE-na]', hint:'La couleur verte — 6 lettres' },
  { type:'reconstruct', label:'Reconstitue', sentence:'Kakšna barva ti je všeč ?', words:['Kakšna','barva','ti','je','všeč','?'] },
];
