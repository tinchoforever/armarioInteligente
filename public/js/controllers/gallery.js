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


    $scope.torso= [];

    $scope.torso.push({
      title: "Campera Azul",
      src: "/img/clothes/campera-azul-1.JPG"
    });
    $scope.torso.push({
      title: "Campera Blanca",
      src:  "/img/clothes/campera-blanca.JPG"
    });
    $scope.torso.push({
      title: "Sweater Rosa",
      src:  "/img/clothes/sweter-rosa.JPG"
    });

    $scope.pantalones= [];

    $scope.pantalones.push({
      title: "Jean Chupin Desgastado",
      src: "/img/clothes/jean-sin-rayas.JPG"
    });
    $scope.pantalones.push({
      title: "Jean Azul",
      src:  "/img/clothes/pantalon-2.JPG"
    });
    $scope.pantalones.push({
      title: "Jean Recto",
      src:  "/img/clothes/pantalon-1.JPG"
    });

    $scope.shoes= [];


    $scope.shoes.push({
      title: "Botas Cordones",
      src:  "/img/clothes/botas-cordones-1.JPG"
    });

    $scope.shoes.push({
      title: "Botas Evillas",
      src:  "/img/clothes/botas-evishas.JPG"
    });

    $scope.shoes.push({
      title: "Zapatillas Nike Free",
      src: "/img/clothes/zapatillas.png"
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

