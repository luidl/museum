angular.module("museum")
    .factory('noQuizQuestionService', function($rootScope, $http, storageService) {

        //Service Functions
        var service_object = {};

        var data = {};
        data.correct = 0;
        data.fails = 0;
        data.trys = 0;


        var loaded_data = storageService.loadData('noquizquestion');
        console.log("DATA LOADED", loaded_data);
        if(!loaded_data.hasOwnProperty('error')) {
            data = loaded_data;
        }

        storageService.setKeySettings('', {expiry: 60*3}); // gilt 3h

        service_object.save = function() {
            storageService.saveData('noquizquestion', data);
        }

        /**
         * Setter Method
         */
        service_object.addCorrect= function() {
            data.correct++;
            service_object.save();
        };

        /**
         * Setter Method
         */
        service_object.addFail= function() {
            data.fails++;
            service_object.save();
        };

        /**
         * Setter Method
         */
        service_object.addTrys = function(additional_trys) {
            data.trys += additional_trys;
            service_object.save();
        };

        /**
         * Getter Method
         */
        service_object.getResults = function() {
            data.questions = data.correct + data.fails;
            return data;
        };

        return service_object;
    });