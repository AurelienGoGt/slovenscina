#!/usr/bin/env python3
"""
Génère la prochaine leçon slovène via GitHub Models (GPT-4o-mini).
Utilise le GITHUB_TOKEN natif de GitHub Actions — aucune clé externe requise.

Usage:
  python3 generate_lesson.py             → génère la prochaine leçon manquante
  python3 generate_lesson.py --lesson 2-1 → génère une leçon spécifique
  python3 generate_lesson.py --dry-run   → affiche ce qui serait généré sans écrire

En dehors de GitHub Actions : GITHUB_TOKEN doit être un token GitHub avec accès Models.
"""
import os, sys, re, json, subprocess, argparse

BASE = os.path.dirname(os.path.abspath(__file__))

# ── Plan de toutes les leçons N2, N3, N4 ──────────────────────────────────────
# Format : id → {num, slug, var, title, sub, grammar, vocab, cultural_note}
LESSON_PLAN = {
    # ── NIVEAU 2 — Au quotidien ──
    '2-1': {
        'num': 21, 'slug': 'au_marche', 'var': 'EX_2_1',
        'title': 'Au marché', 'sub': 'Koliko stane ? Produits frais',
        'grammar': [
            'Accusatif pour les objets directs (kupiti + acc.)',
            'Génitif après les quantités (kilogram jabolk, liter mleka)',
            'Génitif après les nombres ≥5 (pet jabolk)',
            'Négation avec génitif (nimam kruha)',
        ],
        'vocab': ['jabolko/jabolk', 'kruh', 'meso', 'mleko', 'sir', 'jajce', 'zelje', 'čebula',
                  'paradižnik', 'kilogram', 'decagram', 'liter', 'kos', 'kupiti', 'prodati',
                  'svež/sveža', 'poceni', 'drag/draga', 'koliko stane', 'plačati'],
        'cultural': 'Les marchés slovènes (tržnica) sont centraux dans la vie locale — Tržnica centrale de Ljubljana, marché de Koper. Produits régionaux : kranjska klobasa, med (miel), bučno olje (huile de potiron).',
    },
    '2-2': {
        'num': 22, 'slug': 'au_restaurant', 'var': 'EX_2_2',
        'title': 'Au restaurant', 'sub': 'Commander, payer, politesse',
        'grammar': [
            'Vouvoiement formel : Vi + 2e pers. pluriel (Bi radi...? Izvolite!)',
            'Conditionnel de politesse : bi rad/rada (je voudrais)',
            'Accusatif pour commander (Prosim joto juho)',
            'Ordre des adjectifs (slovenska jota)',
        ],
        'vocab': ['jedilnik', 'naročiti', 'predjed', 'glavna jed', 'sladica', 'juha', 'solata',
                  'meso/mesna jed', 'zelenjavna jed', 'pijača', 'voda', 'vino', 'pivo', 'kava',
                  'račun prosim', 'napitnina', 'okusno', 'priporočiti', 'Bi radi...?', 'Izvolite!'],
        'cultural': 'Plats slovènes typiques : jota (soupe choucroute-haricots), potica (gâteau en spirale aux noix), štruklji (rouleaux farcis), žganci (polenta). Le pourboire (napitnina) = 10% habituel.',
    },
    '2-r1': {'num': None, 'slug': None, 'var': None, 'recap': True,
              'title': 'Récap — Marché & Restaurant', 'covers': ['2-1', '2-2']},
    '2-3': {
        'num': 23, 'slug': 'transports', 'var': 'EX_2_3',
        'title': 'Transports', 'sub': 'Bus, train, billets, horaires',
        'grammar': [
            'Locatif de déplacement : v/na + locatif (sem v Ljubljani)',
            'Accusatif de destination : v/na + accusatif (grem v Ljubljano)',
            'Verbes de mouvement : iti/hoditi, peljati, voziti',
            'Heure officielle (urniki) : ob 14:30 = ob pol treh popoldne',
        ],
        'vocab': ['vozovnica', 'enosmerna', 'povratna', 'peron', 'odhod', 'prihod', 'zamuda',
                  'rezervacija', 'sedež', 'prestop', 'direktno', 'vlak', 'avtobus', 'letalo',
                  'ladja', 'taksi', 'Kdaj odide...?', 'Kje kupim vozovnico?', 'na peronu'],
        'cultural': 'Réseau ferroviaire SŽ (Slovenske železnice). Bus intercités Arriva. Ljubljana → Maribor : 2h train. Ljubljana → Koper : 2h10. Intégration numérique : app Arriva, billets QR.',
    },
    '2-4': {
        'num': 24, 'slug': 'la_sante', 'var': 'EX_2_4',
        'title': 'La santé', 'sub': 'Corps, symptômes, chez le médecin',
        'grammar': [
            'Datif du corps avec boli/boleti (boli me glava — ma tête me fait mal)',
            'Réflexif počutiti se (kako se počutite?)',
            'Avoir mal : boleti + acc. (glava me boli)',
            'Modal morati + infinitif (moram k zdravniku)',
        ],
        'vocab': ['glava', 'trebuh', 'noga', 'roka', 'hrbet', 'grlo', 'zobje', 'vročina',
                  'kašelj', 'nahod', 'alergija', 'bolečina', 'zdravnik', 'lekarna', 'recept',
                  'tableta', 'počivati', 'Klic me boli...', 'Imam vročino', 'Zdravje!'],
        'cultural': 'Système de santé slovène : ZZZS (assurance obligatoire). Médecin de famille (osebni zdravnik). Urgences : 112. Pharmacies (lekarna) reconnaissables à la croix verte.',
    },
    '2-r2': {'num': None, 'slug': None, 'var': None, 'recap': True,
              'title': 'Récap — Transports & Santé', 'covers': ['2-3', '2-4']},
    '2-5': {
        'num': 25, 'slug': 'les_vetements', 'var': 'EX_2_5',
        'title': 'Les vêtements', 'sub': 'Shopping, tailles, couleurs',
        'grammar': [
            'Accord adjectif-nom en genre/nombre (rdeča majica, modri pulover)',
            'Démonstratifs : ta/ta/to (ce/cette), tisti/tista/tisto (ce...là)',
            'Comparatif en shopping : večji, manjši, krajši, daljši',
            'Avoir la bonne taille : imam velikost S/M/L/XL',
        ],
        'vocab': ['majica', 'hlače', 'obleka', 'jakna', 'pulover', 'čevlji', 'nogavice',
                  'klobuk', 'šal', 'velikost', 'premajhen', 'prevelik', 'prav', 'preizkusiti',
                  'kabina', 'blagajna', 'ugodna cena', 'razprodaja', 'Kakšna je cena?', 'oblečem'],
        'cultural': 'Shopping en Slovénie : BTC City (plus grand centre commercial en Europe de l\'Est), Citypark à Ljubljana. Marques locales : Alpina (chaussures), Elan (skis). Soldes en janvier et juillet.',
    },
    '2-6': {
        'num': 26, 'slug': 'les_loisirs', 'var': 'EX_2_6',
        'title': 'Les loisirs', 'sub': 'Sport, musique, lecture, sorties',
        'grammar': [
            'Verbe ukvarjati se z + instrumentalem (ukvarjam se s smučanjem)',
            'Instrumental pour les activités (z glasbo, z branjem)',
            'Fréquence : vsak dan, enkrat na teden, pogosto, redko',
            'Goûts : rad/rada + infinitif (rad igram guitar)',
        ],
        'vocab': ['smučanje', 'plavanje', 'kolesarjenje', 'pohodništvo', 'branje', 'glasba',
                  'kino', 'gledališče', 'koncert', 'ples', 'fitnes', 'prostočasna dejavnost',
                  'hobi', 'ukvarjati se z', 'rad/rada', 'prosti čas', 'dopust', 'počitnice'],
        'cultural': 'Slovénie = paradis outdoor. Triglav (2864m), Soča (rafting), Postojnska jama (grotte). Ski : Kranjska Gora, Krvavec. Randonnée : réseau Dom planinski.',
    },
    '2-r3': {'num': None, 'slug': None, 'var': None, 'recap': True,
              'title': 'Récap — Vêtements & Loisirs', 'covers': ['2-5', '2-6']},
    '2-7': {
        'num': 27, 'slug': 'telephone_web', 'var': 'EX_2_7',
        'title': 'Téléphone & web', 'sub': 'Appeler, écrire, réseaux',
        'grammar': [
            'Verbes téléphoniques : poklicati, odgovoriti, pustiti sporočilo',
            'Phrases indirectes : Rekel je, da... (il a dit que...)',
            'Futur immédiat : bom + participe (bom poklical)',
            'Politesse au téléphone : Prosim, ali je... ? Ali lahko govorim z... ?',
        ],
        'vocab': ['telefon', 'poklicati', 'sporočilo', 'e-pošta', 'spletna stran', 'geslo',
                  'aplikacija', 'brezžično omrežje', 'polniti', 'baterija', 'zaslon', 'kamera',
                  'poslati', 'prejeti', 'odgovoriti', 'Wi-Fi', 'naložiti', 'povezava'],
        'cultural': 'Opérateurs téléphoniques slovènes : A1, Telekom, Telemach. Code pays : +386. Numéros utiles : 112 (urgences), 113 (police). Wi-Fi gratuit très répandu dans les cafés et hôtels.',
    },
    '2-8': {
        'num': 28, 'slug': 'meteo_avancee', 'var': 'EX_2_8',
        'title': 'La météo avancée', 'sub': 'Prévisions, activités selon météo',
        'grammar': [
            'Conditionnel météo : Ko bo... bomo (quand il fera..., nous...)',
            'Subordonnées temporelles : ko, kadar, medtem ko',
            'Degrés et comparaisons météo (bolj toplo, manj deževno)',
            'Futur avec bo/bodo + infinitif',
        ],
        'vocab': ['napoved', 'temperatura', 'sončno', 'oblačno', 'deževno', 'snežno', 'vetrovito',
                  'megleno', 'nevihta', 'toča', 'poplave', 'suša', 'vremenska napoved', 'kakovost zraka',
                  'UV-indeks', 'vlaga', 'padavine', 'spremenljivo', 'stabilno'],
        'cultural': 'Météo slovène très variable — 3 zones climatiques en 20 253 km² ! Bora (burja) = vent de NE violent sur le Karst. Soča = rivière turquoise (eau de glacier). Ski possible d\'oct. à avril en altitude.',
    },
    '2-r4': {'num': None, 'slug': None, 'var': None, 'recap': True,
              'title': 'Récap — Téléphone & Météo', 'covers': ['2-7', '2-8']},
    '2-9': {
        'num': 29, 'slug': 'voyager_slovenie', 'var': 'EX_2_9',
        'title': 'Voyager en Slovénie', 'sub': 'Hébergement, visites, nature',
        'grammar': [
            'Locatif pour les lieux : v hotelu, na kampu, pri prijateljih',
            'Verbes de séjour : ostati, bivati, prenočiti, rezervirati',
            'Questions de voyage : Imate proste sobe? Za koliko noči?',
            'Génitif de durée : za tri noči, za en teden',
        ],
        'vocab': ['hotel', 'hostel', 'kamp', 'soba', 'rezervacija', 'prijava', 'odjava',
                  'zajtrk', 'parkirišče', 'turistična agencija', 'voden izlet', 'razglednica',
                  'spominek', 'vstopnina', 'odpiralni čas', 'Imate proste sobe?', 'Za koliko?'],
        'cultural': 'Destinations phares : Bled (lac + château), Piran (perle de la côte adriatique), Postojnska jama (grotte 24km), Predjamski grad (château dans falaise), Logarska dolina (vallée alpine).',
    },
    '2-10': {
        'num': 30, 'slug': 'les_emotions', 'var': 'EX_2_10',
        'title': 'Les émotions', 'sub': 'Sentiments, exprimer, réagir',
        'grammar': [
            'Biti + pridevnik (sem vesel/vesela — je suis heureux)',
            'Počutiti se + pridevnik (počutim se utrujen)',
            'Causatif : Vesel sem, ker... (content parce que...)',
            'Réaction et empathie : Žal mi je. Veseli me. Upam, da...',
        ],
        'vocab': ['vesel/vesela', 'žalosten/žalostna', 'utrujen/utrujena', 'jezen/jezna',
                  'presenečen', 'prestrašen', 'zaskrbljen', 'sproščen', 'vznemirjen', 'ponosen',
                  'nostalgičen', 'hvaležen', 'ljubosumen', 'Žal mi je.', 'Veseli me.', 'Upam, da...'],
        'cultural': 'Expression émotionnelle en Slovénie : culture plutôt réservée publiquement (hladni Slavenci = Slaves froids, une blague slovène !). Mais en famille, très chaleureux. Zdravje! = Santé! (toast).',
    },
    '2-rf': {'num': None, 'slug': None, 'var': None, 'recap': True,
              'title': 'Grand récap — Niveau 2', 'covers': ['2-1','2-2','2-3','2-4','2-5','2-6','2-7','2-8','2-9','2-10']},
    # ── NIVEAU 3 — Vie sociale ──
    '3-1': {
        'num': 31, 'slug': 'presentation_detail', 'var': 'EX_3_1',
        'title': 'Se présenter en détail', 'sub': 'Personnalité, valeurs, ambitions',
        'grammar': [
            'Verbes d\'état complexes : postati (devenir), ostati (rester)',
            'Infinitif substantivé : branje (la lecture), učenje (l\'apprentissage)',
            'Subordonnées complétives : Mislim, da... / Verjamem, da...',
            'Double négation slovène : Nikoli nisem... (Je n\'ai jamais...)',
        ],
        'vocab': ['osebnost', 'vrednote', 'ambicija', 'cilj', 'sanjati', 'upati', 'verjeti',
                  'zaupati', 'skrben/skrbna', 'ustvarjalen', 'odgovoren', 'strpen', 'radoveden',
                  'Rad/rada imam...', 'Moj cilj je...', 'V prihodnosti bi rad/rada...'],
        'cultural': 'Les Slovènes attachent beaucoup d\'importance à l\'éducation — 85% taux de diplômés supérieurs. Valeurs culturelles : narava (nature), dom (maison/foyer), skupnost (communauté).',
    },
    '3-2': {
        'num': 32, 'slug': 'le_travail', 'var': 'EX_3_2',
        'title': 'Le travail', 'sub': 'Bureau, réunions, collègues',
        'grammar': [
            'Verbes professionnels : delati, voditi, organizirati, predstaviti',
            'Passé avec biti + deležnik : sem delal/delala (j\'ai travaillé)',
            'Futur : bom + inf. (bom naredil — je ferai)',
            'Négation passée : nisem + deležnik',
        ],
        'vocab': ['pisarna', 'sestanek', 'projekt', 'rok (deadline)', 'poročilo', 'prezentacija',
                  'vodja', 'sodelavec', 'stranka', 'pogodba', 'plača', 'dopust', 'nadure',
                  'delodajalec', 'brezposelnost', 'intervju', 'CV/življenjepis'],
        'cultural': 'Économie slovène : PIB/habitant le plus élevé des Balkans. Grandes entreprises : Revoz (Renault), Krka (pharma), Lek (Novartis). Temps de travail moyen : 40h/semaine.',
    },
    '3-r1': {'num': None, 'slug': None, 'var': None, 'recap': True,
              'title': 'Récap — Présentation & Travail', 'covers': ['3-1', '3-2']},
    '3-3': {
        'num': 33, 'slug': 'cuisine_slovene', 'var': 'EX_3_3',
        'title': 'La cuisine slovène', 'sub': 'Recettes, ingrédients, traditions',
        'grammar': [
            'Instrumental pour les ingrédients : z jajci, s smetano',
            'Impératif de cuisine : dodaj, zmešaj, segrij, kuhaj',
            'Passif : jed se pripravi z... (le plat se prépare avec...)',
            'Quantités en recette : žlica (cuillère), skodelica (tasse)',
        ],
        'vocab': ['recept', 'sestavine', 'zmešati', 'peči', 'kuhati', 'olje', 'maslo', 'moka',
                  'sladkor', 'sol', 'začimbe', 'potica', 'jota', 'štruklji', 'žganci', 'bograč',
                  'prekmurska gibanica', 'kranjska klobasa', 'bučno olje'],
        'cultural': 'Cuisine régionale très diversifiée : Primorska (méditerranéenne), Gorenjska (alpine), Prekmurje (pannonnienne). Bučno olje (huile de potiron) = or vert slovène. Slow food très présent.',
    },
    '3-4': {
        'num': 34, 'slug': 'les_sorties', 'var': 'EX_3_4',
        'title': 'Les sorties', 'sub': 'Cinéma, concerts, musées',
        'grammar': [
            'Invitations : Bi šel/šla z mano? (tu viendrais avec moi?)',
            'Accepter/refuser : Z veseljem! / Žal ne morem, ker...',
            'Passé composé narratif (raconter une sortie)',
            'Superlatif : najboljši film, najlepši koncert',
        ],
        'vocab': ['kino', 'gledališče', 'opera', 'galerija', 'razstava', 'koncert', 'festival',
                  'sejem', 'nočno življenje', 'bar', 'klub', 'rezervacija', 'vstopnica', 'oder',
                  'Bi šel/šla z mano?', 'Z veseljem!', 'Kaj igra?', 'Kdaj se začne?'],
        'cultural': 'Culture à Ljubljana : Cankarjev dom (grande salle), Ljubljana castle (concerts d\'été), Metelkova (art alternatif). Festival Ana Desetnica (rue), Lent festival à Maribor (juil.).',
    },
    '3-r2': {'num': None, 'slug': None, 'var': None, 'recap': True,
              'title': 'Récap — Cuisine & Sorties', 'covers': ['3-3', '3-4']},
    '3-5': {
        'num': 35, 'slug': 'vie_sociale', 'var': 'EX_3_5',
        'title': 'La vie sociale', 'sub': 'Amis, invitations, fêtes',
        'grammar': [
            'Invitations et réponses formelles/informelles',
            'Verbes de communication : povedati, sporočiti, vprašati, odgovoriti',
            'Propositions : Kaj pa, če...? (Et si...?)',
            'Expression du futur proche : Namen mi je... (j\'ai l\'intention de...)',
        ],
        'vocab': ['prijatelj/prijateljica', 'znanje', 'sosed/soseda', 'zabava', 'rojstni dan',
                  'obletnica', 'darilo', 'čestitati', 'vabilo', 'povabiti', 'sprejeti', 'zavrniti',
                  'Čestitam!', 'Vse najboljše!', 'Srečno novo leto!', 'Vesel Božič!'],
        'cultural': 'Fêtes slovènes : Novo leto (1er jan), Prešernov dan (8 fév), Velika noč (Pâques), Dan državnosti (25 juin), Dan reformacije (31 oct), Božič (25 déc).',
    },
    '3-6': {
        'num': 36, 'slug': 'traditions_slovenes', 'var': 'EX_3_6',
        'title': 'Traditions slovènes', 'sub': 'Kurent, Pust, fêtes nationales',
        'grammar': [
            'Passif narratif pour les traditions : se praznuje, se obhaja',
            'Datif de but : za praznovanje (pour la célébration)',
            'Séquence temporelle : najprej, nato, potem, na koncu',
            'Expressions idiomatiques culturelles',
        ],
        'vocab': ['Kurentovanje', 'Pust', 'maska', 'kozel', 'Jurjevanje', 'kres (feu de joie)',
                  'Martinovanje (Saint-Martin)', 'pustna povorka', 'tradicija', 'šega', 'navada',
                  'folk glasba', 'noša (costume)', 'rej (danse)', 'Zdravljica'],
        'cultural': 'Kurentovanje à Ptuj = le plus grand carnaval de Slovénie (fév). Le Kurent = démon à peau de mouton qui chasse l\'hiver. Jurjevanje = fête du printemps. Kres = feux de la Saint-Jean (23 juin).',
    },
    '3-r3': {'num': None, 'slug': None, 'var': None, 'recap': True,
              'title': 'Récap — Social & Traditions', 'covers': ['3-5', '3-6']},
    '3-7': {
        'num': 37, 'slug': 'les_medias', 'var': 'EX_3_7',
        'title': 'Les médias', 'sub': 'TV, presse, réseaux slovènes',
        'grammar': [
            'Verbes médiatiques : brati, gledati, poslušati, objavljati',
            'Passif avec se : Poroča se, da... (On rapporte que...)',
            'Discours indirect : Novinar je rekel, da...',
            'Opinion : Po mojem mnenju... (À mon avis...)',
        ],
        'vocab': ['televizija', 'radio', 'časopis', 'revija', 'spletni portal', 'novica',
                  'novinar', 'urednik', 'oglas', 'komentirati', 'deliti', 'slediti', 'objava',
                  'RTV Slovenija', 'Delo', 'Večer', 'MMC', 'STA (agencija)'],
        'cultural': 'Médias slovènes : RTV Slovenija (public), POP TV (privé), Delo (journal de référence). Liberté de presse : 32e au classement mondial. Forte présence numérique (MMC = portail RTV).',
    },
    '3-8': {
        'num': 38, 'slug': 'logement_avance', 'var': 'EX_3_8',
        'title': 'Le logement avancé', 'sub': 'Location, voisinage, contrat',
        'grammar': [
            'Conditions et obligations : morati, smeti, moči + inf.',
            'Passif de nécessité : Potrebno je + inf.',
            'Locatif pour la localisation précise : v prvem nadstropju, ob oknu',
            'Fractions et étages : pritličje, prvo nadstropje, klet',
        ],
        'vocab': ['najemnik', 'najemodajalec', 'najemnina', 'pogodba', 'kavcija', 'komunalne storitve',
                  'ogrevanje', 'vodarina', 'nadstropje', 'dvigalo', 'balkón', 'skupni prostori',
                  'sosed', 'vzdrževanje', 'popravilo', 'Kdaj je vselitev?', 'Kaj je vključeno?'],
        'cultural': 'Marché immobilier slovène : Ljubljana = très chère (3 000-4 000 €/m²). Location moyenne : 700-900€/mois à Ljubljana. Villes alternatives : Maribor, Koper, Celje — 30-40% moins cher.',
    },
    '3-rf': {'num': None, 'slug': None, 'var': None, 'recap': True,
              'title': 'Grand récap — Niveau 3', 'covers': ['3-1','3-2','3-3','3-4','3-5','3-6','3-7','3-8']},
    # ── NIVEAU 4 — Intégration ──
    '4-1': {
        'num': 39, 'slug': 'administration', 'var': 'EX_4_1',
        'title': "L'administration", 'sub': 'Documents, formulaires, mairie',
        'grammar': [
            'Passif administratif : se vloži, se izpolni, se predloži',
            'Noms verbaux : prijavitev, odjava, vložitev (dépôt)',
            'Formules officielles : V skladu z... (Conformément à...)',
            'Conditionnels de politesse administrative',
        ],
        'vocab': ['prijaviti se', 'odjaviti se', 'obrazec', 'dokument', 'osebna izkaznica',
                  'potni list', 'vozniško dovoljenje', 'davčna številka', 'EMŠO', 'upravna enota',
                  'občina', 'potrdilo', 'žig', 'podpis', 'kopija', 'overitev', 'rok'],
        'cultural': 'Administration slovène : système e-Uprava (portail en ligne). EMŠO = équivalent INSEE. Carte d\'identité (osebna izkaznica) = obligatoire dès 18 ans. Inscription en mairie (upravna enota) obligatoire pour tout résident.',
    },
    '4-2': {
        'num': 40, 'slug': 'banque_poste', 'var': 'EX_4_2',
        'title': 'La banque & la poste', 'sub': 'Comptes, virements, courrier',
        'grammar': [
            'Passif financier : se nakaže, se odpiše, se zaračuna',
            'Verbes bancaires : nakazati, dvigniti, položiti, plačati',
            'Datif du destinataire : Nakazati denar komu',
            'Formules de courrier',
        ],
        'vocab': ['bančni račun', 'TRR', 'kartica', 'pin', 'nakazilo', 'dvig', 'polog',
                  'obresti', 'kredit', 'hipoteka', 'banka', 'bankomat', 'pošta', 'paket',
                  'priporočeno pismo', 'frankirati', 'poštna nakaznica', 'IBAN/BIC'],
        'cultural': 'Banques slovènes : NLB (nationale), Nova KBM, SKB (Société Générale). SEPA en vigueur. Pošta Slovenije = poste publique, aussi agence bancaire (Pošta poštna hranilnica). E-banking très développé.',
    },
    '4-r1': {'num': None, 'slug': None, 'var': None, 'recap': True,
              'title': 'Récap — Administration & Banque', 'covers': ['4-1', '4-2']},
    '4-3': {
        'num': 41, 'slug': 'ecole', 'var': 'EX_4_3',
        'title': "L'école", 'sub': 'Système scolaire slovène',
        'grammar': [
            'Noms d\'établissements et fonctions',
            'Verbes scolaires : učiti se, hoditi v šolo, opraviti (passer un examen)',
            'Génitif pour appartenance : profesor matematike, učenec prvega razreda',
            'Expressions temporelles scolaires : letni izpit, konec šolskega leta',
        ],
        'vocab': ['osnovna šola', 'srednja šola', 'univerza', 'fakulteta', 'učenec/učenka',
                  'dijak/dijakinja', 'študent/studentka', 'profesor/profesorica', 'razred', 'letnik',
                  'predmet', 'ocena', 'izpit', 'diploma', 'šolnina', 'štipendija', 'vpis'],
        'cultural': 'Système scolaire slovène : 9 ans d\'école primaire (osnovna šola), 4 ans de lycée (srednja šola), 3+2 ans de fac (bolonjski sistem). Université de Ljubljana = 40 000 étudiants, fondée 1919.',
    },
    '4-4': {
        'num': 42, 'slug': 'systeme_sante', 'var': 'EX_4_4',
        'title': 'Le système de santé', 'sub': 'Assurance, médecin, hôpital',
        'grammar': [
            'Vocabulaire médical passif',
            'Subordonnées causales avec ker/zato ker',
            'Conditionnel pour les recommandations médicales',
            'Passif médical : se zdravi z, se predpiše',
        ],
        'vocab': ['ZZZS', 'zdravstvena kartica', 'izbrani zdravnik', 'napotnica', 'specialist',
                  'laboratorij', 'rentgen', 'operacija', 'anestezija', 'hospitalizacija',
                  'odpust iz bolnišnice', 'zdravilo', 'odmerek', 'alergija', 'kronična bolezen'],
        'cultural': 'ZZZS = assurance maladie obligatoire (6,36% salaire). Prispevek za zdravstveno zavarovanje. Médecin de famille (osebni zdravnik) = base du système. Accès urgences toujours gratuit (112).',
    },
    '4-r2': {'num': None, 'slug': None, 'var': None, 'recap': True,
              'title': 'Récap — École & Santé avancée', 'covers': ['4-3', '4-4']},
    '4-5': {
        'num': 43, 'slug': 'environnement', 'var': 'EX_4_5',
        'title': 'Environnement & nature', 'sub': 'Écologie, Triglav, Karst',
        'grammar': [
            'Verbes environnementaux passifs : ogrožati, varovati, reciklirati',
            'Subordonnées de conséquence : zato, posledično',
            'Expressions idiomatiques nature en slovène',
            'Datif de concession : Kljub temu, da... (Malgré que...)',
        ],
        'vocab': ['okolje', 'narava', 'Triglav', 'Triglavski narodni park', 'Kras', 'Soča',
                  'recikliranje', 'obnovljiva energija', 'podnebne spremembe', 'biotska raznovrstnost',
                  'varstvo narave', 'onesnaževanje', 'trajnostni razvoj', 'ekoturizem'],
        'cultural': 'Slovénie = 60% de forêts (2e en Europe). Parc national du Triglav = seul parc national. Label "Green country" reconnu. Ljubljana = Capitale verte UE 2016. Kras = paysage karstique mondial de référence (le mot "karst" vient du slovène !).',
    },
    '4-6': {
        'num': 44, 'slug': 'culture_slovene', 'var': 'EX_4_6',
        'title': 'La culture slovène', 'sub': 'Littérature, art, Prešeren',
        'grammar': [
            'Passé narratif littéraire',
            'Superlatifs absolus : največji pesnik, najpomembnejše delo',
            'Référence culturelle : po Prešernu, v slogu...',
            'Discours indirect au passé',
        ],
        'vocab': ['pesnik', 'pisatelj', 'slikar', 'skladatelj', 'kipar', 'Prešeren', 'Zdravljica',
                  'Cankar', 'Plečnik', 'arhitektura', 'Narodna galerija', 'SNG', 'Filharmonija',
                  'literarni', 'umetniški', 'kulturna dediščina', 'UNESCO'],
        'cultural': 'France Prešeren (1800-1849) = poète national, sa Zdravljica = hymne national (sans paroles guerrières !). Ivan Cankar = père de la prose. Jože Plečnik = architecte de Ljubljana (pont des dragons, bibliothèque). Artiste contemporain : Zoran Mušič.',
    },
    '4-r3': {'num': None, 'slug': None, 'var': None, 'recap': True,
              'title': 'Récap — Nature & Culture', 'covers': ['4-5', '4-6']},
    '4-7': {
        'num': 45, 'slug': 'monde_travail', 'var': 'EX_4_7',
        'title': 'Le monde du travail', 'sub': 'Entretien, CV, contrat',
        'grammar': [
            'Vocabulaire RH et juridique',
            'Futur conditionnel professionnel : Bi bil/bila pripravljen/a...',
            'Passif professionnel : se zaposli, se odpusti, se napreduje',
            'Formules de lettre de motivation',
        ],
        'vocab': ['razgovor za zaposlitev', 'življenjepis', 'prošnja', 'delovno razmerje',
                  'pogodba o zaposlitvi', 'poskusna doba', 'odpoved', 'napredovanje', 'usposabljanje',
                  'delovna izkušnja', 'spretnosti', 'kompetence', 'sindikati', 'kolektivna pogodba'],
        'cultural': 'Marché du travail slovène : chômage ~4% (très bas). Salaire minimum : ~1 250€ brut. Secteurs porteurs : pharma, auto, IT, tourisme. Langue clé : anglais + allemand très utiles.',
    },
    '4-8': {
        'num': 46, 'slug': 'revision_culture', 'var': 'EX_4_8',
        'title': 'Révision & culture', 'sub': 'Grand bilan + quiz culturel',
        'grammar': [
            'Révision complète des 4 niveaux',
            'Tous les cas nominaux en contexte',
            'Aspects verbaux perfectif/imperfectif',
            'Registres formel/informel',
        ],
        'vocab': ['révision complète', 'tous niveaux'],
        'cultural': 'Quiz culturel final : géographie, histoire, art, gastronomie, personnalités slovènes.',
    },
    '4-rf': {'num': None, 'slug': None, 'var': None, 'recap': True,
              'title': 'Grand récap final', 'covers': ['4-1','4-2','4-3','4-4','4-5','4-6','4-7','4-8']},
}

