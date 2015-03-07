
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

      if (window.cordova) {
        db = $cordovaSQLite.openDB({ name: "my.db" }); //device
        console.log("opening bd devise");
      }else{
        db = window.openDatabase("my.db", '1.0', 'my', 1024 * 1024 * 100); // browser
         //db =  window.sqlitePlugin.openDatabase({name: "my.db", location: 1});
        console.log("opening bd windows");
      }
      //session
       $cordovaSQLite.execute(db,
        "CREATE TABLE IF NOT EXISTS session " +
            "(id integer primary key, token text");
            console.log("table session");


       $cordovaSQLite.execute(db,
        "CREATE TABLE IF NOT EXISTS people " +
            "(id integer primary key, firstname text, " +
            "lastname text)");
       //medications
       // $cordovaSQLite.execute(db,
       //  "CREATE TABLE IF NOT EXISTS medication " +
       //      "(id integer primary key, name text, " +
       //      "description text)");
       //treatments
       // $cordovaSQLite.execute(db,
       //  "CREATE TABLE IF NOT EXISTS people " +
       //      "(id integer primary key, medication_name text, " +
       //      "finish date, hour time, frequency integer)");
       //sessions

    });


  })

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

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
        templateUrl: "templates/session/recover.html",
        controller: 'userController'
      })

      .state('userEdit', {
        url: "/profile",
        templateUrl: "templates/user/edit.html",
        controller: 'userController'
      })

      .state('home', {
        url: "/",
        templateUrl: "templates/treatment/index.html",
        controller: 'treatmentController'
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
