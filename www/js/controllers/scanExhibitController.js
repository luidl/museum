angular.module('museum.controllers')

.controller("scanExhibitCtrl", function($scope, $cordovaBarcodeScanner, $state) {

    $cordovaBarcodeScanner.scan().then(function(imageData) {
        var code = imageData.text;
        $scope.scan_result = code;
        code = code.replace('scan-exhibit:', '');

        $state.go("app.exhibits-detail", { exhibitId: code });

    }, function(error) {
        console.log("An error happened -> " + error);
    });


});



