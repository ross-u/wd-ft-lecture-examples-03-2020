var expr1 = true;
var expr2 = false;


// || OR
// if one of the is true, return true
// else it returns false
expr1 || expr2; // true

true  || true       // => true
true  || false      // => true
false || true       // => true
false || false      // => false



// && AND
// if both operands are true return true,
// else it returns false
true  && true       // => true
true  && false      // => false
false && true       // => false
false && false      // => false

true && ( 4 > 2 ); // true


// !  NOT



// null undefined

true && undefined; // false
true && null; // false


// type of null
console.log(typeof null);

// Check if something is null
var myNull = null;
myNull === null;


// Check if something is an object (edge case check for null)
var myObj = null;
console.log(typeof myObj === 'object' && myObj !== null);