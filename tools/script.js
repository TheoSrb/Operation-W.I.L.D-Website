const CRAFTING_ITEMS = {
    "stick": { name: "Bâton", img: "../src/assets/tools/items/stick.png", color: "#8a6040" },
    "jade": { name: "Jade", img: "../src/assets/tools/items/jade.png", color: "#8fb85c" },
    "ruby": { name: "Rubis", img: "../src/assets/tools/items/ruby.png", color: "#bf3131" },
    "tiger-fur": { name: "Fourrure de Tigre", img: "../src/assets/tools/items/tiger_fur.png", color: "#c47037" },
    "plant-fiber": { name: "Fibre Végétale", img: "../src/assets/tools/items/plant_fiber.png", color: "#5e9d4b" },
    "iron-ingot": { name: "Lingot de Fer", img: "../src/assets/tools/items/iron_ingot.png", color: "#d8d8d8" },
    "string": { name: "Ficelle", img: "../src/assets/tools/items/string.png", color: "#f7f7f7" },
    "predator-tooth": { name: "Dent de Prédateur", img: "../src/assets/tools/items/predator_tooth.png", color: "#bfaf83" },
    "crocodile-scale": { name: "Écaille de Crocodile", img: "../src/assets/tools/items/crocodile_scale.png", color: "#707146" },
    "leaves": { name: "Feuilles", img: "../src/assets/tools/items/leaves.png", color: "#647b35" }
};

