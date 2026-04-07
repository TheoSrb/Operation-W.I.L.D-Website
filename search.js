var IDX = [
    { type: 'section', icon: '🏠', name: 'Accueil', meta: 'Page principale du wiki', href: '/index.html', tags: ['accueil', 'home', 'principal', 'index'] },
    { type: 'section', icon: '📖', name: 'À Propos', meta: 'Présentation du mod', href: '/index.html#about', tags: ['about', 'presentation', 'mod'] },
    { type: 'section', icon: '🐾', name: 'Animaux', meta: 'Dictionnaire de toutes les créatures', href: '/index.html#animals', tags: ['animaux', 'creatures', 'bestiaire'] },
    { type: 'section', icon: '🌍', name: 'Biomes', meta: 'Les biomes du mod', href: '/index.html#biomes', tags: ['biomes', 'environnement', 'monde'] },
    { type: 'section', icon: '🗺️', name: 'Roadmap', meta: 'Prochaines mises à jour', href: '/index.html#roadmap', tags: ['roadmap', 'futur', 'planning', 'mise a jour'] },
    { type: 'section', icon: '📥', name: 'Télécharger', meta: 'Installer le mod', href: '/index.html#download', tags: ['download', 'install', 'telecharger', 'installation'] },
    { type: 'section', icon: '⚙️', name: 'Configuration', meta: 'Prérequis & compatibilité', href: '/index.html#requirements', tags: ['config', 'requis', 'neoforge', 'java', 'ram', 'prerequis'] },
    { type: 'section', icon: '📞', name: 'Contact', meta: 'Discord & formulaire de contact', href: '/index.html#contact', tags: ['contact', 'discord', 'bug', 'suggestion', 'message'] },
    { type: 'section', icon: '🎶', name: 'Bande Originale', meta: 'Musiques exclusives du mod', href: '/index.html#music', tags: ['musique', 'ost', 'bande originale', 'son', 'audio', 'music'] },
    { type: 'section', icon: '🗡️', name: 'Outils', meta: 'Armes & équipements craftables', href: '/index.html#tools', tags: ['outils', 'armes', 'craft', 'equipement', 'artisanat'] },
    { type: 'section', icon: '🎨', name: 'Cosmétiques', meta: 'Skins & personnalisation', href: '/index.html#cosmetics', tags: ['cosmetiques', 'skins', 'apparence', 'skin', 'perso'] },
    { type: 'section', icon: '🏛️', name: 'Structures', meta: 'Temples, donjons & trésors', href: '/index.html#structures', tags: ['structures', 'donjons', 'temples', 'tresors', 'exploration'] },
    { type: 'section', icon: '🔬', name: 'Simulateur', meta: 'Simulateur interactif du mod', href: '/simulator.html', tags: ['simulateur', 'test', 'interactif', 'simulation'] },

    { type: 'section', icon: '🐾', name: 'Équipements Organiques', meta: 'Armes & armures issues des créatures', href: '/tools/tools.html#section-animal', tags: ['animal', 'organique', 'creature', 'biologique'] },
    { type: 'section', icon: '⛏️', name: 'Équipements Minéraux', meta: 'Jade, Rubis et minerais', href: '/tools/tools.html#section-mineral', tags: ['mineral', 'jade', 'rubis', 'pierre', 'minerai'] },
    { type: 'section', icon: '🔬', name: 'Équipements Mixtes', meta: 'Combinaisons animales & minérales', href: '/tools/tools.html#section-mixed', tags: ['mixte', 'combinaison', 'avance', 'hybride'] },
    { type: 'section', icon: '🪨', name: 'Équipements Primitifs', meta: 'Outils en fibres et matières brutes', href: '/tools/tools.html#section-primitive', tags: ['primitif', 'fibre', 'bois', 'brut', 'nature'] },
    { type: 'section', icon: '📖', name: 'Guide de Craft', meta: 'Comment fabriquer vos équipements', href: '/tools/tools.html#crafting-intro', tags: ['craft', 'guide', 'fabrication', 'recette', 'crafting'] },
    { type: 'section', icon: '🖼️', name: 'Galerie', meta: 'Les équipements en images', href: '/tools/tools.html#tools-gallery', tags: ['galerie', 'image', 'carousel', 'photo'] },
    { type: 'section', icon: '🧪', name: 'Glossaire des Matériaux', meta: 'Tous les matériaux de craft', href: '/tools/tools.html#materials', tags: ['materiau', 'glossaire', 'ressource', 'ingredient'] },

    { type: 'biome', icon: '🌲', img: '/src/assets/biomes/redwood_forest.png', name: 'Forêt de Séquoia', meta: 'Forêt · Tempéré', desc: 'Une forêt d\'arbres géants avec un climat tempéré, abritant certains animaux comme le Kodiak.', href: '/biomes/redwood-forest.html', tags: ['foret', 'sequoia', 'redwood', 'tempere', 'kodiak', 'arbres', 'geants', 'exploration', 'ressources', 'biome'] },
];

