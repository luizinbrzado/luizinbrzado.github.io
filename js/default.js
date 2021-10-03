// +HEADER

let header = document.querySelector('header');

function headerNoDOM() {
    let headerHTML =
        `<div class="header-content">
            <div class="logo">
                <a href="/" data-path="/">
                    <img src="./img/logo.png" alt="">
                </a>
            </div>
            <div class="main-nav">
                <a href="/projetos.html" data-path="/projetos.html">Projetos</a>
                <a href="/sobre-mim.html" data-path="/sobre-mim.html">Sobre mim</a>
                <a href="/contato.html" data-path="/contato.html">Contate-me</a>
            </div>
        </div>`
    
        header.innerHTML = headerHTML;
}

headerNoDOM();
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