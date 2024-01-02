var app = angular.module('myModule', [])

app.controller('myController', function ($rootScope) {
    $rootScope.name = 'YAN'
})

app.controller('mainController', function ($rootScope) {
    $rootScope.name = 'Tynab'
})

app.controller('firstController', function () {
})

app.controller('secondController', function ($scope) {
    $scope.name = 'Yami An'
})


app.controller('thirdController', function ($scope) {
    $scope.name = 'Nephilim'
})
