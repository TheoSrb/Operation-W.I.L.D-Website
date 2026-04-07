const ANIMALS_SPECIES_NUMBER = ENTITIES.length;
const BIOMES_NUMBER = document.querySelectorAll('#biomesGrid .biome-card').length;
const MUSIC_NUMBER = document.querySelectorAll('#musicList .music-track').length;
const MOD_ACTUAL_VERSION = "Bêta V0.1";

const CURSEFORGE_MOD_ID = 1349902;

function startNumberAnimation(el) {
    if (el.dataset.animating || el.dataset.animated) return;
    const targetStr = el.dataset.target;
    if (targetStr === undefined) return;

    el.dataset.animating = "true";
    const target = parseFloat(targetStr);
    const duration = 1000;
    let startTimestamp = null;
    const formatterType = el.dataset.format;

    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const easeInOut = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
        const current = easeInOut * target;

        let displayVal = Math.floor(current);
        if (formatterType === "curseforge") displayVal = current;

        if (formatterType === "plus") {
            el.textContent = "+" + displayVal;
        } else if (formatterType === "curseforge") {
            el.textContent = formatCount(displayVal) + "+";
        } else {
            el.textContent = displayVal;
        }

        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            el.dataset.animated = "true";
            delete el.dataset.animating;
            if (formatterType === "plus") {
                el.textContent = "+" + target;
            } else if (formatterType === "curseforge") {
                el.textContent = formatCount(target) + "+";
            } else {
                el.textContent = target;
            }
        }
    };
    window.requestAnimationFrame(step);
}

document.getElementById("animalsGrid").innerHTML = ENTITIES.map(renderAnimalCard).join("");

document.querySelectorAll(".animals-count").forEach(el => {
    if (el.closest('#stats')) {
        el.dataset.target = ANIMALS_SPECIES_NUMBER;
        el.dataset.format = "plus";
        el.textContent = "0";
    } else {
        el.textContent = "+" + ANIMALS_SPECIES_NUMBER;
    }
});

document.querySelectorAll(".animals-count-2").forEach(el => {
    el.textContent = "(+" + ANIMALS_SPECIES_NUMBER + ")";
});

document.querySelectorAll(".biomes-count-2").forEach(el => {
    el.textContent = "(+" + BIOMES_NUMBER + ")";
});

document.querySelectorAll(".music-count-2").forEach(el => {
    el.textContent = "(+" + Math.max(0, MUSIC_NUMBER - 5) + ")";
});

document.querySelectorAll(".biomes-count").forEach(el => {
    if (el.closest('#stats')) {
        el.dataset.target = BIOMES_NUMBER;
        el.dataset.format = "none";
        el.textContent = "0";
    } else {
        el.textContent = BIOMES_NUMBER;
    }
});

document.querySelectorAll(".mod-version").forEach(el => {
    el.textContent = MOD_ACTUAL_VERSION;
});

const cfDownloads = document.getElementById("cf-downloads");
if (cfDownloads) cfDownloads.textContent = "0";

fetch(`https://api.cfwidget.com/minecraft/mc-mods/${CURSEFORGE_MOD_ID}`)
    .then(res => res.json())
    .then(data => {
        const downloads = data.downloads.total;
        if (cfDownloads) {
            cfDownloads.dataset.target = downloads;
            cfDownloads.dataset.format = "curseforge";
            if (cfDownloads.closest('.reveal') && cfDownloads.closest('.reveal').classList.contains('visible')) {
                startNumberAnimation(cfDownloads);
            }
        }
    });

function formatCount(n) {
    if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
    if (n >= 1000) return Math.floor(n / 1000) + "K";
    return Math.floor(n);
}

const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
});

const pContainer = document.getElementById('particles');
const pColors = ['#52c45a', '#d4641a', '#5abadc'];
for (let i = 0; i < 25; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `
      left:${Math.random() * 100}%;
      width:${Math.random() * 3 + 2}px;
      height:${Math.random() * 3 + 2}px;
      animation-duration:${Math.random() * 10 + 8}s;
      animation-delay:${Math.random() * 8}s;
      background:${pColors[Math.floor(Math.random() * 3)]};
      border-radius:1px;
    `;
    pContainer.appendChild(p);
}

