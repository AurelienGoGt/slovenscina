// ═══════════════════════════════════════════
// 1-3 — Alphabet & phonétique — 2
//        Š Ž Č C — les sons spéciaux
// ═══════════════════════════════════════════
const EX_1_3 = [
  { type:'presentation', label:'Les 4 lettres spéciales', word:'Š  —  Ž  —  Č  —  C', phonetic:'[ch]   [j]   [tch]   [ts]', translation:'Ces 4 lettres n\'existent pas en français — mais leurs sons oui !', noTTS:true,
    cultural:{title:'Les diacritiques slovènes', text:'Le slovène utilise le háček (ˇ) pour transformer les sons : S→Š, Z→Ž, C→Č. C\'est le système phonétique slave. Une fois mémorisé, tu liras TOUT le slovène correctement !'},
    histoire:{title:'46 dialectes !', text:'La Slovénie est minuscule (20 000 km²) mais compte 46 dialectes régionaux ! Un Slovène de Prekmurje (est) et un de Primorska (ouest) peuvent avoir du mal à se comprendre. Le slovène standard (knjižni jezik) est appris à l\'école depuis le XIXe siècle.'} },

  { type:'presentation', label:'Š = [ch]', word:'Š', phonetic:'[ch] — comme "CHAT"', noTTS:true, translation:'"S" avec háček = son CH du français',
    cultural:{title:'Exemples avec Š', text:'"Šola" [CHO-la] = école. "Šest" [CHEST] = six. "Leš" [LECH] = corps. Le Š est très fréquent en slovène — tu vas le voir partout !'} },
  { type:'tts_repeat', label:'Écoute et répète — Š', word:'Šola — Šest — Šola — Košček — Še', phonetic:'[CHO-la] [CHEST] [CHO-la] [KOSH-chek] [CHE]', translation:'École — Six — École — Morceau — Encore' },
  { type:'qcm', label:'QCM', question:'"Šola" se prononce…',
    choices:['[CHO-la] — comme "chola"','[SO-la] — comme "sola"','[ZO-la] — comme "zola"','[SHO-la] — son anglais'], correct:0 },

  { type:'presentation', label:'Ž = [j]', word:'Ž', phonetic:'[j] — comme "JARDIN"', noTTS:true, translation:'"Z" avec háček = son J du français',
    cultural:{title:'Exemples avec Ž', text:'"Žena" [ZHE-na] = femme/épouse. "Živeti" [ZHI-ve-ti] = vivre. "Žival" [ZHI-val] = animal. Le son [j] de jardin, je, bonjour — exactement le même !'} },
  { type:'tts_repeat', label:'Écoute et répète — Ž', word:'Žena — Žival — Težko — Možno', phonetic:'[ZHE-na] [ZHI-val] [TEZH-ko] [MOZH-no]', translation:'Femme/épouse — Animal — Difficile — Possible' },
  { type:'qcm', label:'QCM', question:'"Ž" se prononce comme…',
    choices:['Le J dans "bonjour"','Le S dans "soupe"','Le CH dans "chat"','Le Z dans "zoo"'], correct:0 },

  { type:'presentation', label:'Č = [tch]', word:'Č', phonetic:'[tch] — comme "MATCH"', noTTS:true, translation:'"C" avec háček = son TCH',
    cultural:{title:'Exemples avec Č', text:'"Čas" [TCHAS] = temps/heure. "Človek" [TCHLO-vek] = personne/homme. "Leč" [LETCH] = sauf. Pense à "tchèque", "tchin-tchin", "match" — ce son exact !'} },
  { type:'tts_repeat', label:'Écoute et répète — Č', word:'Čas — Človek — Več — Učiti', phonetic:'[TCHAS] [TCHLO-vek] [VETCH] [u-TCHI-ti]', translation:'Temps — Personne — Plus/Davantage — Apprendre' },
  { type:'matching', label:'Š Ž Č → sons', pairs:[
    {sl:'Š', fr:'[ch] — chat, chocolat'},
    {sl:'Ž', fr:'[j] — jardin, je, bonjour'},
    {sl:'Č', fr:'[tch] — match, tchèque'},
    {sl:'C', fr:'[ts] — tsar, tsunami'},
  ]},

  { type:'presentation', label:'C = [ts]', word:'C', phonetic:'[ts] — comme "TSAR"', noTTS:true, translation:'C sans háček = son TS (pas [k] ni [s] !)',
    cultural:{title:'Attention piège !', text:'"C" en slovène ne se prononce JAMAIS [k] comme en français (car, cave) ni [s] seul. C\'est toujours [ts]. "Cena" [TSE-na] = prix. "Car" [TSAR] = tsar/roi !'} },
  { type:'tts_repeat', label:'Écoute et répète — C', word:'Cena — Cvet — Cesta — Konec', phonetic:'[TSE-na] [TSVET] [TSES-ta] [KO-nets]', translation:'Prix — Fleur — Route — Fin' },
  { type:'qcm', label:'QCM', question:'"Cena" (prix) se prononce…',
    choices:['[TSE-na] — ts comme tsar','[SE-na] — s comme soupe','[KE-na] — k comme cave','[CHE-na] — ch comme chat'], correct:0 },

  { type:'matching', label:'Lis et traduis', pairs:[
    {sl:'Šola',    fr:'École'},
    {sl:'Žena',    fr:'Femme'},
    {sl:'Čas',     fr:'Temps'},
    {sl:'Cena',    fr:'Prix'},
    {sl:'Možno',   fr:'Possible'},
  ]},
  { type:'wordsearch', label:'Mots mêlés', words:['SOLA','ZENA','CAS','CENA'],
    grid:[
      ['S','O','L','A','C','E','N','A'],
      ['Z','E','N','A','K','N','M','P'],
      ['C','A','S','T','D','E','G','H'],
      ['A','B','C','D','E','F','J','K'],
      ['I','J','K','L','M','N','O','P'],
      ['Q','R','S','T','U','V','W','X'],
      ['Y','Z','A','B','C','D','E','F'],
      ['G','H','I','J','K','L','M','N'],
    ],
    positions:{
      'SOLA':[{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:0,c:3}],
      'ZENA':[{r:1,c:0},{r:1,c:1},{r:1,c:2},{r:1,c:3}],
      'CAS': [{r:2,c:0},{r:2,c:1},{r:2,c:2}],
      'CENA':[{r:0,c:4},{r:0,c:5},{r:0,c:6},{r:0,c:7}],
    }},
  { type:'dictee', label:'Dictée', word:'Šola', phonetic:'[CHO-la]', hint:'École — 4 lettres avec Š' },
  { type:'dictee', label:'Dictée', word:'Možno', phonetic:'[MOZH-no]', hint:'Possible — 6 lettres avec Ž' },
  { type:'reconstruct', label:'Reconstitue', sentence:'Cena je dobra.', words:['Cena','je','dobra','.'] },
];
