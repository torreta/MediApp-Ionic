angular.module('mediapp', ['ionic','medications'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)

      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }

      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault(); 
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('login', {
        url: "/login",
        templateUrl: "templates/session/login.html"
      })

      .state('signup', {
        url: "/signup",
        templateUrl: "templates/user/new.html"
      })

      .state('recover', {
        url: "/recover",
        templateUrl: "templates/session/recover.html"
      })

      .state('userEdit', {
        url: "/profile",
        templateUrl: "templates/user/edit.html"
      })

      .state('home', {
        url: "/",
        templateUrl: "templates/treatment/index.html"
      })

      .state('newTreatment', {
        url: "/treatment/new",
        templateUrl: "templates/treatment/new.html"
      })

      .state('newMedication', {
        url: "/medications/new",
        templateUrl: "templates/medication/new.html"
      })

      .state('medications', {
        url: "/medications",
        templateUrl: "templates/medication/index.html",
        controller: 'medicationController'
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/dash');

  });
