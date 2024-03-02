function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "tie"
    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")) {
        return "win"
    } else if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        return "Wrong input";
    } else {
        return "lose"
    }

}

function getSelection() {
    // const playerSelection = prompt("Enter your choice", "rock");
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    return [playerSelection, computerSelection]
}

// console.log(playRound(playerSelection, computerSelection));

let playerScore = 0;
let computerScore = 0;
let ties = 0;
let gameRound = 0;
let gameResult = "";

function playGame() {

    let roundResult;
    let selections;

    // run 5 rounds
    for (i = 0; i < 5; i++) {
        selections = getSelection();
        playerSelection = selections[0].toLowerCase();
        computerSelection = selections[1].toLowerCase();
        
        roundResult = playRound(playerSelection, computerSelection);
        if (roundResult === "win") {
            playerScore++;
        } else if (roundResult === "lose") {
            computerScore++;
        } else if (roundResult === "tie") {
            ties++;
        }
        gameRound++;
    }

    if (playerScore === computerScore) {
        gameResult = "draw";
    } else if (playerScore < computerScore) {
        gameResult = "lose";
    } else {
        gameResult = "win";
    }
}

playGame();

console.log(`Player: ${playerScore}
Computer: ${computerScore}
Draw: ${ties}
In ${gameRound} rounds`);