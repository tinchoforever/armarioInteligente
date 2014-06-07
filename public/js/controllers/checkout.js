angular.module('armarioApp.controllers')
  .controller('CheckoutController',
    function($scope, $location, $timeout, clothesService) {


    $scope.counter = 200;
    $scope.clothes = clothesService.clothes.length;

    $scope.items= clothesService.clothes;


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
      for (var i = 0; i < $scope.items.length; i++) {
        var c = $scope.items[i];
        if(c.id.indexOf(id)> 0){
          $scope.items.splice(i, 1);
        }
        if ($scope.items.length === 0){
            $location.path('/thanks');
        }
      };
      $scope.counter = 200;

    });

});