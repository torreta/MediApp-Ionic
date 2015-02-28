angular.module('users',['ngStorage'])

.controller('userController', function($scope,$http,$location,$localStorage){

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
	      $scope.user.token = data.token
	      console.log( "inside scope, email: "+$scope.user.email+ ", token: "+ $scope.user.token  );
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

  	$scope.update = function(user){
 	// $scope.user = [];
 		console.log("Updating Try");
 		console.log("token: " + $localStorage.token );
	    $http({
	      method: 'PUT',
	      url: BASE_URL + '/users/1',
	      headers:{
       	 'token': $localStorage.token
      	  },
	      params:{
	      	'name': user.name,
	        'email': user.email,
	        'password': user.password,
	        'password_confirmation': user.password_confirmation
	      }	    
	    })
	    .success(function(data,status,headers,config){
	      console.log( "User updated" );
	      console.log( data );
	      $scope.user = data
	      //console.log( "inside scope, email: "+$scope.user.email+ ", token: "+ $scope.user.token  );
	      $location.path('/'); 
	      //deberiamos enviar el mensaje de CREADO!
	    })
	    .error(function(data,status,headers,config){
	      console.log( "error updating user" );
	      $location.path('/profile'); 
	      // If user doesnt have a token, create one and signin
	      //$scope.loginPOST();
	    });//http

  }; //update user





});//controller
