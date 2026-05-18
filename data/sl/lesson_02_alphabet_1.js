// ═══════════════════════════════════════════
// 1-2 — Alphabet & phonétique — 1
//        Voyelles, consonnes simples, accent
// ═══════════════════════════════════════════
const EX_1_2 = [
  { type:'presentation', label:'Introduction', word:'Abeceda', phonetic:'[a-be-TSE-da]', translation:'L\'alphabet slovène — 25 lettres',
    cultural:{title:'Le slovène est phonétique !', text:"C\'est la grande chance pour toi : en slovène, chaque lettre a TOUJOURS le même son. Pas d'exceptions. Si tu lis la lettre, tu sais comment la prononcer. C'est l\'opposé du français !"} },

  { type:'presentation', label:'Les voyelles', word:'A  —  E  —  I  —  O  —  U', phonetic:'[a]   [e]   [i]   [o]   [u]', translation:'Comme en espagnol — toujours claires !', noTTS:true,
    cultural:{title:'Voyelles pures', text:'Les voyelles slovènes sont pures et constantes. "A" = toujours [a], jamais [ã] ou [â]. "E" = toujours [e], jamais [ɛ] ou muet. Beaucoup plus simple qu\'en français !'} },
  { type:'tts_repeat', label:'Écoute et répète', word:'Ana — Ema — Iva — Oto — Uma', phonetic:'[A-na] [E-ma] [I-va] [O-to] [U-ma]', translation:'5 prénoms slovènes — une voyelle par prénom' },
  { type:'matching', label:'Voyelles → sons', pairs:[
    {sl:'A', fr:'[a] — comme dans "papa"'},
    {sl:'E', fr:'[e] — comme dans "été"'},
    {sl:'I', fr:'[i] — comme dans "île"'},
    {sl:'O', fr:'[o] — comme dans "mot"'},
    {sl:'U', fr:'[u] — comme dans "lune"'},
  ]},
  { type:'qcm', label:'QCM', question:'"Mama" se prononce…',
    choices:['[MA-ma] — les deux A sont identiques','[mam] — le A final est muet','[mɑ̃-ma] — nasalisé','[me-ma] — le premier A devient E'], correct:0 },

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

  { type:'presentation', label:"L'accent tonique", word:'Accent — LIBRE', phonetic:'variable selon les mots', noTTS:true, translation:"L'accent peut tomber sur n'importe quelle syllabe",
    cultural:{title:'Règle pratique', text:'En slovène standard, l\'accent est souvent sur la première syllabe (DOM, LE-to, MI-za). Mais pas toujours. La phonétique entre crochets [ ] dans cette app te montre toujours la syllabe accentuée en MAJUSCULES !'} },
  { type:'tts_repeat', label:'Écoute l\'accent', word:'DOBro — leTAlo — slovenSČIna', phonetic:'[DOB-ro] [le-TA-lo] [slo-ven-SHCHI-na]', translation:'Bien — Avion — Langue slovène' },
  { type:'qcm', label:'QCM', question:'Dans "Ljubljana", quelle syllabe est accentuée ?',
    choices:['LjuB-LJA-na — la 2ème','LJU-blja-na — la 1ère','Ljub-lja-NA — la 3ème','Elles sont toutes égales'], correct:0 },

  { type:'presentation', label:'La lettre V', word:'V — attention !', phonetic:'[v] au début, [u̯] à la fin', noTTS:true, translation:'V en début = [v] comme "vin". V ailleurs = proche de [u]',
    cultural:{title:'Le V particulier', text:'En début de mot : "Voda" = [VO-da]. Mais dans "zdravo", le V final s\'affaiblit. Et "v" = "dans" (préposition) se prononce parfois [u] : "v mestu" = [u MEST-u]. Ne t\'inquiète pas — ça viendra naturellement !'} },
  { type:'tts_repeat', label:'Écoute et répète', word:'Vino — Visok — Zdravo — V redu', phonetic:'[VI-no] [VI-sok] [ZDRA-vo] [u RE-du]', translation:'Vin — Grand (de taille) — Bonjour — D\'accord / OK' },

  { type:'wordsearch', label:'Mots mêlés — voyelles', words:['ANA','EMA','OTO','VODA','BELA'],
    grid:[
      ['A','N','A','V','O','D','A','S'],
      ['B','E','L','A','K','N','M','P'],
      ['E','M','A','T','D','E','G','H'],
      ['O','T','O','E','E','F','J','K'],
      ['A','B','C','D','E','F','G','H'],
      ['I','J','K','L','M','N','O','P'],
      ['Q','R','S','T','U','V','W','X'],
      ['Y','Z','A','B','C','D','E','F'],
    ],
    positions:{
      'ANA': [{r:0,c:0},{r:0,c:1},{r:0,c:2}],
      'EMA': [{r:2,c:0},{r:2,c:1},{r:2,c:2}],
      'OTO': [{r:3,c:0},{r:3,c:1},{r:3,c:2}],
      'VODA':[{r:0,c:3},{r:0,c:4},{r:0,c:5},{r:0,c:6}],
      'BELA':[{r:1,c:0},{r:1,c:1},{r:1,c:2},{r:1,c:3}],
    }},
  { type:'dictee', label:'Dictée', word:'Dobro', phonetic:'[DOB-ro]', hint:'Bien / Bonjour (matin) — 5 lettres' },
  { type:'reconstruct', label:'Reconstitue', sentence:'Voda je dobra.', words:['Voda','je','dobra','.'] },
];
