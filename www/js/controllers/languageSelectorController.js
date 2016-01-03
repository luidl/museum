angular.module('museum.controllers')

.controller("languageSelectorCtrl", function($scope, $state, visitorService, $translate, $ionicHistory) {

    $scope.setLanguage = function(country) {

        $translate.use(country);

        visitorService.setLanguage(country);

        $ionicHistory.currentView($ionicHistory.backView());
        $state.go("app.start", {}, {location:'replace'});


    }

});



