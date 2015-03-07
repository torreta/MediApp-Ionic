angular.module('sessions',['ngStorage'])

.controller('sessionController', function($scope,$http,$location,$localStorage, Api){

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
      $location.path('/');
    })
    .error(function(data,status,headers,config){

    });
  };

  $scope.logout = function(){
    delete $localStorage.token;
    $location.path('/login');
  };

});