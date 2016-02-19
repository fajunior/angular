app.controller('MainController', ['$scope', function ($scope) {
    $scope.title = 'This Month\'s Bestsellers';
    $scope.promo = 'The most popular books this month.';
    $scope.prod = {
        name: 'The Book of Trees',
        price: 19,
        pubdate: new Date('2014', '03', '08')
    }
    $scope.products = [
        {
            name: 'The Book of Trees',
            price: 19,
            pubdate: new Date('2014', '03', '08'),
            cover: 'img/the-book-of-trees.jpg',
            likes: 0,
            dislikes: 0
  },
        {
            name: 'Program or be Programmed',
            price: 8,
            pubdate: new Date('2013', '08', '01'),
            cover: 'img/program-or-be-programmed.jpg',
            likes: 0,
            dislikes: 0
  }
];
    $scope.plusOne = function (index) {
        $scope.products[index].likes += 1;
    };
    $scope.minusOne = function (index) {
        $scope.products[index].dislikes += 1;
    };
}]);

app.controller('MainController2', ['$scope', function ($scope) {
    $scope.move = {
        icon: 'img/move.jpg',
        title: 'MOVE',
        developer: 'MOVE, Inc.',
        price: 0.99
    };

    $scope.shutterbugg = {
        icon: 'img/shutterbugg.jpg',
        title: 'Shutterbugg',
        developer: 'Chico Dusty',
        price: 2.99
    };

    $scope.gameboard = {
        icon: 'img/gameboard.jpg',
        title: 'Gameboard',
        developer: 'Armando P.',
        price: 1.99
    };
    $scope.apps = [
        {
            icon: 'img/move.jpg',
            title: 'MOVE',
            developer: 'MOVE, Inc.',
            price: 0.99
	  },
        {
            icon: 'img/shutterbugg.jpg',
            title: 'Shutterbugg',
            developer: 'Chico Dusty',
            price: 2.99
	  },
        {
            icon: 'img/gameboard.jpg',
            title: 'Gameboard',
            developer: 'Armando P.',
            price: 1.99
	  },
        {
            icon: 'img/forecast.jpg',
            title: 'Forecast',
            developer: 'Forecast',
            price: 1.99
	  }
	];
}]);

app.controller('MainController3', ['$scope', 'forecast', function ($scope, forecast) {
    forecast.success(function (data) {
        $scope.fiveDay = data;
    });
}]);
