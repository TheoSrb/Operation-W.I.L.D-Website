const RARITY = {
    commun: {
        key: "commun",
        label: "Commun",
        order: 0,
        color: "#b8bdb4",
        glow: "rgba(184,189,180,.30)",
        bg: "rgba(184,189,180,.07)",
        border: "rgba(184,189,180,.25)",
        cssVar: "var(--skin-common)"
    },
    rare: {
        key: "rare",
        label: "Rare",
        order: 1,
        color: "#e8943a",
        glow: "rgba(232,148,58,.38)",
        bg: "rgba(232,148,58,.07)",
        border: "rgba(232,148,58,.30)",
        cssVar: "var(--skin-rare)"
    },
    epique: {
        key: "epique",
        label: "Épique",
        order: 2,
        color: "#ba7fd4",
        glow: "rgba(186,127,212,.40)",
        bg: "rgba(186,127,212,.07)",
        border: "rgba(186,127,212,.30)",
        cssVar: "var(--skin-epic)"
    },
    legendaire: {
        key: "legendaire",
        label: "Légendaire",
        order: 3,
        color: "#f5c842",
        glow: "rgba(245,200,66,.50)",
        bg: "rgba(245,200,66,.08)",
        border: "rgba(245,200,66,.38)",
        cssVar: "var(--skin-legendary)"
    },
    event: {
        key: "event",
        label: "Événement",
        order: 4,
        color: "#8febc0ff",
        glow: "rgba(143,235,192,.50)",
        bg: "rgba(143,235,192,.08)",
        border: "rgba(143,235,192,.38)",
        cssVar: "var(--skin-event)"
    }
};

const ANIMALS = [
    { id: "boa", nom: "Boa", biome: "", head: "../src/assets/heads/boa.png" },
    { id: "gorilla", nom: "Gorille", biome: "", head: "../src/assets/heads/gorilla.png" },
    { id: "hippopotamus", nom: "Hippopotame", biome: "", head: "../src/assets/heads/hippopotamus.png" },
    { id: "orca", nom: "Orque", biome: "", head: "../src/assets/heads/orca.png" },
    { id: "red_panda", nom: "Panda Roux", biome: "", head: "../src/assets/heads/red_panda.png" },
    { id: "hyena", nom: "Hyène", biome: "", head: "../src/assets/heads/hyena.png" },
    { id: "tiger", nom: "Tigre", biome: "", head: "../src/assets/heads/tiger.png" },
    { id: "crocodile", nom: "Crocodile", biome: "", head: "../src/assets/heads/crocodile.png" },
    { id: "elephant", nom: "Éléphant", biome: "", head: "../src/assets/heads/elephant.png" },
    { id: "jellyfish", nom: "Méduse", biome: "", head: "../src/assets/heads/jellyfish.png" },
    { id: "kangaroo", nom: "Kangourou", biome: "", head: "../src/assets/heads/kangaroo.png" },
    { id: "kodiak", nom: "Kodiak", biome: "", head: "../src/assets/heads/kodiak.png" },
    { id: "lion", nom: "Lion", biome: "", head: "../src/assets/heads/lion.png" }
];

