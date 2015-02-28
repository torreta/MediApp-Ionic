angular.module('users',[])

.controller('userController', function($scope,$http,$location){

	var BASE_URL = "http://torreta-163528.sae1.nitrousbox.com/api/v1";

	$scope.create = function(user){
 	$scope.user = [];

	    $http({
	      method: 'POST',
	      url: BASE_URL + '/users',
	      params:{
	      	'name': user.name,
	        'email': user.email,
	        'password': user.password,
	        'password_confirmation': user.password_confirmation
	      }
	    })
	    .success(function(data,status,headers,config){
	      console.log( "User created" );
	      console.log( data );
	      $scope.user = data
	      //console.log( "inside scope, email: "+$scope.user.email+ ", token: "+ $scope.user.token  );
	      $location.path('/login'); 
	      //deberiamos enviar el mensaje de CREADO!
	    })
	    .error(function(data,status,headers,config){
	      console.log( "error creating user" );
	      $location.path('/signup'); 
	      // If user doesnt have a token, create one and signin
	      //$scope.loginPOST();
	    });//http

  }; //create user


});//controller
