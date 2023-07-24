
var playerScore = 0;
var computerScore = 0;

function play(myPlay){
    
    var comPlay = Math.floor(Math.random()*3)+1;

    if(myPlay==1&&comPlay==2){
        // console.log("Computer Won");
        createELE("rock", "Paper", "Computer Won");
    }else if (myPlay==1&&comPlay==3) {
        // console.log("Player Won");
        createELE("rock", "Scissor", "Player Won");
    } else if(myPlay== 2&& comPlay==1){
        // console.log("Player Won");
        createELE("paper", "rock", "Player Won");
    }else if(myPlay==2& comPlay==3){
        // console.log("Computer Won");
        createELE("paper", "Scissor", "Computer Won");
    }else if(myPlay==3&& comPlay==1){
        // console.log("Computer Won");
        createELE("scissor", "rock", "Computer Won");
    }else if(myPlay==3&&comPlay==2){
        // console.log("Player Won");
        createELE("scissor", "paper", "Player Won");
    }else{
        console.log("TIE");
    }
}





document.getElementById('rock').addEventListener('click', ()=>{
    // console.log("rock");
    play(1);
})
document.getElementById('paper').addEventListener('click', ()=>{
    // console.log("paper");
    play(2);
})
document.getElementById('scissor').addEventListener('click', ()=>{
    // console.log("scissor");
    play(3);
})


function createELE(dataHuman, dataComputer, result){
    const handHuman = document.createElement('li');
    const computerHand = document.createElement('li');
    const resultConst = document.createElement('li');

    const element1 = document.getElementById('humanHand');
    const element2 = document.getElementById('ComputeHand');
    const element3 = document.getElementById('resultSection');

    element1.appendChild(handHuman);
    element2.appendChild(computerHand);
    element3.appendChild(resultConst)
    handHuman.innerHTML = dataHuman;
    computerHand.innerHTML = dataComputer;
    resultConst.innerHTML = result;
}