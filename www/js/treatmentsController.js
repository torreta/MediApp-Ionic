angular.module('treatments',['ngStorage'])

.controller('treatmentController', function($scope,$http,$location,$localStorage, Api, Utils){

	var BASE_URL = Api.api_url;

  $scope.hours = Utils.hours;
  $scope.frequencies = Utils.frequencies;
  $scope.treatment = {
    hour: $scope.hours[9],
    frequency: $scope.frequencies[0]
  };
  $scope.getMedications = function(){
    console.log( "Searching treatments" );
    $scope.treatments = [];

    $http({
      method: 'GET',
      url: BASE_URL + '/treatments',
      headers:{
       	'token': $localStorage.token
      }
    })
    .success(function(data,status,headers,config){
      console.log( data );
      $scope.treatments = data;
    })
    .error(function(data,status,headers,config){
      // If user doesnt have a token, create one and signin
      //$scope.loginPOST();
    });

  }; //get medications




});//controller
