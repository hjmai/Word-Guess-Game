var wordArr = ["hello", "world", "stuff", "zoo", "blasphemy", "dog", "cat", "coding", "frustration", "captain", "office", "brain"];
var wordPicked = "";
var correctLetters = [];
var wrongLetters = [];
var guessWord = document.getElementById("guessWord");
var wrongLetterSpan = document.getElementById("wrongLetters");
var attemptSpan = document.getElementById("attempts");
var winSpan = document.getElementById("winCounter");
var attempts = 10;
var winCount = 0;

/* All Functions Go Here*/
function pickWord(){
    reset();
    wordPicked = wordArr[Math.floor(Math.random()*wordArr.length)];
    attempts = 10;
    correctLetters = [];
    wrongLetters = [];
}

function reset(){
    guessWord.innerHTML = "";
    wrongLetterSpan.innerHTML = "";
}

function skip(){
    pickWord();
    populateText();
}

function populateText(){
    reset();
    attemptSpan.innerHTML = "";
    winSpan.innerHTML = "";

    // Display remaining letters
    for(var i = 0; i < wordPicked.length; i++){
        var char = document.createElement(null);
        if(correctLetters.indexOf(wordPicked[i].toLowerCase()) >= 0){
            char.textContent = wordPicked[i];
        }
        else{
            char.textContent = " _ ";
        }
        guessWord.appendChild(char);
    }

    // Display Wrong Letters
    for(var k = 0; k < wrongLetters.length; k++){
        var char = document.createElement(null);
        char.textContent = wrongLetters[k]+' ';
        wrongLetterSpan.appendChild(char);
    }
    
    // Display Remaining Attempts
    var attemptLeft = document.createElement(null);
    attemptLeft.textContent = attempts;
    attemptSpan.appendChild(attemptLeft);

    // Display Win Count
    var wins = document.createElement(null);
    wins.textContent = winCount;
    winSpan.appendChild(wins);
}

document.onkeyup = function(event){
    if(wrongLetters.indexOf(event.key) === -1 && event.key !== 'Enter'){
        if(wordPicked.indexOf(event.key) >= 0){
            correctLetters.push(event.key);
        }
        else{
            wrongLetters.push(event.key);
            attempts--;
            if(attempts == 0){
                pickWord();
            }
        }
    }
    if(event.key === 'Enter'){
        if(wordPicked === guessWord.textContent){
            winCount++;
            reset();         
            pickWord();
        }
    }
    populateText();
}

/*Game Start*/

pickWord();
populateText();