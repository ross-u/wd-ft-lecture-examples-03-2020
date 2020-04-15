const topScoresArr = [
  {name: 'Alberto', score: 1000},
  {name: 'Siiri', score: 5000},
  {name: 'Ariadna', score: 6000}
];

// 1. Before storing data to localStorage,
// we have to stringify it.

// JSON.stringify - it takes object/array and 
// converts it to a stirng representation

const topScoresStr = JSON.stringify(topScoresArr);
console.log('topScoresStr :', topScoresStr);


// 2. Store the string using localStorage.setItem()

localStorage.setItem('topScores', topScoresStr);


// 3. Retrieve the string and convert it to an obj/array
// JSON.parse takes string and tries to convert it to
// an array/object

const strFromLS = localStorage.getItem('topScores');
console.log('strFromLS :', strFromLS);

const arrFromStr = JSON.parse(strFromLS);
console.log('arrFromStr', arrFromStr);

// 4. Deleting the key value pair - removeItem()
// localStorage.removeItem('topScores');