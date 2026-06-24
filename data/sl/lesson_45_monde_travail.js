// ═══════════════════════════════════════════
// 4-7 — Le monde du travail
// Généré le 2026-06-24 par generate_lesson.py
// ═══════════════════════════════════════════
const EX_4_7 = [
  { type:'presentation', label:'Découverte', word:'Razgovor za zaposlitev', phonetic:'[RAZ-go-vor za za-PO-sli-tev]', translation:'Entretien d\'embauche',
    cultural:{title:'Le marché du travail en Slovénie', text:'Le marché du travail slovène est caractérisé par un faible taux de chômage d\'environ 4 %. Les secteurs en croissance incluent la pharmacie, l\'automobile, l\'informatique et le tourisme.'},
    histoire:{title:'Une main-d\'œuvre qualifiée', text:'La Slovénie a développé un système éducatif solide, produisant des travailleurs qualifiés. Cela attire de nombreuses entreprises étrangères à s\'installer dans le pays.'} },

  { type:'tts_repeat', label:'Au travail', word:'Življenjepis je pomemben dokument.', phonetic:'[ZHI-vlyen-YE-pis ye pom-PEM-ben DO-ku-ment]', translation:'Le CV est un document important.' },
  { type:'tts_repeat', label:'Au travail', word:'Ali imate izkušnje?', phonetic:'[A-li i-MA-te iz-KU-sny-e]', translation:'Avez-vous de l\'expérience ?' },
  { type:'tts_repeat', label:'Au travail', word:'Kako se prijaviti?', phonetic:'[KA-ko se pri-JA-vi-ti]', translation:'Comment postuler ?' },
  { type:'tts_repeat', label:'Au travail', word:'Prošnja mora biti kratka.', phonetic:'[PRO-shn-ya MO-ra BI-ti KRAT-ka]', translation:'La lettre de motivation doit être courte.' },

  { type:'matching', label:'Vocabulaire RH → français', pairs:[
    {sl:'Življenjepis', fr:'CV'}, {sl:'Prošnja', fr:'Demande'},
    {sl:'Delovno razmerje', fr:'Relation de travail'}, {sl:'Pogodba o zaposlitvi', fr:'Contrat de travail'},
    {sl:'Odpoved', fr:'Résiliation'},
  ]},

  { type:'qcm', label:'QCM grammaire', question:'Comment exprimer une condition pour le futur professionnel ?',
    choices:['Bi bil/bila pripravljen/a...','Bi pripravljen/a...','Pripravil/a bi...','Bil/bila sem pripravljen/a...'], correct:0 },
    
  { type:'qcm', label:'QCM culturel', question:'Quel secteur est en forte croissance en Slovénie ?',
    choices:['Technologie de l\'information','Agriculture','Artisanat','Éducation'], correct:0 },

  { type:'qcm', label:'QCM vocabulaire', question:'Que signifie "napredovanje" ?',
    choices:['Promotion','Démission','Formation','Contrat'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['Življenjepis je ___ (CV)'], blank:'življenjepis', bank:['življenjepis','prošnja','pogodba','delovno'] },
  { type:'fill', label:'Phrase à trous', sentence:['V ___ se lahko zaposlite. (Vous pouvez vous faire embaucher dans...)'], blank:'prošnjo', bank:['prošnjo','življenjepis','sindikat','pogodbo'] },
  { type:'fill', label:'Phrase à trous', sentence:['Odpoved lahko podate v ___ (démission)'], blank:'odpisu', bank:['odpisu','prošnji','razgovoru','delovnem'] },
  { type:'fill', label:'Phrase à trous', sentence:['___ je obvezna za vse zaposlitev. (La formation est obligatoire pour tous les emplois.)'], blank:'Usposabljanje', bank:['Usposabljanje','Razgovor','Življenjepis','Odpoved'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Kako se imenuje delovno razmerje ?', words:['Kako','se','imenuje','delovno','razmerje','?'] },
  
  { type:'story', label:'Dialogue au travail', title:'Pri razgovoru — À l\'entretien',
    narration:'Ana se pripravlja na razgovor za zaposlitev. Njena prijateljica Maja ji pomaga.',
    dialogue:[
      {speaker:'Maja', text:'Ana, si pripravljena za razgovor?', side:'left'},
      {speaker:'Ana', text:'Ja, upam, da mi bo uspelo.', side:'right'},
      {speaker:'Maja', text:'Preveri svoj življenjepis in prošnjo.', side:'left'},
      {speaker:'Ana', text:'Sem. Upam, da so vsi podatki pravilni.', side:'right'},
      {speaker:'Maja', text:'Povej, kako se boš predstavila?', side:'left'},
      {speaker:'Ana', text:'Povedala bom o svojih izkušnjah.', side:'right'},
      {speaker:'Maja', text:'Super! Bodi samozavestna.', side:'left'},
      {speaker:'Ana', text:'Hvala, Maja. Bom poskušala.', side:'right'},
    ],
    translation:{
      'Ana, si pripravljena za razgovor?': 'Ana, es-tu prête pour l\'entretien ?',
      'Ja, upam, da mi bo uspelo.': 'Oui, j\'espére que ça ira.',
      'Preveri svoj življenjepis in prošnjo.': 'Vérifie ton CV et ta lettre de motivation.',
      'Sem. Upam, da so vsi podatki pravilni.': 'Je l\'ai fait. J\'espére que toutes les informations sont correctes.',
      'Povej, kako se boš predstavila?': 'Dis-moi, comment vas-tu te présenter ?',
      'Povedala bom o svojih izkušnjah.': 'Je parlerai de mon expérience.',
      'Super! Bodi samozavestna.': 'Super ! Sois confiante.',
      'Hvala, Maja. Bom poskušala.': 'Merci, Maja. Je vais essayer.',
    }},
];

// ── fin EX_4_7 ──
