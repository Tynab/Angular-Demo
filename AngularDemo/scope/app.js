var myApp = angular.module('myModule', [])

myApp.controller('myController', function ($rootScope) {
    $rootScope.name = 'YAN'
})

myApp.controller('mainController', function ($rootScope) {
    $rootScope.name = 'Tynab'
})

myApp.controller('firstController', function () {
})

myApp.controller('secondController', function ($scope) {
    $scope.name = 'Yami An'
})


myApp.controller('thirdController', function ($scope) {
    $scope.name = 'Nephilim'
})
