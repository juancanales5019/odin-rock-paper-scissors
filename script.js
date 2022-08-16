let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("userScore");
const computerScore_span = document.getElementById("computerScore");
const scoreboard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function convertToWord(letter) {
    if (letter == "r") return "Rock";
    if (letter == "p") return "Paper";
    return "Scissors";
}

function wins(userChoise, computerChoise) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = convertToWord(userChoise) + " beats " + convertToWord(computerChoise) + ", you win!";
}

function loses(userChoise, computerChoise) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoise) + " beats " + convertToWord(computerChoise) + ", you lose!";
}

function draws(userChoise, computerChoise) {
    result_p.innerHTML = "It is a draw";
}

function getComputerChoise() {
    const choises = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choises[randomNumber];
}

function game(userChoise) {
    computerChoise = getComputerChoise();
    switch (userChoise + computerChoise) {
        case "rs":
        case "sp":
        case "pr":
            wins(userChoise, computerChoise);
            break;
        case "rp":
        case "ps":
        case "sr":
            loses(userChoise, computerChoise);
            break;
        case "rr":
        case "pp":
        case "ss":
            draws(userChoise, computerChoise);
            break;
    }

}

function main() {
    rock_div.addEventListener("click", function() {
        game("r");
    })

    paper_div.addEventListener("click", function() {
        game("p");
    })

    scissors_div.addEventListener("click", function() {
        game("s");
    })
}

main();