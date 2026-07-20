// ═══════════════════════════════════════════
// LEVELS — global registry
// ═══════════════════════════════════════════

// Slovenian levels
const LEVELS_SL = [
  NIVEAU1,
  {
    id: 2, name: 'Niveau 2', sub: 'Au quotidien', emoji: '🌿',
    lessons: [
      { id:'2-1',  title:'Au marché',          sub:'Koliko stane ? Produits frais',         xp:65, words:18, type:'lesson' },
      { id:'2-2',  title:'Au restaurant',      sub:'Commander, payer, politesse',           xp:70, words:22, type:'lesson' },
      { id:'2-r1', title:'Récap 1 & 2',        sub:'Marché + restaurant',                   xp:30, words:0,  type:'recap'  },
      { id:'2-3',  title:'Transports',          sub:'Bus, train, billets, horaires',        xp:65, words:18, type:'lesson' },
      { id:'2-4',  title:'La santé',            sub:'Corps, symptômes, chez le médecin',    xp:70, words:20, type:'lesson' },
      { id:'2-r2', title:'Récap 3 & 4',        sub:'Transports + santé',                   xp:30, words:0,  type:'recap'  },
      { id:'2-5',  title:'Les vêtements',       sub:'Shopping, tailles, couleurs',           xp:65, words:20, type:'lesson' },
      { id:'2-6',  title:'Les loisirs',         sub:'Sport, musique, lecture, sorties',     xp:65, words:20, type:'lesson' },
      { id:'2-r3', title:'Récap 5 & 6',        sub:'Vêtements + loisirs',                  xp:30, words:0,  type:'recap'  },
      { id:'2-7',  title:'Téléphone & web',    sub:'Appeler, écrire, réseaux',             xp:65, words:18, type:'lesson' },
      { id:'2-8',  title:'La météo avancée',   sub:'Prévisions, activités selon météo',    xp:65, words:18, type:'lesson' },
      { id:'2-r4', title:'Récap 7 & 8',        sub:'Téléphone + météo avancée',            xp:30, words:0,  type:'recap'  },
      { id:'2-9',  title:'Voyager en Slovénie', sub:'Hébergement, visites, nature',        xp:70, words:22, type:'lesson' },
      { id:'2-10', title:'Les émotions',        sub:'Sentiments, exprimer, réagir',         xp:65, words:18, type:'lesson' },
      { id:'2-rf', title:'Grand récap N2',      sub:'Bilan complet Niveau 2',              xp:80, words:0,  type:'recap'  },
    ]
  },
  {
    id: 3, name: 'Niveau 3', sub: 'Vie sociale', emoji: '🏡',
    lessons: [
      { id:'3-1',  title:'Se présenter en détail', sub:'Personnalité, valeurs, ambitions', xp:70, words:22, type:'lesson' },
      { id:'3-2',  title:'Le travail',              sub:'Bureau, réunions, collègues',      xp:70, words:22, type:'lesson' },
      { id:'3-r1', title:'Récap 1 & 2',             sub:'Présentation + travail',           xp:30, words:0,  type:'recap'  },
      { id:'3-3',  title:'La cuisine slovène',      sub:'Recettes, ingrédients, traditions',xp:65, words:22, type:'lesson' },
      { id:'3-4',  title:'Les sorties',             sub:'Cinéma, concerts, musées',         xp:65, words:20, type:'lesson' },
      { id:'3-r2', title:'Récap 3 & 4',             sub:'Cuisine + sorties',                xp:30, words:0,  type:'recap'  },
      { id:'3-5',  title:'La vie sociale',          sub:'Amis, invitations, fêtes',         xp:65, words:20, type:'lesson' },
      { id:'3-6',  title:'Traditions slovènes',     sub:'Kurent, Pust, fêtes nationales',  xp:70, words:22, type:'lesson' },
      { id:'3-r3', title:'Récap 5 & 6',             sub:'Social + traditions',              xp:30, words:0,  type:'recap'  },
      { id:'3-7',  title:'Les médias',              sub:'TV, presse, réseaux slovènes',    xp:65, words:18, type:'lesson' },
      { id:'3-8',  title:'Le logement avancé',      sub:'Location, voisinage, contrat',    xp:65, words:20, type:'lesson' },
      { id:'3-rf', title:'Grand récap N3',           sub:'Bilan complet Niveau 3',          xp:80, words:0,  type:'recap'  },
    ]
  },
  {
    id: 4, name: 'Niveau 4', sub: 'Intégration', emoji: '🌟',
    lessons: [
      { id:'4-1',  title:"L'administration",       sub:'Documents, formulaires, mairie',   xp:80, words:24, type:'lesson' },
      { id:'4-2',  title:'La banque & la poste',   sub:'Comptes, virements, courrier',     xp:75, words:22, type:'lesson' },
      { id:'4-r1', title:'Récap 1 & 2',            sub:'Administration + banque',           xp:30, words:0,  type:'recap'  },
      { id:'4-3',  title:"L'école",                sub:'Système scolaire slovène',          xp:75, words:22, type:'lesson' },
      { id:'4-4',  title:'Le système de santé',    sub:'Assurance, médecin, hôpital',      xp:80, words:22, type:'lesson' },
      { id:'4-r2', title:'Récap 3 & 4',            sub:'École + santé avancée',             xp:30, words:0,  type:'recap'  },
      { id:'4-5',  title:'Environnement & nature', sub:'Écologie, Triglav, Karst',          xp:75, words:22, type:'lesson' },
      { id:'4-6',  title:'La culture slovène',     sub:'Littérature, art, Prešeren',       xp:75, words:22, type:'lesson' },
      { id:'4-r3', title:'Récap 5 & 6',            sub:'Nature + culture',                  xp:30, words:0,  type:'recap'  },
      { id:'4-7',  title:'Le monde du travail',    sub:'Entretien, CV, contrat',           xp:80, words:24, type:'lesson' },
      { id:'4-8',  title:'Révision & culture',     sub:'Grand bilan + quiz culturel',      xp:100,words:50, type:'lesson' },
      { id:'4-rf', title:'Grand récap final',       sub:'Bilan Niveau 4 complet',          xp:100,words:0,  type:'recap'  },
    ]
  },
  NIVEAU5,
  NIVEAU6,
];

