// ═══════════════════════════════════════════
// 1-4 — Alphabet & phonétique — 3
//        LJ NJ R vocalique — lire des mots réels
// ═══════════════════════════════════════════
const EX_1_4 = [
  { type:'presentation', label:'Sons combinés', word:'LJ — NJ', phonetic:'[ly] [ny]', noTTS:true, translation:'Deux lettres = un seul son !',
    cultural:{title:'Les digrammes slovènes', text:'LJ et NJ sont deux lettres qui forment UN seul son. LJ = [ly] comme dans "million" ou "milieu". NJ = [ny] comme dans "agneau" ou "Espagne". Ce sont les sons les plus caractéristiques du slovène !'},
    histoire:{title:'Voisins et influences', text:'Le slovène a absorbé des mots de tous ses voisins : allemand (šunka = jambon, de Schinken), italien (žlica = cuillère, de lessico), hongrois, et même turc. Cette position carrefour entre Europe centrale et méditerranée a façonné une langue riche et unique.'} },

  { type:'presentation', label:'LJ = [ly]', word:'LJ', phonetic:'[ly] — comme "mi-LIEU"', noTTS:true, translation:'Pense à : million, milieu, fille',
    cultural:{title:'LJ dans les mots', text:'"Ljubljana" = [lyub-LYA-na]. "Polje" [POL-lye] = champ. "Volja" [VOL-lya] = volonté. C\'est le son [ly] de "million" ou le "ll" espagnol de "llegar" !'} },
  { type:'tts_repeat', label:'Écoute et répète', word:'Ljubljana — Polje — Volja — Ljubezen', phonetic:'[lyub-LYA-na] [POL-lye] [VOL-lya] [lyu-BE-zen]', translation:'Ljubljana — Champ — Volonté — Amour' },
  { type:'qcm', label:'QCM', question:'"LJ" dans "Ljubljana" se prononce comme…',
    choices:['Le "ll" dans "million"','Le "l" seul dans "lune"','Le "j" dans "jardin"','Le "gl" dans "glace"'], correct:0 },

  { type:'presentation', label:'NJ = [ny]', word:'NJ', phonetic:'[ny] — comme "a-GNEAU"', noTTS:true, translation:'Pense à : agneau, Espagne, vigne',
    cultural:{title:'NJ dans les mots', text:'"Konj" [KONY] = cheval. "Jesen" [YE-sen] = automne. "Njiva" [NYI-va] = champ cultivé. C\'est le son [ñ] espagnol de "España" ou le "gn" français d\'agneau !'} },
  { type:'tts_repeat', label:'Écoute et répète', word:'Konj — Jesen — Ponje — Njiva', phonetic:'[KONY] [YE-sen] [PON-ye] [NYI-va]', translation:'Cheval — Automne — Foulard — Champ' },
  { type:'qcm', label:'QCM', question:'"NJ" se prononce comme…',
    choices:['Le "gn" dans "agneau"','Le "n" dans "nuit"','Le "ng" dans "parking"','Le "nj" = deux sons séparés'], correct:0 },

  { type:'matching', label:'LJ et NJ → sons', pairs:[
    {sl:'LJ',       fr:'[ly] — million, milieu'},
    {sl:'NJ',       fr:'[ny] — agneau, vigne'},
    {sl:'Ljubljana',fr:'[lyub-LYA-na]'},
    {sl:'Konj',     fr:'[KONY] — cheval'},
    {sl:'Ljubezen', fr:'[lyu-BE-zen] — amour'},
  ]},

  { type:'presentation', label:'Le R vocalique', word:'R', phonetic:'[r] roulé — peut être voyelle !', noTTS:true, translation:'Le R slovène est toujours prononcé — même seul !',
    cultural:{title:'R comme voyelle', text:'En slovène, R peut être une voyelle à part entière ! "Krk" [KRRK] = île croate connue. "Prst" [PRRST] = doigt. "Srce" [SRR-tse] = cœur. Impressionnant non ? C\'est le R roulé slave, il remplace parfois une voyelle complètement !'} },
  { type:'tts_repeat', label:'Écoute et répète', word:'Srce — Prst — Trg — Krt', phonetic:'[SRR-tse] [PRRST] [TRRG] [KRRT]', translation:'Cœur — Doigt — Place (ville) — Taupe' },
  { type:'qcm', label:'QCM', question:'"Srce" (cœur) s\'écrit sans voyelle entre S et R. Comment le prononce-t-on ?',
    choices:['Le R roule et fait voyelle : [SRR-tse]','On ajoute un E : [SE-re-tse]','On dit juste [S-tse]','On ne prononce pas le R'], correct:0 },

  { type:'presentation', label:'La lettre J', word:'J', phonetic:'[y] — comme "YEUX"', noTTS:true, translation:'J en slovène = Y en français ! Jamais [dj] ni [zh]',
    cultural:{title:'J = Y', text:'"Jaz" [YAZ] = je/moi. "Jutro" [YU-tro] = matin. "Jesen" [YE-sen] = automne. Le J slovène est identique au Y français dans "yeux", "yoga", "yoyo". Pas le son [dj] de l\'anglais !'} },
  { type:'tts_repeat', label:'Écoute et répète', word:'Jaz — Jutro — Jesen — Jabolko', phonetic:'[YAZ] [YU-tro] [YE-sen] [YAB-lo-ko]', translation:'Je/Moi — Matin — Automne — Pomme' },

  { type:'presentation', label:'Révision complète', word:'C   Č   Š   Ž   LJ   NJ   J   R', phonetic:'[ts] [tch] [ch] [j] [ly] [ny] [y] [rr]', noTTS:true, translation:'Résumons tout !',
    cultural:{title:'La clé du slovène', text:'Tu connais maintenant tous les sons difficiles. Le reste des lettres = comme en français. Tu peux déjà LIRE du slovène à voix haute correctement !'} },
  { type:'matching', label:'Récap de tous les sons', pairs:[
    {sl:'J',  fr:'[y] — yeux, yoga'},
    {sl:'C',  fr:'[ts] — tsar'},
    {sl:'Č',  fr:'[tch] — match'},
    {sl:'Š',  fr:'[ch] — chat'},
    {sl:'Ž',  fr:'[j] — jardin'},
  ]},
  { type:'matching', label:'Sons combinés', pairs:[
    {sl:'LJ',       fr:'[ly] — million'},
    {sl:'NJ',       fr:'[ny] — agneau'},
    {sl:'R vocalique', fr:'[rr] — peut remplacer une voyelle'},
    {sl:'V final',  fr:'[u̯] — s\'affaiblit'},
    {sl:'H',        fr:'[h] aspiré — comme en anglais'},
  ]},

  { type:'tts_repeat', label:'Lis ces mots maintenant !', word:'Ljubljana — Zdravo — Čas — Šola — Žena — Konj', phonetic:'[lyub-LYA-na] [ZDRA-vo] [TCHAS] [CHO-la] [ZHE-na] [KONY]', translation:'Ljubljana — Bonjour — Temps — École — Femme — Cheval' },
  { type:'dictee', label:'Dictée', word:'Ljubljana', phonetic:'[lyub-LYA-na]', hint:'La capitale — 9 lettres' },
  { type:'dictee', label:'Dictée', word:'Ljubezen', phonetic:'[lyu-BE-zen]', hint:'Amour — 8 lettres' },
  { type:'reconstruct', label:'Reconstitue', sentence:'Jaz govorim slovensko.', words:['Jaz','govorim','slovensko','.'] },
];
