console.log("Hello world");
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