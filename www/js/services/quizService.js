angular.module("museum")
    .factory('quizService', function($rootScope, $http, storageService, serverAddress, restEndpoint, visitorService) {
        //Init of Service
        var quiz = { };
        quiz.data = { };

        //Service Functions
        var service_object = {};


        /**
         * Reload the data
         */
        service_object.reloadData = function() {
            $http.get(serverAddress + restEndpoint + '/quiz' + visitorService.getLanguageUrl())
                .success(function(data) {
                    quiz.data = data;
                    storageService.saveData('quiz', quiz);
                    $rootScope.$broadcast('scroll.refreshComplete');
                });
        };

        /**
         * Load Data from Sotrage or Ressource
         */
        service_object.getData = function() {
            quiz = storageService.loadData('quiz', {
                update_function: service_object.reloadData
            });
        };


        /**
         * Getter Method
         */
        service_object.getQuiz = function() {
            service_object.getData();
            return quiz;
        };


        /**
         * Get Department By ID
         */
        service_object.getQuizById = function(id) {
            //service_object.getData();
            var output = {};
            angular.forEach(quiz.data, function(value, key) {
                if(value.nid == id) {
                    output = value;
                    return;
                }
            });
            return output;
        };


        return service_object;
    });