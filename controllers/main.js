angular.module('dj_song_request').controller('MainController', function($scope, Auth, AuthWaitForLogged, request) {
	
	if (AuthWaitForLogged == null) {

		// nobody is logged in
		$scope.isLoggedIn = false;
	}
	else {

		// somebody is logged in
		$scope.isLoggedIn = true;
		$scope.currentUser = Auth.checkUser(AuthWaitForLogged);
		
		$scope.welcomeMessage = "Hey "+$scope.currentUser.display_name;
	}

	console.log('isLoggedIn');
	console.log($scope.isLoggedIn);

	$scope.requestsList = request.getrequests();

	$scope.songRequest = {
        song: '',
        artist: ''
    };

	$scope.addSongRequest = function() {

		if ($scope.songRequest.song == "" || $scope.songRequest.artist == "") {
			alert("Please enter all required information");
		}
		else {
			request.addSongRequest($scope.songRequest).then(function() {
				console.log("Added!");
			});
		}
	};

	$scope.showUpdaterequest = function(request_id) {
		$scope.updaterequest = request.getrequest(request_id);
		$("#updateModal").modal('show');
	};

	$scope.updateTherequest = function(therequest) {
		request.saverequest(therequest).then(function() {
			alert("All good!");
		});
	};
});




















