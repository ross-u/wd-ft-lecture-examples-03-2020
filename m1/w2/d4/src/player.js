class Player {
  constructor(canvas, lives) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.lives = lives;

    this.size = 100;
    this.x = 50;
    this.y = this.canvas.height / 2 - this.size / 2;
    this.direction = 0; //  0 not moving  // -1 moving up   // 1 moving down
    this.speed = 5;

    this.playerTop = this.y;
    this.playerBottom = this.y + this.size;

    this.screenTop = 0; //  y = 0
    this.screenBottom = this.canvas.height;
  }

  setDirection(direction) {
    if (direction === "up") this.direction = -1;
    else if (direction === "down") this.direction = 1;
  }

  handleScreenCollision() {
    const { playerBottom, screenBottom, playerTop, screenTop } = this;

    // If the player touched the bottom

    if (playerBottom >= screenBottom) {
      this.setDirection("up");
    } else if (playerTop <= screenTop) {
      this.setDirection("down");
    }
  }

  updatePosition() {
    // update the player position
    this.y = this.y + this.direction * this.speed;

    this.playerTop = this.y;
    this.playerBottom = this.y + this.size;

    this.screenTop = 0; //  y = 0
    this.screenBottom = this.canvas.height;
  }

  removeLife() {
    this.lives -= 1;
  }

  draw() {
    this.ctx.fillStyle = "magenta";
    // ctx.fillRect(x, y, width, height)

    this.ctx.fillRect(this.x, this.y, this.size, this.size);
  }

  didCollide(enemy) {
    // true or false if player hit an enemy
    const playerLeft = this.x;
    const playerRight = this.x + this.size;
    const playerTop = this.y;
    const playerBottom = this.y + this.size;

    const enemyLeft = enemy.x;
    const enemyRight = enemy.x + enemy.size;
    const enemyTop = enemy.y;
    const enemyBottom = enemy.y + enemy.size;

    const crossLeft = enemyLeft <= playerRight && enemyLeft >= playerLeft;

    const crossRight = enemyRight >= playerLeft && enemyRight <= playerRight;

    const crossTop = enemyTop <= playerBottom && enemyTop >= playerTop;

    const crossBottom = enemyBottom >= playerTop && enemyBottom <= playerBottom;

    if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
      return true;
    } else {
      false;
    }
  }
}
