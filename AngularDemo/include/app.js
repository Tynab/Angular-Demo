angular.module('myModule', []).controller('myController', function ($scope) {
    $scope.employees = [
        { name: 'hải', dob: new Date('1989/12/03'), salary: 15000000, gender: 'male', status: true },
        { name: 'hoàng', dob: new Date('1990/06/15'), salary: 12000000, gender: 'male', status: true },
        { name: 'long', dob: new Date('1992/01/14'), salary: 17000000, gender: 'male', status: false },
        { name: 'trung', dob: new Date('1993/11/04'), salary: 12000000, gender: 'male', status: true },
        { name: 'hương', dob: new Date('1995/10/05'), salary: 11000000, gender: 'female', status: false },
        { name: 'thủy', dob: new Date('1988/09/06'), salary: 10000000, gender: 'female', status: true },
    ]

    $scope.sortColumn = 'name'
    $scope.reverse = false
    $scope.searchText = ''
    $scope.hideSalary = true
    $scope.employeeView = 'listEmployee.html'

    $scope.sortData = function (column) {
        $scope.reverse = $scope.sortColumn == column ? !$scope.reverse : $scope.column = false
        $scope.sortColumn = column
    }

    $scope.getSortClass = function (column) {
        return $scope.sortColumn == column ? $scope.reverse ? 'arrow-up' : 'arrow-down' : ''
    }
}).filter('status', function () {
    return function (input) {
        return input ? 'Enable' : 'Disable'
    }
})
