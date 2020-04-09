"use strict";

class Enemy {
  constructor(canvas, y, speed) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.size = 20;
    this.x = this.canvas.width + this.size;
    this.y = y;
    this.speed = speed;
  }

  draw() {
    this.ctx.fillStyle = "blue";
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
  }

  updatePosition() {
    // x axis
    this.x = this.x - this.speed;
  }

  isInsideScreen() {
    const playerRight = this.x + this.size;
    return playerRight > 0;
  }

  isOutsideScreen() {
    const playerRight = this.x + this.size;
    return playerRight < 0;
  }
}
