//Module is setup here with ngRoute dependency injection
var app = angular.module("simmsPortfolio", ["ngRoute"]);

// Creates the route, add new location routes here
app.config(function($routeProvider) {



     $routeProvider.when("/about", {
        templateUrl: "./views/about.html",
        controller: 'portController'

    });

     $routeProvider.when("/devprojects", {
        templateUrl: "./views/about.html",
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
        templateUrl: "./views/photos.html",
        controller: 'artController'
    
     $routeProvider.when("/studio",{
        templateUrl: "./views/photos.html",
        controller: 'portController'
    });

    //Main Page View


     $routeProvider.otherwise({
        templateUrl: "./views/about.html",
        controller: 'portController'

    });
});

app.controller('portContoller', function($scope){

$scope.devprojectImages = [

{
    title: ,
    url: , 
    caption: , 
},
{
    title: ,
    url: , 
    caption: , 
},
{
    title: ,
    url: , 
    caption: , 
},
{
    title: ,
    url: , 
    caption: , 
},

];

$scope.objectImages = [];

$scope.musicImages = [];

$scope.videoImages =  [];

$scope.studioImages = [];

});