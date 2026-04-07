const _TYPE_LABELS = {
    terrestrial: "Terrestre",
    aquatic: "Aquatique",
    aerial: "Aérien"
};

const TYPE_COLORS_MAP = {
    "Terrestre": "#b48862",
    "Aquatique": "#6686bf",
    "Aérien": "#cce8e3"
};

const TEMPER_COLORS_MAP = {
    "Agressif": "#ef5350",
    "Passif": "var(--green2)",
    "Neutre": "var(--orange2)"
};

const RARITY_STYLES = {
    "Commun": { color: "var(--text2)", border: "var(--border)", bg: "rgba(168,176,144,.15)" },
    "Peu Commun": { color: "var(--green2)", border: "var(--green)", bg: "rgba(58,122,60,.2)" },
    "Rare": { color: "var(--blue2)", border: "var(--blue)", bg: "rgba(58,122,180,.2)" },
    "Épique": { color: "var(--purple)", border: "#9c5ab4", bg: "rgba(186,127,212,.15)" },
    "Légendaire": { color: "var(--orange2)", border: "var(--orange)", bg: "rgba(212,100,26,.2)" }
};

const COSMETICS_RARITY = {
    "Commun": { color: "#ccd0c8", glow: "rgba(168,176,144,.45)", bg: "rgba(168,176,144,.08)", border: "rgba(168,176,144,.5)" },
    "Rare": { color: "#5abadc", glow: "rgba(90,186,220,.50)", bg: "rgba(58,122,180,.10)", border: "rgba(90,186,220,.55)" },
    "Épique": { color: "#ba7fd4", glow: "rgba(186,127,212,.50)", bg: "rgba(166,109,168,.10)", border: "rgba(186,127,212,.55)" },
    "Légendaire": { color: "#f09d30ff", glow: "rgba(240,120,48,.55)", bg: "rgba(212,100,26,.12)", border: "rgba(240,120,48,.60)" },
    "Halloween": { color: "#c4521dff", glow: "rgba(187, 29, 29, 0.55)", bg: "rgba(212, 54, 26, 0.12)", border: "rgba(211, 72, 37, 0.6)" }
};

const ARCHETYPE_STYLES = {
    "TANK": { label: "Tank", color: "#4a9edd", bg: "rgba(74,158,221,.15)", border: "rgba(74,158,221,.4)", img: "../src/assets/archetype_tank.png" },
    "ASSASSIN": { label: "Assassin", color: "#c0392b", bg: "rgba(192,57,43,.15)", border: "rgba(192,57,43,.4)", img: "../src/assets/archetype_assassin.png" },
    "MARAUDER": { label: "Maraudeur", color: "#d64fc0", bg: "rgba(214,79,192,.15)", border: "rgba(214,79,192,.4)", img: "../src/assets/archetype_marauder.png" },
    "HEALER": { label: "Soigneur", color: "#4caf50", bg: "rgba(76,175,80,.15)", border: "rgba(76,175,80,.4)", img: "../src/assets/archetype_healer.png" },
    "BERSERKER": { label: "Berserker", color: "#e67e22", bg: "rgba(230,126,34,.15)", border: "rgba(230,126,34,.4)", img: "../src/assets/archetype_berserker.png" },
    "SCOUT": { label: "Éclaireur", color: "#f1c40f", bg: "rgba(241,196,15,.12)", border: "rgba(241,196,15,.4)", img: "../src/assets/archetype_scout.png" },
    "NORMAL": { label: "Normal", color: "#dde3dc", bg: "rgba(221,227,220,.10)", border: "rgba(221,227,220,.3)", img: "../src/assets/archetype_normal.png" }
};

const REGIME_COLORS = {
    "Carnivore": { color: "#da7978ff" },
    "Omnivore": { color: "#b8986fff" },
    "Herbivore": { color: "#84d888ff" }
};

const _TAG_ICONS = {
    "Agressif": "",
    "Neutre": "",
    "Passif": "",
    "Apprivoisable": "",
    "Non-Apprivoisable": "",
    "Chevauchable": "",
    "Non-Chevauchable": "",
};

