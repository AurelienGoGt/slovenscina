// ═══════════════════════════════════════════
// 6-4 — Médias & actualités
// Généré le 2026-07-17 par generate_lesson.py
// ═══════════════════════════════════════════
const EX_6_4 = [
  { type:'presentation', label:'Découverte', word:'Mediiji', phonetic:'[ME-di-i-ji]', translation:'Les médias',
    cultural:{title:'Le paysage médiatique slovène', text:'La Slovénie possède un paysage médiatique diversifié avec RTV Slovenija comme service public. Les chaînes TV SLO1 et SLO2 ainsi que Radio Slovenija offrent une variété de contenus. Les journaux comme Delo et Večer sont parmi les plus respectés.'},
    histoire:{title:'L\'évolution de la presse', text:'Depuis son indépendance en 1991, la Slovénie a vu un développement rapide des médias numériques. L\'agence STA (Slovenska tiskovna agencija) joue un rôle crucial dans la diffusion des nouvelles.'} },

  { type:'presentation', label:'Grammaire - Passé narratif', word:'Poročal', phonetic:'[PO-ro-cha-l]', translation:'j\'ai rapporté',
    cultural:{title:'Le passé narratif', text:'Utilisé fréquemment dans les articles de presse, le passé narratif donne une perspective immédiate sur les événements.'},
    histoire:{title:'Le style journalistique', text:'Les journalistes slovènes utilisent souvent le passé narratif pour rapporter des faits de manière engageante.'} },

  { type:'tts_repeat', label:'Article', word:'Po besedah tiskovnega predstavnika, novica je bila pomembna.', phonetic:'[PO BE-se-dah TIS-kov-ne-ga pre-DSTAV-ni-ka, NO-vi-tsa ye BI-la pom-BEM-na]', translation:'Selon les paroles du porte-parole, la nouvelle était importante.' },
  { type:'tts_repeat', label:'Commentaire', word:'Glede na poročanje, mnenje se je spremenilo.', phonetic:'[GLE-de na PO-ro-chan-je, MNE-nje se ye spre-ME-ni-lo]', translation:'D\'après le reportage, l\'opinion a changé.' },
  { type:'tts_repeat', label:'Article', word:'Kljub temu, novica ni bila potrjena.', phonetic:'[KLYUB TE-mo, NO-vi-tsa ni BI-la po-TRE-na]', translation:'Cependant, la nouvelle n\'a pas été confirmée.' },

  { type:'matching', label:'Médias → français', pairs:[
    {sl:'RTV Slovenija', fr:'RTV Slovénie'}, {sl:'Delo', fr:'Delo'},
    {sl:'Večer', fr:'Večer'},   {sl:'STA', fr:'STA'},
    {sl:'MMC', fr:'MMC'},
  ]},

  { type:'qcm', label:'QCM grammaire', question:'Dans le passé narratif de presse, on utilise souvent :',
    choices:['Je poročal, je sporočil, je izjavil','Je sem, je bil, je imela','J\'ai, j\'ai eu, j\'ai été','Je fais, je suis, je vais'], correct:0 },

  { type:'qcm', label:'QCM culturel', question:'Quel est le journal le plus respecté en Slovénie ?',
    choices:['Delo','Večer','Dnevnik','Svet24'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['___ je bil močan. (Le reportage était fort.)'], blank:'Poročanje', bank:['Poročanje','Novica','Članek','Mnenje'] },
  { type:'fill', label:'Phrase à trous', sentence:['Glede na ___, je situacija težavna. (D\'après l\'opinion, la situation est difficile.)'], blank:'mnenje', bank:['novica','naslov','članek','mnenje'] },
  { type:'fill', label:'Phrase à trous', sentence:['Kljub temu, ___ ni potrjena. (Cependant, la nouvelle n\'est pas confirmée.)'], blank:'novica', bank:['novica','izjava','mnenje','poročilo'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Poročilo je bilo objavljeno v Delo.', words:['Poročilo','je','bilo','objavljeno','v','Delo','.'] },

  { type:'story', label:'Dialogue sur les médias', title:'O medijih — Sur les médias',
    narration:'Ana in Marko sta se pogovarjala o slovenskih medijih.',
    dialogue:[
      {speaker:'Ana', text:'Ali si že prebral novico v Delo?', side:'left'},
      {speaker:'Marko', text:'Ja, po poročanju so rezultati volitev presenetljivi.', side:'right'},
      {speaker:'Ana', text:'Kljub temu, da so mnenja različna, je bila novica zanimiva.', side:'left'},
      {speaker:'Marko', text:'Res je. RTV Slovenija je objavila intervju z županom.', side:'right'},
      {speaker:'Ana', text:'Glede na njegovo izjavo, bo prihodnost svetla.', side:'left'},
      {speaker:'Marko', text:'Se strinjam. Tudi MMC je imel dobre analize.', side:'right'},
      {speaker:'Ana', text:'Da, digitalni mediji so se zelo razvili.', side:'left'},
      {speaker:'Marko', text:'Pravzaprav, to je zelo pomembno za našo družbo.', side:'right'},
    ],
    translation:{
      'Ali si že prebral novico v Delo?': 'As-tu déjà lu la nouvelle dans Delo ?',
      'Ja, po poročanju so rezultati volitev presenetljivi.': 'Oui, selon le reportage, les résultats des élections sont surprenants.',
      'Kljub temu, da so mnenja različna, je bila novica zanimiva.': 'Cependant, bien que les opinions varient, la nouvelle était intéressante.',
      'Res je. RTV Slovenija je objavila intervju z županom.': 'C\'est vrai. RTV Slovenija a publié une interview avec le maire.',
      'Glede na njegovo izjavo, bo prihodnost svetla.': 'D\'après sa déclaration, l\'avenir sera brillant.',
      'Se strinjam. Tudi MMC je imel dobre analize.': 'Je suis d\'accord. MMC avait aussi de bonnes analyses.',
      'Da, digitalni mediji so se zelo razvili.': 'Oui, les médias numériques se sont beaucoup développés.',
      'Pravzaprav, to je zelo pomembno za našo družbo.': 'En fait, c\'est très important pour notre société.',
    }},
];

// ── fin EX_6_4 ──
