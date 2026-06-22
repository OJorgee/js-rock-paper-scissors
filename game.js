function computerPlay() {
  let moves = ["Rock", "Paper", "Scissors"]
  let gameMoves = Math.floor(Math.random() * moves.length)
  let computerSelection = moves[gameMoves]

  return computerSelection
}

// console.log(computerPlay())
// uncomment to test the random pick of the array
console.log("Your opponent has made their move, your turn...")

function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    if (player === computer) {
        return "It's a Tie!";
    } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "You Win! " + playerSelection + " beats " + computerSelection;
    } else {
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
}
console.log(playRound("paper",computerPlay()))