# ── Ordre des leçons dans le curriculum ──
LESSON_ORDER = [
    '2-1','2-2','2-r1','2-3','2-4','2-r2','2-5','2-6','2-r3',
    '2-7','2-8','2-r4','2-9','2-10','2-rf',
    '3-1','3-2','3-r1','3-3','3-4','3-r2','3-5','3-6','3-r3',
    '3-7','3-8','3-rf',
    '4-1','4-2','4-r1','4-3','4-4','4-r2','4-5','4-6','4-r3',
    '4-7','4-8','4-rf',
]

# ── Exemple de leçon (format de référence pour le prompt) ──
LESSON_EXAMPLE = """
const EX_2_X = [
  { type:'presentation', label:'Découverte', word:'Tržnica', phonetic:'[TRZH-ni-tsa]', translation:'Le marché',
    cultural:{title:'Les marchés slovènes', text:'La tržnica est le cœur de la vie locale. À Ljubljana, le marché central longe la rivière Ljubljanica — fruits, légumes, fromages locaux, miel. Ouvert tous les matins sauf dimanche.'},
    histoire:{title:'Commerce et tradition', text:'Le commerce de rue existe en Slovénie depuis le Moyen Âge. Les marchands ambulants (kramарji) parcouraient les Alpes. Aujourd\'hui, les marchés bio (eko tržnica) se multiplient dans toutes les villes.'} },

  { type:'tts_repeat', label:'Au marché', word:'Kilogram jabolk, prosim.', phonetic:'[KI-lo-gram YA-bolk, PRO-sim]', translation:'Un kilo de pommes, s\'il vous plaît.' },
  { type:'tts_repeat', label:'Au marché', word:'Koliko stane ta sir ?', phonetic:'[KO-li-ko STA-ne ta SIR]', translation:'Combien coûte ce fromage ?' },
  { type:'tts_repeat', label:'Au marché', word:'Ali je ta meso svež ?', phonetic:'[A-li ye ta ME-so SVEZH]', translation:'Cette viande est-elle fraîche ?' },

  { type:'matching', label:'Produits → français', pairs:[
    {sl:'Jabolko', fr:'Pomme'}, {sl:'Kruh', fr:'Pain'},
    {sl:'Mleko', fr:'Lait'},   {sl:'Meso', fr:'Viande'},
    {sl:'Sir', fr:'Fromage'},
  ]},

  { type:'qcm', label:'QCM grammaire', question:'Après une quantité (kilogram, liter...), on utilise :',
    choices:['Le génitif — jabolk, mleka, kruha','L\'accusatif — jabolko, mleko','Le nominatif — jabolko, mleko','L\'instrumental — z jabolki'], correct:0 },

  { type:'fill', label:'Phrase à trous', sentence:['Dva kilograma ___ prosim. (Deux kilos de pommes s\'il vous plaît.)'], blank:'jabolk', bank:['jabolk','jabolko','jabolka','jabolkami'] },

  { type:'reconstruct', label:'Reconstitue', sentence:'Koliko stane kilogram paradižnika ?', words:['Koliko','stane','kilogram','paradižnika','?'] },

  { type:'story', label:'Dialogue au marché', title:'Pri tržnici — Au marché',
    narration:'Marie je pri tržnici v Ljubljani. Želi kupiti sadje in zelenjavo za večerjo.',
    dialogue:[
      {speaker:'Prodajalka', text:'Dober dan ! Kaj vam ponudim ?', side:'right'},
      {speaker:'Marie', text:'Dober dan ! Koliko stane kilogram jabolk ?', side:'left'},
      {speaker:'Prodajalka', text:'Dva evra kilogram. So domača in zelo sveža !', side:'right'},
      {speaker:'Marie', text:'Super ! Dajte mi dva kilograma, prosim.', side:'left'},
      {speaker:'Prodajalka', text:'Izvolite. Še kaj ?', side:'right'},
      {speaker:'Marie', text:'Ja, en kruh in pol kilograma sira.', side:'left'},
      {speaker:'Prodajalka', text:'Skupaj je sedem evrov petdeset.', side:'right'},
      {speaker:'Marie', text:'Hvala lepa ! Na svidenje.', side:'left'},
    ],
    translation:{
      'Dober dan ! Kaj vam ponudim ?': 'Bonjour ! Que puis-je vous offrir ?',
      'Dober dan ! Koliko stane kilogram jabolk ?': 'Bonjour ! Combien coûte le kilo de pommes ?',
      'Dva evra kilogram. So domača in zelo sveža !': 'Deux euros le kilo. Elles sont locales et très fraîches !',
      'Super ! Dajte mi dva kilograma, prosim.': 'Super ! Donnez-m\'en deux kilos, s\'il vous plaît.',
      'Izvolite. Še kaj ?': 'Voilà. Autre chose ?',
      'Ja, en kruh in pol kilograma sira.': 'Oui, un pain et un demi-kilo de fromage.',
      'Skupaj je sedem evrov petdeset.': 'En tout c\'est sept euros cinquante.',
      'Hvala lepa ! Na svidenje.': 'Merci beaucoup ! Au revoir.',
    }},
];
""".strip()

