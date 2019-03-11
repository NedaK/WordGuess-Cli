var Letter = require("./letter.js");


function Word (word){
    this.word = word;
    this.chars = [];
    this.isguessed = false;

    this.addLetter = function(){
        // console.log(this.word.length);
        // console.log(this.word.charAt(0));

        var totalLetters = this.word.length;
       
        for(var i = 0; i < totalLetters; i++){
            var letter = new Letter(this.word.charAt(i));
            //console.log(letter);
            this.chars.push(letter);
            
        }
        //console.log(this.chars);
    };

    this.letterString = function(userguess){
        var stringArr = [];
        for(var i = 0; i< this.chars.length; i++){

            var temp = this.chars[i].guess(userguess);
            this.chars[i].isCorrect(userguess);

            if(this.chars[i].guessed){
                stringArr.push(this.chars[i].letter);
            }
            else{
                stringArr.push(temp);
            }
            
           

        }

        if (stringArr.indexOf("_") === -1){
            console.log("You guessed it!");
            this.isguessed = true;
            return this.isguessed;
        }
        
       console.log("String Array: " + stringArr.join(" "));
        
    };

    

    this.displayPlaceholders = function(){
        var string = [];
        for(var i = 0; i< this.chars.length; i++){
            string.push(this.chars[i].placeholder);
            //console.log(typeof this.chars[i].letter);

        }
       console.log(string.join(" "));
        
    };

    
}


module.exports = Word;