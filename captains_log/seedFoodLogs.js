require('dotenv').config();
const mongoose = require('mongoose');
const FoodLog = require('./models/foodLog'); // Adjust the path as necessary

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected for seeding"))
    .catch(err => console.error(err));



const seedFoodLogs = [
    {
        date: new Date(),
        mealType: 'Breakfast',
        foodItems: ['Oatmeal', 'Banana'],
        calories: 350,
        notes: 'Felt energized!'
    },
    {
        date: new Date(),
        mealType: 'Breakfast',
        foodItems: ['Oatmeal', 'Blueberries', 'Honey'],
        calories: 300,
        notes: 'Feeling great after this meal!'
    },
    {
        date: new Date(),
        mealType: 'Lunch',
        foodItems: ['Grilled Chicken Salad', 'Avocado'],
        calories: 450,
        notes: 'Light and refreshing, perfect for midday.'
    },
    {
        date: new Date(),
        mealType: 'Dinner',
        foodItems: ['Salmon', 'Quinoa', 'Steamed Broccoli'],
        calories: 600,
        notes: 'Rich in proteins and greens.'
    },
    {
        date: new Date(),
        mealType: 'Snack',
        foodItems: ['Greek Yogurt', 'Mixed Nuts'],
        calories: 200,
        notes: 'Quick protein snack.'
    },
    {
        date: new Date(),
        mealType: 'Breakfast',
        foodItems: ['Scrambled Eggs', 'Whole Wheat Toast', 'Orange Juice'],
        calories: 350,
        notes: 'Energizing start to the day.'
    },
    {
        date: new Date(),
        mealType: 'Lunch',
        foodItems: ['Turkey Sandwich', 'Apple Slices'],
        calories: 400,
        notes: 'Simple and satisfying.'
    },
    {
        date: new Date(),
        mealType: 'Dinner',
        foodItems: ['Beef Stir-fry', 'Brown Rice'],
        calories: 500,
        notes: 'A bit heavy but very fulfilling.'
    },
    {
        date: new Date(),
        mealType: 'Snack',
        foodItems: ['Carrot Sticks', 'Hummus'],
        calories: 150,
        notes: 'Healthy veggie snack.'
    },
    {
        date: new Date(),
        mealType: 'Breakfast',
        foodItems: ['Pancakes', 'Maple Syrup', 'Bacon'],
        calories: 600,
        notes: 'Weekend treat!'
    },
    {
        date: new Date(),
        mealType: 'Lunch',
        foodItems: ['Caesar Salad', 'Iced Tea'],
        calories: 350,
        notes: 'Refreshing and light.'
    }
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
