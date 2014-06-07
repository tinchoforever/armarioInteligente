angular.module('armarioApp.controllers')
  .controller('GalleryController', function($scope, $timeout, $location, clothesService) {

    $scope.items= [];
    for (var i = 1 ; i < 5; i++) {
      $scope.items.push({
        title: "Remera " + i,
        src: "/img/clothes/accesorio-" + i + ".jpg"
      });
    };

    $timeout(function(){

    $("#owl-demo").owlCarousel({

      autoPlay: 5000, //Set AutoPlay to 3 seconds
      singleItem:true

    });
    $("#owl-demo").show();
  },1000);

});

