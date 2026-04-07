const BIOME_ID = "redwood_forest";
const BIOME_ACCENT = "#bf5c2a";

const HERO_WALLPAPER = "../src/assets/biomes/redwood_forest.png";
const HERO_WALLPAPER_OFFSET_Y = 55;

const BIOME_NOM = "Forêt de Séquoias";
const BIOME_SUBTITLE = "Les géants silencieux";
const BIOME_MC_ID = "ow:redwood_forest";
const BIOME_RARITY = "Rare";
const BIOME_RARITY_KEY = "rare";
const BIOME_CATEGORY = "Forêt";
const BIOME_REGION = "Continent";

const BIOME_TEMP_VALUE = 0.1;

const BIOME_CLIMATE =
    BIOME_TEMP_VALUE < 0.0 ? "Glacial" :
        BIOME_TEMP_VALUE < 0.3 ? "Froid" :
            BIOME_TEMP_VALUE < 0.6 ? "Tempéré Froid" :
                BIOME_TEMP_VALUE < 0.9 ? "Tempéré" :
                    BIOME_TEMP_VALUE < 1.2 ? "Tempéré Chaud" :
                        BIOME_TEMP_VALUE < 1.6 ? "Chaud" :
                            "Brûlant";

const BIOME_TEMPERATURE = BIOME_TEMP_VALUE;
const BIOME_HUMIDITY = "0.6";
const BIOME_PRECIPITATION = "Pluie & Neige";
const BIOME_LIGHT_AVG = "3 – 7";
const BIOME_ALTITUDE = "64 – 140 blocs";
const BIOME_CANOPY = "25 – 40 blocs";

const BIOME_TAGS = ["Forêt", BIOME_CLIMATE, "Dense"];

const BIOME_DESCRIPTION = [
    `La <strong style="color:var(--biome-accent)">Forêt de Séquoias</strong> est un biome majestueux et intimidant, dominé par d'immenses arbres conifères dont les cimes disparaissent dans un voile de brume perpétuel. Ces colosses végétaux projettent une ombre dense sur un sous-bois tapissé de <strong>fougères géantes</strong> et de mousses épaisses. L'atmosphère y est unique : froide, saturée d'humidité, traversée de rais de lumière obliques qui percent à peine la canopée.`,
    `La luminosité qui parvient jusqu'au sol est rare et précieuse, filtrant en rayons dorés baignés de brouillard. Le silence qui règne ici n'est troublé que par le craquement lointain des branches sous le vent, le ruissellement de torrents cristallins qui serpentent entre les racines colossales, et les appels distants des prédateurs qui ont élu domicile dans ces profondeurs végétales.`,
    `<strong style="color:var(--biome-accent)">⚠️ Avertissement :</strong> La hauteur des arbres et la densité du couvert végétal rendent l'orientation extrêmement difficile. Il est vivement recommandé de venir équipé d'une <strong>boussole</strong> et de provisions suffisantes avant de s'aventurer dans ces forêts. Les nuits y sont glaciales.`
];

const BIOME_FEATURES = [
    {
        icon: "🌲",
        titre: "Séquoias Géants",
        desc: "Arbres atteignant <strong>25 à 40 blocs de hauteur</strong> avec un tronc de <strong>3×3 blocs</strong>. Leur écorce rouge-brun est unique au biome."
    },
    {
        icon: "🌫️",
        titre: "Brume Persistante",
        desc: "Une brume naturelle <strong>réduit la visibilité</strong> à environ 40 blocs, rendant le biome particulièrement mystérieux et désorientant."
    },
    {
        icon: "🍄",
        titre: "Sous-bois Dense",
        desc: "Le sol est recouvert de <strong>fougères géantes, de champignons rouges</strong> et de mousse, formant un écosystème riche en ressources."
    },
    {
        icon: "💧",
        titre: "Torrents Cristallins",
        desc: "Des cours d'eau froids traversent le biome, formant de petites <strong>cascades entre les racines</strong> et affleurements rocheux."
    },
    {
        icon: "🪨",
        titre: "Affleurements Rocheux",
        desc: "Des blocs de pierre et de granite émergent régulièrement du sol, offrant des <strong>points de repère naturels</strong> dans la forêt dense."
    },
    {
        icon: "🌙",
        titre: "Nuits Glaciales",
        desc: "Les températures nocturnes plongent considérablement. Sans équipement adapté, le joueur risque des <strong>effets de Froid</strong> prolongés."
    }
];

