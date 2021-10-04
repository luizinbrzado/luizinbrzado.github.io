// +HEADER

let header = document.querySelector('header');

function headerNoDOM() {
    let headerHTML =
        `<a href="/" data-path="/">
            LuizIn<span>B</span><span>R</span>zado
        </a>
        <nav id="nav">
            <button id="btn-mobile" aria-label="Abrir menu" aria-haspopup="true" aria-controls="menu" aria-expanded='false'>
                <i class="fas fa-bars fa-lg"></i>
            </button>
            <ul id="menu" role="menu">
                <li><a class="link link--metis" href="/projetos.html" data-path="/projetos.html">Projetos</a></li>
                <li><a class="link link--metis" href="/sobre-mim.html" data-path="/sobre-mim.html">Sobre mim</a></li>
                <li><a class="link link--metis" href="/contato.html" data-path="/contato.html">Contate-me</a></li>
            </ul>
        </nav>`
    
    header.id = 'header';
    header.innerHTML = headerHTML;
}

headerNoDOM();

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(e) {
    if (e.type === 'touchstart')
        e.preventDefault();

    const nav = document.getElementById('nav');
    nav.classList.toggle('active')

    const active = nav.classList.contains('active');

    e.currentTarget.setAttribute('aria-expanded', active);

    e.currentTarget.style.animation = 'menu 0.2s';
    
    setTimeout(() => {
        btnMobile.style.animation = '';
    }, 300);

    if (active) {
        e.currentTarget.setAttribute('aria-label', 'Fechar menu')
        btnMobile.innerHTML = '<i class="fas fa-times fa-lg"></i>';
    } else {
        e.currentTarget.setAttribute('aria-label', 'Abrir menu')
        btnMobile.innerHTML = '<i class="fas fa-bars fa-lg"></i>';
    }
}

btnMobile.addEventListener('touchstart', toggleMenu)

btnMobile.addEventListener('click', toggleMenu)

// /+HEADER


// +FOOTER

let footer = document.querySelector('footer');

function footerNoDom() {
    let footerHTML =
        `<a href="https://github.com/luizinbrzado" target="_blank" rel="noopener"><i class="fab fa-github-square fa-3x"></i></a>
        <p><span>&#169</span> Copyright -  Feito com &#128151 por <a class="link link--metis" href="https://beacons.ai/luizinbrzado" target="_blank" rel="noopener">luizinbrzado</a></p>
        <a href="https://www.linkedin.com/in/luizinbrzado/" target="_blank" rel="noopener"><i class="fab fa-linkedin fa-3x"></i></a>`

    footer.innerHTML = footerHTML;
}

footerNoDom();

// /+FOOTER