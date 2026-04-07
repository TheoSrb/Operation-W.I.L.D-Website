function renderMinecraftMap(containerId, entity, spawnRarityMap) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const BIOME_DEFS = [
        { key: "cold_ocean", nom: "Océan Froid", emoji: "🧊", base: "#599bf1ff", shade: "#4684d6ff", spawn: false },
        { key: "ocean", nom: "Océan", emoji: "🌊", base: "#3F76E4", shade: "#3367cf", spawn: false },
        { key: "snow", nom: "Toundra Enneigée", emoji: "❄️", base: "#d6fafa", shade: "#b4e4e4", spawn: false },
        { key: "mountains", nom: "Montagnes", emoji: "⛰️", base: "#9db48bff", shade: "#799666ff", spawn: false },
        { key: "sequoia", nom: "Forêt de Séquoias", emoji: "🌳", base: "#3d5c2a", shade: "#2b4520", spawn: false },
        { key: "forest", nom: "Forêt", emoji: "🌲", base: "#4c8541", shade: "#3d7233", spawn: false },
        { key: "plains", nom: "Plaine", emoji: "🌾", base: "#91BD59", shade: "#759c41", spawn: false },
        { key: "swamp", nom: "Marécage", emoji: "🌱", base: "#5d7039", shade: "#485630", spawn: false },
        { key: "savanna", nom: "Savanne", emoji: "🪾", base: "#c4bc79", shade: "#aca464", spawn: false },
        { key: "mesa", nom: "Mesa", emoji: "🏔️", base: "#c47240", shade: "#a35a2e", spawn: false },
        { key: "desert", nom: "Désert", emoji: "🏜️", base: "#fdeb76", shade: "#cfc151", spawn: false },
        { key: "jungle", nom: "Jungle", emoji: "🌿", base: "#2db80e", shade: "#1f9008", spawn: false },
    ];

    const RARITY_STYLES = {
        "Commun": { color: "#ccd0c8", bg: "rgba(168,176,144,.2)", border: "rgba(168,176,144,.3)" },
        "Peu Commun": { color: "#52c45a", bg: "rgba(58,122,60,.2)", border: "rgba(58,122,60,.4)" },
        "Rare": { color: "#5abadc", bg: "rgba(58,122,180,.2)", border: "rgba(58,122,180,.4)" },
        "Très Rare": { color: "#ba7fd4", bg: "rgba(166,109,168,.2)", border: "rgba(166,109,168,.4)" },
        "Légendaire": { color: "#f07830", bg: "rgba(212,100,26,.2)", border: "rgba(212,100,26,.4)" },
    };

    BIOME_DEFS.forEach(bd => {
        if (spawnRarityMap && spawnRarityMap[bd.key]) bd.spawn = true;
    });

    const colorMap = {};
    BIOME_DEFS.forEach(b => { colorMap[b.key] = b; });

    const W = 128, H = 80;
    const CELL = 6;
    const MAP_W = W * CELL;
    const MAP_H = H * CELL;

    const OVERLAY_DARKNESS = 0.60;
    const MIN_SCALE = 1;
    const MAX_SCALE = 5;

    function hash(x, y) {
        const n = Math.sin(x * 127.1 + y * 311.7) * 43758.5453123;
        return n - Math.floor(n);
    }

    function vnoise(x, y) {
        const ix = Math.floor(x), iy = Math.floor(y);
        const fx = x - ix, fy = y - iy;
        const s = t => t * t * (3 - 2 * t);
        const sx = s(fx), sy = s(fy);
        const a = hash(ix, iy);
        const b = hash(ix + 1, iy);
        const c = hash(ix, iy + 1);
        const d = hash(ix + 1, iy + 1);
        return a * (1 - sx) * (1 - sy) + b * sx * (1 - sy) + c * (1 - sx) * sy + d * sx * sy;
    }

    function fbm(x, y, oct) {
        let v = 0, amp = 1, freq = 1, tot = 0;
        for (let i = 0; i < oct; i++) {
            v += vnoise(x * freq, y * freq) * amp;
            tot += amp;
            amp *= 0.5;
            freq *= 2.1;
        }
        return v / tot;
    }

    function isLand(col, row) {
        const nx = (col / W - 0.50) * 1.6;
        const ny = (row / H - 0.48) * 1.85;
        const d = Math.sqrt(nx * nx + ny * ny);
        const warp = fbm(col * 0.035 + 3.7, row * 0.035 + 1.3, 4) * 0.52;
        return (d + warp) < 1.08;
    }

    function assignBiome(col, row) {
        if (!isLand(col, row)) {
            const ny = row / H;
            const coldNoise = fbm(col * 0.04 + 71.2, row * 0.04 + 13.6, 3);
            return (ny < 0.22 + coldNoise * 0.10) ? "cold_ocean" : "ocean";
        }

        const temp = (row / H) * 0.65 + fbm(col * 0.038 + 9.1, row * 0.038 + 4.7, 3) * 0.35;
        const horizDry = (col / W) * 0.14;
        const wet = fbm(col * 0.042 + 33.5, row * 0.042 + 17.2, 4) - horizDry;
        const elev = fbm(col * 0.055 + 5.3, row * 0.055 + 8.9, 5);

        if (temp < 0.225) return "snow";
        if (elev > 0.60 && temp < 0.50) return "mountains";
        if (temp < 0.38) return wet > 0.50 ? "sequoia" : "snow";

        if (temp < 0.52) {
            if (wet > 0.57) return "forest";
            return wet > 0.52 ? "sequoia" : "plains";
        }

        if (temp < 0.62) {
            if (wet > 0.52) return "swamp";
            if (wet > 0.43) return "plains";
            return "savanna";
        }

        if (wet > 0.55) return "jungle";
        if (wet > 0.40) return "jungle";
        if (wet > 0.35) return "savanna";
        if (wet < 0.225) return "mesa";
        return "desert";
    }

    const TMAP = [];
    for (let r = 0; r < H; r++) {
        TMAP[r] = [];
        for (let c = 0; c < W; c++) TMAP[r][c] = assignBiome(c, r);
    }

    function smooth(passes) {
        for (let p = 0; p < passes; p++) {
            const next = TMAP.map(row => [...row]);
            for (let r = 1; r < H - 1; r++) {
                for (let c = 1; c < W - 1; c++) {
                    if (TMAP[r][c] === "ocean" || TMAP[r][c] === "cold_ocean") continue;
                    const nb = [
                        TMAP[r - 1][c], TMAP[r + 1][c],
                        TMAP[r][c - 1], TMAP[r][c + 1],
                        TMAP[r - 1][c - 1], TMAP[r - 1][c + 1],
                        TMAP[r + 1][c - 1], TMAP[r + 1][c + 1]
                    ];
                    const freq = {};
                    nb.forEach(k => { freq[k] = (freq[k] || 0) + 1; });
                    const best = Object.entries(freq).sort((a, b) => b[1] - a[1])[0][0];
                    if (freq[best] >= 5) next[r][c] = best;
                }
            }
            for (let r = 0; r < H; r++)
                for (let c = 0; c < W; c++) TMAP[r][c] = next[r][c];
        }
    }
    smooth(4);

    function findDeepestPoint(key, radius = 8) {
        let best = -1, bx = radius, by = radius;
        for (let r = radius; r < H - radius; r++) {
            for (let c = radius; c < W - radius; c++) {
                if (TMAP[r][c] !== key) continue;
                let count = 0;
                for (let dr = -radius; dr <= radius; dr++)
                    for (let dc = -radius; dc <= radius; dc++)
                        if (TMAP[r + dr] && TMAP[r + dr][c + dc] === key) count++;
                if (count > best) { best = count; bx = c; by = r; }
            }
        }
        return best >= 0 ? { cx: bx, cy: by } : null;
    }

    function shadeColor(hex, factor) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        const cl = x => Math.max(0, Math.min(255, Math.round(x * factor)));
        return `rgb(${cl(r)},${cl(g)},${cl(b)})`;
    }

    const wrapper = document.createElement("div");
    wrapper.className = "mc-map-wrapper";
    wrapper.style.cssText = "position:relative;overflow:hidden;cursor:crosshair;";

    const canvas = document.createElement("canvas");
    canvas.width = MAP_W;
    canvas.height = MAP_H;
    canvas.className = "mc-map-canvas";
    canvas.setAttribute("aria-label", "Carte des zones d'apparition");
    const ctx = canvas.getContext("2d");

    const overlay = document.createElement("canvas");
    overlay.width = MAP_W;
    overlay.height = MAP_H;
    overlay.style.cssText = `position:absolute;top:0;left:0;width:100%;height:auto;pointer-events:none;image-rendering:pixelated;image-rendering:crisp-edges;`;
    const octx = overlay.getContext("2d");

    const headLayer = document.createElement("div");
    headLayer.style.cssText = `
        position: absolute;
        top: 0; left: 0;
        width: 100%;
        aspect-ratio: ${MAP_W} / ${MAP_H};
        pointer-events: none;
        z-index: 2;
    `;

    const zoomContainer = document.createElement("div");
    zoomContainer.style.cssText = "position:relative;width:100%;transform-origin:0 0;will-change:transform;";

    zoomContainer.appendChild(canvas);
    zoomContainer.appendChild(overlay);
    zoomContainer.appendChild(headLayer);
    wrapper.appendChild(zoomContainer);

    let scale = 1;
    let panX = 0, panY = 0;
    let isDragging = false;
    let hasDragged = false;
    let dragStartX = 0, dragStartY = 0;
    let dragStartPanX = 0, dragStartPanY = 0;

    function clamp(s, x, y) {
        const wRect = wrapper.getBoundingClientRect();
        const ww = wRect.width;
        const wh = wRect.height || (ww * MAP_H / MAP_W);
        return {
            x: Math.min(0, Math.max(ww - ww * s, x)),
            y: Math.min(0, Math.max(wh - wh * s, y)),
        };
    }

    function applyTransform() {
        zoomContainer.style.transform = `translate(${panX}px, ${panY}px) scale(${scale})`;
    }

    wrapper.addEventListener("wheel", (e) => {
        e.preventDefault();
        const rect = wrapper.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const delta = e.deltaY < 0 ? 1.15 : 1 / 1.15;
        const newScale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, scale * delta));
        if (newScale === scale) return;
        const ratio = newScale / scale;
        const newPanX = mouseX - ratio * (mouseX - panX);
        const newPanY = mouseY - ratio * (mouseY - panY);
        scale = newScale;
        const c = clamp(scale, newPanX, newPanY);
        panX = c.x;
        panY = c.y;
        applyTransform();
    }, { passive: false });

    wrapper.addEventListener("mousedown", (e) => {
        if (e.button !== 0) return;
        isDragging = true;
        hasDragged = false;
        dragStartX = e.clientX;
        dragStartY = e.clientY;
        dragStartPanX = panX;
        dragStartPanY = panY;
        wrapper.style.cursor = "grabbing";
        e.preventDefault();
    });

    window.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        const dx = e.clientX - dragStartX;
        const dy = e.clientY - dragStartY;
        if (Math.abs(dx) > 3 || Math.abs(dy) > 3) hasDragged = true;
        const c = clamp(scale, dragStartPanX + dx, dragStartPanY + dy);
        panX = c.x;
        panY = c.y;
        applyTransform();
    });

    window.addEventListener("mouseup", () => {
        if (!isDragging) return;
        isDragging = false;
        wrapper.style.cursor = "crosshair";
        setTimeout(() => { hasDragged = false; }, 100);
    });

    for (let row = 0; row < H; row++) {
        for (let col = 0; col < W; col++) {
            const key = TMAP[row][col];
            const bd = colorMap[key] || colorMap["ocean"];
            const detailNoise = fbm(col * 0.28 + 100, row * 0.28 + 100, 2);
            const factor = 0.88 + detailNoise * 0.24;
            ctx.fillStyle = shadeColor(bd.base, factor);
            ctx.fillRect(col * CELL, row * CELL, CELL, CELL);
        }
    }

    const isOcean = k => k === "ocean" || k === "cold_ocean";
    ctx.globalAlpha = 0.20;
    for (let row = 1; row < H - 1; row++) {
        for (let col = 1; col < W - 1; col++) {
            if (!isOcean(TMAP[row][col])) {
                const nb = [TMAP[row - 1][col], TMAP[row + 1][col], TMAP[row][col - 1], TMAP[row][col + 1]];
                if (nb.some(isOcean)) {
                    ctx.fillStyle = "#000";
                    ctx.fillRect(col * CELL, row * CELL, CELL, CELL);
                }
            }
        }
    }
    ctx.globalAlpha = 1;

    ctx.globalAlpha = 0.08;
    ctx.fillStyle = "#a0d8ff";
    for (let row = 0; row < H; row++)
        for (let col = 0; col < W; col++)
            if (TMAP[row][col] === "ocean" && ((col * 3 + row * 7) % 11) === 0)
                ctx.fillRect(col * CELL + 1, row * CELL + CELL / 2 - 1, CELL - 2, 2);
    ctx.globalAlpha = 1;

    ctx.globalAlpha = 0.10;
    ctx.fillStyle = "#7ab8e8";
    for (let row = 0; row < H; row++)
        for (let col = 0; col < W; col++)
            if (TMAP[row][col] === "cold_ocean" && ((col * 5 + row * 3) % 13) === 0)
                ctx.fillRect(col * CELL + 1, row * CELL + CELL / 2 - 1, CELL - 2, 2);
    ctx.globalAlpha = 1;

    function paintBiomePatches(ctx, options) {
        const { biome, color, alpha = 0.55, threshold = 0.60, scale = 0.30, size = 1.0, fbmOffset = [200.3, 200.7] } = options;
        for (let row = 0; row < H; row++) {
            for (let col = 0; col < W; col++) {
                if (TMAP[row][col] !== biome) continue;
                const n = fbm(col * scale + fbmOffset[0], row * scale + fbmOffset[1], 3);
                if (n > threshold) {
                    const offsetX = (fbm(col * 1.3 + fbmOffset[0] + 77, row * 1.3 + fbmOffset[1] + 55, 2) - 0.5) * CELL * 0.6;
                    const offsetY = (fbm(col * 1.3 + fbmOffset[0] + 33, row * 1.3 + fbmOffset[1] + 88, 2) - 0.5) * CELL * 0.6;
                    const radius = CELL * (0.8 + fbm(col * 1.2 + fbmOffset[0], row * 1.2 + fbmOffset[1], 2) * 1.1) * size;
                    const cx = col * CELL + CELL / 2 + offsetX;
                    const cy = row * CELL + CELL / 2 + offsetY;
                    ctx.globalAlpha = alpha - 0.1 + fbm(col * 1.7, row * 1.7, 2) * 0.2;
                    ctx.fillStyle = color;
                    ctx.beginPath();
                    ctx.ellipse(cx, cy, radius * 1.6, radius * 1.0, fbm(col * 0.9, row * 0.9, 1) * Math.PI, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
        }
        ctx.globalAlpha = 1;
    }

    paintBiomePatches(ctx, { biome: "swamp", color: "#4e7db5", alpha: 0.50, threshold: 0.60, scale: 0.30, size: 0.35, fbmOffset: [200.3, 200.7] });
    paintBiomePatches(ctx, { biome: "jungle", color: "#466e2eff", alpha: 0.20, threshold: 0.60, scale: 0.30, size: 0.30, fbmOffset: [200.3, 200.7] });
    paintBiomePatches(ctx, { biome: "savanna", color: "#9c863dff", alpha: 0.25, threshold: 0.60, scale: 0.30, size: 0.50, fbmOffset: [200.3, 200.7] });
    paintBiomePatches(ctx, { biome: "mesa", color: "#633f31ff", alpha: 0.25, threshold: 0.60, scale: 0.30, size: 0.50, fbmOffset: [200.3, 200.7] });
    paintBiomePatches(ctx, { biome: "forest", color: "#325829ff", alpha: 0.20, threshold: 0.60, scale: 0.30, size: 0.30, fbmOffset: [200.3, 200.7] });
    paintBiomePatches(ctx, { biome: "sequoia", color: "#2e3b10ff", alpha: 0.20, threshold: 0.60, scale: 0.30, size: 0.30, fbmOffset: [200.3, 200.7] });

    const spawnBiomes = BIOME_DEFS.filter(bd => bd.spawn);

    spawnBiomes.forEach(bd => {
        const pt = findDeepestPoint(bd.key);
        if (!pt) return;

        const px = pt.cx * CELL + CELL / 2;
        const py = pt.cy * CELL + CELL / 2;

        ctx.save();
        ctx.globalAlpha = 0.28;
        ctx.fillStyle = "#f07830";
        ctx.beginPath();
        ctx.arc(px, py, CELL * 2.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        ctx.save();
        ctx.strokeStyle = "#f07830";
        ctx.lineWidth = 1.5;
        ctx.globalAlpha = 0.8;
        ctx.beginPath();
        ctx.arc(px, py, CELL * 2.5, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();

        const label = spawnRarityMap?.[bd.key] ?? "Commun";
        const rarityInfo = { label, ...RARITY_STYLES[label] ?? RARITY_STYLES["Commun"] };

        const size = CELL * 10;
        const img = new Image();
        img.src = "../src/assets/heads/" + entity.id + ".png";

        const spawnMarker = { px, py, size, biomeKey: bd.key, biomeName: bd.nom, rarity: rarityInfo, img };
        if (!wrapper._spawnMarkers) wrapper._spawnMarkers = [];
        wrapper._spawnMarkers.push(spawnMarker);

        img.onload = () => {
            const rs = spawnMarker.rarity;

            const tipEl = document.createElement("div");
            tipEl.style.cssText = `
                position: fixed;
                background: rgba(20,24,20,.97);
                border: 1.5px solid ${rs.border};
                border-radius: 4px;
                padding: .55rem .9rem;
                pointer-events: none;
                z-index: 9999;
                opacity: 0;
                transition: opacity .15s ease;
                backdrop-filter: blur(4px);
                white-space: nowrap;
                box-shadow: 0 4px 20px rgba(0,0,0,.6);
                display: flex;
                flex-direction: column;
                gap: .25rem;
            `;
            tipEl.innerHTML = `
                <div style="font-family:var(--pixel);font-size:.65rem;letter-spacing:.08em;color:var(--animal-accent);">${entity.nom}</div>
                <div style="font-size:.8rem;color:var(--text3);">Fréquence dans <span style="color:${colorMap[spawnMarker.biomeKey].base};font-weight:600;">${spawnMarker.biomeName}</span></div>
                <div style="padding:2px 8px;border-radius:2px;font-size:.75rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;background:${rs.bg};color:${rs.color};border:1px solid ${rs.border};width:fit-content;">${rs.label}</div>
            `;
            document.body.appendChild(tipEl);

            const headEl = document.createElement("img");
            headEl.src = img.src;
            headEl.style.cssText = `
                position: absolute;
                left: ${(px / MAP_W * 100)}%;
                top: ${(py / MAP_H * 100)}%;
                width: ${(size / MAP_W * 100)}%;
                aspect-ratio: 1;
                transform: translate(-50%, -50%) scale(1);
                image-rendering: pixelated;
                cursor: crosshair;
                z-index: 5;
                transition: transform 0.2s ease, filter 0.2s ease;
                filter: drop-shadow(0 2px 6px rgba(0,0,0,0.6));
                pointer-events: auto;
            `;

            headEl.addEventListener("mouseenter", (e) => {
                if (hasDragged) return;
                headEl.style.transform = "translate(-50%, -50%) scale(1.4)";
                headEl.style.filter = `drop-shadow(0 4px 14px ${rs.color}aa)`;
                tipEl.style.opacity = "1";
                tipEl.style.left = (e.clientX + 14) + "px";
                tipEl.style.top = (e.clientY - 60) + "px";

                drawOverlay(spawnMarker.biomeKey);
                lastKey = spawnMarker.biomeKey;
                legend.querySelectorAll(".mc-legend-item").forEach(item => {
                    item.style.opacity = item.dataset.key === spawnMarker.biomeKey ? "1" : "0.25";
                    item.style.fontWeight = item.dataset.key === spawnMarker.biomeKey ? "700" : "400";
                    item.style.color = item.dataset.key === spawnMarker.biomeKey ? "var(--text)" : "";
                });
            });

            headEl.addEventListener("mousemove", (e) => {
                tipEl.style.left = (e.clientX + 14) + "px";
                tipEl.style.top = (e.clientY - 60) + "px";
            });

            headEl.addEventListener("mouseleave", () => {
                headEl.style.transform = "translate(-50%, -50%) scale(1)";
                headEl.style.filter = "drop-shadow(0 2px 6px rgba(0,0,0,0.6))";
                tipEl.style.opacity = "0";

                drawOverlay(null);
                lastKey = null;
                legend.querySelectorAll(".mc-legend-item").forEach(item => {
                    item.style.opacity = "1";
                    item.style.fontWeight = "400";
                    item.style.color = "";
                });
            });

            headLayer.appendChild(headEl);
            spawnMarker.headEl = headEl;
        };
    });

    const tooltip = document.createElement("div");
    tooltip.className = "mc-tooltip";
    tooltip.innerHTML = `<div class="mc-tooltip-name"></div>`;
    wrapper.appendChild(tooltip);

    const legend = document.createElement("div");
    legend.className = "mc-legend";
    BIOME_DEFS.forEach(bd => {
        const item = document.createElement("div");
        item.className = "mc-legend-item";
        item.dataset.key = bd.key;
        item.innerHTML = `<span class="mc-legend-dot" style="background:${bd.base};box-shadow:0 0 0 1px ${bd.shade}"></span><span>${bd.nom}</span>`;
        legend.appendChild(item);
    });
    wrapper.appendChild(legend);

    container.innerHTML = "";
    container.appendChild(wrapper);

    let lastKey = null;

    function drawOverlay(hoveredKey) {
        octx.clearRect(0, 0, MAP_W, MAP_H);
        if (!hoveredKey) return;
        for (let r = 0; r < H; r++) {
            for (let c = 0; c < W; c++) {
                if (TMAP[r][c] !== hoveredKey) {
                    octx.fillStyle = `rgba(0,0,0,${OVERLAY_DARKNESS})`;
                    octx.fillRect(c * CELL, r * CELL, CELL, CELL);
                } else {
                    octx.fillStyle = "rgba(255,255,255,0.14)";
                    octx.fillRect(c * CELL, r * CELL, CELL, CELL);
                }
            }
        }
    }

    canvas.addEventListener("mousemove", (e) => {
        if (isDragging) { tooltip.style.opacity = "0"; return; }

        const r = canvas.getBoundingClientRect();
        const scaleX = MAP_W / r.width;
        const scaleY = MAP_H / r.height;
        const col = Math.floor((e.clientX - r.left) * scaleX / CELL);
        const row = Math.floor((e.clientY - r.top) * scaleY / CELL);

        if (col < 0 || col >= W || row < 0 || row >= H) {
            tooltip.style.opacity = "0";
            return;
        }

        const key = (TMAP[row] && TMAP[row][col]) ? TMAP[row][col] : "ocean";
        const bd = colorMap[key] || colorMap["ocean"];

        if (key !== lastKey) {
            drawOverlay(key);
            lastKey = key;
            legend.querySelectorAll(".mc-legend-item").forEach(item => {
                item.style.opacity = item.dataset.key === key ? "1" : "0.25";
                item.style.fontWeight = item.dataset.key === key ? "700" : "400";
                item.style.color = item.dataset.key === key ? "var(--text)" : "";
            });
        }

        const nameEl = tooltip.querySelector(".mc-tooltip-name");
        nameEl.textContent = bd.nom;
        nameEl.style.color = bd.base;
        tooltip.style.borderColor = bd.base;

        const wrapRect = wrapper.getBoundingClientRect();
        let ttx = e.clientX - wrapRect.left + 14;
        let tty = e.clientY - wrapRect.top - 10;
        if (ttx + 240 > wrapRect.width) ttx -= 260;
        tooltip.style.left = ttx + "px";
        tooltip.style.top = tty + "px";
        tooltip.style.opacity = "1";
    });

    canvas.addEventListener("mouseleave", () => {
        octx.clearRect(0, 0, MAP_W, MAP_H);
        lastKey = null;
        tooltip.style.opacity = "0";
        legend.querySelectorAll(".mc-legend-item").forEach(item => {
            item.style.opacity = "1";
            item.style.fontWeight = "400";
            item.style.color = "";
        });
    });
}