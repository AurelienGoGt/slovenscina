// ═══════════════════════════════════════════
// 1-15 — L'heure
// ═══════════════════════════════════════════
const EX_1_15 = [
  { type:'presentation', label:'Demander l\'heure', word:'Koliko je ura ?', phonetic:'[KO-li-ko ye U-ra]', translation:'Quelle heure est-il ?',
    cultural:{title:'Ura = heure / montre', text:'"Ura" signifie à la fois "heure" et "montre/horloge". "Moja ura je pokvarjena" = ma montre est cassée. "Ura je deset" = il est 10h. Simple !'},
    histoire:{title:'Ljubljana — Capitale verte 2016', text:'Ljubljana a été désignée Capitale verte européenne 2016. Le maire Zoran Janković a piétonisé le centre historique en 2007. Résultat : une ville où bars et cafés débordent sur les trottoirs. La rivière Ljubljanica traverse le centre — les quais sont le cœur de la vie nocturne.'} },
  { type:'tts_repeat', label:'Heures pleines', word:'Ura je ena. Ura je pet. Ura je dvanajst.', phonetic:'[U-ra ye E-na. U-ra ye PET. U-ra ye DVA-nayest.]', translation:'Il est 1h. Il est 5h. Il est midi.' },
  { type:'matching', label:'Heures → français', pairs:[
    {sl:'Ura je tri.',    fr:'Il est 3h.'},
    {sl:'Ura je šest.',   fr:'Il est 6h.'},
    {sl:'Ura je deset.',  fr:'Il est 10h.'},
    {sl:'Ura je enajst.', fr:'Il est 11h.'},
    {sl:'Ura je dvanajst.',fr:'Il est midi.'},
  ]},
  { type:'presentation', label:'La demi-heure — POL', word:'Pol treh = 2h30 !', phonetic:'[POL TREH]', translation:'"Pol" = demi. "Pol treh" = à moitié vers 3h = 2h30',
    cultural:{title:'Logique inversée — attention !', text:'En slovène on pense à l\'heure qui ARRIVE : "pol treh" = à moitié chemin vers trois heures = 2h30. "Pol šestih" = 5h30. "Pol enih" = 0h30. C\'est le contraire de l\'anglais "half past" mais similaire à l\'allemand !'} },
  { type:'tts_repeat', label:'Demi-heures', word:'Pol dveh, pol treh, pol šestih, pol enajstih', phonetic:'[POL DVEH, POL TREH, POL SHES-tih, POL e-NAY-stih]', translation:'1h30, 2h30, 5h30, 10h30' },
  { type:'matching', label:'Demi-heures → français', pairs:[
    {sl:'Pol dveh.',     fr:'Il est 1h30.'},
    {sl:'Pol treh.',     fr:'Il est 2h30.'},
    {sl:'Pol petih.',    fr:'Il est 4h30.'},
    {sl:'Pol enajstih.', fr:'Il est 10h30.'},
    {sl:'Pol dvanajstih.',fr:'Il est 11h30.'},
  ]},
  { type:'qcm', label:'QCM', question:'"Pol šestih" signifie…', choices:['5h30','6h30','6h00','5h00'], correct:0 },
  { type:'qcm', label:'QCM', question:'Il est 3h30. On dit…', choices:['Pol štirih.','Pol treh.','Ura je tri.','Pol dveh.'], correct:0 },
  { type:'presentation', label:'Le quart d\'heure', word:'Četrt čez tri = 3h15', phonetic:'[CHET-rt CHEZ TRI]', translation:'"Četrt" = quart. "Čez" = passé/après.',
    cultural:{title:'Les quarts d\'heure', text:'"Četrt čez tri" = 3h15 (un quart après trois). "Tri četrt na štiri" = 3h45 (trois quarts vers quatre). Ces formes sont un peu avancées — pour l\'instant, concentre-toi sur les heures pleines et les demies !'} },
  { type:'fill', label:'Phrase à trous', sentence:['Sestanek je ob ___. (La réunion est à 2h30)'], blank:'pol treh', bank:['pol treh','pol štirih','ura je tri','pol dveh'] },
  { type:'dictee', label:'Dictée', word:'Koliko', phonetic:'[KO-li-ko]', hint:'Combien — 6 lettres' },
  { type:'reconstruct', label:'Reconstitue', sentence:'Koliko je ura ? Ura je pol osmih.', words:['Koliko','je','ura','?','Ura','je','pol','osmih','.'] },
];
