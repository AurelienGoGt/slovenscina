// ═══════════════════════════════════════════
// 3-6 — Traditions slovènes
// Généré le 2026-06-15 par generate_lesson.py
// ═══════════════════════════════════════════
const EX_3_6 = [
  { type:'presentation', label:'Découverte', word:'Kurentovanje', phonetic:'[KU-rent-o-va-nje]', translation:'Kurentovanje',
    cultural:{title:'Le Kurentovanje à Ptuj', text:'Le Kurentovanje est le plus grand carnaval de Slovénie, célébré en février à Ptuj. Les participants portent des costumes traditionnels, en particulier le Kurent, un démon à peau de mouton qui chasse l’hiver.'},
    histoire:{title:'Traditions et folklore', text:'Cette tradition remonte à des siècles et est liée aux rites de printemps, symbolisant la fin de l’hiver et le renouveau de la nature. Elle est inscrite au patrimoine culturel immatériel de l’humanité.'} },

  { type:'presentation', label:'Découverte', word:'Pust', phonetic:'[PU-st]', translation:'Pust',
    cultural:{title:'Le Pust', text:'Le Pust est une autre célébration populaire en Slovénie, marquée par des défilés, des masques et des fêtes avant le Carême. Les gens portent des costumes colorés et participent à des festivités.'},
    histoire:{title:'Rituels de Pust', text:'Le Pust est célébré dans toute la Slovénie, avec des traditions locales variées. Les déguisements sont souvent inspirés de personnages folkloriques, et les festivités visent à chasser les esprits mauvais.'} },

  { type:'tts_repeat', label:'Au Pust', word:'Se praznuje Pust.', phonetic:'[SE PRAZ-nu-ye PU-st]', translation:'On célèbre Pust.' },
  { type:'tts_repeat', label:'Au Kurentovanje', word:'Koliko mask je na povorki ?', phonetic:'[KO-li-ko MASK ye na PO-vor-ki]', translation:'Combien de masques y a-t-il dans le défilé ?' },
  { type:'tts_repeat', label:'Tradition', word:'Za praznovanje se obhaja.', phonetic:'[ZA PRAZ-no-VA-nje SE ob-HA-ya]', translation:'On célèbre pour la célébration.' },
  { type:'tts_repeat', label:'Célébration', word:'Martinovanje je v novembru.', phonetic:'[MAR-ti-no-VA-nje YE v no-VEM-bru]', translation:'La célébration de Saint-Martin a lieu en novembre.' },

  { type:'matching', label:'Célébrations → français', pairs:[
    {sl:'Kurentovanje', fr:'Kurentovanje'}, {sl:'Pust', fr:'Pust'},
    {sl:'Martinovanje', fr:'Saint-Martin'}, {sl:'Jurjevanje', fr:'Fête du printemps'},
    {sl:'Kres', fr:'Feu de joie'},
  ]},

  { type:'qcm', label:'QCM grammaire', question:'Le passif narratif pour les traditions est :',
    choices:['se praznuje','praznuje se','se bo praznoval','je praznovan'], correct:0 },

  { type:'qcm', label:'QCM culturel', question:'Quelle est la date des feux de Kres ?',
    choices:['23 juin','1 mai','15 août','31 décembre'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['Na Pustu se ___ (On célèbre Pust.)'], blank:'praznuje', bank:['praznuje','obhaja','celebrira','obeleži'] },
  { type:'fill', label:'Phrase à trous', sentence:['Jurjevanje je ___ (La fête du printemps est en avril.)'], blank:'aprila', bank:['junija','aprila','maja','decembra'] },
  { type:'fill', label:'Phrase à trous', sentence:['Na koncu se ___ (À la fin, on danse.)'], blank:'reje', bank:['reje','pleše','hodi','poje'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Praznuje se Martinovanje v novembru.', words:['Praznuje','se','Martinovanje','v','novembru','?'] },

  { type:'story', label:'Célébration de Pust', title:'Pustovanje — La célébration de Pust',
    narration:'V Ptuju se obeležuje Pust. Ljudje se oblačijo v različne maske in sodelujejo v pustni povorki.',
    dialogue:[
      {speaker:'Sara', text:'Živjo! Se veseliš Pusta ?', side:'left'},
      {speaker:'Luka', text:'Ja, komaj čakam! Koliko mask bo letos ?', side:'right'},
      {speaker:'Sara', text:'Mislim, da bo zelo veliko. Dovolj za vse!', side:'left'},
      {speaker:'Luka', text:'Super! Kdo bo oblečen v Kurenta?', side:'right'},
      {speaker:'Sara', text:'Moj brat! Vsako leto je Kurent.', side:'left'},
      {speaker:'Luka', text:'To je kul! Ali bomo šli na praznovanje?', side:'right'},
      {speaker:'Sara', text:'Seveda, najprej bomo šli na povorko.', side:'left'},
      {speaker:'Luka', text:'Odlično! Na koncu pa gremo na večerjo.', side:'right'},
    ],
    translation:{
      'Živjo! Se veseliš Pusta ?': 'Salut ! Tu es impatient pour Pust ?',
      'Ja, komaj čakam! Koliko mask bo letos ?': 'Oui, j’ai hâte ! Combien de masques y aura-t-il cette année ?',
      'Mislim, da bo zelo veliko. Dovolj za vse!': 'Je pense qu’il y en aura beaucoup. Assez pour tout le monde !',
      'Super! Kdo bo oblečen v Kurenta?': 'Super ! Qui sera déguisé en Kurent ?',
      'Moj brat! Vsako leto je Kurent.': 'Mon frère ! Chaque année, il est Kurent.',
      'To je kul! Ali bomo šli na praznovanje?': 'C’est génial ! Allons-nous à la célébration ?',
      'Seveda, najprej bomo šli na povorko.': 'Bien sûr, d’abord nous irons au défilé.',
      'Odlično! Na koncu pa gremo na večerjo.': 'Excellent ! À la fin, nous irons dîner.',
    }},
];

// ── fin EX_3_6 ──
