angular.module('petcare.controllers', [])

.controller('PetViewController', function ($scope, $http) {

  $http.get('http://petcare-dev23cc.rhcloud.com/mock-pets').success(function (response) {
    $scope.pets = response;
  }).catch(function(response) {
    console.error('error', response.status, response.data, response.config, response.headers);
  })
  })

 .controller('PetsCtrl', function($scope) {

 })



.controller('AddPetController', function($scope, $http) {

    // create a blank object to handle form data.
      $scope.pet = {};
    // calling our submit function.
      $scope.submitForm = function() {
      // Posting data to php file
    /*
      $scope.pictureUrl = 'http://placehold.it/300x300';

      $scope.takePicture = function() {
        var options = {
          destinationType: Camera.destinationType.DATA_URL, 
          encodingType: Camera.EncodingType.JPEG
        }
        $cordovaCamera.getPicture(options)
          .then(function(data) {
            console.log('camera data: ' + angular.toJson(data));
            $scope.pictureUrl = 'data:image/jpeg;base64,' + data;
          },  function(error) {
            console.log('camera error: ' + angular.toJson(data));
          });
      };
    */
      $http({        method  : 'POST',

        url     : 'http://petcare-dev23cc.rhcloud.com/new/pet',
        data    : $scope.pet //forms user object

  }
       ).success(function(data) {
         console.log("lol pet");
         console.log($scope.pet);
          if (data.errors) {
            // Showing errors.
            $scope.errorName = data.errors.name;
            $scope.errorUserName = data.errors.username;
            $scope.errorEmail = data.errors.email;

            console.log("Showing errors.");
            console.log($scope);

          } else {
            $scope.message = data.message;
          }
        });
      };

      



})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  // $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AboutCtrl', function($scope) {
  // $scope.settings = {
  //   enableFriends: true
  // };
})
