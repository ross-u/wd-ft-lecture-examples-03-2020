const express = require("express");
const authRouter = express.Router();
const createError = require("http-errors");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const User = require("../models/user");
// HELPER FUNCTIONS
const { isLoggedIn, isNotLoggedIn, validationLogin } = require("../helpers/middlewares");



// POST   '/auth/signup'
authRouter.post('/signup', isNotLoggedIn, validationLogin, async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (user) { // if the username is taken 
      next(createError(400));
    }
    else {
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashPass = bcrypt.hashSync(password, salt);

      const newUser = await User.create({ username, password: hashPass });

      newUser.password = "****";
      req.session.currentUser = newUser;

      res
        .status(201) // Created
        .json(newUser);
    }
  } catch (error) {
    next(createError(error))
  }

})

// POST    '/auth/login'
authRouter.post('/login', isNotLoggedIn, validationLogin, async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      throw createError(404, 'Username already exists'); // Unathorized
    }
    else {
      const passwordCorrect = bcrypt.compareSync(password, user.password);

      if (passwordCorrect) {
        user.password = "****";
        req.session.currentUser = user;

        res
          .status(200)
          .json(user);
      }
      else {
        throw new Error('Password incorrect');
      }
    }

  } catch (error) {
    next(createError(error));
  }


})

// GET   '/auth/logout'
authRouter.get('/logout', isLoggedIn, (req, res, next) => {
  //  - check if the user is logged in using helper function (check if session exists)

  //  - destroy the session
  req.session.destroy(function (err) {
    if (err) next(createError(err));
    else {
      //  - set status code and send the response back
      res
        .status(204) // No Content
        .send();
    }
  })
})

// GET    '/auth/me'
authRouter.get('/me', isLoggedIn, (req, res, next) => {
  //  - check if the user IS logged in using helper function (check if session exists)

  //  - if yes, send the response with user info (available on req.session.currentUser)
  const currentUserSessionData = req.session.currentUser;
  res
    .status(200)
    .json(currentUserSessionData);
})


module.exports = authRouter;
