// ═══════════════════════════════════════════
// 4-4 — Le système de santé
// Généré le 2026-06-21 par generate_lesson.py
// ═══════════════════════════════════════════
const EX_4_4 = [
  { type:'presentation', label:'Découverte', word:'ZZZS', phonetic:'[Z-Z-Z-S]', translation:'Assurance maladie',
    cultural:{title:'Le système de santé en Slovénie', text:'Le ZZZS est l\'institution publique responsable de l\'assurance maladie en Slovénie. Environ 6,36 % du salaire est consacré à cette assurance, permettant un accès aux soins de santé pour tous.'},
    histoire:{title:'Historique de la santé', text:'Le système de santé slovène a été établi après l\'indépendance de la Slovénie en 1991. Avant cela, il était intégré au système de santé de l\'ancienne Yougoslavie.'} },

  { type:'presentation', label:'Découverte', word:'zdravstvena kartica', phonetic:'[ZDRAV-stve-na KAR-ti-tsa]', translation:'carte de santé',
    cultural:{title:'La carte de santé', text:'La zdravstvena kartica est essentielle pour accéder aux services médicaux en Slovénie. Elle est présentée lors de chaque visite chez un médecin ou à l\'hôpital.'},
    histoire:{title:'Utilisation de la carte', text:'Introduite dans les années 1990, la carte de santé a facilité l\'accès aux soins et a remplacé les anciens systèmes de documents médicaux.'} },

  { type:'tts_repeat', label:'Médecin de famille', word:'Moj izbrani zdravnik je zelo prijazen.', phonetic:'[MOY IZ-bra-ni ZDRA-vnik ye ZE-lo PRI-ya-zen]', translation:'Mon médecin de famille est très gentil.' },
  { type:'tts_repeat', label:'Nécessité de consultation', word:'Moram iti k specialistu.', phonetic:'[MO-ram I-ti k SPE-ci-a-li-stu]', translation:'Je dois aller chez un spécialiste.' },
  { type:'tts_repeat', label:'Ordonnance', word:'Tukaj je moja napotnica.', phonetic:'[TU-kai ye MO-ya NA-po-TNI-tsa]', translation:'Voici mon ordonnance.' },
  { type:'tts_repeat', label:'Hôpital', word:'Kje je najbližja bolnišnica ?', phonetic:'[KYE ye NAY-bli-zhya BOL-ni-shni-tsa]', translation:'Où est l\'hôpital le plus proche ?' },

  { type:'matching', label:'Termes médicaux → français', pairs:[
    {sl:'Izbrani zdravnik', fr:'Médecin de famille'}, {sl:'Napotnica', fr:'Ordonnance'},
    {sl:'Specialist', fr:'Spécialiste'},   {sl:'Bolnišnica', fr:'Hôpital'},
    {sl:'Zdravilo', fr:'Médicament'},
  ]},

  { type:'qcm', label:'QCM vocabulaire', question:'Quel terme désigne la carte de santé ?',
    choices:['Zdravstvena kartica','ZZZS','Napotnica','Specialist'], correct:0 },

  { type:'qcm', label:'QCM conditionnel', question:'Comment exprimer une recommandation médicale ?',
    choices:['Moral je, da se zdraviš.','Moral si, da se zdraviš.','Moral je, da si zdraviš.','Moral si, da si zdravi.'], correct:0 },

  { type:'qcm', label:'QCM culturel', question:'Quel est le pourcentage du salaire consacré à l\'assurance maladie ?',
    choices:['6,36 %','5 %','7 %','8 %'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['Moj ___ je specialist za alergije. (Mon médecin est un spécialiste des allergies.)'], blank:'zdravnik', bank:['zdravnik','specialist','laboratorij','operacija'] },

  { type:'fill', label:'Phrase à trous', sentence:['___ je treba iti k zdravniku. (Il faut aller chez le médecin.)'], blank:'Zato', bank:['Zato','Ker','In','Ampak'] },

  { type:'fill', label:'Phrase à trous', sentence:['Odpust iz ___ je vedno brezplačen. (La sortie de l\'hôpital est toujours gratuite.)'], blank:'bolnišnice', bank:['bolnišnice','specialista','laboratorija','zdravnika'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Ali imaš zdravstveno kartico ?', words:['Ali','imaš','zdravstveno','kartico','?'] },

  { type:'story', label:'Dialogue à l’hôpital', title:'Pri zdravniku — Chez le médecin',
    narration:'Maja je pri zdravniku, ker se ne počuti dobro. Želi izvedeti, kaj ji je.',
    dialogue:[
      {speaker:'Zdravnik', text:'Dober dan, Maja. Kako ti lahko pomagam ?', side:'right'},
      {speaker:'Maja', text:'Dober dan, zdravnik. Imela sem glavobol in kašelj.', side:'left'},
      {speaker:'Zdravnik', text:'Razumem. Koliko časa že traja ?', side:'right'},
      {speaker:'Maja', text:'Že tri dni. Kaj mi priporočate ?', side:'left'},
      {speaker:'Zdravnik', text:'Predpisal bom zdravilo za kašelj.', side:'right'},
      {speaker:'Maja', text:'Hvala. Ali je to zdravilo na voljo v lekarni ?', side:'left'},
      {speaker:'Zdravnik', text:'Da, je. Prav tako potrebujete počitek.', side:'right'},
      {speaker:'Maja', text:'Zelo bom pazila. Hvala za pomoč.', side:'left'},
    ],
    translation:{
      'Dober dan, Maja. Kako ti lahko pomagam ?': 'Bonjour, Maja. Comment puis-je vous aider ?',
      'Dober dan, zdravnik. Imela sem glavobol in kašelj.': 'Bonjour, docteur. J\'ai eu mal à la tête et une toux.',
      'Razumem. Koliko časa že traja ?': 'Je comprends. Depuis combien de temps cela dure-t-il ?',
      'Že tri dni. Kaj mi priporočate ?': 'Cela fait trois jours. Que me recommandez-vous ?',
      'Predpisal bom zdravilo za kašelj.': 'Je vais prescrire un médicament contre la toux.',
      'Hvala. Ali je to zdravilo na voljo v lekarni ?': 'Merci. Ce médicament est-il disponible à la pharmacie ?',
      'Da, je. Prav tako potrebujete počitek.': 'Oui, il l\'est. Vous avez également besoin de repos.',
      'Zelo bom pazila. Hvala za pomoč.': 'Je ferai très attention. Merci pour votre aide.',
    }},
];

// ── fin EX_4_4 ──
