// ═══════════════════════════════════════════
// 4-2 — La banque & la poste
// Généré le 2026-06-19 par generate_lesson.py
// ═══════════════════════════════════════════
const EX_4_2 = [
  { type:'presentation', label:'Découverte', word:'Bančna poslovanja', phonetic:'[BAN-čna POS-lo-va-nja]', translation:'Les opérations bancaires',
    cultural:{title:'Les banques slovènes', text:'En Slovénie, plusieurs banques sont bien établies, telles que NLB, Nova KBM et SKB. La majorité des transactions se fait via e-banking, ce qui est très pratique pour les utilisateurs.'},
    histoire:{title:'Histoire des banques en Slovénie', text:'Après l’indépendance en 1991, le système bancaire slovène a connu une transformation rapide, avec la privatisation et l’ouverture aux investissements étrangers.'} },

  { type:'presentation', label:'Découverte', word:'Pošta', phonetic:'[POS-ta]', translation:'La poste',
    cultural:{title:'Pošta Slovenije', text:'La poste slovène, en plus de son rôle classique, offre des services bancaires. C’est un lieu commun pour envoyer des lettres, des colis et des virements.'},
    histoire:{title:'Histoire de la poste en Slovénie', text:'La poste en Slovénie a été fondée au 18ème siècle. Aujourd’hui, elle est modernisée et propose des services numériques, y compris le suivi des colis.'} },

  { type:'tts_repeat', label:'À la banque', word:'Kje je najbližja banka ?', phonetic:'[KYE ye NAY-bli-zh-ja BAN-ka]', translation:'Où est la banque la plus proche ?' },
  { type:'tts_repeat', label:'À la banque', word:'Želim nakazati denar.', phonetic:'[ZHE-lim NA-ka-zati DE-nar]', translation:'Je souhaite transférer de l’argent.' },
  { type:'tts_repeat', label:'À la banque', word:'Kako se odpiše z bančnega računa ?', phonetic:'[KA-ko se OD-pee-she z BAN-chne-gah ra-CHO-na]', translation:'Comment retirer de mon compte bancaire ?' },
  { type:'tts_repeat', label:'À la poste', word:'Kako pošiljam paket ?', phonetic:'[KA-ko po-SHI-lyam PA-ket]', translation:'Comment j’envoie un colis ?' },

  { type:'matching', label:'Vocabulaire bancaire → français', pairs:[
    {sl:'Bančni račun', fr:'Compte bancaire'}, {sl:'Dvig', fr:'Retrait'},
    {sl:'Polog', fr:'Dépôt'},   {sl:'Obresti', fr:'Intérêts'},
    {sl:'Kredit', fr:'Crédit'},
  ]},

  { type:'qcm', label:'QCM grammaire', question:'Le passif financier se forme avec :',
    choices:['Se nakaže, se odpiše, se zaračuna','Se nakazuje, se odpiše, se zaračuni','On nakaže, on odpiše, on zaračuna','Je nakažem, ti odpišeš, mi zaračunamo'], correct:0 },

  { type:'qcm', label:'QCM vocabulaire', question:'Que signifie "nakazilo" ?',
    choices:['Transfert','Dépôt','Retrait','Intérêts'], correct:0 },

  { type:'qcm', label:'QCM culturel', question:'Quelle banque est nationale en Slovénie ?',
    choices:['NLB','Nova KBM','SKB','Raiffeisen'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['Želim ___ denar na račun. (Je veux transférer de l\'argent sur le compte.)'], blank:'nakazati', bank:['nakazati','dvigniti','plačati','polog'] },

  { type:'fill', label:'Phrase à trous', sentence:['Kje lahko ___ paket ? (Où puis-je envoyer un colis ?)'], blank:'pošljem', bank:['pošljem','prejem','plačam','dvignem'] },

  { type:'fill', label:'Phrase à trous', sentence:['Obresti so zelo ___. (Les intérêts sont très élevés.)'], blank:'visoke', bank:['visoke','nizke','prazne','malo'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Kako se nakazilo izvede ?', words:['Kako','se','nakazilo','izvede','?'] },

  { type:'story', label:'Dialogue à la banque', title:'Pri banki — À la banque',
    narration:'Milan je v banki, da bi opravil nakazilo. Želi se posvetovati s svetovalcem.',
    dialogue:[
      {speaker:'Svetovalec', text:'Dober dan! Kako vam lahko pomagam ?', side:'right'},
      {speaker:'Milan', text:'Dober dan! Želim nakazati denar na svoj račun.', side:'left'},
      {speaker:'Svetovalec', text:'Seveda! Koliko denarja želite nakazati ?', side:'right'},
      {speaker:'Milan', text:'Petsto evrov, prosim.', side:'left'},
      {speaker:'Svetovalec', text:'Imate svoj TRR ?', side:'right'},
      {speaker:'Milan', text:'Da, moj IBAN je SI56 1234 5678 9101.', side:'left'},
      {speaker:'Svetovalec', text:'Odlično! To bo izvedeno takoj.', side:'right'},
      {speaker:'Milan', text:'Hvala lepa!', side:'left'},
    ],
    translation:{
      'Dober dan! Kako vam lahko pomagam ?': 'Bonjour ! Comment puis-je vous aider ?',
      'Dober dan! Želim nakazati denar na svoj račun.': 'Bonjour ! Je souhaite transférer de l\'argent sur mon compte.',
      'Seveda! Koliko denarja želite nakazati ?': 'Bien sûr ! Combien d’argent souhaitez-vous transférer ?',
      'Petsto evrov, prosim.': 'Cinq cents euros, s’il vous plaît.',
      'Imate svoj TRR ?': 'Avez-vous votre numéro de compte ?',
      'Da, moj IBAN je SI56 1234 5678 9101.': 'Oui, mon IBAN est SI56 1234 5678 9101.',
      'Odlično! To bo izvedeno takoj.': 'Excellent ! Cela sera effectué immédiatement.',
      'Hvala lepa!': 'Merci beaucoup !',
    }},
];

// ── fin EX_4_2 ──