const SKINS = [


    {
        id: "golden_boa", animal: "boa",
        nom: "Boa Doré",
        rarete: "legendaire",
        model: "../src/assets/cosmetics/boa_gold.png",
        model3d: "../src/assets/cosmetics/boa_gold.gltf",
        couleur1: "#a14920ff", couleur2: "#d68a33ff",
        desc: "Rendez votre Boa aussi brillant que l'or !",
        obtention: "Débloquable une fois le niveau 50 passé.",
        lore: "Une fois le niveau 50 atteint, votre Boa devient aussi brillant que l'or. Il est temps de montrer à tout le monde que vous êtes un joueur expérimenté."
    },
    {
        id: "leviathan_boa", animal: "boa",
        nom: "Boa Léviathan",
        rarete: "legendaire",
        model: "../src/assets/cosmetics/boa_0.png",
        model3d: "../src/assets/cosmetics/boa_0.gltf",
        couleur1: "#a14920ff", couleur2: "#d68a33ff",
        desc: "Rendez votre Boa terrifiant comme les abysses.",
        obtention: "Débloquable en accomplissant la quête: 'Là où la Lumière Abandonne'.",
        lore: "Les profondeurs de l'océan cachent des créatures terrifiantes, mais aucune n'est aussi terrifiante que le Boa Léviathan."
    },
    {
        id: "plush_boa", animal: "boa",
        nom: "Boa Peluche",
        rarete: "rare",
        model: "../src/assets/cosmetics/boa_1.png",
        model3d: "../src/assets/cosmetics/boa_1.gltf",
        couleur1: "#a14920ff", couleur2: "#d68a33ff",
        desc: "Rendez votre Boa aussi doux qu'une peluche.",
        obtention: "Débloquable avec 200 points de prestige.",
        lore: "Ce Boa est si doux qu'on dirait une peluche. Parfait pour les câlins !"
    },

    {
        id: "golden_tiger", animal: "tiger",
        nom: "Tigre Doré",
        rarete: "legendaire",
        model: "../src/assets/cosmetics/tiger_gold.png",
        model3d: "../src/assets/cosmetics/tiger_gold.gltf",
        couleur1: "#a14920ff", couleur2: "#d68a33ff",
        desc: "Rendez votre Tigre aussi brillant que l'or !",
        obtention: "Débloquable une fois le niveau 50 passé.",
        lore: "Une fois le niveau 50 atteint, votre Tigre devient aussi brillant que l'or. Il est temps de montrer à tout le monde que vous êtes un joueur expérimenté."
    },
    {
        id: "virus_tiger", animal: "tiger",
        nom: "Tigre Virus",
        rarete: "legendaire",
        model: "../src/assets/cosmetics/tiger_1.png",
        model3d: "../src/assets/cosmetics/tiger_virus/tiger_0.gltf",
        textureVariants: [
            "../src/assets/cosmetics/tiger_virus/tiger_0.png",
            "../src/assets/cosmetics/tiger_virus/tiger_1.png",
            "../src/assets/cosmetics/tiger_virus/tiger_2.png",
            "../src/assets/cosmetics/tiger_virus/tiger_3.png",
            "../src/assets/cosmetics/tiger_virus/tiger_4.png"
        ],
        couleur1: "#a14920ff", couleur2: "#d68a33ff",
        desc: "Rendez votre Tigre aussi dangereux qu'un virus informatique !",
        obtention: "Débloquable avec 500 points de prestige.",
        lore: "Ce Tigre a été infecté par un virus informatique et est devenu encore plus dangereux."
    },
    {
        id: "pizza_chief_tiger", animal: "tiger",
        nom: "Tigre Pizzaiolo",
        rarete: "epique",
        model: "../src/assets/cosmetics/tiger_0.png",
        model3d: "../src/assets/cosmetics/tiger_0.gltf",
        textureVariants: [
            "../src/assets/cosmetics/tiger_pizza/tiger_pizza_0.png",
            "../src/assets/cosmetics/tiger_pizza/tiger_pizza_1.png",
            "../src/assets/cosmetics/tiger_pizza/tiger_pizza_2.png",
            "../src/assets/cosmetics/tiger_pizza/tiger_pizza_3.png"
        ],
        couleur1: "#a14920ff", couleur2: "#d68a33ff",
        desc: "Rendez votre Tigre aussi bon en cuisine qu'en combat !",
        obtention: "Débloquable avec 300 points de prestige.",
        lore: "Ce Tigre a troqué sa vie de prédateur pour celle de pizzaiolo."
    },
    {
        id: "boss_tiger", animal: "tiger",
        nom: "Tigre Parrain",
        rarete: "rare",
        model: "../src/assets/cosmetics/tiger_2.png",
        model3d: "../src/assets/cosmetics/tiger_2.gltf",
        textureVariants: [
            "../src/assets/cosmetics/tiger_boss/tiger_boss_0.png",
            "../src/assets/cosmetics/tiger_boss/tiger_boss_1.png",
            "../src/assets/cosmetics/tiger_boss/tiger_boss_2.png",
            "../src/assets/cosmetics/tiger_boss/tiger_boss_3.png"
        ],
        couleur1: "#a14920ff", couleur2: "#d68a33ff",
        desc: "Rendez votre Tigre aussi élégant que le parrain !",
        obtention: "Débloquable avec 200 points de prestige.",
        lore: "Ce Tigre est le chef de la pègre de la jungle. Il est respecté par tous les animaux et est craint par tous les humains."
    },
    {
        id: "cartoon_tiger", animal: "tiger",
        nom: "Tigre Dessin Animé",
        rarete: "commun",
        model: "../src/assets/cosmetics/tiger_3.png",
        model3d: "../src/assets/cosmetics/tiger_3.gltf",
        couleur1: "#a14920ff", couleur2: "#d68a33ff",
        desc: "Rendez votre Tigre aussi drôle qu'un dessin animé !",
        obtention: "Débloquable en accomplissant la quête: 'Rayures & Coups de Crayon'.",
        lore: "Ce Tigre a troqué sa vie de prédateur pour celle d'un personnage de dessin animé."
    },

    {
        id: "golden_elephant", animal: "elephant",
        nom: "Éléphant Doré",
        rarete: "legendaire",
        model: "../src/assets/cosmetics/elephant_gold.png",
        model3d: "../src/assets/cosmetics/elephant_gold.gltf",
        couleur1: "#a14920ff", couleur2: "#d68a33ff",
        desc: "Rendez votre Éléphant aussi brillant que l'or !",
        obtention: "Débloquable une fois le niveau 50 passé.",
        lore: "Une fois le niveau 50 atteint, votre éléphant devient aussi brillant que l'or. Il est temps de montrer à tout le monde que vous êtes un joueur expérimenté."
    },
    {
        id: "zombie_elephant", animal: "elephant",
        nom: "Éléphant Zombie",
        rarete: "event",
        model: "../src/assets/cosmetics/elephant_0.png",
        model3d: "../src/assets/cosmetics/elephant_0.gltf",
        couleur1: "#a14920ff", couleur2: "#d68a33ff",
        desc: "Rendez votre Éléphant à la fois mort et vivant pour Halloween !",
        obtention: "Débloquable uniquement pendant la période de l'évènement Operation Wildoween.",
        lore: "Opération Wildoween est un évènement spécial qui a lieu chaque année à l'occasion d'Halloween. Il permet aux joueurs de collecter des objets exclusifs et de participer à des activités spéciales."
    },
    {
        id: "demon_elephant", animal: "elephant",
        nom: "Éléphant Démoniaque",
        rarete: "event",
        model: "../src/assets/cosmetics/elephant_1.png",
        model3d: "../src/assets/cosmetics/elephant_1.gltf",
        couleur1: "#a14920ff", couleur2: "#d68a33ff",
        desc: "Rendez votre Éléphant démoniaque pour Halloween !",
        obtention: "Débloquable uniquement pendant la période de l'évènement Operation Wildoween.",
        lore: "Opération Wildoween est un évènement spécial qui a lieu chaque année à l'occasion d'Halloween. Il permet aux joueurs de collecter des objets exclusifs et de participer à des activités spéciales."
    },
    {
        id: "golden_kodiak", animal: "kodiak",
        nom: "Kodiak Doré",
        rarete: "legendaire",
        model: "../src/assets/cosmetics/kodiak_gold.png",
        model3d: "../src/assets/cosmetics/kodiak_gold.gltf",
        couleur1: "#a14920ff", couleur2: "#d68a33ff",
        desc: "Rendez votre Kodiak aussi brillant que l'or !",
        obtention: "Débloquable une fois le niveau 50 passé.",
        lore: "Une fois le niveau 50 atteint, votre kodiak devient aussi brillant que l'or. Il est temps de montrer à tout le monde que vous êtes un joueur expérimenté."
    },
    {
        id: "skeleton_kodiak", animal: "kodiak",
        nom: "Kodiak Squelettique",
        rarete: "event",
        model: "../src/assets/cosmetics/kodiak_0.png",
        model3d: "../src/assets/cosmetics/kodiak_0.gltf",
        couleur1: "#a14920ff", couleur2: "#d68a33ff",
        desc: "Rendez votre Kodiak terrifiant pour Halloween !",
        obtention: "Débloquable uniquement pendant la période de l'évènement Operation Wildoween.",
        lore: "Opération Wildoween est un évènement spécial qui a lieu chaque année à l'occasion d'Halloween. Il permet aux joueurs de collecter des objets exclusifs et de participer à des activités spéciales."
    },
    {
        id: "shade_kodiak", animal: "kodiak",
        nom: "Kodiak des Ombres",
        rarete: "event",
        opacity: 0.5,
        model: "../src/assets/cosmetics/kodiak_1.png",
        model3d: "../src/assets/cosmetics/kodiak_1.gltf",
        couleur1: "#a14920ff", couleur2: "#d68a33ff",
        desc: "Rendez votre Kodiak damné pour Halloween !",
        obtention: "Débloquable uniquement pendant la période de l'évènement Operation Wildoween.",
        lore: "Opération Wildoween est un évènement spécial qui a lieu chaque année à l'occasion d'Halloween. Il permet aux joueurs de collecter des objets exclusifs et de participer à des activités spéciales."
    }
];


