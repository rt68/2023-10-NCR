// Load express
const express = require('express');

// Create our express app
const app = express();
// Array of Magic 8 Ball responses
const responses = [
    "It is certain", "It is decidedly so", "Without a doubt", "Yes definitely",
    "You may rely on it", "As I see it yes", "Most likely", "Outlook good",
    "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later",
    "Better not tell you now", "Cannot predict now", "Concentrate and ask again",
    "Don't count on it", "My reply is no", "My sources say no",
    "Outlook not so good", "Very doubtful"
];

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
app.get('/magic/:question', (req, res) => {
    const question = req.params.question;
    const randomAnswer = responses[Math.floor(Math.random() * responses.length)];
    res.send(`<h1>Your Question: ${question}</h1> <h1>Answer: ${randomAnswer}</h1>`);
})
// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log('Listening on port 3000');
});