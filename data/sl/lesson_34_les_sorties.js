// ═══════════════════════════════════════════
// 3-4 — Les sorties
// Généré le 2026-06-13 par generate_lesson.py
// ═══════════════════════════════════════════
const EX_3_4 = [
  { type:'presentation', label:'Découverte', word:'Kino', phonetic:'[KEE-no]', translation:'Cinéma',
    cultural:{title:'Le cinéma à Ljubljana', text:'Le Kino Šiška est un lieu emblématique pour le cinéma indépendant. Il propose des projections de films slovènes et étrangers, ainsi que des événements culturels.'},
    histoire:{title:'Un art en évolution', text:'Le cinéma slovène a commencé à se développer dans les années 1950. Depuis, il a produit de nombreux films acclamés, notamment lors des festivals de Cannes et de Berlin.'} },

  { type:'presentation', label:'Découverte', word:'Cankarjev dom', phonetic:'[TSAN-kar-jev DOM]', translation:'Cankarjev dom',
    cultural:{title:'Cankarjev dom', text:'Cankarjev dom est le principal centre culturel de Ljubljana, accueillant des concerts, des expositions, et des événements littéraires.'},
    histoire:{title:'Un symbole culturel', text:'Inauguré en 1982, Cankarjev dom est nommé d’après le célèbre écrivain slovène Ivan Cankar. Il est un pilier de la vie culturelle slovène.'} },

  { type:'tts_repeat', label:'Invitation', word:'Bi šel/šla z mano?', phonetic:'[BI SHEL/SHLA Z MA-no]', translation:'Tu viendrais avec moi ?' },
  { type:'tts_repeat', label:'Accepter', word:'Z veseljem!', phonetic:'[Z VE-sel-yem]', translation:'Avec plaisir !' },
  { type:'tts_repeat', label:'Refuser', word:'Žal ne morem, ker ...', phonetic:'[ZHAL NE MO-rem, KER ...]', translation:'Désolé, je ne peux pas, parce que ...' },
  { type:'tts_repeat', label:'Demander un renseignement', word:'Kdaj se začne?', phonetic:'[KDAI SE ZA-čne]', translation:'Quand ça commence ?' },

  { type:'matching', label:'Lieux → français', pairs:[
    {sl:'Kino', fr:'Cinéma'}, {sl:'Gledališče', fr:'Théâtre'},
    {sl:'Opera', fr:'Opéra'}, {sl:'Galerija', fr:'Galerie'},
    {sl:'Razstava', fr:'Exposition'},
  ]},

  { type:'qcm', label:'QCM grammaire', question:'Comment inviter quelqu\'un ?',
    choices:['Bi šel/šla z mano?','Kako si?','Kje je bar?','Kaj delaš?'], correct:0 },

  { type:'qcm', label:'QCM culturel', question:'Quel festival se déroule à Maribor en juillet ?',
    choices:['Festival Lent','Festival Ana Desetnica','Festival Ljubljana','Festival jazz'], correct:0 },

  { type:'qcm', label:'QCM superlatif', question:'Comment dire "le meilleur film" en slovène ?',
    choices:['najboljši film','najboljši koncert','najlepši film','najlepši koncert'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['Gledališče je ___ (théâtre) v središču mesta.'], blank:'gledališče', bank:['kino','galerija','gledališče','razstava'] },
  { type:'fill', label:'Phrase à trous', sentence:['Kadar gledam film, sem ___ (content) in srečen.'], blank:'srečen', bank:['žalosten','srečen','jezen','zaskrbljen'] },
  { type:'fill', label:'Phrase à trous', sentence:['Na koncertu je bil ___ (meilleur) pevec.'], blank:'najboljši', bank:['najboljši','najlepši','najslabši','najboljši'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Z veseljem pridem na koncert.', words:['Z','veseljem','pridem','na','koncert','.'] },

  { type:'story', label:'Dialogue au concert', title:'Na koncertu — Au concert',
    narration:'Matej in Ana sta na koncertu v Ljubljani. Obe sta navdušeni nad nastopom.',
    dialogue:[
      {speaker:'Matej', text:'Živjo, Ana! Bi šla z mano na koncert?', side:'left'},
      {speaker:'Ana', text:'Živjo, Matej! Z veseljem! Kdaj se začne?', side:'right'},
      {speaker:'Matej', text:'Začne se ob osmih. Najboljši pevec bo nastopal!', side:'left'},
      {speaker:'Ana', text:'Super! Kje je koncert?', side:'right'},
      {speaker:'Matej', text:'V Cankarjevem domu, blizu tržnice.', side:'left'},
      {speaker:'Ana', text:'Odlično! Kako naj pridem tja?', side:'right'},
      {speaker:'Matej', text:'Lahko greva z avtobusom ali peš.', side:'left'},
      {speaker:'Ana', text:'Peš je boljša ideja, tako bomo uživali v mestu.', side:'right'},
      {speaker:'Matej', text:'Strinjam se! Komaj čakam!', side:'left'},
    ],
    translation:{
      'Živjo, Ana! Bi šla z mano na koncert?': 'Salut, Ana ! Tu viendrais avec moi au concert ?',
      'Živjo, Matej! Z veseljem! Kdaj se začne?': 'Salut, Matej ! Avec plaisir ! Quand ça commence ?',
      'Začne se ob osmih. Najboljši pevec bo nastopal!': 'Ça commence à huit heures. Le meilleur chanteur sera sur scène !',
      'Super! Kje je koncert?': 'Super ! Où est le concert ?',
      'V Cankarjevem domu, blizu tržnice.': 'Au Cankarjev dom, près du marché.',
      'Odlično! Kako naj pridem tja?': 'Excellent ! Comment y arriver ?',
      'Lahko greva z avtobusom ali peš.': 'Nous pouvons y aller en bus ou à pied.',
      'Peš je boljša ideja, tako bomo uživali v mestu.': 'À pied est une meilleure idée, ainsi nous profiterons de la ville.',
      'Strinjam se! Komaj čakam!': 'Je suis d\'accord ! J\'ai hâte !',
    }},
];

// ── fin EX_3_4 ──
