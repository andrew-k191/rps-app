const rock = document.querySelector('.img1');
const paper = document.querySelector('.img2');
const scissors = document.querySelector('.img3');
const promptText = document.querySelector('.prompt');
const p1txt = document.querySelector('.p1')
const p2txt = document.querySelector('.p2');
const p3txt = document.querySelector('.p3');

// Computer choice
const computerChoice = () => {
    const selections = ['rock', 'paper', 'scissors'];
    // generate random number 0, 1, or 2
    const randNum = Math.floor(Math.random() * 3);
    const computerChoice = selections[randNum];
    return computerChoice;
};

const rockMatch = (computerChoice) => {
    p1txt.textContent = 'Your selection: Rock';
    p2txt.textContent = `Computer chooses ${(computerChoice.slice(0,1)).toUpperCase() + computerChoice.slice(1)}`;
    switch (computerChoice) {
        case 'scissors':
            p3txt.textContent = 'You win! Rock beats Scissors!';
            break;
        case 'paper':
            p3txt.textContent = 'You Lose! Rock loses to Paper';
            break;
        default:
            p3txt.textContent = `Its a Tie!!`;
    }
};

const paperMatch = (computerChoice) => {
    p1txt.textContent = 'Your selection: Paper';
    p2txt.textContent = `Computer chooses ${(computerChoice.slice(0,1)).toUpperCase() + computerChoice.slice(1)}`;
    switch (computerChoice) {
        case 'rock':
            p3txt.textContent = 'You win! Paper beats Rock!';
            break;
        case 'scissors': 
            p3txt.textContent = `You Lose! Paper loses to Scissors!`;
            break;
        default: 
            p3txt.textContent = `It's a Tie!`;
    }
};

const scissorsMatch = (computerChoice) => {
    p1txt.textContent = 'Your selection: Scissors';
    p2txt.textContent = `Computer chooses ${(computerChoice.slice(0,1)).toUpperCase() + computerChoice.slice(1)}`;
    switch (computerChoice) {
        case 'paper':
            p3txt.textContent = 'You win! Scissors beats Paper!';
            break;
        case 'rock':
            p3txt.textContent = 'You Lose! Scissors loses to Rock!';
            break;
        default:
            p3txt.textContent = `It's a Tie!`;
    }
};

// User selects Rock
rock.addEventListener('click', () => {
    rockMatch(computerChoice());
    promptText.textContent = 'To play again just make another selection!!';
});

// User selects Paper
paper.addEventListener('click', () => {
    paperMatch(computerChoice());
    promptText.textContent = 'To play again just make another selection!!';
});

// User selects Scissors
scissors.addEventListener('click', () => {
    scissorsMatch(computerChoice());
    promptText.textContent = 'To play again just make another selection!!';
});


// Change paragraph text when selection is made

// Display user choice:
// Display computer choice:
// Display image for winner, none for tie

// console.log(`User choice: ${userChoice()}`);
// console.log(`Computer choice: ${computerChoice()}`);
// console.log(determineResult(userChoice(), computerChoice()));





// Computer choice will be displayed??
// Flash the screen green for win, red for loss, yellow for tie

// How will things line or stack up? 

// Rock, paper, and scissors formula calculator, i.e. result
// (this function will take userChoice and Computer Choice)

// Computer choice involves an array where it has rock paper and scissors corresponding to a number


// Option 1: User promt selection (also later account for verification correct information was used)
// Option 2: click on rock, paper, or scissors, and listen for click event

// Initially we'll start off with 3 images, rock, paper, or scissors

// The winner will have it's image displayed

// For a tie, the image displayed will show a tie

// Also, display a button at the bottom for game restart

// Task: Once user selects, computer chooses randomly from the remaining two options