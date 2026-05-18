// ═══════════════════════════════════════════
// 1-12 — La famille élargie
// ═══════════════════════════════════════════
const EX_1_12 = [
  { type:'presentation', label:'Grands-parents', word:'Dedek — Babica', phonetic:'[DE-dek] [ba-BI-tsa]', translation:'Grand-père — Grand-mère',
    cultural:{title:'Stari starši', text:'"Stari starši" = grands-parents (littéralement "vieux parents"). Les grands-parents jouent souvent un rôle central — garder les petits-enfants, cuisiner les plats traditionnels.'},
    histoire:{title:'La potica — dessert national', text:'La potica est un gâteau roulé aux noix transmis de génération en génération. Il en existe plus de 80 variétés ! Préparée pour Noël et Pâques, chaque famille a sa recette secrète. En 2021, la tradition de la potica a été inscrite au patrimoine culturel immatériel de l\'UNESCO.'} },
  { type:'tts_repeat', label:'Famille élargie 1', word:'Dedek, babica, teta, stric, bratranec, sestrična', phonetic:'[DE-dek, ba-BI-tsa, TE-ta, STRIC, bra-TRA-nets, ses-TRI-chna]', translation:'Grand-père, grand-mère, tante, oncle, cousin, cousine' },
  { type:'tts_repeat', label:'Famille élargie 2', word:'Nečak, nečakinja, tast, tašča, zet, snaha', phonetic:'[NE-chak, ne-cha-KIN-ya, TAST, TACH-cha, ZET, SNA-ha]', translation:'Neveu, nièce, beau-père, belle-mère, gendre, belle-fille' },
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
  { type:'fill', label:'Phrase à trous', sentence:['Moja ___ dela najboljše potico. (Ma grand-mère fait la meilleure potica)'], blank:'babica', bank:['babica','teta','mama','sestrična'] },
  { type:'story', label:'Histoire', title:'Le repas du dimanche',
    narration:"La famille Novak se réunit chaque dimanche chez les grands-parents à Kranjska Gora. Babica a préparé le bograč — une soupe slovène traditionnelle.",
    dialogue:[
      {speaker:'Dedek', text:'Ana, koliko otrok imaš zdaj ?', side:'left'},
      {speaker:'Ana',   text:'Dva, ata ! Sin ima tri leta, hči pa eno leto.', side:'right'},
      {speaker:'Babica',text:'Ana, vzemi še malo bograča !', side:'left'},
      {speaker:'Ana',   text:'Hvala, babica. Si najboljša kuharica !', side:'right'},
      {speaker:'Dedek', text:'In tvoj mož — kako mu gre v službi ?', side:'left'},
      {speaker:'Ana',   text:'Dobro, hvala. Ima novo delo v Ljubljani.', side:'right'},
    ],
    translation:{
      'Koliko otrok imaš zdaj ?':'Combien d\'enfants as-tu maintenant ?',
      'Sin ima tri leta, hči pa eno leto.':'Le fils a trois ans et la fille un an.',
      'Vzemi še malo bograča !':'Reprends encore un peu de bograč !',
      'Si najboljša kuharica !':'Tu es la meilleure cuisinière !',
      'Kako mu gre v službi ?':'Comment ça va au travail pour lui ?',
      'Ima novo delo v Ljubljani.':'Il a un nouveau travail à Ljubljana.',
    }
  },
  { type:'qcm', label:'QCM histoire', question:'Quel âge a le fils d\'Ana ?', choices:['3 ans','1 an','5 ans','7 ans'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'Où est le nouveau travail du mari d\'Ana ?', choices:['À Ljubljana','À Maribor','À Kranjska Gora','À l\'étranger'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'Babica = grand-mère. Ata dans "Dva, ata !" veut dire…', choices:['Papa (dialectal)','Grand-père','Oncle','Mari'], correct:0 },
  { type:'dictee', label:'Dictée', word:'Babica', phonetic:'[ba-BI-tsa]', hint:'Grand-mère — 6 lettres' },
  { type:'reconstruct', label:'Reconstitue', sentence:'Moja babica je najboljša kuharica.', words:['Moja','babica','je','najboljša','kuharica','.'] },
];
