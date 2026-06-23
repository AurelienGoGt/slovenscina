// ═══════════════════════════════════════════
// 4-6 — La culture slovène
// Généré le 2026-06-23 par generate_lesson.py
// ═══════════════════════════════════════════
const EX_4_6 = [
  { type:'presentation', label:'Découverte', word:'Prešeren', phonetic:'[PRE-she-ren]', translation:'Prešeren',
    cultural:{title:'France Prešeren', text:'France Prešeren est considéré comme le poète national slovène. Son poème "Zdravljica" est l\'hymne national, connu pour ses messages de paix et d\'union.'},
    histoire:{title:'L\'importance de Prešeren', text:'Né en 1800, Prešeren a joué un rôle clé dans le développement de la littérature slovène. Son travail a inspiré de nombreux artistes et intellectuels slovènes.'} },

  { type:'presentation', label:'Art et culture', word:'Narodna galerija', phonetic:'[NA-rod-na GA-le-ri-ya]', translation:'Galerie nationale',
    cultural:{title:'La Galerie nationale', text:'La Narodna galerija à Ljubljana abrite des œuvres d\'art slovène et européen, offrant un aperçu de l\'évolution artistique du pays.'},
    histoire:{title:'L\'art slovène', text:'L\'art en Slovénie a des racines profondes, avec des artistes comme Jože Plečnik, dont les œuvres architecturales sont emblématiques de Ljubljana.'} },

  { type:'tts_repeat', label:'Poète national', word:'Prešeren je največji pesnik.', phonetic:'[PRE-she-ren ye NAY-vek-shee PES-nik]', translation:'Prešeren est le plus grand poète.' },
  { type:'tts_repeat', label:'Littérature', word:'Cankar je znan pisatelj.', phonetic:'[TSAN-kar ye ZNAN PEE-satel]', translation:'Cankar est un écrivain connu.' },
  { type:'tts_repeat', label:'Art contemporain', word:'Mušič je umetniški umetnik.', phonetic:'[MU-sheech ye oo-MET-neesh-kee OO-met-nik]', translation:'Mušič est un artiste contemporain.' },

  { type:'matching', label:'Artistes → français', pairs:[
    {sl:'Prešeren', fr:'Poète'}, {sl:'Cankar', fr:'Écrivain'},
    {sl:'Plečnik', fr:'Architecte'}, {sl:'Mušič', fr:'Artiste'},
    {sl:'Zdravljica', fr:'Hymne'},
  ]},

  { type:'qcm', label:'QCM grammaire', question:'Le superlatif absolu se forme en slovène par :',
    choices:['naj + adjectif','le + adjectif','plus + adjectif','le plus + adjectif'], correct:0 },

  { type:'qcm', label:'QCM culturel', question:'Quel poète est connu pour son hymne national ?',
    choices:['Prešeren','Cankar','Plečnik','Mušič'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['Prešeren je ___ pesnik. (Prešeren est le plus grand poète.)'], blank:'največji', bank:['največji','najboljši','najpomembnejši','najslavnejši'] },

  { type:'fill', label:'Phrase à trous', sentence:['Cankar je ___ pisatelj. (Cankar est un écrivain connu.)'], blank:'znan', bank:['znan','velik','mlad','stari'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Zdravljica je slovenska himna.', words:['Zdravljica','je','slovenska','himna','.'] },

  { type:'story', label:'Dialogue culturel', title:'V Narodni galeriji — À la Galerie nationale',
    narration:'Ana in Marko obiskujeta Narodno galerijo v Ljubljani. Želita izvedeti več o slovenski umetnosti.',
    dialogue:[
      {speaker:'Ana', text:'Kako lepo je tukaj! Kaj misliš o Prešernu?', side:'left'},
      {speaker:'Marko', text:'Prešeren je največji pesnik. Njegova dela so res izjemna.', side:'right'},
      {speaker:'Ana', text:'In Cankar? Tudi on je pomemben za našo literaturo.', side:'left'},
      {speaker:'Marko', text:'Seveda! Njegove zgodbe so klasične in še danes aktualne.', side:'right'},
      {speaker:'Ana', text:'Kaj pa Plečnik? Njegova arhitektura je fascinantna.', side:'left'},
      {speaker:'Marko', text:'Ja, njegovi projekti so edinstveni in prepoznani po vsem svetu.', side:'right'},
      {speaker:'Ana', text:'Umetnost je del naše kulturne dediščine.', side:'left'},
      {speaker:'Marko', text:'Res je! Upam, da bomo več takih umetnikov videli v prihodnosti.', side:'right'},
    ],
    translation:{
      'Kako lepo je tukaj! Kaj misliš o Prešernu?': 'Comme c\'est beau ici ! Que penses-tu de Prešeren ?',
      'Prešeren je največji pesnik. Njegova dela so res izjemna.': 'Prešeren est le plus grand poète. Ses œuvres sont vraiment exceptionnelles.',
      'In Cankar? Tudi on je pomemben za našo literaturo.': 'Et Cankar ? Lui aussi est important pour notre littérature.',
      'Seveda! Njegove zgodbe so klasične in še danes aktualne.': 'Bien sûr ! Ses histoires sont classiques et encore d\'actualité aujourd\'hui.',
      'Kaj pa Plečnik? Njegova arhitektura je fascinantna.': 'Et Plečnik ? Son architecture est fascinante.',
      'Ja, njegovi projekti so edinstveni in prepoznani po vsem svetu.': 'Oui, ses projets sont uniques et reconnus dans le monde entier.',
      'Umetnost je del naše kulturne dediščine.': 'L\'art fait partie de notre patrimoine culturel.',
      'Res je! Upam, da bomo več takih umetnikov videli v prihodnosti.': 'C\'est vrai ! J\'espère que nous verrons plus d\'artistes comme ça à l\'avenir.',
    }},
];

// ── fin EX_4_6 ──
