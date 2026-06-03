// ═══════════════════════════════════════════
// 2-4 — La santé
// Généré le 2026-06-03 par generate_lesson.py
// ═══════════════════════════════════════════
const EX_2_4 = [
  { type:'presentation', label:'Découverte', word:'Zdravje', phonetic:'[ZDRAV-ye]', translation:'La santé',
    cultural:{title:'Le système de santé slovène', text:'En Slovénie, le système de santé est basé sur une assurance obligatoire (ZZZS). Chaque citoyen a un médecin de famille (osebni zdravnik) qui est le premier point de contact pour les soins médicaux.'},
    histoire:{title:'Urgences et pharmacies', text:'Les urgences en Slovénie peuvent être contactées au 112. Les pharmacies (lekarna) sont reconnaissables grâce à leur croix verte. Elles offrent une large gamme de médicaments et de conseils de santé.'} },

  { type:'presentation', label:'Grammaire', word:'Boli me glava', phonetic:'[BO-li me GLA-va]', translation:'J\'ai mal à la tête',
    cultural:{title:'Expressions de douleur', text:'En slovène, pour exprimer une douleur, on utilise le verbe "boleti" suivi de l\'organe concerné. Par exemple, "bolečina" signifie "douleur".'},
    histoire:{title:'La santé en Slovénie', text:'Les Slovènes attachent une grande importance à leur santé. Ils pratiquent souvent des activités de plein air et ont une alimentation équilibrée, influencée par leur riche culture culinaire.'} },

  { type:'tts_repeat', label:'J\'ai mal', word:'Boli me trebuh.', phonetic:'[BO-li me TRE-buh]', translation:'J\'ai mal au ventre.' },
  { type:'tts_repeat', label:'J\'ai mal', word:'Boli me noga.', phonetic:'[BO-li me NO-ga]', translation:'J\'ai mal à la jambe.' },
  { type:'tts_repeat', label:'J\'ai mal', word:'Boli me hrbet.', phonetic:'[BO-li me HR-bet]', translation:'J\'ai mal au dos.' },
  { type:'tts_repeat', label:'J\'ai de la fièvre', word:'Imam vročino.', phonetic:'[I-mam VRO-chi-no]', translation:'J\'ai de la fièvre.' },
  { type:'tts_repeat', label:'J\'ai un rhume', word:'Imam nahod.', phonetic:'[I-mam NA-hod]', translation:'J\'ai un rhume.' },

  { type:'matching', label:'Symptômes → français', pairs:[
    {sl:'Vročina', fr:'Fièvre'}, {sl:'Kašelj', fr:'Toux'},
    {sl:'Nahod', fr:'Rhume'},   {sl:'Alergija', fr:'Allergie'},
    {sl:'Bolečina', fr:'Douleur'},
  ]},

  { type:'qcm', label:'QCM grammaire', question:'Pour exprimer une douleur, on utilise :',
    choices:['boleti + accusatif','boleti + nominatif','biti + génitif','biti + accusatif'], correct:0 },

  { type:'qcm', label:'QCM culturel', question:'Quel est le numéro d\'urgence en Slovénie ?',
    choices:['112','911','999','101'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['Klic me ___ ... (Mon bras me fait mal.)'], blank:'boli', bank:['boli','bolečina','počutiti','zdravnik'] },

  { type:'fill', label:'Phrase à trous', sentence:['Imam ___ ... (J\'ai un rhume.)'], blank:'nahod', bank:['vročino','zobje','nahod','kašelj'] },

  { type:'fill', label:'Phrase à trous', sentence:['Kako se ___ ? (Comment vous sentez-vous ?)'], blank:'počutite', bank:['počutiti','klicati','bolečina','zdravnik'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Moram k zdravniku.', words:['Moram','k','zdravniku','.'] },

  { type:'story', label:'Dialogue chez le médecin', title:'Pri zdravniku — Chez le médecin',
    narration:'Ana je pri zdravniku. Ima težave z zdravjem in želi pomoč.',
    dialogue:[
      {speaker:'Zdravnik', text:'Dober dan, Ana. Kako se počutite ?', side:'right'},
      {speaker:'Ana', text:'Dober dan. Boli me glava in imam vročino.', side:'left'},
      {speaker:'Zdravnik', text:'To ni dobro. Koliko dni imate vročino ?', side:'right'},
      {speaker:'Ana', text:'Že tri dni. Tudi kašelj imam.', side:'left'},
      {speaker:'Zdravnik', text:'Morate počivati in piti veliko tekočine.', side:'right'},
      {speaker:'Ana', text:'Hvala, zdravnik. Kaj pa tablete ?', side:'left'},
      {speaker:'Zdravnik', text:'Tukaj je recept za tablete proti bolečini.', side:'right'},
      {speaker:'Ana', text:'Hvala lepa! Koliko časa moram jemati tablete ?', side:'left'},
    ],
    translation:{
      'Dober dan, Ana. Kako se počutite ?': 'Bonjour, Ana. Comment vous sentez-vous ?',
      'Dober dan. Boli me glava in imam vročino.': 'Bonjour. J\'ai mal à la tête et j\'ai de la fièvre.',
      'To ni dobro. Koliko dni imate vročino ?': 'Ce n\'est pas bon. Depuis combien de jours avez-vous de la fièvre ?',
      'Že tri dni. Tudi kašelj imam.': 'Cela fait trois jours. J\'ai aussi une toux.',
      'Morate počivati in piti veliko tekočine.': 'Vous devez vous reposer et boire beaucoup de liquides.',
      'Hvala, zdravnik. Kaj pa tablete ?': 'Merci, docteur. Et pour les comprimés ?',
      'Tukaj je recept za tablete proti bolečini.': 'Voici une ordonnance pour des médicaments contre la douleur.',
      'Hvala lepa! Koliko časa moram jemati tablete ?': 'Merci beaucoup ! Combien de temps dois-je prendre les comprimés ?',
    }},
];

// ── fin EX_2_4 ──
