// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('petCare', ['ionic'])

.controller('PetController', function ($scope, $http) {
  console.log("a");

  $http.get('http://petcare-dev23cc.rhcloud.com/mock-pets').success(function (response) {
    $scope.pets = response;
  }).catch(function(response) {
    console.error('error', response.status, response.data, response.config, response.headers);
  });
  /*  $scope.success = function() {

      //$scope.$apply is needed to trigger the digest cycle when the geolocation arrives and to update all the watchers
      $scope.$apply(function(response) {

            .finally(function() {
              console.log("finally finished");
            });
      });
    }
*/
  })

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });


})
