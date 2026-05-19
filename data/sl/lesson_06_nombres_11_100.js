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
  { type:'qcm', label:'QCM', question:'"Sedemnajst" signifie…', choices:['17','7','70','57'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['Vlak prihaja ob ___ uri. (Le train arrive à 13h.)'], blank:'trinajst', bank:['trinajst','trideset','trinajstih','tri'] },

  { type:'dictee', label:'Dictée', word:'Enajst', phonetic:'[E-nayest]', hint:'11 — 6 lettres' },

  { type:'presentation', label:'Les dizaines', word:'Dvajset — Trideset — Štirideset', phonetic:'[DVA-yset] [TRI-deset] [CHTI-ri-deset]', translation:'20 — 30 — 40',
    cultural:{title:'Logique des dizaines', text:'20 = dvajset (forme spéciale). Mais 30, 40, 50... = chiffre + "deset" (dix). Tri+deset = 30, štiri+deset = 40. Très régulier !'} },

  { type:'tts_repeat', label:'Dizaines 20-60', word:'Dvajset, trideset, štirideset, petdeset, šestdeset', phonetic:'[DVA-yset, TRI-deset, chti-ri-DESET, pet-DESET, chest-DESET]', translation:'20, 30, 40, 50, 60' },
  { type:'tts_repeat', label:'Dizaines 70-100', word:'Sedemdeset, osemdeset, devetdeset, sto', phonetic:'[se-dem-DESET, o-sem-DESET, de-vet-DESET, STO]', translation:'70, 80, 90, 100' },

  { type:'matching', label:'Dizaines → français', pairs:[
    {sl:'20 — dvajset',    fr:'vingt'},
    {sl:'30 — trideset',   fr:'trente'},
    {sl:'50 — petdeset',   fr:'cinquante'},
    {sl:'70 — sedemdeset', fr:'soixante-dix'},
    {sl:'90 — devetdeset', fr:'quatre-vingt-dix'},
  ]},

  { type:'qcm', label:'QCM', question:'"Osemdeset" signifie…', choices:['80','8','800','18'], correct:0 },
  { type:'qcm', label:'QCM', question:'Comment dit-on "100" en slovène ?', choices:['Sto','Cem','Cent','Sто'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['Avtobus gre vsak ___ minut. (Le bus passe toutes les 20 minutes.)'], blank:'dvajset', bank:['dvajset','dvanajst','petdeset','trideset'] },

  { type:'dictee', label:'Dictée', word:'Petdeset', phonetic:'[PET-deset]', hint:'50 — 8 lettres' },

  { type:'presentation', label:'Les nombres composés', word:'21 = Enaindvajset', phonetic:'[e-na-in-DVA-yset]', translation:'"Un-et-vingt" — logique !',
    cultural:{title:'Structure des composés', text:'En slovène, les nombres composés = unité + "in" (et) + dizaine. 21 = ena+in+dvajset = "un et vingt". 35 = pet+in+trideset = "cinq et trente". Comme l\'allemand (einundzwanzig) !'} },

  { type:'tts_repeat', label:'Nombres composés 21-35', word:'Enaindvajset, petintrideset, osemintrideset', phonetic:'[e-na-in-DVA-yset] [pe-tin-TRI-deset] [o-sem-in-TRI-deset]', translation:'21, 35, 38' },
  { type:'tts_repeat', label:'Nombres composés 48-99', word:'Osemštirideset, devetindevetdeset', phonetic:'[o-sem-chti-ri-DESET] [de-vet-in-de-vet-DESET]', translation:'48, 99' },

  { type:'matching', label:'Nombres composés → chiffres', pairs:[
    {sl:'Enaindvajset',    fr:'21'},
    {sl:'Triintrideset',   fr:'33'},
    {sl:'Petindvajset',    fr:'25'},
    {sl:'Šestinšestdeset', fr:'66'},
    {sl:'Devetindvajset',  fr:'29'},
  ]},

  { type:'qcm', label:'QCM', question:'Comment dit-on "48" ?', choices:['Osemštirideset','Štirideset osem','Osemnajst','Štiriinštirideset'], correct:0 },
  { type:'qcm', label:'QCM', question:'"Devetindevetdeset" = ?', choices:['99','97','90','89'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['Imam ___ let. (J\'ai 25 ans.)'], blank:'petindvajset', bank:['petindvajset','štirideset','enajst','sedemindvajset'] },
  { type:'fill', label:'Phrase à trous', sentence:['Avtobus številka ___ gre v center. (Le bus numéro 18 va au centre.)'], blank:'osemnajst', bank:['osemnajst','dvanajst','trideset','petdeset'] },
  { type:'fill', label:'Phrase à trous', sentence:['V razredu je ___ učencev. (Il y a 35 élèves dans la classe.)'], blank:'petintrideset', bank:['petintrideset','triintrideset','petinštirideset','petindvajset'] },

  { type:'qcm', label:'QCM', question:'Comment dit-on "33" ?', choices:['Triintrideset','Trideset tri','Tri trideset','Trinajsttri'], correct:0 },
  { type:'qcm', label:'QCM', question:'"Petinsedemdeset" = ?', choices:['75','57','70','55'], correct:0 },

  { type:'presentation', label:'Le calcul — Računanje', word:'Koliko je 5 + 7 ?', phonetic:'[KO-li-ko ye PET plus SE-dem]', translation:'Combien font 5 + 7 ?',
    cultural:{title:'Les maths en slovène', text:'"Koliko je...?" = combien font...? "Plus" se dit "plus" (emprunté). "Minus" reste "minus". La réponse : "Dvanajst." (Douze.) Les Slovènes utilisent parfois "in" pour le plus : "pet in sedem je dvanajst" = 5 + 7 = 12.'} },

  { type:'tts_repeat', label:'Calcul simple', word:'Koliko je 5 + 7 ? Dvanajst. Koliko je 10 + 9 ? Devetnajst.', phonetic:'[KO-li-ko ye PET plus SE-dem? DVA-nayest. KO-li-ko ye DE-set plus DE-vet? de-vet-NAYEST.]', translation:'Combien font 5 + 7 ? Douze. Combien font 10 + 9 ? Dix-neuf.' },

  { type:'qcm', label:'QCM calcul', question:'"Koliko je 6 + 6 ?" — Quelle est la bonne réponse ?', choices:['Dvanajst','Enajst','Trinajst','Šestnajst'], correct:0 },
  { type:'qcm', label:'QCM calcul', question:'"Koliko je 20 + 15 ?" — Quelle est la bonne réponse ?', choices:['Petintrideset','Triintrideset','Petindvajset','Šestindvajset'], correct:0 },

  { type:'reconstruct', label:'Reconstitue', sentence:'Imam triindvajset let.', words:['Imam','triindvajset','let','.'] },

  { type:'story', label:'Histoire', title:'Au magasin de sport',
    narration:"Maja cherche des chaussures de randonnée pour le Triglav. Le vendeur lui demande sa pointure et son budget.",
    dialogue:[
      {speaker:'Vendeur', text:'Dobro jutro ! Kakšno številko imate ?', side:'right'},
      {speaker:'Maja',    text:'Šestintrideset, prosim.', side:'left'},
      {speaker:'Vendeur', text:'In kakšen je vaš proračun ?', side:'right'},
      {speaker:'Maja',    text:'Največ petdeset evrov.', side:'left'},
      {speaker:'Vendeur', text:'Imam dobre čevlje za petinštirideset evrov.', side:'right'},
      {speaker:'Maja',    text:'Odlično ! Bom vzela !', side:'left'},
      {speaker:'Vendeur', text:'Super ! Kdaj greste na Triglav ?', side:'right'},
      {speaker:'Maja',    text:'V sedemnajstih dneh — 17. julija !', side:'left'},
    ],
    translation:{
      'Kakšno številko imate ?':'Quelle pointure avez-vous ?',
      'Šestintrideset, prosim.':'Trente-six, s\'il vous plaît.',
      'In kakšen je vaš proračun ?':'Et quel est votre budget ?',
      'Največ petdeset evrov.':'Maximum cinquante euros.',
      'Imam dobre čevlje za petinštirideset evrov.':'J\'ai de bonnes chaussures pour quarante-cinq euros.',
      'Odlično ! Bom vzela !':'Excellent ! Je vais les prendre !',
      'V sedemnajstih dneh — 17. julija !':'Dans dix-sept jours — le 17 juillet !',
    }
  },

  { type:'qcm', label:'QCM histoire', question:'Quelle est la pointure de Maja ?', choices:['36','38','40','35'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'Combien coûtent les chaussures choisies ?', choices:['45 euros','50 euros','40 euros','55 euros'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'Quand Maja va-t-elle sur le Triglav ?', choices:['Le 17 juillet','Dans 30 jours','Le 17 juin','Le 19 juillet'], correct:0 },

  { type:'dictee', label:'Dictée', word:'Dvajset', phonetic:'[DVA-yset]', hint:'20 — 7 lettres' },

  { type:'dialogue', label:'À toi !', lines:[
    {speaker:'Ana', text:'Koliko let imaš ?', side:'left'},
    {speaker:'Toi', text:'Imam ___ let.', side:'right', blank:'triindvajset', hint:'23 → triindvajset'},
    {speaker:'Ana', text:'In tvoj telefon — kakšna številka ?', side:'left'},
    {speaker:'Toi', text:'Štirinajst ___ triintrideset.', side:'right', blank:'petinsedemdeset', hint:'75 → petinsedemdeset'},
  ]},
];