// Dynamic LEVELS based on language preference
function getLevels() {
  return LEVELS_SL;
}

// ═══════════════════════════════════════════
// EX — registre global des exercices
// Mis à jour automatiquement par generate_lesson.py
// ═══════════════════════════════════════════
const EX = {
  // ── Niveau 1 ──
  '1-1':  EX_1_1,
  '1-2':  EX_1_2,
  '1-3':  EX_1_3,
  '1-4':  EX_1_4,
  '1-5':  EX_1_5,
  '1-6':  EX_1_6,
  '1-7':  EX_1_7,
  '1-8':  EX_1_8,
  '1-9':  EX_1_9,
  '1-10': EX_1_10,
  '1-11': EX_1_11,
  '1-12': EX_1_12,
  '1-13': EX_1_13,
  '1-14': EX_1_14,
  '1-15': EX_1_15,
  '1-16': EX_1_16,
  '1-17': EX_1_17,
  '1-18': EX_1_18,
  '1-19': EX_1_19,
  '1-20': EX_1_20,
  // ── Niveau 2 (généré automatiquement) ──
  '2-1':  EX_2_1,
  '2-2':  EX_2_2,
  '2-3':  EX_2_3,
  '2-4':  EX_2_4,
  '2-5':  EX_2_5,
  '2-6':  EX_2_6,
  '2-7':  EX_2_7,
  '2-8':  EX_2_8,
  '2-9':  EX_2_9,
  '2-10': EX_2_10,
  // ── Niveau 3 (généré automatiquement) ──
  '3-1':  EX_3_1,
  '3-2':  EX_3_2,
  '3-3':  EX_3_3,
  '3-4':  EX_3_4,
  '3-5':  EX_3_5,
  '3-6':  EX_3_6,
  '3-7':  EX_3_7,
  '3-8':  EX_3_8,
  // ── Niveau 4 (généré automatiquement) ──
  '4-1':  EX_4_1,
  '4-2':  EX_4_2,
  '4-3':  EX_4_3,
  '4-4':  EX_4_4,
  '4-5':  EX_4_5,
  '4-6':  EX_4_6,
  '4-7':  EX_4_7,
  '4-8':  EX_4_8,
  // ── Niveau 6 (généré automatiquement) ──
  '6-1': EX_6_1,
  '6-2': EX_6_2,
  '6-3': EX_6_3,
  '6-4': EX_6_4,
  '6-5': EX_6_5,
  '6-6': EX_6_6,
  '6-7': EX_6_7,
  // ── Niveau 5 — Culture & Histoire (manuel) ──
  'C-1': EX_C_1,
  'C-2': EX_C_2,
  'C-3': EX_C_3,
  'C-4': EX_C_4,
  'C-5': EX_C_5,
  'C-6': EX_C_6,
  'C-7': EX_C_7,
  'C-8': EX_C_8,
  ...EX_N1_RECAPS,
};
