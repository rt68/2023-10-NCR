const express = require('express');
const app = express();
const port = 3000;
const pokemons = require('./models/pokemons')

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({extended:false}));
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})
//INDUCES
app.get('/pokemon', (req, res) => {
    res.render('Index', {pokemons: pokemons})
})
app.get('/pokemon/:id', (req, res) => {
    res.render('Show', {pokemon: pokemons[req.params.id]})
})
app.listen(port, () => {
    console.log('listening on 3000');
});