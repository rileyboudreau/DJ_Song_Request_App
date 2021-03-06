angular.module('dj_song_request').factory('request', function($firebaseArray, $firebaseObject) {

	var requestRef = firebase.database().ref().child("requests");

	var request = {
		requests: [],

		addSongRequest: function(songRequest) {
			return request.requests.$add(songRequest);
		},

		getrequests: function() {
			return request.requests;
		},

		getrequest: function(request_id) {
			var individualrequestRef = requestRef.child(request_id);
			return $firebaseObject(individualrequestRef);
		},

		saverequest: function(therequest) {
			return therequest.$save();
		},

		removerequest: function(request_id) {
			var individualRequestRef = requestRef.child(request_id);
			var therequest = $firebaseObject(individualRequestRef);
			return therequest.$remove();
		},
	};

	request.requests = $firebaseArray(requestRef);

	return request;
});