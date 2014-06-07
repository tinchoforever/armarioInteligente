angular.module('armarioApp.controllers')
  .controller('LoaderController',
    function($scope, $location, $timeout, clothesService) {


    $scope.counter = 15;
    $scope.clothes = 1;


    $scope.onTimeout = function(){

      if ($scope.counter-1 < 0){
        $scope.loading = true;
        clothesService.clearCallbacks();
        $location.path('/thanks');
      }
      else {
        $scope.counter--;
        mytimeout = $timeout($scope.onTimeout,1000);
      }
    }
    var mytimeout = $timeout($scope.onTimeout,1000);

    clothesService.subscribe(function(e,d){
      $scope.$apply(function(){
           $scope.clothes++;
           $scope.counter = 15;

      });
    });



});