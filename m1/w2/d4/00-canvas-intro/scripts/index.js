'use strict'


const canvas = document.querySelector('#example');

// Creating the 2 dimensional context using canvas method `.getContext()`
const ctx = canvas.getContext('2d');


// Rectangles or paths

// RECTANGLES
// SYNTAX:


// fillStyle = 'color';             // Set the fill style for the next filled shape

// strokeStyle = 'color';           // Set the fill style for the next line shape
// lineWidth = '1px';              // Set line width for the next line shape


// fillRect(x, y, width, height)    //Draws a filled rectangle.

// strokeRect(x, y, width, height)  //Draws a rectangular outline.

// clearRect(x, y, width, height)  //Clears the specified rect. area, making it transparent.




ctx.fillStyle = 'purple';

// FILLED RECTANGLE
ctx.fillRect(25, 25, 100, 100);


// CLEAR RECTANGLE
ctx.clearRect(45,45, 60, 60);



// STROKE RECTANGLE
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;

ctx.strokeRect(150, 50, 50, 50);


// // Creates a new path. 
// // Future drawing commands are directed into the open path and are used to draw the path.
// ctx.beginPath()

//  ctx.moveTo(x, y)  // Moves the pen to the coordinates specified by x and y

//  ctx.lineTo(x, y)   // Draws a line from the current drawing position to the new position


//  ctx.stroke()       // Draws the shape by stroking its outline.

//  ctx.fill()         // Draws a solid shape by filling the path's content area.

// // Closes the path.
// // The future drawing commands are once again directed to the context.
// ctx.closePath()


//  PATH  - ORANGE LINE
ctx.beginPath();

// set the line color
ctx.strokeStyle = 'orange';

// set the position
// x = 50  y=150
ctx.moveTo(50, 150);

// draw the line - end position
// x=250  y=150
ctx.lineTo(250, 150);

// executes the drawing
ctx.stroke();


ctx.closePath();



// TRIANGLE

ctx.beginPath();

ctx.fillStyle = 'magenta';

// starting position  x=150  y=200
ctx.moveTo(150, 200);

//  draw a line x=150, y=250
ctx.lineTo(150, 250);

//  draw a line x=100, y=250
ctx.lineTo(100, 250);

// fills the shape and closes the path automatically
ctx.fill();


ctx.closePath();



// DRAWING ARCS OR CIRCLES - arc()

/*
	arc(x, y, radius, startAngle, endAngle, anticlockwise)
*/

/*
// ARC - ANGLE VALUES
// CONVERTING DEGREES TO RADIANS:

// Angles in the arc function are measured in radians, not degrees.
// To convert degrees to radians use the following JavaScript expression:

let degrees = 180;
let radians = (Math.PI / 180) * degrees.


// USING Math.PI:
// Full Circle =   Math.PI * 2
// Half Circle =   Math.PI * 1
*/

// GREEN - CIRLCE
ctx.beginPath();

ctx.lineWidth = 20;
ctx.strokeStyle = 'green';

ctx.arc(300, 300, 75, 0, Math.PI * 2, true);

ctx.stroke();

ctx.closePath();


// RED CIRCLE
ctx.beginPath();

ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';

ctx.arc(300, 300, 50, 0, Math.PI * 2);

ctx.fill();

ctx.closePath();



// Turn transparency on
ctx.globalAlpha = 0.1;

ctx.fillStyle = 'blue';
ctx.fillRect(300, 60, 50, 50);

ctx.fillStyle = 'green';
ctx.fillRect(330, 60, 50, 50);

ctx.fillStyle = 'red';
ctx.fillRect(360, 60, 50, 50);



// GET THE CANVAS ELEMENT AND CREATE DRAWING CONTEXT
const patterCanvas = document.querySelector('#pattern-canvas');
const pCtx = patterCanvas.getContext('2d');

const img = document.createElement('img');
// const img = new Image();

img.src = "https://img.stockfresh.com/files/r/robuart/x/29/8049774_52896881.jpg";

img.addEventListener('load', function () {

  // Create the pattern
  const pattern = pCtx.createPattern(img, 'repeat');

  // Set the fill style to be the pattern
  pCtx.fillStyle = pattern;

  // Draw rectangle with the pattern as fill style
  pCtx.fillRect(0,0, 300, 300);
});





// GET THE CANVAS ELEMENT AND CREATE DRAWING CONTEXT
const fontCanvas = document.querySelector('#font-canvas');
const fCtx = fontCanvas.getContext('2d');

fCtx.font = '50px monospace';
fCtx.fillStyle = 'red';
fCtx.fillText('Ironhackers', 10, 50);

fCtx.font = '36px monospace';
fCtx.strokeText('Ironhackers', 10, 100);


// DRAWING IMAGES
const img2 = new Image();
//  Set the source path
img2.src = "https://static.pexels.com/photos/8700/wall-animal-dog-pet.jpg";

img2.addEventListener('load', function(){
  fCtx.drawImage( img2, 100, 100,  150, 100)
})