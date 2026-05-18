// ═══════════════════════════════════════════
// 1-18 — La maison & les pièces
// ═══════════════════════════════════════════
const EX_1_18 = [
  { type:'presentation', label:'Types de logement', word:'Hiša — Stanovanje — Soba', phonetic:'[HI-sha] [sta-NO-va-nye] [SO-ba]', translation:'Maison — Appartement — Chambre',
    cultural:{title:'Logement slovène', text:'60% des Slovènes sont propriétaires. Ljubljana est chère mais les villes secondaires sont abordables. Beaucoup ont une "vikend hiša" (maison de week-end) à la montagne !'},
    histoire:{title:'Jože Plečnik — le Gaudí slovène', text:'L\'architecte Jože Plečnik (1872-1957) a transformé Ljubljana en chef-d\'œuvre urbain : la Bibliothèque nationale, les Halles centrales, le Triple pont, le marché. Élève d\'Otto Wagner à Vienne, il a aussi travaillé à Prague pour Masaryk. Son œuvre est classée au Patrimoine Mondial de l\'UNESCO depuis 2021.'} },
  { type:'tts_repeat', label:'Les pièces', word:'Kuhinja, dnevna soba, spalnica, kopalnica, hodnik', phonetic:'[ku-HIN-ya, DNEV-na SO-ba, SPAL-ni-tsa, ko-PAL-ni-tsa, HOD-nik]', translation:'Cuisine, salon, chambre à coucher, salle de bain, couloir' },
  { type:'matching', label:'Pièces → français', pairs:[
    {sl:'Kuhinja',     fr:'Cuisine'},
    {sl:'Dnevna soba', fr:'Salon'},
    {sl:'Spalnica',    fr:'Chambre à coucher'},
    {sl:'Kopalnica',   fr:'Salle de bain'},
    {sl:'Hodnik',      fr:'Couloir'},
  ]},
  { type:'tts_repeat', label:'Meubles essentiels', word:'Postelja, miza, stol, omara, kavč, okno, vrata', phonetic:'[pos-TE-lya, MI-za, STOL, O-ma-ra, KAVCH, OK-no, VRA-ta]', translation:'Lit, table, chaise, armoire, canapé, fenêtre, porte' },
  { type:'matching', label:'Meubles → français', pairs:[
    {sl:'Postelja', fr:'Lit'},
    {sl:'Miza',     fr:'Table'},
    {sl:'Stol',     fr:'Chaise'},
    {sl:'Omara',    fr:'Armoire'},
    {sl:'Kavč',     fr:'Canapé'},
  ]},
  { type:'fill', label:'Phrase à trous', sentence:['Moja ___ je velika in svetla. (Ma chambre est grande et lumineuse)'], blank:'spalnica', bank:['spalnica','kuhinja','kopalnica','dnevna soba'] },
  { type:'story', label:'Histoire', title:'Le nouvel appartement',
    narration:"Petra et Miha emménagent dans leur premier appartement à Ljubljana — 60m². Ce week-end ils vont chez IKEA.",
    dialogue:[
      {speaker:'Petra', text:'Miha, dnevna soba je ogromna !', side:'left'},
      {speaker:'Miha',  text:'Ja ! In kuhinja je svetla. Všeč mi je.', side:'right'},
      {speaker:'Petra', text:'Spalnica je malo majhna, ampak bo šlo.', side:'left'},
      {speaker:'Miha',  text:'Kaj potrebujemo za spalnico ?', side:'right'},
      {speaker:'Petra', text:'Posteljo, omaro in nočno omarico.', side:'left'},
      {speaker:'Miha',  text:'Gremo v soboto v IKEA ? Ob desetih ?', side:'right'},
      {speaker:'Petra', text:'Dogovorjeno !', side:'left'},
    ],
    translation:{
      'Dnevna soba je ogromna !':'Le salon est immense !',
      'Kuhinja je svetla. Všeč mi je.':'La cuisine est lumineuse. J\'aime ça.',
      'Bo šlo.':'Ça ira.',
      'Kaj potrebujemo za spalnico ?':'De quoi avons-nous besoin pour la chambre ?',
      'Posteljo, omaro in nočno omarico.':'Un lit, une armoire et une table de nuit.',
      'Dogovorjeno !':'C\'est décidé !',
    }
  },
  { type:'qcm', label:'QCM histoire', question:'Quelle pièce Miha aime-t-il particulièrement ?', choices:['La cuisine','Le salon','La chambre','La salle de bain'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'Que ne mentionne PAS Petra pour la chambre ?', choices:['Canapé','Lit','Armoire','Table de nuit'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'Quand vont-ils chez IKEA ?', choices:['Samedi à 10h','Dimanche à 10h','Samedi à 9h','Vendredi'], correct:0 },
  { type:'dictee', label:'Dictée', word:'Spalnica', phonetic:'[SPAL-ni-tsa]', hint:'Chambre à coucher — 8 lettres' },
  { type:'reconstruct', label:'Reconstitue', sentence:'Moja dnevna soba je velika in svetla.', words:['Moja','dnevna','soba','je','velika','in','svetla','.'] },
];
