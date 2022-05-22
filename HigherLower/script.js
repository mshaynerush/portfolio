// Set variables to create winning number randomly between 1-20, get the button selector and the div selector to display the hint/final result
let btn = document.getElementById("submitGuess");
let resultDiv = document.getElementById("game-result");
let rangeDiv = document.getElementById("range");
let userMax;
let validMax = false;
let validGuess = false;
let guesses = [];

// Validate input as number greater than 0
while (!validMax){
    userMax = Math.round(prompt("Choose the maximum number", "Must Be A Number"));
    validMax = validateMax(userMax);
}

// Set game rules to ask for guess between one and user supplied max number
rangeDiv.textContent = `Choose a number between 1 and ${userMax}`;

winningNum = winningNum();

btn.addEventListener('click', (e) => { // Adds a click listener to the button in the form
    e.preventDefault(); // Keeps the window from refresing when submitted.
    let playerGuess = getPlayerGuess();

    for (i = 0; i < guesses.length; i++){
        if (guesses[i] === playerGuess) {
            gameResult("You have already guessed that number.");
            clearInput();
            return;
        }
    }

    if (isNaN(playerGuess)) {
        gameResult("That is not a number");
        clearInput();

    }

    else if (Number(playerGuess) > userMax || playerGuess < 1) {
        gameResult("That number is not in range, try again.");
        clearInput();
    }
        
    else {
        recordGuess(playerGuess);
        gameResult("")
        compareGuess(playerGuess);
        
    }
})

