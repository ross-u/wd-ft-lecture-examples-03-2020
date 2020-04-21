const express = require("express");

const app = express(); // server object that listens for request
const PORT = 3000;

// Sets a middleware to be used during the request/reponse
// middleware for static files
app.use(express.static("public"));

//       /         GET    - route/endpoint
app.get("/", (req, res, next) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/public/views/index.html");
});

//       /about    GET     - route/endpoint
app.get("/about", (req, res, next) => {
  res.sendFile(__dirname + "/public/views/about.html");
});

// GET    /test    GET     - route/endpoint
app.get("/test", (req, res, next) => {
  res.send("<h1>TEST - send a html string</h1>");
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
