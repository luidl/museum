angular.module("museum")
.factory('storageService', function($rootScope, cacheExpiry) {
    
    var service_object = {};
    
    var key_settings = {};
    /**
     * DEFINES SETTINGS FOR EACH KEY
     *
     * Needed Variables
     *    @param string key
     *        defines a key to store and find data.
     *        
     *    @param object settings
     *        settings to set
     *        settings.expiry: Override the default expiry time for a key. 'none' for endless
     */
    service_object.setKeySettings = function(key, settings) {
      if (!(key in key_settings)) {
          key_settings[key] = { };
      }
      angular.extend(key_settings[key], settings);
    }
    
    
    
    
    /**
     * SAVES DATA IN HTML5 LOCAL STORAGE
     *
     * Needed Variables
     *    @param string key
     *        defines a key to store and find data.
     *        
     *    @param object save_data
     *        the new data to save
     *
     *  @call: normally in $http .success() functions to refresh this storage
     * 
     */
    service_object.saveData = function(key, save_data) {
            var data = {};
            data.data = save_data;
            data.last_sync = new Date();
            window.localStorage[key] = JSON.stringify(data);
    }
    
    /**
     * LOAD DATA OUT OF HTML5 LOCAL STORAGE
     *
     * Needed Variables
     *    @param string key
     *        defines a key to store and find data.
     *        
     *    @param object attributes:
     *        a bunch of attributes to configure the storage
     *        Possible values:
     *          - attributes.update_function: a function witch updates and delegate the scope.
     *
     *    @call: in the getter function of a Service to get stored Data or to update via the given function
     */
    service_object.loadData = function(key, attributes) {
          var data = {};
          data = JSON.parse(window.localStorage[key] || '{}');
          if (!attributes) {
            attributes = {};
          }
        
          if (data.hasOwnProperty('data')) {
              //check expiery of cache
              var expiry = cacheExpiry;
              if ((key in key_settings) && key_settings[key].hasOwnProperty('expiry')) {
                  expiry = key_settings[key].expiry;
              }

              var now = new Date();
              var last = new Date(data.last_sync);
              if (expiry != "none" && now > new Date(last.setMinutes(last.getMinutes()+expiry))) {
                //is expired
                if (typeof attributes.update_function === "function") {
                  attributes.update_function();
                }
                
              }
          } else {
            if (typeof attributes.update_function === "function") {
              attributes.update_function();
            }
            
            if (!data.hasOwnProperty('data')) {
              data.data = {error: "no datas found"};
              console.error("No data to load was found. Internet connection?");
            }
            
          }
        return data.data;
    }
    
    
    return service_object;
})


.directive('imageSrc', ['storageService', function(storageService) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs, controllers) {
      //var imageData = storageService.loadData(attrs.imageSrc, {
      //    update_function: function() {
      //      return "test";
      //    }
      //});
      
      var img = new Image,
      //an image that has the proper CORS response header
      src = attrs.imageSrc,
      cvs = document.createElement("canvas"),
      ctx = cvs.getContext('2d');
  
      console.log("IMAGE ATTR", attrs.imageSrc);
  
      img.crossOrigin = "Anonymous";
      
      
      img.onload = function() {
        console.log("IMG ONLOAD IS FIRED");
        ctx.drawImage( img, 100, 100 );
        var dataURL = cvs.toDataURL();
        console.log("DATA URL", dataURL);
  
        attrs.$set('src', dataURL);
        
        console.log("IMAGE BASE64", imageData);
        attrs.$set('src', imageData);
      }
      
      if ( img.complete || img.complete === undefined ) {
          img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
          img.src = src;
      }
      
      attrs.$set('src', attrs.imageSrc);
      
      
      
    }
  };
}]);