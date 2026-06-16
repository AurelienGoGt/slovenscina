// ═══════════════════════════════════════════
// 3-7 — Les médias
// Généré le 2026-06-16 par generate_lesson.py
// ═══════════════════════════════════════════
const EX_3_7 = [
  { type:'presentation', label:'Découverte', word:'Mediji', phonetic:'[ME-di-ji]', translation:'Les médias',
    cultural:{title:'Les médias slovènes', text:'La Slovénie possède plusieurs médias influents, dont RTV Slovenija, qui est le service public. Delo et Večer sont parmi les journaux les plus respectés. La liberté de la presse est un pilier de la démocratie slovène, se classant 32e mondialement.'},
    histoire:{title:'L’histoire de la presse en Slovénie', text:'Depuis l’indépendance en 1991, les médias slovènes ont connu une transformation rapide. Le développement du numérique a permis l’émergence de portails d’information comme MMC, qui offre une couverture complète des nouvelles.'} },

  { type:'presentation', label:'Terminologie', word:'Novinar', phonetic:'[NO-vi-nar]', translation:'Journaliste',
    cultural:{title:'Le rôle des journalistes en Slovénie', text:'Les journalistes slovènes jouent un rôle crucial dans le maintien de la démocratie. Ils rapportent les nouvelles avec objectivité, mais font face à des défis tels que la désinformation et la pression politique.'},
    histoire:{title:'L\'évolution du journalisme', text:'Avec l’essor des réseaux sociaux, le journalisme traditionnel a dû s’adapter. Les journalistes doivent désormais être compétents dans le domaine numérique pour toucher un public plus large.'} },

  { type:'tts_repeat', label:'Sur la télévision', word:'Gledam televizijo.', phonetic:'[GLE-dam te-le-VI-zi-jo]', translation:'Je regarde la télévision.' },
  { type:'tts_repeat', label:'Sur la presse', word:'Branje časopisa je zanimivo.', phonetic:'[BRAN-ye CHA-so-pi-sa ye za-NI-mi-vo]', translation:'Lire un journal est intéressant.' },
  { type:'tts_repeat', label:'Sur la radio', word:'Poslušam radio.', phonetic:'[POS-lu-sham RA-di-o]', translation:'J\'écoute la radio.' },
  { type:'tts_repeat', label:'Partager une nouvelle', word:'Delim novico.', phonetic:'[DE-lim no-VI-tsa]', translation:'Je partage une nouvelle.' },

  { type:'matching', label:'Médias → français', pairs:[
    {sl:'RTV Slovenija', fr:'Service public slovène'}, {sl:'Delo', fr:'Journal de référence'},
    {sl:'Večer', fr:'Journal populaire'}, {sl:'MMC', fr:'Portail d’information'},
  ]},

  { type:'qcm', label:'QCM grammaire', question:'Les verbes médiatiques en slovène incluent :',
    choices:['brati, gledati, poslušati, objavljati','jesti, piti, hoditi, spati','delati, gledati, poslušati, govoriti','pisati, brati, deliti, slediti'], correct:0 },

  { type:'qcm', label:'QCM culturel', question:'Quelle est la position de la Slovénie en matière de liberté de presse ?',
    choices:['32e au classement mondial','15e au classement mondial','50e au classement mondial','25e au classement mondial'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['RTV Slovenija je ___ medij. (RTV Slovenija est un média public.)'], blank:'javni', bank:['javni','privaten','regionalen','tuj'] },
  { type:'fill', label:'Phrase à trous', sentence:['Novinar je ___, da je vreme lepo. (Le journaliste a rapporté qu\'il fait beau.)'], blank:'poroča', bank:['poroča','rekel','pisal','komentiral'] },
  { type:'fill', label:'Phrase à trous', sentence:['Po ___ mnenju, je novica pomembna. (À mon avis, la nouvelle est importante.)'], blank:'mojem', bank:['mojem','tvojem','njegovem','njenem'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Novinar je rekel, da je novica zanimiva.', words:['Novinar','je','rekel','da','je','novica','zanimiva','.'] },

  { type:'story', label:'Dialogue sur les médias', title:'O medijih — Sur les médias',
    narration:'Marko in Ana se pogovarjata o novicah na RTV Slovenija.',
    dialogue:[
      {speaker:'Marko', text:'Ali si slišala novico o novem uredniku?', side:'left'},
      {speaker:'Ana', text:'Ne, kaj se je zgodilo?', side:'right'},
      {speaker:'Marko', text:'Poroča se, da bo nov urednik začel naslednji mesec.', side:'left'},
      {speaker:'Ana', text:'To je zanimivo! Kako se imenuje?', side:'right'},
      {speaker:'Marko', text:'Imenuje se Peter Novak. Je zelo izkušen novinar.', side:'left'},
      {speaker:'Ana', text:'Super! Po mojem mnenju, bo prinesel nove ideje.', side:'right'},
      {speaker:'Marko', text:'Strinjam se. RTV Slovenija potrebuje osvežitev.', side:'left'},
      {speaker:'Ana', text:'Tudi jaz tako mislim. Upajmo na boljše novice.', side:'right'},
    ],
    translation:{
      'Ali si slišala novico o novem uredniku?': 'As-tu entendu la nouvelle sur le nouveau rédacteur en chef ?',
      'Ne, kaj se je zgodilo?': 'Non, que s\'est-il passé ?',
      'Poroča se, da bo nov urednik začel naslednji mesec.': 'On rapporte que le nouveau rédacteur commencera le mois prochain.',
      'To je zanimivo! Kako se imenuje?': 'C\'est intéressant ! Comment s\'appelle-t-il ?',
      'Imenuje se Peter Novak. Je zelo izkušen novinar.': 'Il s\'appelle Peter Novak. C\'est un journaliste très expérimenté.',
      'Super! Po mojem mnenju, bo prinesel nove ideje.': 'Super ! À mon avis, il apportera de nouvelles idées.',
      'Strinjam se. RTV Slovenija potrebuje osvežitev.': 'Je suis d\'accord. RTV Slovenija a besoin d\'un rafraîchissement.',
      'Tudi jaz tako mislim. Upajmo na boljše novice.': 'Je pense aussi. Espérons de meilleures nouvelles.',
    }},
];

// ── fin EX_3_7 ──
