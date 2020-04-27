const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index-router');
const booksRouter = require('./routes/books-router');


const app = express();
const DB_NAME = 'library';

// MONGOOSE DB CONNECTION
mongoose.connect(
  `mongodb://localhost:27017/${DB_NAME}`, 
  {useNewUrlParser: true, useUnifiedTopology: true}
)
.then( (x) => console.log(`Connected to DB: ${x.connections[0].name}`))
.catch( (err) => console.log(err));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


// MIDLLEWARE
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// ROUTES
app.use('/', indexRouter);
app.use('/books', booksRouter);

// ERROR HANDLERS
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
