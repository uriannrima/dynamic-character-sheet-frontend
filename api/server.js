const express = require('express');
const bodyParser = require('body-parser');

var generateGuid = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

// Allow cors, just for test.
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
    next();
});

// Our stateless DB. :D
var characters = [];

app.get('/api/characters', function (req, res) {
    res.json(characters);
});

app.post('/api/characters', function (req, res) {
    var character = req.body.character;
    if (character.id) {
        const indexOfCharacter = characters.map(char => char.id).indexOf(character.id);
        characters[indexOfCharacter] = character;
    } else {
        character.id = generateGuid();
        characters.push(character);
    }
    res.json(character);
});

app.listen(3003, function () {
    console.log('Listening to ' + 3003);
});