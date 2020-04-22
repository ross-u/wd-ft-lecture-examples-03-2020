const express = require("express");

const app = express();
const PORT = 5000;

// http://localhost:3000/cat.jpeg  GET

// MIDDLEWARE
app.use(express.static("public"));

// ROUTES
app.get("/index", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
