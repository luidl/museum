angular.module('museum.controllers')

.controller("exhibitsCtrl", function($scope, exhibitsService) {

   $scope.number = 1;
    
    $scope.plusEins = function() {
        $scope.number++;
    }
   $scope.Reset = function() {
        $scope.number = 0;
    }
   $scope.minusEins = function() {
        $scope.number--;
    }

   
   
/*   $scope.departures = {
	"departures": [
		{
			"line": "20",
			"destination": "Karlsplatz (Stachus)",
			"time": 1450000230000,
			"type": "TRAM"
		}, {
			"line": "20",
			"destination": "Moosach Bf.",
			"time": 1450000230000,
			"type": "TRAM"
		}, {
			"line": "20",
			"destination": "Karlsplatz (Stachus)",
			"time": 1450000830000,
			"type": "TRAM"
		}, {
			"line": "20",
			"destination": "Moosach Bf.",
			"time": 1450000830000,
			"type": "TRAM"
		}, {
			"line": "20",
			"destination": "Moosach Bf.",
			"time": 1450001430000,
			"type": "TRAM"
		}, {
			"line": "20",
			"destination": "Karlsplatz (Stachus)",
			"time": 1450001430000,
			"type": "TRAM"
		}, {
			"line": "20",
			"destination": "Karlsplatz (Stachus)",
			"time": 1450002030000,
			"type": "TRAM"
		}, {
			"line": "20",
			"destination": "Moosach Bf.",
			"time": 1450002030000,
			"type": "TRAM"
		}, {
			"line": "20",
			"destination": "Karlsplatz (Stachus)",
			"time": 1450002630000,
			"type": "TRAM"
		}, {
			"line": "20",
			"destination": "Moosach Bf.",
			"time": 1450002630000,
			"type": "TRAM"
		}, {
			"line": "20",
			"destination": "Karlsplatz (Stachus)",
			"time": 1450003230000,
			"type": "TRAM"
		}, {
			"line": "20",
			"destination": "Moosach Bf.",
			"time": 1450003230000,
			"type": "TRAM"
		}, {
			"line": "20",
			"destination": "Moosach Bf.",
			"time": 1450003830000,
			"type": "TRAM"
		}, {
			"line": "20",
			"destination": "Karlsplatz (Stachus)",
			"time": 1450003830000,
			"type": "TRAM"
		}, {
			"line": "20",
			"destination": "Karlsplatz (Stachus)",
			"time": 1450004430000,
			"type": "TRAM"
		}
	]
}
 */  
   
/*
   $scope.exhibits = 
    {"exhibits": [
       {
           "title": "<a href=\"\/node\/1\" hreflang=\"de\">Das 1. Exponat<\/a>",
           "body": "<p>Irgendwas braucht man ja zum Ausprobieren.<\/p>"
       },
       {
           "title": "<a href=\"\/node\/2\" hreflang=\"de\">Das 2. Exponat<\/a>",
           "body": "<p>F\u00fcr eine Liste braucht man mehr als einen Eintrag.<\/p>"
       }
   ]
       
   };
*/
   
   
   
    $scope.exhibits = exhibitsService.getExhibits();

    $scope.doRefresh = function() {
        exhibitsService.reloadData();
    }  
});



