/**
 * Created by nandu_prajapati on 16/02/2017.
 */

var myApp = angular.module('nanduApp');

myApp.controller('homeCtrl', ['$scope','$http', '$q', function ($scope, $http, $q) {
    $scope.greeting = 'Hola!';


}]);
