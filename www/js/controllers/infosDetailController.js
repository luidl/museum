angular.module('museum.controllers')

.controller("infosDetailCtrl", function($scope, $stateParams, infosService) {

    $scope.nid = $stateParams.infoId;
    $scope.info = infosService.getInfoById($scope.nid);


});



