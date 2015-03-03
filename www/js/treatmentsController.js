angular.module('treatments',['ngStorage'])

.controller('treatmentController', function($scope,$http,$location,$localStorage, Api, Utils){

	var BASE_URL = Api.api_url;

  $scope.hours = Utils.hours;
  $scope.frequencies = Utils.frequencies;
  $scope.treatment = {
    hour: $scope.hours[9],
    frequency: $scope.frequencies[0]
  };
  $scope.getTreatments = function(){
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

  }; //get treatments

  $scope.create = function(treatment){
    console.log( "Creating a new treatment for current user" );
    console.log( treatment );
    $scope.treatments = [];

    $http({
      method: 'POST',
      url: BASE_URL + '/treatments',
      headers:{
        'token': $localStorage.token
      },
      params:{
        'medication_name': treatment.medication_name,
        'finish': treatment.finish,
        'hour': treatment.hour.id,
        'frequency': treatment.frequency.id
      }
    })
    .success(function(data,status,headers,config){
      console.log( data );
      $scope.treatments = data;
      $location.path('/'); 
    })
    .error(function(data,status,headers,config){
      // If user doesnt have a token, create one and signin
      //$scope.loginPOST();
    });

  }; //create treatments


});//controller
