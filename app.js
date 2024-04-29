const paperBtn = document.getElementById('paper');
const rockBtn = document.getElementById('rock');
const scissorsBtn = document.getElementById('scissors');
const Playermove = document.getElementById('movePlayer');
const result = document.querySelector('.result');
const resultStatus = document.getElementById('rstats');
const Pscore = document.getElementById('player');
const Cscore = document.getElementById('computer');
const CompMove = document.getElementById('moveComputer');
const playagain = document.querySelector('.button');
const moveset = document.getElementById('moveset');
let playerScore = 0;
let computerScore = 0;

function updtScore() {
    Pscore.textContent = playerScore;
    Cscore.textContent = computerScore;
    if (playerScore >= 5 || computerScore >= 5) {
        result.style.display = 'block';
        moveset.style.display = 'none';
        resultStatus.textContent = playerScore > computerScore ? 'You won the game' : playerScore < computerScore ? 'Computer won the game' : 'It\'s a draw';
    }
}

function winner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return;
    }
    if ((playerChoice === 0 && computerChoice === 1) ||
        (playerChoice === 1 && computerChoice === 2) ||
        (playerChoice === 2 && computerChoice === 0)) {
        computerScore++;
    } else {
        playerScore++;
    }
    updtScore();
}

function computer(playerChoice) {
    const computerChoice = Math.floor(Math.random() * 3);
    const choices = ['paper', 'rock', 'scissors'];
    CompMove.innerHTML = `<img src='./assets/${choices[computerChoice]}-hand.png' alt='${choices[computerChoice]}'>`;
    winner(playerChoice, computerChoice);
}

paperBtn.addEventListener('click', () => {
    Playermove.innerHTML = `<img src='./assets/paper-hand.png' alt='paper'>`;
    computer(0);
});

rockBtn.addEventListener('click', () => {
    Playermove.innerHTML = `<img src='./assets/rock-hand.png' alt='rock'>`;
    computer(1);
});

scissorsBtn.addEventListener('click', () => {
    Playermove.innerHTML = `<img src='./assets/scissors-hand.png' alt='scissors'>`;
    computer(2);
});

playagain.addEventListener('click', () => {
    location.reload();
});