SYSTEM_PROMPT = """Tu es un expert en linguistique slovène et en pédagogie des langues.
Tu crées du contenu pour une app d'apprentissage du slovène pour francophones (style Duolingo/Assimil).

RÈGLES ABSOLUES :
1. Génère UNIQUEMENT du code JavaScript valide — zéro markdown, zéro backticks, zéro commentaire hors du format JS
2. Toutes les traductions en français, tous les mots en slovène
3. Phonétiques entre crochets — accent tonique en MAJUSCULES : [ZDRA-vo], [KO-li-ko STA-ne]
4. 30 à 35 exercices par leçon (count the array elements)
5. Structure obligatoire :
   - 2 presentations (avec cultural ET histoire si possible)
   - 4-6 tts_repeat
   - 3-4 matching
   - 5-7 qcm (dont 2 grammaire, 1 culturel)
   - 4-6 fill (phrases à trous)
   - 1-2 reconstruct
   - 1 story (dialogue 8-10 répliques avec narration + translation)
6. Authenticité slovène : situations réelles, exemples culturels précis, NO calque du français
7. Les fill ont : sentence (array avec le trou en ___ et la traduction entre parenthèses), blank (la réponse), bank (4 mots dont 1 correct)
8. Les story ont : narration (texte slovène), dialogue (array de {speaker, text, side}), translation (objet clé=slovène/valeur=français)
9. NE JAMAIS inventer des mots slovènes — utilise uniquement du slovène correct et attesté
10. APOSTROPHES FRANÇAISES : dans les chaînes JS entre guillemets simples, toujours échapper les apostrophes avec \\' — ex: 'S\\'il vous plaît', 'c\\'est', 'j\\'ai', 'l\\'hôtel', 'qu\\'il'. OU utilise des guillemets doubles pour ces chaînes : "S'il vous plaît". Les apostrophes non échappées cassent le JavaScript."""


