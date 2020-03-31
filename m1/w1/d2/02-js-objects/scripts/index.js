// property is a key: value pair inside of an object
// method - is a function property
var obj = {
  firstName: "Maxime",
  zip5: 08013,
  isAvailable: true,
  myUndefined: undefined,
  myNull: null,
  favNumbers: [1,2,5],
  address: {
    city: 'Barcelona',
    street: 'Pamplona',
    number: 123
  },
  sayHello: function () {
    console.log('Hello there!');
  }
}

// ACCESSING THE VALUES/PROPERTIES
// DOT NOTATION
console.log(obj.firstName);
console.log(obj.address.city);

obj.sayHello();

// BRACKET NOTATION - 
// dynamicaly evaluates the value passed in the brackets
// and convert it to a string

console.log(  obj[ 'zip' + 5 ]  );   //  'zip5'

obj[ 'zip' + 5 ];
obj.zip5



var accountNumbers = ['a2k3hj4', 'klj4563', 'jg20345'];

function getRandomAccount () {
  var randomIndex = Math.floor(  Math.random() * 3 );
  return accountNumbers[randomIndex];
}

var account = {
  a2k3hj4: 1000,
  klj4563: 2000,
  jg20345: 50000
}


var result2 = account[ getRandomAccount() ];

console.log(result2);


// delete - used to remove a property from an object

var user = {
  name: 'Alex',
  city: 'Barcelona',
  favGenre: 'Techno',
  age: 21,
  color: 'blue'
}

delete user.favGenre;

console.log(user);


// for...in
// iterates over the property names of an object

for (var key in user) {
  console.log(`${key}: ${ user[key] }`);
}


// Object.keys()  - returns an array of propery names

var propNames = Object.keys(user);
console.log('propNames', propNames);


// Object.values()  -- returns an array of property values

var propValues = Object.values(user);
console.log('propValues', propValues);




// Iterate over the dataset easily

var studentObj = {  name: 'Sarah', occupation: 'Program Manager' }

var school = [
  {  name: 'Sarah', occupation: 'Program Manager' },
  {  name: 'Bob', occupation: 'Taxi Driver' },
  {  name: 'Siiri', occupation: 'Software Engineer' },
  {  name: 'Uros', occupation: 'Full Stack Dev' },
  {  name: 'Capu', occupation: 'Front End Dev' },
  {  name: 'Bob', occupation: 'Taxi Driver' },
  {  name: 'Bob', occupation: 'Taxi Driver' },
  {  name: 'Bob', occupation: 'Taxi Driver' }
]