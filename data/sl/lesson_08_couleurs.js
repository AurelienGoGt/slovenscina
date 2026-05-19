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

  { type:'presentation', label:'Accord de l\'adjectif', word:'Rdeč (m) — Rdeča (f) — Rdeče (n)', phonetic:'[R-dech] [R-de-cha] [R-de-che]', translation:'Rouge masc. — Rouge fém. — Rouge neutre', noTTS:true,
    cultural:{title:'L\'accord des couleurs', text:'En slovène, les couleurs (adjectifs) changent selon le genre du nom. Masculin : rdeč avto (voiture rouge m.). Féminin : rdeča hiša (maison rouge f.). Neutre : rdeče jabolko (pomme rouge n.). La forme féminine en -a est la plus fréquente !'} },

  { type:'tts_repeat', label:'Accord en genre', word:'Rdeč avto. Rdeča hiša. Rdeče jabolko.', phonetic:'[R-dech AV-to] [R-de-cha HI-sha] [R-de-che YAB-lo-ko]', translation:'Une voiture rouge (m). Une maison rouge (f). Une pomme rouge (n).' },
  { type:'tts_repeat', label:'Couleurs avec genre', word:'Moder avto. Modra hiša. Zeleno jabolko. Rumena banana.', phonetic:'[MO-der AV-to] [MOD-ra HI-sha] [ze-LE-no YAB-lo-ko] [ru-ME-na ba-NA-na]', translation:'Voiture bleue (m). Maison bleue (f). Pomme verte (n). Banane jaune (f).' },

  { type:'tts_repeat', label:'Couleurs + noms de la nature', word:'Zelena trava. Modro nebo. Rumeno sonce. Rdeče srce. Bel sneg.', phonetic:'[ze-LE-na TRA-va] [MOD-ro NE-bo] [ru-ME-no SON-tse] [R-de-che SR-tse] [BEL SNEG]', translation:'Herbe verte (f). Ciel bleu (n). Soleil jaune (n). Cœur rouge (n). Neige blanche (m).' },

  { type:'matching', label:'Couleurs + nature', pairs:[
    {sl:'Zelena trava',  fr:'Herbe verte'},
    {sl:'Modro nebo',    fr:'Ciel bleu'},
    {sl:'Rumeno sonce',  fr:'Soleil jaune'},
    {sl:'Rdeče srce',    fr:'Cœur rouge'},
    {sl:'Bel sneg',      fr:'Neige blanche'},
  ]},

  { type:'qcm', label:'QCM', question:'"Hiša" (maison) est féminin. Comment dit-on "maison bleue" ?',
    choices:['Modra hiša','Moder hiša','Modro hiša','Hiša modra'], correct:0 },
  { type:'qcm', label:'QCM grammaire', question:'"Avto" (voiture) est masculin. "Voiture verte" se dit :',
    choices:['Zelen avto','Zelena avto','Zeleno avto','Avto zelena'], correct:0 },
  { type:'qcm', label:'QCM', question:'Quelle est la question pour demander une couleur ?',
    choices:['Kakšna barva je to ?','Kje je barva ?','Koliko stane barva ?','Kdaj je barva ?'], correct:0 },
  { type:'qcm', label:'QCM grammaire', question:'"Nebo" (ciel) est neutre. Comment dit-on "ciel bleu" ?',
    choices:['Modro nebo','Modra nebo','Moder nebo','Modri nebo'], correct:0 },
  { type:'qcm', label:'QCM grammaire', question:'"Sneg" (neige) est masculin. "Neige blanche" se dit :',
    choices:['Bel sneg','Bela sneg','Belo sneg','Sneg bela'], correct:0 },

  { type:'presentation', label:'Nuances — svetlo/temno', word:'Svetlo modra — Temno zelena', phonetic:'[SVET-lo MOD-ra] [TEM-no ze-LE-na]', translation:'Bleu clair — Vert foncé', noTTS:true,
    cultural:{title:'Clair et foncé', text:'"Svetlo" (clair) + couleur = nuance claire. "Temno" (foncé/sombre) + couleur = nuance foncée. Ce sont des adverbes donc invariables ! "Svetlo modra obleka" = une robe bleu clair. "Temno zelena torba" = un sac vert foncé. Simple !'} },

  { type:'tts_repeat', label:'Nuances clair/foncé', word:'Svetlo modra, temno zelena, svetlo rožnata, temno rdeča, svetlo siva.', phonetic:'[SVET-lo MOD-ra, TEM-no ze-LE-na, SVET-lo ROZH-na-ta, TEM-no R-de-cha, SVET-lo SI-va]', translation:'Bleu clair, vert foncé, rose clair, rouge foncé, gris clair.' },

  { type:'presentation', label:'Le pluriel des couleurs', word:'Rdeči avtomobili — Modre obleke', phonetic:'[R-de-chi av-to-MO-bi-li] [MOD-re ob-LE-ke]', translation:'Voitures rouges (m. pl.) — Robes bleues (f. pl.)', noTTS:true,
    cultural:{title:'Accord au pluriel', text:'Au pluriel, les adjectifs de couleur changent aussi. Masculin pluriel : -i (rdeči, modri, zeleni). Féminin pluriel : -e (rdeče, modre, zelene). Neutre pluriel : -a (rdeča, modra, zelena). Ex : "beli oblaki" (nuages blancs), "zelena drevesa" (arbres verts).'} },

  { type:'tts_repeat', label:'Accord au pluriel', word:'Rdeči avtomobili. Modre obleke. Zelena drevesa.', phonetic:'[R-de-chi av-to-MO-bi-li] [MOD-re ob-LE-ke] [ze-LE-na dre-VE-sa]', translation:'Voitures rouges (m. pl.). Robes bleues (f. pl.). Arbres verts (n. pl.).' },

  { type:'fill', label:'Phrase à trous', sentence:['Triglav je ___ in bel. (Le Triglav est vert et blanc)'], blank:'zelen', bank:['zelen','modra','rumena','rdeč'] },
  { type:'fill', label:'Phrase à trous', sentence:['Moja najljubša barva je ___. (Ma couleur préférée est le bleu.)'], blank:'modra', bank:['modra','rdeča','zelena','rumena'] },
  { type:'fill', label:'Phrase à trous', sentence:['___ barva je to ? (Quelle couleur est-ce ?)'], blank:'Kakšna', bank:['Kakšna','Koliko','Kdaj','Kje'] },
  { type:'fill', label:'Phrase à trous', sentence:['Nebo je ___ modro. (Le ciel est bleu clair.)'], blank:'svetlo', bank:['svetlo','temno','lepo','veliko'] },
  { type:'fill', label:'Phrase à trous', sentence:['Ima ___ obleko. (Elle porte une robe rouge.)'], blank:'rdečo', bank:['rdečo','rdeča','rdeče','rdeč'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Kakšna barva ti je všeč ?', words:['Kakšna','barva','ti','je','všeč','?'] },

  { type:'story', label:'Histoire', title:'La robe de Maja',
    narration:"Maja et Sara font du shopping à Ljubljana. Maja cherche une robe pour un mariage.",
    dialogue:[
      {speaker:'Maja', text:'Kakšna barva ti je všeč ?', side:'left'},
      {speaker:'Sara', text:'Meni je všeč modra. Rdeča je preveč.', side:'right'},
      {speaker:'Maja', text:'Ampak zelena je moja najljubša barva !', side:'left'},
      {speaker:'Sara', text:'Za poroko je modra boljša. Vzemi to !', side:'right'},
      {speaker:'Maja', text:'Prav imaš. Koliko stane ?', side:'left'},
      {speaker:'Sara', text:'Petdeset evrov. Ni drago !', side:'right'},
      {speaker:'Maja', text:'Odlično ! Vzamem modro obleko.', side:'left'},
    ],
    translation:{
      'Kakšna barva ti je všeč ?':'Quelle couleur tu préfères ?',
      'Meni je všeč modra. Rdeča je preveč.':'Je préfère le bleu. Le rouge c\'est trop.',
      'Ampak zelena je moja najljubša barva !':'Mais le vert est ma couleur préférée !',
      'Za poroko je modra boljša.':'Pour un mariage le bleu est mieux.',
      'Prav imaš.':'Tu as raison.',
      'Ni drago !':'Ce n\'est pas cher !',
      'Vzamem modro obleko.':'Je prends la robe bleue.',
    }
  },

  { type:'qcm', label:'QCM histoire', question:'Quelle est la couleur préférée de Maja ?', choices:['Verte','Bleue','Rouge','Violette'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'Pour quelle occasion cherche-t-elle une robe ?', choices:['Un mariage','Un anniversaire','Le travail','Une fête'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'Combien coûte la robe ?', choices:['50 euros','30 euros','100 euros','20 euros'], correct:0 },

  { type:'dictee', label:'Dictée', word:'Zelena', phonetic:'[ze-LE-na]', hint:'La couleur verte — 6 lettres' },
  { type:'dictee', label:'Dictée', word:'Vijolična', phonetic:'[vi-yo-LI-chna]', hint:'Violet(te) — 9 lettres' },

  { type:'dialogue', label:'À toi !', lines:[
    {speaker:'Ana', text:'Kakšna barva ti je všeč ?', side:'left'},
    {speaker:'Toi', text:'Meni je všeč ___.', side:'right', blank:'modra', hint:'bleu → modra'},
    {speaker:'Ana', text:'In kakšna barva je tvoj avto ?', side:'left'},
    {speaker:'Toi', text:'Moj avto je ___.', side:'right', blank:'rdeč', hint:'rouge masc. → rdeč'},
  ]},
];
