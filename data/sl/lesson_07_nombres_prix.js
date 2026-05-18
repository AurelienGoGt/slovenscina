// ═══════════════════════════════════════════
// 1-7 — Nombres & prix
// ═══════════════════════════════════════════
const EX_1_7 = [
  { type:'presentation', label:'100 et au-delà', word:'Sto — Dvesto — Tristo', phonetic:'[STO] [DVE-sto] [TRI-sto]', translation:'100 — 200 — 300',
    cultural:{title:'Sto = cent', text:'"Sto" = cent, et ça se combine simplement : dve+sto = 200, tri+sto = 300... pour 400, 500, 600, 700, 800, 900 on dit štiristo, petsto, šeststo, sedemsto, osemsto, devetsto !'},
    histoire:{title:'Indépendance 1991 — la guerre des 10 jours', text:'La Slovénie a déclaré son indépendance de la Yougoslavie le 25 juin 1991. La guerre qui a suivi n\'a duré que 10 jours — la plus courte de l\'ex-Yougoslavie. Aujourd\'hui membre de l\'UE et de l\'OTAN depuis 2004, la Slovénie utilise l\'euro depuis 2007.'} },
  { type:'tts_repeat', label:'100 à 1000', word:'Sto, dvesto, tristo, štiristo, petsto, tisoč', phonetic:'[STO, DVE-sto, TRI-sto, CHTI-ri-sto, PET-sto, TI-soch]', translation:'100, 200, 300, 400, 500, 1000' },
  { type:'matching', label:'100-1000', pairs:[
    {sl:'100 — sto',       fr:'cent'},
    {sl:'200 — dvesto',    fr:'deux cents'},
    {sl:'500 — petsto',    fr:'cinq cents'},
    {sl:'1000 — tisoč',   fr:'mille'},
    {sl:'2000 — dve tisoč',fr:'deux mille'},
  ]},
  { type:'qcm', label:'QCM', question:'Comment dit-on "1000" ?', choices:['Tisoč','Sto','Deset tisoč','Milijon'], correct:0 },

  { type:'presentation', label:'Phrases avec nombres', word:'Ljubljana ima 300.000 prebivalcev.', phonetic:'[lyub-LYA-na I-ma TRI-sto TI-soč pre-BIV-al-tsev]', translation:'Ljubljana a 300 000 habitants.',
    cultural:{title:'La Slovénie en chiffres', text:'Slovénie : 2 millions d\'habitants (dva milijona). Ljubljana : 300 000 (tristo tisoč). Triglav : 2864 m (dve tisoč osemsto štiriinšestdeset metrov). Maintenant tu peux le dire en slovène !'} },
  { type:'tts_repeat', label:'Grands nombres', word:'Milijon — Milijarda', phonetic:'[mi-LI-yon] [mi-LI-yar-da]', translation:'Un million — Un milliard' },

  { type:'presentation', label:'Les prix', word:'Koliko stane ?', phonetic:'[KO-li-ko STA-ne]', translation:'Combien ça coûte ?',
    cultural:{title:'L\'euro en Slovénie', text:"La Slovénie utilise l'euro depuis 2007 — première ex-yougoslave à l\'adopter. On dit 'evro' et 'cent' (centime). Les prix se disent naturellement avec les nombres que tu viens d'apprendre !"} },
  { type:'tts_repeat', label:'Les prix', word:'Dva evra. Pet evrov. Sto evrov. Deset centov.', phonetic:'[DVA EV-ra] [PET EV-rov] [STO EV-rov] [DE-set TSEN-tov]', translation:'2 euros. 5 euros. 100 euros. 10 centimes.' },
  { type:'matching', label:'Expressions de prix', pairs:[
    {sl:'Koliko stane ?',     fr:'Combien ça coûte ?'},
    {sl:'Dva evra.',          fr:'Deux euros.'},
    {sl:'Pet evrov.',         fr:'Cinq euros.'},
    {sl:'Predrago !',         fr:'Trop cher !'},
    {sl:'Ugodna cena.',       fr:'Prix raisonnable.'},
  ]},
  { type:'qcm', label:'QCM', question:'Comment dit-on "7 euros" ?', choices:['Sedem evrov.','Sedem evra.','Sedem euro.','Sedemdeset.'], correct:0 },
  { type:'fill', label:'Phrase à trous', sentence:['___ stane kava ? (Combien coûte le café ?)'], blank:'Koliko', bank:['Koliko','Kdaj','Kje','Kako'] },

  { type:'story', label:'Histoire', title:'Au marché de Ljubljana',
    narration:"Luka s'arrête au marché Tržnica un samedi matin. Il veut acheter des pommes et du fromage. Il a 10 euros.",
    dialogue:[
      {speaker:'Luka',    text:'Dobro jutro ! Koliko stanejo jabolka ?', side:'left'},
      {speaker:'Vendeur', text:'Dva evra za kilogram.', side:'right'},
      {speaker:'Luka',    text:'Prosim, dva kilograma. In koliko stane sir ?', side:'left'},
      {speaker:'Vendeur', text:'Sir stane pet evrov za sto gramov.', side:'right'},
      {speaker:'Luka',    text:'To je predrago ! Hvala, samo jabolka.', side:'left'},
      {speaker:'Vendeur', text:'Štiri evre, prosim. Hvala !', side:'right'},
    ],
    translation:{
      'Koliko stanejo jabolka ?':'Combien coûtent les pommes ?',
      'Dva evra za kilogram.':'Deux euros le kilo.',
      'In koliko stane sir ?':'Et combien coûte le fromage ?',
      'Sir stane pet evrov za sto gramov.':'Le fromage coûte cinq euros pour cent grammes.',
      'To je predrago !':'C\'est trop cher !',
      'Samo jabolka.':'Seulement les pommes.',
      'Štiri evre, prosim.':'Quatre euros, s\'il vous plaît.',
    }
  },
  { type:'qcm', label:'QCM histoire', question:'Combien coûte 1 kg de pommes ?', choices:['2 euros','5 euros','4 euros','3 euros'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'Pourquoi Luka ne prend pas le fromage ?', choices:['Trop cher','Il n\'aime pas','Il en a déjà','Plus de stock'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'Combien Luka paie-t-il au total ?', choices:['4 euros','2 euros','10 euros','7 euros'], correct:0 },
  { type:'dictee', label:'Dictée', word:'Tisoč', phonetic:'[TI-soch]', hint:'1000 — 5 lettres' },
  { type:'reconstruct', label:'Reconstitue', sentence:'Koliko stane ? Dva evra, prosim.', words:['Koliko','stane','?','Dva','evra,','prosim','.'] },
];