(function owSearch() {
    if (!document.getElementById('searchOverlay')) {
        document.body.insertAdjacentHTML('beforeend', `
        <div class="search-overlay" id="searchOverlay" aria-hidden="true">
            <div class="search-modal" role="dialog" aria-label="Recherche">
                <div class="search-modal-header">
                    <div class="search-input-wrap">
                        <svg class="search-input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                            <circle cx="11" cy="11" r="7"/>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                        </svg>
                        <input type="text" id="searchInput" class="search-input" placeholder="Rechercher un animal, outil, matériau, biome…" autocomplete="off" spellcheck="false"/>
                        <button class="search-clear-btn" id="searchClearBtn" aria-label="Effacer">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="search-body" id="searchBody">
                    <div class="search-empty" id="searchEmpty">
                        <div class="search-suggestions">
                            <p class="search-suggestions-label">Suggestions rapides</p>
                            <div class="search-suggestions-chips" id="searchSuggestions"></div>
                        </div>
                    </div>
                    <div class="search-results" id="searchResults" hidden></div>
                    <div class="search-no-result" id="searchNoResult" hidden>
                        <div class="search-no-result-icon">🔍</div>
                        <p class="search-no-result-title">Aucun résultat</p>
                        <p class="search-no-result-sub">Essayez un autre terme ou explorez les sections ci-dessus.</p>
                    </div>
                </div>
                <div class="search-footer">
                    <span class="search-footer-item"><span class="search-footer-dot" style="background:#4caf7d"></span>Animal</span>
                    <span class="search-footer-item"><span class="search-footer-dot" style="background:var(--orange2)"></span>Arme</span>
                    <span class="search-footer-item"><span class="search-footer-dot" style="background:var(--blue2)"></span>Armure</span>
                    <span class="search-footer-item"><span class="search-footer-dot" style="background:var(--green2)"></span>Outil</span>
                    <span class="search-footer-item"><span class="search-footer-dot" style="background:var(--text3)"></span>Matériau</span>
                    <span class="search-footer-item"><span class="search-footer-dot" style="background:#7ecfb3"></span>Biome</span>
                    <span class="search-footer-item"><span class="search-footer-dot" style="background:var(--purple)"></span>Section</span>
                </div>
            </div>
        </div>`);
    }

    var navLinks = document.querySelector('.nav-links');
    if (navLinks && !document.getElementById('navSearchBtn')) {
        navLinks.insertAdjacentHTML('beforeend', `
        <li>
            <button class="nav-search-btn" id="navSearchBtn" title="Rechercher (Shift+Entrée)">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="7"/>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
            </button>
        </li>`);
    }

    if (!document.getElementById('search-styles')) {
        var style = document.createElement('style');
        style.id = 'search-styles';
        style.textContent = `
        .nav-search-btn {
            background: transparent;
            border: none;
            color: var(--text3);
            cursor: pointer;
            display: flex; align-items: center; justify-content: center;
            padding: 6px;
            transition: color .25s, transform .2s;
        }
        .nav-search-btn:hover { color: var(--text); transform: scale(1.15); }

        .search-overlay {
            position: fixed; inset: 0; z-index: 9999;
            background: rgba(10,14,10,.85);
            backdrop-filter: blur(12px);
            display: flex; align-items: flex-start; justify-content: center;
            padding-top: 8vh;
            opacity: 0; pointer-events: none;
            transition: opacity .2s ease;
        }
        .search-overlay.open { opacity: 1; pointer-events: all; }

        .search-modal {
            width: min(680px, 94vw);
            background: var(--bg2);
            border: 1px solid var(--border);
            border-radius: 8px;
            box-shadow: 0 30px 80px rgba(0,0,0,.8);
            display: flex; flex-direction: column;
            max-height: 75vh;
            transform: translateY(-20px) scale(.97);
            transition: transform .25s cubic-bezier(.34,1.2,.64,1);
            overflow: hidden;
        }
        .search-overlay.open .search-modal { transform: translateY(0) scale(1); }

        .search-modal-header { padding: .85rem 1rem; border-bottom: 1px solid var(--border); }
        .search-input-wrap { display: flex; align-items: center; gap: .6rem; }
        .search-input-icon { color: var(--text3); flex-shrink: 0; }

        .search-input {
            flex: 1; background: transparent; border: none; outline: none;
            color: var(--text); font-family: var(--body); font-size: 1rem;
            font-weight: 500;
        }
        .search-input::placeholder { color: var(--text3); }

        .search-clear-btn {
            background: transparent; border: none; cursor: pointer;
            color: var(--text3); display: none; padding: 2px;
            transition: color .2s;
        }
        .search-clear-btn.visible { display: flex; }
        .search-clear-btn:hover { color: var(--text); }

        .search-body { overflow-y: auto; flex: 1; padding: .5rem 0; }
        .search-body::-webkit-scrollbar { width: 4px; }
        .search-body::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }

        .search-empty { padding: 1rem 1.25rem; }
        .search-suggestions-label { font-size: .7rem; color: var(--text3); font-family: var(--pixel); letter-spacing: .15em; text-transform: uppercase; margin-bottom: .75rem; display: block; }
        .search-suggestions-chips { display: flex; flex-wrap: wrap; gap: .4rem; }
        .search-suggestion-chip {
            padding: 5px 12px; border: 1px solid var(--border); border-radius: 2px;
            background: var(--surface); color: var(--text2); font-size: .78rem;
            font-family: var(--body); cursor: pointer; display: flex; align-items: center; gap: 5px;
            transition: all .2s;
        }
        .search-suggestion-chip:hover { border-color: var(--blue2); color: var(--blue2); }

        .search-category { padding: .5rem 1.25rem .25rem; }
        .search-category-label { font-family: var(--pixel); font-size: .5rem; color: var(--text3); letter-spacing: .2em; text-transform: uppercase; }

        .search-result-item {
            display: flex; align-items: center; gap: .85rem;
            padding: .65rem 1.25rem; width: 100%;
            background: transparent; border: none; cursor: pointer;
            text-decoration: none; color: inherit;
            transition: background .15s;
        }
        .search-result-item:hover, .search-result-item.focused { background: var(--surface); }

        .search-result-icon {
            width: 36px; height: 36px; border-radius: 4px;
            background: var(--bg3); border: 1px solid var(--border);
            display: flex; align-items: center; justify-content: center;
            font-size: 1.1rem; flex-shrink: 0; overflow: hidden;
            image-rendering: pixelated;
        }
        .search-result-icon img { width: 100%; height: 100%; object-fit: cover; image-rendering: pixelated; }

        .search-result-info { flex: 1; min-width: 0; text-align: left; }
        .search-result-name { font-size: .9rem; font-weight: 700; color: var(--text); }
        .search-result-name mark { background: transparent; color: var(--blue2); font-weight: 900; }
        .search-result-meta { font-size: .72rem; color: var(--text3); margin-top: 1px; }
        .search-result-meta .meta-rarity-common    { color: #aaa; }
        .search-result-meta .meta-rarity-uncommon  { color: #7ec86e; }
        .search-result-meta .meta-rarity-rare      { color: #6eaaff; }
        .search-result-meta .meta-rarity-epic      { color: var(--orange2); }
        .search-result-meta .meta-rarity-iconic    { color: var(--purple); }

        .search-result-badge {
            font-size: .62rem; font-weight: 700; padding: 2px 7px;
            border-radius: 2px; border: 1px solid; white-space: nowrap; flex-shrink: 0;
        }

        .type-animal   { color: #4caf7d; border-color: rgba(76,175,125,.35); background: rgba(76,175,125,.08); }
        .type-weapon   { color: var(--orange2); border-color: rgba(240,120,48,.35); background: rgba(240,120,48,.08); }
        .type-armor    { color: var(--blue2);   border-color: rgba(90,186,220,.35);  background: rgba(90,186,220,.08); }
        .type-tool     { color: var(--green2);  border-color: rgba(82,196,90,.35);   background: rgba(82,196,90,.08); }
        .type-material { color: var(--text3);   border-color: var(--border);         background: var(--surface); }
        .type-biome    { color: #7ecfb3;        border-color: rgba(126,207,179,.35); background: rgba(126,207,179,.08); }
        .type-section  { color: var(--purple);  border-color: rgba(186,127,212,.35); background: rgba(186,127,212,.08); }

        .search-result-arrow { color: var(--text3); flex-shrink: 0; }

        .search-divider { height: 1px; background: var(--border); margin: .35rem 1.25rem; opacity: .4; }

        .search-no-result { padding: 3rem 2rem; text-align: center; }
        .search-no-result-icon { font-size: 2.5rem; margin-bottom: .75rem; opacity: .4; }
        .search-no-result-title { font-weight: 700; margin-bottom: .3rem; }
        .search-no-result-sub { font-size: .85rem; color: var(--text3); }

        .search-footer {
            padding: .6rem 1.25rem; border-top: 1px solid var(--border);
            display: flex; gap: 1.25rem; flex-wrap: wrap;
        }
        .search-footer-item { display: flex; align-items: center; gap: 5px; font-size: .72rem; color: var(--text3); }
        .search-footer-dot { width: 7px; height: 7px; border-radius: 1px; flex-shrink: 0; }

        .search-result-score-bar {
            width: 3px; height: 28px; border-radius: 2px; flex-shrink: 0;
            background: var(--border); position: relative; overflow: hidden;
        }
        .search-result-score-bar-fill {
            position: absolute; bottom: 0; left: 0; right: 0;
            background: var(--blue2); border-radius: 2px;
            transition: height .3s;
        }
        `;
        document.head.appendChild(style);
    }

    function normalize(s) {
        return (s || '')
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-z0-9 ]/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    }

    function accentRegex(word) {
        var MAP = {
            a: '[aàâäáãå]', e: '[eéèêëě]', i: '[iîïíì]',
            o: '[oôöóòõ]', u: '[uùûüú]', c: '[cç]', n: '[nñ]'
        };
        return word.toLowerCase()
            .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
            .split('')
            .map(function (c) { return MAP[c] || c; })
            .join('');
    }

    function hl(text, q) {
        if (!q || !text) return text || '';
        var words = q.trim().split(/\s+/).filter(Boolean);
        var result = text;
        words.forEach(function (word) {
            if (!word) return;
            try {
                var pat = accentRegex(word);
                result = result.replace(new RegExp('(' + pat + ')', 'gi'), '<mark>$1</mark>');
            } catch (e) { }
        });
        return result;
    }

    function scoreField(fieldNorm, wordNorm) {
        if (!fieldNorm || !wordNorm) return 0;
        if (fieldNorm === wordNorm) return 100;
        if (fieldNorm.startsWith(wordNorm)) return 85;
        if (fieldNorm.includes(wordNorm)) return 65;
        if (fuzzySubseq(fieldNorm, wordNorm)) return 20;
        return 0;
    }

    function fuzzySubseq(text, query) {
        if (query.length < 3) return false;
        var ti = 0, qi = 0;
        while (ti < text.length && qi < query.length) {
            if (text[ti] === query[qi]) qi++;
            ti++;
        }
        return qi === query.length;
    }

    function score(item, q) {
        var words = normalize(q).split(/\s+/).filter(Boolean);
        if (!words.length) return 0;

        var nameN = normalize(item.name);
        var metaN = normalize(item.meta || '');
        var descN = normalize(item.desc || '');
        var tagsN = (item.tags || []).map(normalize);

        var total = 0;

        for (var i = 0; i < words.length; i++) {
            var w = words[i];
            var best = 0;

            var ns = scoreField(nameN, w);
            if (ns > best) best = ns;

            for (var j = 0; j < tagsN.length; j++) {
                var ts = scoreField(tagsN[j], w) * 0.85;
                if (ts > best) best = ts;
            }

            var ms = scoreField(metaN, w) * 0.75;
            if (ms > best) best = ms;

            var ds = scoreField(descN, w) * 0.5;
            if (ds > best) best = ds;

            if (best === 0) return 0;
            total += best;
        }

        var fullQ = normalize(q);
        if (nameN.startsWith(fullQ)) total += 15;
        if (nameN === fullQ) total += 25;

        return total / words.length;
    }

    if (typeof ENTITIES !== 'undefined' && Array.isArray(ENTITIES)) {
        var RARITY_LABEL = {
            'rarity-common': 'Commun',
            'rarity-uncommon': 'Peu Commun',
            'rarity-rare': 'Rare',
            'rarity-epic': 'Légendaire',
            'rarity-iconic': 'Emblématique'
        };

        ENTITIES.forEach(function (e) {
            var tags = [
                e.nom.toLowerCase(),
                e.nomLatin.toLowerCase(),
                e.biome.toLowerCase(),
                e.rarete.toLowerCase(),
                e.temperament.toLowerCase(),
                e.rareteClasse.replace('rarity-', ''),
            ]
                .concat(e.types || [])
                .concat(e.tags || [])
                .concat([e.desc.toLowerCase()])
                .filter(Boolean);

            var meta = [e.biome, e.rarete, e.temperament].filter(Boolean).join(' · ');

            IDX.push({
                type: 'animal',
                icon: null,
                img: '/src/assets/heads/' + e.id + '.png',
                name: e.nom,
                meta: meta,
                desc: e.desc,
                href: e.lien ? (e.lien.startsWith('/') ? e.lien : '/' + e.lien) : '/index.html#animals',
                rareteClasse: e.rareteClasse,
                tags: tags
            });
        });
    }

    if (typeof BIOMES !== 'undefined' && Array.isArray(BIOMES)) {
        var BIOME_TYPE_LABELS = {
            forest: 'Forêt',
            aquatic: 'Aquatique',
            desert: 'Désert',
            mountain: 'Montagne',
            jungle: 'Jungle',
            plains: 'Plaine',
            tundra: 'Toundra',
            swamp: 'Marais',
            cave: 'Grotte',
            ocean: 'Océan'
        };

        BIOMES.forEach(function (b) {
            var typeLabel = BIOME_TYPE_LABELS[b.type] || b.type || '';
            var tags = [
                normalize(b.nom),
                normalize(b.type || ''),
                normalize(typeLabel),
                normalize(b.temperature || ''),
                normalize(b.desc || ''),
                'biome', 'environnement', 'exploration'
            ]
                .concat((b.animaux || []).map(function (a) { return normalize(a); }))
                .concat((b.tags || []).map(normalize))
                .filter(Boolean);

            IDX.push({
                type: 'biome',
                icon: b.icon || '🌍',
                img: b.img || null,
                name: b.nom,
                meta: [typeLabel, b.temperature].filter(Boolean).join(' · '),
                desc: b.desc || '',
                href: b.href || b.url || '/index.html#biomes',
                tags: tags
            });
        });
    }

    if (typeof TOOLS !== 'undefined' && Array.isArray(TOOLS)) {
        var catLabels = { weapon: 'Arme', armor: 'Armure', tool: 'Outil', special: 'Spécial' };
        var matLabels = { animal: 'Animal', mineral: 'Minéral', mixed: 'Mixte', primitive: 'Primitif' };

        TOOLS.forEach(function (t) {
            IDX.push({
                type: t.category,
                icon: null,
                img: t.img ? t.img.replace('../', '/') : null,
                name: t.name,
                meta: [catLabels[t.category], matLabels[t.material], t.source || null].filter(Boolean).join(' · '),
                desc: t.description || '',
                href: '#tool-' + t.id,
                toolId: t.id,
                tags: [
                    t.name.toLowerCase(),
                    (t.description || '').toLowerCase(),
                    t.category,
                    t.material,
                    (t.source || '').toLowerCase(),
                    t.stats && t.stats.special ? t.stats.special.toLowerCase() : ''
                ].filter(Boolean)
            });
        });
    }

    if (typeof CRAFTING_ITEMS !== 'undefined') {
        Object.keys(CRAFTING_ITEMS).forEach(function (id) {
            var item = CRAFTING_ITEMS[id];
            IDX.push({
                type: 'material',
                icon: null,
                img: item.img,
                name: item.name,
                meta: 'Matériau de craft',
                desc: '',
                href: '#materials',
                tags: [item.name.toLowerCase(), id.toLowerCase(), 'materiau', 'craft', 'ingredient']
            });
        });
    }

    var SUGGESTIONS = [
        'Tigre', 'Crocodile', 'Agressif', 'Rare',
        'Épée', 'Jade', 'Armure', 'Camouflage',
        'Savanne', 'Aquatique', 'Séquoia', 'Tempéré'
    ];

    var overlay = document.getElementById('searchOverlay');
    var input = document.getElementById('searchInput');
    var clearBtn = document.getElementById('searchClearBtn');
    var navBtn = document.getElementById('navSearchBtn');
    var resultsEl = document.getElementById('searchResults');
    var emptyEl = document.getElementById('searchEmpty');
    var noResultEl = document.getElementById('searchNoResult');
    var suggestWrap = document.getElementById('searchSuggestions');

    if (!overlay || !input) return;

    SUGGESTIONS.forEach(function (s) {
        var chip = document.createElement('button');
        chip.className = 'search-suggestion-chip';
        chip.type = 'button';
        chip.innerHTML = '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg> ' + s;
        chip.addEventListener('click', function () { input.value = s; triggerSearch(s); input.focus(); });
        suggestWrap.appendChild(chip);
    });

    var isOpen = false;
    var focusedIndex = -1;
    var currentItems = [];

    function openSearch() {
        isOpen = true;
        overlay.classList.add('open');
        overlay.removeAttribute('aria-hidden');
        document.body.style.overflow = 'hidden';
        setTimeout(function () { input.focus(); }, 150);
    }

    function closeSearch() {
        isOpen = false;
        overlay.classList.remove('open');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        focusedIndex = -1; currentItems = [];
        setTimeout(function () {
            input.value = '';
            clearBtn.classList.remove('visible');
            showEmpty();
        }, 200);
    }

    if (navBtn) navBtn.addEventListener('click', openSearch);
    overlay.addEventListener('click', function (e) { if (e.target === overlay) closeSearch(); });
    document.addEventListener('keydown', function (e) {
        if (e.shiftKey && e.key === 'Enter') { e.preventDefault(); isOpen ? closeSearch() : openSearch(); }
        if (e.key === 'Escape' && isOpen) closeSearch();
    });

    function showEmpty() { emptyEl.hidden = false; resultsEl.hidden = true; noResultEl.hidden = true; }
    function showResults() { emptyEl.hidden = true; resultsEl.hidden = false; noResultEl.hidden = true; }
    function showNoResult() { emptyEl.hidden = true; resultsEl.hidden = true; noResultEl.hidden = false; }

    var ORDER = ['animal', 'biome', 'weapon', 'armor', 'tool', 'material', 'section'];
    var LABELS = {
        animal: 'Animaux',
        biome: 'Biomes',
        weapon: 'Armes',
        armor: 'Armures',
        tool: 'Outils',
        material: 'Matériaux',
        section: 'Sections',
        special: 'Spéciaux'
    };
    var BADGE_LABELS = {
        animal: 'Animal',
        biome: 'Biome',
        weapon: 'Arme',
        armor: 'Armure',
        tool: 'Outil',
        material: 'Matériau',
        section: 'Section',
        special: 'Spécial'
    };

    var RARITY_META_CLASS = {
        'rarity-common': 'meta-rarity-common',
        'rarity-uncommon': 'meta-rarity-uncommon',
        'rarity-rare': 'meta-rarity-rare',
        'rarity-epic': 'meta-rarity-epic',
        'rarity-iconic': 'meta-rarity-iconic'
    };

    function buildMeta(item, q) {
        if (item.type === 'animal' && item.rareteClasse) {
            var parts = (item.meta || '').split(' · ');
            return parts.map(function (p, idx) {
                if (idx === 1 && item.rareteClasse) {
                    var cls = RARITY_META_CLASS[item.rareteClasse] || '';
                    return '<span class="' + cls + '">' + p + '</span>';
                }
                return p;
            }).join(' · ');
        }
        return item.meta || '';
    }

    function triggerSearch(q) {
        q = (q || '').trim();
        clearBtn.classList.toggle('visible', q.length > 0);
        if (!q) { showEmpty(); currentItems = []; return; }

        var scored = IDX
            .map(function (item) { return { item: item, s: score(item, q) }; })
            .filter(function (x) { return x.s > 0; })
            .sort(function (a, b) { return b.s - a.s; })
            .slice(0, 30);

        if (!scored.length) { showNoResult(); currentItems = []; return; }

        var grouped = { animal: [], biome: [], weapon: [], armor: [], tool: [], material: [], section: [], special: [] };
        scored.forEach(function (x) {
            var bucket = grouped[x.item.type] || grouped.special;
            if (bucket) bucket.push({ item: x.item, s: x.s });
        });

        var html = '';
        var idx = 0;
        currentItems = [];

        ORDER.forEach(function (type) {
            var entries = grouped[type];
            if (!entries || !entries.length) return;

            html += '<div class="search-category"><span class="search-category-label">' + LABELS[type] + '</span></div>';

            entries.forEach(function (entry) {
                var item = entry.item;
                var isModal = !!item.toolId;
                var tag = isModal ? 'button' : 'a';
                var attrs = isModal
                    ? ' type="button"'
                    : ' href="' + item.href + '"';

                var iconHtml;
                if (item.img) {
                    if (item.type === 'biome') {
                        iconHtml = '<img src="' + item.img + '" alt="" style="image-rendering:auto;object-fit:cover;width:100%;height:100%;">';
                    } else {
                        iconHtml = '<img src="' + item.img + '" alt="" style="image-rendering:pixelated">';
                    }
                } else {
                    iconHtml = item.icon || '📦';
                }

                html += '<' + tag + ' class="search-result-item" data-href="' + (item.href || '') + '" data-tool-id="' + (item.toolId || '') + '" data-idx="' + idx + '"' + attrs + '>'
                    + '<div class="search-result-icon">' + iconHtml + '</div>'
                    + '<div class="search-result-info">'
                    + '<div class="search-result-name">' + hl(item.name, q) + '</div>'
                    + '<div class="search-result-meta">' + buildMeta(item, q) + '</div>'
                    + '</div>'
                    + '<span class="search-result-badge type-' + type + '">' + (BADGE_LABELS[type] || type) + '</span>'
                    + '<svg class="search-result-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>'
                    + '</' + tag + '>';

                currentItems.push(item);
                idx++;
            });

            html += '<div class="search-divider"></div>';
        });

        resultsEl.innerHTML = html;
        showResults();
        focusedIndex = -1;

        resultsEl.querySelectorAll('.search-result-item').forEach(function (el) {
            el.addEventListener('click', function (e) {
                e.preventDefault();
                var toolId = el.dataset.toolId;
                if (toolId && typeof openToolModal === 'function') {
                    closeSearch();
                    setTimeout(function () { openToolModal(toolId); }, 220);
                } else {
                    navigate(el.dataset.href);
                }
            });
        });
    }

    function navigate(href) {
        closeSearch();
        setTimeout(function () {
            if (!href) return;
            if (href.startsWith('#')) {
                var t = document.querySelector(href);
                if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
                return;
            }

            var parts = href.split('#');
            var hrefPath = parts[0];
            var anchor = parts[1];

            if (anchor && window.location.pathname === hrefPath) {
                var t = document.getElementById(anchor);
                if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
                return;
            }

            if (anchor) {
                sessionStorage.setItem('ow_scroll_to', anchor);
            }
            window.location.href = hrefPath || href;
        }, 200);
    }

    document.addEventListener('DOMContentLoaded', function () {
        var anchor = sessionStorage.getItem('ow_scroll_to');
        if (anchor) {
            sessionStorage.removeItem('ow_scroll_to');
            setTimeout(function () {
                var t = document.getElementById(anchor);
                if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 300);
        }
    });

    input.addEventListener('input', function () { triggerSearch(input.value); });
    clearBtn.addEventListener('click', function () {
        input.value = '';
        clearBtn.classList.remove('visible');
        showEmpty(); currentItems = []; input.focus();
    });

    input.addEventListener('keydown', function (e) {
        var items = resultsEl.querySelectorAll('.search-result-item');
        if (!items.length) return;
        if (e.key === 'ArrowDown') { e.preventDefault(); focusedIndex = Math.min(focusedIndex + 1, items.length - 1); updateFocus(items); }
        if (e.key === 'ArrowUp') { e.preventDefault(); focusedIndex = Math.max(focusedIndex - 1, 0); updateFocus(items); }
        if (e.key === 'Enter') {
            e.preventDefault();
            var target = focusedIndex >= 0 ? currentItems[focusedIndex] : currentItems[0];
            if (target) {
                if (target.toolId && typeof openToolModal === 'function') {
                    closeSearch(); setTimeout(function () { openToolModal(target.toolId); }, 220);
                } else {
                    navigate(target.href);
                }
            }
        }
    });

    function updateFocus(items) {
        items.forEach(function (el, i) { el.classList.toggle('focused', i === focusedIndex); });
        if (items[focusedIndex]) items[focusedIndex].scrollIntoView({ block: 'nearest' });
    }

    showEmpty();
    console.log('[OW Search] ✓', IDX.length, 'entrées indexées ('
        + IDX.filter(function (x) { return x.type === 'animal'; }).length + ' animaux, '
        + IDX.filter(function (x) { return x.type === 'biome'; }).length + ' biomes, '
        + IDX.filter(function (x) { return x.type === 'weapon' || x.type === 'armor' || x.type === 'tool'; }).length + ' équipements, '
        + IDX.filter(function (x) { return x.type === 'material'; }).length + ' matériaux)'
    );

})();