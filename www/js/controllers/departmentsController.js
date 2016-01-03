angular.module('museum.controllers')

.controller("departmentsCtrl", function($scope, departmentsService) {

    $scope.departments = departmentsService.getDepartments();

    $scope.doRefresh = function() {
        departmentsService.reloadData();
    }


});



