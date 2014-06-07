angular.module('armarioApp.controllers')
  .controller('GalleryController', function($scope, $timeout, $location, clothesService) {

    $scope.items= [];
    for (var i = 0; i < 10; i++) {
      $scope.items.push({
        title: "Remera " + i,
        src: "http://mla-s1-p.mlstatic.com/remera-gap-original-talle-s-importada-nueva-cetiquetas-9320-MLA20015754075_122013-O.jpg"
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

