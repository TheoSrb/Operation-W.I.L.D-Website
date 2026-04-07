const BIOME_RARITY_STYLES = {
    common: { label: "Commun", color: "var(--text2)", border: "var(--border)", bg: "rgba(168,176,144,.15)" },
    uncommon: { label: "Peu Commun", color: "var(--green2)", border: "var(--green)", bg: "rgba(58,122,60,.20)" },
    rare: { label: "Rare", color: "var(--blue2)", border: "var(--blue)", bg: "rgba(58,122,180,.20)" },
    epic: { label: "Épique", color: "var(--purple)", border: "#9c5ab4", bg: "rgba(186,127,212,.15)" },
    legendary: { label: "Légendaire", color: "var(--orange2)", border: "var(--orange)", bg: "rgba(212,100,26,.20)" }
};

const FAUNA_RARITY_STYLES = {
    common: { color: "var(--text2)", bg: "rgba(168,176,144,.12)", border: "rgba(168,176,144,.3)" },
    uncommon: { color: "var(--green2)", bg: "rgba(58,122,60,.12)", border: "rgba(82,196,90,.35)" },
    rare: { color: "var(--blue2)", bg: "rgba(58,122,180,.12)", border: "rgba(90,186,220,.35)" },
    epic: { color: "var(--purple)", bg: "rgba(186,127,212,.12)", border: "rgba(186,127,212,.4)" },
    iconic: { color: "var(--purple)", bg: "rgba(186,127,212,.12)", border: "rgba(186,127,212,.4)" },
    legendary: { color: "var(--orange2)", bg: "rgba(212,100,26,.12)", border: "rgba(240,120,48,.4)" }
};

const DANGER_STYLES = {
    high: { color: "#ef5350", bg: "rgba(239,83,80,.12)", border: "rgba(239,83,80,.35)", label: "Élevé" },
    medium: { color: "var(--orange2)", bg: "rgba(212,100,26,.12)", border: "rgba(240,120,48,.35)", label: "Moyen" },
    low: { color: "var(--green2)", bg: "rgba(58,122,60,.12)", border: "rgba(82,196,90,.35)", label: "Faible" }
};

const BLOCK_TAG_STYLES = {
    unique: { color: "var(--orange2)", bg: "rgba(212,100,26,.15)", border: "rgba(240,120,48,.4)" },
    craft: { color: "var(--text2)", bg: "rgba(168,176,144,.12)", border: "rgba(168,176,144,.3)" },
    deco: { color: "var(--blue2)", bg: "rgba(58,122,180,.12)", border: "rgba(90,186,220,.3)" },
    food: { color: "var(--green2)", bg: "rgba(58,122,60,.12)", border: "rgba(82,196,90,.3)" },
    ore: { color: "var(--purple)", bg: "rgba(186,127,212,.12)", border: "rgba(186,127,212,.3)" }
};

