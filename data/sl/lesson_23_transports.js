// ═══════════════════════════════════════════
// 2-3 — Transports
// Généré le 2026-06-03 par generate_lesson.py
// ═══════════════════════════════════════════
const EX_2_3 = [
  { type:'presentation', label:'Découverte', word:'Prevoz', phonetic:'[PRE-voz]', translation:'Transport',
    cultural:{title:'Le réseau de transports en Slovénie', text:'La Slovénie dispose d\'un excellent réseau de transports en commun, incluant trains et bus. Les Slovènes utilisent souvent le train pour voyager entre les villes. La compagnie Slovenske železnice (SŽ) gère le réseau ferroviaire, reliant Ljubljana à des destinations populaires comme Maribor et Koper.'},
    histoire:{title:'Histoire des transports', text:'Les chemins de fer slovènes ont été établis à la fin du 19ème siècle, facilitant le commerce et le voyage. Les lignes ferroviaires sont bien intégrées dans le paysage slovène, permettant d\'admirer la beauté naturelle du pays lors des trajets.'} },

  { type:'tts_repeat', label:'À la gare', word:'Kdaj odide vlak ?', phonetic:'[KDAJ o-DI-de VLAK]', translation:'Quand part le train ?' },
  { type:'tts_repeat', label:'À la gare', word:'Kje kupim vozovnico ?', phonetic:'[KJE KU-pim VO-zo-vni-tsa]', translation:'Où puis-je acheter un billet ?' },
  { type:'tts_repeat', label:'À la gare', word:'Imate povratno vozovnico ?', phonetic:'[I-ma-te PO-vrat-no VO-zo-vni-tsa]', translation:'Avez-vous un billet retour ?' },
  { type:'tts_repeat', label:'À la gare', word:'Ali je vlak direktno do Maribora ?', phonetic:'[A-li ye VLAK di-REK-tno do MA-ri-bo-ra]', translation:'Le train va-t-il directement à Maribor ?' },

  { type:'matching', label:'Transports → français', pairs:[
    {sl:'Avtobus', fr:'Bus'}, {sl:'Vlak', fr:'Train'},
    {sl:'Letalo', fr:'Avion'}, {sl:'Ladja', fr:'Bateau'},
    {sl:'Taksi', fr:'Taxi'},
  ]},

  { type:'qcm', label:'QCM grammaire', question:'Pour exprimer un mouvement vers un lieu, on utilise :',
    choices:['v + accusatif','na + locatif','v + locatif','na + accusatif'], correct:0 },
  { type:'qcm', label:'QCM culturel', question:'Quelle est la durée du trajet en train entre Ljubljana et Koper ?',
    choices:['2h10','1h30','3h','2h'], correct:0 },
  { type:'qcm', label:'QCM grammaire', question:'Pour indiquer la localisation, on utilise :',
    choices:['na + locatif','v + accusatif','v + locatif','na + accusatif'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['Avtobus odhaja ob ___ (Le bus part à 14h30.)'], blank:'14:30', bank:['14:00','14:30','15:00','15:30'] },
  { type:'fill', label:'Phrase à trous', sentence:['Vozovnica je za ___ (Le billet est pour Maribor.)'], blank:'Maribor', bank:['Ljubljano','Maribor','Koper','Piran'] },
  { type:'fill', label:'Phrase à trous', sentence:['Moj vlak odhaja z ___ (Mon train part du quai.)'], blank:'perona', bank:['perona','vlak','avtobusa','letala'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Grem v Koper.', words:['Grem','v','Koper','.'] },

  { type:'story', label:'Dialogue à la gare', title:'Na postaji — À la gare',
    narration:'Ana se pripravlja na potovanje iz Ljubljane v Koper. Ima nekaj vprašanj o vožnji.',
    dialogue:[
      {speaker:'Ana', text:'Dober dan! Kdaj odide vlak za Koper?', side:'left'},
      {speaker:'Oseba', text:'Dober dan! Vlak odhaja ob 14:30.', side:'right'},
      {speaker:'Ana', text:'Hvala! Kje lahko kupim vozovnico?', side:'left'},
      {speaker:'Oseba', text:'Vozovnico lahko kupite na blagajni ali v aplikaciji.', side:'right'},
      {speaker:'Ana', text:'Ali je vlak direktno do Koper?', side:'left'},
      {speaker:'Oseba', text:'Da, vlak gre direktno.', side:'right'},
      {speaker:'Ana', text:'Super! Koliko stane vozovnica?', side:'left'},
      {speaker:'Oseba', text:'Povratna vozovnica stane 15 evrov.', side:'right'},
    ],
    translation:{
      'Dober dan! Kdaj odide vlak za Koper?': 'Bonjour ! Quand part le train pour Koper ?',
      'Dober dan! Vlak odhaja ob 14:30.': 'Bonjour ! Le train part à 14h30.',
      'Hvala! Kje lahko kupim vozovnico?': 'Merci ! Où puis-je acheter un billet ?',
      'Vozovnico lahko kupite na blagajni ali v aplikaciji.': 'Vous pouvez acheter le billet au guichet ou dans l\'application.',
      'Ali je vlak direktno do Koper?': 'Le train va-t-il directement à Koper ?',
      'Da, vlak gre direktno.': 'Oui, le train va directement.',
      'Super! Koliko stane vozovnica?': 'Super ! Combien coûte le billet ?',
      'Povratna vozovnica stane 15 evrov.': 'Le billet retour coûte 15 euros.',
    }},
];

// ── fin EX_2_3 ──
