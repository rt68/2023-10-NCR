const express = require('express');
const router = express.Router();
const FoodLog = require('../models/foodLog'); // Adjust the path as necessary

// Index route
router.get('/', (req, res) => {
    FoodLog.find({})
        .then((foodLogs) => {
            res.render('foodLogs/Index', { foodLogs }); // Ensure you have this view
        })
        .catch((err) => {
            console.error(err)
            res.status(400).json({ err })
        });
});

// New route
router.get('/new', (req, res) => {
    res.render('foodLogs/New'); // Ensure you have this view
});

// Delete route
router.delete('/:id', (req, res) => {
    FoodLog.deleteOne({ _id: req.params.id })
        .then((deleteInfo) => {
            console.log(deleteInfo)
            res.redirect('/foodlogs');
        })
        .catch(err => {
            console.error(err);
            res.status(400).json(err);
        });
});
// Update route
router.put('/:id', (req, res) => {
    FoodLog.updateOne({ _id: req.params.id }, req.body)
        .then((updateInfo) => {
            console.log(updateInfo);
            res.redirect(`/foodlogs/${req.params.id}`);
        })
        .catch((err) => {
            console.error(err)
            res.status(400).json({ err })
        });
});
// Create route
router.post('/', (req, res) => {
    FoodLog.create(req.body)
        .then((createdfoodLog) => {
            res.redirect('/foodlogs');
        })
        .catch((err) => {
            console.error(err)
            res.status(400).json({ err })
        });
});
// Edit route
router.get('/:id/edit', (req, res) => {
    FoodLog.findOne({ _id: req.params.id })
        .then(foodLog => {
            res.render('foodLogs/Edit', { foodLog }); // Ensure you have this view
        })
        .catch(err => {
            console.error(err);
            res.status(400).json({ err });
        });
})

// Show route
router.get('/:id', (req, res) => {
    FoodLog.findOne({ _id: req.params.id })
        .then((foodLog) => {
            res.render('foodLogs/Show', { foodLog }) // Ensure you have this view
        })
        .catch((err) => {
            console.error(err);
            res.status(400).json({ err });
        })
});






module.exports = router;
