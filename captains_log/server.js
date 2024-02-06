require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const Log = require('./models/logs'); // Adjust according to your model's location
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
    Log.find({})
    .then((allLogs) => {
        res.render('Index', { logs: allLogs})
    })
    .catch((err) => {
        console.error(err)
        res.status(400).json({ err })
    });
})
//New
app.get('/logs/new', (req, res) => {
    res.render('New');
  });
  
//Delete
app.delete('/logs/:id', (req, res) => {
    Log.deleteOne({ _id: req.params.id })
      .then((deleteInfo) => {
        console.log(deleteInfo)
        res.redirect('/logs'); // Redirect back to the index route after deletion
      })
      .catch(err => {
        console.error(err);
        res.status(400).json(err);
      });
  });
  
//Update
app.put('/logs/:id', (req, res) => {
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }
    Log.updateOne({ _id: req.params.id }, req.body)
        .then(updateInfo => {
            console.log(updateInfo);
            res.redirect(`/logs/${req.params.id}`);
        })
        .catch((err) => {
            console.error(err)
            res.status(400).json({ err })
        });
});
//Create
app.post('/logs', (req, res) => {
    // res.send('received')
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }
    Log.create(req.body)
        .then((createdLog) => {
            res.redirect(`/logs`)
        })
        .catch((err) => {
            console.error(err)
            res.status(400).json({ err })
        });
})
//Edit
app.get('/logs/:id/edit', (req, res) => {
    Log.findOne({ _id: req.params.id })
      .then(log => {
        res.render('Edit', { log }); // Pass the found log to the Edit component
      })
      .catch(err => {
        console.error(err);
        res.status(400).json({err});
      });
  });
//Show
app.get('/logs/:id', (req, res) => {
    Log.findOne({_id: req.params.id})
        .then((foundLog) => {
            res.render('Show', {log: foundLog})
        })
        .catch((err) => {
            console.error(err);
            res.status(400).json({ err });
        })
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));