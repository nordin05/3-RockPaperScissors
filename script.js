const possibleChoices = ["Rock", "Paper", "Scissors"];
const rounds = 5;
let scoreUser = 0;
let scoreComp = 0;

function getComputerChoice(){
    return possibleChoices[Math.floor(Math.random()*possibleChoices.length)];
}

function calculateHPBars(){
    frac = 1 - 1 * (scoreComp*(1/rounds));
    userPercentage = `${frac*100}%`;

    frac = 1 - 1 * (scoreUser*(1/rounds));
    compPercentage = `${frac*100}%`;
    return [userPercentage, compPercentage];
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

function displayRoundMoves(playerChoice, computerChoice, result){
    resultText.textContent = 'User chose ' + playerChoice + '...';

    text_array = [
        'Computer chose ' + computerChoice + '...',
        result,
    ];

    i = 0;
    textInterval = setInterval(function() { 
        resultText.textContent = text_array[i];
        i = i + 1;
        if(i == text_array.length){
            clearInterval(textInterval);
        }
    }, 1000);

}

function updateScore(playerChoice, computerChoice, result){
    if (result.substring(0,7) == "You won"){
        userIcon.style.animation = "";
        userIcon.style.animation = "userAttack 2s forwards";
    }
    else if (result.substring(0,8) == "You lost"){
        compIcon.style.animation = "";
        compIcon.style.animation = "compAttack 2s forwards";
    }


    setTimeout(function() {
        userHP.style.width = calculateHPBars()[0];
        compHP.style.width = calculateHPBars()[1];
        score.textContent = (scoreUser + ' - ' + scoreComp);

        if (result.substring(0,7) == "You won"){
            compIcon.style.animation = "";
            compIcon.style.animation = "flashIcon 1.5s forwards";
        }
        else if (result.substring(0,8) == "You lost"){
            userIcon.style.animation = "";
            userIcon.style.animation = "flashIcon 1.5s forwards";
        }

        if (scoreUser >= rounds){
            resultText.textContent = 'Congrats, you won!';
            setTimeout(function() { 
                document.querySelector('.comp').style.animation = "FadeOutComp 2s cubic-bezier(0.19, 0, 0, 0.99) forwards";
            }, 1000);
        }
        else if (scoreComp >= rounds){
            resultText.textContent = 'Too bad, you lost!';
            setTimeout(function() { 
                document.querySelector('.user').style.animation = "FadeOutUser 2s cubic-bezier(0.19, 0, 0, 0.99) forwards";
            }, 1000);
        }
      }, 2000);

}

function game(playerChoice){
    if ((scoreUser < rounds) && (scoreComp < rounds)){
        let computerChoice = getComputerChoice();
        let result = startRound(playerChoice, computerChoice);
        displayRoundMoves(playerChoice, computerChoice, result);
        updateScore(playerChoice, computerChoice, result);
    }
}

let playerChoice;

const rockButton     = document.querySelector('.rock');
const paperButton    = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const resultText     = document.querySelector('.result-text');
const score          = document.querySelector('.score');
const userHP         = document.querySelector('.userHP .userhp-progress');
const userIcon       = document.querySelector('.userIcon');
const compHP         = document.querySelector('.compHP .comphp-progress');
const compIcon       = document.querySelector('.compIcon');


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