// ═══════════════════════════════════════════
// 6-5 — Expressions idiomatiques
// Généré le 2026-07-18 par generate_lesson.py
// ═══════════════════════════════════════════
const EX_6_5 = [
  { type:'presentation', label:'Expressions idiomatiques', word:'Imeti polne roke dela', phonetic:'[I-me-ti POL-ne RO-ke DE-la]', translation:'Avoir plein de travail',
    cultural:{title:'Langue et culture', text:'Les expressions idiomatiques en slovène reflètent la culture et le mode de vie. Par exemple, "imeti polne roke dela" est souvent utilisé pour décrire une période chargée de travail.'},
    histoire:{title:'Origines des expressions', text:'Les idiomes slovènes proviennent souvent de l’histoire rurale et artisanale, et beaucoup sont liés à la nature et aux saisons.'} },

  { type:'tts_repeat', label:'Exclamation', word:'Kar tako !', phonetic:'[KAR TA-ko]', translation:'Comme ça !' },
  { type:'tts_repeat', label:'Interjection', word:'Ni šans !', phonetic:'[NI SHANS]', translation:'Pas de chance !' },
  { type:'tts_repeat', label:'Conversation familière', word:'Brez skrbi.', phonetic:'[BREZ SKR-bi]', translation:'Pas de souci.' },
  { type:'tts_repeat', label:'Affirmation', word:'Seveda !', phonetic:'[SE-ve-da]', translation:'Bien sûr !' },
  { type:'tts_repeat', label:'Clarté', word:'Jasno !', phonetic:'[YAS-no]', translation:'C\'est clair !' },

  { type:'matching', label:'Expressions → français', pairs:[
    {sl:'Biti brez besed', fr:'Être sans mots'}, 
    {sl:'Vzeti si čas', fr:'Prendre son temps'},
    {sl:'Dati vse od sebe', fr:'Donner tout de soi'}, 
    {sl:'Hoditi okoli vrele kaše', fr:'Tourner autour du pot'},
    {sl:'Biti na isti valovni dolžini', fr:'Être sur la même longueur d\'onde'},
  ]},

  { type:'qcm', label:'QCM grammaire', question:'Les diminutifs affectifs en slovène se terminent souvent par :',
    choices:['-ček, -ica, -ka','-ov, -ka, -i','-nik, -in, -ka','-či, -ja, -ke'], correct:0 },
  
  { type:'qcm', label:'QCM culturel', question:'Quel mot slovène pour "fête" vient du français ?',
    choices:['Žur','Žurka','Festa','Praznik'], correct:0 },

  { type:'qcm', label:'QCM registre', question:'Comment dire "tu" en registre formel en slovène ?',
    choices:['Vi','Ti','On','Ona'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['On je tip, ___ je faca. (C\'est un type, c\'est un gars.)'], blank:'to', bank:['to','ta','tisti','ta','tako'] },
  { type:'fill', label:'Phrase à trous', sentence:['Na žuru smo imeli ___ (Nous avons eu une fête).'], blank:'žur', bank:['žur','cajt','zabava','tip'] },
  { type:'fill', label:'Phrase à trous', sentence:['Brez ___ ni šans. (Sans ça, pas de chance.)'], blank:'besed', bank:['besed','tipov','skrbi','cajt'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Seveda, sem ti dal vse od sebe.', words:['Seveda','sem','ti','dal','vse','od','sebe','.'] },

  { type:'story', label:'Dialogue sur les expressions', title:'Na kavi — Au café',
    narration:'Maja in Luka sta na kavi v Ljubljani. Govorita o življenju in prijateljih.',
    dialogue:[
      {speaker:'Maja', text:'Bila sem brez besed, ko sem slišala novico.', side:'left'},
      {speaker:'Luka', text:'Res?! Kaj se je zgodilo?', side:'right'},
      {speaker:'Maja', text:'Imela sem polne roke dela, zato sem zamudila.', side:'left'},
      {speaker:'Luka', text:'Brez skrbi, vse se reši!', side:'right'},
      {speaker:'Maja', text:'Seveda, vedno sem pozitivna.', side:'left'},
      {speaker:'Luka', text:'Hoditi okoli vrele kaše ni rešitev.', side:'right'},
      {speaker:'Maja', text:'Jasno, moram se soočiti s tem.', side:'left'},
      {speaker:'Luka', text:'Daj, daj vse od sebe!', side:'right'},
    ],
    translation:{
      'Bila sem brez besed, ko sem slišala novico.': 'J\'étais sans mots quand j\'ai entendu la nouvelle.',
      'Res?! Kaj se je zgodilo?': 'Vraiment?! Que s\'est-il passé?',
      'Imela sem polne roke dela, zato sem zamudila.': 'J\'avais plein de travail, donc j\'ai raté.',
      'Brez skrbi, vse se reši!': 'Pas de souci, tout s\'arrangera!',
      'Seveda, vedno sem pozitivna.': 'Bien sûr, je suis toujours positive.',
      'Hoditi okoli vrele kaše ni rešitev.': 'Tourner autour du pot n\'est pas une solution.',
      'Jasno, moram se soočiti s tem.': 'C\'est clair, je dois faire face à ça.',
      'Daj, daj vse od sebe!': 'Allez, donne tout de toi!',
    }},
];

// ── fin EX_6_5 ──
