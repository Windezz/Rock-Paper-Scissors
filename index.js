// Rock Paper Scissors game
// Problem:
//      Ask the user to pick between Rock, Paper, or Scissors
//      and the computer will choose between thsoe three randomly
//      compare the user's and computer's result and return who is the winner


const div = document.querySelector('#announce');
const buttonRock = document.getElementById('rock');
const buttonPaper = document.getElementById('paper');
const buttonScissor = document.getElementById('scissor');
const player = document.querySelector('#player');
const computer = document.querySelector('#computer');

// create variable "enemy" computer's choice
let enemy = "";
// create variable "user" user's choice
let user = "";
// create variable "output" to store who is the winner
let output = "";
// create variable playerScore
let playerScore = 0;
// create variable computerScore
let computerScore = 0;


function checkWinner() {
    if (playerScore === 5) {
        div.setAttribute('style', 'color: white; background: orange')
        div.textContent = 'You Win The Game!!!!';
        setTimeout(() => {location.reload();},1000);
    } else if (computerScore === 5) {
        div.setAttribute('style', 'color: white; background: orange')
        div.textContent = 'You Lose The Game!!!!';
        setTimeout(() => {location.reload();}, 1000);
    } 
}



// create a function "computerPlay" for the computer 
    // to choose between the three randomly
function computerPlay() {
    // create an array named "choice" containing the three choices
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    // from that array used the random function and return the result
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}


// create a function "play" to compare the "user" and "enemy" and return the result
function playRound(user, enemy) {
        
    // ask the user to input his choice and put the value into the user variable make it capitalize

    // if (user === "Rock") && (enemy === "Paper") then enemy win
    if ((user === "ROCK") && (enemy === "PAPER")) {
        output = `You: ${user}\n Computer: ${enemy}\nYOU LOSE`;
        computerScore += 1;
        computer.textContent = computerScore;
    // if (user === "Rock") && (enemy === "Scissors") then user win
    } else if (user === "ROCK" && enemy === "SCISSORS") {
        output = `You: ${user}\nComputer: ${enemy}\nYOU WIN`;
        playerScore += 1;
        player.textContent = playerScore;
    // if (user === "Paper") && (enemy === "Rock") then user win
    } else if (user === "PAPER" && enemy === "ROCK") {
        output =`You: ${user}\n Computer: ${enemy}\nYOU WIN`;
        playerScore += 1;
        player.textContent = playerScore;
    // if (user === "Paper") && (enemy === "Scissors") then enemy win
    } else if (user === "PAPER" && enemy === "SCISSORS") {
        output = `You: ${user}\nComputer: ${enemy}\nYOU LOSE`;
        computerScore += 1;
        computer.textContent = computerScore;
    // if (user === "Scissors") && (enemy === "Rock") then enemy win
    } else if (user === "SCISSORS" && enemy === "ROCK") {
        output = `You: ${user}\nComputer: ${enemy}\nYOU LOSE`;
        computerScore += 1;        
        computer.textContent = computerScore;
    // if (user === "Scissors") && (enemy === "Paper") then user win
    } else if (user === "SCISSORS" && enemy === "PAPER") {
        output = `You: ${user}\nComputer: ${enemy}\nYOU WIN`;  
        playerScore += 1;     
        player.textContent = playerScore;
    } else if (user === "") {
        output = "User is lazy to play"; 
    // if (user === enemy) then its a tie
    } else if (user === enemy) {
        output = `You: ${user}\nComputer: ${enemy}\nIT'S A DRAW`;        
    } else {
        output = "IT'S NOT THE GAME"
    }

    div.textContent = output;
    checkWinner();  
}


// create a function "game()" to play a 5 round game
// function game() {
//     for (let i = 0; i < 5; i++) {
//         output = playRound(user, computerPlay());
//         console.log(output);
//     }
// }

// game();



buttonRock.addEventListener('click', () => playRound(buttonRock.value, computerPlay()));
buttonPaper.addEventListener('click', () => playRound(buttonPaper.value, computerPlay()));
buttonScissor.addEventListener('click', () => playRound(buttonScissor.value, computerPlay()));
