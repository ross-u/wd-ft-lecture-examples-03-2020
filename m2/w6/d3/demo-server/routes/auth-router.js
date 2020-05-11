const express = require('express');
const authRouter = express.Router();



// GET     /auth/signup
authRouter.get('/signup', (req, res) => {
  res.render('signup-form');
})


// POST   /auth/signup
authRouter.post('/signup', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  
  console.log('email :>> ', email);
  console.log('password', password);

  res.redirect('/');
})

// GET   /auth/login
authRouter.get('/login', (req, res) => {
  res.render('login-form');
})


// POST   /auth/login
authRouter.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  
  console.log('email :>> ', email);
  console.log('password', password);

  res.redirect('/');
})

// POST   /auth/logout
authRouter.get('/logout', (req, res) => {
  res.redirect('/');
})

module.exports = authRouter;