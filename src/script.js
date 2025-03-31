"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const messageEl = document.querySelector(".message");
const numberEl = document.querySelector(".number");
const scoreEl = document.querySelector(".score");
const guessEl = document.querySelector(".guess");
const bodyEl = document.querySelector("body");
const highScoreEl = document.querySelector(".highscore");

const displayMessage = (message) => (messageEl.textContent = message);
const updateScore = () => (scoreEl.textContent = score);

const resetGame = () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  scoreEl.textContent = score;
  numberEl.textContent = "?";
  guessEl.value = "";
  bodyEl.style.backgroundColor = "#222";
  numberEl.style.width = "15rem";
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(guessEl.value);

  // When there is no input, check between 1-20
  if (!guess) {
    displayMessage("⛔️ No number!");
  } else if (guess < 1 || guess > 20) {
    displayMessage("❌ Number must be between 1 and 20!");

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    numberEl.textContent = secretNumber;
    bodyEl.style.backgroundColor = "#60b347";
    numberEl.style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      highScoreEl.textContent = highscore;
    }

    // When guess is wrong
  } else {
    if (score > 1) {
      score--;
      updateScore();
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
    } else {
      displayMessage("💥 You lost the game!");
      scoreEl.textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", resetGame);
