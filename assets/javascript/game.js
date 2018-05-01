function populateUnderscores(word){
    for(var i = 0; i < word.length; i++){
        document.write("_ ");
    }
}
document.write("<h1>Hangman</h1>");
populateUnderscores("jon");