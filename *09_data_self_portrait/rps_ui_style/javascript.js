// Rock Paper Scissors

const rps = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;

function reset() {
    playerScore = 0;
    computerScore = 0;
}

function game() {
    document.querySelector("#playScore").textContent = `${playerScore}`;
    document.querySelector("#compScore").textContent = `${computerScore}`;
    document.querySelector("#player").textContent = "Player: ";
    document.querySelector("#computer").textContent = "Computer: ";
    document.querySelector("#winner").textContent = "";
    document.querySelector("#result").textContent = "";
    
    const imgs = document.querySelectorAll("img");
    imgs.forEach((img) => {
        img.addEventListener('click', () => {
            if(img.id) {
                const computerSelection = getComputerChoice();
                const playerSelection = img.id;
            
                document.querySelector("#player").textContent = `Player: ${playerSelection}`;
                document.querySelector("#computer").textContent = `Computer: ${computerSelection}`;
                document.querySelector("#winner").textContent = `${playRound(playerSelection, computerSelection)}`;

                if (checkWinner(playerSelection, computerSelection) == "Player") {
                    playerScore++;
                } else if (checkWinner(playerSelection, computerSelection) == "Computer") {
                    computerScore++;
                }
                document.querySelector("#playScore").textContent = `${playerScore}`;
                document.querySelector("#compScore").textContent = `${computerScore}`;
                
                if (playerScore == 5) {
                    document.querySelector("#result").textContent = `You are the rock, paper, scissors champion!`;
                    reset();
                } else if (computerScore == 5) {
                    document.querySelector("#result").textContent = `The computer is the rock, paper, scissors champion!`;
                    reset();
                } else {
                    document.querySelector("#result").textContent = "";
                }
            }
        });
    });
}

// Randomly returns rock, paper or scissors
function getComputerChoice() { 
    const computerChoice = Math.floor(Math.random() * rps.length);
    const item = rps[computerChoice];
    return item;
}

// Check the winner of each round
function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Draw"
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ) {
        return "Player"
    } else {
        return "Computer"
    }
}

// Round
function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Draw") {
        return "It's a draw!"
    } else if (result == "Player") {
        const playerString = String(`${playerSelection}`);
        const playerString2 = playerString.charAt(0).toUpperCase() + playerString.slice(1);
        return playerString2 + ` beats ${computerSelection}. You win!`
    } else {
        const computerString = String(`${computerSelection}`);
        const computerString2 = computerString.charAt(0).toUpperCase() + computerString.slice(1);
        return computerString2 + ` beats ${playerSelection}. Computer wins!`
    }
}

game();