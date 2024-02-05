require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const methodOverride = require('method-override');
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
//Delete
app.delete('/flights/:id', (req, res) => {
    Flight.deleteOne({ _id: req.params.id })
        .then(deleteInfo => {
            console.log(deleteInfo)
            res.redirect('/flights')
        })
        .catch((err) => {
            console.error(err)
            res.status(400).json({ err })
        });
});
//Update
app.put('/flights/:id', (req, res) => {
        Flight.updateOne({ _id: req.params.id }, req.body)
        .then(updateInfo => {
            console.log(updateInfo);
            res.redirect(`/flights/${req.params.id}`);
        })
        .catch((err) => {
            console.error(err)
            res.status(400).json({ err })
        });
});
// Route to create a new flight
app.post('/flights', (req, res) => {
    const { airline, flightNo, departs, airport, destinationAirport, arrival } = req.body;
    
    const newFlightData = {
        airline,
        flightNo: Number(flightNo),
        departs,
        airport,
        destinations: [{ airport: destinationAirport, arrival }]
    };
    Flight.create(newFlightData)
        .then((createdFlight) => {
            res.redirect('/flights')
        })
        .catch((err) => {
            console.error(err)
            res.status(400).json({ err })
        });
});
//Edit
app.get('/flights/:id/edit', (req, res) => {
    Flight.findOne({ _id: req.params.id })
        .then(foundFlight => res.render('Edit',
            {
                flight: foundFlight
            }))
        .catch((err) => {
            console.error(err)
            res.status(400).json({ err })
        });
});
//Edit destination
app.put('/flights/:id/destinations', (req, res) => {
    Flight.updateOne({ _id: req.params.id }, { $push: { destinations: req.body } })
      .then(updateInfo => {
        console.log(updateInfo);
        res.redirect(`/flights/${req.params.id}`);
      })
      .catch(err => console.error(err));
  });
// Route to show details of a flight
app.get('/flights/:id', (req, res) => {
    Flight.findOne({ _id: req.params.id })
        .then((foundFlight) => {
            res.render('Show', { flight: foundFlight });
        })
        .catch((err) => {
            console.error(err);
            res.status(400).json({ err });
        })
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));