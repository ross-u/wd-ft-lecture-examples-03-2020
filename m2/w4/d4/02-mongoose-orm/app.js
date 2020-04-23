const mongoose = require('mongoose');

const DB_NAME = "example-mongoose";

// CREATE DATABASE IF IT DOESN'T EXIST OR
// CONNECT TO THE EXISTING ONE WITH THE NAME PROVIDED
mongoose.connect(
  `mongodb://localhost:27017/${DB_NAME}`,
  {useNewUrlParser: true, useUnifiedTopology: true}
);

//          mongoose.model(COLLECTION_NAME, SCHEMA_OBJECT )
//                          cats
const Cat = mongoose.model('Cat', {
  name: String,
  color: String,
});


// CREATES A COLLECTION OR CONNECTS TO THE EXISTING ONE


// We can use Promises or Callback syntax

// Cat.create( { name: 'Iron Kitty Cat', color: 'Ironhack blue', sillyName: 'big meow' }, (err, result)=> {
//   if (err) console.error(err);
//   else {
//     console.log('result ->', result);
//   }
// });

const kittyCat = Cat.create( { name: 'Iron Kitty Cat', color: 'Ironhack blue', sillyName: 'big meow' });

kittyCat
  .then((result) => {
    // console.log('result ->', result);
  })
  .catch((err)=> {
    console.error(err);
  })


// RETRIEVE ALL DOCUMENTS
Cat.find({})
  .then( (results) => {
    // console.log('Cat.find() results',results)
  })
  .catch( (err) => console.log(err));



//                          dogs
const Dog = mongoose.model('Dog', {
  name: String
});

const arrayOfCats = [
  { name: 'marbles', color: 'black' },
  { name: 'fluffy', color: 'white' },
  { name: 'tiger', color: 'orange and black' },
];

const arrayOfDogs = [ 
  {name: 'daisy'},
  {name: 'bella'},
  {name: 'sudo'}
];

const promise1 = Cat.insertMany(arrayOfCats);
const promise2 = Dog.insertMany(1234);

Promise.all( [ promise1, promise2 ] )   // And it returns a new promise
  .then( (resultOfPromises) => {
    console.log("resultOfPromises", resultOfPromises)
  })
  .catch( (err) => console.log("ERROR WAS HERE", err));




/* 
  MONGOOSE CONNECTION EVENTS
  We can provide a callback to be run on each
  of the below database events.
*/ 

// When successfully connected
mongoose.connection.on('connected', () => console.log('Mongoose connected'));

// When the connection is disconnected
mongoose.connection.on('disconnected', () => console.log('Mongoose disconnected'));

// If the connection throws an error
mongoose.connection.on('error', (err) => console.log('Mongoose connection error: ' + err));