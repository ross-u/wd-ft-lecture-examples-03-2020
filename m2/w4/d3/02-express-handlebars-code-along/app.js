const express = require('express');
const hbs = require('hbs');

const movies = require('./moviesData');

const app = express();
const PORT = 3000;


// SET THE VIEW ENGINE
app.set("view engine", "hbs");

// SET THE VIEWS/TEMLATES FOLDER
app.set("views", __dirname + "/views");

// SET THE FOLDER TO SERVE THE PARTIALS
hbs.registerPartials(__dirname + "/views/partials");


// MIDDLEWARE
app.use(  express.static("public") );

// ROUTES
app.get('/', (req, res, next) => {
  res.render('index');
})

app.get('/movies', (req, res, next) => {

  // GET THE DATA FROM DATABASE OR ANOTHER API

  res.render('movies', { movies: movies } );

  // To skip the layout for current view, add the property `layout: false`
  // res.render('movies', { movies: movies, layout: false } );  

})

// START SERVER
app.listen(PORT, ()=> {
  console.log(`Server running at port ${PORT}`);
})