function renderAnimalPage() {

    const _e = getEntity(ENTITY_ID);
    const matchedLabels = _e.types.filter(t => _TYPE_LABELS[t]).map(t => _TYPE_LABELS[t]);
    const mainTypeTag = matchedLabels.join(" & ");
    const ANIMAL_CATEGORY = mainTypeTag || _e.types[0];
    const ANIMAL_TEMPERAMENT = _e.temperament;
    const ANIMAL_TEMPER_COLOR = TEMPER_COLORS_MAP[ANIMAL_TEMPERAMENT] ?? "var(--text2)";
    const ANIMAL_TAMEABLE = _e.apprivoisable ? "✓ Oui" : "✗ Non";
    const ANIMAL_TAMEABLE_COLOR = _e.apprivoisable ? "var(--green2)" : "#ef5350";
    const ANIMAL_RIDEABLE = _e.chevauchable ? "✓ Oui" : "✗ Non";
    const ANIMAL_RIDEABLE_COLOR = _e.chevauchable ? "var(--green2)" : "#ef5350";
    const SPAWN_BIOME = _e.biome.replace(/^\S+\s*/, "");
    const TAGS = [
        ...(mainTypeTag ? [mainTypeTag] : []),
        ANIMAL_TEMPERAMENT,
        ..._e.tags.map(t => `${_TAG_ICONS[t] ?? ""} ${t}`.trim())
    ];

    document.title = `${_e.nom} - Operation W.I.L.D. Wiki`;
    document.querySelector(".hero-animal-bg").style.backgroundImage = `url(${HERO_WALLPAPER})`;
    document.querySelector(".hero-animal-bg").style.backgroundPosition = `center ${HERO_WALLPAPER_OFFSET_Y}%`;
    document.getElementById("breadcrumb-nom").textContent = _e.nom;
    document.getElementById("hero-nom").textContent = _e.nom;
    document.getElementById("hero-latin").textContent = _e.nomLatin;

    const heroRareteEl = document.getElementById("hero-rarete");
    const _rs = RARITY_STYLES[_e.rarete] ?? RARITY_STYLES["Commun"];
    heroRareteEl.textContent = _e.rarete;
    heroRareteEl.style.color = _rs.color;
    heroRareteEl.style.borderColor = _rs.border;
    heroRareteEl.style.background = _rs.bg;

    document.getElementById("hero-tags").innerHTML = TAGS.map(t => {
        const parts = t.split(" & ");
        if (parts.length > 1) {
            const inner = parts.map((part, i) => {
                const color = TYPE_COLORS_MAP[part] ?? "var(--text2)";
                const sep = i < parts.length - 1 ? ' <span style="color:white;font-weight:700;">&</span> ' : "";
                return `<span style="color:${color};font-weight:700;">${part}</span>${sep}`;
            }).join("");
            return `<span class="animal-hero-tag">${inner}</span>`;
        }
        const textColor = TEMPER_COLORS_MAP[t] ?? TYPE_COLORS_MAP[t];
        const style = textColor ? `style="color:${textColor};font-weight:700;"` : "";
        return `<span class="animal-hero-tag" ${style}>${t}</span>`;
    }).join("");

    document.getElementById("qi-pv").textContent = MAX_HEALTH + " PV";
    document.getElementById("qi-degats").textContent = DAMAGES;
    document.getElementById("qi-armure").textContent = KNOCKBACK_RESISTANCE;
    document.getElementById("qi-vitesse").textContent = SPEED;
    document.getElementById("qi-biome").textContent = SPAWN_BIOME;

    document.getElementById("portrait-img").src = PORTRAITS[0];
    document.getElementById("si-nom").textContent = _e.nom;
    document.getElementById("si-taming").innerHTML = `${ANIMAL_TAMING_EXP.toFixed(1)} <img src="../src/assets/pages/taming_exp.png" style="width:25px;vertical-align:middle;margin-left:6px;">`;
    document.getElementById("si-latin").textContent = _e.nomLatin;
    document.getElementById("si-rarete").textContent = _e.rarete;
    document.getElementById("si-rarete").style.color = _rs.color;

    const _arch = ARCHETYPE_STYLES[ARCHETYPE] ?? ARCHETYPE_STYLES["NORMAL"];
    const archEl = document.getElementById("si-archetype");
    archEl.innerHTML = `<img src="${_arch.img}" alt="${_arch.label}" style="width:22px;height:22px;vertical-align:middle;margin-bottom:5px;margin-right:8px;image-rendering:pixelated;">${_arch.label}`;
    archEl.style.color = _arch.color;
    archEl.style.background = _arch.bg;
    archEl.style.border = `1px solid ${_arch.border}`;
    archEl.style.borderRadius = "4px";
    archEl.style.padding = "1px 7px";
    archEl.style.fontSize = ".82rem";
    archEl.style.fontWeight = "600";

    const catElem = document.getElementById("si-categorie");
    const catParts = ANIMAL_CATEGORY.split(" & ");
    if (catParts.length > 1) {
        catElem.innerHTML = catParts.map((part, i) => {
            const color = TYPE_COLORS_MAP[part] ?? "var(--text2)";
            const sep = i < catParts.length - 1 ? ' <span style="color:white;font-weight:700;">&</span> ' : "";
            return `<span style="color:${color};font-weight:700;">${part}</span>${sep}`;
        }).join("");
    } else {
        catElem.textContent = ANIMAL_CATEGORY;
        catElem.style.color = TYPE_COLORS_MAP[ANIMAL_CATEGORY] ?? "var(--text2)";
    }

    document.getElementById("si-temperament").textContent = ANIMAL_TEMPERAMENT;
    document.getElementById("si-temperament").style.color = ANIMAL_TEMPER_COLOR;

    const _reg = REGIME_COLORS[REGIME] ?? { color: "var(--text2)" };
    const regEl = document.getElementById("si-regime");
    regEl.textContent = REGIME;
    regEl.style.color = _reg.color;
    document.getElementById("si-apprivoisable").textContent = ANIMAL_TAMEABLE;
    document.getElementById("si-apprivoisable").style.color = ANIMAL_TAMEABLE_COLOR;
    document.getElementById("si-chevauchable").textContent = ANIMAL_RIDEABLE;
    document.getElementById("si-chevauchable").style.color = ANIMAL_RIDEABLE_COLOR;
    document.getElementById("si-variantes").textContent = VARIANTS.length;

    document.getElementById("difficulty-icon").src = DIFFICULTY_ICON;

    let idx = 0;
    setInterval(() => {
        idx = (idx + 1) % PORTRAITS.length;
        document.getElementById("portrait-img").src = PORTRAITS[idx];
    }, 2000);

    document.getElementById("description-content").innerHTML =
        DESCRIPTION.map(p => `<p>${p}</p>`).join("");

    document.getElementById("behaviors-grid").innerHTML = BEHAVIORS.map(b => `
        <div class="behaviour-card">
            <span class="behaviour-icon">${b.icon}</span>
            <div class="behaviour-title">${b.titre}</div>
            <div class="behaviour-desc">${b.desc}</div>
        </div>`).join("");

    document.getElementById("stats-list").innerHTML = STATS.map(s => {
        const pct = Math.round(s.val / s.max * 100);
        const label = s.affichage || `${s.val} / ${s.max}`;
        return `<div class="stat-row">
            <div class="stat-header">
                <span class="stat-name">${s.nom}</span>
                <span class="stat-val">${label}</span>
            </div>
            <div class="stat-bar-bg">
                <div class="stat-bar-fill" style="width:0%;background:${s.couleur}" data-width="${pct}%"></div>
            </div>
        </div>`;
    }).join("");

    if (typeof ANIMATIONS !== "undefined" && ANIMATIONS.length > 0) {
        document.getElementById("section-animations").style.display = "";
        document.getElementById("animations-grid").innerHTML = ANIMATIONS.map((a, i) => `
            <div class="anim-card ${i === 0 ? "active" : ""}" data-index="${i}">
                <div class="anim-preview">
                    <img src="${a.src}" alt="${a.label}" loading="lazy" />
                </div>
                <div class="anim-label">${a.label}</div>
            </div>
        `).join("");

        document.querySelectorAll(".anim-card").forEach(card => {
            card.addEventListener("click", () => {
                document.querySelectorAll(".anim-card").forEach(c => c.classList.remove("active"));
                card.classList.add("active");
            });
        });
    } else {
        document.getElementById("section-animations").style.display = "none";
    }

    document.getElementById("journal-content").innerHTML =
        `<p><em style="color:var(--text3);">— ${ADVENTURER_MANUSCRIPT.date} —</em></p>` +
        ADVENTURER_MANUSCRIPT.texte.map(p => `<p>${p}</p>`).join("") +
        `<p style="color:var(--text3);font-style:italic;font-size:.82rem;margin-top:.5rem;">— ${ADVENTURER_MANUSCRIPT.auteur}</p>`;

    document.getElementById("taming-steps").innerHTML = TAMING.etapes.map((e, i) => `
        <div class="taming-step">
            <div class="taming-num">${i + 1}</div>
            <div class="taming-text"><h4>${e.titre}</h4><p>${e.desc}</p></div>
        </div>`).join("");
    document.getElementById("taming-warning").innerHTML = `<span class="warning-icon">⚠️</span><p class="warning-text"><strong>Attention :</strong> ${TAMING.warning}</p>`;
    document.getElementById("taming-tip").innerHTML = `<span class="warning-icon">💡</span><p class="tip-text"><strong>Conseil :</strong> ${TAMING.tip}</p>`;

    document.getElementById("mount-grid").innerHTML = MOUNT_ABILITIES.map(m => `
        <div class="mount-item" style="--mount-accent:${m.accent};">
            <div class="mount-item-icon-wrap">${m.icon}</div>
            <div class="mount-item-content">
                <div class="mount-item-header">
                    <span class="mount-item-title">${m.titre}</span>
                    <span class="mount-cooldown-badge">
                        <span class="cd-icon">⏱️</span>${m.cooldown}
                    </span>
                </div>
                <div class="mount-item-desc">${m.desc}</div>
            </div>
        </div>`).join("");

    document.getElementById("variants-grid").innerHTML = VARIANTS.map(v => `
        <div class="variant-card">
            <img src="${v.img}" style="image-rendering:pixelated;object-fit:contain;" />
            <div class="variant-info">
                <div class="variant-name">${v.nom}</div>
                <span class="variant-badge" style="${v.badgeStyle}">${v.badge}</span>
                <div class="variant-taux">Taux d'obtention : <b>${v.taux}</b></div>
            </div>
        </div>`).join("");

    document.getElementById("saddle-img").src = SADDLE.img;
    document.getElementById("saddle-name").textContent = SADDLE.nom;
    document.getElementById("saddle-ingredients").innerHTML = SADDLE.ingredients.map(ing => `
        <div class="saddle-ing-row">
            <div class="saddle-ing-icon">
                <img src="${ing.img}" alt="${ing.nom}" />
                <span class="saddle-ing-qty">x${ing.quantite}</span>
            </div>
            <span class="saddle-ing-name">${ing.nom}</span>
        </div>`).join("");

    document.getElementById("drops-grid").innerHTML = DROPS.map(d => {
        const icone = d.img ? `<img src="${d.img}" style="width:40px;vertical-align:middle;">` : d.icon;
        return `<div class="drop-row">
            <span class="drop-icon">${icone}</span>
            <div class="drop-info">
                <div class="drop-name">${d.nom}</div>
                <div class="drop-detail">${d.detail}</div>
            </div>
            <span class="drop-chance ${d.chanceClasse}">${d.chance}</span>
        </div>`;
    }).join("");

    renderMinecraftMap("biomes-grid", _e, SPAWN_RARITY_MAP);

    document.getElementById("similar-list").innerHTML = SIMILAR_ANIMALS
        .map(id => renderRelatedItem(getEntity(id)))
        .join("");

    document.getElementById("crafting-list").innerHTML = CRAFTING.map(c => `
        <div style="background:var(--bg2);border:1px solid var(--border);border-radius:3px;padding:1rem;">
            <div style="display:flex;align-items:center;gap:10px;font-weight:700;font-size:.88rem;margin-bottom:.5rem;">
                ${c.icon}
                <span>${c.nom}</span>
            </div>
            <div style="font-size:.78rem;color:var(--text3);line-height:1.5;">${c.detail}</div>
        </div>`).join("");

    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
    }, { threshold: 0.08 });
    document.querySelectorAll(".reveal").forEach(el => obs.observe(el));

    const statObs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.querySelectorAll(".stat-bar-fill").forEach(bar => {
                    const w = bar.dataset.width;
                    bar.style.width = "0";
                    requestAnimationFrame(() => setTimeout(() => bar.style.width = w, 100));
                });
                statObs.unobserve(e.target);
            }
        });
    }, { threshold: 0.2 });
    document.querySelectorAll("#section-stats").forEach(el => statObs.observe(el));

    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => navbar.classList.toggle("scrolled", window.scrollY > 60));

    let lockerFilter = "Tous";
    let lockerSelected = COSMETICS.find(s => s.equipped) || COSMETICS[0];
    const TABS = ["Tous", "Commun", "Rare", "Épique", "Légendaire", "Halloween"];

    function updateLockerPreview(skin) {
        const r = COSMETICS_RARITY[skin.rarete] || COSMETICS_RARITY["Commun"];
        document.getElementById("locker-preview-img").src = skin.img;
        document.getElementById("locker-preview-img").alt = skin.nom;
        document.getElementById("locker-preview-name").textContent = skin.nom;

        document.getElementById("locker-preview-desc").innerHTML = skin.desc;

        document.getElementById("locker-preview-rarity").textContent = skin.rarete.toUpperCase();
        document.getElementById("locker-preview-rarity").style.color = r.color;
        document.getElementById("locker-preview-glow").style.background = r.glow;
        document.getElementById("locker-preview-bg").style.background =
            `radial-gradient(ellipse at center bottom, ${r.bg} 0%, transparent 70%)`;
        document.getElementById("locker-preview").style.setProperty("--preview-border", r.color);
    }

    function renderLockerGrid() {
        const filtered = lockerFilter === "Tous"
            ? COSMETICS
            : COSMETICS.filter(s => s.rarete === lockerFilter);

        document.getElementById("locker-grid").innerHTML = filtered.map(skin => {
            const r = COSMETICS_RARITY[skin.rarete] || COSMETICS_RARITY["Commun"];
            const sel = skin.id === lockerSelected.id;
            return `
            <div class="locker-card ${sel ? "selected" : ""}" data-id="${skin.id}"
                 style="--rarity-color:${r.color};--rarity-glow:${r.glow};--rarity-border:${r.border};">
              <div class="locker-card-shine"></div>
              <img src="${skin.img}" alt="${skin.nom}" loading="lazy" />
              <div class="locker-card-name">${skin.nom}</div>
              <div class="locker-card-bottom-bar"></div>
            </div>`;
        }).join("");

        document.querySelectorAll(".locker-card").forEach(card => {
            card.addEventListener("click", () => {
                lockerSelected = COSMETICS.find(s => s.id === card.dataset.id);
                updateLockerPreview(lockerSelected);
                renderLockerGrid();
            });
        });
    }

    function renderLockerTabs() {
        document.getElementById("locker-filter-tabs").innerHTML = TABS.map(tab => `
            <div class="locker-tab ${tab === lockerFilter ? "active" : ""}" data-tab="${tab}">${tab}</div>
        `).join("");
        document.querySelectorAll(".locker-tab").forEach(el => {
            el.addEventListener("click", () => {
                lockerFilter = el.dataset.tab;
                renderLockerTabs();
                renderLockerGrid();
            });
        });
    }

    updateLockerPreview(lockerSelected);
    renderLockerTabs();
    renderLockerGrid();
    initSounds(SOUNDS, SOUND_CATEGORIES);
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

document.addEventListener('DOMContentLoaded', initNavbar);

document.addEventListener("DOMContentLoaded", renderAnimalPage);

document.documentElement.style.setProperty("--animal-accent", ANIMAL_PAGE_AVG_COLOR);