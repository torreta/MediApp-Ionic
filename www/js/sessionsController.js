angular.module('sessions',[])

.controller('sessionController', function($scope,$http,$location){

  var BASE_URL = "http://torreta-163528.sae1.nitrousbox.com/api/v1";

 $scope.login = function(user){
 	$scope.user = [];
 	// $scope.auth = this.auth;

    $http({
      method: 'POST',
      url: BASE_URL + '/sessions',
      headers:{
        'email': user.email,
        'password': user.password
      }
    })
    .success(function(data,status,headers,config){
      console.log( "Session created" );
      console.log( data );
      $scope.user.token = data.token;
      $scope.user.email = data.user.email;
      //console.log( "inside scope, email: "+$scope.user.email+ ", token: "+ $scope.user.token  );
      $location.path('/medications'); 
      //deberiamos enviar el mensaje de CREADO!
    })
    .error(function(data,status,headers,config){
      console.log( "error Login" );
      // If user doesnt have a token, create one and signin
      //$scope.loginPOST();
    });

  }; //create session



 });//controller


