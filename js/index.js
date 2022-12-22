'use strict';

// ***** GLOBALS *****

let startTime = 60;
let timer = startTime;
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let blockCount = 0;
let rowCount = 0;
let answer;
let boardSize = 6;
let score = 0;
let timerInterval;
let correctAnswerArray = [];
let correctBlockArray = [];
let round = 0;
let playerArray = [];
let bar = 0;
let barWidth = 1;
let barTimer;
let speed = 150;
let multiplier = 1;
let multiplierCounter = -1;

// ***** DOM WINDOWS *****
let gameContainer = document.getElementById('gameboard');
let answerElem = document.getElementById('target-word');
let timeContainer = document.getElementById('timer');
let scoreContainer = document.getElementById('current-score');
let reviewForm = document.getElementById('review-form');
let reviewContainer = document.getElementById('review-container');
let elem = document.getElementById("progressBar");



// ***** FUNCTIONS & UTILITIES *****

function createGameBoard() {
  for (let i = 0; i < boardSize; i++) {
    let letterRow = document.createElement('div');
    gameContainer.appendChild(letterRow);
    letterRow.id = `row-${i + 1}`;
    letterRow.className = 'letter-row';
    rowCount++;
    for (let j = i * boardSize; j < (i + 1) * boardSize; j++) {
      let letter = document.createElement('div');
      letterRow.appendChild(letter);
      letter.id = `block-${j}`;
      letter.className = 'letter-block';
      blockCount++;
    }
  }
}

function createStart() {
  let startContainer = document.createElement('div');
  gameContainer.appendChild(startContainer);
  let startBtn = document.createElement('button');
  startBtn.id = 'startBtn';
  startBtn.innerText = 'Start Game';
  startContainer.appendChild(startBtn);
}

function fillBoard() {
  for (let i = 0; i < blockCount; i++) {
    let fillLetter = document.getElementById(`block-${i}`);
    let randLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    fillLetter.innerText = randLetter.toUpperCase();
  }
}

function wordBreak() {
  let randAnswer = wordArray[Math.floor(Math.random() * wordArray.length)].toUpperCase();
  let answer = randAnswer.split('');
  return answer;
}

function displayAnswer() {
  answerElem.innerText = `TARGET WORD: ${answer.join('')}`;
}

function horizontalFill() {
  let randNum = Math.floor(Math.random() * blockCount);
  answer = wordBreak();
  displayAnswer();
  if (Math.floor((randNum % rowCount) + answer.length) > rowCount) {
    for (let i = 0; i < answer.length; i++) {
      let fillLetter = document.getElementById(`block-${randNum}`);
      fillLetter.innerText = answer[i].toUpperCase();
      fillLetter.className = 'correct-answer';
      correctBlockArray.push(`block-${randNum}`);
      randNum--;
    }
  } else {
    for (let i = 0; i < answer.length; i++) {
      let fillLetter = document.getElementById(`block-${randNum}`);
      fillLetter.innerText = answer[i].toUpperCase();
      fillLetter.className = 'correct-answer';
      correctBlockArray.push(`block-${randNum}`);
      randNum++;

    }
  }
}

function verticalFill() {
  let randNum = Math.floor(Math.random() * blockCount);
  answer = wordBreak();
  displayAnswer();
  if (Math.floor((randNum / rowCount) + answer.length) > rowCount) {
    for (let i = 0; i < answer.length; i++) {
      let fillLetter = document.getElementById(`block-${randNum}`);
      fillLetter.innerText = answer[i].toUpperCase();
      fillLetter.className = 'correct-answer';
      correctBlockArray.push(`block-${randNum}`);
      randNum -= rowCount;
    }
  } else {
    for (let i = 0; i < answer.length; i++) {
      let fillLetter = document.getElementById(`block-${randNum}`);
      fillLetter.innerText = answer[i].toUpperCase();
      fillLetter.className = 'correct-answer';
      correctBlockArray.push(`block-${randNum}`);
      randNum += rowCount;

    }
  }
}

function diagonalFill() {
  let randNum = Math.floor(Math.random() * blockCount);
  answer = wordBreak();
  displayAnswer();
  if ((randNum % rowCount) + answer.length > rowCount) {
    if (Math.floor((randNum / rowCount) + answer.length) > rowCount) {
      for (let i = 0; i < answer.length; i++) {
        let fillLetter = document.getElementById(`block-${randNum}`);
        fillLetter.innerText = answer[i].toUpperCase();
        fillLetter.className = 'correct-answer';
        correctBlockArray.push(`block-${randNum}`);
        randNum = randNum - rowCount - 1;
      }
    } else {
      for (let i = 0; i < answer.length; i++) {
        let fillLetter = document.getElementById(`block-${randNum}`);
        fillLetter.innerText = answer[i].toUpperCase();
        fillLetter.className = 'correct-answer';
        correctBlockArray.push(`block-${randNum}`);
        randNum = randNum + rowCount - 1;
      }
    }
  } else {
    if (Math.floor((randNum / rowCount) + answer.length) > rowCount) {
      for (let i = 0; i < answer.length; i++) {
        let fillLetter = document.getElementById(`block-${randNum}`);
        fillLetter.innerText = answer[i].toUpperCase();
        fillLetter.className = 'correct-answer';
        correctBlockArray.push(`block-${randNum}`);
        randNum = randNum - rowCount + 1;
      }
    } else {
      for (let i = 0; i < answer.length; i++) {
        let fillLetter = document.getElementById(`block-${randNum}`);
        fillLetter.innerText = answer[i].toUpperCase();
        fillLetter.className = 'correct-answer';
        correctBlockArray.push(`block-${randNum}`);
        randNum = randNum + rowCount + 1;
      }
    }
  }
}

