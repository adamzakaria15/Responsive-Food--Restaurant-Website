let menu =document.querySelector('#menu-bars');
let navbar =document.querySelector('.navbar');


menu.onclick=()=>{
    menu.classList.toggle('fa-tim es');
    navbar.classList.toggle('active');
}


window.onscroll = () =>{

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}



document.querySelector('#search-icon').onclick = ()=>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = ()=>{
    document.querySelector('#search-form').classList.remove('active');
}

//////////////////////////////////////////////////////////////
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  loop:true,
});


///////////////////////////////////////////////

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader , 3000);
}

window.onload = fadeOut;