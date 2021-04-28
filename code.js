const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const gameText = document.querySelector('.gameText');
const userPickText = document.querySelector('.userPickText')
const computerPickText = document.querySelector('.computerPickText');
const gameOutcomeText = document.querySelector('.gameOutcomeText');

const computerChoice = () => {
    const gameOptions = ['rock', 'paper', 'scissors'];
    const randNum = Math.floor(Math.random() * 3);
    const computerChoice = gameOptions[randNum];
    return computerChoice;
};

const rockMatch = (computerChoice) => {
    userPickText.textContent = 'Your selection: Rock';
    computerPickText.textContent = `Computer chooses ${(computerChoice.slice(0,1)).toUpperCase() + computerChoice.slice(1)}`;
    switch (computerChoice) {
        case 'scissors':
            gameOutcomeText.textContent = 'You win! Rock beats Scissors!';
            break;
        case 'paper':
            gameOutcomeText.textContent = 'You Lose! Rock loses to Paper';
            break;
        default:
            gameOutcomeText.textContent = `Its a Tie!!`;
    }
};

const paperMatch = (computerChoice) => {
    userPickText.textContent = 'Your selection: Paper';
    computerPickText.textContent = `Computer chooses ${(computerChoice.slice(0,1)).toUpperCase() + computerChoice.slice(1)}`;
    switch (computerChoice) {
        case 'rock':
            gameOutcomeText.textContent = 'You win! Paper beats Rock!';
            break;
        case 'scissors': 
            gameOutcomeText.textContent = `You Lose! Paper loses to Scissors!`;
            break;
        default: 
            gameOutcomeText.textContent = `It's a Tie!`;
    }
};

const scissorsMatch = (computerChoice) => {
    userPickText.textContent = 'Your selection: Scissors';
    computerPickText.textContent = `Computer chooses ${(computerChoice.slice(0,1)).toUpperCase() + computerChoice.slice(1)}`;
    switch (computerChoice) {
        case 'paper':
            gameOutcomeText.textContent = 'You win! Scissors beats Paper!';
            break;
        case 'rock':
            gameOutcomeText.textContent = 'You Lose! Scissors loses to Rock!';
            break;
        default:
            gameOutcomeText.textContent = `It's a Tie!`;
    }
};

rock.addEventListener('click', () => {
    rockMatch(computerChoice());
    gameText.textContent = 'To play again just make another selection!!';
});

paper.addEventListener('click', () => {
    paperMatch(computerChoice());
    gameText.textContent = 'To play again just make another selection!!';
});

scissors.addEventListener('click', () => {
    scissorsMatch(computerChoice());
    gameText.textContent = 'To play again just make another selection!!';
});
