const mongoose = require('mongoose');
const FoodLog = require('./models/foodLog'); // Adjust the path as necessary
const db = 'mongodb://localhost:27017/foodLogsDb'; // Update with your MongoDB URI

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

const seedFoodLogs = [
  {
    date: new Date(),
    mealType: 'Breakfast',
    foodItems: ['Oatmeal', 'Banana'],
    calories: 350,
    notes: 'Felt energized!'
  },
  // Add more seed data as needed
];

FoodLog.insertMany(seedFoodLogs)
  .then(res => {
    console.log(res);
    mongoose.connection.close();
  })
  .catch(err => {
    console.error(err);
    mongoose.connection.close();
  });
