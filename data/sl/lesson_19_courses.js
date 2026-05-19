// ═══════════════════════════════════════════
// 1-19 — Les courses & aliments
// ═══════════════════════════════════════════
const EX_1_19 = [
  { type:'presentation', label:'Aliments de base', word:'Kruh — Mleko — Meso — Jajca', phonetic:'[KRUH] [MLE-ko] [ME-so] [YAY-tsa]', translation:'Pain — Lait — Viande — Œufs',
    cultural:{title:'Mercator & Spar', text:'Les supermarchés slovènes : Mercator et Spar (locaux), Lidl et Hofer (Aldi). Les marchés producteurs (tržnica) sont très populaires le samedi matin !'},
    histoire:{title:'La tržnica de Ljubljana', text:'Le marché de Pogačarjev trg (place Pogačar) est le cœur gastronomique de Ljubljana. Ouvert tous les matins, il est bondé le samedi. Légumes du terroir, fromages de montagne, miel de la forêt, kranjska klobasa... Plečnik a conçu les halles couvertes en 1940, classées UNESCO.'} },

  { type:'presentation', label:'Accusatif — l\'objet direct acheté', word:'Dajte mi kruh. — Vzamem jabolko.', phonetic:'[DAY-te mi KRUH] [VZA-mem YAB-lo-ko]', translation:'Donnez-moi du pain. — Je prends une pomme.', noTTS:true,
    cultural:{title:'L\'accusatif pour les objets directs', text:'Ce qu\'on achète, mange ou donne se met à l\'accusatif. Masculin inanimé : kruh → kruh (pas de changement). Féminin : jabolka → jabolko. Neutre : mleko → mleko (pas de changement). "Dajte mi en kruh" = donnez-moi un pain. "Vzamem eno jabolko" = je prends une pomme.'} },

  { type:'presentation', label:'Génitif après la négation', word:'Nimam denarja. — Nimamo kruha.', phonetic:'[NI-mam de-NAR-ya] [ni-MA-mo KRU-ha]', translation:'Je n\'ai pas d\'argent. — Nous n\'avons pas de pain.', noTTS:true,
    cultural:{title:'Génitif de négation !', text:'En slovène, après une négation, le complément d\'objet se met au génitif (pas à l\'accusatif). "Imam denar" (j\'ai de l\'argent, accusatif) → "Nimam denarja" (je n\'ai pas d\'argent, génitif). "Kupim kruh" → "Ne kupim kruha". Règle importante !'} },

  { type:'tts_repeat', label:'Légumes', word:'Krompir, paradižnik, čebula, česen, korenje, solata, zelenjava', phonetic:'[KROM-pir, pa-ra-DIZH-nik, CHE-bu-la, CHE-sen, ko-REN-ye, so-LA-ta, ze-LEN-ya-va]', translation:'Pomme de terre, tomate, oignon, ail, carotte, salade, légumes (général)' },
  { type:'tts_repeat', label:'Fruits & produits laitiers', word:'Jabolko, banana, jagoda, sadje, sir, maslo, jogurt', phonetic:'[YAB-lo-ko, ba-NA-na, ya-GO-da, SAD-ye, SIR, MAS-lo, YO-gurt]', translation:'Pomme, banane, fraise, fruits (général), fromage, beurre, yaourt' },
  { type:'tts_repeat', label:'Types de magasins', word:'Mesnica, pekarna, mlekarna, ribarna, tržnica, supermarket', phonetic:'[MES-ni-tsa, pe-KAR-na, mle-KAR-na, ri-BAR-na, TRZH-ni-tsa, su-per-MAR-ket]', translation:'Boucherie, boulangerie, crèmerie, poissonnerie, marché, supermarché' },
  { type:'tts_repeat', label:'Unités de mesure', word:'Kilogram, pol kilograma, liter, kos, šopek, vrečka', phonetic:'[ki-lo-GRAM, POL ki-lo-GRA-ma, LI-ter, KOS, SHO-pek, VRECH-ka]', translation:'Kilogramme, 500g / demi-kilo, litre, pièce, bouquet, sac plastique' },

  { type:'matching', label:'Aliments → français', pairs:[
    {sl:'Kruh',       fr:'Pain'},
    {sl:'Mleko',      fr:'Lait'},
    {sl:'Krompir',    fr:'Pomme de terre'},
    {sl:'Paradižnik', fr:'Tomate'},
    {sl:'Sir',        fr:'Fromage'},
  ]},
  { type:'matching', label:'Légumes et fruits → français', pairs:[
    {sl:'Jabolko',   fr:'Pomme'},
    {sl:'Jagoda',    fr:'Fraise'},
    {sl:'Čebula',    fr:'Oignon'},
    {sl:'Korenje',   fr:'Carotte'},
    {sl:'Zelenjava', fr:'Légumes'},
  ]},
  { type:'matching', label:'Magasins → français', pairs:[
    {sl:'Mesnica',   fr:'Boucherie'},
    {sl:'Pekarna',   fr:'Boulangerie'},
    {sl:'Mlekarna',  fr:'Crèmerie'},
    {sl:'Ribarna',   fr:'Poissonnerie'},
    {sl:'Tržnica',   fr:'Marché'},
  ]},
  { type:'matching', label:'Phrases de courses → français', pairs:[
    {sl:'Imate... ?',            fr:'Avez-vous... ?'},
    {sl:'Dajte mi prosim...',    fr:'Donnez-moi s\'il vous plaît...'},
    {sl:'Koliko stane... ?',     fr:'Combien coûte... ?'},
    {sl:'Nimamo.',               fr:'Nous n\'en avons pas.'},
    {sl:'Koliko stane en kg ?',  fr:'Combien coûte un kilo ?'},
  ]},

  { type:'qcm', label:'QCM', question:'"Dajte mi prosim kos kruha" signifie :',
    choices:['Donnez-moi s\'il vous plaît un morceau de pain','Avez-vous du pain ?','Combien coûte le pain ?','Où est le pain ?'], correct:0 },
  { type:'qcm', label:'QCM grammaire', question:'Après la négation, on met le génitif. "Je n\'ai pas d\'argent" :',
    choices:['Nimam denarja.','Nimam denar.','Ne imam denar.','Ni denarja.'], correct:0 },
  { type:'qcm', label:'QCM', question:'"Imate kruh ?" signifie :',
    choices:['Avez-vous du pain ?','Combien coûte le pain ?','Où est le pain ?','Je veux du pain.'], correct:0 },
  { type:'qcm', label:'QCM', question:'"Pol kilograma" représente :',
    choices:['500g','250g','1kg','1,5kg'], correct:0 },
  { type:'qcm', label:'QCM', question:'Où achète-t-on du poisson en priorité ?', choices:['À la ribarna','À la mesnica','À la pekarna','Au supermarket'], correct:0 },
  { type:'qcm', label:'QCM culturel', question:'Le marché de Ljubljana se trouve sur :',
    choices:['Pogačarjev trg','Prešernov trg','Mestni trg','Kongresni trg'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['___ mi prosim en kilogram jabolk. (Donnez-moi s\'il vous plaît un kilo de pommes.)'], blank:'Dajte', bank:['Dajte','Koliko','Imate','Nimamo'] },
  { type:'fill', label:'Phrase à trous', sentence:['Koliko ___ en kilogram paradižnikov ? (Combien coûte un kilo de tomates ?)'], blank:'stane', bank:['stane','imam','dajte','imate'] },
  { type:'fill', label:'Phrase à trous', sentence:['___ z gotovino. (Je paie en espèces.)'], blank:'Plačam', bank:['Plačam','Kupim','Imam','Dajte'] },
  { type:'fill', label:'Phrase à trous', sentence:['Nimam ___. (Je n\'ai pas d\'argent. — génitif !)'], blank:'denarja', bank:['denarja','denar','denarje','denarji'] },
  { type:'fill', label:'Phrase à trous', sentence:['___ kruh ? (Avez-vous du pain ?)'], blank:'Imate', bank:['Imate','Nimamo','Dajte','Koliko'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Dajte mi prosim en kilogram jabolk.', words:['Dajte','mi','prosim','en','kilogram','jabolk','.'] },

  { type:'story', label:'Histoire', title:'Sobotno jutro na tržnici — Samedi matin au marché',
    narration:"Tina gre vsako soboto na tržnico na Pogačarjevem trgu v Ljubljani. Danes kupuje zelenjavo in sadje za teden.",
    dialogue:[
      {speaker:'Tina',  text:'Dober dan ! Imate sveže jagode danes ?', side:'left'},
      {speaker:'Prod.', text:'Dober dan ! Ja, prišle so zjutraj. En kilogram — tri evre.', side:'right'},
      {speaker:'Tina',  text:'Dajte mi prosim pol kilograma. In koliko stane en kilogram korenja ?', side:'left'},
      {speaker:'Prod.', text:'Korenje — en evro petdeset. Sveže je, domače !', side:'right'},
      {speaker:'Tina',  text:'Vzamem en kilogram. Imate zeleno solato ?', side:'left'},
      {speaker:'Prod.', text:'Oprostite, danes nimamo. Ampak jutri pride nova pošiljka.', side:'right'},
      {speaker:'Tina',  text:'V redu. Koliko je skupaj ?', side:'left'},
      {speaker:'Prod.', text:'Skupaj šest evrov in petdeset centov. Hvala in lep dan !', side:'right'},
    ],
    translation:{
      'Imate sveže jagode danes ?':'Avez-vous des fraises fraîches aujourd\'hui ?',
      'Ja, prišle so zjutraj.':'Oui, elles sont arrivées ce matin.',
      'Dajte mi prosim pol kilograma.':'Donnez-moi s\'il vous plaît un demi-kilo.',
      'Koliko stane en kilogram korenja ?':'Combien coûte un kilo de carottes ?',
      'En evro petdeset. Sveže je, domače !':'Un euro cinquante. C\'est frais, du pays !',
      'Vzamem en kilogram.':'Je prends un kilo.',
      'Danes nimamo. Ampak jutri pride nova pošiljka.':'Aujourd\'hui nous n\'en avons pas. Mais demain une nouvelle livraison arrive.',
      'Skupaj šest evrov in petdeset centov.':'Six euros cinquante en tout.',
    }
  },

  { type:'qcm', label:'QCM histoire', question:'Combien coûte un kilo de fraises ?', choices:['3 euros','1,50 euro','2 euros','5 euros'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'Pourquoi Tina ne peut pas avoir de salade verte ?', choices:['Ils n\'en ont pas aujourd\'hui','C\'est trop cher','Le marché est fermé','Elle n\'en veut pas'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'Combien Tina paie-t-elle en tout ?', choices:['6,50 euros','5 euros','7 euros','3,50 euros'], correct:0 },

  { type:'dictee', label:'Dictée', word:'Paradižnik', phonetic:'[pa-ra-DIZH-nik]', hint:'Tomate — 10 lettres avec Ž' },
  { type:'dictee', label:'Dictée', word:'Zelenjava', phonetic:'[ze-LEN-ya-va]', hint:'Légumes — 9 lettres' },

  { type:'dialogue', label:'À toi de jouer !', lines:[
    {speaker:'Prod.', text:'Dober dan ! Kaj želite ?', side:'right'},
    {speaker:'Toi',   text:'Dober dan ! ___ mi prosim en kilogram jabolk.', side:'left', blank:'Dajte', hint:'donnez-moi → Dajte'},
    {speaker:'Prod.', text:'Izvoli ! Še kaj ?', side:'right'},
    {speaker:'Toi',   text:'___ stane pol kilograma jagod ?', side:'left', blank:'Koliko', hint:'combien → Koliko'},
    {speaker:'Prod.', text:'Dva evra petdeset. Vzamete ?', side:'right'},
    {speaker:'Toi',   text:'Ja, ___ vzamem. Hvala !', side:'left', blank:'vzamem', hint:'je prends → vzamem'},
  ]},
];
