angular.module('armarioApp.controllers', []);
angular.module('armarioApp.factories', []);

angular.module('armarioApp', [
  'ngRoute',
  'armarioApp.controllers',
  'armarioApp.factories'])
  .config(['$routeProvider',
    function($routeProvider){
      $routeProvider
      .when('/',{
         templateUrl:'partials/hola.html',
         controller: 'MainController'
      }).when('/loader',{
         templateUrl:'partials/loader.html',
         controller: 'LoaderController'
      }).when('/thanks',{
         templateUrl:'partials/thanks.html',
         controller: 'ThanksController'
      }).when('/gallery',{
         templateUrl:'partials/gallery.html',
         controller: 'GalleryController'
      });
}]);


