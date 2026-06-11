// ═══════════════════════════════════════════
// C-4 — La gastronomie slovène
// Potica, jota, kranjska klobasa, bučno olje…
// Niveau 5 — Culture & Histoire
// ═══════════════════════════════════════════
const EX_C_4 = [

  { type:'presentation', label:'Gastronomie', word:'Slovenska kuhinja', phonetic:'[slo-VEN-ska ku-HI-nya]', translation:'La cuisine slovène',
    cultural:{title:'Une cuisine à la croisée de l\'Europe', text:'La cuisine slovène (slovenska kuhinja) est l\'une des plus riches et des plus variées d\'Europe. Elle reflète les influences de ses voisins — Autriche, Italie, Hongrie, Croatie — tout en préservant des spécialités entièrement originales. Le pays compte plus de 300 plats traditionnels régionaux. La Slovénie est un pionnier du mouvement Slow Food en Europe.'},
    histoire:{title:'La potica — symbole national', text:'La potica est le gâteau national par excellence. C\'est un gâteau roulé en escargot fourré à la noix (orehova potica), au pavot, à la lavande ou au fromage. Chaque famille slovène a sa propre recette transmise de génération en génération. La potica est indispensable à Noël, à Pâques et lors de tout événement familial important.'} },

  { type:'presentation', label:'Gastronomie', word:'Bučno olje', phonetic:'[BUCH-no OL-ye]', translation:'L\'huile de potiron',
    cultural:{title:'L\'or vert de Styrie slovène', text:'L\'huile de potiron (bučno olje) est surnommée "l\'or vert" de la Slovénie. Produite principalement en Styrie slovène (Štajerska) et en Prekmurje, elle est d\'un vert sombre intense avec un arôme de noisette grillée. Elle accompagne les salades, les soupes et même les glaces. La Styrie (austro-slovène) est la première région productrice mondiale.'},
    histoire:{title:'Kranjska klobasa — AOP depuis 2015', text:'La kranjska klobasa (saucisse de Carniole) est une saucisse de porc fumée aux épices, créée en Carniole (Kranjska). En 2015, elle obtient la protection AOP (Appellation d\'Origine Protégée) européenne. La recette originale est strictement réglementée : 68% de porc, 12% de lard, bacon et épices. Elle se sert chaude avec de la moutarde et du pain.'} },

  { type:'tts_repeat', label:'Plats', word:'potica', phonetic:'[PO-ti-tsa]', translation:'la potica (gâteau roulé aux noix)' },
  { type:'tts_repeat', label:'Plats', word:'jota', phonetic:'[YO-ta]', translation:'la jota (soupe choucroute-haricots-pommes de terre)' },
  { type:'tts_repeat', label:'Plats', word:'kranjska klobasa', phonetic:'[KRANY-ska klo-BA-sa]', translation:'la saucisse de Carniole' },
  { type:'tts_repeat', label:'Produits', word:'bučno olje', phonetic:'[BUCH-no OL-ye]', translation:'l\'huile de potiron' },
  { type:'tts_repeat', label:'Produits', word:'med', phonetic:'[MED]', translation:'le miel' },

  { type:'matching', label:'Plats → description', pairs:[
    {sl:'Potica',              fr:'Gâteau roulé aux noix — symbole national'},
    {sl:'Jota',                fr:'Soupe choucroute, haricots et pommes de terre'},
    {sl:'Kranjska klobasa',    fr:'Saucisse de Carniole fumée (AOP)'},
    {sl:'Prekmurska gibanica', fr:'Gâteau multicouche (fromage, noix, pavot, pomme)'},
  ]},

  { type:'qcm', label:'QCM', question:'Quel est le plat national slovène par excellence ?',
    choices:['La potica','La jota','La kranjska klobasa','Le bograč'], correct:0 },

  { type:'qcm', label:'QCM', question:'La kranjska klobasa a obtenu l\'AOP européenne en…',
    choices:['2015','2004','2007','1991'], correct:0 },

  { type:'qcm', label:'QCM', question:'Dans quelle région est principalement produite l\'huile de potiron ?',
    choices:['En Styrie slovène (Štajerska)','En Carniole (Kranjska)','En Primorska','En Prekmurje'], correct:0 },

  { type:'matching', label:'Région → spécialité', pairs:[
    {sl:'Carniole (Kranjska)',  fr:'Kranjska klobasa'},
    {sl:'Styrie (Štajerska)',   fr:'Bučno olje (huile de potiron)'},
    {sl:'Prekmurje',            fr:'Prekmurska gibanica'},
    {sl:'Primorska',            fr:'Teran (vin rouge du Karst)'},
  ]},

  { type:'fill', label:'Phrase à trous', sentence:['Potica je naša ___ (plat national). (La potica est notre plat national.)'], blank:'nacionalna jed', bank:['nacionalna jed','slovenska zemlja','stara pesem','kulturna dediščina'] },

  { type:'fill', label:'Phrase à trous', sentence:['Bučno olje imenujemo ___ (l\'or vert). (On appelle l\'huile de potiron \'l\'or vert\'.)'], blank:'zeleno zlato', bank:['zeleno zlato','rdeče vino','sladko sadje','sveže mleko'] },

  { type:'tts_repeat', label:'Au restaurant', word:'Priporočam joto in kranjsko klobaso !', phonetic:'[pri-po-RO-cham YO-to in KRANY-sko klo-BA-so]', translation:'Je recommande la jota et la saucisse de Carniole !' },

  { type:'story', label:'Dialogue culinaire', title:'Pri babici — Chez grand-mère',
    narration:'Lena je pri babici Marjeti za Božič. Babica peče potice v kuhinji.',
    dialogue:[
      {speaker:'Lena',    text:'Babica, zakaj delaš toliko potic ?', side:'left'},
      {speaker:'Babica',  text:'Za celo družino, seveda ! Potica je obvezna za Božič.', side:'right'},
      {speaker:'Lena',    text:'Kakšno nadevom delaš ?', side:'left'},
      {speaker:'Babica',  text:'Orehovo, makovega in skuto. Vsak ima svojo najljubšo.', side:'right'},
      {speaker:'Lena',    text:'In kaj je v joti ?', side:'left'},
      {speaker:'Babica',  text:'Kislo zelje, fižol, krompir in malo pancette. Zelo topla in hranljiva.', side:'right'},
      {speaker:'Lena',    text:'Mmm ! In bučno olje na solati ?', side:'left'},
      {speaker:'Babica',  text:'Seveda ! Brez bučnega olja ni prave slovenske solate !', side:'right'},
    ],
    translation:{
      'Babica, zakaj delaš toliko potic ?': 'Grand-mère, pourquoi tu fais autant de potice ?',
      'Za celo družino, seveda ! Potica je obvezna za Božič.': 'Pour toute la famille, bien sûr ! La potica est obligatoire pour Noël.',
      'Kakšno nadevom delaš ?': 'Quelle farce tu fais ?',
      'Orehovo, makovega in skuto. Vsak ima svojo najljubšo.': 'Aux noix, au pavot et au fromage blanc. Chacun a sa préférée.',
      'In kaj je v joti ?': 'Et qu\'est-ce qu\'il y a dans la jota ?',
      'Kislo zelje, fižol, krompir in malo pancette. Zelo topla in hranljiva.': 'De la choucroute, des haricots, des pommes de terre et un peu de pancetta. Très chaude et nourrissante.',
      'Mmm ! In bučno olje na solati ?': 'Mmm ! Et de l\'huile de potiron sur la salade ?',
      'Seveda ! Brez bučnega olja ni prave slovenske solate !': 'Bien sûr ! Sans huile de potiron, il n\'y a pas de vraie salade slovène !',
    }},

  { type:'qcm', label:'Quiz final', question:'Quelle est la garniture traditionnelle principale de la potica ?',
    choices:['Les noix (oreh)','La viande de porc','Le fromage de brebis','Les champignons'], correct:0 },

  { type:'qcm', label:'Quiz final', question:'La jota est…',
    choices:['Une soupe à la choucroute, aux haricots et aux pommes de terre','Un gâteau aux noix','Une saucisse fumée','Un vin rouge du Karst'], correct:0 },

  { type:'qcm', label:'Quiz final', question:'Comment dit-on "Je recommande" en slovène ?',
    choices:['Priporočam','Prosim','Prinesi','Plačam'], correct:0 },

  { type:'qcm', label:'Quiz final', question:'Que signifie "bučno olje" ?',
    choices:['Huile de potiron','Huile d\'olive','Huile de noix','Beurre fondu'], correct:0 },

  { type:'reconstruct', label:'Reconstitue', sentence:'Potica je obvezna jed za Božič v Sloveniji.', words:['Potica','je','obvezna','jed','za','Božič','v','Sloveniji','.'] },

];

// ── fin EX_C_4 ──
