var inquirer = require("inquirer");
var Word = require("./word.js");


var wordArray = ["variable", "constructor", "parameter", "method", "function", 
                    "argument", "undefined", "hoisting", "scope", "array", "string"];

var count = 0;
var guesses = 8;

function gameStart(){
    var rand = wordArray[Math.floor(Math.random() * wordArray.length)];
    //create word from word constructor from this word
    var word = new Word(rand);
    //create letter constructors from this word
    word.addLetter();
    //console.log("This is the word you are guessing: " + rand);
    console.log("You have " + guesses +" guesses remaining!");
    word.displayPlaceholders();

    guessLetter(word);
};
   
function playMore(){
    inquirer.prompt({
        message: "Want to play again (Y/N)?",
        type: "confirm",
        name: "playAgain"
    }).then(function(answer1){
        //console.log(answer1.playAgain);
        if(answer1.playAgain){
            count = 0;
            guesses = 8;
            gameStart();
        }
        else{
            console.log("Thanks for playing!");
            return;
        }
        
    });
};



function guessLetter(word){
    if(count < 8){
        inquirer.prompt({
            message: "Please enter a letter to guess: ",
            type: "input",
            name: "letterGuess"}).then(function(answer){

                console.log(answer.letterGuess);
                //word.letterString(answer.letterGuess);
                //word.beenGuessed(answer.letterGuess);
                var test = word.letterString(answer.letterGuess);
                count++;
                guesses--;

                
                if (test){
                    //playMore();
                    return;
                }
                console.log("You have " + guesses + " guesses remaining");
                guessLetter(word);
            });
    }
    else{
        console.log("You are out of guesses!");
        playMore();
        
        
    }
    
};


gameStart();



