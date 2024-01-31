require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 3000;
const pokemons = require('./models/pokemons')
const Pokemon = require('./models/Pokemon')

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

mongoose.connect(process.env.MONGO_URI);
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

app.use(express.urlencoded({extended:false}));
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})
//Seed Route
app.get('/pokemon/seed', (req, res) => {
    Pokemon.insertMany([
            {name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur"},
            {name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur"},
            {name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur"},
            {name: "charmander", img: "http://img.pokemondb.net/artwork/charmander"},
            {name: "charizard", img: "http://img.pokemondb.net/artwork/charizard"},
            {name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle"},
            {name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle"}
         ])
})
//INDUCES
//Index
app.get('/pokemon', (req, res) =>{
    Pokemon.find({})
        .then((allPokemons) => {
            res.render('Index', {pokemons: allPokemons});
        })
        .catch((err) => console.error(err));
   
});   
// app.get('/pokemon', (req, res) => {
//     res.render('Index', {pokemons: pokemons})
// })
//New
app.get('/pokemon/new', (req, res) => {
    res.render('New');
})
//Create
app.post('/pokemon', (req, res) => {
        Pokemon.create(req.body)
        .then((createdPokemon) => {
            res.redirect('/pokemon')
        }) 
        .catch((err) => console.error(err));
 });
//Show
app.get('/pokemon/:id', (req, res) => {
    Pokemon.findOne({_id: req.params.id})
    .then((foundPokemon) => {
        res.render('Show', { //second param must be an object
        pokemon: foundPokemon 
    })
     })
     .catch(err => console.error(err))
});
// app.get('/pokemon/:id', (req, res) => {
//     res.render('Show', {pokemon: pokemons[req.params.id]})
// })
app.listen(port, () => {
    console.log('listening on 3000');
});