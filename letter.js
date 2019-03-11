function Letter(letter){
    this.letter = letter;
    this.guessed = false;
    this.placeholder = "_";
};

Letter.prototype.guess = function(character){
    if(this.letter === character){
        
        return this.letter;
    }
    else{
        return this.placeholder;
    }
}
Letter.prototype.isCorrect = function(character){
    if(this.letter === character){
        this.guessed = true;
    }
};



module.exports = Letter;
