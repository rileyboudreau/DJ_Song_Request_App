angular.module('dj_song_request').controller('dj_dashboardController', function($scope, request) {
	
	$scope.requestsList = request.getrequests();

	$scope.removeRequest = request.removerequest();
});
