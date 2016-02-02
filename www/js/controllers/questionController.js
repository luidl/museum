angular.module('museum.controllers')

    .controller("questionCtrl", function($scope, $stateParams, quizService, questionService) {

        $scope.question_id = $stateParams.questionId;

    });



