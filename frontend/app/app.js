/* Modulo da Application. */
'use strict';

// Dependencias da aplicação.
var appDependencies = [
    'ngRoute',
    'ngResource',
    'dcs-app.character-details'
];

// Criar aplicação.
var dcsApp = angular.module('dcs-app', appDependencies);
