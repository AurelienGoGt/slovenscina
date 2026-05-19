// ═══════════════════════════════════════════
// 1-20 — En ville & directions
// ═══════════════════════════════════════════
const EX_1_20 = [
  { type:'presentation', label:'Les transports', word:'Avtobus — Vlak — Kolo — Avto', phonetic:'[AV-to-bus] [VLAK] [KO-lo] [AV-to]', translation:'Bus — Train — Vélo — Voiture',
    cultural:{title:'Ljubljana cyclable', text:'Ljubljana est l\'une des villes les plus cyclables d\'Europe — 300km de pistes ! 30% des habitants font du vélo chaque jour. Le bus urbain s\'appelle "Kavalir" en centre-ville — gratuit !'},
    histoire:{title:'Ljubljana et le Ljubljanski grad', text:'Le château de Ljubljana (Ljubljanski grad) domine la ville depuis sa colline (hrib). On y accède à pied, en téléphérique (vzpenjača) ou en vélo. La place Prešernov trg, avec sa statue du poète France Prešeren, est le cœur battant de la ville. De là partent toutes les directions !'} },

  { type:'presentation', label:'Demander son chemin — Kako pridem do... ?', word:'Kako pridem do postaje ?', phonetic:'[KA-ko PRI-dem do pos-TA-ye]', translation:'Comment j\'arrive à la gare ?', noTTS:false,
    cultural:{title:'Do + génitif = jusqu\'à/vers', text:'"Do" = jusqu\'à/vers. Il se construit avec le génitif : postaja → do postaje ; muzej → do muzeja ; center → do centra ; grad → do gradu. "Kako pridem do..." = comment j\'arrive à... C\'est la question clé pour demander sa route !'} },

  { type:'presentation', label:'Génitif après "do" et "iz"', word:'Grem do centra. / Prihajam iz postaje.', phonetic:'[GREM do CEN-tra] / [pri-HA-yam IZ pos-TA-ye]', translation:'Je vais jusqu\'au centre. / Je viens de la gare.', noTTS:true,
    cultural:{title:'Do (jusqu\'à) et iz (de) + génitif', text:'"Do" et "iz" se construisent tous deux avec le génitif. Exemples : "Grem do centra" (je vais jusqu\'au centre), "Grem do postaje" (jusqu\'à la gare), "Prihajam iz postaje" (je viens de la gare), "Prihajam iz Francije" (je viens de France).'} },

  { type:'tts_repeat', label:'Transports', word:'Avtobus, vlak, tramvaj, taksi, kolo, avto, peš', phonetic:'[AV-to-bus, VLAK, tram-VAY, TAK-si, KO-lo, AV-to, PESH]', translation:'Bus, train, tramway, taxi, vélo, voiture, à pied' },
  { type:'tts_repeat', label:'Lieux en ville — essentiels', word:'Center, postaja, letališče, bolnišnica, lekarna, banka, pošta', phonetic:'[CEN-ter, pos-TA-ya, le-TA-lish-che, bol-NISH-ni-tsa, le-KAR-na, BAN-ka, POSH-ta]', translation:'Centre-ville, gare/arrêt, aéroport, hôpital, pharmacie, banque, poste' },
  { type:'tts_repeat', label:'Lieux en ville — culture', word:'Tržnica, park, gledališče, muzej, restavracija, hotel, trg', phonetic:'[TRZH-ni-tsa, PARK, gle-da-LISH-che, mu-ZEY, res-tav-RA-tsi-ya, ho-TEL, TRG]', translation:'Marché, parc, théâtre, musée, restaurant, hôtel, place (publique)' },
  { type:'tts_repeat', label:'Directions de base', word:'Naravnost, levo, desno, nazaj, blizu, daleč, na vogalu', phonetic:'[na-RAV-nost, LE-vo, DES-no, na-ZAY, BLI-zu, DA-lech, na VO-ga-lu]', translation:'Tout droit, à gauche, à droite, en arrière, près, loin, au coin' },
  { type:'tts_repeat', label:'Instructions de direction', word:'Pojdite naravnost. Zavijte levo. Zavijte desno. Čez cesto. Na levi strani. Na desni strani.', phonetic:'[POY-di-te na-RAV-nost. za-VIY-te LE-vo. za-VIY-te DES-no. CHEZ TSES-to. na LE-vi STRA-ni. na DES-ni STRA-ni.]', translation:'Allez tout droit. Tournez à gauche. Tournez à droite. Traversez la rue. Sur la gauche. Sur la droite.' },

  { type:'presentation', label:'Ordinal dans les directions', word:'Prvič, drugič, tretjič zavijte...', phonetic:'[PUR-vich, DRU-gich, TRET-yich za-VIY-te]', translation:'À la première, deuxième, troisième, tournez...', noTTS:true,
    cultural:{title:'Les ordinaux pour les directions', text:'"Prvič zavijte levo" = à la première (rue), tournez à gauche. "Drugič zavijte desno" = à la deuxième, tournez à droite. "Tretjič" = à la troisième. Ces formes adverbiales (-ič) sont très pratiques pour les itinéraires !'} },

  { type:'tts_repeat', label:'Questions de transport', word:'Kateri avtobus gre do centra ? Kje je postajališče ? Kdaj pride naslednji vlak ?', phonetic:'[KA-te-ri AV-to-bus GRE do CEN-tra? KJE je pos-ta-YA-lish-che? KDAJ PRI-de nas-LED-nyi VLAK?]', translation:'Quel bus va au centre ? Où est l\'arrêt ? Quand arrive le prochain train ?' },

  { type:'matching', label:'Transports → français', pairs:[
    {sl:'Avtobus',  fr:'Bus'},
    {sl:'Vlak',     fr:'Train'},
    {sl:'Tramvaj',  fr:'Tramway'},
    {sl:'Kolo',     fr:'Vélo'},
    {sl:'Peš',      fr:'À pied'},
  ]},
  { type:'matching', label:'Lieux → français', pairs:[
    {sl:'Postaja',     fr:'Gare / Arrêt'},
    {sl:'Letališče',   fr:'Aéroport'},
    {sl:'Bolnišnica',  fr:'Hôpital'},
    {sl:'Lekarna',     fr:'Pharmacie'},
    {sl:'Gledališče',  fr:'Théâtre'},
  ]},
  { type:'matching', label:'Autres lieux → français', pairs:[
    {sl:'Banka',        fr:'Banque'},
    {sl:'Pošta',        fr:'Poste'},
    {sl:'Tržnica',      fr:'Marché'},
    {sl:'Muzej',        fr:'Musée'},
    {sl:'Trg',          fr:'Place (publique)'},
  ]},
  { type:'matching', label:'Directions → français', pairs:[
    {sl:'Naravnost',   fr:'Tout droit'},
    {sl:'Zavijte levo',fr:'Tournez à gauche'},
    {sl:'Na vogalu',   fr:'Au coin'},
    {sl:'Čez cesto',   fr:'Traversez la rue'},
    {sl:'Na levi strani', fr:'Sur la gauche'},
  ]},

  { type:'qcm', label:'QCM', question:'"Pojdite naravnost in zavijte levo" signifie :',
    choices:['Allez tout droit et tournez à gauche','Allez à droite et tournez à gauche','Allez tout droit et continuez','Tournez à droite après le pont'], correct:0 },
  { type:'qcm', label:'QCM grammaire', question:'"Do" (jusqu\'à) se construit avec :',
    choices:['Le génitif — do postaje, do muzeja','Le locatif — do postaji','L\'accusatif — do postajo','L\'infinitif — do iti'], correct:0 },
  { type:'qcm', label:'QCM', question:'"Kateri avtobus gre do centra ?" signifie :',
    choices:['Quel bus va au centre ?','Quand arrive le bus ?','Où est l\'arrêt de bus ?','Combien coûte le bus ?'], correct:0 },
  { type:'qcm', label:'QCM', question:'"Kje je postajališče ?" signifie :',
    choices:['Où est l\'arrêt ?','Quand arrive le bus ?','Quel est ce bâtiment ?','Où est la gare ?'], correct:0 },
  { type:'qcm', label:'QCM', question:'"Na desni strani" signifie :',
    choices:['Sur la droite','À droite (tournez)','Loin à droite','Après le coin à droite'], correct:0 },
  { type:'qcm', label:'QCM culturel', question:'Quel est le nom du bus gratuit en centre de Ljubljana ?',
    choices:['Kavalir','Avtobus','Tramvaj','Mestni bus'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['Pojdite ___ in zavijte desno. (Allez tout droit et tournez à droite.)'], blank:'naravnost', bank:['naravnost','levo','desno','nazaj'] },
  { type:'fill', label:'Phrase à trous', sentence:['Kako pridem ___ muzeja ? (Comment j\'arrive au musée ?)'], blank:'do', bank:['do','v','na','iz'] },
  { type:'fill', label:'Phrase à trous', sentence:['Postaja je ___ — pet minut peš. (La gare est proche — cinq minutes à pied.)'], blank:'blizu', bank:['blizu','daleč','naravnost','levo'] },
  { type:'fill', label:'Phrase à trous', sentence:['___ avtobus gre do letališča ? (Quel bus va à l\'aéroport ?)'], blank:'Kateri', bank:['Kateri','Kdaj','Kje','Kako'] },
  { type:'fill', label:'Phrase à trous', sentence:['Zavijte levo in pojdite naravnost do ___. (Tournez à gauche et allez tout droit jusqu\'au pont.)'], blank:'mostu', bank:['mostu','trga','parku','banke'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Zavijte levo in pojdite naravnost do mostu.', words:['Zavijte','levo','in','pojdite','naravnost','do','mostu','.'] },

  { type:'story', label:'Histoire', title:'Pot do Ljubljanskega gradu — Le chemin vers le château',
    narration:"Claire, turistka iz Pariza, stoji na Prešernovem trgu. Želi obiskati Ljubljanski grad, ampak ne ve, kako priti tja. Vpraša mimoidočo gospo.",
    dialogue:[
      {speaker:'Claire', text:'Oprostite ! Kako pridem do Ljubljanskega gradu ?', side:'left'},
      {speaker:'Gospa',  text:'Dober dan ! Grad je blizu — kakšnih deset minut peš.', side:'right'},
      {speaker:'Claire', text:'Odlično. Kam moram iti ?', side:'left'},
      {speaker:'Gospa',  text:'Pojdite naravnost čez Tromostovje, nato zavijte levo.', side:'right'},
      {speaker:'Claire', text:'Na vogalu pri stari cerkvi ?', side:'left'},
      {speaker:'Gospa',  text:'Ja ! Nato pojdite naravnost do vzpenjače. Grad je na hribu.', side:'right'},
      {speaker:'Claire', text:'Je vzpenjača daleč od postaje ?', side:'left'},
      {speaker:'Gospa',  text:'Ne, je takoj na desni strani. Deset minut hoje. Uživajte !', side:'right'},
    ],
    translation:{
      'Kako pridem do Ljubljanskega gradu ?':'Comment j\'arrive au château de Ljubljana ?',
      'Grad je blizu — kakšnih deset minut peš.':'Le château est proche — environ dix minutes à pied.',
      'Kam moram iti ?':'Où dois-je aller ?',
      'Pojdite naravnost čez Tromostovje, nato zavijte levo.':'Allez tout droit après le Triple pont, puis tournez à gauche.',
      'Na vogalu pri stari cerkvi ?':'Au coin près de la vieille église ?',
      'Nato pojdite naravnost do vzpenjače.':'Ensuite allez tout droit jusqu\'au téléphérique.',
      'Je vzpenjača daleč od postaje ?':'Le téléphérique est loin de l\'arrêt ?',
      'Ne, je takoj na desni strani. Deset minut hoje.':'Non, c\'est juste sur la droite. Dix minutes à pied.',
    }
  },

  { type:'qcm', label:'QCM histoire', question:'Quel monument Claire traverse-t-elle en premier ?', choices:['Le Triple pont (Tromostovje)','La vieille église','Le château','Le marché'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'Combien de temps faut-il à pied au total ?', choices:['10 minutes','5 minutes','20 minutes','30 minutes'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'Où se trouve la vzpenjača (téléphérique) par rapport au chemin ?', choices:['Sur la droite','Sur la gauche','Après le pont','En face de l\'église'], correct:0 },

  { type:'dictee', label:'Dictée', word:'Naravnost', phonetic:'[na-RAV-nost]', hint:'Tout droit — 9 lettres' },
  { type:'dictee', label:'Dictée', word:'Postajališče', phonetic:'[pos-ta-YA-lish-che]', hint:'Arrêt (de bus/tram) — 12 lettres' },

  { type:'dialogue', label:'À toi de jouer !', lines:[
    {speaker:'Turist', text:'Oprostite, kako pridem do postaje ?', side:'right'},
    {speaker:'Toi',    text:'Pojdite ___ in zavijte desno.', side:'left', blank:'naravnost', hint:'tout droit → naravnost'},
    {speaker:'Turist', text:'Je daleč ?', side:'right'},
    {speaker:'Toi',    text:'Ne, je ___. Pet minut peš.', side:'left', blank:'blizu', hint:'proche → blizu'},
    {speaker:'Turist', text:'Kateri avtobus gre do centra ?', side:'right'},
    {speaker:'Toi',    text:'___ dva gre do centra.', side:'left', blank:'Avtobus', hint:'le bus → Avtobus'},
    {speaker:'Turist', text:'Kje je postajališče ?', side:'right'},
    {speaker:'Toi',    text:'Postajališče je ___ strani, pri banki.', side:'left', blank:'na levi', hint:'sur la gauche → na levi'},
  ]},
];
