# WordGuess-Cli

* This is a command line word guess game.  It utilizes the `inquirer` npm package.
* When the application is run with node, it will randomly select a word from an array of words.  The    words are javascript themed.
* Once the random word is generated, the application will use the word constructor to create a word     object, and the word constructor will create letter objects for all the letters with the word.
* The word will be displayed on the console with "_" as placeholders for the letters, and the user      will be prompted to guess a letter.  If the user guesses a letter in the word, that letter will     be revealed, the number of guesses remaining will be decremented, and the user will be prompted      again to guess a letter.
* Game play will contine as outlined above until the user guesses the word, or runs out of guesses.     At that point, the user will be prompted to play again, or to exit the game.



