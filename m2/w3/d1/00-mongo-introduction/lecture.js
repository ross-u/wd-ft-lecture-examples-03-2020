// List all databases
show dbs

// Select the database or to create the new one
use db_name

// See the current database
db

// Create a new collection in the current database
db.createCollection("users");

// List collections in the current database
show collections

// Insert a document in a collection
db.collection_name.insertOne( { } );

db.users.insertOne( { name: 'Anna', age: 30 } )
db.users.insertOne( { name: 'Anna', age: 40 } )
db.users.insertOne( { name: 'Anna', age: 50 } )
db.users.insertOne( { name: 'Marco', age: 30 } )
db.users.insertOne( { name: 'Marco', age: 40 } )
db.users.insertOne( { name: 'Marco', age: 50 } )

// List all the documents in the specified collection
db.collection_name.find()

// List all the documents in the specified collection with indentation
db.collection_name.find().pretty()


// CREATE
// insertOne
db.collection_name.insertOne({ key: value, })

// insertMany
db.collection_name.insertMany( [  {  }, {  } ] )

// example
db.users.insertMany([
    { name: 'Chris', city: 'Barcelona' },
    { name: 'Ana', city: 'Barcelona' }
  ] 
)


// READ
// find() - to get all documents in the collection
db.collection_name.find()

// find() - to get specific documents in the collection
db.collection_name.find( { key: value } )

db.users.find( { name: 'Anna' } )
db.users.find( { age: 30 } )

db.users.find( { name: 'Anna', age: 40 } )


// matcher $and
$and: [ {  }, {  } ] 

db.users.find( { $and: [ { name: 'Anna' }, { age: 30 } ]   } )

// matcher $or
$or: [ {  }, {  } ] 

db.users.find( {   $or: [ {name: 'Anna'} , {name: 'Marco' } ]   } )

// Find all users that have `name` `Marco` or `Anna` and `age` `30` or `40`
db.users.find({ 
  $and:  [ 
    { $or: [ {age:30}, {age: 40}]   },
    { $or: [ { name: 'Anna' }, { name: 'Marco' } ] }
  ]   
})


// greater than
// { $gt: value  } 
db.users.find( { age:  {$gt: 40 }   }  )


// greater than or equal
// { $gte: value  } 
db.users.find( { age:  {$gte: 40 }   }  )

// less than
// { $lt: value  } 
db.users.find( { age:  {$lt: 40 }   }  )


// less than or equal
// { $lte: value  } 
db.users.find( { age:  {$lte: 40 }   }  )


// not equal
//  { $ne: value }
db.users.find({  age:  {$ne: 40 }   })

// nor - not equal to provided values
db.users.find({  $nor: [ { age: 40 },   {name: "Anna"}  ]  })