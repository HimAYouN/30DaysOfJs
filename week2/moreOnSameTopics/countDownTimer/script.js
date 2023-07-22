const hour = document.getElementById("hourH3");
const minute = document.getElementById("minuteH3");
const second = document.getElementById("secondH3");
const button = document.getElementById("StartTimer");


hour.innerHTML= "55";

button.addEventListener('click', ()=>{
    hour.innerHTML = "00";
    minute.innerHTML = "30";
    second.innerHTML = "00";
})

