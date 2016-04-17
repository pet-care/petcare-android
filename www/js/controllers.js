angular.module('petcare.controllers', [])

.controller('PetViewController', function ($scope, $http) {

  $http.get('http://petcare-dev23cc.rhcloud.com/mock-pets').success(function (response) {
    $scope.pets = response;
  }).catch(function(response) {
    console.error('error', response.status, response.data, response.config, response.headers);
  })
  })

 .controller('PetsCtrl', function($scope) {
//   // create a blank object to handle form data.
//     $scope.pet = {};
//   // calling our submit function.
//     $scope.submitForm = function() {
//     // Posting data to php file
//     $http({
//       method  : 'POST',
//       url     : 'http://petcare-dev23cc.rhcloud.com/new/pet',
//       data    : $scope.pet, //forms user object
// }
//      ).success(function(data) {
//         if (data.errors) {
//           // Showing errors.
//           $scope.errorName = data.errors.name;
//           $scope.errorUserName = data.errors.username;
//           $scope.errorEmail = data.errors.email;
//         } else {
//           $scope.message = data.message;
//         }
//       });
//     };
// });
//
//
 })

.controller('AddPetCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // $scope.chats = Chats.all();
  // $scope.remove = function(chat) {
  //   Chats.remove(chat);
  // };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  // $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AboutCtrl', function($scope) {
  // $scope.settings = {
  //   enableFriends: true
  // };
})
