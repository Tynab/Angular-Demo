angular.module('repeatModule', []).controller('repeatController', function ($scope) {
    $scope.countries = [
        {
            name: "UK",
            cities: [
                { name: "London" },
                { name: "Birmingham" },
                { name: "Manchester" }
            ]
        }, {
            name: "USA",
            cities: [
                { name: "Los Angeles" },
                { name: "Chicago" },
                { name: "Houston" }
            ]
        }, {
            name: "India",
            cities: [
                { name: "Hyderabad" },
                { name: "Chennai" },
                { name: "Mumbai" }]
        }
    ]
})
