// ═══════════════════════════════════════════
// 1-19 — Les courses & aliments
// ═══════════════════════════════════════════
const EX_1_19 = [
  { type:'presentation', label:'Aliments de base', word:'Kruh — Mleko — Meso — Jajca', phonetic:'[KRUH] [MLE-ko] [ME-so] [YAY-tsa]', translation:'Pain — Lait — Viande — Œufs',
    cultural:{title:'Mercator & Spar', text:'Les supermarchés slovènes : Mercator et Spar (locaux), Lidl et Hofer (Aldi). Les marchés producteurs (tržnica) sont très populaires le samedi matin !'},
    histoire:{title:'Gastronomie slovène', text:'La cuisine slovène fusionne influences autrichiennes (štruklji), italiennes (jota du Karst), et balkaniques. La kranjska klobasa (saucisse de Carniole) est protégée IGP depuis 2015. Le vin de Brda et de Primorska rivalise avec les grands vins italiens. Le miel de Carniole (kranjska čebela) est mondialement réputé.'} },
  { type:'tts_repeat', label:'Légumes', word:'Krompir, paradižnik, čebula, česen, korenje, solata', phonetic:'[KROM-pir, pa-ra-DIZH-nik, CHE-bu-la, CHE-sen, ko-REN-ye, so-LA-ta]', translation:'Pomme de terre, tomate, oignon, ail, carotte, salade' },
  { type:'tts_repeat', label:'Fruits & produits laitiers', word:'Jabolko, banana, jagoda, sir, maslo, jogurt', phonetic:'[YAB-lo-ko, ba-NA-na, ya-GO-da, SIR, MAS-lo, YO-gurt]', translation:'Pomme, banane, fraise, fromage, beurre, yaourt' },
  { type:'matching', label:'Aliments → français', pairs:[
    {sl:'Kruh',       fr:'Pain'},
    {sl:'Mleko',      fr:'Lait'},
    {sl:'Krompir',    fr:'Pomme de terre'},
    {sl:'Paradižnik', fr:'Tomate'},
    {sl:'Sir',        fr:'Fromage'},
  ]},
  { type:'matching', label:'Encore des aliments', pairs:[
    {sl:'Jabolko', fr:'Pomme'},
    {sl:'Jagoda',  fr:'Fraise'},
    {sl:'Čebula',  fr:'Oignon'},
    {sl:'Česen',   fr:'Ail'},
    {sl:'Maslo',   fr:'Beurre'},
  ]},
  { type:'presentation', label:'Au magasin', word:'Kje je... ? — Imate... ?', phonetic:'[KYE ye] [I-ma-te]', translation:'Où est... ? — Avez-vous... ?',
    cultural:{title:'Vocabulaire du supermarché', text:'"Koliko stane ?" = combien ça coûte. "Predrago !" = trop cher ! "Plačam z kartico" = je paie par carte. "Vrečka, prosim" = un sac, s\'il vous plaît.'} },
  { type:'tts_repeat', label:'Expressions du magasin', word:'Koliko stane ? Predrago ! Plačam z gotovino. Račun, prosim.', phonetic:'[KO-li-ko STA-ne ? pre-DRA-go ! PLA-cham z go-to-VI-no. RA-chun PRO-sim.]', translation:'Combien ça coûte ? Trop cher ! Je paie en espèces. La note/ticket, s\'il vous plaît.' },
  { type:'fill', label:'Phrase à trous', sentence:['___ je kruh, prosim ? (Où est le pain ?)'], blank:'Kje', bank:['Kje','Kdaj','Koliko','Kako'] },
  { type:'story', label:'Histoire', title:'Tina au Mercator',
    narration:"Tina a 20 minutes avant la fermeture. Elle cherche du pain, du lait, des tomates et du fromage.",
    dialogue:[
      {speaker:'Tina',  text:'Oprostite, kje je kruh ?', side:'left'},
      {speaker:'Prod.', text:'V tretjem hodniku, na levi strani.', side:'right'},
      {speaker:'Tina',  text:'Hvala. In mleko ?', side:'left'},
      {speaker:'Prod.', text:'Mleko je v hladilniku, na zadnji strani.', side:'right'},
      {speaker:'Tina',  text:'Koliko stane ta sir ?', side:'left'},
      {speaker:'Prod.', text:'Štiri evre za sto gramov.', side:'right'},
      {speaker:'Tina',  text:'Predrago ! Imate kaj cenejšega ?', side:'left'},
      {speaker:'Prod.', text:'Ja, ta stane dva evra. Je dober !', side:'right'},
    ],
    translation:{
      'Kje je kruh ?':'Où est le pain ?',
      'V tretjem hodniku, na levi strani.':'Dans le troisième couloir, sur la gauche.',
      'Mleko je v hladilniku, na zadnji strani.':'Le lait est dans le frigo, au fond.',
      'Štiri evre za sto gramov.':'Quatre euros pour cent grammes.',
      'Predrago ! Imate kaj cenejšega ?':'Trop cher ! Avez-vous quelque chose de moins cher ?',
      'Ja, ta stane dva evra. Je dober !':'Oui, celui-là coûte deux euros. Il est bon !',
    }
  },
  { type:'qcm', label:'QCM histoire', question:'Où se trouve le pain ?', choices:['3ème couloir à gauche','Au fond','À droite de l\'entrée','Au rayon frais'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'Pourquoi Tina refuse le premier fromage ?', choices:['Trop cher','Mauvais goût','Mauvaise marque','Trop gras'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'Combien coûte le deuxième fromage ?', choices:['2 euros','4 euros','1 euro','3 euros'], correct:0 },
  { type:'dictee', label:'Dictée', word:'Paradižnik', phonetic:'[pa-ra-DIZH-nik]', hint:'Tomate — 10 lettres avec Ž' },
  { type:'reconstruct', label:'Reconstitue', sentence:'Koliko stane en kilogram jabolk ?', words:['Koliko','stane','en','kilogram','jabolk','?'] },
];
