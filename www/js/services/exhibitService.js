angular.module("museum")
    .factory('exhibitsService', function($rootScope, $http, storageService, serverAddress, restEndpoint) {
        //Init of Service
        var exhibits = { };
        exhibits.exhibits = { };
        
        //Service Functions
        var service_object = {};
    
      
        /**
         * Reload the data
         */
        service_object.reloadData = function() {
          $http.get(serverAddress + restEndpoint + '/exponate')
            .success(function(data) {
                exhibits.exhibits = {"exhibits": data };
                storageService.saveData('exhibits', exhibits);
                $rootScope.$broadcast('scroll.refreshComplete');
            });
        };
        
        
        /**
         * Getter Method
         */
        service_object.getExhibits = function() {
            exhibits = storageService.loadData('exhibits', {
              update_function: service_object.reloadData
            });
            console.log("Exponate", exhibits.exhibits);
          return exhibits;
        };
        
        
        return service_object;
    });