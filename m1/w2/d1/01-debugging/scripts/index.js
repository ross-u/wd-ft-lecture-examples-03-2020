"use strict";

// function canYouSpotTheProblem(a) {

//   for (var counter = 0; counter < 10; counter ++) {
//     console.log(counter, 'Happy happy');
//   }
// }

// canYouSpotTheProblem()

//try catch

function checkNumber(x) {
  try {
    if (typeof x === "string") {
      const parsedNum = parseInt(x);
      if (typeof parsedNum === "number") {
        return checkNumber(num);
      } else {
        throw new Error("the value is a string");
      }
    } else if (typeof x === "object") {
      throw new Error("the value is an object");
    } else {
      console.log("the value is a number!!!");
    }
  } catch (error) {
    console.log("IN CATCH BLOCK error", error);
  }
}

checkNumber("5");

// ReferenceError - Raised when using an invalid reference
// SyntaxError - Raised when JavaScript can't parse the code
// TypeError - Raised when the type of variable used is wrong