const BIOME_STRUCTURES = [
    {
        icon: "🏕️",
        nom: "Poste de Garde Forestier",
        desc: "Une cabane en bois de séquoia abandonnée, parfois perchée dans les premières branches. Contient des coffres avec des ressources de survie de base et une carte partielle de la zone.",
        rarity: "Commun",
        rarityColor: "var(--text2)",
        rarityBg: "rgba(168,176,144,.12)",
        rarityBorder: "rgba(168,176,144,.3)"
    },
    {
        icon: "🗿",
        nom: "Sanctuaire de Racines",
        desc: "Un cercle de racines gigantesques formant une clairière naturelle, au centre duquel se dresse un autel de pierre moussu. Lieu de spawn privilégié pour des entités rares et mystérieuses.",
        rarity: "Rare",
        rarityColor: "var(--blue2)",
        rarityBg: "rgba(58,122,180,.12)",
        rarityBorder: "rgba(58,122,180,.3)"
    },
    {
        icon: "🪵",
        nom: "Colosse Effondré",
        desc: "Le tronc creux d'un séquoia millénaire tombé, long de 20 à 30 blocs. L'intérieur abrite une microécologie unique — champignons, mousse, petits animaux — et peut servir d'abri naturel improvisé.",
        rarity: "Peu Commun",
        rarityColor: "var(--green2)",
        rarityBg: "rgba(58,122,60,.12)",
        rarityBorder: "rgba(58,122,60,.3)"
    },
    {
        icon: "⛺",
        nom: "Camp de Braconniers",
        desc: "Un campement abandonné comprenant des cages vides, des outils rouillés et des braseros. Génère parfois des butins inattendus et des notes manuscrites donnant des indices sur les animaux du biome.",
        rarity: "Rare",
        rarityColor: "var(--blue2)",
        rarityBg: "rgba(58,122,180,.12)",
        rarityBorder: "rgba(58,122,180,.3)"
    }
];

const BIOME_BLOCKS = [
    { icon: "🟫", nom: "Tronc de Séquoia", tag: "Unique", tagKey: "unique", desc: "Bois massif et résistant au feu. Teinte rouge-brun caractéristique, très résistant." },
    { icon: "🟧", nom: "Planches de Séquoia", tag: "Craftable", tagKey: "craft", desc: "Obtenu par transformation du tronc. Usage décoratif et structurel." },
    { icon: "🌿", nom: "Fougère Géante", tag: "Décoratif", tagKey: "deco", desc: "Végétation haute de 2 blocs, pousse en touffes denses dans les zones ombragées." },
    { icon: "🟢", nom: "Mousse de Séquoia", tag: "Unique", tagKey: "unique", desc: "Recouvre le sol et les pierres humides. Ralentit légèrement le déplacement." },
    { icon: "🍄", nom: "Champignon des Brumes", tag: "Comestible", tagKey: "food", desc: "Champignon rougeâtre et imposant. Restaure 2 points de faim, léger effet de régénération." },
    { icon: "🟡", nom: "Minerai d'Ambre", tag: "Minerai", tagKey: "ore", desc: "Résine fossilisée précieuse, exclusive à ce biome. Utilisée dans l'artisanat avancé." }
];

const BIOME_FAUNA_NATIVE = ["kodiak"];

const BIOME_FAUNA_SPAWN = [
    {
        nom: "Kodiak",
        latinNom: "Ursus arctos middendorffi",
        icon: "🐻",
        chance: "Rare",
        chanceKey: "rare",
        desc: "Prédateur apex de la forêt, extrêmement territorial. S'approcher est dangereux sans préparation.",
        lien: "kodiak.html"
    }
];