const TOOLS = [
    {
        id: "reptilian-daggers", name: "Dagues Reptiliennes",
        category: "weapon", material: "animal", source: "Crocodile", sourceId: "crocodile",
        img: "../src/assets/tools/reptilian_daggers.png",
        description: "Une arme puissante équipée dans chaque main pouvant faire de puissants combos.",
        lore: "",
        stats: { damage: 3, durability: 211, attackSpeed: 2.4, special: "Une dague est équipée dans chaque main." },
        grid: [[null, null, "predator-tooth"], ["crocodile-scale", "predator-tooth", null], ["crocodile-scale", "crocodile-scale", null]]
    },
    {
        id: "camouflage-helmet", name: "Casque de Camouflage",
        category: "armor", material: "animal", source: "Tigre", sourceId: "tiger",
        img: "../src/assets/tools/camouflage_helmet.png",
        description: "Une pièce d'armure permettant de se camoufler et s'intégrer à l'environnement pour échapper à la plupart des prédateurs.",
        lore: "",
        stats: { protection: 1, durability: 33, toughness: 1, special: "L'armure de camouflage complète permet de ne pas se faire voir par la plupart des entités." },
        grid: [["leaves", "leaves", "leaves"], ["tiger-fur", null, "tiger-fur"], [null, null, null]]
    },
    {
        id: "camouflage-chestplate",
        name: "Plastron de Camouflage",
        category: "armor", material: "animal", source: "Tigre", sourceId: "tiger",
        img: "../src/assets/tools/camouflage_chestplate.png",
        description: "Une pièce d'armure permettant de se camoufler et s'intégrer à l'environnement pour échapper à la plupart des prédateurs.",
        lore: "",
        stats: { protection: 3, durability: 48, toughness: 1, special: "L'armure de camouflage complète permet de ne pas se faire voir par la plupart des entités." },
        grid: [["leaves", null, "leaves"], ["leaves", "leaves", "leaves"], ["tiger-fur", "tiger-fur", "tiger-fur"]]
    },
    {
        id: "camouflage-leggings",
        name: "Jambières de Camouflage",
        category: "armor", material: "animal", source: "Tigre", sourceId: "tiger",
        img: "../src/assets/tools/camouflage_leggings.png",
        description: "Une pièce d'armure permettant de se camoufler et s'intégrer à l'environnement pour échapper à la plupart des prédateurs.",
        lore: "",
        stats: { protection: 2, durability: 45, toughness: 1, special: "L'armure de camouflage complète permet de ne pas se faire voir par la plupart des entités." },
        grid: [["tiger-fur", "tiger-fur", "tiger-fur"], ["leaves", null, "leaves"], ["leaves", null, "leaves"]]
    },
    {
        id: "camouflage-boots",
        name: "Bottes de Camouflage",
        category: "armor", material: "animal", source: "Tigre", sourceId: "tiger",
        img: "../src/assets/tools/camouflage_boots.png",
        description: "Une pièce d'armure permettant de se camoufler et s'intégrer à l'environnement pour échapper à la plupart des prédateurs.",
        lore: "",
        stats: { protection: 1, durability: 39, toughness: 1, special: "L'armure de camouflage complète permet de ne pas se faire voir par la plupart des entités." },
        grid: [["tiger-fur", null, "tiger-fur"], ["leaves", null, "leaves"], [null, null, null]]
    },






    {
        id: "jade-sword", name: "Épée en Jade",
        category: "weapon", material: "mineral", source: "", sourceId: "",
        img: "../src/assets/tools/jade_sword.png",
        description: "Une épée tranchante, taillée dans du jade pur.",
        lore: "",
        stats: { damage: 6, durability: 438, attackSpeed: 1.6, special: "" },
        grid: [[null, "jade", null], [null, "jade", null], [null, "stick", null]]
    },
    {
        id: "jade-pickaxe", name: "Pioche en Jade",
        category: "tool", material: "mineral", source: "", sourceId: "",
        img: "../src/assets/tools/jade_pickaxe.png",
        description: "Idéale pour extraire certains minerais avec élégance.",
        lore: "",
        stats: { damage: 4, durability: 438, attackSpeed: 1.2, special: "" },
        grid: [["jade", "jade", "jade"], [null, "stick", null], [null, "stick", null]]
    },
    {
        id: "jade-axe", name: "Hache en Jade",
        category: "tool", material: "mineral", source: "", sourceId: "",
        img: "../src/assets/tools/jade_axe.png",
        description: "Aussi efficace pour abattre des arbres que pour fendre des boucliers.",
        lore: "",
        stats: { damage: 9, durability: 438, attackSpeed: 0.9, special: "" },
        grid: [["jade", "jade", null], ["jade", "stick", null], [null, "stick", null]]
    },
    {
        id: "jade-shovel", name: "Pelle en Jade",
        category: "tool", material: "mineral", source: "", sourceId: "",
        img: "../src/assets/tools/jade_shovel.png",
        description: "Creuse la terre avec une fluidité déconcertante.",
        lore: "",
        stats: { damage: 4.5, durability: 438, attackSpeed: 1.0, special: "" },
        grid: [[null, "jade", null], [null, "stick", null], [null, "stick", null]]
    },
    {
        id: "jade-hoe", name: "Houe en Jade",
        category: "tool", material: "mineral", source: "", sourceId: "",
        img: "../src/assets/tools/jade_hoe.png",
        description: "L'outil ultime pour les fermiers qui ont le goût du luxe.",
        lore: "",
        stats: { damage: 1, durability: 438, attackSpeed: 3.0, special: "" },
        grid: [["jade", "jade", null], [null, "stick", null], [null, "stick", null]]
    },
    {
        id: "jade-helmet", name: "Casque en Jade",
        category: "armor", material: "mineral", source: "", sourceId: "",
        img: "../src/assets/tools/jade_helmet.png",
        description: "Une protection crânienne ornée de reflets vert émeraude.",
        lore: "",
        stats: { protection: 3, durability: 264, toughness: 1, special: "" },
        grid: [["jade", "jade", "jade"], ["jade", null, "jade"], [null, null, null]]
    },
    {
        id: "jade-chestplate", name: "Plastron en Jade",
        category: "armor", material: "mineral", source: "", sourceId: "",
        img: "../src/assets/tools/jade_chestplate.png",
        description: "Un plastron massif offrant une défense robuste et légère.",
        lore: "",
        stats: { protection: 7, durability: 384, toughness: 1, special: "" },
        grid: [["jade", null, "jade"], ["jade", "jade", "jade"], ["jade", "jade", "jade"]]
    },
    {
        id: "jade-leggings", name: "Jambières en Jade",
        category: "armor", material: "mineral", source: "", sourceId: "",
        img: "../src/assets/tools/jade_leggings.png",
        description: "Des jambières articulées sculptées dans la pierre fine.",
        lore: "",
        stats: { protection: 5, durability: 360, toughness: 1, special: "" },
        grid: [["jade", "jade", "jade"], ["jade", null, "jade"], ["jade", null, "jade"]]
    },
    {
        id: "jade-boots", name: "Bottes en Jade",
        category: "armor", material: "mineral", source: "", sourceId: "",
        img: "../src/assets/tools/jade_boots.png",
        description: "Des bottes silencieuses et solides.",
        lore: "",
        stats: { protection: 3, durability: 312, toughness: 1, special: "" },
        grid: [[null, null, null], ["jade", null, "jade"], ["jade", null, "jade"]]
    },
    {
        id: "ruby-sword", name: "Épée en Rubis",
        category: "weapon", material: "mineral", source: "", sourceId: "",
        img: "../src/assets/tools/ruby_sword.png",
        description: "Une épée tranchante, taillée dans du rubis pur, le minerais le plus puissant du mod.",
        lore: "",
        stats: { damage: 7.5, durability: 1734, attackSpeed: 1.6, special: "" },
        grid: [[null, "ruby", null], [null, "ruby", null], [null, "stick", null]]
    },
    {
        id: "ruby-pickaxe", name: "Pioche en Rubis",
        category: "tool", material: "mineral", source: "", sourceId: "",
        img: "../src/assets/tools/ruby_pickaxe.png",
        description: "Idéale pour extraire les minerais les plus précieux avec élégance.",
        lore: "",
        stats: { damage: 5.5, durability: 1734, attackSpeed: 1.2, special: "" },
        grid: [["ruby", "ruby", "ruby"], [null, "stick", null], [null, "stick", null]]
    },
    {
        id: "ruby-axe", name: "Hache en Rubis",
        category: "tool", material: "mineral", source: "", sourceId: "",
        img: "../src/assets/tools/ruby_axe.png",
        description: "Aussi efficace pour abattre des arbres que pour fendre des boucliers.",
        lore: "",
        stats: { damage: 9.5, durability: 1734, attackSpeed: 0.9, special: "" },
        grid: [["ruby", "ruby", null], ["ruby", "stick", null], [null, "stick", null]]
    },
    {
        id: "ruby-shovel", name: "Pelle en Rubis",
        category: "tool", material: "mineral", source: "", sourceId: "",
        img: "../src/assets/tools/ruby_shovel.png",
        description: "Creuse la terre avec une fluidité déconcertante.",
        lore: "",
        stats: { damage: 6, durability: 1734, attackSpeed: 1.0, special: "" },
        grid: [[null, "ruby", null], [null, "stick", null], [null, "stick", null]]
    },
    {
        id: "ruby-hoe", name: "Houe en Rubis",
        category: "tool", material: "mineral", source: "", sourceId: "",
        img: "../src/assets/tools/ruby_hoe.png",
        description: "L'outil ultime pour les fermiers qui ont le goût du luxe.",
        lore: "",
        stats: { damage: 1.5, durability: 1734, attackSpeed: 4.0, special: "" },
        grid: [["ruby", "ruby", null], [null, "stick", null], [null, "stick", null]]
    },












    {
        id: "primitive-slingshot", name: "Lance-Pierre Primitif",
        category: "weapon", material: "primitive", source: "", sourceId: "",
        img: "../src/assets/tools/primitive_slingshot.png",
        description: "Une arme fabriquée en matière végétale tirant des pierres donnant un grand recul aux entités touchées.",
        lore: "",
        stats: { damage: 2, durability: 211, attackSpeed: 1.0, special: "Tire des pierres." },
        grid: [["stick", null, "stick"], ["string", "plant-fiber", "string"], [null, "stick", null]]
    },
    {
        id: "primitive-spear", name: "Lance Primitive",
        category: "weapon", material: "primitive", source: "", sourceId: "",
        img: "../src/assets/tools/primitive_spear_2d.png",
        description: "Une arme de mêlée ainsi qu'à distance, parfait pour la chasse.",
        lore: "",
        stats: { damage: 2, durability: 211, attackSpeed: 1.0, special: "Peut être lancée." },
        grid: [[null, "tiger-fur", "predator-tooth"], [null, "stick", "tiger-fur"], ["stick", null, null]]
    },
    {
        id: "primitive-blowpipe", name: "Sarbacane Primitive",
        category: "weapon", material: "primitive", source: "", sourceId: "",
        img: "../src/assets/tools/maya_blowpipe.png",
        description: "Une arme à distance tirant des darts en bois.",
        lore: "",
        stats: { damage: 2, durability: 211, attackSpeed: 1.0, special: "Tire des darts en bois." },
        grid: [[null, null, null], [null, null, null], [null, null, null]]
    },
    {
        id: "primitive-sickle", name: "Faucille Primitive",
        category: "tool", material: "primitive", source: "", sourceId: "",
        img: "../src/assets/tools/primitive_sickle.png",
        description: "Un outil parfait pour récolter des fibres végétales en cassant de l'herbe, très utile pour fabriquer des outils primitifs.",
        lore: "",
        stats: { damage: 0, durability: 211, attackSpeed: 1.0, special: "Peut récolter des fibres végétales en cassant de l'herbe." },
        grid: [[null, null, null], [null, null, null], [null, null, null]]
    }
];

