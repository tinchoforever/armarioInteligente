angular.module('armarioApp.controllers')
  .controller('LoaderController',
    function($scope, $location, $timeout, clothesService) {
    clothesService.clearCallbacks();
    $scope.counter = 120;
    $scope.clothes = 1;
    $scope.items = [];

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

    clothesService.subscribe(function(id){
         $scope.clothes++;
         $scope.items.push(clothesService.get(id));
         $scope.counter = 200;
    });



});