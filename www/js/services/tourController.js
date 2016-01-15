angular.module('museum.controllers')

.controller("tourCtrl", function($scope, $stateParams, toursService) {

    $scope.tour_id = $stateParams.tourId;
    $scope.tour = toursService.getTourById($scope.tour_id);

    $scope.tours = toursService.getTours();

});



