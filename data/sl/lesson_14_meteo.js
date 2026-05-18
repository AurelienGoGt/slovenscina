// ═══════════════════════════════════════════
// 1-14 — Météo & saisons
// ═══════════════════════════════════════════
const EX_1_14 = [
  { type:'presentation', label:'Les saisons', word:'Pomlad — Poletje — Jesen — Zima', phonetic:'[POM-lad] [po-LET-ye] [YE-sen] [ZI-ma]', translation:'Printemps — Été — Automne — Hiver',
    cultural:{title:'4 vraies saisons', text:'La Slovénie a 4 saisons bien marquées. Jesen (automne) est la préférée des randonneurs — les forêts deviennent rouge-or. Zima (hiver) = ski sur le Triglav et Kranjska Gora !'},
    histoire:{title:'Triglav — le toit de la Slovénie', text:'Le Triglav (2864m) est sur le drapeau et dans l\'hymne national. Gravir le Triglav est un rite de passage pour tout Slovène. Le Parc national du Triglav couvre 4% du pays. La rivière Soča, d\'une couleur turquoise irréelle, traverse les Alpes juliennes — classée parmi les plus belles d\'Europe.'} },
  { type:'tts_repeat', label:'Saisons', word:'Pomlad, poletje, jesen, zima', phonetic:'[POM-lad, po-LET-ye, YE-sen, ZI-ma]', translation:'Printemps, été, automne, hiver' },
  { type:'matching', label:'Saisons → français', pairs:[
    {sl:'Pomlad',  fr:'Printemps'},
    {sl:'Poletje', fr:'Été'},
    {sl:'Jesen',   fr:'Automne'},
    {sl:'Zima',    fr:'Hiver'},
  ]},
  { type:'tts_repeat', label:'La météo', word:'Sončno, oblačno, dežuje, sneži, vetrovno, megla', phonetic:'[SON-chno, ob-LACH-no, de-ZHU-ye, SNE-zhi, vet-ROV-no, MEG-la]', translation:'Ensoleillé, nuageux, il pleut, il neige, venteux, brouillard' },
  { type:'matching', label:'Météo → français', pairs:[
    {sl:'Sončno',   fr:'Ensoleillé'},
    {sl:'Oblačno',  fr:'Nuageux'},
    {sl:'Dežuje',   fr:'Il pleut'},
    {sl:'Sneži',    fr:'Il neige'},
    {sl:'Vetrovno', fr:'Venteux'},
  ]},
  { type:'tts_repeat', label:'Température', word:'Vroče je. Mrzlo je. Toplo je. Hladno je.', phonetic:'[VRO-che ye. MRZ-lo ye. TOP-lo ye. HLAD-no ye.]', translation:'Il fait très chaud. Il fait très froid. Il fait chaud. Il fait frais.' },
  { type:'qcm', label:'QCM', question:'En hiver en Slovénie : "Sneži in mrzlo je." Que se passe-t-il ?', choices:['Il neige et il fait froid','Il pleut et il fait froid','Il neige et il fait chaud','Il fait beau'], correct:0 },
  { type:'fill', label:'Phrase à trous', sentence:['Danes je ___ in toplo. (Aujourd\'hui c\'est ensoleillé et chaud)'], blank:'sončno', bank:['sončno','oblačno','megla','dežuje'] },
  { type:'story', label:'Histoire', title:'Quel temps pour la rando ?',
    narration:"Marc veut faire une randonnée sur le Triglav. Il appelle son ami Luka pour savoir s\'il peut l\'accompagner.",
    dialogue:[
      {speaker:'Marc', text:'Luka, kakšno je jutri vreme ?', side:'left'},
      {speaker:'Luka', text:'Zjutraj bo sončno, popoldne pa oblačno.', side:'right'},
      {speaker:'Marc', text:'In temperatura ? Bo toplo ?', side:'left'},
      {speaker:'Luka', text:'V dolini bo okoli 20 stopinj, na Triglavu pa mrzlo.', side:'right'},
      {speaker:'Marc', text:'Potem gremo zjutraj ! Ob šestih ?', side:'left'},
      {speaker:'Luka', text:'Dogovorjeno ! Lepo vreme za hribolazce !', side:'right'},
    ],
    translation:{
      'Kakšno je jutri vreme ?':'Quel temps fait-il demain ?',
      'Zjutraj bo sončno, popoldne pa oblačno.':'Le matin sera ensoleillé, l\'après-midi nuageux.',
      'In temperatura ? Bo toplo ?':'Et la température ? Il fera chaud ?',
      'V dolini bo okoli 20 stopinj, na Triglavu pa mrzlo.':'Dans la vallée environ 20 degrés, sur le Triglav il fera froid.',
      'Potem gremo zjutraj !':'Alors on y va le matin !',
      'Dogovorjeno !':'C\'est décidé !',
      'Lepo vreme za hribolazce !':'Beau temps pour les randonneurs !',
    }
  },
  { type:'qcm', label:'QCM histoire', question:'Comment sera la météo l\'après-midi ?', choices:['Nuageuse','Ensoleillée','Il va pleuvoir','Il va neiger'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'À quelle heure partent-ils ?', choices:['À 6h','À 8h','À 7h','À 9h'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'"Hribolazci" vient de "hrib" (colline/montagne). Que signifie ce mot ?', choices:['Randonneurs / alpinistes','Skieurs','Cyclistes','Nageurs'], correct:0 },
  { type:'dictee', label:'Dictée', word:'Sončno', phonetic:'[SON-chno]', hint:'Ensoleillé — 6 lettres avec Š à la fin' },
  { type:'reconstruct', label:'Reconstitue', sentence:'Danes je lepo vreme in toplo.', words:['Danes','je','lepo','vreme','in','toplo','.'] },
];
