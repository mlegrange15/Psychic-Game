var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [ ];

var gameChoices = ["a", "b", "c","d", "e", "f","g", "h", "i","j", "k", "l",
                    "m", "n", "o","p", "q", "r","s", "t", "u","v", "w", "x","y", "z"];

// Function updating wins  
function updateWins() {
document.querySelector("#wins").innerHTML = wins;
}

// Function updating Loses  
function updateLosses() {
document.querySelector("#losses").innerHTML = losses;
}

// Function updating Guesses Left  
function updateGuessesLeft() {
document.querySelector("#guesses-left").innerHTML = guessesLeft;
}

// Running Guesses left function for starting point
updateGuessesLeft()

function updateGuessesSoFar() {
document.querySelector("#guesses-so-far").innerHTML = guessesSoFar;
}

// Supposed to reset the game but not working
function resetGame () {
    guessesLeft = 9;
    guessesSoFar = [ ];
    updateGuessesLeft();
    updateGuessesSoFar();
}

// This will run whenever the user presses a key 
document.onkeyup = function(event) {

    // Updates guesses left
    guessesLeft--
    updateGuessesLeft()

    // Users Guess
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    // Puts user guess into the guessesSoFar array
    guessesSoFar.push(userGuess);
    updateGuessesSoFar()
    

    // Random Computers Guess
    var computerGuess = gameChoices[Math.floor(Math.random() * gameChoices.length)];

        // This is supposed to limit the user key input to only options in the gameChoices array
        // but it is not working properly

        if (guessesLeft > 0 && userGuess.indexOf(gameChoices) > -1){

            if(userGuess === computerGuess){
                wins++;
                updateWins();
                alert("You are so smart!");
                resetGame();
            }
        } else if(guessesLeft === 0){
                losses++;
                updateLosses();
                alert("You lose. So sorry...");
                resetGame(); 
            
            }
};