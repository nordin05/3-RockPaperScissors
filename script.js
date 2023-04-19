const possibleChoices = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    return possibleChoices[Math.floor(Math.random()*possibleChoices.length)];
}

function checkUserInput(userInput){
    userInput = userInput.toLowerCase();
    userInput = userInput.charAt(0).toUpperCase() + userInput.slice(1);

    if (possibleChoices.includes(userInput)){
        return [true, userInput];
    }
    else{
        return [false, userInput];
    }
}

function getUserInput(){
    userInput = prompt("Choose Rock, Paper or Scissors");
    let inputArray = checkUserInput(userInput);

    return inputArray;
}


function startRound(playerChoice, computerChoice){
    if ((playerChoice == "Rock" && computerChoice == "Scissors")
        || (playerChoice == "Paper" && computerChoice == "Rock")
        || (playerChoice == "Scissors" && computerChoice == "Paper")) {
        return "You Win! " + playerChoice + " beats " + computerChoice;
    }
    
    if ((playerChoice == "Paper" && computerChoice == "Scissors")
        || (playerChoice == "Scissors" && computerChoice == "Rock")
        || (playerChoice == "Rock" && computerChoice == "Paper")) {
            return "You Lose! " + computerChoice + " beats " + playerChoice;
    }

    else{
        return "You tied!";
    }
}

let inputArray = getUserInput();
if (inputArray[0] == false){
    console.log("Please choose Rock, Paper or Scissors");
    inputArray = getUserInput();
}
else {

}

let computerChoice = getComputerChoice();

console.log("User: " + inputArray[1]);
console.log("Computer: " + computerChoice);

let result = startRound(inputArray[1], computerChoice)
console.log("You " + result);
