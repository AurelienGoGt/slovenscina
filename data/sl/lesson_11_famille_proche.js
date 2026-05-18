// ═══════════════════════════════════════════
// 1-11 — La famille proche
// ═══════════════════════════════════════════
const EX_1_11 = [
  { type:'presentation', label:'Découverte', word:'Mama — Oče — Brat — Sestra', phonetic:'[MA-ma] [O-che] [BRAT] [SES-tra]', translation:'Maman — Papa — Frère — Sœur',
    cultural:{title:'Družina', text:'La famille (družina) est au cœur de la vie slovène. Les repas du dimanche en famille sont sacrés. Beaucoup de jeunes restent proches de leurs parents même adultes.'},
    histoire:{title:'Société et qualité de vie', text:'La Slovénie figure régulièrement dans le top mondial pour la qualité de vie. Taux de chômage parmi les plus bas d\'UE. Espérance de vie : 81 ans. Inégalités parmi les plus faibles en Europe. Le pays a rejoint l\'OCDE en 2010 — reconnu comme économie développée.'} },
  { type:'tts_repeat', label:'Famille immédiate', word:'Mama, oče, brat, sestra, sin, hči', phonetic:'[MA-ma, O-che, BRAT, SES-tra, SIN, H-chi]', translation:'Maman, papa, frère, sœur, fils, fille' },
  { type:'tts_repeat', label:'Couple & enfant', word:'Mož, žena, otrok, dojenček, brat in sestra', phonetic:'[MOZH, ZHE-na, OT-rok, DO-yen-chek, BRAT in SES-tra]', translation:'Mari, femme, enfant, bébé, frère et sœur' },
  { type:'matching', label:'Famille → français', pairs:[
    {sl:'Mama',    fr:'Maman'},
    {sl:'Oče',     fr:'Papa'},
    {sl:'Brat',    fr:'Frère'},
    {sl:'Sestra',  fr:'Sœur'},
    {sl:'Sin',     fr:'Fils'},
  ]},
  { type:'matching', label:'Encore la famille', pairs:[
    {sl:'Hči',     fr:'Fille'},
    {sl:'Mož',     fr:'Mari'},
    {sl:'Žena',    fr:'Femme / Épouse'},
    {sl:'Otrok',   fr:'Enfant'},
    {sl:'Dojenček',fr:'Bébé'},
  ]},
  { type:'qcm', label:'QCM', question:'Comment dit-on "J\'ai une sœur" ?',
    choices:['Imam sestro.','Imam sestra.','Sem sestra.','Mam sestre.'], correct:0 },
  { type:'fill', label:'Phrase à trous', sentence:['Moj ___ se imenuje Luka. (Mon frère s\'appelle Luka)'], blank:'brat', bank:['brat','oče','sin','mož'] },
  { type:'story', label:'Histoire', title:'La photo de famille',
    narration:"Ana montre une photo de famille à son collègue français Marc.",
    dialogue:[
      {speaker:'Marc', text:'Kdo je to na fotografiji ?', side:'left'},
      {speaker:'Ana',  text:'To je moja mama in moj oče.', side:'right'},
      {speaker:'Marc', text:'In ta otrok — to si ti ?', side:'left'},
      {speaker:'Ana',  text:'Da ! In to je moj brat. Ima sedem let.', side:'right'},
      {speaker:'Marc', text:'Lepa družina ! Imaš samo enega brata ?', side:'left'},
      {speaker:'Ana',  text:'Ne, imam še sestro. Je starejša od mene.', side:'right'},
    ],
    translation:{
      'Kdo je to na fotografiji ?':'Qui est-ce sur la photo ?',
      'To je moja mama in moj oče.':'C\'est ma maman et mon papa.',
      'In ta otrok — to si ti ?':'Et cet enfant — c\'est toi ?',
      'Da ! In to je moj brat.':'Oui ! Et c\'est mon frère.',
      'Imaš samo enega brata ?':'Tu as seulement un frère ?',
      'Ne, imam še sestro. Je starejša od mene.':'Non, j\'ai aussi une sœur. Elle est plus âgée que moi.',
    }
  },
  { type:'qcm', label:'QCM histoire', question:'Combien de frères et sœurs a Ana ?', choices:['Un frère et une sœur','Deux frères','Une sœur','Deux sœurs'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'Quel âge a le frère d\'Ana ?', choices:['7 ans','5 ans','10 ans','12 ans'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'La sœur d\'Ana est…', choices:['Plus âgée','Plus jeune','Jumelle','Non mentionnée'], correct:0 },
  { type:'dictee', label:'Dictée', word:'Sestra', phonetic:'[SES-tra]', hint:'Sœur — 6 lettres' },
  { type:'reconstruct', label:'Reconstitue', sentence:'Imam brata in sestro.', words:['Imam','brata','in','sestro','.'] },
];
