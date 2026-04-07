const STRUCTURES = [
    {
        id: "submerged_station",
        name: "Station Immergée",
        emoji: "",
        biome: "deep_oceans",
        biomeLabel: "Océans Profonds",
        rarity: "uncommon",
        rarityLabel: "Peu Commune",
        description: "Une station de recherche sous-marine abandonnée, envahie par la vie marine. Les couloirs sont sombres et silencieux, éclairés par les lanternes des explorateurs. On raconte que cette station aurait servit à étudier une nouvelle sorte de petit véhicule sous-marin.",
        image: "../src/assets/structures/submerged_station.png",
        bgColor: "#284b7aff",
        accentColor: "#5098d4ff",
        features: [
            { icon: "📐", label: "Taille", value: "Moyenne" },
            { icon: "🔁", label: "Fréquence", value: "1 par chunk de 48" },
        ],
        loot: [
            { icon: "🧭", name: "Carte au Trésor Sauvage", chance: "25%" },
            { icon: "🥩", name: "Viande Séchée", chance: "80%" },
            { icon: "📜", name: "Journal d'Explorateur", chance: "40%" },
            { icon: "💎", name: "Jade Brut", chance: "8%" }
        ],
        spawns: [
 
        ]
    }
];

const RARITY_CONFIG = {
    common: { label: "Commune", color: "#9ca09a", icon: "" },
    uncommon: { label: "Peu Commune", color: "#52c45a", icon: "" },
    rare: { label: "Rare", color: "#5abadc", icon: "" },
};

const BIOME_CONFIG = {
    deep_oceans: { label: "Océans Profonds", color: "#7ecbdfff", icon: "🌊" }
};

let activeBiome = "all";
let activeRarity = "all";

function filteredStructures() {
    return STRUCTURES.filter(s => {
        const b = activeBiome === "all" || s.biome === activeBiome;
        const r = activeRarity === "all" || s.rarity === activeRarity;
        return b && r;
    });
}

function renderStructureCard(s, index) {
    const biome = BIOME_CONFIG[s.biome] || {};
    const rarity = RARITY_CONFIG[s.rarity] || {};
    const isEven = index % 2 === 0;

    const lootPreview = s.loot.slice(0, 3).map(l =>
        `<div class="struct-card-loot-item">
            <span class="struct-card-loot-icon">${l.icon}</span>
            <span class="struct-card-loot-name">${l.name}</span>
            <span class="struct-card-loot-chance">${l.chance}</span>
        </div>`
    ).join('');

    const spawnPreview = s.spawns.slice(0, 3).map(sp =>
        `<div class="struct-card-spawn-item">
            <span>${sp.icon}</span>
            <span>${sp.name}</span>
            <span class="struct-card-spawn-count">×${sp.count}</span>
        </div>`
    ).join('');

    const featuresPreview = s.features.slice(0, 2).map(f =>
        `<div class="struct-card-feat"><span class="struct-card-feat-icon">${f.icon}</span><span>${f.label} : <strong>${f.value}</strong></span></div>`
    ).join('');

    return `
    <article class="struct-card reveal" data-biome="${s.biome}" data-rarity="${s.rarity}" style="--struct-card-accent:${s.accentColor};--struct-card-bg:${s.bgColor};">
        <div class="struct-card-inner ${isEven ? '' : 'reversed'}">
            <div class="struct-card-visual">
                <div class="struct-card-img-wrap">
                    <img src="${s.image}" alt="${s.name}" style='width:100%;height:100%;margin:auto;' class="struct-card-img" onerror="this.parentElement.style.background='linear-gradient(135deg,${s.bgColor},${s.accentColor}22)';this.style.display='none'" />
                    <div class="struct-card-img-overlay"></div>
                    <div class="struct-card-img-emoji">${s.emoji}</div>
                </div>
                <div class="struct-card-visual-footer">
                    <div class="struct-card-mini-spawns">
                        ${s.spawns.map(sp => `<span class="struct-card-spawn-badge">${sp.icon} <span>${sp.name}</span></span>`).join('')}
                    </div>
                </div>
            </div>

            <div class="struct-card-content">
                <div class="struct-card-tags">
                    <span class="struct-card-tag" style="color:${biome.color};border-color:${biome.color}44;background:${biome.color}11">${biome.icon} ${biome.label}</span>
                    <span class="struct-card-tag" style="color:${rarity.color};border-color:${rarity.color}44;background:${rarity.color}11">${rarity.icon} ${rarity.label}</span>
                </div>

                <h2 class="struct-card-title">${s.emoji} ${s.name}</h2>
                <p class="struct-card-desc">${s.description}</p>

                <div class="struct-card-features">${featuresPreview}</div>

                <div class="struct-card-sections">
                    <div class="struct-card-section">
                        <div class="struct-card-section-title"><i class="fa-solid fa-box-open"></i> Loot Principal</div>
                        <div class="struct-card-loot-list">${lootPreview}</div>
                    </div>
                    <div class="struct-card-section">
                        <div class="struct-card-section-title"><i class="fa-solid fa-paw"></i> Spawns</div>
                        <div class="struct-card-spawns-list">${spawnPreview}</div>
                    </div>
                </div>

                <button class="struct-card-btn" onclick="openStructModal('${s.id}')">
                    <i class="fa-solid fa-magnifying-glass"></i> Voir tous les détails
                    <span class="struct-card-btn-arrow">→</span>
                </button>
            </div>
        </div>
    </article>`;
}

