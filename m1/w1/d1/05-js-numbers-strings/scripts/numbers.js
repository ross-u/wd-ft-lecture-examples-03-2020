/* // Data type - number

var age = 34;	// integer
var price = 12.99;	// floating point number


// Special values

// NaN
// Not a Number - represents an incorrect mathematical operation

var name = 'John';
var nameDivided = name / 2;

console.log(nameDivided);




// Infinity
var lowest = -Infinity;
var highest = Infinity;

console.log( -100000 > lowest);
console.log(999999 < highest);

// Arithmetic operators

console.log(2 + 2); // addition
console.log(4 - 2); // subtraction
console.log(3 * 2); // multiplication
console.log(6 / 2); // division

// Exponentiation
console.log(2**3); // 8


// Modulo
console.log( 4 / 2);
console.log( 4 / 4);


console.log( 4 % 2); // 0
console.log( 4  % 3); // 1



// Assignment operators
var x = 5;
var y = 10;


// x = x + y;
// x += y

// x = x - y;
// x -= y;



// Increment decrement
var a = 10;

a++; // increment    a += 1
a--; // decrement    a -= 1

console.log(a);



// Operator precedence
// PEMDAS
//  () Parentheses
//  ** Exponents
//  *  Multiplication
//  /  Division
//  +  Addtion
//  -  Subtraction


const result = ((7 + 5) / 3) - 8;

 */
// Math object
// 
/* 
var result1 = Math.round(4.7);  // 5
var result2 = Math.round(4.4);  // 4
var result3 = Math.round(4.5);  // 5   .5 is rounded up


console.log(result1);
console.log(result2);
console.log(result3);



var result4 = Math.ceil(7.4);  // 8
console.log(result4);


var result5 = Math.floor(9.9);
console.log(result5); // 9

var min = Math.min(0, 150, 30, 20, -8, -200); // -200
var max = Math.max(0, 150, 30, 20, -8, -200); // 150


console.log(min);
console.log(max);

// Creating a random number
var randomNum = Math.random();  // 0 - 0.999   (excluding 1)
console.log(randomNum);


var randomXTen = Math.ceil( Math.random() * 10 ); 
console.log(randomXTen);
*/

/* 
var num = 0.1 + 0.2;

var result = num.toFixed(10); // .toFixed()  returns a string

console.log(result);
console.log(num);


var pricePr1 = 1555;  // value in cents  15.55eur

//  isNaN()  used to check if the value is Not a Number

isNaN(123); // false
isNaN(NaN); // true
isNaN(0 / 0); // true

// Caveats
isNaN(''); // false
isNaN(true); // false */




var a = 5;
var b = 5;
var c = 100;
var str = '5';


console.log(a == str); // == checks only the value (allows coercion)

console.log(a === str); // checks the value and the data type


console.log(a != c);
console.log(a !== c);

