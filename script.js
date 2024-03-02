function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "tie";
    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")) {
        return "win"; // Check the conditions in which the player can win
    } else if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        return "Wrong input. You can only choose between 'rock', 'paper', or 'scissors'."; // If player enters an invalid input
    } else {
        return "lose"; // If none of the above conditions are met, player loses
    }

}

function getSelection() {
    const playerSelection = prompt("Enter your choice", "rock");
    const computerSelection = getComputerChoice();
    return [playerSelection, computerSelection]; // Return an array with player and computer selections
}

let playerScore = 0;
let computerScore = 0;
let ties = 0;
let gameRound = 0;
let gameResult = "";

function playGame() {

    let roundResult;
    let selections;

    // Run 5 rounds
    for (i = 1; i <= 5; i++) {
        selections = getSelection();
        playerSelection = selections[0].toLowerCase();
        computerSelection = selections[1].toLowerCase();
        
        // Check round win conditions
        roundResult = playRound(playerSelection, computerSelection);
        if (roundResult === "win") {
            playerScore++;
            console.log(`${i} | You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}.`)
        } else if (roundResult === "lose") {
            computerScore++;
            console.log(`${i} | You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}.`)
        } else if (roundResult === "tie") {
            ties++;
            console.log(`${i} | It's a tie! Both you and the computer chose ${playerSelection}.`)
        }
        gameRound++;
    }

    // Check game win conditions
    if (playerScore === computerScore) {
        gameResult = "draw";
    } else if (playerScore < computerScore) {
        gameResult = "lose";
    } else {
        gameResult = "win";
    }
}

playGame();

const gameSummary = `Player: ${playerScore}
Computer: ${computerScore}
Tie: ${ties}
In ${gameRound} rounds
Therefore, you ${gameResult}.`;

console.log(gameSummary);