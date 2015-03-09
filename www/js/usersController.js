angular.module('users',['ngStorage'])

.controller('userController', function($scope,$http,$location,$localStorage, Api,$ionicPopup){

	var BASE_URL = Api.api_url;
	$scope.user = {
		name: $localStorage.name,
		email: $localStorage.email,
	};
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
			var alertPopup = $ionicPopup.alert({
		    	title: 'Successful sign up!'
		    });
		    alertPopup.then(function(res) {
		    	$scope.user.token = data.token;
		    	$location.path('/login');
		    });
		})
		.error(function(data,status,headers,config){
			var alertPopup = $ionicPopup.alert({
		    	title: 'Something went wrong. Try again!'
		    });
		});
	};

	$scope.update = function(user){
		$http({
			method: 'POST',
			url: BASE_URL + '/users/update_profile',
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
			$scope.user = data;
			$location.path('/profile');
			var alertPopup = $ionicPopup.alert({
		    	title: 'Successful update!'
		    });
		})
		.error(function(data,status,headers,config){
			var alertPopup = $ionicPopup.alert({
		    	title: 'Something went wrong. Try again!'
		    });
		});
	};

	$scope.recover = function(user){
		$http({
		method: 'GET',
		url: BASE_URL + '/users/recover_password',
		params:{
		'email': user.email
		}
		})
		.success(function(data,status,headers,config){
		//console.log( "inside scope, email: "+$scope.user.email+ ", token: "+ $scope.user.token );
		$location.path('/login');
		//deberiamos enviar el mensaje de CREADO!
			var alertPopup = $ionicPopup.alert({
			    	title: 'Successfully mailed!'
			  });
		})
		.error(function(data,status,headers,config){
		$location.path('/login');
		var alertPopup = $ionicPopup.alert({
		    	title: 'Something went wrong. Try again!'
		});
		
		});
	}; 
	
});
