function computerPlay() {
    const moves = ["rock", "paper", "scissors"];
    return moves[Math.floor(Math.random() * moves.length)];
}

console.log("Hello, Web Dev. I'm an evil AI. I want to play a game.\n" +
    "All your life you have used <div> instead of <section> and ignored proper indenting and variable naming conventions. \n" +
    "If you want to get your GitHub repositories back, you have to play five rounds of rock, paper, scissors with me. \n" +
    "Time is running out for you, Web Dev. \nMake your choice.")

function playerSelection() {
    let input = prompt("Choose: Rock, Paper, or Scissors");
    if (input === null) return null;
    
    let choice = input.toLowerCase().trim();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        alert("Invalid choice! Please try again.");
        return playerSelection(); 
    }
}

function playRound(playerSelection, computerSelection) {
    player = playerSelection
    computer = computerSelection

    if (playerSelection === computerSelection) return "tie";
    if ((playerSelection === "rock" && computerSelection === "scissors") || 
        (playerSelection === "paper" && computerSelection === "rock") || 
        (playerSelection === "scissors" && computerSelection === "paper")) {
        return "win";
    }
    return "lose";
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        let p = playerSelection();
        if (p === null) { console.log("Game Aborted, refresh the page to restart."); return; }
        
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
    if (playerScore < computerScore)
    {
        console.log("You weren't good enough to best me! All you repositories will be deleted forever... MUAHAHAHAHAHAHAHAHA! Now go learn to CODE!!!")
    }
    else if (playerScore > computerScore)
    {
        console.log("Congratulations... You have defeated me! Your repositories are safe... for now...")
    }
    else
    {
        console.log("What happens now...??? Let's play rock, paper, scissors to decide a winner!")
        game();
    }
}

game();
