const canvas = document.querySelector("#main-canvas");
const ctx = canvas.getContext('2d');


// SET CANVAS DIMENSIONS

window.addEventListener('load', function() {
  // canvas.height = document.body.clientHeight;
  // canvas.width = document.body.clientWidth;

  console.log('canvas.height :', canvas.height);
  console.log('canvas.width :', canvas.width);

  canvas.style.visibility = "visible";
});

let isGameStarted = false;
const img = new Image();
img.src = "http://getdrawings.com/cliparts/pacman-ghost-clipart-4.png";


const ghost = {
  x: 25,
  y: 25,
  moveUp: function() {
    this.y -= 25
  },
  moveDown: function() {
    this.y += 25
  },
  moveLeft: function() {
    this.x -= 25
  },
  moveRight: function() {
    this.x += 25
  }
}


function updateCanvas () {
  clearCanvas();
  drawGhost();
  drawScore();
}

function clearCanvas() {
  if (isGameStarted) {
    ctx.clearRect(0, 0, 700, 700);  // 3
  }
  else {
    isGameStarted = true;
  }
}

function drawGhost () {
  ctx.drawImage(img, ghost.x, ghost.y, 50, 50);
}

function drawScore () {
  ctx.fillText(`Ghost x: ${ghost.x}`, 40, 600);
  ctx.fillText(`Ghost y: ${ghost.y}`, 150, 600);
}

document.addEventListener('keydown', function (e) {
  switch(e.keyCode) {
    // UP
    case 38:
      console.log("UP");
      ghost.moveUp();
      break;

    // DOWN
    case 40:
      console.log("DOWN");
      ghost.moveDown();
      break;

    // LEFT
    case 37:
      console.log("LEFT");
      ghost.moveLeft();
      break;

    // RIGHT
    case 39:
      console.log("RIGHT");
      ghost.moveRight();
      break;
  }

  updateCanvas();
})

// 1
// Initial call to display the ghost
img.addEventListener('load', function () {
  updateCanvas(); // 2
})