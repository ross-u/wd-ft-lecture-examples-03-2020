// ehbs  + Tab

const express = require("express");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const PORT = 3000;

// Load the value from the .env
require("dotenv").config();

console.log(process.env.SPOTIFY_API_KEY);
console.log(process.env.SESSION_SECRET);

// SET THE TEMPLATE ENGINE
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

// REGISTER THE PARTIAL
hbs.registerPartials(__dirname + "/views/partials");

// MIDDLEWARES
// SET THE STATIC FOLDER FOR PUBLIC FILES
app.use(express.static(__dirname + "/public"));

// PARSER FOR THE FORM DATA - POST REQUEST
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// LOGGER
app.use(morgan("dev"));

function middleware1(req, res, next) {
  console.log("IN MY MIDDLEWARE 1");
  next();
}

function middleware2(req, res, next) {
  console.log("IN MY MIDDLEWARE 2");
  next();
}

// My custom middleware function
app.use(middleware1);

// app.use(middleware1, middleware2); // Chaining middleware horizontaly

// ROUTES

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/success", (req, res) => {
  res.render("thankyou");
});

// Using GET request sends data via the URL string - unsafe
//  http://localhost:3000/signup?mail=b%40b.com&pass=123
//  GET  /signup
app.get("/signup", (req, res) => {
  console.log("req.query", req.query);

  res.send();
});

// POST sends form data via the HTTP Request body
// POST   /login
app.post("/login", (req, res) => {
  req.body; // HTTP Request body

  console.log("req.body", req.body);
  res.redirect("/success");
});

//   GET     /search?name=uros&city=bcn+poblenou
app.get("/search", (req, res) => {
  console.log("req.query", req.query); //  { name: "uros", city: "bcn poblenou"  }
  res.send();
});

//       /
app.get("/:username", (req, res) => {
  //  req.params.username
  console.log("req.params", req.params); //    { username: 'bob' }
  res.send();
});

//
app.get("/:genre/details/:bookId", (req, res) => {
  // req.params.genre   req.params.boodId
  console.log("req.params", req.params); //  { genre: , bookId:  }
  res.send();
});

// ERROR HANDLER
app.use(function (err, req, res, next) {
  console.error("IN ERROR HANDLER", err);
  res.status(500).send("Something broke!");
});

// START THE SERVER
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
