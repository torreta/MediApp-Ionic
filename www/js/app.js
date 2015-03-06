
var db = null;

angular.module('mediapp', ['ionic','ngCordova','ngStorage','medications','sessions','users','treatments','mediapp.services'])

  .run(function($ionicPlatform, $cordovaSQLite) {
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
      
      //  db = $cordovaSQLite.openDB("my.db"); //phone
      db = window.openDatabase("my.db", "1.0", "my.db", 10000);//serve

       $cordovaSQLite.execute(db,
        "CREATE TABLE IF NOT EXISTS people " +
            "(id integer primary key, firstname text, " +
            "lastname text)");
    });


  })

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('home', {
        url: "/",
        templateUrl: "templates/treatment/index.html",
        controller: 'treatmentController'
      })
      .state('login', {
        url: "/login",
        templateUrl: "templates/session/login.html",
        controller: 'sessionController'
      })

      .state('signup', {
        url: "/signup",
        templateUrl: "templates/user/new.html",
        controller: 'userController'
      })

      .state('recover', {
        url: "/recover",
        templateUrl: "templates/session/recover.html"
      })
      .state('userEdit', {
        url: "/profile",
        templateUrl: "templates/user/edit.html",
        controller: 'userController'
      })
      .state('newTreatment', {
        url: "/treatment/new",
        templateUrl: "templates/treatment/new.html",
        controller: 'treatmentController'
      })

      .state('newMedication', {
        url: "/medications/new",
        templateUrl: "templates/medication/new.html",
        controller: 'medicationController'
      })
      .state('medications', {
        url: "/medications",
        templateUrl: "templates/medication/index.html",
        controller: 'medicationController'
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');

  });
