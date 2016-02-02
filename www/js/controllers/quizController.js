angular.module('museum.controllers')

    .controller("quizCtrl", function($scope, quizService) {

        $scope.quiz = quizService.getQuiz();

        $scope.doRefresh = function() {
            quizService.reloadData();
        }


    });



