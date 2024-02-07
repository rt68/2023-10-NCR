////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require("express");
const Fruit = require("../models/Fruit");

/////////////////////////////////////////
// Create Route
/////////////////////////////////////////
const router = express.Router();
////////////////////////////////////////
// Router Middleware
////////////////////////////////////////
// Authorization Middleware
router.use((req, res, next) => {
    if (req.session.loggedIn) {
      next();
    } else {
      res.redirect("/users/login");
    }
  });

/////////////////////////////////////////
// Routes
/////////////////////////////////////////
//Index fruits
router.get('/', (req, res) => {
    Fruit.find({username: req.session.username})
        .then((allFruits) => {
            res.render('fruits/Index', { fruits: allFruits });
        })
        .catch((err) => {
            console.error(err)
            res.status(400).json({ err })
        });

});

//New fruits
router.get('/new', (req, res) => {
    res.render('fruits/New');
});
//Delete
router.delete('/:id', (req, res) => {
    Fruit.deleteOne({ _id: req.params.id })
        .then(deleteInfo => {
            console.log(deleteInfo)
            res.redirect('/fruits')
        })
        .catch((err) => {
            console.error(err)
            res.status(400).json({ err })
        });
});
//Update
router.put('/:id', (req, res) => {
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    Fruit.updateOne({ _id: req.params.id }, req.body)
        .then(updateInfo => {
            console.log(updateInfo);
            res.redirect(`/fruits/${req.params.id}`);
        })
        .catch((err) => {
            console.error(err)
            res.status(400).json({ err })
        });
});
//Create fruits
router.post('/', (req, res) => {
    if (req.body.readyToEat === 'on') { //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true; //do some data correction
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false; //do some data correction
    }
    req.body.username = req.session.username;
    Fruit.create(req.body)
        .then((createdFruit) => {
            res.redirect('/fruits')
        })
        .catch((err) => {
            console.error(err)
            res.status(400).json({ err })
        });
});

//Edit
router.get('/:id/edit', (req, res) => {
    Fruit.findOne({ _id: req.params.id })
        .then(foundFruit => res.render('fruits/Edit',
            {
                fruit: foundFruit
            }))
        .catch((err) => {
            console.error(err)
            res.status(400).json({ error })
        });
});
//Show
//Show Fruits
router.get('/:id', (req, res) => {
    Fruit.findOne({ _id: req.params.id })
        .then((foundFruit) => {
            res.render('fruits/Show', { //second param must be an object
                fruit: foundFruit
            })
        })
        .catch((err) => {
            console.error(err)
            res.status(400).json({ error })
        });
});
//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router;