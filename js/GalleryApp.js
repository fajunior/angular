/*var app = angular.module('GalleryApp', ['ngRoute']);

app.config(function ($routeProvider) { 
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider 
    .when('/aaa', { 
      controller: 'HomeController', 
      templateUrl: 'views/home.html' 
    }) 
   .when('/addStudent', {
               templateUrl: 'addStudent.htm',
               controller: 'AddStudentController'
            }).
    .otherwise({ 
      //redirectTo: '/' 
      controller: 'HomeController', 
      templateUrl: 'views/home.html'
    }); 
});
*/
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
