// ═══════════════════════════════════════════
// 4-8 — Révision & culture
// Généré le 2026-06-25 par generate_lesson.py
// ═══════════════════════════════════════════
const EX_4_8 = [
  { type:'presentation', label:'Révision complète', word:'Vse ravni', phonetic:'[VSE RAV-ni]', translation:'Tous niveaux',
    cultural:{title:'L\'éducation en Slovénie', text:'Le système éducatif slovène est structuré en plusieurs niveaux, allant de l\'école maternelle jusqu\'à l\'université. L\'éducation est gratuite et obligatoire jusqu\'à 15 ans.'},
    histoire:{title:'Histoire de l\'éducation', text:'L\'éducation en Slovénie a subi de nombreuses transformations au fil des siècles, influencée par des périodes sous domination autrichienne et yougoslave, avant de se stabiliser après l\'indépendance en 1991.'} },

  { type:'presentation', label:'Aspects verbaux', word:'Videti', phonetic:'[VI-de-ti]', translation:'Voir',
    cultural:{title:'Les aspects verbaux', text:'En slovène, les verbes peuvent être perfectifs ou imperfectifs, ce qui influence leur utilisation dans la phrase. Cette nuance est essentielle pour exprimer des actions complètes ou inachevées.'},
    histoire:{title:'Langue et verbes', text:'La richesse des verbes slovènes reflète la diversité de la culture et des traditions, où chaque aspect verbal peut porter une signification unique.'} },

  { type:'tts_repeat', label:'Révision des cas', word:'Kdo je to ?', phonetic:'[KDO ye TO]', translation:'Qui est-ce ?' },
  { type:'tts_repeat', label:'Révision des cas', word:'Kje je mesto ?', phonetic:'[KYE ye MES-to]', translation:'Où est la ville ?' },
  { type:'tts_repeat', label:'Révision des cas', word:'Kaj počneš ?', phonetic:'[KAJ POCH-nesh]', translation:'Que fais-tu ?' },

  { type:'matching', label:'Cas nominaux → français', pairs:[
    {sl:'Nominativ', fr:'Nominatif'}, {sl:'Genitiv', fr:'Génitif'},
    {sl:'Dativ', fr:'Datif'},   {sl:'Akuzativ', fr:'Accusatif'},
    {sl:'Instrumental', fr:'Instrumental'},
  ]},

  { type:'qcm', label:'QCM grammaire', question:'Quel est le rôle du génitif ?',
    choices:['Indiquer la possession','Indiquer le lieu','Indiquer l\'objet direct','Indiquer la manière'], correct:0 },

  { type:'qcm', label:'QCM culturel', question:'Quel plat est typique de la Slovénie ?',
    choices:['Prekmurska gibanica','Croissant','Pasta','Sushi'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['___ je v Ljubljani. (Je suis à Ljubljana.)'], blank:'Jaz', bank:['Jaz','Ti','On','Ona'] },

  { type:'fill', label:'Phrase à trous', sentence:['___ je moje ime. (Mon nom est...)'], blank:'Moj', bank:['Moj','Tvoj','Njen','Njegov'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Katera knjiga je tvoja ?', words:['Katera','knjiga','je','tvoja','?'] },

  { type:'story', label:'Conversation à la galerie', title:'V galeriji — À la galerie',
    narration:'Ana in Marko obiskujeta galerijo v Ljubljani. Ogledujeta si umetniška dela lokalnih umetnikov.',
    dialogue:[
      {speaker:'Ana', text:'Oglej si to sliko! Je res lepa.', side:'left'},
      {speaker:'Marko', text:'Res je. Umetnik je zelo talentiran.', side:'right'},
      {speaker:'Ana', text:'Kdo je umetnik?', side:'left'},
      {speaker:'Marko', text:'To je Maja, zelo znana v Sloveniji.', side:'right'},
      {speaker:'Ana', text:'Morava kupiti to sliko.', side:'left'},
      {speaker:'Marko', text:'To bi bilo super! Koliko stane?', side:'right'},
      {speaker:'Ana', text:'Mislim, da je cena 500 evrov.', side:'left'},
      {speaker:'Marko', text:'Nisem prepričan, da imamo dovolj.', side:'right'},
    ],
    translation:{
      'Oglej si to sliko! Je res lepa.': 'Regarde ce tableau ! Il est vraiment beau.',
      'Res je. Umetnik je zelo talentiran.': 'C\'est vrai. L\'artiste est très talentueux.',
      'Kdo je umetnik?': 'Qui est l\'artiste ?',
      'To je Maja, zelo znana v Sloveniji.': 'C\'est Maja, très connue en Slovénie.',
      'Morava kupiti to sliko.': 'Nous devons acheter ce tableau.',
      'To bi bilo super! Koliko stane?': 'Ce serait super ! Combien ça coûte ?',
      'Mislim, da je cena 500 evrov.': 'Je pense que le prix est de 500 euros.',
      'Nisem prepričan, da imamo dovolj.': 'Je ne suis pas sûr que nous en ayons assez.',
    }},
];

// ── fin EX_4_8 ──
