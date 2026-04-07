(() => {
    const depth = (window.location.pathname.match(/\//g) || []).length - 1;
    const root = '../'.repeat(depth);

    const style = document.createElement('style');
    style.textContent = `
        nav#navbar {
            position: fixed;
            top: 0; left: 0; right: 0;
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 3rem;
            height: 72px;
            background: rgba(32, 36, 32, .85);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid var(--border);
            transition: height .3s ease, background .3s ease, box-shadow .3s ease;
        }
        nav#navbar.scrolled {
            height: 60px;
            background: rgba(32, 36, 32, .97);
            box-shadow: 0 4px 30px rgba(58, 122, 60, .2);
        }

        .nav-progress {
            position: absolute;
            bottom: -1px; left: 0;
            height: 2px; width: 0%;
            background: linear-gradient(90deg, var(--green), var(--green2));
            box-shadow: 0 0 10px rgba(82, 196, 90, .6);
            transition: width .1s linear;
            pointer-events: none;
        }

        .nav-logo {
            display: flex;
            align-items: center;
            gap: 12px;
            text-decoration: none;
            flex-shrink: 1;
            min-width: 0;
            overflow: hidden;
        }
        .nav-logo img {
            height: 40px;
            flex-shrink: 0;
            image-rendering: pixelated;
            filter: drop-shadow(0 0 8px rgba(212, 100, 26, .6));
            transition: transform .3s ease;
        }
        .nav-logo:hover img { transform: scale(1.08) rotate(-2deg); }
        .nav-logo span {
            font-family: var(--pixel);
            font-size: .91rem;
            color: var(--green2);
            letter-spacing: .05em;
            text-shadow: var(--glow-g);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .nav-links {
            display: flex;
            align-items: center;
            gap: 2rem;
            list-style: none;
            margin: 0; padding: 0;
        }
        .nav-links a {
            color: var(--text2);
            text-decoration: none;
            font-weight: 500;
            font-size: .95rem;
            position: relative;
            transition: color .25s;
        }
        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: -4px; left: 0;
            width: 0; height: 2px;
            background: var(--green2);
            transition: width .3s ease;
        }
        .nav-links a:hover { color: var(--text); }
        .nav-links a:hover::after { width: 100%; }

        .nav-links a.nav-cta {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 10px 22px;
            background: #d4641a;
            color: #fff !important;
            border-radius: 4px;
            font-weight: 700;
            font-size: .9rem;
            white-space: nowrap;
            box-shadow: 0 4px 15px rgba(212, 100, 26, .4);
            transition: background .3s ease, transform .3s ease, box-shadow .3s ease;
        }
        .nav-links a.nav-cta::after { display: none !important; }
        .nav-links a.nav-cta:hover {
            background: #f07a2a;
            transform: translateY(-4px) scale(1.025);
            box-shadow: 0 8px 25px rgba(212, 100, 26, .6);
            color: #fff !important;
        }

        .nav-search-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 36px; height: 36px;
            background: transparent;
            border: 1.5px solid var(--border);
            border-radius: 4px;
            color: var(--text3);
            cursor: pointer;
            transition: border-color .25s, color .25s;
        }
        .nav-search-btn:hover {
            border-color: var(--green2);
            color: var(--green2);
        }

        .nav-burger {
            display: none;
            flex-direction: column;
            justify-content: center;
            gap: 5px;
            width: 36px; height: 36px;
            background: transparent;
            border: 1.5px solid var(--border);
            border-radius: 4px;
            cursor: pointer;
            padding: 6px;
            flex-shrink: 0;
            transition: border-color .25s;
        }
        .nav-burger span {
            display: block;
            height: 2px;
            background: var(--text2);
            border-radius: 2px;
            transition: transform .3s ease, opacity .3s ease;
        }
        .nav-burger:hover { border-color: var(--green2); }
        nav#navbar.nav-open .nav-burger span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        nav#navbar.nav-open .nav-burger span:nth-child(2) { opacity: 0; }
        nav#navbar.nav-open .nav-burger span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        @media (max-width: 1300px) {
            nav#navbar {
                padding: 0 1.5rem;
                gap: 1rem;
            }
            .nav-burger {
                display: flex;
                flex-shrink: 0;
                flex: 0 0 36px;
            }
            .nav-logo {
                flex: 1 1 0;
                min-width: 0;
                overflow: hidden;
            }
            .nav-links {
                display: none;
                position: absolute;
                top: 100%; left: 0; right: 0;
                flex-direction: column;
                align-items: stretch;
                gap: 0;
                background: rgba(32, 36, 32, .98);
                backdrop-filter: blur(20px);
                border-bottom: 1px solid var(--border);
                padding: .5rem 0;
            }
            nav#navbar.nav-open .nav-links { display: flex; }
            .nav-links li { border-bottom: 1px solid var(--border); }
            .nav-links li:last-child { border-bottom: none; }
            .nav-links a { display: block; padding: .9rem 1.5rem; font-size: 1rem; }
            .nav-links a::after { display: none; }
            .nav-links a.nav-cta { margin: .5rem 1.5rem; justify-content: center; }
            .nav-search-btn {
                margin: .5rem 1.5rem .75rem;
                width: auto;
                justify-content: flex-start;
                gap: .5rem;
                padding: .9rem 1.5rem;
                border: none;
                border-top: 1px solid var(--border);
                border-radius: 0;
                color: var(--text2);
            }
            .nav-search-btn::before {
                content: 'Rechercher';
                font-size: 1rem;
                font-family: var(--body);
                font-weight: 500;
            }
        }
        @media (max-width: 600px) {
            nav#navbar { padding: 0 1rem; gap: .75rem; }
            .nav-logo { display: none; }
            .nav-logo img { height: 32px; }
        }
        @media (max-width: 380px) {
            nav#navbar { padding: 0 .75rem; gap: .5rem; }
            .nav-logo img { height: 28px; }
        }
    `;
    document.head.appendChild(style);

    const nav = document.createElement('nav');
    nav.id = 'navbar';
    nav.innerHTML = `
        <div class="nav-progress" id="navProgress"></div>

        <a href="${root}index.html" class="nav-logo">
            <img src="${root}src/assets/Official-Logo.png" alt="OW Logo" />
            <span>Operation W.I.L.D | Wiki</span>
        </a>

        <ul class="nav-links">
            <li><a href="${root}index.html">Accueil <img src='${root}src/assets/Official-Logo.png' style='width: 25px; height: 25px; vertical-align: middle; margin-left: 5px;'/></a></li>
            <li><a href="${root}index.html#about">À propos</a></li>
            <li><a href="${root}index.html#animals">Animaux</a></li>
            <li><a href="${root}index.html#roadmap">Roadmap</a></li>
            <li><a href="${root}index.html#contact">Contact</a></li>
            <li><a href="${root}index.html#download" class="nav-cta">
                <i class="fa-solid fa-download"></i>Télécharger
            </a></li>
            <li>
                <button class="nav-search-btn" id="navSearchBtn" title="Rechercher (Shift+Entrée)">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="7"/>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    </svg>
                </button>
            </li>
        </ul>

        <button class="nav-burger" id="navBurger" aria-label="Menu" aria-expanded="false">
            <span></span><span></span><span></span>
        </button>
    `;
    document.body.prepend(nav);

    const prog = document.getElementById('navProgress');

    function updateScroll() {
        nav.classList.toggle('scrolled', window.scrollY > 60);
        if (prog) {
            const total = document.documentElement.scrollHeight - window.innerHeight;
            prog.style.width = (total > 0 ? (window.scrollY / total) * 100 : 0) + '%';
        }
    }

    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });

    const burger = document.getElementById('navBurger');
    if (burger) {
        burger.addEventListener('click', () => {
            const open = nav.classList.toggle('nav-open');
            burger.setAttribute('aria-expanded', open);
        });
        nav.querySelectorAll('.nav-links a').forEach(a =>
            a.addEventListener('click', () => {
                nav.classList.remove('nav-open');
                burger.setAttribute('aria-expanded', 'false');
            })
        );
    }

    const searchBtn = document.getElementById('navSearchBtn');
    if (searchBtn) {
        searchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            document.dispatchEvent(new KeyboardEvent('keydown', {
                key: 'Enter',
                code: 'Enter',
                shiftKey: true,
                bubbles: true
            }));
        });
    }
})();