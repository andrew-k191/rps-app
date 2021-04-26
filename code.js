// Where to start???
// User starts with a selection: rock, paper, or scissors

const userChoice = () => {
    const userChoice = (prompt(`Let's play! Please enter rock, paper, or scissors!!`)).toLowerCase();
    // check if user entered correct input
    if ((userChoice === 'rock') || (userChoice === 'scissors') || (userChoice === 'paper')) {
        return userChoice;
    }
    // otherwise an alert will prompt the user to enter proper information
    console.log(`Invalid input!! You must enter either 'rock', 'paper', or 'scissors'!`);
};

// user chooses:

const computerChoice = () => {
    const selections = ['rock', 'paper', 'scissors'];
    // generate random number 0, 1, or 2
    const randNum = Math.floor(Math.random() * 3);
    const computerChoice = selections[randNum];
    return computerChoice;
};



// const gameResMes = (userChoice, computerChoice) => {

// }
// computer chooses: 

const rockMatch = (choice) => {
    switch (choice) {
        case 'scissors':
            return 'User wins!! Rock beats scissors!';
        case 'paper':
            return 'Computer wins!! Paper beats rock!';
        default:
            return 'Tie!!';
    }
};

const scissorsMatch = (choice) => {
    switch (choice) {
        case 'paper':
            return 'User wins!! Scissors beats paper!';
        case 'rock':
            return 'Computer wins!! Rock beats scissors!';
        default:
            return 'Tie!';
    }
};

const paperMatch = (choice) => {
    switch (choice) {
        case 'rock':
            return 'User wins!! Paper beats rock!';
        case 'scissors': 
            return `Computer wins!! Scissors beats paper!`;
        default: 
            return 'Tie!';
    }
};

const determineResult = (userChoice, computerChoice) => {
    if (userChoice === 'rock') { return rockMatch(computerChoice); }
    else if (userChoice === 'scissors') {return scissorsMatch(computerChoice); }
    else if (userChoice === 'paper') {return paperMatch(computerChoice); }
};

console.log(`User choice: ${userChoice()}`);
console.log(`Computer choice: ${computerChoice()}`);
console.log(determineResult(userChoice(), computerChoice()));
// Computer choice will be displayed??
// Flash the screen for invalid input???

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