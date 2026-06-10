// ═══════════════════════════════════════════
// 3-1 — Se présenter en détail
// Généré le 2026-06-10 par generate_lesson.py
// ═══════════════════════════════════════════
const EX_3_1 = [
  { type:'presentation', label:'Présentation de soi', word:'Osebnost', phonetic:'[O-seb-NO-st]', translation:'Personnalité',
    cultural:{title:'Les valeurs slovènes', text:'Les Slovènes attachent une grande importance à l\'éducation et à la nature. Environ 85 % de la population a un diplôme supérieur, ce qui reflète leur ambition envers l\'apprentissage et le développement personnel.'},
    histoire:{title:'Importance de l\'éducation', text:'Depuis l\'indépendance en 1991, la Slovénie a investi dans son système éducatif. Les valeurs de communauté et de responsabilité sont également très présentes dans la culture slovène.'} },

  { type:'presentation', label:'Ambitions', word:'Ambicija', phonetic:'[AM-bi-TSI-ja]', translation:'Ambition',
    cultural:{title:'Ambitions et rêves', text:'Les Slovènes croient en la réalisation de leurs ambitions et souvent, ils rêvent de voyager et de découvrir le monde, tout en restant attachés à leur patrie.'},
    histoire:{title:'Devenir et rêver', text:'Dans la culture slovène, le rêve et l\'espoir sont des motifs récurrents, souvent liés à la beauté de la nature slovène et à l\'importance des liens familiaux.'} },

  { type:'tts_repeat', label:'Exprimer son ambition', word:'Moj cilj je postati učitelj.', phonetic:'[MOY TSI-lj YE POS-ta-ti U-chi-tel]', translation:'Mon objectif est de devenir enseignant.' },
  { type:'tts_repeat', label:'Parler de ses valeurs', word:'Verjamem, da so vrednote pomembne.', phonetic:'[VER-ja-mem, DA so VRED-no-te pom-PIMB-ne]', translation:'Je crois que les valeurs sont importantes.' },
  { type:'tts_repeat', label:'Expliquer ses rêves', word:'Rad/a sanjam o potovanjih.', phonetic:'[RAD/SAN-jam O po-to-VA-njikh]', translation:'J\'aime rêver de voyages.' },
  { type:'tts_repeat', label:'Parler de sa personnalité', word:'Sem radoveden/radovedna.', phonetic:'[SEM ra-do-VE-den/ra-do-VED-na]', translation:'Je suis curieux/curieuse.' },

  { type:'matching', label:'Adjectifs → français', pairs:[
    {sl:'Skrben', fr:'Prudent'}, {sl:'Ustvarjalen', fr:'Créatif'},
    {sl:'Odgovoren', fr:'Responsable'}, {sl:'Strpen', fr:'Tolérant'},
    {sl:'Radoveden', fr:'Curieux'},
  ]},

  { type:'qcm', label:'QCM grammaire', question:'Quel verbe d\'état signifie "devenir" ?',
    choices:['postati','ostati','imeti','biti'], correct:0 },
  { type:'qcm', label:'QCM grammaire', question:'Comment exprimer une subordonnée complétive ?',
    choices:['Mislim, da...','Mislim, da je...','Mislim, da so...','Mislim, da bi...'], correct:0 },
  { type:'qcm', label:'QCM culturel', question:'Quel est le taux de diplômés supérieurs en Slovénie ?',
    choices:['85%','75%','90%','80%'], correct:0 },
  { type:'qcm', label:'QCM sur les valeurs', question:'Quelle valeur est primordiale en Slovénie ?',
    choices:['Éducation','Richesse','Pouvoir','Divertissement'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['Nikoli nisem ___ (Je n\'ai jamais rêvé de cela.)'], blank:'sanjal/sanjala', bank:['sanjal','sanjala','sanjati','sanjam'] },
  { type:'fill', label:'Phrase à trous', sentence:['Moj cilj je ___ (Mon objectif est de lire.)'], blank:'branje', bank:['branje','brati','berem','berem'] },
  { type:'fill', label:'Phrase à trous', sentence:['Rad/a imam ___ (J\'aime la nature.)'], blank:'naravo', bank:['naravo','narava','naravi','narav'] },
  { type:'fill', label:'Phrase à trous', sentence:['Verjamem, da ___ (Je crois que c\'est vrai.)'], blank:'je res', bank:['je res','so res','je več','so več'] },
  
  { type:'reconstruct', label:'Reconstitue', sentence:'Moj cilj je postati odvetnik.', words:['Moj','cilj','je','postati','odvetnik','.'] },
  
  { type:'story', label:'Dialogue sur les ambitions', title:'O naših ambicijah — Sur nos ambitions',
    narration:'Ana in Marko se pogovarjata o svojih sanjah in ciljih.',
    dialogue:[
      {speaker:'Ana', text:'Moj cilj je postati zdravnica.', side:'left'},
      {speaker:'Marko', text:'Super! Rad bi postal arhitekt.', side:'right'},
      {speaker:'Ana', text:'To je čudovito! Verjamem, da ti bo uspelo.', side:'left'},
      {speaker:'Marko', text:'Hvala! Radoveden sem, kako bo izgledalo moje življenje.', side:'right'},
      {speaker:'Ana', text:'Sanji o potovanjih in raziskovanju!', side:'left'},
      {speaker:'Marko', text:'Se strinjam! Narava je čudovita.', side:'right'},
      {speaker:'Ana', text:'Upam, da bova šla skupaj na potovanje.', side:'left'},
      {speaker:'Marko', text:'To bi bilo fantastično!', side:'right'},
    ],
    translation:{
      'Moj cilj je postati zdravnica.': 'Mon objectif est de devenir médecin.',
      'Super! Rad bi postal arhitekt.': 'Super! Je voudrais devenir architecte.',
      'To je čudovito! Verjamem, da ti bo uspelo.': 'C\'est merveilleux! Je crois que tu vas réussir.',
      'Hvala! Radoveden sem, kako bo izgledalo moje življenje.': 'Merci! Je suis curieux de savoir à quoi ressemblera ma vie.',
      'Sanji o potovanjih in raziskovanju!': 'Rêve de voyages et d\'exploration!',
      'Se strinjam! Narava je čudovita.': 'Je suis d\'accord! La nature est magnifique.',
      'Upam, da bova šla skupaj na potovanje.': 'J\'espere que nous irons ensemble en voyage.',
      'To bi bilo fantastično!': 'Ce serait fantastique!',
    }},
];

// ── fin EX_3_1 ──
