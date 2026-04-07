const ENTITIES = [
    {
        id: "boa",
        nom: "Boa",
        nomLatin: "Boa constrictor",
        biome: "🌱 Marécage",
        rarete: "Commun",
        rareteClasse: "rarity-common",
        temperament: "Agressif",
        apprivoisable: true,
        chevauchable: true,
        types: ["terrestrial", "tameable", "rideable"],
        head: "src/assets/heads/boa.png",
        headPage: "../src/assets/heads/boa.png",
        desc: "Le plus grand serpent du mod.",
        tags: ["Apprivoisable", "Chevauchable"],
        lien: "pages/boa.html",
        lienPage: "boa.html"
    },
    {
        id: "gorilla",
        nom: "Gorille",
        nomLatin: "Gorilla beringei",
        biome: "🌿 Jungle",
        rarete: "Rare",
        rareteClasse: "rarity-rare",
        temperament: "Neutre",
        apprivoisable: true,
        chevauchable: true,
        types: ["terrestrial", "tameable", "rideable"],
        head: "src/assets/heads/gorilla.png",
        headPage: "../src/assets/heads/gorilla.png",
        desc: "Un des primates les plus puissants et imposants.",
        tags: ["Apprivoisable", "Chevauchable"],
        lien: "pages/gorilla.html",
        lienPage: "gorilla.html"
    },
    {
        id: "hippopotamus",
        nom: "Hippopotame",
        nomLatin: "Hippopotamus amphibius",
        biome: "🪾 Savanne",
        rarete: "Peu Commun",
        rareteClasse: "rarity-uncommon",
        temperament: "Agressif",
        apprivoisable: true,
        chevauchable: true,
        types: ["terrestrial", "aquatic", "tameable", "rideable"],
        head: "src/assets/heads/hippopotamus.png",
        headPage: "../src/assets/heads/hippopotamus.png",
        desc: "Un prédateur extrêmement territorial, aussi bien sur terre que dans l'eau.",
        tags: ["Apprivoisable", "Chevauchable"],
        lien: "pages/hippopotamus.html",
        lienPage: "hippopotamus.html"
    },
    {
        id: "orca",
        nom: "Orque",
        nomLatin: "Orcinus orca",
        biome: "🌊 Océan Froid",
        rarete: "Rare",
        rareteClasse: "rarity-rare",
        temperament: "Agressif",
        apprivoisable: true,
        chevauchable: true,
        types: ["aquatic", "tameable", "rideable"],
        head: "src/assets/heads/orca.png",
        headPage: "../src/assets/heads/orca.png",
        desc: "L'un des plus grands prédateurs aquatiques, imposant son territoire dans les océans froids.",
        tags: ["Apprivoisable", "Chevauchable"],
        lien: "pages/orca.html",
        lienPage: "orca.html"
    },
    {
        id: "red_panda",
        nom: "Panda Roux",
        nomLatin: "Ailurus fulgens",
        biome: "🎋 Jungle de Bambous",
        rarete: "Emblématique",
        rareteClasse: "rarity-iconic",
        temperament: "Passif",
        apprivoisable: true,
        chevauchable: false,
        types: ["terrestrial", "tameable"],
        head: "src/assets/heads/red_panda.png",
        headPage: "../src/assets/heads/red_panda.png",
        desc: "La mascotte d'Operation W.I.L.D. Craintif, mais tellement mignon.",
        tags: ["Apprivoisable", "Non-Chevauchable"],
        lien: "pages/red_panda.html",
        lienPage: "red_panda.html"
    },
    {
        id: "hyena",
        nom: "Hyène",
        nomLatin: "Hyaena",
        biome: "🍁 Badlands",
        rarete: "Rare",
        rareteClasse: "rarity-rare",
        temperament: "Neutre",
        apprivoisable: true,
        chevauchable: true,
        types: ["terrestrial", "tameable", "rideable"],
        head: "src/assets/heads/hyena.png",
        headPage: "../src/assets/heads/hyena.png",
        desc: "L'animal le plus fourbe et intelligent du mod.",
        tags: ["Apprivoisable", "Chevauchable"],
        lien: "pages/hyena.html",
        lienPage: "hyena.html"
    },
    {
        id: "tiger",
        nom: "Tigre",
        nomLatin: "Panthera tigris",
        biome: "🌿 Jungle",
        rarete: "Légendaire",
        rareteClasse: "rarity-epic",
        temperament: "Agressif",
        apprivoisable: true,
        chevauchable: true,
        types: ["terrestrial", "tameable", "rideable"],
        head: "src/assets/heads/tiger.png",
        headPage: "../src/assets/heads/tiger.png",
        desc: "L'animal le plus insatiable des jungles profondes, qui attend avant de bondir sur sa proie.",
        tags: ["Apprivoisable", "Chevauchable"],
        lien: "pages/tiger.html",
        lienPage: "tiger.html"
    },
    {
        id: "crocodile",
        nom: "Crocodile",
        nomLatin: "Crocodylus niloticus",
        biome: "🌱 Marécage",
        rarete: "Peu Commun",
        rareteClasse: "rarity-uncommon",
        temperament: "Agressif",
        apprivoisable: true,
        chevauchable: true,
        types: ["terrestrial", "aquatic", "tameable", "rideable"],
        head: "src/assets/heads/crocodile.png",
        headPage: "../src/assets/heads/crocodile.png",
        desc: "L'animal ayant la mâchoire la plus puissante jamais recensée.",
        tags: ["Apprivoisable", "Chevauchable"],
        lien: "pages/crocodile.html",
        lienPage: "crocodile.html"
    },
    {
        id: "elephant",
        nom: "Elephant",
        nomLatin: "Loxodonta africana",
        biome: "🪾 Savanne",
        rarete: "Peu Commun",
        rareteClasse: "rarity-uncommon",
        temperament: "Neutre",
        apprivoisable: true,
        chevauchable: true,
        types: ["terrestrial", "tameable", "rideable"],
        head: "src/assets/heads/elephant.png",
        headPage: "../src/assets/heads/elephant.png",
        desc: "Le plus lourd et le plus puissant des animaux terrestres.",
        tags: ["Apprivoisable", "Chevauchable"],
        lien: "pages/elephant.html",
        lienPage: "elephant.html"
    },
    {
        id: "jellyfish",
        nom: "Méduse",
        nomLatin: "Medusozoa",
        biome: "🌊 Océan",
        rarete: "Commun",
        rareteClasse: "rarity-common",
        temperament: "Agressif",
        apprivoisable: false,
        chevauchable: false,
        types: ["aquatic"],
        head: "src/assets/heads/jellyfish.png",
        headPage: "../src/assets/heads/jellyfish.png",
        desc: "Mieux vaut ne pas s'approcher trop près d'elle, sous peine d'avoir un coup de jus.",
        tags: ["Non-Apprivoisable", "Non-Chevauchable"],
        lien: "pages/jellyfish.html",
        lienPage: "jellyfish.html"
    },
    {
        id: "kangaroo",
        nom: "Kangourou",
        nomLatin: "Macropus rufus",
        biome: "🪾 Savanne",
        rarete: "Rare",
        rareteClasse: "rarity-rare",
        temperament: "Neutre",
        apprivoisable: true,
        chevauchable: true,
        types: ["terrestrial", "tameable", "rideable"],
        head: "src/assets/heads/kangaroo.png",
        headPage: "../src/assets/heads/kangaroo.png",
        desc: "L'animal faisant le meilleur score à la boxe.",
        tags: ["Apprivoisable", "Chevauchable"],
        lien: "pages/kangaroo.html",
        lienPage: "kangaroo.html"
    },
    {
        id: "kodiak",
        nom: "Kodiak",
        nomLatin: "Ursus arctos middendorffi",
        biome: "🍂 Forêt de Séquoia",
        rarete: "Peu Commun",
        rareteClasse: "rarity-uncommon",
        temperament: "Neutre",
        apprivoisable: true,
        chevauchable: true,
        types: ["terrestrial", "tameable", "rideable"],
        head: "src/assets/heads/kodiak.png",
        headPage: "../src/assets/heads/kodiak.png",
        desc: "Le plus gros ours du monde.",
        tags: ["Apprivoisable", "Chevauchable"],
        lien: "pages/kodiak.html",
        lienPage: "kodiak.html"
    },
    {
        id: "lion",
        nom: "Lion",
        nomLatin: "Panthera leo",
        biome: "🪾 Savanne",
        rarete: "Peu Commun",
        rareteClasse: "rarity-uncommon",
        temperament: "Agressif",
        apprivoisable: true,
        chevauchable: true,
        types: ["terrestrial", "tameable", "rideable"],
        head: "src/assets/heads/lion.png",
        headPage: "../src/assets/heads/lion.png",
        desc: "Le roi des animaux.",
        tags: ["Apprivoisable", "Chevauchable"],
        lien: "pages/lion.html",
        lienPage: "lion.html"
    }
];

