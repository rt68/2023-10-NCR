const express = require('express');
const router = express.Router();
const Flight = require('../models/Flight'); // Adjust the path as necessary

// Route to display all flights
router.get('/', async (req, res) => {
  try {
    const flights = await Flight.find({});
    res.render('flights/index', { flights });
  } catch (err) {
    console.error(err);
    res.send('Error retrieving flights');
  }
});

// Route to show the form to create a new flight
router.get('/new', (req, res) => {
  res.render('flights/new');
});

// Route to handle the creation of a new flight
router.post('/', async (req, res) => {
  try {
    await Flight.create(req.body);
    res.redirect('/flights');
  } catch (err) {
    console.error(err);
    res.send('Error creating flight');
  }
});

module.exports = router;
