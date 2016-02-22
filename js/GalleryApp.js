var app = angular.module('GalleryApp', ['ngRoute']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'HomeController', 
      templateUrl: 'views/home.html' 
    }) 
    .otherwise({ 
      redirectTo: '/' 
    }); 
});

/*
var app = angular.module("GalleryApp", ['ngRoute']);
         app.config(['$routeProvider', function($routeProvider) {
            $routeProvider.
            
            when('/addStudent', {
               controller: 'HomeController', 
                templateUrl: 'views/home.html' 
                //templateUrl: 'addStudent.htm' 
            }).
            
            when('/viewStudents', {
               templateUrl: 'viewStudents.htm',
               controller: 'ViewStudentsController'
            }).
            
            otherwise({
               redirectTo: '/addStudent'
            });
         }]);
*/