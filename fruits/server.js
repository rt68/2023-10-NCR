const express = require('express');
const app = express();
const fruits = require('./models/fruits')
const vegetables = require('./models/vegetables')

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
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
app.get('/fruits', function(req, res){
    res.render('fruits/Index', { fruits: fruits });
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
    fruits.push(req.body);
    console.log(fruits);
    res.redirect('/fruits'); //send the user back to /fruits
});
//Edit
//Show
//Show Fruits
app.get('/fruits/:index', (req, res) => {
     res.render('fruits/Show', { //second param must be an object
        fruit: fruits[req.params.index] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
    });
});

app.listen(3000, () => {
    console.log('listening on 3000');
});