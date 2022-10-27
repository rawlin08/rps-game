// before game starts

let computerchoices = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let computerScore = 0;

// get selectors on all moving parts

const choices = document.querySelector('.choice');
const restart = document.querySelector('.restart');
restart.addEventListener('click', restartGame);
const playerScoreNum = document.querySelector('.playerscore');
const computerScoreNum = document.querySelector('.computerscore');
const feedback = document.querySelector('.feed')
const rockbtn = document.querySelector('.rock');
const paperbtn = document.querySelector('.paper');
const scissorsbtn = document.querySelector('.scissors');

// set score counts on screen

playerScoreNum.textContent = playerScore;
computerScoreNum.textContent = computerScore;

// game functions

rockbtn.addEventListener('click', () => playRound('Rock'));
paperbtn.addEventListener('click', () => playRound('Paper'));
scissorsbtn.addEventListener('click', () => playRound('Scissors'));

// game

function playRound(playerSelection) {
    let computerSelection = computerchoices[Math.floor(Math.random() * computerchoices.length)];

    console.log(`Player: ${playerSelection}`);
    console.log(`Computer: ${computerSelection}`);

    if (playerSelection === computerSelection) {
        roundWinner = 'tie'
        feedback.textContent = `It was a TIE! You both chose ${playerSelection}.`
    } 
    if (playerSelection === 'Rock' && computerSelection === 'Scissors' || playerSelection === 'Paper' && computerSelection === 'Rock' || playerSelection === 'Scissors' && computerSelection === 'Paper') {
        playerScore++
        playerScoreNum.textContent = playerScore;
        feedback.textContent = `You WON! ${playerSelection} beats ${computerSelection}.`;
    }
    if (computerSelection === 'Rock' && playerSelection === 'Scissors' || computerSelection === 'Paper' && playerSelection === 'Rock' || computerSelection === 'Scissors' && playerSelection === 'Paper') {
        computerScore++
        computerScoreNum.textContent = computerScore;
        feedback.textContent = `You LOST! ${computerSelection} beats ${playerSelection}.`;
    }

    gameOver();
}

function gameOver() {
    if (playerScore === 5) {
        feedback.textContent = 'The Player Won the Game! Good Job!'
        choices.style.display = 'none';
        restart.style.display = 'flex';
    }
    if (computerScore === 5) {
        feedback.textContent = 'The Computer Won the Game! Better Luck Next Time!'
        choices.style.display = 'none';
        restart.style.display = 'flex';
    }
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreNum.textContent = playerScore;
    computerScoreNum.textContent = computerScore;
    feedback.textContent = '';
    choices.style.display = 'flex';
    restart.style.display = 'none';
    console.clear();
}