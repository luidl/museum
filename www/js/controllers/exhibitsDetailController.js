angular.module('museum.controllers')

.controller("exhibitsDetailCtrl", function($scope, $stateParams, $http, $ionicSlideBoxDelegate, $ionicNavBarDelegate, exhibitsService, serverAddress, restEndpoint) {

    $scope.exhibit_id = $stateParams.exhibitId;
    $scope.exhibit = exhibitsService.getExhibitsById($scope.exhibit_id);

    $ionicNavBarDelegate.title($scope.exhibit.titel);

    $http.get(serverAddress + restEndpoint + '/exhibit/' + $scope.exhibit_id)
    .success(function(data) {
        $scope.sub_exhibits = data;
        $ionicSlideBoxDelegate.$getByHandle('info-viewer').update();
    });




});



