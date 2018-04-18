
const express = require('express');
const bp = require('body-parser');
const path = require('path');

const app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bp.urlencoded({ extended: true}));
app.use(bp.json());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"))
})

app.get('/makereservation', function (req, res) {
    res.sendFile(path.join(__dirname, "make.html"))
})

app.get('/makereservation', function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.listen(PORT, function () {
  console.log("I'm Listening...")  
})

var tables = [
    {
       name:'Rick',
       phone: 5556762359,
       email: 'rick@planetc128.net',
       nameId: 'wldd' 
    },
    {
        name: 'Summer',
        phone: 5556762359,
        email: 'summer@planetc128.net',
        nameId: 'asif'
    },
    {
        name: 'Morty',
        phone: 5556762359,
        email: 'morty@planetc128.net',
        nameId: 'awwgeez'
    },
];

app.post('/reserve', function (req, res) {
    
    var newReservation = req.body;
    
     // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

    console.log(newReservation);
    res.json(newReservation)
})