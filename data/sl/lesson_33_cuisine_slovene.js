// ═══════════════════════════════════════════
// 3-3 — La cuisine slovène
// Généré le 2026-06-12 par generate_lesson.py
// ═══════════════════════════════════════════
const EX_3_3 = [
  { type:'presentation', label:'Découverte', word:'Kuhinja', phonetic:'[KU-hin-ja]', translation:'La cuisine',
    cultural:{title:'La diversité de la cuisine slovène', text:'La cuisine slovène est un mélange d\'influences méditerranéennes, alpines et pannoniennes. Chaque région a ses spécialités, comme la potica de la région de Prekmurje ou la kranjska klobasa de Kranjska Gora.'},
    histoire:{title:'Traditions culinaires', text:'Depuis des siècles, la cuisine slovène s\'est développée grâce aux échanges culturels, notamment avec les pays voisins comme l\'Italie et l\'Autriche. Le mouvement Slow Food est également très présent, mettant l\'accent sur des ingrédients locaux et de saison.'} },

  { type:'tts_repeat', label:'En cuisine', word:'Dodaj olje in sol.', phonetic:'[DO-daj OL-ye in SOL]', translation:'Ajoutez de l\'huile et du sel.' },
  { type:'tts_repeat', label:'En cuisine', word:'Zmešaj vse sestavine.', phonetic:'[ZME-shaj vse SE-sta-vi-ne]', translation:'Mélangez tous les ingrédients.' },
  { type:'tts_repeat', label:'En cuisine', word:'Kuhaj na nizki temperaturi.', phonetic:'[KU-haj na NIZ-ki tem-pe-ra-tu-ri]', translation:'Cuisine à feu doux.' },
  { type:'tts_repeat', label:'En cuisine', word:'Peči 30 minut.', phonetic:'[PE-chi 30 mi-NUT]', translation:'Faites cuire pendant 30 minutes.' },

  { type:'matching', label:'Ingrédients → français', pairs:[
    {sl:'Moka', fr:'Farine'}, {sl:'Sladkor', fr:'Sucre'},
    {sl:'Maslo', fr:'Beurre'}, {sl:'Začimbe', fr:'Épices'},
    {sl:'Olje', fr:'Huile'},
  ]},

  { type:'qcm', label:'QCM grammaire', question:'Pour indiquer un ingrédient, on utilise :',
    choices:['L\'instrumental — z jajci, s smetano','Le génitif — jajc, smetane','L\'accusatif — jajca, smetano','Le nominatif — jajce, smetana'], correct:0 },

  { type:'qcm', label:'QCM culturel', question:'Quel est l\'ingrédient traditionnel de la potica ?',
    choices:['Les noix','Le chocolat','Les pommes','Les fraises'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['V receptu je ___ (Dans la recette, il y a du beurre.)'], blank:'maslo', bank:['maslo','moka','sladkor','sol'] },
  { type:'fill', label:'Phrase à trous', sentence:['Dodajte ___ (Ajoutez une cuillère de sucre.)'], blank:'žlico', bank:['žlico','skodelico','jajca','mleko'] },
  { type:'fill', label:'Phrase à trous', sentence:['Meso se pripravlja z ___ (La viande se prépare avec de l\'huile.)'], blank:'oljem', bank:['maslom','mlekom','oljem','sladkorjem'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Jed se pripravi z maslom in moko.', words:['Jed','se','pripravi','z','maslom','in','moko','.'] },

  { type:'story', label:'Dialogue en cuisine', title:'V kuhinji — En cuisine',
    narration:'Ana in Marko pripravljata večerjo. Ana želi pripraviti potico.',
    dialogue:[
      {speaker:'Ana', text:'Marko, ali mi lahko pomagaš pri potici?', side:'left'},
      {speaker:'Marko', text:'Seveda, kaj potrebujemo?', side:'right'},
      {speaker:'Ana', text:'Potrebujemo moko, maslo in orehe.', side:'left'},
      {speaker:'Marko', text:'Koliko moke potrebujemo?', side:'right'},
      {speaker:'Ana', text:'Potrebujemo dva skodelica moke.', side:'left'},
      {speaker:'Marko', text:'In koliko masla?', side:'right'},
      {speaker:'Ana', text:'Eno skodelico masla.', side:'left'},
      {speaker:'Marko', text:'Super, grem po sestavine!', side:'right'},
    ],
    translation:{
      'Marko, ali mi lahko pomagaš pri potici?': 'Marko, peux-tu m\'aider avec la potica ?',
      'Seveda, kaj potrebujemo?': 'Bien sûr, que devons-nous prendre ?',
      'Potrebujemo moko, maslo in orehe.': 'Nous avons besoin de farine, de beurre et de noix.',
      'Koliko moke potrebujemo?': 'Combien de farine avons-nous besoin ?',
      'Potrebujemo dva skodelica moke.': 'Nous avons besoin de deux tasses de farine.',
      'In koliko masla?': 'Et combien de beurre ?',
      'Eno skodelico masla.': 'Une tasse de beurre.',
      'Super, grem po sestavine!': 'Super, je vais chercher les ingrédients !',
    }},
];

// ── fin EX_3_3 ──
