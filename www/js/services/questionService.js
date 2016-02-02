angular.module("museum")
    .factory('questionService', function($rootScope, $http, storageService, serverAddress, restEndpoint, visitorService) {
        //Init of Service
        var question = { };
        question.questions = { };

        //Service Functions
        var service_object = {};


        /**
         * Reload the data
         */
        service_object.reloadData = function() {
            $http.get(serverAddress + restEndpoint + '/questions' + visitorService.getLanguageUrl(),
                {header : {"Content-Type" : "application/json; charset=UTF-8", "Accept-Charset":"charset=utf-8"}})
                .success(function(data) {
                    question.questions = data;
                    storageService.saveData('questions', question);
                    $rootScope.$broadcast('scroll.refreshComplete');
                });
        };

        /**
         * Getter Method
         */
        service_object.getQuestions = function() {
            question = storageService.loadData('questions', {
                update_function: service_object.reloadData
            });
            return question;
        };

        /**
         * Get Questions By  ID
         */
        service_object.getQuestionById = function(id) {

            service_object.getQuestions();

            var output = {};
            angular.forEach(question.questions, function(value, key) {
                id = Number(id);
                if(value.nid == id) {
                    output = value;
                    return;
                }
            });
            return output;
        };

        /**
         * Get Questions By Quiz ID
         */
        service_object.getQuestionsByQuizId = function(quiz_id) {

            var output = [];
            angular.forEach(question.questions, function(value, key) {
                if(value.quiz_id == quiz_id) {
                    output.push(value);
                }
            });
            return output;
        };


        return service_object;
    });