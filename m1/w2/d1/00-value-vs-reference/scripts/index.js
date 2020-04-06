// PRIMITIVES - Number, string, boolean, null, undefined
// Copied by value (not the reference)
// Checked by value ==
// Checked by value and datatype ===


const a = 10;
const b = 'abc';

const aCopy = a;
const bCopy = b;

console.log(a == aCopy);
console.log(b === bCopy);

console.log(a);
console.log(aCopy);



// NON-PRIMITIVES - Objects - Object, array, function ...
// Objects are passed by reference

const myArr = [];  // <123abc>

// What does the myArr variable hold ?




// ==  and  === behavior with objects/arrays
// They are checking objects/arrays by reference (memory location)
const arr1 = [1, 2];
const arr2 = [1, 2];


const obj1 = { name: 'John', age: 25 };
const obj2 = { name: 'John', age: 25 };


// console.log(arr1 == arr2);
// console.log(arr1 === arr2);


// console.log(obj1 == obj2);
// console.log(obj1 === obj2);


// console.log(arr1 == arr1);



const myObj1 = {
  title: 'foo'
}

const myObj2 = myObj1;  // Assinging the reference to the object that myObj1 is refering to


myObj2.title = 'bar';

// console.log(myObj1); // ? what is the value of .title in myObj1  ?



// SHALLOW COPY - OBJECT
// Object.assign()
/* // Syntax:

  Object.assign(destinationObject, sourceObject) 

*/


const description = { brand: 'Apple', color: 'silver gray'};

const mac = Object.assign( {} , description );

const bestMac = Object.assign( {}, description, { size: '16in', year: 2020} );

console.log('mac :', mac);
console.log('bestMac :', bestMac);



// SHALLOW COPY
// SPREAD ...
const book = {
  author: "Charlotte Bronte",
  publishers: [           // <arr000>
    { companyName: "AB" },   // <ppp111> 
    { companyName: "CD" }    // <ppp222>
  ]
}

// const descr = { review1: 'Great book', review2: 'Super mega cool'};

const newBook = { ...book };

console.log('newBook :', newBook);


// newBook.author = 'Sponge Bob';
// console.log('book', book); //  book.author ?

newBook.publishers[0] = "IRONAHCK INC";

console.log('book.publishers', book.publishers); // book.publishers[0] ?




// DEEP COPY - OBJECT / ARRAY
// JSON.stringinfy   - converts and object/array to a string
// JSON.parse - converts a string that looks like object/array to object/arr]


const dev1 = { name: 'Alex', job: 'Web Developer', favBooks: [ 'book1', 'book2']};
const dev2 = { ...dev1 };


const stringified = JSON.stringify(dev1);

 console.log('stringified', stringified);

 const backToObject = JSON.parse(stringified);

 console.log('backToObject', backToObject);

console.log("dev1.favBooks === dev2.favBooks", dev1.favBooks === dev2.favBooks);
console.log("dev1.favBooks === backToObject.favBooks", dev1.favBooks === backToObject.favBooks);

 