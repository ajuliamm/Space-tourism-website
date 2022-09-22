openMenu = document.querySelector('#menu');
closeMenu = document.querySelector('#close');
navBox = document.querySelector('#navBox');

openMenu.addEventListener('click',()=>{
    navBox.classList.toggle('oculto');
})
closeMenu.addEventListener('click',()=>{
    navBox.classList.toggle('oculto');
})
