// ═══════════════════════════════════════════
// QUIZ CULTUREL — Qui veut gagner des millions ?
// 36 questions sur la Slovénie (rotation aléatoire, 12/partie)
// ═══════════════════════════════════════════
const MILLE_QUESTIONS = [

  // ── Géographie ──
  { q:"Quelle est la capitale de la Slovénie ?",
    choices:["Ljubljana","Maribor","Koper","Celje"], correct:0, cat:"🗺️ Géographie" },
  { q:"Quel est le plus haut sommet de Slovénie ?",
    choices:["Le Triglav (2 864 m)","Le Mangart (2 679 m)","La Šmarna gora (669 m)","Le Nanos (1 313 m)"], correct:0, cat:"🏔️ Géographie" },
  { q:"Quel fleuve traverse la capitale Ljubljana ?",
    choices:["La Ljubljanica","La Sava","La Drave","La Soča"], correct:0, cat:"🗺️ Géographie" },
  { q:"Le lac de Bled est niché dans quelle région naturelle ?",
    choices:["Les Alpes juliennes","Les Alpes carniques","Le Karst","La plaine pannonique"], correct:0, cat:"🏔️ Géographie" },
  { q:"La Slovénie partage ses frontières avec combien de pays ?",
    choices:["4 pays","3 pays","5 pays","6 pays"], correct:0, cat:"🗺️ Géographie" },
  { q:"Sur quelle mer la Slovénie possède-t-elle un court littoral ?",
    choices:["La mer Adriatique","La mer Méditerranée","La mer Noire","La mer du Nord"], correct:0, cat:"🗺️ Géographie" },
  { q:"Quelle est la deuxième plus grande ville de Slovénie ?",
    choices:["Maribor","Celje","Koper","Kranj"], correct:0, cat:"🏙️ Villes" },
  { q:"Quel pourcentage du territoire slovène est couvert de forêts ?",
    choices:["Environ 58 %","Environ 30 %","Environ 80 %","Environ 40 %"], correct:0, cat:"🌲 Nature" },

  // ── Histoire ──
  { q:"En quelle année la Slovénie a-t-elle déclaré son indépendance ?",
    choices:["1991","1989","1993","1995"], correct:0, cat:"📜 Histoire" },
  { q:"Combien de jours a duré la guerre d'indépendance slovène ?",
    choices:["10 jours","6 mois","3 semaines","2 ans"], correct:0, cat:"📜 Histoire" },
  { q:"La Slovénie a rejoint l'Union Européenne en quelle année ?",
    choices:["2004","2007","2000","2002"], correct:0, cat:"📜 Histoire" },
  { q:"De quel empire la Slovénie faisait-elle partie jusqu'en 1918 ?",
    choices:["L'Empire austro-hongrois","L'Empire ottoman","L'Empire russe","L'Empire byzantin"], correct:0, cat:"📜 Histoire" },
  { q:"En quelle année la Slovénie a-t-elle adopté l'Euro ?",
    choices:["2007","2004","2010","2002"], correct:0, cat:"💶 Économie" },
  { q:"La Slovénie a adhéré à l'espace Schengen en quelle année ?",
    choices:["2007","2004","2012","2009"], correct:0, cat:"📜 Histoire" },

  // ── Culture & Gastronomie ──
  { q:"Quel est le plat traditionnel slovène par excellence ?",
    choices:["Le žganci (gruau de sarrasin)","La burek","Le goulash","La peka"], correct:0, cat:"🍽️ Gastronomie" },
  { q:"Le Potica est un dessert slovène en forme de…",
    choices:["Rouleau (brioche roulée)","Tarte plate","Beignet frit","Crêpe fourrée"], correct:0, cat:"🍽️ Gastronomie" },
  { q:"La fête de Saint-Nicolas (Miklavž) est célébrée le…",
    choices:["6 décembre","25 décembre","1er novembre","13 décembre"], correct:0, cat:"🎉 Traditions" },
  { q:"Quelle eau-de-vie de poire est emblématique de Slovénie ?",
    choices:["La Viljamovka","Le Slivovitz","L'Ouzo","Le Calvados"], correct:0, cat:"🍷 Gastronomie" },

  // ── Personnages célèbres ──
  { q:"Quel poète est considéré comme le père de la littérature slovène ?",
    choices:["France Prešeren","Ivan Cankar","Oton Župančič","Simon Gregorčič"], correct:0, cat:"✍️ Culture" },
  { q:"Quel architecte a redessiné et embelli Ljubljana au début du XXe siècle ?",
    choices:["Jože Plečnik","Maks Fabiani","Ivan Vurnik","Herman Hus"], correct:0, cat:"🏛️ Architecture" },
  { q:"Tadej Pogačar a remporté le Tour de France combien de fois (jusqu'à fin 2024) ?",
    choices:["3 fois","2 fois","4 fois","1 fois"], correct:0, cat:"🚴 Sport" },
  { q:"Primož Roglič est champion du monde de quelle discipline ?",
    choices:["Cyclisme sur route","Ski alpin","Biathlon","Natation"], correct:0, cat:"🚴 Sport" },
  { q:"Le physicien Jožef Stefan est célèbre pour la loi sur…",
    choices:["Le rayonnement thermique (loi Stefan-Boltzmann)","La gravitation","L'électromagnétisme","La relativité"], correct:0, cat:"🔬 Science" },
  { q:"Melania Trump est née dans quelle ville slovène ?",
    choices:["Sevnica","Ljubljana","Maribor","Koper"], correct:0, cat:"🌍 People" },

  // ── Nature & Environnement ──
  { q:"La grotte de Postojna, l'une des plus grandes d'Europe, mesure environ…",
    choices:["24 km de galeries","5 km","60 km","10 km"], correct:0, cat:"🌿 Nature" },
  { q:"La salamandre protée (Proteus anguinus) des grottes slovènes est…",
    choices:["Aveugle et de couleur blanche","Venimeuse","Capable de voler","Carnivore terrestre"], correct:0, cat:"🦎 Nature" },
  { q:"La rivière Soča est célèbre pour la couleur unique de ses eaux, qui sont…",
    choices:["Turquoise émeraude","Bleues profondes","Vertes foncées","Rougeâtres"], correct:0, cat:"🌿 Nature" },
  { q:"Quelle est la superficie du parc national du Triglav ?",
    choices:["840 km²","200 km²","2 000 km²","5 000 km²"], correct:0, cat:"🌲 Nature" },

  // ── Langue & Symboles ──
  { q:"Le slovène possède une forme grammaticale rare : le duel. Cela sert à…",
    choices:["Désigner exactement deux objets","Exprimer une double négation","Marquer deux temps verbaux","Distinguer deux genres"], correct:0, cat:"🗣️ Langue" },
  { q:"Quel symbole figure sur le drapeau et les armoiries de la Slovénie ?",
    choices:["Le Triglav (3 sommets)","Un aigle bicéphale","Un soleil d'or","Un dragon"], correct:0, cat:"🏳️ Symboles" },
  { q:"Comment dit-on 'merci' en slovène ?",
    choices:["Hvala","Prosim","Zdravo","Nasvidenje"], correct:0, cat:"🗣️ Langue" },
  { q:"Combien de cas grammaticaux possède le slovène ?",
    choices:["6 cas","4 cas","8 cas","3 cas"], correct:0, cat:"🗣️ Langue" },

  // ── Anecdotes ──
  { q:"La légende dit que le dragon de Ljubljana a été vaincu par…",
    choices:["Jason et les Argonautes","Saint-Georges","Hercule","Un roi slovène médiéval"], correct:0, cat:"🐉 Légendes" },
  { q:"Le pont du Dragon (Zmajski most) à Ljubljana est de quel style ?",
    choices:["Art Nouveau (1901)","Gothique (XIVe s.)","Renaissance (XVIe s.)","Contemporain (2000)"], correct:0, cat:"🌉 Architecture" },
  { q:"Quel est le nom latin historique de la région correspondant à la Slovénie ?",
    choices:["Carniola / Carantania","Illyria","Pannonia","Noricum"], correct:0, cat:"📜 Histoire" },
  { q:"Quel est le principal aéroport international de Slovénie ?",
    choices:["Aéroport Jože Pučnik (Ljubljana)","Aéroport de Maribor","Aéroport de Portorož","Aéroport de Celje"], correct:0, cat:"✈️ Géographie" },
];
