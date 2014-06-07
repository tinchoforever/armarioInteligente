angular.module('armarioApp.controllers')
  .controller('GalleryController', function($scope, $timeout, $location, clothesService) {

    $scope.items= [];

    $scope.items.push({
      title: "Bufanda rosa",
      src: "/img/clothes/accesorio-2.jpg"
    });
    $scope.items.push({
      title: "Cinturon Cuero",
      src:  "/img/clothes/accesorio-3.jpg"
    });
    $scope.items.push({
      title: "Collar cubo",
      src:  "/img/clothes/accesorio-4.jpg"
    });

    $scope.accesories= [];

    $scope.accesories.push({
      title: "Bufanda rosa",
      src: "/img/clothes/accesorio-2.jpg"
    });
    $scope.accesories.push({
      title: "Cinturon Cuero",
      src:  "/img/clothes/accesorio-3.jpg"
    });
    $scope.accesories.push({
      title: "Collar cubo",
      src:  "/img/clothes/accesorio-4.jpg"
    });


    $timeout(function(){

       $("#owl-demo-1").owlCarousel({
        autoPlay: 5000, //Set AutoPlay to 3 seconds
        singleItem:true
      });

       $("#owl-demo-2").owlCarousel({
        autoPlay: 5000, //Set AutoPlay to 3 seconds
        singleItem:true
      });

       $("#owl-demo-3").owlCarousel({
        autoPlay: 5000, //Set AutoPlay to 3 seconds
        singleItem:true
      });
      $("#owl-demo-4").owlCarousel({
        autoPlay: 5000, //Set AutoPlay to 3 seconds
        singleItem:true
      });

      $("#owl-demo-1").show();
      $("#owl-demo-2").show();
      $("#owl-demo-3").show();
      $("#owl-demo-4").show();


  },1000);

});

