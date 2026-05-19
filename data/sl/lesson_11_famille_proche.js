// ═══════════════════════════════════════════
// 1-11 — La famille proche
// ═══════════════════════════════════════════
const EX_1_11 = [
  { type:'presentation', label:'Découverte', word:'Mama — Oče — Brat — Sestra', phonetic:'[MA-ma] [O-che] [BRAT] [SES-tra]', translation:'Maman — Papa — Frère — Sœur',
    cultural:{title:'Družina', text:'La famille (družina) est au cœur de la vie slovène. Les repas du dimanche en famille sont sacrés. Beaucoup de jeunes restent proches de leurs parents même adultes.'},
    histoire:{title:'Société et qualité de vie', text:'La Slovénie figure régulièrement dans le top mondial pour la qualité de vie. Taux de chômage parmi les plus bas d\'UE. Espérance de vie : 81 ans. Inégalités parmi les plus faibles en Europe.'} },

  { type:'presentation', label:'Les possessifs', word:'Moj (m) — Moja (f) — Moje (n)', phonetic:'[MOY] [MO-ya] [MO-ye]', translation:'Mon (m) — Ma (f) — Mon (n)', noTTS:true,
    cultural:{title:'Possessifs selon le genre', text:'Les possessifs s\'accordent comme les adjectifs. "Moj brat" (mon frère — masc.), "moja sestra" (ma sœur — fém.), "moje jabolko" (ma pomme — neutre). Et "tvoj/tvoja/tvoje" pour "ton/ta". C\'est très régulier !'} },

  { type:'presentation', label:'Tableau complet des possessifs', word:'Moj/Moja/Moje — Tvoj/Tvoja/Tvoje — Njegov/Njegova/Njegovo — Njen/Njena/Njeno — Naš/Naša/Naše', phonetic:'[MOY/MO-ya/MO-ye] [TVOY/TVO-ya/TVO-ye] [NYE-gov/NYE-go-va/NYE-go-vo] [NYEN/NYE-na/NYE-no] [NASH/NA-sha/NA-she]', translation:'Mon/Ma/Mon — Ton/Ta/Ton — Son/Sa/Son (masc.) — Son/Sa/Son (fém.) — Notre/Notre/Notre', noTTS:true,
    cultural:{title:'Tous les possessifs', text:'Chaque possessif a 3 formes selon le genre du nom possédé (m/f/n) :\n• moj/moja/moje = mon/ma\n• tvoj/tvoja/tvoje = ton/ta\n• njegov/njegova/njegovo = son/sa (pour un homme)\n• njen/njena/njeno = son/sa (pour une femme)\n• naš/naša/naše = notre\nEx : "Njegova mama" (sa maman à lui), "Njena sestra" (sa sœur à elle).'} },

  { type:'tts_repeat', label:'Famille immédiate', word:'Mama, oče, brat, sestra, sin, hči', phonetic:'[MA-ma, O-che, BRAT, SES-tra, SIN, H-chi]', translation:'Maman, papa, frère, sœur, fils, fille' },
  { type:'tts_repeat', label:'Couple & enfant', word:'Mož, žena, otrok, dojenček, brat in sestra', phonetic:'[MOZH, ZHE-na, OT-rok, DO-yen-chek, BRAT in SES-tra]', translation:'Mari, femme, enfant, bébé, frère et sœur' },
  { type:'tts_repeat', label:'Phrases possessives', word:'Moj brat. Moja sestra. Moja mama. Tvoj oče.', phonetic:'[MOY BRAT] [MO-ya SES-tra] [MO-ya MA-ma] [TVOY O-che]', translation:'Mon frère. Ma sœur. Ma maman. Ton papa.' },

  { type:'tts_repeat', label:'Possessifs : lui et elle', word:'Njegova mama. Njen oče. Naš brat. Naša sestra.', phonetic:'[NYE-go-va MA-ma] [NYEN O-che] [NASH BRAT] [NA-sha SES-tra]', translation:'Sa maman (à lui). Son papa (à elle). Notre frère. Notre sœur.' },

  { type:'tts_repeat', label:'Le duel slovène', word:'Imam dva brata. Imam dve sestri.', phonetic:'[I-mam DVA BRA-ta] [I-mam DVE SES-tri]', translation:'J\'ai deux frères. J\'ai deux sœurs.' },

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

  { type:'matching', label:'Possessifs → français', pairs:[
    {sl:'Moj brat',       fr:'Mon frère'},
    {sl:'Moja sestra',    fr:'Ma sœur'},
    {sl:'Njegova mama',   fr:'Sa maman (à lui)'},
    {sl:'Njena sestra',   fr:'Sa sœur (à elle)'},
    {sl:'Naš oče',        fr:'Notre papa'},
  ]},

  { type:'qcm', label:'QCM', question:'Comment dit-on "J\'ai une sœur" ?',
    choices:['Imam sestro.','Imam sestra.','Sem sestra.','Mam sestre.'], correct:0 },
  { type:'qcm', label:'QCM grammaire', question:'"Sestra" est féminin. "Ma sœur" se dit :',
    choices:['Moja sestra','Moj sestra','Moje sestra','Tvoja sestra'], correct:0 },
  { type:'qcm', label:'QCM', question:'Le duel slovène : "Deux frères" se dit :',
    choices:['Dva brata','Dve brata','Tri brat','Dva brat'], correct:0 },

  { type:'qcm', label:'QCM possessifs', question:'"Sa maman" (quand on parle d\'une femme) se dit :',
    choices:['Njena mama','Njegova mama','Moja mama','Naša mama'], correct:0 },
  { type:'qcm', label:'QCM possessifs', question:'"Notre sœur" se dit :',
    choices:['Naša sestra','Naš sestra','Moja sestra','Tvoja sestra'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['Moj ___ se imenuje Luka. (Mon frère s\'appelle Luka)'], blank:'brat', bank:['brat','oče','sin','mož'] },
  { type:'fill', label:'Phrase à trous', sentence:['To je ___ sestra. (C\'est ma sœur.)'], blank:'moja', bank:['moja','moj','moje','tvoja'] },
  { type:'fill', label:'Phrase à trous', sentence:['Imam dva ___ in eno sestro. (J\'ai deux frères et une sœur.)'], blank:'brata', bank:['brata','brat','bratu','bratov'] },

  { type:'fill', label:'Phrase à trous', sentence:['___ mama je visoka in lepa. (Sa maman à lui est grande et belle.)'], blank:'Njegova', bank:['Njegova','Njena','Moja','Naša'] },
  { type:'fill', label:'Phrase à trous', sentence:['Ljubim ___ mamo. (J\'aime ma maman — possessif réflexif.)'], blank:'svojo', bank:['svojo','mojo','njegovo','njeno'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Imam brata in sestro.', words:['Imam','brata','in','sestro','.'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Moj oče je star petdeset let.', words:['Moj','oče','je','star','petdeset','let','.'] },

  { type:'story', label:'Histoire', title:'La photo de famille',
    narration:"Ana montre une photo de famille à son collègue français Marc.",
    dialogue:[
      {speaker:'Marc', text:'Kdo je to na fotografiji ?', side:'left'},
      {speaker:'Ana',  text:'To je moja mama in moj oče.', side:'right'},
      {speaker:'Marc', text:'In ta otrok — to si ti ?', side:'left'},
      {speaker:'Ana',  text:'Da ! In to je moj brat. Ima sedem let.', side:'right'},
      {speaker:'Marc', text:'Lepa družina ! Imaš samo enega brata ?', side:'left'},
      {speaker:'Ana',  text:'Ne, imam še sestro. Je starejša od mene.', side:'right'},
      {speaker:'Marc', text:'In tvoji starši — kje živijo ?', side:'left'},
      {speaker:'Ana',  text:'V Mariboru. Gremo tja vsako leto.', side:'right'},
    ],
    translation:{
      'Kdo je to na fotografiji ?':'Qui est-ce sur la photo ?',
      'To je moja mama in moj oče.':'C\'est ma maman et mon papa.',
      'In ta otrok — to si ti ?':'Et cet enfant — c\'est toi ?',
      'Da ! In to je moj brat.':'Oui ! Et c\'est mon frère.',
      'Imaš samo enega brata ?':'Tu as seulement un frère ?',
      'Ne, imam še sestro. Je starejša od mene.':'Non, j\'ai aussi une sœur. Elle est plus âgée que moi.',
      'In tvoji starši — kje živijo ?':'Et tes parents — où habitent-ils ?',
      'V Mariboru. Gremo tja vsako leto.':'À Maribor. On y va chaque année.',
    }
  },

  { type:'qcm', label:'QCM histoire', question:'Combien de frères et sœurs a Ana ?', choices:['Un frère et une sœur','Deux frères','Une sœur','Deux sœurs'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'Quel âge a le frère d\'Ana ?', choices:['7 ans','5 ans','10 ans','12 ans'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'Où habitent les parents d\'Ana ?', choices:['À Maribor','À Ljubljana','À Koper','À l\'étranger'], correct:0 },

  { type:'dictee', label:'Dictée', word:'Sestra', phonetic:'[SES-tra]', hint:'Sœur — 6 lettres' },
  { type:'dictee', label:'Dictée', word:'Dojenček', phonetic:'[DO-yen-chek]', hint:'Bébé — 8 lettres' },

  { type:'dialogue', label:'À toi !', lines:[
    {speaker:'Luka', text:'Imaš brate ali sestre ?', side:'left'},
    {speaker:'Toi',  text:'Imam ___ brata.', side:'right', blank:'dva', hint:'deux frères → dva'},
    {speaker:'Luka', text:'In tvoja mama — kako ji je ime ?', side:'left'},
    {speaker:'Toi',  text:'___ mama se imenuje Marie.', side:'right', blank:'Moja', hint:'ma (fém.) → Moja'},
    {speaker:'Luka', text:'In tvoj oče — koliko let ima ?', side:'left'},
    {speaker:'Toi',  text:'___ oče je star petdeset let.', side:'right', blank:'Moj', hint:'mon (masc.) → Moj'},
  ]},
];
