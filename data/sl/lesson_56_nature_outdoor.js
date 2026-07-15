// ═══════════════════════════════════════════
// 6-2 — Nature & outdoor avancé
// Généré le 2026-07-15 par generate_lesson.py
// ═══════════════════════════════════════════
const EX_6_2 = [
  { type:'presentation', label:'Découverte', word:'Triglav', phonetic:'[TRI-glav]', translation:'Triglav',
    cultural:{title:'Le Triglav', text:'Le Triglav est la montagne la plus haute de Slovénie, culminant à 2864 mètres. Chaque Slovène doit gravir le Triglav au moins une fois dans sa vie, un rite de passage pour beaucoup.'},
    histoire:{title:'Symbolisme du Triglav', text:'Le Triglav est un symbole national, souvent représenté sur le drapeau slovène. La montagne est entourée de légendes et est un lieu de rassemblement pour les amateurs de randonnée et d’escalade.'} },

  { type:'tts_repeat', label:'À la montagne', word:'Bomo šli na planinsko pot.', phonetic:'[BO-mo SHLI na pla-NIN-sko POT]', translation:'Nous irons sur le sentier de montagne.' },
  { type:'tts_repeat', label:'À la montagne', word:'Bo trajalo tri ure hoje.', phonetic:'[BO TRA-ya-lo tri U-re HO-ye]', translation:'Cela durera trois heures de marche.' },
  { type:'tts_repeat', label:'À la montagne', word:'Če bo lepo vreme, bomo splezali.', phonetic:'[CHE bo LE-po VRE-me, BO-mo SPLE-za-li]', translation:'S’il fait beau, nous ferons de l’escalade.' },

  { type:'matching', label:'Itinéraires → français', pairs:[
    {sl:'Mimo', fr:'Le long de'}, {sl:'Čez', fr:'À travers'},
    {sl:'Vzdolž', fr:'Le long'}, {sl:'Navzgor', fr:'Vers le haut'},
    {sl:'Navzdol', fr:'Vers le bas'},
  ]},

  { type:'qcm', label:'QCM grammaire', question:'Pour exprimer une planification future, on utilise :',
    choices:['Le futur — bomo šli, bo trajalo','Le présent — grem, traja','L’imparfait — šel sem, trajalo je','Le futur proche — bom šel, bo trajalo'], correct:0 },

  { type:'qcm', label:'QCM culturel', question:'Combien de refuges de montagne y a-t-il en Slovénie ?',
    choices:['170','100','250','80'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['Bomo ___ na Triglav. (Nous irons au Triglav.)'], blank:'šli', bank:['šli','šli bomo','iti','gremo'] },

  { type:'fill', label:'Phrase à trous', sentence:['V dolini Soče bo trajalo ___ hoje. (Dans la vallée de Soča, cela durera trois heures de marche.)'], blank:'tri ure', bank:['tri ure','dve uri','pet ur','ena ura'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Če bo lepo vreme, bomo šli.', words:['Če','bo','lepo','vreme','bomo','šli','.'] },

  { type:'story', label:'Dialogue à la montagne', title:'Na planinski koči — À la cabane de montagne',
    narration:'Na planinski koči v Julijskih Alpah so trije prijatelji. Razmišljajo o svojem naslednjem izletu.',
    dialogue:[
      {speaker:'Anja', text:'Kdaj bomo šli na Triglav ?', side:'left'},
      {speaker:'Matej', text:'Mislil sem, da gremo prihodnji teden.', side:'right'},
      {speaker:'Tina', text:'Če bo lepo vreme, bom šla.', side:'left'},
      {speaker:'Anja', text:'Kakšno opremo potrebujemo ?', side:'left'},
      {speaker:'Matej', text:'Potrebujemo nahrbtnik, pohodniške čevlje in vodo.', side:'right'},
      {speaker:'Tina', text:'In nekaj prigrizkov za pot.', side:'left'},
      {speaker:'Anja', text:'Se strinjam! Kdaj se dobimo ?', side:'left'},
      {speaker:'Matej', text:'V soboto ob sedmih zjutraj.', side:'right'},
    ],
    translation:{
      'Kdaj bomo šli na Triglav ?': 'Quand irons-nous au Triglav ?',
      'Mislil sem, da gremo prihodnji teden.': 'Je pensais que nous y allions la semaine prochaine.',
      'Če bo lepo vreme, bom šla.': 'S’il fait beau, j’irai.',
      'Kakšno opremo potrebujemo ?': 'Quel équipement avons-nous besoin ?',
      'Potrebujemo nahrbtnik, pohodniške čevlje in vodo.': 'Nous avons besoin d’un sac à dos, de chaussures de randonnée et d’eau.',
      'In nekaj prigrizkov za pot.': 'Et quelques collations pour le chemin.',
      'Se strinjam! Kdaj se dobimo ?': 'Je suis d’accord ! Quand nous rencontrons-nous ?',
      'V soboto ob sedmih zjutraj.': 'Samedi à sept heures du matin.',
    }},
];

// ── fin EX_6_2 ──
