const express = require('express');
const app = express();
const things = require('./models/things')
const port = 3000;
//Set jsx as the view engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


app.get('/', (req, res) => {
    res.render('index');
  });
  
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });