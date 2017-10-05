// Configure "common" alias.
require('app-module-path').addPath('../common');

// Usar API Morgan Logger.
var morgan = require('morgan');

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

var app = express();

// log every req to the console
app.use(morgan('dev'));

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
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true,
    limit: '50mb'
}));

// Configure cors.
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
    next();
});

module.exports = app;