def get_existing_lessons():
    """Retourne l'ensemble des IDs de leçons déjà générées."""
    existing = set()
    for lid, info in LESSON_PLAN.items():
        if info.get('recap'):
            continue
        num = info['num']
        slug = info['slug']
        if num is None:
            continue
        path = os.path.join(BASE, f'data/sl/lesson_{num:02d}_{slug}.js')
        if os.path.exists(path):
            existing.add(lid)
    return existing


def get_next_lesson():
    """Retourne le prochain ID de leçon à générer."""
    existing = get_existing_lessons()
    for lid in LESSON_ORDER:
        info = LESSON_PLAN.get(lid, {})
        if info.get('recap'):
            continue
        if lid not in existing:
            return lid
    return None


def build_prompt(lesson_id):
    """Construit le prompt utilisateur pour générer une leçon."""
    info = LESSON_PLAN[lesson_id]
    num = info['num']
    slug = info['slug']
    var = info['var']
    title = info['title']
    sub = info['sub']
    grammar = '\n'.join(f'  • {g}' for g in info['grammar'])
    vocab = ', '.join(info['vocab'])
    cultural = info['cultural']
    level_num = int(lesson_id.split('-')[0])
    level_names = {2: 'Au quotidien', 3: 'Vie sociale', 4: 'Intégration'}
    level_name = level_names.get(level_num, '')

    return f"""Génère la leçon {lesson_id} pour le Niveau {level_num} ({level_name}).

IDENTIFIANTS :
  Nom du fichier : lesson_{num:02d}_{slug}.js
  Variable JS    : const {var} = [...]
  Titre          : {title}
  Sous-titre     : {sub}

GRAMMAIRE PRIORITAIRE (explique chaque point dans des presentations ou qcm) :
{grammar}

VOCABULAIRE CLÉ (à utiliser et enseigner) :
{vocab}

CONTEXTE CULTUREL À INTÉGRER :
{cultural}

EXEMPLE DE FORMAT (reproduis exactement cette structure, remplace EX_2_X par {var}) :
{LESSON_EXAMPLE}

CONSIGNES SUPPLÉMENTAIRES :
- Niveau {level_num} = l'apprenant connaît tous les fondamentaux du N1 (bases slovènes)
- Inclus une leçon culturellement riche — anecdotes, réalités slovènes, phrases utiles en voyage
- Le story final doit être un dialogue naturel et complet (8-10 répliques), avec une narration en slovène
- Chaque qcm doit avoir 4 choix, correct:0 (la bonne réponse est toujours en premier dans choices[])
- Les phonétiques doivent être précises et utiles pour un francophone
- Termine le fichier avec un commentaire de fin : // ── fin {var} ──

Génère UNIQUEMENT le code JavaScript complet pour const {var} = [...]; sans aucun autre texte."""


