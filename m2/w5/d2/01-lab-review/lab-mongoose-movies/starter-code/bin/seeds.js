const mongoose = require('mongoose');

const Celebrity = require('./../models/celebrity');

const celebrities = [
  {
    name: "Viggo Mortensen",
    occupation: "Orc slayer",
    catchPhrase: "For Frodo!"
  },
  {
    name: "Alex Abbas",
    occupation: "farmer",
    catchPhrase: "Have a question"
  },
  {
    name: "Siiri",
    occupation: "Darkness Goddess",
    catchPhrase: "Couldn't sleep last night"
  }
];

mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true, useUnifiedTopology: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connection.name}"`)
    return x.connection.dropDatabase();
  })
  .then(() =>{
    const newCollection = Celebrity.create(celebrities)
  
  console.log(newCollection);
  newCollection
    .then( (celebritiesCollection) => {
      console.log("celebritiesCollection", celebritiesCollection)
    })
    .catch((err) => {
      console.log("error", error)
    })
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });





  