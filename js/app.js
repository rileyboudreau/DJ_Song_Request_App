var app = angular.module('dj_song_request', [
	'ngRoute',
	'firebase',
]);

angular.module('dj_song_request').config(function($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl: 'templates/main.html',
		controller: 'MainController',
		resolve: {
	  		AuthWaitForLogged: function(Auth) {
	  			return Auth.getAuth().$waitForSignIn();
	  		}
		}
	})
	.when('/pricing', {
		templateUrl: 'templates/pricing.html',
		controller: 'pricingController',
	})
	.when('/dj_dashboard', {
		templateUrl: 'templates/dj_dashboard.html',
		controller: 'dj_dashboardController',
	})
	.when('/login', {
		templateUrl: 'templates/login.html',
		controller: 'LoginController',
		resolve: {
			AuthLogged: function(Auth) {
	            return Auth.isLoggedIn();
	        }
		}
	})
	.otherwise('/')
});
