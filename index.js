// Rock Paper Scissors game
// Problem:
//      Ask the user to pick between Rock, Paper, or Scissors
//      and the computer will choose between thsoe three randomly
//      compare the user's and computer's result and return who is the winner


// create variable "enemy" computer's choice
let enemy = "";
// create variable "user" user's choice
let user = "";
// create variable "output" to store who is the winner
let output = "";

// create a function "computerPlay" for the computer to choose between the three randomly
    // create an array named "choice" containing the three choices
    // from that array used the random function and return the result
function computerPlay() {
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}


// create a function "play" to compare the "user" and "enemy" and return the result
function play(user, enemy) {
    // if (user === "Rock") && (enemy === "Paper") then enemy win
    user = user.toUpperCase()

    if ((user === "ROCK") && (enemy === "PAPER")) {
        return `You: ${user}\nComputer: ${enemy}\nYOU LOSE`;
    // if (user === "Rock") && (enemy === "Scissors") then user win
    } else if (user === "ROCK" && enemy === "SCISSORS") {
        return `You: ${user}\nComputer: ${enemy}\nYOU WIN`;
    // if (user === "Paper") && (enemy === "Rock") then user win
    } else if (user === "PAPER" && enemy === "ROCK") {
        return `You: ${user}\n Computer: ${enemy}\nYOU WIN`;
    // if (user === "Paper") && (enemy === "Scissors") then enemy win
    } else if (user === "PAPER" && enemy === "SCISSORS") {
        return `You: ${user}\nComputer: ${enemy}\nYOU LOSE`;
    // if (user === "Scissors") && (enemy === "Rock") then enemy win
    } else if (user === "SCISSORS" && enemy === "ROCK") {
        return `You: ${user}\nComputer: ${enemy}\nYOU LOSE`;        
    // if (user === "Scissors") && (enemy === "Paper") then user win
    } else if (user === "SCISSORS" && enemy === "PAPER") {
        return `You: ${user}\nComputer: ${enemy}\nYOU WIN`;        
    } else if (user === "") {
        return "User is lazy to play"; 
    // if (user === enemy) then its a tie
    } else if (user === enemy) {
        return `You: ${user}\nComputer: ${enemy}\nIT'S A DRAW`;        
    } else {
        return "IT'S NOT THE GAME"
    }
}

// ask the user to input his choice and put the value into the user variable make it capitalize
user = prompt("Choose --- 'ROCK' 'PAPER' 'SCISSORS' --- ")

// call the compare function and assign the result into the "output" variable
output = play(user, computerPlay());

// print the result
console.log(output);