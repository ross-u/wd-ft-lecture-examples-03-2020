const canvas = document.querySelector("#main-canvas");
const ctx = canvas.getContext('2d');


// SET CANVAS DIMENSIONS

window.addEventListener('load', function() {
  canvas.height = document.body.clientHeight;
  canvas.width = document.body.clientWidth;

  console.log('canvas.height :', canvas.height);
  console.log('canvas.width :', canvas.width);

  canvas.style.visibility = "visible";

  ctx.fillStyle = "red";
  ctx.fillRect(100, speed1, 50, 50);
  ctx.fillRect(300, speed2, 50, 50);
  ctx.fillRect(500, speed3, 50, 50);

});



const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");


let animationId;

let speed1 = 0;
let speed2 = 0;
let speed3 = 0;


function clearCanvas () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function updateState() {
  speed1 += 1;
  speed2 += 2;
  speed3 += 3;
}

function drawSquares () {
  ctx.fillStyle = "red";
  ctx.fillRect(100, speed1, 50, 50);
  ctx.fillRect(300, speed2, 50, 50);
  ctx.fillRect(500, speed3, 50, 50);
}

function updateCanvas () {
  clearCanvas();

  updateState();

  drawSquares();

  animationId = requestAnimationFrame(updateCanvas);
}

startButton.addEventListener('click', function () {
  updateCanvas();
})

stopButton.addEventListener('click', function () {
  cancelAnimationFrame(animationId);
})