let _three = null;

function stopThreeViewer() {
    if (!_three) return;
    cancelAnimationFrame(_three.animId);
    if (_three.texInterval) clearInterval(_three.texInterval);
    _three.renderer.dispose();
    _three = null;
}

function loadModelInViewer(src, textureVariants = []) {
    const canvas = document.getElementById('modalModelViewer');
    if (!canvas) return;

    stopThreeViewer();

    const w = canvas.parentElement.clientWidth || 400;
    const h = canvas.parentElement.clientHeight || 260;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(w, h, false);
    renderer.toneMapping = THREE.NoToneMapping;
    renderer.outputEncoding = THREE.LinearEncoding;

    const scene = new THREE.Scene();
    scene.add(new THREE.HemisphereLight(0xffffff, 0x888888, 1.0));
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.4);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
    fillLight.position.set(-5, 2, -5);
    scene.add(fillLight);

    const camera = new THREE.PerspectiveCamera(45, w / h, 0.01, 1000);
    const controls = new THREE.OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2.0;

    _three = { renderer, scene, camera, controls, animId: null, texInterval: null };

    function animate() {
        _three.animId = requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }

    const loader = new THREE.GLTFLoader();
    loader.load(
        src,
        (gltf) => {
            const model = gltf.scene;

            const box = new THREE.Box3().setFromObject(model);
            const center = box.getCenter(new THREE.Vector3());
            const size = box.getSize(new THREE.Vector3()).length();
            model.position.sub(center);

            camera.position.set(0, size * 0.15, size * 1.1);
            controls.target.set(0, 0, 0);
            controls.update();

            model.traverse(child => {
                if (!child.isMesh) return;
                const mats = Array.isArray(child.material) ? child.material : [child.material];
                mats.forEach(mat => {
                    if (mat.map) mat.map.encoding = THREE.LinearEncoding;
                    mat.alphaTest = 0.05;
                    mat.transparent = true;
                    mat.depthWrite = true;
                    mat.side = THREE.DoubleSide;
                    mat.needsUpdate = true;
                });
            });

            scene.add(model);
            animate();

            if (textureVariants.length > 1) {
                const texLoader = new THREE.TextureLoader();

                const textures = textureVariants.map(url => {
                    const t = texLoader.load(url);
                    t.flipY = false;
                    t.encoding = THREE.LinearEncoding;
                    t.wrapS = THREE.RepeatWrapping;
                    t.wrapT = THREE.RepeatWrapping;
                    t.magFilter = THREE.NearestFilter;
                    t.minFilter = THREE.NearestFilter;
                    t.generateMipmaps = false;
                    return t;
                });

                let texIdx = 0;
                _three.texInterval = setInterval(() => {
                    texIdx = (texIdx + 1) % textures.length;

                    model.traverse(child => {
                        if (!child.isMesh) return;
                        const mats = Array.isArray(child.material) ? child.material : [child.material];
                        mats.forEach(mat => {
                            mat.map = textures[texIdx];
                            mat.map.needsUpdate = true;
                            mat.needsUpdate = true;
                        });
                    });
                }, 2000);
            }
        },
        undefined,
        (err) => console.error('GLTFLoader error:', err)
    );
}

