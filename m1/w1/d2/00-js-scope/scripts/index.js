/*
 // Function declaration
function sayHello () {
  console.log('Hello');
  console.log('There');
  console.log('Friend');
}


// Function expression
var sayBye = function () {
  console.log('Bye');
}



// Arrow function
var helloWorld = () => {
  console.log('Hello world')
}


// Invoking/calling a function  ()

sayHello();

sayBye();
sayBye();
sayBye();
sayBye();

helloWorld(); 
*/


// Function declaration
// function sayHello (name, city) {
//   // var name = "Arslane"
//   // var city = "Paris"

//   console.log("Hello " + name + " welcome to " + city );
// }


// // Function expression
// var sayBye = function (name, country) {
//   console.log("Bye " + name + " hope you enjoyed " + country);
// }

// sayHello("Arslane", "Paris");


// var result = sayBye("Uros", "Germany");
// console.log(result); // This function returns `undefined` as no return was specified

// RETURN

// Functions by default return undefined, 
// if not stated different (return)
// return - breaks the execution of the function and returns
// the result


// function sum (a, b) {
//   var total = a + b;
  
//   return total; 
// }

// var sumResult = sum(10, 35);
// console.log(sumResult);


// // Arrow function with parameters
// var multiply = (a, b, c) => {
//   return a * b * c;
// }


// var multiplication = multiply(10, 10, 5);

// console.log(multiplication)





// SCOPE

// Global - visible/available in the entire program/script
// Local (function scope)
// Block scope (let const)


// Scope chain

// Each nested scope "inherits" (can see) values from the previous scope (scope above it).

// function outer () {

//   function inner () {
//     var i = 4;

//     console.log('o in inner', o);
//     console.log('g in inner', g);
//   }

//   var o = 3;
//   inner();
// }


// var g = 1;

// outer()

// var a = 100;

// function test (a) {
//   // var a = 55

//   // Variable shadowing
//   console.log(a);
// }

// test(55); //   ->  55


// var x = 5;

// function test2 () {
//   x = 100;  // AUTOMATICALLY GLOBAL - AVOID THIS
// }

// test2();

// console.log(x); //  5


// HOISTING
// function
// var

/*
// HOISTED TO THE TOP OF THE SCRIPT
function sumNumbers (num1, num2) {
  console.log(num1 + num2);
}

function print () {}

var name = undefined
var city = undefined
*/

// COMPILER - HOISTING
// // Find all function declarations
// sumNumbers
// print
// // Find all var declarations, and create empty container
// var name = 'Alejandro'
// var city = 'Barcelona'

// sumNumbers(10, 20);


// function sumNumbers (num1, num2) {
//   console.log(num1 + num2);
// }

// function print () {}


// var name = 'Alejandro';
// var city = 'Barcelona';

// var cat = undefined
// var fish = undefined
// var bird = undefined

// console.log(cat);



// var cat = 'Munchkin';
// var fish = 'fishy';
// var bird = 'polly';


// Hoisting applies to `var` and `function`

// function sayHello(name) {
//   console.log('Hello ' + name);
// }


// function outer (helloFunc, name) {
//   // var helloFunc = function sayHello(name) { console.log('Hello') }
//   // var name = "Daniel"

//   helloFunc(name)
// }


// outer( sayHello, "Daniel" );


// function eatDesert() {
//   console.log("Eating the dessert 🍰");
// }


// function startEatingDinner(func) {
//   console.log('Eating the dinner🍽');
//   console.log('Finished with the dinner.');
  
//   func();
// }


// startEatingDinner(eatDesert);


// Anonymous functions
// var arr = ['Siiri', 'Ricard', 'Lucia'];



// arr.forEach(function (e) {
//   console.log(e);
// });

// var sayBye = function () {
//   console.log('Bye');
// }

// function greet (who) {
//   console.log("Hello " + who);
// }


// greet('Bob');
// console.log("Bye");


// function chicken () {
//   console.log('chicken');
//   egg();
// }

// function egg () {
//   console.log('egg');
//   chicken();
// }

// debugger;
// chicken();

function printSum(num1, num2) {

}

function sayHello () {}


funciton eatDinner (cb) {
  cb()
}
