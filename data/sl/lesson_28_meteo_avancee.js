// ═══════════════════════════════════════════
// 2-8 — La météo avancée
// Généré le 2026-06-07 par generate_lesson.py
// ═══════════════════════════════════════════
const EX_2_8 = [
  { type:'presentation', label:'Découverte', word:'Vremenska napoved', phonetic:'[VRE-men-ska NA-po-ved]', translation:'Prévisions météorologiques',
    cultural:{title:'Climat slovène', text:'La Slovénie possède trois zones climatiques distinctes, ce qui rend la météo très variable. Les prévisions météo sont donc cruciales pour planifier des activités. Le vent de Bora (burja) est particulièrement fort dans la région du Karst.'},
    histoire:{title:'Météo et traditions', text:'Les Slovènes suivent de près la météo, surtout pour les activités en plein air comme le ski ou la randonnée. Les prévisions sont souvent discutées dans les cafés locaux.'} },

  { type:'presentation', label:'Découverte', word:'Oblačno', phonetic:'[O-BLA-chno]', translation:'Nuageux',
    cultural:{title:'Activités selon la météo', text:'En Slovénie, le temps influence beaucoup les activités. Pendant les mois d’hiver, les stations de ski attirent beaucoup de monde, tandis qu’en été, les rivières comme la Soča sont populaires pour le rafting.'},
    histoire:{title:'Impact du climat', text:'La Slovénie a des records de neige en hiver, permettant des sports d’hiver de novembre à avril. En été, les températures peuvent atteindre 35°C, rendant les activités aquatiques très appréciées.'} },

  { type:'tts_repeat', label:'Prévisions', word:'Napoved je sončna.', phonetic:'[NA-po-ved ye SON-chna]', translation:'La prévision est ensoleillée.' },
  { type:'tts_repeat', label:'Prévisions', word:'Kakšna temperatura bo jutri ?', phonetic:'[KAK-shna tem-pe-ra-TU-ra bo YU-tri]', translation:'Quelle sera la température demain ?' },
  { type:'tts_repeat', label:'Prévisions', word:'Bomo imeli dež.', phonetic:'[BO-mo i-ME-li DEZH]', translation:'Nous aurons de la pluie.' },
  { type:'tts_repeat', label:'Prévisions', word:'Vreme bo spremenljivo.', phonetic:'[VRE-me bo SPRE-men-LI-vo]', translation:'Le temps sera changeant.' },

  { type:'matching', label:'Conditions météo → français', pairs:[
    {sl:'Sončno', fr:'Ensoleillé'}, {sl:'Oblačno', fr:'Nuageux'},
    {sl:'Deževno', fr:'Pluvieux'}, {sl:'Snežno', fr:'Neigeux'},
    {sl:'Vetrovito', fr:'Venté'},
  ]},

  { type:'qcm', label:'QCM grammaire', question:'Pour exprimer une condition, on utilise :',
    choices:['Ko bo... bomo','Kadar... bomo','Medtem ko... bomo','Ko... bomo'], correct:0 },

  { type:'qcm', label:'QCM vocabulaire', question:'Que signifie "napoved" ?',
    choices:['Prévisions','Température','Activités','Météo'], correct:0 },

  { type:'qcm', label:'QCM culturel', question:'Quelle est la caractéristique du vent de Bora ?',
    choices:['C\'est un vent violent','C\'est une brise légère','C\'est un vent chaud','C\'est un vent de pluie'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['Jutri bo ___ in oblačno. (Demain, il fera frais et nuageux.)'], blank:'hladno', bank:['hladno','sončno','deževno','vetrovito'] },
  { type:'fill', label:'Phrase à trous', sentence:['___ bo snežno. (Quand il fera neigeux.)'], blank:'Ko', bank:['Ko','Kadar','Medtem','Da'] },
  { type:'fill', label:'Phrase à trous', sentence:['___ bova šla na smučanje. (Quand il fera beau, nous irons skier.)'], blank:'Ko', bank:['Ko','Kadar','Medtem','Da'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Kakšna bo temperatura jutri ?', words:['Kakšna','bo','temperatura','jutri','?'] },

  { type:'story', label:'Dialogue sur la météo', title:'Vreme — Météo',
    narration:'Luka in Ana se pogovarjata o vremenu za vikend.',
    dialogue:[
      {speaker:'Luka', text:'Živjo, Ana! Kakšna je napoved za vikend?', side:'left'},
      {speaker:'Ana', text:'Živjo, Luka! Napoved je sončna, ampak v nedeljo bo dež.', side:'right'},
      {speaker:'Luka', text:'Super! Kaj bova počela v soboto?', side:'left'},
      {speaker:'Ana', text:'Mislila sem, da bova šla na kolo.', side:'right'},
      {speaker:'Luka', text:'Odlično! Potem morava izkoristiti sonce.', side:'left'},
      {speaker:'Ana', text:'Se strinjam. V nedeljo pa mogoče ostanem doma.', side:'right'},
      {speaker:'Luka', text:'Ja, morda je to dobra ideja.', side:'left'},
      {speaker:'Ana', text:'Se vidiva v soboto!', side:'right'},
    ],
    translation:{
      'Živjo, Ana! Kakšna je napoved za vikend?': 'Salut, Ana ! Quelle est la prévision pour le week-end ?',
      'Živjo, Luka! Napoved je sončna, ampak v nedeljo bo dež.': 'Salut, Luka ! La prévision est ensoleillée, mais il y aura de la pluie dimanche.',
      'Super! Kaj bova počela v soboto?': 'Super ! Que ferons-nous samedi ?',
      'Mislila sem, da bova šla na kolo.': 'Je pensais que nous irions à vélo.',
      'Odlično! Potem morava izkoristiti sonce.': 'Excellent ! Alors nous devons profiter du soleil.',
      'Se strinjam. V nedeljo pa mogoče ostanem doma.': 'Je suis d’accord. Dimanche, je resterai peut-être à la maison.',
      'Ja, morda je to dobra ideja.': 'Oui, c’est peut-être une bonne idée.',
      'Se vidiva v soboto!': 'On se voit samedi !',
    }},
];

// ── fin EX_2_8 ──
