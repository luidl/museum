angular.module('museum.controllers')

.controller("infosCtrl", function($scope, infosService) {

    $scope.infos = infosService.getInfos();

    $scope.doRefresh = function() {
        infosService.reloadData();
    }


});



