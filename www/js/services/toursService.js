angular.module("museum")
    .factory('toursService', function($rootScope, $http, storageService, serverAddress, restEndpoint, visitorService) {
        //Init of Service
        var tours = { };
        tours.data = { };
        
        //Service Functions
        var service_object = {};
    
      
        /**
         * Reload the data
         */
        service_object.reloadData = function() {
          $http.get(serverAddress + restEndpoint + '/tours/all' + visitorService.getLanguageUrl())
            .success(function(data) {
                tours.data = data;
                storageService.saveData('tours', tours);
                $rootScope.$broadcast('scroll.refreshComplete');
            });
        };

        /**
         * Load Data from Sotrage or Ressource
         */
        service_object.getData = function() {
            tours = storageService.loadData('tours', {
                update_function: service_object.reloadData
            });
        };


        /**
         * Getter Method
         */
        service_object.getTours = function() {
            service_object.getData();
          return tours;
        };


        /**
         * Get Tour By ID
         */
        service_object.getTourById = function(id) {
            service_object.getData();
            var output = {};
            angular.forEach(tours.data, function(value, key) {
/*                console.log(value.nid, id);*/
                if(value.nid == id) {
                   output = value;
//                   return;
               }
            });
            return output;
        };

       /**
         * Get Tours By Target Group ID
         */
        service_object.getToursByTargetgroupId = function(target_group_id) {

            var output = [];
            angular.forEach(tours.data, function(value, key) {
                if(value.target_group_id == target_group_id) {
                    output.push(value);
                }
            });
            return output;
        };


        return service_object;
    });