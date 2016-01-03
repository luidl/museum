angular.module('museum.controllers')

.controller("exhibitsCtrl", function($scope, exhibitsService) {

    $scope.exhibits = exhibitsService.getExhibits();

    $scope.doRefresh = function() {
        exhibitsService.reloadData();
    }  
});



