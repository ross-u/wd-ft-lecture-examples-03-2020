const express = require('express');
const indexRouter = express.Router();

// GET          /
indexRouter.get('/', (req, res) => {
  res.render('index', { title: 'Home Page'});
})





module.exports = indexRouter;