// hoisting

// atTheEnd();

// function atTheEnd() {
//   console.log('Hello');
// }


// SCOPES
// Global - var let const
// Function / local - var
// Block - let const


// SCOPE var - Globaly scoped or function scoped

// var city = 'Barcelona';  // Global
// // console.log(city); 


// function print () {
//   var city = "Paris"; // Local - print

//   console.log(city);
// }

// if (true) {
//   var city = "Paris"; // GLOBAL
// }

// for (let index = 0; index < 5; index++) {
//   var city = "Miami"
// }

// console.log(city);


// print();




// // let and const
// // Block scoped

// {
//   let greeting = 'Hello!!!';
//   const bye = 'Bye';
// }


// let username = 'Uros'; // Global

// if (true) {
//   let username = 'Daniel'; // Block scoped

//   console.log('Inside of the block', username); 
// }

// console.log('Outside of the block', username);

// let i = 1000;

// for (let i = 0; i < 5; i++) {
//   console.log('in loop', i);
// }

// console.log('outside of the loop i: ', i);



// LET

// 1. can be updated, but can't be redeclared (in the same scope)
let message = 'This is message 1';
message = 'This is message 2';

// But you can't redeclare
// let message = 'This is message 3333'


// CONST 
// 1. must be initialized in the moment of declaration

const name1 = "John"; // <== CORRECT

// const name2;  // <== WRONG
// name2 = 'Sarah';

// 2. can't be redeclared
const favColor = "green";
// const favColor = "red"; // <== WRONG

// 3. can't be reassinged a new value 
const address = "Pamplona 96";
// address = "Sardenya 96"; // <== WRONG 


// 4. objects and arrays can be mutated (but not reassinged)
const obj = {};

// We are allowed to mutate the objects and arrays
obj.name = 'Ironhacker';
obj.age = 30;

delete obj.age;

console.log(obj);

// obj = {};  // <== WRONG



let username2 = 'Alex'; // GLOBAL

function hello () {
  let username2 = 'Uros'; // BLOCK
}

// OBJECTS
// OLD WAY
let person = {
  name: 'Ironhacker',
  age: 25,
  favoriteMusic: 'Pop',
  city: 'Barcelona',
  favColor: 'red',
}

// let name = person.name;
// let age = person.age;
// let favoriteMusic = person.favoriteMusic;

// NEW WAY
// DESTRUCTURING - we have the same names as the names of the properties
let { name, age, favoriteMusic: theBestGenre } = person;

// console.log(name);
// console.log(age);
// console.log(favoriteMusic);
// console.log('theBestGenre', theBestGenre)





// ARRAYS 
const numbers = ["one", "two", "three", "four"];

// Take the first 3 elements and save them in variables
const [first, second, , fourth ] = numbers;

// console.log(first);
// console.log(second);
// console.log(fourth);


const names = ['bob', 'sarah', 'john', 'anna'];

const [ , , ,lastName] = names;

// console.log('lastName :', lastName);


// SPREAD OPERATOR ... 
// ARRAYS - we spread arrays in other arrays or as arguments to functions

const numbersArr = [1,2,3];

const newArr = [...numbersArr, 4, 5, 6];


console.log( ...numbersArr );
console.log( 1, 2, 3 );



// SPREAD OPERATOR ... 
// OBJECTS - we spread an object only inside of other objects

const description = { firstName: 'Uros', lastName: 'Cirkovic'};
const bio = { age: '30', nat: 'Serbia', h: 185};

const userData = { ...description, ...bio, nat: undefined };

console.log('userData', userData);



// REST OPERATOR ...
// It allows to get the remaining arguments passed to a function

function myFunc(arg1) {
  // console.log(arg1);
  // console.log(arguments); // special value that exists in function declarations
}

// `arguments` special array like structure, used to store all arguments passed to a function
// we never tamper with the `arguments` object

// myFunc('MEOW', 'HELLO', 123, true);



// Using rest operator  ...
function myFuncTwo (arg1, ...restOfArgs) {
  // console.log('arg1', arg1);
  // console.log('restOfArgs', restOfArgs);
}

myFuncTwo(1, 5, 'bob', {}, 456, 1, 2, 3, 4, 5, 9999, 'lalala');



// Rest operatror must come as the last formal parameter
// function myFuncThree (arg1, ...restOfArgs, lastArgs) {
//   // console.log('arg1', arg1);
//   console.log('restOfArgs', restOfArgs);
// }



// ARROW FUNCTIONS


// ARROW FUNCTION
// Arrow functions don't have the `arguments` object or `this` value
const printHello = (name, city) => {
  console.log('Hello ' + name + ' welcome to ' + city);
}

const printNumbers = (...randomNums) => {
  randomNums.forEach( (num) => {
    console.log(num);
  })
}

printHello('Alberto', 'Miami');
// printNumbers(10, 23,2234,35,45,678,8,789, 45,456,567,789,90);


// CONCISE ARROW FUNCTION  - allowed to remove `{}` and the `return`, if used on a single line
const shortHello = (name) =>  console.log('Hello ' + name);

shortHello('Helen');



const sumLong = (a, b) => {
  return a + b;
} 

const sumShort = (a, b) => a + b;

console.log(sumLong(2,2));
console.log(sumShort(12,7));


// ENHANCED OBJECT LITERALS

const x = '55';
const y = 'abc';


/* 
const myObj = {
  x: x,
  y: y
}
*/

const myObj = {
  x,
  y
}


console.log('myObj', myObj)
