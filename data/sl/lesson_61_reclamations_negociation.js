// ═══════════════════════════════════════════
// 6-7 — Réclamations & négociation
// Généré le 2026-07-20 par generate_lesson.py
// ═══════════════════════════════════════════
const EX_6_7 = [
  { type:'presentation', label:'Découverte', word:'Pravica potrošnikov', phonetic:'[PRA-vi-tsa po-tro-SHNIK-ov]', translation:'Droits des consommateurs',
    cultural:{title:'Droits des consommateurs en Slovénie', text:'En Slovénie, les droits des consommateurs sont bien protégés, conformes aux normes de l\'UE. Les consommateurs disposent d\'un délai de rétractation de 14 jours et d\'une garantie légale de 2 ans sur les produits.'},
    histoire:{title:'ZVKSES', text:'L\'association des consommateurs ZVKSES joue un rôle crucial en Slovénie, offrant des conseils et un soutien aux consommateurs pour faire face à des problèmes de réclamations et de litiges.'} },

  { type:'presentation', label:'Découverte', word:'Tržna inšpekcija', phonetic:'[TRZH-na in-SPEK-tsi-ja]', translation:'Inspection du marché',
    cultural:{title:'Rôle de l\'inspection du marché', text:'La tržna inšpekcija est l\'équivalent de la DGCCRF en France et veille à la protection des droits des consommateurs, en s\'assurant que les commerçants respectent les lois et régulations en vigueur.'},
    histoire:{title:'Règlement des litiges', text:'En cas de litiges, la médiation est souvent utilisée en Slovénie pour résoudre les conflits entre consommateurs et entreprises, permettant une résolution pacifique.'} },

  { type:'tts_repeat', label:'Réclamation', word:'Prosim, da mi poveste, zakaj je prišlo do zamude.', phonetic:'[PRO-sim, da mi po-VE-ste, za-KAJ ye PRI-shlo do za-MU-de]', translation:'Veuillez me dire pourquoi il y a eu un retard.' },
  { type:'tts_repeat', label:'Réclamation', word:'Zahtevam vračilo za poškodovano blago.', phonetic:'[zah-TE-vam vra-CHI-lo za po-SHO-do-va-no bla-GO]', translation:'Je demande un remboursement pour la marchandise endommagée.' },
  { type:'tts_repeat', label:'Assertivité', word:'Pričakujem odškodnino.', phonetic:'[pri-CHA-ku-jem od-SHKO-dni-no]', translation:'J\'attends une compensation.' },
  
  { type:'matching', label:'Mots clés → français', pairs:[
    {sl:'Pritožba', fr:'Réclamation'}, {sl:'Reklamacija', fr:'Réclamation'},
    {sl:'Vračilo', fr:'Remboursement'},   {sl:'Odškodnina', fr:'Indemnité'},
    {sl:'Garancija', fr:'Garantie'},
  ]},

  { type:'qcm', label:'QCM grammaire', question:'Pour exprimer une demande polie, on utilise :',
    choices:['Bi lahko... ?','Ali lahko... ?','Prosim, da... ?','Zahtevam...'], correct:0 },
  
  { type:'qcm', label:'QCM grammaire', question:'Le passif de réclamation est formé par :',
    choices:['je bilo potrjeno','je se zgodilo','se je zgodilo','je bilo zahtevano'], correct:0 },

  { type:'qcm', label:'QCM culturel', question:'Quel est le délai de rétractation en Slovénie ?',
    choices:['14 jours','30 jours','7 jours','1 mois'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['Prosim, da mi ___ (Veuillez me dire) zakaj je prišlo do zamude.'], blank:'poveste', bank:['poveste','povem','poveš','povedo'] },
  { type:'fill', label:'Phrase à trous', sentence:['___ (J\'attends) odškodnino.'], blank:'Pričakujem', bank:['Pričakujem','Zahtevam','Prosim','Vračilo'] },
  { type:'fill', label:'Phrase à trous', sentence:['V primeru, da ne ___ (vous ne respectez pas) pogodbe, se lahko obrnem na sodišče.'], blank:'spoštujete', bank:['spoštujete','sporočite','potrdite','zavrnite'] },
  
  { type:'reconstruct', label:'Reconstitue', sentence:'Zahtevam vračilo za poškodovano blago.', words:['Zahtevam','vračilo','za','poškodovano','blago','?'] },

  { type:'story', label:'Dialogue de réclamation', title:'Reklamacija — Réclamation',
    narration:'Ana je v trgovini, ker želi vložiti pritožbo.',
    dialogue:[
      {speaker:'Prodajalec', text:'Dober dan, kako vam lahko pomagam ?', side:'right'},
      {speaker:'Ana', text:'Dober dan, imela sem težave z izdelkom.', side:'left'},
      {speaker:'Prodajalec', text:'Katero težavo imate ?', side:'right'},
      {speaker:'Ana', text:'Izdelek se je pokvaril in imam garancijo.', side:'left'},
      {speaker:'Prodajalec', text:'Prosim, da mi prinesete račun.', side:'right'},
      {speaker:'Ana', text:'Tukaj je, pričakujem vračilo.', side:'left'},
      {speaker:'Prodajalec', text:'Se opravičujem, obravnavali bomo vašo pritožbo.', side:'right'},
      {speaker:'Ana', text:'Hvala, v nasprotnem primeru se bom obrnila na tržno inšpekcijo.', side:'left'},
    ],
    translation:{
      'Dober dan, kako vam lahko pomagam ?': 'Bonjour, comment puis-je vous aider ?',
      'Dober dan, imela sem težave z izdelkom.': 'Bonjour, j\'ai eu des problèmes avec le produit.',
      'Katero težavo imate ?': 'Quel problème avez-vous ?',
      'Izdelek se je pokvaril in imam garancijo.': 'Le produit est défectueux et j\'ai une garantie.',
      'Prosim, da mi prinesete račun.': 'Veuillez me montrer le reçu.',
      'Tukaj je, pričakujem vračilo.': 'Voici, j\'attends un remboursement.',
      'Se opravičujem, obravnavali bomo vašo pritožbo.': 'Je suis désolé, nous allons traiter votre réclamation.',
      'Hvala, v nasprotnem primeru se bom obrnila na tržno inšpekcijo.': 'Merci, sinon je contacterai l\'inspection du marché.',
    }},
];

// ── fin EX_6_7 ──