def generate_lesson(lesson_id, dry_run=False):
    """Génère une leçon avec Claude API et la sauve."""
    info = LESSON_PLAN[lesson_id]
    num = info['num']
    slug = info['slug']
    var = info['var']
    filename = f'lesson_{num:02d}_{slug}.js'
    filepath = os.path.join(BASE, 'data', 'sl', filename)
    rel_path = f'data/sl/{filename}'

    print(f'\n[generate_lesson] Leçon {lesson_id} — {info["title"]}')
    print(f'  Fichier : {filename}')
    print(f'  Variable: {var}')

    if dry_run:
        print('  [dry-run] Pas de génération.')
        return True

    # GitHub Models — GPT-4o-mini via GITHUB_TOKEN (natif GitHub Actions, gratuit)
    api_key = os.environ.get('GITHUB_TOKEN')
    if not api_key:
        print('  ERREUR : GITHUB_TOKEN non défini.')
        sys.exit(1)

    prompt = build_prompt(lesson_id)
    print('  Appel GitHub Models (gpt-4o-mini)...')

    import urllib.request, json as _json, time as _time

    url = 'https://models.inference.ai.azure.com/chat/completions'
    payload = _json.dumps({
        'model': 'gpt-4o-mini',
        'messages': [
            {'role': 'system', 'content': SYSTEM_PROMPT},
            {'role': 'user',   'content': prompt},
        ],
        'max_tokens': 8192,
        'temperature': 0.7,
    }).encode()
    headers = {
        'Content-Type': 'application/json',
        'Authorization': f'Bearer {api_key}',
    }

    for attempt in range(3):
        req = urllib.request.Request(url, data=payload, headers=headers)
        try:
            with urllib.request.urlopen(req, timeout=120) as resp:
                data = _json.loads(resp.read())
            break
        except urllib.error.HTTPError as e:
            body = e.read().decode()
            if e.code == 429 and attempt < 2:
                wait = 30 * (attempt + 1)
                print(f'  Rate limit, attente {wait}s...')
                _time.sleep(wait)
                continue
            print(f'  ERREUR HTTP {e.code}: {body[:400]}')
            sys.exit(1)
    else:
        print('  ERREUR : rate limit après 3 tentatives.')
        sys.exit(1)

    js_code = data['choices'][0]['message']['content'].strip()

    # Nettoyer si le modèle a ajouté des backticks
    js_code = re.sub(r'^```(?:javascript|js)?\s*', '', js_code, flags=re.MULTILINE)
    js_code = re.sub(r'\s*```$', '', js_code, flags=re.MULTILINE).strip()

    # Vérifier que le code commence correctement
    if not js_code.startswith('const '):
        print(f'  ERREUR : Le code généré ne commence pas par "const".')
        print(f'  Début reçu : {js_code[:200]}')
        sys.exit(1)

    # Écrire le fichier
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(f'// ═══════════════════════════════════════════\n')
        f.write(f'// {lesson_id} — {info["title"]}\n')
        f.write(f'// Généré le {__import__("datetime").date.today()} par generate_lesson.py\n')
        f.write(f'// ═══════════════════════════════════════════\n')
        f.write(js_code)
        if not js_code.endswith('\n'):
            f.write('\n')

    # Vérifier la syntaxe JS (avec auto-fix des apostrophes françaises)
    print('  Vérification syntaxe node --check...')
    r = subprocess.run(['node', '--check', filepath], capture_output=True, text=True)
    if r.returncode != 0:
        print(f'  Syntaxe KO, tentative auto-fix apostrophes...')
        # Échapper les apostrophes françaises entre deux lettres (S'il, c'est, d'un...)
        fixed = re.sub(r"([A-Za-zÀ-ÿ])'([A-Za-zÀ-ÿ])", r"\1\\'\2", js_code)
        if fixed != js_code:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(f'// ═══════════════════════════════════════════\n')
                f.write(f'// {lesson_id} — {info["title"]}\n')
                f.write(f'// Généré le {__import__("datetime").date.today()} par generate_lesson.py\n')
                f.write(f'// ═══════════════════════════════════════════\n')
                f.write(fixed)
                if not fixed.endswith('\n'):
                    f.write('\n')
            r2 = subprocess.run(['node', '--check', filepath], capture_output=True, text=True)
            if r2.returncode == 0:
                print('  ✓ Auto-fix réussi')
            else:
                print(f'  ERREUR SYNTAXE après fix : {r2.stderr.strip()}')
                os.remove(filepath)
                sys.exit(1)
        else:
            print(f'  ERREUR SYNTAXE : {r.stderr.strip()}')
            os.remove(filepath)
            sys.exit(1)
    else:
        print('  ✓ Syntaxe OK')

    # Mettre à jour registry.js
    update_registry(lesson_id, var)

    print(f'  ✓ Leçon {lesson_id} générée → {rel_path}')
    return True


