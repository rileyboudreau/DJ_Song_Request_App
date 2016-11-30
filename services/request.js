angular.module('dj_song_request').factory('request', function($firebaseArray, $firebaseObject) {
	var requestRef = firebase.database().ref().child("requests");

	var request = {
		requests: [],

		addNewrequest: function(newrequest) {
			return request.requests.$add(newrequest);
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

		checkSpencer: function() {
			var spencerRef = requestRef.child('-KX76sTC5sPdonN1PoPO');
			var spencer = $firebaseObject(spencerRef);
			return spencer.$loaded().then(function(data) {
				console.log("This is Spencer's name: "+spencer.name);
				console.log(spencer);
			 	return data;
			});
		},
	};

	request.requests = $firebaseArray(requestRef);

	return request;
});