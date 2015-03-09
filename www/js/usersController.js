angular.module('users',['ngStorage'])

.controller('userController', function($scope,$http,$location,$localStorage, Api,$ionicPopup,$cordovaSQLite,$cordovaLocalNotification){

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
			var alertPopup = $ionicPopup.alert({
		    	title: 'Successful update!'
		    });
		    alertPopup.then(function(res) {
		    	$localStorage.email= data.email;
	     		$localStorage.name = data.name;
				$location.path('/profile');
		    });
		})
		.error(function(data,status,headers,config){
			var alertPopup = $ionicPopup.alert({
		    	title: 'Something went wrong. Try again!'
		    });
		});
	};

	$scope.logout = function(){
		var alertPopup = $ionicPopup.alert({
			title: 'Really? =('
		});
		alertPopup.then(function(res) {
			delete $localStorage.token;
			delete $localStorage.id;
			delete $localStorage.email;
			delete $localStorage.name;
			$location.path('/login');
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
			$scope.user = data;
			$location.path('/login');
			var alertPopup = $ionicPopup.alert({
		    	title: 'Recovery mail delivered!'
		    });
		})
		.error(function(data,status,headers,config){
			var alertPopup = $ionicPopup.alert({
		    	title: 'Invalid mail, Try again!'
		    });
		});
	};

	$scope.createNotification = function(){


	    var tiempo = new Date();
	    tiempo.setMinutes(tiempo.getMinutes() + 1);
	    $cordovaLocalNotification.add({
	        id: 1,
	        title: "Take your Treatment",
	        date: tiempo,
	        message: "Pill time",
	    }).then(function () {

	        var alertPopup = $ionicPopup.alert({
		    	title: 'Notification Created'
		    });
	    });

	};


});
