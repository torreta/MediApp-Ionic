var db = null;
angular.module('mediapp', ['ionic','ngCordova','ngStorage','medications','sessions','users','treatments','mediapp.services'])

.run(function($ionicPlatform,$rootScope,$localStorage,$location, $cordovaSQLite) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    // Database
    if (window.cordova) {
      db = $cordovaSQLite.openDB("local.db");
    }else{
      db = window.openDatabase("local.db", "1.0", "local.db", 10000);
    }

    $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS treatments (id integer primary key, start text, finish text, hour text, frequency integer, medication text, deleted integer)");

    // Filters
    $rootScope.$on("$stateChangeStart",function (event, toState, toParams, fromState, fromParams) {
      // Restrict all private URLs for not authorized users
      if(!$localStorage.token){
        $location.path('/login');
      }
      // Restrict all public URLs for authorized users
      if($localStorage.token && (toState.name === 'login' || toState.name === 'signup' || toState.name === 'recover')){
        $location.path('/');
      }
    });


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
      templateUrl: "templates/session/recover.html"
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

    .state('editTreatment', {
      url: "/treatment/edit",
      templateUrl: "templates/treatment/edit.html",
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
