function computerPlay() {
  let moves = ["Rock", "Paper", "Scissors"]
  let gameMoves = Math.floor(Math.random() * moves.length)
  let computerSelection = moves[gameMoves]

  return computerSelection
}

 console.log(computerPlay())
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

function game(playerSelection, computerSelection)
{
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();
    const playerscore = 0
    const computerscore = 0

    for (let rounds = 0; rounds < 5; rounds ++)
    {
        let player = prompt("Play rock, paper or scissors!");
        playRound(playerSelection)
        
        if (playRound("It's a Tie!"))
        {
            playerscore = playerscore
            computerscore = computerscore
        }
        else if (playRound("You Win! " + playerSelection + " beats " + computerSelection))
        {
            playerscore += 1
        }
        else if ("You Lose! " + computerSelection + " beats " + playerSelection)
        {
            computerscore =+ 1
        }

        if((playerscore / 3) > computerscore)
        {
            console.Log("You Win! " + playerSelection + " beats " + computerSelection)
        }
        else if ((computerscore / 3) > playerscore)
        {
            console.log("You Lose! " + computerSelection + " beats " + playerSelection)
        }
    }
}

game();