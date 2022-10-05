let choices = ['rock','paper','scissors'];

function getComputerChoice() {
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerSelection);
}

function playRound(playerSelection, computerSelection) {

}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function game() {
    for (let i = 0; i < 5; i++) {
        getComputerChoice();
    }
}

game();