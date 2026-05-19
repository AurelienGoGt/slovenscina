// ═══════════════════════════════════════════
// 1-13 — Jours & mois
// ═══════════════════════════════════════════
const EX_1_13 = [
  { type:'presentation', label:'Les jours', word:'Ponedeljek — Torek — Sreda', phonetic:'[po-ne-DEL-yek] [TO-rek] [SRE-da]', translation:'Lundi — Mardi — Mercredi',
    cultural:{title:'Noms slaves', text:'"Sreda" = milieu de la semaine. "Ponedeljek" = après dimanche (po + nedelja). Ce sont des noms d\'origine slave, pas latine comme en français !'},
    histoire:{title:'Fêtes nationales slovènes', text:'25 juin : Jour de l\'État (1991, indépendance). 8 février : Jour de la culture, hommage à France Prešeren, le poète national. 1er novembre : Jour de la Réforme — la Slovénie est historiquement luthérienne. Primož Trubar a écrit le premier livre en slovène en 1550 !'} },

  { type:'presentation', label:'V ponedeljek — le lundi', word:'V ponedeljek — Ob ponedeljkih', phonetic:'[v po-ne-DEL-yku] [ob po-ne-DEL-ykih]', translation:'Lundi (ce lundi) — Le lundi (tous les lundis)', noTTS:true,
    cultural:{title:'Dire les jours avec une préposition', text:'"V ponedeljek" (locatif singulier) = ce lundi / lundi prochain. "Ob ponedeljkih" (locatif pluriel) = le lundi (habituellement). Ex : "V petek grem v kino" = vendredi je vais au cinéma. "Ob petkih hodim v kino" = le vendredi je vais au cinéma.'} },

  { type:'presentation', label:'Les jours au locatif', word:'V ponedeljek — V torek — V sredo — V četrtek — V petek — V soboto — V nedeljo', phonetic:'[v po-ne-DEL-yku] [v TO-rek] [v SRE-do] [v CHET-r-tek] [v PE-tek] [v so-BO-to] [v ne-DEL-yo]', translation:'Lundi — Mardi — Mercredi — Jeudi — Vendredi — Samedi — Dimanche', noTTS:true,
    cultural:{title:'Locatif des jours — attention à sreda !', text:'La préposition "v" déclenche le locatif : "v ponedeljek", "v torek", "v četrtek", "v petek" gardent la forme nominative. Mais attention ! "Sreda" → "v sredo" (irrégulier). "Sobota" → "v soboto". "Nedelja" → "v nedeljo". Ces 3 derniers changent de terminaison !'} },

  { type:'tts_repeat', label:'Jours 1-7', word:'Ponedeljek, torek, sreda, četrtek, petek, sobota, nedelja', phonetic:'[po-ne-DEL-yek, TO-rek, SRE-da, CHET-r-tek, PE-tek, so-BO-ta, ne-DEL-ya]', translation:'Lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche' },

  { type:'tts_repeat', label:'Jours avec "v"', word:'V ponedeljek, v torek, v sredo, v četrtek, v petek, v soboto, v nedeljo', phonetic:'[v po-ne-DEL-yku, v TO-rek, v SRE-do, v CHET-r-tek, v PE-tek, v so-BO-to, v ne-DEL-yo]', translation:'Lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche (avec "v")' },

  { type:'matching', label:'Jours → français', pairs:[
    {sl:'Ponedeljek', fr:'Lundi'},
    {sl:'Torek',      fr:'Mardi'},
    {sl:'Sreda',      fr:'Mercredi'},
    {sl:'Četrtek',    fr:'Jeudi'},
    {sl:'Petek',      fr:'Vendredi'},
  ]},
  { type:'matching', label:'Week-end → français', pairs:[
    {sl:'Sobota',          fr:'Samedi'},
    {sl:'Nedelja',         fr:'Dimanche'},
    {sl:'V ponedeljek',    fr:'Lundi (ce lundi)'},
    {sl:'Ob petkih',       fr:'Le vendredi (habituellement)'},
    {sl:'Vsak dan',        fr:'Chaque jour'},
  ]},

  { type:'matching', label:'Jours au locatif → français', pairs:[
    {sl:'V sredo',    fr:'Mercredi (locatif irrégulier)'},
    {sl:'V soboto',   fr:'Samedi (locatif)'},
    {sl:'V nedeljo',  fr:'Dimanche (locatif)'},
    {sl:'V petek',    fr:'Vendredi (locatif)'},
    {sl:'V torek',    fr:'Mardi (locatif)'},
  ]},

  { type:'qcm', label:'QCM', question:'"Nedelja" (dimanche) — le mot contient "nedela" qui signifie…', choices:['Pas de travail (nedelovni dan)','Fin de semaine','Jour sacré','Repos'], correct:0 },
  { type:'qcm', label:'QCM grammaire', question:'"Ob četrtkih" signifie…', choices:['Le jeudi (habituellement)','Ce jeudi','Jeudi prochain','Tous les jours'], correct:0 },

  { type:'qcm', label:'QCM locatif', question:'"Mercredi" avec la préposition "v" donne :',
    choices:['V sredo','V sreda','V sredi','Ob sredi'], correct:0 },
  { type:'qcm', label:'QCM locatif', question:'Quelle forme est correcte pour "samedi" avec "v" ?',
    choices:['V soboto','V sobota','V soboti','Ob soboti'], correct:0 },

  { type:'presentation', label:'Les mois', word:'Januar — Februar — Marec', phonetic:'[YA-nu-ar] [FE-bru-ar] [MA-rets]', translation:'Janvier — Février — Mars',
    cultural:{title:'V januarju — en janvier', text:'Les mois se mettent au locatif avec "v" pour dire "en janvier". "V januarju" = en janvier. "V decembru" = en décembre. Maj → "v maju" (mai). C\'est régulier une fois qu\'on connaît le locatif !'} },

  { type:'tts_repeat', label:'Mois 1-6', word:'Januar, februar, marec, april, maj, junij', phonetic:'[YA-nu-ar, FE-bru-ar, MA-rets, AP-ril, MAY, YU-niy]', translation:'Janvier, février, mars, avril, mai, juin' },
  { type:'tts_repeat', label:'Mois 7-12', word:'Julij, avgust, september, oktober, november, december', phonetic:'[YU-liy, AV-gust, sep-TEM-ber, ok-TO-ber, no-VEM-ber, de-TsEM-ber]', translation:'Juillet, août, septembre, octobre, novembre, décembre' },

  { type:'matching', label:'Mois → français', pairs:[
    {sl:'Januar',   fr:'Janvier'},
    {sl:'Maj',      fr:'Mai'},
    {sl:'Julij',    fr:'Juillet'},
    {sl:'Oktober',  fr:'Octobre'},
    {sl:'December', fr:'Décembre'},
  ]},

  { type:'matching', label:'Mois → saisons', pairs:[
    {sl:'December, januar, februar', fr:'Zima (hiver)'},
    {sl:'Marec, april, maj',         fr:'Pomlad (printemps)'},
    {sl:'Junij, julij, avgust',      fr:'Poletje (été)'},
    {sl:'September, oktober',        fr:'Jesen (automne)'},
    {sl:'November',                  fr:'Jesen (automne tardif)'},
  ]},

  { type:'presentation', label:'Les saisons', word:'Pomlad — Poletje — Jesen — Zima', phonetic:'[POM-lad] [po-LET-ye] [YE-sen] [ZI-ma]', translation:'Printemps — Été — Automne — Hiver',
    cultural:{title:'Saisons en Slovénie', text:'"V pomladi" = au printemps (aussi : "spomladi"). "Poleti" = en été. "Jeseni" = en automne. "Pozimi" = en hiver. Chaque saison a son locatif spécial. La Slovénie a 4 saisons bien marquées avec des paysages magnifiques !'} },

  { type:'tts_repeat', label:'Saisons au locatif', word:'Spomladi, poleti, jeseni, pozimi', phonetic:'[spo-MLA-di, po-LE-ti, ye-SE-ni, po-ZI-mi]', translation:'Au printemps, en été, en automne, en hiver' },

  { type:'tts_repeat', label:'Dates', word:'Danes je ponedeljek. Danes je 28. aprila.', phonetic:'[DA-nes ye po-ne-DEL-yek] [DA-nes ye OSEM-in-DVA-yse-ti AP-ri-la]', translation:'Aujourd\'hui c\'est lundi. Aujourd\'hui c\'est le 28 avril.' },

  { type:'tts_repeat', label:'Fêtes nationales', word:'Novo leto, Prešernov dan, Dan državnosti, Dan samostojnosti', phonetic:'[NO-vo LE-to, PRE-sher-nov DAN, DAN dr-ZHAV-nos-ti, DAN sa-mos-TOY-nos-ti]', translation:'Nouvel an (1 jan), Jour de la culture (8 fév), Jour de l\'État (25 juin), Jour de l\'indépendance (26 déc)' },

  { type:'fill', label:'Phrase à trous', sentence:['Danes je ___ . (Aujourd\'hui c\'est vendredi)'], blank:'petek', bank:['petek','torek','sreda','sobota'] },
  { type:'fill', label:'Phrase à trous', sentence:['Moj rojstni dan je v ___. (Mon anniversaire est en juillet.)'], blank:'juliju', bank:['juliju','januarju','maju','decembru'] },
  { type:'fill', label:'Phrase à trous', sentence:['___ petkih hodim na trg. (Le vendredi je vais au marché.)'], blank:'Ob', bank:['Ob','V','Na','Za'] },

  { type:'fill', label:'Phrase à trous', sentence:['Danes je ___, 15. maja. (Aujourd\'hui c\'est vendredi 15 mai.)'], blank:'petek', bank:['petek','torek','sreda','četrtek'] },
  { type:'fill', label:'Phrase à trous', sentence:['___ hodim v šolo. (Le lundi je vais à l\'école.)'], blank:'Ob ponedeljkih', bank:['Ob ponedeljkih','V ponedeljek','Ob sobotah','V nedeljo'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Danes je sreda in zunaj je lepo.', words:['Danes','je','sreda','in','zunaj','je','lepo','.'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'V sredo grem v kino s prijatelji.', words:['V','sredo','grem','v','kino','s','prijatelji','.'] },

  { type:'story', label:'Histoire', title:'Planifier un voyage',
    narration:"Sara et Rok planifient un voyage à Piran pour l'été. Ils regardent le calendrier.",
    dialogue:[
      {speaker:'Sara', text:'Kdaj gremo v Piran ?', side:'left'},
      {speaker:'Rok',  text:'V juliju ali avgustu ?', side:'right'},
      {speaker:'Sara', text:'Jaz sem prosta v juliju. Ob katerem dnevu ?', side:'left'},
      {speaker:'Rok',  text:'V petek, 15. julija. Do nedelje, 17. julija.', side:'right'},
      {speaker:'Sara', text:'Tri dni ! Odlično ! Kakšno je vreme poleti v Piranu ?', side:'left'},
      {speaker:'Rok',  text:'Vroče in sončno — to je Mediteran !', side:'right'},
      {speaker:'Sara', text:'Rezerviramo hotel takoj !', side:'left'},
    ],
    translation:{
      'Kdaj gremo v Piran ?':'Quand allons-nous à Piran ?',
      'V juliju ali avgustu ?':'En juillet ou en août ?',
      'Jaz sem prosta v juliju.':'Je suis libre en juillet.',
      'Ob katerem dnevu ?':'Quel jour ?',
      'V petek, 15. julija. Do nedelje, 17. julija.':'Vendredi, le 15 juillet. Jusqu\'au dimanche 17 juillet.',
      'Tri dni ! Odlično !':'Trois jours ! Excellent !',
      'Vroče in sončno — to je Mediteran !':'Chaud et ensoleillé — c\'est la Méditerranée !',
      'Rezerviramo hotel takoj !':'On réserve l\'hôtel maintenant !',
    }
  },

  { type:'qcm', label:'QCM histoire', question:'Quand Sara est-elle libre ?', choices:['En juillet','En août','En juin','En septembre'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'Combien de jours dure le voyage ?', choices:['3 jours','2 jours','4 jours','5 jours'], correct:0 },
  { type:'qcm', label:'QCM histoire', question:'Quel temps fait-il à Piran en été ?', choices:['Chaud et ensoleillé','Frais et nuageux','Pluvieux','Variable'], correct:0 },

  { type:'dictee', label:'Dictée', word:'Ponedeljek', phonetic:'[po-ne-DEL-yek]', hint:'Lundi — 10 lettres' },
  { type:'dictee', label:'Dictée', word:'December', phonetic:'[de-TsEM-ber]', hint:'Décembre — 8 lettres' },
  { type:'dictee', label:'Dictée', word:'Pomlad', phonetic:'[POM-lad]', hint:'Printemps — 6 lettres' },

  { type:'dialogue', label:'À toi !', lines:[
    {speaker:'Ana', text:'Kdaj je tvoj rojstni dan ?', side:'left'},
    {speaker:'Toi', text:'Moj rojstni dan je v ___.',  side:'right', blank:'maju', hint:'en mai → v maju'},
    {speaker:'Ana', text:'Kateri dan v tednu se rodiš ?', side:'left'},
    {speaker:'Toi', text:'Rodil sem se v ___.',  side:'right', blank:'torek', hint:'mardi → torek'},
    {speaker:'Ana', text:'In katera sezona je to ?', side:'left'},
    {speaker:'Toi', text:'To je ___.',  side:'right', blank:'pomlad', hint:'printemps → pomlad'},
  ]},
];
