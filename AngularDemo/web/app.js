angular.module('myModule', []).controller('myController', function ($scope, $http, $log) {
    $http.get('/web/Employees.asmx/GetAll').then(
        function (response) {
            $scope.employees = response.data
        },
        function (response) {
            $log.error(response.data)
        })
})
