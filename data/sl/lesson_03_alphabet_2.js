// ═══════════════════════════════════════════
// 1-3 — Alphabet & phonétique — 2
//        Š Ž Č C — les sons spéciaux
// ═══════════════════════════════════════════
const EX_1_3 = [
  { type:'presentation', label:'Les 4 lettres spéciales', word:'Š  —  Ž  —  Č  —  C', phonetic:'[ch]   [j]   [tch]   [ts]', translation:'Ces 4 lettres n\'existent pas en français — mais leurs sons oui !', noTTS:true,
    cultural:{title:'Les diacritiques slovènes', text:'Le slovène utilise le háček (ˇ) pour transformer les sons : S→Š, Z→Ž, C→Č. C\'est le système phonétique slave. Une fois mémorisé, tu liras TOUT le slovène correctement !'},
    histoire:{title:'46 dialectes !', text:'La Slovénie est minuscule (20 000 km²) mais compte 46 dialectes régionaux ! Un Slovène de Prekmurje (est) et un de Primorska (ouest) peuvent avoir du mal à se comprendre. Le slovène standard (knjižni jezik) est appris à l\'école depuis le XIXe siècle.'} },

  { type:'presentation', label:'Š = [ch]', word:'Š', phonetic:'[ch] — comme "CHAT"', noTTS:true, translation:'"S" avec háček = son CH du français',
    cultural:{title:'Exemples avec Š', text:'"Šola" [CHO-la] = école. "Šest" [CHEST] = six. "Košček" [KOSH-chek] = morceau. Le Š est très fréquent en slovène — tu vas le voir partout !'} },

  { type:'tts_repeat', label:'Écoute et répète — Š', word:'Šola — Šest — Košček — Še — Šunka', phonetic:'[CHO-la] [CHEST] [KOSH-chek] [CHE] [CHUN-ka]', translation:'École — Six — Morceau — Encore — Jambon' },

  { type:'qcm', label:'QCM', question:'"Šola" se prononce…',
    choices:['[CHO-la] — comme "chola"','[SO-la] — comme "sola"','[ZO-la] — comme "zola"','[SHO-la] — son anglais'], correct:0 },
  { type:'qcm', label:'QCM', question:'Le háček sur le S donne quel son ?',
    choices:['[ch] comme dans "chat"','[s] comme dans "son"','[z] comme dans "zoo"','[j] comme dans "jardin"'], correct:0 },

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

  { type:'fill', label:'Phrase à trous',
    sentence:['___ je dobra ! (La route est bonne !)'],
    blank:'Cesta', bank:['Cesta','Šola','Žena','Cena'] },
  { type:'fill', label:'Phrase à trous',
    sentence:['Koliko je ___? (Combien de temps ?)'],
    blank:'čas', bank:['čas','cena','cesta','konec'] },

  { type:'presentation', label:'Nj = [gn]', word:'NJ', phonetic:'[gn] — comme "Espa-GNE"', noTTS:true, translation:'Deux lettres, un seul son : [gn] comme dans "vigne" ou "Espagne"',
    cultural:{title:'Nj dans l\'alphabet slovène', text:'Nj est une seule lettre en slovène, comme Lj. "Njiva" [GNI-va] = champ cultivé. "Konj" [KOGN] = cheval. Le son est identique au "gn" français d\'agneau, vigne, Espagne — ou au "ñ" espagnol !'} },

  { type:'tts_repeat', label:'Écoute et répète — NJ', word:'Konj — njiva — Slovenija', phonetic:'[KOGN] [GNI-va] [slo-VE-ni-ya]', translation:'Cheval — Champ — Slovénie' },

  { type:'qcm', label:'QCM', question:'Comment prononce-t-on "Nj" ?',
    choices:['[gn] comme dans "Espagne"','[nj] — deux sons séparés','[n] comme dans "nuit"','[ny] comme dans "agneau"'], correct:0 },

  { type:'presentation', label:'Dž = [dj/dz]', word:'DŽ', phonetic:'[dj] — comme "DJing"', noTTS:true, translation:'Rare en slovène — surtout dans les emprunts étrangers',
    cultural:{title:'Dž : la 3e lettre composée', text:'Dž est la 3e lettre composée de l\'alphabet slovène avec Lj et Nj. On la trouve presque uniquement dans les mots d\'emprunt. "Džungla" [DZUN-gla] = jungle. "Džez" [DZEZ] = jazz. En slovène natif, ce son est extrêmement rare.'} },

  { type:'tts_repeat', label:'Récap — les 6 sons spéciaux', word:'Šola, žena, čas, cena, Ljubljana, konj', phonetic:'[CHO-la] [ZHE-na] [TCHAS] [TSE-na] [lyub-LYA-na] [KOGN]', translation:'École — Femme — Temps — Prix — Ljubljana — Cheval' },

  { type:'fill', label:'Phrase à trous',
    sentence:['___ je lep. (Le cheval est beau.)'],
    blank:'Konj', bank:['Konj','Šola','Cena','Žena'] },

  { type:'matching', label:'Lettres spéciales → exemples', pairs:[
    {sl:'Š', fr:'Šola (école)'},
    {sl:'Ž', fr:'Žena (femme)'},
    {sl:'Č', fr:'Čas (temps)'},
    {sl:'C', fr:'Cena (prix)'},
    {sl:'Lj', fr:'Ljubljana (capitale)'},
  ]},

  { type:'qcm', label:'QCM', question:'"Konj" (cheval) se prononce…',
    choices:['[KOGN] — le Nj = gn comme Espagne','[KON-y] — deux sons séparés','[KON-j] — j comme jardin','[KONJ] — le J se prononce'], correct:0 },

  { type:'reconstruct', label:'Reconstitue', sentence:'Cena je dobra.', words:['Cena','je','dobra','.'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Ljubljana je lepa.', words:['Ljubljana','je','lepa','.'] },

  { type:'story', label:'Histoire', title:'Emma apprend les lettres spéciales',
    narration:"Emma, étudiante française, essaie de lire un menu slovène dans un café de Ljubljana. Elle reconnaît les lettres spéciales.",
    dialogue:[
      {speaker:'Emma',   text:'Oprostite, je tu cena za kavo ?', side:'left'},
      {speaker:'Nataša', text:'Da, to je cena. Ena kava — dva evra.', side:'right'},
      {speaker:'Emma',   text:'Hvala ! In kaj je "čas" ?', side:'left'},
      {speaker:'Nataša', text:'"Čas" pomeni "temps" ali "heure". Čas je denar !', side:'right'},
      {speaker:'Emma',   text:'Kako se reče "école" ?', side:'left'},
      {speaker:'Nataša', text:'"Šola" — [CHO-la]. Š kot "chat" !', side:'right'},
      {speaker:'Emma',   text:'Zdaj razumem ! Hvala lepa !', side:'right'},
    ],
    translation:{
      'Je tu cena za kavo ?':'C\'est le prix pour un café ?',
      'Da, to je cena. Ena kava — dva evra.':'Oui, c\'est le prix. Un café — deux euros.',
      'In kaj je "čas" ?':'Et qu\'est-ce que "čas" ?',
      '"Čas" pomeni "temps" ali "heure". Čas je denar !':'"Čas" signifie "temps" ou "heure". Le temps c\'est de l\'argent !',
      '"Šola" — [CHO-la]. Š kot "chat" !':'"Šola" — [CHO-la]. Š comme "chat" !',
      'Zdaj razumem ! Hvala lepa !':'Je comprends maintenant ! Merci beaucoup !',
    }
  },

  { type:'qcm', label:'QCM histoire', question:'Combien coûte un café ?', choices:['2 euros','1 euro','3 euros','50 centimes'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'"Čas je denar" signifie…', choices:['Le temps c\'est de l\'argent','L\'argent c\'est important','Quel est le prix ?','Le café coûte cher'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'Comment Nataša explique-t-elle le Š ?', choices:['Comme "chat" en français','Comme "zoo" en français','Comme "tsar"','Comme "jardin"'], correct:0 },

  { type:'dictee', label:'Dictée', word:'Šola', phonetic:'[CHO-la]', hint:'École — 4 lettres avec Š' },
  { type:'dictee', label:'Dictée', word:'Možno', phonetic:'[MOZH-no]', hint:'Possible — 6 lettres avec Ž' },
  { type:'dictee', label:'Dictée', word:'Žival', phonetic:'[ZHI-val]', hint:'Animal — 5 lettres avec Ž' },

  { type:'dialogue', label:'À toi !', lines:[
    {speaker:'Prof', text:'Kako se izgovori "Č" ?', side:'left'},
    {speaker:'Toi',  text:'Kot ___ v "match" !', side:'right', blank:'tch', hint:'le son de "match"'},
    {speaker:'Prof', text:'Bravo ! In "Ž" ?', side:'left'},
    {speaker:'Toi',  text:'Kot ___ v "jardin" !', side:'right', blank:'j', hint:'le J de jardin'},
  ]},
];
