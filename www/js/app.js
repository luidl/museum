// Ionic Museum App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('museum', ['ionic', 'museum.controllers', 'pascalprecht.translate', 'ngCordova'])

.run(function($ionicPlatform, $state, $ionicLoading, $rootScope, visitorService, preloadService) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

      if(!visitorService.getLanguage()) {
          $state.go("app.language-selector");
      }

      preloadService.run();

  });
})

.config(function($stateProvider, $urlRouterProvider, $translateProvider) {
    $translateProvider.useStaticFilesLoader({
        prefix: 'translations/',
        suffix: '.json'
    });

    $translateProvider.preferredLanguage('de');

  $stateProvider
    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })

      .state('app.start', {
        url: '/start',
        views: {
          'menuContent': {
            templateUrl: 'templates/start.html',
            controller: 'startCtrl'
          }
        }
      })

      .state('app.language-selector', {
          url: '/language-selector',
          views: {
              'menuContent': {
                  templateUrl: 'templates/language-selector.html',
                  controller: 'languageSelectorCtrl'
              }
          }
      })

     .state('app.target_groups', {
          url: '/target_groups',
          views: {
            'menuContent': {
              templateUrl: 'templates/target_groups.html',
              controller: 'target_groupsCtrl'
            }
          }
        })

       .state('app.exhibits', {
          url: '/exhibits',
          views: {
            'menuContent': {
              templateUrl: 'templates/exhibits.html',
              controller: 'exhibitsCtrl'
          }
          }
        })

      .state('app.exhibits-detail', {
          url: '/exhibits/:exhibitId',
          views: {
              'menuContent': {
                  templateUrl: 'templates/exhibits-detail.html',
                  controller: 'exhibitsDetailCtrl'
              }
          }
      })

      .state('app.scan-exhibit', {
          url: '/scan-exhibit',
          views: {
              'menuContent': {
                  templateUrl: 'templates/scan-exhibit.html',
                  controller: 'scanExhibitCtrl'
              }
          }
      })
 
     .state('app.departments', {
          url: '/departments',
          views: {
            'menuContent': {
              templateUrl: 'templates/departments.html',
              controller: 'departmentsCtrl'
            }
          }
        })

    .state('app.departments-detail', {
      url: '/departments/:departmentId',
      views: {
          'menuContent': {
              templateUrl: 'templates/departments-detail.html',
              controller: 'departmentsDetailCtrl'
          }
      }
    })

     .state('app.tours', {
          url: '/tours/:target_groupId',
          views: {
            'menuContent': {
              templateUrl: 'templates/tours.html',
              controller: 'toursCtrl'
            }
          }
        })

    .state('app.tour', {
      url: '/tour/:tourId',
      views: {
          'menuContent': {
              templateUrl: 'templates/tour.html',
              controller: 'tourCtrl'
          }
      }
    })

      .state('app.news', {
          url: '/news',
          views: {
              'menuContent': {
                  templateUrl: 'templates/news.html',
//          controller: 'NewssCtrl'
              }
          }
      })
 
    .state('app.infos', {
      url: '/infos',
      views: {
        'menuContent': {
          templateUrl: 'templates/infos.html',
          controller: 'infosCtrl'
        }
      }
    })

      .state('app.info-detail', {
          url: '/infos/:infoId',
          views: {
              'menuContent': {
                  templateUrl: 'templates/infos-detail.html',
                  controller: 'infosDetailCtrl'
              }
          }
      })

      .state('app.quiz', {
          url: '/quiz',
          views: {
              'menuContent': {
                  templateUrl: 'templates/quiz.html',
                  controller: 'quizCtrl'
              }
          }
      })

      .state('app.quiz-detail', {
          url: '/quiz/:quizId',
          views: {
              'menuContent': {
                  templateUrl: 'templates/quiz-detail.html',
                  controller: 'quizDetailCtrl'
              }
          }
      })

  
  .state('app.map', {
    url: '/map',
    views: {
      'menuContent': {
        templateUrl: 'templates/map.html',
//        controller: 'MapCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/start');
});
