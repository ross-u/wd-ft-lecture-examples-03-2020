const express = require('express');
const booksRouter = express.Router();

const Book = require('./../models/book-model');

// GET     /books
booksRouter.get('/', (req, res) => {

  Book.find()
    .then( (allBooks) => {
      res.render('books',  { allBooks: allBooks }  );
    })
    .catch( (err) => console.log(err));
});


// POST     /books/add
booksRouter.post('/add', (req, res) => {
  const { title, description, author, rating } = req.body;
  
  // ADD BOOK TO DB
  Book.create(  { title, description, author, rating }  )
   .then( (book) => {
     // REDIRECT
     res.redirect('/books');
   })
   .catch( (err) => console.log(err));

})

// GET     /books/add
booksRouter.get('/add', (req, res) => {
  res.render('book-add');
})


module.exports = booksRouter;