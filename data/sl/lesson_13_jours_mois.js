// ═══════════════════════════════════════════
// 1-13 — Jours & mois
// ═══════════════════════════════════════════
const EX_1_13 = [
  { type:'presentation', label:'Les jours', word:'Ponedeljek — Torek — Sreda', phonetic:'[po-ne-DEL-yek] [TO-rek] [SRE-da]', translation:'Lundi — Mardi — Mercredi',
    cultural:{title:'Noms slaves', text:'"Sreda" = milieu de la semaine. "Ponedeljek" = après dimanche. Ce sont des noms d\'origine slave, pas latine comme en français !'},
    histoire:{title:'Fêtes nationales slovènes', text:'25 juin : Jour de l\'État (1991, indépendance). 8 février : Jour de la culture, hommage à France Prešeren, le poète national. 1er novembre : Jour de la Réforme — la Slovénie est historiquement luthérienne depuis le XVIe siècle. Primož Trubar a écrit le premier livre en slovène en 1550 !'} },
  { type:'tts_repeat', label:'Jours 1-7', word:'Ponedeljek, torek, sreda, četrtek, petek, sobota, nedelja', phonetic:'[po-ne-DEL-yek, TO-rek, SRE-da, CHET-r-tek, PE-tek, so-BO-ta, ne-DEL-ya]', translation:'Lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche' },
  { type:'matching', label:'Jours → français', pairs:[
    {sl:'Ponedeljek', fr:'Lundi'},
    {sl:'Torek',      fr:'Mardi'},
    {sl:'Sreda',      fr:'Mercredi'},
    {sl:'Četrtek',    fr:'Jeudi'},
    {sl:'Petek',      fr:'Vendredi'},
  ]},
  { type:'qcm', label:'QCM', question:'"Nedelja" (dimanche) — le mot contient "nedela" qui signifie…', choices:['Pas de travail (nedelovni dan)','Fin de semaine','Jour sacré','Repos'], correct:0 },
  { type:'presentation', label:'Les mois', word:'Januar — Februar — Marec', phonetic:'[YA-nu-ar] [FE-bru-ar] [MA-rets]', translation:'Janvier — Février — Mars',
    cultural:{title:'Proches du latin !', text:'La plupart des mois ressemblent aux mois latins. Exceptions : Maj (mai), Julij (juillet), Avgust (août). Décembre = December !'} },
  { type:'tts_repeat', label:'Mois 1-6', word:'Januar, februar, marec, april, maj, junij', phonetic:'[YA-nu-ar, FE-bru-ar, MA-rets, AP-ril, MAY, YU-niy]', translation:'Janvier, février, mars, avril, mai, juin' },
  { type:'tts_repeat', label:'Mois 7-12', word:'Julij, avgust, september, oktober, november, december', phonetic:'[YU-liy, AV-gust, sep-TEM-ber, ok-TO-ber, no-VEM-ber, de-TsEM-ber]', translation:'Juillet, août, septembre, octobre, novembre, décembre' },
  { type:'matching', label:'Mois → français', pairs:[
    {sl:'Januar',   fr:'Janvier'},
    {sl:'Maj',      fr:'Mai'},
    {sl:'Julij',    fr:'Juillet'},
    {sl:'Oktober',  fr:'Octobre'},
    {sl:'December', fr:'Décembre'},
  ]},
  { type:'presentation', label:'Dates', word:'Katerega je danes ?', phonetic:'[ka-TE-re-ga ye DA-nes]', translation:'On est le combien ?',
    cultural:{title:'Les dates en slovène', text:'"Danes je ponedeljek, 28. aprila." = Aujourd\'hui c\'est lundi, le 28 avril. Le mois est au génitif (-a / -ja). Pas de panique — tu verras ça plus tard !'} },
  { type:'tts_repeat', label:'Dire la date', word:'Danes je ponedeljek. Danes je 28. aprila.', phonetic:'[DA-nes ye po-ne-DEL-yek] [DA-nes ye OSEM-in-DVA-yse-ti AP-ri-la]', translation:'Aujourd\'hui c\'est lundi. Aujourd\'hui c\'est le 28 avril.' },
  { type:'fill', label:'Phrase à trous', sentence:['Danes je ___ . (Aujourd\'hui c\'est vendredi)'], blank:'petek', bank:['petek','torek','sreda','sobota'] },
  { type:'dictee', label:'Dictée', word:'Ponedeljek', phonetic:'[po-ne-DEL-yek]', hint:'Lundi — 10 lettres' },
  { type:'dictee', label:'Dictée', word:'December', phonetic:'[de-TsEM-ber]', hint:'Décembre — 8 lettres' },
  { type:'reconstruct', label:'Reconstitue', sentence:'Danes je sreda in zunaj je lepo.', words:['Danes','je','sreda','in','zunaj','je','lepo','.'] },
];