function renderThermometer() {
    const container = document.getElementById("thermometer-card");
    if (!container) return;

    const val = (typeof BIOME_TEMP_VALUE !== "undefined") ? BIOME_TEMP_VALUE : 0.5;
    const MIN = -0.5;
    const MAX = 2.0;
    const pct = Math.min(100, Math.max(0, ((val - MIN) / (MAX - MIN)) * 100));

    const zones = [
        { label: "Glaciale", from: 0, to: 16, color: "#4fc3f7" },
        { label: "Froide", from: 16, to: 36, color: "#81d4fa" },
        { label: "Tempérée", from: 36, to: 56, color: "#e0e0e0" },
        { label: "Chaude", from: 56, to: 76, color: "#ffcc80" },
        { label: "Brûlante", from: 76, to: 100, color: "#ef5350" }
    ];

    function getZoneLabel(p) {
        for (const z of zones) if (p >= z.from && p < z.to) return z.label;
        return zones[zones.length - 1].label;
    }

    function lerpColor(a, b, t) {
        const h = s => parseInt(s, 16);
        const r = Math.round(h(a.slice(1, 3)) + t * (h(b.slice(1, 3)) - h(a.slice(1, 3))));
        const g = Math.round(h(a.slice(3, 5)) + t * (h(b.slice(3, 5)) - h(a.slice(3, 5))));
        const bv = Math.round(h(a.slice(5, 7)) + t * (h(b.slice(5, 7)) - h(a.slice(5, 7))));
        return `rgb(${r},${g},${bv})`;
    }
    const stops = ["#4fc3f7", "#81d4fa", "#e0f2f1", "#e0e0e0", "#ffcc80", "#ff8a65", "#ef5350"];
    const stopPct = [0, 16, 26, 36, 56, 76, 100];
    function getMarkerColor(p) {
        for (let i = 0; i < stopPct.length - 1; i++) {
            if (p >= stopPct[i] && p <= stopPct[i + 1]) {
                const t = (p - stopPct[i]) / (stopPct[i + 1] - stopPct[i]);
                return lerpColor(stops[i], stops[i + 1], t);
            }
        }
        return stops[stops.length - 1];
    }

    const markerColor = getMarkerColor(pct);
    const zoneLabel = getZoneLabel(pct);

    container.innerHTML = `
    <div class="sidebar-biome-head">🌡️ Température</div>
    <div class="sidebar-biome-body">

        <!-- Valeur + label de zone -->
        <div class="thermo-header">
            <span class="thermo-value" style="color:${markerColor}">${val.toFixed(1)}</span>
            <span class="thermo-zone-label" style="color:${markerColor}">${zoneLabel}</span>
        </div>

        <!-- Barre gradient -->
        <div class="thermo-track-wrap">
            <div class="thermo-track">
                <!-- Remplissage animé jusqu'à la position -->
                <div class="thermo-fill" style="width:${pct}%;background:${markerColor};"></div>
                <!-- Curseur -->
                <div class="thermo-cursor" style="left:calc(${pct}% - 6px);">
                    <div class="thermo-cursor-inner" style="background:${markerColor};box-shadow:0 0 8px ${markerColor};"></div>
                </div>
            </div>
        </div>

        <!-- Étiquettes de zones sous la barre -->
        <div class="thermo-zones">
            ${zones.map(z => `
            <div class="thermo-zone" style="width:${z.to - z.from}%">
                <div class="thermo-zone-tick" style="background:${z.color}"></div>
                <span class="thermo-zone-name" style="color:${z.color}">${z.label}</span>
            </div>`).join("")}
        </div>

        <!-- Légende min / max -->
        <div class="thermo-minmax">
            <span>−0.5</span>
            <span style="color:var(--text3);font-size:.65rem;">Valeur Minecraft</span>
            <span>2.0</span>
        </div>

    </div>`;

    requestAnimationFrame(() => {
        const fill = container.querySelector(".thermo-fill");
        const cursor = container.querySelector(".thermo-cursor");
        if (fill) fill.style.transition = "width 1.1s cubic-bezier(.4,0,.2,1)";
        if (cursor) cursor.style.transition = "left 1.1s cubic-bezier(.4,0,.2,1)";
    });
}

