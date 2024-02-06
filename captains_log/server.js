require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const logsController = require('./controllers/logs')
const foodlogsController = require('./controllers/foodlogs')
//Set view engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI);
// Events for when connection opens/disconnects/errors
mongoose.connection
    .on("open", () => console.log("Connected to Mongoose"))
    .on("close", () => console.log("Disconnected from Mongoose"))
    .on("error", (error) => console.error(error));
//Middleware to parse request body
app.use(methodOverride('_method'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});


// Use logsController
app.use('/', logsController);
app.use('/foodlogs', foodlogsController)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));