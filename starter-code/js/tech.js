function exibeTech() {

    let template =

        `
                        <section class="tech container">
                        <h2 class="tech__subtitulo subtitulo"> <span>02</span> Meet your crew</h2>
                
                        <img id="techImg" src="./assets/technology/image-launch-vehicle-${window.screen.width < 767 ?"landscape":"portrait"}.jpg" alt="" class="tech__img">
                
                        <div id="techInputs" class="tech__inputs-box">
                        
                        <label class="tech__label tech-active" for="tech_0">1</label> 
                        <input name="tech" type="radio" data-input="tech" id="tech_0" value="0">
                        
                        <label class="tech__label" for="tech_1">2</label>
                        <input name="tech" type="radio" data-input="tech" id="tech_1" value="1"> 
                        
                        <label class="tech__label" for="tech_2">3</label>
                        <input name="tech" type="radio" data-input="tech" id="tech_2" value="2">
                        </div>
                        <div class="techDescription-box">
                        <span  class="tech__terminologia">THE TERMINOLOGY…</span>
                        <span id="techTermo"  class="tech__termo"> LAUNCH VEHICLE</span>
                        <p id="techDescription" class="tech__paragrafo paragrafo">
                            A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!
                        </p>
                        </div>
                    </section>
        `
    principal.innerHTML = template;

    techDiv = document.querySelector("#techInputs");

    techInputs = document.querySelectorAll('[data-input="tech"]')
    
    tech__label = document.querySelectorAll('.tech__label')
   
    techImg = document.querySelector('#techImg');

    techTermo = document.querySelector('#techTermo');

    techDescription = document.querySelector('#techDescription');

    
    techDiv.addEventListener('click', label => {
       if(label.target.dataset.input === "tech"){
           
        tech__label.forEach(element =>  element.classList.remove('tech-active'));
           techInputs.forEach(input =>{
               if(input.checked){
                 let  dado = dados.technology;
                 window.screen.width >= 1024 ? techImg.src = dado[parseInt(input.value)].images.portrait : techImg.src = dado[parseInt(input.value)].images.landscape ;
                   techTermo.textContent = dado[parseInt(input.value)].name;
                   techDescription.textContent = dado[parseInt(input.value)].description;
               }
           })
           
           label.pointerId == -1 ? label.target.labels[0].classList.add('tech-active') : ""
       }


        
    })


}