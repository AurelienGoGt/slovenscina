// ═══════════════════════════════════════════
// 6-3 — Politique & société
// Généré le 2026-07-16 par generate_lesson.py
// ═══════════════════════════════════════════
const EX_6_3 = [
  { type:'presentation', label:'Découverte', word:'Politika', phonetic:'[PO-li-ti-ka]', translation:'La politique',
    cultural:{title:'Le système politique slovène', text:'La Slovénie est une république parlementaire. Le président est élu pour cinq ans et a un rôle symbolique. Le véritable pouvoir est exercé par le Premier ministre et le Državni zbor, avec 90 députés.'},
    histoire:{title:'L’histoire politique', text:'La Slovénie a obtenu son indépendance en 1991. Depuis lors, elle a développé un système démocratique solide, s’intégrant dans l’Union européenne et l’OTAN.'} },

  { type:'tts_repeat', label:'Au parlement', word:'Kdo je trenutni predsednik ?', phonetic:'[KDO ye TRE-nut-ni pre-SED-nik]', translation:'Qui est le président actuel ?' },
  { type:'tts_repeat', label:'Au parlement', word:'Kdaj so volitve ?', phonetic:'[KDAJ so VO-li-te]', translation:'Quand ont lieu les élections ?' },
  { type:'tts_repeat', label:'Au parlement', word:'Kako deluje vlada ?', phonetic:'[KA-ko de-LU-je VLA-da]', translation:'Comment fonctionne le gouvernement ?' },
  { type:'tts_repeat', label:'Au parlement', word:'Ali je ta zakon sprejet ?', phonetic:'[A-li ye ta ZA-kon spre-YET]', translation:'Cette loi a-t-elle été adoptée ?' },

  { type:'matching', label:'Termes politiques → français', pairs:[
    {sl:'Vlada', fr:'Gouvernement'}, {sl:'Parlament', fr:'Parlement'},
    {sl:'Državni zbor', fr:'Assemblée nationale'}, {sl:'Predsednik', fr:'Président'},
    {sl:'Volitve', fr:'Élections'},
  ]},

  { type:'qcm', label:'QCM grammaire', question:'Le passif officiel se forme avec :',
    choices:['se izvoli','se imenuje','se sprejme','tous les options'], correct:0 },

  { type:'qcm', label:'QCM vocabulaire', question:'Que signifie "glasovanje" ?',
    choices:['Vote','Élection','Référendum','Proposition'], correct:0 },

  { type:'qcm', label:'QCM culturel', question:'La Slovénie est membre de :',
    choices:['UE','UN','NATO','Tous les choix'], correct:0 },

  { type:'qcm', label:'QCM conditionnel', question:'Pour exprimer une obligation, on utilise :',
    choices:['bi morali','bi lahko','zato ker','ker'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['___ je pomembna za demokracijo. (La Constitution est importante pour la démocratie.)'], blank:'Ustava', bank:['Ustava','Zakon','Parlament','Volitve'] },
  { type:'fill', label:'Phrase à trous', sentence:['___ je na voljo za glasovanje. (Le projet est disponible pour le vote.)'], blank:'Predlog', bank:['Predlog','Zakon','Ustava','Koalicija'] },
  { type:'fill', label:'Phrase à trous', sentence:['___ je vladna koalicija. (C\'est une coalition gouvernementale.)'], blank:'To', bank:['To','Ta','Tisti','Tukaj'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Volitve bodo v naslednjem letu.', words:['Volitve','bodo','v','naslednjem','letu','.'] },

  { type:'story', label:'Dialogue au parlement', title:'Pri parlamentu — Au parlement',
    narration:'Milan je pred Državnim zborom. Želi izvedeti več o volitvah in vladi.',
    dialogue:[
      {speaker:'Milan', text:'Dober dan ! Kdaj so naslednje volitve ?', side:'left'},
      {speaker:'Asistent', text:'Dober dan ! Naslednje volitve bodo čez eno leto.', side:'right'},
      {speaker:'Milan', text:'Kako deluje vlada v Sloveniji ?', side:'left'},
      {speaker:'Asistent', text:'Vlada vodi premier, ki ga izvoli Državni zbor.', side:'right'},
      {speaker:'Milan', text:'Ali imate informacije o strankah ?', side:'left'},
      {speaker:'Asistent', text:'Da, imamo več opozicijskih strank, ki vplivajo na odločitve.', side:'right'},
      {speaker:'Milan', text:'Hvala za informacije.', side:'left'},
      {speaker:'Asistent', text:'Ni za kaj. Če potrebujete več, se obrnite na nas.', side:'right'},
    ],
    translation:{
      'Dober dan ! Kdaj so naslednje volitve ?': 'Bonjour ! Quand ont lieu les prochaines élections ?',
      'Dober dan ! Naslednje volitve bodo čez eno leto.': 'Bonjour ! Les prochaines élections auront lieu dans un an.',
      'Kako deluje vlada v Sloveniji ?': 'Comment fonctionne le gouvernement en Slovénie ?',
      'Vlada vodi premier, ki ga izvoli Državni zbor.': 'Le gouvernement est dirigé par un Premier ministre élu par l’Assemblée nationale.',
      'Ali imate informacije o strankah ?': 'Avez-vous des informations sur les partis ?',
      'Da, imamo več opozicijskih strank, ki vplivajo na odločitve.': 'Oui, nous avons plusieurs partis d’opposition qui influencent les décisions.',
      'Hvala za informacije.': 'Merci pour les informations.',
      'Ni za kaj. Če potrebujete več, se obrnite na nas.': 'De rien. Si vous avez besoin de plus, contactez-nous.',
    }},
];

// ── fin EX_6_3 ──
