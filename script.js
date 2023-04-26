const possibleChoices = ["Rock", "Paper", "Scissors"];
const rounds = 5;
let scoreUser = 0;
let scoreComp = 0;

function getComputerChoice(){
    return possibleChoices[Math.floor(Math.random()*possibleChoices.length)];
}

function startRound(playerChoice, computerChoice){
    if ((playerChoice == "Rock" && computerChoice == "Scissors")
        || (playerChoice == "Paper" && computerChoice == "Rock")
        || (playerChoice == "Scissors" && computerChoice == "Paper")) {
            scoreUser += 1;
            return ("You won " + playerChoice + " beats " + computerChoice + "!");
    }
    
    else if ((playerChoice == "Paper" && computerChoice == "Scissors")
        || (playerChoice == "Scissors" && computerChoice == "Rock")
        || (playerChoice == "Rock" && computerChoice == "Paper")) {
            scoreComp += 1;
            return ("You lost " + computerChoice + " beats " + playerChoice + "!");
    }

    else{
        return ("You both chose " + computerChoice + " and tied!");
    }
}

function game(playerChoice){
    let computerChoice = getComputerChoice();

    console.log("User chose " + playerChoice);
    console.log("Computer chose " + computerChoice);

    let result = startRound(playerChoice, computerChoice);
    console.log(scoreUser);
    console.log(scoreComp);

    resultText.textContent = 'User chose ' + playerChoice + '...';
    resultText.textContent = 'Computer chose ' + computerChoice + '...';
    resultText.textContent = result;

    score.textContent = (scoreUser + ' - ' + scoreComp);
    console.log("");
}

let playerChoice;
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

const resultText = document.querySelector('.result-text');
const score = document.querySelector('.score');

console.log(score);
rockButton.addEventListener('click', () => {
    playerChoice = "Rock";
    game(playerChoice);
  });
paperButton.addEventListener('click', () => {
    playerChoice = "Paper";
    game(playerChoice);
  });
scissorsButton.addEventListener('click', () => {
    playerChoice = "Scissors";
    game(playerChoice);
  });






  

// for (let i = 0; i < rounds; i++){
//     console.log("Round " + (i+1));
//     console.log("-----------");
//     game();
// }

// if (score > 0){
//     console.log("You won the game!")
// }

// else if (score < 0){
//     console.log("You lost the game!")
// }

// else {
//     console.log("You both tied the game!") 
// }

