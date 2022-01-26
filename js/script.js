let choices = ['rock', 'paper', 'scissors'];
function computerPlay() {
    let compChoice = choices[Math.floor(Math.random() * choices.length)];
    return compChoice;
}

const roundResults = document.getElementById('roundResults');
const playerScore = document.getElementById('playerScore');
const compScore = document.getElementById('compScore');
const finalScore = document.getElementById('finalScore');
let playerWins = 0;
let computerWins = 0;

function playRound(playerSelection, computerSelection=computerPlay()) {
   
    if (playerWins === 5) {
        finalScore.textContent = 'You\'re the winner!';
        playerWins = 0;
        computerWins = 0;
    }
    if (computerWins === 5) {
        finalScore.textContent = 'Better luck next time!';
        playerWins = 0;
        computerWins = 0;
    }

    if (playerSelection === computerSelection) {
        roundResults.textContent = 'It\'s a tie!'
    } 
    else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            roundResults.textContent = 'You lose! Paper beats Rock.';
            computerWins++;
        } else {
            roundResults.textContent = 'You win! Rock beats Scissors.';
            playerWins++;
        }
    }
    else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            roundResults.textContent = 'You lose! Rock beats Scissors.';
            computerWins++;
        }
        else {
            roundResults.textContent = 'You win! Scissors beats Paper.';
            playerWins++;
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            roundResults.textContent = 'You lose! Scissors beats Paper.';
            computerWins++;
        }
        else {
            roundResults.textContent = 'You win! Paper beats Rock.';
            playerWins++;
        }
    }
    playerScore.textContent = `Player: ${playerWins}`;
    compScore.textContent = `Computer: ${computerWins}`;
}

// UI

const rockBtn = document.getElementById('rockBtn');
rockBtn.addEventListener('click', () => playRound('rock'));

const paperBtn = document.getElementById('paperBtn');
paperBtn.addEventListener('click', () => playRound('paper'));

const scissorsBtn = document.getElementById('scissorsBtn');
scissorsBtn.addEventListener('click', () => playRound('scissors'));
