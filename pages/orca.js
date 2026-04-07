const ENTITY_ID = "orca";

const ANIMAL_TAMING_EXP = 270.0;
const MAX_HEALTH = 60;
const DAMAGES = 14;
const KNOCKBACK_RESISTANCE = 0.8;
const SPEED = 7.3;

const ARCHETYPE = "ASSASSIN";
const REGIME = "Carnivore";

const ANIMAL_PAGE_AVG_COLOR = "#b3bdd2";

const HERO_WALLPAPER = "../src/assets/animals_wallpapers/Orca-Wallpaper.png";
const HERO_WALLPAPER_OFFSET_Y = 30;
const PORTRAITS = [
    "../src/assets/pages/orca/orca_0.png",
    "../src/assets/pages/orca/orca_1.png",
    "../src/assets/pages/orca/orca_2.png"
];
const DIFFICULTY_ICON = "../src/assets/pages/difficulty-icon/difficulty_5.png";

const STATS = [
    { nom: "❤️ Points de Vie", val: MAX_HEALTH, max: 100, couleur: "linear-gradient(90deg,#e53935,#ef5350)" },
    { nom: "⚔️ Attaque", val: DAMAGES, max: 20, couleur: "linear-gradient(90deg,var(--orange),var(--orange2))" },
    { nom: "🛡️ Résistance au recul", val: KNOCKBACK_RESISTANCE, max: 1, couleur: "linear-gradient(90deg,var(--blue),var(--blue2))", affichage: KNOCKBACK_RESISTANCE },
    { nom: "💨 Vitesse", val: SPEED, max: 15, couleur: "linear-gradient(90deg,var(--green),var(--green2))", affichage: SPEED + " blocs/s" }
];

const DESCRIPTION = [
    `Le <strong style="color:var(--animal-accent)">Tigre</strong> est un <strong>félin</strong> sauvage de taille moyenne, rôdant dans les <strong>forêts tropicales</strong> et les <strong>jungles de bamboos</strong>. Extrêmement agile et territorial, il attaque sans avertissement.`,
    `<strong>I. Saut Bestial</strong> : Lorsqu'il repère une cible, le <strong style="color:var(--animal-accent)">Tigre</strong> effectue un bond puissant, visant à immobiliser et piéger sa proie avec ses pattes. S'il vous attrape, il vous lacère avec ses <strong>griffes</strong>, infligeant des dégâts tout en vous maintenant <strong>prisonnier</strong>, jusqu'à ce qu'il vous lâche.`,
    `<strong>II. Désarmement</strong> : Les frappes du <strong style="color:var(--animal-accent)">Tigre</strong> sont suffisamment précises pour forcer un joueur à <strong>lâcher</strong> son équipement.`,
    `<strong>III. Territorial</strong> : Le <strong style="color:var(--animal-accent)">Tigre</strong> griffonne régulièrement les troncs d'arbres dans sa zone de chasse, laissant des traces visibles sur l'écorce. Ces marques servent à signaler sa présence et à dissuader les intrus.`,
    `<strong>IV. Repos</strong> : Le <strong style="color:var(--animal-accent)">Tigre</strong> alterne ses phases d'activité avec des périodes de <strong>repos</strong>, se retirant dans des zones sûres pour récupérer son énergie avant de <strong>reprendre</strong> la chasse.`,
    `<strong style="color:var(--animal-accent)">Analyse</strong> : Si vous le voyez, vous êtes <strong style="color:#ef5350">déjà mort.</strong>`
];

const BEHAVIORS = [
    { icon: "🗡️", titre: "Désarmement", desc: "En combat, le <strong style='color:var(--animal-accent)'>Tigre</strong> peut <strong>désarmer</strong> sa proie, l'obligeant à <strong>lâcher l'équipement</strong> qu'elle tenait en main." },
    { icon: "👁️", titre: "Invisibilité", desc: "Le <strong style='color:var(--animal-accent))'>Tigre</strong> peut se rendre <strong>translucide</strong>, ce qui le rend <strong>difficile à repérer</strong> tout en décuplant sa <strong>vigilance</strong>." },
    { icon: "🐾", titre: "Saut Bestial", desc: "Une fois sa proie localisée, le <strong style='color:var(--animal-accent)'>Tigre</strong> peut <strong>bondir avec une forte puissance</strong> afin de l'<strong>immobiliser au sol</strong>." },
    { icon: "🪵", titre: "Territoire marqué", desc: "Le <strong style='color:var(--animal-accent)'>Tigre</strong> peut <strong>griffer certains troncs d'arbres</strong> pour signaler sa présence et <strong>délimiter son territoire</strong>." },
    { icon: "😴", titre: "Repos", desc: "Le <strong style='color:var(--animal-accent)'>Tigre</strong> alterne ses <strong>phases d'activité</strong> avec des <strong>périodes de repos</strong> s'il ne détecte aucune proie aux alentours." },
    { icon: "✂️", titre: "Lacération", desc: "Le <strong style='color:var(--animal-accent)'>Tigre</strong> <strong>maintient sa victime sous ses pattes</strong> pour l'immobiliser tout en lui infligeant de <strong>profondes griffures</strong> et dégâts." }
];

