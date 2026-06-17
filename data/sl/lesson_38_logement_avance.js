// ═══════════════════════════════════════════
// 3-8 — Le logement avancé
// Généré le 2026-06-17 par generate_lesson.py
// ═══════════════════════════════════════════
const EX_3_8 = [
  { type:'presentation', label:'Découverte', word:'Najem', phonetic:'[NA-yem]', translation:'Location',
    cultural:{title:'Le marché immobilier slovène', text:'À Ljubljana, le marché immobilier est très cher, avec des prix variant entre 3 000 et 4 000 €/m². La location moyenne est d\'environ 700 à 900 €/mois.'},
    histoire:{title:'Villes alternatives', text:'Des villes comme Maribor, Koper et Celje offrent des options de logement à des prix 30-40% moins chers que Ljubljana.'} },

  { type:'presentation', label:'Découverte', word:'Pogodba', phonetic:'[PO-god-ba]', translation:'Contrat',
    cultural:{title:'Contrats de location', text:'En Slovénie, un contrat de location (pogodba) est essentiel pour formaliser l\'accord entre le najemnik (locataire) et le najemodajalec (propriétaire).'},
    histoire:{title:'Obligations du contrat', text:'Les contrats incluent souvent des obligations concernant les paiements de najemnina (loyer) et les services de vzdrževanje (entretien).'} },

  { type:'tts_repeat', label:'Au logement', word:'Kdaj je vselitev?', phonetic:'[KDAJ ye V-se-li-teV]', translation:'Quand est l\'emménagement ?' },
  { type:'tts_repeat', label:'Au logement', word:'Kaj je vključeno?', phonetic:'[KAJ ye V-klyu-če-no]', translation:'Qu\'est-ce qui est inclus ?' },
  { type:'tts_repeat', label:'Au logement', word:'Imate dvigalo?', phonetic:'[I-ma-te DVI-ga-lo]', translation:'Avez-vous un ascenseur ?' },
  { type:'tts_repeat', label:'Au logement', word:'Kakšno je vzdrževanje?', phonetic:'[KAKŠ-no ye VZ-dri-že-va-nje]', translation:'Comment est l\'entretien ?' },

  { type:'matching', label:'Termes → français', pairs:[
    {sl:'Najemnik', fr:'Locataire'}, {sl:'Najemodajalec', fr:'Propriétaire'},
    {sl:'Najemnina', fr:'Loyer'}, {sl:'Pogodba', fr:'Contrat'},
    {sl:'Kavcija', fr:'Dépôt de garantie'},
  ]},

  { type:'qcm', label:'QCM grammaire', question:'Pour exprimer une obligation, on utilise :',
    choices:['Morati + infinitif','Mesti + infinitif','Moči + infinitif','Smeti + infinitif'], correct:0 },

  { type:'qcm', label:'QCM grammaire', question:'Pour indiquer un lieu spécifique, on utilise :',
    choices:['Locatif','Accusatif','Nominatif','Instrumental'], correct:0 },

  { type:'qcm', label:'QCM culturel', question:'Quel est le prix moyen d\'un appartement à Ljubljana ?',
    choices:['700-900 €/mois','3000-4000 €/m²','200-300 €/mois','500-700 €/mois'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['Najemnina za ta stanovanje je ___ (Le loyer pour cet appartement est...)'], blank:'700 evrov', bank:['700 evrov','900 evrov','500 evrov','1000 evrov'] },
  { type:'fill', label:'Phrase à trous', sentence:['Vselitev je ___ (L\'emménagement est...)'], blank:'1. julija', bank:['1. aprila','1. junija','1. julija','1. avgusta'] },
  { type:'fill', label:'Phrase à trous', sentence:['V pogodbi je ___ (Dans le contrat, il y a...)'], blank:'kavcija', bank:['kavcija','ogrevanje','dvigalo','balkón'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Ali imate balkon ?', words:['Ali','imate','balkon','?'] },

  { type:'story', label:'Dialogue au logement', title:'Pri stanovanju — Au logement',
    narration:'Marie išče novo stanovanje v Ljubljani. S prijateljem se pogovarjata o možnostih.',
    dialogue:[
      {speaker:'Marie', text:'Kje lahko najdem dobro stanovanje?', side:'left'},
      {speaker:'Prijatelj', text:'Mogoče v središču mesta ali ob Ljubljanici.', side:'right'},
      {speaker:'Marie', text:'Kakšne so cene tam?', side:'left'},
      {speaker:'Prijatelj', text:'Cene so precej visoke, a lahko najdeš tudi nekaj ugodnega.', side:'right'},
      {speaker:'Marie', text:'Kaj pa pogodbe?', side:'left'},
      {speaker:'Prijatelj', text:'Pogodbe so običajno za eno leto, vključujejo tudi vzdrževanje.', side:'right'},
      {speaker:'Marie', text:'Imate kakšne nasvete?', side:'left'},
      {speaker:'Prijatelj', text:'Poglej spletne strani za oglase in vprašaj za prevod pogodbe.', side:'right'},
    ],
    translation:{
      'Kje lahko najdem dobro stanovanje?': 'Où puis-je trouver un bon appartement ?',
      'Mogoče v središču mesta ali ob Ljubljanici.': 'Peut-être dans le centre-ville ou le long de la Ljubljanica.',
      'Kakšne so cene tam?': 'Quels sont les prix là-bas ?',
      'Cene so precej visoke, a lahko najdeš tudi nekaj ugodnega.': 'Les prix sont assez élevés, mais tu peux aussi trouver quelque chose de raisonnable.',
      'Kaj pa pogodbe?': 'Et pour les contrats ?',
      'Pogodbe so običajno za eno leto, vključujejo tudi vzdrževanje.': 'Les contrats sont généralement d\'un an et incluent aussi l\'entretien.',
      'Imate kakšne nasvete?': 'Avez-vous des conseils ?',
      'Poglej spletne strani za oglase in vprašaj za prevod pogodbe.': 'Regarde les sites pour les annonces et demande un traduction du contrat.',
    }},
];

// ── fin EX_3_8 ──
