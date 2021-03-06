//Module is setup here with ngRoute dependency injection
var app = angular.module("simmsPortfolio", ["ngRoute"]);

// Creates the route, add new location routes here
app.config(function($routeProvider) {

    $routeProvider.when("/home", {
        templateUrl: "./views/home.html",
        controller: 'portController'

    });

     $routeProvider.when("/about", {
        templateUrl: "./views/about.html",
        controller: 'portController'

    });

     $routeProvider.when("/devprojects", {
        templateUrl: "./views/devprojects.html",
        controller: 'portController'

    });

     $routeProvider.when("/objects",{
    	templateUrl: "./views/objects.html",
    	controller: 'portController'
    });


     $routeProvider.when("/video",{
        templateUrl: "./views/video.html",
        controller: 'portController'
    });

      $routeProvider.when("/music",{
        templateUrl: "./views/music.html",
        controller: 'portController'
    });

     $routeProvider.when("/studio",{
        templateUrl: "./views/studio.html",
        controller: 'portController'
    });


    //Main Page View


     $routeProvider.otherwise({
        templateUrl: "./views/home.html",
        controller: 'portController'

    });
});

app.controller('portController', function($scope){

$scope.devprojectImages = [
{
  title: "currentSEE",
  imageUrl: "media/images/currentsee.png",
  link: "",
  caption: ""
},
{
  title: "Pizza Conglomo",
  imageUrl: "media/images/pizzaconglomo.png",
  link: "",
  caption: ""
},
{
  title: "Woodward Avenue Cinema",
  imageUrl: "media/images/woodwardcinema.png",
  link: "",
  caption: ""
}

];

$scope.objectImages = [];

$scope.musicImages = [];

$scope.videoImages =  [];

$scope.studioImages = [];

});