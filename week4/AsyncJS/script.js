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


///Project 1 /// Color changes ever 1 sec////
    /// Generate Random color
    const randomColor = function (){
        const hex = "0123456789ABCDEF";
        let color = '#' 
        for(let i = 0; i<6; i++){
            color += hex[Math.floor(Math.random()*16)];
        }
        return color;
    }


let intervalID;
function startTimerFnct() {
    if(!intervalID){
        intervalID = setInterval(()=>{
            document.body.style.backgroundColor = randomColor();
        },1000)
    }
    
}

function removeTimeFnct(){
    // console.log("stop")
    clearInterval(intervalID);
    intervalID = null;
}