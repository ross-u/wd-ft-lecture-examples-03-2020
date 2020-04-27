const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// CREATE SCHEMA
const bookSchema = new Schema({
  title: String,
  description: String,
  author: { type: Schema.Types.ObjectId, ref: 'Author' },
  rating: Number
}, {   // Options object
  timestamps: {     // Set auto timestamps
    createdAt: "created_at",
    updatedAt: "update_at"
  }
});

// CREATE MODEL
//                           books
const Book = mongoose.model('Book', bookSchema);

// EXPORT THE MODULE
module.exports = Book;

