angular.module('museum.controllers')

.controller("infosCtrl", function($scope, infosService, $ionicHistory) {

    $scope.infos = infosService.getInfos();

    $scope.doRefresh = function() {
        infosService.reloadData();
    }


});



