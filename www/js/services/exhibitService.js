angular.module("museum")
    .factory('exhibitsService', function($rootScope, $http, storageService, serverAddress, restEndpoint, visitorService) {
        //Init of Service
        var exhibits = { };
        exhibits.exhibits = { };
        
        //Service Functions
        var service_object = {};
    
      
        /**
         * Reload the data
         */
        service_object.reloadData = function() {
          $http.get(serverAddress + restEndpoint + '/exponate' + visitorService.getLanguageUrl(),
              {header : {"Content-Type" : "application/json; charset=UTF-8", "Accept-Charset":"charset=utf-8"}})
            .success(function(data) {
                exhibits.exhibits = data;
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
            return exhibits;
        };

        /**
         * Get Exhibits By  ID
         */
        service_object.getExhibitsById = function(id) {
            service_object.getExhibits();
            var output = {};
            angular.forEach(exhibits.exhibits, function(value, key) {
                if(value.nid == id) {
                    output = value;
                    console.log("VALUE: ", value);

                    return;
                }
            });
            return output;
        };

        /**
         * Get Exhibits By Department ID
         */
        service_object.getExhibitsByDepartmentId = function(department_id) {

            var output = [];
            angular.forEach(exhibits.exhibits, function(value, key) {
                if(value.department_id == department_id) {
                    output.push(value);
                }
            });
            return output;
        };


        return service_object;
    });