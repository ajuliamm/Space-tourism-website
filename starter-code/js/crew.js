function exibeCrew() {

    let template = `
                        <section class="crew container">
                        <h2 class="crew__subtitulo subtitulo"> <span>02</span> Meet your crew</h2>
                        <div  class="img-box">
                            <img id="crewImg" src="./assets/crew/image-douglas-hurley.png" alt="" class="crew__img">
                        </div>
                        <div id="crewInput" class="crew__inputs-box">
                           
                        <label class="crew__label crew-active" for="crew_0"></label><input data-input="equipe" name="equipe" type="radio" value="0" id="crew_0" checked>

                            <label class="crew__label" for="crew_1"></label><input data-input="equipe" value="1" name="equipe" type="radio" id="crew_1">

                            <label class="crew__label" for="crew_2"></label>
                            <input data-input="equipe" value="2" name="equipe" type="radio" id="crew_2">

                            <label class="crew__label" for="crew_3"></label>
                            <input data-input="equipe" value="3" name="equipe" type="radio" id="crew_3">


                        </div>
                        <div class="description-box">
                            <span id="crewProfissao" class="crew__profissao">Commander</span>
                            <span id="crewName" class="crew__nome"> Douglas Hurley</span>
                            <p id="crewDescription" class="crew__paragrafo paragrafo">
                                Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
                                and former NASA astronaut. He launched into space for the third time as
                                commander of Crew Dragon Demo-2.
                            </p>
                        </div>
                    </section>
        
        
        `
    principal.innerHTML = template;
    
    crewEvento = document.querySelector('#crewInput');
    crewInputs = document.querySelectorAll('[data-input="equipe"]')
    crewImg = document.querySelector('#crewImg');
    crewProfissao = document.querySelector('#crewProfissao');
    crewName = document.querySelector('#crewName');
    crewDescription = document.querySelector('#crewDescription');
    crew__label = document.querySelectorAll('.crew__label')
    
    crewEvento.addEventListener('click', label => {
       if(label.target.dataset.input === "equipe"){
           
           crew__label.forEach(element =>  element.classList.remove('crew-active'));
           crewInputs.forEach(input =>{
               if(input.checked){
                   dado = dados.crew;
                   crewImg.src = dado[parseInt(input.value)].images.png;
                   crewProfissao.textContent = dado[parseInt(input.value)].role;
                   crewName.textContent = dado[parseInt(input.value)].name;
                   crewDescription.textContent = dado[parseInt(input.value)].bio;
               }
           })
           
           label.pointerId == -1 ? label.target.labels[0].classList.add('crew-active') : ""
       }


        
    })

}
