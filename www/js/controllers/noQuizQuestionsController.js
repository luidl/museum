angular.module('museum.controllers')

    .controller("noQuizQuestionCtrl", function($scope, $stateParams, noQuizQuestionService) {


        $scope.results = noQuizQuestionService.getResults();

        $scope.getHeight = function(result_number) {
            var height = 300;
            var percent = result_number / $scope.results.questions;

            return Math.round(height * percent);
        }

        $scope.getQuestionsCorrect = function() {
            $scope.correctStyle = { "height": $scope.getHeight($scope.results.correct)+'px' };
            $scope.failStyle = { "height": $scope.getHeight($scope.results.fails)+'px' };
        }


    });



