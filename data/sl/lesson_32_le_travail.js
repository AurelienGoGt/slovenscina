// ═══════════════════════════════════════════
// 3-2 — Le travail
// Généré le 2026-06-11 par generate_lesson.py
// ═══════════════════════════════════════════
const EX_3_2 = [
  { type:'presentation', label:'Découverte', word:'Pisarna', phonetic:'[PI-sar-na]', translation:'Le bureau',
    cultural:{title:'Le bureau en Slovénie', text:'La pisarna est un lieu central dans la vie professionnelle slovène. De plus en plus d’entreprises adoptent des espaces de coworking, favorisant la collaboration et la créativité.'},
    histoire:{title:'Évolution du travail', text:'Depuis l’indépendance en 1991, la Slovénie a vu émerger de nombreuses startups, surtout dans le secteur technologique, créant un environnement dynamique et innovant.'} },

  { type:'tts_repeat', label:'Au bureau', word:'Kje je moja pisarna ?', phonetic:'[KYE ye MO-ya PI-sar-na]', translation:'Où est mon bureau ?' },
  { type:'tts_repeat', label:'Réunion', word:'Imamo sestanek ob dveh.', phonetic:'[I-MA-mo SE-sta-nek ob DVEH]', translation:'Nous avons une réunion à deux heures.' },
  { type:'tts_repeat', label:'Projet', word:'Projekt je končan.', phonetic:'[PRO-jekt ye KON-chan]', translation:'Le projet est terminé.' },
  { type:'tts_repeat', label:'Rapport', word:'Moraš napisati poročilo.', phonetic:'[MO-rash NA-pi-sa-ti PO-ro-chi-lo]', translation:'Tu dois rédiger le rapport.' },

  { type:'matching', label:'Termes professionnels → français', pairs:[
    {sl:'Sestanek', fr:'Réunion'}, {sl:'Projekt', fr:'Projet'},
    {sl:'Poročilo', fr:'Rapport'},   {sl:'Vodja', fr:'Chef'},
    {sl:'Dopust', fr:'Congé'},
  ]},

  { type:'qcm', label:'QCM grammaire', question:'Pour exprimer une action future, on utilise :',
    choices:['Bom + infinitif','Sem + participle passé','Nisem + participle passé','Bi + infinitif'], correct:0 },
  
  { type:'qcm', label:'QCM culture', question:'Quelle entreprise slovène est connue pour ses médicaments ?',
    choices:['Krka','Revoz','Lek','Adria Airways'], correct:0 },
  
  { type:'qcm', label:'QCM grammaire', question:'Pour exprimer la négation au passé, on utilise :',
    choices:['Nisem + participle passé','Nisem + infinitif','Nisem + nom','Nisem + adjectif'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['Delal sem na ___ (J\'ai travaillé sur le projet.)'], blank:'projektu', bank:['projektu','projekt','projekta','projekti'] },
  { type:'fill', label:'Phrase à trous', sentence:['Nisem delal ___ (Je n\'ai pas travaillé hier.)'], blank:'včeraj', bank:['včeraj','danes','jutri','teden'] },
  
  { type:'reconstruct', label:'Reconstitue', sentence:'Moj sodelavec organizira sestanek.', words:['Moj','sodelavec','organizira','sestanek','.'] },

  { type:'story', label:'Dialogue au bureau', title:'Pri pisarni — Au bureau',
    narration:'Matej in Ana sta v pisarni. Pogovarjata se o projektu in sestanku.',
    dialogue:[
      {speaker:'Matej', text:'Živjo, Ana! Kako napreduje projekt?', side:'left'},
      {speaker:'Ana', text:'Živjo, Matej! Dobra novica, skoraj smo končali.', side:'right'},
      {speaker:'Matej', text:'Super! Kdaj imamo sestanek z vodjo?', side:'left'},
      {speaker:'Ana', text:'Imamo ga v ponedeljek ob 10h.', side:'right'},
      {speaker:'Matej', text:'Odlično! Morava pripraviti prezentacijo.', side:'left'},
      {speaker:'Ana', text:'Seveda, jaz bom pripravila poročilo.', side:'right'},
      {speaker:'Matej', text:'Hvala, Ana! To bo v pomoč.', side:'left'},
      {speaker:'Ana', text:'Ni za kaj! Se vidiva kasneje.', side:'right'},
    ],
    translation:{
      'Živjo, Ana! Kako napreduje projekt?': 'Salut, Ana ! Comment avance le projet ?',
      'Živjo, Matej! Dobra novica, skoraj smo končali.': 'Salut, Matej ! Bonne nouvelle, nous avons presque terminé.',
      'Super! Kdaj imamo sestanek z vodjo?': 'Super ! Quand avons-nous la réunion avec le chef ?',
      'Imamo ga v ponedeljek ob 10h.': 'Nous l\'avons lundi à 10h.',
      'Odlično! Morava pripraviti prezentacijo.': 'Excellent ! Nous devons préparer la présentation.',
      'Seveda, jaz bom pripravila poročilo.': 'Bien sûr, je vais préparer le rapport.',
      'Hvala, Ana! To bo v pomoč.': 'Merci, Ana ! Cela va m\'aider.',
      'Ni za kaj! Se vidiva kasneje.': 'De rien ! On se voit plus tard.',
    }},
];

// ── fin EX_3_2 ──
