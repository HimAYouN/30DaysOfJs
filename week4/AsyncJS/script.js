///////////Part 1/////////////

// function y () {
//     // console.log("Window");
//     document.querySelector('h1').innerHTML = 'My Name';
    
// }

// function removeTimeFnct(){
//     clearTimeout(a);
//     console.log("stopped")
// }
// const a = setTimeout(y, 3000);



/////////////////Part 2/////////////

// var i = 0;
// function startTimerFnct(){
//     setInterval(timer, 1000);
// }
// function timer(){
//     console.log("HI"+ i++);
// }
// const interval = setInterval(timer, 1000);

// function removeTimeFnct(){
//     clearInterval(interval);
//     console.log("Working");
// }


// const timer= function(){
    
// }

var i = 0; 
const interval = setInterval(() => {
    console.log("Hello" + i++);
}, 1000);