const carouselViewport = document.querySelector('.carousel-viewport');
const carouselTrack = document.getElementById('carouselTrack');
const dotsWrap = document.getElementById('dots');

const realSlides = Array.from(carouselTrack.querySelectorAll('.carousel-slide'));
const N = realSlides.length;

const cloneFirst = realSlides[0].cloneNode(true);
const cloneLast = realSlides[N - 1].cloneNode(true);
cloneFirst.setAttribute('aria-hidden', 'true');
cloneLast.setAttribute('aria-hidden', 'true');
carouselTrack.appendChild(cloneFirst);
carouselTrack.insertBefore(cloneLast, carouselTrack.firstChild);

const allSlides = Array.from(carouselTrack.querySelectorAll('.carousel-slide'));

let pos = 1;
let locked = false;
let autoTimer = null;

realSlides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => { goToPos(i + 1); resetAuto(); });
    dotsWrap.appendChild(dot);
});

function slideWidth() {
    return carouselViewport.offsetWidth;
}

function goToPos(newPos, animate = true) {
    if (locked && animate) return;
    locked = animate;

    const w = slideWidth();
    if (!animate) {
        carouselTrack.style.transition = 'none';
    } else {
        carouselTrack.style.transition = 'transform .6s cubic-bezier(.25,.46,.45,.94)';
    }
    pos = newPos;
    carouselTrack.style.transform = `translateX(-${pos * w}px)`;
    updateDots();
}

carouselTrack.addEventListener('transitionend', () => {
    locked = false;
    if (pos === 0) {
        goToPos(N, false);
    } else if (pos === N + 1) {
        goToPos(1, false);
    }
});

function updateDots() {
    let realIdx = pos - 1;
    if (pos === 0) realIdx = N - 1;
    if (pos === N + 1) realIdx = 0;
    document.querySelectorAll('.carousel-dot').forEach((d, i) => {
        d.classList.toggle('active', i === realIdx);
    });
}

function prev() { goToPos(pos - 1); resetAuto(); }
function next() { goToPos(pos + 1); resetAuto(); }

function resetAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(next, 5000);
}

document.getElementById('prevBtn').addEventListener('click', prev);
document.getElementById('nextBtn').addEventListener('click', next);

window.addEventListener('resize', () => goToPos(pos, false));

goToPos(1, false);
resetAuto();

const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            if (!e.target.classList.contains('visible')) {
                e.target.classList.add('visible');
                e.target.querySelectorAll('.animals-count, .biomes-count, #cf-downloads').forEach(el => {
                    if (typeof startNumberAnimation === 'function') {
                        startNumberAnimation(el);
                    }
                });
            }
        }
    });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;

        if (filter !== 'all' && window.animPagination) {
            window.animPagination.expand();
        }

        document.querySelectorAll('.animal-card').forEach(card => {
            const visible = filter === 'all' || card.dataset.type.split(' ').includes(filter);
            if (visible) {
                card.style.display = '';
                requestAnimationFrame(() => { card.style.opacity = '1'; card.style.transform = ''; });
            } else {
                card.style.opacity = '0';
                setTimeout(() => { card.style.display = 'none'; }, 300);
            }
        });
    });
});

const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const pseudo = form.querySelector('[name="pseudonyme"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const sujet = form.querySelector('[name="sujet"]').value;
    const msg = form.querySelector('[name="message"]').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!pseudo || !email || !sujet || sujet === '' || !msg) {
        alert('Veuillez remplir tous les champs.');
        return;
    }
    if (!emailRegex.test(email)) {
        alert('Adresse email invalide.');
        return;
    }

    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
    }).then(res => {
        if (res.ok) {
            const toast = document.getElementById('toast');
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 4000);
            form.reset();
        } else {
            alert('Erreur lors de l\'envoi. Réessayez.');
        }
    });
});

const animalsGrid = document.getElementById('animalsGrid');
Array.from(animalsGrid.querySelectorAll('.animal-card'))
    .sort((a, b) => a.querySelector('.animal-name').textContent.localeCompare(b.querySelector('.animal-name').textContent, 'fr'))
    .forEach(card => animalsGrid.appendChild(card));

