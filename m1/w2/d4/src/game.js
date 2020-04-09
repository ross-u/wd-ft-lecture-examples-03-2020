"use strict";

class Game {
  constructor() {
    this.player = null;
    this.enemies = [];
    this.gameIsOver = false;
    this.score = 0;
    this.gameScreen = null;
    this.canvas = null;
    this.ctx = null;
  }

  // instantiate the player, set the canvas ,and start the canvas loop
  start() {
    // Save reference to canvas and container, create ctx
    const canvasContainer = document.querySelector(".canvas-container");
    this.canvas = this.gameScreen.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");

    // Save the reference to lives and score elements
    this.livesElement = this.gameScreen.querySelector(".lives .value");
    this.scoreElement = this.gameScreen.querySelector(".score .value");

    // Set the canvas dimenisons
    this.containerWidth = canvasContainer.clientWidth;
    this.containerHeight = canvasContainer.clientHeight;

    this.canvas.width = this.containerWidth;
    this.canvas.height = this.containerHeight;

    this.player = new Player(this.canvas, 2);

    // Event listener for moving the player
    function handleKeyDown(event) {
      if (event.key === "ArrowUp") {
        this.player.setDirection("up");
      } else if (event.key === "ArrowDown") {
        this.player.setDirection("down");
      }
    }

    const boundHandleKeyDown = handleKeyDown.bind(this);
    document.addEventListener("keydown", boundHandleKeyDown);

    // Start the canvas requestAnimationFrame loop
    this.startLoop();
  }

  startLoop() {
    const loop = function () {
      // 1. UPDATE THE STATE OF PLAYER AND ENEMIES
      // 1.1 Create new enemies randomly
      if (Math.random() > 0.98) {
        const randomHeightPos = this.canvas.height * Math.random();
        const newEnemy = new Enemy(this.canvas, randomHeightPos, 5);

        this.enemies.push(newEnemy);
      }

      // 1.2. Check if player had hit any enemy
      this.checkCollisons();

      // 1.3. Update the player positon
      this.player.handleScreenCollision();
      this.player.updatePosition();

      // 1.4  Move all the enemies
      // 1.5  Check if enemy is off the screen
      const enemiesOnScreen = this.enemies.filter(function (enemy) {
        enemy.updatePosition();
        const isInsideScreen = enemy.isInsideScreen();

        return isInsideScreen; // true false
      });

      this.enemies = enemiesOnScreen;

      // 2. CLEAR THE CANVAS
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // 3. PAINT THE CANVAS
      // 3.1 Draw player
      this.player.draw();

      // 3.2 Draw all enemies
      this.enemies.forEach((enemy) => {
        enemy.draw();
      });

      // 4. TERMINATE LOOP IF GAME IS OVER
      if (this.gameIsOver === false) {
        requestAnimationFrame(loop); // animation loop
      }

      // 5. UPDATE GAME STATUS
      this.updateGameStats();
    }.bind(this);

    loop(); // initial invocation
  }

  checkCollisons() {
    // array method callbacks loose the value of `this`
    // remedy is `thisArg` or using arrow function as a callback
    // this.enemies.forEach( (enemy) => {
    this.enemies.forEach(function (enemy) {
      if (this.player.didCollide(enemy)) {
        this.player.removeLife();
        console.log("Player lives", this.player.lives);

        // Move the enemy of the screen, to the left
        enemy.x = -1 * enemy.size;

        if (this.player.lives <= 0) {
          this.gameOver();
        }
      }
    }, this); // <== thisArg
  }

  gameOver() {
    this.gameIsOver = true;
    endGame(this.score);
  }

  updateGameStats() {
    this.score++;
    this.livesElement.innerHTML = this.player.lives;
    this.scoreElement.innerHTML = this.score;
  }
}
