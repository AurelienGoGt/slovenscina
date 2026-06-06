// ═══════════════════════════════════════════
// 2-7 — Téléphone & web
// Généré le 2026-06-06 par generate_lesson.py
// ═══════════════════════════════════════════
const EX_2_7 = [
  { type:'presentation', label:'Découverte', word:'Telefon', phonetic:'[TE-le-fon]', translation:'Le téléphone',
    cultural:{title:'Opérateurs téléphoniques en Slovénie', text:'Les principaux opérateurs téléphoniques en Slovénie sont A1, Telekom et Telemach. Le code pays est +386, et les numéros d\'urgence comme 112 pour les urgences et 113 pour la police sont très importants.'},
    histoire:{title:'L\'évolution des télécommunications', text:'Les télécommunications en Slovénie ont beaucoup évolué depuis l\'indépendance en 1991. Le développement du réseau mobile a permis un accès plus large à Internet et a facilité les communications.'} },

  { type:'presentation', label:'Découverte', word:'Spletna stran', phonetic:'[SPLET-na STRAN]', translation:'Site web',
    cultural:{title:'Internet en Slovénie', text:'Le Wi-Fi gratuit est très répandu dans les cafés et hôtels slovènes. Les Slovènes utilisent souvent Internet pour le shopping et la communication.'},
    histoire:{title:'L\'essor du numérique', text:'Avec l\'augmentation de l\'utilisation d\'Internet, de nombreuses entreprises ont développé leurs services en ligne, rendant la Slovénie de plus en plus connectée.'} },

  { type:'tts_repeat', label:'Téléphone', word:'Poklicati prijatelja.', phonetic:'[PO-kli-tsa-ti pri-ya-TEL-ya]', translation:'Appeler un ami.' },
  { type:'tts_repeat', label:'Téléphone', word:'Odgovoriti na sporočilo.', phonetic:'[OD-go-VOR-i-ti na SPO-ra-chi-lo]', translation:'Répondre à un message.' },
  { type:'tts_repeat', label:'Téléphone', word:'Pustiti sporočilo.', phonetic:'[PU-sti-ti SPO-ra-chi-lo]', translation:'Laisser un message.' },
  
  { type:'matching', label:'Verbes téléphoniques → français', pairs:[
    {sl:'Poklicati', fr:'Appeler'}, {sl:'Odgovoriti', fr:'Répondre'},
    {sl:'Pustiti sporočilo', fr:'Laisser un message'}, {sl:'Poslati', fr:'Envoyer'},
  ]},

  { type:'qcm', label:'QCM grammaire', question:'Comment former le futur immédiat en slovène ?',
    choices:['bom + participe','biti + participe','imeti + participe','iti + participe'], correct:0 },

  { type:'qcm', label:'QCM culturel', question:'Quel est le code pays pour les appels en Slovénie ?',
    choices:['+386','+3860','+38','+36'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['Moj prijatelj ___ prosim. (Mon ami m\'appelle, s\'il vous plaît.)'], blank:'pokliče', bank:['pokliče','pokličem','poklicati','poklicali'] },

  { type:'fill', label:'Phrase à trous', sentence:['___ je, da prideš. (Il a dit que tu viens.)'], blank:'Rekel', bank:['Rekel','Reka','Reči','Rekel je'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Bom poklical te danes.', words:['Bom','poklical','te','danes','.'] },

  { type:'story', label:'Dialogue au téléphone', title:'Klic po telefonu — Appel téléphonique',
    narration:'Luka pokliče svojo prijateljico Anjo, da se dogovorita za srečanje.',
    dialogue:[
      {speaker:'Luka', text:'Živjo, Anja! Kako si?', side:'left'},
      {speaker:'Anja', text:'Živjo, Luka! Dobro sem, hvala. Kako si ti?', side:'right'},
      {speaker:'Luka', text:'Tudi dobro. Ali lahko pokličem tebe jutri?', side:'left'},
      {speaker:'Anja', text:'Seveda! Kaj pa čas?', side:'right'},
      {speaker:'Luka', text:'Kako bi bilo ob treh popoldne?', side:'left'},
      {speaker:'Anja', text:'To je v redu. Se vidiva!', side:'right'},
      {speaker:'Luka', text:'Super! Do jutri!', side:'left'},
      {speaker:'Anja', text:'Do jutri!', side:'right'},
    ],
    translation:{
      'Živjo, Anja! Kako si?': 'Salut, Anja ! Comment ça va ?',
      'Živjo, Luka! Dobro sem, hvala. Kako si ti?': 'Salut, Luka ! Je vais bien, merci. Et toi ?',
      'Tudi dobro. Ali lahko pokličem tebe jutri?': 'Moi aussi. Puis-je t\'appeler demain ?',
      'Seveda! Kaj pa čas?': 'Bien sûr ! À quelle heure ?',
      'Kako bi bilo ob treh popoldne?': 'Que dirais-tu de trois heures de l\'après-midi ?',
      'To je v redu. Se vidiva!': 'C\'est bon. À demain !',
      'Super! Do jutri!': 'Super ! À demain !',
      'Do jutri!': 'À demain !',
    }},
];

// ── fin EX_2_7 ──
