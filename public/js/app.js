var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('upload', {
			url: '/',
			templateUrl: 'views/upload.html'
		})
		.state('about', {
			url: '/about',
			templateUrl: 'views/about.html'
		})
		.state('error', {
			url: '/error',
			templateUrl: 'views/error.html'
		})
		.state('success', {
			url: '/success',
			templateUrl: 'views/success.html'
		});
});