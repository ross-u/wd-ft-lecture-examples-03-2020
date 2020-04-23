const express = require("express");
const hbs = require("hbs");
const app = express();
const PORT = 3000;

// SET THE TEMPLATE ENGINE
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

// SET THE STATIC FOLDER FOR PUBLIC FILES
app.use(express.static(__dirname + "/public"));

// REGISTER THE PARTIAL
hbs.registerPartials(__dirname + "/views/partials");

// MIDDLEWARE

// ROUTES
app.get("/", (req, res) => {
  console.log(req);
  res.send();
});

// domain.com/search?name=alex&city=barcelona
app.get("/search", (req, res) => {
  console.log(req.query); // { name: "alex", city: "barcelona" }
  res.send();
});

//       /search
app.get("/:profile", (req, res) => {
  console.log(req.params); //   { profile: '' }
  res.send();
});

//       /webdev/details/567ooo
app.get("/:genre/details/:bookId", (req, res) => {
  console.log(req.params); //   { genre: '', bookId: '' }
  res.send();
});

// START THE SERVER
app.listen(PORT, () => console.log(`Server listening on port ${PORT} !`));
