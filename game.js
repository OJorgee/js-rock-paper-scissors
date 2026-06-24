(function () {
  function computerPlay() {
    const moves = ["rock", "paper", "scissors"]
    return moves[Math.floor(Math.random() * moves.length)]
  }

  alert(
    "Hello, Web Dev. I'm an evil AI. I want to play a game.\n" +
      "All your life, you have used <div> instead of <section> and ignored proper indenting and variable naming conventions. \n" +
      "If you want to get your GitHub repositories back, you have to play five rounds of rock, paper, scissors with me. \n" +
      "Time is running out for you, Web Dev. \nMake your choice.",
  )

  function playerSelection() {
    let input = prompt(
      "To play, please open dev tools (Browser Context Menu -> More tools -> Developer tools -> Console) \n" +
        "(If console doesn't work press cancel and refresh the page) \n" +
        "Choose: Rock, Paper, or Scissors.",
    )
    if (input === null) return null

    let choice = input.toLowerCase().trim()
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
      return choice
    } else {
      alert("Invalid choice! Please try again.")
      return playerSelection()
    }
  }

  function playRound(playerSelection, computerSelection) {
    player = playerSelection
    computer = computerSelection

    if (player === computer) return "tie"
    if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      return "win"
    }
    return "lose"
  }

  function game() {
    let playerScore = 0
    let computerScore = 0

    for (let i = 1; i <= 5; i++) {
      let p = playerSelection()
      if (p === null) {
        alert("Game Aborted, refresh the page to restart.")
        return
      }

      let c = computerPlay()
      let result = playRound(p, c)

      if (result === "win") {
        playerScore++
        console.log("Round " + i + ": You Win! " + p + " beats " + c)
      } else if (result === "lose") {
        computerScore++
        console.log("Round " + i + ": You Lose! " + c + " beats " + p)
      } else {
        console.log("Round " + i + ": It's a Tie!")
      }
    }

    console.log(
      "Final Result - Player: " + playerScore + " | Computer: " + computerScore,
    )
    if (playerScore < computerScore) {
      alert("You weren't good enough to best me! All your repositories will be deleted forever... MUAHAHAHAHAHAHAHAHA! Now go learn to CODE!!! \n" +
          "Refresh the page to play again.")
    } else if (playerScore > computerScore) {
      alert("Congratulations... You have defeated me! Your repositories are safe... for now... \n" +
          "Refresh the page to play again.")
    } else {
      alert("What happens now...??? Let's play rock, paper, scissors to decide a winner!")
      game()
    }
  }

  game()
})()
