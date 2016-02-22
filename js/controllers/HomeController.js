app.controller('HomeController', ['$scope', 'photos', function($scope, photos) {
  photos.success(function(data) {
    $scope.photos = data;
    $scope.message = "This page will be used to display add student form";
  });
}]);

app.controller('AddStudentController', function($scope) {
            $scope.message = "This page will be used to display add student form";
         });