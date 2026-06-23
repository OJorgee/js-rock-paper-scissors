function computerPlay() {
    let moves = ["rock", "paper", "scissors"]
    let gameMoves = Math.floor(Math.random() * moves.length)
    let computerSelection = moves[gameMoves]

    return computerSelection
}

let computerResult = computerPlay()
console.log(computerResult) // comment or delete when assignment is finished

console.log("Hello, Web Dev. I'm an evil AI. I want to play a game.\n" +
    "All your life you have used <div> instead of <section> and ignored proper indenting and variable naming conventions. \n" +
    "If you want to get your GitHub repositories back, you have to play five rounds of rock, paper, scissors with me. \n" +
    "Time is running out for you, Web Dev. \nMake your choice.")

function playerSelection() {
    let playerSelect = prompt("Choose: Rock , Paper, Scissors")
    if (playerSelect === null) {
        return console.log("You gave up...")
    } else {
        let player = playerSelect.toLowerCase();
        let moves = ["rock", "paper", "scissors"]


        while (true) {

            if (!moves.includes(player)) {
                console.log("Must chose rock, paper or scissors!")
                return playerSelection();

            }

            if (playerSelect == "") {
                return playerSelection();
                console.log("Choose again!");
            }
            else {
                return playerSelect;
            }
        }
    }
}

let playerResult = playerSelection()
console.log("Your pick: " + playerResult) // comment when assignment is finished

function playRound(playerResult, computerResult) {
    if (playerResult === null) {
        console.log("You gave up...")
        return null;
    }

    // 1 - player win
    // 2- player lose
    // 3 - tie

    switch (playerResult) {
        case "rock":
            if (computerResult === "scissors") {
                return result = 1
                break
            } else if (computerResult === "paper") {
                return result = 2
                break
            } else {
                return result = 3
                break
            }
        case "scissors":
            if (computerResult === "scissors") {
                return result = 3
                break
            } else if (computerResult === "paper") {
                return result = 1
                break
            } else {
                return result = 3
                break
            }
        case "paper":
            if (computerResult === "scissors") {
                return result = 2
                break
            } else if (computerResult === "paper") {
                return result = 3
                break
            } else {
                return result = 1
                break
            }
    }

}

let matchResult = playRound(playerResult, computerResult)
console.log("result: " + matchResult)

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