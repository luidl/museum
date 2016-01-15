angular.module("museum")
    .factory('target_groupsService', function($rootScope, $http, storageService, serverAddress, restEndpoint, visitorService) {
        //Init of Service
        var target_groups = { };
        target_groups.data = { };
        
        //Service Functions
        var service_object = {};
    
      
        /**
         * Reload the data
         */
        service_object.reloadData = function() {
          $http.get(serverAddress + restEndpoint + '/target_groups' + visitorService.getLanguageUrl())
            .success(function(data) {
                target_groups.data = data;
                storageService.saveData('target_groups', target_groups);
                $rootScope.$broadcast('scroll.refreshComplete');
            });
        };

        /**
         * Load Data from Sotrage or Ressource
         */
        service_object.getData = function() {
            target_groups = storageService.loadData('target_groups', {
                update_function: service_object.reloadData
            });
        };


        /**
         * Getter Method
         */
        service_object.getTarget_groups = function() {
            service_object.getData();
          return target_groups;
        };


        /**
         * Get Target Group By ID
         */
        service_object.getTarget_groupById = function(id) {
            //service_object.getData();
            var output = {};
            angular.forEach(target_groups.data, function(value, key) {
               if(value.tid == id) {
                   output = value;
                   return;
               }
            });
            return output;
        };


        return service_object;
    });