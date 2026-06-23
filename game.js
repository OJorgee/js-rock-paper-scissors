function computerPlay() {
    const moves = ["rock", "paper", "scissors"];
    return moves[Math.floor(Math.random() * moves.length)];
}

function getPlayerChoice() {
    let input = prompt("Choose: Rock, Paper, or Scissors");
    if (input === null) return null;
    
    let choice = input.toLowerCase().trim();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        alert("Invalid choice! Please try again.");
        return getPlayerChoice(); 
    }
}

function playRound(player, computer) {
    if (player === computer) return "tie";
    if ((player === "rock" && computer === "scissors") || 
        (player === "paper" && computer === "rock") || 
        (player === "scissors" && computer === "paper")) {
        return "win";
    }
    return "lose";
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        let p = getPlayerChoice();
        if (p === null) { console.log("Game Aborted"); return; }
        
        let c = computerPlay();
        let result = playRound(p, c);

        if (result === "win") {
            playerScore++;
            console.log("Round " + i + ": You Win! " + p + " beats " + c);
        } else if (result === "lose") {
            computerScore++;
            console.log("Round " + i + ": You Lose! " + c + " beats " + p);
        } else {
            console.log("Round " + i + ": It's a Tie!");
        }
    }

    console.log("Final Result - Player: " + playerScore + " | Computer: " + computerScore);
}

game();