function renderStructures() {
    const grid = document.getElementById('structuresGrid');
    if (!grid) return;
    const list = filteredStructures();
    const count = document.getElementById('struct-count');
    if (count) count.textContent = list.length;

    if (list.length === 0) {
        grid.innerHTML = `<div class="struct-empty"><div class="struct-empty-icon">🔍</div><p>Aucune structure ne correspond à vos filtres.</p></div>`;
        return;
    }

    grid.innerHTML = list.map((s, i) => renderStructureCard(s, i)).join('');
    grid.querySelectorAll('.reveal').forEach(el => revealObserver?.observe(el));
}

function openStructModal(id) {
    const s = STRUCTURES.find(x => x.id === id);
    if (!s) return;
    const overlay = document.getElementById('structModalOverlay');
    const biome = BIOME_CONFIG[s.biome] || {};
    const rarity = RARITY_CONFIG[s.rarity] || {};

    const hero = document.getElementById('structModalHero');
    hero.style.background = `linear-gradient(135deg, ${s.bgColor} 0%, color-mix(in srgb, ${s.accentColor} 30%, ${s.bgColor}) 100%)`;

    document.getElementById('structModalBadges').innerHTML = `
        <span class="struct-modal-badge" style="color:${biome.color};border-color:${biome.color}55;background:${biome.color}18">${biome.icon} ${biome.label}</span>
        <span class="struct-modal-badge" style="color:${rarity.color};border-color:${rarity.color}55;background:${rarity.color}18">${rarity.icon} ${rarity.label}</span>`;
    document.getElementById('structModalName').textContent = `${s.emoji} ${s.name}`;
    document.getElementById('structModalDesc').textContent = s.description;

    document.getElementById('structModalFeatures').innerHTML = s.features.map(f =>
        `<div class="struct-modal-feat"><span class="struct-modal-feat-icon">${f.icon}</span><div><div class="struct-modal-feat-label">${f.label}</div><div class="struct-modal-feat-val">${f.value}</div></div></div>`
    ).join('');

    document.getElementById('structModalLoot').innerHTML = s.loot.map(l =>
        `<div class="struct-modal-loot-item">
            <span class="struct-modal-loot-icon">${l.icon}</span>
            <span class="struct-modal-loot-name">${l.name}</span>
            <div class="struct-modal-loot-bar"><div class="struct-modal-loot-fill" style="width:${parseFloat(l.chance)}%;background:${s.accentColor}"></div></div>
            <span class="struct-modal-loot-pct">${l.chance}</span>
        </div>`
    ).join('');

    document.getElementById('structModalSpawns').innerHTML = s.spawns.map(sp =>
        `<div class="struct-modal-spawn">
            <span class="struct-modal-spawn-icon">${sp.icon}</span>
            <span class="struct-modal-spawn-name">${sp.name}</span>
            <span class="struct-modal-spawn-count" style="color:${s.accentColor}">×${sp.count}</span>
        </div>`
    ).join('');

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeStructModal() {
    document.getElementById('structModalOverlay').classList.remove('open');
    document.body.style.overflow = '';
}

function animateNumber(el) {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1200;
    const step = target / (duration / 16);
    let current = 0;
    const tick = () => {
        current = Math.min(current + step, target);
        el.textContent = Math.floor(current);
        if (current < target) requestAnimationFrame(tick);
    };
    tick();
}

function initStats() {
    const statsData = {
        'ss-total': STRUCTURES.length,
        'ss-biomes': [...new Set(STRUCTURES.map(s => s.biome))].length,
        'ss-loots': STRUCTURES.reduce((acc, s) => acc + s.loot.length, 0),
        'ss-spawns': STRUCTURES.reduce((acc, s) => acc + s.spawns.length, 0),
    };
    Object.entries(statsData).forEach(([id, val]) => {
        const el = document.getElementById(id);
        if (el) {
            el.dataset.target = val;
            animateNumber(el);
        }
    });
}

function initFilters() {
    document.querySelectorAll('[data-biome]').forEach(btn => {
        if (!btn.classList.contains('struct-filter-btn')) return;
        btn.addEventListener('click', () => {
            document.querySelectorAll('[data-biome].struct-filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeBiome = btn.dataset.biome;
            renderStructures();
        });
    });

    document.querySelectorAll('[data-rarity]').forEach(btn => {
        if (!btn.classList.contains('struct-filter-btn')) return;
        btn.addEventListener('click', () => {
            document.querySelectorAll('[data-rarity].struct-filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeRarity = btn.dataset.rarity;
            renderStructures();
        });
    });

    document.querySelectorAll('[data-filter-biome]').forEach(a => {
        a.addEventListener('click', e => {
            e.preventDefault();
            const biome = a.dataset.filterBiome;
            document.querySelectorAll('[data-biome].struct-filter-btn').forEach(b => {
                b.classList.toggle('active', b.dataset.biome === biome || (biome === 'all' && b.dataset.biome === 'all'));
            });
            activeBiome = biome;
            renderStructures();
            document.getElementById('structures-list')?.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

function initParticles() {
    const c = document.getElementById('heroParticles');
    if (!c) return;
    const cols = ['var(--struct-accent)', '#52c45a', '#5abadc', '#d4a050', '#b47040'];
    for (let i = 0; i < 22; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.cssText = `
            left:${Math.random() * 100}%;
            width:${2 + Math.random() * 3}px;
            height:${2 + Math.random() * 3}px;
            animation-duration:${8 + Math.random() * 14}s;
            animation-delay:${Math.random() * 12}s;
            background:${cols[Math.floor(Math.random() * cols.length)]};
            border-radius:${Math.random() > .5 ? '50%' : '2px'};
        `;
        c.appendChild(p);
    }
}

let revealObserver;

function initReveal() {
    revealObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) e.target.classList.add('visible');
        });
    }, { threshold: 0.06 });
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

function triggerReveal() {
    document.querySelectorAll('.reveal').forEach(el => revealObserver?.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initReveal();
    renderStructures();
    initFilters();
    setTimeout(initStats, 400);

    document.getElementById('structModalClose')?.addEventListener('click', closeStructModal);
    document.getElementById('structModalOverlay')?.addEventListener('click', e => {
        if (e.target === document.getElementById('structModalOverlay')) closeStructModal();
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeStructModal(); });
});