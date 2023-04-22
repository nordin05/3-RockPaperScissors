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

function printResult(result, playerChoice, computerChoice){
    if (result == 1){
        console.log("You Win! " + playerChoice + " beats " + computerChoice);
    }
    else if (result == 0){
        console.log("You Lose! " + computerChoice + " beats " + playerChoice);
    }
    else{
        console.log("You tied!");
    }
}

function startRound(playerChoice, computerChoice){
    if ((playerChoice == "Rock" && computerChoice == "Scissors")
        || (playerChoice == "Paper" && computerChoice == "Rock")
        || (playerChoice == "Scissors" && computerChoice == "Paper")) {
            return 1;
        // return "You Win! " + playerChoice + " beats " + computerChoice;
    }
    
    if ((playerChoice == "Paper" && computerChoice == "Scissors")
        || (playerChoice == "Scissors" && computerChoice == "Rock")
        || (playerChoice == "Rock" && computerChoice == "Paper")) {
            return 0;
        // return "You Lose! " + computerChoice + " beats " + playerChoice;
    }

    else {
        return null;
        // return "You tied!";
    }
}

let inputArray = getUserInput();
if (inputArray[0] == false){
    console.log("Please choose Rock, Paper or Scissors");
    inputArray = getUserInput();
}

let computerChoice = getComputerChoice();

console.log("User: " + inputArray[1]);
console.log("Computer: " + computerChoice);

let result = startRound(inputArray[1], computerChoice)
printResult(result, inputArray[1], computerChoice);
// console.log(result);
