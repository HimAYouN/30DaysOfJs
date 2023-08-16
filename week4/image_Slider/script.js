const slides = document.querySelectorAll('.slide');
// console.log(slides)
var n = 0;
let nextButton = document.getElementById('nextButton');
nextButton.addEventListener('click', ()=>{
    if(n==slides.length){
        slides[n-1].classList.toggle('display');
        slides[n-1].classList.toggle('slide');
        n=0;
        

    }
    console.log(n)
    slides[n].classList.toggle('display');
    slides[n].classList.toggle('slide');
    n++;

})

// function plusSide(n){
//     slides[n].classList.toggle('.display');
//     slides[n].classList.toggle('.slide');

// }