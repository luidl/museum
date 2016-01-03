angular.module('museum.controllers')

.controller("exhibitsDetailCtrl", function($scope, $stateParams, $http, exhibitsService, serverAddress, restEndpoint) {

    $scope.exhibit_id = $stateParams.exhibitId;
    $scope.exhibit = exhibitsService.getExhibitsById($scope.exhibit_id);

    $http.get(serverAddress + restEndpoint + '/exhibit/' + $scope.exhibit_id)
        .success(function(data) {
            $scope.sub_exhibits = data;
        });

});



