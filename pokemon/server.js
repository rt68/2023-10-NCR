const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})
//INDUCES


app.listen(port, () => {
    console.log('listening on 3000');
});