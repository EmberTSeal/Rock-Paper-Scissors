//GAME RULES
//Scissors > Paper > Rock
//Paper > Rock > Scissors
//Rock > Scissors > Paper


let playerScore = 0;
let computerScore = 0;

game();

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3 + 1);
    if (choice === 1)
        return 'rock'
    else if (choice === 2)
        return 'paper'
    else
        return 'scissors'
}

function gameRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    if (player === computerSelection){
        playerScore +=1;
        computerScore +=1;
        return('Tie!');
    }
    else {
        let result = roundResult(player, computerSelection);
        if ((player === 'rock' && computerSelection === 'paper') ||
            (player === 'scissors' && computerSelection === 'rock')||
            (player === 'paper' && computerSelection === 'scissors')) {
                computerScore +=1;
                return ('You Lose! ' + result);
            }
        else
            playerScore +=1;
            return ('You Win! ' + result);    
        }

}

function roundResult(inputOne, inputTwo){
    if((inputOne === 'rock' && inputTwo === 'paper') || (inputOne === 'paper' && inputTwo === 'rock'))
        return('Paper beats Rock.');
    else if((inputOne === 'rock' && inputTwo === 'scissors') || (inputOne === 'scissors' && inputTwo === 'rock'))
        return('Rock beats Scissors.');
    else
        return('Scissors beats Paper.');
}

function game(){
    for(let i = 1; i<=5; i++){
        let playerSelection =  prompt('Your choice? ');
        let computerSelection = getComputerChoice();        
        console.log(`Your input: ${playerSelection}`);
        console.log(`Computer input: ${computerSelection}`);
        console.log(gameRound(playerSelection, computerSelection));
        console.log(`Player Score: ${playerScore} , Computer Score: ${computerScore}`);
    }
    if(playerScore > computerScore)
        console.log('YOU WIN!' )
    else if(playerScore < computerScore)
        console.log('YOU LOSE!') 
    else
        console.log('TIE!');       
}
