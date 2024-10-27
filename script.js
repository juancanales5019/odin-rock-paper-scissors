//create a function to get computer choice
function getComputerChoice() {
    //Use Math.random within the function to choose the return randomly
    //Generate a random number between 0 and 1 to represent the three different computer options
    let number = Math.floor(Math.random()*3);
    //create a variable to store the string representation of computer choice.
    let choice = "";
    //use conditionals to assign a text value to a given number between 0 and 1.
    if (number == 0) {
        choice = "Rock";
    } else if (number == 1) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }
    //the function has to return: "Rock", "Paper" or Scissors
    return choice;
}
//Create a function to getHumanChoice
function getHumanChoice() {
    //create a variable to storage human choice
    let choice = "";
    //get Human choice using a prompt
    //to simplify things human will choose 1 2 or 3
    let number = parseInt(prompt("Choose 1 for Rock; 2 for Paper and 3 for Scissors"));
    //convert human numeric choice into string: Rock Paper or Scissors
    if (number == 1) {
        choice = "Rock";
    } else if (number == 2) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }
    //Return human choice
    return choice;
}

//Declare computerScore variable
let computerScore = 0;
//Declare humanScore variable
let humanScore = 0;

//write the logic to play a single round
//create a function that takes two arguments which are the computer and the human choices adn declare a winner
function playRound(a,b) {
    console.log(a);
    console.log(b);
    //use conditional to determine the winner in any give set of choices
    //represent round winner for each possibility and log it to the console
    if (a == b) {
        console.log("it is a draw");
    } else if ((a == "Rock" && b == "Scissors") || (a == "Paper" && b == "Rock") || (a == "Scissors" && b == "Paper")){
        console.log("Computer Won");
        computerScore += 1;
        console.log(computerScore);
    } else {
        console.log("You Won");
        humanScore += 1;
        console.log(humanScore);
    }
}

//Declare variable to storage computer choice through the function getComputerChoice
let cChoice = getComputerChoice();
//Declare variable to storage human choice through the function getHumanChoice
let hChoice = getHumanChoice();
//Declare a variable to storage the result of calling the playRound function
let pround = playRound(cChoice,hChoice);
console.log(pround);