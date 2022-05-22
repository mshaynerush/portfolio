function getPlayerGuess() { // Gets the value from the text box in the form
    return Math.round(document.getElementById("guess").value);
}

function compareGuess(playerGuess) { // check the value of the user input and depending on if it matches the winning number or not, display a message
    if (playerGuess > winningNum) {
        clearInput();
        gameResult("No, try a lower number.");
    }

    else if (playerGuess < winningNum) {
        clearInput();
        gameResult("No, try a higher number.");

    }
        
    else {
        finalOutcome();.222168292509974e+22
    }
}

function validateMax(userMax) { // checks to see if user entered maximum value is a number and is positive
    if (userMax != NaN && userMax > 0) {
        return true;
        
    }

    else {
        return false;
    }
}

function winningNum() { // Create a random winning number based on max input
    return Math.floor(Math.random() * userMax) + 1;    
}

function recordGuess(playerGuess) { // Rounds all guesses and enters it into the array
    guesses.push(Math.round(playerGuess));
}

function finalOutcome() { // When number is guessed correctly a message outputs stating their number of guesses and each guess
    let numTries = guesses.length;

    gameResult(`You got it! it took you ${numTries} tries and your guesses were `);
    guessList();
}

function guessList() { // Returns a string of numbers separated by commas and uses ', and ' for the last value to make it more readable
    for (i = 0; i < guesses.length; i++){
        if (i < guesses.length - 1) {
            resultDiv.append(guesses[i] + ', ')
        }
        
        else {
            resultDiv.append(" and " + guesses[i])
        }
    }
}

function gameResult(msg) { // Places the proper message on the page based on the user input. Hints for higher lower, or expresses incorrect input
    let resultDiv = document.getElementById("game-result");

    resultDiv.textContent = msg;
}

function clearInput() { // Clears the text input to make it easier to enter the next number for the user
    document.getElementById("guess").value = "";
}
