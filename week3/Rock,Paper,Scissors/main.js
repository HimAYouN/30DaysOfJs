
var playerScore = 0;
var computerScore = 0;
const prompter = document.getElementById('prompter');






function play(myPlay){
    // console.log(computerScore+" "+playerScore);
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
        // console.log("TIE");
        createELE("Same as computer", "Same as player", "Tied");
    }
    displayScore();
    scoreCheck(computerScore, playerScore);
    
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

//score checking machine
function scoreCheck(computerScore, playerScore){
    if(computerScore==3){
        promptDisplayer(1);
        deleterShower();
    }else if(playerScore==3){
        promptDisplayer(2);
        deleterShower();
    }
}


//displaying who won
function promptDisplayer(x){
    prompter.classList.toggle('hidden');
    if(x==1){
        prompter.innerHTML = "Computer Won";
        // console.log("COMputer WON");
        prompter.style.color = "red";
        
    }else if(x==2){
        prompter.innerHTML = "Player Won";
        // console.log("PlaYER WON");
        prompter.style.color = "blue";
    }
    /// deleter Button to be appeared
}


function deleter(){
    //adding class to each li tag
    playerScore = 0;
    computerScore= 0;


    const lis = document.querySelectorAll('li');
    // console.log(lis);
     lis.forEach(element => {
        element.classList.add('classHider');
     });

     buttonShower();
    document.getElementById('deleterButton').classList.toggle('classHider');
    displayScore();
    
    prompter.innerHTML = "";
}

function displayScore(){
    document.getElementById('playerScore').innerHTML = playerScore;
    document.getElementById('computerScore').innerHTML = computerScore;
    // document.getElementById('dotdot').innerHTML  = ":";
}

const selector = (id)=>{
    return document.getElementById(id);
}

//deleter button in html
function deleterShower(){
    document.getElementById('deleterButton').classList.toggle('classHider');
    buttonShower();

}

function buttonShower(){
    selector("rock").classList.toggle('buttonHider');
    selector("paper").classList.toggle('buttonHider');
    selector("scissor").classList.toggle('buttonHider');
}