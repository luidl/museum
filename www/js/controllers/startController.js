angular.module('museum.controllers')

    .controller("startCtrl", function($scope, $ionicHistory) {



        $scope.clearHistory = function() {
            $ionicHistory.clearHistory();
            $ionicHistory.nextViewOptions({
                disableBack: true
            });
        };


    });
