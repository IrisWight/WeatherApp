// MODULE
var weatherApp = angular.module('weatherApp', [ 'ngRoute' ]);

// ROUTE
weatherApp.config([ '$routeProvider', '$locationProvider', function( $routeProvider, $locationProvider ){
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/', {
            templateUrl: 'views/search.html',
            controller: 'searchController'
        })
        .when('/forecast', {
            templateUrl: 'views/forecast.html',
            controller: 'forecastController'
        })
}]);