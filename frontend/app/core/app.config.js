angular.
module('dcs-app').
config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.html5Mode(false).hashPrefix('!');
    }
]);
