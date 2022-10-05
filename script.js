let choices = ['rock','paper','scissors'];

function getPlayerChoice() {
    let selection = prompt(String("Rock, Paper, or Scissors?"));
    let playerSelection = selection.toLowerCase();
    console.log(playerSelection);
}

function getComputerChoice() {
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerSelection);
}

function playRound(playerSelection, computerSelection) {

}

function game() {
    for (let i = 0; i < 5; i++) {
        getPlayerChoice();
        getComputerChoice();
    }
}