angular.module('treatments',['ngStorage'])

.controller('treatmentController', function($scope,$http,$location,$localStorage, Api, Utils, $ionicPopup, $timeout){

  var BASE_URL = Api.api_url;

  // Values for add treatment form
  $scope.hours = Utils.hours;
  $scope.frequencies = Utils.frequencies;
  $scope.treatment = {
    hour: $scope.hours[9],
    frequency: $scope.frequencies[0]
  };

  // List options
  $scope.shouldShowDelete = true;
  $scope.listCanSwipe = true;

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
    var alertPopup = $ionicPopup.alert({
      title: 'Error',
      template: 'We couldn\' get your treatments. Please, try again.'
    });
    confirmPopup.then(function(res) {
      if (res) {
        $location.path('/');
      }
    });
  });

  $scope.create = function(treatment){

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
      var alertPopup = $ionicPopup.alert({
        title: 'New treatment added!',
      });
      alertPopup.then(function(res) {
        $location.path('/');
      });
    })
    .error(function(data,status,headers,config){

      var alertPopup = $ionicPopup.alert({
        title: 'Something went wrong',
        buttons:[{
          text: 'Try again',
          type: 'button-positive'
        }]
      });

    });
  };



});
