angular.module('museum.controllers')

.controller("scanExhibitCtrl", function($scope, $cordovaBarcodeScanner, $state, $ionicHistory, exhibitsService, storageService) {

    var scanExhibit = {};

    $scope.exhibits = { };
    $scope.exhibits.exhibits = [];


    /**
     * Save to Array
     */
    scanExhibit.saveToArray = function(id) {
        found = false;
        angular.forEach($scope.exhibits.exhibits, function(value, key) {
            if(value.nid == id) {
                found = true;
            }
        });

        if(!found) {
            $scope.exhibits.exhibits.push(exhibitsService.getExhibitsById(id));
        }
    }


    var loadedData = storageService.loadData('exhibit_scans');
    if(!loadedData.error) {

        $scope.exhibits = loadedData;
    }


    $scope.scan = function() {
        $cordovaBarcodeScanner.scan().then(function (imageData) {
            var code = imageData.text;
            $scope.scan_result = code;

            if(code.search("exhibit") > 0) {
                code = code.replace('scan-exhibit:', '');
                scanExhibit.saveToArray(code);
                storageService.saveData('exhibit_scans', $scope.exhibits);

                $state.go("app.exhibits-detail", {exhibitId: code});
            }

            if(code.search("question") > 0) {
                code = code.replace('scan-question:', '');
                $state.go("app.question", {questionId: code});
            }




        }, function (error) {
            console.log("An error happened -> " + error);
        });
    }

    /**
     * Comment the line to disable in browser
     */
    if(window.cordova) {
        $scope.scan();
    }





});



