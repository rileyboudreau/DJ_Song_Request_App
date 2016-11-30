angular.module('dj_song_request').controller('dj_dashboardController', function($scope) {
	
	$scope.requestsList = request.getrequests();
});
