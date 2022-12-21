'use strict';

let playerArray = [];
let storedPlayer = localStorage.getItem('playerScore');
let parsedPlayer = JSON.parse(storedPlayer);

if (storedPlayer){
  playerArray = parsedPlayer;
}

