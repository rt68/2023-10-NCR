const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>99 Bottles of beer on the wall</h1> <a href="/98">Take one down, pass it around</a>');
});
app.get('/:number_of_bottles', (req, res) => {
    const numberOfBottles = parseInt(req.params.number_of_bottles);
    let content = `<h1>${numberOfBottles} Bottles of beer on the wall</h1>`;

    if (numberOfBottles > 0) {
        content += `<a href="/${numberOfBottles - 1}">Take one down, pass it around</a><br>`;
    }

    content += `<a href="/">Start Over</a>`;
    res.send(content);
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});