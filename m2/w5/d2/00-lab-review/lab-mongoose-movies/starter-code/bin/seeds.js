require('dotenv').config();

const mongoose = require("mongoose")
const Celebrity = require("./../models/celebrity") // no file extensions (for whatever reason?)!

const{ DB_NAME } = process.env;

const celebs = [{
    name: "Marko Annala",
    occupation: "singer",
    catchPhrase: "Saapuu TAKA-TAKA-TAKA-TAKA-TAKA-TAKATALVI"
}, {
    name: "Santtu Hämäläinen",
    occupation: "bass player",
    catchPhrase: "Hyvät aromit talteen"
}, {
    name: `Janne "Hyge" Hyrkäs`,
    occupation: "drummer",
    catchPhrase: "yy kaa koo nee"
}]

// Call the Celebrity model's create method with the array as argument.
// In the create method's callback, display feedback.

function seedDB (celebArr) {
    const celebPromises = celebArr.map( (celeb) => {
        console.log(celeb);
        return Celebrity.create(celeb)
    } ) // do i have to put here {}?? --> NO THAT WILL FUCK UP EVERYTHING 
        //(only use it if u want to create the whole damn thing at once, but now it's just mapping every item in celebArray!)
    return celebPromises;
}

mongoose.connect(
    `mongodb://localhost:27017/${DB_NAME}`, 
    {useNewUrlParser: true, useUnifiedTopology: true}
  )
  .then( (x) => {
      console.log(`Succesfully connected to DB: ${x.connections[0].name}`);
      // promise to populate database with celeb array:
      const promiseArr = seedDB(celebs);
      const whenAllDone = Promise.all(promiseArr); // could I do this from seedDB all over to here with less code?
      return whenAllDone;
  })
  .then( (createdCelebListing) => {
      // rememnber to close!!
      console.log(createdCelebListing);
      mongoose.connection.close();
  } );