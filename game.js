function computerPlay(){
    let moves = ["Rock", "Paper", "Scissors"]
    let gameMoves = Math.floor(Math.random() * moves.length)
    let computerSelection = moves[gameMoves]
    
    return computerSelection
}

// console.log(computerPlay()) 
// uncomment to test the random pick of the array
console.log("Your opponent has made their move, your turn...")

