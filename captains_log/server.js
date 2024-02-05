require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const methodOverride = require('method-override');
// const Flight = require('./models/Flight'); // Adjust according to your model's location
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
////////////////////////////////////////////
// Routes
////////////////////////////////////////////
app.get("/", (req, res) => {
    res.send("your server is running... better catch it.");
});
//Induces
//Index
app.get("/logs", (req, res) => {
    res.send("new")
})
//New
app.get('/logs/new', (req, res) => {
    res.render('New');
  });
  
//Delete
//Update
//Create
app.post('/logs', (req, res) => {
    // res.send('received')
    if (req.body.shipIsBroken) {
        req.body.shipIsBroken = req.body.shipIsBroken === 'on' ? true : false;
    }
    res.send(req.body)
})
//Edit
//Show

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));