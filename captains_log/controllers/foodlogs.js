const express = require('express');
const router = express.Router();
const FoodLog = require('../models/foodLog'); // Adjust the path as necessary

// Index route
router.get('/', async (req, res) => {
  const foodLogs = await FoodLog.find({});
  res.render('foodLogs/Index', { foodLogs }); // Ensure you have this view
});

// New route
router.get('/new', (req, res) => {
  res.render('foodLogs/New'); // Ensure you have this view
});

// Create route
router.post('/', async (req, res) => {
  await FoodLog.create(req.body);
  res.redirect('/foodlogs');
});

// Show route
router.get('/:id', async (req, res) => {
  const foodLog = await FoodLog.findById(req.params.id);
  res.render('foodLogs/Show', { foodLog }); // Ensure you have this view
});

// Edit route
router.get('/:id/edit', async (req, res) => {
  const foodLog = await FoodLog.findById(req.params.id);
  res.render('foodLogs/Edit', { foodLog }); // Ensure you have this view
});

// Update route
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  await FoodLog.findByIdAndUpdate(id, req.body, { new: true });
  res.redirect(`/foodlogs/${id}`);
});

// Delete route
router.delete('/:id', async (req, res) => {
  await FoodLog.findByIdAndDelete(req.params.id);
  res.redirect('/foodlogs');
});

module.exports = router;
