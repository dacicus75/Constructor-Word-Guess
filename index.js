//// Constructor initialize
var Word = require("./word.js");
var inquirer = require("inquirer");
var colors = require("colors");

// letters entry
var lettersArray = "abcdefghijklmnopqrstuvwxyz";

// List of words to choose from
var webDevWords = ["html", "css", "javascript", "jquery", "github", "ajax", 
"mysql", "nodejs", "api", "axios", "push", "pull", "commit" ];

// Pick Random index from web developer words array
var randomIndex = Math.floor(Math.random() * webDevWords.length);
var randomWord = webDevWords[randomIndex];

// Pass random word through Word constructor
computerWord = new Word(randomWord);

var requireNewWord = false;

// Array for guessed letters
var incorrectLetters = [];
var correctLetters = [];

// Guesses left
var guessesLeft = 10;

function startGame() {

    // Generates new word for Word constructor if true
    if (requireNewWord) {

        // Selects random web developer words array
        var randomIndex = Math.floor(Math.random() * webDevWords.length);
        var randomWord = webDevWords[randomIndex];

        // Passes random word through the Word constructor
        computerWord = new Word(randomWord);
       
        requireNewWord = false;
    }
    // TestS if a letter guessed is correct
    var wordComplete = [];
    computerWord.objArray.forEach(completeCheck);

    // letters remaining to be guessed
    if (wordComplete.includes(false)) {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "You get 10 letter guesses to find common web development terms".cyan,
                    name: "userinput"
                }
            ])
            .then(function (input) {

               
                if (!lettersArray.includes(input.userinput) || input.userinput.length > 1) {
                    console.log("\nPlease try again!\n".yellow);
                    startGame();
                } else {

                        if (incorrectLetters.includes(input.userinput) || correctLetters.includes(input.userinput) || input.userinput === "") {
                        console.log("\nAlready Guessed or Nothing Entered\n".red);
                        startGame();
                    } else {

                        // Checks if guess is correct
                        var wordCheckArray = [];

                        
                        computerWord.userGuess(input.userinput);

                        // Checks if guess is correct
                        computerWord.objArray.forEach(wordCheck);
                        if (wordCheckArray.join('') === wordComplete.join('')) {
                            console.log("\nIncorrect\n".red);
                           
                            incorrectLetters.push(input.userinput);
                            guessesLeft--;
                        } else {
                            console.log("\nCorrect!\n".green);
                           
                            correctLetters.push(input.userinput);
                        }

                        
                        computerWord.log();

                        // Print guesses left
                        console.log("Guesses Left: " + guessesLeft + "\n".yellow);

                        // Print letters guessed already
                        console.log("Letters Guessed: " + incorrectLetters.join(" ") + "\n");

                        // Guesses left
                        if (guessesLeft > 0) {
                            // Call function 
                            startGame();
                        } else {
                            console.log("Sorry, you lose!\n".red);

                            restartGame();
                        }


                        
                        function wordCheck(key) {
                            wordCheckArray.push(key.guessed);
                        }
                    }
                }
            })
    } else {
        console.log("YOU GOT IT!\n".green);

        restartGame();
    }

   
    function completeCheck(key) {
        wordComplete.push(key.guessed);
    }

}

function restartGame() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Would you like to:",
                choices: ["Play Again", "Exit"],
                name: "restart"
            }
        ])
        .then(function (input) {
            if (input.restart === "Play Again") {
                requireNewWord = true;
                incorrectLetters = [];
                correctLetters = [];
                guessesLeft = 10;
                knowledge();
            } else {
                return
            }
        })
}

startGame();