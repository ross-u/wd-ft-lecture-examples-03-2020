const express = require("express");
const authRouter = express.Router();
const User = require("./../models/user-model");

const bcrypt = require("bcrypt");
const saltRounds = 12;

const zxcvbn = require("zxcvbn");

// GET    '/auth/signup'     -  Renders the signup form
authRouter.get("/signup", (req, res) => {
  res.render("auth-views/signup-form");
});

// POST    '/auth/signup'
authRouter.post("/signup", (req, res, next) => {
  // 1. Get the username and password from req.body
  const { username, password } = req.body;

  // 2.1 Check if the username and password are provided
  if (username === "" || password === "") {
    res.render("auth-views/signup-form", {
      errorMessage: "Username and Password are required.",
    });
    return; // stops the execution of the function furhter
  }

  // 2.2 Verify the password strength
  // const passwordStrength = zxcvbn(password).score;

  // console.log("zxcvbn(password) :>> ", zxcvbn(password));
  // console.log("passwordStrenth :>> ", passwordStrength);
  // if (passwordStrength < 3) {
  //   res.render("auth-views/signup-form", {
  //     errorMessage: zxcvbn(password).feedback.warning,
  //   });
  //   return;
  // }

  // 3. Check if the username is not taken
  User.findOne({ username })
    .then((userObj) => {
      if (userObj) {
        // if user was found
        res.render("auth-views/signup-form", {
          errorMessage: `Username ${username} is already taken.`,
        });
        return;
      } else {
        // Allow the user to signup if above conditions are ok

        // 4. Generate salts and encrypt the password
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashedPassword = bcrypt.hashSync(password, salt);

        // 5. Create new user in DB, saving the encrypted password
        User.create({ username, password: hashedPassword })
          .then((user) => {
            // 6. When the user is created, redirect (we choose - home page)
            res.redirect("/");
          })
          .catch((err) => {
            res.render("auth-views/signup-form", {
              errorMessage: `Error during signup`,
            });
          });
      }
    })
    .catch((err) => next(err));

  // X.  Catch errors coming from calling to User collection
});

module.exports = authRouter;
