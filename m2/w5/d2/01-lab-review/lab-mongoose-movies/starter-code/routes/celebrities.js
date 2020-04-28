const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/celebrity');

router.get('/' , function (req, res, next) {
    Celebrity.find() 
      .then(celebritiesResume => {
         res.render("celebrities/celebrities-index", {celebritiesResume}) 
         console.log("celebritiesResume", celebritiesResume) 
      })
      .catch( (err) => console.log(err));
    })

      
// GET  /celebrities/new - Show a form to create a celebrity
router.get('/new', function(req, res, next) {
  res.render('celebrities/new', {
    title: "Build Your Celebrity's Profile",
  });
});

// POST '/celebrities'
router.post('/', function(req, res, next) {
  const theCelebrity = new Celebrity({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  });

  theCelebrity.save(err => {
    if (err) {
      res.render('celebrities/new', {
        title: "Build Your Celebrity's Profile",
      });
    } else {
      res.redirect('/celebrities');
    }
  });
});

// GET     /celebrities/:id   - Show a specific celebrity
router.get('/:id', (req, res, next) => {
  const celebritesId  = req.params.id; // assign to a const the value of the key/pair in req.params
  // the oterway is to deconstr. => const {id} = req.params
  Celebrity.findById( celebritesId )
    .then( (celebrity) => {
      console.log(celebrity)
      res.render('celebrities/show', { celebrity } );
    })
    .catch( (err) => console.log(err));
});    

// router.post('/delete/:id', (req, res) => {
//   const { celebritesId } = req.params;

//   Book.findByIdAndRemove( celebritesId )
  
//     .then( () => res.redirect('/celebrities'))
//     .catch( (err) => console.log(err));
// })

router.post('/delete/:id', (req, res, next) => {
  const {id}  = req.params; // assign to a const the value of the key/pair in req.params
  // the oterway is to deconstr. => const {id} = req.params
  Celebrity.findByIdAndRemove(id) //return a promise
    .then( (removedCelebrity) => {
      console.log(removedCelebrity)
      // res.render('/celebrities', {removedCelebrity: removedCelebrity});
      res.redirect('/celebrities');
    })
    .catch( (err) => console.log(err));
})    

// router.post('/celebrities/:id/delete', function(req, res, next) {
//   Celebrity.findByIdAndRemove({ _id: req.params.id }, (err, theCelebrity ) => {
//     if (err) 
//       { return next(err); }
//       res.redirect('/celebrities');
//     });


//     // Celebrity.findByIdAndRemove({ _id: req.params.id })
//     //  .then( (data) => {
//     //    res.redirect('/celebrities');
//     //  })
//     //  .catch( (err) => {
//     //    next(err);
//     //  });
//   });


router.get('/:celebId/edit', (req, res) => {
  // const celebId = req.params.celebId;
  const { celebId } = req.params; 

  Celebrity.findById(celebId)
  .then( (celebrity) => {
    // res.render('celebrities/edit', { celebrity: celebrity })
    res.render('celebrities/edit', { celebrity })
  })
  .catch( (err) => console.log(err));
})


router.post('/:celebId/edit', (req, res) => {
  const { celebId } = req.params;

  const { name, occupation, catchPhrase } = req.body;

  Celebrity.findByIdAndUpdate( celebId, { name, occupation, catchPhrase })
    .then( (data) => {
      res.redirect('/celebrities');
    })
    .catch( (err) => console.log(err));
})





module.exports = router;
