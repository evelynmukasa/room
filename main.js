let slideIndex=1;
showSlides(slideIndex);

let prev =document.getElementById("prev");
let next =document.getElementById("next");

prev.addEventListener('click',()=>{
    showSlides(slideIndex += -1);
})
next.addEventListener('click',()=>{
    showSlides(slideIndex += 1);
})

function showSlides(n){
    let i;
    let slides =document.getElementsByClassName('slide');
    if (n>slides.length){slideIndex=1}
    if (n<1){slideIndex=slides.length}
    for(i=0;i<slides.length ; i++){
        slides[i].style.display="none";
    }
    slides[slideIndex-1].style.display="grid";
}
let menu =document.getElementById('humburger');
let nav =document.getElementById('nav');
let close=document.getElementById('close');
menu.addEventListener('click',()=>{
  nav.style.display="block";
})
close.addEventListener('click',()=>{
    nav.style.display="none";
})