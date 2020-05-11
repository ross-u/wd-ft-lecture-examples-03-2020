const express = require('express');
const app = express(); // Server object


// http://127.0.0.1:3000 - loopback ip (this computer in local)
// http://127.0.0.1:3000/
// http://127.0.0.1:3000/about

// HTTP Request methods: GET, POST, PUT, DELETE


// ROUTES
app.get('/', (req, res, next) => {
  res.send('<h1>HOME PAGE</h1>')
});

app.get('/about', (req, res, next) => {
  res.send('<h1>ABOUT PAGE</h1>')
})


// START THE SERVER
app.listen(3001, () => {
  console.log('Server is running!');
})


module.exports = app;