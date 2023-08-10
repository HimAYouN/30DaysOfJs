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
const interval = null;
var i = 0;
function startTimerFnct(){
    interval = setInterval(function timer(){
        console.log("Hitesh", i++)
    }, 1000);
}

function removeTimeFnct(){
    clearInterval(interval);
    console.log("Working");
}


// const timer= function(){
    
// }
