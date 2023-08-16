let currentGuess = '';
let correctNumber = Math.floor(Math.random() * 100);
let attempts = 0;

function addNumber(n) {
    if (currentGuess.length === 0 && n === 0) {
        currentGuess += n;
        displayCurrentGuess();
        return;
    }

    if (currentGuess.length < 2) {
        currentGuess += n;
        displayCurrentGuess();

        if (currentGuess.length === 2) {
            submitGuess();
        }
    }
}

function displayCurrentGuess() {
    const guessesDiv = document.getElementById('guesses');
    guessesDiv.textContent = currentGuess;
}

function appendGuessResult(resultSymbol) {
    const guessesDiv = document.getElementById('guesses');
    guessesDiv.innerHTML += `${currentGuess} ${resultSymbol} <br>`;
}

function submitGuess() {
    if (currentGuess === '') return; // Exit if no number inputted

    const guess = parseInt(currentGuess, 10);

    const feedbackItems = document.querySelectorAll('.feedback-item .indicator');
    let indicator = feedbackItems[attempts];

    const circleItems = document.querySelectorAll('.feedback-item .circle');
    let circle = circleItems[attempts];
    circle.textContent = currentGuess; // This will place the guessed number inside the circle

    if (guess < correctNumber) {
        indicator.textContent = "↑"; // Upwards arrow
    } else if (guess > correctNumber) {
        indicator.textContent = "↓"; // Downwards arrow
    } else {
        indicator.textContent = "✔"; // Checkmark
        document.getElementById('message').textContent = 'Congratulations! You guessed correctly.';
        return;
    }

    attempts++;

    if (attempts >= 5 && indicator.textContent !== "✔") {
        document.getElementById('message').textContent = `The correct number was: ${correctNumber}`;
    }

    currentGuess = ''; // Reset current guess for next input
}