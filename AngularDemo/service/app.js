var app = angular.module('myModule', [])

app.controller('myController', function ($scope, myService) {
    $scope.transformString = function (input) {
        $scope.output = myService.transformString(input)
    }
})
