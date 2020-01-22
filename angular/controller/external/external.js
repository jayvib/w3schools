
// Get the app boject
// define the controller
// define the firstName, lastname and the fullname function
var app = angular.module('myApp', []);
app.controller("personCtrl", function($scope){
    $scope.firstname = "Luffy";
    $scope.lastname = "Monkey";
    $scope.fullName = function() {
        return $scope.firstname + " " + $scope.lastname
    }
});

