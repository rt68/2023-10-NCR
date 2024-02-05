require('dotenv').config();
const mongoose = require('mongoose');
const Log = require('./models/logs'); // Ensure this path is correct

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected for seeding"))
  .catch(err => console.error(err));

const seedLogs = [
  { title: 'Log 1', entry: 'First log entry', shipIsBroken: true },
  { title: 'Log 2', entry: 'Second log entry', shipIsBroken: false },
  // Add as many logs as you want
];

Log.insertMany(seedLogs)
  .then(res => {
    console.log(res);
    mongoose.connection.close();
  })
  .catch(e => {
    console.error(e);
    mongoose.connection.close();
  });
