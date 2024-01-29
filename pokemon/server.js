const express = require('express');
const app = express();
const port = 3000;
const pokemon = require('./models/pokemon')

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})
//INDUCES
app.get('/pokemon', (req, res) => {
    res.send(pokemon)
})

app.listen(port, () => {
    console.log('listening on 3000');
});