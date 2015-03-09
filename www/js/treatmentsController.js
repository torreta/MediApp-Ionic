angular.module('treatments',['ngStorage'])

.controller('treatmentController', function($scope,$http,$location,$localStorage, Api, Utils, $ionicPopup, $cordovaSQLite){

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

  $scope.treatments = [];
  // Get Treatments
  $http({
    method: 'GET',
    url: BASE_URL + '/treatments',
    headers:{
      'token': $localStorage.token
    }
  })
  .success(function(data,status,headers,config){

    for (i = 0; i < data.length; i++) {
      $scope.search(data[i].medication, data[i].hour, data[i].frequency, data[i].finish);
    }

  })
  .error(function(data,status,headers,config){
    $scope.select();
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
        $scope.insert(treatment.finish,treatment.hour.id,treatment.frequency.id,treatment.medication_name);
      });
    })
    .error(function(data,status,headers,config){
      $scope.insert(treatment.finish,treatment.hour.id,treatment.frequency.id,treatment.medication_name);
    });
  };

  $scope.delete = function(treatment){
    $http({
      method: 'DELETE',
      url: BASE_URL + '/treatments/treatment_delete',
      headers:{
        'token': $localStorage.token
      },
      params:{
        'medication_name': treatment.medication,
        'finish': treatment.finish,
        'hour': treatment.hour,
        'frequency': treatment.frequency
      }
    })
    .success(function(data,status,headers,config){
      var alertPopup = $ionicPopup.alert({
        title: 'Treatment Deleted',
      });
      alertPopup.then(function(res) {
        $scope.destroy(treatment.medication,treatment.hour, treatment.frequency,treatment.finish);
      });
    })
    .error(function(data,status,headers,config){
      $scope.destroy(treatment.medication,treatment.hour, treatment.frequency,treatment.finish);
    });
  };


  // **** Local Database ****

  // Insert in local database if no internet
  $scope.insert = function(finish,hour,frequency,name) {

    aux = new Date(finish);
    aux2 = aux.getFullYear()+"-"+(aux.getMonth()+1)+"-"+aux.getDate();
   
    var query1 = "SELECT id FROM treatments WHERE medication = ? AND hour = ? AND frequency = ? AND deleted = 0";
   
    $cordovaSQLite.execute(db, query1, [name, hour, frequency]).then(function(res) {
      if(res.rows.length > 0) {

      }else{

        var query = "INSERT INTO treatments (finish,hour,frequency,medication,deleted) VALUES (?,?,?,?,0)";
        $cordovaSQLite.execute(db, query, [aux2,hour,frequency,name]).then(function(res) {
          $scope.select();
        }, function (err) {
          console.log(err);
          var alertPopup = $ionicPopup.alert({
            title: 'Something went wrong',
            buttons:[{
              text: 'Try again',
              type: 'button-positive'
            }]
          });
        });
        
      }
    }, function (err) {
    });

  }

  // Search in local database
  $scope.search = function(name, hour, frequency, finish) {
    var query = "SELECT id FROM treatments WHERE medication = ? AND hour = ? AND frequency = ?  AND deleted = 0";
    $cordovaSQLite.execute(db, query, [name, hour, frequency]).then(function(res) {
      if(res.rows.length > 0) {
        $scope.select();
      }else{
        $scope.insert(finish,hour,frequency,name);
      }
    }, function (err) {
    });
  }


  // Get local database if no internet
  $scope.select = function() {
    $scope.treatments = [];
    var query = "SELECT * FROM treatments WHERE deleted = 0";
    $cordovaSQLite.execute(db, query).then(function(res) {
        if(res.rows.length > 0) {
           $scope.treatments = [];
          for(i = 0; i < res.rows.length; i++ ){
            $scope.treatments.push(res.rows.item(i));
            console.log($scope.treatments);
          }
        } else {
          // $scope.treatments = [];
        }
    }, function (err) {

    });
  }

  // Delete data from local database
  $scope.destroy = function(name, hour, frequency, finish) {
    var query = "UPDATE treatments SET deleted = 1 WHERE medication = ? AND hour = ? AND frequency = ?";
    $cordovaSQLite.execute(db, query, [name, hour, frequency]).then(function(res) {
      var alertPopup = $ionicPopup.alert({
        title: 'Treatment Deleted',
      });
      alertPopup.then(function(res) {
        $scope.select();
      });
    }, function (err) {
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