const ADVENTURER_MANUSCRIPT = {
    date: "Date du Journal non écrit.",
    auteur: "Extrait du Journal non écrit.",
    texte: ["Journal non écrit."]
};

const TAMING = {
    etapes: [
        { titre: "Repérer un Tigre Adulte", desc: "Contrairement à d'autres animaux, seuls les tigres adultes peuvent être apprivoisés. Trouvez et choisissez en un que vous voulez apprivoiser." },
        { titre: "Augmenter la Somnolence", desc: "Tirez sur le tigre avec des <strong style='color:var(--animal-accent)'>Flèches Tranquilisantes</strong> ou tout autre projectile anesthésiant afin de faire monter sa jauge de somnolence. Continuez jusqu'à ce qu'il s'effondre sur le sol." },
        { titre: "Nourrir le Tigre Endormi", desc: "Une fois le tigre endormi, approchez-vous et nourrissez-le à la main avec de la <strong style='color:var(--animal-accent)'>Viande Crue</strong> issue de prédateurs puissants comme le <strong style='color:var(--animal-accent)'>Boa</strong> ou le <strong style='color:var(--animal-accent)'>Kodiak</strong>. Répétez jusqu'à ce que le tigre soit apprivoisé." }
    ],
    warning: "La somnolence du tigre diminue naturellement avec le temps lorsqu'il n'est plus touché par des projectiles anesthésiants. N'attendez donc pas trop longtemps entre vos tirs sous peine de voir la somnolence du tigre diminuer et atteindre 0%.",
    tip: "Construisez un abri avec des ouvertures assez larges pour que vous puissiez y entrer, mais trop petites pour y laisser passer le Tigre. Vous pourrez ainsi lui tirer dessus en toute sécurité sans qu'il puisse vous atteindre."
};

const MOUNT_ABILITIES = [
    {
        icon: "<img src='../src/assets/pages/tiger/attack_0.png' width='75' height='75' alt='Déchiquetage'>",
        titre: "Déchiquetage",
        desc: `Faites mordre votre <strong style='color:var(--orange2)'>Tigre</strong> toutes les <strong>0.65 secondes</strong>, infligeant <strong>${Math.round((DAMAGES / 3) * 2) / 2} points de dégâts</strong> à chaque morsure.`,
        cooldown: "0.65s",
        accent: "var(--orange2)"
    },
    {
        icon: "<img src='../src/assets/pages/tiger/attack_1.png' width='75' height='75' alt='Bond Bestial'>",
        titre: "Bond Bestial",
        desc: "Faites bondir votre <strong style='color:var(--animal-accent)'>Tigre</strong> sur une <strong>longue distance</strong> toutes les <strong>30 secondes</strong>. S'il entre en contact avec une entité, il l'<strong>emprisonnera dans ses griffes</strong> et la dévorera, ce qui vous fera <strong>descendre de votre monture</strong>.",
        cooldown: "30s",
        accent: "var(--blue2)"
    },
    {
        icon: "<img src='../src/assets/pages/tiger/attack_2.png' width='75' height='75' alt='Cruauté Féline'>",
        titre: "Cruauté Féline",
        desc: "Faites entrer votre <strong style='color:var(--animal-accent)'>Tigre</strong> dans une <strong>rage intense</strong> durant <strong>15 secondes</strong>, augmentant sa résistance de <strong>200%</strong>, ses dégâts de <strong>150%</strong>, sa taille de <strong>125%</strong> ainsi que sa vitesse de <strong>135%</strong>, toutes les <strong>5 minutes</strong>.",
        cooldown: "5min",
        accent: "var(--purple)"
    }
];

const VARIANTS = [
    { img: "../src/assets/pages/orca/orca_0.png", nom: "Orque par Défaut", badge: "Rare", badgeStyle: "background:rgba(58,122,180,.2);color:var(--blue2);border:1px solid rgba(58,122,180,.4)", taux: "40%" },
    { img: "../src/assets/pages/orca/orca_1.png", nom: "Orque Noire", badge: "Rare", badgeStyle: "background:rgba(58,122,180,.2);color:var(--blue2);border:1px solid rgba(58,122,180,.4)", taux: "30%" },
    { img: "../src/assets/pages/orca/orca_2.png", nom: "Orque Cyan", badge: "Rare", badgeStyle: "background:rgba(58,122,180,.2);color:var(--blue2);border:1px solid rgba(58,122,180,.4)", taux: "30%" }
];

