// ═══════════════════════════════════════════
// 4-1 — L'administration
// Généré le 2026-06-18 par generate_lesson.py
// ═══════════════════════════════════════════
const EX_4_1 = [
  { type:'presentation', label:'Découverte', word:'Upravna enota', phonetic:'[U-PRA-vna E-NO-ta]', translation:'Mairie',
    cultural:{title:'L\'administration slovène', text:'La Slovénie a un système administratif efficace avec un portail en ligne appelé e-Uprava, facilitant l\'accès aux services administratifs pour les citoyens.'},
    histoire:{title:'Inscription obligatoire', text:'L\'inscription à la mairie est obligatoire pour tous les résidents dès l\'âge de 18 ans. Cela permet d\'obtenir des documents essentiels tels que l\'osebna izkaznica.'} },

  { type:'presentation', label:'Documents', word:'Osebna izkaznica', phonetic:'[O-SEB-na I-KAZ-ni-tsa]', translation:'Carte d\'identité',
    cultural:{title:'La carte d\'identité', text:'La osebna izkaznica est un document obligatoire pour tout citoyen slovène. Elle est utilisée pour s\'identifier dans diverses situations.'},
    histoire:{title:'L\'importance de l\'identité', text:'En Slovénie, l\'identité est importante. L\'EMŠO, équivalent de l\'INSEE, est un numéro unique attribué à chaque citoyen.'} },

  { type:'tts_repeat', label:'Document', word:'Obrazec, prosim.', phonetic:'[O-BRA-zets, PRO-sim]', translation:'Le formulaire, s\'il vous plaît.' },
  { type:'tts_repeat', label:'Document', word:'Ali imate potni list ?', phonetic:'[A-li i-MA-te POT-ni LIST]', translation:'Avez-vous un passeport ?' },
  { type:'tts_repeat', label:'Document', word:'Kako se prijavim ?', phonetic:'[KA-ko se PRI-ja-vim]', translation:'Comment je m\'inscris ?' },
  { type:'tts_repeat', label:'Document', word:'Kje je upravna enota ?', phonetic:'[KJE ye U-PRA-vna E-NO-ta]', translation:'Où est la mairie ?' },

  { type:'matching', label:'Documents → français', pairs:[
    {sl:'Obrazec', fr:'Formulaire'}, {sl:'Dokument', fr:'Document'},
    {sl:'Potni list', fr:'Passeport'}, {sl:'Vozniško dovoljenje', fr:'Permis de conduire'},
  ]},

  { type:'qcm', label:'QCM grammaire', question:'Quelle expression signifie "conformément à..." ?',
    choices:['V skladu z...','Na podlagi...','V zvezi z...','Zaradi...'], correct:0 },

  { type:'qcm', label:'QCM grammaire', question:'Comment dit-on "je m\'inscris" en slovène ?',
    choices:['Prijavljam se','Prijavi se','Jaz prijavim','Prijava'], correct:0 },

  { type:'qcm', label:'QCM culturel', question:'Quel document est obligatoire dès 18 ans en Slovénie ?',
    choices:['Osebna izkaznica','EMŠO','Potni list','Davčna številka'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['Prosim vas, da mi ___ potrdilo. (Je vous prie de me donner le certificat.)'], blank:'dáte', bank:['dáte','daš','dam','dati'] },
  { type:'fill', label:'Phrase à trous', sentence:['Zadnji rok je ___ (La date limite est...).'], blank:'jutri', bank:['jutri','tukaj','zdaj','včeraj'] },
  { type:'fill', label:'Phrase à trous', sentence:['Se lahko ___ odjavim ? (Puis-je me désinscrire ?)'], blank:'odjavim', bank:['odjavim','prijavim','vložim','izpolnim'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Kako se prijaviš za EMŠO ?', words:['Kako','se','prijaviš','za','EMŠO','?'] },

  { type:'story', label:'Dialogue à la mairie', title:'Pri upravni enoti — À la mairie',
    narration:'Matej je pri upravni enoti, da se prijavi za osebno izkaznico.',
    dialogue:[
      {speaker:'Uradnik', text:'Dober dan ! Kako vam lahko pomagam ?', side:'right'},
      {speaker:'Matej', text:'Dober dan ! Rad bi se prijavil za osebno izkaznico.', side:'left'},
      {speaker:'Uradnik', text:'Seveda. Imate vse potrebne dokumente ?', side:'right'},
      {speaker:'Matej', text:'Da, imam obrazec in kopijo potnega lista.', side:'left'},
      {speaker:'Uradnik', text:'Odlično. Prosimo, izpolnite ta obrazec.', side:'right'},
      {speaker:'Matej', text:'Koliko časa traja obdelava ?', side:'left'},
      {speaker:'Uradnik', text:'Običajno traja en teden.', side:'right'},
      {speaker:'Matej', text:'Hvala lepa ! Kje lahko dobim potrdilo ?', side:'left'},
      {speaker:'Uradnik', text:'Potrdilo boste prejeli po pošti.', side:'right'},
    ],
    translation:{
      'Dober dan ! Kako vam lahko pomagam ?': 'Bonjour ! Comment puis-je vous aider ?',
      'Dober dan ! Rad bi se prijavil za osebno izkaznico.': 'Bonjour ! Je voudrais m\'inscrire pour une carte d\'identité.',
      'Seveda. Imate vse potrebne dokumente ?': 'Bien sûr. Avez-vous tous les documents nécessaires ?',
      'Da, imam obrazec in kopijo potnega lista.': 'Oui, j\'ai le formulaire et une copie de mon passeport.',
      'Odlično. Prosimo, izpolnite ta obrazec.': 'Excellent. Veuillez remplir ce formulaire.',
      'Koliko časa traja obdelava ?': 'Combien de temps cela prend-il ?',
      'Običajno traja en teden.': 'Cela prend généralement une semaine.',
      'Hvala lepa ! Kje lahko dobim potrdilo ?': 'Merci beaucoup ! Où puis-je obtenir le certificat ?',
      'Potrdilo boste prejeli po pošti.': 'Vous recevrez le certificat par courrier.',
    }},
];

// ── fin EX_4_1 ──
