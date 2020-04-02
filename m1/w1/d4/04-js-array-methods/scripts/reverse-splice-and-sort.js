// // reverse, splice and sort are mutating the original array

// // reverse()
// // reverses the original array in place

// const arr = ['one', 'two', 'three'];

// arr.reverse();

// console.log('arr', arr)


// // splice()
// const fruits = ["Apple", "Banana", "Pear", "Orange", "Coconut", "Mango", "Kiwi"];

// // Removing elements
// const arr1 = fruits.splice(0, 2);

// console.log('fruits :', fruits);
// console.log('arr1 :', arr1);

// // Inserting new elements
// arr1.splice(1, 0, "Lemon", "Watermelon");
// console.log('arr1 :', arr1);


// sort()

// strings are sorted properly
const favFruits = ["Watermelon", "Banana", "Orange", "Apple", "Dragon Fruit", "Mango", "Cheries"];
favFruits.sort();

console.log('favFruits :', favFruits);

// sorting numbers - wrong way (without the compare function)
const randomNums = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];

randomNums.sort();
console.log('randomNums', randomNums)


const mixed = [22, 23, 99, 68, 1, 0, ':', '!', 9, 112, 223, 64, 18];

mixed.sort();
console.log('mixed', mixed);


// sorting numbers - right way (compare function)
/*
arr.sort( function(a,b) {
  // order formula

  // if compare function returns -1 : a is sorted before b (leaves a to be first in the pair)

  // if compare function returns 1 : b is sorted on the index lower than a ( b comes to the place of a)

  // if compare function returns 0:  leave a and b unchanged
})
*/


// [ 22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];

// ascending order
randomNums.sort(function(a,b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  if ( a === b) {
    return 0;
  }
});


console.log('randomNums', randomNums);


const numeros = [ 22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];

numeros.sort( function(a, b) {
  // return a - b;
  return b - a;
});

console.log('numeros', numeros);


const students = [
  { name: 'x', age: 21 },
  { name: 'a', age: 51 },
  { name: 'y', age: 41 },
  { name: 'u', age: 110 },
  { name: 'o', age: 55 },
  { name: 't', age: 67 }
];

// SORTING OBJECTS
students.sort(function(objA, objB) {
  if (objA.age < objB.age) {
    return -1;
  }
  if (objA.age > objB.age) {
    return 1;
  }
  if (objA.age === objB.age) {
    return 0;
  }
});


console.log('students', students);



