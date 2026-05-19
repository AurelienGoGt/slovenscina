// ═══════════════════════════════════════════
// 1-12 — La famille élargie
// ═══════════════════════════════════════════
const EX_1_12 = [
  { type:'presentation', label:'Grands-parents', word:'Dedek — Babica', phonetic:'[DE-dek] [ba-BI-tsa]', translation:'Grand-père — Grand-mère',
    cultural:{title:'Stari starši', text:'"Stari starši" = grands-parents (littéralement "vieux parents"). Les grands-parents jouent souvent un rôle central — garder les petits-enfants, cuisiner les plats traditionnels.'},
    histoire:{title:'La potica — dessert national', text:'La potica est un gâteau roulé aux noix transmis de génération en génération. Il en existe plus de 80 variétés ! Préparée pour Noël et Pâques, chaque famille a sa recette secrète. En 2021, la tradition de la potica a été inscrite au patrimoine culturel immatériel de l\'UNESCO.'} },

  { type:'presentation', label:'Starši = parents', word:'Starši — Otroci', phonetic:'[STAR-shi] [OT-ro-tsi]', translation:'Les parents — Les enfants (pluriel)', noTTS:true,
    cultural:{title:'Pluriel irrégulier', text:'"Starši" = mes parents (pluriel de "staršev"). C\'est le mot courant pour "mes parents" au quotidien. "Moji starši so v Ljubljani" = mes parents sont à Ljubljana. "Otrok" (enfant) → "otroci" (enfants) au pluriel !'} },

  { type:'presentation', label:'Famille élargie complète', word:'Bratranec — Sestrična — Nečak — Nečakinja — Svak — Snaha', phonetic:'[bra-TRA-nets] [ses-TRI-chna] [NE-chak] [ne-cha-KIN-ya] [SVAK] [SNA-ha]', translation:'Cousin — Cousine — Neveu — Nièce — Beau-frère — Belle-sœur', noTTS:true,
    cultural:{title:'Relations par alliance', text:'En slovène, les relations par alliance ont leurs propres mots :\n• svak = beau-frère (frère du conjoint)\n• snaha = belle-sœur (sœur du conjoint ou femme du fils)\n• tast = beau-père (père du conjoint)\n• tašča = belle-mère (mère du conjoint)\n• zet = gendre (mari de la fille)\nCes mots sont très précis — chaque lien familial a son terme exact !'} },

  { type:'tts_repeat', label:'Famille élargie 1', word:'Dedek, babica, teta, stric, bratranec, sestrična', phonetic:'[DE-dek, ba-BI-tsa, TE-ta, STRIC, bra-TRA-nets, ses-TRI-chna]', translation:'Grand-père, grand-mère, tante, oncle, cousin, cousine' },
  { type:'tts_repeat', label:'Famille élargie 2', word:'Nečak, nečakinja, tast, tašča, zet, snaha', phonetic:'[NE-chak, ne-cha-KIN-ya, TAST, TACH-cha, ZET, SNA-ha]', translation:'Neveu, nièce, beau-père, belle-mère, gendre, belle-fille' },

  { type:'tts_repeat', label:'Relations familiales', word:'Svak, snaha, bratranec, sestrična', phonetic:'[SVAK, SNA-ha, bra-TRA-nets, ses-TRI-chna]', translation:'Beau-frère, belle-sœur, cousin, cousine' },

  { type:'tts_repeat', label:'Exprimer les liens', word:'Dedek je oče mojega očeta. V nedeljo imamo kosilo pri babici.', phonetic:'[DE-dek ye O-che MO-ye-ga O-che-ta] [v ne-DEL-yo I-ma-mo KO-si-lo pri BA-bi-tsi]', translation:'Le grand-père est le père de mon père. Dimanche on déjeune chez grand-mère.' },

  { type:'matching', label:'Famille élargie → français', pairs:[
    {sl:'Dedek',     fr:'Grand-père'},
    {sl:'Babica',    fr:'Grand-mère'},
    {sl:'Teta',      fr:'Tante'},
    {sl:'Stric',     fr:'Oncle'},
    {sl:'Bratranec', fr:'Cousin'},
  ]},
  { type:'matching', label:'Beaux-parents & neveux', pairs:[
    {sl:'Sestrična', fr:'Cousine'},
    {sl:'Nečak',     fr:'Neveu'},
    {sl:'Nečakinja', fr:'Nièce'},
    {sl:'Tast',      fr:'Beau-père (père du conjoint)'},
    {sl:'Tašča',     fr:'Belle-mère (mère du conjoint)'},
  ]},
  { type:'matching', label:'Famille par alliance → français', pairs:[
    {sl:'Svak',       fr:'Beau-frère'},
    {sl:'Snaha',      fr:'Belle-sœur / Belle-fille'},
    {sl:'Zet',        fr:'Gendre'},
    {sl:'Stari starši',fr:'Grands-parents'},
    {sl:'Otroci',     fr:'Enfants (pluriel)'},
  ]},

  { type:'qcm', label:'QCM', question:'"Moji starši" signifie :',
    choices:['Mes parents','Mes enfants','Mes grands-parents','Mes frères et sœurs'], correct:0 },
  { type:'qcm', label:'QCM', question:'"Bratranec" et "sestrična" sont :',
    choices:['Cousin et cousine','Frère et sœur','Neveu et nièce','Oncle et tante'], correct:0 },
  { type:'qcm', label:'QCM culturel', question:'Comment dit-on "grands-parents" en slovène ?',
    choices:['Stari starši (vieux parents)','Veliki starši (grands parents)','Dedek in babica','Starši starši'], correct:0 },

  { type:'qcm', label:'QCM famille', question:'"Dedek je oče mojega očeta." Que signifie cette phrase ?',
    choices:['Le grand-père est le père de mon père.','Le grand-père est le frère de mon père.','Le grand-père est le mari de ma grand-mère.','Le grand-père est l\'oncle de mon père.'], correct:0 },
  { type:'qcm', label:'QCM famille', question:'Le "svak" est :',
    choices:['Le beau-frère (frère du conjoint)','Le neveu','Le cousin','Le gendre'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['Moja ___ dela najboljše potico. (Ma grand-mère fait la meilleure potica)'], blank:'babica', bank:['babica','teta','mama','sestrična'] },
  { type:'fill', label:'Phrase à trous', sentence:['Moj ___ živi v Avstriji. (Mon oncle vit en Autriche.)'], blank:'stric', bank:['stric','dedek','nečak','tast'] },
  { type:'fill', label:'Phrase à trous', sentence:['___ starši so prišli na obisk. (Mes parents sont venus rendre visite.)'], blank:'Moji', bank:['Moji','Moja','Moj','Tvoji'] },

  { type:'fill', label:'Phrase à trous', sentence:['V nedeljo imamo kosilo pri ___. (Dimanche on déjeune chez grand-mère.)'], blank:'babici', bank:['babici','dedeku','teti','stricu'] },
  { type:'fill', label:'Phrase à trous', sentence:['Moj ___ je sin moje tete. (Mon cousin est le fils de ma tante.)'], blank:'bratranec', bank:['bratranec','nečak','stric','svak'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Moja babica je najboljša kuharica.', words:['Moja','babica','je','najboljša','kuharica','.'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Dedek je oče mojega očeta.', words:['Dedek','je','oče','mojega','očeta','.'] },

  { type:'story', label:'Histoire', title:'Le repas du dimanche',
    narration:"La famille Novak se réunit chaque dimanche chez les grands-parents à Kranjska Gora. Babica a préparé le bograč — une soupe slovène traditionnelle.",
    dialogue:[
      {speaker:'Dedek', text:'Ana, koliko otrok imaš zdaj ?', side:'left'},
      {speaker:'Ana',   text:'Dva, ata ! Sin ima tri leta, hči pa eno leto.', side:'right'},
      {speaker:'Babica',text:'Ana, vzemi še malo bograča !', side:'left'},
      {speaker:'Ana',   text:'Hvala, babica. Si najboljša kuharica !', side:'right'},
      {speaker:'Dedek', text:'In tvoj mož — kako mu gre v službi ?', side:'left'},
      {speaker:'Ana',   text:'Dobro, hvala. Ima novo delo v Ljubljani.', side:'right'},
      {speaker:'Teta',  text:'In bratranec Jure — je prišel ?', side:'left'},
      {speaker:'Ana',   text:'Ne, ima sestanek. Pride naslednjič !', side:'right'},
    ],
    translation:{
      'Koliko otrok imaš zdaj ?':'Combien d\'enfants as-tu maintenant ?',
      'Sin ima tri leta, hči pa eno leto.':'Le fils a trois ans et la fille un an.',
      'Vzemi še malo bograča !':'Reprends encore un peu de bograč !',
      'Si najboljša kuharica !':'Tu es la meilleure cuisinière !',
      'Kako mu gre v službi ?':'Comment ça va au travail pour lui ?',
      'Ima novo delo v Ljubljani.':'Il a un nouveau travail à Ljubljana.',
      'In bratranec Jure — je prišel ?':'Et le cousin Jure — il est venu ?',
      'Ne, ima sestanek. Pride naslednjič !':'Non, il a une réunion. Il viendra la prochaine fois !',
    }
  },

  { type:'qcm', label:'QCM histoire', question:'Quel âge a le fils d\'Ana ?', choices:['3 ans','1 an','5 ans','7 ans'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'Où est le nouveau travail du mari d\'Ana ?', choices:['À Ljubljana','À Maribor','À Kranjska Gora','À l\'étranger'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'Pourquoi le cousin Jure n\'est pas là ?', choices:['Il a une réunion','Il est malade','Il est à l\'étranger','Il n\'aime pas la soupe'], correct:0 },

  { type:'dictee', label:'Dictée', word:'Babica', phonetic:'[BA-bi-tsa]', hint:'Grand-mère — 6 lettres' },
  { type:'dictee', label:'Dictée', word:'Bratranec', phonetic:'[bra-TRA-nets]', hint:'Cousin — 9 lettres' },

  { type:'dialogue', label:'À toi !', lines:[
    {speaker:'Luka',  text:'Imaš bratrance ali sestrične ?', side:'left'},
    {speaker:'Toi',   text:'Ja, imam enega ___.',  side:'right', blank:'bratranca', hint:'cousin (accusatif) → bratranca'},
    {speaker:'Luka',  text:'In tvoji stari starši — živijo še ?', side:'left'},
    {speaker:'Toi',   text:'Da, moj ___ in moja babica sta zdrava.', side:'right', blank:'dedek', hint:'grand-père → dedek'},
    {speaker:'Luka',  text:'Kdaj se vidite ?', side:'left'},
    {speaker:'Toi',   text:'V nedeljo imamo kosilo pri ___.', side:'right', blank:'babici', hint:'chez grand-mère → pri babici'},
  ]},
];