const CATEGORY_CONFIG = {
    weapon: { label: "Arme", icon: "⚔️", color: "var(--orange2)" },
    armor: { label: "Armure", icon: "🛡️", color: "var(--blue2)" },
    tool: { label: "Outil", icon: "⛏️", color: "var(--green2)" },
    special: { label: "Spécial", icon: "✨", color: "var(--purple)" }
};
const MATERIAL_CONFIG = {
    animal: { label: "Animal", img: "../src/assets/tools/animal.png", color: "var(--brown2)" },
    mineral: { label: "Minéral", img: "../src/assets/tools/mineral.png", color: "var(--text3)" },
    mixed: { label: "Mixte", img: "../src/assets/tools/mixed.png", color: "var(--blue2)" },
    primitive: { label: "Primitif", img: "../src/assets/tools/primitive.png", color: "var(--orange2)" }
};
const STAT_MAX = { damage: 15, durability: 3000, attackSpeed: 5.0, protection: 15 };

document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initCounters();
    renderSections();
    initFilters();
    initModal();
    initNavbar();
    initReveal();
    initCarousel();
    renderMaterialsGlossary();
});

function initParticles() {
    const c = document.getElementById('heroParticles');
    if (!c) return;
    const colors = ['#52c45a', '#d4641a', '#5abadc', '#ba7fd4'];
    for (let i = 0; i < 30; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.cssText = `left:${Math.random() * 100}%;width:${Math.random() * 3 + 2}px;height:${Math.random() * 3 + 2}px;animation-duration:${Math.random() * 10 + 8}s;animation-delay:${Math.random() * 8}s;background:${colors[Math.floor(Math.random() * colors.length)]};border-radius:1px;`;
        c.appendChild(p);
    }
}

