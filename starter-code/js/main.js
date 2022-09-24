var dados

fetch('./data.json')
    .then(response => response.json())
    .then(data => {


        dados = data
        console.log(dados)
    })


principal = document.querySelector('#principal');
navigation = document.querySelector('#navegacao');
links = document.querySelectorAll('.cabecalho__link');
body = document.querySelector('body');


navigation.addEventListener('click', (e) => {

    if (e.target.dataset.link === 'home') {

        e.target.classList.toggle('active');
        links.forEach(link => {
            if (link.dataset.link != 'home') {
                link.classList.remove('active');
            }
        });
        body.classList.add('home_bkg');
        body.classList.remove('crew_bkg');
        body.classList.remove('destination_bkg');
        body.classList.remove('tech_bkg');
        exibeHome();

    } else if (e.target.dataset.link === 'destination') {

        e.target.classList.toggle('active');
        links.forEach(link => {
            if (link.dataset.link != 'destination') {
                link.classList.remove('active');
            }
        });
        exbibeDestination();
        body.classList.add('destination_bkg');
        body.classList.remove('crew_bkg');
        body.classList.remove('tech_bkg');
        body.classList.remove('home_bkg');


    } else if (e.target.dataset.link === 'crew') {

        e.target.classList.toggle('active');
        links.forEach(link => {
            if (link.dataset.link != 'crew') {
                link.classList.remove('active');
            }
        });
        exibeCrew()
        body.classList.add('crew_bkg');
        body.classList.remove('destination_bkg');
        body.classList.remove('tech_bkg');
        body.classList.remove('home_bkg');

    } else if (e.target.dataset.link === 'tech') {

        e.target.classList.toggle('active');
        links.forEach(link => {
            if (link.dataset.link != 'tech') {
                link.classList.remove('active');
            }
        });
        exibeTech()
        body.classList.add('tech_bkg');
        body.classList.remove('crew_bkg');
        body.classList.remove('destination_bkg');
        body.classList.remove('home_bkg');
    }

})











