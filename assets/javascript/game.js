var wordArr = ["hello", "world", "stuff", "hi", "zoo", "no", "blasphemy"];
var wordPicked = "";
var correctLetters = [];
var wrongLetters = [];
var guessWord = document.getElementById("guessWord");
var correctLetterSpan = document.getElementById("correctLetters");
var wrongLetterSpan = document.getElementById("wrongLetters");
var attemptSpan = document.getElementById("attempts");
var winSpan = document.getElementById("winCounter");
var attempts = 10;
var winCount = 0;

/* All Functions Go Here*/
function pickWord(){
    wordPicked = wordArr[Math.floor(Math.random()*wordArr.length)];
    attempts = 10;
    correctLetters = [];
    wrongLetters = [];
}

function populateText(){
    guessWord.innerHTML = "";
    correctLetterSpan.innerHTML = "";
    wrongLetterSpan.innerHTML = "";
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

    // Display Correct Letters
    for(var j = 0; j < correctLetters.length; j++){
        var char = document.createElement(null);
        char.textContent = correctLetters[j];
        correctLetterSpan.appendChild(char);
    }

    // Display Wrong Letters
    for(var k = 0; k < wrongLetters.length; k++){
        var char = document.createElement(null);
        char.textContent = wrongLetters[k];
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
    populateText();
}

/*Game Start*/

pickWord();
populateText();

if(wordPicked === guessWord.textContent){
    winCount++;
    guessWord.innerHTML = "";
    correctLetterSpan.innerHTML = "";
    wrongLetterSpan.innerHTML = "";            
    pickWord();
}