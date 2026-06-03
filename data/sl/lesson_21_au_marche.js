// ═══════════════════════════════════════════
// 2-1 — Au marché
// Généré le 2026-06-02 par generate_lesson.py
// ═══════════════════════════════════════════
const EX_2_1 = [
  { type:'presentation', label:'Découverte', word:'Tržnica', phonetic:'[TRZH-ni-tsa]', translation:'Le marché',
    cultural:{title:'Les marchés slovènes', text:'La tržnica est le cœur de la vie locale. À Ljubljana, le marché central longe la rivière Ljubljanica — fruits, légumes, fromages locaux, miel. Ouvert tous les matins sauf dimanche.'},
    histoire:{title:'Commerce et tradition', text:'Le commerce de rue existe en Slovénie depuis le Moyen Âge. Les marchands ambulants (kramarji) parcouraient les Alpes. Aujourd\'hui, les marchés bio (eko tržnica) se multiplient dans toutes les villes.'} },

  { type:'tts_repeat', label:'Au marché', word:'Kilogram jabolk, prosim.', phonetic:'[KI-lo-gram YA-bolk, PRO-sim]', translation:'Un kilo de pommes, s\'il vous plaît.' },
  { type:'tts_repeat', label:'Au marché', word:'Koliko stane ta sir ?', phonetic:'[KO-li-ko STA-ne ta SIR]', translation:'Combien coûte ce fromage ?' },
  { type:'tts_repeat', label:'Au marché', word:'Ali je ta meso svež ?', phonetic:'[A-li ye ta ME-so SVEZH]', translation:'Cette viande est-elle fraîche ?' },

  { type:'matching', label:'Produits → français', pairs:[
    {sl:'Jabolko', fr:'Pomme'}, {sl:'Kruh', fr:'Pain'},
    {sl:'Mleko', fr:'Lait'},   {sl:'Meso', fr:'Viande'},
    {sl:'Sir', fr:'Fromage'},
  ]},

  { type:'qcm', label:'QCM grammaire', question:'Après une quantité (kilogram, liter...), on utilise :',
    choices:['Le génitif — jabolk, mleka, kruha','L\'accusatif — jabolko, mleko','Le nominatif — jabolko, mleko','L\'instrumental — z jabolki'], correct:0 },

  { type:'qcm', label:'QCM grammaire', question:'Comment exprimer la négation avec du génitif ?',
    choices:['Nimam kruha','Nimam kruh','Nimam jabolk','Nimam mleko'], correct:0 },

  { type:'qcm', label:'QCM culturel', question:'Quel produit est typique des marchés slovènes ?',
    choices:['Kranjska klobasa','Baguette','Saucisse de Francfort','Chorizo'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['Dva kilograma ___ prosim. (Deux kilos de pommes s\'il vous plaît.)'], blank:'jabolk', bank:['jabolk','jabolko','jabolka','jabolkami'] },

  { type:'fill', label:'Phrase à trous', sentence:['Nimam ___ (pain). (Je n\'ai pas de pain.)'], blank:'kruha', bank:['kruh','kruha','kruhi','kruhami'] },

  { type:'fill', label:'Phrase à trous', sentence:['Koliko stane ___ (fromage) ?'], blank:'sir', bank:['sir','sira','siru','sri'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Koliko stane kilogram paradižnika ?', words:['Koliko','stane','kilogram','paradižnika','?'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Nimam kruha, ali imate meso ?', words:['Nimam','kruha',',','ali','imate','meso','?'] },

  { type:'story', label:'Dialogue au marché', title:'Pri tržnici — Au marché',
    narration:'Marie je pri tržnici v Ljubljani. Želi kupiti sadje in zelenjavo za večerjo.',
    dialogue:[
      {speaker:'Prodajalka', text:'Dober dan ! Kaj vam ponudim ?', side:'right'},
      {speaker:'Marie', text:'Dober dan ! Koliko stane kilogram jabolk ?', side:'left'},
      {speaker:'Prodajalka', text:'Dva evra kilogram. So domača in zelo sveža !', side:'right'},
      {speaker:'Marie', text:'Super ! Dajte mi dva kilograma, prosim.', side:'left'},
      {speaker:'Prodajalka', text:'Izvolite. Še kaj ?', side:'right'},
      {speaker:'Marie', text:'Ja, en kruh in pol kilograma sira.', side:'left'},
      {speaker:'Prodajalka', text:'Skupaj je sedem evrov petdeset.', side:'right'},
      {speaker:'Marie', text:'Hvala lepa ! Na svidenje.', side:'left'},
    ],
    translation:{
      'Dober dan ! Kaj vam ponudim ?': 'Bonjour ! Que puis-je vous offrir ?',
      'Dober dan ! Koliko stane kilogram jabolk ?': 'Bonjour ! Combien coûte le kilo de pommes ?',
      'Dva evra kilogram. So domača in zelo sveža !': 'Deux euros le kilo. Elles sont locales et très fraîches !',
      'Super ! Dajte mi dva kilograma, prosim.': 'Super ! Donnez-m\'en deux kilos, s\'il vous plaît.',
      'Izvolite. Še kaj ?': 'Voilà. Autre chose ?',
      'Ja, en kruh in pol kilograma sira.': 'Oui, un pain et un demi-kilo de fromage.',
      'Skupaj je sedem evrov petdeset.': 'En tout c\'est sept euros cinquante.',
      'Hvala lepa ! Na svidenje.': 'Merci beaucoup ! Au revoir.',
    }},
];

// ── fin EX_2_1 ──
