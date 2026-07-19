// ═══════════════════════════════════════════
// 6-6 — Gastronomie avancée
// Généré le 2026-07-19 par generate_lesson.py
// ═══════════════════════════════════════════
const EX_6_6 = [
  { type:'presentation', label:'Découverte', word:'Vina', phonetic:'[VI-na]', translation:'Les vins',
    cultural:{title:'Les vins slovènes', text:'La Slovénie possède trois grandes régions viticoles : Primorska, Posavje et Podravje. Chaque région produit des vins uniques, comme le Teran et la Rebula.'},
    histoire:{title:'Tradition viticole', text:'La culture de la vigne en Slovénie remonte à l’époque romaine. Aujourd\'hui, la Slovénie est reconnue pour ses vins de qualité, notamment les vins orange de Goriška Brda.'} },

  { type:'presentation', label:'Bières nationales', word:'Pivo', phonetic:'[PI-vo]', translation:'Bière',
    cultural:{title:'Les bières slovènes', text:'Parmi les bières les plus populaires en Slovénie, on trouve Laško et Union. Ces marques ont une longue histoire et sont souvent servies dans les restaurants.'},
    histoire:{title:'Brasserie et culture', text:'La brasserie de Laško a été fondée au 19ème siècle et a fusionné avec Union pour créer Pivovarna Laško Union, un acteur majeur sur le marché des bières.'} },

  { type:'tts_repeat', label:'Vins', word:'Teran je rdeče vino.', phonetic:'[TE-ran ye R-DZE-che VI-no]', translation:'Le Teran est un vin rouge.' },
  { type:'tts_repeat', label:'Vins', word:'Malvazija je bela sorta.', phonetic:'[MAL-va-ZI-ya ye BE-la SORT-a]', translation:'La Malvazija est un cépage blanc.' },
  { type:'tts_repeat', label:'Bières', word:'Union je priljubljena piva.', phonetic:'[U-nion ye pri-LJUB-ljena PI-va]', translation:'Union est une bière populaire.' },
  { type:'tts_repeat', label:'Bières', word:'Laško je znana blagovna znamka.', phonetic:'[LA-shko ye ZNA-na BLA-gov-na ZNAM-ka]', translation:'Laško est une marque connue.' },

  { type:'matching', label:'Vins → français', pairs:[
    {sl:'Teran', fr:'Teran'}, {sl:'Malvazija', fr:'Malvazija'},
    {sl:'Rebula', fr:'Rebula'}, {sl:'Cviček', fr:'Cviček'},
    {sl:'Renski rizling', fr:'Renski rizling'},
  ]},

  { type:'matching', label:'Bières → français', pairs:[
    {sl:'Laško', fr:'Laško'}, {sl:'Union', fr:'Union'},
    {sl:'Pivovarna', fr:'Brasserie'}, {sl:'Pivo', fr:'Bière'},
    {sl:'Žganje', fr:'Eau-de-vie'},
  ]},

  { type:'qcm', label:'QCM grammaire', question:'Comment exprimer une action future en slovène ?',
    choices:['Nous allons cuisiner — bomo skuhali','Nous cuisinons — kuhamo','Nous avons cuisiné — smo kuhali','Nous cuisinions — kuhali smo'], correct:0 },

  { type:'qcm', label:'QCM culturel', question:'Quelle est la particularité du Cviček ?',
    choices:['C\'est un vin rouge léger','C\'est un vin blanc','C\'est un vin doux','C\'est un vin pétillant'], correct:0 },

  { type:'qcm', label:'QCM grammaire', question:'Quelle forme du passif culinaire est correcte ?',
    choices:['Se marinira','Se mariniram','Se mariniraš','Se mariniraš'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['Vinska klet je ___ in lokalna pridelava. (La cave à vins est bio et de production locale.)'], blank:'bio', bank:['bio','ekološko','lokalno','pridelano'] },

  { type:'fill', label:'Phrase à trous', sentence:['Katero vino bomo ___ ? (Quel vin allons-nous déguster ?)'], blank:'degustirali', bank:['degustirali','kuhali','pridelali','mislili'] },

  { type:'fill', label:'Phrase à trous', sentence:['Pivo se ___ z malto. (La bière est faite avec du malt.)'], blank:'pripravlja', bank:['pripravlja','kuha','pije','stvara'] },

  { type:'fill', label:'Phrase à trous', sentence:['Malvazija se ___ na degustaciji. (La Malvazija est servie lors de la dégustation.)'], blank:'streže', bank:['streže','kuha','pripravlja','daje'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Katero vino bomo poskusili?', words:['Katero','vino','bomo','poskusili','?'] },

  { type:'story', label:'Dialogue à la dégustation', title:'Pri degustaciji — À la dégustation',
    narration:'Ana in Marko sta pri degustaciji vin v vinski kleti. Želita poskusiti različne vrste vin.',
    dialogue:[
      {speaker:'Ana', text:'Dober dan! Kakšna vina imate?', side:'right'},
      {speaker:'Marko', text:'Želim poskusiti Teran.', side:'left'},
      {speaker:'Prodajalec', text:'Imamo Teran in Malvazijo. Katero želite?', side:'right'},
      {speaker:'Ana', text:'Malvazija se mi zdi zanimiva.', side:'right'},
      {speaker:'Marko', text:'Pripravite nama degustacijo, prosim.', side:'left'},
      {speaker:'Prodajalec', text:'Seveda! Bomo začeli s Teranom.', side:'right'},
      {speaker:'Ana', text:'Hvala! Koliko letnik je ta vino?', side:'right'},
      {speaker:'Prodajalec', text:'To je letnik 2020.', side:'right'},
    ],
    translation:{
      'Dober dan! Kakšna vina imate?': 'Bonjour ! Quels vins avez-vous ?',
      'Želim poskusiti Teran.': 'Je veux essayer le Teran.',
      'Imamo Teran in Malvazijo. Katero želite?': 'Nous avons le Teran et la Malvazija. Lequel voulez-vous ?',
      'Malvazija se mi zdi zanimiva.': 'La Malvazija me semble intéressante.',
      'Pripravite nama degustacijo, prosim.': 'Préparez-nous une dégustation, s\'il vous plaît.',
      'Seveda! Bomo začeli s Teranom.': 'Bien sûr ! Nous allons commencer par le Teran.',
      'Hvala! Koliko letnik je ta vino?': 'Merci ! Quel est le millésime de ce vin ?',
      'To je letnik 2020.': 'C\'est le millésime 2020.',
    }},
];

// ── fin EX_6_6 ──
