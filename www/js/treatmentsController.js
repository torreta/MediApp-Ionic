angular.module('treatments',['ngStorage'])

.controller('treatmentController', function($scope,$http,$location,$localStorage, Api, Utils){

  var BASE_URL = Api.api_url;

  // Values for add treatment form
  $scope.hours = Utils.hours;
  $scope.frequencies = Utils.frequencies;
  $scope.treatment = {
    hour: $scope.hours[9],
    frequency: $scope.frequencies[0]
  };

  // Get Treatments
  $http({
    method: 'GET',
    url: BASE_URL + '/treatments',
    headers:{
      'token': $localStorage.token
    }
  })
  .success(function(data,status,headers,config){
    $scope.treatments = data;
  })
  .error(function(data,status,headers,config){
  });

  $scope.create = function(treatment){
    $scope.treatments = [];

    $http({
      method: 'POST',
      url: BASE_URL + '/treatments',
      headers:{
        'token': $localStorage.token
      },
      params:{
        'medication_name': treatment.medication,
        'finish': treatment.finish,
        'hour': treatment.hour.id,
        'frequency': treatment.frequency.id
      }
    })
    .success(function(data,status,headers,config){
      $scope.treatments = data;
      $location.path('/');
    })
    .error(function(data,status,headers,config){
    });
  };
});