// ═══════════════════════════════════════════
// 2-5 — Les vêtements
// Généré le 2026-06-04 par generate_lesson.py
// ═══════════════════════════════════════════
const EX_2_5 = [
  { type:'presentation', label:'Découverte', word:'Nakupovanje', phonetic:'[NA-ku-po-va-nje]', translation:'Shopping',
    cultural:{title:'Shopping en Slovénie', text:'Le BTC City à Ljubljana est le plus grand centre commercial d\'Europe de l\'Est. Il offre une variété de magasins, de restaurants et de loisirs. Les Slovènes aiment faire du shopping, surtout pendant les soldes en janvier et juillet.'},
    histoire:{title:'Histoire du commerce', text:'Le commerce en Slovénie a ses racines dans le Moyen Âge, lorsque des marchés se tenaient dans les villes. Aujourd\'hui, les centres commerciaux modernes sont devenus des endroits populaires pour le shopping.'} },

  { type:'presentation', label:'Les tailles', word:'Velikost', phonetic:'[VE-li-kost]', translation:'Taille',
    cultural:{title:'Les tailles en Slovénie', text:'Les vêtements en Slovénie suivent les tailles standard S, M, L et XL. Les Slovènes apprécient la mode, et de nombreuses marques locales comme Alpina et Elan proposent des produits de qualité.'},
    histoire:{title:'Mode slovène', text:'La mode slovène est influencée par la culture européenne, mais elle a aussi ses spécificités. Les vêtements traditionnels peuvent être vus lors de festivals ou d\'événements culturels.'} },

  { type:'tts_repeat', label:'Dans un magasin', word:'Imam velikost M.', phonetic:'[I-mam VE-li-kost M]', translation:'J\'ai la taille M.' },
  { type:'tts_repeat', label:'Dans un magasin', word:'Ta jakna je premajhna.', phonetic:'[TA YAK-na ye PRE-mai-hna]', translation:'Cette veste est trop petite.' },
  { type:'tts_repeat', label:'Dans un magasin', word:'Kakšna je cena tega puloverja ?', phonetic:'[KAK-shna ye TSE-na TE-ga PU-lo-ver-ja]', translation:'Quel est le prix de ce pull ?' },
  { type:'tts_repeat', label:'Dans un magasin', word:'Imate večje velikosti ?', phonetic:'[I-ma-te VECH-je VE-li-kos-ti]', translation:'Avez-vous des tailles plus grandes ?' },

  { type:'matching', label:'Vêtements → français', pairs:[
    {sl:'Majica', fr:'T-shirt'}, {sl:'Hlače', fr:'Pantalon'},
    {sl:'Obleka', fr:'Robe'},   {sl:'Jakna', fr:'Veste'},
    {sl:'Pulover', fr:'Pull'},
  ]},

  { type:'qcm', label:'QCM grammaire', question:'En slovène, les adjectifs s\'accordent avec le nom en...',
    choices:['Genre et nombre','Temps et mode','Cas et nombre','Nombre et temps'], correct:0 },

  { type:'qcm', label:'QCM culturel', question:'Quand ont lieu les soldes en Slovénie ?',
    choices:['Janvier et juillet','Février et août','Mars et septembre','Octobre et décembre'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['Ta ___ je prevelik. (Ce pantalon est trop grand.)'], blank:'hlače', bank:['hlače','jakna','majica','pulover'] },
  { type:'fill', label:'Phrase à trous', sentence:['Kakšna je cena ___ ? (Quel est le prix de cette robe ?)'], blank:'obleke', bank:['obleke','hlače','jakne','puloverja'] },
  { type:'fill', label:'Phrase à trous', sentence:['Imate ___ velikost S ? (Avez-vous la taille S ?)'], blank:'kakšno', bank:['kakšno','veliko','majhen','premajhen'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Kakšna je cena tega klobuka ?', words:['Kakšna','je','cena','tega','klobuka','?'] },

  { type:'story', label:'Dialogue au magasin', title:'Pri trgovini — Au magasin',
    narration:'Ana je v trgovini s oblačili. Išče nov pulover za zimo.',
    dialogue:[
      {speaker:'Prodajalka', text:'Dober dan ! Kako vam lahko pomagam ?', side:'right'},
      {speaker:'Ana', text:'Dober dan ! Iščem pulover.', side:'left'},
      {speaker:'Prodajalka', text:'Imamo lepe puloverje. Kakšno barvo želite ?', side:'right'},
      {speaker:'Ana', text:'Želim modri pulover.', side:'left'},
      {speaker:'Prodajalka', text:'Imamo tudi rdečega. Bi vam bil všeč ?', side:'right'},
      {speaker:'Ana', text:'Ne, rdeča ni moja barva.', side:'left'},
      {speaker:'Prodajalka', text:'Imate kakšno vprašanje o velikosti ?', side:'right'},
      {speaker:'Ana', text:'Ja, imam velikost M.', side:'left'},
      {speaker:'Prodajalka', text:'Tukaj je modri pulover v velikosti M.', side:'right'},
      {speaker:'Ana', text:'Hvala! Koliko stane ?', side:'left'},
      {speaker:'Prodajalka', text:'Stane petdeset evrov.', side:'right'},
      {speaker:'Ana', text:'Odlično, vzamem ga!', side:'left'},
    ],
    translation:{
      'Dober dan ! Kako vam lahko pomagam ?': 'Bonjour ! Comment puis-je vous aider ?',
      'Dober dan ! Iščem pulover.': 'Bonjour ! Je cherche un pull.',
      'Imamo lepe puloverje. Kakšno barvo želite ?': 'Nous avons de beaux pulls. Quelle couleur voulez-vous ?',
      'Želim modri pulover.': 'Je veux un pull bleu.',
      'Imamo tudi rdečega. Bi vam bil všeč ?': 'Nous avons aussi un rouge. Vous plairait-il ?',
      'Ne, rdeča ni moja barva.': 'Non, le rouge n\'est pas ma couleur.',
      'Imate kakšno vprašanje o velikosti ?': 'Avez-vous une question sur la taille ?',
      'Ja, imam velikost M.': 'Oui, j\'ai la taille M.',
      'Tukaj je modri pulover v velikosti M.': 'Voici le pull bleu en taille M.',
      'Hvala! Koliko stane ?': 'Merci ! Combien ça coûte ?',
      'Stane petdeset evrov.': 'Ça coûte cinquante euros.',
      'Odlično, vzamem ga!': 'Super, je le prends !',
    }},
];

// ── fin EX_2_5 ──