function getSkinsByAnimal(animalId) {
    return SKINS.filter(s => s.animal === animalId);
}

function countByRarity() {
    const c = { commun: 0, rare: 0, epique: 0, legendaire: 0, event: 0, total: SKINS.length };
    SKINS.forEach(s => { if (c[s.rarete] !== undefined) c[s.rarete]++; });
    return c;
}

function searchSkins(query) {
    const q = query.toLowerCase().trim();
    if (!q) return SKINS;
    return SKINS.filter(s =>
        s.nom.toLowerCase().includes(q) ||
        s.lore.toLowerCase().includes(q) ||
        s.desc.toLowerCase().includes(q) ||
        s.obtention.toLowerCase().includes(q) ||
        RARITY[s.rarete].label.toLowerCase().includes(q) ||
        (ANIMALS.find(a => a.id === s.animal)?.nom || '').toLowerCase().includes(q)
    );
}

const FAV_KEY = 'opwild_cosm_favorites';

function getFavorites() {
    try { return JSON.parse(localStorage.getItem(FAV_KEY) || '[]'); }
    catch { return []; }
}

function setFavorites(arr) {
    localStorage.setItem(FAV_KEY, JSON.stringify(arr));
}

function isFavorite(skinId) {
    return getFavorites().includes(skinId);
}

