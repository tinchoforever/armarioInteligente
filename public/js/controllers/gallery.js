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
      src:  "/img/clothes/pantalon-recto.png"
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
      title: "Cartera de Cuero",
      src: "/img/clothes/accesorio-1.jpg"
    });
    $scope.accesories.push({
      title: "Cinturon Cuero",
      src:  "/img/clothes/accesorio-3.jpg"
    });
    $scope.accesories.push({
      title: "Collar cubo",
      src:  "/img/clothes/accesorio-4.jpg"
    });

    $scope.show = function(i){
      var before = i-1;
        $("#owl-demo-1").hide();
        $("#owl-demo-2").hide();
        $("#owl-demo-3").hide();
        $("#owl-demo-4").hide();
        $("#owl-demo-" + before).hide();
        $("#owl-demo-" + i).show();

    }
    $scope.back = function(i){

        $("#owl-demo-1").hide();
        $("#owl-demo-2").hide();
        $("#owl-demo-3").hide();
        $("#owl-demo-4").hide();
        $("#owl-demo-" + i).show();



    }


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
      $("#owl-demo-2").hide();
      $("#owl-demo-3").hide();
      $("#owl-demo-4").hide();


  },1000);

});