const BIOME_WEATHER = [
    {
        icon: "🌧️",
        nom: "Pluie Fine",
        frequence: "Fréquent",
        desc: "Précipitations légères mais continues. Réduit légèrement la visibilité et augmente le risque de glissade sur les pentes rocheuses."
    },
    {
        icon: "🌫️",
        nom: "Brouillard Dense",
        frequence: "Très Fréquent",
        desc: "Phénomène quasi-permanent dans les zones creuses et les ravines. Réduit la visibilité à moins de 20 blocs par intermittence."
    },
    {
        icon: "❄️",
        nom: "Chutes de Neige",
        frequence: "En Altitude",
        desc: "Présentes aux altitudes supérieures à 100 blocs. Transforment les cimes en panoramas enneigés d'une beauté austère."
    },
    {
        icon: "⛈️",
        nom: "Orages Saisonniers",
        frequence: "Rare",
        desc: "Foudre susceptible de frapper les séquoias exposés, créant des incendies naturellement maîtrisés par l'humidité ambiante."
    }
];

const BIOME_DANGERS = [
    {
        niveau: "Élevé",
        niveauKey: "high",
        icon: "🐻",
        nom: "Kodiak",
        desc: "Attaque sans provocation dans un rayon de 12 blocs. Résistance au recul élevée, fuite impossible."
    },
    {
        niveau: "Moyen",
        niveauKey: "medium",
        icon: "🌫️",
        nom: "Désorientation",
        desc: "Le brouillard dense et la canopée bloquent le ciel. Risque réel de tourner en rond ou de tomber dans une crevasse."
    },
    {
        niveau: "Faible",
        niveauKey: "low",
        icon: "❄️",
        nom: "Hypothermie",
        desc: "Effet de Lenteur et réduction des dégâts la nuit sans armure de fourrure ou source de chaleur."
    },
    {
        niveau: "Faible",
        niveauKey: "low",
        icon: "🍄",
        nom: "Champignons Toxiques",
        desc: "Certaines variantes de champignons sombres infligent un effet de Nausée (5 secondes) si consommées."
    }
];

const BIOME_JOURNAL = {
    date: "Jour 47 — Aube brumeuse",
    auteur: "Extrait du Journal du Naturaliste, Vol. II",
    texte: [
        `J'ai passé ma troisième nuit dans cette forêt impossible. Les séquoias ici n'ont pas de nom dans les langues que je connais — ils sont <em>avant</em> les mots. Leurs troncs font quatre fois ma largeur, leur écorce rugueuse comme une vieille carte tannée par des siècles de pluie.`,
        `Ce matin, au réveil, j'ai trouvé des empreintes de <strong style="color:var(--biome-accent)">Kodiak</strong> à deux mètres de ma tente. La taille était considérable. La créature aurait pu m'écraser dans mon sommeil. Elle ne l'a pas fait. Je ne sais pas si c'est de la chance ou un avertissement.`,
        `La brume ne se lève jamais vraiment. Elle se déplace, s'épaissit, se dilue — mais elle reste. Comme si la forêt refusait d'être pleinement vue par des yeux étrangers. Je comprends maintenant pourquoi les cartes de cette région sont toutes imprécises.`
    ]
};

const BIOME_GALLERY = [
    { src: "../src/assets/biomes/redwood-forest/gallery_0.png", caption: "Vue en contre-plongée d'un séquoia géant" },
    { src: "../src/assets/biomes/redwood-forest/gallery_1.png", caption: "Sous-bois tapissé de fougères géantes" },
    { src: "../src/assets/biomes/redwood-forest/gallery_2.png", caption: "Brume matinale dans la canopée" },
    { src: "../src/assets/biomes/redwood-forest/gallery_3.png", caption: "Sanctuaire de Racines — structure naturelle rare" }
];

const BIOME_RELATED = [
    //{ id: "taiga", nom: "Taïga", icon: "🌲", desc: "Forêt froide de conifères.", lien: "#" }
];

const BIOME_CRAFTING = [
    {
        icon: "🪵",
        nom: "Bûche de Séquoia",
        detail: "Obtenu en coupant un tronc de séquoia géant. Base de tout le craftable en bois de séquoia."
    },
    {
        icon: "🧱",
        nom: "Bloc de Mousse Compressée",
        detail: "4 Mousses de Séquoia → 1 Bloc de Mousse. Isolation thermique dans les constructions."
    },
    {
        icon: "💎",
        nom: "Amulette d'Ambre",
        detail: "3 Minerais d'Ambre + 1 Ficelle de Plantes → Amulette. Confère la résistance au Froid."
    },
    {
        icon: "🍵",
        nom: "Infusion de Fougère",
        detail: "2 Fougères Géantes + 1 Bol → Infusion. Restaure 4 points de faim et annule l'effet Nauséeux."
    }
];