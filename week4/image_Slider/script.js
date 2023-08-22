// const slides = document.querySelectorAll('.slide');
// // console.log(slides)
// var n = 0;
// let nextButton = document.getElementById('nextButton');
// nextButton.addEventListener('click', ()=>{
//     if(n==slides.length){
//         slides[n-1].classList.toggle('display');
//         slides[n-1].classList.toggle('slide');
//         n=0;
        

//     }
//     console.log(n)
//     slides[n].classList.toggle('display');
//     slides[n].classList.toggle('slide');
//     n++;

// })

// // function plusSide(n){
// //     slides[n].classList.toggle('.display');
// //     slides[n].classList.toggle('.slide');

// // }




// From ChatGPT
// Get references to the DOM elements
const slideContainer = document.querySelector('.container');
const slides = document.querySelectorAll('.slide');
const previousButton = document.querySelector('#previousButton');
const nextButton = document.querySelector('#nextButton');

let currentSlideIndex = 0;

// Function to display the current slide
function showSlide(index) {
  slides.forEach((slide, idx) => {
    if (idx === index) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Show the initial slide
showSlide(currentSlideIndex);

// Event listener for the previous button
previousButton.addEventListener('click', () => {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  showSlide(currentSlideIndex);
});

// Event listener for the next button
nextButton.addEventListener('click', () => {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  showSlide(currentSlideIndex);
});
