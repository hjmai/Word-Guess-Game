var wordArr = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran", "Nidorina", "Nidoqueen", "Nidoran", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch'd", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew"];
var wordPicked = "";
var letterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '\''];
var correctLetters = [];
var wrongLetters = [];
var guessWord = document.getElementById("guessWord");
var wrongLetterSpan = document.getElementById("wrongLetters");
var attemptSpan = document.getElementById("attempts");
var winSpan = document.getElementById("winCounter");
var attempts = 10;
var winCount = 0;

/* All Functions Go Here*/
function pickWord() {
    reset();
    wordPicked = wordArr[Math.floor(Math.random() * wordArr.length)].toLowerCase();
    attempts = 10;
    correctLetters = [];
    wrongLetters = [];
}

function reset() {
    guessWord.innerHTML = "";
    wrongLetterSpan.innerHTML = "";
}

function skip() {
    pickWord();
    populateText();
}

function populateText() {
    reset();
    attemptSpan.innerHTML = "";
    winSpan.innerHTML = "";

    // Display remaining letters
    for (var i = 0; i < wordPicked.length; i++) {
        var char = document.createElement(null);
        if (correctLetters.indexOf(wordPicked[i].toLowerCase()) >= 0) {
            char.textContent = wordPicked[i];
        }
        else {
            char.textContent = " _ ";
        }
        guessWord.appendChild(char);
    }

    // Display Wrong Letters
    for (var k = 0; k < wrongLetters.length; k++) {
        var char = document.createElement(null);
        char.textContent = wrongLetters[k] + ' ';
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

document.onkeyup = function (event) {
    if (letterArray.indexOf(event.key) >= 0) {
        if (wrongLetters.indexOf(event.key) === -1 && event.key !== 'Enter') {
            if (wordPicked.indexOf(event.key) >= 0) {
                correctLetters.push(event.key);
            }
            else {
                wrongLetters.push(event.key);
                attempts--;
                if (attempts == 0) {
                    pickWord();
                }
            }
        }
    }
    if (event.key === 'Enter') {
        if (wordPicked === guessWord.textContent) {
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