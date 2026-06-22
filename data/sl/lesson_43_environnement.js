// ═══════════════════════════════════════════
// 4-5 — Environnement & nature
// Généré le 2026-06-22 par generate_lesson.py
// ═══════════════════════════════════════════
const EX_4_5 = [
  { type:'presentation', label:'Découverte', word:'Triglavski narodni park', phonetic:'[TRI-glav-ski NAR-odni PARK]', translation:'Parc national de Triglav',
    cultural:{title:'La nature slovène', text:'La Slovénie est un véritable havre de paix pour les amoureux de la nature. Avec 60% de ses terres couvertes de forêts, elle est le deuxième pays le plus boisé d\'Europe. Le parc national de Triglav, le seul parc national du pays, est un symbole de cette richesse naturelle.'},
    histoire:{title:'Un trésor naturel', text:'Le parc a été créé en 1981 pour protéger la biodiversité unique de la région. Il abrite le sommet le plus élevé de Slovénie, le Triglav, qui est un emblème national.'} },

  { type:'presentation', label:'Écologie', word:'Kras', phonetic:'[KRAS]', translation:'Karst',
    cultural:{title:'Le paysage karstique', text:'Le mot "karst" vient du slovène et décrit un terrain caractérisé par des formations de roche calcaire. La région de Kras est mondialement connue pour ses grottes et ses phénomènes naturels uniques.'},
    histoire:{title:'Patrimoine naturel', text:'Le Kras est non seulement un paysage naturel, mais aussi un lieu de tradition. Les habitants y pratiquent des méthodes agricoles durables, respectant l\'environnement.'} },

  { type:'tts_repeat', label:'Environnement', word:'Ogrožati biotsko raznovrstnost.', phonetic:'[O-gro-ZHA-ti BI-ots-ko raz-no-VRST-nost]', translation:'Menacer la biodiversité.' },
  { type:'tts_repeat', label:'Écologie', word:'Varovati naravo je pomembno.', phonetic:'[VA-ro-VA-ti NA-ra-vo ye pom-PEM-no]', translation:'Protéger la nature est important.' },
  { type:'tts_repeat', label:'Recyclage', word:'Recikliranje zmanjša onesnaževanje.', phonetic:'[RE-tsi-KLI-ra-nje ZMA-nzha o-NE-sna-ZHE-va-nje]', translation:'Le recyclage réduit la pollution.' },

  { type:'matching', label:'Mots de l\'environnement → français', pairs:[
    {sl:'Podnebne spremembe', fr:'Changements climatiques'},
    {sl:'Obnovljiva energija', fr:'Énergie renouvelable'},
    {sl:'Varstvo narave', fr:'Protection de la nature'},
    {sl:'Ekoturizem', fr:'Écotourisme'},
  ]},

  { type:'qcm', label:'QCM grammaire', question:'Pour exprimer une conséquence, on utilise :',
    choices:['Zato','Kljub temu, da','Posledično','Da'], correct:0 },

  { type:'qcm', label:'QCM grammaire', question:'Le datif de concession s\'utilise avec :',
    choices:['Kljub temu, da...','Zato','Da','Zato, da'], correct:0 },

  { type:'qcm', label:'QCM culturel', question:'Quel est le pourcentage de forêts en Slovénie ?',
    choices:['60%','50%','70%','40%'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['___ narava je pomembna za naše zdravje. (Protéger la nature est important pour notre santé.)'], blank:'Varovati', bank:['Varovati','Ogrožati','Recyclirati','Zmanjšati'] },
  { type:'fill', label:'Phrase à trous', sentence:['___ je pomembna za biotsko raznovrstnost. (La protection est importante pour la biodiversité.)'], blank:'Varstvo', bank:['Varstvo','Ogrožanje','Recycliranje','Onesnaževanje'] },
  { type:'fill', label:'Phrase à trous', sentence:['___ energija je prihodnost. (L\'énergie renouvelable est l\'avenir.)'], blank:'Obnovljiva', bank:['Obnovljiva','Onesnaževalna','Učinkovita','Tradicionalna'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Zato recikliramo, da varujemo okolje.', words:['Zato','recikliramo','da','varujemo','okolje','.'] },

  { type:'story', label:'Dialogue sur l\'environnement', title:'O okolju — Sur l\'environnement',
    narration:'Ana in Marko se pogovarjata o pomembnosti varstva okolja.',
    dialogue:[
      {speaker:'Ana', text:'Kljub temu, da imamo veliko gozdov, je onesnaževanje še vedno problem.', side:'left'},
      {speaker:'Marko', text:'Res je. Zato moramo reciklirati in varovati naravo.', side:'right'},
      {speaker:'Ana', text:'Kako lahko prispevamo k trajnostnemu razvoju?', side:'left'},
      {speaker:'Marko', text:'Ekoturizem je odlična priložnost, da spoznamo naravo in jo zaščitimo.', side:'right'},
      {speaker:'Ana', text:'Svetujem, da se udeležimo delavnic o obnovljivih virih energije.', side:'left'},
      {speaker:'Marko', text:'To je odlična ideja! Morda bomo našli nove rešitve.', side:'right'},
      {speaker:'Ana', text:'Hvala, da si delil te informacije.', side:'left'},
      {speaker:'Marko', text:'Ni za kaj! Pomembno je, da skrbimo za naše okolje.', side:'right'},
    ],
    translation:{
      'Kljub temu, da imamo veliko gozdov, je onesnaževanje še vedno problem.': 'Bien que nous ayons beaucoup de forêts, la pollution reste un problème.',
      'Res je. Zato moramo reciklirati in varovati naravo.': 'C\'est vrai. Donc nous devons recycler et protéger la nature.',
      'Kako lahko prispevamo k trajnostnemu razvoju?': 'Comment pouvons-nous contribuer au développement durable ?',
      'Ekoturizem je odlična priložnost, da spoznamo naravo in jo zaščitimo.': 'L\'écotourisme est une excellente occasion de découvrir la nature et de la protéger.',
      'Svetujem, da se udeležimo delavnic o obnovljivih virih energije.': 'Je conseille de participer à des ateliers sur les énergies renouvelables.',
      'To je odlična ideja! Morda bomo našli nove rešitve.': 'C\'est une excellente idée ! Peut-être que nous trouverons de nouvelles solutions.',
      'Hvala, da si delil te informacije.': 'Merci d\'avoir partagé ces informations.',
      'Ni za kaj! Pomembno je, da skrbimo za naše okolje.': 'De rien ! Il est important de prendre soin de notre environnement.',
    }},
];

// ── fin EX_4_5 ──
