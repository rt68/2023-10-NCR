/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
require('dotenv').config();
require('./config/connection.js');
// const mongoose = require('mongoose')
const express = require('express');
const path = require('path');
const middleware = require("./utils/middleware");

// const fruits = require('./models/fruits')
// const Fruit = require('./models/Fruit')
// const vegetables = require('./models/vegetables')
const Vegetable = require('./models/Vegetable')
const methodOverride = require('method-override');

// const morgan = require('morgan');
// const session = require("express-session");
// const MongoStore = require("connect-mongo");
// const startFruits = require('./models/fruitseed.js')

/////////////////////////////////////////////////
// Create our Express Application Object Bind Liquid Templating Engine
/////////////////////////////////////////////////
const app = express();
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

/////////////////////////////////////////////
// Database Connection
/////////////////////////////////////////////
// Setup inputs for our connect function
// mongoose.connect(process.env.MONGO_URI);

// Events for when connection opens/disconnects/errors
// mongoose.connection
//     .on("open", () => console.log("Connected to Mongoose"))
//     .on("close", () => console.log("Disconnected from Mongoose"))
//     .on("error", (error) => console.error(error));

/////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////
middleware(app);
// app.use(morgan("tiny")); //logging
// app.use(express.urlencoded({ extended: true }));  // parse urlencoded request bodies
// app.use(methodOverride('_method'));// override for put and delete requests from forms
// app.use(express.static("public")); // serve files from public statically
// // middleware to setup session
// app.use(
//     session({
//       secret: process.env.SECRET,
//       store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
//       saveUninitialized: true,
//       resave: false,
//     })
//   );
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});
////////////////////////////////////////////
// Routes
////////////////////////////////////////////
app.get("/", (req, res) => {
    res.render('Home.jsx');
});
const fruitsController = require('./controllers/fruitsController.js');
app.use('/fruits', fruitsController);
const usersController = require("./controllers/usersController");
app.use('/users', usersController);
//Seed Route
// app.get('/fruits/seed', (req, res) => {
//     // array of starter fruits
//     // const startFruits = [
//     //     { name: "Orange", color: "orange", readyToEat: false },
//     //     { name: "Grape", color: "purple", readyToEat: false },
//     //     { name: "Banana", color: "orange", readyToEat: false },
//     //     { name: "Strawberry", color: "red", readyToEat: false },
//     //     { name: "Coconut", color: "brown", readyToEat: false },
//     // ];
//     Fruit.deleteMany({})
//         .then(data => {
//             Fruit.insertMany(startFruits)
//                 .then(createdFruits => res.redirect('/fruits'))
//                 .catch(err => console.error(err));
//         })
//         .catch((err) => {
//             console.error(err)
//             res.status(400).json({ error })
//           });
// })
//Induces
//Index vegetables
// app.get('/vegetables', function(req, res){
//     res.render('vegetables/Index', { vegetables: vegetables });
// });   
app.get('/vegetables', (req, res) => {
    Vegetable.find({})
        .then((allVegetables) => {
            res.render('vegetables/Index', { vegetables: allVegetables });
        })
        .catch((err) => console.error(err));

});
//New vegetables
app.get('/vegetables/new', (req, res) => {
    res.render('vegetables/New');
});

//Create vegetables
// app.post('/vegetables', (req, res) => {
//     if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
//         req.body.readyToEat = true; //do some data correction
//     } else { //if not checked, req.body.readyToEat is undefined
//         req.body.readyToEat = false; //do some data correction
//     }
//     vegetables.push(req.body);
//     console.log(vegetables);
//     res.redirect('/vegetables'); //send the user back to /vegetables
// });
app.post('/vegetables', (req, res) => {
    if (req.body.readyToEat === 'on') { //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true; //do some data correction
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false; //do some data correction
    }
    Vegetable.create(req.body)
        .then((createdVegetable) => {
            res.redirect('/vegetables')
        })
        .catch((err) => console.error(err));
});
//Edit vegetables
// app.get('/vegetables/:id/edit', (req, res)=>{
//     Vegetable.findOne( { _id: req.params.id}) 
//     .then(foundVegetable => res.render('vegetables/Edit', 
//     {
//         vegetable: foundVegetable
//     }))
//     .catch(err => console.error(err));
// });  
//Show vegetables
// app.get('/vegetables/:index', (req, res) => {
//     res.render('vegetables/Show', { //second param must be an object
//        vegetable: vegetables[req.params.index] //there will be a variable available inside the ejs file called vegetable, its value is vegetable[req.params.index]
//    });
// });
app.get('/vegetables/:id', (req, res) => {
    Vegetable.findOne({ _id: req.params.id })
        .then((foundVegetable) => {
            res.render('vegetables/Show', { //second param must be an object
                vegetable: foundVegetable
            })
        })
        .catch(err => console.error(err))
});

// //Index fruits
// app.get('/fruits', (req, res) => {
//     Fruit.find({})
//         .then((allFruits) => {
//             res.render('fruits/Index', { fruits: allFruits });
//         })
//         .catch((err) => {
//             console.error(err)
//             res.status(400).json({ error })
//         });

// });

// //New fruits
// app.get('/fruits/new', (req, res) => {
//     res.render('fruits/New');
// });
// //Delete
// app.delete('/fruits/:id', (req, res) => {
//     Fruit.deleteOne({ _id: req.params.id })
//         .then(deleteInfo => {
//             console.log(deleteInfo)
//             res.redirect('/fruits')
//         })
//         .catch((err) => {
//             console.error(err)
//             res.status(400).json({ error })
//         });
// });
// //Update
// app.put('/fruits/:id', (req, res) => {
//     if (req.body.readyToEat === 'on') {
//         req.body.readyToEat = true;
//     } else {
//         req.body.readyToEat = false;
//     }
//     Fruit.updateOne({ _id: req.params.id }, req.body)
//         .then(updateInfo => {
//             console.log(updateInfo);
//             res.redirect(`/fruits/${req.params.id}`);
//         })
//         .catch((err) => {
//             console.error(err)
//             res.status(400).json({ error })
//         });
// });
// //Create fruits
// app.post('/fruits', (req, res) => {
//     if (req.body.readyToEat === 'on') { //if checked, req.body.readyToEat is set to 'on'
//         req.body.readyToEat = true; //do some data correction
//     } else { //if not checked, req.body.readyToEat is undefined
//         req.body.readyToEat = false; //do some data correction
//     }
//     Fruit.create(req.body)
//         .then((createdFruit) => {
//             res.redirect('/fruits')
//         })
//         .catch((err) => {
//             console.error(err)
//             res.status(400).json({ error })
//         });
// });

// //Edit
// app.get('/fruits/:id/edit', (req, res) => {
//     Fruit.findOne({ _id: req.params.id })
//         .then(foundFruit => res.render('fruits/Edit',
//             {
//                 fruit: foundFruit
//             }))
//         .catch((err) => {
//             console.error(err)
//             res.status(400).json({ error })
//         });
// });
// //Show
// //Show Fruits
// app.get('/fruits/:id', (req, res) => {
//     Fruit.findOne({ _id: req.params.id })
//         .then((foundFruit) => {
//             res.render('fruits/Show', { //second param must be an object
//                 fruit: foundFruit
//             })
//         })
//         .catch((err) => {
//             console.error(err)
//             res.status(400).json({ error })
//         });
// });

//////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////
const PORT = process.env.PORT;
app.listen(PORT || 3000, () => console.log(`Now Listening on port ${PORT}`));
