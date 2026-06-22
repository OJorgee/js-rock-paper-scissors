function computerPlay() {
  let moves = ["Rock", "Paper", "Scissors"]
  let gameMoves = Math.floor(Math.random() * moves.length)
  let computerSelection = moves[gameMoves]

  return computerSelection
}

 console.log(computerPlay())
// uncomment to test the random pick of the array
console.log("Your opponent has made their move, your turn...")


function playerSelection(){
    let playerSelect = prompt("Choose: Rock , Paper, Scissors")
    if (playerSelect === null) return null;
    const player = playerSelect.toLowerCase();
    let moves = ["rock", "paper", "scissors"]


    while(true){

        if(!moves.includes(player)) {
            console.log("Must chose rock, paper or scissors!")
            return playerSelection();

        }

        if (playerSelect == ""){ 
            return playerSelection();
            console.log("Choose again!");
        }
        else{
            return playerSelect;
        }
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === null){
        console.log("You gave up...")
        return null;
    }
    /// I added the above because if we cancel without input, the console gives out an undefined error. now it gives a nicer message 
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
console.log(playRound(playerSelection(),computerPlay()))

function game(playerSelection, computerSelection)
{
//     const player = playerSelection.toLowerCase();
//     const computer = computerSelection.toLowerCase();
    // i commented this out because it always gives an error, if it turns out to not be needed we delete
    let playerscore = 0
    let computerscore = 0 // const instead of let was giving out an error 

    for (let rounds = 0; rounds < 5; rounds ++)
    {
        let player = prompt("Play rock, paper or scissors!");
        playRound(playerSelection, computerSelection)
        
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