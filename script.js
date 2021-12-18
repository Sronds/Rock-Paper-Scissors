let choices = ["ROCK", "PAPER", "SCISSORS"];

function computerPlay() {
    return choices[Math.floor(Math.random()*choices.length)];
}

let scorePlayer = 0;
let scoreComputer = 0;

function oneRound() {
    let playerChoice = prompt("Rock, Paper, or Scissors?").toUpperCase()
    let computerChoice = computerPlay();

    if (playerChoice === computerChoice) {
        return alert("It's a tie! Play again.")
    } 
    else if (playerChoice === "ROCK" && computerChoice === "PAPER") {
        console.log(++scoreComputer);
        return alert("You lose! Paper beats Rock.")
    }
    else if (playerChoice === "ROCK" && computerChoice === "SCISSORS") {
        console.log(++scorePlayer)
        return alert("You win! Rock beats Scissors.")
    }
    else if (playerChoice === "PAPER" && computerChoice === "ROCK") {
        console.log(++scorePlayer)
        return alert("You win! Paper beats Rock.")
    }
    else if (playerChoice === "PAPER" && computerChoice === "SCISSORS") {
        console.log(++scoreComputer)
        return alert("You lose! Scissors beats Paper.")
    }
    else if (playerChoice === "SCISSORS" && computerChoice === "ROCK") {
        console.log(++scoreComputer)
        return alert("You lose! Rock beats Scissors.")
    }
    else if (playerChoice === "SCISSORS" && computerChoice === "PAPER") {
        console.log(++scorePlayer)
        return alert("You win! Scissors beats Paper.")
    }
}

function game() {        
    if (scoreComputer === 5) {
        return alert("You lost! Thanks for playing.")
    }
    else if (scorePlayer === 5) {
        return alert("You won! Thanks for playing.")
    }
    else {
        computerPlay();
        oneRound();
    }
}

game();