def update_registry(lesson_id, var_name):
    """Ajoute la nouvelle leçon dans data/registry.js."""
    reg_path = os.path.join(BASE, 'data', 'registry.js')
    with open(reg_path, encoding='utf-8') as f:
        content = f.read()

    # Déjà enregistré ?
    if f"'{lesson_id}'" in content:
        print(f'  registry.js : {lesson_id} déjà enregistré.')
        return

    # Chercher le dernier "X-Y": EX_... pour insérer après
    # On cherche la ligne '1-20': EX_1_20 ou la dernière leçon enregistrée
    # puis on insère avant la ligne ...EX_N1_RECAPS ou avant la fermeture };
    marker = "  ...EX_N1_RECAPS,"
    new_line = f"  '{lesson_id}': {var_name},"
    if marker in content:
        # Insérer juste avant ...EX_N1_RECAPS
        # Mais pour N2+, insérer après la dernière leçon N2 enregistrée
        # Cherche la dernière entrée Nx-xx déjà présente
        lines = content.split('\n')
        insert_idx = None
        for i, line in enumerate(lines):
            if line.strip().startswith(f"'{lesson_id[0]}-"):
                insert_idx = i  # après cette ligne
        if insert_idx is not None:
            lines.insert(insert_idx + 1, new_line)
        else:
            # Insérer avant ...EX_N1_RECAPS
            idx = next(i for i, l in enumerate(lines) if marker in l)
            lines.insert(idx, new_line)
        content = '\n'.join(lines)
    else:
        # Insérer avant la fermeture de l'objet EX
        content = content.replace('};', f'  {new_line}\n}};', 1)

    with open(reg_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'  ✓ registry.js mis à jour ({lesson_id}: {var_name})')