function initCounters() {
    const set = (sel, val) => document.querySelectorAll(sel).forEach(el => { el.dataset.target = val; el.textContent = '0'; });
    set('.stat-tools-total', TOOLS.length);
    set('.stat-weapons', TOOLS.filter(t => t.category === 'weapon').length);
    set('.stat-armors', TOOLS.filter(t => t.category === 'armor').length);
    set('.stat-specials', TOOLS.filter(t => t.category === 'special').length);
    set('.stat-materials', [...new Set(TOOLS.flatMap(t => t.grid.flat().filter(Boolean)))].length);
}

function animateNumber(el) {
    if (el.dataset.animating || el.dataset.animated) return;
    const target = parseFloat(el.dataset.target);
    if (isNaN(target)) return;
    el.dataset.animating = 'true';
    let start = null;
    const step = ts => {
        if (!start) start = ts;
        const prog = Math.min((ts - start) / 900, 1);
        const ease = prog < 0.5 ? 2 * prog * prog : 1 - Math.pow(-2 * prog + 2, 2) / 2;
        el.textContent = Math.floor(ease * target);
        if (prog < 1) requestAnimationFrame(step);
        else { el.textContent = target; el.dataset.animated = 'true'; delete el.dataset.animating; }
    };
    requestAnimationFrame(step);
}

function renderStatBar(label, value, max, color, prefix = '') {
    if (!value) return '';
    const pct = Math.min((value / max) * 100, 100);
    return `<div class="tool-stat-row"><span class="tool-stat-label">${label}</span><div class="tool-stat-bar"><div class="tool-stat-fill" style="width:${pct}%;background:${color}"></div></div><span class="tool-stat-value">${prefix}${Number.isInteger(value) ? value : value.toFixed(1)}</span></div>`;
}

