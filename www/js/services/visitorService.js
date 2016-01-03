angular.module("museum")
    .factory('visitorService', function($rootScope, storageService, $translate) {
        //Collection of User Information:
        var visitor = {
            language: false,
            in_museum: false,
            last_visit: false
        };

        if(!storageService.loadData('visitor').error) {
            visitor = storageService.loadData('visitor');
            $translate.use(visitor.language);
        }
        
        //Service Functions
        var service_object = {};
    
      
        /**
         * save the data
         */
        service_object.saveData = function() {
            storageService.saveData('visitor', visitor);
        };

        /**
         * Load Data from Sotrage or Ressource
         */
        service_object.getData = function() {
            return visitor;
        };

        /**
         * GET LANGUAGE
         */
        service_object.getLanguage = function() {
            return visitor.language;
        }

        /**
         * GET LANGUAGE
         */
        service_object.getLanguageUrl = function() {
            var output = "";
            if(visitor.language) {
                output = "/" + visitor.language;
                console.log("URL:", output);
                if(visitor.language == "de") {
                    output = "";
                }
            }
            return output;
        }

        /**
         * SET LANGUAGE
         */
        service_object.setLanguage = function(country) {
            storageService.clear();
            visitor.language = country;
            service_object.saveData();
        }



        return service_object;
    });