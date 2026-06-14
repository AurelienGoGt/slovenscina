// ═══════════════════════════════════════════
// 3-5 — La vie sociale
// Généré le 2026-06-14 par generate_lesson.py
// ═══════════════════════════════════════════
const EX_3_5 = [
  { type:'presentation', label:'Découverte', word:'Zabava', phonetic:'[ZA-ba-va]', translation:'La fête',
    cultural:{title:'Les fêtes slovènes', text:'Les Slovènes célèbrent de nombreuses fêtes tout au long de l\'année. Parmi les plus importantes, on trouve le Nouvel An, qui est célébré le 1er janvier, et Božič, la fête de Noël, le 25 décembre.'},
    histoire:{title:'Traditions de fête', text:'Les traditions de célébration en Slovénie sont riches et variées. Le Prešernov dan, célébré le 8 février, honore le poète national France Prešeren.'} },

  { type:'presentation', label:'Invitation', word:'Vabilo', phonetic:'[VA-bi-lo]', translation:'L\'invitation',
    cultural:{title:'Invitations en Slovénie', text:'Les invitations peuvent être formelles ou informelles. Lors d\'événements comme les anniversaires, il est courant d\'envoyer des vabilo par voie électronique ou de manière traditionnelle.'},
    histoire:{title:'Évolution des invitations', text:'Traditionnellement, les invitations étaient délivrées de manière personnelle, mais avec l\'avènement des technologies modernes, les invitations numériques sont devenues populaires.'} },

  { type:'tts_repeat', label:'Invitation informelle', word:'Pridi na zabavo!', phonetic:'[PRI-di na ZA-ba-vo]', translation:'Viens à la fête !' },
  { type:'tts_repeat', label:'Réponse formelle', word:'Sprejem vabilo.', phonetic:'[SPRE-yem VA-bi-lo]', translation:'J\'accepte l\'invitation.' },
  { type:'tts_repeat', label:'Réponse informelle', word:'Oprosti, ne morem priti.', phonetic:'[O-pro-STI, ne MO-rem PRI-ti]', translation:'Désolé, je ne peux pas venir.' },
  { type:'tts_repeat', label:'Demande d\'invitation', word:'Ali si me povabil?', phonetic:'[A-li si me PO-va-bil]', translation:'M\'as-tu invité ?' },

  { type:'matching', label:'Fêtes → français', pairs:[
    {sl:'Novo leto', fr:'Nouvel An'}, {sl:'Rojstni dan', fr:'Anniversaire'},
    {sl:'Božič', fr:'Noël'},   {sl:'Velika noč', fr:'Pâques'},
  ]},

  { type:'qcm', label:'QCM grammaire', question:'Pour accepter une invitation formelle, on dit :',
    choices:['Sprejem vabilo.','Ne morem priti.','Hvala za povabilo.','Povabite me.'], correct:0 },

  { type:'qcm', label:'QCM culturel', question:'Quelle est la célébration du poète France Prešeren ?',
    choices:['Prešernov dan','Novo leto','Rojstni dan','Dan državnosti'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['___ bo moja zabava. (Je vais faire une fête.)'], blank:'Namen mi je', bank:['Namen mi je','Hvala','Čestitam','Pridi'] },
  { type:'fill', label:'Phrase à trous', sentence:['___ ti čestitam! (Je te félicite !)'], blank:'Čestitam', bank:['Vabilo','Čestitam','Srečno','Obletnica'] },
  { type:'fill', label:'Phrase à trous', sentence:['Na ___ me povabi! (Invite-moi à ta fête !)'], blank:'rojstni dan', bank:['zabavo','rojstni dan','božič','soseda'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Želim te povabiti na zabavo.', words:['Želim','te','povabiti','na','zabavo','.'] },

  { type:'story', label:'Dialogue sur l\'invitation', title:'Povabilo — L\'invitation',
    narration:'Ana in Marko se pogovarjata o praznovanju. Ana želi povabiti Marka na svojo zabavo.',
    dialogue:[
      {speaker:'Ana', text:'Živjo, Marko! Pripravila bom zabavo.', side:'left'},
      {speaker:'Marko', text:'To zveni odlično! Kdaj je zabava?', side:'right'},
      {speaker:'Ana', text:'V soboto zvečer, ob osmih.', side:'left'},
      {speaker:'Marko', text:'Super! Ali naj prinesem kaj?', side:'right'},
      {speaker:'Ana', text:'Ne, vse je že pripravljeno. Hvala!', side:'left'},
      {speaker:'Marko', text:'Odlično, komaj čakam!', side:'right'},
      {speaker:'Ana', text:'Pridi tudi sosedom!', side:'left'},
      {speaker:'Marko', text:'Seveda, povabil jih bom.', side:'right'},
    ],
    translation:{
      'Živjo, Marko! Pripravila bom zabavo.': 'Salut, Marko ! Je vais organiser une fête.',
      'To zveni odlično! Kdaj je zabava?': 'Ça a l\'air super ! Quand est la fête ?',
      'V soboto zvečer, ob osmih.': 'Samedi soir, à huit heures.',
      'Super! Ali naj prinesem kaj?': 'Super ! Dois-je apporter quelque chose ?',
      'Ne, vse je že pripravljeno. Hvala!': 'Non, tout est déjà prêt. Merci !',
      'Odlično, komaj čakam!': 'Super, j\'ai hâte !',
      'Pridi tudi sosedom!': 'Invite aussi les voisins !',
      'Seveda, povabil jih bom.': 'Bien sûr, je les inviterai.',
    }},
];

// ── fin EX_3_5 ──
