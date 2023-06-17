
let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3 + 1);
    if (choice === 1)
        return 'rock'
    else if (choice === 2)
        return 'paper'
    else
        return 'scissors'
}

//Scissors > Paper > Rock
//Paper > Rock > Scissors
//Rock > Scissors > Paper

function gameRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    if (player === computerSelection){
        playerScore +=1;
        computerScore +=1;
        return('Tie!');
    }
    else {
        if (player === 'rock') {
            if (computerSelection === 'paper'){
                computerScore +=1;
                return('You Lose! Paper beats Rock.');
            }
            else{
                playerScore +=1;
                return('You Win! Rock beats Scissors.');
            }
        }
        else if (player === 'paper') {
            if (computerSelection === 'rock'){
                playerScore +=1;
                return('You Win! Paper beats Rock.');
            }
            else{
                computerScore +=1;
                return('You Lose! Scissors beats Paper.');
            }
        }
        else {
            if (computerSelection === 'paper'){
                playerScore +=1;
                return('You Win! Scissors beats Paper.');
            }
            else{
                computerScore +=1;
                return('You Lose! Rock beats Scissors.');
            }
        }
    }

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

game();