function renderToolCard(tool) {
    const cat = CATEGORY_CONFIG[tool.category] || {};
    const mat = MATERIAL_CONFIG[tool.material] || {};
    const s = tool.stats;
    const armorBadge = tool.armor ? `<div class="tool-armor-badge"><span>🛡️ ${tool.armor.protection} PV</span><span>${tool.armor.slot}</span></div>` : '';
    return `
<div class="tool-card reveal" data-category="${tool.category}" data-material="${tool.material}" data-id="${tool.id}" onclick="openToolModal('${tool.id}')">
  <div class="tool-card-thumb-wrap">
    <img class="tool-img" src="${tool.img}" alt="${tool.name}" />
    <span class="tool-cat-badge-corner" style="color:${cat.color}">${cat.icon} ${cat.label}</span>
  </div>
  <div class="tool-card-body">
    <div class="tool-source">${tool.sourceId && tool.source ? `<a href="../pages/${tool.sourceId}.html" class="tool-source-link" onclick="event.stopPropagation()"><img class="source-head-icon" src="../src/assets/heads/${tool.sourceId}.png" alt="${tool.source}" /> ${tool.source}</a>`
            : tool.source ? `<span class="tool-source-plain"><img class="mat-icon" src="${mat.img}" alt="${mat.label}" /> ${tool.source}</span>`
                : ''}</div>
    <h3 class="tool-name">${tool.name}</h3>
    <p class="tool-description">${tool.description}</p>
    ${armorBadge}
    <div class="tool-stats">
      ${tool.category === 'armor'
            ? (s.protection > 0 ? renderStatBar('Points d\'armure', s.protection, 10, 'var(--blue2)', '+') : '')
            : (s.damage > 0 ? renderStatBar('Dégâts', s.damage, STAT_MAX.damage, 'var(--orange2)') : '')}
      ${renderStatBar('Durabilité', s.durability === 999 ? 1000 : s.durability, STAT_MAX.durability, 'var(--green2)')}
      ${s.attackSpeed > 0 ? renderStatBar('Vitesse', s.attackSpeed, STAT_MAX.attackSpeed, 'var(--blue2)') : ''}
    </div>
    ${s.special ? `<div class="tool-special"><span class="tool-special-icon">⚡</span><span>${s.special}</span></div>` : ''}
  </div>
  <div class="tool-card-footer">
    <span class="tool-material-badge" style="color:${mat.color}"><img class="mat-icon" src="${mat.img}" alt="${mat.label}" /> ${mat.label}</span>
    <button class="tool-recipe-btn" onclick="event.stopPropagation();openToolModal('${tool.id}')">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
      Recette
    </button>
  </div>
</div>`;
}

let revealObserver;

const sectionState = {
    animal: { cat: 'all' },
    mineral: { cat: 'all' },
    mixed: { cat: 'all' },
    primitive: { cat: 'all' },
};

function renderSection(matKey) {
    const gridId = { animal: 'toolsGridAnimal', mineral: 'toolsGridMineral', mixed: 'toolsGridMixed', primitive: 'toolsGridPrimitive' }[matKey];
    const countSel = `.tools-showing-count-${matKey}`;
    const grid = document.getElementById(gridId);
    if (!grid) return;
    const catFilter = sectionState[matKey].cat;
    let filtered = TOOLS.filter(t => t.material === matKey);
    if (catFilter !== 'all') filtered = filtered.filter(t => t.category === catFilter);
    grid.innerHTML = filtered.length
        ? filtered.map(renderToolCard).join('')
        : `<div class="tools-empty"><div class="tools-empty-icon">🔍</div><p>Aucun outil ne correspond à ces filtres.</p></div>`;
    grid.querySelectorAll('.reveal').forEach(el => revealObserver?.observe(el));
    document.querySelectorAll(countSel).forEach(el => el.textContent = filtered.length);
}

function renderSections() {
    renderSection('animal');
    renderSection('mineral');
    renderSection('mixed');
    renderSection('primitive');
}

