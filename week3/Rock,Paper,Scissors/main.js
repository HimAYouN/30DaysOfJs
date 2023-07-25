
var playerScore = 0;
var computerScore = 0;
const prompter = document.getElementById('prompter');






function play(myPlay){
    console.log(computerScore+" "+playerScore);
    scoreCheck(computerScore, playerScore);
    var comPlay = Math.floor(Math.random()*3)+1;

    if(myPlay==1&&comPlay==2){
        // console.log("Computer Won");
        createELE("rock", "Paper", "Computer Won");
        ++computerScore;
    }else if (myPlay==1&&comPlay==3) {
        // console.log("Player Won");
        createELE("rock", "Scissor", "Player Won");
        ++playerScore;
    } else if(myPlay== 2&& comPlay==1){
        // console.log("Player Won");
        createELE("paper", "rock", "Player Won");
        ++playerScore;
    }else if(myPlay==2& comPlay==3){
        // console.log("Computer Won");
        createELE("paper", "Scissor", "Computer Won");
        ++computerScore;
    }else if(myPlay==3&& comPlay==1){
        // console.log("Computer Won");
        createELE("scissor", "rock", "Computer Won");
        ++computerScore;
    }else if(myPlay==3&&comPlay==2){
        // console.log("Player Won");
        createELE("scissor", "paper", "Player Won");
        ++playerScore;
    }else{
        console.log("TIE");
        createELE("Same as computer", "Same as player", "Tied");
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
    element3.appendChild(resultConst);
    handHuman.innerHTML = dataHuman;
    computerHand.innerHTML = dataComputer;
    resultConst.innerHTML = result;
}


function scoreCheck(computerScore, playerScore){
    if(computerScore==3){
        promptDisplayer(1);
    }else if(playerScore==3){
        promptDisplayer(2)
    }
}

function promptDisplayer(x){
    prompter.classList.toggle('hidden');
    if(x==1){
        prompter.innerHTML = "Computer Won";
        console.log("COMputer WON");
    }else if(x==2){
        prompter.innerHTML = "Player Won";
        console.log("PlaYER WON");
    }
}