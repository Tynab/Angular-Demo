angular.module('myModule', []).controller('myController', function ($scope) {
    $scope.message = ''
}).directive('directiveTitle', function () {
    return {
        templateUrl: "directive.html"
    }
})