function initFilters() {
    ['animal', 'mineral', 'mixed', 'primitive'].forEach(matKey => {
        document.querySelectorAll(`[data-cat-filter-${matKey}]`).forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll(`[data-cat-filter-${matKey}]`).forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                sectionState[matKey].cat = btn.dataset[`catFilter${matKey.charAt(0).toUpperCase() + matKey.slice(1)}`];
                renderSection(matKey);
            });
        });
    });
}

function renderCraftingGrid(grid) {
    return `<div class="crafting-grid">${grid.flat().map(id => {
        if (!id) return `<div class="crafting-slot empty"></div>`;
        const item = CRAFTING_ITEMS[id];
        if (!item) return `<div class="crafting-slot empty"></div>`;
        return `<div class="crafting-slot filled" title="${item.name}" style="--item-color:${item.color}"><img class="crafting-img" src="${item.img}" alt="${item.name}" /><div class="crafting-tooltip">${item.name}</div></div>`;
    }).join('')}</div>`;
}

function renderMaterialsList(tool) {
    const map = {};
    tool.grid.flat().filter(Boolean).forEach(id => map[id] = (map[id] || 0) + 1);
    return Object.entries(map).map(([id, count]) => {
        const item = CRAFTING_ITEMS[id];
        return item ? `<div class="modal-material-item"><img class="modal-material-img" src="${item.img}" alt="${item.name}" /><span class="modal-material-name">${item.name}</span><span class="modal-material-count">×${count}</span></div>` : '';
    }).join('');
}

function initModal() {
    const overlay = document.getElementById('toolModalOverlay');
    if (!overlay) return;
    overlay.addEventListener('click', e => { if (e.target === overlay) closeToolModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeToolModal(); });
    document.getElementById('modalCloseBtn')?.addEventListener('click', closeToolModal);
}

function openToolModal(toolId) {
    const tool = TOOLS.find(t => t.id === toolId);
    if (!tool) return;
    const overlay = document.getElementById('toolModalOverlay');
    const cat = CATEGORY_CONFIG[tool.category] || {};
    const modalEmoji = document.getElementById('modalEmoji');
    modalEmoji.innerHTML = `<img class="modal-img" src="${tool.img}" alt="${tool.name}" />`;
    document.getElementById('modalName').textContent = tool.name;
    document.getElementById('modalDescription').textContent = tool.description;
    const loreEl = document.getElementById('modalLore');
    loreEl.textContent = tool.lore;
    loreEl.style.display = tool.lore ? '' : 'none';
    document.getElementById('modalCatBadge').textContent = `${cat.icon} ${cat.label}`;
    document.getElementById('modalCatBadge').style.color = cat.color;
    const s = tool.stats;
    const armorLines = tool.armor ? `<div class="modal-stat-item"><span class="modal-stat-icon">🛡️</span><span class="modal-stat-label">Protection</span><span class="modal-stat-val">${tool.armor.protection}</span></div><div class="modal-stat-item"><span class="modal-stat-icon">💪</span><span class="modal-stat-label">Robustesse</span><span class="modal-stat-val">${tool.armor.toughness}</span></div><div class="modal-stat-item"><span class="modal-stat-icon">📍</span><span class="modal-stat-label">Emplacement</span><span class="modal-stat-val">${tool.armor.slot}</span></div>` : '';
    document.getElementById('modalStats').innerHTML = `
    ${s.damage > 0 ? `<div class="modal-stat-item"><span class="modal-stat-icon">⚔️</span><span class="modal-stat-label">Dégâts</span><span class="modal-stat-val">${s.damage}</span></div>` : ''}
    <div class="modal-stat-item"><span class="modal-stat-icon">🔩</span><span class="modal-stat-label">Durabilité</span><span class="modal-stat-val">${s.durability === 999 ? '∞' : s.durability}</span></div>
    ${s.attackSpeed > 0 ? `<div class="modal-stat-item"><span class="modal-stat-icon">⚡</span><span class="modal-stat-label">Vitesse</span><span class="modal-stat-val">${s.attackSpeed.toFixed(1)}/s</span></div>` : ''}
    ${armorLines}
    ${s.special ? `<div class="modal-stat-item modal-stat-special"><span class="modal-stat-icon">🌟</span><span class="modal-stat-label">Effet Spécial</span><span class="modal-stat-val">${s.special}</span></div>` : ''}`;
    const isCraftable = tool.grid.flat().some(Boolean);
    document.getElementById('modalCraftingGrid').innerHTML = isCraftable
        ? renderCraftingGrid(tool.grid)
        : `<div class="crafting-unavailable">
            <div class="crafting-unavailable-icon">✕</div>
            <p class="crafting-unavailable-text">Cet item n'est pas craftable.</p>
        </div>`;

    const materialsTitle = document.querySelector('.modal-section-title[data-materials-title]');
    if (materialsTitle) materialsTitle.style.display = isCraftable ? '' : 'none';
    document.getElementById('modalMaterials').innerHTML = isCraftable ? renderMaterialsList(tool) : '';
    const src = document.getElementById('modalSource');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeToolModal() {
    document.getElementById('toolModalOverlay').classList.remove('open');
    document.body.style.overflow = '';
}

function initNavbar() {
    const nav = document.getElementById('navbar');
    const prog = document.getElementById('navProgress');
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 60);
        const pct = document.documentElement.scrollHeight - window.innerHeight > 0
            ? (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100 : 0;
        if (prog) prog.style.width = pct + '%';
    });
}

