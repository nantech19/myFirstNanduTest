/**
 * Created by nandu_prajapati on 16/02/2017.
 */

var myApp = angular.module('nanduApp');

myApp.controller('migrationCtrl', ['$scope','$http', '$q', function ($scope, $http, $q) {
    $scope.greeting = 'Hola!';

    $scope.gridOptions1 = {
        paginationPageSizes: [25, 50, 75],
        paginationPageSize: 25,
        columnDefs: [
            { name: 'name' },
            { name: 'gender' },
            { name: 'company' }
        ]
    };

    $scope.gridOptions2 = {
        enablePaginationControls: false,
        paginationPageSize: 25,
        columnDefs: [
            { name: 'name' },
            { name: 'gender' },
            { name: 'company' }
        ]
    };

    $scope.gridOptions2.onRegisterApi = function (gridApi) {
        $scope.gridApi2 = gridApi;
    }

    $http.get('https://cdn.rawgit.com/angular-ui/ui-grid.info/gh-pages/data/100.json')
        .success(function (data) {
            $scope.gridOptions1.data = data;
            $scope.gridOptions2.data = data;
        });
}]);
