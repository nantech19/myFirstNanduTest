/**
 * Created by nandu_prajapati on 16/02/2017.
 */

var myApp = angular.module('nanduApp');

myApp.controller('homeCtrl', ['$scope','$http', '$q', function ($scope, $http, $q) {
    $scope.greeting = 'Hola!';

    $scope.tabs = [
        { title:'Dynamic Title 1', content:'Dynamic content 1' },
        { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
      ];

      $scope.alertMe = function() {
        setTimeout(function() {
          $window.alert('You\'ve selected the alert tab!');
        });
      };

      $scope.model = {
        name: 'Tabs'
      };


}]);
