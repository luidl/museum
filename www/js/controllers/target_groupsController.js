angular.module('museum.controllers')

.controller("target_groupsCtrl", function($scope, target_groupsService) {

    $scope.target_groups = target_groupsService.getTarget_groups();

    $scope.doRefresh = function() {
        target_groupsService.reloadData();
    }


});