def main():
    parser = argparse.ArgumentParser(description='Générateur de leçons slovènes')
    parser.add_argument('--lesson', help='ID de leçon à générer (ex: 2-1)')
    parser.add_argument('--dry-run', action='store_true', help='Affiche sans générer')
    parser.add_argument('--list', action='store_true', help='Liste les leçons manquantes')
    args = parser.parse_args()

    if args.list:
        existing = get_existing_lessons()
        print('Leçons manquantes :')
        for lid in LESSON_ORDER:
            info = LESSON_PLAN.get(lid, {})
            if info.get('recap'):
                continue
            status = '✓' if lid in existing else '✗'
            print(f'  {status} {lid:6s} — {info.get("title", "")}')
        return

    lesson_id = args.lesson
    if not lesson_id:
        lesson_id = get_next_lesson()
        if not lesson_id:
            print('Toutes les leçons sont déjà générées !')
            sys.exit(0)
        print(f'Prochaine leçon manquante : {lesson_id}')

    if lesson_id not in LESSON_PLAN:
        print(f'ERREUR : leçon inconnue "{lesson_id}"')
        sys.exit(1)

    if LESSON_PLAN[lesson_id].get('recap'):
        print(f'La leçon {lesson_id} est un récap — gestion manuelle.')
        sys.exit(0)

    generate_lesson(lesson_id, dry_run=args.dry_run)
    print('\nTerminé.')


if __name__ == '__main__':
    main()
