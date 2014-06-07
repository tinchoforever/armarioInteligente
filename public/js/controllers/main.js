angular.module('armarioApp.controllers')
  .controller('MainController', function($scope, $location, clothesService) {

 clothesService.subscribe(function(e,d){
    $scope.$apply(function(){
          clothesService.clearCallbacks();
          $location.path('/loader');
    });
  });


});

