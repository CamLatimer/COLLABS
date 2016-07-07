"use strict";
(function(){
	angular.module('affApp')
	.controller('HomeCtrl', [
		'$scope',
		'$http',
		function ($scope, $http) {

				// scope variables
				$scope.keywords;
				$scope.artists;

				// searches through all artists and brings back individual objects with
				// // info and list of collaborators
				$scope.search = function(){
					$scope.affiliates = [];
					$http.get('/artists', {params: {search: $scope.keywords}}).then(
						function(res){
						$scope.artists = res.data;
					},
					function(error){
						console.log(error);
					});
				}

				// trigger ng-show to display the collaborators for each artist on click
				$scope.showCollabs = function(context, index){
					if(context.showing === true){
						context.showing = false;
					} else {
						context.showing = true;
					}
					var collabs = getCollabs(index);
					var locations = getLocations(collabs);
					getGeocodeRes(locations);
				}

				/*  goal: display a marker on the map for each of an artist's collaborators
        		problem: how to use google maps geocode api to grab long / lat and
        		use that data with the googlemaps-ui directive to make markers
        		approach:

				* 		grab long and lat for each one of the collaborators of a selected artist
							and put them into an array to use with googlemaps-ui markers directvie
								grab the collaborators for a selected artist
								grab the city and country of each collaborator
								use the city and country in call to geocode api
					  		grab geocode api response and parse results to get long / lat
								put long / lat into an object
								put object into an array
        */

				// grab the collaborators for a selected artist
				function getCollabs(index){
					return $scope.artists[index].collabs;
				}

				// grab the city and country of each collaborator
				function getLocations(collabArray){
					var locations = [];
					collabArray.forEach(function(collab){
						var locationObj = {};
						locationObj.name = collab.name;
						locationObj.city = collab.city;
						locationObj.country = collab.country;
						locations.push(locationObj);
					})
					return locations;
				}

				// use the city and country in call to geocode api
				function geoCode(city, country, callback){
					return $http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + city + ",+" + country)
							 .then(callback);
				}

				// grab geocode api response and parse results to get long / lat
				function getGeocodeRes(locationsArray){
					locationsArray.forEach(function(obj){
						geoCode(obj.city, obj.country, function(res, obj){
								obj.latitude = res.data.results[0].geometry.location.lat;
								obj.longitude = res.data.results[0].geometry.location.lng;
						});
						console.log(obj);
					})
				}



		}
	]);
})();
