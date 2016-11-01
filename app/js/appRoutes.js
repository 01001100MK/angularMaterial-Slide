angular.module('appRoutes', [])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		// default page
		.when('/', {
			template:'<div><home-form></home-form></div>'
		})

	// To eliminate # characters from urls (eg. www.google.com/#/login)
	$locationProvider.html5Mode(true);
}]);
