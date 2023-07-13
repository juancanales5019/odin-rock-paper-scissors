var roundCount = 0;
var playerScore = 0;
var computerScore = 0;

function play(userChoice) {
    var choices = ['rock', 'paper', 'scissors'];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];

    var result = '';

    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = "You win!";
        playerScore++;
    } else {
        result = "You lose!";
        computerScore++;
    }

    roundCount++;
    document.getElementById('result').innerHTML = 'You chose ' + userChoice + '. The computer chose ' + computerChoice + '. ' + result;
    document.getElementById('round-count').textContent = roundCount;
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;
}

function reset() {
    roundCount = 0;
    playerScore = 0;
    computerScore = 0;
    document.getElementById('round-count').textContent = roundCount;
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;
    document.getElementById('result').innerHTML = '';
}