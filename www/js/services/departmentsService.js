angular.module("museum")
    .factory('departmentsService', function($rootScope, $http, storageService, serverAddress, restEndpoint, visitorService) {
        //Init of Service
        var departments = { };
        departments.data = { };
        
        //Service Functions
        var service_object = {};
    
      
        /**
         * Reload the data
         */
        service_object.reloadData = function() {
          $http.get(serverAddress + restEndpoint + '/departments' + visitorService.getLanguageUrl())
            .success(function(data) {
                departments.data = data;
                storageService.saveData('exhibits', departments);
                $rootScope.$broadcast('scroll.refreshComplete');
            });
        };

        /**
         * Load Data from Sotrage or Ressource
         */
        service_object.getData = function() {
            departments = storageService.loadData('departments', {
                update_function: service_object.reloadData
            });
        };


        /**
         * Getter Method
         */
        service_object.getDepartments = function() {
            service_object.getData();
          return departments;
        };


        /**
         * Get Department By ID
         */
        service_object.getDepartmentById = function(id) {
            //service_object.getData();
            var output = {};
            angular.forEach(departments.data, function(value, key) {
               if(value.tid == id) {
                   output = value;
                   return;
               }
            });
            return output;
        };


        return service_object;
    });