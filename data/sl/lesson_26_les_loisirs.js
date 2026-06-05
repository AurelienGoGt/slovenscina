// ═══════════════════════════════════════════
// 2-6 — Les loisirs
// Généré le 2026-06-05 par generate_lesson.py
// ═══════════════════════════════════════════
const EX_2_6 = [
  { type:'presentation', label:'Découverte', word:'Prostočasne dejavnosti', phonetic:'[PRO-sto-CHAS-ne DE-ja-vnosti]', translation:'Loisirs',
    cultural:{title:'Les loisirs en Slovénie', text:'La Slovénie est un véritable paradis pour les amateurs de plein air. Avec ses montagnes, ses lacs et ses forêts, les activités de loisirs sont nombreuses, allant du ski à la randonnée en passant par des concerts et des festivals.'},
    histoire:{title:'L\'importance des loisirs', text:'Dans la culture slovène, le temps libre est essentiel. Les Slovènes aiment passer du temps en plein air, que ce soit pour pratiquer des sports ou pour profiter de la nature. Cela reflète leur attachement à la terre et à l\'environnement.'} },

  { type:'tts_repeat', label:'Loisir préféré', word:'Rad se ukvarjam s smučanjem.', phonetic:'[RAD se u-KVAR-yam s SMU-cha-njem]', translation:'J\'aime pratiquer le ski.' },
  { type:'tts_repeat', label:'Fréquence d\'activité', word:'Vsak dan igram kitaro.', phonetic:'[VSAK DAN I-gram ki-TA-ro]', translation:'Je joue de la guitare tous les jours.' },
  { type:'tts_repeat', label:'Activité de loisirs', word:'Pohodništvo je moja najljubša dejavnost.', phonetic:'[PO-ho-di-nis-tvo ye MO-ja NAJ-ljub-sha DE-ja-vnost]', translation:'La randonnée est mon loisir préféré.' },

  { type:'matching', label:'Loisirs → français', pairs:[
    {sl:'Smučanje', fr:'Ski'}, {sl:'Plavanje', fr:'Natation'},
    {sl:'Kolesarjenje', fr:'Cyclisme'}, {sl:'Branje', fr:'Lecture'},
    {sl:'Glasba', fr:'Musique'},
  ]},

  { type:'qcm', label:'QCM grammaire', question:'Avec quel verbe utilise-t-on l\'instrumental ?', 
    choices:['Ukvarjati se z','Imeti','Delati','Jesti'], correct:0 },

  { type:'qcm', label:'QCM culture', question:'Quel est l\'endroit le plus célèbre pour le ski en Slovénie ?', 
    choices:['Kranjska Gora','Triglav','Postojnska jama','Ljubljana'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['Vsak dan ___ glasbo. (Tous les jours, j\'écoute de la musique.)'], blank:'poslušam', bank:['gledam','berem','poslušam','igram'] },

  { type:'fill', label:'Phrase à trous', sentence:['Rad se ___ s kolesarjenjem. (J\'aime faire du vélo.)'], blank:'ukvarjam', bank:['ukvarjam','srečujem','učim','berem'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Vsak dan hodim na sprehod.', words:['Vsak','dan','hodim','na','sprehod','.'] },

  { type:'story', label:'Dialogue sur les loisirs', title:'O prostem času — Sur le temps libre',
    narration:'Maja in Luka se pogovarjata o svojih prostih aktivnostih.',
    dialogue:[
      {speaker:'Maja', text:'Hej, Luka! Kaj rad počneš v prostem času?', side:'left'},
      {speaker:'Luka', text:'Rad se ukvarjam s plavanjem. A ti?', side:'right'},
      {speaker:'Maja', text:'Jaz rada igram kitaro in hodim na pohode.', side:'left'},
      {speaker:'Luka', text:'To je super! Kolikokrat na teden hodiš na pohode?', side:'right'},
      {speaker:'Maja', text:'Enkrat na teden, običajno ob sobotah.', side:'left'},
      {speaker:'Luka', text:'Jaz grem pogosto na kolo. Morda se enkrat pridružiš?', side:'right'},
      {speaker:'Maja', text:'Z veseljem! Kje se običajno voziš?', side:'left'},
      {speaker:'Luka', text:'Ob Soči, je res lepo tam.', side:'right'},
    ],
    translation:{
      'Hej, Luka! Kaj rad počneš v prostem času?': 'Salut, Luka! Que fais-tu pendant ton temps libre ?',
      'Rad se ukvarjam s plavanjem. A ti?': 'J\'aime pratiquer la natation. Et toi ?',
      'Jaz rada igram kitaro in hodim na pohode.': 'J\'aime jouer de la guitare et faire de la randonnée.',
      'To je super! Kolikokrat na teden hodiš na pohode?': 'C\'est super ! Combien de fois par semaine fais-tu de la randonnée ?',
      'Enkrat na teden, običajno ob sobotah.': 'Une fois par semaine, généralement le samedi.',
      'Jaz grem pogosto na kolo. Morda se enkrat pridružiš?': 'Je fais souvent du vélo. Peut-être que tu pourrais te joindre à moi un jour ?',
      'Z veseljem! Kje se običajno voziš?': 'Avec plaisir ! Où vas-tu généralement ?',
      'Ob Soči, je res lepo tam.': 'À côté de la Soča, c\'est vraiment beau là-bas.',
    }},
];

// ── fin EX_2_6 ──
