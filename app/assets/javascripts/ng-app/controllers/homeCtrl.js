"use strict";
(function(){
	angular.module('affApp')
	.controller('HomeCtrl', [
		'$scope',
		'$http',
		function ($scope, $http) {

				// scope variables
				$scope.selectedIndex;
				$scope.keywords = '';
				$scope.artists;
				$scope.locations = [];

				var searcher = document.querySelector(".search-box");

				// searches through all artists and brings back individual objects with
				// // info and list of collaborators
				$scope.search = function(){
					$scope.artists = [];
					if($scope.keywords.length >= 1){
						$http.get('/artists', {params: {search: $scope.keywords}}).then(
							function(res){
							$scope.artists = res.data;
						},
						function(error){
							console.log(error);
						});
					}
				}

				// trigger ng-show to display the collaborators for each artist on click
				$scope.showCollabs = function(index){
					var collabs = getCollabs(index);
					var artistLocations = getLocations(collabs);
				}

				// grab the collaborators for a selected artist
				function getCollabs(index){
					return $scope.artists[index].collabs;
				}

				// grab the city and country of each collaborator
				function getLocations(collabArray){
					$scope.locations = [];
					collabArray.forEach(function(collab){
						var locationObj = {};
						locationObj.name = collab.name;
						locationObj.id = collab.id;
						// grab geocode api response and parse results to get long / lat
						geoCode(collab.city, collab.country, function(res){
							// put long / lat into an object
								locationObj.latitude = res.data.results[0].geometry.location.lat;
								locationObj.longitude = res.data.results[0].geometry.location.lng;
						} )
						// put object into an array
						$scope.locations.push(locationObj);
					})
					console.log($scope.locations);
					return $scope.locations;
				}

				// use the city and country in call to geocode api
				function geoCode(city, country, callback){
					return $http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + city + ",+" + "country")
							 .then(callback, function(error){
								 console.log(error);
							 });
				}



		}
	]);
})();
