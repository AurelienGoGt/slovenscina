// ═══════════════════════════════════════════
// NIVEAU 1 — STRUCTURE (20 leçons + 6 récaps)
// ═══════════════════════════════════════════
const NIVEAU1 = {
  id: 1, name: 'Niveau 1', sub: 'Bases & prononciation', emoji: '🏔️',
  lessons: [
    { id:'1-1',  title:'Salutations & politesse',       sub:'Zdravo, hvala, prosim, au revoir...',         xp:60,  words:15, type:'lesson' },
    { id:'1-2',  title:'Alphabet & phonétique — 1',     sub:'Voyelles, consonnes simples, accent',          xp:65,  words:0,  type:'lesson' },
    { id:'1-3',  title:'Alphabet & phonétique — 2',     sub:'Š Ž Č C — les sons spéciaux',                xp:65,  words:0,  type:'lesson' },
    { id:'1-4',  title:'Alphabet & phonétique — 3',     sub:'LJ NJ R vocalique — lire des mots réels',    xp:65,  words:0,  type:'lesson' },
    { id:'1-r1', title:'Récap — Salutations & Alpha',   sub:'Révision salutations + alphabet + sons',      xp:30,  words:0,  type:'recap'  },
    { id:'1-5',  title:'Chiffres 1 à 10',               sub:'Ena, dve, tri... compter, l\'âge',             xp:55,  words:10, type:'lesson' },
    { id:'1-6',  title:'Nombres 11 à 100',              sub:'Enajst à devetnajst, dizaines -deset',         xp:60,  words:12, type:'lesson' },
    { id:'1-7',  title:'Nombres & prix',                sub:'Sto, tisoč, evro, koliko stane ?',             xp:60,  words:10, type:'lesson' },
    { id:'1-r2', title:'Récap — Chiffres & nombres',    sub:'Révision 1-1000 + prix en euros',             xp:30,  words:0,  type:'recap'  },
    { id:'1-8',  title:'Couleurs',                      sub:'12 couleurs + accord de l\'adjectif',          xp:60,  words:12, type:'lesson' },
    { id:'1-9',  title:'Adjectifs',                     sub:'Grand, petit, beau, vieux, chaud...',          xp:60,  words:14, type:'lesson' },
    { id:'1-10', title:'Décrire une personne',          sub:'Apparence, caractère, comparaisons',           xp:65,  words:14, type:'lesson' },
    { id:'1-r3', title:'Récap — Couleurs & adjectifs',  sub:'Révision couleurs + adjectifs + description', xp:30,  words:0,  type:'recap'  },
    { id:'1-11', title:'La famille — proche',           sub:'Mama, oče, brat, sestra, sin, hči...',         xp:60,  words:16, type:'lesson' },
    { id:'1-12', title:'La famille — élargie',          sub:'Babica, dedek, teta, stric, cousins...',       xp:60,  words:14, type:'lesson' },
    { id:'1-13', title:'Jours & mois',                  sub:'Lundi→dimanche, janvier→décembre',             xp:60,  words:14, type:'lesson' },
    { id:'1-r4', title:'Récap — Famille & calendrier',  sub:'Révision famille + jours + mois',             xp:30,  words:0,  type:'recap'  },
    { id:'1-14', title:'Météo & saisons',               sub:'Pomlad, poletje, jesen, zima, dežuje...',      xp:60,  words:14, type:'lesson' },
    { id:'1-15', title:'L\'heure',                      sub:'Koliko je ura ? Pol treh, četrt čez...',       xp:60,  words:10, type:'lesson' },
    { id:'1-16', title:'Se présenter',                  sub:'Identité, pays, langues, métier',              xp:65,  words:16, type:'lesson' },
    { id:'1-r5', title:'Récap — Météo, heure, présen.', sub:'Révision météo + heure + présentation',       xp:30,  words:0,  type:'recap'  },
    { id:'1-17', title:'Mon quotidien',                 sub:'Vstati, jesti, delati, spati + routine',       xp:60,  words:16, type:'lesson' },
    { id:'1-18', title:'La maison & les pièces',        sub:'Hiša, soba, kuhinja, meubles...',              xp:60,  words:16, type:'lesson' },
    { id:'1-19', title:'Les courses & aliments',        sub:'Kruh, mleko, légumes, au magasin',             xp:60,  words:18, type:'lesson' },
    { id:'1-20', title:'En ville & directions',         sub:'Bus, banque, muzej, naravnost, levo...',       xp:65,  words:18, type:'lesson' },
    { id:'1-rf', title:'Grand récap — Niveau 1',        sub:'Bilan complet des 20 leçons',                 xp:80,  words:0,  type:'recap'  },
  ]
};

