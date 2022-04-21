const body = document.body;

const readyToPlay = document.createElement("h1")
readyToPlay.innerText = "Ready to Play?" 
body.append(readyToPlay)

const readyToPlay2 = document.createElement("h2")
readyToPlay2.innerText = "Make your choice below." 
body.append(readyToPlay2)

const rock = document.createElement("button");
rock.innerText = "Rock"
rock.setAttribute("id", "rock")
body.append(rock);

const paper = document.createElement("button");
paper.innerText = "Paper"
paper.setAttribute("id", "paper")
body.append(paper);

const scissors = document.createElement("button");
scissors.innerText = "Scissors"
scissors.setAttribute("id", "scissors")
body.append(scissors);

const yourChoice = document.createElement("h3")
yourChoice.innerText = "Your choice: " 
body.append(yourChoice);

const computerDecision = document.createElement("h3")
computerDecision.innerText = "Computer choice: " 
body.append(computerDecision);

const decision = document.createElement("h1")
decision.innerText = "";
body.append(decision);

let playerPoints = 0;
let computerPoints = 0;

let playerScore = document.createElement("h4")
playerScore.innerText = "Player Score: " + playerPoints
body.append(playerScore);


let computerScore = document.createElement("h4")
computerScore.innerText = "Computer Score: " + computerPoints
body.append(computerScore);

rock.addEventListener("click", choseRock);
paper.addEventListener("click", chosePaper);
scissors.addEventListener("click", choseScissors);

const choices = ["Rock", "Paper", "Scissors"];


function choseRock() {
    let computerChoice = choices[Math.floor(Math.random()*choices.length)];
    if (playerPoints == 5 || computerPoints == 5) {
        endButton.style.display = ""
        return endButton    
    } else if (computerChoice == "Rock") {
        yourChoice.innerText = "Your choice: Rock "
        computerDecision.innerText = "Computer chose: " + computerChoice
        decision.innerText = "It's a tie! Play again"
    } else if (computerChoice == "Paper") {
        yourChoice.innerText = "Your choice: Rock " 
        computerDecision.innerText = "Computer chose: " + computerChoice
        decision.innerText = "You lose."
        ++computerPoints
        computerScore.innerText = "Computer Score: " + computerPoints;
    } else if (computerChoice == "Scissors") {
        yourChoice.innerText = "Your choice: Rock " 
        computerDecision.innerText = "Computer chose: " + computerChoice
        decision.innerText = "You win."
        ++playerPoints
        playerScore.innerText = "Player Score: " + playerPoints;
    }
}

function chosePaper() {
    let computerChoice = choices[Math.floor(Math.random()*choices.length)];
    if (playerPoints == 5 || computerPoints == 5) {
        endButton.style.display = ""
        return endButton    
    } else if (computerChoice == "Paper") {
        yourChoice.innerText = "Your choice: Paper" 
        computerDecision.innerText = "Computer choice: " + computerChoice
        decision.innerText = "It's a tie! Play again"
    } else if (computerChoice == "Rock") {
        yourChoice.innerText = "Your choice: Paper " 
        computerDecision.innerText = "Computer choice: " + computerChoice
        decision.innerText = "You win."
        ++playerPoints 
        playerScore.innerText = "Player Score: " + playerPoints;
    } else if (computerChoice == "Scissors") {
        yourChoice.innerText = "Your choice: Paper " 
        computerDecision.innerText = "Computer choice: " + computerChoice
        decision.innerText = "You lose."
        ++computerPoints 
        computerScore.innerText = "Computer Score: " + computerPoints;
    }
}

function choseScissors() {
    let computerChoice = choices[Math.floor(Math.random()*choices.length)];
    if (playerPoints == 5 || computerPoints == 5) {
        endButton.style.display = ""
        return endButton    
    } else if (computerChoice == "Scissors") {
        yourChoice.innerText = "Your choice: Scissors " 
        computerDecision.innerText = "Computer choice: " + computerChoice
        decision.innerText = "It's a tie! Play again"
    } else if (computerChoice == "Rock") {
        yourChoice.innerText = "Your choice: Scissors " 
        computerDecision.innerText = "Computer choice: " + computerChoice
        decision.innerText = "You lose."
        ++computerPoints 
        computerScore.innerText = "Computer Score: " + computerPoints;
    } else if (computerChoice == "Paper") {
        yourChoice.innerText = "Your choice: Scissors " 
        computerDecision.innerText = "Computer choice: " + computerChoice
        decision.innerText = "You win."
        ++playerPoints
        playerScore.innerText = "Player Score: " + playerPoints;
    }
}

let endButton = document.createElement("button")
        endButton.innerText = "Game Over. Play again?"
        endButton.style.display = "none"
        endButton.setAttribute("id", "endGame")
        body.append(endButton);  

endButton.addEventListener("click", startOver)

function startOver() {
    playerPoints = 0;
    computerPoints = 0;
    playerScore.innerText = "Player Score: " + playerPoints;
    computerScore.innerText = "Computer Score: " + computerPoints;
    endButton.style.display = "none"
}
 



// function startgame() {
//     console.log("Hello")
// };
