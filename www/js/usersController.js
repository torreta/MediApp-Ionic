angular.module('users',['ngStorage'])

.controller('userController', function($scope,$http,$location,$localStorage, Api, AuthService){

	var BASE_URL = Api.api_url;

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
			$scope.user.token = data.token;
			$location.path('/login');
		})
		.error(function(data,status,headers,config){
			$location.path('/signup');
		});
	};

	$scope.update = function(user){
		$http({
			method: 'PUT',
			url: BASE_URL + '/users/1',
			headers:{
				'token': AuthService.token
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
			$location.path('/');
		})
		.error(function(data,status,headers,config){
			$location.path('/profile');
		});
	};
	
});
