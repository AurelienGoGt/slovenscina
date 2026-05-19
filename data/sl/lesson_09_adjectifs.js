// ═══════════════════════════════════════════
// 1-9 — Adjectifs
// ═══════════════════════════════════════════
const EX_1_9 = [
  { type:'presentation', label:'Découverte', word:'Velik — Majhen — Lep — Grden', phonetic:'[VE-lik] [MAY-hen] [LEP] [GR-den]', translation:'Grand — Petit — Beau — Laid',
    cultural:{title:'Accord des adjectifs', text:'Les adjectifs s\'accordent en genre. Masculin : velik, lep. Féminin : velika, lepa. Neutre : veliko, lepo. La forme masculine de base est souvent sans -a final. Ex : "lep dan" (belle journée — dan est masc.) !'},
    histoire:{title:'La Slovénie en chiffres', text:'20 273 km² — plus petite que la Bretagne. 2,1 millions d\'habitants. 60% du territoire couvert de forêts — 3e pays le plus boisé d\'Europe. Plus de 7000 grottes dont Postojna (27km). 47km de côte adriatique seulement !'} },

  { type:'presentation', label:'Accord masc./fém./neutre', word:'Nov (m) — Nova (f) — Novo (n)', phonetic:'[NOV] [NO-va] [NO-vo]', translation:'Nouveau (m) — Nouvelle (f) — Nouveau (n)', noTTS:true,
    cultural:{title:'Patron d\'accord régulier', text:'La plupart des adjectifs suivent ce patron : masc. = forme de base, fém. = + a, neutre = + o. Exemples : star/stara/staro (vieux), nov/nova/novo (nouveau), dober/dobra/dobro (bon). Exception : "poceni" (bon marché) = invariable !'} },

  { type:'tts_repeat', label:'Taille & âge', word:'Velik, majhen, visok, nizek, star, mlad', phonetic:'[VE-lik, MAY-hen, VI-sok, NI-zek, STAR, MLAD]', translation:'Grand, petit, grand (de taille), petit (de taille), vieux, jeune' },
  { type:'tts_repeat', label:'Qualité & caractère', word:'Dober, slab, hiter, počasen, lep, grden', phonetic:'[DO-ber, SLAB, HI-ter, po-CHA-sen, LEP, GR-den]', translation:'Bon, mauvais, rapide, lent, beau, laid' },
  { type:'tts_repeat', label:'Prix & état', word:'Drag, poceni, nov, star, moker, suh', phonetic:'[DRAG, PO-tse-ni, NOV, STAR, MO-ker, SUH]', translation:'Cher, bon marché, nouveau, vieux, mouillé, sec' },

  { type:'matching', label:'Opposés 1', pairs:[
    {sl:'Velik',  fr:'Grand ↔ Majhen (petit)'},
    {sl:'Star',   fr:'Vieux ↔ Mlad (jeune)'},
    {sl:'Hiter',  fr:'Rapide ↔ Počasen (lent)'},
    {sl:'Dober',  fr:'Bon ↔ Slab (mauvais)'},
    {sl:'Drag',   fr:'Cher ↔ Poceni (bon marché)'},
  ]},
  { type:'matching', label:'Adjectifs → français', pairs:[
    {sl:'Nov',     fr:'Nouveau / Nouvelle'},
    {sl:'Visok',   fr:'Grand (de taille)'},
    {sl:'Nizek',   fr:'Petit (de taille)'},
    {sl:'Lep',     fr:'Beau / Belle'},
    {sl:'Moker',   fr:'Mouillé(e)'},
  ]},

  { type:'qcm', label:'QCM', question:'Comment dit-on "Le café est bon" (kava = café, fém.) ?',
    choices:['Kava je dobra.','Kava je dober.','Kava je dobro.','Je dobra kava.'], correct:0 },
  { type:'qcm', label:'QCM grammaire', question:'"Stan" (appartement) est masculin. "Appartement nouveau" se dit :',
    choices:['Nov stan','Nova stan','Novo stan','Stan nova'], correct:0 },
  { type:'qcm', label:'QCM', question:'"Poceni" (bon marché) est un adjectif invariable. Quelle forme pour "maison bon marché" (hiša = fém.) ?',
    choices:['Poceni hiša','Pocenia hiša','Poceno hiša','Pocene hiša'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['Danes je ___ vreme. (Aujourd\'hui il fait beau temps)'], blank:'lepo', bank:['lepo','slabo','dobro','hladno'] },
  { type:'fill', label:'Phrase à trous', sentence:['Ta avto je ___, ne star. (Cette voiture est nouvelle, pas vieille.)'], blank:'nov', bank:['nov','nova','novo','mlad'] },
  { type:'fill', label:'Phrase à trous', sentence:['Moja nova obleka je ___. (Ma nouvelle robe est belle.)'], blank:'lepa', bank:['lepa','lep','lepo','grden'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Avto je velik in hiter.', words:['Avto','je','velik','in','hiter','.'] },

  { type:'presentation', label:'Les comparatifs', word:'Večji — Manjši — Boljši — Slabši', phonetic:'[VECH-yi] [MAN-shyi] [BOL-shyi] [SLAB-shyi]', translation:'Plus grand — Plus petit — Meilleur — Pire', noTTS:true,
    cultural:{title:'Former les comparatifs', text:'En slovène, deux façons : 1) "bolj" + adjectif (plus + adj.) — général et toujours correct. 2) suffixes irréguliers pour les courants : velik → večji (plus grand), majhen → manjši (plus petit), dober → boljši (meilleur), slab → slabši (pire), hiter → hitrejši (plus rapide), počasen → počasnejši (plus lent). Comparaison : "X je bolj... kot Y" = X est plus... que Y.'} },

  { type:'tts_repeat', label:'Comparatifs courants', word:'Večji, manjši, boljši, slabši, hitrejši, počasnejši', phonetic:'[VECH-yi, MAN-shyi, BOL-shyi, SLAB-shyi, hi-TREY-shyi, po-CHAS-ney-shyi]', translation:'Plus grand, plus petit, meilleur, pire, plus rapide, plus lent' },
  { type:'tts_repeat', label:'Comparaisons', word:'Ljubljana je večja kot Maribor. Ta avto je hitrejši od mojega.', phonetic:'[lyub-LYA-na ye VECH-ya kot MA-ri-bor] [TA AV-to ye hi-TREY-shyi od mo-YE-ga]', translation:'Ljubljana est plus grande que Maribor. Cette voiture est plus rapide que la mienne.' },

  { type:'matching', label:'Comparatifs → français', pairs:[
    {sl:'Večji',       fr:'Plus grand'},
    {sl:'Manjši',      fr:'Plus petit'},
    {sl:'Boljši',      fr:'Meilleur'},
    {sl:'Slabši',      fr:'Pire'},
    {sl:'Hitrejši',    fr:'Plus rapide'},
  ]},

  { type:'qcm', label:'QCM', question:'Comment dit-on "plus rapide" ?', choices:['Hitrejši','Hiter','Počasnejši','Bolj hiten'], correct:0 },
  { type:'qcm', label:'QCM', question:'"Ljubljana je večja kot Maribor" signifie…', choices:['Ljubljana est plus grande que Maribor','Maribor est plus grande que Ljubljana','Ljubljana est aussi grande que Maribor','Ljubljana est belle'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['Ta restavracija je ___ kot ona. (Ce restaurant est meilleur que celui-là.)'], blank:'boljša', bank:['boljša','slabša','večja','manjša'] },
  { type:'fill', label:'Phrase à trous', sentence:['Moj brat je ___ od mene. (Mon frère est plus grand que moi.)'], blank:'večji', bank:['večji','manjši','hitrejši','boljši'] },

  { type:'presentation', label:'Les superlatifs', word:'Največji — Najboljši — Najlepši', phonetic:'[nay-VECH-yi] [nay-BOL-shyi] [nay-LEP-shyi]', translation:'Le plus grand — Le meilleur — Le plus beau', noTTS:true,
    cultural:{title:'Le préfixe naj-', text:'Le superlatif se forme simplement avec le préfixe "naj-" devant le comparatif. Večji → največji (le plus grand). Boljši → najboljši (le meilleur). Lepši → najlepši (le plus beau). "Tadej Pogačar je najboljši kolesar na svetu !" = Tadej Pogačar est le meilleur cycliste du monde !'} },

  { type:'tts_repeat', label:'Superlatifs', word:'Največji, najboljši, najlepši, najhitrejši, najmanjši', phonetic:'[nay-VECH-yi, nay-BOL-shyi, nay-LEP-shyi, nay-hi-TREY-shyi, nay-MAN-shyi]', translation:'Le plus grand, le meilleur, le plus beau, le plus rapide, le plus petit' },

  { type:'matching', label:'Superlatifs → français', pairs:[
    {sl:'Največji',    fr:'Le plus grand'},
    {sl:'Najboljši',   fr:'Le meilleur'},
    {sl:'Najlepši',    fr:'Le plus beau'},
    {sl:'Najhitrejši', fr:'Le plus rapide'},
    {sl:'Najmanjši',   fr:'Le plus petit'},
  ]},

  { type:'qcm', label:'QCM', question:'Comment dit-on "le meilleur" ?', choices:['Najboljši','Boljši','Najlepši','Najboljše'], correct:0 },
  { type:'qcm', label:'QCM', question:'Quel préfixe forme le superlatif en slovène ?', choices:['naj-','bolj-','ne-','pre-'], correct:0 },

  { type:'story', label:'Histoire', title:'Le nouvel appartement',
    narration:"Sara et Rok visitent un appartement à Ljubljana. L\'agence immobilière leur fait visiter un 65m².",
    dialogue:[
      {speaker:'Agent', text:'Dobro jutro ! Stan je nov in velik.', side:'right'},
      {speaker:'Sara',  text:'Lepa dnevna soba ! Je svetla ?', side:'left'},
      {speaker:'Agent', text:'Da, okna so velika in sončna.', side:'right'},
      {speaker:'Rok',   text:'In spalnica ? Je majhna ali velika ?', side:'left'},
      {speaker:'Agent', text:'Spalnica je srednje velika — dvanajst kvadratov.', side:'right'},
      {speaker:'Sara',  text:'In cena ? Je drago ?', side:'left'},
      {speaker:'Agent', text:'Ugodna cena — sedemsto evrov na mesec.', side:'right'},
      {speaker:'Rok',   text:'To ni poceni, ampak je lep stan !', side:'left'},
    ],
    translation:{
      'Stan je nov in velik.':'L\'appartement est nouveau et grand.',
      'Lepa dnevna soba ! Je svetla ?':'Beau salon ! Il est lumineux ?',
      'Da, okna so velika in sončna.':'Oui, les fenêtres sont grandes et ensoleillées.',
      'Je majhna ali velika ?':'Elle est petite ou grande ?',
      'Spalnica je srednje velika — dvanajst kvadratov.':'La chambre est moyenne — douze mètres carrés.',
      'In cena ? Je drago ?':'Et le prix ? C\'est cher ?',
      'Ugodna cena — sedemsto evrov na mesec.':'Prix raisonnable — sept cents euros par mois.',
      'To ni poceni, ampak je lep stan !':'Ce n\'est pas bon marché, mais c\'est bel appartement !',
    }
  },

  { type:'qcm', label:'QCM histoire', question:'Comment est la dnevna soba (salon) ?', choices:['Lumineuse et ensoleillée','Petite et sombre','Grande mais froide','Meublée'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'Quelle est la taille de la chambre ?', choices:['12 m²','15 m²','10 m²','20 m²'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'Combien coûte l\'appartement par mois ?', choices:['700 euros','500 euros','800 euros','600 euros'], correct:0 },

  { type:'dictee', label:'Dictée', word:'Majhen', phonetic:'[MAY-hen]', hint:'Petit (masculin) — 6 lettres' },
  { type:'dictee', label:'Dictée', word:'Največ', phonetic:'[NAY-vech]', hint:'Le plus / Le maximum — 6 lettres' },

  { type:'dialogue', label:'À toi !', lines:[
    {speaker:'Ana',  text:'Kakšen je tvoj stan ?', side:'left'},
    {speaker:'Toi',  text:'Moj stan je ___ in ___.',  side:'right', blank:'nov', hint:'nouveau masc. → nov'},
    {speaker:'Ana',  text:'Je drag ali poceni ?', side:'left'},
    {speaker:'Toi',  text:'Je malo ___.', side:'right', blank:'drag', hint:'cher → drag'},
  ]},
];
