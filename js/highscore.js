'use strict';

let playerArray = [];
let storedPlayer = localStorage.getItem('playerScore');
let parsedPlayer = JSON.parse(storedPlayer);

if (storedPlayer) {
  playerArray = parsedPlayer;
}

function sortHighScore(){
  playerArray.sort((a, b) => b.highScore - a.highScore);
  
  while(playerArray.length > 10){
    playerArray.pop();
  }
}

let scoreTable = document.getElementById('scoreTable');

function renderScoreTable() {
  let rowElem = document.createElement('tr');
  scoreTable.appendChild(rowElem);

  let thElem = document.createElement('th');
  thElem.innerText = 'NAME';
  rowElem.appendChild(thElem);

  let thScoreElem = document.createElement('th');
  thScoreElem.innerText = 'SCORE';
  rowElem.appendChild(thScoreElem);

  let thRoundElem = document.createElement('th');
  thRoundElem.innerText = 'ROUNDS';
  rowElem.appendChild(thRoundElem);

  for (let i = 0; i < playerArray.length; i++) {
    let rowElem = document.createElement('tr');
    scoreTable.appendChild(rowElem);

    let nameElem = document.createElement('td');
    nameElem.innerText = playerArray[i].name;
    rowElem.appendChild(nameElem);

    let scoreElem = document.createElement('td');
    scoreElem.innerText = playerArray[i].highScore;
    rowElem.appendChild(scoreElem);

    let roundElem = document.createElement('td');
    roundElem.innerText = playerArray[i].round;
    rowElem.appendChild(roundElem);
  }

}

sortHighScore();
renderScoreTable();