function renderBiomePage() {

    document.documentElement.style.setProperty("--biome-accent", BIOME_ACCENT);
    document.title = `${BIOME_NOM} — Operation W.I.L.D. Wiki`;

    const bgEl = document.querySelector(".hero-biome-bg");
    if (bgEl) {
        bgEl.style.backgroundImage = `url(${HERO_WALLPAPER})`;
        bgEl.style.backgroundPositionY = `${HERO_WALLPAPER_OFFSET_Y}%`;
    }

    _setText("breadcrumb-nom", BIOME_NOM);
    _setText("hero-biome-nom", BIOME_NOM);
    _setText("hero-biome-subtitle", BIOME_SUBTITLE);
    _setText("hero-biome-mc-id", BIOME_MC_ID);

    const rs = BIOME_RARITY_STYLES[BIOME_RARITY_KEY] ?? BIOME_RARITY_STYLES.common;
    const rarEl = document.getElementById("hero-biome-rarity");
    if (rarEl) {
        rarEl.textContent = rs.label;
        rarEl.style.color = rs.color;
        rarEl.style.borderColor = rs.border;
        rarEl.style.background = rs.bg;
    }

    const tagsEl = document.getElementById("hero-biome-tags");
    if (tagsEl) {
        tagsEl.innerHTML = BIOME_TAGS.map(t =>
            `<span class="hero-biome-tag">${t}</span>`
        ).join("");
    }

    _setText("qi-temperature", BIOME_TEMPERATURE);
    _setText("qi-humidity", BIOME_HUMIDITY);
    _setText("qi-precipitation", BIOME_PRECIPITATION);
    _setText("qi-light", BIOME_LIGHT_AVG);
    _setText("qi-altitude", BIOME_ALTITUDE);
    _setText("qi-canopy", BIOME_CANOPY);

    _setText("si-nom", BIOME_NOM);
    _setText("si-mc-id", BIOME_MC_ID);
    _setText("si-category", BIOME_CATEGORY);
    _setText("si-region", BIOME_REGION);
    _setText("si-climate", BIOME_CLIMATE);
    _setText("si-rarity", rs.label);
    const siRarEl = document.getElementById("si-rarity");
    if (siRarEl) siRarEl.style.color = rs.color;
    _setText("si-temperature", BIOME_TEMPERATURE);
    _setText("si-humidity", BIOME_HUMIDITY);
    _setText("si-altitude", BIOME_ALTITUDE);
    _setText("si-light", BIOME_LIGHT_AVG);
    _setText("si-structures", BIOME_STRUCTURES.length + " types");
    _setText("si-fauna-count", BIOME_FAUNA_SPAWN.length + " espèces");

    renderThermometer();

    const descEl = document.getElementById("description-content");
    if (descEl) {
        descEl.innerHTML = BIOME_DESCRIPTION.map(p => `<p>${p}</p>`).join("");
    }

    const featEl = document.getElementById("biome-features-grid");
    if (featEl) {
        featEl.innerHTML = BIOME_FEATURES.map(f => `
            <div class="biome-feature-card reveal">
                <span class="biome-feature-icon">${f.icon}</span>
                <div class="biome-feature-title">${f.titre}</div>
                <div class="biome-feature-desc">${f.desc}</div>
            </div>`
        ).join("");
    }

    const structEl = document.getElementById("biome-structures-grid");
    if (structEl) {
        structEl.innerHTML = BIOME_STRUCTURES.map(s => `
            <div class="biome-structure-card reveal">
                <div class="biome-structure-header">
                    <span class="biome-structure-icon">${s.icon}</span>
                    <div class="biome-structure-meta">
                        <div class="biome-structure-name">${s.nom}</div>
                        <span class="biome-structure-rarity"
                            style="color:${s.rarityColor};background:${s.rarityBg};border-color:${s.rarityBorder};">
                            ${s.rarity}
                        </span>
                    </div>
                </div>
                <div class="biome-structure-desc">${s.desc}</div>
            </div>`
        ).join("");
    }

    const blocksEl = document.getElementById("biome-blocks-grid");
    if (blocksEl) {
        blocksEl.innerHTML = BIOME_BLOCKS.map(b => {
            const ts = BLOCK_TAG_STYLES[b.tagKey] ?? BLOCK_TAG_STYLES.craft;
            return `
            <div class="biome-block-card reveal">
                <div class="biome-block-header">
                    <span class="biome-block-icon">${b.icon}</span>
                    <div class="biome-block-meta">
                        <div class="biome-block-name">${b.nom}</div>
                        <span class="biome-block-tag"
                            style="color:${ts.color};background:${ts.bg};border-color:${ts.border};">
                            ${b.tag}
                        </span>
                    </div>
                </div>
                <div class="biome-block-desc">${b.desc}</div>
            </div>`;
        }).join("");
    }

    const faunaEl = document.getElementById("biome-fauna-grid");
    if (faunaEl) {
        faunaEl.innerHTML = BIOME_FAUNA_SPAWN.map(f => {
            const fs = FAUNA_RARITY_STYLES[f.chanceKey] ?? FAUNA_RARITY_STYLES.common;
            return `
                <div class="biome-fauna-card reveal" ${f.lien ? `onclick="window.location.href='${f.lien}'"` : ""} style="${f.lien ? "cursor:pointer;" : ""}">
                    <div class="biome-fauna-top">
                        <span class="biome-fauna-icon">${f.icon}</span>
                        <div class="biome-fauna-info">
                            <div class="biome-fauna-name">${f.nom}</div>
                            <div class="biome-fauna-latin">${f.latinNom}</div>
                        </div>
                        <span class="biome-fauna-chance"
                            style="color:${fs.color};background:${fs.bg};border-color:${fs.border};">
                            ${f.chance}
                        </span>
                    </div>
                    <div class="biome-fauna-desc">${f.desc}</div>
                    ${f.lien ? `<div class="biome-fauna-link">Voir la fiche →</div>` : ""}
                </div>`;
        }).join("");
    }

    const nativeFaunaEl = document.getElementById("native-fauna-list");
    if (nativeFaunaEl && typeof getEntity === "function") {
        nativeFaunaEl.innerHTML = BIOME_FAUNA_NATIVE.map(id => {
            const e = getEntity(id);
            if (!e) return "";
            return renderRelatedItem(e);
        }).join("");
    }

    const weatherEl = document.getElementById("biome-weather-grid");
    if (weatherEl) {
        weatherEl.innerHTML = BIOME_WEATHER.map(w => `
            <div class="biome-weather-card reveal">
                <span class="biome-weather-icon">${w.icon}</span>
                <div class="biome-weather-content">
                    <div class="biome-weather-header">
                        <span class="biome-weather-name">${w.nom}</span>
                        <span class="biome-weather-freq">${w.frequence}</span>
                    </div>
                    <div class="biome-weather-desc">${w.desc}</div>
                </div>
            </div>`
        ).join("");
    }

    const dangersEl = document.getElementById("biome-dangers-list");
    if (dangersEl) {
        dangersEl.innerHTML = BIOME_DANGERS.map(d => {
            const ds = DANGER_STYLES[d.niveauKey] ?? DANGER_STYLES.low;
            return `
            <div class="biome-danger-row reveal">
                <span class="biome-danger-icon">${d.icon}</span>
                <div class="biome-danger-content">
                    <div class="biome-danger-header">
                        <span class="biome-danger-name">${d.nom}</span>
                        <span class="biome-danger-badge"
                            style="color:${ds.color};background:${ds.bg};border-color:${ds.border};">
                            ${ds.label}
                        </span>
                    </div>
                    <div class="biome-danger-desc">${d.desc}</div>
                </div>
            </div>`;
        }).join("");
    }

    const journalEl = document.getElementById("journal-content");
    if (journalEl) {
        journalEl.innerHTML =
            `<div class="journal-date">— ${BIOME_JOURNAL.date} —</div>` +
            BIOME_JOURNAL.texte.map(p => `<p class="journal-para">${p}</p>`).join("") +
            `<div class="journal-author">— ${BIOME_JOURNAL.auteur}</div>`;
    }

    const galleryEl = document.getElementById("biome-gallery-grid");
    if (galleryEl) {
        galleryEl.innerHTML = BIOME_GALLERY.map((g, i) => `
            <div class="biome-gallery-item reveal" data-index="${i}">
                <div class="biome-gallery-img-wrap">
                    <img src="${g.src}" alt="${g.caption}" loading="lazy" />
                    <div class="biome-gallery-overlay">
                        <span class="biome-gallery-zoom">🔍</span>
                    </div>
                </div>
                <div class="biome-gallery-caption">${g.caption}</div>
            </div>`
        ).join("");

        document.querySelectorAll(".biome-gallery-item").forEach(item => {
            item.addEventListener("click", () => openLightbox(+item.dataset.index));
        });
    }

    const relatedEl = document.getElementById("related-biomes-list");
    if (relatedEl) {
        relatedEl.innerHTML = BIOME_RELATED.map(b => `
            <a href="${b.lien}" class="related-biome-item">
                <span class="related-biome-icon">${b.icon}</span>
                <div class="related-biome-info">
                    <div class="related-biome-name">${b.nom}</div>
                    <div class="related-biome-desc">${b.desc}</div>
                </div>
            </a>`
        ).join("");
    }

    const craftEl = document.getElementById("biome-crafting-list");
    if (craftEl) {
        craftEl.innerHTML = BIOME_CRAFTING.map(c => `
            <div class="biome-craft-item">
                <span class="biome-craft-icon">${c.icon}</span>
                <div>
                    <div class="biome-craft-name">${c.nom}</div>
                    <div class="biome-craft-detail">${c.detail}</div>
                </div>
            </div>`
        ).join("");
    }

    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
    }, { threshold: 0.07 });
    document.querySelectorAll(".reveal").forEach(el => obs.observe(el));

    const navbar = document.getElementById("navbar");
    if (navbar) {
        window.addEventListener("scroll", () => {
            navbar.classList.toggle("scrolled", window.scrollY > 60);
        });
    }
}

