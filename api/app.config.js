const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

var app = express();

// Util method to create controller.
app.createController = function (controllerName, controller) {
    app.controllers = app.controllers || {};
    app.controllers[controllerName] = controller;
}

// Configure static folder.
// app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Configure bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

// Configure cors.
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
    next();
});


module.exports = app;