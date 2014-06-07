angular.module('armarioApp.controllers')
  .controller('ThanksController', function($scope, $timeout, clothesService,  $location) {
    clothesService.clearCallbacks();
    $scope.counter = 5;
    $scope.onTimeout = function(){

      if ($scope.counter-1 < 0){
        //Save points and freeze screen...
        $location.path('/');
      }
      else {
        $scope.counter--;
        mytimeout = $timeout($scope.onTimeout,1000);
      }
    }
    var mytimeout = $timeout($scope.onTimeout,1000);




});