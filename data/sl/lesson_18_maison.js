// ═══════════════════════════════════════════
// 1-18 — La maison & les pièces
// ═══════════════════════════════════════════
const EX_1_18 = [
  { type:'presentation', label:'Types de logement', word:'Hiša — Stanovanje — Soba', phonetic:'[HI-sha] [sta-NO-va-nye] [SO-ba]', translation:'Maison — Appartement — Chambre',
    cultural:{title:'Logement slovène', text:'60% des Slovènes sont propriétaires. Ljubljana est chère mais les villes secondaires sont abordables. Beaucoup ont une "vikend hiša" (maison de week-end) à la montagne !'},
    histoire:{title:'Jože Plečnik — le Gaudí slovène', text:'L\'architecte Jože Plečnik (1872-1957) a transformé Ljubljana en chef-d\'œuvre urbain : la Bibliothèque nationale, les Halles centrales, le Triple pont, le marché. Son œuvre est classée au Patrimoine Mondial de l\'UNESCO depuis 2021.'} },

  { type:'presentation', label:'Le locatif — où se trouve quelque chose ?', word:'V sobi — Na mizi — Pri oknu', phonetic:'[v SO-bi] [na MI-zi] [pri OK-nu]', translation:'Dans la chambre — Sur la table — Près de la fenêtre', noTTS:true,
    cultural:{title:'V, na, pri + locatif = position statique', text:'"V" (dans) + locatif = lieu fermé : v sobi (dans la chambre), v kuhinji (dans la cuisine), v kopalnični (dans la SDB).\n"Na" (sur/à) + locatif = surface ou lieu ouvert : na mizi (sur la table), na kavču (sur le canapé), na terasi (sur la terrasse).\n"Pri" (près de) + locatif : pri oknu (près de la fenêtre).\nLe locatif modifie les terminaisons des noms !'} },

  { type:'presentation', label:'L\'accusatif — mouvement vers un lieu', word:'Grem v sobo. — Grem na teraso.', phonetic:'[GREM v SO-bo] [GREM na te-RA-so]', translation:'Je vais dans la chambre. — Je vais sur la terrasse.', noTTS:true,
    cultural:{title:'V/na + accusatif = direction/mouvement', text:'Avec un verbe de mouvement (grem, hodim, grem...), on utilise l\'accusatif : "Grem v sobo" (je vais dans la chambre — accusatif). "Grem na teraso" (je vais sur la terrasse). Astuce : locatif = statique (où on EST), accusatif = dynamique (où on VA) !'} },

  { type:'tts_repeat', label:'Les pièces', word:'Kuhinja, dnevna soba, spalnica, kopalnica, hodnik', phonetic:'[ku-HIN-ya, DNEV-na SO-ba, SPAL-ni-tsa, ko-PAL-ni-tsa, HOD-nik]', translation:'Cuisine, salon, chambre à coucher, salle de bain, couloir' },
  { type:'tts_repeat', label:'Autres espaces', word:'Terasa, klet, podstrešje, garaža, vrt', phonetic:'[te-RA-sa, KLET, pod-STRESH-ye, ga-RA-zha, VIRT]', translation:'Terrasse, cave, grenier/combles, garage, jardin' },
  { type:'tts_repeat', label:'Meubles du salon et chambre', word:'Postelja, kavč, miza, stol, omara, polica, preproga, zavesa', phonetic:'[pos-TE-lya, KAVCH, MI-za, STOL, O-ma-ra, po-LI-tsa, prep-RO-ga, za-VE-sa]', translation:'Lit, canapé, table, chaise, armoire, étagère, tapis, rideau' },
  { type:'tts_repeat', label:'Meubles et appareils', word:'Ogledalo, luč, televizor, hladilnik, štedilnik, pomivalni stroj', phonetic:'[og-le-DA-lo, LUCH, te-le-VI-zor, hla-DIL-nik, shte-DIL-nik, po-mi-VAL-ni STROY]', translation:'Miroir, lampe, téléviseur, réfrigérateur, cuisinière, lave-vaisselle' },

  { type:'matching', label:'Pièces → français', pairs:[
    {sl:'Kuhinja',     fr:'Cuisine'},
    {sl:'Dnevna soba', fr:'Salon'},
    {sl:'Spalnica',    fr:'Chambre à coucher'},
    {sl:'Kopalnica',   fr:'Salle de bain'},
    {sl:'Hodnik',      fr:'Couloir / Entrée'},
  ]},
  { type:'matching', label:'Autres pièces → français', pairs:[
    {sl:'Terasa',      fr:'Terrasse'},
    {sl:'Klet',        fr:'Cave'},
    {sl:'Podstrešje',  fr:'Grenier / Combles'},
    {sl:'Garaža',      fr:'Garage'},
    {sl:'Vrt',         fr:'Jardin'},
  ]},
  { type:'matching', label:'Meubles → français', pairs:[
    {sl:'Postelja',  fr:'Lit'},
    {sl:'Kavč',      fr:'Canapé'},
    {sl:'Omara',     fr:'Armoire'},
    {sl:'Polica',    fr:'Étagère'},
    {sl:'Preproga',  fr:'Tapis'},
  ]},
  { type:'matching', label:'Électroménager → français', pairs:[
    {sl:'Televizor',       fr:'Téléviseur'},
    {sl:'Hladilnik',       fr:'Réfrigérateur'},
    {sl:'Štedilnik',       fr:'Cuisinière'},
    {sl:'Pomivalni stroj', fr:'Lave-vaisselle'},
    {sl:'Luč',             fr:'Lampe'},
  ]},

  { type:'qcm', label:'QCM', question:'"Televizor je v dnevni sobi." signifie :',
    choices:['La télé est dans le salon','La télé est dans la chambre','La télé est dans la cuisine','La télé est grande'], correct:0 },
  { type:'qcm', label:'QCM grammaire', question:'"Na kavču" = sur le canapé. "Na" + locatif s\'utilise avec :',
    choices:['Surfaces et lieux ouverts','Lieux fermés seulement','Tous les meubles','Uniquement les pièces'], correct:0 },
  { type:'qcm', label:'QCM grammaire', question:'Pour dire "je vais dans la cuisine" (mouvement), on dit :',
    choices:['Grem v kuhinjo.','Sem v kuhinji.','Grem v kuhinja.','Je v kuhinji.'], correct:0 },
  { type:'qcm', label:'QCM', question:'"Kje je hladilnik ?" signifie :',
    choices:['Où est le réfrigérateur ?','Qu\'est-ce que le réfrigérateur ?','Le réfrigérateur est grand.','J\'achète un réfrigérateur.'], correct:0 },
  { type:'qcm', label:'QCM', question:'"Pri oknu" signifie :',
    choices:['Près de la fenêtre','Sur la fenêtre','Dans la fenêtre','Vers la fenêtre'], correct:0 },
  { type:'qcm', label:'QCM', question:'"Vikend hiša" est une :',
    choices:['Maison de week-end','Petite maison','Maison de ville','Vieille maison'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['Postelja je ___ spalnici. (Le lit est dans la chambre.)'], blank:'v', bank:['v','na','za','pri'] },
  { type:'fill', label:'Phrase à trous', sentence:['Kavč je ___ dnevni sobi. (Le canapé est dans le salon.)'], blank:'v', bank:['v','na','pri','za'] },
  { type:'fill', label:'Phrase à trous', sentence:['Knjiga je ___ mizi. (Le livre est sur la table.)'], blank:'na', bank:['na','v','pri','za'] },
  { type:'fill', label:'Phrase à trous', sentence:['Grem ___ sobo. (Je vais dans la chambre — mouvement.)'], blank:'v', bank:['v','na','pri','iz'] },
  { type:'fill', label:'Phrase à trous', sentence:['Moja ___ je velika in svetla. (Ma chambre est grande et lumineuse.)'], blank:'spalnica', bank:['spalnica','kuhinja','kopalnica','dnevna soba'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Moja dnevna soba je velika in svetla.', words:['Moja','dnevna','soba','je','velika','in','svetla','.'] },

  { type:'story', label:'Histoire', title:'Novo stanovanje — Le nouvel appartement',
    narration:"Petra pokaže svoje novo stanovanje prijatelju Tomažu, ki prihaja v Ljubljano. Stanovanje je 65 kvadratnih metrov.",
    dialogue:[
      {speaker:'Petra', text:'Tomaž, dobrodošel ! Tukaj je hodnik in dnevna soba.', side:'left'},
      {speaker:'Tomaž', text:'Wow — dnevna soba je ogromna ! Kje je kuhinja ?', side:'right'},
      {speaker:'Petra', text:'Kuhinja je tam, na levi. Ima nov štedilnik in hladilnik.', side:'left'},
      {speaker:'Tomaž', text:'Super ! In pomivalni stroj ?', side:'right'},
      {speaker:'Petra', text:'Ja, je pod oknom. Spalnica je tam — postelja in velika omara.', side:'left'},
      {speaker:'Tomaž', text:'Imaš teraso ?', side:'right'},
      {speaker:'Petra', text:'Ja ! Grem na teraso vsak večer. Je mali vrt spodaj.', side:'left'},
      {speaker:'Tomaž', text:'Odlično stanovanje ! Koliko kvadratnih metrov ima ?', side:'right'},
    ],
    translation:{
      'Dobrodošel !':'Bienvenue !',
      'Tukaj je hodnik in dnevna soba.':'Voici le couloir et le salon.',
      'Dnevna soba je ogromna !':'Le salon est immense !',
      'Kje je kuhinja ?':'Où est la cuisine ?',
      'Kuhinja je tam, na levi.':'La cuisine est là, à gauche.',
      'Ima nov štedilnik in hladilnik.':'Elle a une nouvelle cuisinière et un réfrigérateur.',
      'Ja, je pod oknom.':'Oui, il est sous la fenêtre.',
      'Grem na teraso vsak večer.':'Je vais sur la terrasse chaque soir.',
      'Je mali vrt spodaj.':'Il y a un petit jardin en bas.',
      'Koliko kvadratnih metrov ima ?':'Elle fait combien de mètres carrés ?',
    }
  },

  { type:'qcm', label:'QCM histoire', question:'Où se trouve le lave-vaisselle ?', choices:['Sous la fenêtre','Dans la chambre','Sur la terrasse','Dans le couloir'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'Que fait Petra sur la terrasse chaque soir ?', choices:['Elle s\'y repose','Elle cuisine','Elle regarde la télé','Elle travaille'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'Qu\'y a-t-il en bas de l\'immeuble ?', choices:['Un petit jardin','Un garage','Une cave','Un parc'], correct:0 },

  { type:'dictee', label:'Dictée', word:'Spalnica', phonetic:'[SPAL-ni-tsa]', hint:'Chambre à coucher — 8 lettres' },
  { type:'dictee', label:'Dictée', word:'Hladilnik', phonetic:'[hla-DIL-nik]', hint:'Réfrigérateur — 9 lettres' },

  { type:'dialogue', label:'À toi de jouer !', lines:[
    {speaker:'Ana', text:'Kakšno stanovanje imaš ?', side:'left'},
    {speaker:'Toi', text:'Imam dnevno sobo, ___ in kopalnico.', side:'right', blank:'kuhinjo', hint:'la cuisine (accusatif) → kuhinjo'},
    {speaker:'Ana', text:'Kje je postelja ?', side:'left'},
    {speaker:'Toi', text:'Postelja je ___ spalnici.', side:'right', blank:'v', hint:'dans → v'},
    {speaker:'Ana', text:'Imaš teraso ?', side:'left'},
    {speaker:'Toi', text:'Ja ! Zvečer grem ___ teraso.', side:'right', blank:'na', hint:'sur la terrasse (mouvement) → na'},
    {speaker:'Ana', text:'Kaj je v dnevni sobi ?', side:'left'},
    {speaker:'Toi', text:'V dnevni sobi je ___ in televizor.', side:'right', blank:'kavč', hint:'canapé → kavč'},
  ]},
];
