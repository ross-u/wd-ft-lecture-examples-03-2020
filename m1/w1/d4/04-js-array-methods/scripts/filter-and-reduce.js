
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





/* 

const reduced = array.reduce( function(accumulator, currentValue, currentIndex, originalArray ){
  
  let updatedAccumulator = accumulator + currentValue;
  return updatedAccumulator;
}, initialValue); 
*/
// - the returned value gets saved in the accumulator
// - at the end of the loop, accumulator value is returned back

const integers = [1,2,3,4,5,6,7,8];

const reducedNumbers = integers.reduce( function(accumulator, currentValue, index, originalArr) {
  let updatedAccumulator = accumulator + currentValue;

  return updatedAccumulator;
  // return accumulator + currentValue; // shorter way
}, 0);

console.log('reducedNumbers :', reducedNumbers);






// REDUCING AN ARRAY TO A STRING VALUE
const names = ['bob', 'sarah', 'anna'];


const namesString = names.reduce( function (acc, name, i, originalArr) {
  let updatedAcc = acc + " " + name;

  return updatedAcc;  // returned values gets set as the acc for the iteration
}, '');

console.log(namesString);








// REDUCING AN ARRAY OF OBJECTS TO A NUMBER VALUE
const places = [
  {
   title: "Awesome Suite 20' away from la Rambla",
   price: 200,
   type: "Private Room",
   pool: true,
   garage: false
  },
  {
   title: "Private apartment",
   price: 190,
   type: "Entire Place",
   pool: true,
   garage: true
  },
  {
   title: "Apartment with awesome views",
   price: 400,
   type: "Entire Place",
   pool: false,
   garage: false
  },
  {
   title: "Apartment in la Rambla",
   price: 150,
   type: "Private Room",
   pool: false,
   garage: true
  },
  {
   title: "Comfortable place in Barcelona´s center",
   price: 390,
   type: "Entire place",
   pool: true,
   garage: true
  },
  {
   title: "Room near Sagrada Familia",
   price: 170,
   type: "Private Room",
   pool: false,
   garage: false
  },
  {
   title: "Great house next to Camp Nou",
   price: 140,
   type: "Entire place",
   pool: true,
   garage: true
  },
  {
   title: "New apartment with 2 beds",
   price: 2000,
   type: "Entire place",
   pool: false,
   garage: true
  },
  {
   title: "Awesome Suite",
   price: 230,
   type: "Private Room",
   pool: false,
   garage: false
  },
  {
   title: "Apartment 10' from la Rambla",
   price: 930,
   type: "Entire place",
   pool: true,
   garage: true
  }
 ]

//                                          0
const totalPrice = places.reduce( function(acc, placeObj, i, originalArr) {
  let updatedAcc = acc + placeObj.price;

  return updatedAcc;
}, 0);

console.log('totalPrice :', totalPrice);