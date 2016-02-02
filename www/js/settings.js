angular.module("museum")
    .constant("serverAddress", "http://pmwordp.pm.private.hm.edu")
    .constant("documentRoot", "/")
    .constant("restEndpoint", "/rest")
    .constant("cacheExpiry", 60*3); //in Minutes -1 deactivate