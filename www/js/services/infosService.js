angular.module("museum")
    .factory('infosService', function($rootScope, $http, storageService, serverAddress, restEndpoint, visitorService) {
        //Init of Service
        var infos = { };
        infos.data = { };
        
        //Service Functions
        var service_object = {};

        storageService.setKeySettings('infos', {expiry: 99999});
      
        /**
         * Reload the data
         */
        service_object.reloadData = function() {
          $http.get(serverAddress + visitorService.getLanguageUrl() + restEndpoint + '/basic-informations')
            .success(function(data) {
                infos.data = data;
                storageService.saveData('infos', infos);
                $rootScope.$broadcast('scroll.refreshComplete');
            });
        };

        /**
         * Load Data from Sotrage or Ressource
         */
        service_object.getData = function() {
            infos = storageService.loadData('infos', {
                update_function: service_object.reloadData
            });
        };


        /**
         * Getter Method
         */
        service_object.getInfos = function() {
            service_object.getData();
          return infos;
        };


        /**
         * Get Department By ID
         */
        service_object.getInfoById = function(id) {
            //service_object.getData();
            var output = {};
            angular.forEach(infos.data, function(value, key) {
                console.log(value.nid, id);
               if(value.nid == id) {
                   output = value;
                   return;
               }
            });
            return output;
        };


        return service_object;
    });