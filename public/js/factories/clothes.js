angular.module('armarioApp.factories')
  .factory('clothesService', function($http){
  console.log('clotheservice');
  var factory = {};
  factory.clothes = [];
  factory.clothes.push({
    title: "Cartera Cuero",
    id: "0C0034928822",
    src: "/img/clothes/accesorio-1.jpg"
  });
  factory.clothes.push({
    title: "Zapatillas Nike Free",
    id: "0C006244577D",
    src: "/img/clothes/zapatillas.png"
  });
  factory.clothes.push({
    title: "Campera Blanca",
    id: "0C00622A91D5",
    src: "/img/clothes/campera-blanca.jpg"
  });
  factory.clothes.push({
    title: "Camperita Azul 1 ",
    id: "0C00416F6D4F",
    src: "/img/clothes/campera-azul-1.JPG"
  });
  factory.clothes.push({
    title: "Remera Rayadas",
    id: "0C00505FF5F6",
    src: "/img/clothes/remera-rayada.jpg"
  });
  factory.clothes.push({
    title: "Jean Chupin",
    id: "0C0047D252CB",
    src: "/img/clothes/jean-sin-rayas.JPG"
  });




  var socket = new io.connect("http://localhost:3000");
  socket.on('new-clothe', function(msg){
    console.log('new-clothe', msg);
    factory.callback(msg.id);
  });
  factory.subscribe = function(callback){
    factory.callback = callback;
  };
  factory.onId = function(callback){
    factory.idCallback = callback;
  };
  factory.clearCallbacks = function(){
    factory.callback = function(){};
    factory.idCallback = function(){};
  };
  factory.get = function(id){
    for (var i = 0; i < factory.clothes.length; i++) {
      //HACK: because id's are not sooo cool
      if(factory.clothes[i].id.indexOf(id) > 0){
        return factory.clothes[i];
      }
    };
    return factory.clothes[0];
  }
  factory.clearCallbacks();

  return factory;
});