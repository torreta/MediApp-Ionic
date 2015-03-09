angular.module('medications',[])

.controller('medicationController', function($scope,$http,$location, Api){

    var BASE_URL = Api.api_url;

  //Consultos la agencias que se encuentran en el API
  $scope.getMedications = function(){
    console.log( "Searching Medications" );
    $scope.medications = [];

    $http({
      method: 'GET',
      url: BASE_URL + '/medications',
    })
    .success(function(data,status,headers,config){
      console.log( data );
      $scope.medications = data;
    })
    .error(function(data,status,headers,config){
      // If user doesnt have a token, create one and signin
      //$scope.loginPOST();
    });

  }; //get medications

  $scope.addMedication = function(medication){
    $http({
      method: 'POST',
      url: BASE_URL + '/medications',
      params:{
        'name': medication.name,
        'description': medication.description
      }
    })
    .success(function(data,status,headers,config){
      console.log( "Medication created" );
      console.log( data );
      medication = [];
      $location.path('/medications'); 
      //deberiamos enviar el mensaje de CREADO!
    })
    .error(function(data,status,headers,config){
      console.log( "error creating Medication" );
      // If user doesnt have a token, create one and signin
      //$scope.loginPOST();
    });

  }; //add medications

  $scope.deleteMedication = function(medication){
    //console.log( "show en localst:" + localStorage.getItem("id") );
      console.log("About to delete medication of name: " + medication.name );
    if( confirm("you truly want to delete the medication?!") ){
      $http({
        method: 'DELETE',
        url: BASE_URL + '/medications/1'
      })

      .success(function(data,status,headers,config){
        console.log( "Medication Deleted successfully" );
        console.log( data );
        medication = [];
      })

      .error(function(data,status,headers,config){
        console.log( "Error deleting medication" );
        // If user doesnt have a token, create one and signin
        //$scope.loginPOST();
      });
    };
  }; //delete medications




  // $scope.setMedication = function(id){

  //   localStorage.setItem("id",id);

  //   console.log( "coloque con exito el valor " + localStorage.getItem("id")  );



  // }; //add medications





  // $scope.showMedication = function(){



  //   //console.log( "show en localst:" + localStorage.getItem("id") );



  //   if(localStorage.getItem("id") == undefined){



  //     //console.log( "intente leer una agencia pero no habia valor" );

  //     //localStorage.removeItem("id");



  //   }else{

  //       console.log("buscoAgencia de valor+ "+localStorage.getItem("id") );

  //     $http({

  //       method: 'GET',

  //       url: BASE_URL + '/medications/'+localStorage.getItem("id")+".json",

  //     })

  //     .success(function(data,status,headers,config){

  //       console.log( "agencia consultada con exito" );

  //       console.log( data );

  //       $scope.medication = data;



  //       if(localStorageService.isSupported){

  //           //console.log("Soporta Storage Service");

  //           localStorage.setItem("id",$scope.medication.id);



  //           // si te provoca borrar: localStorage.removeItem("id");

  //           // localStorage.removeItem("id");

  //         }else{

  //           alert("Your browser does not support localStorage");

  //         }

  //       //deberiamos enviar el mensaje de CREADO!

  //     })

  //     .error(function(data,status,headers,config){

  //       console.log( "error consulta agencia" );

  //       // If user doesnt have a token, create one and signin

  //       //$scope.loginPOST();

  //     });

  //   };



  // }; //show medications





  // $scope.updateMedication = function(medication){



  //   //console.log( "show en localst:" + localStorage.getItem("id") );



  //   if(localStorage.getItem("id") == undefined){



  //     console.log( "intente leer una agencia pero no habia valor" );

  //     //localStorage.removeItem("id");



  //   }else{

  //       console.log("busco actualizar Agencia de valor "+localStorage.getItem("id") );

  //     $http({

  //       method: 'PUT',

  //       url: BASE_URL + '/medications/'+localStorage.getItem("id")+".json",

  //       params:{

  //       'name': $scope.medication.name,

  //       'phone': $scope.medication.phone,

  //       'address': $scope.medication.address

  //       }

  //     })

  //     .success(function(data,status,headers,config){

  //       console.log( "Medication updated successfully" );

  //       console.log( data );

  //       $scope.medication = data;



  //       if(localStorageService.isSupported){

  //           //console.log("Soporta Storage Service");

  //           localStorage.setItem("id",$scope.medication.id);



  //           //si te provoca borrar: localStorage.removeItem("id");

  //            localStorage.removeItem("id");



  //             $location.path('/medications');  

  //         }else{

  //           alert("Your browser does not support localStorage");

  //         }

  //       //deberiamos enviar el mensaje de CREADO!

  //     })

  //     .error(function(data,status,headers,config){

  //       console.log( "error updating medication" );

  //       // If user doesnt have a token, create one and signin

  //       //$scope.loginPOST();

  //     });

  //   };



  // }; //update medications






  







  });//controller


