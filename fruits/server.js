require('dotenv').config();
const mongoose = require('mongoose')
const express = require('express');
const app = express();
const fruits = require('./models/fruits')
const Fruit = require('./models/Fruit')
const vegetables = require('./models/vegetables')
const Vegetable = require('./models/Vegetable')
const methodOverride = require('method-override');

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

mongoose.connect(process.env.MONGO_URI);
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});
//Seed Route
app.get('/fruits/seed', (req, res)=>{
    Fruit.insertMany([
        {
            name:'grapefruit',
            color:'pink',
            readyToEat:true
        },
        {
            name:'grape',
            color:'purple',
            readyToEat:false
        },
        {
            name:'avocado',
            color:'green',
            readyToEat:true
        }
    ])
    .then(createdFruits => res.redirect('/fruits'))
    .catch(err => console.error(err));
});
//Induces
//Index vegetables
// app.get('/vegetables', function(req, res){
//     res.render('vegetables/Index', { vegetables: vegetables });
// });   
app.get('/vegetables', (req, res) =>{
    Vegetable.find({})
        .then((allVegetables) => {
            res.render('vegetables/Index', {vegetables: allVegetables});
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
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
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
    Vegetable.findOne({_id: req.params.id})
    .then((foundVegetable) => {
        res.render('vegetables/Show', { //second param must be an object
        vegetable: foundVegetable 
    })
     })
     .catch(err => console.error(err))
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
app.delete('/fruits/:id', (req, res)=>{
    Fruit.deleteOne({_id: req.params.id})
    .then(deleteInfo => {
        console.log(deleteInfo)
        res.redirect('/fruits')
    })
    .catch(err => console.error(err))
});
//Update
app.put('/fruits/:id', (req, res)=>{
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    Fruit.updateOne({ _id: req.params.id}, req.body)
        .then(updateInfo => {
            console.log(updateInfo);
            res.redirect(`/fruits/${req.params.id}`);
    })
    .catch(err => console.error(err))
});
//Create fruits
app.post('/fruits', (req, res) => {
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true; //do some data correction
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false; //do some data correction
    }
    Fruit.create(req.body)
        .then((createdFruit) => {
            res.redirect('/fruits')
        }) 
        .catch((err) => console.error(err));
 });
    
//Edit
app.get('/fruits/:id/edit', (req, res)=>{
    Fruit.findOne( { _id: req.params.id}) 
    .then(foundFruit => res.render('fruits/Edit', 
    {
        fruit: foundFruit
    }))
    .catch(err => console.error(err));
});
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