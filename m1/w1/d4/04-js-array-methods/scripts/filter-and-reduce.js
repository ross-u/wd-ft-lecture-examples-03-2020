
const numbers = [1,2,3,4,5,6,7];

// filter()
// - returns a new array

const newArray = numbers.filter( function (num, i, originalArr) {
	// if `return` `true` save the element in newArray;
  // if `return` `false` or falsy value it skips the current element

  if (num > 3) {
    return true
  };
});

console.log('newArray', newArray);


const evenNumbers = numbers.filter(function(num) {
  return (num % 2 === 0);

  // if (num % 2 === 0) {
  //   return true;
  // }
});

console.log('evenNumbers', evenNumbers);


