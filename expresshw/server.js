const express = require('express');
const app = express();
const things = require('./models/things')
const port = 3000;

//Set jsx as the view engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//route 1
app.get('/', (req, res) => {
  res.send('This is the / page')
});
//route 2
app.get('/1', (req, res) => {
  res.send('This is the /1 page')
});
//route 3
app.get('/2', (req, res) => {
  res.send('This is the /2 page')
});
//route 4
app.get('/3', (req, res) => {
  res.send('This is the /3 page')
});
//route 5
app.get('/4', (req, res) => {
  res.send('This is the /4 page')
});
//route 6
app.get('/5', (req, res) => {
  res.send('This is the /5 page')
});
//route 7
app.get('/6', (req, res) => {
  res.send('This is the /6 page')
});
//route 8
app.get('/7', (req, res) => {
  res.send('This is the /7 page')
});
//route 9
app.get('/things', (req, res) => {
    res.render('Index', {things: things});
  });
//route 10
app.get('/things/:index', (req, res) => {
    res.render('Show', { //second param must be an object
       thing: things[req.params.index] 
   });
});

  
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });