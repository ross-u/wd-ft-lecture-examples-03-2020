const express = require('express');
const siteRouter = express.Router();
const isLoggedIn = require('./../middleware/isLoggedIn');


// GET         '/secret'       
siteRouter.get('/secret', isLoggedIn, (req, res, next) => {
  res.render('secret');
})

// GET         '/profile'       
siteRouter.get('/profile', isLoggedIn, (req, res, next) => {
  res.render('profile');
})

module.exports = siteRouter;