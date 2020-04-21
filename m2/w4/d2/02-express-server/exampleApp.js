const express = require("express");
const fs = require('fs');
const url = require('url');

// Create the server instance
const app = express();
const PORT = 3000;

// Sets a middleware to be used during the request/reponse
// middleware for static files
app.use(express.static("public"));

// GET     localhost:3000/    - route/endpoint
app.get("/", (req, res, next) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/public/views/index.html");

  // const path = url.parse(req.url).pathname;
  // fs.readFile(__dirname + path, 'utf8', (err, loadedFile) => {

  //   res.writeHead(200, { 'content-Type': 'text/html'} )
  //   res.write(loadedFile)
  //   res.end()
  // }
  // )

});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
