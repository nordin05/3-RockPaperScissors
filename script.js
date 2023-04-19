const possibleChoices = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    return possibleChoices[Math.floor(Math.random()*possibleChoices.length)];
}

function startRound(playerChoice, computerChoice){
    if ((playerChoice == "Rock" && computerChoice == "Scissors")
        || (playerChoice == "Paper" && computerChoice == "Rock")
        || (playerChoice == "Scissors" && computerChoice == "Paper")) {
        return "Won";
    }
    
    if ((playerChoice == "Paper" && computerChoice == "Scissors")
        || (playerChoice == "Scissors" && computerChoice == "Rock")
        || (playerChoice == "Rock" && computerChoice == "Paper")) {
        return "Lost";
    }

    else{
        return "Tied";
    }
}

let playerChoice = getComputerChoice();
let computerChoice = getComputerChoice();

console.log("User: " + playerChoice);
console.log("Computer: " + computerChoice);

let result = startRound(playerChoice,computerChoice)
console.log("Result: " + result);
