function initSounds(SOUNDS, SOUND_CATEGORIES) {

    let soundFilter = "Tous";
    let currentAudio = null;
    let currentId = null;
    let rafId = null;

    const SOUND_TABS = ["Tous", ...Object.keys(SOUND_CATEGORIES)];

    function resetBars(row) {
        const sndId = row.dataset.id;
        const snd = SOUNDS.find(s => s.id === sndId);
        if (!snd) return;
        const c = SOUND_CATEGORIES[snd.categorie];
        row.querySelectorAll(".sound-bar").forEach(b => {
            b.style.background = c.color;
            b.style.opacity = "";
        });
    }

    function resetBtn(btn, row) {
        btn.querySelector(".icon-play").style.display = "";
        btn.querySelector(".icon-pause").style.display = "none";
        row.classList.remove("playing");
        resetBars(row);
    }

    function stopProgress() {
        if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
    }

    function startProgress(audio, row) {
        stopProgress();
        const bars = row.querySelectorAll(".sound-bar");
        if (!bars.length) return;

        const sndId = row.dataset.id;
        const snd = SOUNDS.find(s => s.id === sndId);
        const c = SOUND_CATEGORIES[snd.categorie];
        const colorPlayed = "var(--green2)";
        const colorUnplayed = c ? c.color : "rgba(255,255,255,0.15)";

        function tick() {
            if (audio.duration) {
                const threshold = Math.floor((audio.currentTime / audio.duration) * bars.length);
                bars.forEach((b, i) => {
                    b.style.background = i < threshold ? colorPlayed : colorUnplayed;
                    b.style.opacity = i < threshold ? "1" : "0.3";
                });
            }
            if (!audio.paused && !audio.ended) rafId = requestAnimationFrame(tick);
        }
        rafId = requestAnimationFrame(tick);
    }

    function stopCurrent() {
        stopProgress();
        if (!currentAudio) return;
        currentAudio.onended = null;
        currentAudio.onerror = null;
        currentAudio.pause();
        currentAudio = null;

        const row = document.querySelector(".sound-row.playing");
        if (row) {
            row.classList.remove("playing");
            row.querySelector(".icon-play").style.display = "";
            row.querySelector(".icon-pause").style.display = "none";
            resetBars(row);
        }
        currentId = null;
    }

    function renderSoundCategories() {
        document.getElementById("sounds-categories").innerHTML = SOUND_TABS.map(tab => {
            const cat = SOUND_CATEGORIES[tab];
            const active = tab === soundFilter;
            const style = active && cat
                ? `color:${cat.color};border-bottom-color:${cat.color};`
                : active ? "color:var(--text);border-bottom-color:var(--orange2);" : "";
            return `<div class="sound-tab ${active ? "active" : ""}" data-tab="${tab}" style="${style}">${cat ? cat.label : "Tous"}</div>`;
        }).join("");

        document.querySelectorAll(".sound-tab").forEach(el => {
            el.addEventListener("click", () => {
                soundFilter = el.dataset.tab;
                renderSoundCategories();
                renderSoundsList();
            });
        });
    }

    function renderSoundsList() {
        const filtered = soundFilter === "Tous"
            ? SOUNDS
            : SOUNDS.filter(s => s.categorie === soundFilter);

        document.getElementById("sounds-list").innerHTML = filtered.map(snd => {
            const c = SOUND_CATEGORIES[snd.categorie];
            const bars = Array.from({ length: 20 }, (_, i) => {
                const h = 20 + Math.abs(Math.sin(i * 0.8 + snd.id.length) * 55);
                return `<div class="sound-bar" style="height:${h}%;background:${c.color};"></div>`;
            }).join("");

            return `
            <div class="sound-row" data-id="${snd.id}">
              <button class="sound-play-btn" data-id="${snd.id}" data-src="${snd.src}" aria-label="Lire ${snd.nom}"
                style="border-color:${c.border};color:${c.color};background:${c.bg};">
                <svg class="icon-play"  viewBox="0 0 12 12" fill="currentColor"><polygon points="2,1 11,6 2,11"/></svg>
                <svg class="icon-pause" viewBox="0 0 12 12" fill="currentColor" style="display:none;">
                  <rect x="1.5" y="1" width="3.5" height="10" rx="1"/>
                  <rect x="7"   y="1" width="3.5" height="10" rx="1"/>
                </svg>
              </button>
              <div class="sound-info">
                <div class="sound-name">${snd.nom}</div>
                <div class="sound-badge" style="color:${c.color};background:${c.bg};border:1px solid ${c.border};">${c.label}</div>
              </div>
              <div class="sound-wave" id="wave-${snd.id}">${bars}</div>
              <div class="sound-duration" id="dur-${snd.id}" style="font-size:0.60em;">--</div>
            </div>`;
        }).join("");

        filtered.forEach(snd => {
            const a = new Audio();
            a.preload = "metadata";
            a.addEventListener("loadedmetadata", () => {
                const el = document.getElementById("dur-" + snd.id);
                if (!el) return;
                const m = Math.floor(a.duration / 60);
                const s = Math.floor(a.duration % 60).toString().padStart(2, "0");
                el.textContent = m > 0 ? `${m}:${s}` : `0:${s}`;
            });
            a.src = snd.src;
        });

        document.querySelectorAll(".sound-play-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const id = btn.dataset.id;
                const src = btn.dataset.src;
                const row = btn.closest(".sound-row");

                if (currentId === id) { stopCurrent(); return; }

                stopCurrent();

                const audio = new Audio();
                audio.volume = 1.0;
                currentAudio = audio;
                currentId = id;

                audio.onended = () => {
                    resetBtn(btn, row);
                    currentAudio = null;
                    currentId = null;
                };

                audio.onerror = () => {
                    resetBtn(btn, row);
                    btn.style.borderColor = "#ef5350";
                    btn.title = "Fichier audio introuvable";
                    setTimeout(() => { btn.style.borderColor = ""; btn.title = ""; }, 2500);
                    currentAudio = null;
                    currentId = null;
                };

                audio.src = src;
                audio.load();

                audio.play()
                    .then(() => {
                        btn.querySelector(".icon-play").style.display = "none";
                        btn.querySelector(".icon-pause").style.display = "";
                        row.classList.add("playing");
                        startProgress(audio, row);
                    })
                    .catch(() => {
                        resetBtn(btn, row);
                        currentAudio = null;
                        currentId = null;
                    });
            });
        });
    }

    renderSoundCategories();
    renderSoundsList();
}