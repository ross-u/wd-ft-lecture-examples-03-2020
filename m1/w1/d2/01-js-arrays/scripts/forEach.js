var arrNumbers = [1332, 1232, 4332, 9873];

//  // Using the regular `for` loop

// for ( var i = 0; i < arrNumbers.length; i++) {
//   console.log(arrNumbers[i]);
// }





// forEach() - loop over arrays
// It runs the entire length of the array, you cant `break` or `continue`

arrNumbers.forEach(function(num, i, arr) {
  console.log(num);
})



//  // We can also save the function as the parameter and provide it
//  // as an argument to the .forEach() :

//  //  Save the function in the variable using function expression
// var cb = function(num) {
//   console.log(num);
// }

//  // Provide the function as the argument
// arrNumbers.forEach(cb);