const EX_N1_RECAPS = {

'1-r1': [
  { type:'recap_intro', label:'Récap', title:'Révision — Salutations & Alphabet', sub:'Leçons 1 à 4' },
  { type:'matching', label:'Salutations', pairs:[
    {sl:'Zdravo',     fr:'Salut / Bonjour'},
    {sl:'Hvala lepa', fr:'Merci beaucoup'},
    {sl:'Prosim',     fr:"S'il vous plaît"},
    {sl:'Nasvidenje', fr:'Au revoir'},
  ]},
  { type:'qcm', label:'QCM', question:'Comment se prononce "Š" ?',
    choices:['[ch] comme "chat"','[s] comme "son"','[j] comme "jardin"','[z] comme "zoo"'], correct:0 },
  { type:'qcm', label:'QCM', question:'Comment se prononce "Ž" ?',
    choices:['[j] comme "jardin"','[z] comme "zoo"','[ch] comme "chat"','[v] comme "vin"'], correct:0 },
  { type:'matching', label:'Sons spéciaux', pairs:[
    {sl:'C',  fr:'[ts] — tsar'},
    {sl:'Š',  fr:'[ch] — chat'},
    {sl:'Ž',  fr:'[j] — jardin'},
    {sl:'Č',  fr:'[tch] — match'},
  ]},
  { type:'dictee', label:'Dictée', word:'Zdravo', phonetic:'[ZDRA-vo]', hint:'La salutation informelle' },
  { type:'dictee', label:'Dictée', word:'Nasvidenje', phonetic:'[nas-vi-DEN-ye]', hint:'Au revoir — 10 lettres' },
],

'1-r2': [
  { type:'recap_intro', label:'Récap', title:'Révision — Chiffres & Nombres', sub:'Leçons 5 à 7' },
  { type:'matching', label:'Chiffres 1-10', pairs:[
    {sl:'1 — ena',   fr:'un'},
    {sl:'4 — štiri', fr:'quatre'},
    {sl:'7 — sedem', fr:'sept'},
    {sl:'9 — devet', fr:'neuf'},
  ]},
  { type:'matching', label:'Dizaines', pairs:[
    {sl:'20 — dvajset',  fr:'vingt'},
    {sl:'30 — trideset', fr:'trente'},
    {sl:'50 — petdeset', fr:'cinquante'},
    {sl:'100 — sto',     fr:'cent'},
  ]},
  { type:'qcm', label:'QCM', question:'Comment dit-on "17" ?',
    choices:['Sedemnajst','Sedemdeset','Sedem','Sedemnajst deset'], correct:0 },
  { type:'qcm', label:'QCM', question:'"Koliko stane?" signifie…',
    choices:['Combien ça coûte ?','Quel est ton nom ?','Quel âge as-tu ?','Où est-ce ?'], correct:0 },
  { type:'dictee', label:'Dictée', word:'Dvajset', phonetic:'[DVA-yset]', hint:'20 — 7 lettres' },
],

'1-r3': [
  { type:'recap_intro', label:'Récap', title:'Révision — Couleurs & Adjectifs', sub:'Leçons 8 à 10' },
  { type:'matching', label:'Couleurs', pairs:[
    {sl:'Rdeča', fr:'Rouge'}, {sl:'Modra',  fr:'Bleue'},
    {sl:'Zelena',fr:'Verte'}, {sl:'Rumena', fr:'Jaune'},
  ]},
  { type:'matching', label:'Adjectifs', pairs:[
    {sl:'Velik',  fr:'Grand'}, {sl:'Majhen', fr:'Petit'},
    {sl:'Lep',    fr:'Beau'},  {sl:'Star',   fr:'Vieux'},
  ]},
  { type:'qcm', label:'QCM', question:'"Višji od" signifie…',
    choices:['Plus grand que','Plus petit que','Aussi grand que','Le plus grand'], correct:0 },
  { type:'dictee', label:'Dictée', word:'Zelena', phonetic:'[ze-LE-na]', hint:'La couleur verte' },
],

'1-r4': [
  { type:'recap_intro', label:'Récap', title:'Révision — Famille & Calendrier', sub:'Leçons 11 à 13' },
  { type:'matching', label:'Famille proche', pairs:[
    {sl:'Mama',   fr:'Maman'}, {sl:'Oče',    fr:'Papa'},
    {sl:'Brat',   fr:'Frère'}, {sl:'Sestra', fr:'Sœur'},
  ]},
  { type:'matching', label:'Famille élargie', pairs:[
    {sl:'Babica',    fr:'Grand-mère'}, {sl:'Dedek',  fr:'Grand-père'},
    {sl:'Teta',      fr:'Tante'},      {sl:'Bratranec', fr:'Cousin'},
  ]},
  { type:'matching', label:'Jours', pairs:[
    {sl:'Ponedeljek', fr:'Lundi'},    {sl:'Sreda',  fr:'Mercredi'},
    {sl:'Petek',      fr:'Vendredi'}, {sl:'Nedelja',fr:'Dimanche'},
  ]},
  { type:'qcm', label:'QCM', question:'Comment dit-on "J\'ai une sœur" ?',
    choices:['Imam sestro.','Imam sestra.','Sem sestra.','Mam sestre.'], correct:0 },
  { type:'dictee', label:'Dictée', word:'Ponedeljek', phonetic:'[po-ne-DEL-yek]', hint:'Lundi — 10 lettres' },
],

'1-r5': [
  { type:'recap_intro', label:'Récap', title:'Révision — Météo, Heure & Présentation', sub:'Leçons 14 à 16' },
  { type:'matching', label:'Météo & saisons', pairs:[
    {sl:'Pomlad',  fr:'Printemps'}, {sl:'Poletje', fr:'Été'},
    {sl:'Dežuje',  fr:'Il pleut'},  {sl:'Sneži',   fr:'Il neige'},
  ]},
  { type:'matching', label:'Heures', pairs:[
    {sl:'Ura je tri.',   fr:'Il est 3h.'},
    {sl:'Pol petih.',    fr:'Il est 4h30.'},
    {sl:'Ura je osem.',  fr:'Il est 8h.'},
    {sl:'Pol enajstih.', fr:'Il est 10h30.'},
  ]},
  { type:'qcm', label:'QCM', question:'"Pol treh" signifie…',
    choices:['2h30','3h30','3h00','2h00'], correct:0 },
  { type:'qcm', label:'QCM', question:'Comment dit-on "Je parle slovène" ?',
    choices:['Govorim slovensko.','Govorim slovenščina.','Sem slovensko.','Znam slovensko.'], correct:0 },
  { type:'dictee', label:'Dictée', word:'Govorim', phonetic:'[go-VO-rim]', hint:'Je parle' },
],

'1-rf': [
  { type:'recap_intro', label:'Grand récap', title:'Bilan — Niveau 1 complet', sub:'20 leçons passées en revue' },
  { type:'matching', label:'Salutations', pairs:[
    {sl:'Zdravo',     fr:'Salut'}, {sl:'Hvala',  fr:'Merci'},
    {sl:'Nasvidenje', fr:'Au revoir'}, {sl:'Prosim', fr:"S'il vous plaît"},
  ]},
  { type:'matching', label:'Chiffres clés', pairs:[
    {sl:'5 — pet',       fr:'cinq'},
    {sl:'10 — deset',    fr:'dix'},
    {sl:'50 — petdeset', fr:'cinquante'},
    {sl:'100 — sto',     fr:'cent'},
  ]},
  { type:'matching', label:'Famille', pairs:[
    {sl:'Mama',   fr:'Maman'}, {sl:'Babica', fr:'Grand-mère'},
    {sl:'Brat',   fr:'Frère'}, {sl:'Teta',   fr:'Tante'},
  ]},
  { type:'qcm', label:'QCM final', question:'Comment demander "Où est la banque ?" ?',
    choices:['Kje je banka?','Kako je banka?','Kaj je banka?','Kdo je banka?'], correct:0 },
  { type:'reconstruct', label:'Défi final',
    sentence:'Pojdite naravnost in zavijte levo.',
    words:['Pojdite','naravnost','in','zavijte','levo','.'] },
  { type:'dictee', label:'Dictée finale', word:'Slovenija', phonetic:'[slo-VE-ni-ya]', hint:'Le nom du pays — 9 lettres' },
],

};
