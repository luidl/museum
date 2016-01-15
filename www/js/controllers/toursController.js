angular.module('museum.controllers')

.controller("toursCtrl", function($scope, $stateParams, toursService, target_groupsService) {

    $scope.tours = toursService.getTours();

    $scope.target_group_id = $stateParams.target_groupId;
    $scope.target_group = target_groupsService.getTarget_groupById($scope.target_group_id);

    
    $scope.doRefresh = function() {
        toursService.reloadData();
    }


});



