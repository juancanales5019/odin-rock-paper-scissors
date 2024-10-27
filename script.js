console.log("Hello world");
console.log(getComputerChoice());
console.log(getHumanChoice());
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
