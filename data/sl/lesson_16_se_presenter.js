// ═══════════════════════════════════════════
// 1-16 — Se présenter
// ═══════════════════════════════════════════
const EX_1_16 = [
  { type:'presentation', label:'Découverte', word:'Sem... / Jaz sem...', phonetic:'[SEM] / [YAZ SEM]', translation:'Je suis... (je m\'appelle...)',
    cultural:{title:'Pronom optionnel', text:'"Jaz" (je) est souvent omis — la terminaison du verbe suffit. "Sem Ana" = "Je m\'appelle Ana / Je suis Ana". Mais "Jaz sem Ana" est aussi correct. Commence avec le pronom pour t\'en souvenir !'},
    histoire:{title:'Plurilinguisme slovène', text:'Presque tous les jeunes Slovènes parlent anglais couramment. Beaucoup parlent aussi allemand et croate. Deux langues officielles minoritaires : l\'italien (Koper, Piran) et le hongrois (Murska Sobota). Cette ouverture aux langues vient de siècles de coexistence avec les voisins.'} },

  { type:'presentation', label:'Moje ime je... / Ime mi je...', word:'Moje ime je Luka. / Ime mi je Ana.', phonetic:'[MO-ye I-me ye LU-ka] / [I-me mi ye A-na]', translation:'Mon prénom est Luka. / Je m\'appelle Ana.', noTTS:true,
    cultural:{title:'Deux façons de se présenter', text:'"Moje ime je..." (mon prénom est) est légèrement plus formel. "Ime mi je..." est très naturel et courant. Prénoms slovènes fréquents : Luka, Matej, Nejc (hommes) ; Ana, Maja, Nina, Nika (femmes).'} },

  { type:'tts_repeat', label:'Écoute et répète', word:'Sem Marc. Moje ime je Marc.', phonetic:'[SEM MARC. MO-ye I-me ye MARC.]', translation:'Je suis Marc. Mon prénom est Marc.' },
  { type:'tts_repeat', label:'Écoute et répète', word:'Kako ti je ime ?', phonetic:'[KA-ko ti ye I-me]', translation:'Comment tu t\'appelles ?' },
  { type:'tts_repeat', label:'Écoute et répète', word:'Kako vam je ime ?', phonetic:'[KA-ko vam ye I-me]', translation:'Comment vous appelez-vous ? (formel)' },

  { type:'presentation', label:'Prihajam iz... / Živim v...', word:'Prihajam iz Francije. Živim v Parizu.', phonetic:'[pri-HA-yam IZ FRAN-tsi-ye] [ZHI-vim V pa-RI-zu]', translation:'Je viens de France. J\'habite à Paris.', noTTS:true,
    cultural:{title:'Iz (de) vs V (à/en) — deux cas !', text:'"Iz" = de (origine) + génitif : Francija → iz Francije ; Pariz → iz Pariza ; Ljubljana → iz Ljubljane.\n"Živim v" + locatif = j\'habite à/en : v Parizu, v Franciji, v šoli (à l\'école). Le locatif change les terminaisons !'} },

  { type:'tts_repeat', label:'Écoute et répète', word:'Prihajam iz Francije. Živim v Parizu.', phonetic:'[pri-HA-yam IZ FRAN-tsi-ye. ZHI-vim V pa-RI-zu.]', translation:'Je viens de France. J\'habite à Paris.' },
  { type:'tts_repeat', label:'Pays et villes', word:'Francija, Belgija, Švica, Italija, Anglija, Avstrija, Nemčija, Španija', phonetic:'[FRAN-tsi-ya, BEL-gi-ya, SHVI-tsa, i-TA-li-ya, ang-LI-ya, av-STRI-ya, nem-CHI-ya, shpa-NI-ya]', translation:'France, Belgique, Suisse, Italie, Angleterre, Autriche, Allemagne, Espagne' },

  { type:'matching', label:'Pays → français', pairs:[
    {sl:'Francija', fr:'France'},
    {sl:'Belgija',  fr:'Belgique'},
    {sl:'Italija',  fr:'Italie'},
    {sl:'Avstrija', fr:'Autriche'},
    {sl:'Nemčija',  fr:'Allemagne'},
  ]},
  { type:'matching', label:'Expressions de présentation', pairs:[
    {sl:'Sem...',           fr:'Je suis... / Je m\'appelle...'},
    {sl:'Moje ime je...',   fr:'Mon prénom est...'},
    {sl:'Prihajam iz...',   fr:'Je viens de...'},
    {sl:'Živim v...',       fr:'J\'habite à / en...'},
    {sl:'Imam ... let.',    fr:'J\'ai ... ans.'},
  ]},

  { type:'presentation', label:'Les langues — Govorim + adverbe', word:'Govorim francosko, malo slovensko.', phonetic:'[go-VO-rim fran-TSOS-ko, MA-lo slo-VEN-sko]', translation:'Je parle français, un peu slovène.', noTTS:true,
    cultural:{title:'Govorim + adverbe de langue', text:'"Govorim" = je parle. Les langues se mettent sous forme adverbiale (invariable) : slovensko, francosko, angleško, nemško, špansko, kitajsko (chinois). Pas d\'article, pas d\'accord !'} },

  { type:'tts_repeat', label:'Les langues', word:'Govorim francosko, angleško, nemško, špansko, malo slovensko.', phonetic:'[go-VO-rim fran-TSOS-ko, ang-LESH-ko, NEM-shko, shpan-SKO, MA-lo slo-VEN-sko.]', translation:'Je parle français, anglais, allemand, espagnol, un peu slovène.' },
  { type:'tts_repeat', label:'Comprendre et apprendre', word:'Razumem malo slovensko. Ne razumem. Se učim slovensko.', phonetic:'[ra-ZU-mem MA-lo slo-VEN-sko. NE ra-ZU-mem. SE U-chim slo-VEN-sko.]', translation:'Je comprends un peu le slovène. Je ne comprends pas. J\'apprends le slovène.' },

  { type:'matching', label:'Langues → français', pairs:[
    {sl:'Slovensko',  fr:'Slovène'},
    {sl:'Francosko',  fr:'Français'},
    {sl:'Angleško',   fr:'Anglais'},
    {sl:'Nemško',     fr:'Allemand'},
    {sl:'Špansko',    fr:'Espagnol'},
  ]},

  { type:'presentation', label:'Phrases utiles pour débutant', word:'Ponovi, prosim. / Govori počasneje, prosim.', phonetic:'[po-NO-vi PRO-sim] / [go-VO-ri po-CHAS-ne-ye PRO-sim]', translation:'Répète s\'il te plaît. / Parle plus lentement s\'il te plaît.', noTTS:true,
    cultural:{title:'Les phrases-sauvetage !', text:'Ces phrases sont essentielles au début. "Ponovi, prosim" (répète, tu) ou "Ponovite, prosim" (répète, vous-formel). "Ne razumem" = je ne comprends pas. "Govori počasneje" (tu, informel) / "Govorite počasneje" (vous, formel).'} },

  { type:'tts_repeat', label:'Phrases-sauvetage', word:'Ponovi, prosim. Ne razumem. Govori počasneje, prosim.', phonetic:'[po-NO-vi PRO-sim. NE ra-ZU-mem. go-VO-ri po-CHAS-ne-ye PRO-sim.]', translation:'Répète s\'il te plaît. Je ne comprends pas. Parle plus lentement s\'il te plaît.' },

  { type:'presentation', label:'Professions — Sem + métier (sans article !)', word:'Sem zdravnik. / Sem učiteljica.', phonetic:'[SEM ZDRAV-nik] / [SEM u-chi-TEL-yi-tsa]', translation:'Je suis médecin. / Je suis professeure.', noTTS:true,
    cultural:{title:'Pas d\'article pour les professions !', text:'En slovène, les professions n\'ont pas d\'article. "Sem zdravnik" = je suis médecin (pas "un médecin"). Les noms de profession ont une forme masculine et féminine : zdravnik (m) / zdravnica (f), učitelj (m) / učiteljica (f), inženir (m) / inženirka (f).'} },

  { type:'tts_repeat', label:'Professions masculines', word:'Sem zdravnik, učitelj, inženir, odvetnik, kuhar, poslovnež, študent, upokojenec.', phonetic:'[SEM ZDRAV-nik, u-CHI-tel, in-ZHE-nir, od-VET-nik, KU-har, pos-LOV-nezh, shtu-DENT, u-po-ko-YE-nets.]', translation:'Je suis médecin, enseignant, ingénieur, avocat, cuisinier, homme d\'affaires, étudiant, retraité.' },
  { type:'tts_repeat', label:'Professions féminines', word:'Sem zdravnica, učiteljica, inženirka, odvetnica, kuharica, poslovnežka, študentka, upokojenka.', phonetic:'[SEM ZDRAV-ni-tsa, u-chi-TEL-yi-tsa, in-zhe-NIR-ka, od-VET-ni-tsa, ku-ha-RI-tsa, pos-lov-NEZH-ka, shtu-DENT-ka, u-po-ko-YEN-ka.]', translation:'Je suis médecin, enseignante, ingénieure, avocate, cuisinière, femme d\'affaires, étudiante, retraitée.' },

  { type:'matching', label:'Professions → français', pairs:[
    {sl:'Zdravnik / zdravnica',   fr:'Médecin (m/f)'},
    {sl:'Učitelj / učiteljica',   fr:'Enseignant/e'},
    {sl:'Inženir / inženirka',    fr:'Ingénieur/e'},
    {sl:'Odvetnik / odvetnica',   fr:'Avocat/e'},
    {sl:'Študent / študentka',    fr:'Étudiant/e'},
  ]},
  { type:'matching', label:'Encore des professions', pairs:[
    {sl:'Kuhar / kuharica',         fr:'Cuisinier/ière'},
    {sl:'Poslovnež / poslovnežka',  fr:'Homme/femme d\'affaires'},
    {sl:'Upokojenec / upokojenka',  fr:'Retraité/e'},
    {sl:'Sem po poklicu...',         fr:'Je suis de profession...'},
    {sl:'Kakšen poklic imaš ?',      fr:'Quel est ton métier ?'},
  ]},

  { type:'qcm', label:'QCM', question:'Comment dit-on "Je viens de Belgique" ?',
    choices:['Prihajam iz Belgije.','Sem v Belgiji.','Živim Belgija.','Prihajam Belgija.'], correct:0 },
  { type:'qcm', label:'QCM grammaire', question:'"Je suis ingénieure" (féminin, sans article) :',
    choices:['Sem inženirka.','Sem ena inženirka.','Sem inženir.','Imam inženirko.'], correct:0 },
  { type:'qcm', label:'QCM', question:'"Govorim angleško" veut dire :',
    choices:['Je parle anglais','Je viens d\'Angleterre','J\'apprends l\'anglais','J\'aime l\'anglais'], correct:0 },
  { type:'qcm', label:'QCM', question:'"Živim v Parizu" signifie :',
    choices:['J\'habite à Paris','Je viens de Paris','Je vais à Paris','Paris est beau'], correct:0 },
  { type:'qcm', label:'QCM', question:'Tu ne comprends pas ce que dit quelqu\'un. Tu dis :',
    choices:['Ne razumem.','Ne govorim.','Ne pridem.','Ne živim.'], correct:0 },
  { type:'qcm', label:'QCM', question:'Tu veux qu\'on parle plus lentement. Tu dis :',
    choices:['Govori počasneje, prosim.','Ponovi, prosim.','Govorim slovensko.','Razumem malo.'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['Jaz ___ Ana. Prihajam iz Maribora.'], blank:'sem', bank:['sem','imam','govorim','si'] },
  { type:'fill', label:'Phrase à trous', sentence:['Živim ___ Parizu. (J\'habite à Paris.)'], blank:'v', bank:['v','iz','za','na'] },
  { type:'fill', label:'Phrase à trous', sentence:['___ mi je Marc. (Je m\'appelle Marc.)'], blank:'Ime', bank:['Ime','Sem','Imam','Govorim'] },
  { type:'fill', label:'Phrase à trous', sentence:['Govorim ___, malo slovensko. (Je parle français, un peu slovène.)'], blank:'francosko', bank:['francosko','angleško','nemško','špansko'] },
  { type:'fill', label:'Phrase à trous', sentence:['Sem ___. Delam v bolnišnici. (Je suis médecin. Je travaille à l\'hôpital.)'], blank:'zdravnik', bank:['zdravnik','odvetnik','kuhar','učitelj'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Sem iz Francije in govorim malo slovensko.', words:['Sem','iz','Francije','in','govorim','malo','slovensko','.'] },

  { type:'story', label:'Histoire', title:'Jezikovni tandem — l\'échange linguistique',
    narration:"Marc participe à un échange linguistique à Ljubljana. Il rencontre Maja qui veut pratiquer le français. C\'est leur première conversation.",
    dialogue:[
      {speaker:'Maja', text:'Zdravo ! Jaz sem Maja. In ti ?', side:'left'},
      {speaker:'Marc', text:'Zdravo Maja ! Ime mi je Marc. Sem iz Pariza.', side:'right'},
      {speaker:'Maja', text:'Super ! Jaz sem iz Ljubljane. Kakšen poklic imaš ?', side:'left'},
      {speaker:'Marc', text:'Sem inženir. In ti ?', side:'right'},
      {speaker:'Maja', text:'Sem študentka — študiram medicino. Govorim angleško in malo francosko.', side:'left'},
      {speaker:'Marc', text:'Odlično ! Jaz govorim francosko in malo slovensko. Se učim vsak dan.', side:'right'},
      {speaker:'Maja', text:'Govori počasneje, prosim — ne razumem dobro.', side:'left'},
      {speaker:'Marc', text:'Oprostite ! Razumem. Jaz govorim... po-ča-sne-je.', side:'right'},
    ],
    translation:{
      'Jaz sem Maja. In ti ?':'Je suis Maja. Et toi ?',
      'Ime mi je Marc. Sem iz Pariza.':'Je m\'appelle Marc. Je suis de Paris.',
      'Kakšen poklic imaš ?':'Quel est ton métier ?',
      'Sem študentka — študiram medicino.':'Je suis étudiante — j\'étudie la médecine.',
      'Govorim angleško in malo francosko.':'Je parle anglais et un peu français.',
      'Se učim vsak dan.':'J\'apprends chaque jour.',
      'Govori počasneje, prosim — ne razumem dobro.':'Parle plus lentement s\'il te plaît — je ne comprends pas bien.',
      'Razumem. Jaz govorim... po-ča-sne-je.':'Je comprends. Je parle... plus-len-te-ment.',
    }
  },

  { type:'qcm', label:'QCM histoire', question:'Quel est le métier de Marc ?', choices:['Ingénieur','Médecin','Enseignant','Avocat'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'Qu\'est-ce que Maja étudie ?', choices:['La médecine','Le droit','L\'ingénierie','La cuisine'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'Que demande Maja à Marc ?', choices:['De parler plus lentement','De répéter','De parler anglais','De s\'arrêter'], correct:0 },

  { type:'dictee', label:'Dictée', word:'Prihajam', phonetic:'[pri-HA-yam]', hint:'Je viens — 8 lettres' },
  { type:'dictee', label:'Dictée', word:'Razumem', phonetic:'[ra-ZU-mem]', hint:'Je comprends — 7 lettres' },

  { type:'dialogue', label:'À toi de jouer !', lines:[
    {speaker:'Maja', text:'Zdravo ! Kako ti je ime ?', side:'left'},
    {speaker:'Toi',  text:'Zdravo ! Ime mi je ___.', side:'right', blank:'Marc', hint:'ton prénom'},
    {speaker:'Maja', text:'Odkod si ?', side:'left'},
    {speaker:'Toi',  text:'Prihajam iz ___.', side:'right', blank:'Francije', hint:'de France → Francije'},
    {speaker:'Maja', text:'Kakšen poklic imaš ?', side:'left'},
    {speaker:'Toi',  text:'Sem ___.', side:'right', blank:'inženir', hint:'ingénieur → inženir'},
    {speaker:'Maja', text:'Govorite slovensko ?', side:'left'},
    {speaker:'Toi',  text:'Malo. Se ___  vsak dan.', side:'right', blank:'učim', hint:'j\'apprends → se učim'},
  ]},
];
