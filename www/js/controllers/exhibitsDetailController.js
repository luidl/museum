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

    $scope.gotoQuestion = function() {
        var slides_number = $ionicSlideBoxDelegate.slidesCount();
        console.log("SLIDES: ", slides_number);
        $ionicSlideBoxDelegate.slide(slides_number-1);
    }




});



