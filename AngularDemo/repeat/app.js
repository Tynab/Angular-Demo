﻿angular.module('myModule', []).controller('myController', function ($scope) {
    $scope.employees = [
        { firstName: "Ben", lastName: "Hastings", gender: "Male", salary: 55000 },
        { firstName: "Sara", lastName: "Paul", gender: "Female", salary: 68000 },
        { firstName: "Mark", lastName: "Holland", gender: "Male", salary: 57000 },
        { firstName: "Pam", lastName: "Macintosh", gender: "Female", salary: 53000 },
        { firstName: "Todd", lastName: "Barber", gender: "Male", salary: 60000 }
    ]
})
