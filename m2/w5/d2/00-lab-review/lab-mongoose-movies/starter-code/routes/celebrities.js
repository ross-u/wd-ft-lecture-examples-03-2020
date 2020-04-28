//const mongoose = require("mongoose"); not needed!!
const express = require('express');
const router = express.Router();

const Celebrity = require("../models/celebrity");
console.log(Celebrity)

// // btw it's not /celebritites
// router.get("/", (req, res) => {

//     console.log("add Celebrity with find()")
//     Celebrity.find()
//     .then( allCelebrities => {
//         console.log("after trying to find db", allCelebrities);
//         res.render("celebrities/index", {allCelebrities});
//     })
//     .catch( (err)  => console.log(err));
// })

// ALberto edition!
// GET /celebrities
router.get("/", function (req, res, next) {

    Celebrity.find()
        .then(allCelebrities => {
            console.log("all celebs: ", allCelebrities)
            res.render("celebrities/celeb-index", {allCelebrities})
        })
        .catch((err) => console.log(err));
})


// router.get("/", (req, res, next) => {
//     Celebrity.find()
//       .then(celebrities => {
//           console.log(celebrities)
//         res.render("celebrities/index", { celebrities: celebrities });
//       })
//       .catch(error => {
//         console.log("Error while getting the celebrities from the DB: ’", error);
//       })
//   });


//like this!
// booksRouter.get('/', (req, res) => {

//     Book.find()
//       .then( (allBooks) => {
//         res.render('books',  { allBooks: allBooks }  );
//       })
//       .catch( (err) => console.log(err));
//   });

module.exports = router;