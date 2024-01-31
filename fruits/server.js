require('dotenv').config();
const mongoose = require('mongoose')
const express = require('express');
const app = express();
const fruits = require('./models/fruits')
const Fruit = require('./models/Fruit')
const vegetables = require('./models/vegetables')
const Vegetable = require('./models/Vegetable')

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

app.use(express.urlencoded({extended:false}));
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});
//Induces
//Index vegetables
app.get('/vegetables', function(req, res){
    res.render('vegetables/Index', { vegetables: vegetables });
});   
//New vegetables
app.get('/vegetables/new', (req, res) => {
    res.render('vegetables/New');
});
//Create vegetables
app.post('/vegetables', (req, res) => {
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true; //do some data correction
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false; //do some data correction
    }
    vegetables.push(req.body);
    console.log(vegetables);
    res.redirect('/vegetables'); //send the user back to /vegetables
});
//Show vegetables
app.get('/vegetables/:index', (req, res) => {
    res.render('vegetables/Show', { //second param must be an object
       vegetable: vegetables[req.params.index] //there will be a variable available inside the ejs file called vegetable, its value is vegetable[req.params.index]
   });
});
//Index fruits
app.get('/fruits', (req, res) =>{
    Fruit.find({})
        .then((allFruits) => {
            res.render('fruits/Index', {fruits: allFruits});
        })
        .catch((err) => console.error(err));
   
});   

//New fruits
app.get('/fruits/new', (req, res) => {
    res.render('fruits/New');
});
//Delete
//Update
//Create fruits
app.post('/fruits', (req, res) => {
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true; //do some data correction
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false; //do some data correction
    }
    Fruit.create(req.body)
        .then((createdFruit) => {
            res.redirect('./fruits')
        }) 
        .catch((err) => console.error(err));
 });
    
//Edit
//Show
//Show Fruits
app.get('/fruits/:id', (req, res) => {
    Fruit.findOne({_id: req.params.id})
    .then((foundFruit) => {
        res.render('fruits/Show', { //second param must be an object
        fruit: foundFruit 
    })
     })
     .catch(err => console.error(err))
});

app.listen(3000, () => {
    console.log('listening on 3000');
});