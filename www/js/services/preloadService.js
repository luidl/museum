angular.module("museum")
    .factory('preloadService', function($rootScope, $http, $ionicLoading, storageService, serverAddress, restEndpoint, visitorService) {

        //Service Functions
        var service_object = {};

        var private_object = {};

        var number_of_requests = 2;
        var ready_loaded = 0;

        /**
         * Load the Data for Exhibitions
         */
        private_object.loadExhibits = function() {
            var output = storageService.loadData('exhibits', {
                update_function: function () {
                    $http.get(serverAddress + restEndpoint + '/exponate' + visitorService.getLanguageUrl(),
                        {
                            header: {
                                "Content-Type": "application/json; charset=UTF-8",
                                "Accept-Charset": "charset=utf-8"
                            }
                        })
                        .success(function (data) {
                            var exhibits = { exhibits: data };
                            storageService.saveData('exhibits', exhibits);
                            //$rootScope.$broadcast('scroll.refreshComplete');
                            ready_loaded++;
                            private_object.isLoadComplete();
                        });
                }
            });

            if(angular.isObject(output)) {
                ready_loaded++;
                private_object.isLoadComplete();
            }
        };

        /**
         * Load the Data for Departments
         */
        private_object.leadDepartments = function () {
            var output = storageService.loadData('departments', {
                update_function: function () {
                    $http.get(serverAddress + restEndpoint + '/departments' + visitorService.getLanguageUrl())
                        .success(function (data) {
                            var departments = { data: data };
                            storageService.saveData('departments', departments);
                            ready_loaded++;
                            private_object.isLoadComplete();
                        });
                }
            });

            if(angular.isObject(output)) {
                ready_loaded++;
                private_object.isLoadComplete();
            }
        }

        /**
         * Check if Load is complete
         */
        private_object.isLoadComplete = function() {
            var output = false;
            if(ready_loaded == number_of_requests) {
                $ionicLoading.hide();
                $rootScope.$broadcast('preload.complete');
                output = true;
            }

            return output;
        }

        /**
         * Run the Preload Process
         */
        service_object.run = function() {
            $ionicLoading.show({
                template: 'Loading...'
            });


            private_object.leadDepartments();
            private_object.loadExhibits();
        }




        return service_object;
    });