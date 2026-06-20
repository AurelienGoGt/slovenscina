// ═══════════════════════════════════════════
// 4-3 — L'école
// Généré le 2026-06-20 par generate_lesson.py
// ═══════════════════════════════════════════
const EX_4_3 = [
  { type:'presentation', label:'Découverte', word:'Šolski sistem', phonetic:'[SHOL-ski SI-stem]', translation:'Le système scolaire',
    cultural:{title:'Le système scolaire slovène', text:'Le système scolaire en Slovénie est divisé en trois parties : 9 ans d\'école primaire (osnovna šola), 4 ans de lycée (srednja šola) et 3+2 ans à l\'université (fakulteta). L\'Université de Ljubljana, fondée en 1919, est la plus ancienne et compte aujourd\'hui environ 40 000 étudiants.'},
    histoire:{title:'Éducation et culture', text:'L\'éducation en Slovénie a été influencée par différentes cultures au fil des siècles. Depuis l\'indépendance en 1991, le pays a mis en place un système éducatif moderne qui valorise l\'inclusivité et la qualité.'} },

  { type:'presentation', label:'Fonctions scolaires', word:'Profesor', phonetic:'[PRO-fesor]', translation:'Professeur',
    cultural:{title:'Rôles dans l\'éducation', text:'Les enseignants slovènes sont respectés et jouent un rôle clé dans la société. Les termes pour les élèves varient selon l\'établissement : učenec pour l\'école primaire, dijak pour le lycée, et študent pour l\'université.'},
    histoire:{title:'L\'importance de l\'éducation', text:'L\'éducation a toujours été valorisée en Slovénie. Les élèves sont encouragés à participer activement aux cours et à développer leur esprit critique.'} },

  { type:'tts_repeat', label:'En classe', word:'Učim se slovenščino.', phonetic:'[U-CHIM se slo-VEN-shchi-no]', translation:'J\'apprends le slovène.' },
  { type:'tts_repeat', label:'À l\'école', word:'Hodim v šolo.', phonetic:'[HO-dim v SHO-lo]', translation:'Je vais à l\'école.' },
  { type:'tts_repeat', label:'Examen', word:'Opravil sem izpit.', phonetic:'[O-pra-VIL sem I-zpit]', translation:'J\'ai passé un examen.' },
  { type:'tts_repeat', label:'Année scolaire', word:'Konec šolskega leta je avgusta.', phonetic:'[KO-ne-ts SHOL-ske-ga LE-ta ye AV-gus-ta]', translation:'La fin de l\'année scolaire est en août.' },

  { type:'matching', label:'Établissements → français', pairs:[
    {sl:'Osnovna šola', fr:'École primaire'}, {sl:'Srednja šola', fr:'Lycée'},
    {sl:'Univerza', fr:'Université'},   {sl:'Fakulteta', fr:'Faculté'},
    {sl:'Učenec', fr:'Élève (m)'},     {sl:'Dijak', fr:'Lycéen (m)'},
    {sl:'Študent', fr:'Étudiant (m)'}, {sl:'Profesorica', fr:'Professeur (f)'},
  ]},

  { type:'qcm', label:'QCM grammaire', question:'Comment exprime-t-on l\'appartenance en slovène ?',
    choices:['Avec le génitif — profesor matematike','Avec l\'accusatif — profesorica matematiko','Avec le nominatif — profesor matematika','Avec l\'instrumental — profesorom matematiko'], correct:0 },

  { type:'qcm', label:'QCM vocabulaire', question:'Quel est le terme pour "examen" en slovène ?',
    choices:['izpit','ocena','predmet','letnik'], correct:0 },

  { type:'qcm', label:'QCM culturel', question:'En combien d\'années se termine l\'école primaire en Slovénie ?',
    choices:['9 ans','8 ans','10 ans','7 ans'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['Profesor ___ matematike je zelo prijazen. (Le professeur de mathématiques est très gentil.)'], blank:'je', bank:['je','so','sta','bila'] },
  { type:'fill', label:'Phrase à trous', sentence:['Učenec je opravil ___. (L\'élève a passé l\'examen.)'], blank:'izpit', bank:['izpit','ocena','letnik','predmet'] },
  { type:'fill', label:'Phrase à trous', sentence:['V ___ sem šel na fakulteto. (En première année, je suis allé à la faculté.)'], blank:'letniku', bank:['letniku','razredu','predmetu','izpitu'] },
  { type:'fill', label:'Phrase à trous', sentence:['Letni ___ se začne junija. (L\'examen annuel commence en juin.)'], blank:'izpit', bank:['izpit','letnik','predmet','ocena'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Profesor matematike je rekel, da je letni izpit težek.', words:['Profesor','matematike','je','rekel,','da','je','letni','izpit','težek.'] },

  { type:'story', label:'Dialogue à l\'école', title:'Pri šoli — À l\'école',
    narration:'Ana je na srednji šoli v Ljubljani. Ima sestanek s profesorjem o svojih ocenah.',
    dialogue:[
      {speaker:'Ana', text:'Dober dan, profesor. Lahko govorimo o mojih ocenah?', side:'left'},
      {speaker:'Profesor', text:'Dober dan, Ana. Seveda, kakšne ocene imaš?', side:'right'},
      {speaker:'Ana', text:'Imam nekaj težav z matematiko.', side:'left'},
      {speaker:'Profesor', text:'To ni problem. Kako ti lahko pomagam?', side:'right'},
      {speaker:'Ana', text:'Bi mi lahko razložili težke naloge?', side:'left'},
      {speaker:'Profesor', text:'Seveda, poglejva skupaj.', side:'right'},
      {speaker:'Ana', text:'Hvala, profesor. To mi veliko pomeni.', side:'left'},
      {speaker:'Profesor', text:'Ni za kaj, Ana. Srečno pri učenju!', side:'right'},
    ],
    translation:{
      'Dober dan, profesor. Lahko govorimo o mojih ocenah?': 'Bonjour, professeur. Pouvons-nous parler de mes notes ?',
      'Dober dan, Ana. Seveda, kakšne ocene imaš?': 'Bonjour, Ana. Bien sûr, quelles notes as-tu ?',
      'Imam nekaj težav z matematiko.': 'J\'ai quelques difficultés en mathématiques.',
      'To ni problem. Kako ti lahko pomagam?': 'Ce n\'est pas un problème. Comment puis-je t\'aider ?',
      'Bi mi lahko razložili težke naloge?': 'Pourriez-vous m\'expliquer les exercices difficiles ?',
      'Seveda, poglejva skupaj.': 'Bien sûr, regardons ensemble.',
      'Hvala, profesor. To mi veliko pomeni.': 'Merci, professeur. Cela compte beaucoup pour moi.',
      'Ni za kaj, Ana. Srečno pri učenju!': 'De rien, Ana. Bonne chance dans tes études !',
    }},
];

// ── fin EX_4_3 ──
