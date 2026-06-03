// ═══════════════════════════════════════════
// 2-2 — Au restaurant
// Généré le 2026-06-02 par generate_lesson.py
// ═══════════════════════════════════════════
const EX_2_2 = [
  { type:'presentation', label:'Découverte', word:'Jota', phonetic:'[YO-ta]', translation:'La jota',
    cultural:{title:'La jota slovène', text:'La jota est une soupe traditionnelle slovène à base de choucroute et de haricots. Très populaire dans les régions de la vallée de la Savinja, elle est souvent servie comme plat principal lors des repas familiaux.'},
    histoire:{title:'Origines de la jota', text:'La jota a des racines anciennes, remontant à l\'époque des paysans slovènes. Elle était préparée avec des ingrédients locaux, reflétant la simplicité et la richesse des traditions culinaires slovènes.'} },

  { type:'presentation', label:'Politesse', word:'Napitnina', phonetic:'[NA-pit-ni-na]', translation:'Pourboire',
    cultural:{title:'Le pourboire en Slovénie', text:'Il est courant de laisser un pourboire d\'environ 10% dans les restaurants slovènes. Cela est considéré comme un geste de gratitude envers le service.'},
    histoire:{title:'Évolution du pourboire', text:'Historiquement, le pourboire a été introduit en Slovénie avec l\'influence des pays voisins. De nos jours, il est devenu une partie intégrante de la culture de service dans les établissements.'} },

  { type:'tts_repeat', label:'Commander', word:'Prosim joto, juho.', phonetic:'[PRO-sim YO-to, YU-ho]', translation:'Je voudrais de la jota, s\'il vous plaît.' },
  { type:'tts_repeat', label:'Commander', word:'Bi radi mesno jed?', phonetic:'[BI RA-di ME-sno YED?]', translation:'Je voudrais un plat de viande ?' },
  { type:'tts_repeat', label:'Commander', word:'Ali imate sladico?', phonetic:'[A-li i-MA-te SLA-di-tsa?]', translation:'Avez-vous un dessert ?' },
  { type:'tts_repeat', label:'Commander', word:'Koliko stane pivo?', phonetic:'[KO-li-ko STA-ne PI-vo?]', translation:'Combien coûte la bière ?' },

  { type:'matching', label:'Plats → français', pairs:[
    {sl:'Predjed', fr:'Entrée'}, {sl:'Glavna jed', fr:'Plat principal'},
    {sl:'Sladica', fr:'Dessert'}, {sl:'Solata', fr:'Salade'},
    {sl:'Pijača', fr:'Boisson'},
  ]},

  { type:'qcm', label:'QCM grammaire', question:'Pour exprimer une demande polie, on utilise :',
    choices:['Bi rad/rada...','Je voudrais...','S\'il vous plaît...','Je veux...'], correct:0 },

  { type:'qcm', label:'QCM culture', question:'Quel plat est typique de la cuisine slovène ?',
    choices:['Jota','Paella','Pizza','Sushi'], correct:0 },

  { type:'qcm', label:'QCM grammaire', question:'Pour commander un plat, on utilise l\'accusatif, par exemple :',
    choices:['Prosim joto juho.','Prosim joto juhe.','Prosim joto juho!','Prosim joto juhi.'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['Prosimo za ___ (soupe) juho.'], blank:'juho', bank:['juho','jota','meso','solata'] },
  { type:'fill', label:'Phrase à trous', sentence:['Bi radi ___ (viande) mesno jed.'], blank:'mesno', bank:['mesna','meso','mesne','mesni'] },
  { type:'fill', label:'Phrase à trous', sentence:['Koliko stane ___ (bière) pivo?'], blank:'pivo', bank:['piva','pivo','pivom','piv'] },
  { type:'fill', label:'Phrase à trous', sentence:['Izvolite, račun, ___ (s\'il vous plaît).'], blank:'prosim', bank:['prosim','hvala','na svidenje','dober dan'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Ali lahko priporočite dobro sladico ?', words:['Ali','lahko','priporočite','dobro','sladico','?'] },

  { type:'story', label:'Dialogue au restaurant', title:'Pri restavraciji — Au restaurant',
    narration:'Marko in Ana sta v restavraciji v Ljubljani. Želita naročiti kosilo.',
    dialogue:[
      {speaker:'Marko', text:'Dober dan! Bi radi naročili?', side:'left'},
      {speaker:'Časnik', text:'Dober dan! Seveda, kaj želite naročiti?', side:'right'},
      {speaker:'Ana', text:'Prosim, bi radi juho in glavne jedi.', side:'left'},
      {speaker:'Marko', text:'Ali imate dobro jota?', side:'left'},
      {speaker:'Časnik', text:'Da, imamo okusno jota!', side:'right'},
      {speaker:'Ana', text:'Super! Dajte nam dve porciji, prosim.', side:'left'},
      {speaker:'Časnik', text:'Seveda! In kaj boste pili?', side:'right'},
      {speaker:'Marko', text:'Dva piva, prosim.', side:'left'},
      {speaker:'Časnik', text:'Račun bo skupaj šest evrov.', side:'right'},
      {speaker:'Ana', text:'Hvala! Na svidenje.', side:'left'},
    ],
    translation:{
      'Dober dan! Bi radi naročili?': 'Bonjour ! Voudriez-vous commander ?',
      'Dober dan! Seveda, kaj želite naročiti?': 'Bonjour ! Bien sûr, que souhaitez-vous commander ?',
      'Prosim, bi radi juho in glavne jedi.': 'S\'il vous plaît, nous voudrions de la soupe et des plats principaux.',
      'Ali imate dobro jota?': 'Avez-vous une bonne jota ?',
      'Da, imamo okusno jota!': 'Oui, nous avons une jota délicieuse !',
      'Super! Dajte nam dve porciji, prosim.': 'Super ! Donnez-nous deux portions, s\'il vous plaît.',
      'Seveda! In kaj boste pili?': 'Bien sûr ! Et que voulez-vous boire ?',
      'Dva piva, prosim.': 'Deux bières, s\'il vous plaît.',
      'Račun bo skupaj šest evrov.': 'La note sera de six euros.',
      'Hvala! Na svidenje.': 'Merci ! Au revoir.',
    }},
];

// ── fin EX_2_2 ──
