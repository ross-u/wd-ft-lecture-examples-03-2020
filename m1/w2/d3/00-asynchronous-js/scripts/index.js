'use strict'

// console.log('1');

// console.log('2');

// console.log('3');

function hello () {
  console.log('HELLO');
}


// setTimeout(callbackFunction,  delay )
const timeoutId = setTimeout(hello, 5000);

// clearTimeout( timeoutId )   - used to cancel the setTimeout timer
clearTimeout(timeoutId);



// const timeoutAId = setTimeout(function() {
//   clearTimeout(timeoutAId);
//   console.log('First A');
// }, 0);

// setTimeout(function() {
//   console.log('First B');
// }, 0);

// setTimeout(function() {
//   console.log('First C');
// }, 0);

// setTimeout(function() {
//   console.log('First D');
// }, 0);

// console.log('Second');

// console.log('Third');




// let counter = 1;
// let lastTimeoutId;

// function printCounter () {
//   console.log(counter);
//   counter++;

//   lastTimeoutId = setTimeout(printCounter, 1000);

//   if (counter > 10) {
//     clearTimeout(lastTimeoutId);
//   }
// }


// printCounter();



// setInterval(callbackFunction, delay)  - calls the function infinitely untli canceled


// const intervalId = setInterval(function() {
//   console.log('hello');
// }, 10);

// clearInterval(intervalId);

// const stopBtn = document.querySelector("#stop-btn");
// const h1Tag = document.querySelector("h1");

// const second = 1000;

// function concatZero (num){   // 1
//   return ('0' + num ).slice(-2);    // "01"
// }

// function updateClock() {
//   const dateObj = new Date();

//   const hours = dateObj.getHours();
//   const minutes = dateObj.getMinutes();
//   const seconds = dateObj.getSeconds();
//   const milliseconds = dateObj.getMilliseconds();

//   const timeNow = `${concatZero(hours)} : ${concatZero(minutes)} : ${concatZero(seconds)} : ${milliseconds}`;

//   // console.log(timeNow);
//   h1Tag.innerHTML = timeNow;
// }

// const intervalId = setInterval(updateClock, 1);


// stopBtn.addEventListener('click', function() {
//   clearInterval(intervalId);
// });



function first () {
  setTimeout(()=> {
    console.log('FIRST');
  }, 0)
  console.log('FIRST B');
  
}

function second() {
  console.log('SECOND');
  
}

function third() {
  console.log('THIRD');
}


first();
second();
third();

