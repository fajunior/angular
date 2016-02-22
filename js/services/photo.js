app.factory('photos', ['$http', function($http) {
  //return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json')
    return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/forecast.json')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);