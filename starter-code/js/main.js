fetch('../data.json')
    .then(response => response.json())
    .then(data => console.log(data))

navigation = document.querySelector('#navegacao');
links = document.querySelectorAll('.cabecalho__link');
navigation.addEventListener('click', (e) => {

    if (e.target.dataset.link === 'home') {

        e.target.classList.toggle('active');
        links.forEach(link => {
            if (link.dataset.link != 'home') {
                link.classList.remove('active');
            }
        });
        exibeHome()

    } else if (e.target.dataset.link === 'destination') {

        e.target.classList.toggle('active');
        links.forEach(link => {
            console.log(link)
            if (link.dataset.link != 'destination') {
                link.classList.remove('active');
            }
        });
        exbibeDestination()


    } else if (e.target.dataset.link === 'crew') {

        e.target.classList.toggle('active');
        links.forEach(link => {
            if (link.dataset.link != 'crew') {
                link.classList.remove('active');
            }
        });
        exibeCrew()

    } else if (e.target.dataset.link === 'tech') {

        e.target.classList.toggle('active');
        links.forEach(link => {
            if (link.dataset.link != 'tech') {
                link.classList.remove('active');
            }
        });
        exibeTech() 
    }

})

principal = document.querySelector('#principal');

function exbibeDestination() {
    let template = `
                    <section class="destination container">
                    <div class="box-sub-img">
                        <h3 class="destination__subtitle subtitulo">01 Pick your destination</h3>
                        <img class="destination__img" src="../assets/destination/image-moon.png" alt="moon">
                    </div>
                    <div class="box-nav-text">
                        <nav class="destination__nav">
                            <ul class="destination__lista">
                                <li class="destination__item"><a class="destination__link active-destination" href="#">Moon</a></li>
                                <li class="destination__item"><a class="destination__link" href="#">Mars</a></li>
                                <li class="destination__item"><a class="destination__link" href="#">Europa</a></li>
                                <li class="destination__item"><a class="destination__link" href="#">Titan</a></li>
                            </ul>
                        </nav>

                        <h1 class="destination__title">Europa</h1>

                        <p class="destination__paragrafo paragrafo">The smallest of the four Galilean moons orbiting Jupiter, Europa is a
                            winter lover's dream. With an icy surface, it's perfect for a bit of
                            ice skating, curling, hockey, or simple relaxation in your snug
                            wintery cabin.</p>
                        <hr>
                    <div class="info_container">
                        <div class="info-box">
                            <span class="destination__infoTitle">Avg. distance</span>
                            <span class="destination__info">628 mil. km</span>
                        </div>
                        <div class="info-box">
                            <span class="destination__infoTitle">Est. travel time</span>
                            <span class="destination__info">3 years</span>
                        </div>
                    </div>
                    </div>

                </section>
    `
    principal.innerHTML = template;
}

function exibeCrew() {
   
    let template = `
                    <section class="crew container">
                    <h2 class="crew__subtitulo subtitulo"> <span>02</span> Meet your crew</h2>
                    <div class="img-box">
                        <img src="../assets/crew/image-douglas-hurley.png" alt="" class="crew__img">
                    </div>
                    <div class="crew__inputs-box">
                        <label class="crew__label crew-active" for="equipe"></label><input name="equipe" type="radio">
                        <label class="crew__label" for="equipe"></label><input name="equipe" type="radio">
                        <label class="crew__label" for="equipe"></label><input name="equipe" type="radio">
                        <label class="crew__label for=" equipe"></label><input name="equipe" type="radio">
                    </div>
                    <div class="description-box">
                        <span class="crew__profissao">Commander</span>
                        <span class="crew__nome"> Douglas Hurley</span>
                        <p class="crew__paragrafo paragrafo">
                            Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
                            and former NASA astronaut. He launched into space for the third time as
                            commander of Crew Dragon Demo-2.
                        </p>
                    </div>
                </section>
    
    
    `
    principal.innerHTML = template;
}

function exibeTech() {

    let template =

                    `
                    <section class="tech container">
                    <h2 class="tech__subtitulo subtitulo"> <span>02</span> Meet your crew</h2>
            
                    <img src="../assets/technology/image-launch-vehicle-landscape.jpg" alt="" class="tech__img">
            
                    <div class="tech__inputs-box">
                    <label class="tech__label tech-active" for="equipe">1</label><input name="equipe" type="radio">
                    <label class="tech__label" for="equipe">2</label><input name="equipe" type="radio">
                    <label class="tech__label" for="equipe">3</label><input name="equipe" type="radio">
                    </div>
                    <div class="techDescription-box">
                    <span class="tech__terminologia">THE TERMINOLOGY…</span>
                    <span class="tech__termo"> LAUNCH VEHICLE</span>
                    <p class="tech__paragrafo paragrafo">
                        A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!
                    </p>
                    </div>
                </section>
    `
    principal.innerHTML = template;
}

function exibeHome(){
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

    <button class="home__botao">Explore</button>

</section>
    
    
    `
    principal.innerHTML = template;
}


function dadosDestination(){

}
function dadosCrew(){
    
}