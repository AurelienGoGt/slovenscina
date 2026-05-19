// ═══════════════════════════════════════════
// 1-2 — Alphabet & phonétique — 1
//        Voyelles, consonnes simples, accent
// ═══════════════════════════════════════════
const EX_1_2 = [
  { type:'presentation', label:'Introduction', word:'Abeceda', phonetic:'[a-be-TSE-da]', translation:'L\'alphabet slovène — 25 lettres',
    cultural:{title:'Le slovène est phonétique !', text:"C'est la grande chance pour toi : en slovène, chaque lettre a TOUJOURS le même son. Pas d'exceptions. Si tu lis la lettre, tu sais comment la prononcer. C'est l'opposé du français !"},
    histoire:{title:'25 lettres seulement', text:"L'alphabet slovène n'a que 25 lettres. Il utilise l'alphabet latin comme le français, avec 3 lettres spéciales : Č, Š, Ž. Les lettres Q, W, X, Y n'existent que dans les mots étrangers. Résultat : chaque lettre = un son unique, toujours identique."} },

  { type:'presentation', label:'Les voyelles', word:'A  —  E  —  I  —  O  —  U', phonetic:'[a]   [e]   [i]   [o]   [u]', translation:'Comme en espagnol — toujours claires !', noTTS:true,
    cultural:{title:'Voyelles pures', text:'Les voyelles slovènes sont pures et constantes. "A" = toujours [a], jamais [ã] ou [â]. "E" = toujours [e], jamais [ɛ] ou muet. Beaucoup plus simple qu\'en français !'} },

  { type:'tts_repeat', label:'Écoute et répète les voyelles', word:'Ana — Ema — Iva — Oto — Uma', phonetic:'[A-na] [E-ma] [I-va] [O-to] [U-ma]', translation:'5 prénoms slovènes — une voyelle par prénom' },

  { type:'matching', label:'Voyelles → sons', pairs:[
    {sl:'A', fr:'[a] — comme dans "papa"'},
    {sl:'E', fr:'[e] — comme dans "été"'},
    {sl:'I', fr:'[i] — comme dans "île"'},
    {sl:'O', fr:'[o] — comme dans "mot"'},
    {sl:'U', fr:'[u] — comme dans "lune"'},
  ]},

  { type:'qcm', label:'QCM', question:'"Mama" se prononce…',
    choices:['[MA-ma] — les deux A sont identiques','[mam] — le A final est muet','[mɑ̃-ma] — nasalisé','[me-ma] — le premier A devient E'], correct:0 },
  { type:'qcm', label:'QCM', question:'En slovène, la lettre "E" se prononce :',
    choices:['Toujours [e] comme "été"','Parfois muet comme en français','Comme [ɛ] dans "fête"','Ça dépend de la position'], correct:0 },

  { type:'presentation', label:'Consonnes simples', word:'B  D  F  G  H  K  L  M  N  P  R  S  T  V  Z', phonetic:'identiques au français', translation:'Ces consonnes sonnent comme en français !', noTTS:true,
    cultural:{title:'Bonne nouvelle !', text:'La majorité des consonnes slovènes sonnent exactement comme en français. Pas de surprise pour B, D, F, G, H, K, L, M, N, P, T, V, Z. Tu les connais déjà !'} },

  { type:'tts_repeat', label:'Écoute et répète', word:'Bela — Dom — Leto — Miza — Voda', phonetic:'[BE-la] [DOM] [LE-to] [MI-za] [VO-da]', translation:'Blanc — Maison — Été/An — Table — Eau' },

  { type:'matching', label:'Mots simples → traduction', pairs:[
    {sl:'Bela',  fr:'Blanc(he)'},
    {sl:'Dom',   fr:'Maison / Foyer'},
    {sl:'Leto',  fr:'Été / An'},
    {sl:'Miza',  fr:'Table'},
    {sl:'Voda',  fr:'Eau'},
  ]},

  { type:'fill', label:'Phrase à trous',
    sentence:['___ je dobra. (L\'eau est bonne)'],
    blank:'Voda', bank:['Voda','Bela','Dom','Miza'] },

  { type:'presentation', label:"L'accent tonique", word:'Accent — LIBRE', phonetic:'variable selon les mots', noTTS:true, translation:"L'accent peut tomber sur n'importe quelle syllabe",
    cultural:{title:'Règle pratique', text:'En slovène standard, l\'accent est souvent sur la première syllabe (DOM, LE-to, MI-za). Mais pas toujours. La phonétique entre crochets [ ] dans cette app te montre toujours la syllabe accentuée en MAJUSCULES !'} },

  { type:'tts_repeat', label:'Écoute l\'accent', word:'DOBro — leTAlo — slovenSČIna', phonetic:'[DOB-ro] [le-TA-lo] [slo-ven-SHCHI-na]', translation:'Bien — Avion — Langue slovène' },

  { type:'qcm', label:'QCM', question:'Dans "Ljubljana", quelle syllabe est accentuée ?',
    choices:['LjuB-LJA-na — la 2ème','LJU-blja-na — la 1ère','Ljub-lja-NA — la 3ème','Elles sont toutes égales'], correct:0 },

  { type:'presentation', label:'La lettre V', word:'V — attention !', phonetic:'[v] au début, [u̯] à la fin', noTTS:true, translation:'V en début = [v] comme "vin". V ailleurs = proche de [u]',
    cultural:{title:'Le V particulier', text:'En début de mot : "Voda" = [VO-da]. Mais dans "zdravo", le V final s\'affaiblit. Et "v" = "dans" (préposition) se prononce parfois [u] : "v mestu" = [u MEST-u]. Ne t\'inquiète pas — ça viendra naturellement !'} },

  { type:'tts_repeat', label:'Écoute et répète', word:'Vino — Visok — Zdravo — V redu', phonetic:'[VI-no] [VI-sok] [ZDRA-vo] [u RE-du]', translation:'Vin — Grand (de taille) — Bonjour — D\'accord / OK' },

  { type:'matching', label:'Lettre V → prononciation', pairs:[
    {sl:'Voda',    fr:'[VO-da] — V début = [v]'},
    {sl:'Vino',    fr:'[VI-no] — V début = [v]'},
    {sl:'Zdravo',  fr:'[ZDRA-vo] — V final s\'affaiblit'},
    {sl:'V redu',  fr:'[u RE-du] — V préposition = [u]'},
    {sl:'Visok',   fr:'[VI-sok] — grand (de taille)'},
  ]},

  { type:'fill', label:'Phrase à trous',
    sentence:['___ redu ! Hvala. (D\'accord ! Merci.)'],
    blank:'V', bank:['V','Na','Za','Pri'] },

  { type:'tts_repeat', label:'Écoute et répète — R roulé', word:'Rdeča — riba — radio', phonetic:'[R-de-cha] [RI-ba] [RA-dyo]', translation:'Rouge — Poisson — Radio' },

  { type:'presentation', label:'LJ = [ly]', word:'LJ', phonetic:'[ly] — comme "mi-LLION"', noTTS:true, translation:'Deux lettres, un seul son : [ly] comme dans "million"',
    cultural:{title:'LJ en slovène', text:'"Ljubljana" [lyub-LYA-na] = la capitale. "Ljubezen" [lyu-BE-zen] = amour. "Boljši" [BOL-yshi] = meilleur. LJ est techniquement une seule lettre en slovène — comme Š ou Č. Le son est identique au "ll" espagnol ou au "gli" italien !'} },

  { type:'tts_repeat', label:'Écoute et répète — LJ', word:'Ljubljana — ljubezen — boljši', phonetic:'[lyub-LYA-na] [lyu-BE-zen] [BOL-yshi]', translation:'Ljubljana — Amour — Meilleur' },

  { type:'qcm', label:'QCM', question:'Comment lit-on "Lj" en slovène ?',
    choices:['[ly] comme dans "million"','[lj] — deux sons séparés','[j] comme dans "jardin"','[l] comme dans "lune"'], correct:0 },

  { type:'presentation', label:'R syllabique', word:'R vocalique', phonetic:'[er] — le R joue le rôle de voyelle', noTTS:true, translation:'En slovène, R peut être une voyelle à part entière',
    cultural:{title:'R comme voyelle', text:'C\'est le R tchèque ou serbe — une consonne qui joue le rôle de voyelle. "Trg" [TERG] = place (marché public). "Prst" [PERST] = doigt. En slovène standard écrit, ce R s\'entend comme [er]. Impressionnant non ?'} },

  { type:'tts_repeat', label:'Écoute et répète — R vocalique', word:'Trg — prst — srce', phonetic:'[TERG] [PERST] [SER-tse]', translation:'Place/marché — Doigt — Cœur' },

  { type:'fill', label:'Phrase à trous',
    sentence:['___ je bela. (Ljubljana est blanche.)'],
    blank:'Ljubljana', bank:['Ljubljana','Slovenija','Avstrija','Italija'] },

  { type:'qcm', label:'QCM', question:'Le "R" dans "trg" (place) joue le rôle de…',
    choices:['Voyelle (voyelle syllabique)','Consonne muette','Double consonne','Son identique au R français'], correct:0 },

  { type:'reconstruct', label:'Reconstitue', sentence:'Voda je dobra.', words:['Voda','je','dobra','.'] },

  { type:'story', label:'Histoire', title:'La première leçon d\'Ana',
    narration:"Ana, étudiante française, arrive en Slovénie pour la première fois. Son prof slovène Marko lui explique pourquoi le slovène est facile à lire.",
    dialogue:[
      {speaker:'Marko', text:'Ana, le slovène est phonétique !', side:'left'},
      {speaker:'Ana',   text:'Que veut dire phonétique ?', side:'right'},
      {speaker:'Marko', text:'Vsaka črka ima en glas. Vselej.', side:'left'},
      {speaker:'Ana',   text:'Toujours le même son ?', side:'right'},
      {speaker:'Marko', text:'Da ! Bela, miza, voda — beri točno kot pišeš.', side:'left'},
      {speaker:'Ana',   text:'Odlično ! To je lažje kot francoščina.', side:'right'},
    ],
    translation:{
      'Vsaka črka ima en glas. Vselej.':'Chaque lettre a un son. Toujours.',
      'Da ! Bela, miza, voda — beri točno kot pišeš.':'Oui ! Blanc, table, eau — lis exactement comme tu écris.',
      'Odlično ! To je lažje kot francoščina.':'Excellent ! C\'est plus facile que le français.',
    }
  },

  { type:'qcm', label:'QCM histoire', question:'Que signifie "phonétique" selon Marko ?', choices:['Chaque lettre a toujours le même son','La langue est musicale','On peut chanter les mots','Il y a beaucoup de voyelles'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'Ana pense que le slovène est…', choices:['Plus facile que le français','Plus difficile que le français','Identique au français','Impossible à apprendre'], correct:0 },
  { type:'qcm', label:'QCM', question:'"Bela" signifie…', choices:['Blanc(he)','Eau','Table','Maison'], correct:0 },

  { type:'dictee', label:'Dictée', word:'Dobro', phonetic:'[DOB-ro]', hint:'Bien / Bonjour (matin) — 5 lettres' },
  { type:'dictee', label:'Dictée', word:'Ljubljana', phonetic:'[lyub-LYA-na]', hint:'La capitale — 9 lettres' },

  { type:'dialogue', label:'À toi !', lines:[
    {speaker:'Marko', text:'Kako se reče "eau" po slovensko ?', side:'left'},
    {speaker:'Toi',   text:'___ !', side:'right', blank:'Voda', hint:'eau → Voda'},
    {speaker:'Marko', text:'Bravo ! In "maison" ?', side:'left'},
    {speaker:'Toi',   text:'___!', side:'right', blank:'Dom', hint:'maison → Dom'},
  ]},
];
