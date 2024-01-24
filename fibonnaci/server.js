const express = require('express');
const app = express();
const port = 3000;

// Function to check if a number is a Fibonacci number
const isFibonacci = (num) => {
    if (num === 0 || num === 1) return true;

    let a = 0;
    let b = 1;
    while (b < num) {
        [a, b] = [b, a + b];
    }
    return b === num;
};
//Route for Fibonnaci
app.get('/fibonacci', (req, res) => {
    res.send("Check if your number is a Fibonacci number.");
})
// Route to check if the given number is a Fibonacci number
app.get('/fibonacci/:number', (req, res) => {
    const num = parseInt(req.params.number);
    if (isNaN(num)) {
        res.send("Please provide a valid number.");
    } else {
        if (isFibonacci(num)) {
            res.send("Very good. It is Fibonacci.");
        } else {
            res.send("I can tell this is not a fibonacci number.");
        }
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
