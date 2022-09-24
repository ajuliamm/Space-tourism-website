function exbibeDestination() {
    let template = `
                        <section class="destination container">
                        <div class="box-sub-img">
                            <h3 class="destination__subtitle subtitulo">01 Pick your destination</h3>
                            <img id="destinationImg" class="destination__img" src="./assets/destination/image-moon.png" alt="moon">
                        </div>
                        <div class="box-nav-text">
                            <nav id="destinationNav" class="destination__nav">
                                <ul class="destination__lista">
                                    <li class="destination__item"><a class="destination__link active-destination" data-estado="ativo">Moon</a></li>
                                    <li class="destination__item"><a class="destination__link" data-estado="inativo">Mars</a></li>
                                    <li class="destination__item"><a class="destination__link" data-estado="inativo">Europa</a></li>
                                    <li class="destination__item"><a class="destination__link" data-estado="inativo">Titan</a></li>
                                </ul>
                            </nav>

                            <h1 id="destinationTitulo" class="destination__title">MOON</h1>

                            <p id="destinationParagrafo" class="destination__paragrafo paragrafo">See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                            <hr>
                        <div class="info_container">
                            <div class="info-box">
                                <span class="destination__infoTitle">Avg. distance</span>
                                <span id="destinationDistancia" class="destination__info">384,400 km</span>
                            </div>
                            <div class="info-box">
                                <span class="destination__infoTitle">Est. travel time</span>
                                <span id="destinationTime" class="destination__info">3 days</span>
                            </div>
                        </div>
                        </div>

                    </section>
        `
    principal.innerHTML = template;

    var linksDestination = document.querySelectorAll('.destination__link');

    let destinationNav = document.querySelector('#destinationNav');

    destinationNav.addEventListener('click', link => {
        if (link.target.dataset.estado != undefined) {

            linksDestination.forEach(link => {
                link.dataset.estado = 'inativo';
                link.classList.remove('active-destination');
            })

            link.target.dataset.estado = 'ativo';
            link.target.classList.add('active-destination');
            dadosDestination(dados)
        }



    })

}
function dadosDestination(dados) {

    linksDestination = document.querySelectorAll('.destination__link');
    destinationImg = document.querySelector('#destinationImg');
    destinationTitulo = document.querySelector('#destinationTitulo');
    destinationParagrafo = document.querySelector('#destinationParagrafo');
    destinationDistancia = document.querySelector('#destinationDistancia');
    destinationTime = document.querySelector('#destinationTime');

    dados.destinations.forEach((dado, index) => {
        if (linksDestination[index].dataset.estado === "ativo") {

            destinationImg.src = dado.images.png;
            destinationTitulo.textContent = dado.name;
            destinationParagrafo.textContent = dado.description;
            destinationDistancia.textContent = dado.distance;
            destinationTime.textContent = dado.travel;

        }
    })


}