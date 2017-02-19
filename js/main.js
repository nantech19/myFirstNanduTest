
// app.js
var nanduApp = angular.module('nanduApp', ['ui.router','ui.grid','ui.grid.pagination']);

nanduApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/index.html');

    $stateProvider
        .state('migration', {
            url: '/migrates',
            templateUrl: './components/migration/migrationflow.html',
            controller: 'migrationCtrl'
        })

        .state('transfer', {
            url: '/transfers',
            templateUrl: './components/transfer/transferflow.html',
            controller: 'transferCtrl'
        })
    .state('main', {
        url: '/home',
        templateUrl: './components/home/home.html',
        controller: 'homeCtrl'
    });

});