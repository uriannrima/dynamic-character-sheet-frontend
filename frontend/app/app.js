/* Modulo da Application. */
'use strict';

// Dependencias da aplicação.
var appDependencies = [
    'ngRoute',
    'ngResource',,
    'dcs-app.directives',
    'dcs-app.controllers',
    'dcs-app.services',
    'dcs-app.models',
];

// Criar aplicação.
var dcsApp = angular.module('dcs-app', appDependencies);