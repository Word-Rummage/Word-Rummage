'use strict';

// ***** GLOBALS *****

// TODO Variable for array of random words

let preWord = 'apse aqua arch arcs area aria';
let wordArray = preWord.split(' ');
let timer = 60;
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let blockCount = 0;
let rowCount = 0;
let answer;

// ***** DOM WINDOWS *****
let gameContainer = document.getElementById('gameboard');
let answerElem = document.getElementById('target-word');

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
    rowCount++;
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
  for (let i = 0; i < blockCount; i++) {
    let fillLetter = document.getElementById(`block-${i}`);
    let randLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    fillLetter.innerText = randLetter.toUpperCase();
  }
}
// TODO Create function for breaking word apart
function wordBreak() {
  let randAnswer = wordArray[Math.floor(Math.random() * wordArray.length)];
  let answer = randAnswer.split('');
  return answer;
}

// TODO creat function to display answer
function displayAnswer() {
  let displayedAnswer = document.createElement('p');
  displayedAnswer.innerText = answer.join('');
  answerElem.appendChild(displayedAnswer);

}

// TODO Create horizontal fill
function horizontalFill() {
  let randNum = Math.floor(Math.random() * blockCount);
  console.log(randNum);
  console.log(randNum % rowCount);
  answer = wordBreak();
  displayAnswer();
  if ((randNum % rowCount) + answer.length > rowCount) {
    for (let i = 0; i < answer.length; i++) {
      let fillLetter = document.getElementById(`block-${randNum}`);
      fillLetter.innerText = answer[i].toUpperCase();
      randNum--;
    }
  } else {
    for (let i = 0; i < answer.length; i++) {
      let fillLetter = document.getElementById(`block-${randNum}`);
      fillLetter.innerText = answer[i].toUpperCase();
      randNum++;

    }
  }
}

function verticalFill() {
  let randNum = Math.floor(Math.random() * blockCount);
  console.log(randNum);
  console.log(randNum % rowCount);
  answer = wordBreak();
  displayAnswer();
  if ((randNum / rowCount) + answer.length > rowCount) {
    for (let i = 0; i < answer.length; i++) {
      let fillLetter = document.getElementById(`block-${randNum}`);
      fillLetter.innerText = answer[i].toUpperCase();
      randNum -= rowCount;
    }
  } else {
    for (let i = 0; i < answer.length; i++) {
      let fillLetter = document.getElementById(`block-${randNum}`);
      fillLetter.innerText = answer[i].toUpperCase();
      randNum += rowCount;

    }
  }
}
// Diag needs work, maybe 4 different 'if' statements. One for each direction. Using blockCount, rowCount, and answer.length we can determine which blocks allow for any direction of fill, and start off with an 'if' that will choose a direction at random.
function diagonalFill() {
  let randNum = Math.floor(Math.random() * blockCount);
  console.log(randNum);
  console.log(randNum % rowCount);
  answer = wordBreak();
  displayAnswer();
  if ((randNum / rowCount) + answer.length > rowCount) {
    for (let i = 0; i < answer.length; i++) {
      let fillLetter = document.getElementById(`block-${randNum}`);
      fillLetter.innerText = answer[i].toUpperCase();
      randNum -= rowCount - 1;
    }
  } else {
    for (let i = 0; i < answer.length; i++) {
      let fillLetter = document.getElementById(`block-${randNum}`);
      fillLetter.innerText = answer[i].toUpperCase();
      randNum += rowCount + 1;

    }
  }
}

// TODO randomly select a direction
function directionSelector() {
  let randoNum = Math.floor(Math.random() * 2);
  if (randoNum === 0) {
    horizontalFill();
  } else if (randoNum === 1) {
    verticalFill();
  }
}

// Create a function to remove old board and render a new one
function wipeBoard() {
  let removeBoard = document.querySelectorAll('div');
  removeBoard.forEach(e => e.remove());

  createGameBoard();
  fillBoard();
  // insert word selector function
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
directionSelector();
