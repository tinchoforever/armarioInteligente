angular.module('armarioApp.controllers')
  .controller('CheckoutController',
    function($scope, $location, $timeout, clothesService) {


    $scope.counter = 15;
    $scope.clothes = 0;


    $scope.items= [];
    for (var i = 0; i < 10; i++) {
      $scope.items.push({
        title: "Remera " + i,
        src: "http://mla-s1-p.mlstatic.com/remera-gap-original-talle-s-importada-nueva-cetiquetas-9320-MLA20015754075_122013-O.jpg"
      });
    }
    $scope.onTimeout = function(){
      if ($scope.items.length > 1){
        $scope.items.pop();
      }
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