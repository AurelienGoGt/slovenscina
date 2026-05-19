// ═══════════════════════════════════════════
// 1-15 — L'heure
// ═══════════════════════════════════════════
const EX_1_15 = [
  { type:'presentation', label:'Demander l\'heure', word:'Koliko je ura ?', phonetic:'[KO-li-ko ye U-ra]', translation:'Quelle heure est-il ?',
    cultural:{title:'Ura = heure / montre', text:'"Ura" signifie à la fois "heure" et "montre/horloge". "Moja ura je pokvarjena" = ma montre est cassée. "Ura je deset" = il est 10h. Simple !'},
    histoire:{title:'Ljubljana — Capitale verte 2016', text:'Ljubljana a été désignée Capitale verte européenne 2016. Le maire Zoran Janković a piétonisé le centre historique en 2007. Résultat : une ville où bars et cafés débordent sur les trottoirs. La rivière Ljubljanica traverse le centre — les quais sont le cœur de la vie nocturne.'} },

  { type:'presentation', label:'Heures pleines', word:'Ura je ena. Ura je pet.', phonetic:'[U-ra ye E-na] [U-ra ye PET]', translation:'Il est 1h. Il est 5h.', noTTS:true,
    cultural:{title:'Structure de l\'heure', text:'"Ura je" + chiffre = il est X heures. "Ob" + chiffre + "h" = à X heures (pour les rendez-vous). "Ob treh" = à 3h. "Ob osmih" = à 8h. Pour les rendez-vous, on met le chiffre au génitif !'} },

  { type:'presentation', label:'La demi-heure — POL (ATTENTION !)', word:'Pol treh = 2h30 — Pol osmih = 7h30', phonetic:'[POL TREH] [POL OS-mih]', translation:'"Pol treh" = 2h30 (à moitié vers 3h) — "Pol osmih" = 7h30 (à moitié vers 8h)',
    cultural:{title:'Logique inversée — TRÈS IMPORTANT pour les francophones !', text:'En slovène, on pense à l\'heure qui ARRIVE, pas à celle qui est passée :\n• "Pol treh" = à moitié chemin VERS 3h = 2h30\n• "Pol osmih" = à moitié chemin VERS 8h = 7h30\n• "Pol dvanajstih" = à moitié chemin VERS 12h = 11h30\n\nRègle simple : "Pol X" = (X-1) heures 30 !\n\nC\'est similaire à l\'allemand "halb drei" (2h30) ou au néerlandais. Pour un francophone, c\'est le piège classique — "pol osmih" ne veut PAS dire 8h30 mais 7h30 !'} },

  { type:'presentation', label:'Les quarts d\'heure', word:'Četrt čez tri = 3h15 — Tri četrt na štiri = 3h45', phonetic:'[CHET-rt CHEZ TRI] [TRI CHET-rt NA SHTI-ri]', translation:'"Četrt čez" = et quart — "Tri četrt na" = moins le quart', noTTS:true,
    cultural:{title:'Les quarts d\'heure', text:'"Četrt čez tri" = 3h15 (un quart après trois). "Tri četrt na štiri" = 3h45 (trois quarts vers quatre). Ces formes sont un peu avancées — pour l\'instant, concentre-toi sur les heures pleines et les demies !'} },

  { type:'tts_repeat', label:'Heures pleines', word:'Ura je ena. Ura je pet. Ura je dvanajst.', phonetic:'[U-ra ye E-na. U-ra ye PET. U-ra ye DVA-nayest.]', translation:'Il est 1h. Il est 5h. Il est midi.' },

  { type:'tts_repeat', label:'Demi-heures', word:'Pol dveh, pol treh, pol šestih, pol enajstih', phonetic:'[POL DVEH, POL TREH, POL SHES-tih, POL e-NAY-stih]', translation:'1h30, 2h30, 5h30, 10h30' },

  { type:'tts_repeat', label:'Heures avec "ob"', word:'Ob sedmih, ob osmih, ob devetih, ob desetih', phonetic:'[ob SED-mih, ob OS-mih, ob de-VE-tih, ob DE-se-tih]', translation:'À 7h, à 8h, à 9h, à 10h' },

  { type:'tts_repeat', label:'Programme de la journée', word:'Vstanem ob sedmih. Grem spat ob enajstih.', phonetic:'[VSTA-nem ob SED-mih] [GREM SPAT ob e-NAY-stih]', translation:'Je me lève à 7h. Je vais me coucher à 11h.' },

  { type:'tts_repeat', label:'Transports & horaires', word:'Vlak odpeljuje ob štirih in pol. Avtobus pride ob petih.', phonetic:'[VLAK od-pe-LYU-ye ob SHTI-rih in POL] [av-TO-bus PRI-de ob PE-tih]', translation:'Le train part à 4h30. Le bus arrive à 5h.' },

  { type:'matching', label:'Heures → français', pairs:[
    {sl:'Ura je tri.',    fr:'Il est 3h.'},
    {sl:'Ura je šest.',   fr:'Il est 6h.'},
    {sl:'Ura je deset.',  fr:'Il est 10h.'},
    {sl:'Ura je enajst.', fr:'Il est 11h.'},
    {sl:'Ura je dvanajst.',fr:'Il est midi.'},
  ]},

  { type:'matching', label:'Demi-heures → français', pairs:[
    {sl:'Pol dveh.',     fr:'Il est 1h30.'},
    {sl:'Pol treh.',     fr:'Il est 2h30.'},
    {sl:'Pol petih.',    fr:'Il est 4h30.'},
    {sl:'Pol enajstih.', fr:'Il est 10h30.'},
    {sl:'Pol dvanajstih.',fr:'Il est 11h30.'},
  ]},

  { type:'matching', label:'Rendez-vous → français', pairs:[
    {sl:'Ob sedmih',    fr:'À 7h'},
    {sl:'Ob osmih',     fr:'À 8h'},
    {sl:'Ob devetih',   fr:'À 9h'},
    {sl:'Ob desetih',   fr:'À 10h'},
    {sl:'Ob pol treh',  fr:'À 2h30'},
  ]},

  { type:'qcm', label:'QCM', question:'Comment dit-on "Il est 7h" ?',
    choices:['Ura je sedem.','Ura je sedmih.','Ob sedmih.','Je sedem ur.'], correct:0 },
  { type:'qcm', label:'QCM', question:'"Pol šestih" signifie…', choices:['5h30','6h30','6h00','5h00'], correct:0 },
  { type:'qcm', label:'QCM', question:'Il est 3h30. On dit…', choices:['Pol štirih.','Pol treh.','Ura je tri.','Pol dveh.'], correct:0 },
  { type:'qcm', label:'QCM grammaire', question:'Pour un rendez-vous "à 8h", on dit :',
    choices:['Ob osmih.','Ura je osem.','Pol osmih.','Ob osem.'], correct:0 },

  { type:'qcm', label:'QCM pol', question:'"Pol osmih" signifie :',
    choices:['7h30 (à moitié vers 8h)','8h30','8h00','7h00'], correct:0 },
  { type:'qcm', label:'QCM programme', question:'"Vstanem ob sedmih." signifie :',
    choices:['Je me lève à 7h.','Je me couche à 7h.','Je pars à 7h.','J\'arrive à 7h.'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['Sestanek je ob ___. (La réunion est à 2h30)'], blank:'pol treh', bank:['pol treh','pol štirih','ura je tri','pol dveh'] },
  { type:'fill', label:'Phrase à trous', sentence:['Kino začne ob ___. (Le cinéma commence à 7h30.)'], blank:'pol osmih', bank:['pol osmih','pol sedmih','pol devetih','pol šestih'] },
  { type:'fill', label:'Phrase à trous', sentence:['___ je ura ? (Quelle heure est-il ?)'], blank:'Koliko', bank:['Koliko','Kakšna','Kdaj','Kje'] },

  { type:'fill', label:'Phrase à trous', sentence:['Vstanem ob ___. (Je me lève à 7h.)'], blank:'sedmih', bank:['sedmih','osmih','devetih','desetih'] },
  { type:'fill', label:'Phrase à trous', sentence:['Vlak odpeljuje ob štirih in ___. (Le train part à 4h30.)'], blank:'pol', bank:['pol','četrt','ura','enajst'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Koliko je ura ? Ura je pol osmih.', words:['Koliko','je','ura','?','Ura','je','pol','osmih','.'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Avtobus pride ob petih in pol.', words:['Avtobus','pride','ob','petih','in','pol','.'] },

  { type:'story', label:'Histoire', title:'Rendez-vous au téléphone',
    narration:"Ana appelle le cabinet médical pour prendre un rendez-vous. Elle a besoin d\'un médecin pour jeudi.",
    dialogue:[
      {speaker:'Recept.', text:'Zdravstveni dom Ljubljana, dober dan !', side:'right'},
      {speaker:'Ana',     text:'Dober dan ! Bi rada naročila termin.', side:'left'},
      {speaker:'Recept.', text:'Kdaj bi prišli ? Kateri dan ?', side:'right'},
      {speaker:'Ana',     text:'V četrtek, če je možno.', side:'left'},
      {speaker:'Recept.', text:'V četrtek imamo ob devetih ali ob pol enajstih.', side:'right'},
      {speaker:'Ana',     text:'Ob devetih je bolje. Ni prekmalu ?', side:'left'},
      {speaker:'Recept.', text:'Ni problema. Ura je devet — ob devetih vas čakamo.', side:'right'},
      {speaker:'Ana',     text:'Odlično ! Hvala lepa !', side:'left'},
    ],
    translation:{
      'Zdravstveni dom Ljubljana, dober dan !':'Centre médical de Ljubljana, bonjour !',
      'Bi rada naročila termin.':'Je voudrais prendre un rendez-vous.',
      'Kdaj bi prišli ? Kateri dan ?':'Quand viendriez-vous ? Quel jour ?',
      'V četrtek, če je možno.':'Jeudi, si c\'est possible.',
      'V četrtek imamo ob devetih ali ob pol enajstih.':'Jeudi nous avons à 9h ou à 10h30.',
      'Ob devetih je bolje.':'À 9h c\'est mieux.',
      'Ura je devet — ob devetih vas čakamo.':'L\'heure c\'est 9h — on vous attend à 9h.',
      'Odlično ! Hvala lepa !':'Excellent ! Merci beaucoup !',
    }
  },

  { type:'qcm', label:'QCM histoire', question:'Quel jour Ana veut-elle le rendez-vous ?', choices:['Jeudi','Lundi','Vendredi','Mercredi'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'À quelle heure choisit-elle ?', choices:['9h','10h30','8h','11h'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'"Ob pol enajstih" = …', choices:['10h30','11h30','11h00','10h00'], correct:0 },

  { type:'dictee', label:'Dictée', word:'Koliko', phonetic:'[KO-li-ko]', hint:'Combien — 6 lettres' },
  { type:'dictee', label:'Dictée', word:'Polnoč', phonetic:'[POL-noch]', hint:'Minuit — 6 lettres' },

  { type:'dialogue', label:'À toi !', lines:[
    {speaker:'Ana', text:'Koliko je ura ?', side:'left'},
    {speaker:'Toi', text:'Ura je ___.', side:'right', blank:'pol treh', hint:'2h30 → pol treh'},
    {speaker:'Ana', text:'Ob kateri uri je sestanek ?', side:'left'},
    {speaker:'Toi', text:'Sestanek je ___.', side:'right', blank:'ob osmih', hint:'à 8h → ob osmih'},
    {speaker:'Ana', text:'In kdaj odpeljuje vlak ?', side:'left'},
    {speaker:'Toi', text:'Vlak odpeljuje ___.', side:'right', blank:'ob pol petih', hint:'à 4h30 → ob pol petih'},
  ]},
];
