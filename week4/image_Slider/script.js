const slides = document.querySelectorAll('.slide');
// console.log(slides)
var n = 0;
let nextButton = document.getElementById('nextButton');
nextButton.addEventListener('click', ()=>{
    n = Math.floor(Math.random()*slides.length);
    for(var i = 0; i<slides.length; i++){
        if(i!=n){
            slides[i].classList.add('slide');
        }
    }
    console.log(n);
    slides[n].classList.toggle('display');
    slides[n].classList.toggle('slide');

})

// function plusSide(n){
//     slides[n].classList.toggle('.display');
//     slides[n].classList.toggle('.slide');

// }