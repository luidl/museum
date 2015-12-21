angular.module("museum")
    .constant("serverAddress", "http://pmwordp.pm.private.hm.edu")
    .constant("documentRoot", "/")
    .constant("restEndpoint", "/rest")
    .constant("cacheExpiry", 0) //in Minutes -1 deactivate
     
    .constant('USER_ROLES', {
      admin: 'admin_role',
      student: 'student_role',
      prof: 'prof_role'
    });