const ANIMATIONS = [
    { label: "Nage", src: "../src/assets/pages/orca/anim_0.gif" }
];

const DROPS = [
    { img: "../src/assets/pages/tiger_fur.png", nom: "Fourrure de Tigre", detail: "1–3 unités", chance: "100%", chanceClasse: "chance-high" },
    { img: "../src/assets/pages/raw_tiger.png", nom: "Viande de Tigre Crue", detail: "1–2 unités", chance: "100%", chanceClasse: "chance-high" },
    { img: "../src/assets/pages/predator_tooth.png", nom: "Dent de Prédateur", detail: "1 unité", chance: "65%", chanceClasse: "chance-medium" }
];

const SADDLE = {
    img: "../src/assets/pages/tiger/saddle.png",
    nom: "Selle du Tigre",
    ingredients: [
        { img: "../src/assets/pages/leather.png", nom: "Cuir", quantite: "38" },
        { img: "../src/assets/pages/iron_ingot.png", nom: "Lingot de Fer", quantite: "24" },
        { img: "../src/assets/pages/plant_fiber.png", nom: "Fibre Végétale", quantite: "16" }
    ]
};

const SPAWN_RARITY_MAP = { "cold_ocean": "Rare" };

const SIMILAR_ANIMALS = ["crocodile"];

const CRAFTING = [
    { icon: "<img src='../src/assets/pages/tiger/craft_0.png' width='50' height='50'>", nom: "Casque de Camouflage", detail: "3 Feuilles + 2 Fourrures de Tigre." },
    { icon: "<img src='../src/assets/pages/tiger/craft_1.png' width='50' height='50'>", nom: "Plastron de Camouflage", detail: "5 Feuilles + 3 Fourrures de Tigre." },
    { icon: "<img src='../src/assets/pages/tiger/craft_2.png' width='50' height='50'>", nom: "Jambières de Camouflage", detail: "4 Feuilles + 3 Fourrures de Tigre." },
    { icon: "<img src='../src/assets/pages/tiger/craft_3.png' width='50' height='50'>", nom: "Bottes de Camouflage", detail: "2 Feuilles + 2 Fourrures de Tigre." },
    { icon: "<img src='../src/assets/pages/tiger/craft_4.png' width='50' height='50'>", nom: "Lance Primitive", detail: "2 Bâtons + 2 Fourrures de Tigre + 1 Dent de Prédateur." }
];

const SOUNDS = [
    { id: "snd_idle1", nom: "Grognement 1", categorie: "Idle", src: "../src/assets/sounds/tiger/tiger_idle.ogg" },
    { id: "snd_idle2", nom: "Grognement 2", categorie: "Idle", src: "../src/assets/sounds/tiger/tiger_idle_2.ogg" },
    { id: "snd_idle3", nom: "Grognement 3", categorie: "Idle", src: "../src/assets/sounds/tiger/tiger_idle_3.ogg" },
    { id: "snd_hurt1", nom: "Frappe", categorie: "Combat", src: "../src/assets/sounds/tiger/tiger_hurt.ogg" },
    { id: "snd_hurt2", nom: "Frappe reçue", categorie: "Combat", src: "../src/assets/sounds/tiger/tiger_hurting.ogg" },
    { id: "snd_hurt3", nom: "Hurlement", categorie: "Combat", src: "../src/assets/sounds/tiger/tiger_roar.ogg" },
    { id: "snd_ambt", nom: "Avertissement", categorie: "Ambient", src: "../src/assets/sounds/tiger/tiger3.ogg" }
];

const SOUND_CATEGORIES = {
    "Idle": { label: "Comportement", color: "var(--green2)", bg: "rgba(58,122,60,.15)", border: "rgba(82,196,90,.35)" },
    "Combat": { label: "Combat", color: "#ef5350", bg: "rgba(180,50,50,.15)", border: "rgba(239,83,80,.35)" },
    "Ambient": { label: "Ambiance", color: "var(--orange2)", bg: "rgba(212,100,26,.15)", border: "rgba(240,120,48,.35)" }
};

const COSMETICS = [
    { id: "skin_default", nom: "Tenue par Défaut", rarete: "Commun", img: "../src/assets/pages/orca/orca_0.png", desc: "La tenue de base de l'Orque.", equipped: true },
    { id: "skin_gold", nom: "Tenue Dorée", rarete: "Légendaire", img: "../src/assets/pages/orca/skin_0.png", desc: "La tenue dorée de l'Orque.", equipped: false }
];