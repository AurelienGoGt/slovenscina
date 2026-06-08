// ═══════════════════════════════════════════
// 2-9 — Voyager en Slovénie
// Généré le 2026-06-08 par generate_lesson.py
// ═══════════════════════════════════════════
const EX_2_9 = [
  { type:'presentation', label:'Découverte', word:'Bled', phonetic:'[BLED]', translation:'Bled',
    cultural:{title:'Le lac de Bled', text:'Le lac de Bled est l\'une des destinations les plus emblématiques de Slovénie. Avec son île pittoresque et son château médiéval surplombant le lac, c\'est un lieu incontournable pour les voyageurs.'},
    histoire:{title:'Histoire de Bled', text:'Bled a été un lieu de villégiature depuis le XIXe siècle, attirant des visiteurs avec ses paysages enchanteurs et ses activités de plein air. Le château de Bled, construit en 1004, est le plus ancien château de Slovénie.'} },

  { type:'presentation', label:'Découverte', word:'Piran', phonetic:'[PI-ran]', translation:'Piran',
    cultural:{title:'La perle de la côte adriatique', text:'Piran est célèbre pour son architecture vénitienne et ses ruelles étroites. C\'est un endroit idéal pour déguster des fruits de mer frais et profiter de la vue sur la mer Adriatique.'},
    histoire:{title:'Histoire de Piran', text:'Piran a été influencé par la République de Venise pendant des siècles. L\'histoire maritime de la ville est visible dans ses bâtiments et son port pittoresque.'} },

  { type:'tts_repeat', label:'Réservation', word:'Imate proste sobe?', phonetic:'[I-ma-te PRO-ste SO-be]', translation:'Avez-vous des chambres disponibles ?' },
  { type:'tts_repeat', label:'Séjour', word:'Ostati v hotelu.', phonetic:'[O-STA-ti v ho-TE-lu]', translation:'Rester à l\'hôtel.' },
  { type:'tts_repeat', label:'Questions de voyage', word:'Za koliko noči?', phonetic:'[ZA ko-LI-ko no-CHI]', translation:'Pour combien de nuits ?' },

  { type:'matching', label:'Hébergement → français', pairs:[
    {sl:'Hotel', fr:'Hôtel'}, {sl:'Hostel', fr:'Auberge'},
    {sl:'Kamp', fr:'Camping'}, {sl:'Soba', fr:'Chambre'},
    {sl:'Rezervacija', fr:'Réservation'},
  ]},

  { type:'qcm', label:'QCM grammaire', question:'Pour parler d\'un lieu où l\'on reste, on utilise :',
    choices:['Locatif — v hotelu, na kampu','Accusatif — hotel, kamp','Nominatif — hotel, kamp','Génitif — hotela, kampa'], correct:0 },

  { type:'qcm', label:'QCM vocabulaire', question:'Que signifie "zajtrk" ?',
    choices:['Petit déjeuner','Déjeuner','Dîner','Collation'], correct:0 },

  { type:'qcm', label:'QCM culturel', question:'Quelle est la particularité de la grotte de Postojna ?',
    choices:['C\'est la plus longue grotte d\'Europe','Elle a des formations de stalagmites uniques','Elle est habitée par des animaux rares','Elle est un site du patrimoine mondial'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['Ostanite v ___ (Restez à l\'hôtel.)'], blank:'hotelu', bank:['hotel','hostelu','kampu','sobi'] },
  { type:'fill', label:'Phrase à trous', sentence:['Imate ___ sobe? (Avez-vous des chambres disponibles ?)'], blank:'proste', bank:['proste','rezervirane','zasedene','velike'] },
  { type:'fill', label:'Phrase à trous', sentence:['Za koliko ___? (Pour combien de nuits ?)'], blank:'noči', bank:['noči','dni','tednov','mesecev'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Želim rezervirati sobo za tri noči.', words:['Želim','rezervirati','sobo','za','tri','noči','.'] },

  { type:'story', label:'Dialogue à l\'hôtel', title:'Pri hotelu — À l\'hôtel',
    narration:'Marija je pri hotelu v Ljubljani. Želi rezervirati sobo za teden dni.',
    dialogue:[
      {speaker:'Recepcionar', text:'Dober dan! Kako vam lahko pomagam?', side:'right'},
      {speaker:'Marija', text:'Dober dan! Imate proste sobe?', side:'left'},
      {speaker:'Recepcionar', text:'Imamo več prostih sob. Za koliko noči jih potrebujete?', side:'right'},
      {speaker:'Marija', text:'Želim sobo za en teden.', side:'left'},
      {speaker:'Recepcionar', text:'Seveda! Potrebujete zajtrk?', side:'right'},
      {speaker:'Marija', text:'Da, to bi bilo super.', side:'left'},
      {speaker:'Recepcionar', text:'Cena je dvesto evrov za teden z zajtrkom.', side:'right'},
      {speaker:'Marija', text:'Hvala! Kako se imenuje hotel?', side:'left'},
    ],
    translation:{
      'Dober dan! Kako vam lahko pomagam?': 'Bonjour! Comment puis-je vous aider?',
      'Dober dan! Imate proste sobe?': 'Bonjour! Avez-vous des chambres disponibles?',
      'Imamo več prostih sob. Za koliko noči jih potrebujete?': 'Nous avons plusieurs chambres disponibles. Pour combien de nuits en avez-vous besoin?',
      'Želim sobo za en teden.': 'Je souhaite une chambre pour une semaine.',
      'Seveda! Potrebujete zajtrk?': 'Bien sûr! Avez-vous besoin du petit déjeuner?',
      'Da, to bi bilo super.': 'Oui, ce serait super.',
      'Cena je dvesto evrov za teden z zajtrkom.': 'Le prix est de deux cents euros pour une semaine avec petit déjeuner.',
      'Hvala! Kako se imenuje hotel?': 'Merci! Comment s\'appelle l\'hôtel?',
    }},
];

// ── fin EX_2_9 ──
