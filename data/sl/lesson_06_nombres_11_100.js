// ═══════════════════════════════════════════
// 1-6 — Nombres 11 à 100
// ═══════════════════════════════════════════
const EX_1_6 = [
  { type:'presentation', label:'11 à 19 — la règle -najst', word:'Enajst — Dvanajst — Trinajst', phonetic:'[E-nayest] [DVA-nayest] [TRI-nayest]', translation:'11 — 12 — 13',
    cultural:{title:'La règle est simple !', text:'De 11 à 19 : chiffre + "najst". Ena+najst = 11, dve+najst = 12, tri+najst = 13... Exactement comme "seven-teen" en anglais mais encore plus régulier. Aucune exception !'},
    histoire:{title:'Sous l\'Empire austro-hongrois', text:'De 1282 à 1918, les terres slovènes faisaient partie de l\'Empire des Habsbourg. Ljubljana s\'appelait Laibach en allemand. Malgré cela, les Slovènes ont préservé leur langue et leur identité. La dissolution de l\'Autriche-Hongrie en 1918 fut le premier pas vers l\'indépendance.'} },
  { type:'tts_repeat', label:'11 à 15', word:'Enajst, dvanajst, trinajst, štirinajst, petnajst', phonetic:'[E-nayest, DVA-nayest, TRI-nayest, chti-ri-NAYEST, pet-NAYEST]', translation:'11, 12, 13, 14, 15' },
  { type:'tts_repeat', label:'16 à 19', word:'Šestnajst, sedemnajst, osemnajst, devetnajst', phonetic:'[chest-NAYEST, se-dem-NAYEST, o-sem-NAYEST, de-vet-NAYEST]', translation:'16, 17, 18, 19' },
  { type:'matching', label:'11-19 → français', pairs:[
    {sl:'11 — enajst',     fr:'onze'},
    {sl:'12 — dvanajst',   fr:'douze'},
    {sl:'15 — petnajst',   fr:'quinze'},
    {sl:'18 — osemnajst',  fr:'dix-huit'},
    {sl:'19 — devetnajst', fr:'dix-neuf'},
  ]},
  { type:'qcm', label:'QCM', question:'Comment dit-on "14" ?', choices:['Štirinajst','Štirideset','Štiri','Štiristoštiri'], correct:0 },

  { type:'presentation', label:'Les dizaines', word:'Dvajset — Trideset — Štirideset', phonetic:'[DVA-yset] [TRI-deset] [CHTI-ri-deset]', translation:'20 — 30 — 40',
    cultural:{title:'Logique des dizaines', text:'20 = dvajset (spécial). Mais 30, 40, 50... = chiffre + "deset" (dix). Tri+deset = 30, štiri+deset = 40. Très régulier !'} },
  { type:'tts_repeat', label:'Dizaines', word:'Dvajset, trideset, štirideset, petdeset, šestdeset', phonetic:'[DVA-yset, TRI-deset, chti-ri-DESET, pet-DESET, chest-DESET]', translation:'20, 30, 40, 50, 60' },
  { type:'tts_repeat', label:'Dizaines suite', word:'Sedemdeset, osemdeset, devetdeset', phonetic:'[se-dem-DESET, o-sem-DESET, de-vet-DESET]', translation:'70, 80, 90' },
  { type:'matching', label:'Dizaines → français', pairs:[
    {sl:'20 — dvajset',    fr:'vingt'},
    {sl:'30 — trideset',   fr:'trente'},
    {sl:'50 — petdeset',   fr:'cinquante'},
    {sl:'70 — sedemdeset', fr:'soixante-dix'},
    {sl:'90 — devetdeset', fr:'quatre-vingt-dix'},
  ]},

  { type:'presentation', label:'Les nombres composés', word:'21 = Enaindvajset', phonetic:'[e-na-in-DVA-yset]', translation:'"Un-et-vingt" — logique !',
    cultural:{title:'Structure des composés', text:'En slovène, les nombres composés = unité + "in" (et) + dizaine. 21 = ena+in+dvajset = "un et vingt". 35 = pet+in+trideset = "cinq et trente". Comme l\'allemand !'} },
  { type:'tts_repeat', label:'Nombres composés', word:'Enaindvajset, petintrideset, sedemindvajset', phonetic:'[e-na-in-DVA-yset] [pe-tin-TRI-deset] [se-dem-in-DVA-yset]', translation:'21, 35, 27' },
  { type:'fill', label:'Phrase à trous', sentence:['Imam ___ let. (J\'ai 25 ans.)'], blank:'petindvajset', bank:['petindvajset','štirideset','enajst','sedemindvajset'] },
  { type:'qcm', label:'QCM', question:'Comment dit-on "33" ?', choices:['Triintrideset','Trideset tri','Tri trideset','Trinajsttri'], correct:0 },
  { type:'dictee', label:'Dictée', word:'Dvajset', phonetic:'[DVA-yset]', hint:'20 — 7 lettres' },
  { type:'dictee', label:'Dictée', word:'Petdeset', phonetic:'[PET-deset]', hint:'50 — 8 lettres' },
  { type:'reconstruct', label:'Reconstitue', sentence:'Imam triindvajset let.', words:['Imam','triindvajset','let','.'] },
];
