const express = require('express');
const booksRouter = express.Router();

const Book = require('./../models/book-model');
const Author = require('./../models/author-model');


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
     res.redirect('/books');
   })
   .catch( (err) => console.log(err));

})

// GET     /books/add
booksRouter.get('/add', (req, res) => {
  res.render('book-add');
})


// GET     /books/edit/:bookId   - Display the edit form
booksRouter.get('/edit/:bookId', (req, res) => {
  const { bookId } = req.params;

  Book.findById( bookId )
    .then( (book) => {
      res.render('book-edit', { book: book } );
    })
    .catch( (err) => console.log(err));
})



// POST     /books/edit/:bookId    - Takes the update data for the book
booksRouter.post('/edit/:bookId', (req, res) => {
  const { bookId } = req.params;
  const { title, description, author, rating } = req.body;
  
  Book.updateOne( { _id: bookId }, {title, description, author, rating})
    .then( () => {
      res.redirect('/books');
    })
    .catch( (err) => console.log(err));
});


// GET     /books/details/:bookId
booksRouter.get('/details/:bookId', (req, res) => {
  const { bookId } = req.params;

  Book.findById( bookId )
    .populate('author') // replaces the id with data from the collection
    .then( (book) => {
      console.log('book', book)
      res.render('book-details', { book: book } )
    })
    .catch( (err) => console.log(err));
})


// GET      /books/delete/:bookId
booksRouter.get('/delete/:bookId', (req, res) => {
  const { bookId } = req.params;

  Book.findByIdAndRemove( bookId )
    .then( () => res.redirect('/books'))
    .catch( (err) => console.log(err));
})


module.exports = booksRouter;