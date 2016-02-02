angular.module('museum.controllers')

    .controller("quizCtrl", function($scope, quizService, noQuizQuestionService) {

        $scope.quiz = quizService.getQuiz();

        $scope.doRefresh = function() {
            quizService.reloadData();
        }

        $scope.noquiz = noQuizQuestionService.getResults();


    });



