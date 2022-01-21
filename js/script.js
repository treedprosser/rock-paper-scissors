let choices = ['rock', 'paper', 'scissors'];
function computerPlay() {
    let compChoice = choices[Math.floor(Math.random() * choices.length)];
    return compChoice;
}

let playerWins = 0;
let computerWins = 0;

let playerSelection;
let computerSelection;

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Rock, paper or scissors?");
    computerSelection = computerPlay();
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
    } 
    else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            console.log('You lose! Paper beats Rock.');
            return computerWins++;
        } else {
            console.log('You win! Rock beats Scissors.');
            return playerWins++;
        }
    }
    else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            console.log('You lose! Rock beats Scissors.');
            return computerWins++;
        }
        else {
            console.log('You win! Scissors beats Paper.');
            return playerWins++;
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            console.log('You lose! Scissors beats Paper.');
            return computerWins++;
        }
        else {
            console.log('You win! Paper beats Rock.');
            return playerWins++;
        }
    }
}

function game() {
    while (playerWins + computerWins < 5) {
        playRound(playerSelection, computerSelection);
    }
    if (playerWins > computerWins) {
        console.log("Congratulations, you're the winner!");
    } else {
        console.log("Sorry, the computer is the winner!");
    }

}

game();
