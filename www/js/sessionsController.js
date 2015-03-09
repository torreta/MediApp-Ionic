angular.module('sessions',['ngStorage'])

.controller('sessionController', function($scope,$http,$location,$localStorage, Api,$ionicPopup){

  var BASE_URL = Api.api_url;

  $scope.login = function(user){
    $scope.user = [];
    $localStorage.token = [];

    $http({
      method: 'POST',
      url: BASE_URL + '/sessions',
      headers:{
        'email': user.email,
        'password': user.password
      }
    })
    .success(function(data,status,headers,config){

      $localStorage.token = data.token;
      $localStorage.id = data.user.id;
      $localStorage.email = data.user.email;
      $localStorage.name = data.user.name;
      $location.path('/');
    })
    .error(function(data,status,headers,config){
      var alertPopup = $ionicPopup.alert({
        title: 'Wrong Email or Password',
        buttons:[{
          text: 'Try again',
          type: 'button-positive'
        }]
      });
    });
  };



});