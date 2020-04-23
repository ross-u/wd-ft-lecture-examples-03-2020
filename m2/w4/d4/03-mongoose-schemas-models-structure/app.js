const mongoose = require('mongoose');
const data = require('./data.js');
const dbName = 'iron-bank';

// CLIENT MODEL
const Client = require('./models/client-model');

// CREATE A DATABASE CONNECTION INSTANCE - TO DB `iron-bank`
mongoose
  .connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then( () => console.log('Connected to the database ' + dbName))
  .catch( (err) => console.log(err));


// INSERTING DOCUMENTS - `Model.create`   // https://mongoosejs.com/docs/api.html#model_Model.create
let client1 = {
  name: 'Infamous Bob',
  age: 60,
  accountActive: true,
  balance: 31218.56,
  payments: [],
};

// Client.create(client1)
//   .then( (createdDoc) => {
//     console.log('createdDoc ->',createdDoc)
//   })
//   .catch( (err) => console.log(err));





// RETRIEVE A SINGLE DOCUMENT - `Model.findById`    //https://mongoosejs.com/docs/api.html#model_Model.findById
// Client.findById("5ea15f1d6baa25d419a084b6")
//   .then( (oneClient) => {
//     console.log("oneClient ->", oneClient)
//   })
//   .catch( (err) => console.log(err));




//  INSERT MULTIPLE DOCUMENTS - `Model.insertMany`    //  https://mongoosejs.com/docs/api.html#model_Model.insertMany
// Client.insertMany(data)
//   .then( (insertedClients) => {
//     console.log("Created clients: ", insertedClients.length )
//     console.log("Created clients documents ", insertedClients )
//   })
//   .catch( (err) => console.log(err));





//  RETRIEVE DOCUMENTS  - `Model.find`    //  https://mongoosejs.com/docs/api.html#model_Model.find
//  Returns an array of matching documents
Client.find({})
.then( (retrievedClientsArr) => {
  //console.log("Retrieved Clients: ", retrievedClientsArr);
  
  const sum = retrievedClientsArr.reduce( (acc, clientObj) => acc + clientObj.balance, 0)

  console.log('sum', `${sum.toFixed(2)} USD`)
  
})
.catch( (err) => console.log(err));





// UPDATE ONE DOCUMENT  - Model.findOneAndUpdate    // https://mongoosejs.com/docs/api.html#query_Query-findOneAndUpdate
const multiplePayments = [{amount: 1000000}, {amount: 234234550}, {amount: 234234450}];

// Client.findOneAndUpdate(
//   { name: "John Stevenson"}, 
//   { $set: { payments:  multiplePayments} },
//   { new: true }  // returns the updated document
// )
//   .then( (client) => console.log("John -> ",client))
//   .catch( (err) => console.log(err));


// DELETE ONE DOCUMENT -  Model.deleteOne   // https://mongoosejs.com/docs/api.html#model_Model.deleteOne
Client.deleteOne({ name: "Maddox Leon"})
.then( (statusObj) => {
  console.log("statusObj", statusObj)
})
.catch( (err) => console.log(err));



// DELETE ONE DOCUMENT BY ID - returns the deleted document
Client.findByIdAndRemove("5ea1651a7864d3d6af073d11")
  .then( (result) => {
    console.log("result of findByIdAndRemove", result)
  })
  .catch( (err) => console.log(err));