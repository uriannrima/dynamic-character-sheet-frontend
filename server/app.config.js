// Configure "common" alias.
require('app-module-path').addPath('../common');

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

var app = express();

app.create = function (type, name, instance) {
    app[type] = app[type] || {};
    app[type][name] = instance;
}

// Util method to create services.
app.createService = function (serviceName, service) {
    app.create('services', serviceName, service);
}

// Util method to create controllers.
app.createController = function (controllerName, controller) {
    app.create('controllers', controllerName, controller);
}

// Configure static folder.
app.use(express.static(path.join(__dirname, '../public')));

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