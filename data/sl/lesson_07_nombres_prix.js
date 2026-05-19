// ═══════════════════════════════════════════
// 1-7 — Nombres & prix
// ═══════════════════════════════════════════
const EX_1_7 = [
  { type:'presentation', label:'100 et au-delà', word:'Sto — Dvesto — Tristo', phonetic:'[STO] [DVE-sto] [TRI-sto]', translation:'100 — 200 — 300',
    cultural:{title:'Sto = cent', text:'"Sto" = cent, et ça se combine simplement : dve+sto = 200, tri+sto = 300... pour 400-900 : štiristo, petsto, šeststo, sedemsto, osemsto, devetsto !'},
    histoire:{title:'Indépendance 1991 — la guerre des 10 jours', text:'La Slovénie a déclaré son indépendance de la Yougoslavie le 25 juin 1991. La guerre qui a suivi n\'a duré que 10 jours — la plus courte de l\'ex-Yougoslavie. Aujourd\'hui membre de l\'UE et de l\'OTAN depuis 2004, la Slovénie utilise l\'euro depuis 2007.'} },

  { type:'tts_repeat', label:'100 à 1000', word:'Sto, dvesto, tristo, štiristo, petsto, tisoč', phonetic:'[STO, DVE-sto, TRI-sto, CHTI-ri-sto, PET-sto, TI-soch]', translation:'100, 200, 300, 400, 500, 1000' },

  { type:'matching', label:'100-1000', pairs:[
    {sl:'100 — sto',        fr:'cent'},
    {sl:'200 — dvesto',     fr:'deux cents'},
    {sl:'500 — petsto',     fr:'cinq cents'},
    {sl:'1000 — tisoč',    fr:'mille'},
    {sl:'2000 — dve tisoč', fr:'deux mille'},
  ]},

  { type:'qcm', label:'QCM', question:'Comment dit-on "1000" ?', choices:['Tisoč','Sto','Deset tisoč','Milijon'], correct:0 },
  { type:'qcm', label:'QCM', question:'"Tristo" signifie…', choices:['300','30','3000','13'], correct:0 },

  { type:'presentation', label:'Les prix — Koliko stane ?', word:'Koliko stane ?', phonetic:'[KO-li-ko STA-ne]', translation:'Combien ça coûte ?',
    cultural:{title:'L\'euro en Slovénie', text:"La Slovénie utilise l'euro depuis 2007 — première ex-yougoslave à l'adopter. On dit 'evro' et 'cent'. Pour plusieurs euros on dit 'evrov' (génitif pluriel). 1 evro, 2 evra, 5 evrov !"} },

  { type:'presentation', label:'Le génitif après les nombres', word:'1 evro — 2 evra — 5 evrov', phonetic:'[EN EV-ro] [DVA EV-ra] [PET EV-rov]', translation:'1 euro — 2 euros — 5 euros', noTTS:true,
    cultural:{title:'Règle du génitif', text:'En slovène, le nom change selon le nombre. 1 = nominatif : "en evro". 2, 3, 4 = génitif singulier : "dva evra", "tri evre", "štiri evre". 5 et plus = génitif pluriel : "pet evrov", "deset evrov", "sto evrov". Cette règle vaut pour tous les noms !'} },

  { type:'tts_repeat', label:'Les prix', word:'En evro. Dva evra. Pet evrov. Sto evrov. Deset centov.', phonetic:'[EN EV-ro] [DVA EV-ra] [PET EV-rov] [STO EV-rov] [DE-set TSEN-tov]', translation:'1 euro. 2 euros. 5 euros. 100 euros. 10 centimes.' },
  { type:'tts_repeat', label:'Forme 2-4 vs 5+', word:'Dva evra, tri evre, štiri evre, pet evrov, deset evrov, dvajset evrov.', phonetic:'[DVA EV-ra, TRI EV-re, CHTI-ri EV-re, PET EV-rov, DE-set EV-rov, DVA-yset EV-rov]', translation:'2 euros, 3 euros, 4 euros, 5 euros, 10 euros, 20 euros.' },

  { type:'matching', label:'Expressions de prix', pairs:[
    {sl:'Koliko stane ?',     fr:'Combien ça coûte ?'},
    {sl:'Dva evra.',          fr:'Deux euros.'},
    {sl:'Pet evrov.',         fr:'Cinq euros.'},
    {sl:'Predrago !',         fr:'Trop cher !'},
    {sl:'Ugodna cena.',       fr:'Prix raisonnable.'},
  ]},

  { type:'matching', label:'Génitif après les nombres', pairs:[
    {sl:'En evro',    fr:'1 euro (nominatif)'},
    {sl:'Dva evra',   fr:'2 euros (génitif sg.)'},
    {sl:'Tri evre',   fr:'3 euros (génitif sg.)'},
    {sl:'Pet evrov',  fr:'5 euros (génitif pl.)'},
    {sl:'Sto evrov',  fr:'100 euros (génitif pl.)'},
  ]},

  { type:'qcm', label:'QCM', question:'Comment dit-on "7 euros" ?', choices:['Sedem evrov.','Sedem evra.','Sedem euro.','Sedemdeset.'], correct:0 },
  { type:'qcm', label:'QCM grammaire', question:'Après "5" (pet), on utilise…', choices:['evrov (génitif pluriel)','evra (génitif singulier)','euro (mot invariable)','evre (accusatif)'], correct:0 },
  { type:'qcm', label:'QCM grammaire', question:'Comment dit-on "3 euros" correctement ?', choices:['Tri evre','Tri evrov','Tri evro','Tri evra'], correct:0 },
  { type:'qcm', label:'QCM grammaire', question:'Quelle forme après "štiri" (4) ?', choices:['Štiri evre','Štiri evrov','Štiri evro','Štiri evra'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['___ stane kava ? (Combien coûte le café ?)'], blank:'Koliko', bank:['Koliko','Kdaj','Kje','Kako'] },
  { type:'fill', label:'Phrase à trous', sentence:['To stane pet ___. (Ça coûte 5 euros.)'], blank:'evrov', bank:['evrov','evra','evro','euro'] },
  { type:'fill', label:'Phrase à trous', sentence:['Nimam dovolj ___. (Je n\'ai pas assez d\'argent.)'], blank:'denarja', bank:['denarja','evrov','tisoč','sto'] },
  { type:'fill', label:'Phrase à trous', sentence:['Kava stane dva ___. (Le café coûte 2 euros.)'], blank:'evra', bank:['evra','evrov','evro','evre'] },

  { type:'presentation', label:'Vocabulaire shopping', word:'Ali sprejmete kartice ?', phonetic:'[a-li spre-YME-te KAR-ti-tse]', translation:'Acceptez-vous les cartes (bancaires) ?',
    cultural:{title:'Payer en Slovénie', text:'"Ali sprejmete kartice?" = Acceptez-vous les cartes ? "Imate drobiž?" = Avez-vous de la monnaie ? "Plačam z gotovino" = Je paie en espèces. "Račun, prosim" = L\'addition/le reçu, s\'il vous plaît. Très utile dans les marchés !'} },

  { type:'tts_repeat', label:'Phrases de shopping', word:'Ali sprejmete kartice ? Imate drobiž ? Plačam z gotovino. Račun, prosim.', phonetic:'[a-li spre-YME-te KAR-ti-tse] [I-ma-te DRO-bizh] [pla-TCHAM z go-to-VI-no] [RA-chun PRO-sim]', translation:'Acceptez-vous les cartes ? Avez-vous de la monnaie ? Je paie en espèces. Le reçu, s\'il vous plaît.' },

  { type:'reconstruct', label:'Reconstitue', sentence:'Koliko stane ? Dva evra, prosim.', words:['Koliko','stane','?','Dva','evra,','prosim','.'] },

  { type:'story', label:'Histoire', title:'À la boulangerie Pekarna',
    narration:"Luka s'arrête à la boulangerie du quartier. Il achète du pain et une potica (gâteau slovène). Il a 10 euros en poche.",
    dialogue:[
      {speaker:'Luka',    text:'Dobro jutro ! Koliko stane en kruh ?', side:'left'},
      {speaker:'Pekar',   text:'En kruh stane en evro in petdeset centov.', side:'right'},
      {speaker:'Luka',    text:'Dajte mi prosim en kruh in eno potico.', side:'left'},
      {speaker:'Pekar',   text:'Potica stane tri evre in devetdeset centov.', side:'right'},
      {speaker:'Luka',    text:'Skupaj koliko ?', side:'left'},
      {speaker:'Pekar',   text:'Pet evrov in štirideset centov skupaj.', side:'right'},
      {speaker:'Luka',    text:'Izvoli — deset evrov.', side:'left'},
      {speaker:'Pekar',   text:'Štiri evre in šestdeset centov drobiž. Hvala !', side:'right'},
    ],
    translation:{
      'Koliko stane en kruh ?':'Combien coûte un pain ?',
      'En kruh stane en evro in petdeset centov.':'Un pain coûte un euro cinquante centimes.',
      'Dajte mi prosim en kruh in eno potico.':'Donnez-moi s\'il vous plaît un pain et une potica.',
      'Potica stane tri evre in devetdeset centov.':'La potica coûte trois euros quatre-vingt-dix centimes.',
      'Skupaj koliko ?':'Combien en tout ?',
      'Pet evrov in štirideset centov skupaj.':'Cinq euros quarante centimes en tout.',
      'Izvoli — deset evrov.':'Voilà — dix euros.',
      'Štiri evre in šestdeset centov drobiž.':'Quatre euros soixante centimes de monnaie.',
    }
  },

  { type:'qcm', label:'QCM histoire', question:'Combien coûte un pain ?', choices:['1,50 euros','2 euros','3,90 euros','1 euro'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'Combien Luka paie-t-il en tout ?', choices:['5,40 euros','3,90 euros','10 euros','4,60 euros'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'Combien de monnaie reçoit Luka ?', choices:['4,60 euros','5,40 euros','4 euros','2 euros'], correct:0 },

  { type:'dictee', label:'Dictée', word:'Tisoč', phonetic:'[TI-soch]', hint:'1000 — 5 lettres' },
  { type:'dictee', label:'Dictée', word:'Evrov', phonetic:'[EV-rov]', hint:'génitif pluriel de "euro" — 5 lettres' },

  { type:'dialogue', label:'À toi !', lines:[
    {speaker:'Vendeur', text:'Dobro jutro ! Koliko stane ta sir ?', side:'right'},
    {speaker:'Toi',     text:'___ stane ? (je demande le prix)', side:'left', blank:'Koliko', hint:'combien → Koliko'},
    {speaker:'Vendeur', text:'Tri evre za sto gramov.', side:'right'},
    {speaker:'Toi',     text:'___ ! Imate kaj cenejšega ?', side:'left', blank:'Predrago', hint:'trop cher → Predrago'},
  ]},
];
