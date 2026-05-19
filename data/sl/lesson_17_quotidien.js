// ═══════════════════════════════════════════
// 1-17 — Mon quotidien
// ═══════════════════════════════════════════
const EX_1_17 = [
  { type:'presentation', label:'Verbes du quotidien — modèle -ati', word:'Delati → jaz delam, ti delaš, on/ona dela', phonetic:'[de-LA-ti → YAZ de-LAM, TI de-LASH, ON de-LA]', translation:'Travailler → je travaille, tu travailles, il/elle travaille',
    cultural:{title:'Conjugaison -ati au présent (6 formes)', text:'jaz delam / ti delaš / on-ona-ono dela / mi delamo / vi delate / oni-one delajo. Applique ce modèle à : vstati (vstane!), jesti (je!), piti (pije!), spati (spi!), gledati, brati. Attention : vstati et spati sont irréguliers !'},
    histoire:{title:'Mode de vie actif', text:'60% des Slovènes pratiquent une activité sportive régulière — l\'un des taux les plus élevés d\'Europe. La randonnée et le ski dominent. Le dimanche, les chemins de montagne sont bondés de familles. Le vélo est roi en ville — Ljubljana a 300km de pistes cyclables.'} },

  { type:'presentation', label:'Verbes réfléchis avec "se"', word:'Se umivam — Se oblačim — Se učim', phonetic:'[se u-MI-vam] [se ob-LA-chim] [se U-chim]', translation:'Je me lave — Je m\'habille — J\'apprends (je m\'instruis)', noTTS:true,
    cultural:{title:'Les verbes pronominaux en slovène', text:'"Se" reste toujours devant le verbe conjugué (jamais collé). "Se umivam" = je me lave. "Se oblačim" = je m\'habille. "Se učim" = j\'apprends. Au négatif : "Se ne umivam" = je ne me lave pas. "Se" est invariable — une seule forme pour toutes les personnes !'} },

  { type:'tts_repeat', label:'Verbes clés — routine matinale', word:'Vstati, umiti se, oblečiti se, zajtrkovati, iti v službo', phonetic:'[VSTA-ti, u-MI-ti se, ob-LE-chi-ti se, zay-TRK-o-va-ti, I-ti v SLUZH-bo]', translation:'Se lever, se laver, s\'habiller, prendre le petit-déjeuner, aller au travail' },
  { type:'tts_repeat', label:'Routine complète', word:'Vstanem, se umijem, se oblečem, zajtrkujem, grem v službo.', phonetic:'[VSTA-nem, se u-MI-yem, se ob-LE-chem, zay-TRK-u-yem, GREM v SLUZH-bo.]', translation:'Je me lève, je me lave, je m\'habille, je prends le petit-déj, je vais au travail.' },
  { type:'tts_repeat', label:'Activités de la journée', word:'Delati, kositi, večerjati, brati, gledati televizijo, telovaditi, spati', phonetic:'[de-LA-ti, ko-SI-ti, ve-CHER-ya-ti, BRA-ti, gle-DA-ti te-le-VI-zi-yo, te-lo-VA-di-ti, SPA-ti]', translation:'Travailler, déjeuner, dîner, lire, regarder la télé, faire du sport, dormir' },

  { type:'matching', label:'Verbes → français', pairs:[
    {sl:'Vstati',      fr:'Se lever'},
    {sl:'Jesti',       fr:'Manger'},
    {sl:'Delati',      fr:'Travailler'},
    {sl:'Spati',       fr:'Dormir'},
    {sl:'Telovaditi',  fr:'Faire du sport'},
  ]},
  { type:'matching', label:'Verbes réfléchis → français', pairs:[
    {sl:'Se umivam',    fr:'Je me lave'},
    {sl:'Se oblačim',   fr:'Je m\'habille'},
    {sl:'Se učim',      fr:'J\'apprends'},
    {sl:'Se umijem',    fr:'Je me suis lavé(e)'},
    {sl:'Se oblečem',   fr:'Je m\'habille (action ponctuelle)'},
  ]},
  { type:'matching', label:'Repas → moment', pairs:[
    {sl:'Zajtrk',   fr:'Matin — petit-déjeuner'},
    {sl:'Malica',   fr:'10h — collation'},
    {sl:'Kosilo',   fr:'Midi — déjeuner (repas principal)'},
    {sl:'Večerja',  fr:'Soir — dîner'},
    {sl:'Kava',     fr:'Café — à toute heure !'},
  ]},

  { type:'presentation', label:'Expressions de temps', word:'Zjutraj — Opoldne — Popoldne — Zvečer — Ponoči', phonetic:'[zyu-TRAY] [o-POL-dne] [po-POL-dne] [ZVE-cher] [po-NO-chi]', translation:'Le matin — À midi — L\'après-midi — Le soir — La nuit', noTTS:true,
    cultural:{title:'Adverbes de fréquence', text:'vsak dan (chaque jour), pogosto (souvent), redko (rarement), vedno (toujours), nikoli (jamais), včasih (parfois). Exemples : "Vsak dan zajtrkujem." (je prends le petit-déj chaque jour). "Redko gledam TV." (je regarde rarement la télé).'} },

  { type:'tts_repeat', label:'Expressions de temps', word:'Zjutraj, opoldne, popoldne, zvečer, ponoči, vsak dan, pogosto, redko', phonetic:'[zyu-TRAY, o-POL-dne, po-POL-dne, ZVE-cher, po-NO-chi, vsak DAN, po-GOS-to, RED-ko]', translation:'Le matin, à midi, l\'après-midi, le soir, la nuit, chaque jour, souvent, rarement' },
  { type:'tts_repeat', label:'Ma journée type', word:'Vstanem ob šestih. Pijem kavo. Grem v službo. Kosim ob enih. Zvečer berem ali gledam TV.', phonetic:'[VSTA-nem ob SHES-tih. PI-yem KA-vo. GREM v SLUZH-bo. KO-sim ob E-nih. ZVE-cher BE-rem A-li gle-DAM TV.]', translation:'Je me lève à 6h. Je bois un café. Je vais au travail. Je déjeune à 13h. Le soir je lis ou je regarde la télé.' },

  { type:'qcm', label:'QCM', question:'"Ona dela" signifie :',
    choices:['Elle travaille','Tu travailles','Je travaille','Vous travaillez'], correct:0 },
  { type:'qcm', label:'QCM grammaire', question:'"Se oblačim" signifie :',
    choices:['Je m\'habille','Je me lave','Je me lève','J\'apprends'], correct:0 },
  { type:'qcm', label:'QCM', question:'"Kosilo" est le repas principal slovène. C\'est :',
    choices:['Le déjeuner (midi)','Le petit-déjeuner','Le dîner','La collation'], correct:0 },
  { type:'qcm', label:'QCM', question:'"Vsak dan" signifie :',
    choices:['Chaque jour','Souvent','Rarement','Jamais'], correct:0 },
  { type:'qcm', label:'QCM grammaire', question:'La conjugaison correcte de "delati" à "oni" (ils) :',
    choices:['Oni delajo','Oni dela','Oni delate','Oni delam'], correct:0 },
  { type:'qcm', label:'QCM', question:'"Zvečer rada berem." signifie :',
    choices:['Le soir j\'aime lire.','Le matin je lis souvent.','Le soir je regarde la télé.','J\'aime écrire le soir.'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['Vsak dan ___ ob sedmih. (Chaque jour je me lève à 7h.)'], blank:'vstanem', bank:['vstanem','spim','jem','delam'] },
  { type:'fill', label:'Phrase à trous', sentence:['Zvečer rada ___. (Le soir j\'aime lire.)'], blank:'berem', bank:['berem','delam','spim','pijem'] },
  { type:'fill', label:'Phrase à trous', sentence:['Se ___ v kopalnici. (Je me lave dans la salle de bain.)'], blank:'umijem', bank:['umijem','oblečem','učim','vstanem'] },
  { type:'fill', label:'Phrase à trous', sentence:['Ob dvanajstih ___ kosilo. (À midi je déjeune.)'], blank:'kosim', bank:['kosim','zajtrkujem','večerjam','pijem'] },
  { type:'fill', label:'Phrase à trous', sentence:['___ televizijo vsak večer. (Je regarde la télé chaque soir.)'], blank:'Gledam', bank:['Gledam','Berem','Delam','Spim'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Zjutraj vstanem, se umijem in zajtrkujem.', words:['Zjutraj','vstanem,','se','umijem','in','zajtrkujem','.'] },

  { type:'story', label:'Histoire', title:'Delovnik in vikend — Semaine et week-end',
    narration:"Ana je učiteljica. V tednu vstaja ob šestih. Vikend je drugačen — vstane pozno in se sprosti.",
    dialogue:[
      {speaker:'Ana',    text:'Luka, kdaj vstaješ v tednu ?', side:'left'},
      {speaker:'Luka',   text:'Ob šestih. Sem učitelj — ob pol osmih sem v šoli.', side:'right'},
      {speaker:'Ana',    text:'Jaz tudi. Zjutraj se umijem, zajtrkujem in grem.', side:'left'},
      {speaker:'Luka',   text:'In zvečer ? Kaj delaš po delu ?', side:'right'},
      {speaker:'Ana',    text:'Zvečer večerjam, malo berem in spim ob desetih. Ti ?', side:'left'},
      {speaker:'Luka',   text:'Gledam TV ali telovadim. Vikend pa vstajam ob devetih !', side:'right'},
      {speaker:'Ana',    text:'Srečnež ! Jaz vikend delam v vrtu in kosim pozno.', side:'left'},
      {speaker:'Luka',   text:'Vsaj se sproščaš ! V tednu si vedno utrujena.', side:'right'},
    ],
    translation:{
      'Kdaj vstaješ v tednu ?':'Quand tu te lèves en semaine ?',
      'Sem učitelj — ob pol osmih sem v šoli.':'Je suis enseignant — à 7h30 je suis à l\'école.',
      'Zjutraj se umijem, zajtrkujem in grem.':'Le matin je me lave, je prends le petit-déj et je pars.',
      'Kaj delaš po delu ?':'Qu\'est-ce que tu fais après le travail ?',
      'Zvečer večerjam, malo berem in spim ob desetih.':'Le soir je dîne, je lis un peu et je dors à 22h.',
      'Gledam TV ali telovadim.':'Je regarde la télé ou je fais du sport.',
      'Vikend pa vstajam ob devetih !':'Le week-end je me lève à 9h !',
      'Vsaj se sproščaš ! V tednu si vedno utrujena.':'Au moins tu te détends ! En semaine tu es toujours fatiguée.',
    }
  },

  { type:'qcm', label:'QCM histoire', question:'À quelle heure Luka arrive-t-il à l\'école ?', choices:['7h30','6h00','8h00','7h00'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'Que fait Ana le week-end ?', choices:['Elle travaille dans le jardin','Elle fait du sport','Elle regarde la télé','Elle lit des livres'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'À quelle heure Ana se couche-t-elle en semaine ?', choices:['22h','21h','23h','20h'], correct:0 },

  { type:'dictee', label:'Dictée', word:'Zajtrkujem', phonetic:'[zay-TRK-u-yem]', hint:'Je prends le petit-déjeuner — 10 lettres' },
  { type:'dictee', label:'Dictée', word:'Telovadim', phonetic:'[te-lo-VA-dim]', hint:'Je fais du sport — 9 lettres' },

  { type:'dialogue', label:'À toi de jouer !', lines:[
    {speaker:'Luka', text:'Ob kateri uri vstaješ ?', side:'left'},
    {speaker:'Toi',  text:'Vstanem ___.', side:'right', blank:'ob šestih', hint:'à 6h → ob šestih'},
    {speaker:'Luka', text:'In kaj piješ zjutraj ?', side:'left'},
    {speaker:'Toi',  text:'Pijem ___.', side:'right', blank:'kavo', hint:'du café → kavo'},
    {speaker:'Luka', text:'Kaj delaš zvečer ?', side:'left'},
    {speaker:'Toi',  text:'Zvečer ___.', side:'right', blank:'berem', hint:'je lis → berem'},
    {speaker:'Luka', text:'Ob kateri uri greš spat ?', side:'left'},
    {speaker:'Toi',  text:'Grem spat ___.', side:'right', blank:'ob enajstih', hint:'à 23h → ob enajstih'},
  ]},
];
