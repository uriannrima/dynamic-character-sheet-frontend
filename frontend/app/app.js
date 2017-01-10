/* Modulo da Application. */
'use strict';

// Dependencias da aplicação.
var appDependencies = [
    'ngRoute',
    'ngResource',
    'dcs-app.character-details',
    'dcs-app.character-sheet',
    'dcs-app.ability-scores',
    'dcs-app.vital-scores'
];

// Criar aplicação.
var dcsApp = angular.module('dcs-app', appDependencies);
