// Converts cents to decimal value

function centToDecimals(centValue) {
  if (typeof centValue !== 'number' || isNaN(centValue) ) {
    return undefined;
  }

  const result = centValue / 100;

  return result.toFixed(2) + '$';
}




// Test Specs:

// Description: function centsToDecimals

// Test:
// 1. Should return undefined when the parameter/argument passed is NaN
console.log('Should return undefined when the parameter/argument passed is NaN \n');
console.log(centToDecimals(NaN)  === undefined);


// 2. Should return undefined when the parameter/argument passed is a string.
console.log('Should return undefined when the parameter/argument passed is a string \n');
console.log(centToDecimals('abcdef')  === undefined);
console.log(centToDecimals('1234')  === undefined);


// 3. Should return undefined when the parameter/argument passed is undefined.
console.log('Should return undefined when the parameter/argument passed is undefined \n');
console.log(centToDecimals()  === undefined);
console.log(centToDecimals(undefined)  === undefined);


// 4. Should convert the number value from cents to string representing price with 2 decimals
console.log('Should convert the number value from cents to string representing price with 2 decimals \n');

// Mock values
const value1 = 1001;
const value2 = 999;
const value3 = 54786;

const value1String = (value1 / 100).toFixed(2);
const value2String = (value2 / 100).toFixed(2);
const value3String = (value3 / 100).toFixed(2);

console.log(centToDecimals(value1).slice(0, value1String.length) === value1String);
console.log(centToDecimals(value2).slice(0, value2String.length) === "9.99");
console.log(centToDecimals(value3).slice(0, value3String.length) === "547.86");


// 5. Should return a string representing the price including the $ sign at the end.
console.log("Should return a string representing the price including the $ sign at the end. \n");

console.log(centToDecimals(1001) === "10.01$");
console.log(centToDecimals(999) === "9.99$");




