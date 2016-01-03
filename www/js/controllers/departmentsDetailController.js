angular.module('museum.controllers')

.controller("departmentsDetailCtrl", function($scope, $stateParams, departmentsService, exhibitsService) {

    $scope.department_id = $stateParams.departmentId;
    $scope.department = departmentsService.getDepartmentById($scope.department_id);

    $scope.exhibits = exhibitsService.getExhibits();

});



