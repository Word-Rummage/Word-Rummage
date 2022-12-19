'use strict';

// ***** GLOBALS *****

// TODO Variable for array of random words

let preWord = 'apse aqua arch arcs area aria';
let wordArray = preWord.split(' ');
let timer = 60;
let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let blockCount = 0;

// ***** DOM WINDOWS *****
let gameContainer = document.getElementById('gameboard');

// ***** FUNCTIONS & UTILITIES *****
// TODO User Input for name and name location
// TODO Game Loop
// TODO create random game board
function createGameBoard() {
  for (let i = 0; i < 6; i++) {
    let letterRow = document.createElement('div');
    gameContainer.appendChild(letterRow);
    letterRow.id = `row-${i + 1}`;
    letterRow.className = 'letter-row';
    for (let j = i * 6; j < (i + 1) * 6; j++) {
      let letter = document.createElement('div');
      letterRow.appendChild(letter);
      letter.id = `block-${j}`;
      letter.className = 'letter-block';
      blockCount++;
    }
  }
}
// TODO Make function for random word
function fillBoard() {
  for (let i = 0; i < blockCount; i++){
    let fillLetter = document.getElementById(`block-${i}`);
    let randLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    fillLetter.innerText = randLetter;
  }
}

// TODO Timer
// TODO Update timer
// TODO Score tracking
// TODO Game over

// ***** CONSTRUCTORS*****
// TODO Function for splitting words to array
// TODO name, image, first/last letter flag

// ***** EVENT HANDLERS*****
// TODO Need to figure out how the user is clicking the words

// *****EXECUTABLE CODE*****
createGameBoard();
fillBoard();