function setupPagination(gridId, btnId, limit) {
    const grid = document.getElementById(gridId);
    const btn = document.getElementById(btnId);
    if (!grid || !btn) return null;

    let isExpanded = false;
    let cardClass, countClass, totalLabel;

    if (gridId === 'animalsGrid') {
        cardClass = '.animal-card';
        countClass = 'animals-count-2';
        totalLabel = 'toutes les créatures';
    } else if (gridId === 'biomesGrid') {
        cardClass = '.biome-card';
        countClass = 'biomes-count-2';
        totalLabel = 'tous les biomes';
    } else {
        cardClass = '.music-track';
        countClass = 'music-count-2';
        totalLabel = 'toutes les musiques';
    }

    function updatePagination() {
        const cards = Array.from(grid.querySelectorAll(cardClass));
        cards.forEach((card, index) => {
            card.classList.remove('hidden-by-pagination');
            if (!isExpanded && index >= limit) {
                card.classList.add('hidden-by-pagination');
            }
        });

        const total = cards.length;
        const remainingCount = Math.max(0, total - limit);

        if (remainingCount === 0) {
            btn.parentElement.style.display = 'none';
        } else {
            btn.parentElement.style.display = '';
            if (isExpanded) {
                btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 15l-6-6-6 6"></path></svg> Voir moins`;
            } else {
                btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg><span>Voir ${totalLabel} <span class="${countClass}">(+${remainingCount})</span></span>`;
            }
        }
        setTimeout(() => window.dispatchEvent(new Event('scroll')), 50);
    }

    updatePagination();

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        isExpanded = !isExpanded;
        updatePagination();
        if (!isExpanded) {
            grid.previousElementSibling.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });

    return { expand: () => { if (!isExpanded) { isExpanded = true; updatePagination(); } } };
}

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);

    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    document.getElementById('navProgress').style.width = pct + '%';
});

window.animPagination = setupPagination('animalsGrid', 'showAllAnimalsBtn', 8);
setupPagination('biomesGrid', 'showAllBiomesBtn', 4);
setupPagination('musicList', 'showAllMusicBtn', 5);

document.querySelector('.version-card.latest .version-name').textContent = '⚡ ' + VERSIONS.latest.name;
document.querySelector('.version-card.latest .version-meta').textContent = `Minecraft ${VERSIONS.latest.mc} · ${VERSIONS.latest.loader} · ${VERSIONS.latest.date} · ${VERSIONS.latest.size}`;

document.querySelector('.version-card.stable .version-name').textContent = VERSIONS.stable.name;
document.querySelector('.version-card.stable .version-meta').textContent = `Minecraft ${VERSIONS.stable.mc} · ${VERSIONS.stable.loader} · ${VERSIONS.stable.date} · ${VERSIONS.stable.size}`;

document.querySelector('.version-card.experimental .version-name').textContent = VERSIONS.experimental.name;
document.querySelector('.version-card.experimental .version-meta').textContent = `Minecraft ${VERSIONS.experimental.mc} · ${VERSIONS.experimental.loader} · ${VERSIONS.experimental.date} · ${VERSIONS.experimental.size}`;

document.querySelector('.version-card.latest').addEventListener('click', () => {
    window.location.href = 'files/' + VERSIONS.latest.file;
});

document.querySelector('.version-card.stable').addEventListener('click', () => {
    window.location.href = 'files/' + VERSIONS.stable.file;
});

document.querySelector('.version-card.experimental').addEventListener('click', () => {
    window.location.href = 'files/' + VERSIONS.experimental.file;
});

const audio = new Audio();
const player = document.getElementById('musicPlayer');
const mpTitle = document.getElementById('mpTitle');
const mpArtist = document.getElementById('mpArtist');
const mpPlayPause = document.getElementById('mpPlayPause');
const mpPrev = document.getElementById('mpPrev');
const mpNext = document.getElementById('mpNext');
const mpProgressBar = document.getElementById('mpProgressBar');
const mpProgressFill = document.getElementById('mpProgressFill');
const mpProgressThumb = document.getElementById('mpProgressThumb');
const mpCurrent = document.getElementById('mpCurrent');
const mpDuration = document.getElementById('mpDuration');
const mpVolume = document.getElementById('mpVolume');
const iconPlay = mpPlayPause.querySelector('.icon-play');
const iconPause = mpPlayPause.querySelector('.icon-pause');

const tracks = Array.from(document.querySelectorAll('.music-track'));
let currentIndex = -1;

function formatTime(s) {
    if (isNaN(s)) return '0:00';
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
}

function loadTrack(index) {
    const track = tracks[index];
    if (!track) return;

    tracks.forEach(t => t.classList.remove('active', 'playing'));
    track.classList.add('active', 'playing');
    currentIndex = index;

    const src = track.dataset.src;
    const title = track.dataset.title;
    const artist = track.dataset.artist;

    audio.src = src;
    audio.volume = parseFloat(mpVolume.value);
    audio.play();

    mpTitle.textContent = title;
    mpArtist.textContent = artist;
    player.classList.add('visible', 'playing');

    iconPlay.style.display = 'none';
    iconPause.style.display = '';

    audio.addEventListener('loadedmetadata', () => {
        track.querySelector('.music-track-duration').textContent = formatTime(audio.duration);
    }, { once: true });
}

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        player.classList.add('playing');
        tracks[currentIndex]?.classList.add('playing');
        iconPlay.style.display = 'none';
        iconPause.style.display = '';
    } else {
        audio.pause();
        player.classList.remove('playing');
        tracks[currentIndex]?.classList.remove('playing');
        iconPlay.style.display = '';
        iconPause.style.display = 'none';
    }
}

tracks.forEach((track, i) => {
    const src = track.dataset.src;
    if (src) {
        const tempAudio = new Audio();
        tempAudio.preload = 'metadata';
        tempAudio.addEventListener('loadedmetadata', () => {
            const durationEl = track.querySelector('.music-track-duration');
            if (durationEl) {
                durationEl.textContent = formatTime(tempAudio.duration);
            }
        });
        tempAudio.src = src;
        track._tempAudio = tempAudio;
    }

    track.addEventListener('click', () => {
        if (i === currentIndex) {
            togglePlayPause();
        } else {
            loadTrack(i);
        }
    });
});

mpPlayPause.addEventListener('click', () => {
    if (currentIndex === -1) loadTrack(0);
    else togglePlayPause();
});

mpPrev.addEventListener('click', () => {
    if (audio.currentTime > 3) {
        audio.currentTime = 0;
    } else {
        loadTrack((currentIndex - 1 + tracks.length) % tracks.length);
    }
});

mpNext.addEventListener('click', () => {
    loadTrack((currentIndex + 1) % tracks.length);
});

audio.addEventListener('ended', () => {
    const next = currentIndex + 1;
    if (next < tracks.length) {
        loadTrack(next);
    } else {
        tracks[currentIndex]?.classList.remove('playing');
        player.classList.remove('playing');
        iconPlay.style.display = '';
        iconPause.style.display = 'none';
        mpProgressFill.style.width = '0%';
        mpProgressThumb.style.left = '0%';
        mpCurrent.textContent = '0:00';
    }
});
audio.addEventListener('timeupdate', () => {
    if (!audio.duration) return;
    const pct = (audio.currentTime / audio.duration) * 100;
    mpProgressFill.style.width = pct + '%';
    mpProgressThumb.style.left = pct + '%';
    mpCurrent.textContent = formatTime(audio.currentTime);
    mpDuration.textContent = formatTime(audio.duration);
});

mpProgressBar.addEventListener('click', e => {
    const rect = mpProgressBar.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    audio.currentTime = pct * audio.duration;
});

mpVolume.addEventListener('input', () => {
    audio.volume = parseFloat(mpVolume.value);
});

const mpClose = document.getElementById('mpClose');
mpClose.addEventListener('click', () => {
    audio.pause();
    player.classList.remove('playing', 'visible');
    tracks.forEach(t => t.classList.remove('playing', 'active'));
    iconPlay.style.display = '';
    iconPause.style.display = 'none';
    currentIndex = -1;
    mpProgressFill.style.width = '0%';
    mpProgressThumb.style.left = '0%';
    mpCurrent.textContent = '0:00';
});

document.querySelectorAll('.biome-card').forEach(card => {
    card.addEventListener('click', (e) => {
        if (e.target.tagName !== 'A') {
            window.location.href = card.dataset.url;
        }
    });
});