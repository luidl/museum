angular.module('museum.controllers')

    .controller("quizDetailCtrl", function($scope, $stateParams, quizService, questionService) {

        $scope.quiz_id = $stateParams.quizId;
        $scope.quiz = quizService.getQuizById($scope.quiz_id);

        var question_ids = $scope.quiz.questions.split(",");

        $scope.questions = [];
        $scope.results = [];

        $scope.currentQuestion = 0;

        $scope.shuffleArray = function(o){
            for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
            return o;
        }

        angular.forEach(question_ids, function(value, key) {
            $scope.questions.push(questionService.getQuestionById(value));
            $scope.results.push({ quiz_id: value.nid, trys: 0, done: false, correct: false });
        });

        $scope.questions = $scope.shuffleArray($scope.questions);

        console.log($scope.questions);
        //$scope.exhibits = exhibitsService.getExhibits();

        $scope.isShown = function(question_id) {
            if($scope.currentQuestion == question_id) {
                return true;
            }
            return false;
        }

        $scope.next = function() {
            $scope.currentQuestion++;
        }


        $scope.getHeight = function(result_number) {
            var height = 300;
            var percent = result_number / $scope.questions.length;

            return Math.round(height * percent);
        }


        $scope.getQuestionsCorrect = function() {
            var correct = 0;
            var fails = 0;
            $scope.results.trys = 0;
                angular.forEach($scope.results, function(value, key) {
                if(value.correct) {
                    correct++;
                } else {
                    fails++;
                }
                $scope.results.trys += value.trys;
            });
            $scope.results.correct = correct;
            $scope.results.fails = fails;

            $scope.correctStyle = { "height": $scope.getHeight(correct)+'px' };
            $scope.failStyle = { "height": $scope.getHeight(fails)+'px' };
        }



    });



