//GAME RULES
//Scissors > Paper > Rock
//Paper > Rock > Scissors
//Rock > Scissors > Paper

let playerScore = 0;
let computerScore = 0;
let gameRoundCounter = 0;

//menu
const playerRock = document.querySelector('.rock');
const playerPaper = document.querySelector('.paper');
const playerScissors = document.querySelector('.scissors');
      
let playerSelection;
let playerChoiceUI;
let computerChoiceUI;
const computerChoiceInsert = document.querySelector('#pc');
const playerChoiceInsert = document.querySelector('#you');
        

playerRock.addEventListener('click', () => {
    playerSelection = 'rock';
    game();
});
playerPaper.addEventListener('click', () => {
    playerSelection = 'paper';
    game();
});
playerScissors.addEventListener('click', () => {
    playerSelection = 'scissors';
    game();
});

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3 + 1);
    if (choice === 1)
        return 'rock';
    else if (choice === 2)
        return 'paper';
    else
        return 'scissors';
}

function gameRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    if (player === computerSelection) {
        playerScore += 1;
        computerScore += 1;
        return ('Tie!');
    }
    else {
        let result = roundResult(player, computerSelection);
        if ((player === 'rock' && computerSelection === 'paper') ||
            (player === 'scissors' && computerSelection === 'rock') ||
            (player === 'paper' && computerSelection === 'scissors')) {
            computerScore += 1;
            return ('You Lose! ' + result);
        }
        else
            playerScore += 1;
        return ('You Win! ' + result);
    }

}

function roundResult(inputOne, inputTwo) {
    if ((inputOne === 'rock' && inputTwo === 'paper') || (inputOne === 'paper' && inputTwo === 'rock'))
        return ('Paper beats Rock.');
    else if ((inputOne === 'rock' && inputTwo === 'scissors') || (inputOne === 'scissors' && inputTwo === 'rock'))
        return ('Rock beats Scissors.');
    else
        return ('Scissors beats Paper.');
}

function removePastRound(playerChoiceInsert, computerChoiceInsert){
    playerChoiceInsert.removeChild(playerChoiceUI); 
   computerChoiceInsert.removeChild(computerChoiceUI);    
};

function game() {
        gameRoundCounter++;
        if(gameRoundCounter>1)
            removePastRound(playerChoiceInsert, computerChoiceInsert);
       
        let computerSelection = getComputerChoice();

        playerChoiceUI = document.createElement('p');
        playerChoiceUI.textContent = `${playerSelection}`;

        computerChoiceUI = document.createElement('p');
        computerChoiceUI.textContent = `${computerSelection}`;

        playerChoiceInsert.append(playerChoiceUI);
        computerChoiceInsert.append(computerChoiceUI);
        
        console.log(gameRound(playerSelection, computerSelection));
        console.log(`Player Score: ${playerScore} , Computer Score: ${computerScore}`);

        if(gameRoundCounter === 5){
            if (playerScore > computerScore)
                console.log('YOU WIN!')
            else if (playerScore < computerScore)
                console.log('YOU LOSE!')
            else
                console.log('TIE!');
        }        
}
