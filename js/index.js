'use strict';

// ***** GLOBALS *****

// TODO Variable for array of random words

let preWord = 'abed,abet,able,ably,abut,acai,aced,aces,ache,achy,acid,acme,acne,acre,acts,adds,adit,adze,aeon,afar,afro,agar,aged,ages,agog,ague,ahem,aide,aids,ails,aims,airs,airy,ajar,akin,alar,alas,ales,alga,ally,alms,aloe,also,alto,alum,ambo,amen,amid,ammo,amok,amps,amyl,ands,anew,ankh,anna,anon,anti,ants,apes,apex,apps,apse,aqua,arch,arcs,area,aria,arid,aril,arks,arms,army,arse,arts,arty,arum,aryl,ashy,asks,atom,atop,aunt,aura,auto,aver,avid,avow,away,awed,awes,awls,awry,axed,axel,axes,axil,axis,axle,axon,baba,babe,baby,bach,back,bade,bads,bags,baht,bail,bait,bake,bald,bale,balk,ball,balm,band,bane,bang,bank,bans,barb,bard,bare,barf,bark,barn,bars,base,bash,bask,bass,bast,bath,bats,batt,baud,bawl,bays,bead,beak,beam,bean,bear,beat,beau,beck,beds,beef,been,beep,beer,bees,beet,begs,bell,belt,bend,bent,berg,berm,best,beta,bets,bevy,beys,bias,bibb,bibs,bide,bids,bier,biff,bike,bile,bilk,bill,bind,bint,bios,bird,bite,bits,blab,blah,bleb,bled,blew,blip,blob,bloc,blog,blot,blow,blue,blur,boar,boas,boat,bobs,bode,bods,body,bogs,bogy,boil,bola,bold,bole,boll,bolo,bolt,bomb,bond,bone,bong,bonk,bony,boob,book,boom,boon,boor,boos,boot,bore,born,boss,both,bots,bout,bowl,bows,boxy,boyo,boys,bozo,brad,brag,bran,bras,brat,bray,bred,brew,brie,brig,brim,brio,bris,brit,bros,brow,buck,buds,buff,bugs,bulb,bulk,bull,bump,bums,bund,bung,bunk,buns,bunt,buoy,burb,burg,burl,burn,burp,burr,bury,bush,busk,buss,bust,busy,butt,buys,buzz,byes,byre,byte,cabs,cads,cafe,caff,cage,cake,calf,call,calm,came,cami,camo,camp,cams,cane,cans,cape,capo,caps,carb,card,care,carp,carr,cars,cart,case,cash,cask,cast,cats,caul,cava,cave,cavy';
let wordArray = preWord.split(',');
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



// ***** DOM WINDOWS *****
let gameContainer = document.getElementById('gameboard');
let answerElem = document.getElementById('target-word');
let timeContainer = document.getElementById('timer');
let scoreContainer = document.getElementById('current-score');

// ***** FUNCTIONS & UTILITIES *****
// TODO User Input for name and name location
// TODO Game Loop
// TODO create random game board
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
  let randAnswer = wordArray[Math.floor(Math.random() * wordArray.length)].toUpperCase();
  let answer = randAnswer.split('');
  return answer;
}

// TODO creat function to display answer
function displayAnswer() {
  answerElem.innerText = `TARGET WORD: ${answer.join('')}`;
}

// TODO Create horizontal fill
function horizontalFill() {
  let randNum = Math.floor(Math.random() * blockCount);
  console.log(randNum);
  console.log(randNum % rowCount);
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
  console.log(randNum);
  console.log(randNum / rowCount);
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
// Diag needs work, maybe 4 different 'if' statements. One for each direction. Using blockCount, rowCount, and answer.length we can determine which blocks allow for any direction of fill, and start off with an 'if' that will choose a direction at random.
function diagonalFill() {
  let randNum = Math.floor(Math.random() * blockCount);
  console.log(randNum);
  console.log(randNum / rowCount);
  console.log(randNum % rowCount);
  answer = wordBreak();
  displayAnswer();
  if ((randNum % rowCount) + answer.length > rowCount) {
    // backwards up
    if (Math.floor((randNum / rowCount) + answer.length) > rowCount) {
      for (let i = 0; i < answer.length; i++) {
        let fillLetter = document.getElementById(`block-${randNum}`);
        fillLetter.innerText = answer[i].toUpperCase();
        fillLetter.className = 'correct-answer';
        correctBlockArray.push(`block-${randNum}`);
        randNum = randNum - rowCount - 1;
      }
      // backwards down
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
    // forwards up
    if (Math.floor((randNum / rowCount) + answer.length) > rowCount) {
      for (let i = 0; i < answer.length; i++) {
        let fillLetter = document.getElementById(`block-${randNum}`);
        fillLetter.innerText = answer[i].toUpperCase();
        fillLetter.className = 'correct-answer';
        correctBlockArray.push(`block-${randNum}`);
        randNum = randNum - rowCount + 1;
      }
      // forwards down
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

// TODO randomly select a direction
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

// Create a function to remove old board and render a new one
function wipeBoard() {
  let removeBoard = document.querySelectorAll('div');
  removeBoard.forEach(e => e.remove());
  blockCount = 0;
  rowCount = 0;

  // createGameBoard();
  // fillBoard();
  // insert word selector function
}


// TODO Timer
function advanceTimer() {
  if (timer > 0) {
    timer -= 1;
    timeContainer.textContent = `TIME REMAINING: ${timer}`;
  } else {
    gameOver();
    timer = startTime;
  }
}
// TODO Update timer

// TODO Score tracking
// TODO Game over
function gameOver() {
  clearInterval(timerInterval);
  wipeBoard();
  correctAnswerArray = [];
  correctBlockArray = [];
  timeContainer.textContent = 'TIME REMAINING: 0';
  let endMessage = document.createElement('div');
  endMessage.innerText = 'Game Over!';
  gameContainer.appendChild(endMessage);
  createStart();
}

function nextRound(){
  wipeBoard();
  createGameBoard();
  fillBoard();
  directionSelector();
}

// ***** CONSTRUCTORS*****
// TODO Function for splitting words to array
// TODO name, image, first/last letter flag

// ***** EVENT HANDLERS*****
function handleStart(event) {
  let itemClicked = event.target;
  if (itemClicked.id === 'startBtn') {
    score = 0;
    nextRound();
    timerInterval = setInterval(advanceTimer, 1000);

  }
  if (itemClicked.className === 'correct-answer') {
    if (!correctAnswerArray.includes(event.target.id)) {
      correctAnswerArray.push(event.target.id);
      console.log(event.target);
      event.target.style.backgroundColor = 'green';
      if (correctAnswerArray.length === correctBlockArray.length) {
        score+= rowCount;
        timer+= 3;
        scoreContainer.innerText = `Score: ${score}`;
        correctAnswerArray = [];
        correctBlockArray = [];
        console.log(correctAnswerArray);
        setTimeout(nextRound, 750);
      }
    }
  }
  if(itemClicked.className !== 'correct-answer' && itemClicked.className === 'letter-block') {
    score-= Math.floor(rowCount/2);
    timer-= Math.floor(rowCount/3);
    scoreContainer.innerText = `Score: ${score}`;
    event.target.style.backgroundColor = 'red';
  }
}


// TODO Need to figure out how the user is clicking the words

// *****EXECUTABLE CODE*****
// createGameBoard();
// fillBoard();
// directionSelector();
createStart();
gameContainer.addEventListener('click', handleStart);

