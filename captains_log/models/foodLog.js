const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const foodLogSchema = new Schema({
  date: { type: Date, required: true },
  mealType: { type: String, enum: ['Breakfast', 'Lunch', 'Dinner', 'Snack'], required: true },
  foodItems: [{ type: String }],
  calories: Number,
  notes: String
}, { timestamps: true });

const FoodLog = model('FoodLog', foodLogSchema);

module.exports = FoodLog;