function initReveal() {
    revealObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                e.target.querySelectorAll('[data-target]').forEach(animateNumber);
            }
        });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

function initCarousel() {
    const vp = document.querySelector('.carousel-viewport');
    const track = document.getElementById('carouselTrack');
    const dots = document.getElementById('carouselDots');
    if (!vp || !track || !dots) return;
    const slides = Array.from(track.querySelectorAll('.carousel-slide'));
    const N = slides.length; if (!N) return;
    track.appendChild(slides[0].cloneNode(true));
    track.insertBefore(slides[N - 1].cloneNode(true), track.firstChild);
    let pos = 1, locked = false, auto = null;
    slides.forEach((_, i) => {
        const d = document.createElement('div');
        d.className = 'carousel-dot' + (i === 0 ? ' active' : '');
        d.onclick = () => { go(i + 1); reset(); };
        dots.appendChild(d);
    });
    function go(p, anim = true) {
        if (locked && anim) return; locked = anim;
        track.style.transition = anim ? 'transform .6s cubic-bezier(.25,.46,.45,.94)' : 'none';
        pos = p; track.style.transform = `translateX(-${pos * vp.offsetWidth}px)`;
        let idx = pos - 1; if (pos === 0) idx = N - 1; if (pos === N + 1) idx = 0;
        document.querySelectorAll('.carousel-dot').forEach((d, i) => d.classList.toggle('active', i === idx));
    }
    track.addEventListener('transitionend', () => { locked = false; if (pos === 0) go(N, false); else if (pos === N + 1) go(1, false); });
    function reset() { clearInterval(auto); auto = setInterval(() => go(pos + 1), 5000); }
    document.getElementById('carouselPrev')?.addEventListener('click', () => { go(pos - 1); reset(); });
    document.getElementById('carouselNext')?.addEventListener('click', () => { go(pos + 1); reset(); });
    window.addEventListener('resize', () => go(pos, false));
    go(1, false); reset();
}

function renderMaterialsGlossary() {
    const container = document.getElementById('materialsGlossary');
    if (!container) return;
    const used = [...new Set(TOOLS.flatMap(t => t.grid.flat().filter(Boolean)))].sort((a, b) =>
        (CRAFTING_ITEMS[a]?.name || '').localeCompare(CRAFTING_ITEMS[b]?.name || '', 'fr'));
    container.innerHTML = used.map(id => {
        const item = CRAFTING_ITEMS[id]; if (!item) return '';
        const count = TOOLS.filter(t => t.grid.flat().includes(id)).length;
        return `<div class="glossary-item reveal"><div class="glossary-emoji" style="background:${item.color}22;border-color:${item.color}44"><img src="${item.img}" alt="${item.name}" style="width:28px;height:28px;object-fit:contain;image-rendering:pixelated;" /></div><div class="glossary-info"><span class="glossary-name">${item.name}</span><span class="glossary-usage">Utilisé dans <strong style="color:${item.color}">${count}</strong> recettes${count > 1 ? 's' : ''}</span></div></div>`;
    }).join('');
    container.querySelectorAll('.reveal').forEach(el => revealObserver?.observe(el));
}