let _lbIndex = 0;

function openLightbox(index) {
    _lbIndex = index;
    const lb = document.getElementById("biome-lightbox");
    if (!lb) return;
    const img = lb.querySelector(".lb-img");
    const cap = lb.querySelector(".lb-caption");
    img.src = BIOME_GALLERY[_lbIndex].src;
    img.alt = BIOME_GALLERY[_lbIndex].caption;
    cap.textContent = BIOME_GALLERY[_lbIndex].caption;
    lb.classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeLightbox() {
    const lb = document.getElementById("biome-lightbox");
    if (!lb) return;
    lb.classList.remove("open");
    document.body.style.overflow = "";
}

function lbNav(dir) {
    _lbIndex = (_lbIndex + dir + BIOME_GALLERY.length) % BIOME_GALLERY.length;
    const img = document.querySelector(".lb-img");
    const cap = document.querySelector(".lb-caption");
    if (img) { img.style.opacity = "0"; setTimeout(() => { img.src = BIOME_GALLERY[_lbIndex].src; img.style.opacity = "1"; }, 150); }
    if (cap) cap.textContent = BIOME_GALLERY[_lbIndex].caption;
}

function _setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
}

document.addEventListener("DOMContentLoaded", () => {
    renderBiomePage();

    const lb = document.getElementById("biome-lightbox");
    if (lb) {
        lb.addEventListener("click", e => { if (e.target === lb) closeLightbox(); });
        document.addEventListener("keydown", e => {
            if (!lb.classList.contains("open")) return;
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowRight") lbNav(1);
            if (e.key === "ArrowLeft") lbNav(-1);
        });
    }
});