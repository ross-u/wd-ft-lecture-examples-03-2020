// Array literal
var arrayNames = ['Joe', 'Ricard', 'Alejandro'];

// Array constructor
var fruits = new Array('Apple', 'Banana');


console.log(arrayNames);
console.log(fruits);


var mixedArray = ['abc', 123, 12.55, {}, true, false, function() {}];


// length  - zero indexed
console.log(arrayNames.length);


//  [] - to access the elements in the array
var ricard = arrayNames[1];

console.log(ricard);

// ACCESSING ELEMENTS
var students = ['Anna', 'Jake', 'Sarah', 'Bob', 'Joan', 'Jack', 'Mike'];


// COMPLETE THE REST :
var mike = students[students.length - 1]; // Joe
var joan = students[4];
var anna = students[0];

console.log(mike)
console.log(joan)
console.log(anna)



console.log('BEFORE',students);

// ASSIGN OR ADD NEW
students[students.length] = "Capu";



// students[24] = "Uros";
// console.log(students[23]);



// pop() - removes the last element from the array and returns it

var capu = students.pop();
console.log('capu',capu);

// push()
students.push('Alberto', 'Siiri', 'Ariadna');


// shift() - removes the first element from the array and returns it

var anna = students.shift();
console.log('ANNA', anna);


// unshift()
students.unshift('Axel');

console.log('AFTER',students);


// join() - converts an array to a string

var studentsString = students.join(' $ ');
console.log(studentsString);


// split() - converts a string to an array
var nameString = "Mark Susan Luca Jennifer Hanna Ross Anna";

var namesArray = nameString.split('a');
console.log(namesArray);




// slice(startIndex, endIndex) - copy the elements from the array (non-mutating)
var arrayNames2 = ["Pedro", "Bob", "Jake", "Joan", "Sarah", "Anna", "Jennifer", "Marco"];

var allNames = arrayNames2.slice(); // copies the entire array
var jakeArr = arrayNames2.slice(2, 3);

console.log(allNames);
console.log('JAKE ARR', jakeArr);




// splice(startIndex, deleteCount) - removes elements from an array (mutating)
var arrayNames3 = ["Pedro", "Bob", "Jake", "Joan", "Sarah", "Anna", "Jennifer", "Marco"];

var splicedNames = arrayNames3.splice(0, 3);

console.log(splicedNames);
console.log(arrayNames3);





