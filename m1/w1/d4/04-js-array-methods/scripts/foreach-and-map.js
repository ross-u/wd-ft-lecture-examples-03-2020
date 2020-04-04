let arr = ['a', 'b', 'c'];

// forEach()
// - It runs for the entire array length
// - It always returns `undefined` (it doesn't return anything)

let string = '';

arr.forEach(function(char) {
  var uppercase = char.toUpperCase().repeat(5);
  console.log(uppercase);
  string += uppercase;
});

// ES6 arrow funciton as the callback
const result = arr.forEach((char) => {
  var uppercase = char.toUpperCase().repeat(5);
  console.log(uppercase); 
})

console.log('result :', result);



// map()
// - It creates and returns a new array
// - It runs for the entire array length
// - new elements need to be returned using keyword `return` inside of the callback
// - map() doesn't mutate/change the original array

const newArr = arr.map(function (char, index, originalArr) {
  return char.repeat(5);
})

console.log('newArr :', newArr);

console.log('original arr :', arr);




const numbers = [0,0,0,0,0,0,0,0,0,0];

const matrix = numbers.map(function (num, i, originalArr) {
  const arrCopy = [...originalArr];

  return arrCopy;
});

/* 
matrix = [
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  ...
]
*/ 


// console.log('matrix :', matrix);



let students = [
	{firstName: 'John', lastName: 'Carr', age: 34},
  {firstName: 'Leonardo', lastName: 'Di Vittorio', age: 21},
  {firstName: 'Sarah', lastName: 'O\'Connor', age: 45},
]

const studentNames = students.map(function(studentObj, i) {
  return studentObj.firstName;
});

// ES6 concise arrow and map - remove `return` `{}`
// const studentNames = students.map((studentObj) => studentObj.firstName);

const studentAge = students.map(function(studentObj, i) {
  return studentObj.age;
});


console.log('studentNames', studentNames);
console.log('studentAge', studentAge);
