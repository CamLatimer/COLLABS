"use strict";
(function(){
	angular.module('affApp')
	.controller('HomeCtrl', [
		'$scope',
		'$http',
		function ($scope, $http) {

				// scope variables
				$scope.selectedIndex;
				$scope.artists;

				// searches through all artists and brings back individual objects with
				// // info and list of collaborators
				$scope.search = function(){
					$scope.selectedIndex = null; // makes sure same ng-show behavior isn't present in ng repeat list when a new search is made
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
					$scope.markers = getLocations(collabs);
				}

				// grab the collaborators for a selected artist
				function getCollabs(index){
					return $scope.artists[index].collabs;
				}

				// grab the city and country of each collaborator
				function getLocations(collabArray){
					var locations = {};
					collabArray.forEach(function(collab){
						var locationObj = {};
						locations[collab.name] = locationObj;
						// grab geocode api response and parse results to get long / lat
						geoCode(collab.city, collab.country, function(res){
							// put long / lat into an object
								locationObj.lat = res.data.results[0].geometry.location.lat;
								locationObj.lng = res.data.results[0].geometry.location.lng;
								console.log(locationObj)
						})

					})
					return locations;
				}

				// use the city and country in call to geocode api
				function geoCode(city, country, callback){
					return $http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + city + ",+" + country)
							 .then(callback, function(error){
								 console.log(error);
							 });
				}



		}
	]);
})();
