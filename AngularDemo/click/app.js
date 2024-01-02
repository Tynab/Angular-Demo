angular.module('myModule', []).controller('myController', function ($scope) {
    $scope.technologies = [
        { Name: "C", Likes: 0, Dislikes: 0, Minus: 0 },
        { Name: "C++", Likes: 0, Dislikes: 0, Minus: 0 },
        { Name: "C#", Likes: 0, Dislikes: 0, Minus: 0 },
        { Name: "Objective-C", Likes: 0, Dislikes: 0, Minus: 0 }
    ]

    $scope.increaseLike = function (technology) {
        technology.Likes++
        technology.Minus = technology.Likes - technology.Dislikes
    }

    $scope.increaseDislike = function (technology) {
        technology.Dislikes++
        technology.Minus = technology.Likes - technology.Dislikes
    }
})