function directionSelector() {
  let randoNum = Math.floor(Math.random() * 3);
  if (randoNum === 0) {
    horizontalFill();
  } else if (randoNum === 1) {
    verticalFill();
  } else {
    diagonalFill();
  }
}

function wipeBoard() {
  let removeBoard = document.querySelectorAll('div');
  removeBoard.forEach(e => e.remove());
  blockCount = 0;
  rowCount = 0;
}


function move() {
  if (bar === 0) {
    bar = 1;
    barWidth = 1;
    barTimer = setInterval(frame, speed);
  }
}
function frame() {
  if (barWidth >= 100) {
    clearInterval(barTimer);
    multiplierCounter = -1;
    multiplier = 1;
    nextRound();
    timer -= 5;
    scoreContainer.innerText = `CURRENT SCORE: ${score}`;
    bar = 0;
  } else {
    barWidth++;
    elem.style.width = barWidth + '%';
  }
}

function advanceTimer() {
  if (timer > 0) {
    timer -= 1;
    timeContainer.textContent = `TIME REMAINING: ${timer}`;
  } else {
    gameOver();
    timer = startTime;
  }
}

function gameOver() {
  clearInterval(timerInterval);
  clearInterval(barTimer);
  wipeBoard();
  boardSize = 6;
  correctAnswerArray = [];
  correctBlockArray = [];
  timeContainer.textContent = 'TIME REMAINING: 0';
  let endMessage = document.createElement('div');
  endMessage.innerText = 'Game Over!';
  endMessage.id = 'game-over';
  gameContainer.appendChild(endMessage);
  submitName();
}

function submitName() {
  let sName = document.createElement('div');
  gameContainer.appendChild(sName);
  let fieldName = document.createElement('form');
  fieldName.id = 'userNameForm';
  sName.appendChild(fieldName);
  let labelName = document.createElement('label');
  labelName.for = 'userName';
  labelName.innerText = 'What is your Name?';
  fieldName.appendChild(labelName);
  let inputName = document.createElement('input');
  inputName.type = 'text';
  inputName.id = 'userName';
  inputName.name = 'userName';
  inputName.maxLength = '10';
  fieldName.appendChild(inputName);
  let userBtn = document.createElement('button');
  userBtn.id = 'userBtn';
  userBtn.type = 'submit';
  userBtn.innerText = 'Submit';
  fieldName.appendChild(userBtn);
  fieldName.addEventListener('submit', handleSubmit);
}

function nextRound() {
  if (round % 5 === 0 && round > 1) {
    boardSize++;
    if (speed > 75) {
      speed -= 10;
    }
  }

  if (multiplierCounter === 3) {
    multiplier++;
  }
  if (multiplierCounter === 6) {
    multiplier++;

  }

  multiplierCounter++;
  correctAnswerArray = [];
  correctBlockArray = [];
  wipeBoard();
  createGameBoard();
  fillBoard();
  directionSelector();
  barWidth = 1;
  bar = 0;
  clearInterval(barTimer);
  move();
  round++;
}

// ***** CONSTRUCTORS*****
function Player(name, highScore, round) {
  this.name = name;
  this.highScore = highScore;
  this.round = round;
}

// ***** EVENT HANDLERS*****
function handleStart(event) {
  let itemClicked = event.target;
  if (itemClicked.id === 'startBtn') {
    score = 0;
    round = 0;
    nextRound();
    timerInterval = setInterval(advanceTimer, 1000);

  }
  if (itemClicked.className === 'correct-answer') {
    if (!correctAnswerArray.includes(event.target.id)) {
      correctAnswerArray.push(event.target.id);
      event.target.style.backgroundColor = '#6ef651';
      if (correctAnswerArray.length === correctBlockArray.length) {


        score += (rowCount * multiplier);
        timer += rowCount;
        scoreContainer.innerText = `CURRENT SCORE: ${score}`;
        correctAnswerArray = [];
        correctBlockArray = [];
        setTimeout(nextRound, 750);
        clearInterval(barTimer);
      }
    }
  }
  if (itemClicked.className !== 'correct-answer' && itemClicked.className === 'letter-block') {
    score -= Math.floor(rowCount / 2);
    timer -= Math.floor(rowCount / 3);
    scoreContainer.innerText = `CURRENT SCORE: ${score}`;
    event.target.style.backgroundColor = '#f65151';
  }
}
function handleReview(event) {
  event.preventDefault();

  let submitItem = event.target.review.value;
  let reviewParagraph = document.createElement('p');
  reviewParagraph.textContent = `${submitItem}`;
  reviewParagraph.className = 'user-review';
  reviewContainer.appendChild(reviewParagraph);
}
function handleSubmit(event) {
  event.preventDefault();
  let userName = event.target.userName.value;
  let newPlayer = new Player(userName, score, round);
  playerArray.push(newPlayer);
  let stringifiedPlayer = JSON.stringify(playerArray);
  localStorage.setItem('playerScore', stringifiedPlayer);
  wipeBoard();
  createStart();
}


// *****EXECUTABLE CODE*****

let storedPlayer = localStorage.getItem('playerScore');
let parsedPlayer = JSON.parse(storedPlayer);

if (storedPlayer) {
  playerArray = parsedPlayer;
}
createStart();
gameContainer.addEventListener('click', handleStart);
reviewForm.addEventListener('submit', handleReview);

