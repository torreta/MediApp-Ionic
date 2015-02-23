angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('MedicineCtrl', function($scope, Medicine) {
  $scope.medicines = Medicines.all();
  $scope.remove = function(medicine) {
    Medicine.remove(medicine);
  }
})
.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('MedicationCtrl', function($scope,$stateParams, $http) {
  $scope.medications = [];

   $http

      .get('http://torreta-163528.sae1.nitrousbox.com/api/v1/medications', {cache: true})
        .then(function(response){
          $scope.medications = response.data;
            console.log(response.data);
        });

   $http({
      method: 'GET',
      url:'http://torreta-163528.sae1.nitrousbox.com/api/v1/medications',
    })
    .success(function(data,status,headers,config){
      console.log( data );
      $scope.medications = data;
    })
    .error(function(data,status,headers,config){
      // If user doesnt have a token, create one and signin
      //$scope.loginPOST();
    });

})


.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
