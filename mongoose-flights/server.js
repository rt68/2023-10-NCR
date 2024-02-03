require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();

const Flight = require('./models/Flight'); // Adjust according to your model's location
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
// Route to list all flights
app.get('/flights', (req, res) => {
    Flight.find({}).sort('departs')
        .then((allFlights) => {
            res.render('Index', { flights: allFlights });
        })
        .catch((err) => {
            console.error(err)
            res.status(400).json({ err })
        });
});
//New flight
app.get('/flights/new', (req, res) => {
    const newFlight = new Flight(); // This creates a new flight instance using your Mongoose model
    const departsDate = newFlight.departs.toISOString().slice(0, 16); // Formats the default date
    res.render('New', { departsDate });
});
// Route to create a new flight
app.post('/flights', (req, res) => {
    Flight.create(req.body)
        .then((createdFlight) => {
            res.redirect('/flights')
        })
        .catch((err) => {
            console.error(err)
            res.status(400).json({ err })
        });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));