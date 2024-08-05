"use strict";
// const card1 = document.quertSelector(".card1");
// const card2 = document.querySelector(".card2");
function diceRoll() {
  return Math.trunc(Math.random() * 6) + 1;
}
const newGame = document.querySelector(".newGameBtn");
const hold = document.querySelector(".holdBtn");
const roll = document.querySelector(".rollBtn");
const diceEL = document.querySelector(".dice");
const score0EL = document.querySelector(".totalScore0");
const score1EL = document.querySelector(".totalScore1");
const currScore0EL = document.querySelector(".currentScore0");
const currScore1EL = document.querySelector(".currentScore1");
const card0EL = document.querySelector(".card0");
const card1EL = document.querySelector(".card1");
let playerName0EL = document.querySelector(".playerName0");
let playerName1EL = document.querySelector(".playerName1");

let scores = [0, 0];
let activePlayer = 0;

let currScore = 0;

//New Game
newGame.addEventListener("click", function () {
  diceEL.classList.add("hidden");
  score1EL.textContent = 0;
  score0EL.textContent = 0;
  currScore1EL.textContent = 0;
  currScore0EL.textContent = 0;
  scores = [0, 0];
  document.querySelector(`.card${activePlayer}`).classList.remove("transition");
  card1EL.classList.add("inactive");
  card0EL.classList.remove("inactive");
  activePlayer = 0;
  playerName0EL.textContent = "Player 1";
  playerName1EL.textContent = "Player 2";
});

//Rollling Dice
roll.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEL.classList.remove("hidden");
  diceEL.src = `dice-${dice}.png`;
  if (dice != 1) {
    currScore += dice;
    document.querySelector(
      `.currentScore${activePlayer}`
    ).textContent = currScore;
  } else {
    //SWITCH PLAYER
    currScore = 0;
    if (activePlayer === 0) {
      activePlayer = 1;
      currScore0EL.textContent = 0;
      card0EL.classList.add("inactive");
      card1EL.classList.remove("inactive");
    } else {
      activePlayer = 0;
      currScore1EL.textContent = 0;
      card1EL.classList.add("inactive");
      card0EL.classList.remove("inactive");
    }
  }
});
//Hold Button
hold.addEventListener("click", function () {
  //Check Avtive Player
  let s = 0;
  if (activePlayer == 0) {
    //Adding Current Score
    s = Number(currScore0EL.textContent);
    scores[0] += s;
    s = 0;
    score0EL.textContent = scores[0];
    if (scores[activePlayer] >= 30) {
      document
        .querySelector(`.card${activePlayer}`)
        .classList.add("transition");
    } else {
      currScore = 0;
      activePlayer = 1;
      currScore0EL.textContent = 0;
      card0EL.classList.add("inactive");
      card1EL.classList.remove("inactive");
    }
  } else {
    s = Number(currScore1EL.textContent);
    scores[1] += s;
    s = 0;
    score1EL.textContent = scores[1];
    if (scores[activePlayer] >= 30) {
      document
        .querySelector(`.card${activePlayer}`)
        .classList.add("transition");
    } else {
      currScore = 0;
      activePlayer = 0;
      currScore1EL.textContent = 0;
      card1EL.classList.add("inactive");
      card0EL.classList.remove("inactive");
    }
  }
});

//Change Player Name
playerName0EL.addEventListener("click", function () {
  playerName0EL.textContent = prompt("Enter Player 1 Name : ");
});
playerName1EL.addEventListener("click", function () {
  playerName1EL.textContent = prompt("Enter Player 2 Name : ");
});
