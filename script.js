let playerScore = 0;
let computerScore = 0;
let gameRoundCounter = 0;

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const restart = document.querySelector('#restart');

//maps the choices w corresponding cards
const choicesMap = {
    rock : rock,
    paper: paper,
    scissors : scissors
}

let playerSelection = '';
let playerChoiceVisual;
let computerChoiceVisual;
let resultVisual;
let finalResultVisual;

const resultInsert = document.querySelector('.result');
const computerChoiceInsert = document.querySelector('#pc');
const playerChoiceInsert = document.querySelector('#you');
const gameOver = document.querySelector('#gameover');
        
rock.addEventListener('click', () => {
    playerSelection = 'rock';
    game(rock);
});
paper.addEventListener('click', () => {
    playerSelection = 'paper';
    game(paper);
});
scissors.addEventListener('click', () => {
    playerSelection = 'scissors';
    game(scissors);

});

restart.addEventListener( 'click', () => {
    gameRoundCounter = 0;
    playerScore = 0;
    computerScore = 0;
    removePastRound(playerChoiceInsert, computerChoiceInsert, resultInsert);
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.round').style.display = 'none';
    finalResultVisual.style.display = 'none';
    restart.style.display = 'none';
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
    if (playerSelection === computerSelection) {
        playerScore += 1;
        computerScore += 1;
        return ('Tie! ');
    }
    else {
        let result = roundResult(playerSelection, computerSelection);
        if ((playerSelection === 'rock' && computerSelection === 'paper') ||
            (playerSelection === 'scissors' && computerSelection === 'rock') ||
            (playerSelection === 'paper' && computerSelection === 'scissors')) {
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

function removePastRound(playerChoiceInsert, computerChoiceInsert, resultInsert){
    playerChoiceInsert.removeChild(playerChoiceVisual); 
    computerChoiceInsert.removeChild(computerChoiceVisual);   
    resultInsert.removeChild(resultVisual) 
};

function updateRoundDisplay(){
    const RoundDisplay = document.querySelector('.round');
    RoundDisplay.innerHTML = `<h2>Round - ${gameRoundCounter}</h2>`;
};

function showContainer(){
    document.querySelector('.container').style.display = 'flex';
    document.querySelector('.round').style.display = 'flex';
}


function updateDisplay(){
    gameRoundCounter++;
    if(gameRoundCounter == 1)
        showContainer();
    updateRoundDisplay();
    if(gameRoundCounter>1)
        removePastRound(playerChoiceInsert, computerChoiceInsert, resultInsert);
}

function game(playerSelectionNode) {

        updateDisplay();

        let computerSelection = getComputerChoice();

        playerChoiceVisual = playerSelectionNode.cloneNode(true);
        computerChoiceVisual = choicesMap[computerSelection].cloneNode(true);

        playerChoiceInsert.append(playerChoiceVisual);
        computerChoiceInsert.append(computerChoiceVisual);
     
        resultVisual = document.createElement('p');

        resultVisual.textContent = gameRound(playerSelection, computerSelection) 
        + `Player Score: ${playerScore} , Computer Score: ${computerScore}`;
        
        resultVisual.style.fontSize = '1.5rem';
        resultVisual.style.fontWeight = '900';
        resultInsert.append(resultVisual);
        
        if(gameRoundCounter === 5){
            finalResultVisual = document.createElement('h2');
            finalResultVisual.style.fontSize = '2rem';
            if (playerScore > computerScore){
                finalResultVisual.textContent = 'YOU WIN!!!';
            }
            else if (playerScore < computerScore){
                finalResultVisual.textContent = 'YOU LOSE!!!';
            }
            else{
                finalResultVisual.textContent = 'TIE!!!';
            }
            gameOver.append(finalResultVisual);  
            restart.style.display = 'block';
        }        
}
