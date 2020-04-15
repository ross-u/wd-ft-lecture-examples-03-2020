"use strict";

let game; // instance of the Game
let splashScreen; // Start Game Screen
let gameScreen;
let gameOverScreen;

// Creates DOM elements from a string representation
// buildDom
function buildDom(htmlString) {
  const div = document.createElement("div");
  div.innerHTML = htmlString;
  return div.children[0];
}

// -- splash screen

function createSplashScreen() {
  splashScreen = buildDom(`
    <main>
      <h1>Eternal Enemies</h1>
      <button>Start</button>
    </main>
	`);

  document.body.appendChild(splashScreen);

  const startButton = splashScreen.querySelector("button");
  startButton.addEventListener("click", startGame);
}

function removeSplashScreen() {
  // remove() is the DOM method that removes the Node from the page
  splashScreen.remove();
}

// -- game screen

function createGameScreen() {
  gameScreen = buildDom(`
    <main class="game container">
      <header>
        <div class="lives">
          <span class="label">Lives:</span>
          <span class="value"></span>
        </div>

        <div class="score">
          <span class="label">Score:</span>
          <span class="value"></span>
        </div>
      </header>

      <div class="canvas-container">
        <canvas></canvas>
      </div>
    </main>
	`);

  document.body.appendChild(gameScreen);
  return gameScreen;
}

function removeGameScreen() {
  gameScreen.remove();
}

// -- game over screen

function createGameOverScreen(score) {

  const scores = setAndGetScore(score, 'Player Name');
  const scoreElements = scores.reduce((acc, scoreObj) =>  `${acc}<p>${scoreObj.name} ${scoreObj.score}</p>`, '')


  gameOverScreen = buildDom(`
  <main>
    <h1>Game over</h1>
    <p>Your score: <span> ${score} </span></p>
    <button>Restart</button>
    ${scoreElements}
  </main>
`);

  const button = gameOverScreen.querySelector("button");
  button.addEventListener("click", startGame);

  document.body.appendChild(gameOverScreen);
}

function removeGameOverScreen() {
  if (gameOverScreen !== undefined) {
    gameOverScreen.remove();
  }
}

// -- Set score

function setAndGetScore(newScore, playerName) {
  // get scores if they already exist
  const topScoresStr = localStorage.getItem('topScores');
  let topScoresArr;

 if (!topScoresStr) {
  topScoresArr = [];
 }
 else if (topScoresStr) {
   topScoresArr = JSON.parse(topScoresStr);
 }



  // update the existing scores
  const newScoreObj = {score: newScore, name: playerName };
  topScoresArr.push(newScoreObj);


  // save back to localStorage
  const updatedScoresStr = JSON.stringify(topScoresArr);
  localStorage.setItem('topScores', updatedScoresStr );

  // Return the updated scores arr, in order to display it
  return topScoresArr;
}

// -- Setting the game state - start or game over

function startGame() {
  removeSplashScreen();
  removeGameOverScreen();

  createGameScreen();

  game = new Game();
  game.gameScreen = gameScreen;

  // Start game
  game.start();
}

function endGame(score) {
  removeGameScreen();
  createGameOverScreen(score);
}

// Runs the function `createSplashScreen` once all resources are loaded
window.addEventListener("load", createSplashScreen);
