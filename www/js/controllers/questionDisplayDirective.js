angular.module("museum.controllers")
.directive("questionDisplay", function($timeout) {
    return {
        restrict: "E",
        templateUrl: "templates/questions-display.html",
        scope: {
            index: '=',
            id: '=questionId',
            quiz: '=quiz',
            readyCallback: '=readyCallback'
        },
        controller: function($scope, questionService, $translate) {

            var id = $scope.id;
            var max_trys = 2;
            $scope.question_done = false;
            $scope.question = questionService.getQuestionById(id);


            $scope.logged_answer = 0;
            $scope.trys = 0;

            $scope.logAnswer = function(answer_id) {
                if(!$scope.question_done) {
                    delete $scope.right;
                    $scope.logged_answer = answer_id;
                }

            }

            $scope.checkAnswer = function() {
                $scope.trys++;
                if($scope.logged_answer == $scope.question.correct) {
                    $translate('RIGHT ANSWER').then(function (message) {
                        $scope.message = message;
                    });
                    $scope.question_done = true;
                    $scope.right = true;
                } else {
                    if($scope.trys < max_trys) {
                        $translate('NOT CORRECT ANSWER').then(function (message) {
                            $scope.message = message + " ";
                        });
                    } else {
                        $translate('NOT CORRECT ANSWER WITH RESULT').then(function (message) {
                            $scope.message = message + " " + $scope.question.correct;
                        });
                    }

                    $scope.right = false;
                }

                if($scope.trys >= max_trys) {
                    $scope.question_done = true;
                }

            }

            $scope.getAnswerClass = function(answer_id) {
                var output = "";
                if($scope.logged_answer == answer_id) {
                    if($scope.hasOwnProperty('right') && $scope.right) {
                        output = "button-balanced";
                    } else if ($scope.hasOwnProperty('right') && !$scope.right) {
                        output = "button-assertive";
                    } else {
                        output = "button-positive";
                    }

                }

                return output;
            }

            $scope.messageClass = function() {
                var output = "";
                if($scope.right) {
                    output = "item-balanced";
                } else {
                    output = "item-assertive";
                }
                return output;
            }

            $scope.next = function() {
                $scope.quiz.correct = $scope.right;
                $scope.quiz.trys = $scope.trys;
            }

        }
    }

});