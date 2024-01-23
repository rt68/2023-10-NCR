// Load express
const express = require('express');

// Create our express app
const app = express();

// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
app.get('/', function (req, res) {
  res.send('<h1>Hello World!</h1>');
});
//Greetings
app.get('/greeting', (req, res) => {
    res.send('<h1>Hello, stranger</h1>')
});
app.get('/greeting/:name', (req, res) => {
    console.log(req.params);
    res.send('Wow, hello there, ' + req.params.name + '!');
});
//Tip Calculator
app.get('/tip/:total/:tipPercentage', (req, res) => {
    // Extract parameters from the request
    const total = parseFloat(req.params.total);
    const tipPercentage = parseFloat(req.params.tipPercentage);

    // Validate input
    if (isNaN(total) || isNaN(tipPercentage)) {
        return res.status(400).send('Invalid input');
    }

    // Calculate the tip
    const tip = total * (tipPercentage / 100);

    // Send the result back
    res.send(`Your tip is: $${tip.toFixed(2)}`);
});
// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log('Listening on port 3000');
});