function getEntity(id) {
    return ENTITIES.find(e => e.id === id) || null;
}

function renderAnimalCard(entity) {
    return `
        <div class="animal-card reveal" data-type="${entity.types.join(" ")}" onclick="window.location.href='${entity.lien}'">
            <div class="animal-thumb">
                <span class="animal-thumb-emoji"><img src="${entity.head}" class="animal-head"></span>
                <span class="animal-rarity ${entity.rareteClasse}">${entity.rarete}</span>
            </div>
            <div class="animal-info">
                <p class="animal-biome">${entity.biome}</p>
                <h3 class="animal-name">${entity.nom}</h3>
                <p class="animal-latin">${entity.nomLatin}</p>
                <p class="animal-desc">${entity.desc}</p>
                <div class="animal-tags">${entity.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
                <a href="${entity.lien}" class="animal-link">Voir la fiche complète →</a>
            </div>
        </div>`;
}

function renderRelatedItem(entity) {
    return `
        <a href="${entity.lienPage}" class="related-item">
            <span class="related-emoji">
                <img src="${entity.headPage}" class="animal-head">
            </span>
            <div>
                <div class="related-name">${entity.nom}</div>
                <div class="related-biome">${entity.biome} · <span class="${entity.rareteClasse}-text">${entity.rarete}</span></div>
            </div>
        </a>`;
}