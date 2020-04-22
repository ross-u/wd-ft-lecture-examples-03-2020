const express = require('express');
const hbs = require('hbs');

const app = express();
const PORT = 3000;


// SET THE VIEW ENGINE
// Set HBS as the view engine used for rendering HTML views
app.set('view engine', 'hbs');

// Set the folder containing the template `hbs` files
app.set('views', __dirname + '/views');


// Register new HBS helper function
hbs.registerHelper('oneUp', function(strValue) {
  return parseInt(strValue) + 1
})


hbs.registerHelper('toUpper', function(strValue) {
  return strValue.toUpperCase()
})

// MIDDLEWARE


// ROUTES
app.get('/', (req, res)=> {
  // res.send('Hello there');  // Returns string
  // res.sendFile(__dirname + "FILE_LOCATION");  // Returns a loaded file

  res.render('index');
})



app.get('/student', (req, res) => {
  const data = { 
    name: 'Sofia',
    bootcamp: 'Barcelona',
    message: 'You Rock',
    address: 'Carrer Pamplona',
    // address: '',   // won't be rendered
    // address: 0,    // won't be rendered
    // address: [],   // won't be rendered
    // address: null,   // won't be rendered
    // address: undefined,    // won't be rendered
    // address: false    // won't be rendered
    cities: ['Palermo', 'Barcelona', 'Paris', 'Berlin'],
    flights: ['123ABC', '345TYU'],
    info: { 
      name: 'Ironhacker',
      campus: 'BCN',
      year: 2020,
      test: undefined,
      descr: {
        content: 'Some content string'
      }
    }
  }

  res.render('students',  data);
})


// START SERVER
app.listen(PORT, ()=> {
  console.log(`Server running at port ${PORT}`);
})