function exibeHome() {
    template = `
        <section class="home container">
                
        <div class="banner-box">
            <h2 class="home__subtitulo subtitulo">So, you want to travel to</h2>
            <h1 class="home__titulo">Space</h1>
            <p class="home__paragrafo">Let's face it; if you want to go to space, you might as well genuinely go to
                outer space and not hover kind of on the edge of it. Well sit back, and relax
                because we'll give you a truly out of this world experience!
            </p>
        </div>

        <button id="explore" class="home__botao">Explore</button>

    </section>
        
        
        `
    principal.innerHTML = template;
    
    document.querySelector("#explore").addEventListener('click', botaoExplore);
}


document.querySelector("#explore").addEventListener('click', botaoExplore);

function botaoExplore() {
    let body = document.querySelector('body');
    let links = document.querySelectorAll('.cabecalho__link');
    exbibeDestination();
    links[1].classList.toggle('active');
    links[0].classList.toggle('active');
    body.classList.add('destination_bkg');
    body.classList.remove('crew_bkg');
    body.classList.remove('tech_bkg');
    body.classList.remove('home_bkg');
}