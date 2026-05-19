// ═══════════════════════════════════════════
// 1-14 — Météo & saisons
// ═══════════════════════════════════════════
const EX_1_14 = [
  { type:'presentation', label:'Les saisons', word:'Pomlad — Poletje — Jesen — Zima', phonetic:'[POM-lad] [po-LET-ye] [YE-sen] [ZI-ma]', translation:'Printemps — Été — Automne — Hiver',
    cultural:{title:'4 vraies saisons', text:'La Slovénie a 4 saisons bien marquées. Jesen (automne) est la préférée des randonneurs — les forêts deviennent rouge-or. Zima (hiver) = ski sur le Triglav et Kranjska Gora !'},
    histoire:{title:'Triglav — le toit de la Slovénie', text:'Le Triglav (2864m) est sur le drapeau et dans l\'hymne national. Gravir le Triglav est un rite de passage pour tout Slovène. Le Parc national du Triglav couvre 4% du pays. La rivière Soča, d\'une couleur turquoise irréelle, traverse les Alpes juliennes — classée parmi les plus belles d\'Europe.'} },

  { type:'presentation', label:'Kakšno je vreme ?', word:'Kakšno je vreme ?', phonetic:'[KAK-shno ye VRE-me]', translation:'Quel temps fait-il ?', noTTS:false,
    cultural:{title:'Parler de la météo', text:'"Kakšno je vreme ?" = quel temps fait-il ? La météo est un sujet de conversation universel. En Slovénie, le temps change vite à cause des Alpes. Les expressions météo utilisent souvent des formes impersonnelles : "Dežuje" (il pleut), "Sneži" (il neige) — sans sujet !'} },

  { type:'presentation', label:'Verbes météo impersonnels', word:'Dežuje — Sneži — Grmi — Megli — Jasno je', phonetic:'[de-ZHU-ye] [SNE-zhi] [GR-mi] [MEG-li] [YAS-no ye]', translation:'Il pleut — Il neige — Il tonne — Il y a du brouillard — Il fait clair', noTTS:true,
    cultural:{title:'Formes impersonnelles — pas de sujet !', text:'Ces verbes météo n\'ont pas de sujet — on exprime directement le phénomène :\n• Dežuje. = Il pleut. (litt. "ça pleut")\n• Sneži. = Il neige.\n• Grmi. = Il tonne.\n• Megli. = Il y a du brouillard. (de "megla" = brouillard)\n• Jasno je. = Il fait clair / Le ciel est dégagé.\nC\'est comme en espagnol "llueve" ou en allemand "es regnet" — une seule forme, pas de conjugaison !'} },

  { type:'presentation', label:'Trois zones climatiques', word:'Alpska — Mediteranska — Panonska', phonetic:'[ALP-ska] [me-di-te-RAN-ska] [pa-NON-ska]', translation:'Alpine — Méditerranéenne — Pannonienne', noTTS:true,
    cultural:{title:'3 climats dans un si petit pays !', text:'La Slovénie (20 000 km²) a trois zones climatiques distinctes :\n• Alpes (nord-ouest) : hivers froids et enneigés, étés frais — ski à Kranjska Gora\n• Méditerranée (sud-ouest, côte de l\'Adriatique) : étés chauds et secs, hivers doux — Koper, Piran\n• Pannonien (est, plaines) : étés chauds, hivers continentaux — Maribor, Murska Sobota\nEn 2 heures de voiture, tu passes de la neige à la plage !'} },

  { type:'tts_repeat', label:'Les saisons', word:'Pomlad, poletje, jesen, zima', phonetic:'[POM-lad, po-LET-ye, YE-sen, ZI-ma]', translation:'Printemps, été, automne, hiver' },
  { type:'tts_repeat', label:'La météo', word:'Sončno, oblačno, dežuje, sneži, vetrovno, megla', phonetic:'[SON-chno, ob-LACH-no, de-ZHU-ye, SNE-zhi, vet-ROV-no, MEG-la]', translation:'Ensoleillé, nuageux, il pleut, il neige, venteux, brouillard' },
  { type:'tts_repeat', label:'Température', word:'Vroče je. Mrzlo je. Toplo je. Hladno je.', phonetic:'[VRO-che ye. MRZ-lo ye. TOP-lo ye. HLAD-no ye.]', translation:'Il fait très chaud. Il fait très froid. Il fait chaud. Il fait frais.' },

  { type:'tts_repeat', label:'Verbes impersonnels', word:'Dežuje. Sneži. Grmi. Megli. Jasno je.', phonetic:'[de-ZHU-ye. SNE-zhi. GR-mi. MEG-li. YAS-no ye.]', translation:'Il pleut. Il neige. Il tonne. Il y a du brouillard. Il fait clair.' },

  { type:'tts_repeat', label:'La température en degrés', word:'Deset stopinj Celzija. Minus pet stopinj. Trideset stopinj.', phonetic:'[DE-set STO-pinj CEL-zi-ya. MI-nus PET STO-pinj. TRI-de-set STO-pinj.]', translation:'10 degrés Celsius. Moins cinq degrés. Trente degrés.' },

  { type:'tts_repeat', label:'Prévisions météo', word:'Kakšno bo vreme jutri ? Jutrišnje vreme bo sončno.', phonetic:'[KAK-shno bo VRE-me YUT-ri] [yut-RISH-nye VRE-me bo SON-chno]', translation:'Quel temps fera-t-il demain ? La météo de demain sera ensoleillée.' },

  { type:'matching', label:'Saisons → français', pairs:[
    {sl:'Pomlad',  fr:'Printemps'},
    {sl:'Poletje', fr:'Été'},
    {sl:'Jesen',   fr:'Automne'},
    {sl:'Zima',    fr:'Hiver'},
    {sl:'Jeseni',  fr:'En automne'},
  ]},
  { type:'matching', label:'Météo → français', pairs:[
    {sl:'Sončno',   fr:'Ensoleillé'},
    {sl:'Oblačno',  fr:'Nuageux'},
    {sl:'Dežuje',   fr:'Il pleut'},
    {sl:'Sneži',    fr:'Il neige'},
    {sl:'Vetrovno', fr:'Venteux'},
  ]},

  { type:'matching', label:'Adjectifs météo → français', pairs:[
    {sl:'Hladno',   fr:'Froid / Frais'},
    {sl:'Vroče',    fr:'Chaud'},
    {sl:'Toplo',    fr:'Doux / Tiède'},
    {sl:'Deževno',  fr:'Pluvieux'},
    {sl:'Jasno',    fr:'Clair / Dégagé'},
  ]},

  { type:'qcm', label:'QCM', question:'En hiver en Slovénie : "Sneži in mrzlo je." Que se passe-t-il ?', choices:['Il neige et il fait froid','Il pleut et il fait froid','Il neige et il fait chaud','Il fait beau'], correct:0 },
  { type:'qcm', label:'QCM grammaire', question:'"Dežuje" et "Sneži" sont des formes impersonnelles. Cela veut dire :',
    choices:['Pas de sujet — on dit juste le phénomène','Il faut dire "ono" (il neutre) avant','Ce sont des noms, pas des verbes','On peut dire "jaz dežuje"'], correct:0 },
  { type:'qcm', label:'QCM', question:'Quelle saison correspond à "Jeseni so gozdi zlati." (Les forêts sont dorées en automne) ?',
    choices:['Jesen (automne)','Poletje (été)','Pomlad (printemps)','Zima (hiver)'], correct:0 },

  { type:'qcm', label:'QCM température', question:'Comment dit-on "Il fait moins cinq degrés" ?',
    choices:['Minus pet stopinj.','Pet stopinj.','Minus stopinj pet.','Stopinj minus pet.'], correct:0 },
  { type:'qcm', label:'QCM prévisions', question:'"Kakšno bo vreme jutri ?" signifie :',
    choices:['Quel temps fera-t-il demain ?','Quel temps fait-il aujourd\'hui ?','Le temps sera beau demain.','Il fera froid demain.'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['Danes je ___ in toplo. (Aujourd\'hui c\'est ensoleillé et chaud)'], blank:'sončno', bank:['sončno','oblačno','megla','dežuje'] },
  { type:'fill', label:'Phrase à trous', sentence:['Pozimi ___ in mrzlo je. (En hiver il neige et il fait froid.)'], blank:'sneži', bank:['sneži','dežuje','sončno','vetrovno'] },
  { type:'fill', label:'Phrase à trous', sentence:['Je ___ stopinj zunaj. (Il fait 20 degrés dehors.)'], blank:'dvajset', bank:['dvajset','deset','pet','trideset'] },

  { type:'fill', label:'Phrase à trous', sentence:['Zunaj ___. Vzemi dežnik ! (Il pleut dehors. Prends ton parapluie !)'], blank:'dežuje', bank:['dežuje','sneži','grmi','megli'] },
  { type:'fill', label:'Phrase à trous', sentence:['Jutri bo ___. Gremo na plažo ! (Demain il fera beau. On va à la plage !)'], blank:'sončno', bank:['sončno','deževno','hladno','oblačno'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Danes je lepo vreme in toplo.', words:['Danes','je','lepo','vreme','in','toplo','.'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Kakšno bo vreme jutri v gorah ?', words:['Kakšno','bo','vreme','jutri','v','gorah','?'] },

  { type:'story', label:'Histoire', title:'Quel temps pour la rando ?',
    narration:"Marc veut faire une randonnée sur le Triglav. Il appelle son ami Luka pour savoir s\'il peut l\'accompagner.",
    dialogue:[
      {speaker:'Marc', text:'Luka, kakšno je jutri vreme ?', side:'left'},
      {speaker:'Luka', text:'Zjutraj bo sončno, popoldne pa oblačno.', side:'right'},
      {speaker:'Marc', text:'In temperatura ? Bo toplo ?', side:'left'},
      {speaker:'Luka', text:'V dolini bo okoli 20 stopinj, na Triglavu pa mrzlo.', side:'right'},
      {speaker:'Marc', text:'Potem gremo zjutraj ! Ob šestih ?', side:'left'},
      {speaker:'Luka', text:'Dogovorjeno ! Lepo vreme za hribolazce !', side:'right'},
      {speaker:'Marc', text:'Super ! Vzamem toplo jakno !', side:'left'},
    ],
    translation:{
      'Kakšno je jutri vreme ?':'Quel temps fait-il demain ?',
      'Zjutraj bo sončno, popoldne pa oblačno.':'Le matin sera ensoleillé, l\'après-midi nuageux.',
      'In temperatura ? Bo toplo ?':'Et la température ? Il fera chaud ?',
      'V dolini bo okoli 20 stopinj, na Triglavu pa mrzlo.':'Dans la vallée environ 20 degrés, sur le Triglav il fera froid.',
      'Potem gremo zjutraj !':'Alors on y va le matin !',
      'Dogovorjeno !':'C\'est décidé !',
      'Lepo vreme za hribolazce !':'Beau temps pour les randonneurs !',
      'Super ! Vzamem toplo jakno !':'Super ! Je prends un manteau chaud !',
    }
  },

  { type:'qcm', label:'QCM histoire', question:'Comment sera la météo l\'après-midi ?', choices:['Nuageuse','Ensoleillée','Il va pleuvoir','Il va neiger'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'À quelle heure partent-ils ?', choices:['À 6h','À 8h','À 7h','À 9h'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'"Hribolazci" vient de "hrib" (montagne). Que signifie ce mot ?', choices:['Randonneurs / alpinistes','Skieurs','Cyclistes','Nageurs'], correct:0 },

  { type:'dictee', label:'Dictée', word:'Sončno', phonetic:'[SON-chno]', hint:'Ensoleillé — 6 lettres' },
  { type:'dictee', label:'Dictée', word:'Dežuje', phonetic:'[de-ZHU-ye]', hint:'Il pleut — 6 lettres' },

  { type:'dialogue', label:'À toi !', lines:[
    {speaker:'Ana', text:'Kakšno je danes vreme pri tebi ?', side:'left'},
    {speaker:'Toi', text:'Danes je ___ in toplo.', side:'right', blank:'sončno', hint:'ensoleillé → sončno'},
    {speaker:'Ana', text:'Koliko je stopinj ?', side:'left'},
    {speaker:'Toi', text:'Je ___ stopinj.', side:'right', blank:'dvajset', hint:'20 → dvajset'},
    {speaker:'Ana', text:'In jutri — kakšno bo vreme ?', side:'left'},
    {speaker:'Toi', text:'Jutri bo ___.', side:'right', blank:'oblačno', hint:'nuageux → oblačno'},
  ]},
];
