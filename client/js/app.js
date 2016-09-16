var app = angular.module('app', ['lbServices','ui.router', 'ngMap']);

app.config(['$urlRouterProvider', '$stateProvider',  function($urlRouterProvider, $stateProvider){
	$urlRouterProvider.otherwise('/');

	var home = {
		name: 'home',
		url: '/',
		templateUrl: 'views/home.html'
	}
	var orderPlace = {
		name: 'order-place',
		url: '/order-place',
		templateUrl: 'views/order-place.html'
	}
	var currentOrder = {
		name: 'current-order',
		url: '/current-order',
		templateUrl: 'views/current-order.html'
	}
	var success = {
		name: 'success',
		url: '/success',
		templateUrl: 'views/success.html'
	}

	$stateProvider.state(home);
	$stateProvider.state(orderPlace);
	$stateProvider.state(currentOrder);
	$stateProvider.state(success);
}]);

app.controller('currentOrderCtrl', function(NgMap) {
  NgMap.getMap().then(function(map) {
    console.log(map.getCenter());
    console.log('markers', map.markers);
    console.log('shapes', map.shapes);    
  });
});