function toggleFavorite(skinId) {
    const favs = getFavorites();
    const idx = favs.indexOf(skinId);
    if (idx === -1) favs.push(skinId);
    else favs.splice(idx, 1);
    setFavorites(favs);
    return idx === -1;
}

function getFavoriteSkins() {
    const ids = getFavorites();
    return SKINS.filter(s => ids.includes(s.id));
}

function openModal(skinId) {
    const skin = SKINS.find(s => s.id === skinId);
    if (!skin) return;
    const animal = animalById(skin.animal);
    const r = rarityOf(skin.rarete);
    st.openModalId = skinId;

    const bg = document.getElementById('modalModelBg');
    const canvas = document.getElementById('modalModelViewer');
    const fallback = document.getElementById('modalHeadFallback');

    bg.style.background = `radial-gradient(ellipse at 50% 100%, ${r.color} 0%, transparent 70%)`;
    bg.style.opacity = '.32';

    if (skin.model3d) {
        canvas.style.display = '';
        fallback.style.display = 'none';

        loadModelInViewer(skin.model3d, skin.textureVariants || []);
    } else {
        stopThreeViewer();
        canvas.style.display = 'none';
        fallback.style.display = 'block';
        fallback.src = animal ? animal.head : '';
        fallback.onerror = () => { fallback.src = '../src/assets/Official-Logo.png'; };
    }

    const modal = document.getElementById('modalInner');
    modal.setAttribute('data-rarity', skin.rarete);

    const badge = document.getElementById('modalRarityBadge');
    badge.className = `skin-rarity-badge ${SR_CLASS[skin.rarete]}`;
    badge.innerHTML = `<span class="r-dot" style="background:${r.color};margin-right:4px"></span>${r.label}`;

    document.getElementById('modalSkinName').textContent = skin.nom;

    const ah = document.getElementById('modalAnimalHead');
    ah.src = animal ? animal.head : '';
    ah.alt = animal ? animal.nom : '';
    document.getElementById('modalAnimalName').textContent = animal ? animal.nom : '';

    document.getElementById('modalDesc').textContent = skin.desc;
    document.getElementById('modalLore').style.borderLeftColor = r.color;
    document.getElementById('modalLoreText').textContent = skin.lore;

    document.getElementById('mdRarity').textContent = r.label;
    document.getElementById('mdAnimal').textContent = animal ? animal.nom : '—';
    document.getElementById('mdObtention').textContent = skin.obtention;

    updateModalFavBtn(skinId);

    document.getElementById('skinModal').classList.add('open');
    document.body.style.overflow = 'hidden';
}