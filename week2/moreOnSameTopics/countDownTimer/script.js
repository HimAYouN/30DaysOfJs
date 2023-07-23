const hour = document.getElementById("hourH3");
const minute = document.getElementById("minuteH3");
const second = document.getElementById("secondH3");
const button = document.getElementById("StartTimer");


button.addEventListener('click', ()=>{
    console.log("Hello");
    
    ///Setting the time in minutes
    const minutes = 1;
    //changing the minutes into seconds
    let time = minutes * 60;
    const interval = setInterval(()=>{


        //clears the interval and calls the playsound function 
        if(time == 0){
            playSound();
            clearInterval(interval);
        }



        let minutes = Math.floor(time/60);//getting minutes out from total seconds which were previously created by conveting minutes to seconds
        let seconds = time % 60; // getting remaining seconds from total seconds by using mod;
        
        if(minutes<10){
            minutes = '0' + minutes;
        }


        minute.innerHTML = minutes; //displaying minutes 
        if(seconds<10){
            seconds = '0' + seconds;
        }
        second.innerHTML = seconds; // displaying seconds
        console.log(seconds);
        time--;
        
    }, 1000);
});





///plays the timer ended  sound 
function playSound(){
    console.log("Times UP");
    var a = new Audio('Audio/clock-alarm-8761.mp3')
    a.play();
};






















//Current time
// var currTime = new Date.getTime();


// hour.innerHTML= "55";

// button.addEventListener('click', ()=>{
//     hour.innerHTML = "00";
//     minute.innerHTML = "30";
//     second.innerHTML = "00";
// })
