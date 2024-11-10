let computerScore = document.getElementById("computer-score");
let currentMatch = document.getElementById("match");
let playerScore = document.getElementById("player-score");
let computerChoice = document.getElementById("computer-choice");
let playerChoice = document.getElementById("player-choice");
let computer = "";
let user = "";
let computerSc = 0;
let playerSc = 0;
//Get user choice
function userChoice(button) {
    playerChoice.innerText = button;
    //display computer choice at the same time user make a choice
    selectComputerChoice();
    user = button;
    console.log(user);
    //compare choices at the same time user make a choice by clicking
    compareChoices();
}
//get computer choice randomly
function selectComputerChoice() {
    let list = ["Rock","Paper","Scissors"];
    let choice = list[Math.floor(Math.random() * list.length)]
    computerChoice.innerText = choice;
    computer = choice;
    console.log(computer);
}
//compare user choice against computer choice
function compareChoices() {
   if (user == computer) {
        currentMatch.innerText = "It is a draw!"
   } else if (computer == "Rock" && user == "Paper") {
        currentMatch.innerText = "User wins";
        playerScore.innerText = playerSc += 1;
   } else if (computer == "Rock" && user == "Scissors") {
        currentMatch.innerText = "Comp wins";
        computerScore.innerText = computerSc += 1;
   } else if (computer == "Paper" && user == "Scissors") {
        currentMatch.innerText = "User wins";
        playerScore.innerText = playerSc += 1;
   } else if (computer == "Paper" && user == "Rock") {
        currentMatch.innerText = "Comp wins";
        computerScore.innerText = computerSc += 1;
   } else if (computer == "Scissors" && user == "Rock") {
        currentMatch.innerText = "User wins";
        playerScore.innerText = playerSc += 1;
   } else if (computer == "Scissors" && user == "Paper") {
        currentMatch.innerText = "Comp wins";
        computerScore.innerText = computerSc += 1;
   }
}