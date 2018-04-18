
const express = require('express');
const bp = require('body-parser');

const app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bp.urlencoded({ extended: true}));
app.use(bp.json());

app.get('/', function (req, res) {
    res.send('<h1>Hello Monde</h1>')
})

app.listen(PORT, function () {
  console.log("I'm Listening...")  
})